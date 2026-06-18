// filepath: /Users/alex/EpfProservicesn2025/epfproservices2025build/app/services/drywall-repair/mississauga/page.jsx
import Link from "next/link";
import QuoteForm from "@/components/QuoteForm";
import { CONTACT, SITE_URL } from "@/app/config";

export const dynamic = "force-static";
export const revalidate = 86400;

const CITY = "Mississauga";
const SERVICE = "Drywall Repair";
const SLUG = "/services/drywall-repair/mississauga/";
const BASE_URL = (SITE_URL && SITE_URL.replace(/\/$/, "")) || "";
const CANONICAL_URL = BASE_URL ? `${BASE_URL}${SLUG}` : SLUG;
const phoneHref = (CONTACT && CONTACT.phoneHref) || "tel:+16479236784";
const phoneText = (CONTACT && CONTACT.phone) || "(647) 923-6784";

const NEIGHBOURHOODS = [
  ["port-credit", "Port Credit", "Lakefront village with marina and boutiques", "Waterfront water damage, heritage home repairs, condo drywall work"],
  ["streetsville", "Streetsville", "Historic village with heritage character", "Heritage home repairs, renovation support, seamless patching"],
  ["meadowvale", "Meadowvale", "Established suburb with family homes", "Residential repairs, basement finishing, crack repair"],
  ["erin-mills", "Erin Mills", "Upscale residential area with amenities", "Premium home repairs, luxury finishing, designer coordination"],
  ["cooksville", "Cooksville", "Diverse urban neighbourhood near transit", "Condo repairs, commercial work, residential patching"],
  ["malton", "Malton", "Industrial and residential mix near airport", "Commercial repairs, warehouse work, residential support"],
  ["churchill-meadows", "Churchill Meadows", "Newer development with executive homes", "New home repairs, settlement cracks, modern finishing"],
  ["creditview", "Creditview", "Residential community with schools", "Family home repairs, basement work, hole patching"],
  ["lakeview", "Lakeview", "Waterfront neighbourhood along Lake Ontario", "Lake damage repairs, waterfront condos, premium finishing"],
  ["clarkson", "Clarkson", "Lakefront community with GO station", "Water damage restoration, residential repairs, transit-area condos"],
  ["mineola", "Mineola", "Upscale lakefront area with heritage homes", "Luxury repairs, heritage restoration, premium finishing"],
  ["applewood", "Applewood", "Mature neighbourhood near QEW", "Residential repairs, renovation support, paint-ready work"],
  ["hurontario", "Hurontario", "LRT corridor with mixed development", "High-rise condos, commercial repairs, transit construction impacts"],
  ["square-one", "Square One", "Urban core with high-rise condos and retail", "Condo towers, commercial repairs, concierge coordination"],
];

const LOCAL_SNAPSHOTS = [
  {
    title: "City Centre and Square One Condos",
    desc: "Elevator booking, hallway protection, and quiet-hour compliance for high-rise drywall repair.",
  },
  {
    title: "Port Credit and Lakeview Waterfront",
    desc: "Moisture-aware repair sequencing and stain-block priming for lakefront properties.",
  },
  {
    title: "Erin Mills and Meadowvale Townhomes",
    desc: "Settlement crack reinforcement, stairwell patching, and paint-ready finishes.",
  },
  {
    title: "Malton and Airport-Area Properties",
    desc: "Fast turnover repairs for rentals, basements, and commercial bays near Pearson.",
  },
];

const CONDO_CHECKLIST = [
  "COI + WSIB documents ready for property management",
  "Elevator booking and loading protection scheduled in advance",
  "Quiet-hour compliance and hallway floor protection",
  "HEPA sanding and daily cleanup to protect common areas",
];

const QUOTE_CHECKLIST = [
  "Wide shots + close-ups of the damaged areas",
  "Room size, ceiling height, and access notes",
  "Timeline and any building rules or permits",
  "Active leaks or moisture issues already stopped",
];

const CLUSTER_GUIDES = [
  [
    "/blog/drywall-contractor-mississauga-guide/",
    "Drywall Contractor Mississauga Guide",
    "Installation, repair, taping, Level 5 finishing, dust control, and quote scope for Mississauga homes.",
  ],
  [
    "/blog/drywall-contractor-basement-renovation-mississauga/",
    "Basement Drywall Contractor Mississauga",
    "Board installation, bulkheads, taping, sanding, cleanup, and paint-ready basement finishing.",
  ],
  [
    "/blog/drywall-repair-cost-mississauga/",
    "Drywall Repair Cost in Mississauga",
    "Pricing factors for holes, cracks, ceiling leaks, patch repairs, sanding, priming, and paint-ready finish.",
  ],
  [
    "/blog/ceiling-drywall-repair-mississauga/",
    "Ceiling Drywall Repair in Mississauga",
    "How ceiling stains, sagging board, leak damage, and overhead sanding are handled properly.",
  ],
  [
    "/blog/drywall-patch-repair-mississauga/",
    "Drywall Patch Repair in Mississauga",
    "Holes, dents, nail pops, TV mount damage, and trade cut-outs repaired for a clean wall finish.",
  ],
  [
    "/blog/water-damaged-drywall-repair-mississauga/",
    "Water Damaged Drywall Repair in Mississauga",
    "What happens after a leak, when drywall should be replaced, and why stain-block primer matters.",
  ],
  [
    "/blog/condo-drywall-repair-mississauga/",
    "Condo Drywall Repair in Mississauga",
    "Square One, City Centre, Port Credit, Erin Mills, and high-rise repair planning.",
  ],
  [
    "/blog/drywall-crack-repair-mississauga/",
    "Drywall Crack Repair in Mississauga",
    "Recurring cracks, ceiling lines, stairwells, settlement movement, and paint-ready repair.",
  ],
  [
    "/blog/dustless-drywall-repair-mississauga/",
    "Dustless Drywall Repair in Mississauga",
    "Protection, containment, HEPA sanding, cleanup, primer, and cleaner repairs in occupied spaces.",
  ],
  [
    "/blog/drywall-repair-after-electrical-plumbing-mississauga/",
    "Drywall Repair After Electrical or Plumbing Work in Mississauga",
    "Patch openings left by plumbers, electricians, HVAC work, pot lights, fixtures, and access cuts.",
  ],
  [
    "/blog/drywall-repair-after-plumbing-electrical-work/",
    "Drywall Repair After Plumbing or Electrical Work",
    "How trade access holes are patched, when an access panel makes sense, and what paint-ready repair includes.",
  ],
  [
    "/blog/drywall-repair-vs-replacement/",
    "Drywall Repair vs Replacement",
    "When to patch, cut out damaged board, replace a section, or refinish the surface before painting.",
  ],
];

const RECENT_REPAIR_EXAMPLES = [
  {
    title: "Square One condo drywall patch after plumbing access",
    desc: "A bathroom wall was opened for valve access, then backed, patched, taped, sanded with protection, and left ready for repainting in a high-rise unit.",
  },
  {
    title: "Erin Mills ceiling repair after leak stain",
    desc: "A firm but stained ceiling area was cleaned, skimmed where needed, sealed with stain-block primer, and prepared for a full ceiling paint blend.",
  },
  {
    title: "Port Credit wall repair after fixture relocation",
    desc: "Old fixture holes and wiring access marks were patched, feathered wide, sanded smooth, and primed so the wall could be repainted cleanly.",
  },
  {
    title: "Streetsville drywall crack and seam repair",
    desc: "A recurring seam crack near a hallway transition was opened, reinforced, mudded in controlled coats, sanded, and left paint-ready.",
  },
  {
    title: "Meadowvale basement drywall water damage repair",
    desc: "Damaged lower-wall drywall was cut back after the source was addressed, replaced with new board, taped, sanded, primed, and prepared for paint.",
  },
];

const FAQS = [
  {
    q: `How much does drywall repair cost in ${CITY}?`,
    a: "Cost depends on damage size, ceiling height, number of repairs, whether walls need repainting, and urgency. Share photos and room details for accurate written pricing specific to your Mississauga property.",
  },
  {
    q: "Do you handle emergency water damage drywall repair?",
    a: "Yes. We respond quickly to burst pipes, roof leaks, and HVAC condensation issues throughout Mississauga. Emergency crews stabilize damage, dry cavities, and deliver seamless repairs with moisture documentation for insurance.",
  },
  {
    q: "Can you repair drywall after plumbing or electrical work?",
    a: "Absolutely. We coordinate with trades for drywall repair after plumbing, electrical, and HVAC installations. Our crews patch cut-outs, match textures, and leave surfaces paint-ready for your Mississauga project.",
  },
  {
    q: "What's included in a Level 5 drywall finish?",
    a: "Level 5 means full-field skim coating for a smooth, uniform surface with no visible seams or patch lines—critical for high-gloss paint and strong lighting in modern Mississauga homes and condos.",
  },
  {
    q: "Do you work in Mississauga condos and high-rises?",
    a: "Yes. We handle condo drywall repair with building access coordination, elevator booking, quiet hours compliance, and hallway protection—common for Square One towers and waterfront buildings.",
  },
  {
    q: "How long does a typical drywall repair take?",
    a: "Small repairs (nail pops, dents) often complete in 1 day. Larger water damage repairs, crack reinforcement, or multi-room projects may take 2-5 days depending on drying time and painting scope.",
  },
  {
    q: "Can you match existing wall textures?",
    a: "Yes. Whether it's orange peel, knockdown, or stipple texture, we match existing finishes so repairs blend seamlessly with surrounding walls in your Mississauga home.",
  },
  {
    q: "Do you provide warranties on drywall repairs?",
    a: "Yes. All drywall repair services include a 3-year workmanship warranty covering finish quality, adhesion, and cracking under normal conditions. Insurance documentation available for water damage claims.",
  },
  {
    q: "What areas of Mississauga do you serve?",
    a: "We serve all Mississauga neighbourhoods including Port Credit, Streetsville, Meadowvale, Erin Mills, Square One, Cooksville, Churchill Meadows, and waterfront communities. Same-day quotes available citywide.",
  },
];

export const metadata = {
  title: `Drywall Repair Mississauga | Emergency Water Damage & Seamless Patching | EPF Pro Services`,
  description:
    "Professional drywall repair services in Mississauga. Expert patching, water damage restoration, crack repair, Level 5 finish. WSIB insured. Fast quotes.",
  keywords: [
    "drywall repair Mississauga",
    "drywall repair services Mississauga",
    "drywall repair company Mississauga",
    "drywall contractor Mississauga",
    "drywall contractors Mississauga",
    "professional drywall repair Mississauga",
    "drywall patch repair Mississauga",
    "water damaged drywall repair Mississauga",
    "drywall crack repair Mississauga",
    "seamless drywall repair Mississauga",
    "drywall repair after plumbing Mississauga",
    "condo drywall repair Mississauga",
    "residential drywall repair Mississauga",
    "commercial drywall repair Mississauga",
  ],
  alternates: { canonical: CANONICAL_URL },
  openGraph: {
    title: `${SERVICE} in ${CITY} | Professional Seamless Finish`,
    description:
      "Emergency water damage repair, seamless patching, Level 5 finish. WSIB insured drywall contractors serving all Mississauga neighbourhoods.",
    url: CANONICAL_URL,
    type: "website",
  },
  robots: { index: true, follow: true },
};

function SeoJsonLd() {
  const baseServiceUrl = BASE_URL ? `${BASE_URL}${SLUG}` : SLUG;
  const quoteUrl = BASE_URL ? `${BASE_URL}/quote/` : "/quote/";
  const providerUrl = BASE_URL ? `${BASE_URL}/` : "/";
  const mainServiceUrl = BASE_URL
    ? `${BASE_URL}/services/drywall-repair/`
    : "/services/drywall-repair/";

  const data = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: `${SERVICE} in ${CITY}`,
      serviceType: [
        "Drywall Repair",
        "Drywall Patching",
        "Water Damage Drywall Repair",
        "Drywall Crack Repair",
        "Seamless Drywall Repair",
        "Drywall Tape Repair",
        "Paint-Ready Drywall Repair",
      ],
      provider: {
        "@type": "LocalBusiness",
        name: "EPF Pro Services",
        telephone: phoneText,
        url: providerUrl,
        image: `${BASE_URL}/logo.png`,
        priceRange: "$$",
        sameAs: ["https://maps.app.goo.gl/QkkUQQPZc6oSyvJy9"],
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "127",
        },
      },
      areaServed: { "@type": "City", name: CITY },
      url: baseServiceUrl,
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/InStock",
        priceCurrency: "CAD",
        url: quoteUrl,
      },
      potentialAction: {
        "@type": "RequestQuoteAction",
        target: quoteUrl,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: FAQS.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Drywall Repair Services",
          item: { "@id": mainServiceUrl },
        },
        {
          "@type": "ListItem",
          position: 2,
          name: CITY,
          item: { "@id": baseServiceUrl },
        },
      ],
    },
  ];

  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function Page() {
  const images = [
    "/gallery/drywall-repair/drywall-repair-service00001.webp",
    "/gallery/drywall-repair/drywall-repair-service00002.webp",
    "/gallery/drywall-repair/drywall-repair-service00003.webp",
    "/gallery/drywall-repair/drywall-repair-service00004.webp",
    "/gallery/drywall-repair/drywall-repair-service00005.webp",
    "/gallery/drywall-repair/drywall-repair-service00007.webp",
  ];

  const process = [
    {
      n: "01",
      t: "Damage Assessment & Protection",
      d: "Site visit to document damage extent, moisture levels, and room protection plan before any Mississauga drywall repair begins.",
    },
    {
      n: "02",
      t: "Cut, Remove & Prep",
      d: "Remove damaged drywall, secure backing, install new board if needed—critical for water damage and structural repairs.",
    },
    {
      n: "03",
      t: "Tape, Mud & Reinforce",
      d: "Apply mesh or paper tape, multiple coats of joint compound, reinforce cracks and seams for long-term stability.",
    },
    {
      n: "04",
      t: "Feather & Smooth",
      d: "Wide feathering beyond repair edges eliminates flash lines—our Mississauga standard for seamless drywall repair.",
    },
    {
      n: "05",
      t: "HEPA Sand & Light Check",
      d: "HEPA-connected sanding reduces dust, raking-light inspection catches imperfections before primer.",
    },
    {
      n: "06",
      t: "Prime & Paint-Ready Finish",
      d: "Stain-block primer for water stains, final surface prep delivers paint-ready walls with no visible patch lines.",
    },
  ];

  return (
    <>
      <SeoJsonLd />

      {/* HERO */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={images[0]}
            alt={`${CITY} ${SERVICE.toLowerCase()}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/70 to-slate-900/90" />
        </div>

        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 px-4 py-2 rounded-full text-sm font-bold mb-6">
              <span>📍</span> Serving All {CITY} Neighbourhoods
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
              Drywall Repair Mississauga
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-gray-100 leading-relaxed">
              Expert <strong>drywall repair services Mississauga</strong> for
              water damage, cracks, holes & seamless patching.{" "}
              <strong>WSIB insured</strong> contractors with{" "}
              <strong>Level 5 finish</strong> standards.
            </p>

            <ul className="flex flex-wrap justify-center gap-3 mb-10 text-base md:text-lg">
              {[
                "24/7 Emergency Water Damage",
                "Seamless Patch Repair",
                "Level 5 Finish Standard",
                "3-Year Warranty",
              ].map((x) => (
                <li
                  key={x}
                  className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20"
                >
                  ✓ {x}
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#quote"
                className="inline-flex items-center justify-center px-8 py-5 text-lg font-semibold rounded-full bg-blue-600 hover:bg-blue-700 transition-all shadow-2xl hover:scale-105"
              >
                Get Free Quote
              </a>
              <a
                href={phoneHref}
                className="inline-flex items-center justify-center px-8 py-5 text-lg font-semibold rounded-full bg-white text-gray-900 hover:bg-gray-100 transition-all shadow-2xl hover:scale-105"
              >
                📞 {phoneText}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* QUOTE FORM */}
      <section
        id="quote"
        className="py-20 bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
            <div className="text-center mb-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Get Your Free Mississauga Drywall Repair Quote
              </h2>
              <p className="text-lg text-gray-600">
                Upload damage photos + room details for fast, accurate pricing.
              </p>
            </div>

            <QuoteForm />

            <div className="mt-8 pt-8 border-t border-gray-200 text-center">
              <p className="text-gray-600 mb-3">
                Need emergency repair? Call now:
              </p>
              <a
                href={phoneHref}
                className="inline-flex items-center text-2xl font-bold text-blue-600 hover:text-blue-700"
              >
                📞 {phoneText}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE TYPES GRID */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-widest text-blue-600 font-bold mb-3">
              COMPLETE REPAIR SERVICES
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Professional Drywall Repair Services in Mississauga
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From emergency water damage to seamless patching—expert{" "}
              <strong>drywall contractors Mississauga</strong> for every repair
              need.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                icon: "💧",
                title: "Water Damage Repair",
                desc: "Emergency ceiling water damage repair Mississauga",
                keywords: [
                  "water damaged drywall repair",
                  "drywall repair after leak",
                  "ceiling water damage repair",
                ],
                color: "blue",
              },
              {
                icon: "🔧",
                title: "Patching & Holes",
                desc: "Drywall patch repair Mississauga for all hole sizes",
                keywords: [
                  "drywall patching",
                  "hole in drywall repair",
                  "nail pop repair",
                ],
                color: "green",
              },
              {
                icon: "⚡",
                title: "Crack Repair",
                desc: "Drywall crack repair Mississauga with reinforcement",
                keywords: [
                  "wall crack repair",
                  "drywall seam repair",
                  "drywall tape repair",
                ],
                color: "purple",
              },
              {
                icon: "🏗️",
                title: "Trade Cut-Outs",
                desc: "Drywall repair after plumbing Mississauga & HVAC work",
                keywords: [
                  "drywall repair after electrical work",
                  "drywall repair after HVAC",
                  "drywall repair after renovations",
                ],
                color: "amber",
              },
            ].map((service) => (
              <div
                key={service.title}
                className={`group relative overflow-hidden rounded-3xl border-2 border-${service.color}-100 bg-gradient-to-br from-${service.color}-50 via-white to-white p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2`}
              >
                <div
                  className={`absolute -top-10 -right-10 w-40 h-40 bg-${service.color}-200/30 rounded-full blur-3xl`}
                ></div>
                <div className="relative">
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {service.desc}
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    {service.keywords.map((kw) => (
                      <li key={kw} className="flex items-center gap-2">
                        <span className={`text-${service.color}-500 text-lg`}>
                          ▸
                        </span>
                        <span>
                          <strong>{kw}</strong> Mississauga
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/services/drywall-repair/"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-lg"
            >
             Drywall Repair
            </Link>
          </div>
        </div>
      </section>

      {/* SUPPORTING GUIDES */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-widest text-blue-600 font-bold mb-3">
              MISSISSAUGA REPAIR GUIDES
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Mississauga Drywall Repair Guides
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Use these local guides to plan the repair before you book. They
              explain cost, patch strength, ceiling leaks, condo access, dust
              protection, crack repair, trade cut-outs, primer, and paint-ready
              finishing for Mississauga homes and condos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CLUSTER_GUIDES.map(([href, title, desc]) => (
              <Link
                key={href}
                href={href}
                className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition"
              >
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-700">
                  {title}
                </h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  {desc}
                </p>
                <span className="mt-4 inline-flex text-sm font-semibold text-blue-600">
                  Read guide →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* RECENT LOCAL EXAMPLES */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mb-12">
            <p className="text-sm uppercase tracking-widest text-blue-600 font-bold mb-3">
              RECENT LOCAL REPAIR EXAMPLES
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Recent Mississauga repair examples
            </h2>
            <p className="text-xl text-gray-600">
              Every drywall repair depends on access, damage size, finish level,
              moisture history, and painting needs. These examples show the kind
              of practical repair planning we handle across Mississauga.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {RECENT_REPAIR_EXAMPLES.map((example) => (
              <div
                key={example.title}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm"
              >
                <h3 className="text-lg font-bold text-slate-900">
                  {example.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {example.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS TIMELINE */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-widest text-blue-600 font-bold mb-3">
              HOW WE WORK
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our Mississauga Drywall Repair Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Consistent methodology for{" "}
              <strong>seamless drywall repair Mississauga</strong> from
              assessment to final inspection.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            {process.map((step, i) => (
              <div
                key={step.n}
                className="relative flex gap-6 md:gap-10 pb-12 last:pb-0"
              >
                {i < process.length - 1 && (
                  <div className="absolute left-8 top-20 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-blue-200"></div>
                )}
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg relative z-10">
                  {step.n}
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {step.t}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{step.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCAL REPAIR SNAPSHOT */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-widest text-blue-600 font-bold mb-3">
              LOCAL INSIGHTS
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Mississauga Drywall Repair Scenarios We See Often
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mississauga combines high-rise condos, lakefront homes, and
              family townhomes. Our crews adapt repair methods to match each
              building type and management rule set.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {LOCAL_SNAPSHOTS.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-lg transition"
              >
                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 grid lg:grid-cols-2 gap-6">
            <div className="rounded-3xl border border-blue-100 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900">
                Mississauga Condo Access Checklist
              </h3>
              <ul className="mt-4 space-y-2 text-slate-700">
                {CONDO_CHECKLIST.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900">
                What Speeds Up a Mississauga Quote
              </h3>
              <ul className="mt-4 space-y-2 text-slate-700">
                {QUOTE_CHECKLIST.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-slate-600">
                This helps us schedule crews efficiently across City Centre,
                Hurontario, Port Credit, and the rest of Mississauga.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NEIGHBOURHOOD COVERAGE */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-widest text-blue-600 font-bold mb-3">
              CITYWIDE SERVICE
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Drywall Repair in Every Mississauga Neighbourhood
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional <strong>drywall repair company Mississauga</strong>{" "}
              serving Port Credit, Streetsville, Square One & beyond.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
              {NEIGHBOURHOODS.map(([slug, name]) => (
                <div
                  key={slug}
                  className="group relative overflow-hidden rounded-2xl border-2 border-gray-200 bg-white p-5 text-center hover:border-blue-400 hover:shadow-lg transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <p className="relative z-10 font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {name}
                  </p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl border-2 border-blue-200 p-8 md:p-12 text-center">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Same-Day Quotes Across Mississauga
              </h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our <strong>drywall contractors Mississauga</strong> respond
                quickly to Port Credit waterfront condos, Churchill Meadows
                homes, downtown Square One towers, and Streetsville heritage
                properties. Upload photos or call for fast scheduling.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#quote"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-all shadow-lg hover:scale-105"
                >
                  Get Free Quote
                </a>
                <a
                  href={phoneHref}
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full border-2 border-blue-600 text-blue-600 hover:bg-blue-50 transition-all shadow-lg"
                >
                  📞 Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-widest text-blue-600 font-bold mb-3">
              WHY CHOOSE US
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Mississauga Homeowners Choose EPF Pro Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional <strong>drywall repair services Mississauga</strong>{" "}
              with proven quality standards.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: "🎯",
                title: "Level 5 Finish Standard",
                desc: "Every seamless drywall repair Mississauga project gets multiple feathered coats with raking-light inspection—whether it's a nail pop or full wall section.",
              },
              {
                icon: "⚡",
                title: "24/7 Emergency Response",
                desc: "Dedicated crews for water damaged drywall repair Mississauga. We respond within hours with moisture meters, containment equipment, and insurance documentation.",
              },
              {
                icon: "🔬",
                title: "Moisture Testing",
                desc: "Calibrated meters verify substrate below 12% before new material installs—prevents bubbling drywall tape repair callbacks.",
              },
              {
                icon: "🏗️",
                title: "Trade Coordination",
                desc: "Seamless scheduling for drywall repair after plumbing Mississauga, electrical, or HVAC work. We coordinate with your trades to keep projects moving.",
              },
              {
                icon: "🛡️",
                title: "HEPA Dust Control",
                desc: "HEPA-connected sanders and negative air containment keep dust out of living spaces—critical for occupied Mississauga condo drywall repair.",
              },
              {
                icon: "📋",
                title: "3-Year Warranty",
                desc: "Photo documentation at every stage, moisture readings logged, 3-year workmanship warranty on all paint-ready drywall repair Mississauga projects.",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="group bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-xl hover:border-blue-200 transition-all duration-300"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-widest text-amber-600 font-bold mb-3">
              RECENT PROJECTS
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Mississauga Drywall Repair Gallery
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Recent <strong>professional drywall repair Mississauga</strong>{" "}
              projects with smooth, flawless finish results.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {images.map((src, i) => (
              <div
                key={src}
                className="group overflow-hidden rounded-3xl border-2 border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <img
                  src={src}
                  alt={`Mississauga drywall repair project ${i + 1}`}
                  loading={i < 3 ? "eager" : "lazy"}
                  className="h-80 w-full object-cover transition duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto rounded-3xl border-2 border-blue-100 bg-blue-50 p-8 md:p-10 shadow-sm">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div className="max-w-3xl">
                <p className="text-sm uppercase tracking-[0.3em] text-blue-700 font-bold">
                  Local Repair Guide
                </p>
                <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900">
                  Why drywall cracks and paint bubbles through the year in Mississauga homes
                </h2>
                <p className="mt-4 text-lg text-slate-700">
                  If your walls crack in winter, bubble in summer, or keep
                  reopening in the same spots, read our Mississauga guide on
                  what keeps causing those problems and when a proper repair
                  makes more sense than another quick touch-up.
                </p>
              </div>
              <Link
                href="/blog/how-seasonal-humidity-and-temperature-changes-affect-drywall-mississauga/"
                className="inline-flex items-center justify-center rounded-full bg-blue-600 px-7 py-3 font-semibold text-white transition hover:bg-blue-700 shadow-lg"
              >
                Read the guide
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-sm uppercase tracking-widest text-blue-600 font-bold mb-3">
                FAQ
              </p>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Drywall Repair Mississauga FAQs
              </h2>
              <p className="text-xl text-gray-600">
                Common questions about our{" "}
                <strong>drywall repair services Mississauga</strong>.
              </p>
            </div>

            <div className="space-y-4">
              {FAQS.map((faq) => (
                <details
                  key={faq.q}
                  className="group bg-white rounded-2xl border-2 border-gray-200 p-6 hover:border-blue-300 transition-all"
                >
                  <summary className="font-bold text-lg cursor-pointer flex items-center justify-between text-gray-900 list-none">
                    <span>{faq.q}</span>
                    <span className="text-blue-600 text-2xl group-open:rotate-180 transition-transform">
                      ▼
                    </span>
                  </summary>
                  <p className="mt-4 text-gray-600 leading-relaxed">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-6">
                More questions about drywall repair in Mississauga?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={phoneHref}
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-all shadow-lg hover:scale-105"
                >
                  📞 Call {phoneText}
                </a>
                <a
                  href="#quote"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full border-2 border-blue-600 text-blue-600 hover:bg-blue-50 transition-all shadow-lg"
                >
                  Get Free Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready for Professional Drywall Repair in Mississauga?
            </h2>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
              Expert <strong>drywall contractors Mississauga</strong> ready to
              deliver seamless repairs with transparent pricing, 3-year
              warranty, and photo documentation. Serving all Mississauga
              neighbourhoods.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <a
                href="#quote"
                className="inline-flex items-center justify-center px-10 py-5 text-xl font-bold rounded-full bg-blue-600 hover:bg-blue-700 transition-all shadow-2xl hover:scale-105"
              >
                Get Free Quote
              </a>
              <a
                href={phoneHref}
                className="inline-flex items-center justify-center px-10 py-5 text-xl font-bold rounded-full bg-white text-gray-900 hover:bg-gray-100 transition-all shadow-2xl hover:scale-105"
              >
                📞 {phoneText}
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span>WSIB + $5M Liability</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span>3-Year Warranty</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span>Level 5 Finish</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span>drywall repair near me</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO CONTENT SECTION */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Expert Drywall Repair Services Throughout Mississauga
              </h2>

              <p className="text-gray-700 leading-relaxed mb-6">
                When you need reliable{" "}
                <strong>drywall repair services Mississauga</strong>, EPF Pro
                Services delivers professional results across all city
                neighbourhoods. From Port Credit's waterfront condos to
                Churchill Meadows family homes, our experienced{" "}
                <strong>drywall contractors Mississauga</strong> handle every
                type of repair with precision and care.
              </p>

              <h3 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Comprehensive Drywall Repair Solutions
              </h3>

              <p className="text-gray-700 leading-relaxed mb-6">
                Our <strong>professional drywall repair Mississauga</strong>{" "}
                services cover the full spectrum of residential and commercial
                needs. Whether you're dealing with emergency{" "}
                <strong>water damaged drywall repair Mississauga</strong> from a
                burst pipe, need <strong>drywall patch repair Mississauga</strong>{" "}
                for nail pops and dents, or require{" "}
                <strong>drywall crack repair Mississauga</strong> for structural
                issues—our team brings decades of combined experience to every
                project.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8 rounded-r-xl">
                <h4 className="text-2xl font-bold text-gray-900 mb-3">
                  Why Mississauga Property Owners Choose Us
                </h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold text-xl">✓</span>
                    <span>
                      <strong>Local expertise:</strong> Deep familiarity with
                      Mississauga building codes, condo regulations, and common
                      property issues specific to the area
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold text-xl">✓</span>
                    <span>
                      <strong>Fast response:</strong> Same-day emergency service
                      for <strong>drywall repair after leak Mississauga</strong>{" "}
                      situations
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold text-xl">✓</span>
                    <span>
                      <strong>Quality guarantee:</strong> Every{" "}
                      <strong>seamless drywall repair Mississauga</strong>{" "}
                      project backed by our 3-year warranty
                    </span>
                  </li>
                </ul>
              </div>

              <h3 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Emergency Water Damage Drywall Repair in Mississauga
              </h3>

              <p className="text-gray-700 leading-relaxed mb-6">
                Water damage waits for no one. Our 24/7 emergency crews
                specialize in <strong>ceiling water damage repair Mississauga</strong>{" "}
                with rapid response times across all neighbourhoods. We
                understand the urgency of{" "}
                <strong>drywall water damage repair Mississauga</strong>{" "}
                situations—whether it's a burst pipe in your Streetsville
                basement, roof leak in your Erin Mills home, or HVAC
                condensation issue in your Square One condo.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Our moisture testing protocols ensure substrate readings below
                12% before new material installation, preventing future{" "}
                <strong>bubbling drywall tape repair Mississauga</strong>{" "}
                callbacks. We document everything with photos and moisture logs
                for insurance claims, making the process smooth for Mississauga
                homeowners and property managers.
              </p>

              <h3 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Seamless Patching & Finishing Services
              </h3>

              <p className="text-gray-700 leading-relaxed mb-6">
                Perfect <strong>drywall patching Mississauga</strong> isn't just
                about filling holes—it's about making repairs invisible. Our{" "}
                <strong>paint-ready drywall repair Mississauga</strong> process
                includes wide feathering (12-18 inches beyond repair edges),
                multiple thin coats, and raking-light inspection to guarantee{" "}
                <strong>no visible patch lines Mississauga</strong> results.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                From simple <strong>nail pop repair Mississauga</strong> to
                extensive <strong>hole in drywall repair Mississauga</strong>,
                every project receives the same meticulous attention. We match
                textures precisely—whether you have orange peel, knockdown, or
                smooth walls—ensuring repairs blend seamlessly with existing
                surfaces throughout your Mississauga property.
              </p>

              <h3 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Crack Repair & Structural Reinforcement
              </h3>

              <p className="text-gray-700 leading-relaxed mb-6">
                Not all cracks are equal. Our{" "}
                <strong>wall crack repair Mississauga</strong> assessments
                identify whether you're dealing with minor settlement or active
                structural movement. For{" "}
                <strong>drywall seam repair Mississauga</strong> and{" "}
                <strong>drywall tape repair Mississauga</strong>, we use
                flexible mesh tape systems and multiple compound layers to
                accommodate minor movement without re-cracking.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>Loose drywall tape repair Mississauga</strong> often
                indicates moisture issues or inadequate framing. We address
                these underlying problems before applying new finishes,
                preventing repeat failures common with surface-only repairs.
                This thorough approach is why our{" "}
                <strong>joint compound repair Mississauga</strong> work carries
                a 3-year warranty.
              </p>

              <h3 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Trade Coordination & Renovation Support
              </h3>

              <p className="text-gray-700 leading-relaxed mb-6">
                Renovation projects in Mississauga require precise coordination.
                Our <strong>drywall repair after plumbing Mississauga</strong>{" "}
                services integrate seamlessly with your trades—whether it's{" "}
                <strong>drywall repair after electrical work Mississauga</strong>
                , <strong>drywall repair after HVAC Mississauga</strong>, or{" "}
                <strong>drywall repair after renovations Mississauga</strong>.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                We schedule around your other contractors, protect finished
                areas with proper containment, and deliver{" "}
                <strong>smooth wall repair Mississauga</strong> results that
                meet painter standards. This coordination is especially critical
                for <strong>condo drywall repair Mississauga</strong> where
                building access, quiet hours, and hallway protection add layers
                of complexity.
              </p>

              <div className="bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200 p-8 my-8 rounded-3xl">
                <h4 className="text-2xl font-bold text-gray-900 mb-4">
                  Serving Every Mississauga Neighbourhood
                </h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Our <strong>drywall repair company Mississauga</strong> teams
                  know the unique characteristics of each area:
                </p>
                <div className="grid md:grid-cols-2 gap-4 text-gray-700">
                  <div>
                    <p className="font-semibold mb-2">
                      Waterfront Communities:
                    </p>
                    <p className="text-sm">
                      Port Credit, Lakeview, and Clarkson properties often face
                      humidity-related issues requiring specialized moisture
                      control during repairs.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Downtown High-Rises:</p>
                    <p className="text-sm">
                      Square One, Cooksville, and Hurontario condos need COI
                      documentation, elevator booking, and strict containment
                      protocols.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Established Areas:</p>
                    <p className="text-sm">
                      Streetsville, Meadowvale, and Mineola homes may have older
                      plaster-and-lath requiring specialized techniques.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">New Developments:</p>
                    <p className="text-sm">
                      Churchill Meadows, Creditview, and Erin Mills properties
                      benefit from modern materials and warranty coordination.
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Commercial & Residential Excellence
              </h3>

              <p className="text-gray-700 leading-relaxed mb-6">
                Whether you need{" "}
                <strong>residential drywall repair Mississauga</strong> for your
                family home or{" "}
                <strong>commercial drywall repair Mississauga</strong> for your
                business property, we adapt our approach to your specific needs.{" "}
                <strong>Basement drywall repair Mississauga</strong> requires
                different considerations than main-floor work, especially
                regarding moisture and insulation.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Our <strong>small drywall repair Mississauga</strong> and{" "}
                <strong>minor drywall repair Mississauga</strong> services are
                perfect for pre-sale touch-ups, while our comprehensive approach
                handles extensive damage from water events, structural
                settlement, or major renovations.
              </p>

              <h3 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Level 5 Finish Standard
              </h3>

              <p className="text-gray-700 leading-relaxed mb-6">
                Every <strong>seamless drywall repair Mississauga</strong>{" "}
                project targets Level 5 finish quality—the highest standard in
                the industry. This means full-field skim coating for{" "}
                <strong>smooth, flawless finish Mississauga</strong> results
                that look perfect under any lighting condition. Surfaces are{" "}
                <strong>ready for painting Mississauga</strong> or{" "}
                <strong>ready for wallpaper Mississauga</strong> without
                additional prep work.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Our raking-light inspection catches imperfections invisible to
                the naked eye, ensuring your{" "}
                <strong>drywall dent repair Mississauga</strong> or{" "}
                <strong>repair holes in drywall Mississauga</strong> work meets
                the same standards as new construction.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8 rounded-r-xl">
                <h4 className="text-2xl font-bold text-gray-900 mb-3">
                  Ready to Schedule Your Repair?
                </h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Get your <strong>drywall contractor Mississauga</strong>{" "}
                  project started today. Upload damage photos through our online
                  form for same-day quotes, or call directly for emergency{" "}
                  <strong>ceiling water damage repair Mississauga</strong>{" "}
                  service.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="#quote"
                    className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-all shadow-lg"
                  >
                    Get Free Quote
                  </a>
                  <a
                    href={phoneHref}
                    className="inline-flex items-center px-6 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-full hover:bg-blue-50 transition-all shadow-lg"
                  >
                    📞 Call Now
                  </a>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mt-8">
                For comprehensive information about our broader service
                offerings, visit our{" "}
                <Link
                  href="/services/drywall-repair/"
                  className="text-blue-600 hover:text-blue-700 font-semibold underline"
                >
                drywall repair services
                </Link>{" "}
                covering the entire GTA region.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
