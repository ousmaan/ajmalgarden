import { useMemo, useState } from "react";
import ProductCard from "../components/ProductCard";
import { catalogForCategory } from "../data/catalog";
import { CATEGORIES, waLink } from "../data/site";
import { WhatsAppIcon } from "../components/CtaButtons";

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("all");
  const visibleCategories = useMemo(
    () =>
      activeCategory === "all"
        ? CATEGORIES
        : CATEGORIES.filter((category) => category.id === activeCategory),
    [activeCategory]
  );

  return (
    <>
      {/* ---------- PAGE HERO ---------- */}
      <section className="relative overflow-hidden bg-leaf-900">
        <div className="blob absolute -left-24 -top-24 h-80 w-80 bg-leaf-800/60" aria-hidden="true" />
        <div className="blob absolute -bottom-28 -right-20 h-96 w-96 bg-leaf-800/40" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-terra-300">
            Our Plant & Garden Collection
          </p>
          <h1 className="font-display max-w-3xl text-4xl font-bold text-white sm:text-5xl">
            From Flowering Favourites to Premium Plants & Garden Decor
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-leaf-100/85">
            Explore the kinds of plants, fruit trees, planters and garden features you can find at
            Ajmal Garden Nursery. Stock changes with the seasons, so call or WhatsApp us to check
            what is ready today.
          </p>
        </div>
      </section>

      {/* ---------- CATEGORY FILTER ---------- */}
      <nav className="sticky top-[65px] z-30 border-b border-leaf-100 bg-cream/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl gap-2 overflow-x-auto px-4 py-3 sm:px-6">
          <button
            type="button"
            onClick={() => setActiveCategory("all")}
            className={`cursor-pointer whitespace-nowrap rounded-full px-4 py-1.5 text-xs font-semibold transition-colors ${
              activeCategory === "all"
                ? "bg-leaf-700 text-white"
                : "bg-leaf-100 text-leaf-800 hover:bg-leaf-700 hover:text-white"
            }`}
          >
            All collections
          </button>
          {CATEGORIES.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() => setActiveCategory(category.id)}
              className={`cursor-pointer whitespace-nowrap rounded-full px-4 py-1.5 text-xs font-semibold transition-colors ${
                activeCategory === category.id
                  ? "bg-leaf-700 text-white"
                  : "bg-leaf-100 text-leaf-800 hover:bg-leaf-700 hover:text-white"
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
          return (
            <section
              key={category.id}
              id={category.id}
              className="scroll-mt-36 border-b border-leaf-100 py-16 last:border-b-0 sm:py-20"
            >
              <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
                <div className="relative overflow-hidden rounded-3xl bg-leaf-900">
                  <img
                    src={category.image}
                    alt={category.imageAlt}
                    loading="lazy"
                    className="h-56 w-full object-cover opacity-80 sm:h-64"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-leaf-950/85 to-leaf-950/10" />
                  <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                    <span className="text-xs font-bold uppercase tracking-widest text-terra-200">
                      {String(categoryIndex + 1).padStart(2, "0")} / {String(CATEGORIES.length).padStart(2, "0")}
                    </span>
                    <h2 className="mt-1 font-display text-3xl font-semibold">{category.name}</h2>
                  </div>
                </div>

                <div>
                  <p className="max-w-2xl leading-relaxed text-leaf-800/80">{category.description}</p>
                  <ul className="mt-5 grid gap-x-6 gap-y-2 sm:grid-cols-2">
                    {category.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-2 text-sm text-leaf-800">
                        <svg
                          className="mt-0.5 h-4 w-4 shrink-0 text-terra-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.7 5.3a1 1 0 0 1 0 1.4l-8 8a1 1 0 0 1-1.4 0l-4-4a1 1 0 1 1 1.4-1.4L8 12.58l7.3-7.3a1 1 0 0 1 1.4 0Z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {catalog ? (
                <div className="mt-12 space-y-12">
                  {catalog.groups.map((group) => (
                    <div key={group.title}>
                      <div className="mb-6 max-w-2xl">
                        <h3 className="font-display text-2xl font-semibold text-leaf-900 sm:text-3xl">
                          {group.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-leaf-800/70">
                          {group.description}
                        </p>
                      </div>
                      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
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
                <div className="mt-10 flex flex-col justify-between gap-5 border-y border-leaf-100 py-7 sm:flex-row sm:items-center">
                  <div>
                    <p className="font-display text-xl font-semibold text-leaf-900">
                      Looking for something specific?
                    </p>
                    <p className="mt-1 max-w-xl text-sm leading-relaxed text-leaf-800/70">
                      This collection changes frequently. Send a photo or plant name and our team
                      will confirm what is currently available.
                    </p>
                  </div>
                  <a
                    href={waLink(
                      `Assalam-o-Alaikum! I'm interested in your ${category.name}. Can you please share what is available?`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white shadow transition-transform hover:scale-105"
                  >
                    <WhatsAppIcon className="h-4 w-4" />
                    Ask on WhatsApp
                  </a>
                </div>
              )}
            </section>
          );
        })}
      </div>

      {/* ---------- BOTTOM NOTE ---------- */}
      <section className="leaf-texture bg-leaf-50 py-14 text-center">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-leaf-900 sm:text-3xl">
            Cannot Find What You Are Looking For?
          </h2>
          <p className="mt-3 text-leaf-800/75">
            Our stock is far bigger than any webpage. Send us a photo or plant name on WhatsApp
            and we will help you find the closest available option.
          </p>
          <a
            href={waLink("Assalam-o-Alaikum! I'm looking for a specific plant. Can I send you a photo?")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-leaf-700 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-105 hover:bg-leaf-800"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Send a Plant Request
          </a>
        </div>
      </section>
    </>
  );
}