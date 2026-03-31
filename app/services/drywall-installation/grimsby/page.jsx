import Link from "next/link";
import { CONTACT, SITE_URL } from "@/app/config";
import { ServiceCopy } from "@/components/LocalSEOCopy";
import QuoteForm from "@/components/QuoteForm";

export const revalidate = 86400;

const CITY = "Grimsby";
const SERVICE = "Drywall Installation";
const SLUG = "/services/drywall-installation/grimsby/";
const BASE_URL = (SITE_URL || "https://epfproservices.com").replace(/\/$/, "");
const ABSOLUTE_URL = `${BASE_URL}${SLUG}`;
const SERVICES_URL = `${BASE_URL}/services/`;
const INSTALL_URL = `${BASE_URL}/services/drywall-installation/`;
const QUOTE_URL = `${BASE_URL}/quote/`;
const EMAIL = CONTACT?.email || "info@epfproservices.com";
const PHONE_TEXT = CONTACT?.phone || "(647) 923-6784";
const PHONE_HREF = CONTACT?.phoneHref || "tel:+16479236784";
const NEIGHBORHOODS = [
  "Grimsby Beach",
  "Casablanca",
  "Downtown Grimsby",
  "Nelles Estates",
  "Dorchester Estates",
  "Mountainview",
];

const KEYWORDS = [
  "drywall installation Grimsby",
  "drywall installation services Grimsby",
  "drywall installation contractor Grimsby",
  "new drywall installation Grimsby",
  "drywall hanging Grimsby",
  "sheetrock installation Grimsby",
  "drywall finishing Grimsby",
  "drywall taping and mudding Grimsby",
  "level 5 drywall finish Grimsby",
  "basement drywall installation Grimsby",
  "ceiling drywall installation Grimsby",
  "commercial drywall installation Grimsby",
];

const FAQS = [
  {
    q: "Do you install drywall in basements and additions in Grimsby?",
    a: "Yes. We handle new drywall installation in Grimsby basements, additions, ceiling rebuilds, and renovation spaces, including board hanging, taping, sanding, and paint-ready finishing.",
  },
  {
    q: "Can you match smooth ceilings and Level 5 finishes?",
    a: "Yes. When strong daylight, large windows, or flat paint will expose flaws, we scope the finish level properly and recommend Level 5 where it makes sense instead of quoting every room the same way.",
  },
  {
    q: "Do you work on occupied homes near the lake?",
    a: "We do. Occupied Grimsby homes get floor protection, dust control, staged work areas, and daily cleanup so the drywall installation stays organized and the space remains usable.",
  },
  {
    q: "Can you quote from plans or photos?",
    a: "Yes. We can quote drywall installation from plans, room measurements, or site photos. For more complex spaces, we may recommend a quick visit so the finish scope and access details are clear up front.",
  },
];

export const metadata = {
  title: "Drywall Installation Grimsby | Basements, Ceilings & Smooth Finish",
  description:
    "Drywall installation in Grimsby for basements, additions, ceilings, and renovation projects. Clean hanging, taping, sanding, and smooth paint-ready finish options.",
  keywords: KEYWORDS,
  alternates: { canonical: ABSOLUTE_URL },
  openGraph: {
    title: "Drywall Installation Grimsby | EPF Pro Services",
    description:
      "Professional drywall installation services in Grimsby with clean job sites, straight walls, ceiling finishing, and paint-ready results.",
    url: ABSOLUTE_URL,
    type: "website",
    images: [
      {
        url: "/services/drywall/2.webp",
        width: 1200,
        height: 630,
        alt: "Drywall installation in Grimsby",
      },
    ],
  },
  robots: { index: true, follow: true },
};

function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: `${SERVICE} in ${CITY}`,
        description:
          "Drywall installation contractor in Grimsby for basements, additions, ceilings, and renovation spaces with hanging, taping, sanding, and smooth finish options.",
        serviceType: KEYWORDS,
        areaServed: [
          CITY,
          ...NEIGHBORHOODS.map((name) => `${CITY} - ${name}`),
        ],
        provider: {
          "@type": "LocalBusiness",
          name: "EPF Pro Services",
          telephone: PHONE_TEXT,
          email: EMAIL,
          url: `${BASE_URL}/`,
          image: `${BASE_URL}/logo.png`,
          sameAs: ["https://maps.app.goo.gl/QkkUQQPZc6oSyvJy9"],
          priceRange: "$$",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "127",
          },
        },
        offers: {
          "@type": "Offer",
          priceCurrency: "CAD",
          availability: "https://schema.org/InStock",
          url: ABSOLUTE_URL,
        },
        potentialAction: {
          "@type": "RequestQuoteAction",
          target: QUOTE_URL,
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: FAQS.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: { "@type": "Answer", text: faq.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: { "@id": `${BASE_URL}/` },
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Services",
            item: { "@id": SERVICES_URL },
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Drywall Installation",
            item: { "@id": INSTALL_URL },
          },
          {
            "@type": "ListItem",
            position: 4,
            name: CITY,
            item: { "@id": ABSOLUTE_URL },
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
  return (
    <>
      <JsonLd />

      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-950 text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="mb-4 inline-flex rounded-full border border-blue-300/30 bg-blue-400/10 px-4 py-2 text-sm font-semibold text-blue-100">
                Grimsby basements, ceilings, additions, and renovation rebuilds
              </p>
              <h1 className="text-4xl font-bold leading-tight md:text-6xl">
                {SERVICE} {CITY}
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-slate-200">
                We install drywall for Grimsby homes and renovation projects
                that need straight walls, clean staging, and a finish level that
                still looks right under daylight and flat paint.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-slate-200">
                That includes board hanging, taping, mudding, sanding, and
                paint-ready handoff for basements, ceiling rebuilds, additions,
                and full-room rework after demolition or leaks.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href={PHONE_HREF}
                  className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 font-bold text-slate-900 transition hover:bg-slate-100"
                >
                  Call {PHONE_TEXT}
                </a>
                <a
                  href="#quote-form"
                  className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-8 py-4 font-bold text-white transition hover:bg-white/20"
                >
                  Request Drywall Quote
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-white/15 bg-white/10 p-8 backdrop-blur">
              <h2 className="text-2xl font-bold">Common Grimsby install scopes</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {[
                  "Basement drywall installation",
                  "Ceiling drywall replacement",
                  "Addition and renovation boarding",
                  "Taping, sanding, and smooth finishing",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-black/10 p-4 text-sm font-semibold text-slate-100"
                  >
                    {item}
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm leading-relaxed text-slate-300">
                Coverage includes {NEIGHBORHOODS.join(", ")}, plus nearby
                Niagara-area renovation work where a cleaner written scope and
                finish standard matter.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="quote-form" className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-10 text-center">
              <h2 className="text-4xl font-bold text-slate-900">
                Get a Grimsby drywall estimate
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                Send photos, room sizes, and a short note about the work. We
                will price the real install scope, finish level, and scheduling
                instead of leaving those details vague.
              </p>
            </div>
            <QuoteForm />
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl bg-slate-50 p-5">
                <h2 className="text-lg font-bold text-slate-900">
                  Finish level matters
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  We do not quote every room the same way. Open walls, large
                  windows, and modern ceilings often need a smoother finish than
                  a utility space or back room.
                </p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5">
                <h2 className="text-lg font-bold text-slate-900">
                  Better sequencing
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  We board after rough-ins are ready, then move through taping,
                  mudding, sanding, and inspection so later trades inherit a
                  cleaner surface.
                </p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5">
                <h2 className="text-lg font-bold text-slate-900">
                  Clean occupied-home work
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  Dust control, floor protection, and daily cleanup matter even
                  more when the home is in use. That is standard in our drywall
                  install process.
                </p>
              </div>
            </div>

            <div className="mt-10">
              <ServiceCopy service={`${SERVICE} in ${CITY}`} />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <div className="rounded-3xl border border-blue-100 bg-blue-50 p-8">
              <h2 className="text-3xl font-bold text-slate-900">
                Related pages
              </h2>
              <div className="mt-6 grid gap-4 md:grid-cols-3">
                <Link
                  href={INSTALL_URL}
                  className="rounded-2xl bg-white p-5 font-semibold text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  GTA drywall installation hub
                </Link>
                <Link
                  href="/services/drywall-repair/grimsby/"
                  className="rounded-2xl bg-white p-5 font-semibold text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  Grimsby drywall repair
                </Link>
                <Link
                  href="/quote/"
                  className="rounded-2xl bg-white p-5 font-semibold text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  Request a quote
                </Link>
              </div>
            </div>

            <div className="mt-12">
              <h2 className="text-3xl font-bold text-slate-900">FAQ</h2>
              <div className="mt-6 space-y-4">
                {FAQS.map((faq) => (
                  <div
                    key={faq.q}
                    className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
                  >
                    <h3 className="text-lg font-semibold text-slate-900">
                      {faq.q}
                    </h3>
                    <p className="mt-3 leading-relaxed text-slate-600">
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
