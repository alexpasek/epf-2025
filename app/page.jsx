import Link from "next/link";
import { cities } from "@/data/cities";
import { PHONE_HREF, PHONE_NUMBER, SITE_URL, BUSINESS_NAME } from "./config";
import QuoteForm from "@/components/QuoteForm";
import GoogleReviews from "@/components/GoogleReviews";
import OurWorkGallery from "@/components/OurWorkGallery";
import {
  videoEmbedUrl,
  videoLibrary,
  videoPagePath,
  videoThumbnailUrl,
  videoWatchUrl,
} from "@/data/videos";

export const revalidate = 86400;

export const metadata = {
  title: "Popcorn Ceiling Removal, Drywall & Interior Finishing — GTA",
  description:
    "EPF Pro Services handles popcorn ceiling removal, drywall installation, drywall repair, wallpaper removal, and paint-ready interior finishing with dust control and Level 5 smoothness across the GTA.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Popcorn Ceiling Removal, Drywall & Interior Finishing — GTA",
    description:
      "Dust-contained popcorn ceiling removal, drywall installation, drywall repair, wallpaper removal, and painting with Level 5 results throughout the GTA.",
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
        name: BUSINESS_NAME,
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
          "Dust-controlled popcorn ceiling removal, drywall installation, drywall repair, wallpaper stripping, and interior painting finished to Level 5 smoothness across the GTA.",
      },
      {
        "@type": "Service",
        name: "Popcorn Ceiling Removal, Drywall & Interior Finishing",
        serviceType: [
          "Popcorn Ceiling Removal",
          "Drywall Installation",
          "Drywall Repair",
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
      ...videoLibrary.map((video) => ({
        "@type": "VideoObject",
        "@id": `${SITE_URL}${videoPagePath(video)}`,
        url: `${SITE_URL}${videoPagePath(video)}`,
        name: video.title,
        description: video.description,
        thumbnailUrl: videoThumbnailUrl(video),
        uploadDate: video.uploadDate,
        embedUrl: videoEmbedUrl(video),
        contentUrl: videoWatchUrl(video),
        potentialAction: {
          "@type": "WatchAction",
          target: `${SITE_URL}${videoPagePath(video)}`,
        },
      })),
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

  const videos = videoLibrary.map((video) => ({
    ...video,
    id: video.youtubeId,
    src: videoEmbedUrl(video),
    href: videoPagePath(video),
  }));

  const drywallInstallHubs = [
    {
      href: "/services/drywall-installation/mississauga/",
      title: "Drywall Installation Mississauga",
      copy: "Condos, basements, and commercial builds with hanging, taping, and Level 5 finishing.",
    },
    {
      href: "/services/drywall-installation/burlington/",
      title: "Drywall Installation Burlington",
      copy: "Residential additions, tenant fit-outs, and smooth wall packages for Burlington homes.",
    },
    {
      href: "/services/drywall-installation/hamilton/",
      title: "Drywall Installation Hamilton",
      copy: "Basements, lofts, industrial fit-outs, and renovation-ready board + finish scopes.",
    },
  ];

  const drywallRepairHubs = [
    {
      href: "/services/drywall-repair/mississauga/",
      title: "Drywall Repair Mississauga",
      copy: "Emergency leak repairs, seam fixes, trade cut-outs, and paint-ready patching.",
    },
    {
      href: "/services/drywall-repair/oakville/",
      title: "Drywall Repair Oakville",
      copy: "Premium finishing for estates, condos, and waterfront homes with critical-light checks.",
    },
    {
      href: "/services/drywall-repair/burlington/",
      title: "Drywall Repair Burlington",
      copy: "Fast patching, water damage restoration, and condo-friendly scheduling.",
    },
    {
      href: "/services/drywall-repair/hamilton/",
      title: "Drywall Repair Hamilton",
      copy: "Water damage, cracks, and commercial repair scopes across Hamilton and Stoney Creek.",
    },
    {
      href: "/services/drywall-repair/milton/",
      title: "Drywall Repair Milton",
      copy: "Builder deficiency touch-ups, water damage restoration, and family-home patching.",
    },
    {
      href: "/services/drywall-repair/grimsby/",
      title: "Drywall Repair Grimsby",
      copy: "Homeowner-friendly service for cracks, leaks, and clean paint-ready repairs.",
    },
  ];

  const drywallTestimonials = [
    {
      name: "Marco R.",
      location: "Oakville renovation",
      quote:
        "Bulkhead repairs blended perfectly. Ready for paint with a smooth Level 5 finish.",
      href: "/services/drywall-repair/oakville/",
      cta: "See Oakville drywall repair",
    },
    {
      name: "Marta W.",
      location: "Stoney Creek addition",
      quote:
        "New bedroom added and the seams disappeared after finishing. On schedule and professional.",
      href: "/services/drywall-installation/hamilton/",
      cta: "See Hamilton drywall installation",
    },
    {
      name: "Trade client",
      location: "Mississauga condo turnover",
      quote:
        "Board, tape, skim, and repair coordination all stayed on timeline so paint could roll immediately.",
      href: "/services/drywall-installation/mississauga/",
      cta: "See Mississauga drywall installation",
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
      href: "/services/popcorn-ceiling-removal/",
      ctaLabel: "Toronto popcorn ceiling removal →",
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
      href: "/services/popcorn-ceiling-removal/",
      ctaLabel: "Mississauga popcorn ceiling removal →",
    },
    {
      src: "/gallery/drywall-installation/drywall-installation-hero.webp",
      alt: "Drywall installation crew hanging and finishing new board in Mississauga",
      city: "Mississauga",
      nbh: "City Centre",
      service: "Drywall Installation",
      headline: "Mississauga Condo Build-Out",
      blurb: "Board hanging, taping, and Level 5 finishing for a multi-room condo refresh.",
      bullets: ["Condo logistics", "Paint-ready handoff"],
      href: "/services/drywall-installation/mississauga/",
      ctaLabel: "Mississauga drywall installation →",
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
      href: "/services/popcorn-ceiling-removal/",
      ctaLabel: "Burlington popcorn ceiling removal →",
    },
    {
      src: "/gallery/drywall-repair/drywall-repair-service00004.webp",
      alt: "Drywall repair and skim coat finishing in Oakville kitchen renovation",
      city: "Oakville",
      nbh: "Joshua Creek",
      service: "Drywall Repair",
      headline: "Oakville Kitchen Patch + Skim",
      blurb: "Kitchen reno patched, skimmed, and blended for a clean repaint under cabinet lighting.",
      bullets: ["Cabinet protection", "Invisible patch lines"],
      href: "/services/drywall-repair/oakville/",
      ctaLabel: "Oakville drywall repair →",
    },
    {
      src: "/home/6.webp",
      alt: "Freshly painted living room after wallpaper removal",
      city: "Hamilton",
      nbh: "Ancaster",
      service: "Wallpaper Removal",
      headline: "Ancaster Refresh",
      blurb:
        "Multi-layer wallpaper stripped, skimmed and painted calm neutrals.",
      bullets: ["Adhesive washing", "Colour consultation"],
      href: "/services/wallpaper-removal/",
      ctaLabel: "Hamilton wallpaper removal →",
    },
    {
      src: "/gallery/drywall-repair/drywall-repair-service00002.webp",
      alt: "Hamilton ceiling water damage drywall repair with seamless finish",
      city: "Hamilton",
      nbh: "Stoney Creek",
      service: "Drywall Repair",
      headline: "Hamilton Leak Recovery",
      blurb: "Ceiling water damage repair, stain blocking, and final Level 5-ready surface.",
      bullets: ["Moisture checks", "Same-week repair slot"],
      href: "/services/drywall-repair/hamilton/",
      ctaLabel: "Hamilton drywall repair →",
    },
    {
      src: "/gallery/drywall-repair/drywall-repair-service00001.webp",
      alt: "Drywall installation and finishing in Burlington addition",
      city: "Burlington",
      nbh: "Roseland",
      service: "Drywall Installation",
      headline: "Burlington Addition Finish",
      blurb: "Fresh board, taped corners, and Level 5 prep for a bright family-room addition.",
      bullets: ["Board + finish", "Renovation scheduling"],
      href: "/services/drywall-installation/burlington/",
      ctaLabel: "Burlington drywall installation →",
    },
  ];

  const serviceHighlights = [
    {
      title: "Popcorn Ceiling Removal",
      copy: "Scrape or encapsulate, skim-coat, sand with HEPA vacuums, then hand off a bright paint-ready finish for condos, bungalows, and tall foyers.",
      href: "/services/popcorn-ceiling-removal/",
    },
    {
      title: "Drywall Installation",
      copy: "Board hanging, taping, bulkheads, ceilings, and Level 4/5 finishing for basements, additions, condos, and commercial fit-outs.",
      href: "/services/drywall-installation/",
    },
    {
      title: "Drywall Repair",
      copy: "Water damage, cracks, trade cut-outs, and invisible patching for walls and ceilings that need a true seamless blend.",
      href: "/services/drywall-repair/",
    },
    {
      title: "Skylight & Cathedral Ceiling Repair",
      copy: "Interior drywall, ceiling stain, popcorn texture removal, primer, painting prep, and smooth finish repair around skylights and cathedral ceilings.",
      href: "/services/skylight-drywall-repair/",
    },
    {
      title: "Wallpaper Removal",
      copy: "Adhesive wash, skim, and primer so stripped walls are actually ready for paint instead of needing another trade later.",
      href: "/services/wallpaper-removal/",
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
    { label: "Drywall Installation", href: "/services/drywall-installation/" },
    { label: "Drywall Repair", href: "/services/drywall-repair/" },
    { label: "Wallpaper Removal", href: "/services/wallpaper-removal/" },
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
                Popcorn ceilings • Drywall • Paint-ready finishing
              </p>
              <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
                Popcorn ceilings, drywall, and paint-ready interiors without the mess.
              </h1>
              <p className="mt-4 text-lg text-slate-700">
                EPF Pro Services handles popcorn ceiling removal, drywall installation,
                drywall repair, wallpaper removal, and Level 5 finishing throughout
                the GTA with dust containment and concierge-level communication.
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
                <Link
                  href="/services/popcorn-ceiling-removal/"
                  className="pill"
                  title="Popcorn ceiling removal services across the GTA"
                >
                  Popcorn Ceiling Removal
                </Link>
                <Link
                  href="/services/wallpaper-removal/"
                  className="pill"
                  title="Wallpaper removal services"
                >
                  Wallpaper Removal
                </Link>
                <Link
                  href="/services/drywall-installation/"
                  className="pill"
                  title="Drywall installation services"
                >
                  Drywall Installation
                </Link>
                <Link
                  href="/services/drywall-repair/"
                  className="pill"
                  title="Drywall repair services"
                >
                  Drywall Repair
                </Link>
                <Link
                  href="/services/skylight-drywall-repair/"
                  className="pill"
                  title="Skylight and cathedral ceiling repair services"
                >
                  Skylight & Cathedral Ceiling Repair
                </Link>
                <Link
                  href="/services/interior-painting/"
                  className="pill"
                  title="Interior painting services"
                >
                  Interior Painting
                </Link>
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
            Watch how we prep, skim, board, and deliver Level 5 finishes
          </h2>
          <p className="mt-3 text-slate-600">
            Quick clips from recent popcorn ceiling and drywall projects show our
            containment, sanding, board prep, and final handoffs. Every job follows
            the same quality playbook.
          </p>
          <div className="mt-3">
            <Link
              href="/videos/"
              className="text-sm font-semibold text-amber-700 hover:underline"
            >
              Browse all videos →
            </Link>
          </div>
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
                <Link
                  href={video.href}
                  className="mt-3 inline-flex text-sm font-semibold text-amber-700 hover:underline"
                >
                  Watch on our site →
                </Link>
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
          title="Real popcorn ceiling, drywall, wallpaper & paint-ready results"
          description="Bright, dust-controlled projects across Toronto, Mississauga, Oakville, Burlington, Milton, Hamilton and more."
          areas={cities.map((c) => c.name)}
          business={{
            name: BUSINESS_NAME,
            url: SITE_URL,
            phone: PHONE_NUMBER,
          }}
        />
      </section>

      {/* SERVICES */}
      <section className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-amber-700 font-semibold">
            What’s included
          </p>
          <h2 className="mt-2 text-3xl font-semibold">
            Core finishing services, clearly separated
          </h2>
          <p className="mt-3 text-slate-600">
            Popcorn ceilings, drywall installation, drywall repair, and wallpaper
            removal each have their own workflow, scope, and city pages.
          </p>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {serviceHighlights.map((service) => (
            <article
              key={service.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-xl font-semibold text-slate-900">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">{service.copy}</p>
              <Link
                href={service.href}
                className="mt-4 inline-flex text-sm font-semibold text-amber-700 hover:underline"
              >
                Explore service →
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="container-x">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-xs uppercase tracking-[0.3em] text-blue-700 font-semibold">
              Drywall Installation Hubs
            </p>
            <h2 className="mt-2 text-3xl font-semibold">
              Drywall installation city pages
            </h2>
            <div className="mt-6 grid gap-4">
              {drywallInstallHubs.map((hub) => (
                <Link
                  key={hub.href}
                  href={hub.href}
                  className="rounded-2xl border border-slate-200 p-5 hover:border-blue-300 hover:bg-slate-50 transition"
                >
                  <div className="font-semibold text-slate-900">{hub.title}</div>
                  <p className="mt-1 text-sm text-slate-600">{hub.copy}</p>
                </Link>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-xs uppercase tracking-[0.3em] text-blue-700 font-semibold">
              Drywall Repair Hubs
            </p>
            <h2 className="mt-2 text-3xl font-semibold">
              Drywall repair city pages
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {drywallRepairHubs.map((hub) => (
                <Link
                  key={hub.href}
                  href={hub.href}
                  className="rounded-2xl border border-slate-200 p-5 hover:border-blue-300 hover:bg-slate-50 transition"
                >
                  <div className="font-semibold text-slate-900">{hub.title}</div>
                  <p className="mt-1 text-sm text-slate-600">{hub.copy}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container-x">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.3em] text-amber-700 font-semibold">
              Drywall Review Snippets
            </p>
            <h2 className="mt-2 text-3xl font-semibold">
              Drywall clients mention finish quality, not patch lines
            </h2>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {drywallTestimonials.map((item) => (
              <article
                key={item.name + item.location}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
              >
                <p className="text-sm leading-7 text-slate-700">“{item.quote}”</p>
                <p className="mt-4 text-sm font-semibold text-slate-900">
                  {item.name}
                </p>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                  {item.location}
                </p>
                <Link
                  href={item.href}
                  className="mt-4 inline-flex text-sm font-semibold text-blue-700 hover:underline"
                >
                  {item.cta}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT + PROCESS */}
      <section className="container-x grid gap-8 lg:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold">
            Our 4-step finishing plan
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
            Need electrical, pot lights, drywall replacement, or crown? We coordinate
            scopes so ceilings and walls are ready before paint.
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
              <span
                key={city.slug}
                className="rounded-full border border-slate-200 px-3 py-1 text-sm text-slate-700 bg-white/50"
              >
                {city.name}
              </span>
            ))}
          </div>
          <div className="mt-4">
            <Link
              href="/services/popcorn-ceiling-removal/"
              className="text-sm font-semibold text-amber-700 hover:underline"
              title="Popcorn ceiling removal services across the GTA"
            >
              Popcorn ceiling removal services across the GTA
            </Link>
          </div>
          <div className="mt-3">
            <Link
              href="/services/drywall-installation/mississauga/"
              className="text-sm font-semibold text-slate-700 hover:underline"
              title="Drywall installation in Mississauga"
            >
              Drywall installation in Mississauga
            </Link>
          </div>
          <div className="mt-3">
            <Link
              href="/services/drywall-repair/oakville/"
              className="text-sm font-semibold text-slate-700 hover:underline"
              title="Drywall repair in Oakville"
            >
              Drywall repair in Oakville
            </Link>
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
