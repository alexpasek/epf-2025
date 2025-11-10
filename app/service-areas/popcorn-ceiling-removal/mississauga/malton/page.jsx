import Link from "next/link";
import { CONTACT } from "@/app/config";
export const revalidate = 86400;

export const metadata = {
  title: "Popcorn Ceiling Removal — Malton, Mississauga | Older Homes Friendly",
  description:
    "Malton bungalows and splits: dust-controlled popcorn removal, Level 5 skim, prime & paint-ready. Optional third-party asbestos sampling referral for older ceilings.",
  alternates: {
    canonical: "/service-areas/popcorn-ceiling-removal/mississauga/malton/",
  },
  openGraph: {
    title: "Popcorn Ceiling Removal — Malton, Mississauga",
    description:
      "Residential popcorn/stipple removal in Malton with careful prep and smooth Level 5 results.",
    url: "/service-areas/popcorn-ceiling-removal/mississauga/malton/",
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
        areaServed: "Malton, Mississauga",
        url: "/service-areas/popcorn-ceiling-removal/mississauga/malton/",
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
            name: "Malton",
            item: "/service-areas/popcorn-ceiling-removal/mississauga/malton/",
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What if the ceiling might contain asbestos?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "For older homes, if you want certainty, we can refer independent labs for quick sampling before work.",
            },
          },
          {
            "@type": "Question",
            name: "Can you handle multiple rooms in sequence?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. We stage room-by-room to keep the home functional and clean.",
            },
          },
          {
            "@type": "Question",
            name: "Do you paint ceilings too?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We leave a primered, paint-ready surface and can handle top-coat on request.",
            },
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
              Popcorn Ceiling Removal — Malton, Mississauga
            </h1>
            <p className="mt-3 text-gray-700">
              Many Malton homes date to the 60s–70s with textured ceilings later
              painted over. We protect thoroughly, contain dust, test a small
              area, then deliver a <strong>Level 5</strong>
              skim and primer so paint lays down evenly.
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
          <h3 className="text-xl font-semibold">Older Homes Expertise</h3>
          <p className="text-gray-600 mt-2">
            Careful testing, containment and finishing for bungalows and splits.
          </p>
        </div>
        <div className="card p-6 bg-white">
          <h3 className="text-xl font-semibold">Level 5 Smooth</h3>
          <p className="text-gray-600 mt-2">
            No joint telegraphing; uniform, primered surface.
          </p>
        </div>
        <div className="card p-6 bg-white">
          <h3 className="text-xl font-semibold">Dust Control</h3>
          <p className="text-gray-600 mt-2">
            HEPA vacuum-assist sanding and tidy daily wrap-ups.
          </p>
        </div>
      </section>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Malton popcorn ceiling removal — project ${i + 1}`}
            className="w-full h-56 object-cover rounded-2xl border shadow"
            data-lightbox="true"
          />
        ))}
      </div>

      <section className="prose-custom max-w-none mt-10" id="details">
        <h2>Local Details for Malton</h2>
        <p>
          For older textures, a small test patch informs the safest path:
          controlled scrape or encapsulation, then a disciplined skim to Level
          5. Stairwells and hallways get full protection; we maintain airflow
          and low-VOC materials for comfort.
        </p>
        <h3>Searches we commonly match here</h3>
        <p className="text-gray-700">
          popcorn ceiling removal Mississauga • remove popcorn ceiling •
          stucco/stipple ceiling removal • ceiling smoothing/flattening • skim
          coat ceiling • dustless popcorn removal • asbestos testing referral •
          “near me” • cost/price per square foot varies by condition.
        </p>
      </section>

      <section className="mt-10 card p-6 bg-white flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold">
            Want your Malton ceilings perfectly smooth?
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
