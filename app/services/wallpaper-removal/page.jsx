// app/services/wallpaper-removal/page.jsx
import Link from "next/link";
import { CONTACT } from "@/app/config";
import { cities } from "@/data/cities";
import { ServiceCopy } from "@/components/LocalSEOCopy";

export const metadata = {
  title:
    "Wallpaper Removal — Dust-Controlled Adhesive Wash, Skim-Coat, Paint-Ready",
  description:
    "Pro wallpaper removal across the GTA. Full adhesive wash, drywall repairs, skim-coat, primer and a smooth, paint-ready finish. Tidy crews, HEPA control, 3-year warranty.",
};

const PAGE_URL =
  "https://wallpaper-final.pages.dev/services/wallpaper-removal/"; // set your custom domain when ready
const phoneHref = (CONTACT && CONTACT.phoneHref) || "tel:+16479236784";

export default function Page() {
  const images = Array.from(
    { length: 6 },
    (_, i) => `/services/wallpaper-removal/${i + 1}.webp`
  );

  const topCities = [
    "toronto",
    "mississauga",
    "oakville",
    "burlington",
    "hamilton",
    "milton",
  ];
  const cityLinks = cities.filter((c) => topCities.includes(c.slug));

  return (
    <div className="container-x py-10">
      {/* HERO */}
      <header className="max-w-5xl">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
          Wallpaper Removal — Clean, Paint-Ready Walls
        </h1>
        <p className="mt-4 text-gray-700 text-lg">
          Tidy, dust-controlled removal with <strong>full adhesive wash</strong>
          , repairs, <strong>Level 4/5 skim-coat</strong>, and primer — your
          walls are ready for fresh paint. Most rooms done in 1–2 days.{" "}
          <strong>3-year warranty.</strong>
        </p>
        <div className="mt-6 flex gap-3 flex-wrap">
          <a className="btn-cta" href={phoneHref}>
            📞 (647) 923-6784
          </a>
          <a className="btn-cta" href="/quote/">
            Get my quote
          </a>
        </div>

        {/* Jump links for UX */}
        <nav className="mt-6 text-sm text-gray-600 flex flex-wrap gap-3">
          <a href="#proof" className="underline">
            Proof
          </a>
          <a href="#why-us" className="underline">
            Why us
          </a>
          <a href="#process" className="underline">
            Process
          </a>
          <a href="#pricing" className="underline">
            Typical costs
          </a>
          <a href="#faqs" className="underline">
            FAQs
          </a>
          <Link href="/service-areas" className="underline">
            Service areas
          </Link>
        </nav>
      </header>

      {/* TRUST STRIP */}
      <section className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3">
        {[
          ["Dust-controlled", "HEPA + protection"],
          ["Adhesive washed", "No glue flashing"],
          ["Skim-coat & repair", "Level 4/5 finish"],
          ["3-year warranty", "Workmanship covered"],
        ].map(([h, t]) => (
          <div key={h} className="card p-4 bg-white">
            <div className="font-semibold">{h}</div>
            <div className="text-gray-700 text-sm">{t}</div>
          </div>
        ))}
      </section>

      {/* PROOF IMAGES */}
      <section id="proof" className="mt-10">
        <h2 className="text-2xl font-semibold">Recent Work</h2>
        <p className="text-gray-700 mt-1">
          A few projects from homes and condos around the GTA.
        </p>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((src, i) => (
            <img
              key={src}
              src={src}
              alt={`Wallpaper removal project ${
                i + 1
              } — adhesive wash and skim-coat`}
              className="w-full h-56 object-cover rounded-2xl border shadow"
              loading="lazy"
            />
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section id="why-us" className="grid md:grid-cols-3 gap-4 mt-10">
        {[
          [
            "Complete adhesive wash",
            "We wash until water stops foaming so primer bonds properly — no flashing or failure.",
          ],
          [
            "Level 4/5 skim-coat",
            "Feathered repairs checked under raking light. Smooth walls that actually look painted — not patched.",
          ],
          [
            "Condo-friendly workflow",
            "We book elevators, protect corridors, and work cleanly within building rules.",
          ],
        ].map(([h, t]) => (
          <div key={h} className="card p-5 bg-white">
            <div className="text-lg font-semibold">{h}</div>
            <p className="text-gray-700">{t}</p>
          </div>
        ))}
      </section>

      {/* PROCESS */}
      <section id="process" className="prose max-w-none mt-10">
        <h2>Our Process</h2>
        <ol>
          <li>
            <strong>Protect</strong> floors & furniture, seal vents, set up HEPA
            dust control.
          </li>
          <li>
            <strong>Test & soften</strong> (steam or enzyme) after scoring seams
            to prevent substrate damage.
          </li>
          <li>
            <strong>Lift facing & backing</strong>, then{" "}
            <strong>fully wash adhesive</strong> (critical for primer adhesion).
          </li>
          <li>
            <strong>Repairs + skim-coat</strong> to Level 4/5, sanded and
            checked under raking light.
          </li>
          <li>
            <strong>Prime</strong> with stain-blocking primer and leave a
            smooth, paint-ready surface (or we paint it).
          </li>
        </ol>
      </section>

      {/* TYPICAL COSTS / PACKAGES */}
      <section id="pricing" className="mt-10">
        <h2 className="text-2xl font-semibold">Typical Project Sizes</h2>
        <div className="mt-4 grid md:grid-cols-3 gap-4">
          {[
            [
              "Single Room",
              "From $650–$750",
              ["Wash glue", "Repairs & skim as needed", "Primer"],
            ],
            [
              "Condo Feature Wall",
              "From $650–$850",
              ["Fast turn-around", "Minimal disruption", "Paint-ready"],
            ],
            [
              "Whole Room (papered)",
              "From $1200–$2,400",
              ["Multiple walls", "Level 4/5 skim", "Primer included"],
            ],
          ].map(([title, price, bullets]) => (
            <div key={title} className="card p-5 bg-white">
              <div className="flex items-baseline justify-between">
                <h3 className="font-semibold text-lg">{title}</h3>
                <div className="text-sm text-gray-600">{price}</div>
              </div>
              <ul className="list-disc ml-5 mt-3 text-gray-700">
                {bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <div className="mt-4 flex gap-2">
                <a href="/quote/" className="btn-cta">
                  Get my quote
                </a>
                <a href={phoneHref} className="btn-cta">
                  📞 Call now
                </a>
              </div>
            </div>
          ))}
        </div>
        <p className="text-gray-600 text-sm mt-2">
          *Final pricing depends on square footage, glue condition, repairs, and
          finish level. Free onsite estimates.
        </p>
      </section>

      {/* SOCIAL PROOF / MINI CASE STUDIES */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold">
          Before & After — Real GTA Projects
        </h2>
        <div className="mt-4 grid md:grid-cols-3 gap-4">
          {[
            [
              "Leslieville semi",
              "Vinyl over paint, heavy glue. Full wash + Level 4 skim. 2 days.",
            ],
            [
              "Port Credit townhouse",
              "Two layers removed, repaired torn drywall, prime & paint-ready.",
            ],
            [
              "Yorkville condo",
              "Delicate grasscloth; controlled steam, repairs, sealed & primed.",
            ],
          ].map(([h, t]) => (
            <article key={h} className="card p-5 bg-white">
              <h3 className="font-semibold">{h}</h3>
              <p className="text-gray-700">{t}</p>
            </article>
          ))}
        </div>
      </section>

      {/* SERVICE AREAS PROMO (keep chips off this page, link to hub) */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold">Areas We Serve</h2>
        <p className="mt-2 text-gray-700">
          We work across the GTA — including{" "}
          {cityLinks.map((c, idx) => (
            <span key={c.slug}>
              <Link className="underline" href={`/service-areas/${c.slug}`}>
                {c.name}
              </Link>
              {idx < cityLinks.length - 1 ? ", " : ""}
            </span>
          ))}{" "}
          and more.
        </p>
        <div className="mt-4">
          <Link href="/service-areas" className="btn-cta">
            Browse all service areas →
          </Link>
        </div>
      </section>

      {/* EXISTING LOCAL SEO COPY BLOCK */}
      <ServiceCopy service="Wallpaper Removal" />

      {/* STRONG CLOSER */}
      <section className="card p-6 bg-white mt-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold">
            Ready for dust-controlled removal?
          </h3>
          <p className="text-gray-600">Get a firm quote and schedule today.</p>
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

      {/* MOBILE STICKY CTA (matches site button style) */}

      {/* JSON-LD (Service + Breadcrumb + FAQ + HowTo) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Service",
              name: "Wallpaper removal",
              serviceType: "Wallpaper removal",
              category: "Home Improvement",
              provider: {
                "@type": "LocalBusiness",
                name: "Wallpaper Removal Pro",
              },
              areaServed: "Greater Toronto Area, Canada",
              url: PAGE_URL,
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Wallpaper removal packages",
                itemListElement: [
                  {
                    "@type": "Offer",
                    name: "Single room",
                    priceSpecification: {
                      "@type": "PriceSpecification",
                      priceCurrency: "CAD",
                    },
                  },
                  {
                    "@type": "Offer",
                    name: "Feature wall",
                    priceSpecification: {
                      "@type": "PriceSpecification",
                      priceCurrency: "CAD",
                    },
                  },
                  {
                    "@type": "Offer",
                    name: "Whole room",
                    priceSpecification: {
                      "@type": "PriceSpecification",
                      priceCurrency: "CAD",
                    },
                  },
                ],
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "HowTo",
              name: "How to remove wallpaper cleanly",
              step: [
                {
                  "@type": "HowToStep",
                  name: "Protect surfaces",
                  text: "Cover floors and furniture, seal vents, set up HEPA.",
                },
                {
                  "@type": "HowToStep",
                  name: "Test and soften",
                  text: "Score seams, choose steam or enzyme remover.",
                },
                {
                  "@type": "HowToStep",
                  name: "Lift and wash glue",
                  text: "Remove facing/backing and wash adhesive fully.",
                },
                {
                  "@type": "HowToStep",
                  name: "Repair and skim",
                  text: "Feather repairs, Level 4/5 skim-coat, sand and inspect.",
                },
                {
                  "@type": "HowToStep",
                  name: "Prime for paint",
                  text: "Stain-blocking primer; leave paint-ready surface.",
                },
              ],
              totalTime: "P1D",
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "How long does removal take?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Most rooms are done in 1–2 days depending on glue condition and repairs.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Will the walls be paint-ready?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes — we fully wash adhesive, repair and skim-coat, then prime.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you work in condos?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. We book elevators, protect corridors and follow building rules.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is adhesive removal really necessary?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Absolutely. Skipping the wash causes primer failure and visible flashing.",
                  },
                },
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: PAGE_URL.replace("/services/wallpaper-removal/", "/"),
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Services",
                  item: PAGE_URL.replace("/wallpaper-removal/", ""),
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Wallpaper Removal",
                  item: PAGE_URL,
                },
              ],
            },
          ]),
        }}
      />
    </div>
  );
}
