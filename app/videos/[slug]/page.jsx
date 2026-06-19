import Link from "next/link";
import { notFound } from "next/navigation";
import { CONTACT } from "@/app/config";
import {
  getVideoBySlug,
  videoEmbedUrl,
  videoLibrary,
  videoPagePath,
  videoPageUrl,
  videoThumbnailUrl,
  videoWatchUrl,
} from "@/data/videos";

export const revalidate = 86400;

export function generateStaticParams() {
  return videoLibrary.map((video) => ({ slug: video.slug }));
}

export async function generateMetadata({ params }) {
  const video = getVideoBySlug(params.slug);
  if (!video) return {};

  const pagePath = videoPagePath(video);
  const pageUrl = videoPageUrl(video);
  const title = `${video.title} — Popcorn Ceiling Removal Pro`;
  const description = video.description;

  return {
    title,
    description,
    alternates: { canonical: pagePath },
    openGraph: {
      title,
      description,
      url: pageUrl,
      type: "video.other",
      images: [videoThumbnailUrl(video)],
      videos: [videoEmbedUrl(video)],
    },
  };
}

function VideoJsonLd({ video }) {
  const pageUrl = videoPageUrl(video);
  const data = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "@id": pageUrl,
    url: pageUrl,
    name: video.title,
    description: video.description,
    thumbnailUrl: videoThumbnailUrl(video),
    uploadDate: video.uploadDate,
    embedUrl: videoEmbedUrl(video),
    potentialAction: {
      "@type": "WatchAction",
      target: pageUrl,
    },
  };

  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function Page({ params }) {
  const video = getVideoBySlug(params.slug);
  if (!video) return notFound();

  const otherVideos = videoLibrary.filter((v) => v.slug !== video.slug);

  return (
    <div className="container-x py-10">
      <VideoJsonLd video={video} />

      <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-amber-700 font-semibold">
            Video walkthrough
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
            {video.title}
          </h1>
          <p className="mt-3 text-gray-700 max-w-2xl">{video.description}</p>

          <div className="mt-6 rounded-3xl overflow-hidden border shadow-sm bg-black">
            <div className="relative w-full" style={{ aspectRatio: "16 / 9" }}>
              <iframe
                src={videoEmbedUrl(video)}
                title={video.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          <section className="mt-6 space-y-4">
            <div>
              <h2 className="text-lg font-semibold">What you’ll see</h2>
              <ul className="mt-2 list-disc pl-5 text-sm text-gray-700 space-y-1">
                <li>Real project footage from our popcorn ceiling removal jobs.</li>
                <li>Dust control, Level 5 skim, sanding, and finished ceilings.</li>
                <li>Same crew and process you get when you book with us.</li>
              </ul>
            </div>
            <div className="rounded-2xl border bg-white p-4 shadow-sm">
              <h3 className="font-semibold">Ready for a quote?</h3>
              <p className="text-sm text-gray-700 mt-1">
                Fast photo estimate, clear scope, and schedule options.
              </p>
              <div className="mt-3 flex flex-wrap gap-3">
                <a className="btn-cta" href={CONTACT.phoneHref}>
                  📞 {CONTACT.phone}
                </a>
                <a className="btn-cta" href="/quote/">
                  Get my quote
                </a>
              </div>
            </div>
          </section>
        </div>

        <aside className="space-y-4">
          <div className="rounded-2xl border bg-white p-4 shadow-sm">
            <h2 className="text-lg font-semibold">Watch on this page</h2>
            <p className="text-sm text-gray-700 mt-2">
              The video is hosted on YouTube but fully playable here so Google
              and visitors can watch without leaving the site.
            </p>
            <Link
              href={videoWatchUrl(video)}
              className="mt-3 inline-flex text-sm font-semibold text-amber-700 hover:underline"
            >
              Open on YouTube ↗
            </Link>
          </div>

          {otherVideos.length > 0 && (
            <div className="rounded-2xl border bg-white p-4 shadow-sm">
              <h3 className="font-semibold">More videos</h3>
              <ul className="mt-3 space-y-3">
                {otherVideos.map((v) => (
                  <li key={v.slug} className="flex gap-3">
                    <Link href={videoPagePath(v)} className="block w-28 shrink-0">
                      <img
                        src={videoThumbnailUrl(v)}
                        alt={v.title}
                        className="h-16 w-full rounded-lg object-cover border"
                        loading="lazy"
                      />
                    </Link>
                    <div>
                      <Link
                        href={videoPagePath(v)}
                        className="font-semibold text-sm hover:underline"
                      >
                        {v.title}
                      </Link>
                      <p className="text-xs text-gray-600">{v.blurb}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </aside>
      </div>
    </div>
  );
}
