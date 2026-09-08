import { useState } from "react";
import { VIDEOS } from "../data/site";

function LiteYouTube({ id, title }: { id: string; title: string }) {
  const [play, setPlay] = useState(false);
  if (play) {
    return (
      <iframe
        className="h-full w-full"
        src={`https://www.youtube.com/embed/${id}?autoplay=1`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    );
  }
  return (
    <button
      type="button"
      onClick={() => setPlay(true)}
      className="group relative h-full w-full overflow-hidden bg-leaf-950 text-left"
      aria-label={`Play ${title}`}
    >
      <img
        src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}
        alt=""
        loading="lazy"
        className="h-full w-full object-cover opacity-90 transition duration-500 group-hover:scale-[1.03] group-hover:opacity-100"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-leaf-950/60 via-leaf-950/10 to-transparent" />
      <span className="absolute inset-0 grid place-items-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-leaf-900 shadow-xl ring-1 ring-black/10 transition group-hover:scale-105 group-active:scale-95 sm:h-[60px] sm:w-[60px]">
          <svg viewBox="0 0 24 24" fill="currentColor" className="ml-0.5 h-6 w-6" aria-hidden>
            <path d="M8 5.14v14l11-7-11-7Z" />
          </svg>
        </span>
      </span>
      <span className="absolute bottom-2 left-2 rounded-full bg-black/55 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur sm:bottom-3 sm:left-3">
        Watch on YouTube
      </span>
    </button>
  );
}

export default function VideoGallery({
  heading = "See Ajmal Garden Nursery for Yourself",
  subheading = "Don't just take our word for it — independent local vloggers have visited and filmed the nursery. Watch the real rows, real stock and real atmosphere before you visit.",
  id,
}: {
  heading?: string;
  subheading?: string;
  id?: string;
}) {
  if (VIDEOS.length === 0) return null;

  return (
    <section id={id} className="leaf-texture-strong relative overflow-hidden bg-white py-10 sm:py-16">
      <div className="pointer-events-none absolute -right-20 top-10 h-64 w-64 rounded-full bg-blossom-100/50 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute -left-16 bottom-10 h-64 w-64 rounded-full bg-leaf-100/60 blur-3xl" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto mb-6 max-w-2xl text-center sm:mb-10">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-terra-500">As Featured by Local Vloggers</p>
          <h2 className="mt-1 font-display text-[22px] font-semibold tracking-tight text-leaf-900 sm:text-4xl">{heading}</h2>
          <p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-leaf-800/65 sm:text-[15px]">{subheading}</p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
          {VIDEOS.map((video) => (
            <div
              key={video.id}
              className="overflow-hidden rounded-[18px] bg-white shadow-sm ring-1 ring-leaf-100 transition-shadow hover:shadow-md sm:rounded-2xl"
            >
              <div className="aspect-video w-full">
                <LiteYouTube id={video.id} title={video.title} />
              </div>
            </div>
          ))}
        </div>

        <p className="mt-4 text-center text-xs text-leaf-800/50 sm:mt-6">
          Tip: tap any video — it plays right here without leaving the page.
        </p>
      </div>
    </section>
  );
}
