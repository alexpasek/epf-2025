// app/about/page.tsx (Next.js App Router)

import Link from "next/link";
import { PHONE_HREF, PHONE_NUMBER } from "@/app/config";

export const revalidate = 86400;

// Keep a stable path for the hero image.
const HERO_IMG = "/about/Popcorn-ceiling-removal-team.png";

export const metadata = {
  title:
    "About Us — EPF Pro Services | Popcorn Ceiling Removal & Level 5 Finishing",
  description:
    "EPF Pro Services: dust-controlled popcorn ceiling removal to Level 5 smooth, drywall finishing, wallpaper removal, and interior painting. Local, insured crew serving Mississauga, Oakville, Burlington, Hamilton, Milton, Etobicoke, Grimsby, St. Catharines.",
  alternates: { canonical: "/about/" },
  openGraph: {
    title: "About EPF Pro Services — Popcorn Ceiling Removal Specialists",
    description:
      "Local, insured crew delivering dust-controlled popcorn ceiling removal, Level 5 skim coating, drywall finishing, and interior painting with tidy job sites and on-time schedules.",
    url: "/about/",
    type: "article",
    images: [{ url: HERO_IMG }],
  },
  robots: { index: true, follow: true },
};

function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "/" },
          { "@type": "ListItem", position: 2, name: "About", item: "/about/" },
        ],
      },
      {
        "@type": "LocalBusiness",
        "@id": "/#business",
        name: "EPF Pro Services",
        url: "/",
        image: HERO_IMG,
        telephone: PHONE_NUMBER,
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          streetAddress: "2394 Haines Rd",
          addressLocality: "Mississauga",
          addressRegion: "ON",
          postalCode: "L4Y 1Y6",
          addressCountry: "CA",
        },
        areaServed: [
          "Mississauga",
          "Toronto",
          "Oakville",
          "Burlington",
          "Hamilton",
          "Milton",
          "Etobicoke",
          "Grimsby",
          "St. Catharines",
        ],
        sameAs: [],
      },
      {
        "@type": "Service",
        name: "Popcorn Ceiling Removal & Ceiling Smoothing (Level 5)",
        serviceType: [
          "Popcorn Ceiling Removal",
          "Ceiling Smoothing",
          "Drywall Taping & Level 5 Skim",
          "Wallpaper Removal",
          "Interior Painting",
        ],
        provider: { "@id": "/#business" },
        areaServed: [
          "Mississauga",
          "Toronto",
          "Oakville",
          "Burlington",
          "Hamilton",
          "Milton",
          "Etobicoke",
          "Grimsby",
          "St. Catharines",
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What’s included in your popcorn ceiling removal service?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Room isolation, floor and stair protection, vent masking, safe scrape or encapsulation, Level 5 skim coat, raking-light checks, HEPA-assisted sanding, stain-block primer, and optional finish painting. Daily tidy-ups and a careful final clean.",
            },
          },
          {
            "@type": "Question",
            name: "Is popcorn ceiling removal dusty?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We control dust with plastic containment, protected floors and stairs, vent masking, negative airflow where helpful, and HEPA-assisted sanding. We do daily cleanups to keep your home tidy.",
            },
          },
          {
            "@type": "Question",
            name: "What if the popcorn ceiling is painted?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We test first. If scraping risks damage, we encapsulate and apply a Level 5 skim to achieve a smooth ceiling, then prime with a quality stain-blocker before finish coats.",
            },
          },
          {
            "@type": "Question",
            name: "How long does popcorn ceiling removal take?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Typical 300–600 sq ft projects take about 2–4 days depending on height, painted texture, repairs, and whether we are painting. Larger or complex layouts can take longer.",
            },
          },
          {
            "@type": "Question",
            name: "How much does popcorn ceiling removal cost?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Pricing depends on square footage, ceiling height, painted texture, access/scaffolding, pot light cutouts, and if we’re painting. Send photos and sizes for a fast ballpark or book a free in-home estimate.",
            },
          },
          {
            "@type": "Question",
            name: "Do you repair drywall and fix ceiling cracks before finishing?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. We repair hairline cracks, tape blisters, nail pops, and minor damage before the Level 5 skim. Larger issues are discussed and approved first.",
            },
          },
          {
            "@type": "Question",
            name: "Can you coordinate pot lights during removal?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We can coordinate a licensed electrician for new or relocated pot lights. We finish with a crisp, smooth Level 5 surface.",
            },
          },
          {
            "@type": "Question",
            name: "Which areas do you serve?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Mississauga, Toronto, Oakville, Burlington, Hamilton, Milton, Etobicoke, Grimsby, and St. Catharines.",
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

export default function AboutPage() {
  return (
    <div className="container-x py-10">
      <JsonLd />

      {/* HERO */}
      <header className="grid grid-cols-1 md:grid-cols-[1.2fr,1fr] gap-8 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            About <span className="text-blue-700">EPF Pro Services</span>
          </h1>

          <p className="mt-4 text-lg text-gray-700">
            We’re a local, detail-driven crew focused on{" "}
            <strong>dust-controlled popcorn ceiling removal</strong> with{" "}
            <strong>Level 5 smooth finishes</strong>. We help homeowners
            modernize older homes by removing dated textures, repairing drywall,
            and delivering clean, bright ceilings that make rooms look larger
            and more valuable.
          </p>
          <p className="mt-3 text-gray-700">
            Our promise is simple: <em>containment first, quality always</em>.
            From plastic barriers and floor protection to careful skim coating
            and raking-light checks, we finish ceilings the way we’d want them
            in our own homes. We also handle <strong>drywall finishing</strong>,{" "}
            <strong>wallpaper removal</strong>, and{" "}
            <strong>interior painting</strong>.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a href={PHONE_HREF} className="btn-cta">
              📞 {PHONE_NUMBER}
            </a>
            <Link href="/quote/" className="btn-cta">
              Get My Quote
            </Link>
          </div>
        </div>

        {/* Stylish figure with gradient frame + glow + caption */}
        <figure className="relative group">
          {/* soft glow */}
          <div className="absolute -inset-4 md:-inset-6 bg-gradient-to-tr from-red-400/10 via-rose-300/10 to-blue-400/10 blur-2xl rounded-[28px] opacity-80 group-hover:opacity-100 transition"></div>

          {/* gradient frame */}
          <div className="relative rounded-[22px] p-[2px] bg-gradient-to-tr from-red-500/30 via-rose-300/20 to-blue-500/30">
            <div className="rounded-[20px] overflow-hidden bg-white shadow-[0_40px_120px_-40px_rgba(0,0,0,.35)] ring-1 ring-black/5">
              <img
                src={HERO_IMG}
                alt="EPF Pro Services crew performing dust-controlled popcorn ceiling removal"
                loading="eager"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <figcaption className="mt-3 text-sm text-slate-500">
            Dust-controlled <strong>popcorn ceiling removal</strong> to{" "}
            <strong>Level 5 smooth</strong> — neat, contained, and on schedule.
          </figcaption>
        </figure>
      </header>

      {/* WHY REMOVE POPCORN CEILINGS */}
      <section className="mt-12 card p-6 bg-white">
        <h2 className="text-2xl font-semibold">Why remove popcorn ceilings?</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-slate-200 p-4">
            <h3 className="font-semibold">Brighter, modern look</h3>
            <p className="mt-1 text-gray-700">
              Smooth ceilings bounce light evenly, making rooms feel bigger and
              newer. It’s the fastest visual upgrade for resale value.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 p-4">
            <h3 className="font-semibold">Easier repairs long-term</h3>
            <p className="mt-1 text-gray-700">
              If a leak happens, a <strong>Level 5</strong> smooth ceiling is
              much easier to patch invisibly than textured popcorn.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 p-4">
            <h3 className="font-semibold">Cleaner, healthier surfaces</h3>
            <p className="mt-1 text-gray-700">
              Textures trap dust. Our{" "}
              <strong>dust-controlled popcorn removal</strong> and HEPA-assisted
              sanding keep your home clean during the project.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 p-4">
            <h3 className="font-semibold">Ready for pot lights</h3>
            <p className="mt-1 text-gray-700">
              We coordinate with a licensed electrician to add pot lights during
              the skim stage for a crisp, uniform finish.
            </p>
          </div>
        </div>
      </section>

      {/* OUR PROCESS */}
      <section className="mt-10 card p-6 bg-white">
        <h2 className="text-2xl font-semibold">Our popcorn removal process</h2>
        <ol className="mt-4 space-y-3 text-gray-700 list-decimal pl-6">
          <li>
            <strong>Containment:</strong> plastic barriers, taped seams, floor &
            stair protection, vent masking.
          </li>
          <li>
            <strong>Test & plan:</strong> scrape test; if painted, we
            encapsulate and proceed to Level 5.
          </li>
          <li>
            <strong>Skim & feather:</strong> Level 5 skim for dead-flat
            ceilings; raking-light checks.
          </li>
          <li>
            <strong>HEPA sand:</strong> dust-managed sanding for a clean, smooth
            surface.
          </li>
          <li>
            <strong>Prime & paint:</strong> stain-block primer; optional finish
            coats with quality ceiling paint.
          </li>
          <li>
            <strong>Clean & hand-off:</strong> daily tidy-ups and careful final
            clean so rooms are ready to use.
          </li>
        </ol>
        <div className="mt-4 flex gap-3">
          <Link href="/our-process/" className="btn-cta">
            See Our Process
          </Link>
          <Link href="/quote/" className="btn-cta">
            Get My Quote
          </Link>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="mt-10">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="card p-6 bg-white">
            <h3 className="text-xl font-semibold">What’s included</h3>
            <ul className="mt-2 space-y-2 text-gray-700 list-disc pl-5">
              <li>Room isolation & floor/stair protection</li>
              <li>Safe scrape or encapsulation (painted texture)</li>
              <li>Level 5 skim coat & HEPA sanding</li>
              <li>Stain-block primer & paint (optional)</li>
              <li>Tidy daily wrap-ups + final clean</li>
            </ul>
          </div>
          <div className="card p-6 bg-white">
            <h3 className="text-xl font-semibold">Quality controls</h3>
            <ul className="mt-2 space-y-2 text-gray-700 list-disc pl-5">
              <li>Raking-light inspection between coats</li>
              <li>Feathered seams & true flats at edges</li>
              <li>Surface readiness checks before paint</li>
              <li>WSIB & liability coverage</li>
              <li>Written workmanship warranty</li>
            </ul>
          </div>
          <div className="card p-6 bg-white">
            <h3 className="text-xl font-semibold">Extras on request</h3>
            <ul className="mt-2 space-y-2 text-gray-700 list-disc pl-5">
              <li>Pot light layout with licensed electrician</li>
              <li>Drywall repairs & patches</li>
              <li>Interior wall painting</li>
              <li>Wallpaper removal & wall skim</li>
              <li>Colour & sheen guidance</li>
            </ul>
          </div>
        </div>
      </section>

      {/* LOCAL AREAS & TIMELINES */}
      <section className="mt-10 card p-6 bg-white">
        <h2 className="text-2xl font-semibold">
          Local areas & typical timelines
        </h2>
        <p className="mt-2 text-gray-700">
          We serve{" "}
          <Link href="/mississauga/" className="hover:underline">
            Mississauga
          </Link>
          ,{" "}
          <Link href="/oakville/" className="hover:underline">
            Oakville
          </Link>
          ,{" "}
          <Link href="/burlington/" className="hover:underline">
            Burlington
          </Link>
          ,{" "}
          <Link href="/hamilton/" className="hover:underline">
            Hamilton
          </Link>
          ,{" "}
          <Link href="/milton/" className="hover:underline">
            Milton
          </Link>
          ,{" "}
          <Link href="/etobicoke/" className="hover:underline">
            Etobicoke
          </Link>
          ,{" "}
          <Link href="/grimsby/" className="hover:underline">
            Grimsby
          </Link>
          , and{" "}
          <Link href="/st-catharines/" className="hover:underline">
            St. Catharines
          </Link>
          .
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl border border-slate-200 p-4">
            <div className="text-sm font-semibold text-slate-600">
              300–450 sq ft
            </div>
            <div className="text-slate-900">≈ 2–3 days</div>
          </div>
          <div className="rounded-xl border border-slate-200 p-4">
            <div className="text-sm font-semibold text-slate-600">
              450–700 sq ft
            </div>
            <div className="text-slate-900">≈ 3–4 days</div>
          </div>
          <div className="rounded-xl border border-slate-200 p-4">
            <div className="text-sm font-semibold text-slate-600">
              700–1000 sq ft
            </div>
            <div className="text-slate-900">≈ 4–6 days</div>
          </div>
        </div>
        <p className="mt-3 text-gray-600 text-sm">
          Timelines vary with ceiling height, painted texture, repairs, and
          whether we’re painting.
        </p>
      </section>

      {/* CLIENT-FRIENDLY EXTRAS */}
      <section className="mt-10 card p-6 bg-white">
        <h2 className="text-2xl font-semibold">Client-friendly extras</h2>
        <div className="mt-3 grid gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-slate-200 p-4">
            <h3 className="font-semibold">Flexible scheduling</h3>
            <p className="mt-1 text-gray-700">
              Evening/specific-day starts when possible.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 p-4">
            <h3 className="font-semibold">Clear updates</h3>
            <p className="mt-1 text-gray-700">
              Daily progress texts and next-day plan.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 p-4">
            <h3 className="font-semibold">Respectful in-home conduct</h3>
            <p className="mt-1 text-gray-700">
              Careful protection, tidy wrap-ups, friendly crew.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ (kept, SEO & sales oriented) */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold">
          FAQ — Popcorn Ceiling Removal
        </h2>

        <details className="card p-6 bg-white mt-4">
          <summary className="font-medium">
            What’s included in your popcorn ceiling removal service?
          </summary>
          <div className="mt-2 text-gray-700 space-y-2">
            <p>
              Complete <strong>popcorn ceiling removal</strong> with dust
              control and Level 5 finishing:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Room isolation & taped seams</li>
              <li>Floor/stair protection & vent masking</li>
              <li>Safe scrape or encapsulation (for painted texture)</li>
              <li>Level 5 skim coat & HEPA sanding</li>
              <li>Stain-block primer; optional finish coats</li>
              <li>Daily tidy-ups & final clean</li>
            </ul>
            <p className="mt-2">
              Send photos for a quick ballpark or{" "}
              <Link href="/quote/" className="underline">
                book a free estimate
              </Link>
              .
            </p>
          </div>
        </details>

        <details className="card p-6 bg-white mt-4">
          <summary className="font-medium">Is removal dusty?</summary>
          <p className="mt-2 text-gray-700">
            Plastic containment, protected floors, vent masking, and{" "}
            <strong>HEPA-assist sanding</strong> control dust. Expect tidy daily
            wrap-ups.
          </p>
        </details>

        <details className="card p-6 bg-white mt-4">
          <summary className="font-medium">Painted popcorn plan?</summary>
          <p className="mt-2 text-gray-700">
            If scraping isn’t safe, we <strong>encapsulate</strong> and apply a
            full <strong>Level 5 skim</strong>, then prime with stain-block
            before finish paint.
          </p>
        </details>

        <details className="card p-6 bg-white mt-4">
          <summary className="font-medium">
            How long will my project take?
          </summary>
          <p className="mt-2 text-gray-700">
            300–600 sq ft usually takes <strong>2–4 days</strong>, depending on
            height, painted texture, repairs, and painting.
          </p>
        </details>

        <details className="card p-6 bg-white mt-4">
          <summary className="font-medium">What affects cost?</summary>
          <p className="mt-2 text-gray-700">
            Square footage, ceiling height/scaffolding, painted texture, pot
            light cutouts, and painting.{" "}
            <Link href="/quote/" className="underline">
              Request a free in-home consultation
            </Link>
            .
          </p>
        </details>

        <details className="card p-6 bg-white mt-4">
          <summary className="font-medium">
            Do you handle drywall repairs?
          </summary>
          <p className="mt-2 text-gray-700">
            Yes—cracks, tape blisters, nail pops, and minor patches are repaired
            before we skim.
          </p>
        </details>

        <details className="card p-6 bg-white mt-4">
          <summary className="font-medium">
            Pot lights during popcorn removal?
          </summary>
          <p className="mt-2 text-gray-700">
            We coordinate a licensed electrician and finish to a crisp, modern
            Level 5 surface.
          </p>
        </details>

        <details className="card p-6 bg-white mt-4">
          <summary className="font-medium">
            Where do you offer popcorn ceiling removal?
          </summary>
          <p className="mt-2 text-gray-700">
            <Link href="/mississauga/" className="underline">
              Mississauga
            </Link>
            ,{" "}
            <Link href="/oakville/" className="underline">
              Oakville
            </Link>
            ,{" "}
            <Link href="/burlington/" className="underline">
              Burlington
            </Link>
            ,{" "}
            <Link href="/hamilton/" className="underline">
              Hamilton
            </Link>
            ,{" "}
            <Link href="/milton/" className="underline">
              Milton
            </Link>
            ,{" "}
            <Link href="/etobicoke/" className="underline">
              Etobicoke
            </Link>
            ,{" "}
            <Link href="/grimsby/" className="underline">
              Grimsby
            </Link>
            ,{" "}
            <Link href="/st-catharines/" className="underline">
              St. Catharines
            </Link>
            .
          </p>
        </details>
      </section>

      {/* CTA BAR */}
      <section className="mt-10 card p-6 bg-white flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold">
            Ready for smooth, modern ceilings?
          </h3>
          <p className="text-gray-600">
            Fast estimate with photos. Clear plan & schedule.
          </p>
        </div>
        <div className="flex gap-3">
          <a href={PHONE_HREF} className="btn-cta">
            📞 {PHONE_NUMBER}
          </a>
          <Link href="/quote/" className="btn-cta">
            Get My Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
