import { Link } from "react-router-dom";
import { CONTACTS, telLinkFor } from "../data/site";
import CtaButtons, { PhoneIcon } from "../components/CtaButtons";
import VideoGallery from "../components/VideoGallery";

const SPECIALTIES = [
  {
    emoji: "🌲",
    title: "Bonsai Cultivation & Styling",
    text: "Bonsai is patience made visible. Our team trains ficus and other species over years — wiring, pruning and repotting each tree by hand. Whether you're buying your first bonsai or refining a mature one, we'll show you exactly how to water, feed and shape it so it thrives in Punjab's climate.",
    tip: "Beginner tip: start with a ficus bonsai — it forgives missed waterings and loves our warm weather.",
  },
  {
    emoji: "🌵",
    title: "Cacti & Succulents",
    text: "The most common reason succulents die is love — too much water. We stock the right gritty soil mixes, unglazed pots and honest guidance alongside a huge range: easy starters for beginners as well as golden barrels and rare rosettes prized by collectors.",
    tip: "Beginner tip: water only when the soil is fully dry, and give them the sunniest spot you have.",
  },
  {
    emoji: "🌺",
    title: "Exotic & Rare Plant Care",
    text: "Rare aroids, unusual ficus varieties, collector specimens — our exotic shelf goes far beyond a typical neighbourhood nursery. More importantly, we tell you truthfully whether a plant will survive in your home's light and humidity before you buy it, not after.",
    tip: "Beginner tip: match the plant to your room's light first; everything else is easy to fix later.",
  },
];

export default function About() {
  return (
    <>
      {/* ---------- PAGE HERO ---------- */}
      <section className="relative overflow-hidden bg-leaf-900">
        <div className="blob absolute -right-24 -top-24 h-80 w-80 bg-leaf-800/60" aria-hidden="true" />
        <div className="blob absolute -bottom-32 -left-20 h-96 w-96 bg-leaf-800/40" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-terra-300">
            Our Story · Since 1958
          </p>
          <h1 className="font-display max-w-2xl text-4xl font-bold text-white sm:text-5xl">
            Grown With Sialkot, Generation After Generation
          </h1>
        </div>
      </section>

      {/* ---------- BRAND STORY ---------- */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="space-y-5 text-lg leading-relaxed text-leaf-800/85">
            <p>
              Ask anyone in Sialkot where to buy a plant, and sooner or later you'll hear the same
              name. <strong className="text-leaf-900">Ajmal Garden Nursery</strong> on Shatab Garh
              Road has served the city <strong className="text-leaf-900">since 1958</strong> — one
              of Sialkot's oldest, largest and most trusted nurseries, the kind of place where
              the person handing you a rose cutting may have sold one to your grandfather too.
            </p>
            <p>
              Over the years the nursery has grown row by row into a sprawling green world:
              indoor and outdoor plants, flowering shrubs, trees and palms, hand-styled bonsai,
              cacti, succulents, exotics, and every bag of soil, pot and tool a garden could need.
            </p>
            <p>
              What hasn't changed is the philosophy:{" "}
              <em>there should be something here for everyone.</em> The range runs from humble
              seeds and starter plants all the way to premium specimens sought out by serious
              collectors. A first-time buyer and a lifelong hobbyist get the same welcome — and
              the same honest advice.
            </p>
          </div>
          <div className="relative">
            {/* PLACEHOLDER: photo of staff hands repotting a seedling — swap with real photo */}
            <img
              src="/images/about-hands.jpg"
              alt="Gardener's hands repotting a seedling at Ajmal Garden Nursery"
              loading="lazy"
              className="blob h-80 w-full object-cover shadow-xl sm:h-96"
            />
            <div className="absolute -bottom-5 -left-3 rounded-2xl bg-white px-5 py-4 shadow-lg ring-1 ring-leaf-100 sm:-left-6">
              <p className="font-display text-2xl font-bold text-leaf-800">Since 1958</p>
              <p className="text-sm text-leaf-800/70">serving Sialkot for generations</p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- SPECIALIST EXPERTISE ---------- */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-terra-500">
              What Sets Us Apart
            </p>
            <h2 className="font-display text-3xl font-semibold text-leaf-900 sm:text-4xl">
              Specialist Knowledge, Freely Shared
            </h2>
            <p className="mt-4 text-leaf-800/75">
              Three areas where our hands-on expertise goes well beyond a typical local nursery.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {SPECIALTIES.map((s) => (
              <div
                key={s.title}
                className="flex flex-col rounded-3xl bg-leaf-50 p-7 ring-1 ring-leaf-100"
              >
                <div className="blob mb-5 flex h-16 w-16 items-center justify-center bg-white text-3xl shadow-sm">
                  {s.emoji}
                </div>
                <h3 className="font-display text-xl font-semibold text-leaf-900">{s.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-leaf-800/80">{s.text}</p>
                <p className="mt-5 rounded-2xl bg-terra-50 px-4 py-3 text-sm font-medium text-terra-700 ring-1 ring-terra-100">
                  {s.tip}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- MEET THE TEAM (placeholder) ---------- */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="rounded-3xl border-2 border-dashed border-leaf-200 bg-leaf-50/60 p-10 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-terra-500">
            Meet the Team
          </p>
          <h2 className="font-display text-2xl font-semibold text-leaf-900 sm:text-3xl">
            Faces You'll Recognise at the Gate
          </h2>
          {/* PLACEHOLDER SECTION: add team member photos here when photography is available */}
          <p className="mx-auto mt-4 max-w-xl text-leaf-800/70">
            Team photos are coming soon. Until then, the best way to meet the people behind the
            plants is the old-fashioned way — come visit and ask for{" "}
            <strong className="text-leaf-900">Malik Imran</strong> or{" "}
            <strong className="text-leaf-900">Malik Afzaal</strong>, or call them directly:
          </p>
          <div className="mx-auto mt-6 flex max-w-md flex-col gap-2 sm:flex-row sm:justify-center">
            {CONTACTS.map((c) => (
              <a
                key={c.display}
                href={telLinkFor(c)}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-leaf-800 shadow-sm ring-1 ring-leaf-200 transition-colors hover:bg-leaf-700 hover:text-white"
              >
                <PhoneIcon className="h-4 w-4" />
                {c.owner} — {c.display}
              </a>
            ))}
          </div>
          <CtaButtons className="mt-8 justify-center" />
        </div>
      </section>

      {/* ---------- FEATURED ON YOUTUBE (extended) ---------- */}
      <VideoGallery
        heading="As Featured by Local Vloggers"
        subheading="Independent YouTubers have walked our rows and filmed what they found. These videos are the closest thing to a visit — until you make one."
      />

      {/* ---------- CTA ---------- */}
      <section className="bg-terra-500 py-14 text-center">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="font-display text-3xl font-semibold text-white">
            Ready to See the Plants?
          </h2>
          <p className="mt-3 text-terra-50/90">
            Browse the full catalog of categories, then call or WhatsApp for today's availability.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link
              to="/products"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-terra-600 shadow-lg transition-transform hover:scale-105"
            >
              Explore Products
            </Link>
            <Link
              to="/contact"
              className="rounded-full border-2 border-white/70 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Contact & Directions
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
