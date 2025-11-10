import Link from "next/link";
import { CONTACT } from "@/app/config";
export const revalidate = 86400;

export const metadata = {
  title: "Popcorn Ceiling Removal — East Credit, Mississauga | Level 5 Finish",
  description:
    "East Credit homes: dust-controlled popcorn ceiling removal, full skim to Level 5, prime & paint-ready. Clear pricing and tidy daily wrap-ups.",
  alternates: {
    canonical:
      "/service-areas/popcorn-ceiling-removal/mississauga/east-credit/",
  },
  openGraph: {
    title: "Popcorn Ceiling Removal — East Credit, Mississauga",
    description:
      "Residential popcorn/stipple removal with clean workflow and Level 5 smoothness.",
    url: "/service-areas/popcorn-ceiling-removal/mississauga/east-credit/",
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
        areaServed: "East Credit, Mississauga",
        url: "/service-areas/popcorn-ceiling-removal/mississauga/east-credit/",
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
            name: "East Credit",
            item: "/service-areas/popcorn-ceiling-removal/mississauga/east-credit/",
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Do you handle two-storey foyers?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, we set safe access and full protection to keep hallways clean.",
            },
          },
          {
            "@type": "Question",
            name: "How do you price?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Square footage + condition (painted vs unpainted) + access. We confirm on site.",
            },
          },
          {
            "@type": "Question",
            name: "Can you coordinate with a painter?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We leave a primered, paint-ready surface; we can also handle top-coat if requested.",
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
              Popcorn Ceiling Removal — East Credit, Mississauga
            </h1>
            <p className="mt-3 text-gray-700">
              East Credit’s 1990s two-storeys and semis respond well to a
              controlled approach: protect, contain, test, then{" "}
              <strong>Level 5 skim</strong> and stain-block primer for a flat,
              bright result throughout main floors and stair landings.
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
          <h3 className="text-xl font-semibold">Dust-Controlled</h3>
          <p className="text-gray-600 mt-2">
            Containment, vent masking, HEPA sanding, respectful crews.
          </p>
        </div>
        <div className="card p-6 bg-white">
          <h3 className="text-xl font-semibold">Level 5 Smooth</h3>
          <p className="text-gray-600 mt-2">
            No joint shadows; bright, even primered read for paint.
          </p>
        </div>
        <div className="card p-6 bg-white">
          <h3 className="text-xl font-semibold">Predictable Windows</h3>
          <p className="text-gray-600 mt-2">
            Clear start/finish and tidy wrap-ups so the house stays usable.
          </p>
        </div>
      </section>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`East Credit popcorn ceiling removal — project ${i + 1}`}
            className="w-full h-56 object-cover rounded-2xl border shadow"
            data-lightbox="true"
          />
        ))}
      </div>

      <section id="details" className="prose-custom max-w-none mt-10">
        <h2>Local Details for East Credit</h2>
        <p>
          Many East Credit ceilings were sprayed then painted over the years.
          Scraping alone can expose joints; we prep, test, choose the safest
          removal method, then skim to Level 5 and prime so top-coat covers
          beautifully.
        </p>
        <p>
          Vaulted foyers and curved staircases get proper protection and safe
          access. Planning pot lights? We coordinate timing and feather around
          rings for a seamless finish.
        </p>
        <h3>Common searches here</h3>
        <p className="text-gray-700">
          popcorn ceiling removal Mississauga • remove popcorn ceiling • stipple
          ceiling removal • ceiling smoothing/flattening • skim coat ceiling •
          dustless popcorn removal near Heartland • “near me” • cost/price per
          sq.ft. varies by condition.
        </p>
      </section>

      <section id="faq" className="mt-10">
        <h2 className="text-2xl font-semibold">FAQ — East Credit</h2>
        {[
          {
            q: "Can you work while we’re home?",
            a: "Yes—room-by-room staging keeps life moving with minimal disruption.",
          },
          {
            q: "Do you handle small repairs?",
            a: "Yes, minor drywall fixes are included as needed before final skim.",
          },
          {
            q: "What do you need for a quote?",
            a: "Photos and rough square footage; we confirm on site before starting.",
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
            Ready for smooth ceilings in East Credit?
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
