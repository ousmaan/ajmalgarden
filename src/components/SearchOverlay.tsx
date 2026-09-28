import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CATEGORIES, waLink } from "../data/site";
import { useLang } from "../i18n/lang";
import { searchCatalog } from "../lib/search";
import { track } from "../utils/track";
import ProductThumb from "./ProductThumb";
import { WhatsAppIcon } from "./CtaButtons";

/**
 * NurseryLive-style suggest-as-you-type (plan §1/§4): one search entry point
 * for both canvases — icon button in the navbar opens a sheet that is
 * full-screen on phones and a centered card on desktop. Grouped suggestions:
 * plants (thumb + collection) → collections → WhatsApp fallback, so a miss
 * still converts. Keyboard: Esc closes, ↑↓ move, Enter opens.
 */
export default function SearchOverlay() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [debounced, setDebounced] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const { t } = useLang();

  useEffect(() => {
    if (!open) return;
    setQuery("");
    setDebounced("");
    setActive(0);
    const t = window.setTimeout(() => inputRef.current?.focus(), 60);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.clearTimeout(t);
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open ]);

  useEffect(() => {
    const t = window.setTimeout(() => {
      setDebounced(query);
      setActive(0);
    }, 150);
    return () => window.clearTimeout(t);
  }, [query]);

  const results = useMemo(() => searchCatalog(debounced), [debounced]);
  const categoryImage = (id: string) => CATEGORIES.find((c) => c.id === id)?.image;

  const flatCount = results.products.length + results.categories.length;
  const go = (kind: "product" | "category", a: string, b?: string) => {
    track("search_select", { source: kind === "product" ? `search-${b}` : `search-cat-${a}` });
    setOpen(false);
    if (kind === "product") navigate(`/catalog/${a}/${b}`);
    else navigate(`/products#${a}`);
  };

  const onInputKey = (e: React.KeyboardEvent) => {
    if (flatCount === 0) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((v) => (v + 1) % (flatCount + 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((v) => (v - 1 + flatCount + 1) % (flatCount + 1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (active < results.products.length) {
        const hit = results.products[active];
        go("product", hit.categoryId, hit.product.id);
      } else if (active < flatCount) {
        go("category", results.categories[active - results.products.length].id);
      } else if (debounced.trim()) {
        window.open(
          waLink(`Assalam-o-Alaikum! I'm looking for "${debounced.trim()}" at Ajmal Garden Nursery. Do you have it?`),
          "_blank",
          "noopener,noreferrer",
        );
        setOpen(false);
      }
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={() => {
          track("search_open", { source: "navbar" });
          setOpen(true);
        }}
        aria-label={t("nav.search")}
        className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-leaf-800 transition hover:bg-leaf-100 hover:text-leaf-900"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" aria-hidden className="h-5 w-5">
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-3.5-3.5" />
        </svg>
      </button>

      {open && (
        <div className="fixed inset-0 z-50" role="dialog" aria-modal="true" aria-label={t("search.close_dialog")}>
          <button aria-label={t("search.close")} onClick={() => setOpen(false)} className="absolute inset-0 bg-leaf-950/45 backdrop-blur-[2px]" />
          <div className="absolute inset-x-0 top-0 max-h-[92dvh] overflow-auto bg-cream shadow-2xl soft-in sm:inset-x-auto sm:left-1/2 sm:top-[10vh] sm:w-[38rem] sm:max-w-[calc(100vw-2rem)] sm:-translate-x-1/2 sm:rounded-3xl sm:ring-1 sm:ring-leaf-100">
            <div className="sticky top-0 border-b border-leaf-100 bg-cream/95 px-4 py-3 backdrop-blur sm:px-5">
              <div className="relative">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" aria-hidden className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-leaf-800/40">
                  <circle cx="11" cy="11" r="7" />
                  <path d="m20 20-3.5-3.5" />
                </svg>
                <input
                  ref={inputRef}
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={onInputKey}
                  placeholder={t("search.placeholder")}
                  autoComplete="off"
                  role="combobox"
                  aria-expanded={flatCount > 0}
                  aria-controls="search-suggestions"
                  aria-activedescendant={flatCount > 0 ? `suggest-${active}` : undefined}
                  className="w-full rounded-full border border-leaf-200 bg-white py-3 pl-11 pr-11 text-[15px] text-leaf-900 outline-none transition placeholder:text-leaf-800/35 focus:border-leaf-400 focus:ring-4 focus:ring-leaf-100"
                />
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label={t("search.close")}
                  className="absolute right-1.5 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-leaf-900 text-white transition hover:bg-leaf-800"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4" aria-hidden>
                    <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
                  </svg>
                </button>
              </div>
            </div>

            <div id="search-suggestions" role="listbox" className="px-3 py-3 sm:px-4">
              {debounced.trim().length < 2 && (
                <p className="px-2 py-4 text-center text-xs leading-relaxed text-leaf-800/50">
                  {t("search.hint")}
                </p>
              )}
              {debounced.trim().length >= 2 && flatCount === 0 && (
                <p className="px-2 py-4 text-center text-sm text-leaf-800/60">
                  {t("search.none")} “{debounced.trim()}” — {t("search.none_sub")}
                </p>
              )}
              {results.products.length > 0 && (
                <>
                  <p className="px-2 pb-1.5 text-[11px] font-bold uppercase tracking-widest text-leaf-800/45">{t("search.plants")}</p>
                  {results.products.map((hit, i) => (
                    <button
                      key={`${hit.categoryId}:${hit.product.id}`}
                      id={`suggest-${i}`}
                      role="option"
                      aria-selected={active === i}
                      type="button"
                      onClick={() => go("product", hit.categoryId, hit.product.id)}
                      className={`flex w-full items-center gap-3 rounded-2xl px-2.5 py-2.5 text-left transition ${active === i ? "bg-leaf-900 text-white" : "hover:bg-white"}`}
                    >
                      <ProductThumb
                        src={hit.product.images[0]?.src}
                        alt=""
                        fallbackSrc={categoryImage(hit.categoryId)}
                        className="h-11 w-11 rounded-xl ring-1 ring-leaf-100"
                      />
                      <span className="min-w-0 flex-1">
                        <span className={`block truncate text-sm font-semibold ${active === i ? "text-white" : "text-leaf-900"}`}>
                          {hit.product.name}
                        </span>
                        <span className={`block truncate text-xs ${active === i ? "text-white/70" : "text-leaf-800/55"}`}>
                          {CATEGORIES.find((c) => c.id === hit.categoryId)?.name} · {hit.groupTitle}
                        </span>
                      </span>
                      <span aria-hidden className={active === i ? "text-white/70" : "text-leaf-800/30"}>→</span>
                    </button>
                  ))}
                </>
              )}
              {results.categories.length > 0 && (
                <>
                  <p className="px-2 pb-1.5 pt-3 text-[11px] font-bold uppercase tracking-widest text-leaf-800/45">{t("search.collections")}</p>
                  {results.categories.map((cat, j) => {
                    const idx = results.products.length + j;
                    return (
                      <button
                        key={cat.id}
                        id={`suggest-${idx}`}
                        role="option"
                        aria-selected={active === idx}
                        type="button"
                        onClick={() => go("category", cat.id)}
                        className={`flex w-full items-center gap-3 rounded-2xl px-2.5 py-2.5 text-left transition ${active === idx ? "bg-leaf-900 text-white" : "hover:bg-white"}`}
                      >
                        <ProductThumb
                          src={cat.image}
                          alt=""
                          className="h-11 w-11 rounded-xl ring-1 ring-leaf-100"
                        />
                        <span className="min-w-0 flex-1">
                          <span className={`block truncate text-sm font-semibold ${active === idx ? "text-white" : "text-leaf-900"}`}>
                            {cat.name}
                          </span>
                          <span className={`block truncate text-xs ${active === idx ? "text-white/70" : "text-leaf-800/55"}`}>
                            {t("search.collection")}
                          </span>
                        </span>
                        <span aria-hidden className={active === idx ? "text-white/70" : "text-leaf-800/30"}>→</span>
                      </button>
                    );
                  })}
                </>
              )}
              {debounced.trim().length >= 2 && (
                <a
                  id={`suggest-${flatCount}`}
                  href={waLink(`Assalam-o-Alaikum! I'm looking for "${debounced.trim()}" at Ajmal Garden Nursery. Do you have it?`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    track("search_whatsapp", { source: "search-fallback" });
                    setOpen(false);
                  }}
                  className={`mt-2 flex w-full items-center gap-2.5 rounded-2xl px-3 py-3 text-sm font-semibold transition ${active === flatCount ? "bg-[#25D366] text-white" : "bg-[#25D366]/10 text-leaf-900 hover:bg-[#25D366]/15"}`}
                >
                  <WhatsAppIcon className="h-4 w-4 shrink-0 text-[#1da851]" />
                  {t("search.ask")} “{debounced.trim().slice(0, 32)}”
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
