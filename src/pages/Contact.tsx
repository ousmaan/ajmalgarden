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
      <section className="relative overflow-hidden bg-leaf-900">
        <div className="blob absolute -right-24 -top-28 h-80 w-80 bg-leaf-800/60" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-terra-300">
            Contact & Directions
          </p>
          <h1 className="font-display max-w-2xl text-4xl font-bold text-white sm:text-5xl">
            Visit, Call or WhatsApp — We're Easy to Find
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-5">
          {/* ---------- CONTACT DETAILS ---------- */}
          <div className="space-y-6 lg:col-span-2">
            <div className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-leaf-100">
              <h2 className="font-display text-xl font-semibold text-leaf-900">Address</h2>
              <address className="mt-3 text-sm not-italic leading-relaxed text-leaf-800/80">
                <strong className="text-leaf-900">{CONTACT.name}</strong>
                <br />
                {CONTACT.addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
              <p className="mt-3 text-sm font-medium text-leaf-800">{HOURS}</p>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-terra-600 hover:text-terra-700"
              >
                Open in Google Maps →
              </a>
            </div>

            <div className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-leaf-100">
              <h2 className="font-display text-xl font-semibold text-leaf-900">Phone & WhatsApp</h2>
              <div className="mt-4 space-y-4">
                {CONTACTS.map((c, i) => (
                  <div key={c.display} className="rounded-2xl bg-leaf-50 p-4 ring-1 ring-leaf-100">
                    <p className="text-sm font-bold text-leaf-900">
                      {c.owner}
                      {i === 0 && (
                        <span className="ml-2 rounded-full bg-leaf-700 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white">
                          Main
                        </span>
                      )}
                    </p>
                    <p className="mt-0.5 text-sm text-leaf-800/70">{c.display}</p>
                    <div className="mt-3 flex gap-2">
                      <a
                        href={telLinkFor(c)}
                        className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-leaf-700 px-3 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-leaf-800"
                      >
                        <PhoneIcon className="h-4 w-4" />
                        Call
                      </a>
                      <a
                        href={waLink(undefined, c)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-[#25D366] px-3 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#1fb959]"
                      >
                        <WhatsAppIcon className="h-4 w-4" />
                        WhatsApp
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs text-leaf-800/60">
                WhatsApp is the fastest way to check availability before you visit.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-leaf-100">
              <h2 className="font-display text-xl font-semibold text-leaf-900">Follow Us</h2>
              <p className="mt-2 text-sm text-leaf-800/70">
                See new arrivals, nursery life and plant care tips on our social pages.
              </p>
              <div className="mt-4">
                <SocialButtons />
              </div>
            </div>

            <div className="rounded-3xl bg-terra-50 p-7 ring-1 ring-terra-100">
              <h2 className="font-display text-xl font-semibold text-terra-800">
                First Time Visiting? 🧭
              </h2>
              <ol className="mt-4 space-y-3">
                {DIRECTIONS.map((step, i) => (
                  <li key={step} className="flex gap-3 text-sm leading-relaxed text-terra-900/80">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-terra-500 text-xs font-bold text-white">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* ---------- MAP + FORM ---------- */}
          <div className="space-y-6 lg:col-span-3">
            <div className="overflow-hidden rounded-3xl shadow-md ring-1 ring-leaf-100">
              {/* Google Map embed geocoded from the nursery address.
                  The exact saved location link (https://maps.app.goo.gl/j2sW11SwMc1kwFyA6)
                  is used for all "Open in Google Maps" buttons. */}
              <iframe
                title="Map to Ajmal Garden Nursery, Sialkot"
                src={`https://www.google.com/maps?q=${encodeURIComponent(CONTACT.mapQuery)}&output=embed`}
                className="h-80 w-full border-0 sm:h-96"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>

            <form
              onSubmit={handleSubmit}
              className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-leaf-100"
            >
              <h2 className="font-display text-xl font-semibold text-leaf-900">
                Send Us a Quick Inquiry
              </h2>
              <p className="mt-2 text-sm text-leaf-800/70">
                Type your question below and it will open in WhatsApp, ready to send to{" "}
                {CONTACT.phoneDisplay}. This is an inquiry only — there's no online ordering or
                payment.
              </p>
              <div className="mt-5 space-y-4">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-leaf-900">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Ahmed"
                    className="w-full rounded-xl border border-leaf-200 bg-cream px-4 py-3 text-sm text-leaf-900 outline-none transition-colors placeholder:text-leaf-800/40 focus:border-leaf-500 focus:ring-2 focus:ring-leaf-200"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-leaf-900">
                    Your Question
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="e.g. Do you have jasmine plants in stock right now? What sizes do you have?"
                    className="w-full rounded-xl border border-leaf-200 bg-cream px-4 py-3 text-sm text-leaf-900 outline-none transition-colors placeholder:text-leaf-800/40 focus:border-leaf-500 focus:ring-2 focus:ring-leaf-200"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white shadow transition-transform hover:scale-[1.02] sm:w-auto"
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
