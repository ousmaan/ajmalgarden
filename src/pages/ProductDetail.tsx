import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { findProduct, relatedProducts } from "../data/catalog";
import { CATEGORIES, waLink } from "../data/site";
import { usePageMeta } from "../hooks/usePageMeta";
import { useWishlist } from "../lib/wishlist";
import { track } from "../utils/track";
import { WhatsAppIcon } from "../components/CtaButtons";
import ProductCard from "../components/ProductCard";
import NotFound from "./NotFound";

/**
 * Store-style product page without a store (plan Phase 1): gallery, story,
 * collection context, related plants — every buy action resolves to
 * WhatsApp / wishlist. Mobile gets a sticky bottom CTA bar; desktop a
 * two-column gallery + info rail. Same blocks, both canvases.
 */
export default function ProductDetail() {
  const { categoryId = "", productId = "" } = useParams();
  const hit = findProduct(categoryId, productId);
  const [imageIndex, setImageIndex] = useState(0);
  const [failed, setFailed] = useState(false);
  const wishlist = useWishlist();

  const category = CATEGORIES.find((c) => c.id === categoryId);
  usePageMeta(
    hit ? `${hit.product.name} — Ajmal Garden Nursery` : "Plant — Ajmal Garden Nursery",
    hit
      ? `${hit.product.name}: ${hit.product.description} Ask on WhatsApp for today's availability at Ajmal Garden Nursery, Sialkot.`
      : undefined,
  );

  if (!hit || !category) return <NotFound />;

  const { product } = hit;
  const saved = wishlist.has(categoryId, productId);
  const askHref = waLink(
    `Assalam-o-Alaikum! I'd like to ask about ${product.name} at Ajmal Garden Nursery.`,
  );
  const images = product.images.length > 0 ? product.images : [];
  const activeImage = images[imageIndex];
  const related = relatedProducts(categoryId, productId, 3);

  return (
    <>
      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="mx-auto max-w-6xl px-4 pt-6 sm:px-6">
        <ol className="flex flex-wrap items-center gap-1.5 text-xs text-leaf-800/55">
          <li><Link to="/" className="hover:text-leaf-900 hover:underline">Home</Link></li>
          <li aria-hidden>/</li>
          <li><Link to="/products" className="hover:text-leaf-900 hover:underline">Collection</Link></li>
          <li aria-hidden>/</li>
          <li>
            <Link to={`/products#${category.id}`} className="hover:text-leaf-900 hover:underline">
              {category.name}
            </Link>
          </li>
          <li aria-hidden>/</li>
          <li aria-current="page" className="font-semibold text-leaf-900">{product.name}</li>
        </ol>
      </nav>

      <section className="mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-10">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-10">
          {/* Gallery */}
          <div>
            <div className="relative overflow-hidden rounded-[22px] bg-leaf-100 ring-1 ring-leaf-100 sm:rounded-3xl">
              {activeImage && !failed ? (
                <img
                  key={activeImage.src}
                  src={activeImage.src}
                  alt={activeImage.alt}
                  onError={() => setFailed(true)}
                  className="aspect-[4/3] w-full object-cover soft-in"
                />
              ) : (
                <img src={category.image} alt={`${product.name} — photo coming soon`} className="aspect-[4/3] w-full object-cover" />
              )}
              {failed && (
                <span className="absolute left-3 top-3 rounded-full bg-leaf-950/75 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-white backdrop-blur">
                  Photo coming soon
                </span>
              )}
            </div>
            {images.length > 1 && (
              <div className="no-scrollbar mt-3 flex gap-2 overflow-x-auto pb-1" role="tablist" aria-label={`${product.name} photos`}>
                {images.map((img, i) => (
                  <button
                    key={img.src}
                    role="tab"
                    aria-selected={i === imageIndex}
                    aria-label={`Show photo ${i + 1}`}
                    type="button"
                    onClick={() => {
                      setImageIndex(i);
                      setFailed(false);
                    }}
                    className={`h-16 w-20 shrink-0 overflow-hidden rounded-xl ring-2 transition ${i === imageIndex ? "ring-leaf-800" : "ring-transparent opacity-70 hover:opacity-100"}`}
                  >
                    <img src={img.src} alt="" loading="lazy" className="h-full w-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Info rail */}
          <div className="pb-20 lg:pb-0">
            <p className="text-[11px] font-bold uppercase tracking-widest text-terra-500">
              {category.name} · {hit.groupTitle}
            </p>
            <h1 className="mt-1.5 font-display text-[28px] font-bold leading-tight tracking-tight text-leaf-900 sm:text-4xl">
              {product.name}
            </h1>
            {product.nameUr && (
              <p className="mt-1 text-lg text-leaf-800/70" lang="ur">{product.nameUr}</p>
            )}
            <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-leaf-800/75">
              {product.description}
            </p>

            {product.tags && product.tags.length > 0 && (
              <ul className="mt-4 flex flex-wrap gap-2" aria-label="Plant features">
                {product.tags.map((tag) => (
                  <li key={tag} className="rounded-full bg-leaf-50 px-3 py-1.5 text-xs font-semibold text-leaf-800 ring-1 ring-leaf-100">
                    {tag}
                  </li>
                ))}
              </ul>
            )}

            <div className="mt-5 rounded-2xl bg-leaf-50 p-4 text-sm leading-relaxed text-leaf-800/70 ring-1 ring-leaf-100">
              <span className="font-semibold text-leaf-900">Seasonal stock.</span> What&apos;s on the
              benches changes through the year — message us and we&apos;ll check today&apos;s
              availability before you visit.
            </div>

            {/* Desktop CTAs (mobile uses the sticky bar below) */}
            <div className="mt-6 hidden gap-3 lg:flex">
              <a
                href={askHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track("product_ask", { source: `detail-${product.id}` })}
                className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white shadow-md transition hover:bg-[#1fb959] active:scale-[0.98]"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Ask about availability
              </a>
              <button
                type="button"
                onClick={() => {
                  wishlist.toggle(categoryId, productId);
                  track("wishlist_toggle", { source: `detail-${product.id}` });
                }}
                aria-pressed={saved}
                className={`inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold ring-1 transition active:scale-[0.98] ${saved ? "bg-leaf-900 text-white ring-leaf-900" : "bg-white text-leaf-900 ring-leaf-200 hover:bg-leaf-50"}`}
              >
                <svg viewBox="0 0 24 24" fill={saved ? "currentColor" : "none"} stroke="currentColor" strokeWidth={2} className="h-4 w-4" aria-hidden>
                  <path d="M12 20.5C7 16.5 3 13.2 3 9.3 3 6.4 5.2 4.5 7.7 4.5c1.7 0 3.3.9 4.3 2.4 1-1.5 2.6-2.4 4.3-2.4 2.5 0 4.7 1.9 4.7 4.8 0 3.9-4 7.2-9 11.2Z" strokeLinejoin="round" />
                </svg>
                {saved ? "Saved to list" : "Save to list"}
              </button>
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <div className="mt-12 sm:mt-16">
            <div className="mb-5 flex items-end justify-between gap-3">
              <h2 className="font-display text-[22px] font-semibold tracking-tight text-leaf-900 sm:text-2xl">
                You may also like
              </h2>
              <Link to={`/products#${category.id}`} className="shrink-0 text-xs font-semibold text-leaf-800 hover:text-leaf-900 hover:underline">
                More {category.name} →
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-3">
              {related.map((rel) => (
                <ProductCard
                  key={rel.product.id}
                  product={rel.product}
                  categoryId={rel.categoryId}
                  fallbackImage={category.image}
                  categoryName={category.name}
                />
              ))}
            </div>
          </div>
        )}
      </section>

      {/* Sticky mobile CTA bar */}
      <div className="fixed inset-x-0 bottom-0 z-30 border-t border-leaf-100 bg-cream/95 px-4 py-3 backdrop-blur-xl lg:hidden" style={{ paddingBottom: "calc(0.75rem + env(safe-area-inset-bottom, 0px))" }}>
        <div className="mx-auto flex max-w-6xl gap-2.5">
          <button
            type="button"
            onClick={() => {
              wishlist.toggle(categoryId, productId);
              track("wishlist_toggle", { source: `detail-bar-${product.id}` });
            }}
            aria-pressed={saved}
            aria-label={saved ? "Remove from list" : "Save to list"}
            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ring-1 transition active:scale-95 ${saved ? "bg-leaf-900 text-white ring-leaf-900" : "bg-white text-leaf-900 ring-leaf-200"}`}
          >
            <svg viewBox="0 0 24 24" fill={saved ? "currentColor" : "none"} stroke="currentColor" strokeWidth={2} className="h-5 w-5" aria-hidden>
              <path d="M12 20.5C7 16.5 3 13.2 3 9.3 3 6.4 5.2 4.5 7.7 4.5c1.7 0 3.3.9 4.3 2.4 1-1.5 2.6-2.4 4.3-2.4 2.5 0 4.7 1.9 4.7 4.8 0 3.9-4 7.2-9 11.2Z" strokeLinejoin="round" />
            </svg>
          </button>
          <a
            href={askHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track("product_ask", { source: `detail-bar-${product.id}` })}
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 text-sm font-semibold text-white shadow-md transition hover:bg-[#1fb959] active:scale-[0.99]"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Ask about availability
          </a>
        </div>
      </div>
    </>
  );
}
