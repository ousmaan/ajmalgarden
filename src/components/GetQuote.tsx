import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { CONTACTS, HOURS_SHORT, telLinkFor, waLink } from "../data/site";
import { PhoneIcon, WhatsAppIcon } from "./CtaButtons";

export const QUOTE_WA_MESSAGE = "Assalam-o-Alaikum! I'd like to get a quote for some plants at Ajmal Garden Nursery.";

function ChevronIcon({ className = "h-3.5 w-3.5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function TagIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2H2v10l9.3 9.3a1 1 0 0 0 1.4 0l8.6-8.6a1 1 0 0 0 0-1.4L12 2Z" />
      <circle cx="7" cy="7" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function GetQuotePanel({ onSelect }: { onSelect?: () => void }) {
  return (
    <div className="w-full rounded-[20px] bg-white p-4 text-left shadow-[0_16px_40px_rgba(15,32,16,0.14)] ring-1 ring-leaf-100">
      <p className="font-display text-[16px] font-semibold text-leaf-900">Get a quote</p>
      <p className="mt-1 text-xs leading-relaxed text-leaf-800/65">
        Call directly or message on WhatsApp — {HOURS_SHORT}, 7 days a week.
      </p>

      <div className="mt-3.5 rounded-2xl bg-leaf-50 p-3 ring-1 ring-leaf-100">
        <p className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-leaf-800">
          <PhoneIcon className="h-3.5 w-3.5" />
          Option 1 — Call directly
        </p>
        <div className="mt-2.5 space-y-2">
          {CONTACTS.map((c) => (
            <a
              key={c.display}
              href={telLinkFor(c)}
              onClick={onSelect}
              className="flex items-center justify-between gap-2 rounded-xl bg-white px-3.5 py-2.5 ring-1 ring-leaf-100 transition hover:bg-leaf-50 hover:ring-leaf-200"
            >
              <span>
                <span className="block text-sm font-semibold text-leaf-900">{c.owner}</span>
                <span className="block text-xs text-leaf-800/60">{c.display}</span>
              </span>
              <span className="shrink-0 rounded-full bg-leaf-800 px-3 py-1 text-xs font-semibold text-white">Call</span>
            </a>
          ))}
        </div>
      </div>

      <div className="mt-2.5 rounded-2xl bg-[#25D366]/[0.08] p-3 ring-1 ring-[#25D366]/20">
        <p className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-leaf-800">
          <WhatsAppIcon className="h-3.5 w-3.5 text-[#128C4B]" />
          Option 2 — WhatsApp us
        </p>
        <div className="mt-2.5 space-y-2">
          {CONTACTS.map((c) => (
            <a
              key={c.display}
              href={waLink(QUOTE_WA_MESSAGE, c)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onSelect}
              className="flex items-center justify-between gap-2 rounded-xl bg-white px-3.5 py-2.5 ring-1 ring-[#25D366]/15 transition hover:ring-[#25D366]/30"
            >
              <span>
                <span className="block text-sm font-semibold text-leaf-900">{c.owner}</span>
                <span className="block text-xs text-leaf-800/60">{c.display}</span>
              </span>
              <span className="shrink-0 rounded-full bg-[#25D366] px-3 py-1 text-xs font-semibold text-white">Chat</span>
            </a>
          ))}
        </div>
      </div>

      <p className="mt-3 text-center text-[11px] leading-relaxed text-leaf-800/50">
        No online ordering — just tell us what you need.
      </p>
    </div>
  );
}

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
            ? "inline-flex items-center gap-1.5 rounded-full bg-terra-500 px-3.5 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-terra-600 active:scale-[0.98]"
            : "ml-1.5 inline-flex items-center gap-2 rounded-full bg-terra-500 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-terra-600 active:scale-[0.98]"
        }
      >
        <TagIcon className={compact ? "h-3.5 w-3.5" : "h-4 w-4"} />
        Get a quote
        <ChevronIcon className={`${compact ? "h-3 w-3" : "h-3.5 w-3.5"} transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="absolute right-0 top-full z-50 mt-2.5 w-[21rem] max-w-[calc(100vw-1.5rem)] soft-in">
          <GetQuotePanel onSelect={() => setOpen(false)} />
        </div>
      )}
    </div>
  );
}
