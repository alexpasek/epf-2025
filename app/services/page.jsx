// app/services/page.jsx
import Link from "next/link";
import { PHONE_HREF, PHONE_NUMBER } from "@/app/config";

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
    slug: "/services/wallpaper/",
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
];

const cities = [
  { href: "/popcorn-removal/mississauga/", label: "Mississauga" },
  { href: "/toronto/", label: "Toronto" },
  { href: "/popcorn-removal/oakville/", label: "Oakville" },
  { href: "/popcorn-removal/burlington/", label: "Burlington" },
  { href: "/popcorn-removal/hamilton/", label: "Hamilton" },
  { href: "/popcorn-removal/milton/", label: "Milton" },
  { href: "/popcorn-removal/etobicoke/", label: "Etobicoke" },
  { href: "/grimsby/", label: "Grimsby" },
  { href: "/st-catharines/", label: "St. Catharines" },
];

function JsonLd() {
  const serviceNodes = services.map((s) => ({
    "@type": "Service",
    "@id": `${s.slug}#service`,
    name: s.name,
    serviceType: s.name,
    provider: { "@id": "/#business" },
    areaServed: cities.map((c) => c.label),
    url: s.slug,
    description: s.tagline,
  }));

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "/" },
          {
            "@type": "ListItem",
            position: 2,
            name: "Services",
            item: "/services/",
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
              text: "Yes. We serve Mississauga, Toronto, Oakville, Burlington, Hamilton, Milton, Etobicoke, Grimsby, and St. Catharines.",
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
      <nav className="scroller mt-8" aria-label="On-page">
        <a href="#popcorn" className="pill">
          Popcorn Ceiling Removal
        </a>
        <a href="#drywall" className="pill">
          Drywall
        </a>
        <a href="#wallpaper" className="pill">
          Wallpaper Removal
        </a>
        <a href="#painting" className="pill">
          Interior Painting
        </a>
        <a href="#areas" className="pill">
          Service Areas
        </a>
        <a href="#faq" className="pill">
          FAQ
        </a>
      </nav>

      {/* SERVICES GRID */}
      <section className="mt-8 grid gap-6 md:grid-cols-2">
        {services.map((s) => (
          <article
            key={s.slug}
            id={anchorFor(s.name)}
            className="card p-6 bg-white"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-2xl font-semibold">
                  <Link href={s.slug} className="hover:underline">
                    {s.name}
                  </Link>
                </h2>
                <p className="mt-1 text-gray-700">{s.tagline}</p>
              </div>
              <Link href={s.slug} className="btn-cta shrink-0">
                Learn More
              </Link>
            </div>
            <ul className="mt-4 list-disc pl-5 text-gray-700 space-y-2">
              {s.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      {/* PROCESS + WHAT'S INCLUDED */}
      <section className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="card p-6 bg-white">
          <h3 className="text-xl font-semibold">How we work</h3>
          <ol className="mt-3 list-decimal pl-6 text-gray-700 space-y-2">
            <li>Photo/size review → fast ballpark estimate</li>
            <li>On-site assessment → confirmed scope & schedule</li>
            <li>Containment & protection → clean work area</li>
            <li>
              Skim/tape/sand with raking-light checks (Level 5 where needed)
            </li>
            <li>Prime & paint (when requested)</li>
            <li>Final tidy-up & walkthrough</li>
          </ol>
          <div className="mt-4 flex gap-3">
            <Link href="/our-process/" className="btn-cta">
              See Our Process
            </Link>
            <Link href="/our-work/" className="btn-cta">
              Before / After
            </Link>
          </div>
        </div>
        <div className="card p-6 bg-white">
          <h3 className="text-xl font-semibold">What you get</h3>
          <ul className="mt-3 list-disc pl-5 text-gray-700 space-y-2">
            <li>Real containment + floor & stair protection</li>
            <li>HEPA-assisted sanding and tidy daily wrap-ups</li>
            <li>Level 5 attention to detail in critical lighting</li>
            <li>WSIB & liability coverage, written warranty</li>
          </ul>
        </div>
      </section>

      {/* LOCAL AREAS */}
      <section id="areas" className="mt-10 card p-6 bg-white">
        <h2 className="text-2xl font-semibold">Local service areas</h2>
        <p className="mt-2 text-gray-700">
          We provide popcorn ceiling removal, drywall finishing, wallpaper
          removal, and interior painting across:
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {cities.map((c) => (
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
        <p className="mt-3 text-sm text-gray-600">
          Need a quick schedule check in your city?{" "}
          <Link href="/quote/" className="underline">
            Request a fast quote
          </Link>{" "}
          or call us.
        </p>
      </section>

      {/* FAQ */}
      <section id="faq" className="mt-10 card p-6 bg-white">
        <h2 className="text-2xl font-semibold">FAQ — services & local work</h2>

        <details className="mt-4">
          <summary className="font-medium">How fast can you start?</summary>
          <p className="mt-2 text-gray-700">
            Smaller ceilings (300–600 sq ft) often start within 1–2 weeks
            depending on city and season. Share photos and sizes for a quick
            ballpark and timeline.
          </p>
        </details>

        <details className="mt-4">
          <summary className="font-medium">
            Will popcorn ceiling removal make a mess in my home?
          </summary>
          <p className="mt-2 text-gray-700">
            We prioritize containment—plastic barriers, taped seams, protected
            floors and stairs, vent masking, and HEPA-assist sanding to manage
            dust. We do tidy daily wrap-ups.
          </p>
        </details>

        <details className="mt-4">
          <summary className="font-medium">Do you paint after removal?</summary>
          <p className="mt-2 text-gray-700">
            Yes. We can leave ceilings paint-ready or complete finish coats. We
            also paint walls and trim on request.
          </p>
        </details>

        <details className="mt-4">
          <summary className="font-medium">What affects price?</summary>
          <p className="mt-2 text-gray-700">
            Square footage, ceiling height, painted texture, access/scaffolding,
            pot light cutouts, and painting. Send photos + sizes for a fast
            ballpark or book a free in-home estimate.
          </p>
        </details>
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
  if (id.includes("drywall")) return "drywall";
  if (id.includes("wallpaper")) return "wallpaper";
  if (id.includes("painting")) return "painting";
  return id;
}
