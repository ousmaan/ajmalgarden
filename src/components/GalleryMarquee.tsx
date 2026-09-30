import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { cloudinaryUrl, fetchGallery, type GalleryRow } from "../lib/supabase";
import { useLang } from "../i18n/lang";
import { track } from "../utils/track";

/**
 * Live gallery marquee — two rows drifting in opposite directions through
 * every nursery photo, order reshuffled on each load.
 *
 * Mobile behaviour (owner, 2026-09-30): pausing the CSS animation on touch
 * read as the strip freezing under the finger. Now the rows are genuinely
 * draggable — touch-drag moves the strip; on release it fades out, the CSS
 * animation restarts from exactly the position the finger left (via a negative
 * animation-delay), and it fades back in. No jump, no freeze.
 *
 * Tiles stay invisible until their own image has painted, so no empty cards.
 * The whole strip is decorative motion: it stops for prefers-reduced-motion
 * and pauses on desktop hover so a visitor can look at a photo.
 */

const DURATION_NORMAL = 256; // seconds
const DURATION_REVERSE = 312;

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** Track which photos have actually painted, so we never show an empty card. */
function useReady() {
  const [ready, setReady] = useState<Set<string>>(() => new Set());
  const mark = (id: string) =>
    setReady((prev) => (prev.has(id) ? prev : new Set(prev).add(id)));
  return [ready, mark] as const;
}

interface DragState {
  startX: number;
  baseTx: number; // translateX (px) at touch start
  width: number; // one animation cycle, in px (half the loop)
  moved: boolean;
}

function Row({ items, reverse, onOpen }: {
  items: GalleryRow[];
  reverse?: boolean;
  onOpen: () => void;
}) {
  const loop = useMemo(() => [...items, ...items], [items]);
  const [ready, markReady] = useReady();

  const trackRef = useRef<HTMLUListElement>(null);
  const drag = useRef<DragState | null>(null);
  const [fading, setFading] = useState(false);
  const duration = reverse ? DURATION_REVERSE : DURATION_NORMAL;

  /** Half the scroll width — the distance one animation cycle covers. */
  const cycleWidth = () => {
    const el = trackRef.current;
    return el ? el.scrollWidth / 2 : 0;
  };

  /** Current translateX in px, read off the running animation. */
  const currentTx = () => {
    const el = trackRef.current;
    if (!el) return 0;
    const t = getComputedStyle(el).transform;
    if (!t || t === "none") return 0;
    const m = t.match(/matrix\(([^)]+)\)/);
    return m ? parseFloat(m[1].split(",")[4]) : 0;
  };

  const onTouchStart = (e: React.TouchEvent) => {
    const el = trackRef.current;
    if (!el) return;
    const tx = currentTx();
    // Take over from the CSS animation: freeze it, pin its position inline.
    el.style.animation = "none";
    el.style.transform = `translate3d(${tx}px,0,0)`;
    drag.current = {
      startX: e.touches[0].clientX,
      baseTx: tx,
      width: cycleWidth(),
      moved: false,
    };
  };

  const onTouchMove = (e: React.TouchEvent) => {
    const el = trackRef.current;
    const d = drag.current;
    if (!el || !d) return;
    const dx = e.touches[0].clientX - d.startX;
    if (Math.abs(dx) > 6) d.moved = true;
    el.style.transform = `translate3d(${d.baseTx + dx}px,0,0)`;
  };

  const onTouchEnd = () => {
    const el = trackRef.current;
    const d = drag.current;
    drag.current = null;
    if (!el || !d) return;

    const W = d.width || 1;
    const tx = currentTx();
    // Normalise where the finger left the strip into animation progress p∈[0,1):
    // the animation always occupies translate space [-W, 0].
    const p = (((-tx % W) + W) % W) / W;

    // Fade out, restart the animation from that exact position, fade back in.
    setFading(true);
    window.setTimeout(() => {
      el.style.transform = "";
      // Negative delay starts the animation part-way through, so the strip
      // continues from where the drag left it rather than jumping to 0.
      const delay = reverse ? -(1 - p) * duration : -p * duration;
      el.style.animation = `ag-marquee-scroll ${duration}s linear ${delay}s infinite`;
      if (reverse) el.style.animationDirection = "reverse";
      setFading(false);
    }, 180);
  };

  return (
    <div
      className="relative touch-pan-y overflow-hidden"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <ul
        ref={trackRef}
        className={`ag-marquee flex w-max items-stretch gap-3 py-2 transition-opacity duration-200 sm:gap-4 ${
          fading ? "opacity-0" : "opacity-100"
        }`}
        style={{
          animationDuration: `${duration}s`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {loop.map((row, i) => (
          <li key={`${row.id}-${i}`} className="shrink-0">
            <Link
              aria-hidden={i >= items.length || undefined}
              tabIndex={i >= items.length ? -1 : 0}
              draggable={false}
              to={`/gallery?q=${encodeURIComponent(row.title)}`}
              onClick={(e) => {
                // A drag must not fire the link; a clean tap should.
                if (drag.current?.moved) e.preventDefault();
                if (i < items.length) onOpen();
              }}
              className={`group relative block h-40 w-28 overflow-hidden rounded-xl bg-leaf-100/40 ring-1 ring-leaf-900/5 sm:h-56 sm:w-40 lg:h-64 lg:w-48 ${
                ready.has(row.id) ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={cloudinaryUrl(row.cloudinary_id!, 500)}
                alt={i < items.length ? row.alt || row.title : undefined}
                loading={i < 8 ? "eager" : "lazy"}
                decoding="async"
                draggable={false}
                onLoad={() => markReady(row.id)}
                onError={() => markReady(row.id)}
                className="h-full w-full select-none object-cover"
              />
              <span className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-leaf-950/85 to-transparent px-2.5 pb-2 pt-7">
                <span className="block truncate font-display text-xs font-semibold text-white [text-shadow:0_1px_6px_rgba(0,0,0,0.5)] sm:text-sm">
                  {row.title}
                </span>
                {row.name_local && (
                  <span className="block truncate text-[10px] font-semibold uppercase tracking-[0.08em] text-marigold/90 sm:text-[11px]">
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
        @media (prefers-reduced-motion: reduce) {
          .ag-marquee { animation: none; }
        }
        /* Desktop only: touch uses drag instead, and animation-play-state would
           freeze the strip under the finger — the bug this rewrite removes. */
        @media (hover: hover) {
          .ag-marquee:hover { animation-play-state: paused; }
        }
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

      {top.length > 0 ? (
        <div className="px-4 sm:px-6">
          <Row items={top} onOpen={onOpen} />
          <Row items={bottom} reverse onOpen={onOpen} />
        </div>
      ) : (
        <div className="px-4 sm:px-6">
          <div className="h-40 animate-pulse rounded-xl bg-leaf-100 sm:h-56" />
        </div>
      )}

      <p className="mx-auto mt-6 max-w-6xl px-4 text-center text-xs text-leaf-800/55 sm:px-6">
        {rows.length > 0
          ? `${rows.length} photos from our benches in Sialkot — drag to browse`
          : "Loading photos from our benches…"}
      </p>
    </section>
  );
}
