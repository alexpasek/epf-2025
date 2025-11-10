// app/about/page.tsx (Next.js App Router)

import Link from "next/link";
import { PHONE_HREF, PHONE_NUMBER } from "@/app/config";

export const revalidate = 86400;

// Use whatever image you have available; keep path stable.
const HERO_IMG = "/about/Popcorn-ceiling-removal-team.png";

export const metadata = {
  title:
    "About Us — EPF Pro Services | Popcorn Ceiling Removal & Level 5 Finishing",
  description:
    "EPF Pro Services: specialists in dust-controlled popcorn ceiling removal (Level 5 smooth), drywall finishing, wallpaper removal, and interior painting across Mississauga, Oakville, Burlington, Hamilton, Milton, Etobicoke, Grimsby, and St. Catharines.",
  alternates: { canonical: "/about/" },
  openGraph: {
    title: "About EPF Pro Services — Popcorn Ceiling Removal Specialists",
    description:
      "Local, insured crew delivering dust-controlled popcorn ceiling removal, drywall finishing, and interior painting with tidy job sites and on-time schedules.",
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
            name: "Is popcorn ceiling removal dusty?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We isolate rooms, protect floors and vents, use HEPA-assist sanding, and maintain tidy daily wrap-ups to keep dust in control.",
            },
          },
          {
            "@type": "Question",
            name: "What if the popcorn is painted?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We test a small area. If scraping risks damage, we encapsulate, perform a Level 5 skim, then prime with stain-block before finish.",
            },
          },
          {
            "@type": "Question",
            name: "Do you also handle painting and small drywall repairs?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. We can leave ceilings paint-ready or complete the finish coats. We also handle drywall patches, taping, and Level 5 finishing.",
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
      <header className="grid grid-cols-1 md:grid-cols-[1.2fr,1fr] gap-6 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            About <span className="text-blue-700">EPF Pro Services</span>
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            We’re a local, detail-driven crew focused on{" "}
            <strong>dust-controlled popcorn ceiling removal</strong> with{" "}
            <strong>Level 5 smooth finishes</strong>. Our team also delivers{" "}
            <strong>drywall finishing</strong>,{" "}
            <strong>wallpaper removal</strong>, and{" "}
            <strong>interior painting</strong>—with clean containment, tidy job
            sites, and on-time schedules.
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

        <figure className="rounded-2xl overflow-hidden border border-black/10 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.35)]">
          <img
            src={HERO_IMG}
            alt="EPF Pro Services crew performing dust-controlled popcorn ceiling removal"
            loading="eager"
            className="w-full h-full object-cover"
          />
        </figure>
      </header>

      {/* VALUES / PROOF */}
      <section className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="card p-6 bg-white">
          <h2 className="text-xl font-semibold">Level 5 Quality</h2>
          <p className="text-gray-700 mt-2">
            Raking-light checks, tight feathering, and true flats so ceilings
            look crisp in daylight and at night.
          </p>
        </div>
        <div className="card p-6 bg-white">
          <h2 className="text-xl font-semibold">Clean & Contained</h2>
          <p className="text-gray-700 mt-2">
            Plastic barriers, floor & stair protection, vent masking, and
            HEPA-assist sanding keep dust under control.
          </p>
        </div>
        <div className="card p-6 bg-white">
          <h2 className="text-xl font-semibold">Reliable & Insured</h2>
          <p className="text-gray-700 mt-2">
            Clear start/finish plan, daily updates, WSIB coverage, and a solid
            workmanship warranty.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="card p-6 bg-white">
          <h3 className="text-2xl font-semibold">What We Do</h3>
          <ul className="mt-3 space-y-2 text-gray-700 list-disc pl-5">
            <li>
              <Link
                href="/services/popcorn-ceiling-removal/"
                className="hover:underline"
              >
                Popcorn ceiling removal → smooth Level 5
              </Link>{" "}
              — safe scrape or encapsulate, full skim, stain-block prime.
            </li>
            <li>
              <Link
                href="/services/drywall-installation/"
                className="hover:underline"
              >
                Drywall finishing & repairs
              </Link>{" "}
              — board, tape, feather, sand, raking-light test.
            </li>
            <li>
              <Link
                href="/services/wallpaper-removal/"
                className="hover:underline"
              >
                Wallpaper removal
              </Link>{" "}
              — score, steam/gel soften, remove backing & adhesive, substrate
              wash, Level 5 skim, bond prime.
            </li>
            <li>
              <Link
                href="/services/interior-painting/"
                className="hover:underline"
              >
                Interior painting
              </Link>{" "}
              — proper primers, neat edges, durable finishes.
            </li>
          </ul>
        </div>

        {/* LOCAL SIGNALS / AREAS */}
        <div className="card p-6 bg-white">
          <h3 className="text-2xl font-semibold">Local, Friendly, Nearby</h3>
          <p className="mt-3 text-gray-700">
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
            </Link>{" "}
            &{" "}
            <Link href="/st-catharines/" className="hover:underline">
              St. Catharines
            </Link>
            . Ask for{" "}
            <Link href="/our-work/" className="hover:underline">
              before/after photos
            </Link>{" "}
            and a quick schedule check.
          </p>
          <div className="mt-4 flex gap-3">
            <Link href="/quote/" className="btn-cta">
              Fast Quote
            </Link>
            <a href={PHONE_HREF} className="btn-cta">
              📞 {PHONE_NUMBER}
            </a>
          </div>
        </div>
      </section>

      {/* PROMISE / TRUST */}
      <section className="mt-10 card p-6 bg-white">
        <h3 className="text-2xl font-semibold">Our Promise</h3>
        <ul className="mt-3 space-y-2 text-gray-700 list-disc pl-5">
          <li>Real containment and daily tidy—no surprise mess.</li>
          <li>Level 5 attention to detail on ceilings and walls.</li>
          <li>Clear scope, timeline, and workmanship warranty.</li>
          <li>Respectful in-home conduct and careful protection.</li>
        </ul>
      </section>

      {/* FAQ (mirrors JSON-LD) */}
      <section className="mt-10">
        <h3 className="text-2xl font-semibold">FAQ</h3>
        <details className="card p-6 bg-white mt-4">
          <summary className="font-medium">Is removal dusty?</summary>
          <p className="mt-2 text-gray-700">
            We isolate rooms, protect floors and vents, and use HEPA-assist
            sanding to control dust.
          </p>
        </details>
        <details className="card p-6 bg-white mt-4">
          <summary className="font-medium">Painted popcorn plan?</summary>
          <p className="mt-2 text-gray-700">
            We test first; if scraping isn’t safe, we encapsulate and perform a
            Level 5 skim, then prime and finish.
          </p>
        </details>
        <details className="card p-6 bg-white mt-4">
          <summary className="font-medium">Do you also paint?</summary>
          <p className="mt-2 text-gray-700">
            Yes—either paint-ready or full finish coats on request.
          </p>
        </details>
      </section>

      {/* CTA BAR */}
      <section className="mt-10 card p-6 bg-white flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h4 className="text-xl font-semibold">
            Ready for smooth, modern ceilings?
          </h4>
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
