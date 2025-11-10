import Link from "next/link";
import { CONTACT } from "@/app/config";
import { ServiceCopy } from "@/components/LocalSEOCopy";
import { cities } from "@/data/cities";

export const revalidate = 86400;

export const metadata = {
  title: "Popcorn Ceiling Removal — Wallpaper Removal Pro",
  description:
    "GTA popcorn ceiling removal to Level 5 smooth. Dust-contained, skim-coat, prime & paint. Fast quotes, clear scope, and a written warranty.",
  alternates: { canonical: "/services/popcorn" },
  openGraph: {
    title: "Popcorn Ceiling Removal — Level 5 Smooth Finish (GTA)",
    description:
      "Dust-controlled popcorn removal with Level 5 skim-coat, prime & paint. Clean, tidy, guaranteed.",
    url: "/services/popcorn",
    type: "article",
  },
  robots: { index: true, follow: true },
};

function JsonLd() {
  const areaServed = cities.map((c) => c.name);
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: "Popcorn Ceiling Removal",
        serviceType: [
          "Popcorn Ceiling Removal",
          "Ceiling Skim Coat Level 5",
          "Interior Painting",
        ],
        areaServed,
        offers: {
          "@type": "Offer",
          priceCurrency: "CAD",
          availability: "https://schema.org/InStock",
        },
        potentialAction: { "@type": "RequestQuoteAction", target: "/quote/" },
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Is the popcorn removal dust-controlled?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. We seal rooms, protect floors and vents, use vacuum-assist sanding, and finish with a full clean-up.",
            },
          },
          {
            "@type": "Question",
            name: "Do you deliver a Level 5 smooth finish?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We skim-coat, feather, and critical-light check before priming, then re-touch as needed to achieve Level 5 smooth.",
            },
          },
          {
            "@type": "Question",
            name: "What about painted or multiple-layer textures?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We choose safe removal or encapsulation based on site conditions, then skim-coat to achieve a uniform surface.",
            },
          },
          {
            "@type": "Question",
            name: "How fast can I get an estimate?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Same-day photo estimates by text or email, with on-site confirmation for final scope and schedule.",
            },
          },
        ],
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "/" },
          {
            "@type": "ListItem",
            position: 2,
            name: "Services",
            item: "/services",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Popcorn Ceiling Removal",
            item: "/services/popcorn",
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

export default function Page() {
  const images = Array.from(
    { length: 6 },
    (_, i) => `/services/popcorn-ceiling-removal/${i + 1}.webp`
  );

  return (
    <div className="container-x py-10">
      <JsonLd />

      {/* HERO */}
      <header className="max-w-5xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
              Popcorn Ceiling Removal
            </h1>
            <p className="mt-3 text-gray-700">
              Dust-contained scraping or encapsulation, repairs,{" "}
              <strong>Level 5 skim-coat</strong>, prime and paint for bright,
              smooth ceilings.
            </p>
          </div>
          <div className="flex gap-3">
            <a
              className="btn-cta"
              href={CONTACT.phoneHref}
              aria-label="Call for a quote"
            >
              📞 (647) 923-6784
            </a>
            <a className="btn-cta" href="/quote/" aria-label="Open quote form">
              Get my quote
            </a>
          </div>
        </div>

        {/* City pills (internal linking for local SEO) */}
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {cities.map((c) => (
            <Link key={c.slug} href={`/${c.slug}/`} className="pill">
              {c.name}
            </Link>
          ))}
        </div>
        {/* Removed the in-page text menu */}
      </header>

      {/* WHY CHOOSE US */}
      <section
        id="proof"
        className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        <div className="card p-6 bg-white">
          <h3 className="text-xl font-semibold">Dust-Controlled</h3>
          <p className="text-gray-600 mt-2">
            Room sealing, floor & vent protection, vacuum-assist sanding, tidy
            clean-up.
          </p>
        </div>
        <div className="card p-6 bg-white">
          <h3 className="text-xl font-semibold">Level 5 Finish</h3>
          <p className="text-gray-600 mt-2">
            Skim-coat & feather, critical-light check, prime & re-touch for a
            flawless result.
          </p>
        </div>
        <div className="card p-6 bg-white">
          <h3 className="text-xl font-semibold">Guaranteed & Insured</h3>
          <p className="text-gray-600 mt-2">
            Written scope, reliable schedule, 3-year workmanship warranty, WSIB
            & liability covered.
          </p>
        </div>
      </section>

      {/* GALLERY — unchanged */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((s, i) => (
          <img
            key={i}
            src={s}
            alt={`Popcorn Ceiling Removal project ${i + 1}`}
            className="w-full h-56 object-cover rounded-2xl border shadow"
            data-lightbox="true"
          />
        ))}
      </div>

      {/* PROCESS */}
      <section
        id="process"
        className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        <div className="card p-6 bg-white">
          <h2 className="text-2xl font-semibold">Our Process</h2>
          <ul className="mt-3 space-y-2 text-gray-700 list-disc pl-5">
            <li>Site protection: plastic containment, floor & vent masking</li>
            <li>Removal or safe encapsulation based on ceiling condition</li>
            <li>Repairs, Level 5 skim-coat & vacuum-assist sanding</li>
            <li>Critical-light inspection, prime, and paint-ready finish</li>
          </ul>
        </div>
        <div className="card p-6 bg-white">
          <h2 className="text-2xl font-semibold">Common Situations We Fix</h2>
          <ul className="mt-3 space-y-2 text-gray-700 list-disc pl-5">
            <li>Heavily painted popcorn, patched ceilings, water stains</li>
            <li>Pot-light/fixture holes and drywall seams telegraphing</li>
            <li>Uneven texture, corner cracks, tape lifts, ceiling waves</li>
          </ul>
        </div>
      </section>

      {/* LOCAL KEYWORDS / COVERAGE + SINGLE BOTTOM BUTTON */}
      <section className="mt-10 card p-6 bg-white">
        <h2 className="text-2xl font-semibold">GTA Coverage</h2>
        <p className="mt-2 text-gray-700">
          Toronto (Annex, Leaside, The Beaches, High Park, North York,
          Etobicoke, Scarborough), Mississauga (Port Credit, Clarkson, Erin
          Mills), Oakville, Burlington, Milton, Hamilton, Stoney Creek,
          Ancaster, Grimsby, Vaughan, Richmond Hill.
        </p>
        <div className="mt-4">
          <Link
            href="/service-areas/popcorn-ceiling-removal/"
            className="btn-cta"
          >
            Browse all service areas →
          </Link>
        </div>
      </section>

      {/* CONVERSION CTA */}
      <section className="mt-10 card p-6 bg-white flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold">
            Ready for a Level 5 smooth ceiling?
          </h3>
          <p className="text-gray-600">
            Fast photo estimate. Clear plan and schedule.
          </p>
        </div>
        <div className="flex gap-3">
          <a className="btn-cta" href={CONTACT.phoneHref}>
            📞 (647) 923-6784
          </a>
          <a className="btn-cta" href="/quote/">
            Get my quote
          </a>
        </div>
      </section>

      {/* LONG-FORM LOCAL SEO COPY */}
      <ServiceCopy service="Popcorn Ceiling Removal" />

      {/* FAQ */}
      <section id="faq" className="mt-10">
        <h2 className="text-2xl font-semibold">FAQ</h2>
        <details className="card p-6 bg-white mt-4">
          <summary className="font-medium">
            Is the popcorn removal dust-controlled?
          </summary>
          <p className="mt-2 text-gray-700">
            Yes—containment, vent masking, vacuum-assist sanding, and a full
            clean-up.
          </p>
        </details>
        <details className="card p-6 bg-white mt-4">
          <summary className="font-medium">
            Do you deliver Level 5 smooth?
          </summary>
          <p className="mt-2 text-gray-700">
            We skim-coat and check under critical light before priming and
            re-touching.
          </p>
        </details>
        <details className="card p-6 bg-white mt-4">
          <summary className="font-medium">
            Painted/multi-layer texture—can you handle it?
          </summary>
          <p className="mt-2 text-gray-700">
            We choose removal or encapsulation based on condition, then
            skim-coat for a uniform surface.
          </p>
        </details>
        <details className="card p-6 bg-white mt-4">
          <summary className="font-medium">How fast is the estimate?</summary>
          <p className="mt-2 text-gray-700">
            Same-day photo estimate; on-site visit to lock the final scope and
            schedule.
          </p>
        </details>
      </section>

      {/* STICKY MOBILE CTA */}
      <div className=" ">
        <div className="bg-white/95 backdrop-blur border shadow-xl rounded-2xl p-3 flex items-center justify-between gap-3">
          <a href={CONTACT.phoneHref} className="btn-cta flex-1 text-center">
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
