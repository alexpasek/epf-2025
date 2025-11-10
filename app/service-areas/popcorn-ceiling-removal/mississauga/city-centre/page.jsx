import Link from "next/link";
import { CONTACT } from "@/app/config";
export const revalidate = 86400;

export const metadata = {
  title:
    "Popcorn Ceiling Removal — City Centre, Mississauga | Square One Area Homes",
  description:
    "City Centre popcorn ceiling removal around Square One: dust control, Level 5 skim, prime & paint-ready. Condo/townhome experience, tidy daily wrap-ups.",
  alternates: {
    canonical:
      "/service-areas/popcorn-ceiling-removal/mississauga/city-centre/",
  },
  openGraph: {
    title: "Popcorn Ceiling Removal — City Centre, Mississauga",
    description:
      "Residential popcorn/stipple removal in City Centre with Level 5 finish and clean workflow.",
    url: "/service-areas/popcorn-ceiling-removal/mississauga/city-centre/",
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
        areaServed: "City Centre, Mississauga",
        url: "/service-areas/popcorn-ceiling-removal/mississauga/city-centre/",
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
            name: "City Centre",
            item: "/service-areas/popcorn-ceiling-removal/mississauga/city-centre/",
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Do you book elevators for condo jobs?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. We coordinate elevator windows and protect common areas as needed.",
            },
          },
          {
            "@type": "Question",
            name: "How do you keep dust down in small suites?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Containment, vent masking, and HEPA vacuum-assist sanding keep dust under control.",
            },
          },
          {
            "@type": "Question",
            name: "Can you work nights or weekends?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We plan around building rules and your schedule when feasible.",
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
              Popcorn Ceiling Removal — City Centre, Mississauga
            </h1>
            <p className="mt-3 text-gray-700">
              Around Square One, suites and townhomes benefit from a{" "}
              <strong>Level 5 skim</strong> to eliminate joint shadows and get
              that bright, even look. We protect floors, seal rooms and keep a
              calm, predictable schedule.
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

        <nav className="mt-4 flex flex-wrap items-center gap-3 text-sm">
          <a href="#highlights" className="hover:underline underline-offset-2">
            Why us
          </a>
          <a href="#details" className="hover:underline underline-offset-2">
            Local details
          </a>
          <a href="#faq" className="hover:underline underline-offset-2">
            FAQs
          </a>
        </nav>
      </header>

      <section
        id="highlights"
        className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        <div className="card p-6 bg-white">
          <h3 className="text-xl font-semibold">Clean & Contained</h3>
          <p className="text-gray-600 mt-2">
            Room sealing, vent masking, HEPA sanding and tidy daily wrap-ups.
          </p>
        </div>
        <div className="card p-6 bg-white">
          <h3 className="text-xl font-semibold">Level 5 Smooth</h3>
          <p className="text-gray-600 mt-2">
            Full-field skim with raking-light checks; stain-block primer for
            even tone.
          </p>
        </div>
        <div className="card p-6 bg-white">
          <h3 className="text-xl font-semibold">Schedule Respect</h3>
          <p className="text-gray-600 mt-2">
            Start/finish windows that work for you and your building rules.
          </p>
        </div>
      </section>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`City Centre popcorn ceiling removal — project ${i + 1}`}
            className="w-full h-56 object-cover rounded-2xl border shadow"
            data-lightbox="true"
          />
        ))}
      </div>

      <section id="details" className="prose-custom max-w-none mt-10">
        <h2>Local Details for City Centre</h2>
        <p>
          City Centre mixes newer townhomes with high-rise suites. Painted
          stipple is common; we test, then either controlled scrape or
          encapsulate before a precise skim so ceilings read flat in both
          natural and pot-light conditions. Tight spaces stay livable thanks to
          careful staging and cleanup.
        </p>
        <p>
          If you’re painting after, we leave a uniform, primered finish for
          excellent top-coat coverage. Need pot lights? We coordinate with your
          electrician and feather around rings so nothing ghosts.
        </p>

        <h3>Common searches we serve in City Centre</h3>
        <p className="text-gray-700">
          popcorn ceiling removal Mississauga • remove popcorn ceiling •
          stucco/stipple ceiling removal • ceiling smoothing and flattening •
          skim coat ceiling • dustless popcorn removal near Square One • popcorn
          ceiling removal cost/price per square foot (condition/access
          dependent).
        </p>
      </section>

      <section id="faq" className="mt-10">
        <h2 className="text-2xl font-semibold">FAQ — City Centre</h2>
        {[
          {
            q: "Do you work inside occupied suites?",
            a: "Yes. We stage room-by-room, keep walkways clean and maintain ventilation.",
          },
          {
            q: "What about smell and noise?",
            a: "Low-VOC materials and quiet tools where possible. We align with building quiet hours.",
          },
          {
            q: "How do I get a quote?",
            a: "Send photos and rough square footage; we provide a fast estimate and confirm on site.",
          },
        ].map((f, i) => (
          <details key={i} className="card p-6 bg-white mt-4">
            <summary className="font-medium">{f.q}</summary>
            <p className="mt-2 text-gray-700">{f.a}</p>
          </details>
        ))}
      </section>

      <section className="mt-10 card p-6 bg-white flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold">
            Smooth ceilings for your City Centre home?
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
