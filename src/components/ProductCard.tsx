import { useState } from "react";
import type { CatalogProduct } from "../data/catalog";
import { waLink } from "../data/site";
import { WhatsAppIcon } from "./CtaButtons";

/**
 * Product gallery card that gracefully uses the category photo when a named
 * real asset has not yet been added to public/images/products.
 */
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
    <article className="group overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-leaf-100 transition-shadow hover:shadow-lg">
      <div className="relative aspect-[4/3] overflow-hidden bg-leaf-100">
        <img
          src={useFallback ? fallbackImage : activeImage.src}
          alt={useFallback ? `${product.name} - image placeholder` : activeImage.alt}
          loading="lazy"
          onError={() => setUseFallback(true)}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        {useFallback && (
          <span className="absolute left-3 top-3 rounded-full bg-leaf-950/75 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-white">
            Photo coming soon
          </span>
        )}
        {hasMultipleImages && (
          <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-leaf-950/70 to-transparent px-3 pb-3 pt-10">
            <button
              type="button"
              onClick={() =>
                showImage((imageIndex - 1 + product.images.length) % product.images.length)
              }
              aria-label={`Previous ${product.name} photo`}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-leaf-900 shadow transition hover:bg-white"
            >
              <span aria-hidden="true">&larr;</span>
            </button>
            <div className="flex items-center gap-1.5" aria-label={`${imageIndex + 1} of ${product.images.length} photos`}>
              {product.images.map((image, index) => (
                <button
                  key={image.src}
                  type="button"
                  onClick={() => showImage(index)}
                  aria-label={`Show ${product.name} photo ${index + 1}`}
                  className={`h-1.5 rounded-full transition-all ${
                    index === imageIndex ? "w-4 bg-white" : "w-1.5 bg-white/60 hover:bg-white"
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => showImage((imageIndex + 1) % product.images.length)}
              aria-label={`Next ${product.name} photo`}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-leaf-900 shadow transition hover:bg-white"
            >
              <span aria-hidden="true">&rarr;</span>
            </button>
          </div>
        )}
      </div>

      <div className="p-5">
        <p className="text-[11px] font-semibold uppercase tracking-widest text-terra-500">
          {categoryName}
        </p>
        <h3 className="mt-1 font-display text-xl font-semibold text-leaf-900">{product.name}</h3>
        <p className="mt-2 min-h-10 text-sm leading-relaxed text-leaf-800/75">{product.description}</p>
        <a
          href={waLink(
            `Assalam-o-Alaikum! I'd like to ask about ${product.name} at Ajmal Garden Nursery.`
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-leaf-700 transition-colors hover:text-leaf-950"
        >
          <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
          Ask about availability
          <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </article>
  );
}