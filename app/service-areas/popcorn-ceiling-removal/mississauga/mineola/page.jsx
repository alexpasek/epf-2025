// app/service-areas/popcorn-ceiling-removal/mississauga/mineola/page.jsx
import Link from "next/link";
import { CONTACT } from "@/app/config";
import { cities } from "@/data/cities";
import LocalSignals from "@/components/LocalSignals";

export const revalidate = 86400;

export const metadata = {
  title:
    "Popcorn Ceiling Removal — Mineola, Mississauga | Premium Level 5 Finish",
  description:
    "Mineola popcorn/stucco ceiling removal around Mineola Rd E/W and Hurontario. Premium Level 5 skim, dust-controlled workflow, stain-block primer, paint-ready finish. Pricing and local FAQs.",
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
    canonical: "/service-areas/popcorn-ceiling-removal/mississauga/mineola/",
  },
  openGraph: {
    title: "Popcorn Ceiling Removal — Mineola, Mississauga",
    description:
      "High-end residential ceiling smoothing and Level 5 skim in Mineola.",
    url: "/service-areas/popcorn-ceiling-removal/mississauga/mineola/",
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
        areaServed: "Mineola, Mississauga",
        url: "/service-areas/popcorn-ceiling-removal/mississauga/mineola/",
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
            name: "Mineola",
            item: "/service-areas/popcorn-ceiling-removal/mississauga/mineola/",
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Can you achieve a gallery-flat ceiling in critical light?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. We skim full fields and verify in raking light from windows and LEDs, then prime with a stain-block system for a bright, even read.",
            },
          },
          {
            "@type": "Question",
            name: "Do you coordinate with painters/electricians?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We can coordinate sequence with your trades, feathering rings and patches so they vanish after primer; we can also quote finish coats.",
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

const phoneHref = (CONTACT && CONTACT.phoneHref) || "tel:+16478129135";

export default function Page() {
  let miss = null;
  for (let i = 0; i < cities.length; i++)
    if (cities[i].slug === "mississauga") miss = cities[i];
  const imgs = Array.from(
    { length: 6 },
    (_, i) => `/services/popcorn/${i + 1}.webp`
  );

  return (
    <div className="container-x mx-auto px-4 py-10">
      <JsonLd />

      <header className="max-w-5xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
              Popcorn Ceiling Removal — Mineola, Mississauga
            </h1>
            <p className="mt-3 text-gray-700">
              In <strong>Mineola East/West</strong> near{" "}
              <strong>Hurontario St, Mineola Rd and the QEW</strong>, we remove
              or encapsulate texture and deliver a premium{" "}
              <strong>Level 5 skim</strong> for high-end finishes. Expect sealed
              rooms, masked vents, HEPA vacuum sanding and meticulous edge work
              at crown, returns and skylight areas.
            </p>
          </div>
          <div className="flex gap-3 md:shrink-0">
            <a
              href={phoneHref}
              className="inline-flex items-center h-11 px-4 rounded-xl bg-gradient-to-b from-blue-600 to-blue-700 text-white font-medium shadow-sm hover:shadow-md transition"
            >
              📞 (647) 812-9135
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
          <h3 className="text-xl font-semibold">Level 5, Premium</h3>
          <p className="text-gray-600 mt-2">
            Gallery-flat under critical light; uniform reflectance.
          </p>
        </div>
        <div className="card p-6 bg-white">
          <h3 className="text-xl font-semibold">Clean & Protected</h3>
          <p className="text-gray-600 mt-2">
            Room isolation, vent masking, HEPA vacuum sanding.
          </p>
        </div>
        <div className="card p-6 bg-white">
          <h3 className="text-xl font-semibold">Predictable Handover</h3>
          <p className="text-gray-600 mt-2">
            Stain-block primer; paint-ready; insured + warranty.
          </p>
        </div>
      </section>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {imgs.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Popcorn ceiling removal in Mineola — project ${i + 1}`}
            className="w-full h-56 object-cover rounded-2xl border shadow"
          />
        ))}
      </div>

      <section id="details" className="prose max-w-none mt-10">
        <h2>Local Details for Mineola</h2>
        <p>
          Custom homes and renovated originals demand flawless transitions. We
          skim full fields rather than spot-patching, check in raking light and
          feather rings and seams until they disappear after primer. If your
          home predates ~1990, texture should be lab-tested before any
          disturbance; we can refer third-party testing and proceed after
          clearance.
        </p>
      </section>

      <section id="costs" className="mt-10 card p-6 bg-white">
        <h2 className="text-2xl font-semibold">Costs & High-Intent</h2>
        <ul className="list-disc pl-5 text-gray-700 space-y-2">
          <li>
            <strong>~$6–$9/sq ft</strong> typical for removal/encapsulation +
            Level 5 skim + primer (final after inspection/photos).
          </li>
          <li>
            <strong>Near me:</strong> Daily coverage of Mineola East/West and
            Port Credit corridor.
          </li>
          <li>
            <strong>Pot lights & paint:</strong> We coordinate sequence with
            your trades; paint-ready handoff.
          </li>
        </ul>
      </section>

      <section id="services" className="mt-10 card p-6 bg-white">
        <h2 className="text-2xl font-semibold">Services</h2>
        <p className="text-gray-700">
          Popcorn/stucco/stipple removal, ceiling texture removal/scraping,
          ceiling smoothing/flattening, skim coat ceiling, ceiling resurfacing.
        </p>
      </section>

      <section id="signals" className="mt-10 card p-6 bg-white">
        <h2 className="text-2xl font-semibold">Landmarks & Micro-Areas</h2>
        <p className="text-gray-700">
          Mineola Rd E/W, Hurontario St, Kenollie, Glenburnie, Broadmoor; quick
          access to QEW and Port Credit.
        </p>
      </section>

      <section id="cases" className="mt-10">
        <h2 className="text-2xl font-semibold">Recent Projects</h2>
        <div className="mt-4 grid md:grid-cols-3 gap-4">
          {[
            {
              title: "Custom Home — Great Room",
              near: "Mineola West",
              scope: "Full Level 5 skim; stain-block primer",
              duration: "3.5 days",
              outcome: "Uniform reflectance across wide spans.",
            },
            {
              title: "Main Floor + Pot Lights",
              near: "Mineola East",
              scope: "Scrape + skim; rings feathered; primer",
              duration: "3 days",
              outcome: "No seam telegraphing in critical light.",
            },
            {
              title: "Stairwell & Skylight Returns",
              near: "Hurontario corridor",
              scope: "Safe staging; edge work; primer",
              duration: "1.5 days",
              outcome: "Crisp returns; bright flat finish.",
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
            Ready for a Level 5 smooth ceiling in Mineola?
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
            📞 (647) 812-9135
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
        <Link href="/services/popcorn/" className="underline">
          Main Popcorn service page →
        </Link>
      </nav>
    </div>
  );
}
