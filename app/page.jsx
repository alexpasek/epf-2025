import Link from "next/link";
import { cities } from "@/data/cities";
import { PHONE_HREF, PHONE_NUMBER } from "./config";
import QuoteForm from "@/components/QuoteForm";
import GoogleReviews from "@/components/GoogleReviews";
import OurWorkGallery from "@/components/OurWorkGallery";

export const revalidate = 86400;

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://epf-2025.pages.dev";

export const metadata = {
  title: "Popcorn Ceiling Removal & Interior Finishing — GTA",
  description:
    "EPF Pro Services removes popcorn ceilings, wallpaper, and finishes drywall + paint with dust control and Level 5 smoothness. Serving Toronto, Mississauga, Oakville, Burlington, Hamilton and beyond.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Popcorn Ceiling Removal & Interior Finishing — GTA",
    description:
      "Dust-contained popcorn ceiling removal, drywall finishing, wallpaper removal, and painting with Level 5 results throughout the GTA.",
    url: "/",
    type: "website",
  },
  robots: { index: true, follow: true },
};

function JsonLd() {
  const areaServed = cities.map((c) => c.name);
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `${SITE_URL}/#business`,
        name: "EPF Pro Services",
        url: SITE_URL,
        telephone: PHONE_NUMBER,
        areaServed,
        image: `${SITE_URL}/og.webp`,
        priceRange: "$$",
        serviceArea: {
          "@type": "AdministrativeArea",
          name: "Greater Toronto Area",
        },
        description:
          "Dust-controlled popcorn ceiling removal, wallpaper stripping, drywall repair and interior painting finished to Level 5 smoothness across the GTA.",
      },
      {
        "@type": "Service",
        name: "Popcorn Ceiling Removal & Finishing",
        serviceType: [
          "Popcorn Ceiling Removal",
          "Wallpaper Removal",
          "Drywall Taping & Skim Coat (Level 5)",
          "Interior Painting",
        ],
        areaServed,
        provider: { "@id": `${SITE_URL}/#business` },
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Is the work dust-controlled?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. We isolate rooms, use plastic containment, vacuum-assist sanding, and clean daily so your home stays livable.",
            },
          },
          {
            "@type": "Question",
            name: "Do you handle painted or stubborn popcorn?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We test, score, soak or encapsulate, skim and sand to a bright Level 5 finish even on painted or cracked ceilings.",
            },
          },
          {
            "@type": "Question",
            name: "How fast can I get an estimate?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Same-day phone or text estimates with photos, plus in-home visits for final scope and schedule.",
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

export default function Page() {
  const heroStats = [
    { label: "Ceilings smoothed", value: "4500+" },
    { label: "Years dust-controlled", value: "18" },
    { label: "Average rating", value: "5 ★" },
  ];

  const videos = [
    {
      id: "g8Zl0XlbxBo",
      title: "Containment & Prep",
      blurb: "Live walkthrough of how we protect floors, vents, and built-ins.",
      src: "https://www.youtube.com/embed/g8Zl0XlbxBo",
    },
    {
      id: "73P8rMOy9pc",
      title: "Skim Coat & Sanding",
      blurb: "Level 5 skim, vacuum sanding, and light check for a flat finish.",
      src: "https://www.youtube.com/embed/73P8rMOy9pc",
    },
    {
      id: "nSnbyGVqbMQ",
      title: "Finished Smooth Ceilings",
      blurb: "Client-ready ceilings after popcorn removal and painting.",
      src: "https://www.youtube.com/embed/nSnbyGVqbMQ",
    },
  ];

  const galleryItems = [
    {
      src: "/home/1.webp",
      alt: "Popcorn ceiling removal in a Toronto condo bedroom",
      city: "Toronto",
      nbh: "Leslieville",
      service: "Popcorn Ceiling Removal",
      headline: "Leslieville Condo",
      blurb: "Ceiling encapsulation and Level 5 skim in a high-rise bedroom.",
      bullets: ["Night work schedule", "Encapsulated elevators"],
    },
    {
      src: "/home/2.webp",
      alt: "Smooth ceiling after removal in Mississauga family room",
      city: "Mississauga",
      nbh: "Port Credit",
      service: "Popcorn Ceiling Removal",
      headline: "Port Credit Family Room",
      blurb: "Painted popcorn removed, joints repaired, bright repaint.",
      bullets: ["Dust control", "Pot light layout"],
    },
    {
      src: "/home/3.webp",
      alt: "Oakville kitchen with ceiling repaired and painted",
      city: "Oakville",
      nbh: "Joshua Creek",
      service: "Drywall & Paint",
      headline: "Oakville Kitchen",
      blurb: "Kitchen reno patched, skimmed and painted to match cabinets.",
      bullets: ["Cabinet protection", "Colour matching"],
    },
    {
      src: "/home/4.webp",
      alt: "Burlington Popcorn ceiling removal ceiling Level 5 finish",
      city: "Burlington",
      nbh: "Roseland",
      service: "Popcorn Ceiling Removal",
      headline: "Roseland Stucco ceiling removal",
      blurb: "Tall foyer scraped, skimmed and painted with scaffolding.",
      bullets: ["Two-storey access", "Critical-light inspection"],
    },
    {
      src: "/home/5.webp",
      alt: "Smooth ceiling with recessed lights installed",
      city: "Milton",
      nbh: "Bronte Meadows",
      service: "Electrical coordination",
      headline: "Milton Lighting Upgrade",
      blurb: "Removed texture, added pot lights and delivered a Level 5 finish.",
      bullets: ["Trades coordination", "Same-week turnaround"],
    },
    {
      src: "/home/6.webp",
      alt: "Freshly painted living room after wallpaper removal",
      city: "Hamilton",
      nbh: "Ancaster",
      service: "Wallpaper Removal",
      headline: "Ancaster Refresh",
      blurb: "Multi-layer wallpaper stripped, skimmed and painted calm neutrals.",
      bullets: ["Adhesive washing", "Colour consultation"],
    },
  ];

  const serviceHighlights = [
    {
      title: "Popcorn Ceiling Removal",
      copy:
        "Scrape or encapsulate, skim-coat, sanding with HEPA vacuums, prime and paint-ready finish. Ideal for condos, bungalows and tall foyers.",
    },
    {
      title: "Level 5 Smooth Finish",
      copy:
        "Multiple skim passes, vacuum sanding, critical-light inspection and primer so ceilings look perfect from every angle.",
    },
    {
      title: "Lighting & Repairs",
      copy:
        "Coordinate pot lights, fixtures, fan boxes, crack repairs and water stains all before we paint so it’s turnkey.",
    },
  ];

  const processSteps = [
    "Site visit or virtual consult to confirm scope, schedule, and any testing.",
    "Dust containment: floors, vents, cabinetry and furniture fully protected.",
    "Removal or skim-coat, joint repair, HEPA-assisted sanding and prime.",
    "Final walk-through, touch-ups under daylight, clean-up and warranty handoff.",
  ];

  const faqs = [
    {
      q: "Can you work in furnished homes or condos?",
      a: "Yes. We build containment, protect elevators and common areas, and clean daily so families can stay put.",
    },
    {
      q: "Do you handle asbestos testing?",
      a: "We coordinate testing for pre-1990s popcorn. If asbestos is present we bring in licensed abatement before finishing.",
    },
    {
      q: "How soon can the project start?",
      a: "Most jobs start within 1–2 weeks. Rush condo timelines are possible if we pre-book elevators and submit paperwork early.",
    },
  ];

  const coverage = cities.slice(0, 12);

  const galleryMenu = [
    {
      label: "Popcorn Ceilings",
      href: "/services/popcorn-ceiling-removal/",
      current: true,
    },
    { label: "Wallpaper Removal", href: "/services/wallpaper-removal/" },
    { label: "Drywall Finishing", href: "/services/drywall-installation/" },
    { label: "Interior Painting", href: "/services/interior-painting/" },
    { label: "Our Work", href: "/our-work/" },
  ];

  return (
    <div className="space-y-12 pb-10 pt-6">
      <JsonLd />

      {/* HERO */}
      <section className="container-x">
        <div className="rounded-3xl border bg-white p-6 md:p-10 shadow-xl ring-1 ring-black/5">
          <div className="grid gap-10 lg:grid-cols-[3fr_2fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-amber-700 font-semibold">
                Popcorn ceiling removal • Level 5 smooth
              </p>
              <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
                Popcorn ceiling removal without the mess.
              </h1>
              <p className="mt-4 text-lg text-slate-700">
                EPF Pro Services removes popcorn ceilings throughout the GTA
                with dust containment, Level 5 skim coating, and concierge-level
                communication.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href={PHONE_HREF} className="btn-cta">
                  📞 {PHONE_NUMBER}
                </a>
                <Link
                  href="/our-work/"
                  className="inline-flex items-center justify-center rounded-full border border-slate-300 px-5 py-3 font-semibold text-slate-700 hover:bg-slate-50"
                >
                  See recent work
                </Link>
              </div>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {heroStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-slate-200 bg-white/70 p-4 text-center shadow-sm"
                  >
                    <div className="text-2xl font-semibold text-slate-900">
                      {stat.value}
                    </div>
                    <p className="text-sm text-slate-600">{stat.label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-2">
                {cities.slice(0, 10).map((c) => (
                  <Link
                    key={c.slug}
                    href={`/popcorn-ceiling-removal/${c.slug}/`}
                    className="pill"
                    title={`Popcorn ceiling removal in ${c.name}`}
                  >
                    {c.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl">
              <h2 className="text-2xl font-semibold">
                Plan your popcorn ceiling project
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Share the rooms, ceiling height, and timing. We’ll reply within
                hours with scope and schedule.
              </p>
              <div className="mt-4">
                <QuoteForm />
              </div>
              <p className="mt-3 text-xs text-slate-500">
                Prefer to text photos? Message{" "}
                <a
                  href={`sms:${PHONE_NUMBER.replace(/[^0-9]/g, "")}`}
                  className="underline"
                >
                  {PHONE_NUMBER}
                </a>{" "}
                anytime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <GoogleReviews className="bg-white" />
      {/* VIDEOS */}
      <section className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-amber-700 font-semibold">
            Video walk-throughs
          </p>
          <h2 className="mt-2 text-3xl font-semibold">
            Watch how we prep, skim and deliver Level 5 ceilings
          </h2>
          <p className="mt-3 text-slate-600">
            Quick clips from recent popcorn ceiling projects show our
            containment, sanding, and final handoffs. Every job follows the same
            playbook.
          </p>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {videos.map((video) => (
            <article
              key={video.id}
              className="rounded-3xl border border-slate-200 bg-white shadow-md"
            >
              <div
                className="relative w-full overflow-hidden rounded-t-3xl bg-black"
                style={{ aspectRatio: "16 / 9" }}
              >
                <iframe
                  src={video.src}
                  title={video.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-slate-900">
                  {video.title}
                </h3>
                <p className="mt-1 text-sm text-slate-600">{video.blurb}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section className="bg-slate-50 py-10">
        <OurWorkGallery
          items={galleryItems}
          menuItems={galleryMenu}
          title="Real popcorn ceiling removal & interior finishing results"
          description="Bright, dust-free projects across Toronto, Mississauga, Oakville, Burlington, Milton, Hamilton and more."
          areas={cities.map((c) => c.name)}
          business={{ name: "EPF Pro Services", url: SITE_URL, phone: PHONE_NUMBER }}
        />
      </section>

      {/* SERVICES */}
      <section className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-amber-700 font-semibold">
            What’s included
          </p>
          <h2 className="mt-2 text-3xl font-semibold">
            Popcorn ceiling removal done end-to-end
          </h2>
          <p className="mt-3 text-slate-600">
            One crew handles containment, removal, Level 5 skim and paint, so
            you don’t juggle multiple trades.
          </p>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {serviceHighlights.map((service) => (
            <article
              key={service.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-xl font-semibold text-slate-900">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">{service.copy}</p>
            </article>
          ))}
        </div>
      </section>

      {/* CONTACT + PROCESS */}
      <section className="container-x grid gap-8 lg:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold">
            Our 4-step popcorn ceiling plan
          </h2>
          <ul className="mt-4 space-y-3 text-slate-700">
            {processSteps.map((step, idx) => (
              <li key={step} className="flex gap-3">
                <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-amber-100 text-amber-800 text-sm font-semibold">
                  {idx + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 rounded-2xl bg-slate-50 p-4 text-sm text-slate-600">
            Need electrical, pot lights or crown? We coordinate with trusted
            partners so the ceiling is ready before paint.
          </div>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold">
            GTA coverage & concierge support
          </h2>
          <p className="mt-3 text-slate-600">
            We work in houses, condos, and commercial spaces from Toronto to
            Niagara. Dedicated project managers send daily photo updates.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {coverage.map((city) => (
              <Link
                key={city.slug}
                href={`/${city.slug}/`}
                className="rounded-full border border-slate-200 px-3 py-1 text-sm hover:border-amber-500 hover:text-amber-700"
              >
                {city.name}
              </Link>
            ))}
          </div>
          <div className="mt-6">
            <a href="/contact/" className="btn-cta">
              Talk to a project planner
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-amber-700 font-semibold">
            FAQ
          </p>
          <h2 className="mt-2 text-3xl font-semibold">
            Questions about popcorn ceiling removal?
          </h2>
          <p className="mt-3 text-slate-600">
            If you do not see your answer below, send photos or call us and we
            will respond the same day.
          </p>
        </div>
        <div className="mx-auto mt-8 max-w-4xl space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.q}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <summary className="cursor-pointer text-lg font-semibold text-slate-900">
                {faq.q}
              </summary>
              <p className="mt-3 text-sm text-slate-600">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-x">
        <div className="rounded-3xl bg-gradient-to-r from-amber-500 to-red-500 p-8 text-white shadow-2xl">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/80">
                Ready when you are
              </p>
              <h2 className="mt-2 text-3xl font-semibold">
                Let’s remove that popcorn ceiling & refresh your space
              </h2>
              <p className="mt-3 text-white/90">
                Send photos for a same-day estimate or book a walkthrough.
                Expect punctual crews, dust-contained work, and a Level 5
                finish.
              </p>
            </div>
            <div className="flex flex-col gap-3 text-lg font-semibold">
              <a
                href={PHONE_HREF}
                className="btn-cta bg-white text-red-600 hover:bg-white/90"
              >
                Call {PHONE_NUMBER}
              </a>
              <Link
                href="/quote/"
                className="inline-flex items-center justify-center rounded-full border border-white px-5 py-3 font-semibold text-white hover:bg-white/10"
              >
                Request a quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
