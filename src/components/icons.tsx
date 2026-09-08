export function LeafIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3C8 5 4 9 4 13c0 3.3 2.7 6 8 8 5.3-2 8-4.7 8-8 0-4-4-8-8-10Z"
        fill="currentColor"
        opacity={0.14}
      />
      <path
        d="M12 3C8 5 4 9 4 13c0 3.3 2.7 6 8 8 5.3-2 8-4.7 8-8 0-4-4-8-8-10Z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinejoin="round"
      />
      <path d="M12 21V9" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" />
      <path d="M8.5 12c1.2.6 2.4 1 3.5 1M15.5 10c-1 .5-2 1-3 1.3M9 16c1-.4 2-.6 3-.7" stroke="currentColor" strokeWidth={1.2} strokeLinecap="round" />
    </svg>
  );
}

export function SproutIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 20V10" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" />
      <path d="M12 10C12 8 13.5 5.5 16 5c-1 2.2-.3 4.2-1.8 5.7-.9.9-2 .9-2.2-.7Z" fill="currentColor" opacity={0.9} />
      <path d="M12 10C12 8 10.5 5.5 8 5c1 2.2.3 4.2 1.8 5.7.9.9 2 .9 2.2-.7Z" fill="currentColor" opacity={0.55} />
      <path d="M7 20h10" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" />
    </svg>
  );
}

export function FlowerIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx={12} cy={12} r={2.5} fill="currentColor" />
      <ellipse cx={12} cy={6.2} rx={3} ry={3.8} fill="currentColor" opacity={0.9} />
      <ellipse cx={17.2} cy={9} rx={3} ry={3.8} fill="currentColor" opacity={0.85} transform="rotate(60 17.2 9)" />
      <ellipse cx={17.2} cy={15} rx={3} ry={3.8} fill="currentColor" opacity={0.8} transform="rotate(120 17.2 15)" />
      <ellipse cx={12} cy={17.8} rx={3} ry={3.8} fill="currentColor" opacity={0.85} transform="rotate(180 12 17.8)" />
      <ellipse cx={6.8} cy={15} rx={3} ry={3.8} fill="currentColor" opacity={0.8} transform="rotate(240 6.8 15)" />
      <ellipse cx={6.8} cy={9} rx={3} ry={3.8} fill="currentColor" opacity={0.85} transform="rotate(300 6.8 9)" />
    </svg>
  );
}

export function GemIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 3 4 10l8 11 8-11-8-7Z" stroke="currentColor" strokeWidth={1.6} strokeLinejoin="round" />
      <path d="M4 10h16M12 21 8 10M12 21l4-11" stroke="currentColor" strokeWidth={1.3} strokeLinejoin="round" />
      <path d="M8 10 12 3l4 7" stroke="currentColor" strokeWidth={1.3} strokeLinejoin="round" />
    </svg>
  );
}

export function TruckIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 8h11v7H3z" stroke="currentColor" strokeWidth={1.6} strokeLinejoin="round" />
      <path d="M14 11h3l3 3v1h-6V11Z" stroke="currentColor" strokeWidth={1.6} strokeLinejoin="round" />
      <circle cx={7} cy={17.5} r={1.7} stroke="currentColor" strokeWidth={1.5} />
      <circle cx={17} cy={17.5} r={1.7} stroke="currentColor" strokeWidth={1.5} />
      <path d="M5 12h6M5 14.5h5" stroke="currentColor" strokeWidth={1.2} strokeLinecap="round" opacity={0.5} />
    </svg>
  );
}

export function ShieldCheckIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 3 5 7v6c0 4 2.7 7 7 8 4.3-1 7-4 7-8V7l-7-4Z" stroke="currentColor" strokeWidth={1.6} strokeLinejoin="round" />
      <path d="m9 12 2 2 4-4" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ChevronRightIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" aria-hidden="true">
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

export function ArrowRightIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}
