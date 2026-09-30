import { useEffect, useRef, useState } from "react";

/**
 * Hero background video with real readiness handling.
 *
 * The source is 54MB because no transcoder was available when it was added.
 * Until that is fixed, the hero must not depend on it: the poster photograph
 * is the default state, the video only fades in once it can actually play,
 * and any failure leaves the photograph in place. A timed-out load does the
 * same, so a slow phone never gets a blank hero.
 */
export default function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);
  // "photo" = poster only. "fading"/"on" = video actually playing.
  const [state, setState] = useState<"photo" | "fading" | "on">("photo");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect reduced motion: the poster photograph is the whole hero.
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (still) return;

    const ready = () => {
      // readyState >= 2 means current frame data is available to show.
      if (el.readyState >= 2) setState("fading");
    };
    const playing = () => setState("on");

    el.addEventListener("loadeddata", ready);
    el.addEventListener("playing", playing);
    el.addEventListener("error", () => setState("photo"));

    // Data Saver / metered connections should not pull 54MB.
    const conn = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
    if (conn?.saveData) return () => {
      el.removeEventListener("loadeddata", ready);
      el.removeEventListener("playing", playing);
    };

    // Don't wait forever: after 8s without a playable frame, keep the photo.
    const timeout = window.setTimeout(() => {
      if (el.readyState < 2) setState("photo");
    }, 8000);

    // If the browser already has it buffered (bfcache), don't wait for events.
    ready();

    return () => {
      el.removeEventListener("loadeddata", ready);
      el.removeEventListener("playing", playing);
      window.clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="absolute inset-0" aria-hidden="true">
      <img
        src="/images/hero-nursery.jpg"
        alt=""
        fetchPriority="high"
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
          state === "on" ? "opacity-0" : "opacity-100"
        }`}
      />
      <video
        ref={ref}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
          state === "on" ? "opacity-100" : state === "fading" ? "opacity-60" : "opacity-0"
        }`}
        poster="/images/hero-nursery.jpg"
        src="/videos/nursery-tour.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        tabIndex={-1}
      />
    </div>
  );
}
