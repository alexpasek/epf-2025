import Link from "next/link";
import { CONTACT, SITE_URL } from "@/app/config";
import { cities } from "@/data/cities";
import QuoteForm from "@/components/QuoteForm";

export const revalidate = 86400;

const CITY = "Mississauga";
const SERVICE = "Drywall Contractor";
const SLUG = "/services/drywall-contractor/mississauga/";
const BASE_URL = (SITE_URL || "https://epfproservices.com").replace(/\/$/, "");
const ABSOLUTE_URL = `${BASE_URL}${SLUG}`;
const SERVICES_URL = `${BASE_URL}/services/`;
const MAIN_CONTRACTOR_URL = `${BASE_URL}/services/drywall-contractor/`;
const QUOTE_URL = `${BASE_URL}/quote/`;
const PHONE_TEXT = CONTACT?.phone || "(647) 923-6784";
const PHONE_HREF = CONTACT?.phoneHref || "tel:+16479236784";
const EMAIL = CONTACT?.email || "info@epfproservices.com";
const SERVICE_HUB_ADDRESS = {
  "@type": "PostalAddress",
  streetAddress: "6855 Glen Erin Dr #33",
  addressLocality: "Mississauga",
  addressRegion: "ON",
  postalCode: "L5N 1P6",
  addressCountry: "CA",
};
const PROVIDER_DESCRIPTION =
  "EPF Pro Services is a local drywall contractor in Mississauga handling mixed drywall scopes, finishing, skim coating, repairs, and clean paint-ready handoffs for homes, condos, basements, and commercial interiors.";

const CORE_KEYWORDS = [
  "drywall contractor Mississauga",
  "drywall company Mississauga",
  "drywall services Mississauga",
  "local drywall contractors Mississauga",
  "residential drywall contractors Mississauga",
];

const SUPPORT_KEYWORDS = [
  "drywall service near me Mississauga",
  "drywall contractors in my area Mississauga",
  "residential drywall contractors near me Mississauga",
  "professional drywall contractor Mississauga",
  "drywall company near me Mississauga",
];

const SCOPE_KEYWORDS = [
  "drywall finishing Mississauga",
  "skim coat drywall Mississauga",
  "drywall repair and finishing Mississauga",
  "wall and ceiling drywall services Mississauga",
  "paint-ready drywall contractor Mississauga",
];

const FAQS = [
  {
    q: "What does a drywall contractor in Mississauga usually handle?",
    a: "A Mississauga drywall contractor should handle mixed drywall scopes: repairs, skim coating, crack correction, board replacement, taping, sanding, and getting walls or ceilings ready for paint. Full installation can be part of the work too, but not every local project is a pure install job.",
  },
  {
    q: "How is this different from drywall installation?",
    a: "This page is broader than drywall installation. It is built for homeowners and property managers comparing local drywall contractors for mixed scopes, corrections, repairs, and finish work. If the project is fully new board hanging, our Mississauga drywall installation page is the better fit.",
  },
  {
    q: "Do you work in condos and occupied homes in Mississauga?",
    a: "Yes. We regularly work in condo towers, occupied homes, basements, and commercial interiors in Mississauga with protection, cleanup, scheduling, and building-access planning that fit the site.",
  },
  {
    q: "Can you quote drywall service from photos?",
    a: "Yes. Photos, room dimensions, and a short note on access usually let us sort whether the job is mainly repair, skim coating, finishing, or a broader drywall contractor scope.",
  },
  {
    q: "Should I book a drywall contractor before painting?",
    a: "Yes if the walls or ceilings still need leveling, patch blending, skim work, seam correction, or damaged board replacement. Paint should come after the drywall surface is actually ready.",
  },
];

export const metadata = {
  title: "Drywall Contractor Mississauga | Local Drywall Company & Services",
  description:
    "Drywall contractor Mississauga for mixed wall and ceiling scopes, skim coating, finishing, repairs, and paint-ready drywall services. Local drywall company for homes, condos, basements, and commercial interiors.",
  keywords: [...CORE_KEYWORDS, ...SUPPORT_KEYWORDS, ...SCOPE_KEYWORDS],
  alternates: { canonical: ABSOLUTE_URL },
  openGraph: {
    title: "Drywall Contractor Mississauga | Local Drywall Services",
    description:
      "Local drywall contractors in Mississauga for repairs, skim coating, finishing, and coordinated drywall services across homes, condos, and commercial interiors.",
    url: ABSOLUTE_URL,
    type: "website",
    images: [
      {
        url: "/gallery/drywall-installation/drywall-installation-hero.webp",
        width: 1200,
        height: 630,
        alt: "Drywall contractor working in a Mississauga interior",
      },
    ],
  },
  robots: { index: true, follow: true },
};

function JsonLd() {
  const mississauga = cities.find((city) => city.slug === "mississauga");
  const areaServed = [
    CITY,
    ...(mississauga?.neighborhoods?.map((n) => `${CITY} - ${n.name}`) || []),
  ];

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: `${SERVICE} ${CITY}`,
        description:
          "Local drywall contractor in Mississauga for repairs, skim coating, finishing, board replacement, and paint-ready wall and ceiling services.",
        serviceType: [...CORE_KEYWORDS, ...SUPPORT_KEYWORDS, ...SCOPE_KEYWORDS],
        areaServed,
        provider: {
          "@type": "LocalBusiness",
          name: "EPF Pro Services",
          description: PROVIDER_DESCRIPTION,
          telephone: PHONE_TEXT,
          email: EMAIL,
          url: BASE_URL,
          image: `${BASE_URL}/logo.png`,
          sameAs: ["https://maps.app.goo.gl/QkkUQQPZc6oSyvJy9"],
          priceRange: "$$",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "127",
          },
          address: SERVICE_HUB_ADDRESS,
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
            name: "Drywall Contractor",
            item: { "@id": MAIN_CONTRACTOR_URL },
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
  const mississauga = cities.find((city) => city.slug === "mississauga");
  const neighborhoods = mississauga?.neighborhoods || [];

  const localSignals = [
    "Square One and City Centre condo drywall logistics",
    "Port Credit and Mineola wall and ceiling correction work",
    "Erin Mills and Churchill Meadows residential drywall services",
    "Meadowvale basement and lower-level drywall finishing",
  ];

  const scopeCards = [
    {
      title: "Mixed drywall scopes",
      body:
        "This page is for Mississauga jobs that are not only repair and not only installation. Many projects need corrections, patch blending, skim work, and selective rebuilds in the same quote.",
    },
    {
      title: "Residential drywall contractors",
      body:
        "Homeowners usually need paint-ready walls, repaired ceilings, straight corners, and better handoffs between electrical, plumbing, and finishing trades.",
    },
    {
      title: "Condo and commercial service",
      body:
        "Local drywall contractors in Mississauga also need to work around elevator bookings, hallway protection, quiet hours, and tenant turnover schedules.",
    },
  ];

  const relatedLinks = [
    {
      href: "/services/drywall-contractor/",
      title: "Main drywall contractor page",
      text: "Broader contractor page for GTA-wide service positioning and non-city intent.",
    },
    {
      href: "/services/drywall-installation/mississauga/",
      title: "Drywall installation Mississauga",
      text: "Best follow-up when the main scope is full new board hanging and finishing.",
    },
    {
      href: "/services/drywall-repair/mississauga/",
      title: "Mississauga drywall repair contractor",
      text: "Local repair page for holes, cracks, water damage, and patch-driven wall or ceiling jobs.",
    },
    {
      href: "/blog/drywall-contractors-near-me/",
      title: "Drywall contractors near me",
      text: "Hiring guide for comparing local drywall companies and written scopes.",
    },
  ];

  const decisionPoints = [
    {
      title: "Use this page for broader drywall jobs",
      body:
        "This Mississauga page fits when the room has more than one drywall issue at the same time. It may need repairs, smoother walls, damaged drywall replaced, and enough prep to get the whole space ready for paint.",
    },
    {
      title: "Use installation when the room is mostly open",
      body:
        "If the room has been opened up and needs brand-new drywall across most of the space, the Mississauga drywall installation page is the better fit. That page is more about full hanging, taping, and finishing from the start.",
    },
    {
      title: "Use repair when the job is smaller",
      body:
        "If the job is mainly a few holes, cracks, or one damaged area after a leak or trade access, the Mississauga drywall repair page is usually the better match. This page is for jobs that are broader than that.",
    },
    {
      title: "Why homeowners still search drywall contractor",
      body:
        "A lot of homeowners do not know the exact trade word for what the room needs. They just know the walls still look rough, the patches are obvious, or the room needs one crew to sort everything out before painting starts again.",
    },
  ];

  const mississaugaJobs = [
    {
      title: "Condo unit updates near Square One",
      body:
        "Condo jobs around Square One and City Centre often mix wall repairs, ceiling openings, shared-area protection, elevator timing, and cleanup that has to happen every day. That kind of work usually fits a contractor page better than a small repair page.",
    },
    {
      title: "Basement work in Meadowvale and Erin Mills",
      body:
        "Basements often need more than one type of drywall work at the same time. One area may need new drywall, another may need repairs after utility work, and the rest of the room may need smoothing before the final paint goes on.",
    },
    {
      title: "Kitchen and main-floor renovations",
      body:
        "Kitchen updates and room changes often leave cut-outs, damaged corners, rough patches, and wall sections that need more cleanup before the space looks finished. Homeowners usually search drywall contractor when they want one company to handle that whole picture.",
    },
    {
      title: "Older homes in Port Credit and Mineola",
      body:
        "Older Mississauga homes often come with patch history, rough walls, cracks that have come back, and ceiling lines that still show after painting. Those rooms often need more judgment than a quick patch quote can offer.",
    },
    {
      title: "Water damage follow-through",
      body:
        "After damaged drywall is removed and replaced, the room still needs blending, smoothing, sanding, and cleanup so it does not look like one section was worked on and the rest was ignored. That fuller follow-through is why many leak-related jobs end up here.",
    },
    {
      title: "Rental and office work across the city",
      body:
        "Rental units, offices, and commercial interiors in Mississauga often need several wall and ceiling issues handled at once, with clearer scheduling and cleaner results before the next tenant, employee, or customer uses the space.",
    },
  ];

  const quotePrep = [
    "Wide photos that show the full wall, ceiling, or room, not only the damaged spot.",
    "A short note about what caused the issue, such as plumbing access, electrical work, a leak, or renovation changes.",
    "Approximate room size or the width and height of the area that needs work.",
    "A note about whether the space is occupied, empty, a condo unit, a basement, or part of an active renovation.",
    "Any timing details that matter, such as painters booked, tenants moving in, or a project schedule that needs to keep moving.",
  ];

  return (
    <>
      <JsonLd />

      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <div className="text-white">
              <p className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-200/30 rounded-full px-4 py-2 mb-6 text-sm font-semibold text-blue-100">
                Square One • Port Credit • Erin Mills • Meadowvale
              </p>

              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Drywall Contractor Mississauga
              </h1>

              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                Local <strong>drywall contractor Mississauga</strong> service
                for homes, condos, basements, and commercial interiors that need
                more than a simple patch but are not purely full installation
                either.
              </p>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                If the scope is mainly holes, cracks, ceiling stains, or trade
                cut-outs, our{" "}
                <Link
                  href="/services/drywall-repair/mississauga/"
                  className="font-semibold underline underline-offset-2"
                >
                  Mississauga drywall repair contractor
                </Link>{" "}
                page is the more specific starting point.
              </p>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                For the broader GTA hub and non-city intent, start with our{" "}
                <Link
                  href="/services/drywall-contractor/"
                  className="font-semibold underline underline-offset-2"
                >
                  drywall contractor
                </Link>{" "}
                page. This Mississauga page narrows the topic around local
                drywall services, neighbourhood signals, condo access, and mixed
                project scope.
              </p>
              <p className="text-sm text-blue-100/90 mb-8">
                If the job is entirely new board hanging, see{" "}
                <Link
                  href="/services/drywall-installation/mississauga/"
                  className="font-semibold underline underline-offset-2"
                >
                  drywall installation Mississauga
                </Link>
                . If the scope is mostly holes, cracks, or water damage, see{" "}
                <Link
                  href="/services/drywall-repair/mississauga/"
                  className="font-semibold underline underline-offset-2"
                >
                  drywall repair Mississauga
                </Link>
                .
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {[
                  ["🏠", "Homes & Basements"],
                  ["🏢", "Condos"],
                  ["🛠️", "Repair + Finish"],
                  ["✨", "Paint-Ready"],
                ].map(([icon, label]) => (
                  <div
                    key={label}
                    className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-4 text-center"
                  >
                    <div className="text-3xl mb-2">{icon}</div>
                    <div className="text-sm font-semibold">{label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={PHONE_HREF}
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 transition shadow-lg hover:shadow-2xl"
                >
                  📞 {PHONE_TEXT}
                </a>
                <a
                  href="#quote-form"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-full bg-white text-gray-900 hover:bg-gray-100 transition shadow-lg hover:shadow-2xl"
                >
                  Request Drywall Quote
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20">
                <img
                  src="/gallery/drywall-installation/drywall-installation-hero.webp"
                  alt="Mississauga drywall contractor handling wall and ceiling work"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <p className="text-white font-semibold text-lg">
                    Mixed drywall scopes across Mississauga
                  </p>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 max-w-[220px]">
                <div className="text-4xl font-bold text-blue-600 mb-1">
                  4.9
                </div>
                <div className="text-sm text-gray-600 font-semibold">
                  Local drywall company rating
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 pb-12 relative z-10">
          <div className="max-w-7xl mx-auto">
            <p className="text-center text-gray-400 mb-4 text-sm font-semibold">
              SERVING ALL {CITY.toUpperCase()} NEIGHBOURHOODS
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {neighborhoods.slice(0, 12).map((n) => (
                <span
                  key={n.slug}
                  className="px-4 py-2 bg-white/10 backdrop-blur border border-white/20 rounded-full text-white text-sm font-semibold"
                >
                  {n.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="quote-form"
        className="py-20 bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Get Your Mississauga Drywall Quote
              </h2>
              <p className="text-xl text-gray-600">
                Send photos and room notes so we can sort the job into repair,
                skim coating, mixed drywall service, or full installation.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why people search for a drywall contractor in Mississauga
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Most projects here sit between a small repair and a full new build.
              That is exactly where a local drywall company adds value.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {scopeCards.map((card) => (
              <article
                key={card.title}
                className="rounded-3xl border-2 border-gray-100 bg-gradient-to-br from-gray-50 to-white p-8 shadow-lg"
              >
                <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
                <p className="text-gray-600 leading-relaxed">{card.body}</p>
              </article>
            ))}
          </div>

          <div className="mt-12 rounded-3xl border-2 border-blue-100 bg-blue-50 p-8">
            <h3 className="text-2xl font-bold text-gray-900">
              Main authority page for this topic
            </h3>
            <p className="mt-4 text-gray-700 leading-relaxed">
              This local page supports our main{" "}
              <Link
                href="/services/drywall-contractor/"
                className="text-blue-600 font-semibold hover:underline"
              >
                drywall contractor
              </Link>{" "}
              page. If you are comparing contractor scope at the GTA level or
              looking for the primary service page we want to rank and convert,
              that is the main destination.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-[1.1fr,0.9fr] gap-8 items-start">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <p className="text-sm uppercase tracking-widest text-blue-600 font-bold mb-3">
                Local Scope
              </p>
              <h2 className="text-4xl font-bold mb-4">
                What our Mississauga drywall services usually include
              </h2>
              <p className="text-gray-700 leading-relaxed">
                A typical Mississauga drywall contractor scope can include crack
                correction, patch blending, ceiling cut-out rebuilds, skim
                coating, board replacement, corner correction, sanding, and the
                final prep needed before priming or painting.
              </p>
              <p className="mt-4 text-gray-700 leading-relaxed">
                We see this most often after plumbing access, electrical changes,
                renovation openings, water incidents, condo turnover work, and
                older walls that need more leveling before they can look right
                under fresh paint.
              </p>
              <p className="mt-4 text-gray-700 leading-relaxed">
                If the project has open framing everywhere and the main work is
                hanging brand-new sheets, the more relevant page is{" "}
                <Link
                  href="/services/drywall-installation/mississauga/"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  drywall installation Mississauga
                </Link>
                . If the issue is tightly repair-focused, use{" "}
                <Link
                  href="/services/drywall-repair/mississauga/"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  drywall repair Mississauga
                </Link>
                .
              </p>
            </div>

            <div className="rounded-3xl border border-blue-100 bg-white p-8 shadow-sm">
              <p className="text-sm uppercase tracking-widest text-blue-600 font-bold mb-3">
                Mississauga Signals
              </p>
              <h2 className="text-3xl font-bold mb-4">
                Local drywall contractor patterns we see often
              </h2>
              <ul className="space-y-3 text-gray-700">
                {localSignals.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 grid gap-3">
                {[...CORE_KEYWORDS, ...SUPPORT_KEYWORDS].map((kw) => (
                  <div
                    key={kw}
                    className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700"
                  >
                    {kw}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-widest text-blue-600 font-bold mb-3">
              Better Context
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              How to know this Mississauga page matches the job
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Many people land here before they know whether they really need
              repair, installation, wall smoothing, or a mix of everything.
              This section helps sort that out faster.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {decisionPoints.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-gray-200 bg-slate-50 p-7 shadow-sm"
              >
                <h3 className="text-2xl font-bold text-gray-900">{item.title}</h3>
                <p className="mt-3 text-gray-700 leading-relaxed">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-widest text-blue-600 font-bold mb-3">
              Real Jobs
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Common Mississauga jobs that belong on this page
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These are the kinds of local rooms and projects that usually make
              homeowners search for a drywall contractor instead of a narrower
              service term.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {mississaugaJobs.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm"
              >
                <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                <p className="mt-3 text-gray-700 leading-relaxed">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="rounded-3xl border border-blue-100 bg-blue-50 p-8 md:p-10">
            <p className="text-sm uppercase tracking-widest text-blue-600 font-bold mb-3">
              Quote Prep
            </p>
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              What to send for a better Mississauga drywall quote
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Good quote requests give more context than one tight photo of the
              damage. The more complete the room information is, the easier it
              is to tell whether the work belongs under repair, installation,
              or a broader drywall contractor job.
            </p>
            <ul className="mt-6 grid gap-4 md:grid-cols-2">
              {quotePrep.map((item) => (
                <li
                  key={item}
                  className="rounded-2xl border border-blue-200 bg-white px-5 py-4 text-gray-700"
                >
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-gray-700 leading-relaxed">
              Better quote requests usually lead to better answers. They help
              us explain what the room probably needs, whether some drywall
              should be replaced instead of repaired, how much smoothing is
              likely, and whether the project should be treated as a small
              repair or as a broader drywall job across the room.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-widest text-blue-600 font-bold mb-3">
              Neighbourhood Coverage
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Drywall contractor service across Mississauga
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Local drywall contractors for City Centre, Port Credit,
              Streetsville, Erin Mills, Meadowvale, Clarkson, Cooksville, and
              surrounding neighbourhoods.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {neighborhoods.map((n) => (
              <div
                key={n.slug}
                className="rounded-2xl border border-gray-200 bg-white p-5 text-center shadow-sm"
              >
                <p className="font-semibold text-gray-900">{n.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-widest text-blue-600 font-bold mb-3">
              Cluster Support
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Related drywall pages that support this topic
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              This city page sits inside a broader drywall contractor cluster,
              with links to the main service page and the closest Mississauga
              subtopics.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {relatedLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-lg transition"
              >
                <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                  {item.text}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white shadow-xl">
            <div className="grid gap-6 lg:grid-cols-[1fr,auto] lg:items-center">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-blue-100">
                  Mississauga Drywall Company
                </p>
                <h2 className="mt-2 text-3xl font-bold">
                  Need a local drywall contractor for a mixed scope?
                </h2>
                <p className="mt-3 text-blue-100">
                  Send the room photos, rough dimensions, and whether the walls
                  are open, damaged, uneven, or already partly repaired.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="/quote/"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 font-semibold text-blue-600 shadow-lg hover:bg-blue-50"
                >
                  Get my quote
                </a>
                <a
                  href={PHONE_HREF}
                  className="inline-flex items-center justify-center rounded-full border border-white px-6 py-3 font-semibold text-white hover:bg-white/10"
                >
                  Call {PHONE_TEXT}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <p className="text-sm uppercase tracking-widest text-blue-600 font-bold mb-3">
            FAQ
          </p>
          <h2 className="text-4xl font-bold mb-8">
            Drywall contractor Mississauga FAQs
          </h2>
          <div className="space-y-4">
            {FAQS.map((item) => (
              <details
                key={item.q}
                className="rounded-2xl border border-gray-200 bg-slate-50 p-5"
              >
                <summary className="cursor-pointer font-semibold text-gray-900">
                  {item.q}
                </summary>
                <p className="mt-3 text-gray-700">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
