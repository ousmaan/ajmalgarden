import { useEffect, useRef, useState } from "react";
import { waLink } from "../data/site";
import { WhatsAppIcon } from "../components/CtaButtons";
import { LeafIcon, SproutIcon } from "../components/icons";
import {
  compressImage,
  identifyPlant,
  meaningfulResults,
  IdentifyError,
  MAX_UPLOAD_BYTES,
  type IdentificationResult,
} from "../lib/plantnet";

type Phase = "idle" | "loading" | "results" | "error";

const ORGAN_LABELS: Record<string, string> = {
  leaf: "leaf",
  flower: "flower",
  fruit: "fruit",
  bark: "bark",
  habit: "whole plant",
  auto: "photo",
};

function ConfidenceBar({ score }: { score: number }) {
  const pct = Math.round(score * 100);
  const level = score >= 0.5 ? "High" : score >= 0.2 ? "Medium" : "Low";
  const tone =
    score >= 0.5
      ? "bg-leaf-600"
      : score >= 0.2
        ? "bg-marigold"
        : "bg-terra-400";
  return (
    <div
      className="flex items-center gap-2.5"
      role="img"
      aria-label={`Confidence: ${level}, ${pct} percent`}
    >
      <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-leaf-100">
        <div className={`h-full rounded-full ${tone}`} style={{ width: `${Math.max(pct, 3)}%` }} />
      </div>
      <span className="shrink-0 text-xs font-semibold text-leaf-800">
        {level}
        <span className="ml-1 font-normal tabular-nums text-leaf-800/55">{pct}%</span>
      </span>
    </div>
  );
}

function ResultCard({
  result,
  rank,
}: {
  result: IdentificationResult;
  rank: number;
}) {
  const { species, score } = result;
  const common = species.commonNames?.[0];
  const title = common ?? species.scientificNameWithoutAuthor;
  const showLatinSub = Boolean(common);
  const isBest = rank === 0;
  const askMessage = `Assalam-o-Alaikum! I used the plant identifier on your website — it suggested ${species.scientificName}${common ? ` (${common})` : ""}. Do you have this plant at Ajmal Garden Nursery?`;

  return (
    <article
      className={`card-lift rounded-[20px] bg-white p-4 shadow-sm sm:rounded-3xl sm:p-5 ${
        isBest ? "ring-2 ring-leaf-800" : "ring-1 ring-leaf-100"
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="text-[11px] font-bold uppercase tracking-widest text-terra-500">
            {isBest ? `1 — Most likely match` : `${rank + 1} — Match ${rank + 1}`}
          </p>
          <h3 className="mt-1 font-display text-[17px] font-semibold leading-tight text-leaf-900 sm:text-lg">
            {title}
          </h3>
          {showLatinSub && (
            <p className="mt-0.5 text-sm italic text-leaf-800/70">{species.scientificNameWithoutAuthor}</p>
          )}
        </div>
        {isBest && score >= 0.2 && (
          <span className="shrink-0 rounded-full bg-leaf-900 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
            Best
          </span>
        )}
      </div>

      <div className="mt-3">
        <ConfidenceBar score={score} />
      </div>

      <details className="mt-3 text-xs text-leaf-800/60">
        <summary className="cursor-pointer font-semibold text-leaf-800/80 hover:text-leaf-900">
          Scientific details
        </summary>
        <dl className="mt-1.5 flex flex-wrap gap-x-4 gap-y-1">
          <div className="flex gap-1">
            <dt className="font-semibold text-leaf-800/80">Family</dt>
            <dd className="italic">{species.family.scientificNameWithoutAuthor}</dd>
          </div>
          <div className="flex gap-1">
            <dt className="font-semibold text-leaf-800/80">Genus</dt>
            <dd className="italic">{species.genus.scientificNameWithoutAuthor}</dd>
          </div>
        </dl>
      </details>

      <a
        href={waLink(askMessage)}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-leaf-50 px-3.5 py-2 text-xs font-semibold text-leaf-800 ring-1 ring-leaf-100 transition hover:bg-leaf-900 hover:text-white hover:ring-leaf-900"
      >
        <WhatsAppIcon className="h-3.5 w-3.5 text-[#25D366]" />
        Ask us about this plant
        <span aria-hidden>→</span>
      </a>
    </article>
  );
}

export default function Identify() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [preview, setPreview] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [results, setResults] = useState<IdentificationResult[]>([]);
  const [error, setError] = useState<{ message: string; stage: "file" | "identify" } | null>(
    null,
  );
  const [organ, setOrgan] = useState<string>("auto");
  const [source, setSource] = useState<"plantnet" | "fallback">("plantnet");
  const [fallbackReason, setFallbackReason] = useState<"quota" | "cors" | null>(null);
  const [dragging, setDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const objectUrl = useRef<string | null>(null);
  // Identifies the in-flight request so a late response can't overwrite a
  // newer photo the visitor has since chosen.
  const runId = useRef(0);

  useEffect(() => {
    document.title = "Identify a Plant — Ajmal Garden Nursery";
  }, []);

  useEffect(() => {
    return () => {
      if (objectUrl.current) URL.revokeObjectURL(objectUrl.current);
    };
  }, []);

  const clearStaged = () => {
    runId.current += 1;
    if (objectUrl.current) URL.revokeObjectURL(objectUrl.current);
    objectUrl.current = null;
    setPreview(null);
    setFile(null);
    setResults([]);
    setError(null);
    setPhase("idle");
    setFallbackReason(null);
    if (inputRef.current) inputRef.current.value = "";
  };

  const acceptFile = (next: File | undefined) => {
    if (!next) return;
    // A rejected file clears the staged photo, so the error isn't contradicted
    // by a previous "photo ready" state underneath it.
    const reject = (message: string) => {
      clearStaged();
      setError({ message, stage: "file" });
      setPhase("error");
    };
    if (!next.type.startsWith("image/")) {
      reject("That file isn't an image. Please choose a photo.");
      return;
    }
    if (next.size > MAX_UPLOAD_BYTES) {
      reject(
        `That photo is ${(next.size / 1024 / 1024).toFixed(1)} MB, which is too large. Please choose one under 25 MB.`,
      );
      return;
    }
    runId.current += 1;
    if (objectUrl.current) URL.revokeObjectURL(objectUrl.current);
    const url = URL.createObjectURL(next);
    objectUrl.current = url;
    setPreview(url);
    setFile(next);
    setResults([]);
    setError(null);
    setFallbackReason(null);
    setPhase("idle");
  };

  const runIdentify = async () => {
    if (!file) return;
    const id = ++runId.current;
    setPhase("loading");
    setError(null);
    try {
      const compressed = await compressImage(file);
      const data = await identifyPlant(compressed);
      if (id !== runId.current) return;
      const found = meaningfulResults(data);
      setOrgan(data.predictedOrgans?.[0]?.organ ?? "auto");
      setSource(data.source === "plantnet" ? "plantnet" : "fallback");
      setFallbackReason(data.source === "gemini" ? (data.fallbackReason ?? "quota") : null);
      if (found.length === 0) {
        setError({
          message:
            "We couldn't confidently recognise that plant. Try a close, well-lit photo of a single leaf or flower.",
          stage: "identify",
        });
        setPhase("error");
        return;
      }
      setResults(found);
      setPhase("results");
    } catch (err) {
      if (id !== runId.current) return;
      setError({
        message:
          err instanceof IdentifyError
            ? err.message
            : "Something went wrong. Please try again.",
        stage: "identify",
      });
      setPhase("error");
    }
  };

  const bestScore = results[0]?.score ?? 0;

  return (
    <>
      {/* ---------- PAGE HERO ---------- */}
      <section className="relative overflow-hidden bg-leaf-950">
        <div className="absolute inset-0 leaf-texture opacity-[0.07]" aria-hidden />
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-leaf-800/40 blur-2xl" aria-hidden />
        <div className="absolute -bottom-28 -left-20 h-80 w-80 rounded-full bg-terra-500/15 blur-3xl" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
          <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-terra-300">
            <span className="h-1.5 w-1.5 rounded-full bg-marigold" aria-hidden /> Plant Identifier
          </p>
          <h1 className="mt-3 max-w-2xl font-display text-[28px] font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            Not sure what your plant is?
            <span className="block text-terra-200">Snap a photo and find out.</span>
          </h1>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-leaf-100/70 sm:text-[15px]">
            Upload a photo of a leaf, flower or fruit and we&apos;ll suggest what it might be — then you can ask us
            directly whether we have it in stock.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12">
        {/* ---------- UPLOAD ---------- */}
        <div className="rounded-[22px] bg-white p-5 shadow-sm ring-1 ring-leaf-100 sm:rounded-3xl sm:p-6">
          <h2 className="font-display text-[17px] font-semibold text-leaf-900 sm:text-lg">
            Step 1 — Add a clear photo
          </h2>
          <p className="mt-1.5 text-sm leading-relaxed text-leaf-800/65">
            One plant per photo works best. A close-up of a single leaf or flower gives the most accurate result.
          </p>

          <div className="mt-4">
            <input
              ref={inputRef}
              id="plant-photo"
              type="file"
              accept="image/*"
              capture="environment"
              className="sr-only"
              onChange={(e) => acceptFile(e.target.files?.[0])}
            />

            {preview ? (
              <div className="grid gap-4 sm:grid-cols-[minmax(0,14rem)_1fr] sm:items-start">
                <img
                  src={preview}
                  alt="The plant photo you selected"
                  className="h-48 w-full rounded-2xl object-cover ring-1 ring-leaf-100 sm:h-44"
                />
                <div className="flex flex-col gap-3">
                  <p className="text-sm leading-relaxed text-leaf-800/70">
                    Photo ready. We&apos;ll send it to the plant identification service and suggest the most likely
                    matches.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <button
                      type="button"
                      onClick={runIdentify}
                      disabled={phase === "loading"}
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-leaf-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-leaf-800 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {phase === "loading" ? "Identifying…" : "Identify this plant"}
                    </button>
                    <button
                      type="button"
                      onClick={() => inputRef.current?.click()}
                      className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-leaf-900 ring-1 ring-leaf-200 transition hover:bg-leaf-50 active:scale-[0.98]"
                    >
                      Choose another
                    </button>
                    <button
                      type="button"
                      onClick={clearStaged}
                      className="inline-flex items-center justify-center rounded-full px-4 py-3 text-sm font-semibold text-leaf-800/70 transition hover:text-leaf-900"
                    >
                      Clear
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => inputRef.current?.click()}
                onDragOver={(e) => {
                  e.preventDefault();
                  setDragging(true);
                }}
                onDragLeave={() => setDragging(false)}
                onDrop={(e) => {
                  e.preventDefault();
                  setDragging(false);
                  acceptFile(e.dataTransfer.files?.[0]);
                }}
                className={`flex w-full flex-col items-center justify-center gap-3 rounded-[20px] border-2 border-dashed px-5 py-10 text-center transition ${
                  dragging
                    ? "border-leaf-400 bg-leaf-50"
                    : "border-leaf-200 bg-cream hover:border-leaf-300 hover:bg-leaf-50"
                }`}
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-leaf-700 text-white">
                  <SproutIcon className="h-6 w-6" />
                </span>
                <span className="font-display text-[15px] font-semibold text-leaf-900">
                  Tap to choose a photo
                </span>
                <span className="max-w-sm text-xs leading-relaxed text-leaf-800/55">
                  On a phone this opens your camera. You can also drag an image here. JPG or PNG.
                </span>
              </button>
            )}
          </div>
        </div>

        {/* ---------- LOADING ---------- */}
        {phase === "loading" && (
          <div className="mt-4 flex items-center justify-center gap-3 rounded-[22px] bg-leaf-50 px-5 py-8 ring-1 ring-leaf-100">
            <span
              className="h-5 w-5 animate-spin rounded-full border-2 border-leaf-300 border-t-leaf-800"
              aria-hidden
            />
            <span className="text-sm font-medium text-leaf-800">Looking at your photo…</span>
          </div>
        )}

        {/* ---------- ERROR ---------- */}
        {phase === "error" && error && (
          <div
            role="alert"
            className="mt-4 rounded-[22px] bg-terra-50 p-5 ring-1 ring-terra-100 sm:p-6"
          >
            <p className="font-display text-[15px] font-semibold text-terra-800">
              {error.stage === "file"
                ? "That photo can't be used"
                : "We couldn't identify that photo"}
            </p>
            <p className="mt-1.5 text-sm leading-relaxed text-terra-900/75">{error.message}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => inputRef.current?.click()}
                className="inline-flex items-center justify-center rounded-full bg-terra-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-terra-600 active:scale-[0.98]"
              >
                Try another photo
              </button>
              <a
                href={waLink(
                  "Assalam-o-Alaikum! I'm trying to find out what a plant is. Can I send you a photo on WhatsApp?",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-leaf-900 ring-1 ring-leaf-200 transition hover:bg-leaf-50"
              >
                <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
                Ask a human instead
              </a>
            </div>
          </div>
        )}

        {/* ---------- RESULTS ---------- */}
        {phase === "results" && results.length > 0 && (
          <div className="mt-6">
            <div className="flex flex-wrap items-center gap-2">
              <span
                className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wide ring-1 ${
                  source === "fallback"
                    ? "bg-gold-50 text-leaf-900 ring-gold-100"
                    : "bg-leaf-50 text-leaf-900 ring-leaf-100"
                }`}
              >
                <span
                  className={`h-1.5 w-1.5 rounded-full ${
                    source === "fallback" ? "bg-marigold" : "bg-leaf-600"
                  }`}
                  aria-hidden
                />
                {source === "fallback" ? "Backup AI — rough" : "Primary botanical AI"}
              </span>
              <span className="inline-flex items-center rounded-full bg-white px-3 py-1 text-[11px] font-semibold text-leaf-800 ring-1 ring-leaf-100">
                Based on {ORGAN_LABELS[organ] ?? "photo"}
              </span>
            </div>
            <div className="mt-3 flex flex-wrap items-baseline justify-between gap-2">
              <h2 className="font-display text-[20px] font-semibold tracking-tight text-leaf-900 sm:text-2xl">
                Possible matches
              </h2>
            </div>

            {bestScore < 0.3 && (
              <p className="mt-3 rounded-2xl bg-gold-50 px-4 py-3 text-xs leading-relaxed text-leaf-800 ring-1 ring-gold-100">
                <strong className="font-semibold">Low confidence.</strong> These are only rough suggestions — a
                closer, brighter photo of a single leaf or flower will usually do better.
              </p>
            )}

            <div className="mt-4 space-y-3">
              {results.map((result, i) => (
                <ResultCard key={result.species.scientificName} result={result} rank={i} />
              ))}
            </div>

            <p className="mt-4 flex items-start gap-2 rounded-2xl bg-leaf-50 px-4 py-3.5 text-xs leading-relaxed text-leaf-800/70 ring-1 ring-leaf-100">
              <LeafIcon className="mt-px h-4 w-4 shrink-0 text-leaf-600" />
              <span>
                {source === "fallback"
                  ? fallbackReason === "cors"
                    ? "Our primary identification service isn't enabled for this domain, so these suggestions were made by a backup AI — treat them as rougher than usual. Send us a photo on WhatsApp and our team will confirm it for you."
                    : "We hit the limit on our primary identification service, so these suggestions were made by a general AI — treat them as rougher than usual. Send us a photo on WhatsApp and our team will confirm it for you."
                  : "These suggestions come from an automated service and are a starting point, not a certainty — similar species can look almost identical. Send us a photo on WhatsApp and our team will confirm it for you."}
              </span>
            </p>
          </div>
        )}

        {/* ---------- EMPTY STATE NOTE ---------- */}
        {phase === "idle" && !preview && (
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              { title: "Good light", text: "Daylight, no harsh shadows or flash." },
              { title: "Get close", text: "Fill the frame with one leaf or flower." },
              { title: "One plant", text: "A single species per photo identifies best." },
            ].map((tip) => (
              <div key={tip.title} className="rounded-[18px] bg-white p-4 ring-1 ring-leaf-100">
                <p className="font-display text-sm font-semibold text-leaf-900">{tip.title}</p>
                <p className="mt-1 text-xs leading-relaxed text-leaf-800/60">{tip.text}</p>
              </div>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
