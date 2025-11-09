// app/service-areas/popcorn-ceiling-removal/mississauga/meadowvale/page.jsx
import Link from "next/link";
import { CONTACT } from "@/app/config";
import { cities } from "@/data/cities";
import LocalSignals from "@/components/LocalSignals";

export const revalidate = 86400;

export const metadata = {
  title:
    "Popcorn Ceiling Removal — Meadowvale, Mississauga | Level 5 Residential",
  description:
    "Meadowvale popcorn (stucco/stipple) ceiling removal near Lake Aquitaine and Meadowvale Town Centre. Dust-controlled, Level 5 skim, stain-block primer, paint-ready finish. Costs, price per sq ft and FAQs.",
  keywords: [
    "popcorn ceiling removal Mississauga",
    "remove popcorn ceiling Mississauga",
    "popcorn ceiling scraping Mississauga",
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
    canonical: "/service-areas/popcorn-ceiling-removal/mississauga/meadowvale/",
  },
  openGraph: {
    title: "Popcorn Ceiling Removal — Meadowvale, Mississauga",
    description:
      "Residential popcorn removal with Level 5 skim and dust control in Meadowvale.",
    url: "/service-areas/popcorn-ceiling-removal/mississauga/meadowvale/",
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
        areaServed: "Meadowvale, Mississauga",
        url: "/service-areas/popcorn-ceiling-removal/mississauga/meadowvale/",
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
            name: "Meadowvale",
            item: "/service-areas/popcorn-ceiling-removal/mississauga/meadowvale/",
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What’s the price per square foot?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Most homes land around $6–$9/sq ft including Level 5 skim + primer. Final quote after photos/inspection.",
            },
          },
          {
            "@type": "Question",
            name: "Do you coordinate with pot-light installation?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes—sequence with your electrician; we blend rings and patches during the skim stage.",
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
              Popcorn Ceiling Removal — Meadowvale, Mississauga
            </h1>
            <p className="mt-3 text-gray-700">
              In and around{" "}
              <strong>Lake Aquitaine Park, Glen Erin Dr and Derry Rd W</strong>,
              we remove or encapsulate popcorn/stucco, then{" "}
              <strong>Level 5 skim</strong> for a perfectly flat read. Rooms are
              sealed, vents masked and sanding is HEPA-assisted.
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
          <h3 className="text-xl font-semibold">Level 5 Smooth</h3>
          <p className="text-gray-600 mt-2">
            Full-field skim + raking-light checks; uniform reflectance.
          </p>
        </div>
        <div className="card p-6 bg-white">
          <h3 className="text-xl font-semibold">Dust-Controlled</h3>
          <p className="text-gray-600 mt-2">
            Sealed rooms, masked vents, HEPA vacuum sanding.
          </p>
        </div>
        <div className="card p-6 bg-white">
          <h3 className="text-xl font-semibold">Predictable</h3>
          <p className="text-gray-600 mt-2">
            Clear scope, daily tidy, insured + 3-year warranty.
          </p>
        </div>
      </section>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {imgs.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Popcorn ceiling removal in Meadowvale — project ${i + 1}`}
            className="w-full h-56 object-cover rounded-2xl border shadow"
          />
        ))}
      </div>

      <section id="details" className="prose max-w-none mt-10">
        <h2>Local Details for Meadowvale</h2>
        <p>
          Homes by <strong>Lake Aquitaine</strong>, Aquitaine Ave, Montevideo Rd
          and Battleford Rd often mix original texture and newer repairs. We
          test a small area: scrape when safe; otherwise encapsulate and Level 5
          skim. We feather pot-light rings and past patches so they disappear
          after primer. Stain-block primer prevents old marks from returning.
        </p>
      </section>

      <section id="costs" className="mt-10 card p-6 bg-white">
        <h2 className="text-2xl font-semibold">Costs & High-Intent</h2>
        <ul className="list-disc pl-5 text-gray-700 space-y-2">
          <li>
            <strong>~$6–$9/sq ft</strong> typical for removal/encapsulation +
            Level 5 + primer (final after inspection/photos).
          </li>
          <li>
            <strong>Near me:</strong> Meadowvale and surrounding Mississauga
            neighborhoods covered daily.
          </li>
          <li>
            <strong>Asbestos:</strong> Pre-1990? Test texture with a third-party
            lab before disturbance.
          </li>
          <li>
            <strong>Condo:</strong> We coordinate rules, protection and
            schedules; ask for condo workflow if needed.
          </li>
        </ul>
      </section>

      <section id="services" className="mt-10 card p-6 bg-white">
        <h2 className="text-2xl font-semibold">Also Searched As</h2>
        <p className="text-gray-700">
          Popcorn/stucco/stipple <strong>ceiling removal</strong>,{" "}
          <strong>ceiling texture removal</strong>,{" "}
          <strong>ceiling scraping</strong>,
          <strong> ceiling smoothing/flattening</strong>,{" "}
          <strong>skim coat ceiling</strong>,{" "}
          <strong>ceiling resurfacing</strong>.
        </p>
      </section>

      <section id="signals" className="mt-10 card p-6 bg-white">
        <h2 className="text-2xl font-semibold">Landmarks & Micro-Areas</h2>
        <p className="text-gray-700">
          Lake Aquitaine Park, Lake Wabukayne, Meadowvale Town Centre, Glen Erin
          Dr, Aquitaine Ave, Tours Rd, Millcreek Dr.
        </p>
      </section>

      <section id="cases" className="mt-10">
        <h2 className="text-2xl font-semibold">Recent Projects</h2>
        <div className="mt-4 grid md:grid-cols-3 gap-4">
          {[
            {
              title: "Two-Storey by Lake Aquitaine",
              near: "Aquitaine Ave & Glen Erin",
              scope: "Encapsulation + Level 5; primer",
              duration: "3 days",
              outcome: "Flat down long hallway sightlines.",
            },
            {
              title: "Main Floor Open Plan",
              near: "Battleford Rd area",
              scope: "Scrape + skim; rings feathered; primer",
              duration: "2.5 days",
              outcome: "Even reflectance kitchen-to-living.",
            },
            {
              title: "Stairwell/Landing",
              near: "Derry Rd W",
              scope: "Safe staging; full skim; primer",
              duration: "1.5 days",
              outcome: "Crisp edges; bright finish.",
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
            Ready for a Level 5 smooth ceiling in Meadowvale?
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
