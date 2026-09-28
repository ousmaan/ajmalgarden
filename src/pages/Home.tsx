import { Link } from "react-router-dom";
import { CATEGORIES, CONTACT, waLink } from "../data/site";
import { useLang } from "../i18n/lang";
import { usePageMeta } from "../hooks/usePageMeta";
import CtaButtons from "../components/CtaButtons";
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

export default function Home() {
  const { t } = useLang();
  usePageMeta(
    "Ajmal Garden Nursery — Sialkot Since 1958",
    "From humble seeds to premium bonsai and rare exotics — one of Sialkot's oldest, largest and most loved plant nurseries. Visit, call or WhatsApp 0300 612 1225.",
  );

  return (
    <>
      {/* ---------- HERO (clean-slate: photo-led, finder entry inline) ---------- */}
      <section className="relative overflow-hidden">
        <img
          src="/images/hero-nursery.jpg"
          alt="Lush rows of potted plants at Ajmal Garden Nursery, Sialkot"
          className="absolute inset-0 h-full w-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-leaf-950/90 via-leaf-950/65 to-leaf-900/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-leaf-950/45 via-transparent to-transparent sm:from-leaf-950/30" />
        <div className="pointer-events-none absolute -right-16 top-10 hidden h-72 w-72 rounded-full bg-marigold/20 blur-3xl sm:block" aria-hidden />

        <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-14 sm:px-6 sm:pb-24 sm:pt-24 lg:pb-28 lg:pt-28">
          <div className="max-w-[640px] reveal-up">
            <p className="inline-flex items-center gap-2 rounded-full bg-white/12 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-leaf-50 ring-1 ring-white/15 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-marigold" aria-hidden />
              {t("hero.eyebrow")}
            </p>

            <h1 className="mt-4 font-display text-[32px] font-bold leading-[0.95] tracking-tight text-white sm:text-5xl lg:text-[56px]">
              {t("hero.title_a")}
              <span className="block bg-gradient-to-r from-marigold via-[#f8c45a] to-marigold bg-clip-text text-transparent">
                {t("hero.title_b")}
              </span>
            </h1>

            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-leaf-50/90 sm:text-lg">
              {t("hero.sub")}
            </p>

            <CtaButtons light source="hero" className="mt-6 sm:mt-8" />

            <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-leaf-100/70 sm:mt-5">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 ring-1 ring-white/10 backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> {t("hero.hours")}
              </span>
              <span className="hidden sm:inline text-leaf-100/40">·</span>
              <span>{t("hero.no_store")} {CONTACT.phoneDisplay}.</span>
            </div>
          </div>

          {/* Plant Finder entry — the differentiator, one tap from the hero.
              Dark scrim (not the white .glass) so white type stays legible. */}
          <Link
            to="/plant-finder"
            className="group mt-7 flex max-w-md items-center gap-3.5 rounded-full border border-white/15 bg-leaf-950/45 py-2.5 pl-2.5 pr-3 backdrop-blur-md transition hover:border-white/30 hover:bg-leaf-950/60 sm:mt-8 sm:gap-4 sm:py-3 sm:pl-3 sm:pr-4"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-marigold ring-1 ring-white/15 transition group-hover:bg-white/15 sm:h-11 sm:w-11">
              <SproutIcon className="h-5 w-5" />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block font-display text-sm font-semibold leading-tight text-white sm:text-[15px]">
                {t("hero.finder_title")}
              </span>
              <span className="mt-0.5 block text-xs leading-tight text-leaf-100/70">
                {t("hero.finder_sub")}
              </span>
            </span>
            <span
              aria-hidden
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-white/80 transition group-hover:translate-x-0.5 group-hover:text-marigold"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4">
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </Link>
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

      {/* ---------- GALLERY STRIP (new: Home entry for /gallery) ---------- */}
      <section className="leaf-texture-strong bg-sage-50/60 py-10 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-6 flex flex-col gap-3 sm:mb-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-terra-500">{t("home.gallery_kicker")}</p>
              <h2 className="mt-1 font-display text-[26px] font-semibold tracking-tight text-leaf-900 sm:text-4xl">
                {t("home.gallery_title")}
              </h2>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-leaf-800/65 sm:text-[15px]">
                {t("home.gallery_sub")}
              </p>
            </div>
            <Link
              to="/gallery"
              className="inline-flex items-center gap-1.5 self-start rounded-full bg-leaf-900 px-4 py-2 text-xs font-semibold text-white transition hover:bg-leaf-800 sm:self-auto"
            >
              {t("cta.open_gallery")} <span aria-hidden>→</span>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
            {GALLERY_TILES.map((id) => {
              const cat = CATEGORIES.find((c) => c.id === id)!;
              return (
                <Link
                  key={id}
                  to="/gallery"
                  className="card-lift group relative overflow-hidden rounded-[18px] ring-1 ring-leaf-100 sm:rounded-2xl"
                >
                  <img
                    src={cat.image}
                    alt={cat.imageAlt}
                    loading="lazy"
                    className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-leaf-950/80 via-transparent to-transparent" />
                  <span className="absolute inset-x-0 bottom-0 p-3 text-[13px] font-semibold text-white sm:p-4 sm:text-sm">
                    {cat.name}
                  </span>
                </Link>
              );
            })}
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
