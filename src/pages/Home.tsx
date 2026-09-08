import { Link } from "react-router-dom";
import { CATEGORIES, CONTACT, waLink } from "../data/site";
import CtaButtons from "../components/CtaButtons";
import VideoGallery from "../components/VideoGallery";

const WHY_ITEMS = [
  {
    emoji: "🌳",
    title: "A Local Institution",
    text: "Serving Sialkot since 1958 — one of the city's oldest and largest nurseries. Many customers are the second or third generation of their family to buy plants here.",
  },
  {
    emoji: "🪴",
    title: "Something for Everyone",
    text: "From humble seeds and starter plants to premium, rare specimens for serious collectors — all on the same shelves.",
  },
  {
    emoji: "🧑‍🌾",
    title: "Real Expertise",
    text: "Hands-on specialist knowledge in bonsai styling, cacti & succulents, and exotic plant care — advice is always free.",
  },
  {
    emoji: "🚚",
    title: "Bulk & Landscaping",
    text: "Trees, palms and shrubs in quantity for landscapers, builders and housing schemes. Call to discuss your project.",
  },
];

export default function Home() {
  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="relative overflow-hidden">
        {/* PLACEHOLDER: hero image of nursery entrance / rows — swap with real photo */}
        <img
          src="/images/hero-nursery.jpg"
          alt="Lush rows of potted plants at Ajmal Garden Nursery, Sialkot"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-leaf-950/85 via-leaf-950/60 to-leaf-900/20" />
        <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32 lg:py-40">
          <div className="max-w-2xl">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-leaf-100 backdrop-blur">
              🌿 Ajmal Garden Colony · Sialkot
            </p>
            <h1 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Sialkot's Trusted Garden{" "}
              <span className="text-marigold">Since 1958</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-leaf-50/90">
              From humble seeds to premium bonsai and rare exotics — one of the city's
              oldest, largest and most loved plant nurseries has it all under one sky.
            </p>
            <CtaButtons light className="mt-8" />
            <p className="mt-4 text-sm text-leaf-100/70">
              No online store — just visit, call or WhatsApp {CONTACT.phoneDisplay}.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- BRAND INTRO ---------- */}
      <section className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-20">
        <h2 className="font-display text-3xl font-semibold text-leaf-900 sm:text-4xl">
          A Nursery the Whole City Knows
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-leaf-800/80">
          Since 1958, families across Sialkot have walked our rows — grandparents, parents and
          now their children. Ajmal Garden Nursery grew into one of the city's largest nurseries
          by keeping one promise: <em>something for everyone</em>. Whether you're planting your
          very first seed or hunting a rare exotic for your collection, you'll find it on the
          very same visit.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/about"
            className="rounded-full border-2 border-leaf-700 px-6 py-2.5 text-sm font-semibold text-leaf-800 transition-colors hover:bg-leaf-700 hover:text-white"
          >
            Our Story
          </Link>
          <Link
            to="/products"
            className="rounded-full bg-terra-500 px-6 py-2.5 text-sm font-semibold text-white shadow transition-colors hover:bg-terra-600"
          >
            Browse Plant Categories
          </Link>
        </div>
      </section>

      {/* ---------- CATEGORY GRID ---------- */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-terra-500">
                What We Grow & Stock
              </p>
              <h2 className="font-display text-3xl font-semibold text-leaf-900 sm:text-4xl">
                Seven Worlds of Green
              </h2>
            </div>
            <Link to="/products" className="text-sm font-semibold text-leaf-700 hover:text-leaf-900">
              View full catalog →
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CATEGORIES.map((cat, i) => (
              <Link
                key={cat.id}
                to={`/products#${cat.id}`}
                className={`group relative overflow-hidden rounded-3xl shadow-md ring-1 ring-leaf-100 transition-shadow hover:shadow-xl ${
                  i === 0 ? "sm:col-span-2 lg:col-span-1" : ""
                }`}
              >
                {/* PLACEHOLDER: category photo — swap with real nursery photo */}
                <img
                  src={cat.image}
                  alt={cat.imageAlt}
                  loading="lazy"
                  className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-leaf-950/85 via-leaf-950/25 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="font-display text-xl font-semibold text-white">{cat.name}</h3>
                  <p className="mt-1 line-clamp-2 text-sm text-leaf-50/85">{cat.short}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- WHY AJMAL GARDEN ---------- */}
      <section className="leaf-texture py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-terra-500">
              Why Ajmal Garden
            </p>
            <h2 className="font-display text-3xl font-semibold text-leaf-900 sm:text-4xl">
              Why Sialkot Keeps Coming Back
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {WHY_ITEMS.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-leaf-100 transition-shadow hover:shadow-md"
              >
                <div className="blob mb-4 flex h-14 w-14 items-center justify-center bg-leaf-100 text-2xl">
                  {item.emoji}
                </div>
                <h3 className="font-display text-lg font-semibold text-leaf-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-leaf-800/75">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- FEATURED ON YOUTUBE ---------- */}
      <VideoGallery />

      {/* ---------- VISIT CTA ---------- */}
      <section className="bg-leaf-800 py-16 text-center sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
            Come Walk the Rows Yourself
          </h2>
          <p className="mt-4 text-leaf-100/85">
            Find us on Shatab Garh Road, near the Shahab Poora Road railway phatak — open daily
            6 AM to 8 PM, 7 days a week. Or message us first — we're happy to check availability
            before you make the trip.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-leaf-800 shadow-lg transition-transform hover:scale-105"
            >
              Get Directions
            </Link>
            <a
              href={waLink("Assalam-o-Alaikum! Is the nursery open today? I'd like to visit.")}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-105"
            >
              WhatsApp Before You Visit
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
