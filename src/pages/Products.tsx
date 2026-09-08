import { useEffect, useMemo, useRef, useState } from "react";
import ProductCard from "../components/ProductCard";
import { catalogForCategory } from "../data/catalog";
import { CATEGORIES, waLink } from "../data/site";
import { WhatsAppIcon } from "../components/CtaButtons";

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("all");
  const scrollRef = useRef<HTMLDivElement>(null);

  const visibleCategories = useMemo(
    () =>
      activeCategory === "all"
        ? CATEGORIES
        : CATEGORIES.filter((category) => category.id === activeCategory),
    [activeCategory],
  );

  useEffect(() => {
    if (activeCategory !== "all") {
      const el = document.getElementById(activeCategory);
      if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 80);
    }
  }, [activeCategory]);

  return (
    <>
      {/* ---------- PAGE HERO ---------- */}
      <section className="relative overflow-hidden bg-leaf-950">
        <div className="absolute inset-0 leaf-texture opacity-[0.07]" aria-hidden />
        <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-leaf-800/40 blur-2xl" aria-hidden />
        <div className="absolute -bottom-28 -right-20 h-80 w-80 rounded-full bg-terra-500/15 blur-3xl" aria-hidden />
        <div className="absolute right-10 top-10 hidden h-40 w-40 rounded-full bg-marigold/10 blur-2xl lg:block" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
          <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-terra-300">
            <span className="h-1.5 w-1.5 rounded-full bg-marigold" aria-hidden /> Our Plant & Garden Collection
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-[28px] font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            From flowering favourites to
            <span className="text-terra-200"> premium plants & garden decor.</span>
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-leaf-100/70 sm:text-[15px]">
            Explore the kinds of plants, fruit trees, planters and garden features you can find at Ajmal Garden
            Nursery. Stock changes with the seasons — call or WhatsApp to check what&apos;s ready today.
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-2 text-xs">
            <span className="rounded-full bg-white/10 px-3 py-1.5 font-medium text-leaf-100 ring-1 ring-white/10">
              7 collections
            </span>
            <span className="rounded-full bg-white/10 px-3 py-1.5 font-medium text-leaf-100 ring-1 ring-white/10">
              Seasonal stock
            </span>
            <span className="rounded-full bg-white/10 px-3 py-1.5 font-medium text-leaf-100 ring-1 ring-white/10">
              No online ordering
            </span>
          </div>
        </div>
      </section>

      {/* ---------- CATEGORY FILTER — sticky, snap, fade ---------- */}
      <nav className="sticky top-[57px] z-30 border-b border-leaf-100 bg-cream/95 backdrop-blur-xl sm:top-[61px]">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-6 bg-gradient-to-r from-cream to-transparent sm:w-8" aria-hidden />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-6 bg-gradient-to-l from-cream to-transparent sm:w-8" aria-hidden />
        <div
          ref={scrollRef}
          className="no-scrollbar mx-auto flex max-w-6xl snap-x snap-mandatory gap-2 overflow-x-auto px-4 py-3.5 sm:px-6"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          <button
            type="button"
            onClick={() => setActiveCategory("all")}
            className={`shrink-0 snap-start whitespace-nowrap rounded-full px-4 py-2 text-xs font-semibold transition-all active:scale-[0.98] ${
              activeCategory === "all"
                ? "bg-leaf-900 text-white shadow-sm"
                : "bg-white text-leaf-800 ring-1 ring-leaf-200 hover:bg-leaf-900 hover:text-white hover:ring-leaf-900"
            }`}
          >
            All collections
          </button>
          {CATEGORIES.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() => setActiveCategory(category.id)}
              className={`shrink-0 snap-start whitespace-nowrap rounded-full px-4 py-2 text-xs font-semibold transition-all active:scale-[0.98] ${
                activeCategory === category.id
                  ? "bg-leaf-900 text-white shadow-sm"
                  : "bg-white text-leaf-800 ring-1 ring-leaf-200 hover:bg-leaf-900 hover:text-white hover:ring-leaf-900"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </nav>

      {/* ---------- CATEGORY CATALOG ---------- */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {visibleCategories.map((category, categoryIndex) => {
          const catalog = catalogForCategory(category.id);
          const isEven = categoryIndex % 2 === 0;
          return (
            <section
              key={category.id}
              id={category.id}
              className="scroll-mt-36 border-b border-leaf-100 py-10 last:border-b-0 sm:py-14"
            >
              <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-8">
                <div className="relative overflow-hidden rounded-[22px] bg-leaf-950 ring-1 ring-leaf-100 sm:rounded-3xl">
                  <img
                    src={category.image}
                    alt={category.imageAlt}
                    loading="lazy"
                    className="h-52 w-full object-cover opacity-90 sm:h-60"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-leaf-950/85 via-leaf-950/15 to-transparent" />
                  <div className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-leaf-900 shadow-sm backdrop-blur">
                    {String(categoryIndex + 1).padStart(2, "0")} / {String(CATEGORIES.length).padStart(2, "0")}
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                    <h2 className="font-display text-[22px] font-semibold leading-tight text-white sm:text-2xl">
                      {category.name}
                    </h2>
                    <p className="mt-1 hidden text-xs leading-relaxed text-leaf-100/70 sm:block">
                      {category.short}
                    </p>
                  </div>
                </div>

                <div className={isEven ? "" : "lg:order-first"}>
                  <p className="text-sm leading-relaxed text-leaf-800/75 sm:text-[15px]">{category.description}</p>
                  <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                    {category.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-2 text-sm leading-relaxed text-leaf-800">
                        <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-terra-500 text-[10px] font-bold leading-none text-white">
                          ✓
                        </span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                  {!catalog && (
                    <a
                      href={waLink(
                        `Assalam-o-Alaikum! I'm interested in your ${category.name}. Can you please share what is available?`,
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#1fb959] active:scale-[0.98]"
                    >
                      <WhatsAppIcon className="h-4 w-4" />
                      Ask on WhatsApp
                    </a>
                  )}
                </div>
              </div>

              {catalog ? (
                <div className="mt-8 space-y-10 sm:mt-10">
                  {catalog.groups.map((group) => (
                    <div key={group.title}>
                      <div className="mb-5 flex items-start justify-between gap-4 sm:mb-6">
                        <div className="max-w-2xl">
                          <h3 className="font-display text-[20px] font-semibold tracking-tight text-leaf-900 sm:text-2xl">
                            {group.title}
                          </h3>
                          <p className="mt-1.5 text-sm leading-relaxed text-leaf-800/60">{group.description}</p>
                        </div>
                      </div>
                      <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-3">
                        {group.products.map((product) => (
                          <ProductCard
                            key={product.id}
                            product={product}
                            fallbackImage={category.image}
                            categoryName={category.name}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="mt-6 rounded-[20px] bg-leaf-50 p-5 ring-1 ring-leaf-100 sm:mt-8 sm:p-6">
                  <p className="font-display text-[15px] font-semibold text-leaf-900">Looking for something specific?</p>
                  <p className="mt-1 max-w-xl text-sm leading-relaxed text-leaf-800/60">
                    This collection changes frequently. Send a photo or plant name and our team will confirm what is
                    currently available.
                  </p>
                </div>
              )}
            </section>
          );
        })}
      </div>

      {/* ---------- BOTTOM NOTE ---------- */}
      <section className="leaf-texture-strong relative overflow-hidden bg-sage-50/60 py-10 text-center sm:py-14">
        <div className="pointer-events-none absolute -right-16 top-0 h-48 w-48 rounded-full bg-terra-100/60 blur-3xl" aria-hidden />
        <div className="relative mx-auto max-w-2xl px-4 sm:px-6">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-terra-500">Can&apos;t find it?</p>
          <h2 className="mt-1 font-display text-[22px] font-semibold tracking-tight text-leaf-900 sm:text-3xl">
            Our stock is far bigger than any webpage.
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-leaf-800/60 sm:text-[15px]">
            Send us a photo or plant name on WhatsApp and we will help you find the closest available option.
          </p>
          <a
            href={waLink("Assalam-o-Alaikum! I'm looking for a specific plant. Can I send you a photo?")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-leaf-900 px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:bg-leaf-800 active:scale-[0.98]"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Send a Plant Request
          </a>
          <p className="mt-3 text-xs text-leaf-800/50">We usually reply within a few hours — 6 AM to 8 PM daily.</p>
        </div>
      </section>
    </>
  );
}
