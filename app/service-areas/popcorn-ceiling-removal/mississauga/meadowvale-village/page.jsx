import Link from "next/link";
import { CONTACT } from "@/app/config";
export const revalidate = 86400;

export const metadata = {
  title: "Popcorn Ceiling Removal — Meadowvale Village, Mississauga",
  description:
    "Meadowvale Village popcorn/stipple ceiling removal for detached and townhomes. Dust control, Level 5 skim, primered, paint-ready results.",
  alternates: {
    canonical:
      "/service-areas/popcorn-ceiling-removal/mississauga/meadowvale-village/",
  },
  openGraph: {
    title: "Popcorn Ceiling Removal — Meadowvale Village",
    description:
      "Clean, residential popcorn removal with Level 5 smooth finish and tidy workflow.",
    url: "/service-areas/popcorn-ceiling-removal/mississauga/meadowvale-village/",
    type: "article",
  },
  robots: { index: true, follow: true },
};

function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: "Popcorn Ceiling Removal",
        serviceType: ["Popcorn Ceiling Removal", "Ceiling Skim Coat Level 5"],
        areaServed: "Meadowvale Village, Mississauga",
        url: "/service-areas/popcorn-ceiling-removal/mississauga/meadowvale-village/",
        potentialAction: { "@type": "RequestQuoteAction", target: "/quote/" },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Service Areas",
            item: "/service-areas",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Popcorn Ceiling Removal",
            item: "/service-areas/popcorn-ceiling-removal/",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Mississauga",
            item: "/service-areas/popcorn-ceiling-removal/mississauga/",
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "Meadowvale Village",
            item: "/service-areas/popcorn-ceiling-removal/mississauga/meadowvale-village/",
          },
        ],
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

const phoneHref = (CONTACT && CONTACT.phoneHref) || "tel:+16479236784";

export default function Page() {
  const images = Array.from(
    { length: 6 },
    (_, i) => `/services/popcorn-ceiling-removal/${i + 1}.webp`
  );
  return (
    <div className="container-x mx-auto px-4 py-10">
      <JsonLd />

      <header className="max-w-5xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
              Popcorn Ceiling Removal — Meadowvale Village
            </h1>
            <p className="mt-3 text-gray-700">
              Heritage-adjacent streets and newer builds in Meadowvale Village
              often have painted stipple. We protect thoroughly, contain dust,
              and skim to <strong>Level 5</strong> so even long sightlines look
              flat.
            </p>
          </div>
          <div className="flex gap-3 md:shrink-0">
            <a
              href={phoneHref}
              className="inline-flex items-center h-11 px-4 rounded-xl bg-gradient-to-b from-blue-600 to-blue-700 text-white font-medium shadow-sm hover:shadow-md hover:brightness-110 active:brightness-95 transition"
            >
              <span className="mr-2">📞</span>
              <span className="whitespace-nowrap">(647) 923-6784</span>
            </a>
            <a
              href="/quote/"
              className="inline-flex items-center h-11 px-4 rounded-xl bg-gradient-to-b from-blue-600 to-blue-700 text-white font-medium shadow-sm hover:shadow-md hover:brightness-110 active:brightness-95 transition"
            >
              Get my quote
            </a>
          </div>
        </div>
      </header>

      <section
        className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4"
        id="highlights"
      >
        <div className="card p-6 bg-white">
          <h3 className="text-xl font-semibold">Clean & Contained</h3>
          <p className="text-gray-600 mt-2">
            Room sealing, floor/wall protection, HEPA sanding.
          </p>
        </div>
        <div className="card p-6 bg-white">
          <h3 className="text-xl font-semibold">Level 5 Finish</h3>
          <p className="text-gray-600 mt-2">
            Raking-light inspection so joints don’t telegraph.
          </p>
        </div>
        <div className="card p-6 bg-white">
          <h3 className="text-xl font-semibold">Easy Coordination</h3>
          <p className="text-gray-600 mt-2">
            We align with your family schedule and trades.
          </p>
        </div>
      </section>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Meadowvale Village popcorn ceiling removal — project ${
              i + 1
            }`}
            className="w-full h-56 object-cover rounded-2xl border shadow"
            data-lightbox="true"
          />
        ))}
      </div>

      <section className="prose-custom max-w-none mt-10" id="details">
        <h2>Local Details for Meadowvale Village</h2>
        <p>
          We frequently handle main-floor living/dining, kitchens, and
          two-storey foyers here. Painted stipple can be brittle—our test patch
          dictates whether we scrape or encapsulate before the skim. The goal is
          a durable, flat substrate that paints perfectly.
        </p>
        <h3>Popular searches we align with</h3>
        <p className="text-gray-700">
          popcorn ceiling removal Mississauga • remove popcorn ceiling •
          stipple/stucco ceiling removal • ceiling smoothing • skim coat ceiling
          • dustless popcorn removal near me • popcorn ceiling removal
          cost/price per square foot (condition dependent).
        </p>
      </section>

      <section className="mt-10 card p-6 bg-white flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold">
            Ready for smooth ceilings in Meadowvale Village?
          </h3>
          <p className="text-gray-600">
            Fast photo estimate. Clear plan and schedule.
          </p>
        </div>
        <div className="flex gap-3">
          <a className="btn-cta" href={phoneHref}>
            📞 (647) 923-6784
          </a>
          <a className="btn-cta" href="/quote/">
            Get my quote
          </a>
        </div>
      </section>

      <nav className="mt-8 flex flex-wrap gap-3 text-sm">
        <Link
          href="/service-areas/popcorn-ceiling-removal/mississauga/"
          className="underline"
        >
          ← Back to Mississauga Popcorn page
        </Link>
        <Link
          href="/service-areas/popcorn-ceiling-removal/"
          className="underline"
        >
          Browse all Popcorn service areas →
        </Link>
        <Link href="/services/popcorn-ceiling-removal/" className="underline">
          Main Popcorn service page →
        </Link>
      </nav>

      <div className=" ">
        <div className="bg-white/95 backdrop-blur border shadow-xl rounded-2xl p-3 flex items-center justify-between gap-3">
          <a href={phoneHref} className="btn-cta flex-1 text-center">
            📞 Call (647) 923-6784
          </a>
          <a href="/quote/" className="btn-cta flex-1 text-center">
            Get my quote
          </a>
        </div>
      </div>
    </div>
  );
}
