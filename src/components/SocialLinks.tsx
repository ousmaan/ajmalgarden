import { SOCIALS } from "../data/site";

export function FacebookIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.45 2.89h-2.33v6.99A10 10 0 0 0 22 12Z" />
    </svg>
  );
}

export function InstagramIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden="true"
    >
      <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.4" cy="6.6" r="1.3" fill="currentColor" stroke="none" />
    </svg>
  );
}

/** Compact social icon buttons (footer, etc.) */
export function SocialIcons({ light = true }: { light?: boolean }) {
  const base = light
    ? "text-leaf-200/80 hover:text-white hover:bg-leaf-800"
    : "text-leaf-700 hover:text-white hover:bg-leaf-700";
  return (
    <div className="flex gap-2">
      <a
        href={SOCIALS.facebook}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Ajmal Garden Nursery on Facebook"
        className={`flex h-10 w-10 items-center justify-center rounded-full transition-colors ${base}`}
      >
        <FacebookIcon />
      </a>
      <a
        href={SOCIALS.instagram}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Ajmal Garden Nursery on Instagram"
        className={`flex h-10 w-10 items-center justify-center rounded-full transition-colors ${base}`}
      >
        <InstagramIcon />
      </a>
    </div>
  );
}

/** Full labeled social buttons (contact page, etc.) */
export default function SocialButtons() {
  return (
    <div className="flex flex-wrap gap-3">
      <a
        href={SOCIALS.facebook}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full bg-[#1877F2] px-5 py-2.5 text-sm font-semibold text-white shadow transition-transform hover:scale-105"
      >
        <FacebookIcon className="h-4 w-4" />
        Facebook
      </a>
      <a
        href={SOCIALS.instagram}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#8134AF] px-5 py-2.5 text-sm font-semibold text-white shadow transition-transform hover:scale-105"
      >
        <InstagramIcon className="h-4 w-4" />
        Instagram
      </a>
    </div>
  );
}
