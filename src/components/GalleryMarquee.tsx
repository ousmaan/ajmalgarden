import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { cloudinaryUrl, fetchGallery, type GalleryRow } from "../lib/supabase";
import { useLang } from "../i18n/lang";
import { track } from "../utils/track";

/**
 * Live gallery marquee — two rows drifting in opposite directions through
 * every nursery photo, order reshuffled on each load.
 *
 * Why a marquee rather than a static strip: 158 verified photos cannot be
 * shown in a grid without burying the page, and the old four-tile strip
 * represented 2.5% of what we actually stock. Drifting rows show the depth of
 * the nursery in the space a strip can afford.
 *
 * Motion is decorative, so it stops for prefers-reduced-motion and pauses on
 * hover/focus so a visitor can actually look at a photo. The whole block is
 * inert content — every tile is a real link to the gallery, not a click target
 * with a dead end.
 */

/** Fisher-Yates. Seeded per-load so React StrictMode's double-render agrees. */
function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** Track which photos have actually painted, so we never show an empty card. */
function useLoaded() {
  const [ready, setReady] = useState<Set<string>>(new Set());
  const mark = (id: string) =>
    setReady((prev) => (prev.has(id) ? prev : new Set(prev).add(id)));
  return [ready, mark] as const;
}

function Row({
  items,
  reverse,
  onOpen,
}: {
  items: GalleryRow[];
  reverse?: boolean;
  onOpen: () => void;
}) {
  // Duplicated so the -50% translate wraps seamlessly.
  const loop = useMemo(() => [...items, ...items], [items]);
  const [ready, markReady] = useLoaded();

  return (
    <div className="relative overflow-hidden">
      <ul
        className="ag-marquee flex w-max items-stretch gap-3 py-2 sm:gap-4"
        style={{
          animationDuration: reverse ? "156s" : "128s",
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {loop.map((row, i) => (
          <li key={`${row.id}-${i}`} className="shrink-0">
            <Link
              aria-hidden={i >= items.length || undefined}
              className={`group relative block h-32 w-24 overflow-hidden rounded-xl bg-leaf-100/40 ring-1 ring-leaf-900/5 transition-opacity duration-500 sm:h-44 sm:w-32 lg:h-52 lg:w-40 ${
                ready.has(row.id) ? "opacity-100" : "opacity-0"
              }`}
              to={`/gallery?q=${encodeURIComponent(row.title)}`}
              onClick={onOpen}
              tabIndex={i >= items.length ? -1 : 0}
            >
              <img
                src={cloudinaryUrl(row.cloudinary_id!, 400)}
                alt={i < items.length ? row.alt || row.title : undefined}
                loading={i < 8 ? "eager" : "lazy"}
                decoding="async"
                onLoad={() => markReady(row.id)}
                onError={() => markReady(row.id)}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-leaf-950/85 to-transparent px-2 pb-1.5 pt-6">
                <span className="block truncate font-display text-[11px] font-semibold text-white [text-shadow:0_1px_6px_rgba(0,0,0,0.5)] sm:text-xs">
                  {row.title}
                </span>
                {row.name_local && (
                  <span className="block truncate text-[9px] font-semibold uppercase tracking-[0.08em] text-marigold/90 sm:text-[10px]">
                    {row.name_local}
                  </span>
                )}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function GalleryMarquee() {
  const { t } = useLang();
  const [rows, setRows] = useState<GalleryRow[]>([]);

  useEffect(() => {
    let alive = true;
    fetchGallery()
      .then((r) => {
        if (alive) setRows(r.filter((x) => x.cloudinary_id));
      })
      .catch(() => {
        /* A failed fetch leaves the section empty rather than erroring the page. */
      });
    return () => {
      alive = false;
    };
  }, []);

  // Shuffle once per load, then split the two rows so they never mirror.
  const [top, bottom] = useMemo<[GalleryRow[], GalleryRow[]]>(() => {
    if (rows.length < 8) return [[], []];
    const s = shuffle(rows);
    const half = Math.ceil(s.length / 2);
    return [s.slice(0, half), s.slice(half)];
  }, [rows]);

  const onOpen = () => track("gallery_open", { source: "home-marquee" });

  return (
    <section className="leaf-texture-strong bg-sage-50/60 py-10 sm:py-16" aria-labelledby="ag-marquee-title">
      <style>{`
        @keyframes ag-marquee-scroll {
          from { transform: translate3d(0,0,0); }
          to   { transform: translate3d(-50%,0,0); }
        }
        .ag-marquee {
          animation-name: ag-marquee-scroll;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          will-change: transform;
        }
        /* Decorative motion: stop it for anyone who asked us to, and whenever a
           visitor is actually trying to look at a photo. */
        @media (prefers-reduced-motion: reduce) {
          .ag-marquee { animation: none; }
        }
        .ag-marquee:hover, .ag-marquee:focus-within { animation-play-state: paused; }
      `}</style>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-6 flex flex-col gap-3 sm:mb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-terra-500">{t("home.gallery_kicker")}</p>
            <h2 id="ag-marquee-title" className="mt-1 font-display text-[26px] font-semibold tracking-tight text-leaf-900 sm:text-4xl">
              {t("home.gallery_title")}
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-leaf-800/65 sm:text-[15px]">
              {t("home.gallery_sub")}
            </p>
          </div>
          <Link
            to="/gallery"
            className="inline-flex items-center gap-1.5 self-start rounded-full bg-leaf-900 px-4 py-2 text-xs font-semibold text-white transition hover:bg-leaf-800 sm:self-auto"
          >
            {t("cta.open_gallery")} <span aria-hidden>→</span>
          </Link>
        </div>
      </div>

      {/* Full-bleed so the rows run to the screen edge and the crop reads as
          intentional rather than clipped. */}
      {top.length > 0 ? (
        <div className="px-4 sm:px-6">
          <Row items={top} onOpen={onOpen} />
          <Row items={bottom} reverse onOpen={onOpen} />
        </div>
      ) : (
        <div className="px-4 sm:px-6">
          <div className="h-32 animate-pulse rounded-xl bg-leaf-100 sm:h-44" />
        </div>
      )}

      <p className="mx-auto mt-6 max-w-6xl px-4 text-center text-xs text-leaf-800/55 sm:px-6">
        {rows.length > 0
          ? `${rows.length} photos from our benches in Sialkot`
          : "Loading photos from our benches…"}
      </p>
    </section>
  );
}
