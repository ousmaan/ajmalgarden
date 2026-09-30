import { useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { waLink } from "../data/site";
import { cloudinaryUrl, fetchGallery, type GalleryRow } from "../lib/supabase";
import { usePageMeta } from "../hooks/usePageMeta";
import { track } from "../utils/track";
import { WhatsAppIcon } from "../components/CtaButtons";
import { LeafIcon } from "../components/icons";

/**
 * Gallery V1 — curated masonry, not a grid.
 * Fixed column width (2/3/4 across canvases), every photo at its NATURAL
 * aspect ratio, never cropped: portraits run tall, landscapes wide. The
 * catalog compares (uniform crop); the gallery showcases (full frame).
 * Filter state lives in the URL (?cat=&q=) so links share and back-button works.
 */

const gridSrcSet = (id: string) =>
  `${cloudinaryUrl(id, 400)} 400w, ${cloudinaryUrl(id, 800)} 800w`;

function Tile({
  row,
  onOpen,
}: {
  row: GalleryRow;
  onOpen: () => void;
}) {
  const [failed, setFailed] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const src = row.cloudinary_id ? cloudinaryUrl(row.cloudinary_id, 600) : "";
  const ratio =
    row.width && row.height ? `${row.width} / ${row.height}` : undefined;
  return (
    <button
      type="button"
      onClick={onOpen}
      className="card-lift group relative mb-3 block w-full overflow-hidden rounded-2xl bg-leaf-100 text-left ring-1 ring-leaf-100 [break-inside:avoid] sm:mb-4"
      style={ratio ? { aspectRatio: ratio } : undefined}
      aria-label={row.title || row.alt || "Nursery photo"}
    >
      {!src || failed ? (
        <span
          className="flex w-full items-center justify-center"
          style={ratio ? { aspectRatio: ratio } : { aspectRatio: "4 / 5" }}
        >
          <LeafIcon className="h-10 w-10 text-leaf-700/40" />
        </span>
      ) : (
        <img
          src={src}
          srcSet={gridSrcSet(row.cloudinary_id!)}
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          alt={row.alt || row.title}
          loading="lazy"
          decoding="async"
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
          className={`h-auto w-full transition duration-700 group-hover:scale-[1.02] ${loaded ? "opacity-100" : "opacity-0"}`}
        />
      )}
      {(row.title || row.name_local) && (
        <span
          className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-leaf-950/85 via-leaf-950/25 to-transparent px-3 pb-2.5 pt-7 text-left sm:px-3.5 sm:pb-3 sm:pt-10"
        >
          {row.title && (
            <span className="block font-display text-[13px] font-semibold leading-tight text-white [text-shadow:0_1px_8px_rgba(0,0,0,0.5)] sm:text-[15px] sm:leading-snug">
              {row.title}
            </span>
          )}
          {row.name_local && (
            <span className="mt-0.5 block text-[10px] font-semibold uppercase tracking-[0.08em] text-marigold/90 [text-shadow:0_1px_6px_rgba(0,0,0,0.5)] sm:text-[11px]">
              {row.name_local}
            </span>
          )}
          {/* Description is desktop/tablet only — on a phone the tile is too
              small for it, and it buried the photo. It is always in the
              lightbox, which is where a shopper actually reads it. */}
          {row.description && (
            <span className="mt-1 hidden line-clamp-2 text-xs leading-relaxed text-leaf-50/85 [text-shadow:0_1px_6px_rgba(0,0,0,0.5)] sm:block">
              {row.description}
            </span>
          )}
        </span>
      )}
    </button>
  );
}

export default function Gallery() {
  const [rows, setRows] = useState<GalleryRow[] | null>(null);
  const [failed, setFailed] = useState(false);
  const [params, setParams] = useSearchParams();
  const [lightbox, setLightbox] = useState<number | null>(null);
  const touchX = useRef<number | null>(null);

  const filter = params.get("cat") ?? "all";
  const query = params.get("q") ?? "";
  const photoIdParam = params.get("id") ?? "";

  usePageMeta(
    "Nursery Gallery — Ajmal Garden Nursery",
    "Real photos from Ajmal Garden Nursery, Sialkot: flowering plants, indoor greens, trees, planters and garden decor since 1958.",
  );

  useEffect(() => {
    fetchGallery()
      .then((r) => {
        setRows(r);
        // If an ?id= param points to a real photo, open it in lightbox.
        if (photoIdParam && r) {
          const idx = r.findIndex((row) => row.id === photoIdParam);
          if (idx >= 0) setLightbox(idx);
        }
      })
      .catch((err) => {
        // Visible in DevTools for 30-second diagnosis (which state + why).
        // eslint-disable-next-line no-console
        console.error("[gallery] load failed:", err);
        setFailed(true);
      });
  }, []);

  const setFilter = (cat: string) => {
    const next = new URLSearchParams(params);
    if (cat === "all") next.delete("cat");
    else next.set("cat", cat);
    setParams(next, { replace: true });
  };
  const setQuery = (q: string) => {
    const next = new URLSearchParams(params);
    if (!q.trim()) next.delete("q");
    else next.set("q", q.trim());
    setParams(next, { replace: true });
  };

  const categories = useMemo(() => {
    // Real plant-type taxonomy (media.category from the tagging pass).
    // Shows botanical categories: Fruit Tree, Flowering Plant, Foliage, etc.
    // Untagged rows pool under "Nursery" until named.
    const set = new Map<string, number>();
    for (const r of rows ?? []) {
      const key = r.category || "Nursery";
      set.set(key, (set.get(key) ?? 0) + 1);
    }
    return [...set.entries()].sort((a, b) => b[1] - a[1]);
  }, [rows]);

  // Refine row appears automatically once tagging fills `tags` (V2 unlock).
  const allTags = useMemo(() => {
    const set = new Set<string>();
    for (const r of rows ?? []) for (const t of r.tags ?? []) set.add(t);
    return [...set].sort();
  }, [rows]);
  const activeTag = params.get("tag") ?? "";
  const setTag = (t: string) => {
    const next = new URLSearchParams(params);
    if (!t) next.delete("tag");
    else next.set("tag", t);
    setParams(next, { replace: true });
  };

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return (rows ?? []).filter((r) => {
      if (filter !== "all" && (r.category || "Nursery") !== filter) return false;
      if (activeTag && !(r.tags ?? []).includes(activeTag)) return false;
      if (!q) return true;
      return [r.title, r.name_local, r.description, r.alt, r.category, r.collection, ...(r.tags ?? [])]
        .join(" ")
        .toLowerCase()
        .includes(q);
    });
  }, [rows, filter, query, activeTag]);

  const step = (dir: 1 | -1) =>
    setLightbox((i) => (i === null ? i : (i + dir + visible.length) % visible.length));
  const current = lightbox === null ? null : visible[lightbox];

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    // Preload neighbours so swipes feel instant.
    for (const d of [1, -1]) {
      const n = visible[(lightbox + d + visible.length) % visible.length];
      if (n?.cloudinary_id) {
        const img = new Image();
        img.src = cloudinaryUrl(n.cloudinary_id, 1400);
      }
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lightbox, visible.length]);

  return (
    <>
      <section className="relative overflow-hidden bg-leaf-950">
        <div className="absolute inset-0 leaf-texture opacity-[0.07]" aria-hidden />
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-leaf-800/40 blur-2xl" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-terra-300">
            <span className="h-1.5 w-1.5 rounded-full bg-marigold" aria-hidden /> Nursery Gallery
          </p>
          <h1 className="mt-3 max-w-2xl font-display text-[28px] font-bold leading-tight tracking-tight text-white sm:text-4xl">
            Real rows, real stock, <span className="text-terra-200">real nursery.</span>
          </h1>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-leaf-100/70">
            Shot on our own benches in Sialkot — filter by collection, search the library, tap any photo to step inside it.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
        {rows === null && (
          <div className="columns-2 gap-3 sm:columns-3 sm:gap-4 lg:columns-4" aria-label="Loading gallery">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="mb-3 aspect-[3/4] animate-pulse rounded-2xl bg-leaf-100 [break-inside:avoid] sm:mb-4"
              />
            ))}
          </div>
        )}

        {rows !== null && rows.length === 0 && !failed && (
          <div className="rounded-3xl bg-white p-8 text-center shadow-sm ring-1 ring-leaf-100 sm:p-12">
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-leaf-700 text-white">
              <LeafIcon className="h-7 w-7" />
            </span>
            <h2 className="mt-4 font-display text-xl font-semibold text-leaf-900">The gallery is being planted</h2>
            <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-leaf-800/65">
              Our photo library is organized and uploading soon. Meanwhile, browse the collections or ask us on
              WhatsApp — we&apos;ll send fresh photos directly.
            </p>
            <a
              href={waLink("Assalam-o-Alaikum! Can you please share photos of what's available at the nursery?")}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track("whatsapp_click", { source: "gallery-empty" })}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white shadow-md transition hover:bg-[#1fb959] active:scale-[0.98]"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Ask for photos on WhatsApp
            </a>
          </div>
        )}

        {failed && (
          <div className="rounded-3xl bg-terra-50 p-8 text-center ring-1 ring-terra-100 sm:p-10" role="alert">
            <h2 className="font-display text-xl font-semibold text-terra-800">The photos couldn&apos;t load</h2>
            <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-terra-900/75">
              Check your connection and try again — or ask us on WhatsApp and we&apos;ll send photos directly.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => {
                  setFailed(false);
                  setRows(null);
                  fetchGallery()
                    .then(setRows)
                    .catch((err) => {
                      // eslint-disable-next-line no-console
                      console.error("[gallery] reload failed:", err);
                      setFailed(true);
                    });
                }}
                className="inline-flex items-center justify-center rounded-full bg-leaf-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-leaf-800 active:scale-[0.98]"
              >
                Try again
              </button>
              <a
                href={waLink("Assalam-o-Alaikum! Your gallery page isn't loading for me.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-leaf-900 ring-1 ring-leaf-200 transition hover:bg-leaf-50"
              >
                <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
                Tell us on WhatsApp
              </a>
            </div>
          </div>
        )}

        {rows !== null && rows.length > 0 && (
          <>
            {/* Filter bar: search + collections, refine row unlocks with tags */}
            <div className="mb-6 space-y-3">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <div className="relative flex-1">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" aria-hidden className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-leaf-800/40">
                    <circle cx="11" cy="11" r="7" />
                    <path d="m20 20-3.5-3.5" />
                  </svg>
                  <label htmlFor="gallery-search" className="sr-only">Search photos</label>
                  <input
                    id="gallery-search"
                    type="search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search the library…"
                    autoComplete="off"
                    className="w-full rounded-full border border-leaf-200 bg-white py-2.5 pl-11 pr-4 text-sm text-leaf-900 outline-none transition placeholder:text-leaf-800/35 focus:border-leaf-400 focus:ring-4 focus:ring-leaf-100"
                  />
                </div>
                <p className="shrink-0 text-xs text-leaf-800/55" role="status" aria-live="polite">
                  {visible.length} of {rows.length} photos
                </p>
              </div>
              <div className="no-scrollbar -mx-1 flex gap-2 overflow-x-auto px-1 py-1" role="tablist" aria-label="Filter by category">
                <button type="button" role="tab" aria-selected={filter === "all"} onClick={() => setFilter("all")}
                  className={`shrink-0 whitespace-nowrap rounded-full border px-4 py-2 text-xs font-semibold transition active:scale-[0.98] ${filter === "all" ? "bg-leaf-900 text-white border-leaf-800" : "bg-white text-leaf-800 border-leaf-200 hover:bg-leaf-50 hover:border-leaf-300"}`}>
                  All photos
                </button>
                {categories.map(([cat, count]) => (
                  <button key={cat} type="button" role="tab" aria-selected={filter === cat} onClick={() => setFilter(cat)}
                    className={`shrink-0 whitespace-nowrap rounded-full border px-4 py-2 text-xs font-semibold transition active:scale-[0.98] ${filter === cat ? "bg-leaf-900 text-white border-leaf-800" : "bg-white text-leaf-800 border-leaf-200 hover:bg-leaf-50 hover:border-leaf-300"}`}>
                    {cat} · {count}
                  </button>
                ))}
              </div>
              {allTags.length > 0 && (
                <div className="no-scrollbar -mx-1 flex gap-2 overflow-x-auto px-1 py-1" aria-label="Refine by tag">
                  {activeTag && (
                    <button type="button" onClick={() => setTag("")}
                      className="shrink-0 whitespace-nowrap rounded-full bg-terra-500 px-4 py-2 text-xs font-semibold text-white transition hover:bg-terra-600">
                      ✕ {activeTag}
                    </button>
                  )}
                  {allTags.filter((t) => t !== activeTag).map((t) => (
                    <button key={t} type="button" onClick={() => setTag(t)}
                      className="shrink-0 whitespace-nowrap rounded-full border border-leaf-100 bg-leaf-50 px-4 py-2 text-xs font-semibold text-leaf-800 transition hover:bg-leaf-100">
                      {t}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {visible.length === 0 ? (
              <div className="rounded-3xl bg-white p-8 text-center ring-1 ring-leaf-100">
                <p className="font-display text-lg font-semibold text-leaf-900">No photos match — yet.</p>
                <p className="mx-auto mt-1 max-w-sm text-sm text-leaf-800/60">
                  Try fewer words, or ask us directly — the benches hold more than any filter.
                </p>
                <a
                  href={waLink(`Assalam-o-Alaikum! I'm looking for photos of "${query || filter}" at Ajmal Garden Nursery.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#1fb959]"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  Ask on WhatsApp
                </a>
              </div>
            ) : (
              <div className="columns-2 gap-3 sm:columns-3 sm:gap-4 lg:columns-4">
                {visible.map((row, i) => (
                  <Tile key={row.id} row={row} onOpen={() => {
                    track("gallery_open", { source: "gallery-grid" });
                    setLightbox(i);
                  }} />
                ))}
              </div>
            )}
          </>
        )}
      </section>

      {/* Immersive viewer: full-viewport scrim, contained photo, bottom bar */}
      {current && (
        <div
          className="fixed inset-0 z-50 flex flex-col bg-leaf-950/[0.97]"
          role="dialog"
          aria-modal="true"
          aria-label={current.title || "Photo viewer"}
          onTouchStart={(e) => {
            touchX.current = e.touches[0].clientX;
          }}
          onTouchEnd={(e) => {
            if (touchX.current === null) return;
            const dx = e.changedTouches[0].clientX - touchX.current;
            if (dx < -48) step(1);
            else if (dx > 48) step(-1);
            touchX.current = null;
          }}
        >
          <div className="flex items-center justify-between px-4 py-3 sm:px-6">
            <p className="text-xs font-semibold tabular-nums tracking-widest text-white/60" aria-live="polite">
              {(lightbox ?? 0) + 1} / {visible.length}
            </p>
            <button
              type="button"
              onClick={() => setLightbox(null)}
              aria-label="Close viewer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/15 transition hover:bg-white/20"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5" aria-hidden>
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <div className="relative flex min-h-0 flex-1 items-center justify-center px-2 sm:px-16">
            <button
              type="button"
              onClick={() => step(-1)}
              aria-label="Previous photo"
              className="absolute left-2 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/15 transition hover:bg-white/20 sm:flex"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5" aria-hidden>
                <path d="m15 18-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {current.cloudinary_id ? (
              <img
                key={current.id}
                src={cloudinaryUrl(current.cloudinary_id, 1400)}
                alt={current.alt || current.title}
                className="max-h-full max-w-full rounded-xl object-contain shadow-2xl soft-in"
              />
            ) : (
              <span className="flex h-64 w-64 items-center justify-center rounded-2xl bg-white/5">
                <LeafIcon className="h-16 w-16 text-white/30" />
              </span>
            )}
            <button
              type="button"
              onClick={() => step(1)}
              aria-label="Next photo"
              className="absolute right-2 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/15 transition hover:bg-white/20 sm:flex"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5" aria-hidden>
                <path d="m9 18 6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          <div
            className="border-t border-white/10 bg-leaf-950/90 px-4 py-4 sm:px-6"
            style={{ paddingBottom: "calc(1rem + env(safe-area-inset-bottom, 0px))" }}
          >
            <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-3">
              <span className="min-w-0 flex-1">
                <span className="block truncate font-display text-base font-semibold text-white">
                  {current.title || "From our benches"}
                </span>
                {current.name_local && (
                  <span className="mt-0.5 block text-xs font-semibold uppercase tracking-[0.1em] text-marigold">
                    {current.name_local}
                  </span>
                )}
                {current.description && (
                  <span className="mt-0.5 line-clamp-2 block text-xs leading-relaxed text-leaf-200/70">
                    {current.description}
                  </span>
                )}
                {(current.category || (current.tags ?? []).length > 0) && (
                  <span className="mt-1.5 flex flex-wrap gap-1.5">
                    {current.category && (
                      <span className="rounded-full bg-white/10 px-2.5 py-0.5 text-[11px] font-semibold text-white/80">
                        {current.category}
                      </span>
                    )}
                    {(current.tags ?? []).slice(0, 4).map((t) => (
                      <span key={t} className="rounded-full bg-white/10 px-2.5 py-0.5 text-[11px] text-white/60">
                        {t}
                      </span>
                    ))}
                  </span>
                )}
              </span>
              <span className="flex shrink-0 gap-2">
                <a
                  href={`https://wa.me/?text=${encodeURIComponent(`Look at this from Ajmal Garden Nursery${current.title ? `: ${current.title}` : ""} ${current.cloudinary_id ? cloudinaryUrl(current.cloudinary_id, 900) : ""}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => track("gallery_share", { source: "lightbox" })}
                  aria-label="Share this photo on WhatsApp"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/15 transition hover:bg-white/20"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4" aria-hidden>
                    <path d="M12 15V3m0 12 4-4m-4 4-4-4" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" strokeLinecap="round" />
                  </svg>
                </a>
                <a
                  href={waLink(`Assalam-o-Alaikum! I saw this photo in your gallery${current.title ? ` ("${current.title}"${current.name_local ? ` / ${current.name_local}` : ""})` : ""} — do you have this plant?`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => track("whatsapp_click", { source: "gallery-lightbox" })}
                  className="inline-flex items-center gap-1.5 rounded-full bg-[#25D366] px-5 py-2.5 text-xs font-semibold text-white transition hover:bg-[#1fb959]"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  Ask about this
                </a>
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
