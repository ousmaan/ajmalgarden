import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import {
  CONTACT,
  CONTACTS,
  HOURS,
  MAPS_URL,
  NAV_LINKS,
  TAGLINE,
  telLinkFor,
  waLink,
} from "../data/site";
import { PhoneIcon, WhatsAppIcon } from "./CtaButtons";
import Logo from "./Logo";
import { SocialIcons } from "./SocialLinks";
import GetQuoteDropdown, { GetQuotePanel } from "./GetQuote";

/** Scrolls to top on route change, or to the anchor if a #hash is present. */
function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        // slight delay so the page has rendered
        setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 60);
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname, hash]);
  return null;
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => setOpen(false), [location]);

  return (
    <header className="sticky top-0 z-40 border-b border-leaf-100 bg-cream/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link to="/" className="flex items-center gap-3">
          <Logo className="h-11 w-11" />
          <div className="leading-tight">
            <span className="font-display block text-lg font-bold text-leaf-900 sm:text-xl">
              Ajmal Garden Nursery
            </span>
            <span className="block text-[11px] font-medium uppercase tracking-widest text-terra-500">
              {TAGLINE}
            </span>
          </div>
        </Link>

        <div className="flex items-center gap-1">
          <nav className="hidden items-center gap-1 md:flex">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                    isActive
                      ? "bg-leaf-700 text-white"
                      : "text-leaf-800 hover:bg-leaf-100"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Top-right "Get a quote" — dropdown with Call / WhatsApp options */}
          <div className="hidden md:block">
            <GetQuoteDropdown />
          </div>
          <div className="md:hidden">
            <GetQuoteDropdown compact />
          </div>

          <button
            className="rounded-lg p-2 text-leaf-800 hover:bg-leaf-100 md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-leaf-100 bg-cream px-4 pb-4 pt-2 md:hidden">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `block rounded-xl px-4 py-3 text-base font-semibold ${
                  isActive ? "bg-leaf-700 text-white" : "text-leaf-800 hover:bg-leaf-100"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <div className="mt-3">
            <GetQuotePanel />
          </div>
        </nav>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-leaf-950 text-leaf-100">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <Logo className="h-11 w-11" />
            <div>
              <p className="font-display text-lg font-bold text-white">Ajmal Garden Nursery</p>
              <p className="text-xs uppercase tracking-widest text-terra-300">{TAGLINE}</p>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-leaf-200/80">
            Serving Sialkot since 1958 — one of the city's oldest and largest plant nurseries,
            trusted by families across generations for everything from humble seeds to premium
            bonsai and exotic specimens.
          </p>
          <div className="mt-5">
            <SocialIcons />
          </div>
        </div>

        <div>
          <h3 className="mb-4 font-display text-base font-semibold text-white">Visit Us</h3>
          <address className="text-sm not-italic leading-relaxed text-leaf-200/80">
            {CONTACT.addressLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </address>
          <p className="mt-3 text-sm text-leaf-200/80">{HOURS}</p>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block text-sm font-semibold text-terra-300 hover:text-white"
          >
            Open in Google Maps →
          </a>
        </div>

        <div>
          <h3 className="mb-4 font-display text-base font-semibold text-white">Get in Touch</h3>
          <div className="space-y-3">
            {CONTACTS.map((c) => (
              <div key={c.display} className="text-sm">
                <p className="font-semibold text-white">
                  {c.owner} —{" "}
                  <a href={telLinkFor(c)} className="hover:underline">
                    {c.display}
                  </a>
                </p>
                <div className="mt-1 flex gap-4">
                  <a href={telLinkFor(c)} className="inline-flex items-center gap-1.5 text-leaf-200/80 hover:text-white">
                    <PhoneIcon className="h-3.5 w-3.5 text-terra-300" />
                    Call
                  </a>
                  <a
                    href={waLink(undefined, c)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-leaf-200/80 hover:text-white"
                  >
                    <WhatsAppIcon className="h-3.5 w-3.5 text-[#25D366]" />
                    WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-leaf-200/60">Call ahead for bulk orders.</p>
          <nav className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm">
            {NAV_LINKS.map((l) => (
              <Link key={l.to} to={l.to} className="text-leaf-200/80 hover:text-white">
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
      <div className="border-t border-leaf-800/60 py-5 text-center text-xs text-leaf-200/60">
        © {new Date().getFullYear()} Ajmal Garden Nursery, {TAGLINE}. No online sales — visit,
        call or WhatsApp us directly.
      </div>
    </footer>
  );
}

/** Floating WhatsApp click-to-chat button, visible on every page. */
function FloatingWhatsApp() {
  return (
    <a
      href={waLink("Assalam-o-Alaikum! I'd like to ask about plants at Ajmal Garden Nursery.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Ajmal Garden Nursery on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-green-900/30 transition-transform hover:scale-110"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollManager />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
