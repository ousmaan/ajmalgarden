/**
 * Supabase Edge Function: `identify` — private relay for plant identification.
 *
 * WHY THIS EXISTS (Google exposure notice, 2026-09-28): Pl@ntNet / Gemini keys
 * must NEVER ship in the browser bundle. This function holds them as project
 * secrets (Dashboard → Edge Functions → Secrets, or `supabase secrets set`)
 * and the site calls THIS endpoint instead of the vendors directly.
 *
 * DEPLOY (owner, one time):
 *   supabase link --project-ref <ref>
 *   supabase secrets set PLANTNET_API_KEY=… GEMINI_API_KEY=… GEMINI_MODEL=gemini-3.1-flash-lite ALLOWED_ORIGINS=https://ajmalgarden.vercel.app
 *   supabase functions deploy identify
 * Then set `VITE_IDENTIFY_PROXY_URL=https://<ref>.supabase.co/functions/v1/identify`
 * in `.env` + Vercel env and redeploy the site. No JWT verification on this
 * function (visitors are anonymous) — abuse is contained by the per-IP daily
 * cap + global cap below, and over-quota degrades to the WhatsApp handoff.
 *
 * API:
 *   GET  ?action=status            → { proxy, plantnet: bool, gemini: bool, model } (no secrets leak)
 *   POST multipart (field `images`)→ IdentificationResponse + { source, fallbackReason?, relayed: true }
 *
 * Free-tier fit: 500k invocations/mo; this endpoint costs ~1 invocation per
 * photo. PlantNet's own ~500/day quota remains the binding limit — the
 * GLOBAL_DAILY_CAP below stays just under it.
 */

const PLANTNET_ENDPOINT = "https://my-api.plantnet.org/v2/identify/all";
const GLOBAL_DAILY_CAP = 450;
const PER_IP_DAILY_CAP = 30;
const MAX_BODY_BYTES = 8 * 1024 * 1024;

interface Hit {
  count: number;
  resetAt: number;
}
const hits = new Map<string, Hit>();
let globalCount = 0;
let globalDay = "";

function todayKey(): string {
  return new Date().toISOString().slice(0, 10);
}

function checkRateLimit(ip: string): boolean {
  const today = todayKey();
  if (globalDay !== today) {
    globalDay = today;
    globalCount = 0;
  }
  if (globalCount >= GLOBAL_DAILY_CAP) return false;
  const now = Date.now();
  const hit = hits.get(ip);
  if (!hit || hit.resetAt < now) {
    // Reset at next UTC midnight (approx: 24h sliding is fine for a nursery).
    const midnight = new Date();
    midnight.setUTCHours(24, 0, 0, 0);
    hits.set(ip, { count: 1, resetAt: midnight.getTime() });
  } else {
    if (hit.count >= PER_IP_DAILY_CAP) return false;
    hit.count += 1;
  }
  globalCount += 1;
  return true;
}

function corsHeaders(req: Request): Headers {
  const origin = req.headers.get("origin") ?? "";
  const allowList = (Deno.env.get("ALLOWED_ORIGINS") ?? "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
  const headers = new Headers({
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "content-type",
    "Content-Type": "application/json",
  });
  // Unset allow-list = permissive (local dev). Set ALLOWED_ORIGINS in prod.
  if (allowList.length === 0 || allowList.includes(origin)) {
    headers.set("Access-Control-Allow-Origin", allowList.length === 0 ? "*" : origin);
  }
  return headers;
}

const json = (headers: Headers, body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status, headers });

const fail = (headers: Headers, message: string, status = 502) =>
  json(headers, { error: message }, status);

const GEMINI_PROMPT = [
  "You are a botanist. Look at the plant in the photo and identify the species.",
  "Rules:",
  "- Return a ranked list of up to 3 candidate species, most likely first.",
  '- For each entry include: scientificNameWithoutAuthor (the binomial, e.g. "Begonia rex"), genus (string), family (string), commonNames (array of English common names — may be empty), and confidence (a number from 0 to 1, always as a JSON number like 0.7, never a percentage or a string).',
  "- If the image is clearly not a plant, return { \"results\": [] } with no entries.",
  "- Base the answer on the visible plant features only. When uncertain, favour plants commonly grown in Punjab / northern Pakistan gardens and be honest about low confidence.",
].join("\n");

async function identifyPlantNet(image: Blob, filename: string) {
  const key = Deno.env.get("PLANTNET_API_KEY") ?? "";
  if (!key) return { skipped: true as const };
  const form = new FormData();
  form.append("images", image, filename);
  form.append("organs", "auto");
  // The dashboard key may sit in "expose / browser" mode with a domain
  // allowlist (see owner's CORS screenshot). Server-side fetch sends no Origin
  // by default and gets a 403 — so identify as our own authorized domain.
  // This is our key + our domain, not spoofing: it just lets the relay (which
  // holds the key privately) pass the key's own allowlist.
  const origin = Deno.env.get("RELAY_ORIGIN") ?? "https://www.ajmalgarden.com";
  let res: Response;
  try {
    res = await fetch(`${PLANTNET_ENDPOINT}?api-key=${key}&nb-results=5&lang=en`, {
      method: "POST",
      headers: { Origin: origin, Referer: `${origin}/` },
      body: form,
    });
  } catch {
    return { failed: true as const, status: "network" };
  }
  if (res.status === 429) return { quota: true as const };
  if (res.status === 403) return { rejected: true as const };
  if (!res.ok) return { failed: true as const, status: res.status };
  const payload = await res.json();
  return { ok: true as const, payload };
}

async function identifyGemini(imageBytes: ArrayBuffer, mime: string) {
  const key = Deno.env.get("GEMINI_API_KEY") ?? "";
  const model = Deno.env.get("GEMINI_MODEL") ?? "gemini-3.1-flash-lite";
  if (!key) return { skipped: true as const };
  let binary = "";
  const bytes = new Uint8Array(imageBytes);
  for (let i = 0; i < bytes.length; i += 0x8000) {
    binary += String.fromCharCode(...bytes.subarray(i, i + 0x8000));
  }
  const body = {
    contents: [
      {
        parts: [
          { text: GEMINI_PROMPT },
          { inline_data: { mime_type: mime || "image/jpeg", data: btoa(binary) } },
        ],
      },
    ],
    generationConfig: {
      responseMimeType: "application/json",
      responseSchema: {
        type: "OBJECT",
        properties: {
          results: {
            type: "ARRAY",
            items: {
              type: "OBJECT",
              properties: {
                scientificNameWithoutAuthor: { type: "STRING" },
                genus: { type: "STRING" },
                family: { type: "STRING" },
                commonNames: { type: "ARRAY", items: { type: "STRING" } },
                confidence: { type: "STRING" },
              },
              required: ["scientificNameWithoutAuthor"],
            },
          },
        },
        required: ["results"],
      },
      temperature: 0.2,
    },
  };
  const attempt = () =>
    fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`,
      {
        method: "POST",
        headers: { "x-goog-api-key": key, "Content-Type": "application/json" },
        body: JSON.stringify(body),
      },
    );

  // The free model 503s on spikes of demand — retry over ~8s before giving up
  // (the in-browser client used to do this; the relay must too, else one spike
  // reads as "services unavailable").
  const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
  let res: Response | undefined;
  let lastStatus: number | string = "network";
  for (const wait of [0, 1500, 2500, 4000]) {
    if (wait) await sleep(wait);
    try {
      res = await attempt();
      lastStatus = res.status;
      if (res.status !== 503) break;
    } catch {
      lastStatus = "network";
    }
  }
  if (!res) return { failed: true as const, status: lastStatus };
  if (res.status === 429) return { quota: true as const };
  if (res.status === 403) return { rejected: true as const };
  if (!res.ok) return { failed: true as const, status: res.status };
  const data = await res.json();
  const part = (data?.candidates?.[0]?.content?.parts ?? []).find(
    (p: { text?: unknown }) => typeof p?.text === "string",
  );
  let parsed: { results?: unknown[] };
  try {
    parsed = JSON.parse(part?.text ?? "");
  } catch {
    return { failed: true as const, status: 200 };
  }
  const results = (parsed?.results ?? []).map((item) => {
    const raw = (typeof item === "object" && item !== null ? item : {}) as Record<string, unknown>;
    const name =
      typeof raw.scientificNameWithoutAuthor === "string" ? raw.scientificNameWithoutAuthor : "Unknown";
    const genus = typeof raw.genus === "string" ? raw.genus : "";
    const family = typeof raw.family === "string" ? raw.family : "";
    const commonNames = Array.isArray(raw.commonNames)
      ? raw.commonNames.filter((c): c is string => typeof c === "string")
      : [];
    const cRaw = typeof raw.confidence === "string" ? parseFloat(raw.confidence) : raw.confidence;
    const score =
      typeof cRaw === "number" && Number.isFinite(cRaw) && cRaw > 0
        ? Math.min(1, Math.max(0, cRaw))
        : name !== "Unknown"
          ? 0.15
          : 0;
    const taxon = (n: string) => ({
      scientificNameWithoutAuthor: n,
      scientificName: n,
      scientificNameAuthorship: "",
    });
    return {
      score,
      species: { ...taxon(name), commonNames, genus: taxon(genus), family: taxon(family) },
    };
  });
  return {
    ok: true as const,
    payload: {
      bestMatch: results[0]?.species.scientificNameWithoutAuthor ?? "",
      results,
      predictedOrgans: [],
    },
  };
}

Deno.serve(async (req: Request) => {
  const headers = corsHeaders(req);
  if (req.method === "OPTIONS") return new Response(null, { status: 204, headers });

  const url = new URL(req.url);
  if (req.method === "GET" && url.searchParams.get("action") === "status") {
    return json(headers, {
      proxy: "identify-v1",
      plantnet: Boolean(Deno.env.get("PLANTNET_API_KEY")),
      gemini: Boolean(Deno.env.get("GEMINI_API_KEY")),
      model: Deno.env.get("GEMINI_MODEL") ?? "gemini-3.1-flash-lite",
    });
  }

  if (req.method !== "POST") return fail(headers, "Use POST with a photo.", 405);

  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    req.headers.get("cf-connecting-ip") ??
    "unknown";
  if (!checkRateLimit(ip)) {
    return json(
      headers,
      {
        error:
          "Today's free identification limit has been reached. Please try again tomorrow, or send us the photo on WhatsApp.",
        kind: "quota",
      },
      429,
    );
  }

  const contentLength = Number(req.headers.get("content-length") ?? 0);
  if (contentLength > MAX_BODY_BYTES) {
    return json(headers, { error: "That photo is too large. Please choose one under 8 MB.", kind: "image" }, 413);
  }

  let image: Blob | null = null;
  let filename = "plant.jpg";
  try {
    const form = await req.formData();
    const file = form.get("images");
    if (file instanceof Blob) {
      image = file;
      if (file instanceof File && file.name) filename = file.name;
    }
  } catch {
    return json(headers, { error: "Could not read that upload.", kind: "image" }, 400);
  }
  if (!image || image.size === 0) {
    return json(headers, { error: "No photo received.", kind: "image" }, 400);
  }

  // Primary: Pl@ntNet.
  try {
    const primary = await identifyPlantNet(image, filename);
    if ("ok" in primary) {
      return json(headers, { ...primary.payload, source: "plantnet", relayed: true });
    }
    // Fall back on quota OR rejected key — anything else surfaces as-is.
    const shouldFallback = "quota" in primary || "rejected" in primary || "skipped" in primary;
    if (!shouldFallback) {
      return json(
        headers,
        {
          error: "No plant was recognised in that photo. Try a clearer, well-lit shot of a single leaf or flower.",
          kind: "image",
        },
        422,
      );
    }
    const reason = "quota" in primary ? "quota" : "rejected" in primary ? "cors" : "quota";
    const debug: Record<string, unknown> = {
      plantnet:
        "quota" in primary
          ? 429
          : "rejected" in primary
            ? 403
            : "skipped" in primary
              ? "no-key"
              : "failed" in primary
                ? (primary.status ?? "error")
                : "ok",
    };
    const fallback = await identifyGemini(await image.arrayBuffer(), image.type);
    if ("ok" in fallback) {
      return json(headers, {
        ...fallback.payload,
        source: "gemini",
        fallbackReason: reason,
        relayed: true,
      });
    }
    if ("quota" in fallback) {
      return json(
        headers,
        {
          error:
            "Today's free identification limit has been reached. Please try again tomorrow, or send us the photo on WhatsApp.",
          kind: "quota",
        },
        429,
      );
    }
    return json(
      headers,
      {
        error:
          "Our identification services are temporarily unavailable. Please try again in a few minutes — or send us the photo on WhatsApp and we'll identify it for you.",
        kind: "unknown",
        // Status codes only (no secrets) — lets the next failure be diagnosed
        // without guessing which vendor stumbled.
        debug: {
          ...debug,
          gemini:
            "quota" in fallback
              ? 429
              : "rejected" in fallback
                ? 403
                : "failed" in fallback
                  ? (fallback.status ?? "error")
                  : "ok",
        },
      },
      502,
    );
  } catch {
    return fail(
      headers,
      "Couldn't reach the identification service. Check your connection and try again.",
    );
  }
});
