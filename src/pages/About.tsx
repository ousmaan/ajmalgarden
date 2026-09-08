import { Link } from "react-router-dom";
import { CONTACTS, telLinkFor } from "../data/site";
import CtaButtons, { PhoneIcon } from "../components/CtaButtons";
import VideoGallery from "../components/VideoGallery";
import { FlowerIcon, LeafIcon, SproutIcon } from "../components/icons";

const SPECIALTIES = [
  {
    Icon: LeafIcon,
    tint: "bg-leaf-50 ring-leaf-100",
    accent: "bg-leaf-700 text-white",
    title: "Bonsai Cultivation & Styling",
    text: "Bonsai is patience made visible. Our team trains ficus and other species over years — wiring, pruning and repotting each tree by hand. Whether you're buying your first bonsai or refining a mature one, we'll show you exactly how to water, feed and shape it so it thrives in Punjab's climate.",
    tip: "Beginner tip: start with a ficus bonsai — it forgives missed waterings and loves our warm weather.",
  },
  {
    Icon: SproutIcon,
    tint: "bg-sage-50 ring-sage-200",
    accent: "bg-white text-leaf-700 ring-1 ring-leaf-100 shadow-sm",
    title: "Cacti & Succulents",
    text: "The most common reason succulents die is love — too much water. We stock the right gritty soil mixes, unglazed pots and honest guidance alongside a huge range: easy starters for beginners as well as golden barrels and rare rosettes prized by collectors.",
    tip: "Beginner tip: water only when the soil is fully dry, and give them the sunniest spot you have.",
  },
  {
    Icon: FlowerIcon,
    tint: "bg-blossom-50 ring-blossom-100",
    accent: "bg-blossom-500 text-white shadow-sm",
    title: "Exotic & Rare Plant Care",
    text: "Rare aroids, unusual ficus varieties, collector specimens — our exotic shelf goes far beyond a typical neighbourhood nursery. More importantly, we tell you truthfully whether a plant will survive in your home's light and humidity before you buy it, not after.",
    tip: "Beginner tip: match the plant to your room's light first; everything else is easy to fix later.",
  },
];

export default function About() {
  return (
    <>
      {/* ---------- PAGE HERO ---------- */}
      <section className="relative overflow-hidden bg-leaf-950">
        <div className="absolute inset-0 leaf-texture opacity-[0.07]" aria-hidden />
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-leaf-800/40 blur-2xl" aria-hidden />
        <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-terra-500/15 blur-3xl" aria-hidden />
        <div className="absolute -right-10 bottom-10 h-40 w-40 rounded-full bg-marigold/10 blur-2xl" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:py-24">
          <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-terra-300">
            <span className="h-1.5 w-1.5 rounded-full bg-marigold" aria-hidden /> Our Story · Since 1958
          </p>
          <h1 className="mt-3 max-w-2xl font-display text-[30px] font-bold leading-tight tracking-tight text-white sm:text-5xl">
            Grown with Sialkot,
            <span className="block text-terra-200">generation after generation.</span>
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-leaf-100/70 sm:text-base">
            One family, one road, one promise since 1958: something for everyone — from a humble seed to a prize
            specimen.
          </p>
        </div>
      </section>

      {/* ---------- BRAND STORY ---------- */}
      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:py-16">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-10">
          <div className="space-y-4 text-[15px] leading-relaxed text-leaf-800/80 sm:text-[17px]">
            <p>
              Ask anyone in Sialkot where to buy a plant, and sooner or later you&apos;ll hear the same name.{" "}
              <strong className="font-semibold text-leaf-900">Ajmal Garden Nursery</strong> on Shatab Garh Road has
              served the city <strong className="font-semibold text-leaf-900">since 1958</strong> — one of
              Sialkot&apos;s oldest, largest and most trusted nurseries, the kind of place where the person handing you
              a rose cutting may have sold one to your grandfather too.
            </p>
            <p>
              Over the years the nursery has grown row by row into a sprawling green world: indoor and outdoor plants,
              flowering shrubs, trees and palms, hand-styled bonsai, cacti, succulents, exotics, and every bag of
              soil, pot and tool a garden could need.
            </p>
            <div className="rounded-2xl bg-leaf-50 px-4 py-3.5 ring-1 ring-leaf-100">
              <p className="font-display text-[15px] font-semibold text-leaf-900">What hasn&apos;t changed</p>
              <p className="mt-1 text-sm leading-relaxed text-leaf-800/70">
                <em>There should be something here for everyone.</em> A first-time buyer and a lifelong hobbyist get the
                same welcome — and the same honest advice.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -right-3 -top-3 hidden h-24 w-24 rounded-3xl bg-marigold/15 blur-xl sm:block" aria-hidden />
            <img
              src="/images/about-hands.jpg"
              alt="Gardener's hands repotting a seedling at Ajmal Garden Nursery"
              loading="lazy"
              className="blob relative h-[320px] w-full object-cover shadow-xl ring-1 ring-leaf-100 sm:h-[420px]"
            />
            <div className="absolute -bottom-4 left-3 rounded-2xl bg-white px-5 py-4 shadow-xl ring-1 ring-leaf-100 sm:-left-4 sm:px-6 sm:py-5">
              <p className="font-display text-xl font-bold leading-none text-leaf-900 sm:text-2xl">Since 1958</p>
              <p className="mt-1 text-xs font-medium text-leaf-800/60 sm:text-sm">Serving Sialkot for generations</p>
              <div className="mt-2 h-1 w-10 rounded-full bg-terra-500" aria-hidden />
            </div>
          </div>
        </div>
      </section>

      {/* ---------- SPECIALIST EXPERTISE ---------- */}
      <section className="bg-white py-10 sm:py-14 lg:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto mb-8 max-w-2xl text-center sm:mb-10">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-terra-500">What Sets Us Apart</p>
            <h2 className="mt-1 font-display text-[26px] font-semibold tracking-tight text-leaf-900 sm:text-4xl">
              Specialist knowledge, <span className="text-terra-500">freely shared.</span>
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-leaf-800/60 sm:text-[15px]">
              Three areas where our hands-on expertise goes well beyond a typical neighbourhood nursery.
            </p>
          </div>

          <div className="grid gap-4 sm:gap-6 lg:grid-cols-3">
            {SPECIALTIES.map((s) => (
              <div key={s.title} className={`card-lift flex flex-col rounded-[22px] p-6 ring-1 sm:rounded-3xl sm:p-7 ${s.tint}`}>
                <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${s.accent}`}>
                  <s.Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-[17px] font-semibold leading-tight text-leaf-900">{s.title}</h3>
                <p className="mt-2.5 flex-1 text-[13px] leading-relaxed text-leaf-800/70">{s.text}</p>
                <p className="mt-5 rounded-2xl bg-white px-4 py-3 text-xs font-medium leading-relaxed text-leaf-800 shadow-sm ring-1 ring-leaf-100">
                  <span className="font-semibold text-terra-600">Tip ·</span> {s.tip}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- MEET THE TEAM ---------- */}
      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        <div className="relative overflow-hidden rounded-[24px] bg-gradient-to-br from-leaf-50 via-white to-sage-50 p-6 ring-1 ring-leaf-100 sm:rounded-3xl sm:p-8 lg:p-10">
          <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-terra-100/60 blur-2xl" aria-hidden />
          <div className="pointer-events-none absolute -left-10 bottom-0 h-40 w-40 rounded-full bg-leaf-100/60 blur-2xl" aria-hidden />
          <div className="relative">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-terra-500">Meet the Team</p>
            <h2 className="mt-1 font-display text-[22px] font-semibold tracking-tight text-leaf-900 sm:text-3xl">
              Faces you&apos;ll recognise at the gate
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-leaf-800/65 sm:text-[15px]">
              Team photos are coming soon. Until then, the best way to meet the people behind the plants is the
              old-fashioned way — come visit and ask for <strong className="font-semibold text-leaf-900">Malik Imran</strong> or{" "}
              <strong className="font-semibold text-leaf-900">Malik Afzaal</strong>, or call them directly:
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2 sm:gap-4">
              {CONTACTS.map((c) => (
                <a
                  key={c.display}
                  href={telLinkFor(c)}
                  className="group flex items-center justify-between gap-3 rounded-2xl bg-white px-4 py-4 shadow-sm ring-1 ring-leaf-100 transition hover:shadow-md active:scale-[0.99]"
                >
                  <span>
                    <span className="block text-sm font-semibold text-leaf-900">{c.owner}</span>
                    <span className="block text-xs text-leaf-800/60">{c.display}</span>
                  </span>
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-leaf-900 text-white transition group-hover:bg-leaf-800">
                    <PhoneIcon className="h-3.5 w-3.5" />
                  </span>
                </a>
              ))}
            </div>

            <CtaButtons className="mt-6" />
          </div>
        </div>
      </section>

      <VideoGallery
        heading="As Featured by Local Vloggers"
        subheading="Independent YouTubers have walked our rows and filmed what they found. These videos are the closest thing to a visit — until you make one."
      />

      {/* ---------- CTA ---------- */}
      <section className="relative overflow-hidden bg-terra-500 py-10 sm:py-14">
        <div className="absolute inset-0 bg-gradient-to-br from-terra-500 via-terra-500 to-terra-600" aria-hidden />
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" aria-hidden />
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="font-display text-[26px] font-semibold tracking-tight text-white sm:text-3xl">Ready to see the plants?</h2>
          <p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-white/85 sm:text-[15px]">
            Browse the full catalog of categories, then call or WhatsApp for today&apos;s availability.
          </p>
          <div className="mt-6 flex flex-col items-stretch justify-center gap-3 sm:flex-row">
            <Link
              to="/products"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-terra-700 shadow-lg transition hover:bg-leaf-50 active:scale-[0.98]"
            >
              Explore Products
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full bg-terra-700 px-6 py-3.5 text-sm font-semibold text-white ring-1 ring-white/20 transition hover:bg-terra-800 active:scale-[0.98]"
            >
              Contact & Directions
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
