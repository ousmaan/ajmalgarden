/**
 * Plant identification client.
 *
 * Primary: Pl@ntNet — a specialized botanical classifier, but capped at roughly
 * 500 identifications/day per API key.
 * Fallback: a general vision model (Gemini API), used only when Pl@ntNet
 * reports quota reached (HTTP 429). It keeps the feature working after the
 * daily limit is spent, at the cost of species accuracy.
 *
 * Both keys ship in the browser by design: this site builds to a single static
 * file with no server to proxy through. Pl@ntNet locks its key to authorized
 * origins (the dashboard allowlist). The Gemini key has no origin lock, so it
 * is the more exposed of the two — anyone reading the published source can
 * spend its quota until the key is rotated. Rotate with VITE_GEMINI_API_KEY.
 */
const PLANTNET_API_KEY =
  import.meta.env.VITE_PLANTNET_API_KEY ?? "2b10TFPH6eeCZFJxMDeEW1wfQe";
const PLANTNET_ENDPOINT = "https://my-api.plantnet.org/v2/identify/all";

const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY ?? "";
// 3.6-flash's free quota ran dry on this key (429). 3.1-flash-lite is the
// working free tier: it 200s and returns clean schema JSON, unlike
// 3.5-flash-lite which mangles the response fields.
const GEMINI_MODEL = import.meta.env.VITE_GEMINI_MODEL ?? "gemini-3.1-flash-lite";
const GEMINI_ENDPOINT = (model: string) =>
  `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`;

/** Source photos above this are rejected before we try to decode them. */
export const MAX_UPLOAD_BYTES = 25 * 1024 * 1024;

export interface TaxonName {
  scientificNameWithoutAuthor: string;
  scientificNameAuthorship: string;
  scientificName: string;
}

export interface Species extends TaxonName {
  commonNames: string[];
  genus: TaxonName;
  family: TaxonName;
}

export interface IdentificationResult {
  score: number;
  species: Species;
  gbif?: { id: string };
  powo?: { id: string };
}

export interface IdentificationResponse {
  bestMatch: string;
  results: IdentificationResult[];
  predictedOrgans: { image: string; filename: string; organ: string; score: number }[];
  // Absent when the result came from the Gemini fallback — it has no shared
  // quota counter to report.
  remainingIdentificationRequests?: number;
  // Explicit origin — do not infer from remainingIdentificationRequests.
  // Legacy sessionStorage entries may lack it; identifyPlant normalizes those.
  source: "plantnet" | "gemini";
  // Only set when source === "gemini". Distinguishes daily quota (429)
  // from domain/key rejection (403) so UI copy stays accurate.
  fallbackReason?: "quota" | "cors";
}

export class IdentifyError extends Error {
  constructor(
    message: string,
    readonly kind: "quota" | "cors" | "image" | "network" | "unknown",
  ) {
    super(message);
    this.name = "IdentifyError";
  }
}

/** Downscale to a sane upload size — faster on mobile, easier on the quota. */
export async function compressImage(
  file: File,
  maxDimension = 1280,
  quality = 0.82,
): Promise<Blob> {
  let bitmap: ImageBitmap;
  try {
    bitmap = await createImageBitmap(file, { imageOrientation: "from-image" });
  } catch {
    // Most commonly a HEIC file straight off an iPhone, which Chrome and
    // Firefox cannot decode.
    throw new IdentifyError(
      "We couldn't open that photo. iPhone photos are often in HEIC format, which most browsers can't read — take a screenshot of it, or set your camera to \"Most Compatible\", and try again.",
      "image",
    );
  }

  const scale = Math.min(1, maxDimension / Math.max(bitmap.width, bitmap.height));
  const width = Math.round(bitmap.width * scale);
  const height = Math.round(bitmap.height * scale);

  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  if (!ctx) {
    bitmap.close();
    throw new IdentifyError("Could not process that image.", "image");
  }
  ctx.drawImage(bitmap, 0, 0, width, height);
  bitmap.close();

  const blob = await new Promise<Blob | null>((resolve) =>
    canvas.toBlob(resolve, "image/jpeg", quality),
  );
  if (!blob) throw new IdentifyError("Could not process that image.", "image");
  return blob;
}

/**
 * Re-identifying the same photo shouldn't cost a request. The quota is shared
 * across every visitor, so this is the cheapest protection we have. Kept in
 * sessionStorage so it survives a refresh; best-effort, never required.
 */
const CACHE_KEY = "plantnet:identify:v1";
const CACHE_LIMIT = 12;

type CacheStore = Record<string, IdentificationResponse>;

function readCache(): CacheStore {
  try {
    const raw = sessionStorage.getItem(CACHE_KEY);
    return raw ? (JSON.parse(raw) as CacheStore) : {};
  } catch {
    return {};
  }
}

function writeCache(store: CacheStore): void {
  try {
    const keys = Object.keys(store);
    for (const stale of keys.slice(0, Math.max(0, keys.length - CACHE_LIMIT))) {
      delete store[stale];
    }
    sessionStorage.setItem(CACHE_KEY, JSON.stringify(store));
  } catch {
    // Private mode or a full quota — caching is optional, so carry on.
  }
}

/** Returns null where crypto.subtle is unavailable (a non-secure origin). */
async function hash(blob: Blob): Promise<string | null> {
  if (!crypto?.subtle) return null;
  try {
    const digest = await crypto.subtle.digest("SHA-256", await blob.arrayBuffer());
    return Array.from(new Uint8Array(digest))
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");
  } catch {
    return null;
  }
}

async function identifyWithPlantNet(blob: Blob): Promise<IdentificationResponse> {
  const form = new FormData();
  form.append("images", blob, "plant.jpg");
  form.append("organs", "auto");

  // Let the browser set the multipart boundary — do not set Content-Type.
  const url = `${PLANTNET_ENDPOINT}?api-key=${PLANTNET_API_KEY}&nb-results=5&lang=en`;

  let res: Response;
  try {
    res = await fetch(url, { method: "POST", body: form });
  } catch {
    throw new IdentifyError(
      "Couldn't reach the identification service. Check your connection and try again.",
      "network",
    );
  }

  if (res.status === 403) {
    throw new IdentifyError(
      "The identification service rejected this site's key. This usually means the site's address isn't on the service's authorized list.",
      "cors",
    );
  }
  if (res.status === 429) {
    throw new IdentifyError(
      "Today's free identification limit has been reached. Please try again tomorrow, or send us the photo on WhatsApp.",
      "quota",
    );
  }
  if (res.status === 400 || res.status === 404) {
    throw new IdentifyError(
      "No plant was recognised in that photo. Try a clearer, well-lit shot of a single leaf or flower.",
      "image",
    );
  }
  if (!res.ok) {
    throw new IdentifyError("Identification failed. Please try again.", "unknown");
  }

  const payload = (await res.json()) as Omit<IdentificationResponse, "source">;
  return { ...payload, source: "plantnet" };
}

// -------- Gemini fallback --------

async function blobToBase64(blob: Blob): Promise<string> {
  const bytes = new Uint8Array(await blob.arrayBuffer());
  let binary = "";
  for (let i = 0; i < bytes.length; i += 0x8000) {
    binary += String.fromCharCode(...bytes.subarray(i, i + 0x8000));
  }
  return btoa(binary);
}

const GEMINI_PROMPT = [
  "You are a botanist. Look at the plant in the photo and identify the species.",
  "Rules:",
  "- Return a ranked list of up to 3 candidate species, most likely first.",
  '- For each entry include: scientificNameWithoutAuthor (the binomial, e.g. "Begonia rex"), genus (string), family (string), commonNames (array of English common names — may be empty), and confidence (a number from 0 to 1, always as a JSON number like 0.7, never a percentage or a string).',
  "- If the image is clearly not a plant, return { \"results\": [] } with no entries.",
  "- Base the answer on the visible plant features only. When uncertain, favour plants commonly grown in Punjab / northern Pakistan gardens and be honest about low confidence.",
].join("\n");

const GEMINI_RESPONSE_SCHEMA = {
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
          // The API sometimes returns this as a bare number despite STRING,
          // so the parser below handles both.
          confidence: { type: "STRING" },
        },
        required: ["scientificNameWithoutAuthor"],
      },
    },
  },
  required: ["results"],
};

async function identifyWithGemini(blob: Blob): Promise<IdentificationResponse> {
  const imageBase64 = await blobToBase64(blob);
  const url = GEMINI_ENDPOINT(GEMINI_MODEL);

  const attempt = () =>
    fetch(url, {
      method: "POST",
      headers: {
        // AI Studio keys (AQ.…) require the header form — the legacy ?key=
        // query param is not accepted.
        "x-goog-api-key": GEMINI_API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              { text: GEMINI_PROMPT },
              { inline_data: { mime_type: blob.type || "image/jpeg", data: imageBase64 } },
            ],
          },
        ],
        generationConfig: {
          responseMimeType: "application/json",
          responseSchema: GEMINI_RESPONSE_SCHEMA,
          temperature: 0.2,
        },
      }),
    });

  const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

  let res: Response | undefined;
  // The free model 503s on spikes of demand; retry over ~20s before giving up.
  const delays = [1500, 2500, 4000, 6000, 8000];
  for (let i = 0; i <= delays.length; i++) {
    try {
      res = await attempt();
      if (res.status !== 503) break;
    } catch {
      // fall through to retry; a persistent failure is handled below
    }
    if (i < delays.length) await sleep(delays[i]);
  }
  if (!res) {
    throw new IdentifyError(
      "Couldn't reach the identification service. Check your connection and try again.",
      "network",
    );
  }

  if (res.status === 403) {
    throw new IdentifyError(
      "The identification service rejected this site's key. Try again later, or send us the photo on WhatsApp.",
      "cors",
    );
  }
  if (res.status === 429) {
    throw new IdentifyError(
      "Today's free identification limit has been reached. Please try again tomorrow, or send us the photo on WhatsApp.",
      "quota",
    );
  }
  if (!res.ok) {
    throw new IdentifyError("Identification failed. Please try again.", "unknown");
  }

  let payload: any;
  try {
    payload = await res.json();
  } catch {
    throw new IdentifyError("The identification service returned an unreadable result.", "unknown");
  }

  const part = (payload?.candidates?.[0]?.content?.parts ?? []).find(
    (p: any) => typeof p?.text === "string",
  );
  let parsed: { results?: unknown[] } | undefined;
  try {
    parsed = JSON.parse(part?.text ?? "");
  } catch {
    throw new IdentifyError("The identification service returned an unreadable result.", "unknown");
  }

  const results = (parsed?.results ?? []).map((item): IdentificationResult => {
    if (typeof item !== "object" || item === null) {
      return {
        score: 0,
        species: {
          scientificNameWithoutAuthor: "Unknown",
          scientificName: "Unknown",
          scientificNameAuthorship: "",
          commonNames: [],
          genus: { scientificNameWithoutAuthor: "", scientificName: "", scientificNameAuthorship: "" },
          family: { scientificNameWithoutAuthor: "", scientificName: "", scientificNameAuthorship: "" },
        },
      };
    }
    const raw = item as Record<string, unknown>;
    const name = typeof raw.scientificNameWithoutAuthor === "string" ? raw.scientificNameWithoutAuthor : "Unknown";
    const genus = typeof raw.genus === "string" ? raw.genus : "";
    const family = typeof raw.family === "string" ? raw.family : "";
    const commonRaw = Array.isArray(raw.commonNames) ? raw.commonNames : [];
    const commonNames = commonRaw.filter((c): c is string => typeof c === "string");
    const confidenceRaw =
      typeof raw.confidence === "string"
        ? parseFloat(raw.confidence)
        : typeof raw.confidence === "number"
          ? raw.confidence
          : 0;
    // The free model is flaky about emitting confidence. Don't throw a
    // genuine name away because the field is missing — keep it as a low
    // "rough suggestion" instead.
    const score =
      Number.isFinite(confidenceRaw) && confidenceRaw > 0
        ? Math.min(1, Math.max(0, confidenceRaw))
        : name !== "Unknown"
          ? 0.15
          : 0;
    return {
      score,
      species: {
        scientificNameWithoutAuthor: name,
        scientificName: name,
        scientificNameAuthorship: "",
        commonNames,
        genus: {
          scientificNameWithoutAuthor: genus,
          scientificName: genus,
          scientificNameAuthorship: "",
        },
        family: {
          scientificNameWithoutAuthor: family,
          scientificName: family,
          scientificNameAuthorship: "",
        },
      },
    };
  });
  return {
    bestMatch: results[0]?.species.scientificNameWithoutAuthor ?? "",
    results,
    predictedOrgans: [],
    source: "gemini",
  };
}

// -------- Orchestration --------

export async function identifyPlant(blob: Blob): Promise<IdentificationResponse> {
  const key = await hash(blob);
  const store = key ? readCache() : {};
  if (key) {
    const hit = store[key];
    if (hit) {
      // Normalize legacy cache entries written before `source` existed.
      if (!hit.source) {
        hit.source =
          hit.remainingIdentificationRequests === undefined ? "gemini" : "plantnet";
      }
      return hit;
    }
  }

  let data: IdentificationResponse;
  try {
    data = await identifyWithPlantNet(blob);
  } catch (primaryErr) {
    // Fall back on both cases where Pl@ntNet will never serve this request:
    // quota reached (429) and a rejected/disabled key (403). Anything else is
    // a real problem worth surfacing as-is, not silently rerouting.
    const shouldFallback =
      GEMINI_API_KEY &&
      primaryErr instanceof IdentifyError &&
      (primaryErr.kind === "quota" || primaryErr.kind === "cors");
    if (shouldFallback) {
      const reason = (primaryErr as IdentifyError).kind as "quota" | "cors";
      try {
        data = await identifyWithGemini(blob);
        data.fallbackReason = reason;
      } catch (fallbackErr) {
        // Both services failed. Don't re-throw Pl@ntNet's message — when the
        // fallback also failed, the Pl@ntNet text (e.g. a 403 key rejection)
        // is misleading about the real trouble. Give a combined message that
        // keeps the WhatsApp handoff.
        const fallbackMsg =
          fallbackErr instanceof IdentifyError && fallbackErr.message.length > 0
            ? `Our first identification service isn't working right now, and the backup also had a problem (${fallbackErr.message}). Please try again in a few minutes — or send us the photo on WhatsApp and we'll identify it for you.`
            : "Our identification services are temporarily unavailable. Please try again in a few minutes — or send us the photo on WhatsApp and we'll identify it for you.";
        throw new IdentifyError(fallbackMsg, "unknown");
      }
    } else {
      throw primaryErr;
    }
  }

  if (key) {
    store[key] = data;
    writeCache(store);
  }
  return data;
}

/**
 * Pl@ntNet returns every candidate, including a long tail of near-zero scores.
 * A non-plant photo comes back as 200 with a top score around 0.002, so this
 * threshold — not the HTTP status — is what rejects it.
 */
export function meaningfulResults(
  data: IdentificationResponse,
  threshold = 0.05,
): IdentificationResult[] {
  return data.results.filter((r) => r.score >= threshold);
}