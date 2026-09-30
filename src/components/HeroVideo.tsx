import { useEffect, useRef, useState } from "react";

/**
 * Hero background video, Cloudinary-delivered.
 *
 * f_auto/q_auto lets Cloudinary pick format and quality per device; a width
 * cap keeps the payload sane (53.9MB source -> ~7.1MB at 1280w, ~3.1MB at
 * 720w). The poster photograph is the default state and never removed until
 * the video is actually playing: first paint is always a photo, and error /
 * timeout / Data Saver / reduced motion all leave the photograph in place.
 * There is no path to a blank hero.
 */
export default function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);
  const [state, setState] = useState<"photo" | "fading" | "on">("photo");

  // Cloudinary transcodes on the fly; no local copy, no repo weight.
  const src =
    "https://res.cloudinary.com/egagzfgg/video/upload/f_auto,q_auto,w_1280/agn-hero.mp4";

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Reduced motion: the poster photograph is the whole hero.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ready = () => {
      if (el.readyState >= 2) setState("fading");
    };
    const playing = () => setState("on");
    const fail = () => setState("photo");

    el.addEventListener("loadeddata", ready);
    el.addEventListener("playing", playing);
    el.addEventListener("error", fail);

    // Data Saver / metered connections should not pull a hero video.
    const conn = (
      navigator as Navigator & { connection?: { saveData?: boolean } }
    ).connection;
    if (conn?.saveData) {
      return () => {
        el.removeEventListener("loadeddata", ready);
        el.removeEventListener("playing", playing);
        el.removeEventListener("error", fail);
      };
    }

    // Don't wait forever: after 8s without a playable frame, keep the photo.
    const timeout = window.setTimeout(() => {
      if (el.readyState < 2) setState("photo");
    }, 8000);

    ready(); // browser may already have it buffered (bfcache)

    return () => {
      el.removeEventListener("loadeddata", ready);
      el.removeEventListener("playing", playing);
      el.removeEventListener("error", fail);
      window.clearTimeout(timeout);
    };
  }, [src]);

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
        src={src}
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
