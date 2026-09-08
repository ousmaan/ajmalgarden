import { useState, type FormEvent } from "react";
import { CONTACT, CONTACTS, HOURS, MAPS_URL, telLinkFor, waLink } from "../data/site";
import { PhoneIcon, WhatsAppIcon } from "../components/CtaButtons";
import SocialButtons from "../components/SocialLinks";

const DIRECTIONS = [
  "Head towards Shahab Poora Road and continue until you reach the railway phatak (level crossing).",
  "Cross onto Shatab Garh Road — the nursery is close to the crossing, inside Ajmal Garden Colony.",
  "Look for the long rows of green — the nursery frontage is hard to miss.",
  "Coming from outside Sialkot? Any rickshaw or local driver will know Shahab Poora phatak.",
];

export default function Contact() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text = `Assalam-o-Alaikum! My name is ${name || "(visitor)"}.\n\n${message}`;
    window.open(waLink(text), "_blank", "noopener,noreferrer");
  };

  return (
    <>
      {/* ---------- PAGE HERO ---------- */}
      <section className="relative overflow-hidden bg-leaf-950">
        <div className="absolute inset-0 leaf-texture opacity-[0.07]" aria-hidden />
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-leaf-800/40 blur-2xl" aria-hidden />
        <div className="absolute -left-20 -bottom-20 h-72 w-72 rounded-full bg-terra-500/15 blur-3xl" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
          <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-terra-300">
            <span className="h-1.5 w-1.5 rounded-full bg-marigold" aria-hidden /> Contact & Directions
          </p>
          <h1 className="mt-3 max-w-2xl font-display text-[28px] font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            Visit, call or WhatsApp —
            <span className="text-terra-200"> we&apos;re easy to find.</span>
          </h1>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-leaf-100/65 sm:text-[15px]">
            Open daily 6 AM – 8 PM · No appointment needed · WhatsApp is the fastest way to check availability.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10 lg:py-12">
        <div className="grid gap-6 lg:grid-cols-5 lg:gap-8">
          {/* ---------- LEFT: CONTACT DETAILS ---------- */}
          <div className="space-y-4 lg:col-span-2">
            <div className="rounded-[20px] bg-white p-5 shadow-sm ring-1 ring-leaf-100 sm:rounded-3xl sm:p-6">
              <h2 className="font-display text-[15px] font-semibold text-leaf-900 sm:text-base">Address</h2>
              <address className="mt-2 text-sm not-italic leading-relaxed text-leaf-800/70">
                <strong className="font-semibold text-leaf-900">{CONTACT.name}</strong>
                <br />
                {CONTACT.addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
              <p className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-leaf-50 px-3 py-1.5 text-xs font-medium text-leaf-800 ring-1 ring-leaf-100">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" aria-hidden />
                {HOURS}
              </p>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-leaf-900 px-4 py-2 text-xs font-semibold text-white transition hover:bg-leaf-800 active:scale-[0.98]"
              >
                Open in Google Maps <span aria-hidden>→</span>
              </a>
            </div>

            <div className="rounded-[20px] bg-white p-5 shadow-sm ring-1 ring-leaf-100 sm:rounded-3xl sm:p-6">
              <h2 className="font-display text-[15px] font-semibold text-leaf-900 sm:text-base">Phone & WhatsApp</h2>
              <div className="mt-3 space-y-3">
                {CONTACTS.map((c, i) => (
                  <div key={c.display} className="rounded-2xl bg-leaf-50 p-3.5 ring-1 ring-leaf-100">
                    <p className="flex items-center gap-2 text-sm font-semibold text-leaf-900">
                      {c.owner}
                      {i === 0 && (
                        <span className="rounded-full bg-leaf-900 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
                          Main
                        </span>
                      )}
                    </p>
                    <p className="mt-0.5 text-xs font-medium tracking-wide text-leaf-800/60">{c.display}</p>
                    <div className="mt-3 flex gap-2">
                      <a
                        href={telLinkFor(c)}
                        className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-leaf-900 px-3 py-2.5 text-xs font-semibold text-white transition hover:bg-leaf-800 active:scale-[0.98]"
                      >
                        <PhoneIcon className="h-3.5 w-3.5" />
                        Call
                      </a>
                      <a
                        href={waLink(undefined, c)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-[#25D366] px-3 py-2.5 text-xs font-semibold text-white transition hover:bg-[#1fb959] active:scale-[0.98]"
                      >
                        <WhatsAppIcon className="h-3.5 w-3.5" />
                        WhatsApp
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-3 text-center text-xs text-leaf-800/50">WhatsApp is the fastest way to check stock.</p>
            </div>

            <div className="rounded-[20px] bg-white p-5 shadow-sm ring-1 ring-leaf-100 sm:rounded-3xl sm:p-6">
              <h2 className="font-display text-[15px] font-semibold text-leaf-900 sm:text-base">Follow Us</h2>
              <p className="mt-1 text-sm leading-relaxed text-leaf-800/60">
                New arrivals, nursery life and care tips — see it first on social.
              </p>
              <div className="mt-3">
                <SocialButtons />
              </div>
            </div>

            <div className="rounded-[20px] bg-terra-50 p-5 ring-1 ring-terra-100 sm:rounded-3xl sm:p-6">
              <h2 className="font-display text-[15px] font-semibold text-terra-800">First Time Visiting?</h2>
              <ol className="mt-3 space-y-2.5">
                {DIRECTIONS.map((step, i) => (
                  <li key={step} className="flex gap-2.5 text-sm leading-relaxed text-terra-900/75">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-terra-500 text-xs font-bold text-white">
                      {i + 1}
                    </span>
                    <span className="pt-0.5">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* ---------- RIGHT: MAP + FORM ---------- */}
          <div className="space-y-4 lg:col-span-3">
            <div className="overflow-hidden rounded-[20px] bg-white shadow-sm ring-1 ring-leaf-100 sm:rounded-3xl">
              <div className="flex items-center justify-between gap-3 border-b border-leaf-100 px-4 py-3 sm:px-5">
                <h2 className="font-display text-sm font-semibold text-leaf-900">Find Us on the Map</h2>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 rounded-full bg-leaf-900 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-leaf-800"
                >
                  Open in Maps
                </a>
              </div>
              <iframe
                title="Map to Ajmal Garden Nursery, Sialkot"
                src={`https://www.google.com/maps?q=${encodeURIComponent(CONTACT.mapQuery)}&z=16&output=embed`}
                className="h-[300px] w-full border-0 sm:h-[360px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <p className="px-4 py-2.5 text-center text-xs text-leaf-800/50 sm:px-5">
                Pin is approximate — follow Shatab Garh Road to Ajmal Garden Colony, near the phatak.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="rounded-[20px] bg-white p-5 shadow-sm ring-1 ring-leaf-100 sm:rounded-3xl sm:p-6">
              <h2 className="font-display text-[16px] font-semibold text-leaf-900 sm:text-lg">Send Us a Quick Inquiry</h2>
              <p className="mt-1.5 text-sm leading-relaxed text-leaf-800/60">
                Type your question — it opens in WhatsApp, ready to send to {CONTACT.phoneDisplay}. No online ordering
                or payment.
              </p>
              <div className="mt-5 space-y-4">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-leaf-800">
                    Your Name <span className="font-normal normal-case tracking-normal text-leaf-800/40">— optional</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Ahmed"
                    autoComplete="name"
                    className="w-full rounded-2xl border border-leaf-200 bg-cream px-4 py-3 text-sm text-leaf-900 outline-none transition placeholder:text-leaf-800/35 focus:border-leaf-400 focus:bg-white focus:ring-4 focus:ring-leaf-100"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-leaf-800">
                    Your Question <span className="text-terra-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="e.g. Do you have jasmine plants in stock? What sizes do you have?"
                    className="w-full resize-none rounded-2xl border border-leaf-200 bg-cream px-4 py-3 text-sm leading-relaxed text-leaf-900 outline-none transition placeholder:text-leaf-800/35 focus:border-leaf-400 focus:bg-white focus:ring-4 focus:ring-leaf-100"
                  />
                  <p className="mt-1.5 text-xs text-leaf-800/40">{message.length > 0 ? `${message.length} characters` : "We reply 6 AM – 8 PM daily."}</p>
                </div>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white shadow-md transition hover:bg-[#1fb959] active:scale-[0.98] sm:w-auto"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  Open in WhatsApp
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
