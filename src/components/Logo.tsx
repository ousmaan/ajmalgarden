import { useState } from "react";

/**
 * Official nursery logo.
 *
 * HOW TO USE THE REAL LOGO: save the provided logo image as
 *   public/images/logo.png
 * and it will be picked up automatically everywhere (navbar, footer, favicon).
 * Until then, a close vector recreation is shown as a fallback.
 */
export function LogoMark({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" aria-hidden="true">
      <circle cx="50" cy="50" r="49" fill="#ffffff" />
      {/* Letter A */}
      <text
        x="56"
        y="82"
        textAnchor="middle"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="56"
        fontWeight="700"
        fill="#111111"
      >
        A
      </text>
      {/* Green swoosh around the left */}
      <path
        d="M57 13 C34 18 14 35 14 58 C14 79 34 94 71 92"
        fill="none"
        stroke="#57b300"
        strokeWidth="6"
        strokeLinecap="round"
      />
      {/* Leaves */}
      <ellipse
        cx="41"
        cy="15"
        rx="7"
        ry="13"
        fill="#3da300"
        transform="rotate(-18 41 15)"
      />
      <ellipse
        cx="76"
        cy="23"
        rx="17"
        ry="8.5"
        fill="#62d219"
        transform="rotate(14 76 23)"
      />
      <path
        d="M41 26 L41 5"
        stroke="#2b7a00"
        strokeWidth="1.4"
        transform="rotate(-18 41 15)"
      />
      <path
        d="M60 20 L91 27"
        stroke="#3da300"
        strokeWidth="1.4"
      />
    </svg>
  );
}

export default function Logo({ className = "h-10 w-10" }: { className?: string }) {
  const [missing, setMissing] = useState(false);

  if (!missing) {
    return (
      <img
        src="/images/logo.png"
        alt="Ajmal Garden Nursery logo"
        onError={() => setMissing(true)}
        className={`${className} shrink-0 rounded-full bg-white object-cover`}
      />
    );
  }
  return <LogoMark className={`${className} shrink-0 rounded-full bg-white`} />;
}
