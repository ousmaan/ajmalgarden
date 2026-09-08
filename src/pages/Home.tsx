import { Link } from "react-router-dom";
import { CATEGORIES, CONTACT, waLink } from "../data/site";
import CtaButtons from "../components/CtaButtons";
import VideoGallery from "../components/VideoGallery";
import { FlowerIcon, GemIcon, LeafIcon, SproutIcon, TruckIcon } from "../components/icons";
import { ArrowRightIcon } from "../components/icons";

const WHY_ITEMS = [
  {
    Icon: LeafIcon,
    tint: "bg-leaf-50 ring-leaf-100",
    iconBg: "bg-leaf-700 text-white",
    title: "A Local Institution",
    text: "Serving Sialkot since 1958 — one of the city's oldest and largest nurseries. Many customers are the second or third generation of their family to buy plants here.",
  },
  {
    Icon: SproutIcon,
    tint: "bg-sage-50 ring-sage-200",
    iconBg: "bg-white text-leaf-700 shadow-sm ring-1 ring-leaf-100",
    title: "Something for Everyone",
    text: "From humble seeds and starter plants to premium, rare specimens for serious collectors — all on the same shelves.",
  },
  {
    Icon: GemIcon,
    tint: "bg-blossom-50 ring-blossom-100",
    iconBg: "bg-blossom-500 text-white shadow-sm",
    title: "Real Expertise",
    text: "Hands-on specialist knowledge in bonsai styling, cacti & succulents, and exotic plant care — advice is always free.",
  },
  {
    Icon: TruckIcon,
    tint: "bg-gold-50 ring-gold-100",
    iconBg: "bg-gold-400 text-leaf-900 shadow-sm",
    title: "Bulk & Landscaping",
    text: "Trees, palms and shrubs in quantity for landscapers, builders and housing schemes. Call to discuss your project.",
  },
];

export default function Home() {
  return (
    <>
      {/* ---------- HERO ---------- */}
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

        <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-24 lg:py-28">
          <div className="max-w-[640px] reveal-up">
            <p className="inline-flex items-center gap-2 rounded-full bg-white/12 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-leaf-50 ring-1 ring-white/15 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-marigold" aria-hidden />
              Ajmal Garden Colony · Sialkot — Since 1958
            </p>

            <h1 className="mt-4 font-display text-[32px] font-bold leading-[0.95] tracking-tight text-white sm:text-5xl lg:text-[56px]">
              Sialkot&apos;s Trusted Garden
              <span className="block bg-gradient-to-r from-marigold via-[#f8c45a] to-marigold bg-clip-text text-transparent">
                Since 1958
              </span>
            </h1>

            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-leaf-50/90 sm:text-lg">
              From humble seeds to premium bonsai and rare exotics — one of the city&apos;s oldest, largest and most
              loved plant nurseries has it all under one sky.
            </p>

            <CtaButtons light className="mt-6 sm:mt-8" />

            <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-leaf-100/70 sm:mt-5">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 ring-1 ring-white/10 backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Open daily 6 AM – 8 PM
              </span>
              <span className="hidden sm:inline text-leaf-100/40">·</span>
              <span>No online store — visit, call or WhatsApp {CONTACT.phoneDisplay}.</span>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- TRUST STRIP — mobile-visible ---------- */}
      <div className="border-y border-leaf-100 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-2 overflow-x-auto px-4 py-3 text-xs font-semibold text-leaf-800 no-scrollbar sm:px-6">
          <span className="whitespace-nowrap">🌿 7 plant worlds</span>
          <span className="h-3 w-px shrink-0 bg-leaf-200" aria-hidden />
          <span className="whitespace-nowrap">🏷️ Honest advice, always free</span>
          <span className="h-3 w-px shrink-0 bg-leaf-200" aria-hidden />
          <span className="whitespace-nowrap">🚚 Bulk & landscaper supply</span>
          <span className="hidden sm:inline h-3 w-px shrink-0 bg-leaf-200" aria-hidden />
          <span className="hidden sm:inline whitespace-nowrap">📍 Shatab Garh Road, near phatak</span>
        </div>
      </div>

      {/* ---------- BRAND INTRO ---------- */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -left-20 top-1/2 hidden h-64 w-64 -translate-y-1/2 rounded-full bg-leaf-100/70 blur-2xl lg:block" aria-hidden />
        <div className="mx-auto max-w-4xl px-4 py-12 text-center sm:px-6 sm:py-16 lg:py-20">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-terra-500">A Nursery the Whole City Knows</p>
          <h2 className="mx-auto mt-2 max-w-2xl font-display text-[28px] font-semibold leading-tight tracking-tight text-leaf-900 sm:text-4xl">
            Grown with Sialkot, <span className="text-terra-500">generation after generation.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-leaf-800/75 sm:text-lg">
            Since 1958, families across Sialkot have walked our rows — grandparents, parents and now their children.
            Ajmal Garden Nursery grew into one of the city&apos;s largest nurseries by keeping one promise:{" "}
            <em className="font-medium text-leaf-900">something for everyone</em>. Whether you&apos;re planting your very
            first seed or hunting a rare exotic for your collection, you&apos;ll find it on the very same visit.
          </p>
          <div className="mt-7 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <Link
              to="/about"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-leaf-900 shadow-sm ring-1 ring-leaf-200 transition hover:bg-leaf-50 active:scale-[0.98]"
            >
              Our Story <ArrowRightIcon className="h-4 w-4 text-leaf-700" />
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-terra-500 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-terra-600 active:scale-[0.98]"
            >
              Browse Plant Categories
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- CATEGORY GRID ---------- */}
      <section className="bg-white py-10 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-6 flex flex-col gap-3 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-terra-500">What We Grow & Stock</p>
              <h2 className="mt-1 font-display text-[26px] font-semibold tracking-tight text-leaf-900 sm:text-4xl">
                Seven Worlds of Green
              </h2>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-leaf-800/65 sm:text-[15px]">
                Tap any world to jump straight to its collection on the catalog.
              </p>
            </div>
            <Link
              to="/products"
              className="inline-flex items-center gap-1.5 self-start rounded-full bg-leaf-900 px-4 py-2 text-xs font-semibold text-white transition hover:bg-leaf-800 sm:self-auto"
            >
              View full catalog <span aria-hidden>→</span>
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
                    Explore <span aria-hidden>→</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- WHY AJMAL GARDEN ---------- */}
      <section className="leaf-texture-strong relative overflow-hidden bg-sage-50/60 py-12 sm:py-16 lg:py-20">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blossom-100/60 blur-3xl" aria-hidden />
        <div className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-gold-100/50 blur-3xl" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto mb-8 max-w-2xl text-center sm:mb-10">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-terra-500">Why Ajmal Garden</p>
            <h2 className="mt-1 font-display text-[26px] font-semibold tracking-tight text-leaf-900 sm:text-4xl">
              Why Sialkot Keeps Coming Back
            </h2>
            <p className="mt-2 text-sm text-leaf-800/60 sm:text-[15px]">Four reasons — told the way our customers tell it.</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
            {WHY_ITEMS.map((item) => (
              <div key={item.title} className={`card-lift rounded-[22px] p-5 ring-1 sm:rounded-3xl sm:p-6 ${item.tint}`}>
                <div className={`flex h-11 w-11 items-center justify-center rounded-2xl ${item.iconBg}`}>
                  <item.Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-[16px] font-semibold text-leaf-900">{item.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-leaf-800/70">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- FEATURED ON YOUTUBE ---------- */}
      <VideoGallery />

      {/* ---------- VISIT CTA ---------- */}
      <section className="relative overflow-hidden bg-leaf-900 py-12 sm:py-16 lg:py-20">
        <div className="absolute inset-0 leaf-texture opacity-[0.06]" aria-hidden />
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-terra-500/20 blur-3xl" aria-hidden />
        <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-marigold/10 blur-3xl" aria-hidden />
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-terra-300">Visit Us in Person</p>
          <h2 className="mt-2 font-display text-[26px] font-semibold leading-tight text-white sm:text-4xl">
            Come Walk the Rows Yourself
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-leaf-100/75 sm:text-[15px]">
            Find us on Shatab Garh Road, near the Shahab Poora Road railway phatak — open daily 6 AM to 8 PM, 7 days a
            week. Message us first and we&apos;ll check availability before you make the trip.
          </p>
          <div className="mt-7 flex flex-col items-stretch justify-center gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-leaf-900 shadow-lg transition hover:bg-leaf-50 active:scale-[0.98]"
            >
              Get Directions <span aria-hidden>→</span>
            </Link>
            <a
              href={waLink("Assalam-o-Alaikum! Is the nursery open today? I'd like to visit.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:bg-[#1fb959] active:scale-[0.98]"
            >
              WhatsApp Before You Visit
            </a>
          </div>
          <p className="mt-4 text-xs text-leaf-200/50">No appointment needed — just walk in.</p>
        </div>
      </section>
    </>
  );
}
