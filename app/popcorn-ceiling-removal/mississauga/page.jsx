import Link from "next/link";
import QuoteForm from "@/components/QuoteForm";
import { CONTACT } from "@/app/config";

export const revalidate = 86400;

export const metadata = {
  title: "Popcorn Ceiling Removal Mississauga | Level 5 Smooth Ceilings + HEPA Dust Control",
  description:
    "Professional popcorn/stipple ceiling removal in Mississauga. HEPA dust control, Level 5 skim coat, 3-year warranty, painted removal texture specialists. Free quote, same-day response. Port Credit • Streetsville • Erin Mills.",
  alternates: {
    canonical: "/popcorn-ceiling-removal/mississauga/",
  },
  openGraph: {
    title: "Popcorn Ceiling Removal Mississauga | Level 5 Smooth Ceilings + HEPA Dust Control",
    description:
      "Professional popcorn/stipple ceiling removal in Mississauga. HEPA dust control, Level 5 skim coat, 3-year warranty, painted texture specialists. Free quote, same-day response.",
    url: "/popcorn-ceiling-removal/mississauga/",
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
        url: "/popcorn-ceiling-removal/mississauga/",
        potentialAction: { "@type": "RequestQuoteAction", target: "/quote/" },
      },
      {
        "@type": "ItemList",
        name: "Mississauga Neighbourhoods We Serve",
        itemListElement: neighborhoods.map(([slug, name], i) => ({
          "@type": "ListItem",
          position: i + 1,
          name,
          url: `/popcorn-ceiling-removal/mississauga/${slug}/`,
        })),
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
            item: "/popcorn-ceiling-removal/",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Mississauga",
            item: "/popcorn-ceiling-removal/mississauga/",
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "How much does popcorn ceiling removal cost in Mississauga?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Pricing depends on paint layers, repairs, and access. Most Mississauga homes fall within a predictable range after a quick photo estimate. We can price by square foot for larger areas or as a fixed scope for bedrooms, hallways, and open-plan spaces.",
            },
          },
          {
            "@type": "Question",
            name: "Do you offer dustless or dust-controlled removal?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes—rooms are contained, vents are masked, and sanding tools connect to HEPA vacuums to keep dust contained during Level 5 skimming.",
            },
          },
          {
            "@type": "Question",
            name: "Can you coordinate pot-light installation after removal?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. We can sync timing with your electrician or refer one. We blend cutouts and patch rings so the final surface reads flat under light.",
            },
          },
          {
            "@type": "Question",
            name: "Do you test for asbestos?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "If the home is from an age where asbestos could be present, we can refer a local lab for a fast test. If needed, we follow the safe approach based on results.",
            },
          },
          {
            "@type": "Question",
            name: "Do you paint after removal?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We prime with a stain-blocking system and can finish with two coats of quality ceiling paint, or leave the surface paint-ready if you prefer to DIY.",
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
            <div className="grid gap-12 lg:grid-cols-[3fr_2fr]">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-amber-300 font-semibold">
                  Mississauga • Dust-controlled popcorn removal
                </p>
                <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
                  Popcorn Ceiling Removal in Mississauga
                </h1>
                <p className="mt-4 text-lg text-slate-200">
                  We convert stipple to flat white ceilings with HEPA
                  containment, Level 5 skim coating, and concierge-style
                  communication. Most Mississauga quotes are turned around the
                  same day you send photos.
                </p>
                <p className="mt-4 text-sm text-slate-200/90">
                  Need the full workflow? Explore our{" "}
                  <Link
                    href="/services/popcorn-ceiling-removal/"
                    className="underline underline-offset-2"
                  >
                    popcorn ceiling removal services
                  </Link>{" "}
                  for process details.
                </p>
                <ul className="mt-6 grid gap-4 text-sm text-slate-200 sm:grid-cols-2">
                  <li className="flex gap-3 rounded-2xl border border-white/10 bg-white/5 p-3">
                    <span className="text-lg">🧼</span>
                    <span>
                      Full containment, zipper walls, and HEPA sanding to keep
                      dust out of the rest of your home.
                    </span>
                  </li>
                  <li className="flex gap-3 rounded-2xl border border-white/10 bg-white/5 p-3">
                    <span className="text-lg">🪜</span>
                    <span>
                      Level 5 skim coating + primer so ceilings are ready for{" "}
                      <Link
                        href="/services/interior-painting/"
                        className="underline underline-offset-2"
                      >
                        finish paint
                      </Link>{" "}
                      right away.
                    </span>
                  </li>
                  <li className="flex gap-3 rounded-2xl border border-white/10 bg-white/5 p-3">
                    <span className="text-lg">🗓️</span>
                    <span>
                      Predictable scheduling and clean wrap-ups in Port Credit,
                      Sheridan, Clarkson, Streetsville, and every pocket in
                      between.
                    </span>
                  </li>
                  <li className="flex gap-3 rounded-2xl border border-white/10 bg-white/5 p-3">
                    <span className="text-lg">📸</span>
                    <span>
                      Share photos below for pricing or{" "}
                      <a
                        href={smsHref}
                        className="underline underline-offset-2"
                      >
                        text us directly
                      </a>{" "}
                      if that’s faster.
                    </span>
                  </li>
                </ul>
                <nav className="mt-6 flex flex-wrap gap-3 text-sm font-semibold">
                  {anchorLinks.map(([href, label]) => (
                    <a
                      key={href}
                      href={href}
                      className="rounded-full border border-white/20 px-4 py-2 text-white/80 hover:text-white hover:border-white"
                    >
                      {label}
                    </a>
                  ))}
                </nav>
                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  {heroStats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center shadow-lg"
                    >
                      <div className="text-2xl font-semibold text-white">
                        {stat.value}
                      </div>
                      <p className="text-xs uppercase tracking-wide text-slate-300">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {quickLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="rounded-full border border-white/40 bg-white/10 px-4 py-2 text-sm text-white hover:bg-white/20 hover:border-white/60 transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/95 p-6 text-slate-900 shadow-2xl ring-1 ring-black/5">
                <h2 className="text-2xl font-semibold">
                  Get a Mississauga quote
                </h2>
                <p className="mt-2 text-sm text-slate-600">
                  Upload photos, ceiling heights, and timing. We reply the same
                  day with square-foot guidance and availability.
                </p>
                <div className="mt-4">
                  <QuoteForm />
                </div>
                <p className="mt-3 text-xs text-slate-500">
                  Prefer a call? Reach us at{" "}
                  <a href={phoneHref} className="font-semibold underline">
                    {phoneDisplay}
                  </a>{" "}
                  or text photos to{" "}
                  <a href={smsHref} className="underline">
                    {phoneDisplay}
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* COVERAGE + INTERNAL LINKS */}
        <section id="coverage" className="container-x -mt-8 px-4">
          <div className="rounded-3xl border bg-white p-6 shadow-xl ring-1 ring-black/5">
            <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
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
                      className="rounded-2xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 hover:border-slate-900 hover:text-slate-900"
                    >
                      {name}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5">
                <h3 className="text-lg font-semibold">Nearby crews</h3>
                <p className="mt-1 text-sm text-slate-600">
                  We bounce between Mississauga and these neighbouring cities,
                  so multi-property owners can book everything together.
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {nearbyCities.map(([slug, label]) => (
                    <Link
                      key={slug}
                      href={`/popcorn-ceiling-removal/${slug}/`}
                      className="pill bg-white text-slate-700 border-slate-200"
                    >
                      {label}
                    </Link>
                  ))}
                </div>
                <div className="mt-4 border-t border-slate-200 pt-4 space-y-2 text-sm">
                  {quickLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="flex items-center justify-between rounded-xl border border-transparent px-3 py-2 font-medium text-slate-700 hover:border-slate-300"
                    >
                      {item.label} <span>→</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* GALLERY + APPROACH */}
        <section id="gallery" className="container-x px-4">
          <div className="grid gap-8 lg:grid-cols-[3fr_2fr]">
            <div className="rounded-3xl border bg-white p-6 shadow-lg ring-1 ring-black/5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-amber-600">
                    Field photos
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold">
                    Recent Mississauga ceilings
                  </h2>
                </div>
                <Link
                  href="/our-work/"
                  className="hidden text-sm font-semibold text-amber-700 hover:underline md:inline-flex"
                >
                  Browse full gallery →
                </Link>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {images.map((src, idx) => (
                  <div
                    key={src}
                    className="overflow-hidden rounded-2xl border border-slate-100"
                  >
                    <img
                      src={src}
                      alt={`Mississauga popcorn ceiling removal ${idx + 1}`}
                      className="h-44 w-full object-cover transition duration-500 hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
              <Link
                href="/our-work/"
                className="mt-4 inline-flex text-sm font-semibold text-amber-700 hover:underline md:hidden"
              >
                Browse full gallery →
              </Link>
            </div>
            <div className="rounded-3xl border bg-slate-900 p-6 text-white shadow-lg ring-1 ring-black/5">
              <p className="text-xs uppercase tracking-[0.3em] text-amber-300">
                What to expect
              </p>
              <h2 className="mt-3 text-2xl font-semibold">
                Concierge popcorn removal
              </h2>
              <p className="mt-3 text-sm text-slate-200">
                Every Mississauga project gets a dedicated lead, daily
                text/photo updates, and full clean downs before we leave.
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
                <a className="btn-cta" href={phoneHref}>
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
            <p className="text-xs uppercase tracking-[0.3em] text-amber-600">
              Why Mississauga homeowners book us
            </p>
            <h2 className="mt-2 text-3xl font-semibold">
              Dust-controlled, Level 5 ceilings without drama
            </h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {sellingPoints.map((point) => (
                <div
                  key={point.title}
                  className="rounded-2xl border border-slate-200 p-5 shadow-sm"
                >
                  <h3 className="text-lg font-semibold">{point.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{point.body}</p>
                  <Link
                    href={point.href}
                    className="mt-3 inline-flex text-sm font-semibold text-amber-700 hover:underline"
                  >
                    {point.cta} →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section id="process" className="container-x px-4">
          <div className="rounded-3xl border bg-slate-900 p-6 text-white shadow-xl ring-1 ring-black/5">
            <p className="text-xs uppercase tracking-[0.3em] text-amber-300">
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
                <p className="text-xs uppercase tracking-[0.3em] text-amber-600">
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
                <a className="btn-cta" href={phoneHref}>
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
            <div className="mt-6 rounded-2xl border border-dashed border-amber-300 bg-amber-50/60 p-5 text-sm text-amber-900">
              People search for: popcorn ceiling removal Mississauga, stucco
              ceiling scraping Mississauga, stipple removal cost per square
              foot, dustless popcorn removal, Level 5 skim coat contractors,{" "}
              <strong>popcorn ceiling removal cost Mississauga</strong>,
              pot-light coordination, and asbestos testing referrals. If that is
              you, send a few photos and we’ll confirm the right plan.
            </div>
          </div>
        </section>

        {/* SERVICE COMBOS */}
        <section className="container-x px-4">
          <div className="rounded-3xl border bg-white p-6 shadow-xl ring-1 ring-black/5">
            <p className="text-xs uppercase tracking-[0.3em] text-amber-600">
              Stack services
            </p>
            <h2 className="mt-2 text-3xl font-semibold">
              Extend the refresh beyond ceilings
            </h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {serviceCombos.map((combo) => (
                <div
                  key={combo.title}
                  className="rounded-2xl border border-slate-200 p-5 shadow-sm"
                >
                  <h3 className="text-lg font-semibold">{combo.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{combo.body}</p>
                  <Link
                    href={combo.href}
                    className="mt-3 inline-flex text-sm font-semibold text-amber-700 hover:underline"
                  >
                    Learn more →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faqs" className="container-x px-4">
          <div className="rounded-3xl border bg-white p-6 shadow-xl ring-1 ring-black/5">
            <p className="text-xs uppercase tracking-[0.3em] text-amber-600">
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
                <div className="mt-4 flex flex-wrap gap-3 text-sm">
                  <Link
                    href="/services/popcorn-ceiling-removal/"
                    className="underline underline-offset-2"
                  >
                    Popcorn service overview
                  </Link>
                  <Link
                    href="/services/wallpaper-removal/"
                    className="underline underline-offset-2"
                  >
                    Wallpaper removal
                  </Link>
                  <Link
                    href="/services/drywall-installation/"
                    className="underline underline-offset-2"
                  >
                    Drywall + taping
                  </Link>
                  <Link
                    href="/services/interior-painting/"
                    className="underline underline-offset-2"
                  >
                    Interior painting
                  </Link>
                  <Link
                    href="/our-process/"
                    className="underline underline-offset-2"
                  >
                    Our process
                  </Link>
                </div>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a 
                  className="inline-flex items-center justify-center rounded-full bg-amber-500 px-6 py-3 font-semibold text-white hover:bg-amber-600 active:bg-amber-700 transition-colors" 
                  href={phoneHref}
                >
                  📞 {phoneDisplay}
                </a>
                <a 
                  className="inline-flex items-center justify-center rounded-full bg-amber-500 px-6 py-3 font-semibold text-white hover:bg-amber-600 active:bg-amber-700 transition-colors" 
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
                As Ontario's third-largest city and a major commercial hub in the Greater Toronto Area, Mississauga presents unique challenges for <strong>popcorn ceiling removal</strong>. Our specialized teams understand the diverse architectural landscape—from vintage 1960s-1980s homes near historic Port Credit to modern high-rise developments along the Hurontario LRT corridor and sprawling residential communities in Churchill Meadows and Erin Mills.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">
                Why Mississauga Homes Need Professional Ceiling Services
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Mississauga's rapid growth from a collection of villages to Canada's sixth most populous city means homes span six decades of construction styles. Older neighborhoods like Malton, Cooksville, and Lakeview often feature original popcorn ceilings from the 1970s and 1980s that now clash with modern design expectations. Meanwhile, newer areas like East Credit and Meadowvale Village frequently have painted stipple textures that require specialized skim coating rather than simple scraping.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">
                Navigating Mississauga's Building Regulations
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Working across Mississauga means understanding local requirements and logistics that affect every ceiling project:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li><strong>Peel Region waste management:</strong> Proper disposal of texture material through designated facilities, with documentation for environmental compliance</li>
                <li><strong>Condo corporation rules:</strong> Strict elevator booking systems, insurance requirements, and noise bylaws at high-density developments near Square One and City Centre</li>
                <li><strong>Heritage district considerations:</strong> Older Port Credit and Streetsville properties that may require asbestos testing before disturbing ceiling materials</li>
                <li><strong>Transit-oriented development standards:</strong> Coordinating with building managers at new LRT-adjacent towers along Hurontario Street</li>
                <li><strong>Municipal inspection protocols:</strong> Compliance with City of Mississauga building codes when ceiling work involves structural repairs or modifications</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4">
                Mississauga's Diverse Housing Stock
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                The city's evolution from suburban sprawl to urban center creates a complex residential landscape. <strong>Popcorn ceiling removal in Mississauga</strong> isn't one-size-fits-all:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li><strong>Waterfront luxury condos:</strong> Port Credit's lakeside towers like The Sail and Bridgewater demand meticulous dust control and pristine finishes—bright natural light from Lake Ontario reveals every imperfection</li>
                <li><strong>Mid-century single-family homes:</strong> Established neighborhoods throughout central Mississauga feature post-war construction with challenging access, low basements, and textured ceilings that may contain asbestos</li>
                <li><strong>New construction developments:</strong> Erin Mills and Churchill Meadows see ongoing builder projects where we coordinate with other trades during final finishing phases</li>
                <li><strong>Townhouse complexes:</strong> High-density residential areas require careful staging, shared wall considerations, and coordination with condo boards for common area protection</li>
                <li><strong>Commercial-residential mixed use:</strong> Downtown core properties along Burnhamthorpe and Hurontario often have challenging parking, elevator logistics, and tight scheduling windows</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4">
                Local Market Knowledge
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our Mississauga expertise extends beyond just technical execution. We understand how ceiling upgrades affect property values in different submarkets. Port Credit waterfront properties command premium pricing, so Level 5 finishes are non-negotiable for pre-sale renovations. Streetsville's heritage character attracts buyers seeking character homes—smooth ceilings help modernize dated interiors while preserving charm. Erin Mills family neighborhoods prioritize quick turnarounds so homes aren't disrupted during school years.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">
                Coordinating with Mississauga Trades
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We partner with local Mississauga suppliers and contractors to ensure seamless project delivery:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li><strong>Material suppliers:</strong> Direct relationships with Mississauga drywall and paint suppliers mean competitive pricing and same-day material availability</li>
                <li><strong>Licensed electricians:</strong> Coordinated pot light installation with local electrical contractors familiar with Peel Region inspection requirements</li>
                <li><strong>Painting contractors:</strong> Partnership with Mississauga-based painting crews for turnkey ceiling and wall finishing packages</li>
                <li><strong>Waste management:</strong> Established protocols with Peel Region transfer stations for environmentally responsible disposal</li>
                <li><strong>Equipment rental:</strong> Local access to scaffolding, lifts, and specialized tools from Mississauga industrial suppliers</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4">
                Transit and Accessibility
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Mississauga's extensive transit network affects how we schedule and execute projects. GO Transit stations at Port Credit, Cooksville, Streetsville, Meadowvale, Lisgar, and Erindale provide crew access without parking headaches. MiWay bus routes throughout the city mean we can maintain consistent scheduling even during rush hour congestion on the 403, QEW, and Hurontario corridor. The new Hazel McCallion LRT line will improve access to downtown core projects starting in 2024.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">
                Cost Considerations for Mississauga Projects
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Popcorn ceiling removal cost in Mississauga</strong> varies significantly by property type and location:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li><strong>High-rise condos:</strong> Elevator booking fees ($150-300), extended insurance requirements, and common area protection add 15-25% to base pricing</li>
                <li><strong>Heritage homes:</strong> Pre-1990 properties often require mandatory asbestos testing ($300-500) and specialized removal protocols if positive</li>
                <li><strong>New construction:</strong> Coordination with builders and other trades may include scheduling premiums but offers efficiencies through bulk material purchasing</li>
                <li><strong>Vaulted ceilings:</strong> Common in Erin Mills and Meadowvale homes, requiring scaffolding and extended labor adds 30-50% to standard per-square-foot rates</li>
                <li><strong>Painted texture:</strong> Prevalent in 2000s-era developments, requiring full skim coating rather than scraping increases material costs by approximately 40%</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4">
                Regional Context
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                While Mississauga is our primary service hub, our teams regularly work throughout Peel Region and neighboring municipalities. We're equally equipped to handle ceiling projects in <Link href="/popcorn-ceiling-removal/brampton/" className="text-blue-600 font-semibold hover:underline">Brampton</Link> to the north, <Link href="/popcorn-ceiling-removal/oakville/" className="text-blue-600 font-semibold hover:underline">Oakville</Link> and <Link href="/popcorn-ceiling-removal/burlington/" className="text-blue-600 font-semibold hover:underline">Burlington</Link> along the lakeshore, or <Link href="/popcorn-ceiling-removal/milton/" className="text-blue-600 font-semibold hover:underline">Milton</Link> to the west. Property owners with multiple locations across the Greater Toronto Area appreciate our regional consistency and centralized project management.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">
                Schedule Your Mississauga Ceiling Project
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Whether you're renovating a Port Credit condo for resale, updating a Streetsville family home, or preparing an Erin Mills property for new tenants, professional <strong>popcorn ceiling removal</strong> transforms dated spaces into modern, marketable homes. Our Mississauga-based teams understand local building practices, municipal requirements, and real estate expectations that make ceiling projects succeed.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <Link href="/quote/" className="text-blue-600 font-semibold hover:underline">Request a detailed quote</Link> with photos and measurements, or call <a href={phoneHref} className="text-blue-600 font-semibold hover:underline">{phoneDisplay}</a> to discuss your specific project requirements. Most Mississauga estimates are delivered within 4 hours with firm pricing, clear timelines, and detailed scope documentation.
              </p>
            </div>
          </div>
        </section>

        <nav className="container-x px-4">
          <div className="flex flex-wrap gap-3 text-sm">
            <Link href="/popcorn-ceiling-removal/" className="underline">
              ← Popcorn ceiling removal service areas
            </Link>
            <Link
              href="/services/popcorn-ceiling-removal/"
              className="underline"
            >
              Main popcorn service page →
            </Link>
          </div>
        </nav>
      </div>

      {/* NEARBY SERVICE AREAS - Cross-linking */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="p-8 bg-gray-50 rounded-2xl border border-gray-200">
            <h2 className="text-2xl font-bold mb-4 text-center">
              Nearby Service Areas
            </h2>
            <p className="text-center text-gray-600 mb-6">
              We also serve these nearby cities with the same professional
              popcorn ceiling removal service:
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/popcorn-ceiling-removal/burlington/"
                className="px-6 py-3 bg-white border-2 border-blue-200 rounded-full text-blue-600 font-semibold hover:bg-blue-50 hover:border-blue-400 transition"
              >
                Burlington Ceiling Contractor
              </Link>
              <Link
                href="/popcorn-ceiling-removal/oakville/"
                className="px-6 py-3 bg-white border-2 border-gray-200 rounded-full text-gray-700 font-semibold hover:bg-gray-50 hover:border-gray-400 transition"
              >
                Oakville Stipple Removal
              </Link>
              <Link
                href="/popcorn-ceiling-removal/toronto/"
                className="px-6 py-3 bg-white border-2 border-gray-200 rounded-full text-gray-700 font-semibold hover:bg-gray-50 hover:border-gray-400 transition"
              >
                Toronto Popcorn Removal
              </Link>
              <Link
                href="/popcorn-ceiling-removal/milton/"
                className="px-6 py-3 bg-white border-2 border-gray-200 rounded-full text-gray-700 font-semibold hover:bg-gray-50 hover:border-gray-400 transition"
              >
                Milton Ceiling Texture Removal
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
