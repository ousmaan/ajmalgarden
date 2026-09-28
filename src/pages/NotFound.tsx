import { Link } from "react-router-dom";
import { waLink } from "../data/site";
import { usePageMeta } from "../hooks/usePageMeta";

export default function NotFound() {
  usePageMeta(
    "Page not found — Ajmal Garden Nursery",
    "That page doesn't exist. Browse our plant collections or message us on WhatsApp — Ajmal Garden Nursery, Sialkot since 1958.",
  );
  return (
    <section className="leaf-texture-strong mx-auto max-w-2xl px-4 py-16 text-center sm:px-6 sm:py-24">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-terra-500">Off the garden path</p>
      <h1 className="mt-2 font-display text-4xl font-bold tracking-tight text-leaf-900 sm:text-5xl">404</h1>
      <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-leaf-800/65 sm:text-[15px]">
        This row doesn&apos;t exist yet. Let&apos;s get you back among the plants — or just ask us directly.
      </p>
      <div className="mt-7 flex flex-col items-stretch justify-center gap-3 sm:flex-row">
        <Link
          to="/products"
          className="inline-flex items-center justify-center rounded-full bg-leaf-900 px-6 py-3.5 text-sm font-semibold text-white shadow-md transition hover:bg-leaf-800 active:scale-[0.98]"
        >
          Browse plant collections
        </Link>
        <a
          href={waLink("Assalam-o-Alaikum! I was looking for something on your website and couldn't find it.")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white shadow-md transition hover:bg-[#1fb959] active:scale-[0.98]"
        >
          Ask on WhatsApp
        </a>
      </div>
    </section>
  );
}
