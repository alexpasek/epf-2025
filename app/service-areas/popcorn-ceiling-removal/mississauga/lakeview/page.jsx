// app/service-areas/popcorn-ceiling-removal/mississauga/lakeview/page.jsx
import Link from "next/link";
import { CONTACT } from "@/app/config";
import { cities } from "@/data/cities";
import LocalSignals from "@/components/LocalSignals";

export const revalidate = 86400;

export const metadata = {
  title:
    "Popcorn Ceiling Removal — Lakeview, Mississauga | Level 5 Residential (Lakeshore Rd E)",
  description:
    "Lakeview popcorn/stucco ceiling removal near Lakeshore Rd E, Cawthra and Dixie. Dust-controlled, Level 5 skim, stain-block primer. Pricing guidance, asbestos testing note, pot-light/paint sequence.",
  keywords: [
    "popcorn ceiling removal Mississauga",
    "remove popcorn ceiling Mississauga",
    "stucco ceiling removal Mississauga",
    "stipple ceiling removal Mississauga",
    "ceiling texture removal Mississauga",
    "ceiling smoothing Mississauga",
    "ceiling flattening Mississauga",
    "skim coat ceiling Mississauga",
    "ceiling resurfacing Mississauga",
    "popcorn ceiling removal cost Mississauga",
    "popcorn ceiling removal price per square foot Mississauga",
    "popcorn ceiling contractors Mississauga",
    "dustless popcorn ceiling removal Mississauga",
    "popcorn ceiling removal near me Mississauga",
    "asbestos testing popcorn ceiling Mississauga",
    "pot light installation after popcorn removal Mississauga",
    "popcorn ceiling painting after removal Mississauga",
  ],
  alternates: {
    canonical: "/service-areas/popcorn-ceiling-removal/mississauga/lakeview/",
  },
  openGraph: {
    title: "Popcorn Ceiling Removal — Lakeview, Mississauga",
    description:
      "Residential popcorn removal with Level 5 skim along Lakeshore in Lakeview.",
    url: "/service-areas/popcorn-ceiling-removal/mississauga/lakeview/",
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
        areaServed: "Lakeview, Mississauga",
        url: "/service-areas/popcorn-ceiling-removal/mississauga/lakeview/",
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
            name: "Lakeview",
            item: "/service-areas/popcorn-ceiling-removal/mississauga/lakeview/",
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Do you work near the Lakeview Village redevelopment?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes—Lakeview/Lakeshore Rd E area is in our daily route. We coordinate protection and access.",
            },
          },
          {
            "@type": "Question",
            name: "Older bungalow—should I test for asbestos?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "If built before ~1990, texture should be lab-tested before any disturbance. We can refer third-party testing and wait for clearance.",
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
  let miss = null;
  for (let i = 0; i < cities.length; i++)
    if (cities[i].slug === "mississauga") miss = cities[i];
  const imgs = Array.from(
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
              Popcorn Ceiling Removal — Lakeview, Mississauga
            </h1>
            <p className="mt-3 text-gray-700">
              Along <strong>Lakeshore Rd E, Cawthra Rd, Dixie Rd</strong> and
              the Lakeview Village area, older ceilings and new lighting
              upgrades meet. We remove or encapsulate texture, then deliver a{" "}
              <strong>Level 5 skim</strong> for a flat, bright read. Dust is
              contained with sealed rooms, masked vents and HEPA vacuum sanding.
            </p>
          </div>
          <div className="flex gap-3 md:shrink-0">
            <a
              href={phoneHref}
              className="inline-flex items-center h-11 px-4 rounded-xl bg-gradient-to-b from-blue-600 to-blue-700 text-white font-medium shadow-sm hover:shadow-md transition"
            >
              📞 (647) 923-6784
            </a>
            <a
              href="/quote/"
              className="inline-flex items-center h-11 px-4 rounded-xl bg-gradient-to-b from-blue-600 to-blue-700 text-white font-medium shadow-sm hover:shadow-md transition"
            >
              Get my quote
            </a>
          </div>
        </div>
      </header>

      <section
        id="highlights"
        className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        <div className="card p-6 bg-white">
          <h3 className="text-xl font-semibold">Level 5 Smooth</h3>
          <p className="text-gray-600 mt-2">
            Feathered full-field skim; raking-light checks; uniform reflectance.
          </p>
        </div>
        <div className="card p-6 bg-white">
          <h3 className="text-xl font-semibold">Clean & Contained</h3>
          <p className="text-gray-600 mt-2">
            Sealed rooms, vent masking, HEPA vacuum-assist sanding.
          </p>
        </div>
        <div className="card p-6 bg-white">
          <h3 className="text-xl font-semibold">Straightforward Handover</h3>
          <p className="text-gray-600 mt-2">
            Stain-block primer; paint-ready finish; insured + warranty.
          </p>
        </div>
      </section>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {imgs.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Popcorn ceiling removal in Lakeview — project ${i + 1}`}
            className="w-full h-56 object-cover rounded-2xl border shadow"
          />
        ))}
      </div>

      <section id="details" className="prose max-w-none mt-10">
        <h2>Local Details for Lakeview</h2>
        <p>
          Bungalows near <strong>Marie Curtis Park</strong> and Lakeshore often
          have multiple paint layers on texture. We test first; where scraping
          risks the substrate, we encapsulate safely and move to a full Level 5
          skim. Pot-light rings and old repairs are blended so they disappear
          after primer. Primer system blocks old nicotine or moisture stains.
        </p>
      </section>

      <section id="costs" className="mt-10 card p-6 bg-white">
        <h2 className="text-2xl font-semibold">Costs & High-Intent</h2>
        <ul className="list-disc pl-5 text-gray-700 space-y-2">
          <li>
            <strong>$6–$9/sq ft</strong> typical for removal/encapsulation +
            Level 5 skim + primer (final after inspection).
          </li>
          <li>
            <strong>Near me:</strong> Lakeview/Lakeshore corridor covered daily.
          </li>
          <li>
            <strong>Asbestos testing:</strong> Pre-1990 textures should be
            lab-tested before disturbance (third-party).
          </li>
          <li>
            <strong>Pot lights & paint:</strong> We coordinate sequence;
            ceilings are paint-ready at handoff.
          </li>
        </ul>
      </section>

      <section id="services" className="mt-10 card p-6 bg-white">
        <h2 className="text-2xl font-semibold">Services</h2>
        <p className="text-gray-700">
          Popcorn / stucco / stipple removal, ceiling texture removal/scraping,
          ceiling smoothing/flattening, skim coat ceiling, ceiling resurfacing.
        </p>
      </section>

      <section id="signals" className="mt-10 card p-6 bg-white">
        <h2 className="text-2xl font-semibold">Landmarks & Micro-Areas</h2>
        <p className="text-gray-700">
          Lakeshore Rd E, Cawthra Rd, Dixie Rd, Ogden Ave, Haig Blvd, Lakeview
          Village, Marie Curtis Park.
        </p>
      </section>

      <section id="cases" className="mt-10">
        <h2 className="text-2xl font-semibold">Recent Projects</h2>
        <div className="mt-4 grid md:grid-cols-3 gap-4">
          {[
            {
              title: "Bungalow Near Ogden",
              near: "Ogden Ave & Lakeshore",
              scope: "Encapsulation + Level 5 skim; primer",
              duration: "3 days",
              outcome: "Flat read in morning light.",
            },
            {
              title: "Kitchen/Living Refresh",
              near: "Dixie Rd corridor",
              scope: "Scrape + skim; rings feathered; primer",
              duration: "2.5 days",
              outcome: "Even reflectance across open plan.",
            },
            {
              title: "Stairwell & Entry",
              near: "Cawthra Rd area",
              scope: "Safe staging; full skim; primer",
              duration: "1.5 days",
              outcome: "Crisp edges; bright, clean finish.",
            },
          ].map((cs, i) => (
            <div key={i} className="card p-5 bg-white">
              <div className="font-semibold">{cs.title}</div>
              <div className="text-sm text-gray-600">{cs.near}</div>
              <p className="mt-2 text-gray-700">
                <strong>Scope:</strong> {cs.scope}
              </p>
              <p className="text-gray-700">
                <strong>Duration:</strong> {cs.duration}
              </p>
              <p className="text-gray-700">
                <strong>Result:</strong> {cs.outcome}
              </p>
            </div>
          ))}
        </div>
      </section>

      {miss && miss.signals ? <LocalSignals signals={miss.signals} /> : null}

      <section className="mt-10 card p-6 bg-white flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold">
            Ready for Level 5 smooth ceilings in Lakeview?
          </h3>
          <p className="text-gray-600">
            Fast photo estimate. Clear plan and schedule.
          </p>
        </div>
        <div className="flex gap-3">
          <a
            className="inline-flex items-center h-11 px-4 rounded-xl bg-gradient-to-b from-blue-600 to-blue-700 text-white font-medium shadow-sm hover:shadow-md transition"
            href={phoneHref}
          >
            📞 (647) 923-6784
          </a>
          <a
            className="inline-flex items-center h-11 px-4 rounded-xl bg-gradient-to-b from-blue-600 to-blue-700 text-white font-medium shadow-sm hover:shadow-md transition"
            href="/quote/"
          >
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
    </div>
  );
}
