import { useState } from "react";
import { LeafIcon } from "./icons";

/**
 * Image with the plan's fallback cascade (§2): primary photo → category photo
 * → elegant plant-icon tile. Never renders a broken-image glyph — most product
 * photos are still pending the gallery→catalog mapping (Phase 3), so every
 * surface must degrade gracefully until then and after any CDN hiccup.
 */
export default function ProductThumb({
  src,
  alt,
  fallbackSrc,
  className = "h-11 w-11",
}: {
  src?: string;
  alt: string;
  fallbackSrc?: string;
  className?: string;
}) {
  const [stage, setStage] = useState(0);
  const current = stage === 0 ? src : fallbackSrc;

  return (
    <span
      className={`relative inline-flex shrink-0 items-center justify-center overflow-hidden bg-leaf-100 ${className}`}
      aria-hidden={alt === ""}
    >
      <LeafIcon className="h-1/2 w-1/2 text-leaf-700/50" />
      {current && stage < 2 && (
        <img
          src={current}
          alt={alt}
          loading="lazy"
          onError={() => setStage((s) => s + 1)}
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}
    </span>
  );
}
