import { useState } from "react";
import type { CatalogProduct } from "../data/catalog";
import { waLink } from "../data/site";
import { WhatsAppIcon } from "./CtaButtons";

export default function ProductCard({
  product,
  fallbackImage,
  categoryName,
}: {
  product: CatalogProduct;
  fallbackImage: string;
  categoryName: string;
}) {
  const [imageIndex, setImageIndex] = useState(0);
  const [useFallback, setUseFallback] = useState(false);
  const activeImage = product.images[imageIndex];
  const hasMultipleImages = product.images.length > 1;

  const showImage = (nextIndex: number) => {
    setImageIndex(nextIndex);
    setUseFallback(false);
  };

  return (
    <article className="card-lift group overflow-hidden rounded-[20px] bg-white shadow-sm ring-1 ring-leaf-100 sm:rounded-3xl">
      <div className="relative aspect-[4/3] overflow-hidden bg-leaf-100">
        <img
          src={useFallback ? fallbackImage : activeImage.src}
          alt={useFallback ? `${product.name} — image coming soon` : activeImage.alt}
          loading="lazy"
          onError={() => setUseFallback(true)}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
        />
        {useFallback && (
          <span className="absolute left-3 top-3 rounded-full bg-leaf-950/75 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-white backdrop-blur">
            Photo coming soon
          </span>
        )}
        {hasMultipleImages && !useFallback && (
          <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-leaf-950/70 via-leaf-950/20 to-transparent px-2.5 pb-2.5 pt-8">
            <button
              type="button"
              onClick={() => showImage((imageIndex - 1 + product.images.length) % product.images.length)}
              aria-label={`Previous ${product.name} photo`}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-leaf-900 shadow backdrop-blur transition hover:bg-white active:scale-95"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4" aria-hidden>
                <path d="m15 18-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div className="flex items-center gap-1.5" aria-label={`${imageIndex + 1} of ${product.images.length} photos`}>
              {product.images.map((image, index) => (
                <button
                  key={image.src}
                  type="button"
                  onClick={() => showImage(index)}
                  aria-label={`Show ${product.name} photo ${index + 1}`}
                  className={`h-1.5 rounded-full transition-all ${index === imageIndex ? "w-5 bg-white" : "w-1.5 bg-white/60 hover:bg-white/90"}`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => showImage((imageIndex + 1) % product.images.length)}
              aria-label={`Next ${product.name} photo`}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-leaf-900 shadow backdrop-blur transition hover:bg-white active:scale-95"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4" aria-hidden>
                <path d="m9 18 6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        )}
      </div>

      <div className="p-4 sm:p-5">
        <p className="text-[11px] font-bold uppercase tracking-widest text-terra-500">{categoryName}</p>
        <h3 className="mt-1 font-display text-[17px] font-semibold leading-tight text-leaf-900 sm:text-lg">{product.name}</h3>
        <p className="mt-1.5 line-clamp-2 text-[13px] leading-relaxed text-leaf-800/65">{product.description}</p>
        <a
          href={waLink(`Assalam-o-Alaikum! I'd like to ask about ${product.name} at Ajmal Garden Nursery.`)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-leaf-50 px-3.5 py-2 text-xs font-semibold text-leaf-800 ring-1 ring-leaf-100 transition hover:bg-leaf-900 hover:text-white hover:ring-leaf-900"
        >
          <WhatsAppIcon className="h-3.5 w-3.5 text-[#25D366]" />
          Ask about availability
          <span aria-hidden className="transition group-hover:translate-x-0.5">
            →
          </span>
        </a>
      </div>
    </article>
  );
}
