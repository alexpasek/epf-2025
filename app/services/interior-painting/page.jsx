import Link from "next/link";
import { CONTACT } from "@/app/config";
import { ServiceCopy } from "@/components/LocalSEOCopy";
import { cities } from "@/data/cities";

export const revalidate = 86400;

const localPaintingGuides = [
  {
    city: "Mississauga",
    slug: "mississauga",
    href: "/blog/interior-painting-mississauga-prep-finish-guide/",
    title: "Interior painting in Mississauga",
  },
  {
    city: "Burlington",
    slug: "burlington",
    href: "/blog/interior-painting-burlington-walls-trim-ceilings-guide/",
    title: "Interior painting in Burlington",
  },
  {
    city: "Oakville",
    slug: "oakville",
    href: "/blog/interior-painting-oakville-premium-finish-prep-guide/",
    title: "Interior painting in Oakville",
  },
  {
    city: "Ancaster",
    slug: "ancaster",
    href: "/blog/interior-painting-ancaster-older-home-prep-guide/",
    title: "Interior painting in Ancaster",
  },
];

const localPaintingGuideBySlug = new Map(
  localPaintingGuides.map((guide) => [guide.slug, guide])
);

export const metadata = {
  title: "Interior Painting Services | EPF Pro Services",
  description:
    "GTA interior painting with sharp lines and durable finishes. Walls, trim, and ceilings—dust-controlled prep, Level 5 surfaces, and a clean, guaranteed result.",
  alternates: { canonical: "/services/interior-painting/" },
  openGraph: {
    title: "Interior Painting — Clean Lines & Durable Finishes (GTA)",
    description:
      "Professional interior painting for walls, trim, and ceilings. Careful prep, smooth surfaces, premium coatings, tidy work, and a written warranty.",
    url: "/services/interior-painting/",
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
        name: "Interior Painting",
        serviceType: [
          "Interior Painting",
          "Wall & Ceiling Painting",
          "Trim & Doors Painting",
          "Level 5 Prep & Priming",
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
            name: "How do you keep lines sharp and finishes durable?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We focus on meticulous prep (filling, sanding, caulking), high-adhesion primers, and proven topcoats for the right sheen and durability.",
            },
          },
          {
            "@type": "Question",
            name: "Is prep dust-controlled?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes—containment, floor and vent protection, vacuum-assist sanding, and a full tidy clean-up.",
            },
          },
          {
            "@type": "Question",
            name: "Do you handle ceilings, trim, and doors too?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes—ceilings, walls, baseboards, casings, doors, frames, and feature walls, including Level 5 smoothing when needed.",
            },
          },
          {
            "@type": "Question",
            name: "How fast can I get a quote?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Same-day photo estimate by text/email with on-site confirmation for final scope and schedule.",
            },
          },
        ],
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: { "@id": "https://epfproservices.com/" },
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Services",
            item: { "@id": "https://epfproservices.com/services/" },
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Interior Painting",
            item: { "@id": "https://epfproservices.com/services/interior-painting/" },
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
    (_, i) => `/services/painting/${i + 1}.webp`
  );

  return (
    <div className="container-x py-10">
      <JsonLd />

      {/* HERO */}
      <header className="max-w-5xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
              Interior Painting
            </h1>
            <p className="mt-3 text-gray-700">
              Sharp lines, durable finishes, and modern colours for walls, trim,
              and ceilings. Careful prep, Level 5 smoothing where needed, and a
              clean, guaranteed result. If the walls need more than paint prep,
              review our{" "}
              <Link
                href="/services/drywall-repair/mississauga/"
                className="font-semibold text-blue-600 hover:underline"
              >
                drywall patch and ceiling repair in Mississauga
              </Link>{" "}
              before final coating.
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
        </div>

        {/* City pills (internal links for local SEO) */}
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {cities.map((c) => (
            <Link
              key={c.slug}
              href={
                localPaintingGuideBySlug.get(c.slug)?.href ||
                `/quote/?service=interior-painting&city=${c.slug}`
              }
              className="pill"
            >
              {c.name}
            </Link>
          ))}
        </div>
      </header>

      {/* WHY US */}
      <section className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="card p-6 bg-white">
          <h3 className="text-xl font-semibold">Flawless Lines</h3>
          <p className="text-gray-600 mt-2">
            Crisp cut-ins, consistent coverage, and smooth finishes without lap
            marks or flashing.
          </p>
        </div>
        <div className="card p-6 bg-white">
          <h3 className="text-xl font-semibold">Durable Systems</h3>
          <p className="text-gray-600 mt-2">
            Correct primers and topcoats for high-traffic rooms, kitchens/baths,
            and trim—long-lasting and easy to clean.
          </p>
        </div>
        <div className="card p-6 bg-white">
          <h3 className="text-xl font-semibold">Dust-Controlled Prep</h3>
          <p className="text-gray-600 mt-2">
            Containment, floor & vent protection, vacuum-assist sanding, and a
            tidy handover.
          </p>
        </div>
      </section>

      {/* GALLERY — unchanged */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((s, i) => (
          <img
            key={i}
            src={s}
            alt={`Interior Painting project ${i + 1}`}
            className="w-full h-56 object-cover rounded-2xl border shadow"
            data-lightbox="true"
          />
        ))}
      </div>

      {/* PROCESS */}
      <section className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="card p-6 bg-white">
          <h2 className="text-2xl font-semibold">Our Painting Process</h2>
          <ul className="mt-3 space-y-2 text-gray-700 list-disc pl-5">
            <li>
              Setup & protection: plastic containment, floors & vents masked
            </li>
            <li>
              Surface prep: filling, sanding, caulking, spot-priming; Level 5
              smoothing if needed
            </li>
            <li>
              Coatings: correct primer + topcoats for each surface and sheen
            </li>
            <li>
              Quality check under critical light; tidy clean-up and handover
            </li>
          </ul>
        </div>
        <div className="card p-6 bg-white">
          <h2 className="text-2xl font-semibold">Rooms & Surfaces</h2>
          <ul className="mt-3 space-y-2 text-gray-700 list-disc pl-5">
            <li>Living rooms, bedrooms, kitchens, baths, hallways, stairs</li>
            <li>Ceilings, walls, accent walls, baseboards, casings, doors</li>
            <li>
              Minor drywall repairs, stain blocking, water-stain touch-ups
            </li>
          </ul>
        </div>
      </section>

      {/* LOCAL KEYWORDS / COVERAGE */}
      <section className="mt-10 card p-6 bg-white">
        <h2 className="text-2xl font-semibold">GTA Coverage</h2>
        <p className="mt-2 text-gray-700">
          Toronto (Annex, Leaside, The Beaches, High Park, North York,
          Etobicoke, Scarborough), Mississauga (Port Credit, Clarkson, Erin
          Mills), Oakville, Burlington, Milton, Hamilton, Stoney Creek,
          Ancaster, Grimsby, Vaughan, Richmond Hill.
        </p>
      </section>

      <section className="mt-10 card p-6 bg-white">
        <h2 className="text-2xl font-semibold">
          Interior Painting Planning Guides
        </h2>
        <p className="mt-2 text-gray-700">
          Compare prep, drywall repair, ceilings, trim, primer, sheen, and
          quote scope before booking a local repaint.
        </p>
        <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {localPaintingGuides.map((guide) => (
            <Link
              key={guide.slug}
              href={guide.href}
              className="rounded-xl border border-gray-200 p-4 font-semibold text-blue-700 hover:border-blue-300 hover:bg-blue-50"
            >
              {guide.title}
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mt-10 card p-6 bg-white flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold">
            Ready for clean, modern interiors?
          </h3>
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

      {/* Long-form local copy */}
      <ServiceCopy service="Interior Painting" />

      {/* FAQ (visible; mirrors JSON-LD) */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold">FAQ</h2>
        <details className="card p-6 bg-white mt-4">
          <summary className="font-medium">
            How do you keep lines sharp and finishes durable?
          </summary>
          <p className="mt-2 text-gray-700">
            Proper tape techniques, steady cut-ins, and controlling wet edges to
            avoid lap marks.
          </p>
        </details>
        <details className="card p-6 bg-white mt-4">
          <summary className="font-medium">Is prep dust-controlled?</summary>
          <p className="mt-2 text-gray-700">
            Yes. We use protection, containment where needed, floor and vent
            masking, vacuum-assist sanding, and tidy cleanup so wall prep does
            not spread through the home.
          </p>
        </details>
        <details className="card p-6 bg-white mt-4">
          <summary className="font-medium">
            Do you handle ceilings, trim, and doors too?
          </summary>
          <p className="mt-2 text-gray-700">
            Yes—holes, dents, tape lifts, and stains are addressed before
            priming and painting. For larger repair scope, we route Mississauga
            clients to our{" "}
            <Link
              href="/services/drywall-repair/mississauga/"
              className="font-semibold text-blue-600 hover:underline"
            >
              drywall repair Mississauga
            </Link>{" "}
            page before paint is scheduled.
          </p>
        </details>
        <details className="card p-6 bg-white mt-4">
          <summary className="font-medium">How fast can I get a quote?</summary>
          <p className="mt-2 text-gray-700">
            Same-day photo estimate; on-site visit to confirm final scope and
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
