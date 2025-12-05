import Link from "next/link";
import {
  videoLibrary,
  videoPagePath,
  videoThumbnailUrl,
  videoPageUrl,
} from "@/data/videos";

export const metadata = {
  title: "Videos — Popcorn Ceiling Removal Pro",
  description:
    "Watch our popcorn ceiling removal process: containment, skim coating, sanding, and finished Level 5 ceilings.",
  alternates: { canonical: "/videos/" },
};

export const revalidate = 86400;

function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Popcorn Ceiling Removal Videos",
    hasPart: videoLibrary.map((video) => ({
      "@type": "VideoObject",
      "@id": videoPageUrl(video),
      url: videoPageUrl(video),
      name: video.title,
      description: video.description,
      thumbnailUrl: videoThumbnailUrl(video),
      uploadDate: video.uploadDate,
    })),
  };

  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function Page() {
  return (
    <div className="container-x py-10">
      <JsonLd />
      <div className="max-w-3xl">
        <p className="text-xs uppercase tracking-[0.3em] text-amber-700 font-semibold">
          Video library
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
          Popcorn ceiling removal videos
        </h1>
        <p className="mt-3 text-gray-700">
          Each video is hosted on YouTube but fully playable on its own page so
          Google can index it as a video result on our domain.
        </p>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {videoLibrary.map((video) => (
          <article
            key={video.slug}
            className="card bg-white rounded-2xl border shadow-sm overflow-hidden flex flex-col"
          >
            <Link href={videoPagePath(video)} className="block">
              <img
                src={videoThumbnailUrl(video)}
                alt={video.title}
                className="w-full h-40 object-cover"
                loading="lazy"
              />
            </Link>
            <div className="p-4 space-y-2 flex-1 flex flex-col">
              <h2 className="text-lg font-semibold">
                <Link href={videoPagePath(video)} className="hover:underline">
                  {video.title}
                </Link>
              </h2>
              <p className="text-sm text-gray-600 flex-1">{video.blurb}</p>
              <Link
                href={videoPagePath(video)}
                className="text-sm font-semibold text-amber-700 hover:underline"
              >
                Watch on our site →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
