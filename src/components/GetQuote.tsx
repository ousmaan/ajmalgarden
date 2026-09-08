import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { CONTACTS, HOURS_SHORT, telLinkFor, waLink } from "../data/site";
import { PhoneIcon, WhatsAppIcon } from "./CtaButtons";

export const QUOTE_WA_MESSAGE =
  "Assalam-o-Alaikum! I'd like to get a quote for some plants at Ajmal Garden Nursery.";

function ChevronIcon({ className = "h-3.5 w-3.5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function TagIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 2H2v10l9.3 9.3a1 1 0 0 0 1.4 0l8.6-8.6a1 1 0 0 0 0-1.4L12 2Z" />
      <circle cx="7" cy="7" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

/**
 * The two quote options — call directly or WhatsApp —
 * with both contacts (Malik Imran & Malik Afzaal) under each.
 * Rendered inside the header dropdown and inline in the mobile menu.
 */
export function GetQuotePanel({ onSelect }: { onSelect?: () => void }) {
  return (
    <div className="w-full rounded-2xl bg-white p-4 text-left shadow-2xl ring-1 ring-leaf-100">
      <p className="font-display text-base font-semibold text-leaf-900">Get a quote</p>
      <p className="mt-0.5 text-xs leading-relaxed text-leaf-800/70">
        Call directly or message us on WhatsApp — {HOURS_SHORT}, 7 days a week.
      </p>

      {/* Option 1 — Call directly */}
      <div className="mt-3 rounded-2xl bg-leaf-50 p-3 ring-1 ring-leaf-100">
        <p className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-leaf-800">
          <PhoneIcon className="h-3.5 w-3.5" />
          Option 1 — Call directly
        </p>
        <div className="mt-2 space-y-2">
          {CONTACTS.map((c) => (
            <a
              key={c.display}
              href={telLinkFor(c)}
              onClick={onSelect}
              className="flex items-center justify-between gap-2 rounded-xl bg-white px-3 py-2 ring-1 ring-leaf-100 transition hover:ring-leaf-300"
            >
              <span>
                <span className="block text-sm font-semibold text-leaf-900">{c.owner}</span>
                <span className="block text-xs text-leaf-800/70">{c.display}</span>
              </span>
              <span className="shrink-0 rounded-full bg-leaf-700 px-3 py-1 text-xs font-semibold text-white">
                Call
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* Option 2 — WhatsApp */}
      <div className="mt-2 rounded-2xl bg-[#25D366]/10 p-3 ring-1 ring-[#25D366]/25">
        <p className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-leaf-800">
          <WhatsAppIcon className="h-3.5 w-3.5 text-[#128C4B]" />
          Option 2 — WhatsApp us
        </p>
        <div className="mt-2 space-y-2">
          {CONTACTS.map((c) => (
            <a
              key={c.display}
              href={waLink(QUOTE_WA_MESSAGE, c)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onSelect}
              className="flex items-center justify-between gap-2 rounded-xl bg-white px-3 py-2 ring-1 ring-[#25D366]/20 transition hover:ring-[#25D366]/50"
            >
              <span>
                <span className="block text-sm font-semibold text-leaf-900">{c.owner}</span>
                <span className="block text-xs text-leaf-800/70">{c.display}</span>
              </span>
              <span className="shrink-0 rounded-full bg-[#25D366] px-3 py-1 text-xs font-semibold text-white">
                Chat
              </span>
            </a>
          ))}
        </div>
      </div>

      <p className="mt-3 text-[11px] leading-relaxed text-leaf-800/60">
        No online ordering — just tell us what you need and we'll reply with availability.
      </p>
    </div>
  );
}

/** Header "Get a quote" button with dropdown panel. */
export default function GetQuoteDropdown({ compact = false }: { compact?: boolean }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="menu"
        className={
          compact
            ? "inline-flex items-center gap-1.5 rounded-full bg-terra-500 px-3.5 py-2 text-xs font-semibold text-white shadow transition-colors hover:bg-terra-600"
            : "ml-2 inline-flex items-center gap-2 rounded-full bg-terra-500 px-4 py-2 text-sm font-semibold text-white shadow transition-colors hover:bg-terra-600"
        }
      >
        <TagIcon className={compact ? "h-3.5 w-3.5" : "h-4 w-4"} />
        Get a quote
        <ChevronIcon
          className={`${compact ? "h-3 w-3" : "h-3.5 w-3.5"} transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open && (
        <div className="absolute right-0 top-full z-50 mt-2 w-[21rem] max-w-[calc(100vw-2rem)]">
          <GetQuotePanel onSelect={() => setOpen(false)} />
        </div>
      )}
    </div>
  );
}
