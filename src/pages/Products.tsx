import { useEffect, useMemo, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { PRODUCT_CATALOG, catalogForCategory } from "../data/catalog";
import { CATEGORIES, waLink } from "../data/site";
import { useLang } from "../i18n/lang";
import { WhatsAppIcon } from "../components/CtaButtons";
import { usePageMeta } from "../hooks/usePageMeta";

export default function Products() {
  const location = useLocation();
  const { t } = useLang();
  // Deep-link safe: Home category cards link to `/products#<id>` — pick it up
  // on mount so refresh preserves the filter. (We never *write* the hash here:
  // the router owns the location.)
  const [activeCategory, setActiveCategory] = useState(() => {
    const fromHash = location.hash.replace("#", "");
    return CATEGORIES.some((category) => category.id === fromHash) ? fromHash : "all";
  });
  // NurseryLive-style instant search (plan §4 step one: local filter over the
  // static catalog; Fuse index + suggest dropdown arrive with the snapshot).
  const [query, setQuery] = useState("");
  const [sortAZ, setSortAZ] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  usePageMeta(
    "Plant & Garden Collection — Ajmal Garden Nursery",
    "Browse flowering plants, indoor plants, trees, bonsai, succulents and garden decor at Ajmal Garden Nursery, Sialkot. Seasonal stock — WhatsApp to check availability.",
  );

  const q = query.trim().toLowerCase();
  const productMatches = (p: { name: string; description: string }) =>
    q.length === 0 ||
    p.name.toLowerCase().includes(q) ||
    p.description.toLowerCase().includes(q);

  const visibleCategories = useMemo(() => {
    const byTab =
      activeCategory === "all"
        ? CATEGORIES
        : CATEGORIES.filter((category) => category.id === activeCategory);
    if (!q) return byTab;
    return byTab.filter(
      (category) =>
        category.name.toLowerCase().includes(q) ||
        category.short.toLowerCase().includes(q) ||
        category.description.toLowerCase().includes(q) ||
        category.highlights.some((h) => h.toLowerCase().includes(q)) ||
        (PRODUCT_CATALOG.find((s) => s.categoryId === category.id)?.groups.some((g) =>
          g.products.some(productMatches),
        ) ??
          false),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeCategory, q]);

  const matchedProductCount = useMemo(
    () =>
      visibleCategories.reduce(
        (total, category) =>
          total +
          (PRODUCT_CATALOG.find((s) => s.categoryId === category.id)?.groups.reduce(
            (gTotal, g) => gTotal + g.products.filter(productMatches).length,
            0,
          ) ?? 0),
        0,
      ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [visibleCategories, q],
  );

  const categoryCounts = useMemo(() => {
    const m = new Map<string, number>();
    for (const c of CATEGORIES) {
      m.set(
        c.id,
        PRODUCT_CATALOG.find((s) => s.categoryId === c.id)?.groups.reduce(
          (total, g) => total + g.products.filter(productMatches).length,
          0,
        ) ?? 0,
      );
    }
    return m;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [q]);

  useEffect(() => {
    if (activeCategory !== "all") {
      const el = document.getElementById(activeCategory);
      if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 80);
    }
  }, [activeCategory]);

  // Same-page hash navigation (e.g. search overlay → another collection while
  // already on /products): keep the filter in sync without a remount.
  useEffect(() => {
    const id = location.hash.replace("#", "");
    if (CATEGORIES.some((category) => category.id === id)) setActiveCategory(id);
    else if (id === "") setActiveCategory("all");
  }, [location.hash]);

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
            <span className="h-1.5 w-1.5 rounded-full bg-marigold" aria-hidden /> {t("prod.kicker")}
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-[28px] font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            {t("prod.title_a")}
            <span className="text-terra-200"> {t("prod.title_b")}</span>
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-leaf-100/70 sm:text-[15px]">
            {t("prod.sub")}
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-2 text-xs">
            <span className="rounded-full bg-white/10 px-3 py-1.5 font-medium text-leaf-100 ring-1 ring-white/10">
              {CATEGORIES.length} {t("prod.badge_count")}
            </span>
            <span className="rounded-full bg-white/10 px-3 py-1.5 font-medium text-leaf-100 ring-1 ring-white/10">
              {t("prod.badge_seasonal")}
            </span>
            <span className="rounded-full bg-white/10 px-3 py-1.5 font-medium text-leaf-100 ring-1 ring-white/10">
              {t("prod.badge_noorder")}
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
            aria-pressed={activeCategory === "all"}
            className={`shrink-0 snap-start whitespace-nowrap rounded-full px-4 py-2 text-xs font-semibold transition-all active:scale-[0.98] ${
              activeCategory === "all"
                ? "bg-leaf-900 text-white shadow-sm"
                : "bg-white text-leaf-800 ring-1 ring-leaf-200 hover:bg-leaf-900 hover:text-white hover:ring-leaf-900"
            }`}
          >
            {t("cat.all")}
          </button>
          {CATEGORIES.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() => setActiveCategory(category.id)}
              aria-pressed={activeCategory === category.id}
              aria-current={activeCategory === category.id ? "true" : undefined}
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
        {/* Instant search — filters collections + products as you type. */}
        <div className="pt-8">
          <div className="flex flex-col gap-3 rounded-[20px] bg-white p-4 shadow-sm ring-1 ring-leaf-100 sm:flex-row sm:items-center sm:p-5">
            <label htmlFor="catalog-search" className="sr-only">
              {t("cat.search_label")}
            </label>
            <div className="relative flex-1">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                aria-hidden
                className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-leaf-800/40"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-3.5-3.5" />
              </svg>
              <input
                id="catalog-search"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={t("cat.search_ph")}
                autoComplete="off"
                className="w-full rounded-full border border-leaf-200 bg-cream py-3 pl-11 pr-10 text-sm text-leaf-900 outline-none transition placeholder:text-leaf-800/35 focus:border-leaf-400 focus:bg-white focus:ring-4 focus:ring-leaf-100"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  aria-label={t("cat.clear_search")}
                  className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full text-leaf-800/50 transition hover:bg-leaf-50 hover:text-leaf-900"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4" aria-hidden>
                    <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
                  </svg>
                </button>
              )}
            </div>
            <p className="shrink-0 text-xs text-leaf-800/55 sm:text-right" role="status" aria-live="polite">
              {q ? (
                <>
                  <strong className="font-semibold text-leaf-900">{matchedProductCount}</strong> {t("cat.results")}{" "}
                  {t("cat.results_in")} <strong className="font-semibold text-leaf-900">{visibleCategories.length}</strong>{" "}
                  {t("cat.collections")} {t("cat.for")} “{query.trim()}”
                </>
              ) : (
                t("cat.tip")
              )}
            </p>
          </div>
        </div>

        {visibleCategories.length === 0 && (
          <div className="py-10 text-center sm:py-14">
            <p className="font-display text-[22px] font-semibold tracking-tight text-leaf-900">
              {t("cat.empty_title")} “{query.trim()}”.
            </p>
            <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-leaf-800/60">
              {t("cat.empty_sub")}
            </p>
            <a
              href={waLink(`Assalam-o-Alaikum! I'm looking for "${query.trim()}" at Ajmal Garden Nursery. Do you have it?`)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white shadow-md transition hover:bg-[#1fb959] active:scale-[0.98]"
            >
              <WhatsAppIcon className="h-4 w-4" />
              {t("cat.empty_cta")} “{query.trim().slice(0, 24)}”
            </a>
          </div>
        )}
        {/* Sort toolbar + desktop facet sidebar (mobile keeps the chip rail above) */}
        <div className="flex items-center justify-end gap-2 pt-6">
          <div role="group" aria-label="Sort plants" className="inline-flex rounded-full bg-white p-1 ring-1 ring-leaf-200">
            <button
              type="button"
              onClick={() => setSortAZ(false)}
              aria-pressed={!sortAZ}
              className={`rounded-full px-4 py-1.5 text-xs font-semibold transition ${!sortAZ ? "bg-leaf-900 text-white shadow-sm" : "text-leaf-800 hover:bg-leaf-50"}`}
            >
              {t("prod.sort_featured")}
            </button>
            <button
              type="button"
              onClick={() => setSortAZ(true)}
              aria-pressed={sortAZ}
              className={`rounded-full px-4 py-1.5 text-xs font-semibold transition ${sortAZ ? "bg-leaf-900 text-white shadow-sm" : "text-leaf-800 hover:bg-leaf-50"}`}
            >
              {t("prod.sort_az")}
            </button>
          </div>
        </div>

        <div className="lg:grid lg:grid-cols-[230px_minmax(0,1fr)] lg:gap-8">
        <aside className="hidden lg:block" aria-label={t("prod.facets")}>
          <div className="sticky top-40 rounded-[20px] bg-white p-3 shadow-sm ring-1 ring-leaf-100">
            <p className="px-2.5 pb-2 pt-1 text-[11px] font-bold uppercase tracking-widest text-leaf-800/45">
              {t("prod.facets")}
            </p>
            <button
              type="button"
              onClick={() => {
                setActiveCategory("all");
                document.getElementById("catalog-top")?.scrollIntoView({ behavior: "smooth" });
              }}
              aria-current={activeCategory === "all" ? "true" : undefined}
              className={`flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-sm font-semibold transition ${activeCategory === "all" ? "bg-leaf-900 text-white" : "text-leaf-900 hover:bg-leaf-50"}`}
            >
              {t("cat.all")}
              <span className={`rounded-full px-2 py-0.5 text-[11px] tabular-nums ${activeCategory === "all" ? "bg-white/15 text-white" : "bg-leaf-50 text-leaf-800/60"}`}>
                {CATEGORIES.length}
              </span>
            </button>
            {CATEGORIES.map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => setActiveCategory(c.id)}
                aria-current={activeCategory === c.id ? "true" : undefined}
                className={`mt-1 flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-sm font-semibold transition ${activeCategory === c.id ? "bg-leaf-900 text-white" : "text-leaf-900 hover:bg-leaf-50"}`}
              >
                <span className="truncate">{c.name}</span>
                <span className={`ml-2 shrink-0 rounded-full px-2 py-0.5 text-[11px] tabular-nums ${activeCategory === c.id ? "bg-white/15 text-white" : "bg-leaf-50 text-leaf-800/60"}`}>
                  {categoryCounts.get(c.id) ?? 0}
                </span>
              </button>
            ))}
          </div>
        </aside>
        <div id="catalog-top" className="min-w-0 scroll-mt-36">
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
                      {t("prod.ask_cat")}
                    </a>
                  )}
                </div>
              </div>

              {catalog ? (
                <div className="mt-8 space-y-10 sm:mt-10">
                  {catalog.groups.map((group) => {
                    const items = group.products.filter(productMatches);
                    const ordered = sortAZ
                      ? [...items].sort((a, b) => a.name.localeCompare(b.name))
                      : items;
                    if (q && items.length === 0) return null;
                    return (
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
                        {ordered.map((product) => (
                          <ProductCard
                            key={product.id}
                            product={product}
                            categoryId={category.id}
                            fallbackImage={category.image}
                            categoryName={category.name}
                          />
                        ))}
                      </div>
                    </div>
                    );
                  })}
                </div>
              ) : (
                <div className="mt-6 rounded-[20px] bg-leaf-50 p-5 ring-1 ring-leaf-100 sm:mt-8 sm:p-6">
                  <p className="font-display text-[15px] font-semibold text-leaf-900">{t("prod.cat_empty_title")}</p>
                  <p className="mt-1 max-w-xl text-sm leading-relaxed text-leaf-800/60">
                    {t("prod.cat_empty_sub")}
                  </p>
                </div>
              )}
            </section>
          );
        })}
        </div>
      </div>
      </div>

      {/* ---------- BOTTOM NOTE ---------- */}
      <section className="leaf-texture-strong relative overflow-hidden bg-sage-50/60 py-10 text-center sm:py-14">
        <div className="pointer-events-none absolute -right-16 top-0 h-48 w-48 rounded-full bg-terra-100/60 blur-3xl" aria-hidden />
        <div className="relative mx-auto max-w-2xl px-4 sm:px-6">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-terra-500">{t("prod.bottom_kicker")}</p>
          <h2 className="mt-1 font-display text-[22px] font-semibold tracking-tight text-leaf-900 sm:text-3xl">
            {t("prod.bottom_title")}
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-leaf-800/60 sm:text-[15px]">
            {t("prod.bottom_sub")}
          </p>
          <a
            href={waLink("Assalam-o-Alaikum! I'm looking for a specific plant. Can I send you a photo?")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-leaf-900 px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:bg-leaf-800 active:scale-[0.98]"
          >
            <WhatsAppIcon className="h-4 w-4" />
            {t("prod.bottom_cta")}
          </a>
          <p className="mt-3 text-xs text-leaf-800/50">{t("prod.bottom_note")}</p>
        </div>
      </section>
    </>
  );
}
