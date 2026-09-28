import { useState } from "react";
import { Link } from "react-router-dom";
import type { CatalogProduct } from "../data/catalog";
import { waLink } from "../data/site";
import { track } from "../utils/track";
import { useWishlist } from "../lib/wishlist";
import { WhatsAppIcon } from "./CtaButtons";

export default function ProductCard({
  product,
  categoryId,
  fallbackImage,
  categoryName,
}: {
  product: CatalogProduct;
  /** Home collection — builds the detail URL `/catalog/:categoryId/:productId`. */
  categoryId: string;
  fallbackImage: string;
  categoryName: string;
}) {
  const [imageIndex, setImageIndex] = useState(0);
  const [useFallback, setUseFallback] = useState(false);
  const wishlist = useWishlist();
  const saved = wishlist.has(categoryId, product.id);
  const detailTo = `/catalog/${categoryId}/${product.id}`;
  const activeImage = product.images[imageIndex];
  const hasMultipleImages = product.images.length > 1;

  const showImage = (nextIndex: number) => {
    setImageIndex(nextIndex);
    setUseFallback(false);
  };

  return (
    <article className="card-lift group overflow-hidden rounded-[20px] bg-white shadow-sm ring-1 ring-leaf-100 sm:rounded-3xl">
      <div className="relative aspect-[4/3] overflow-hidden bg-leaf-100">
        <Link to={detailTo} aria-label={`View ${product.name}`} className="block h-full w-full">
          <img
            src={useFallback ? fallbackImage : activeImage.src}
            alt={useFallback ? `${product.name} — image coming soon` : activeImage.alt}
            loading="lazy"
            onError={() => setUseFallback(true)}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
          />
        </Link>
        <button
          type="button"
          onClick={() => {
            wishlist.toggle(categoryId, product.id);
            track("wishlist_toggle", { source: `card-${product.id}` });
          }}
          aria-pressed={saved}
          aria-label={saved ? `Remove ${product.name} from list` : `Save ${product.name} to list`}
          className={`absolute right-2.5 top-2.5 flex h-9 w-9 items-center justify-center rounded-full shadow backdrop-blur transition active:scale-95 ${saved ? "bg-leaf-900 text-white" : "bg-white/90 text-leaf-900 hover:bg-white"}`}
        >
          <svg viewBox="0 0 24 24" fill={saved ? "currentColor" : "none"} stroke="currentColor" strokeWidth={2} className="h-4 w-4" aria-hidden>
            <path d="M12 20.5C7 16.5 3 13.2 3 9.3 3 6.4 5.2 4.5 7.7 4.5c1.7 0 3.3.9 4.3 2.4 1-1.5 2.6-2.4 4.3-2.4 2.5 0 4.7 1.9 4.7 4.8 0 3.9-4 7.2-9 11.2Z" strokeLinejoin="round" />
          </svg>
        </button>
        {useFallback && (
          <span className="absolute left-3 top-3 rounded-full bg-leaf-950/75 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-white backdrop-blur">
            Photo coming soon
          </span>
        )}
        {hasMultipleImages && !useFallback && (
          <div
            className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-leaf-950/70 via-leaf-950/20 to-transparent px-2.5 pb-2.5 pt-8"
            role="group"
            aria-label={`${product.name} photos`}
            onKeyDown={(e) => {
              if (e.key === "ArrowRight") showImage((imageIndex + 1) % product.images.length);
              if (e.key === "ArrowLeft")
                showImage((imageIndex - 1 + product.images.length) % product.images.length);
            }}
          >
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
                  aria-current={index === imageIndex ? "true" : undefined}
                  className={`relative h-1.5 rounded-full transition-all after:absolute after:-inset-2 after:content-[''] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-1 focus-visible:ring-offset-leaf-950 ${index === imageIndex ? "w-5 bg-white" : "w-1.5 bg-white/60 hover:bg-white/90"}`}
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
        <h3 className="mt-1 font-display text-[17px] font-semibold leading-tight text-leaf-900 sm:text-lg">
          <Link to={detailTo} className="transition-colors hover:text-leaf-700">
            {product.name}
          </Link>
        </h3>
        {product.nameUr && (
          <p className="mt-0.5 text-sm text-leaf-800/60" lang="ur">{product.nameUr}</p>
        )}
        <p className="mt-1.5 line-clamp-2 text-[13px] leading-relaxed text-leaf-800/65">{product.description}</p>
        <a
          href={waLink(`Assalam-o-Alaikum! I'd like to ask about ${product.name} at Ajmal Garden Nursery.`)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => track("product_ask", { source: `product-${product.id}` })}
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
