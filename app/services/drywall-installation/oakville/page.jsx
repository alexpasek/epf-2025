import Link from "next/link";
import { CONTACT, SITE_URL } from "@/app/config";
import { ServiceCopy } from "@/components/LocalSEOCopy";
import { cities } from "@/data/cities";
import QuoteForm from "@/components/QuoteForm";

export const revalidate = 86400;

const CITY = "Oakville";
const SERVICE = "Drywall Installation";
const SLUG = "/services/drywall-installation/oakville/";
const BASE_URL = (SITE_URL || "https://epfproservices.com").replace(/\/$/, "");
const ABSOLUTE_URL = `${BASE_URL}${SLUG}`;
const SERVICES_URL = `${BASE_URL}/services/`;
const INSTALL_URL = `${BASE_URL}/services/drywall-installation/`;
const QUOTE_URL = `${BASE_URL}/quote/`;
const EMAIL = CONTACT?.email || "info@epfproservices.com";
const PHONE_TEXT = CONTACT?.phone || "(647) 923-6784";
const PHONE_HREF = CONTACT?.phoneHref || "tel:+16479236784";
const oakville = cities.find((city) => city.slug === "oakville");
const NEIGHBORHOODS = oakville?.neighborhoods?.map((n) => n.name) || [
  "Downtown Oakville",
  "Old Oakville",
  "Bronte",
  "Glen Abbey",
  "River Oaks",
  "West Oak Trails",
];

const KEYWORDS = [
  "drywall installation Oakville",
  "drywall installation services Oakville",
  "drywall installation contractor Oakville",
  "new drywall installation Oakville",
  "drywall hanging Oakville",
  "sheetrock installation Oakville",
  "drywall finishing Oakville",
  "drywall taping and mudding Oakville",
  "level 5 drywall finish Oakville",
  "basement drywall installation Oakville",
  "ceiling drywall installation Oakville",
  "commercial drywall installation Oakville",
  "condo drywall installation Oakville",
];

const FAQS = [
  {
    q: "Do you install drywall in Oakville basements and additions?",
    a: "Yes. We install drywall in Oakville basements, additions, remodels, ceiling rebuilds, and full-room renovation scopes, including hanging, taping, sanding, and paint-ready finishing.",
  },
  {
    q: "Can you deliver a smooth finish for critical light and flat paint?",
    a: "Yes. Oakville homes with large windows, pot lights, and cleaner modern interiors often need a higher finish standard. We scope Level 4 versus Level 5 based on the actual room instead of using one blanket spec.",
  },
  {
    q: "Do you work in occupied homes and condos?",
    a: "We do. Occupied Oakville homes and condo units get protection, dust control, access planning, and daily cleanup so the install moves forward without turning the whole property into a work zone.",
  },
  {
    q: "Can you quote from plans or site photos?",
    a: "Yes. We can quote from plans, measurements, or site photos, and for more detailed projects we can confirm finish level, access, and sequencing on site before the work starts.",
  },
];

export const metadata = {
  title: "Drywall Installation Oakville | Basements, Ceilings & Level 5 Finish",
  description:
    "Drywall installation in Oakville for basements, additions, ceilings, condos, and renovation projects. Clean hanging, taping, sanding, and smooth finish options.",
  keywords: KEYWORDS,
  alternates: { canonical: ABSOLUTE_URL },
  openGraph: {
    title: "Drywall Installation Oakville | EPF Pro Services",
    description:
      "Professional drywall installation services in Oakville with clean staging, straight walls, ceiling finishing, and paint-ready results.",
    url: ABSOLUTE_URL,
    type: "website",
    images: [
      {
        url: "/services/drywall/4.webp",
        width: 1200,
        height: 630,
        alt: "Drywall installation in Oakville",
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
          "Drywall installation contractor in Oakville for basements, additions, ceilings, condos, and renovation spaces with hanging, taping, sanding, and smooth finish options.",
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

      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="mb-4 inline-flex rounded-full border border-cyan-300/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-100">
                Oakville basements, custom homes, condo rebuilds, and ceiling work
              </p>
              <h1 className="text-4xl font-bold leading-tight md:text-6xl">
                {SERVICE} {CITY}
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-slate-200">
                We install drywall in Oakville for renovation projects that need
                clean staging, tight board lines, and a finish that still reads
                straight under daylight, large windows, and flat paint.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-slate-200">
                That includes basements, additions, room reconfigurations,
                ceiling rebuilds, condo work, and replacement after demolition
                or leaks, with the finish level scoped to the room instead of
                guessed later.
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
              <h2 className="text-2xl font-bold">Typical Oakville install work</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {[
                  "Basement drywall installation",
                  "Smooth ceiling rebuilds",
                  "Condo and occupied-home staging",
                  "Level 4 and Level 5 finishing",
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
                Coverage includes {NEIGHBORHOODS.slice(0, 8).join(", ")}, and
                surrounding Oakville neighbourhoods where cleaner finishing and
                better job-site control matter.
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
                Get an Oakville drywall estimate
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                Send photos, plans, or room sizes and we will quote the actual
                install scope, finish level, and sequencing your project needs.
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
                  Better finish planning
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  Large windows and cleaner interiors expose waves fast. We
                  price the finish level properly for the room instead of
                  under-scoping it and leaving the surface to the painter.
                </p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5">
                <h2 className="text-lg font-bold text-slate-900">
                  Cleaner job sites
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  Occupied homes and condo projects need better protection,
                  access planning, and cleanup. That is part of the install
                  sequence, not an extra afterthought.
                </p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5">
                <h2 className="text-lg font-bold text-slate-900">
                  Straight handoff to paint
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  We move from board hanging through taping, sanding, and final
                  checks so the next trade inherits a flatter, more predictable
                  surface.
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
            <div className="rounded-3xl border border-cyan-100 bg-cyan-50 p-8">
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
                  href="/services/drywall-repair/oakville/"
                  className="rounded-2xl bg-white p-5 font-semibold text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  Oakville drywall repair
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
