import { VIDEOS } from "../data/site";

/**
 * "Featured on YouTube" — independent vlogger videos filmed at the nursery.
 * Grid reflows gracefully for any number of videos; iframes lazy-load.
 */
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
    <section id={id} className="leaf-texture bg-leaf-50 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-terra-500">
            As Featured by Local Vloggers
          </p>
          <h2 className="font-display text-3xl font-semibold text-leaf-900 sm:text-4xl">
            {heading}
          </h2>
          <p className="mt-4 text-leaf-800/80">{subheading}</p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {VIDEOS.map((video) => (
            <div
              key={video.id}
              className="overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-leaf-100 transition-shadow hover:shadow-xl"
            >
              <div className="aspect-video w-full">
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
