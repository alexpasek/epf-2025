import Link from "next/link";
import { CONTACT } from "@/app/config";
import { ServiceCopy } from "@/components/LocalSEOCopy";
import { cities } from "@/data/cities";
import QuoteForm from "@/components/QuoteForm";

export const revalidate = 86400;

export const metadata = {
  title: "Drywall Installation & Finishing — Wallpaper Removal Pro",
  description:
    "GTA drywall installation, taping & mudding to Level 5 smooth. Dust-controlled, paint-ready finish. Fast quotes, clear scope, and a written warranty.",
  alternates: { canonical: "/services/drywall" },
  openGraph: {
    title: "Drywall Installation & Finishing — Level 5 Smooth (GTA)",
    description:
      "Professional drywall hanging, taping, and skim-coating to Level 5. Repairs, patches, and paint-ready finishing. Clean, tidy, guaranteed.",
    url: "/services/drywall",
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
        name: "Drywall Installation & Finishing",
        serviceType: [
          "Drywall Hanging",
          "Drywall Taping & Mudding",
          "Level 5 Skim-Coat",
          "Ceiling & Wall Repairs",
        ],
        areaServed: areaServed,
        offers: {
          "@type": "Offer",
          priceCurrency: "CAD",
          availability: "https://schema.org/InStock",
        },
        potentialAction: {
          "@type": "RequestQuoteAction",
          target: "/quote/",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Do you finish to Level 5 (paint-ready)?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. We skim-coat, feather, and check under critical light before priming so the surface is paint-ready.",
            },
          },
          {
            "@type": "Question",
            name: "Is the work dust-controlled?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We use plastic containment, floor & vent protection, vacuum-assist sanding, and a full clean-up.",
            },
          },
          {
            "@type": "Question",
            name: "Can you repair holes and match existing texture?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We patch, tape, and blend to surrounding surfaces; we can match knockdown or orange-peel textures when needed.",
            },
          },
          {
            "@type": "Question",
            name: "How quickly can I get a quote?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Same-day photo estimate with on-site confirmation for final scope and schedule.",
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
            name: "Drywall Installation & Finishing",
            item: "/services/drywall",
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
    (_, i) => `/services/drywall/${i + 1}.webp`
  );

  return (
    <div className="container-x py-10">
      <JsonLd />

      {/* HERO */}
      <header className="max-w-5xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
              Drywall Installation & Finishing
            </h1>
            <p className="mt-3 text-gray-700">
              Clean hanging, taping & mudding, repairs, and{" "}
              <strong>Level 5 skim-coat</strong> for a paint-ready result.
            </p>
          </div>
          <div className="flex gap-3">
            <a
              className="btn-cta"
              href={CONTACT.phoneHref}
              aria-label="Call for a quote"
            >
              📞 (647) 812-9135
            </a>
            <a className="btn-cta" href="/quote/" aria-label="Open quote form">
              Get my quote
            </a>
          </div>
        </div>

        {/* Local internal linking for SEO */}
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {cities.map((c) => (
            <Link key={c.slug} href={`/${c.slug}/`} className="pill">
              {c.name}
            </Link>
          ))}
        </div>
      </header>

      {/* WHY CHOOSE US (conversion) */}
      <section className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="card p-6 bg-white">
          <h3 className="text-xl font-semibold">Dust-Controlled</h3>
          <p className="text-gray-600 mt-2">
            Plastic containment, floor & vent protection, vacuum-assist sanding,
            spotless clean-up.
          </p>
        </div>
        <div className="card p-6 bg-white">
          <h3 className="text-xl font-semibold">Level 5 Finish</h3>
          <p className="text-gray-600 mt-2">
            Skim-coat & feather, critical-light check, prime & re-touch so walls
            and ceilings look perfect.
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
            alt={`Drywall project ${i + 1}`}
            className="w-full h-56 object-cover rounded-2xl border shadow"
            data-lightbox="true"
          />
        ))}
      </div>

      {/* PROCESS (SEO + trust) */}
      <section className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="card p-6 bg-white">
          <h2 className="text-2xl font-semibold">Our Process</h2>
          <ul className="mt-3 space-y-2 text-gray-700 list-disc pl-5">
            <li>Layout, stud check, proper fastening & seams planning</li>
            <li>Taping & mudding (multiple coats), corner beads & caulking</li>
            <li>Level 5 skim-coat & vacuum-assist sanding</li>
            <li>Critical-light inspection, prime, and paint-ready finish</li>
          </ul>
        </div>
        <div className="card p-6 bg-white">
          <h2 className="text-2xl font-semibold">Common Situations We Fix</h2>
          <ul className="mt-3 space-y-2 text-gray-700 list-disc pl-5">
            <li>Patches from electrical/plumbing, pot-light holes</li>
            <li>Cracks, tape lifts, corner damage, seam telegraphing</li>
            <li>Water damage, uneven walls, framing imperfections</li>
          </ul>
        </div>
      </section>

      {/*quote form*/}
      <section className="mt-10 card p-6 bg-white">
        <h2 className="text-2xl font-semibold">Get a Fast Quote</h2>
        <p className="mt-2 text-gray-700">
          Share a few details and we’ll reply quickly with scope, timeline, and
          a clear estimate.
        </p>
        <div className="mt-6">
          <QuoteForm />
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

      {/* CONVERSION CTA */}
      <section className="mt-10 card p-6 bg-white flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold">Need paint-ready drywall?</h3>
          <p className="text-gray-600">
            Fast photo estimate. Clear plan and schedule.
          </p>
        </div>
        <div className="flex gap-3">
          <a className="btn-cta" href={CONTACT.phoneHref}>
            📞 (647) 812-9135
          </a>
          <a className="btn-cta" href="/quote/">
            Get my quote
          </a>
        </div>
      </section>

      {/* LONG-FORM LOCAL SEO COPY (your existing component) */}
      <ServiceCopy service="Drywall Installation & Finishing" />

      {/* FAQ (visible; mirrors JSON-LD) */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold">FAQ</h2>
        <details className="card p-6 bg-white mt-4">
          <summary className="font-medium">
            Do you finish to Level 5 (paint-ready)?
          </summary>
          <p className="mt-2 text-gray-700">
            Yes—skim-coat and critical-light checks before priming and final
            touch-ups.
          </p>
        </details>
        <details className="card p-6 bg-white mt-4">
          <summary className="font-medium">
            Is the work dust-controlled?
          </summary>
          <p className="mt-2 text-gray-700">
            Containment, vent masking, vacuum-assist sanding, and a full
            clean-up.
          </p>
        </details>
        <details className="card p-6 bg-white mt-4">
          <summary className="font-medium">
            Can you match existing texture or repairs?
          </summary>
          <p className="mt-2 text-gray-700">
            We blend patches and can match knockdown or orange-peel textures
            when required.
          </p>
        </details>
        <details className="card p-6 bg-white mt-4">
          <summary className="font-medium">How fast is the estimate?</summary>
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
            📞 Call (647) 812-9135
          </a>
          <a href="/quote/" className="btn-cta flex-1 text-center">
            Get my quote
          </a>
        </div>
      </div>
    </div>
  );
}
