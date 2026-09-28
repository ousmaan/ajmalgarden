import { Link } from "react-router-dom";
import { waLink } from "../data/site";
import { useLang } from "../i18n/lang";
import { usePageMeta } from "../hooks/usePageMeta";
import { useWishlist } from "../lib/wishlist";
import { track } from "../utils/track";
import { WhatsAppIcon } from "../components/CtaButtons";

/**
 * The landscaper flow (plan Phase 1): one saved list → one WhatsApp message.
 * No cart, no checkout — just a tidy inquiry the nursery can answer in one go.
 */
export default function Wishlist() {
  const wishlist = useWishlist();
  const { t } = useLang();
  usePageMeta(
    "My Plant List — Ajmal Garden Nursery",
    "Your saved plants at Ajmal Garden Nursery. Send the whole list on WhatsApp and we'll confirm availability.",
  );

  return (
    <section className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-terra-500">{t("list.kicker")}</p>
      <h1 className="mt-1 font-display text-[28px] font-bold tracking-tight text-leaf-900 sm:text-4xl">
        {wishlist.count === 0 ? t("list.title_empty") : `${wishlist.count} ${t("list.title")}`}
      </h1>
      <p className="mt-2 max-w-xl text-sm leading-relaxed text-leaf-800/65">
        {wishlist.count === 0 ? t("list.empty_sub") : t("list.full_sub")}
      </p>

      {wishlist.count === 0 ? (
        <Link
          to="/products"
          className="mt-7 inline-flex items-center justify-center rounded-full bg-leaf-900 px-6 py-3.5 text-sm font-semibold text-white shadow-md transition hover:bg-leaf-800 active:scale-[0.98]"
        >
          {t("cta.browse")}
        </Link>
      ) : (
        <>
          <ul className="mt-7 space-y-2.5">
            {wishlist.entries.map((entry, i) => (
              <li
                key={entry.key}
                className="flex items-center gap-3 rounded-2xl bg-white p-3.5 shadow-sm ring-1 ring-leaf-100"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-leaf-50 text-xs font-bold text-leaf-800 ring-1 ring-leaf-100">
                  {i + 1}
                </span>
                <span className="min-w-0 flex-1">
                  <Link
                    to={`/catalog/${entry.categoryId}/${entry.productId}`}
                    className="block truncate text-sm font-semibold text-leaf-900 hover:underline"
                  >
                    {entry.name}
                  </Link>
                  <span className="block truncate text-xs text-leaf-800/55">{entry.categoryName}</span>
                </span>
                <button
                  type="button"
                  onClick={() => wishlist.toggle(entry.categoryId, entry.productId)}
                  aria-label={`${t("list.remove")}: ${entry.name}`}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-leaf-800/50 transition hover:bg-terra-50 hover:text-terra-600"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4" aria-hidden>
                    <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
                  </svg>
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href={waLink(wishlist.message())}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track("wishlist_send", { source: "wishlist-page" })}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white shadow-md transition hover:bg-[#1fb959] active:scale-[0.98]"
            >
              <WhatsAppIcon className="h-4 w-4" />
              {t("cta.send_list")}
            </a>
            <button
              type="button"
              onClick={wishlist.clear}
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-leaf-900 ring-1 ring-leaf-200 transition hover:bg-leaf-50 active:scale-[0.98]"
            >
              {t("cta.clear_list")}
            </button>
          </div>
        </>
      )}
    </section>
  );
}
