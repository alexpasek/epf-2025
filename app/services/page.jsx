// app/services/page.jsx
import Link from "next/link";
import { PHONE_HREF, PHONE_NUMBER, SITE_URL } from "@/app/config";

export const revalidate = 86400;

const HERO_IMG = "/services/epf-services-hero.png"; // update to a real image

export const metadata = {
  title:
    "Services — Popcorn Ceiling Removal, Drywall, Wallpaper Removal, Interior Painting | EPF Pro Services",
  description:
    "Dust-controlled popcorn ceiling removal to Level 5 smooth, drywall installation & finishing, wallpaper removal with wall skim, and interior painting. Local, insured crew serving Mississauga, Toronto, Oakville, Burlington, Hamilton, Milton, Etobicoke, Grimsby, and St. Catharines.",
  alternates: { canonical: "/services/" },
  openGraph: {
    title:
      "EPF Pro Services — Popcorn Ceiling Removal, Drywall, Wallpaper Removal, Interior Painting",
    description:
      "Popcorn ceiling removal (Level 5), drywall finishing, wallpaper removal, and interior painting with clean containment and tidy job sites.",
    url: "/services/",
    type: "website",
    images: [{ url: HERO_IMG }],
  },
  robots: { index: true, follow: true },
};

const services = [
  {
    slug: "/services/popcorn-ceiling-removal/",
    name: "Popcorn Ceiling Removal",
    tagline: "Dust-controlled removal + Level 5 skim for dead-flat ceilings.",
    bullets: [
      "Plastic containment, floor & stair protection, vent masking",
      "Safe scrape or encapsulation for painted popcorn",
      "Full Level 5 skim, raking-light checks, HEPA-assist sanding",
      "Stain-block primer; optional finish painting",
    ],
  },
  {
    slug: "/services/drywall-installation/",
    name: "Drywall Installation & Finishing",
    tagline:
      "Board, tape, Level 4/5 finishing for walls & ceilings ready for paint.",
    bullets: [
      "Tight layout, staggered seams, paper-faced corner bead",
      "Smooth feathering at transitions & edges",
      "Level 5 skim for critical lighting areas",
      "Priming and paint-ready delivery",
    ],
  },
  {
    slug: "/services/drywall-contractor/",
    name: "Drywall Contractor Services",
    tagline:
      "One contractor for installation, repair, skim coating, and paint-ready drywall handoffs.",
    bullets: [
      "Drywall installation, replacement, and rebuild scopes",
      "Patch work, crack repair, and water-damage drywall correction",
      "Level 4 and Level 5 finishing for walls and ceilings",
      "Residential, condo, basement, and commercial coordination",
    ],
  },
  {
    slug: "/services/drywall-repair/",
    name: "Drywall Repair",
    tagline:
      "Seamless patching, crack repair, and water damage restoration for paint-ready walls.",
    bullets: [
      "Water damage drywall repair with moisture checks and stain-block priming",
      "Hole patching, crack reinforcement, and tape repairs",
      "Texture matching and Level 5 finishing where needed",
      "Condo and commercial scheduling with COI and dust control",
    ],
  },
  {
    slug: "/services/wallpaper-removal/",
    name: "Wallpaper Removal",
    tagline:
      "Score, soften, remove backing & adhesive, wall skim to Level 5, bond prime.",
    bullets: [
      "Safe scoring + steam/gel to release adhesive",
      "Clean substrate prep without gouging drywall",
      "Wall skim to Level 5 smooth where needed",
      "Bond primer for a clean paint base",
    ],
  },
  {
    slug: "/services/interior-painting/",
    name: "Interior Painting",
    tagline:
      "Clean lines, durable finishes, and proper primers for long-lasting results.",
    bullets: [
      "Ceilings, walls, trim & doors",
      "Quality primers and sheen guidance",
      "Neat edges and tidy job sites",
      "Colour consulting available",
    ],
  },
  {
    slug: "/services/baseboard-installation/",
    name: "Baseboard Installation & Finishing",
    tagline:
      "Trim replacement, shoe moulding, caulking, and paint-ready baseboard installation for homes and condos.",
    bullets: [
      "Measure, cut and cope MDF/wood baseboards for tight inside corners",
      "Finish nail, fill, sand and caulk joints for a seamless look",
      "Match profiles after flooring upgrades, drywall repairs, or trim replacement",
      "Optional spray/brush finish so trim is ready when walls are painted",
    ],
  },
];

const popcornCities = [
  {
    href: "/popcorn-ceiling-removal/mississauga/",
    label: "Popcorn ceiling removal Mississauga",
    city: "Mississauga",
  },
  {
    href: "/toronto/",
    label: "Popcorn ceiling removal Toronto",
    city: "Toronto",
  },
  {
    href: "/popcorn-ceiling-removal/oakville/",
    label: "Popcorn ceiling removal Oakville",
    city: "Oakville",
  },
  {
    href: "/popcorn-ceiling-removal/burlington/",
    label: "Popcorn ceiling removal Burlington",
    city: "Burlington",
  },
  {
    href: "/popcorn-ceiling-removal/hamilton/",
    label: "Popcorn ceiling removal Hamilton",
    city: "Hamilton",
  },
  {
    href: "/popcorn-ceiling-removal/milton/",
    label: "Popcorn ceiling removal Milton",
    city: "Milton",
  },
  {
    href: "/popcorn-ceiling-removal/etobicoke/",
    label: "Popcorn ceiling removal Etobicoke",
    city: "Etobicoke",
  },
  {
    href: "/grimsby/",
    label: "Popcorn ceiling removal Grimsby",
    city: "Grimsby",
  },
  {
    href: "/st-catharines/",
    label: "Popcorn ceiling removal St. Catharines",
    city: "St. Catharines",
  },
];

const drywallInstallCities = [
  {
    href: "/services/drywall-installation/mississauga/",
    label: "Drywall installation Mississauga",
  },
  {
    href: "/services/drywall-installation/burlington/",
    label: "Drywall installation Burlington",
  },
  {
    href: "/services/drywall-installation/hamilton/",
    label: "Drywall installation Hamilton",
  },
];

const drywallRepairCities = [
  {
    href: "/services/drywall-repair/mississauga/",
    label: "Drywall repair Mississauga",
  },
  {
    href: "/services/drywall-repair/oakville/",
    label: "Drywall repair Oakville",
  },
  {
    href: "/services/drywall-repair/burlington/",
    label: "Drywall repair Burlington",
  },
  {
    href: "/services/drywall-repair/hamilton/",
    label: "Drywall repair Hamilton",
  },
  {
    href: "/services/drywall-repair/milton/",
    label: "Drywall repair Milton",
  },
  {
    href: "/services/drywall-repair/grimsby/",
    label: "Drywall repair Grimsby",
  },
];

const drywallSnippets = [
  {
    title: "Mississauga condo turnover",
    quote:
      "Board, tape, skim, and final touch-ups all stayed aligned so painting started right on schedule.",
    href: "/services/drywall-installation/mississauga/",
  },
  {
    title: "Oakville kitchen patching",
    quote:
      "The patch lines disappeared under cabinet lighting. Exactly the kind of finish we needed.",
    href: "/services/drywall-repair/oakville/",
  },
  {
    title: "Hamilton addition finishing",
    quote:
      "New room seams were invisible after finishing and the crew kept the work area clean every day.",
    href: "/services/drywall-installation/hamilton/",
  },
];

const drywallThumbs = [
  {
    src: "/gallery/drywall-installation/drywall-installation-hero.webp",
    alt: "Drywall installation project in Mississauga ready for Level 5 finishing",
    href: "/services/drywall-installation/mississauga/",
    label: "Mississauga drywall installation",
  },
  {
    src: "/gallery/drywall-repair/drywall-repair-service00004.webp",
    alt: "Drywall repair and skim coat project in Oakville",
    href: "/services/drywall-repair/oakville/",
    label: "Oakville drywall repair",
  },
  {
    src: "/gallery/drywall-repair/drywall-repair-service00002.webp",
    alt: "Hamilton ceiling water damage drywall repair",
    href: "/services/drywall-repair/hamilton/",
    label: "Hamilton drywall repair",
  },
];

function JsonLd() {
  const serviceNodes = services.map((s) => ({
    "@type": "Service",
    "@id": `${s.slug}#service`,
    name: s.name,
    serviceType: s.name,
    provider: { "@id": `${SITE_URL}/#org` },
    areaServed: popcornCities.map((c) => c.city || c.label),
    url: s.slug,
    description: s.tagline,
  }));

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: { "@id": "https://epfproservices.com/" },
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Services",
            item: { "@id": "https://epfproservices.com/services/" },
          },
        ],
      },
      {
        "@type": "ItemList",
        name: "Services",
        itemListElement: services.map((s, i) => ({
          "@type": "ListItem",
          position: i + 1,
          url: s.slug,
          name: s.name,
        })),
      },
      ...serviceNodes,
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What’s included with popcorn ceiling removal?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Containment, floor & stair protection, vent masking, safe scrape or encapsulation for painted popcorn, Level 5 skim, raking-light checks, HEPA-assisted sanding, stain-block primer, and optional finish painting.",
            },
          },
          {
            "@type": "Question",
            name: "Do you work in my area?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. We serve Mississauga, Toronto, Oakville, Burlington, Hamilton, Milton, Etobicoke, Grimsby, and St. Catharines, with dedicated drywall city pages for core markets.",
            },
          },
          {
            "@type": "Question",
            name: "How do you keep dust under control?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We isolate rooms with plastic, protect floors and stairs, mask vents, and use HEPA-assisted sanding. We do tidy daily wrap-ups.",
            },
          },
          {
            "@type": "Question",
            name: "Can you also repair drywall or paint after removal?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. We handle drywall patches, Level 5 finishing, and interior painting for a complete refresh.",
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

export default function ServicesPage() {
  return (
    <div className="container-x py-10">
      <JsonLd />

      {/* HERO */}
      <header className="grid grid-cols-1 md:grid-cols-[1.2fr,1fr] gap-8 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Our <span className="text-blue-700">Services</span>
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            We specialize in{" "}
            <strong>dust-controlled popcorn ceiling removal</strong> with{" "}
            <strong>Level 5 smooth finishes</strong>,{" "}
            <strong>drywall installation & finishing</strong>,{" "}
            <strong>wallpaper removal</strong>, and{" "}
            <strong>interior painting</strong>. Clean containment, tidy job
            sites, and reliable scheduling from a local, insured crew.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={PHONE_HREF} className="btn-cta">
              📞 {PHONE_NUMBER}
            </a>
            <Link href="/quote/" className="btn-cta">
              Get My Quote
            </Link>
          </div>
        </div>

        <figure className="relative">
          <div className="absolute -inset-4 md:-inset-6 bg-gradient-to-tr from-sky-300/15 via-blue-300/15 to-indigo-300/15 blur-2xl rounded-[28px]" />
          <div className="relative rounded-[22px] p-[2px] bg-gradient-to-tr from-sky-500/25 via-blue-400/20 to-indigo-500/25">
            <div className="rounded-[20px] overflow-hidden bg-white shadow-[0_40px_120px_-40px_rgba(0,0,0,.35)] ring-1 ring-black/5">
              <img
                src={HERO_IMG}
                alt="EPF Pro Services crew — popcorn ceiling removal and Level 5 finishing"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
          </div>
        </figure>
      </header>

      {/* IN-PAGE NAV */}
      <nav
        className="mt-8 flex flex-wrap justify-center gap-3 pb-4"
        aria-label="On-page navigation"
      >
        <a
          href="#services"
          className="px-5 py-2.5 bg-blue-50 hover:bg-blue-100 text-blue-700 font-semibold rounded-full border-2 border-blue-200 transition"
        >
          Our Services
        </a>
        <a
          href="#why-us"
          className="px-5 py-2.5 bg-white hover:bg-gray-50 text-gray-700 font-semibold rounded-full border-2 border-gray-200 transition"
        >
          Why Choose Us
        </a>
        <a
          href="#areas"
          className="px-5 py-2.5 bg-white hover:bg-gray-50 text-gray-700 font-semibold rounded-full border-2 border-gray-200 transition"
        >
          Service Areas
        </a>
        <a
          href="#faq"
          className="px-5 py-2.5 bg-white hover:bg-gray-50 text-gray-700 font-semibold rounded-full border-2 border-gray-200 transition"
        >
          FAQ
        </a>
      </nav>

      {/* SERVICES GRID */}
      <section id="services" className="mt-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Professional Home Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From popcorn ceiling removal to interior painting, we deliver
            quality craftsmanship with clean, dust-controlled workflows.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((s) => (
            <article
              key={s.slug}
              id={anchorFor(s.name)}
              className="card p-6 bg-white hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-semibold">
                    <Link
                      href={s.slug}
                      className="hover:text-blue-600 transition"
                    >
                      {s.name}
                    </Link>
                  </h3>
                  <p className="mt-1 text-gray-700">{s.tagline}</p>
                </div>
                <Link href={s.slug} className="btn-cta shrink-0">
                  Learn More
                </Link>
              </div>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                {s.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-10 grid gap-6 lg:grid-cols-[1.2fr,0.8fr]">
        <div className="card p-6 bg-white">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold">Drywall city pages</h2>
            <p className="mt-2 text-gray-700">
              Drywall is not tucked under popcorn here. Use the install and repair
              hubs below for direct city-specific scopes, proof, and contact paths.
            </p>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold">Drywall installation hubs</h3>
              <div className="mt-3 grid gap-3">
                {drywallInstallCities.map((city) => (
                  <Link
                    key={city.href}
                    href={city.href}
                    className="rounded-xl border border-slate-200 p-4 hover:bg-slate-50 transition"
                  >
                    {city.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Drywall repair hubs</h3>
              <div className="mt-3 grid gap-3">
                {drywallRepairCities.map((city) => (
                  <Link
                    key={city.href}
                    href={city.href}
                    className="rounded-xl border border-slate-200 p-4 hover:bg-slate-50 transition"
                  >
                    {city.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="card p-6 bg-white">
          <h2 className="text-2xl font-semibold">Drywall proof points</h2>
          <div className="mt-4 space-y-4">
            {drywallSnippets.map((item) => (
              <article
                key={item.title}
                className="rounded-xl border border-slate-200 bg-slate-50 p-4"
              >
                <p className="text-sm text-gray-700">“{item.quote}”</p>
                <p className="mt-2 font-semibold">{item.title}</p>
                <Link
                  href={item.href}
                  className="mt-2 inline-flex text-sm font-semibold text-blue-700 hover:underline"
                >
                  Open drywall page →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-10 card p-6 bg-white">
        <h2 className="text-2xl font-semibold">Recent drywall thumbnails</h2>
        <p className="mt-2 text-gray-700">
          Direct paths into drywall installation and repair pages, not popcorn-first routes.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {drywallThumbs.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm hover:shadow-md transition"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="p-4 text-sm font-semibold text-slate-800">
                {item.label}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US + HOW WE WORK */}
      <section id="why-us" className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="card p-6 bg-gradient-to-br from-blue-50 to-white border-2 border-blue-100">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-2xl">
              ✓
            </div>
            <h3 className="text-2xl font-bold">What You Get</h3>
          </div>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold text-xl">•</span>
              <span>
                <strong>Real containment</strong> — Plastic barriers, floor &
                stair protection
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold text-xl">•</span>
              <span>
                <strong>HEPA dust control</strong> — Vacuum-assisted sanding,
                daily clean-ups
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold text-xl">•</span>
              <span>
                <strong>Level 5 finishing</strong> — Critical-light inspection
                for flawless results
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold text-xl">•</span>
              <span>
                <strong>Licensed & insured</strong> — WSIB & $5M liability
                coverage
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold text-xl">•</span>
              <span>
                <strong>3-year warranty</strong> — Written guarantee on all
                workmanship
              </span>
            </li>
          </ul>
        </div>

        <div className="card p-6 bg-gradient-to-br from-cyan-50 to-white border-2 border-cyan-100">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-cyan-500 flex items-center justify-center text-2xl">
              🚀
            </div>
            <h3 className="text-2xl font-bold">How We Work</h3>
          </div>
          <ol className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="font-bold text-cyan-600">1.</span>
              <span>
                <strong>Photo review</strong> — Fast ballpark estimate within 24
                hours
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-cyan-600">2.</span>
              <span>
                <strong>Site assessment</strong> — Confirmed scope & schedule
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-cyan-600">3.</span>
              <span>
                <strong>Protection</strong> — Containment setup & prep work
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-cyan-600">4.</span>
              <span>
                <strong>Expert work</strong> — Skim/tape/sand with quality
                checks
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-cyan-600">5.</span>
              <span>
                <strong>Finish</strong> — Prime & paint (when requested)
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-cyan-600">6.</span>
              <span>
                <strong>Final walkthrough</strong> — Tidy cleanup & inspection
              </span>
            </li>
          </ol>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/our-process/"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-full transition shadow-md hover:shadow-lg"
            >
              See Full Process →
            </Link>
            <Link
              href="/our-work/"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white hover:bg-gray-50 text-gray-900 font-semibold rounded-full border-2 border-gray-200 transition"
            >
              Before/After Gallery →
            </Link>
          </div>
        </div>
      </section>

      {/* LOCAL AREAS */}
      <section id="areas" className="mt-10 card p-6 bg-white">
        <h2 className="text-2xl font-semibold">Local service areas</h2>
        <p className="mt-2 text-gray-700">
          We provide popcorn ceiling removal, drywall installation, drywall repair,
          wallpaper removal, and interior painting across the GTA and Niagara.
        </p>
        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold">Popcorn city hubs</h3>
            <div className="mt-3 grid gap-3">
              {popcornCities.map((c) => (
                <Link
                  key={c.href}
                  href={c.href}
                  className="block rounded-xl border border-slate-200 p-4 hover:bg-slate-50 transition"
                  title={c.label}
                >
                  {c.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Drywall installation</h3>
            <div className="mt-3 grid gap-3">
              {drywallInstallCities.map((c) => (
                <Link
                  key={c.href}
                  href={c.href}
                  className="block rounded-xl border border-slate-200 p-4 hover:bg-slate-50 transition"
                  title={c.label}
                >
                  {c.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Drywall repair</h3>
            <div className="mt-3 grid gap-3">
              {drywallRepairCities.map((c) => (
                <Link
                  key={c.href}
                  href={c.href}
                  className="block rounded-xl border border-slate-200 p-4 hover:bg-slate-50 transition"
                  title={c.label}
                >
                  {c.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <p className="mt-3 text-sm text-gray-600">
          Need a quick schedule check in your city?{" "}
          <Link href="/quote/" className="underline">
            Request a fast quote
          </Link>{" "}
          or call us.
        </p>
        <p className="mt-3 text-sm text-gray-700">
          Drywall install and repair city pages are live sitewide, so users can
          jump straight to the right scope instead of routing through popcorn pages.
        </p>
      </section>

      {/* FAQ */}
      <section id="faq" className="mt-10 card p-8 bg-white">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600">
            Common questions about our services and local work
          </p>
        </div>

        <div className="space-y-4 max-w-3xl mx-auto">
          <details className="group bg-gray-50 rounded-xl p-6 border-2 border-gray-200 hover:border-blue-300 transition cursor-pointer">
            <summary className="font-bold text-lg flex items-center justify-between cursor-pointer">
              <span>How fast can you start?</span>
              <span className="text-2xl group-open:rotate-180 transition-transform">
                ⌄
              </span>
            </summary>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Smaller ceilings (300–600 sq ft) often start within 1–2 weeks
              depending on city and season. Share photos and sizes for a quick
              ballpark and timeline.
            </p>
          </details>

          <details className="group bg-gray-50 rounded-xl p-6 border-2 border-gray-200 hover:border-blue-300 transition cursor-pointer">
            <summary className="font-bold text-lg flex items-center justify-between cursor-pointer">
              <span>Will popcorn ceiling removal make a mess in my home?</span>
              <span className="text-2xl group-open:rotate-180 transition-transform">
                ⌄
              </span>
            </summary>
            <p className="mt-4 text-gray-700 leading-relaxed">
              We prioritize containment—plastic barriers, taped seams, protected
              floors and stairs, vent masking, and HEPA-assist sanding to manage
              dust. We do tidy daily wrap-ups.
            </p>
          </details>

          <details className="group bg-gray-50 rounded-xl p-6 border-2 border-gray-200 hover:border-blue-300 transition cursor-pointer">
            <summary className="font-bold text-lg flex items-center justify-between cursor-pointer">
              <span>Do you paint after removal?</span>
              <span className="text-2xl group-open:rotate-180 transition-transform">
                ⌄
              </span>
            </summary>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Yes. We can leave ceilings paint-ready or complete finish coats.
              We also paint walls and trim on request.
            </p>
          </details>

          <details className="group bg-gray-50 rounded-xl p-6 border-2 border-gray-200 hover:border-blue-300 transition cursor-pointer">
            <summary className="font-bold text-lg flex items-center justify-between cursor-pointer">
              <span>What affects price?</span>
              <span className="text-2xl group-open:rotate-180 transition-transform">
                ⌄
              </span>
            </summary>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Square footage, ceiling height, painted texture,
              access/scaffolding, pot light cutouts, and painting. Send photos +
              sizes for a fast ballpark or book a free in-home estimate.
            </p>
          </details>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-10 card p-6 bg-white flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold">
            Ready for smooth, modern ceilings?
          </h3>
          <p className="text-gray-600">
            Fast estimate with photos. Clear plan & schedule.
          </p>
        </div>
        <div className="flex gap-3">
          <a href={PHONE_HREF} className="btn-cta">
            📞 {PHONE_NUMBER}
          </a>
          <Link href="/quote/" className="btn-cta">
            Get My Quote
          </Link>
        </div>
      </section>
    </div>
  );
}

/* helpers */
function anchorFor(name) {
  const id = name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  if (id.includes("popcorn")) return "popcorn";
  if (id.includes("drywall-installation")) return "drywall-installation";
  if (id.includes("drywall-repair")) return "drywall-repair";
  if (id.includes("wallpaper")) return "wallpaper";
  if (id.includes("painting")) return "painting";
  return id;
}
