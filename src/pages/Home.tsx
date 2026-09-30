import { Link } from "react-router-dom";
import { CATEGORIES, CONTACT, telLink, waLink } from "../data/site";
import GalleryMarquee from "../components/GalleryMarquee";
import HeroVideo from "../components/HeroVideo";
import { useLang } from "../i18n/lang";
import { usePageMeta } from "../hooks/usePageMeta";
import { PhoneIcon, WhatsAppIcon } from "../components/CtaButtons";
import { track } from "../utils/track";
import VideoGallery from "../components/VideoGallery";
import { GemIcon, LeafIcon, SproutIcon, TruckIcon } from "../components/icons";
import { ArrowRightIcon } from "../components/icons";

const WHY_KEYS = [
  { Icon: LeafIcon, tint: "bg-leaf-50 ring-leaf-100", iconBg: "bg-leaf-700 text-white", title: "home.why1_t", text: "home.why1_x" },
  { Icon: SproutIcon, tint: "bg-sage-50 ring-sage-200", iconBg: "bg-white text-leaf-700 shadow-sm ring-1 ring-leaf-100", title: "home.why2_t", text: "home.why2_x" },
  { Icon: GemIcon, tint: "bg-blossom-50 ring-blossom-100", iconBg: "bg-blossom-500 text-white shadow-sm", title: "home.why3_t", text: "home.why3_x" },
  { Icon: TruckIcon, tint: "bg-gold-50 ring-gold-100", iconBg: "bg-gold-400 text-leaf-900 shadow-sm", title: "home.why4_t", text: "home.why4_x" },
] as const;

const GALLERY_TILES = ["flowering", "indoor", "trees", "bonsai"];

/**
 * Dev-only guard: a Home tile whose photo isn't in the category it deep-links
 * into is a broken promise (the tile shows a photo the page it opens omits).
 * Cheap to check, silent when it breaks otherwise — so check it in dev.
 */
if (import.meta.env.DEV) {
  for (const id of GALLERY_TILES) {
    const cat = CATEGORIES.find((c) => c.id === id);
    if (!cat?.galleryPhotoId) {
      // eslint-disable-next-line no-console
      console.warn(`[home/gallery] "${id}" has no galleryPhotoId — falls back to placeholder`);
    } else if (!cat.galleryFilter) {
      // eslint-disable-next-line no-console
      console.warn(`[home/gallery] "${id}" has a photo but no galleryFilter — tile won't deep-link`);
    }
  }
}

export default function Home() {
  const { t } = useLang();
  usePageMeta(
    "Ajmal Garden Nursery — Sialkot Since 1958",
    "From humble seeds to premium bonsai and rare exotics — one of Sialkot's oldest, largest and most loved plant nurseries. Visit, call or WhatsApp 0300 612 1225.",
  );

  return (
    <>
      {/* Editorial hero: video background with a photographic scrim, a single
          line of display type over it, and one quiet row of actions. The
          restraint IS the design — the nursery's own footage carries it. */}
      <section className="relative overflow-hidden">
        <HeroVideo />

        {/* Scrim: deep, slightly warm, heavier at the bottom so type sits on
            the darkest part of the frame at every breakpoint. */}
        <div className="absolute inset-0 bg-leaf-950/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-leaf-950/85 via-leaf-950/20 to-leaf-950/40" />

        <div className="relative mx-auto flex min-h-[88svh] max-w-6xl flex-col justify-end px-5 pb-16 pt-24 sm:min-h-[86svh] sm:px-8 sm:pb-24 lg:pb-28">
          <div className="max-w-2xl">
            {/* Kicker: hairline-rule + small caps, replacing the pill that
                repeated the header tagline. */}
            <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-leaf-100/75">
              <span className="h-px w-10 bg-marigold/70" aria-hidden />
              Sialkot · Since 1958
            </p>

            <h1 className="mt-5 font-display text-[40px] font-bold leading-[0.98] tracking-[-0.02em] text-white sm:text-6xl lg:text-7xl">
              {t("hero.title_a")}{" "}
              <span className="text-marigold">{t("hero.title_b")}</span>
            </h1>

            <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-leaf-50/85 sm:text-lg">
              {t("hero.sub")}
            </p>

            {/* Actions: one primary WhatsApp pill, one quiet text-link beside
                it. On phones the phone number moves under the label so the row
                never wraps into a second block. */}
            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
              <a
                href={waLink(
                  "Assalam-o-Alaikum! I found Ajmal Garden Nursery online and would like to ask about your plants.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track("whatsapp_click", { source: "hero" })}
                className="group inline-flex items-center gap-2.5 rounded-full bg-[#25D366] py-3 pl-5 pr-6 text-[14.5px] font-semibold text-white transition-all duration-200 hover:bg-[#1fc95e] active:scale-[0.97]"
              >
                <WhatsAppIcon className="h-[18px] w-[18px] transition-transform duration-200 group-hover:scale-110" />
                {t("cta.whatsapp")}
                <span
                  aria-hidden
                  className="h-1 w-1 rounded-full bg-white/50 transition-all duration-200 group-hover:w-3 group-hover:bg-white/70"
                />
              </a>

              <a
                href={telLink}
                onClick={() => track("call_click", { source: "hero" })}
                className="group inline-flex items-baseline gap-2 text-[15px] font-semibold text-white/90 transition-colors hover:text-white"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full ring-1 ring-white/30 transition-all duration-200 group-hover:ring-white/60 group-hover:bg-white/10">
                  <PhoneIcon className="h-3.5 w-3.5" />
                </span>
                <span className="flex flex-col leading-none">
                  <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-white/55">
                    {t("cta.call")}
                  </span>
                  <span className="mt-1 tabular-nums">{CONTACT.phoneDisplay}</span>
                </span>
              </a>
            </div>

            <p className="mt-8 text-[12px] leading-relaxed text-leaf-100/50">
              {t("hero.hours")} · {t("hero.no_store")}
            </p>
          </div>
        </div>
      </section>


      {/* ---------- TRUST STRIP ---------- */}
      <div className="border-y border-leaf-100 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-2 overflow-x-auto px-4 py-3 text-xs font-semibold text-leaf-800 no-scrollbar sm:px-6">
          <span className="whitespace-nowrap">🌿 {t("home.trust_plants")}</span>
          <span className="h-3 w-px shrink-0 bg-leaf-200" aria-hidden />
          <span className="whitespace-nowrap">🏷️ {t("home.trust_advice")}</span>
          <span className="h-3 w-px shrink-0 bg-leaf-200" aria-hidden />
          <span className="whitespace-nowrap">🚚 {t("home.trust_bulk")}</span>
          <span className="hidden sm:inline h-3 w-px shrink-0 bg-leaf-200" aria-hidden />
          <span className="hidden sm:inline whitespace-nowrap">📍 {t("home.trust_where")}</span>
        </div>
      </div>

      {/* ---------- BRAND INTRO ---------- */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -left-20 top-1/2 hidden h-64 w-64 -translate-y-1/2 rounded-full bg-leaf-100/70 blur-2xl lg:block" aria-hidden />
        <div className="mx-auto max-w-4xl px-4 py-12 text-center sm:px-6 sm:py-16 lg:py-20">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-terra-500">{t("home.intro_kicker")}</p>
          <h2 className="mx-auto mt-2 max-w-2xl font-display text-[28px] font-semibold leading-tight tracking-tight text-leaf-900 sm:text-4xl">
            {t("home.intro_title_a")} <span className="text-terra-500">{t("home.intro_title_b")}</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-leaf-800/75 sm:text-lg">
            {t("home.intro_body")}
          </p>
          <div className="mt-7 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <Link
              to="/about"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-leaf-900 shadow-sm ring-1 ring-leaf-200 transition hover:bg-leaf-50 active:scale-[0.98]"
            >
              {t("home.story")} <ArrowRightIcon className="h-4 w-4 text-leaf-700" />
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-terra-500 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-terra-600 active:scale-[0.98]"
            >
              {t("home.browse_cats")}
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- LIVE GALLERY MARQUEE (drifting rows) ---------- */}
      <GalleryMarquee />

      {/* ---------- CATEGORY GRID ---------- */}
      <section className="bg-white py-10 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-6 flex flex-col gap-3 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-terra-500">{t("home.cat_kicker")}</p>
              <h2 className="mt-1 font-display text-[26px] font-semibold tracking-tight text-leaf-900 sm:text-4xl">
                {t("home.cat_title")}
              </h2>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-leaf-800/65 sm:text-[15px]">
                {t("home.cat_sub")}
              </p>
            </div>
            <Link
              to="/products"
              className="inline-flex items-center gap-1.5 self-start rounded-full bg-leaf-900 px-4 py-2 text-xs font-semibold text-white transition hover:bg-leaf-800 sm:self-auto"
            >
              {t("cta.view_catalog")} <span aria-hidden>→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.id}
                to={`/products#${cat.id}`}
                className="card-lift group relative overflow-hidden rounded-[22px] bg-leaf-950 shadow-sm ring-1 ring-leaf-100 sm:rounded-3xl"
              >
                <img
                  src={cat.image}
                  alt={cat.imageAlt}
                  loading="lazy"
                  className="h-[220px] w-full object-cover transition duration-700 group-hover:scale-[1.04] sm:h-56"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-leaf-950/90 via-leaf-950/30 to-transparent" />
                <div className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-leaf-900 shadow-sm ring-1 ring-black/5 backdrop-blur">
                  <span className="h-1.5 w-1.5 rounded-full bg-terra-500" aria-hidden />
                  {cat.name}
                </div>
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                  <h3 className="font-display text-[18px] font-semibold leading-tight text-white sm:text-xl">{cat.name}</h3>
                  <p className="mt-1 line-clamp-2 text-[13px] leading-relaxed text-leaf-50/80">{cat.short}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-white/90 transition group-hover:gap-1.5">
                    {t("cta.explore")} <span aria-hidden>→</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>


      {/* ---------- WHY AJMAL GARDEN ---------- */}
      <section className="relative overflow-hidden bg-white py-12 sm:py-16 lg:py-20">
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto mb-8 max-w-2xl text-center sm:mb-10">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-terra-500">{t("home.why_kicker")}</p>
            <h2 className="mt-1 font-display text-[26px] font-semibold tracking-tight text-leaf-900 sm:text-4xl">
              {t("home.why_title")}
            </h2>
            <p className="mt-2 text-sm text-leaf-800/60 sm:text-[15px]">{t("home.why_sub")}</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
            {WHY_KEYS.map((item) => (
              <div key={item.title} className={`card-lift rounded-[22px] p-5 ring-1 sm:rounded-3xl sm:p-6 ${item.tint}`}>
                <div className={`flex h-11 w-11 items-center justify-center rounded-2xl ${item.iconBg}`}>
                  <item.Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-[16px] font-semibold text-leaf-900">{t(item.title)}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-leaf-800/70">{t(item.text)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- PLANT FINDER BAND (new: Home entry for /plant-finder) ---------- */}
      <section className="relative overflow-hidden bg-leaf-950 py-12 sm:py-16">
        <div className="absolute inset-0 leaf-texture opacity-[0.07]" aria-hidden />
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-leaf-800/40 blur-2xl" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div>
              <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-terra-300">
                <span className="h-1.5 w-1.5 rounded-full bg-marigold" aria-hidden /> {t("home.finder_kicker")}
              </p>
              <h2 className="mt-2 font-display text-[26px] font-semibold leading-tight tracking-tight text-white sm:text-4xl">
                {t("home.finder_title")}
              </h2>
              <p className="mt-3 max-w-lg text-sm leading-relaxed text-leaf-100/70 sm:text-[15px]">
                {t("home.finder_sub")}
              </p>
              <Link
                to="/plant-finder"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:bg-[#1fb959] active:scale-[0.98]"
              >
                {t("cta.try_finder")} <span aria-hidden>→</span>
              </Link>
            </div>
            <ol className="space-y-3">
              {[t("home.finder_how1"), t("home.finder_how2"), t("home.finder_how3")].map((step, i) => (
                <li key={step} className="flex items-center gap-4 rounded-2xl bg-white/[0.06] p-4 ring-1 ring-white/10">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-marigold font-display text-sm font-bold text-leaf-950">
                    {i + 1}
                  </span>
                  <span className="text-sm font-semibold text-white sm:text-[15px]">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ---------- FEATURED ON YOUTUBE ---------- */}
      <VideoGallery
        heading={t("home.video_kicker")}
        subheading={t("home.intro_body")}
        tip={t("home.video_tip")}
      />

      {/* ---------- VISIT CTA ---------- */}
      <section className="relative overflow-hidden bg-leaf-900 py-12 sm:py-16 lg:py-20">
        <div className="absolute inset-0 leaf-texture opacity-[0.06]" aria-hidden />
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-terra-500/20 blur-3xl" aria-hidden />
        <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-marigold/10 blur-3xl" aria-hidden />
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-terra-300">{t("home.visit_kicker")}</p>
          <h2 className="mt-2 font-display text-[26px] font-semibold leading-tight text-white sm:text-4xl">
            {t("home.visit_title")}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-leaf-100/75 sm:text-[15px]">
            {t("home.visit_sub")}
          </p>
          <div className="mt-7 flex flex-col items-stretch justify-center gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-leaf-900 shadow-lg transition hover:bg-leaf-50 active:scale-[0.98]"
            >
              {t("home.directions")} <span aria-hidden>→</span>
            </Link>
            <a
              href={waLink("Assalam-o-Alaikum! Is the nursery open today? I'd like to visit.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:bg-[#1fb959] active:scale-[0.98]"
            >
              {t("home.wa_visit")}
            </a>
          </div>
          <p className="mt-4 text-xs text-leaf-200/50">{t("home.no_appt")}</p>
        </div>
      </section>
    </>
  );
}
