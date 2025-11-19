// app/contact/page.tsx — Next.js App Router
import Link from "next/link";
import Image from "next/image";
import { CONTACT } from "@/app/config"; // { phoneHref, phoneNumber, email }
import QuoteForm from "@/components/QuoteForm";

export const revalidate = 86400;

const BRAND = "EPF Pro Services";
const HERO_IMG = "/contact/popcorn-ceiling-removal.png";

export const metadata = {
  title: `Contact — ${BRAND} | Popcorn Ceiling Removal & Level 5 Finishes`,
  description:
    "Contact EPF Pro Services for dust-controlled popcorn ceiling removal (Level 5 smooth), drywall finishing, wallpaper removal, and interior painting. Fast estimates across Mississauga, Toronto, Oakville, Burlington, Hamilton, Milton, Etobicoke, Grimsby, and St. Catharines.",
  keywords: [
    "popcorn ceiling removal",
    "ceiling smoothing",
    "Level 5 finish",
    "drywall finishing",
    "Mississauga",
    "Oakville",
    "Hamilton",
    "Toronto",
    "Etobicoke",
    "Grimsby",
    "St. Catharines",
  ],
  alternates: { canonical: "/contact/" },
  openGraph: {
    title: `Contact ${BRAND}`,
    description:
      "Local, insured crew specializing in popcorn ceiling removal with clean containment, Level 5 finishes, and on-time schedules.",
    url: "/contact/",
    type: "website",
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
          {
            "@type": "ListItem",
            position: 2,
            name: "Contact",
            item: "/contact/",
          },
        ],
      },
      {
        "@type": "Organization",
        "@id": "/#org",
        name: BRAND,
        url: "/",
        email: CONTACT?.email || "info@epfproservices.com",
        telephone: CONTACT?.phoneNumber || "+1 (647) 923-6784",
        sameAs: [],
      },
      {
        "@type": "LocalBusiness",
        "@id": "/#loc-mississauga",
        name: `${BRAND} — Mississauga`,
        url: "/contact/",
        telephone: CONTACT?.phoneNumber || "+1 (647) 923-6784",
        email: CONTACT?.email || "info@epfproservices.com",
        branchOf: { "@id": "/#org" },
        address: {
          "@type": "PostalAddress",
          streetAddress: "6855 Glenerin Dr, Unit 33",
          addressLocality: "Mississauga",
          addressRegion: "ON",
          postalCode: "L5N 1P6",
          addressCountry: "CA",
        },
        areaServed: [
          "Mississauga",
          "Toronto",
          "Oakville",
          "Burlington",
          "Milton",
          "Etobicoke",
        ],
      },
      {
        "@type": "LocalBusiness",
        "@id": "/#loc-stoney",
        name: `${BRAND} — Stoney Creek`,
        url: "/contact/",
        telephone: CONTACT?.phoneNumber || "+1 (647) 923-6784",
        email: CONTACT?.email || "info@epfproservices.com",
        branchOf: { "@id": "/#org" },
        address: {
          "@type": "PostalAddress",
          streetAddress: "37 Dalegrove Crescent",
          addressLocality: "Stoney Creek",
          addressRegion: "ON",
          postalCode: "L8J 3R5",
          addressCountry: "CA",
        },
        areaServed: ["Hamilton", "Stoney Creek", "Grimsby", "St. Catharines"],
      },
      {
        "@type": "Service",
        name: "Popcorn Ceiling Removal & Ceiling Smoothing (Level 5)",
        serviceType: [
          "Popcorn Ceiling Removal",
          "Ceiling Smoothing",
          "Drywall Finishing",
        ],
        provider: { "@id": "/#org" },
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
        "@type": "ContactPage",
        name: `Contact ${BRAND}`,
        url: "/contact/",
        about: { "@id": "/#org" },
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

export default function ContactPage() {
  return (
    <div className="container-x py-10">
      <JsonLd />

      {/* HERO — image-first, full height, shows entire image (object-contain) */}
      <header className="rounded-3xl overflow-hidden border border-black/10 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.35)] bg-white">
        <div className="grid grid-cols-1 md:grid-cols-[1.35fr,1fr] gap-0 md:gap-8 items-stretch">
          {/* IMAGE COLUMN */}
          <figure className="relative h-[360px] md:h-[560px] lg:h-[680px] bg-gradient-to-br from-sky-50 via-white to-rose-50 ring-1 ring-black/5 md:rounded-r-3xl">
            <Image
              src={HERO_IMG}
              alt="Popcorn ceiling removal — dust-controlled setup, EPF Pro Services"
              fill
              priority
              // Show entire image without cropping:
              className="object-contain p-4 md:p-6 lg:p-8 drop-shadow-sm"
              sizes="(min-width: 1024px) 60vw, (min-width: 768px) 60vw, 100vw"
            />
            {/* Decorative color rays */}
            <div className="pointer-events-none absolute -top-20 -left-16 h-72 w-72 rounded-full bg-rose-300/25 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-16 -right-24 h-72 w-72 rounded-full bg-blue-300/25 blur-3xl" />
          </figure>

          {/* COPY COLUMN */}
          <div className="p-6 md:p-10 bg-[radial-gradient(90%_120%_at_100%_0%,#eff6ff_0%,transparent_60%)]">
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-600/10 text-blue-800 px-3 py-1 text-xs font-semibold ring-1 ring-blue-600/20">
              ⭐ Popcorn Ceiling Removal • Level 5 Smooth
            </span>
            <h1 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight">
              Contact <span className="text-rose-600">{BRAND}</span>
            </h1>
            <p className="mt-4 text-lg text-slate-800">
              Need <strong>popcorn ceiling removal</strong> that’s{" "}
              <strong>dust-controlled</strong> and finishes{" "}
              <strong>glass-smooth (Level 5)</strong>? Send a couple photos and
              room sizes for the fastest estimate. We also handle{" "}
              <strong>drywall finishing</strong>,{" "}
              <strong>wallpaper removal</strong>, and{" "}
              <strong>interior painting</strong>.
            </p>

            {/* Trust chips */}
            <ul className="mt-4 flex flex-wrap gap-2">
              <li className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-900 text-sm ring-1 ring-emerald-200">
                HEPA dust control
              </li>
              <li className="px-3 py-1 rounded-full bg-amber-50 text-amber-900 text-sm ring-1 ring-amber-200">
                Level 5 finishing
              </li>
              <li className="px-3 py-1 rounded-full bg-purple-50 text-purple-900 text-sm ring-1 ring-purple-200">
                Insured • WSIB
              </li>
              <li className="px-3 py-1 rounded-full bg-sky-50 text-sky-900 text-sm ring-1 ring-sky-200">
                Clean & on-time
              </li>
            </ul>

            {/* Primary CTAs */}
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={CONTACT.phoneHref}
                className="btn-cta bg-blue-600 hover:bg-blue-700 text-white"
              >
                📞 {CONTACT.phoneNumber}
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                className="btn-cta bg-rose-600 hover:bg-rose-700 text-white"
              >
                ✉️ {CONTACT.email}
              </a>
              <Link
                href="/quote/"
                className="btn-cta bg-emerald-600 hover:bg-emerald-700 text-white"
              >
                Get My Quote
              </Link>
            </div>

            <p className="mt-3 text-sm text-slate-700">
              Serving Mississauga, Toronto, Oakville, Burlington, Hamilton,
              Milton, Etobicoke, Grimsby, St. Catharines.
            </p>
          </div>
        </div>
      </header>

      {/* ADDRESS INFORMATION — colorful cards */}
      <section className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 rounded-2xl bg-white ring-1 ring-blue-100">
          <h2 className="text-2xl font-semibold text-blue-900">
            Address Information
          </h2>
          <h3 className="mt-4 text-lg font-medium text-slate-900">
            Mississauga
          </h3>
          <address className="not-italic text-slate-700">
            6855 Glenerin Dr, Unit 33
            <br />
            Mississauga, ON L5N 1P6
          </address>
          <p className="mt-2">
            <a
              className="underline text-blue-700 hover:text-blue-900"
              href="https://maps.google.com/?q=6855%20Glenerin%20Dr%2C%20Unit%2033%2C%20Mississauga%2C%20ON%20L5N%201P6"
              target="_blank"
              rel="noreferrer"
            >
              Open in Google Maps
            </a>
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white ring-1 ring-rose-100">
          <h2 className="sr-only">Stoney Creek address</h2>
          <h3 className="mt-1 text-lg font-medium text-slate-900">
            Stoney Creek
          </h3>
          <address className="not-italic text-slate-700">
            37 Dalegrove Crescent
            <br />
            Stoney Creek, ON L8J 3R5
          </address>
          <p className="mt-2">
            <a
              className="underline text-rose-700 hover:text-rose-900"
              href="https://maps.google.com/?q=37%20Dalegrove%20Crescent%2C%20Stoney%20Creek%2C%20ON%20L8J%203R5"
              target="_blank"
              rel="noreferrer"
            >
              Open in Google Maps
            </a>
          </p>
        </div>
      </section>

      {/* POPCORN CEILING REMOVAL — SEO/sales block */}
      <section className="mt-10 p-6 md:p-8 rounded-2xl bg-gradient-to-br from-rose-50 via-white to-sky-50 ring-1 ring-slate-200">
        <h2 className="text-2xl font-semibold">
          Popcorn Ceiling Removal — Epf Pro Services
        </h2>
        <p className="mt-2 text-slate-700">
          We specialize in turning dated textured ceilings into{" "}
          <strong>smooth, modern ceilings</strong>. Our process uses{" "}
          <strong>containment</strong>, <strong>vent masking</strong>, and{" "}
          <strong>HEPA-assist sanding</strong>. Painted popcorn? We test first;
          if scraping risks damage, we{" "}
          <strong>encapsulate & Level 5 skim</strong>
          and finish paint on request.
        </p>
        <ul className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3 text-slate-800">
          <li className="rounded-xl p-4 ring-1 ring-emerald-200 bg-emerald-50/60">
            ✅ Dust-controlled, family-friendly workflow
          </li>
          <li className="rounded-xl p-4 ring-1 ring-amber-200 bg-amber-50/60">
            ✅ True Level 5 flatness under raking light
          </li>
          <li className="rounded-xl p-4 ring-1 ring-purple-200 bg-purple-50/60">
            ✅ Respectful, insured crew • WSIB
          </li>
        </ul>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/services/popcorn-ceiling-removal/"
            className="btn-cta bg-rose-600 hover:bg-rose-700 text-white"
          >
            Learn About Popcorn Removal
          </Link>
          <Link
            href="/our-work/"
            className="btn-cta bg-sky-600 hover:bg-sky-700 text-white"
          >
            See Before / After
          </Link>
        </div>
      </section>

      {/* QUOTE FORM (your component) */}
      <section className="mt-10 p-6 md:p-8 rounded-2xl ring-1 ring-blue-100 bg-gradient-to-br from-blue-50 via-white to-emerald-50">
        <h2 className="text-2xl font-semibold">Request a Fast Estimate</h2>
        <p className="mt-2 text-slate-700">
          Include room sizes / Popcorn ceiling painted/not painted / ceiling
          height. For urgent jobs, text{CONTACT.phone}
          <a className="underline" href={CONTACT.phoneHref}>
            {CONTACT.phoneNumber}
          </a>
          .
        </p>
        <div className="mt-6">
          <QuoteForm />
        </div>
      </section>

      {/* LOCAL LINKS — Service → City (static URLs for SEO) */}
      <section className="mt-10 p-6 rounded-2xl bg-white ring-1 ring-slate-200">
        <h2 className="text-2xl font-semibold">Popular Service Areas</h2>
        <p className="mt-2 text-slate-700">
          Quick links to our local popcorn ceiling removal pages:
        </p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {[
            "mississauga",
            "toronto",
            "oakville",
            "burlington",
            "hamilton",
            "milton",
            "etobicoke",
            "grimsby",
            "st-catharines",
          ].map((city) => (
            <li key={city}>
              <Link
                className="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 text-sm"
                href={`/locations/popcorn-ceiling-removal-${city}`}
              >
                {city
                  .replaceAll("-", " ")
                  .replace(/\b\w/g, (c) => c.toUpperCase())}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* CTA BAR — high contrast */}
      <section className="mt-10 p-6 rounded-2xl bg-blue-600 text-white flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold">
            Ready for smooth, modern ceilings?
          </h3>
          <p className="opacity-90">
            Send a couple photos and get a clear plan with timeline.
          </p>
        </div>
        <div className="flex gap-3">
          <a
            href={CONTACT.phoneHref}
            className="btn-cta bg-white text-blue-700 hover:bg-slate-100"
          >
            📞 {CONTACT.phoneNumber}
          </a>
          <Link
            href="/quote/"
            className="btn-cta bg-emerald-400 hover:bg-emerald-300 text-blue-900"
          >
            Get My Quote
          </Link>
        </div>
      </section>

      {/* Mobile quick actions */}
      <div className="fixed bottom-4 right-4 z-40 flex gap-2 md:hidden">
        <a
          href={CONTACT.phoneHref}
          className="rounded-full px-4 py-3 shadow-lg bg-blue-600 text-white text-sm font-semibold"
        >
          Call
        </a>
        <Link
          href="/quote/"
          className="rounded-full px-4 py-3 shadow-lg bg-emerald-500 text-white text-sm font-semibold"
        >
          Quote
        </Link>
      </div>
    </div>
  );
}
