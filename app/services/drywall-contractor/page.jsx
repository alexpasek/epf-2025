import Link from "next/link";
import { CONTACT, SITE_URL } from "@/app/config";
import { cities } from "@/data/cities";
import QuoteForm from "@/components/QuoteForm";

export const revalidate = 86400;

const PAGE_URL = "/services/drywall-contractor/";
const ABSOLUTE_URL = `${
  SITE_URL?.replace(/\/$/, "") || "https://epfproservices.com"
}${PAGE_URL}`;

const PHONE_TEXT = CONTACT?.phone || "(647) 923-6784";
const PHONE_HREF = CONTACT?.phoneHref || "tel:+16479236784";
const PHONE_ARIA = `Call EPF Pro Services at ${PHONE_TEXT}`;
const EMAIL = CONTACT?.email || "info@epfproservices.com";
const PRIMARY_ADDRESS = {
  "@type": "PostalAddress",
  streetAddress: "6855 Glen Erin Dr #33",
  addressLocality: "Mississauga",
  addressRegion: "ON",
  postalCode: "L5N 1P6",
  addressCountry: "CA",
};
const PROVIDER_DESCRIPTION =
  "EPF Pro Services is a local drywall contractor serving the GTA with drywall repair, finishing, skim coating, wall correction, and coordinated drywall services for homes, condos, basements, and commercial interiors.";

const CORE_KEYWORDS = [
  "drywall contractor",
  "drywall company",
  "drywall services",
  "drywall service near me",
  "local drywall contractors",
  "drywall contractors in my area",
  "residential drywall contractors",
  "residential drywall contractors near me",
];

const companyKeywords = [
  "professional drywall contractor",
  "drywall company near me",
  "drywall contractors near me",
  "trusted drywall company",
  "experienced drywall contractor",
];

const serviceKeywords = [
  "wall and ceiling drywall services",
  "drywall finishing services",
  "skim coat drywall service",
  "paint-ready drywall service",
  "drywall repair and finishing",
];

const repairKeywords = [
  "drywall repair contractor",
  "wall repair contractor",
  "drywall patch contractor",
  "water damage drywall contractor",
  "ceiling drywall contractor",
];

const audienceKeywords = [
  "residential drywall contractor",
  "home drywall contractor",
  "commercial drywall contractor",
  "condo drywall contractor",
  "basement drywall contractor",
  "drywall contractor for renovations",
];

const localKeywords = [
  "drywall contractor Mississauga",
  "drywall contractor Toronto",
  "drywall contractor Oakville",
  "drywall contractor Burlington",
  "drywall contractor Hamilton",
];

export const metadata = {
  title:
    "Drywall Contractor Services | Local Drywall Company Across the GTA",
  description:
    "Local drywall contractor and drywall company for repairs, finishing, skim coating, and coordinated drywall services across the GTA. Homes, condos, basements, and commercial interiors.",
  keywords: [
    ...CORE_KEYWORDS,
    ...companyKeywords,
    ...serviceKeywords,
    ...repairKeywords,
    ...audienceKeywords,
    ...localKeywords,
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title:
      "Local Drywall Contractor Services | GTA Homes, Condos & Commercial",
    description:
      "Drywall company and local drywall contractors for repairs, finishing, skim coating, and coordinated wall and ceiling services across the GTA.",
    url: PAGE_URL,
    type: "website",
    images: [
      {
        url: "/gallery/drywall-installation/drywall-installation-hero.webp",
        width: 1200,
        height: 630,
        alt: "Professional drywall contractor service in the GTA",
      },
    ],
  },
  robots: { index: true, follow: true },
};

function JsonLd() {
  const areaServed = cities.map((c) => c.name);
  const serviceTypes = [
    ...CORE_KEYWORDS,
    ...companyKeywords,
    ...serviceKeywords,
    ...repairKeywords,
    ...audienceKeywords,
    ...localKeywords,
  ];

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: "Local Drywall Contractor Services",
        description:
          "Drywall contractor services for repair, skim coating, finishing, and coordinated wall and ceiling work across the GTA.",
        serviceType: serviceTypes,
        areaServed,
        provider: {
          "@type": "LocalBusiness",
          name: "EPF Pro Services",
          description: PROVIDER_DESCRIPTION,
          telephone: PHONE_TEXT,
          email: EMAIL,
          url: SITE_URL,
          image: `${SITE_URL || "https://epfproservices.com"}/logo.png`,
          sameAs: ["https://maps.app.goo.gl/QkkUQQPZc6oSyvJy9"],
          priceRange: "$$",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "127",
          },
          address: PRIMARY_ADDRESS,
        },
        offers: {
          "@type": "Offer",
          priceCurrency: "CAD",
          availability: "https://schema.org/InStock",
          url: ABSOLUTE_URL,
        },
        potentialAction: {
          "@type": "RequestQuoteAction",
          target: `${ABSOLUTE_URL}#quote`,
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: faqItems.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: { "@id": SITE_URL || "https://epfproservices.com" },
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Services",
            item: {
              "@id": `${SITE_URL || "https://epfproservices.com"}/services/`,
            },
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Drywall Contractor",
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

const faqItems = [
  {
    q: "What does a drywall contractor handle?",
    a: "A drywall contractor should handle drywall repairs, skim coating, finishing, wall corrections, ceiling corrections, and paint-ready surface prep. Some also handle full installation scopes when needed.",
  },
  {
    q: "Do you handle both drywall installation and repair?",
    a: "Yes. We handle repair and finishing work, and we also take on larger rebuild or installation scopes when the project needs one contractor to manage the drywall handoff properly.",
  },
  {
    q: "Do you work in condos and commercial spaces?",
    a: "Yes. We regularly work in condos, tenant spaces, offices, and occupied homes with COI, WSIB, site protection, and scheduling that fits building rules.",
  },
  {
    q: "How do I know if I need a drywall contractor or just a painter?",
    a: "If the surface needs patching, crack correction, board replacement, skim coating, or leveling before paint, you need a drywall contractor first. Paint does not fix poor substrate conditions.",
  },
  {
    q: "Can you quote from photos?",
    a: "Yes. For many jobs we can review photos, room sizes, and notes on access to provide a same-day scope range. For larger or more technical projects we may recommend a site visit.",
  },
];

const serviceCards = [
  {
    title: "Local drywall services",
    icon: "🏠",
    body:
      "This page is built for homeowners and managers comparing drywall companies, drywall services, and local drywall contractors. The focus is clean wall and ceiling outcomes, not vague handyman patching.",
    keywords: companyKeywords,
    border: "border-blue-100",
    bg: "from-blue-50 via-white to-blue-50/30",
    dot: "text-blue-500",
  },
  {
    title: "Repair & finishing",
    icon: "🛠️",
    body:
      "Trade cut-outs, plumbing access, water damage, holes, seam cracks, and failed patches need proper backing, repair strategy, and a surface that will not flash after paint.",
    keywords: repairKeywords,
    border: "border-green-100",
    bg: "from-green-50 via-white to-green-50/30",
    dot: "text-green-500",
  },
  {
    title: "Residential & paint-ready",
    icon: "✨",
    body:
      "Residential drywall contractors are judged by the final finish. We sand under critical light, skim where needed, and deliver walls and ceilings that are ready for paint instead of obvious patch lines.",
    keywords: serviceKeywords,
    border: "border-amber-100",
    bg: "from-amber-50 via-white to-amber-50/30",
    dot: "text-amber-500",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Scope review",
    body:
      "We review photos, plans, room sizes, substrate conditions, access, and whether the job is mainly repair, finishing, rebuild work, or a mixed drywall scope.",
  },
  {
    step: "02",
    title: "Protection & prep",
    body:
      "Occupied homes, condos, and commercial interiors get floor protection, staged work zones, and dust-control planning before work starts.",
  },
  {
    step: "03",
    title: "Repair, rebuild, or prep",
    body:
      "Crews replace damaged sections, reinforce weak areas, correct transitions, and prep walls and ceilings properly before the finish stage begins.",
  },
  {
    step: "04",
    title: "Finish to spec",
    body:
      "We tape, skim, sand, and inspect the surface under realistic light so walls are ready for paint, wallpaper, or final trim work.",
  },
  {
    step: "05",
    title: "Turnover & next trade",
    body:
      "The final handoff is clean, documented, and ready for painting, trim, flooring punch-outs, or occupancy scheduling.",
  },
];

const gallery = [
  {
    src: "/gallery/drywall-installation/drywall-installation-hero.webp",
    alt: "Drywall contractor hanging and aligning new wall board",
    caption:
      "New drywall layout, fastening, and seam planning before taping and finishing.",
  },
  {
    src: "/gallery/drywall-repair/drywall-repair-service00002.webp",
    alt: "Drywall contractor replacing damaged ceiling sections",
    caption:
      "Replacement work after damage with clean cut-outs, new board, and a paint-ready finish plan.",
  },
  {
    src: "/gallery/drywall-repair/drywall-repair-service00004.webp",
    alt: "Smooth drywall finish delivered by professional drywall contractor",
    caption:
      "Flat wall finish after patching, skim coating, sanding, and inspection under light.",
  },
  {
    src: "/gallery/drywall-repair/drywall-repair-service00007.webp",
    alt: "Drywall sanding and prep before final paint handoff",
    caption:
      "Final surface prep so painters are not left correcting drywall problems later.",
  },
];

const projectScopes = [
  {
    title: "Basements & lower levels",
    body:
      "Full basement packages, soffits, bulkheads, stair walls, and utility-room tie-ins with clean transitions around framing and mechanicals.",
  },
  {
    title: "Main-floor renovations",
    body:
      "Openings from electrical, plumbing, kitchen changes, and wall reconfiguration that need more than a cosmetic patch job.",
  },
  {
    title: "Condos & occupied spaces",
    body:
      "Elevator bookings, quiet-hour scheduling, site protection, and tighter staging so drywall work fits the building instead of disrupting it.",
  },
  {
    title: "Commercial interiors",
    body:
      "Office fit-outs, retail walls, repairs between tenants, and punch-list work that must turn over cleanly and on schedule.",
  },
];

const contextPoints = [
  {
    title: "More than a small patch",
    body:
      "People usually land on a drywall contractor page when the job is bigger than one cracked seam or one small hole. The room may need several repairs, smoother walls, or damaged drywall replaced before paint can start.",
  },
  {
    title: "One crew, not three",
    body:
      "A lot of drywall jobs are mixed. Part of the space may need repair, part may need new drywall, and part may just need cleanup and smoothing. This page is for that in-between search intent.",
  },
  {
    title: "Cleaner finish before paint",
    body:
      "Most homeowners are not really buying mudding or sanding. They are trying to get the walls and ceilings looking right before paint, trim, cabinets, or move-in.",
  },
];

const fitCards = [
  {
    title: "Use This Page When",
    body:
      "The project mixes repairs, wall smoothing, damaged drywall replacement, or a few different drywall problems in one space.",
    href: "/services/drywall-contractor/",
    cta: "Drywall contractor overview",
  },
  {
    title: "Choose Installation Instead",
    body:
      "Use the installation page when the room is mostly open and needs brand-new drywall hung, taped, and finished from the start.",
    href: "/services/drywall-installation/",
    cta: "Drywall installation",
  },
  {
    title: "Choose Repair Instead",
    body:
      "Use the repair page when the job is mostly holes, cracks, water damage, or smaller repairs rather than a broader drywall project.",
    href: "/services/drywall-repair/",
    cta: "Drywall repair",
  },
  {
    title: "Choose A City Page",
    body:
      "Use a city page when the location matters and you want local context for Mississauga, Oakville, Burlington, Hamilton, Grimsby, or Toronto.",
    href: "/services/drywall-contractor/mississauga/",
    cta: "City contractor pages",
  },
];

const buyerQuestions = [
  "Is this still a repair, or is it now a bigger drywall job?",
  "Can one crew fix the damaged areas and get the room ready for paint?",
  "Do I need a drywall contractor before I call painters back in?",
  "Is this the kind of project where a handyman quote leaves too much out?",
];

const realWorldJobs = [
  {
    title: "Basement finishing after framing and rough-ins",
    body:
      "A basement may need brand-new drywall in one area, patching where utility changes were made in another, and smoother walls before painting through the rest. That kind of mixed basement work belongs on a drywall contractor page because the job is not only new installation and not only repair.",
  },
  {
    title: "Kitchen or main-floor renovation cleanup",
    body:
      "After cabinets come out and plumbing, electrical, or venting changes are done, the walls are often left with openings, uneven patches, and damaged corners. The job is usually bigger than a painter wants and broader than a small repair page suggests. That is where a drywall contractor is the right fit.",
  },
  {
    title: "Condo updates with building rules",
    body:
      "A condo job may include wall repairs, ceiling cut-outs, hallway protection, elevator timing, and cleanup that has to happen every day. People searching drywall contractor are often trying to find a crew that can handle both the drywall work and the realities of the building.",
  },
  {
    title: "Older homes with repeated patch history",
    body:
      "In older homes, one crack is rarely just one crack. The room may have old patch lines, rough corners, uneven surfaces, and a few places where the drywall or plaster has to be cleaned up before paint will look right. That is not a one-spot repair anymore. It needs broader drywall judgment.",
  },
  {
    title: "Water damage with follow-up wall cleanup",
    body:
      "Once the wet drywall is removed, dried, and replaced, the room still has to be blended back into the rest of the wall or ceiling. Homeowners often land on this page because they need somebody to carry the job through from damaged sections to a clean finish, not stop halfway through.",
  },
  {
    title: "Rental, office, and turnover work",
    body:
      "Rental units, offices, and commercial interiors often need more than cosmetic patching. There may be several damaged areas, schedule pressure, and a need to leave the space looking clean and consistent before the next tenant, employee, or client walks in.",
  },
];

const cityLinks = [
  "/services/drywall-contractor/mississauga/",
  "/services/drywall-contractor/oakville/",
  "/services/drywall-contractor/burlington/",
  "/services/drywall-contractor/hamilton/",
  "/services/drywall-contractor/grimsby/",
  "/services/drywall-contractor/toronto/",
  "/services/drywall-repair/mississauga/",
  "/services/drywall-repair/oakville/",
  "/services/drywall-repair/burlington/",
  "/services/drywall-repair/hamilton/",
  "/services/drywall-installation/mississauga/",
  "/services/drywall-installation/burlington/",
];

const cityLabels = new Map([
  ["/services/drywall-contractor/mississauga/", "Mississauga drywall contractor"],
  ["/services/drywall-contractor/oakville/", "Oakville drywall contractor"],
  ["/services/drywall-contractor/burlington/", "Burlington drywall contractor"],
  ["/services/drywall-contractor/hamilton/", "Hamilton drywall contractor"],
  ["/services/drywall-contractor/grimsby/", "Grimsby drywall contractor"],
  ["/services/drywall-contractor/toronto/", "Toronto drywall contractor"],
  ["/services/drywall-repair/mississauga/", "Mississauga drywall repair"],
  ["/services/drywall-repair/oakville/", "Oakville drywall repair"],
  ["/services/drywall-repair/burlington/", "Burlington drywall repair"],
  ["/services/drywall-repair/hamilton/", "Hamilton drywall repair"],
  ["/services/drywall-installation/mississauga/", "Mississauga drywall installation"],
  ["/services/drywall-installation/burlington/", "Burlington drywall installation"],
]);

export default function Page() {
  return (
    <div className="pt-0 pb-10">
      <JsonLd />
      <div className="space-y-12">
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
          <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-5"></div>

          <div className="relative container-x py-12 md:py-16">
            <div className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr] items-center">
              <div className="space-y-6">
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-bold">
                    <span>📍</span> GTA & Golden Horseshoe
                  </div>

                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
                    Professional{" "}
                    <span className="text-blue-600">Drywall Contractor</span>{" "}
                    Services
                  </h1>

                  <p className="text-xl md:text-2xl text-gray-700 font-medium leading-relaxed">
                    Local <strong>drywall contractor services</strong> for wall
                    repair, skim coating, finishing, and project-ready drywall
                    handoffs
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <span className="text-xl">🏗️</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">
                        Local Drywall Company
                      </h3>
                      <p className="text-sm text-gray-600">
                        One drywall company for walls, ceilings, repairs, and
                        finish prep across GTA homes and condos
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                    <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <span className="text-xl">🔧</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">
                        Repair Scopes
                      </h3>
                      <p className="text-sm text-gray-600">
                        Trade cut-outs, cracks, water damage, and patch work
                        that disappears after paint
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                    <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                      <span className="text-xl">✨</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">
                        Skim & Finish Work
                      </h3>
                      <p className="text-sm text-gray-600">
                        Skim coating, sanding, and paint-ready final surfaces
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                    <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                      <span className="text-xl">📋</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">
                        Residential Focus
                      </h3>
                      <p className="text-sm text-gray-600">
                        Residential drywall contractors near you for lived-in
                        spaces, basements, condos, and staged turnovers
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 items-center pt-3 border-t border-gray-200">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">✓</span>
                    <span className="text-sm font-semibold text-gray-700">
                      Level 5 Finish Standard
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">✓</span>
                    <span className="text-sm font-semibold text-gray-700">
                      WSIB + $5M Liability
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">✓</span>
                    <span className="text-sm font-semibold text-gray-700">
                      Same-Day Scope Review
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 pt-1">
                  <a
                    href={PHONE_HREF}
                    aria-label={PHONE_ARIA}
                    className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-lg font-bold text-white shadow-lg hover:bg-blue-700 transition-all hover:scale-105"
                  >
                    <span className="text-xl">📞</span> {PHONE_TEXT}
                  </a>
                  <a
                    href="/quote/"
                    className="inline-flex items-center gap-2 rounded-full border-2 border-blue-600 bg-white px-8 py-4 text-lg font-bold text-blue-600 shadow-lg hover:bg-blue-50 transition-all"
                  >
                    <span className="text-xl">📋</span> Free Quote
                  </a>
                </div>
                <p className="text-sm text-gray-500">
                  Need full new board hanging and finish scope? See our{" "}
                  <Link
                    href="/services/drywall-installation/"
                    className="text-blue-600 font-semibold hover:underline"
                  >
                    drywall installation
                  </Link>{" "}
                  page for dedicated install details. That page goes deeper on
                  framing coordination, ceilings, additions, and larger install
                  scopes than this broader drywall contractor overview.
                </p>
              </div>

              <div className="relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                  <img
                    src="/gallery/drywall-installation/drywall-installation-hero.webp"
                    alt="Professional drywall contractor handling installation and finishing in GTA home"
                    className="w-full h-[500px] object-cover"
                    loading="eager"
                    fetchPriority="high"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent p-6">
                    <div className="text-white">
                      <p className="text-sm font-semibold mb-1 text-blue-300">
                        HOMES, CONDOS, BASEMENTS & COMMERCIAL
                      </p>
                      <p className="text-2xl font-bold">
                        Local drywall contractors for clean wall and ceiling handoffs
                      </p>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5 border-2 border-blue-100">
                  <div className="flex items-center gap-3">
                    <div className="text-4xl">⭐</div>
                    <div>
                      <p className="text-3xl font-bold text-gray-900">4.9</p>
                      <p className="text-sm text-gray-600 font-semibold">
                        Google Rating
                      </p>
                    </div>
                  </div>
                </div>

                <div className="absolute -top-6 -right-6 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl shadow-xl p-5 border-2 border-blue-500">
                  <div className="text-white text-center">
                    <p className="text-3xl font-bold">Level 5</p>
                    <p className="text-sm font-semibold">
                      Finish
                      <br />
                      Available
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="container-x space-y-16">
          <section className="grid gap-6 lg:grid-cols-3">
            {serviceCards.map((card) => (
              <div
                key={card.title}
                className={`rounded-3xl border-2 ${card.border} bg-gradient-to-br ${card.bg} p-8 shadow-lg`}
              >
                <div className="text-4xl mb-4">{card.icon}</div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  {card.title}
                </h2>
                <p className="text-gray-700 leading-relaxed">{card.body}</p>
                <ul className="mt-4 space-y-2 text-sm text-gray-600">
                  {card.keywords.map((kw) => (
                    <li key={kw} className="flex items-center gap-2">
                      <span className={card.dot}>▸</span>
                      <span>{kw}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          <section className="grid gap-8 lg:grid-cols-[1.05fr,0.95fr] items-start">
            <div className="rounded-3xl border bg-white p-8 shadow-xl">
              <p className="text-xs uppercase tracking-[0.3em] text-blue-600 font-semibold">
                Page Context
              </p>
              <h2 className="mt-3 text-3xl font-bold text-gray-900">
                What this drywall contractor page is really for
              </h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                This page is for people who are not looking at a tiny patch job
                anymore, but also are not doing a full new-drywall project from
                scratch. It covers the middle ground where the work is broader,
                messier, and needs one crew to carry it through properly.
              </p>
              <p className="mt-4 text-gray-700 leading-relaxed">
                That usually means a room with a few different problems at the
                same time: cracked areas, rough walls, cut-outs from plumbing
                or electrical work, damaged drywall that needs replacing, and a
                final surface that still has to look clean once paint goes on.
              </p>
              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {contextPoints.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-gray-200 bg-slate-50 p-5"
                  >
                    <h3 className="text-lg font-semibold text-gray-900">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-600">
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border bg-white p-8 shadow-xl">
              <p className="text-xs uppercase tracking-[0.3em] text-blue-600 font-semibold">
                Find The Right Page
              </p>
              <h2 className="mt-3 text-3xl font-bold text-gray-900">
                Use the page that matches the job
              </h2>
              <div className="mt-6 space-y-4">
                {fitCards.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="block rounded-2xl border border-gray-200 bg-slate-50 p-5 transition hover:border-blue-300 hover:bg-white hover:shadow-sm"
                  >
                    <h3 className="text-lg font-semibold text-gray-900">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-600">
                      {item.body}
                    </p>
                    <p className="mt-3 text-sm font-semibold text-blue-600">
                      {item.cta}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          <section className="grid gap-8 lg:grid-cols-[1.05fr,0.95fr] items-start">
            <div className="rounded-3xl border bg-white p-8 shadow-xl">
              <p className="text-xs uppercase tracking-[0.3em] text-blue-600 font-semibold">
                Search Intent
              </p>
              <h2 className="mt-3 text-3xl font-bold text-gray-900">
                Why people search for a drywall contractor in the first place
              </h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Most people do not start by saying, "I need skim coating," or,
                "I need drywall finishing." They start by looking at a room
                that still does not look right and trying to figure out who is
                supposed to fix it properly. That is where the phrase
                <strong> drywall contractor</strong> comes in. It usually means
                the problem has become broad enough that one narrow trade term
                no longer feels like the whole answer.
              </p>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Sometimes the damage started with plumbing access. Sometimes it
                came after electrical work, a leak, a renovation, old cracks,
                or a rushed repair that looked fine until daylight hit the wall
                again. In all of those cases, the homeowner is not really
                shopping for compound, tape, or sanding. They are shopping for
                a result: walls and ceilings that look smooth, clean, and ready
                for the next step.
              </p>
              <p className="mt-4 text-gray-700 leading-relaxed">
                That is also why this page sits between the narrower service
                pages. A full drywall installation page is useful when the room
                needs brand-new drywall throughout. A drywall repair page is
                useful when the job is mostly holes, cracks, or water damage.
                But a lot of real projects sit in the middle. They need a crew
                that can look at the whole room, not just one square foot of
                it, and decide what the full drywall plan should be.
              </p>
            </div>

            <div className="rounded-3xl border bg-white p-8 shadow-xl">
              <p className="text-xs uppercase tracking-[0.3em] text-blue-600 font-semibold">
                Common Questions
              </p>
              <h2 className="mt-3 text-3xl font-bold text-gray-900">
                What homeowners are usually trying to sort out
              </h2>
              <div className="mt-6 space-y-3">
                {buyerQuestions.map((question) => (
                  <div
                    key={question}
                    className="rounded-2xl border border-gray-200 bg-slate-50 px-5 py-4 text-gray-700"
                  >
                    {question}
                  </div>
                ))}
              </div>
              <p className="mt-6 text-gray-700 leading-relaxed">
                A good contractor page should answer those questions before the
                visitor even asks for a quote. That context matters because it
                helps people understand whether they are in the right place, and
                it helps the quote request come in with better photos, better
                expectations, and a clearer idea of the room condition.
              </p>
            </div>
          </section>

          <section className="rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white shadow-xl flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-blue-100">
                Contractor Scope
              </p>
              <h2 className="text-2xl font-bold">
                Need a local drywall contractor instead of a generic patch crew?
              </h2>
              <p className="text-blue-100">
                We handle drywall service scopes end to end so painters, trim
                crews, and turnover schedules stay aligned.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={PHONE_HREF}
                aria-label={PHONE_ARIA}
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 font-semibold text-blue-600 shadow-lg hover:bg-blue-50"
              >
                📞 Call dispatch
              </a>
              <a
                href="/quote/#photos"
                className="inline-flex items-center justify-center rounded-full border border-white px-6 py-3 font-semibold text-white hover:bg-white/10"
              >
                Upload photos
              </a>
            </div>
          </section>

          <section className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr] items-start">
            <div className="rounded-3xl border bg-white p-8 shadow-xl">
              <p className="text-xs uppercase tracking-[0.3em] text-blue-600 font-semibold">
                Main Keyword Coverage
              </p>
              <h2 className="mt-3 text-3xl font-bold text-gray-900">
                What a drywall contractor should actually handle
              </h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                A strong <strong>drywall contractor</strong> is not only someone
                who shows up with mud and tape. The job includes substrate
                correction, backing, sequencing after electrical or plumbing,
                corner treatment, sanding, skim work, and getting the surface
                truly ready for paint.
              </p>
              <p className="mt-4 text-gray-700 leading-relaxed">
                In real projects, drywall scopes are usually mixed. One room
                may need repair work, another may need skim coating, and a
                third may need a wider rebuild after previous trades left the
                walls uneven. That is why people search for a drywall company
                or local drywall contractors instead of only looking for a
                single narrow task.
              </p>
              <p className="mt-4 text-gray-700 leading-relaxed">
                If the project is entirely new hanging and finish work, our{" "}
                <Link
                  href="/services/drywall-installation/"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  drywall installation
                </Link>{" "}
                page goes deeper on board layout, finish levels, and install
                sequencing. It is the best follow-up when the main need is new
                drywall rather than mixed contractor work.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {[...CORE_KEYWORDS, ...audienceKeywords].map((kw) => (
                  <div
                    key={kw}
                    className="rounded-2xl border border-gray-200 bg-slate-50 px-4 py-3 text-sm font-medium text-gray-700"
                  >
                    {kw}
                  </div>
                ))}
              </div>
            </div>

            <div
              id="quote"
              className="rounded-3xl border bg-white p-6 shadow-xl"
            >
              <h2 className="text-xl font-semibold">
                Get a drywall contractor quote
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Send photos, room sizes, and whether the job is mainly repair,
                skim coating, finishing, or a broader drywall service scope. We
                reply with the right scope instead of a vague allowance.
              </p>
              <div className="mt-4">
                <QuoteForm />
              </div>
              <p className="mt-3 text-xs text-gray-500">
                Serving Mississauga, Toronto, Oakville, Burlington, Hamilton,
                Milton, Etobicoke, Grimsby, and St. Catharines.
              </p>
            </div>
          </section>

          <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-10 shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
            <div className="relative">
              <div className="text-center mb-8">
                <p className="text-xs uppercase tracking-[0.3em] text-blue-400 font-bold mb-3">
                  COMMON SCOPES
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                  Projects our drywall contractors handle every week
                </h2>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                  Drywall work changes by room, building type, and what the next
                  trade needs. These are the scopes we see most often.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {projectScopes.map((scope, i) => {
                  const colors = [
                    "from-blue-500/20 to-blue-600/20 border-blue-400/30",
                    "from-green-500/20 to-green-600/20 border-green-400/30",
                    "from-purple-500/20 to-purple-600/20 border-purple-400/30",
                    "from-amber-500/20 to-amber-600/20 border-amber-400/30",
                  ];
                  return (
                    <div
                      key={scope.title}
                      className={`rounded-2xl border-2 bg-gradient-to-br ${
                        colors[i % 4]
                      } backdrop-blur-sm p-5 text-white shadow-lg`}
                    >
                      <h3 className="text-lg font-bold">{scope.title}</h3>
                      <p className="mt-3 text-sm text-gray-200">{scope.body}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          <section className="rounded-3xl border bg-white p-8 shadow-xl">
            <p className="text-xs uppercase tracking-[0.3em] text-blue-600 font-semibold">
              Real Projects
            </p>
            <h2 className="mt-3 text-3xl font-bold text-gray-900">
              The kinds of jobs this drywall contractor page is built for
            </h2>
            <p className="mt-4 max-w-3xl text-gray-700 leading-relaxed">
              These are the real-world projects that usually land on a broader
              drywall contractor page. They are too involved for a tiny patch
              quote, but they are not always a full new-drywall job either.
            </p>
            <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {realWorldJobs.map((job) => (
                <article
                  key={job.title}
                  className="rounded-2xl border border-gray-200 bg-slate-50 p-6"
                >
                  <h3 className="text-xl font-semibold text-gray-900">
                    {job.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-700">
                    {job.body}
                  </p>
                </article>
              ))}
            </div>
            <p className="mt-8 text-gray-700 leading-relaxed">
              When a visitor sees their own situation described clearly, the
              page does a better job. It explains why the work belongs with a
              drywall contractor, what kind of problems are normal on these
              jobs, and why the answer is usually a fuller drywall plan instead
              of a quick filler-and-paint approach.
            </p>
          </section>

          <section>
            <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-amber-700">
                  Proof of work
                </p>
                <h2 className="text-3xl font-bold">
                  Drywall contractor project gallery
                </h2>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {gallery.map((item, i) => (
                <div
                  key={item.src}
                  className="group overflow-hidden rounded-3xl border shadow bg-white flex flex-col"
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading={i < 2 ? "eager" : "lazy"}
                    className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="p-4 text-sm text-gray-700 border-t border-gray-100">
                    <p className="font-semibold text-gray-900">{item.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="grid gap-6 lg:grid-cols-[0.95fr,1.05fr] items-start">
            <div className="rounded-3xl border bg-white p-8 shadow-xl">
              <p className="text-xs uppercase tracking-[0.3em] text-blue-600 font-semibold">
                Process
              </p>
              <h2 className="mt-3 text-3xl font-bold text-gray-900">
                Professional drywall contractor process
              </h2>
              <div className="mt-6 space-y-5">
                {processSteps.map((item) => (
                  <div
                    key={item.step}
                    className="flex gap-4 rounded-2xl border border-gray-200 p-4"
                  >
                    <div className="shrink-0 w-14 h-14 rounded-2xl bg-blue-600 text-white font-bold flex items-center justify-center">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-gray-600">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border bg-white p-8 shadow-xl">
              <p className="text-xs uppercase tracking-[0.3em] text-blue-600 font-semibold">
                Why EPF
              </p>
              <h2 className="mt-3 text-3xl font-bold text-gray-900">
                Why clients hire our drywall contractor team
              </h2>
              <div className="mt-6 space-y-5 text-gray-700">
                <p>
                  We do not separate the visible part of the job from the
                  hidden one. A wall that looks good after paint depends on
                  straight layout, sound backing, proper taping, enough
                  feathering, realistic dry times, and cleanup that keeps the
                  project moving.
                </p>
                <p>
                  That matters in occupied homes, condo turnovers, and
                  commercial interiors where the drywall scope has to hand off
                  cleanly to painters, trim installers, cabinet teams, or final
                  inspections.
                </p>
                <p>
                  We are also local. Our drywall contractors regularly work
                  across Mississauga, Toronto, Oakville, Burlington, Hamilton,
                  Milton, and surrounding Ontario markets, so access rules,
                  condo logistics, and occupied-home staging are not new to us.
                </p>
              </div>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2 text-sm text-gray-700">
                {localKeywords.map((kw) => (
                  <li
                    key={kw}
                    className="rounded-2xl border border-gray-200 bg-slate-50 px-4 py-3"
                  >
                    {kw}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="rounded-3xl border bg-white p-8 shadow-xl">
            <p className="text-xs uppercase tracking-[0.3em] text-blue-600 font-semibold">
              Related Areas
            </p>
            <h2 className="mt-3 text-3xl font-bold text-gray-900">
              Local drywall services across nearby cities
            </h2>
            <p className="mt-3 text-gray-600">
              Our contractor work overlaps with local drywall installation and
              repair pages across the GTA.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {cityLinks.map((href) => (
                <Link
                  key={href}
                  href={href}
                  className="rounded-full border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:border-blue-300 hover:text-blue-600"
                >
                  {cityLabels.get(href)}
                </Link>
              ))}
            </div>
          </section>

          <section className="rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white shadow-xl">
            <div className="grid gap-6 lg:grid-cols-[1fr,auto] lg:items-center">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-blue-100">
                  Book a Drywall Contractor
                </p>
                <h2 className="mt-2 text-3xl font-bold">
                  Need a clean drywall handoff without chasing multiple trades?
                </h2>
                <p className="mt-3 text-blue-100">
                  Send photos, plans, or a short scope summary. We will tell you
                  whether the job is mainly install, repair, skim coat, or a
                  mixed drywall contractor package.
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
                  aria-label={PHONE_ARIA}
                  className="inline-flex items-center justify-center rounded-full border border-white px-6 py-3 font-semibold text-white hover:bg-white/10"
                >
                  Call {PHONE_TEXT}
                </a>
              </div>
            </div>
          </section>

          <section className="rounded-3xl border bg-white p-8 shadow-xl">
            <p className="text-xs uppercase tracking-[0.3em] text-blue-600 font-semibold">
              FAQ
            </p>
            <h2 className="mt-3 text-3xl font-bold text-gray-900">
              Drywall contractor questions
            </h2>
            <div className="mt-6 space-y-4">
              {faqItems.map((item) => (
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
          </section>
        </div>
      </div>
    </div>
  );
}
