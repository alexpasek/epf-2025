import Link from "next/link";
import QuoteForm from "@/components/QuoteForm";
import { CONTACT, SITE_URL } from "@/app/config";

const BASE_URL = (SITE_URL || "https://epfproservices.com").replace(/\/$/, "");
const PAGE_PATH = "/popcorn-ceiling-removal/mississauga/";
const PAGE_URL = `${BASE_URL}${PAGE_PATH}`;
const ORG_ID = `${BASE_URL}/#org`;

export const revalidate = 86400;

export const metadata = {
  title:
    "Popcorn Ceiling Removal Mississauga | Stipple & Stucco Removal Experts",
  description:
    "Mississauga popcorn, stipple & stucco ceiling removal – dust-free scraping, Level 5 skim coat, 3-year warranty. Local, insured contractors transforming textured ceilings to smooth in Port Credit, Streetsville, Erin Mills & all Mississauga neighborhoods.",
  alternates: {
    canonical: PAGE_PATH,
  },
  openGraph: {
    title:
      "Popcorn Ceiling Removal Mississauga | Stipple & Stucco Removal Experts",
    description:
      "Mississauga popcorn, stipple & stucco ceiling removal – dust-free scraping, Level 5 skim coat, 3-year warranty. Local, insured contractors transforming textured ceilings to smooth in every neighborhood.",
    url: PAGE_URL,
    type: "website",
  },
  robots: { index: true, follow: true },
};

function JsonLd() {
  const neighborhoods = [
    ["port-credit", "Port Credit"],
    ["lorne-park", "Lorne Park"],
    ["clarkson", "Clarkson"],
    ["erin-mills", "Erin Mills"],
    ["streetsville", "Streetsville"],
    ["meadowvale", "Meadowvale"],
    ["meadowvale-village", "Meadowvale Village"],
    ["city-centre", "City Centre"],
    ["hurontario", "Hurontario"],
    ["east-credit", "East Credit"],
    ["lakeview", "Lakeview"],
    ["mineola", "Mineola"],
    ["cooksville", "Cooksville"],
    ["applewood", "Applewood"],
    ["malton", "Malton"],
    ["sheridan", "Sheridan"],
    ["churchill-meadows", "Churchill Meadows"],
  ];

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: "Popcorn Ceiling Removal",
        serviceType: [
          "Popcorn/Stipple/Stucco Ceiling Removal",
          "Ceiling Smoothing & Flattening",
          "Level 5 Skim Coat",
          "Ceiling Resurfacing",
        ],
        areaServed: "Mississauga",
        url: PAGE_URL,
        provider: { "@id": ORG_ID },
        potentialAction: {
          "@type": "RequestQuoteAction",
          target: `${BASE_URL}/quote/`,
        },
      },
      {
        "@type": "ItemList",
        name: "Mississauga Neighbourhoods We Serve",
        itemListElement: neighborhoods.map(([slug, name], i) => ({
          "@type": "ListItem",
          position: i + 1,
          name,
          url: `${BASE_URL}${PAGE_PATH}${slug}/`,
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Service Areas",
            item: `${BASE_URL}/service-areas/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Popcorn Ceiling Removal",
            item: `${BASE_URL}/popcorn-ceiling-removal/`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Mississauga",
            item: PAGE_URL,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "How do you keep the house clean?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We set up full containment, mask vents, connect every tool to a HEPA vacuum, and do daily clean downs so non-work rooms stay livable.",
            },
          },
          {
            "@type": "Question",
            name: "Can you coordinate pot lights or electricians?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. We sync schedules with your electrician or bring ours. Cutouts are skimmed so trim rings sit tight.",
            },
          },
          {
            "@type": "Question",
            name: "Is pricing by square foot or fixed?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Both. Open spaces often use sq-ft rates, while bedrooms or hallways are quoted as fixed packages after photos.",
            },
          },
          {
            "@type": "Question",
            name: "Do you paint the ceilings too?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We prime every project and can finish with two coats of high-hiding ceiling paint, or hand it off to your painter.",
            },
          },
          {
            "@type": "Question",
            name: "What about asbestos testing?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "If the home predates 1990, we refer a local lab for rapid testing. We follow the safe removal or encapsulation method based on results.",
            },
          },
          {
            "@type": "Question",
            name: "Do you work in condos?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes—elevator bookings, parking, and loading dock logistics are handled for downtown Mississauga towers.",
            },
          },
          {
            "@type": "Question",
            name: "How long does popcorn ceiling removal take?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Most bedrooms take 1-2 days, while main-floor living areas take 2-3 days. Whole-home projects typically span 4-7 days depending on square footage, painted texture, and drying time between coats.",
            },
          },
          {
            "@type": "Question",
            name: "How soon can you start my Mississauga project?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We typically book 1-3 weeks out, but rush scheduling is available for vacant properties or pre-sale renovations. Send photos for a quote and we'll confirm the earliest available window.",
            },
          },
          {
            "@type": "Question",
            name: "How do you handle painted popcorn ceilings?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Painted texture requires encapsulation rather than scraping. We apply bonding primer, then full-surface skim coat with setting compound to create a smooth Level 5 finish. This adds 1-2 days to the timeline but delivers flawless results.",
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
const phoneDisplay = (CONTACT && CONTACT.phone) || "(647) 923-6784";
const smsHref = phoneHref.replace("tel:", "sms:");
const phoneAriaLabel = `Call Popcorn ceiling removal EPF Pro Services at ${phoneDisplay}`;
const smsAriaLabel = `Text Popcorn ceiling removal EPF Pro Services at ${phoneDisplay}`;

export default function Page() {
  const neighborhoods = [
    ["port-credit", "Port Credit"],
    ["lorne-park", "Lorne Park"],
    ["clarkson", "Clarkson"],
    ["erin-mills", "Erin Mills"],
    ["streetsville", "Streetsville"],
    ["meadowvale", "Meadowvale"],
    ["meadowvale-village", "Meadowvale Village"],
    ["city-centre", "City Centre"],
    ["hurontario", "Hurontario"],
    ["east-credit", "East Credit"],
    ["lakeview", "Lakeview"],
    ["mineola", "Mineola"],
    ["cooksville", "Cooksville"],
    ["applewood", "Applewood"],
    ["malton", "Malton"],
    ["sheridan", "Sheridan"],
    ["churchill-meadows", "Churchill Meadows"],
  ];

  const images = Array.from(
    { length: 6 },
    (_, i) => `/services/popcorn-ceiling-removal/${i + 1}.webp`
  );
  const heroStats = [
    { label: "Mississauga ceilings smoothed from 2008", value: "6000+" },
    { label: "Photo quote turnaround", value: "< 4 hrs" },
    { label: "Projects delivered dust-controlled", value: "100%" },
  ];
  const anchorLinks = [
    ["#coverage", "Neighbourhoods"],
    ["#gallery", "Gallery"],
    ["#why-us", "Why us"],
    ["#process", "Process"],
    ["#pricing", "Pricing"],
    ["#faqs", "FAQs"],
  ];
  const quickLinks = [
    { href: "/our-work/", label: "See completed ceilings" },
    { href: "/services/popcorn-ceiling-removal/", label: "Service overview" },
    { href: "/our-process/", label: "Dust-control process" },
    { href: "/contact/", label: "Book a site visit" },
  ];
  const nearbyCities = [
    ["oakville", "Oakville"],
    ["burlington", "Burlington"],
    ["toronto", "Toronto"],
    ["etobicoke", "Etobicoke"],
    ["milton", "Milton"],
    ["hamilton", "Hamilton"],
  ];
  const sellingPoints = [
    {
      title: "House-friendly containment",
      body: "Floors, furniture, and vents are wrapped before we touch a ceiling. Zip walls create clean zones so the rest of your home stays livable.",
      href: "/our-process/",
      cta: "Prep checklist",
    },
    {
      title: "Level 5 finish with QA lighting",
      body: "We skim the entire surface, sand with HEPA vacuums, then inspect under raking light so joints disappear before paint.",
      href: "/services/popcorn-ceiling-removal/",
      cta: "See service details",
    },
    {
      title: "Coordinated trade timing",
      body: "Need pot lights, painting, or built-ins afterward? We sync our schedule with your electrician or painter to keep the reno moving.",
      href: "/services/interior-painting/",
      cta: "Finish coat options",
    },
    {
      title: "Photo-first estimating",
      body: "Text or upload photos and approximate sizes for an initial number. We confirm on-site so there are no mid-project surprises.",
      href: "/quote/",
      cta: "Send photos",
    },
  ];
  const processSteps = [
    {
      title: "Contain + protect",
      body: "Mask floors, walls, fixtures, and vents. Build plastic tunnels so HEPA vacs can stay outside the work zone.",
    },
    {
      title: "Test + choose method",
      body: "Sample scrape to gauge paint build-up. We either carefully remove, or encapsulate and skim depending on the result.",
    },
    {
      title: "Removal & skim",
      body: "Texture comes off, then we full-field skim with setting compounds for a flat plane (no banding).",
    },
    {
      title: "Sand with HEPA",
      body: "Vacuum-assisted sanders keep dust contained while revealing highs/lows for touch-ups.",
    },
    {
      title: "Prime + inspect",
      body: "Stain-block primer locks everything in. Raking light reveals micro flaws before paint.",
    },
    {
      title: "Paint or hand-off",
      body: "We can apply two coats of ceiling paint or leave a perfectly documented paint-ready surface.",
    },
  ];
  const serviceCombos = [
    {
      title: "Popcorn removal + interior painting",
      body: "Keep momentum going—our painting team can roll right after primer for a turnkey ceiling refresh.",
      href: "/services/interior-painting/",
    },
    {
      title: "Ceiling smoothing + drywall repairs",
      body: "Blend in bulkhead repairs, new framing, or drywall patches while we’re already skimming.",
      href: "/services/drywall-installation/",
    },
    {
      title: "Texture removal + wallpaper cleanup",
      body: "Pair smooth ceilings with fresh walls. Our wallpaper removal crew can clear walls before paint.",
      href: "/services/wallpaper-removal/",
    },
  ];

  return (
    <>
      <div className="space-y-12 pb-12">
        <JsonLd />

        {/* HERO */}
        <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900 text-white">
          <div className="container-x px-4 py-14">
            <div className="max-w-7xl mx-auto">
              {/* Hero Content */}
              <div className="max-w-4xl mb-12">
                <p className="text-xs uppercase tracking-[0.3em] text-blue-300 font-semibold">
                  Mississauga • Dust-controlled popcorn removal
                </p>
                <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                  Popcorn Ceiling Removal Mississauga
                </h1>
                <p className="mt-4 text-xl text-slate-200 max-w-3xl">
                  We convert popcorn, stipple, and stucco ceilings to flat white
                  surfaces with HEPA containment, Level 5 skim coating, and
                  concierge-style communication. Most Mississauga quotes are
                  turned around the same day you send photos.
                </p>
              </div>

              {/* Two Column Grid - Advantages + Quick Nav */}
              <div className="grid lg:grid-cols-2 gap-8 mb-10">
                {/* MISSISSAUGA-SPECIFIC ADVANTAGES */}
                <div className="rounded-2xl border-2 border-blue-400 bg-blue-900/20 p-6">
                  <p className="text-sm font-bold text-blue-300 mb-4 uppercase tracking-wider">
                    ✓ Why Mississauga Homeowners Choose Us
                  </p>
                  <ul className="space-y-3 text-sm text-white">
                    <li className="flex items-start gap-3">
                      <span className="text-blue-400 font-bold text-lg">✓</span>
                      <span>
                        <strong className="text-blue-300">
                          Condo-ready logistics:
                        </strong>{" "}
                        Elevator bookings, insurance coordination, and hallway
                        protection for Square One towers, Port Credit
                        high-rises, and Hurontario condos
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-400 font-bold text-lg">✓</span>
                      <span>
                        <strong className="text-blue-300">
                          Local Mississauga team:
                        </strong>{" "}
                        Dispatched from Port Credit covering Streetsville, Erin
                        Mills, Churchill Meadows, Clarkson, and all 17
                        neighborhoods daily
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-400 font-bold text-lg">✓</span>
                      <span>
                        <strong className="text-blue-300">
                          4-hour photo quotes:
                        </strong>{" "}
                        Text ceiling pictures and measurements—get detailed
                        pricing before lunch, confirmed availability by dinner
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-400 font-bold text-lg">✓</span>
                      <span>
                        <strong className="text-blue-300">
                          HEPA dust containment:
                        </strong>{" "}
                        Sealed work zones, vacuum-assisted sanding, and daily
                        cleanup—rest of your home stays livable during the
                        project
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-400 font-bold text-lg">✓</span>
                      <span>
                        <strong className="text-blue-300">
                          Painted texture expertise:
                        </strong>{" "}
                        Full skim coating for stubborn painted popcorn common in
                        2000s-era Meadowvale and East Credit developments
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-400 font-bold text-lg">✓</span>
                      <span>
                        <strong className="text-blue-300">
                          Trade coordination:
                        </strong>{" "}
                        Sync with your Mississauga electrician for pot lights or
                        our painting crews for turnkey ceiling-to-walls packages
                      </span>
                    </li>
                  </ul>
                </div>

                {/* QUICK JUMP MENU */}
                <div className="rounded-2xl border-2 border-blue-400 bg-blue-900/20 p-6">
                  <p className="text-xs uppercase tracking-wider text-blue-300 font-bold mb-4">
                    📋 Quick Navigation
                  </p>
                  <nav className="flex flex-wrap gap-3">
                    {anchorLinks.map(([href, label]) => (
                      <a
                        key={href}
                        href={href}
                        className="inline-flex items-center gap-2 rounded-full border-2 border-blue-400/50 bg-blue-900/40 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-800/60 hover:border-blue-300 transition-all"
                      >
                        {label}
                      </a>
                    ))}
                  </nav>

                  <div className="mt-6 pt-6 border-t border-blue-400/30">
                    <p className="text-sm text-slate-200 mb-4">
                      Need the full workflow? Explore our{" "}
                      <Link
                        href="/services/popcorn-ceiling-removal/"
                        className="text-blue-300 underline underline-offset-2 hover:text-blue-200"
                      >
                        comprehensive popcorn ceiling removal guide
                      </Link>{" "}
                      for detailed process information, or check our{" "}
                      <Link
                        href="/blog/popcorn-ceiling-removal-cost-timeline/"
                        className="text-blue-300 underline underline-offset-2 hover:text-blue-200"
                      >
                        cost & timeline breakdown
                      </Link>
                      .
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature Bullets */}
              <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-slate-200 mb-10">
                <li className="flex gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <span className="text-2xl">🧼</span>
                  <span>
                    Full containment, zipper walls, and HEPA sanding to keep
                    dust out of the rest of your home.
                  </span>
                </li>
                <li className="flex gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <span className="text-2xl">🪜</span>
                  <span>
                    Level 5 skim coating + primer so ceilings are ready for
                    finish paint right away.
                  </span>
                </li>
                <li className="flex gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <span className="text-2xl">🗓️</span>
                  <span>
                    Predictable scheduling and clean wrap-ups in Port Credit,
                    Sheridan, Clarkson, Streetsville, and every pocket in
                    between.
                  </span>
                </li>
                <li className="flex gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <span className="text-2xl">📸</span>
                  <span>
                    Share photos below for pricing or text us directly if that's
                    faster.
                  </span>
                </li>
              </ul>

              {/* Stats + CTA Buttons */}
              <div className="flex flex-col lg:flex-row gap-8 items-center justify-between">
                <div className="grid grid-cols-3 gap-6 flex-1">
                  {heroStats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center shadow-lg"
                    >
                      <div className="text-3xl font-bold text-white">
                        {stat.value}
                      </div>
                      <p className="text-xs uppercase tracking-wide text-slate-300 mt-2">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="#quote"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full transition-all shadow-xl text-lg"
                  >
                    <span>📋</span> Get Free Quote
                  </a>
                  <a
                    href={phoneHref}
                    aria-label={phoneAriaLabel}
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/30 hover:border-white hover:bg-white/10 text-white font-bold rounded-full transition-all shadow-xl text-lg"
                  >
                    <span>📞</span> {phoneDisplay}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* QUOTE FORM SECTION - Separate */}
        <section id="quote" className="container-x -mt-8 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left Column - Info */}
              <div>
                <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-bold mb-4">
                  FAST & ACCURATE QUOTES
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                  Get Your Mississauga Quote
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Upload photos, ceiling heights, and timing. We reply the same
                  day with square-foot guidance and availability.
                </p>

                <div className="space-y-4">
                  {[
                    {
                      icon: "💧",
                      title: "Water damage & ceilings",
                      desc: "Moisture mapping and ceiling water damage repair Mississauga insurance adjusters trust.",
                    },
                    {
                      icon: "🧱",
                      title: "Trade cut-outs",
                      desc: "Coordinated popcorn removal after pot light installation, HVAC upgrades, and electrical work.",
                    },
                    {
                      icon: "✨",
                      title: "Finish perfection",
                      desc: "Level 5 skim coat and sanding for no visible texture lines Mississauga homeowners demand.",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl border border-gray-200"
                    >
                      <div className="text-3xl">{item.icon}</div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column - Form */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl border-2 border-blue-200 p-8 shadow-xl">
                <QuoteForm />
                <div className="mt-6 pt-6 border-t border-blue-200 text-center">
                  <p className="text-sm text-gray-600 mb-3">
                    Need immediate help?
                  </p>
                  <a
                    href={phoneHref}
                    aria-label={phoneAriaLabel}
                    className="inline-flex items-center gap-2 text-xl font-bold text-blue-600 hover:text-blue-700"
                  >
                    📞 {phoneDisplay}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* COVERAGE + INTERNAL LINKS */}
        <section id="coverage" className="container-x px-4">
          <div className="rounded-3xl border bg-white p-6 shadow-xl ring-1 ring-black/5">
            <div>
              <h2 className="text-2xl font-semibold">
                Mississauga neighbourhoods we service weekly
              </h2>
              <p className="mt-2 text-slate-600">
                Detached homes, semis, condos, and townhomes across every
                Mississauga pocket. Jump into a local guide for photos and
                project notes.
              </p>
              <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {neighborhoods.map(([slug, name]) => (
                  <Link
                    key={slug}
                    href={`/popcorn-ceiling-removal/mississauga/${slug}/`}
                    className="group rounded-2xl border border-slate-200 px-4 py-3 text-sm hover:border-slate-900 hover:bg-slate-50 transition-all"
                    title={`${name} popcorn ceiling removal`}
                  >
                    <span className="font-medium text-slate-900 group-hover:text-slate-900">
                      {name}
                    </span>
                    <span className="block text-xs text-slate-500 mt-0.5">
                      Popcorn, stipple & stucco removal
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="container-x px-4">
          <div className="rounded-3xl border bg-gradient-to-br from-blue-50 to-white p-8 shadow-xl ring-1 ring-black/5">
            <div className="text-center mb-8">
              <p className="text-xs uppercase tracking-[0.3em] text-blue-600 font-semibold">
                Real Mississauga reviews
              </p>
              <h2 className="mt-2 text-3xl font-bold text-gray-900">
                Mississauga homeowners say…
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
              <div className="rounded-2xl border border-blue-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-blue-500">
                      ⭐
                    </span>
                  ))}
                </div>
                <p className="text-gray-700 text-sm mb-4">
                  "Clean, professional crew. They contained everything and our
                  Port Credit condo stayed dust-free. Level 5 finish looks
                  amazing under our pot lights."
                </p>
                <p className="text-xs text-gray-500 font-semibold">
                  — Sarah M., Port Credit
                </p>
              </div>

              <div className="rounded-2xl border border-blue-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-blue-500">
                      ⭐
                    </span>
                  ))}
                </div>
                <p className="text-gray-700 text-sm mb-4">
                  "Fast quote turnaround and they coordinated perfectly with our
                  electrician. Streetsville house looks modern now. Highly
                  recommend!"
                </p>
                <p className="text-xs text-gray-500 font-semibold">
                  — James T., Streetsville
                </p>
              </div>

              <div className="rounded-2xl border border-blue-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-blue-500">
                      ⭐
                    </span>
                  ))}
                </div>
                <p className="text-gray-700 text-sm mb-4">
                  "Removed painted popcorn from our entire Erin Mills home.
                  Daily updates, zero mess, and the finish is flawless. Worth
                  every penny."
                </p>
                <p className="text-xs text-gray-500 font-semibold">
                  — Priya K., Erin Mills
                </p>
              </div>

              <div className="rounded-2xl border border-blue-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-blue-500">
                      ⭐
                    </span>
                  ))}
                </div>
                <p className="text-gray-700 text-sm mb-4">
                  "Completed our Clarkson semi in 2 days. HEPA system really
                  works—no dust anywhere else in the house. Very impressed with
                  the quality."
                </p>
                <p className="text-xs text-gray-500 font-semibold">
                  — Mike R., Clarkson
                </p>
              </div>

              <div className="rounded-2xl border border-blue-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-blue-500">
                      ⭐
                    </span>
                  ))}
                </div>
                <p className="text-gray-700 text-sm mb-4">
                  "Needed asbestos test first—they handled everything and kept
                  us informed. Cooksville townhouse ceilings look brand new.
                  Great communication."
                </p>
                <p className="text-xs text-gray-500 font-semibold">
                  — Linda C., Cooksville
                </p>
              </div>

              <div className="rounded-2xl border border-blue-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-blue-500">
                      ⭐
                    </span>
                  ))}
                </div>
                <p className="text-gray-700 text-sm mb-4">
                  "Vaulted ceilings in Churchill Meadows—they set up proper
                  scaffolding and the result is perfect. Pricing was fair and
                  transparent."
                </p>
                <p className="text-xs text-gray-500 font-semibold">
                  — David L., Churchill Meadows
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://maps.app.goo.gl/QkkUQQPZc6oSyvJy9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-4 font-semibold text-white hover:bg-blue-700 active:bg-blue-800 transition-colors shadow-lg"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                Read Google Reviews
              </a>
              <a
                href="https://www.homestars.com/profile/2872320-epf-pro-services"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-orange-600 px-8 py-4 font-semibold text-white hover:bg-orange-700 active:bg-orange-800 transition-colors shadow-lg"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                View HomeStars Profile
              </a>
            </div>
          </div>
        </section>

        {/* GALLERY + APPROACH */}
        <section id="gallery" className="container-x px-4">
          <div className="grid gap-8 lg:grid-cols-[3fr_2fr]">
            <div className="rounded-3xl border bg-white p-6 shadow-lg ring-1 ring-black/5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-blue-600">
                    Field photos
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold">
                    Recent Mississauga Popcorn, Stipple & Stucco Ceiling Removal
                    Projects
                  </h2>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {images.map((src, idx) => (
                  <div
                    key={src}
                    className="overflow-hidden rounded-2xl border border-slate-100"
                  >
                    <img
                      src={src}
                      alt={`Mississauga ${
                        ["popcorn", "stipple", "stucco"][idx % 3]
                      } ceiling removal before and after ${idx + 1}`}
                      className="h-44 w-full object-cover transition duration-500 hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border bg-slate-900 p-6 text-white shadow-lg ring-1 ring-black/5">
              <p className="text-xs uppercase tracking-[0.3em] text-blue-300">
                What to expect
              </p>
              <h2 className="mt-3 text-2xl font-semibold">
                Mississauga Concierge Popcorn Removal
              </h2>
              <p className="mt-3 text-sm text-slate-200">
                Whether your Mississauga home has popcorn, stipple, or stucco
                ceilings, every project gets a dedicated lead, daily text/photo
                updates, and full clean downs before we leave.
              </p>
              <ul className="mt-6 space-y-4 text-sm">
                <li className="flex gap-3">
                  <span>📍</span>
                  <span>
                    Local dispatch from Port Credit covers Clarkson, Mineola,
                    Lakeview, Erin Mills, Churchill Meadows, and new builds
                    north of Britannia.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span>🧰</span>
                  <span>
                    We coordinate with{" "}
                    <Link
                      href="/services/drywall-installation/"
                      className="underline underline-offset-2"
                    >
                      drywall
                    </Link>{" "}
                    or{" "}
                    <Link
                      href="/services/wallpaper-removal/"
                      className="underline underline-offset-2"
                    >
                      wallpaper
                    </Link>{" "}
                    crews when ceilings and walls both need love.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span>📅</span>
                  <span>
                    Weekend or evening set-ups available for condos that have
                    strict elevator booking windows.
                  </span>
                </li>
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  className="btn-cta"
                  href={phoneHref}
                  aria-label={phoneAriaLabel}
                >
                  📞 {phoneDisplay}
                </a>
                <a className="btn-cta" href="/quote/">
                  Get my quote
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* WHY US */}
        <section id="why-us" className="container-x px-4">
          <div className="rounded-3xl border bg-white p-6 shadow-xl ring-1 ring-black/5">
            <p className="text-xs uppercase tracking-[0.3em] text-blue-600">
              Why Choose Us in Mississauga
            </p>
            <h2 className="mt-2 text-3xl font-semibold">
              Mississauga's Trusted Popcorn, Stipple & Stucco Ceiling
              Specialists
            </h2>
            <p className="mt-3 text-gray-600 leading-relaxed">
              From Port Credit waterfront condos to Churchill Meadows family
              homes, we deliver dust-controlled, Level 5 ceiling transformations
              without the drama. Learn more about our{" "}
              <Link
                href="/our-process/"
                className="text-blue-600 underline underline-offset-2 hover:text-blue-700"
              >
                dust containment process
              </Link>{" "}
              and{" "}
              <Link
                href="/services/popcorn-ceiling-removal/"
                className="text-blue-600 underline underline-offset-2 hover:text-blue-700"
              >
                Level 5 finishing standards
              </Link>
              .
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {sellingPoints.map((point) => (
                <div
                  key={point.title}
                  className="rounded-2xl border border-slate-200 p-5 shadow-sm"
                >
                  <h3 className="text-lg font-semibold">{point.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{point.body}</p>
                  {point.href && (
                    <Link
                      href={point.href}
                      className="inline-flex items-center gap-1 mt-3 text-sm font-semibold text-blue-600 hover:text-blue-700"
                    >
                      {point.cta}
                      <span className="text-xs">→</span>
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section id="process" className="container-x px-4">
          <div className="rounded-3xl border bg-slate-900 p-6 text-white shadow-xl ring-1 ring-black/5">
            <p className="text-xs uppercase tracking-[0.3em] text-blue-300">
              Proven workflow
            </p>
            <h2 className="mt-2 text-3xl font-semibold">
              6-step Mississauga playbook
            </h2>
            <ol className="mt-6 space-y-5">
              {processSteps.map((step, idx) => (
                <li key={step.title} className="flex gap-4">
                  <span className="mt-1 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-lg font-semibold">
                    {idx + 1}
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                    <p className="text-sm text-slate-200">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* PRICING */}
        <section id="pricing" className="container-x px-4">
          <div className="rounded-3xl border bg-white p-6 shadow-xl ring-1 ring-black/5">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-blue-600">
                  Pricing outlook
                </p>
                <h2 className="mt-1 text-3xl font-semibold">
                  Square-foot guidance + fixed packages
                </h2>
                <p className="mt-2 text-slate-600">
                  Paint layers, ceiling height, repairs, and condo rules impact
                  the final number. We spell that out before we mobilize.
                </p>
              </div>
              <div className="flex gap-3">
                <a
                  className="btn-cta"
                  href={phoneHref}
                  aria-label={phoneAriaLabel}
                >
                  Call {phoneDisplay}
                </a>
                <a className="btn-cta" href="/quote/">
                  Share photos
                </a>
              </div>
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 p-5">
                <h3 className="text-lg font-semibold">Typical scopes</h3>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-600">
                  <li>Bedrooms + closets (150–250 sq. ft.)</li>
                  <li>Main-floor living/dining + hallway</li>
                  <li>Open-concept condos with bulkheads</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 p-5">
                <h3 className="text-lg font-semibold">Premium services</h3>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-600">
                  <li>Dust-controlled popcorn removal (HEPA)</li>
                  <li>Ceiling resurfacing + Level 5 skim</li>
                  <li>Pot-light patching + shadow line repairs</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 p-5">
                <h3 className="text-lg font-semibold">Popular add-ons</h3>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-600">
                  <li>Stain-block primer + 2 coats paint</li>
                  <li>Crack, nail pop, or corner bead repairs</li>
                  <li>Coordination with electricians + painters</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 rounded-2xl border border-dashed border-blue-300 bg-blue-50/60 p-5 text-sm text-slate-700">
              <p className="font-semibold text-blue-900 mb-2">
                Common Mississauga Searches:
              </p>
              <p>
                Homeowners search for: popcorn ceiling removal Mississauga,{" "}
                <strong>stucco ceiling removal Mississauga</strong>,{" "}
                <strong>stipple ceiling removal Mississauga</strong>, dustless
                popcorn removal, Level 5 skim coat contractors,{" "}
                <strong>popcorn ceiling removal cost Mississauga</strong>,
                pot-light coordination, textured ceiling removal, and asbestos
                testing referrals. For detailed pricing breakdowns, see our{" "}
                <Link
                  href="/blog/popcorn-ceiling-removal-cost-timeline/"
                  className="text-blue-700 underline underline-offset-2 hover:text-blue-800"
                >
                  cost & timeline guide
                </Link>
                . Send photos and we'll confirm the right plan for your specific
                ceiling type.
              </p>
            </div>

            {/* COST SNAPSHOT */}
            <div className="mt-6 rounded-2xl border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-white p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">💰</span>
                <h3 className="text-2xl font-bold text-gray-900">
                  Cost Snapshot
                </h3>
              </div>

              <p className="text-gray-700 mb-4">
                <strong>
                  Most Mississauga projects land around $6–$9/sq ft
                </strong>{" "}
                depending on painted texture, ceiling height, repairs, and
                access. Here's a quick breakdown:
              </p>

              <div className="overflow-x-auto mb-4">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-blue-100 border-b-2 border-blue-300">
                      <th className="text-left p-3 font-bold text-gray-900">
                        Project Type
                      </th>
                      <th className="text-left p-3 font-bold text-gray-900">
                        Typical Range
                      </th>
                      <th className="text-left p-3 font-bold text-gray-900">
                        What's Included
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-blue-50 transition">
                      <td className="p-3 font-semibold text-gray-900">
                        Unpainted Texture
                      </td>
                      <td className="p-3 text-gray-700">$6–$7/sq ft</td>
                      <td className="p-3 text-gray-600">
                        Scrape, Level 5 skim, prime
                      </td>
                    </tr>
                    <tr className="hover:bg-blue-50 transition">
                      <td className="p-3 font-semibold text-gray-900">
                        Painted Popcorn
                      </td>
                      <td className="p-3 text-gray-700">$8–$9/sq ft</td>
                      <td className="p-3 text-gray-600">
                        Encapsulation, full skim, prime
                      </td>
                    </tr>
                    <tr className="hover:bg-blue-50 transition">
                      <td className="p-3 font-semibold text-gray-900">
                        High/Vaulted Ceilings
                      </td>
                      <td className="p-3 text-gray-700">+30–50%</td>
                      <td className="p-3 text-gray-600">
                        Scaffolding, extended labor
                      </td>
                    </tr>
                    <tr className="hover:bg-blue-50 transition">
                      <td className="p-3 font-semibold text-gray-900">
                        Paint Add-On
                      </td>
                      <td className="p-3 text-gray-700">+$2–$3/sq ft</td>
                      <td className="p-3 text-gray-600">
                        Two coats premium ceiling paint
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-white rounded-xl p-4 border border-blue-200">
                <p className="text-sm font-semibold text-gray-900 mb-2">
                  Need area-specific pricing?
                </p>
                <p className="text-xs text-gray-600">
                  Each neighborhood above has detailed cost breakdowns based on
                  local property types, ceiling heights, and common project
                  scopes. Click any neighborhood link for location-specific
                  pricing.
                </p>
              </div>

              <p className="mt-4 text-xs text-gray-600 italic">
                * Ranges are estimates. Send photos for accurate pricing based
                on your specific ceiling condition, height, and access.
              </p>
            </div>
          </div>
        </section>

        {/* SERVICE COMBOS */}
        <section className="container-x px-4">
          <div className="rounded-3xl border bg-white p-6 shadow-xl ring-1 ring-black/5">
            <p className="text-xs uppercase tracking-[0.3em] text-blue-600">
              Stack services
            </p>
            <h2 className="mt-2 text-3xl font-semibold">
              Extend the refresh beyond ceilings
            </h2>
            <p className="mt-3 text-gray-600 leading-relaxed">
              Mississauga homeowners often bundle ceiling smoothing with other
              finishing services for maximum value. Explore our full range of{" "}
              <Link
                href="/services/"
                className="text-blue-600 underline underline-offset-2 hover:text-blue-700"
              >
                interior finishing services
              </Link>
              .
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {serviceCombos.map((combo) => (
                <div
                  key={combo.title}
                  className="rounded-2xl border border-slate-200 p-5 shadow-sm"
                >
                  <h3 className="text-lg font-semibold">{combo.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{combo.body}</p>
                  {combo.href && (
                    <Link
                      href={combo.href}
                      className="inline-flex items-center gap-1 mt-3 text-sm font-semibold text-blue-600 hover:text-blue-700"
                    >
                      Learn more
                      <span className="text-xs">→</span>
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faqs" className="container-x px-4">
          <div className="rounded-3xl border bg-white p-6 shadow-xl ring-1 ring-black/5">
            <p className="text-xs uppercase tracking-[0.3em] text-blue-600">
              Mississauga FAQs
            </p>
            <h2 className="mt-2 text-3xl font-semibold">
              Answers homeowners ask before booking
            </h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {[
                {
                  q: "How do you keep the house clean?",
                  a: "We set up full containment, mask vents, connect every tool to a HEPA vacuum, and do daily clean downs so non-work rooms stay livable.",
                },
                {
                  q: "Can you coordinate pot lights or electricians?",
                  a: "Yes. We sync schedules with your electrician or bring ours. Cutouts are skimmed so trim rings sit tight.",
                },
                {
                  q: "Is pricing by square foot or fixed?",
                  a: "Both. Open spaces often use sq-ft rates, while bedrooms or hallways are quoted as fixed packages after photos.",
                },
                {
                  q: "Do you paint the ceilings too?",
                  a: "We prime every project and can finish with two coats of high-hiding ceiling paint, or hand it off to your painter.",
                },
                {
                  q: "What about asbestos testing?",
                  a: "If the home predates 1990, we refer a local lab for rapid testing. We follow the safe removal or encapsulation method based on results.",
                },
                {
                  q: "Do you work in condos?",
                  a: "Yes—elevator bookings, parking, and loading dock logistics are handled for downtown Mississauga towers.",
                },
                {
                  q: "How long does popcorn ceiling removal take?",
                  a: "Most bedrooms take 1-2 days, while main-floor living areas take 2-3 days. Whole-home projects typically span 4-7 days depending on square footage, painted texture, and drying time between coats.",
                },
                {
                  q: "How soon can you start my Mississauga project?",
                  a: "We typically book 1-3 weeks out, but rush scheduling is available for vacant properties or pre-sale renovations. Send photos for a quote and we'll confirm the earliest available window.",
                },
                {
                  q: "How do you handle painted popcorn ceilings?",
                  a: "Painted texture requires encapsulation rather than scraping. We apply bonding primer, then full-surface skim coat with setting compound to create a smooth Level 5 finish. This adds 1-2 days to the timeline but delivers flawless results.",
                },
              ].map((faq) => (
                <details
                  key={faq.q}
                  className="rounded-2xl border border-slate-200 p-5 shadow-sm"
                >
                  <summary className="cursor-pointer text-lg font-semibold">
                    {faq.q}
                  </summary>
                  <p className="mt-2 text-sm text-slate-600">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* LINKS + CTA */}
        <section className="container-x px-4">
          <div className="rounded-3xl border bg-slate-900 p-6 text-white shadow-xl ring-1 ring-black/5">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-3xl font-semibold">
                  Ready for flat, bright ceilings?
                </h2>
                <p className="text-sm text-slate-200">
                  Send photos, get a plan, and lock in your preferred window.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700 active:bg-blue-800 transition-colors"
                  href={phoneHref}
                  aria-label={phoneAriaLabel}
                >
                  📞 {phoneDisplay}
                </a>
                <a
                  className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700 active:bg-blue-800 transition-colors"
                  href="/quote/"
                >
                  Start my quote
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* LOCAL SEO CONTENT - Mississauga Specific */}
        <section className="container-x px-4">
          <div className="rounded-3xl border bg-white p-8 shadow-xl ring-1 ring-black/5">
            <h2 className="text-3xl font-bold mb-6">
              Mississauga Popcorn Ceiling Removal Services
            </h2>

            <div className="prose prose-slate max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                As Ontario's third-largest city and a major commercial hub in
                the Greater Toronto Area, Mississauga presents unique challenges
                for <strong>popcorn ceiling removal</strong>. Whether you have
                popcorn, stipple, or stucco textured ceilings, our specialized
                teams understand the diverse architectural landscape—from
                vintage 1960s-1980s homes near historic Port Credit to modern
                high-rise developments along the Hurontario LRT corridor and
                sprawling residential communities in Churchill Meadows and Erin
                Mills.
              </p>

              {/* Collapsed Accordion for Deep Dive Content */}
              <details className="mt-8 rounded-2xl border-2 border-slate-200 bg-slate-50">
                <summary className="cursor-pointer p-6 text-xl font-bold text-gray-900 hover:bg-slate-100 transition-colors">
                  📋 Mississauga Popcorn Ceiling Removal Details – Complete
                  Local Guide
                  <span className="float-right text-blue-600">▼</span>
                </summary>

                <div className="p-6 pt-0 border-t border-slate-200">
                  <h3 className="text-2xl font-semibold mt-6 mb-4">
                    Why Mississauga Homes Need Professional Ceiling Services
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Mississauga's rapid growth from a collection of villages to
                    Canada's sixth most populous city means homes span six
                    decades of construction styles. Older neighborhoods like
                    Malton,{" "}
                    <Link
                      href="/popcorn-ceiling-removal/mississauga/cooksville/"
                      className="text-blue-600 underline"
                    >
                      Cooksville
                    </Link>
                    , and Lakeview often feature original popcorn, stipple, or
                    stucco ceilings from the 1970s and 1980s that now clash with
                    modern design expectations. Meanwhile, newer areas like East
                    Credit and Meadowvale Village frequently have painted
                    stipple or stucco textures that require specialized skim
                    coating rather than simple scraping.
                  </p>

                  <h3 className="text-2xl font-semibold mt-8 mb-4">
                    Navigating Mississauga's Building Regulations
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Working across Mississauga means understanding local
                    requirements and logistics that affect every ceiling
                    project:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                    <li>
                      <strong>Peel Region waste management:</strong> Proper
                      disposal of texture material through designated
                      facilities, with documentation for environmental
                      compliance
                    </li>
                    <li>
                      <strong>Condo corporation rules:</strong> Strict elevator
                      booking systems, insurance requirements, and noise bylaws
                      at high-density developments near Square One and City
                      Centre
                    </li>
                    <li>
                      <strong>Heritage district considerations:</strong> Older
                      Port Credit and Streetsville properties that may require
                      asbestos testing before disturbing ceiling materials
                    </li>
                    <li>
                      <strong>Transit-oriented development standards:</strong>{" "}
                      Coordinating with building managers at new LRT-adjacent
                      towers along Hurontario Street
                    </li>
                    <li>
                      <strong>Municipal inspection protocols:</strong>{" "}
                      Compliance with City of Mississauga building codes when
                      ceiling work involves structural repairs or modifications
                    </li>
                  </ul>

                  <h3 className="text-2xl font-semibold mt-8 mb-4">
                    Mississauga's Diverse Housing Stock
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    The city's evolution from suburban sprawl to urban center
                    creates a complex residential landscape.{" "}
                    <strong>
                      Popcorn, stipple, and stucco ceiling removal in
                      Mississauga
                    </strong>{" "}
                    isn't one-size-fits-all:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                    <li>
                      <strong>Waterfront luxury condos:</strong> Port Credit's
                      lakeside towers like The Sail and Bridgewater demand
                      meticulous dust control and pristine finishes—bright
                      natural light from Lake Ontario reveals every imperfection
                    </li>
                    <li>
                      <strong>Mid-century single-family homes:</strong>{" "}
                      Established neighborhoods throughout central Mississauga
                      feature post-war construction with challenging access, low
                      basements, and textured ceilings that may contain asbestos
                    </li>
                    <li>
                      <strong>New construction developments:</strong> Erin Mills
                      and Churchill Meadows see ongoing builder projects where
                      we coordinate with other trades during final finishing
                      phases
                    </li>
                    <li>
                      <strong>Townhouse complexes:</strong> High-density
                      residential areas require careful staging, shared wall
                      considerations, and coordination with condo boards for
                      common area protection
                    </li>
                    <li>
                      <strong>Commercial-residential mixed use:</strong>{" "}
                      Downtown core properties along Burnhamthorpe and
                      Hurontario often have challenging parking, elevator
                      logistics, and tight scheduling windows
                    </li>
                  </ul>

                  <h3 className="text-2xl font-semibold mt-8 mb-4">
                    Local Market Knowledge
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Our Mississauga expertise extends beyond just technical
                    execution. We understand how ceiling upgrades affect
                    property values in different submarkets. Port Credit
                    waterfront properties command premium pricing, so Level 5
                    finishes are non-negotiable for pre-sale renovations.
                    Streetsville's heritage character attracts buyers seeking
                    character homes—smooth ceilings help modernize dated
                    interiors while preserving charm. Erin Mills family
                    neighborhoods prioritize quick turnarounds so homes aren't
                    disrupted during school years.
                  </p>

                  <h3 className="text-2xl font-semibold mt-8 mb-4">
                    Coordinating with Mississauga Trades
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We partner with local Mississauga suppliers and contractors
                    to ensure seamless project delivery:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                    <li>
                      <strong>Material suppliers:</strong> Direct relationships
                      with Mississauga drywall and paint suppliers mean
                      competitive pricing and same-day material availability
                    </li>
                    <li>
                      <strong>Licensed electricians:</strong> Coordinated pot
                      light installation with local electrical contractors
                      familiar with Peel Region inspection requirements
                    </li>
                    <li>
                      <strong>Painting contractors:</strong> Partnership with
                      Mississauga-based painting crews for turnkey ceiling and
                      wall finishing packages
                    </li>
                    <li>
                      <strong>Waste management:</strong> Established protocols
                      with Peel Region transfer stations for environmentally
                      responsible disposal
                    </li>
                    <li>
                      <strong>Equipment rental:</strong> Local access to
                      scaffolding, lifts, and specialized tools from Mississauga
                      industrial suppliers
                    </li>
                  </ul>

                  <h3 className="text-2xl font-semibold mt-8 mb-4">
                    Transit and Accessibility
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Mississauga's extensive transit network affects how we
                    schedule and execute projects. GO Transit stations at Port
                    Credit, Cooksville, Streetsville, Meadowvale, Lisgar, and
                    Erindale provide crew access without parking headaches.
                    MiWay bus routes throughout the city mean we can maintain
                    consistent scheduling even during rush hour congestion on
                    the 403, QEW, and Hurontario corridor. The new Hazel
                    McCallion LRT line will improve access to downtown core
                    projects starting in 2024.
                  </p>

                  <h3 className="text-2xl font-semibold mt-8 mb-4">
                    Cost Considerations for Mississauga Projects
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    <strong>Popcorn ceiling removal cost in Mississauga</strong>{" "}
                    varies significantly by property type and location:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                    <li>
                      <strong>High-rise condos:</strong> Elevator booking fees
                      ($150-300), extended insurance requirements, and common
                      area protection add 15-25% to base pricing
                    </li>
                    <li>
                      <strong>Heritage homes:</strong> Pre-1990 properties often
                      require mandatory asbestos testing ($300-500) and
                      specialized removal protocols if positive
                    </li>
                    <li>
                      <strong>New construction:</strong> Coordination with
                      builders and other trades may include scheduling premiums
                      but offers efficiencies through bulk material purchasing
                    </li>
                    <li>
                      <strong>Vaulted ceilings:</strong> Common in Erin Mills
                      and Meadowvale homes, requiring scaffolding and extended
                      labor adds 30-50% to standard per-square-foot rates
                    </li>
                    <li>
                      <strong>Painted texture:</strong> Prevalent in 2000s-era
                      developments, requiring full skim coating rather than
                      scraping increases material costs by approximately 40%
                    </li>
                  </ul>

                  <h3 className="text-2xl font-semibold mt-8 mb-4">
                    Regional Context
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    While Mississauga is our primary service hub, our teams
                    regularly work throughout Peel Region and neighboring
                    municipalities. We're equally equipped to handle ceiling
                    projects in{" "}
                    <Link
                      href="/popcorn-ceiling-removal/brampton/"
                      className="text-blue-600 font-semibold hover:underline"
                    >
                      Brampton
                    </Link>{" "}
                    to the north,{" "}
                    <Link
                      href="/popcorn-ceiling-removal/oakville/"
                      className="text-blue-600 font-semibold hover:underline"
                    >
                      Oakville
                    </Link>{" "}
                    and{" "}
                    <Link
                      href="/popcorn-ceiling-removal/burlington/"
                      className="text-blue-600 font-semibold hover:underline"
                    >
                      Burlington
                    </Link>{" "}
                    along the lakeshore, or{" "}
                    <Link
                      href="/popcorn-ceiling-removal/milton/"
                      className="text-blue-600 font-semibold hover:underline"
                    >
                      Milton
                    </Link>{" "}
                    to the west. Property owners with multiple locations across
                    the Greater Toronto Area appreciate our regional consistency
                    and centralized project management.
                  </p>
                </div>
              </details>

              <h3 className="text-2xl font-semibold mt-8 mb-4">
                Schedule Your Mississauga Popcorn, Stipple & Stucco Ceiling
                Removal Project
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Whether you're renovating a Port Credit condo for resale,
                updating a Streetsville family home, or preparing an Erin Mills
                property for new tenants, professional{" "}
                <strong>
                  popcorn, stipple, and stucco ceiling removal Mississauga
                </strong>{" "}
                transforms dated textured spaces into modern, marketable homes.
                Our Mississauga-based teams understand local building practices,
                municipal requirements, and real estate expectations that make
                ceiling projects succeed. Explore our{" "}
                <Link
                  href="/our-work/"
                  className="text-blue-600 underline underline-offset-2 hover:text-blue-700"
                >
                  portfolio of completed Mississauga projects
                </Link>{" "}
                to see the quality of work you can expect.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <Link
                  href="/quote/"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  Request a detailed quote
                </Link>{" "}
                with photos and measurements, or call{" "}
                <a
                  href={phoneHref}
                  aria-label={phoneAriaLabel}
                  className="text-blue-600 font-semibold hover:underline"
                >
                  {phoneDisplay}
                </a>{" "}
                to discuss your specific project requirements. Most Mississauga
                estimates are delivered within 4 hours with firm pricing, clear
                timelines, and detailed scope documentation. For more
                information about our process, visit our{" "}
                <Link
                  href="/our-process/"
                  className="text-blue-600 underline underline-offset-2 hover:text-blue-700"
                >
                  dust-control methodology page
                </Link>{" "}
                or browse{" "}
                <Link
                  href="/blog/"
                  className="text-blue-600 underline underline-offset-2 hover:text-blue-700"
                >
                  ceiling renovation tips
                </Link>
                .
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
