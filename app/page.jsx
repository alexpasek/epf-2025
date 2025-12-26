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
  title:
    "Professional Popcorn Ceiling Removal Contractor — GTA | EPF Pro Services",
  description:
    "Professional popcorn ceiling removal service with dust control and Level 5 smooth finish. Trusted ceiling texture removal contractor serving Toronto, Mississauga, Oakville, Burlington & GTA.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Professional Popcorn Ceiling Removal Contractor — GTA",
    description:
      "Expert ceiling texture removal, stipple ceiling removal, and ceiling resurfacing with dust-contained process. Level 5 smooth ceiling contractor throughout the GTA.",
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
          "Professional popcorn ceiling removal contractor specializing in dust-controlled ceiling texture removal, stipple ceiling removal, and Level 5 smooth ceiling finishing across the GTA.",
      },
      {
        "@type": "Service",
        name: "Popcorn Ceiling Removal & Finishing",
        serviceType: [
          "Popcorn Ceiling Removal",
          "Ceiling Texture Removal",
          "Stipple Ceiling Removal",
          "Ceiling Resurfacing",
          "Smooth Ceiling Contractor",
          "Drywall Taping & Skim Coat (Level 5)",
          "Interior Painting",
        ],
        areaServed,
        provider: { "@id": `${SITE_URL}/#business` },
        description:
          "Professional popcorn ceiling removal service with dust containment, Level 5 skim coating, and turnkey finishing.",
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Is the popcorn ceiling removal work dust-controlled?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Our professional popcorn ceiling removal service includes full dust containment. We isolate rooms, use plastic barriers, vacuum-assist sanding, and clean daily so your home stays livable during ceiling texture removal.",
            },
          },
          {
            "@type": "Question",
            name: "Do you handle painted popcorn ceiling removal?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Our popcorn ceiling removal contractors are experienced with painted popcorn ceiling removal. We test, score, soak or encapsulate, skim and sand to a bright Level 5 finish even on painted or cracked ceilings.",
            },
          },
          {
            "@type": "Question",
            name: "How fast can I get an estimate for popcorn ceiling removal?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Same-day phone or text estimates with photos for your popcorn ceiling removal project, plus in-home visits for final scope and schedule. Our popcorn ceiling contractors respond quickly to all inquiries.",
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
      blurb:
        "Removed texture, added pot lights and delivered a Level 5 finish.",
      bullets: ["Trades coordination", "Same-week turnaround"],
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
    },
  ];

  const serviceHighlights = [
    {
      title: "Popcorn Ceiling Removal",
      copy: "Expert scraping popcorn ceiling or encapsulation for painted surfaces. Our popcorn ceiling contractors skim-coat, HEPA sand, prime and deliver paint-ready ceilings. Perfect for condos, bungalows and tall foyers.",
    },
    {
      title: "Level 5 Smooth Finish",
      copy: "Professional popcorn ceiling removal service includes multiple skim passes, vacuum sanding, critical-light inspection and primer. Your smooth ceiling contractor ensures flawless results from every angle.",
    },
    {
      title: "Ceiling Texture Removal",
      copy: "From stipple ceiling removal to stucco ceiling removal, we handle all texture types. Coordinate pot lights, fixtures, crack repairs and water stains before final paint for turnkey ceiling resurfacing.",
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
    <>
      <JsonLd />

      {/* HERO */}
      <section className="container-x">
        <div className="rounded-3xl border bg-white p-6 md:p-10 shadow-xl ring-1 ring-black/5">
          <div className="grid gap-10 lg:grid-cols-[3fr_2fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-amber-700 font-semibold">
                Professional popcorn ceiling removal contractor
              </p>
              <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
                Professional popcorn ceiling removal service without the mess
              </h1>
              <p className="mt-4 text-lg text-slate-700">
                EPF Pro Services is your trusted{" "}
                <strong>popcorn ceiling removal contractor</strong> throughout
                the GTA. We specialize in{" "}
                <strong>ceiling texture removal</strong>,{" "}
                <strong>stipple ceiling removal</strong>, and
                <strong> ceiling resurfacing</strong> with dust containment,
                Level 5 skim coating, and concierge-level communication.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href={PHONE_HREF} className="btn-cta">
                  📞 {PHONE_NUMBER}
                </a>
                <Link
                  href="/services/popcorn-ceiling-removal/"
                  className="inline-flex items-center justify-center rounded-full border border-slate-300 px-5 py-3 font-semibold text-slate-700 hover:bg-slate-50"
                >
                  Popcorn ceiling removal services
                </Link>
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
                    {`Popcorn ceiling removal ${c.name}`}
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

      {/* WHY CHOOSE OUR POPCORN CEILING REMOVAL SERVICE */}
      <section className="container-x">
        <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-8 md:p-12 shadow-lg">
          <div className="mx-auto max-w-4xl">
            <p className="text-xs uppercase tracking-[0.3em] text-amber-700 font-semibold text-center">
              Expert popcorn ceiling contractor
            </p>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-center">
              Why choose our professional popcorn ceiling removal service?
            </h2>
            <p className="mt-4 text-lg text-slate-700 text-center max-w-3xl mx-auto">
              As a trusted <strong>popcorn ceiling removal contractor</strong>,
              we handle everything from{" "}
              <strong>taking down popcorn ceiling</strong> texture to delivering
              a flawless <strong>smooth ceiling</strong> finish. Whether you
              need <strong>painted popcorn ceiling removal</strong>,
              <strong> removing stucco ceiling</strong>, or complete{" "}
              <strong>ceiling resurfacing</strong>, our dust-controlled process
              keeps your home clean.
            </p>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm">
                <div className="text-3xl mb-3">🏆</div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  Specialized Popcorn Ceiling Contractors
                </h3>
                <p className="text-slate-600">
                  Our <strong>popcorn ceiling removal contractors</strong> are
                  trained specifically in{" "}
                  <strong>stripping popcorn ceiling</strong> textures,
                  <strong> cottage cheese ceiling removal</strong>, and advanced{" "}
                  <strong>ceiling texture removal</strong> techniques. We're not
                  general contractors—this is our specialty.
                </p>
              </div>
              <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm">
                <div className="text-3xl mb-3">🎯</div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  Complete Smooth Ceiling Solutions
                </h3>
                <p className="text-slate-600">
                  From <strong>taking off popcorn ceiling</strong> texture to
                  final paint, our <strong>smooth ceiling contractor</strong>{" "}
                  team delivers end-to-end service. We handle{" "}
                  <strong>stipple ceiling removal</strong> and complex{" "}
                  <strong>popcorn removal</strong> projects with precision.
                </p>
              </div>
              <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm">
                <div className="text-3xl mb-3">✨</div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  Dust-Controlled Process
                </h3>
                <p className="text-slate-600">
                  Our <strong>professional popcorn ceiling removal</strong>{" "}
                  includes complete containment, HEPA filtration, and daily
                  cleanup. Whether you need to{" "}
                  <strong>get rid of popcorn ceiling</strong> in one room or
                  throughout your home, we keep disruption minimal.
                </p>
              </div>
              <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm">
                <div className="text-3xl mb-3">⚡</div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  All Texture Types Handled
                </h3>
                <p className="text-slate-600">
                  Beyond standard <strong>popcorn ceiling</strong> work, we
                  excel at <strong>stucco ceiling removal</strong> and
                  challenging <strong>painted popcorn ceiling removal</strong>.
                  Our <strong>ceiling resurfacing</strong> delivers Level 5
                  smooth finishes every time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

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
          title="Real popcorn ceiling removal & interior finishing results"
          description="Bright, dust-free projects across Toronto, Mississauga, Oakville, Burlington, Milton, Hamilton and more."
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

      {/* COST SECTION */}
      <section className="container-x">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 md:p-12 shadow-lg">
          <div className="mx-auto max-w-4xl">
            <p className="text-xs uppercase tracking-[0.3em] text-amber-700 font-semibold text-center">
              Transparent pricing
            </p>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-center">
              Understanding popcorn ceiling removal cost
            </h2>
            <p className="mt-4 text-lg text-slate-700 text-center max-w-3xl mx-auto">
              The <strong>cost to scrape popcorn ceiling</strong> varies based
              on several factors. Our <strong>popcorn removal cost</strong> is
              competitive and transparent—no hidden fees.
            </p>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-white border border-blue-100 p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">
                  Basic Removal
                </h3>
                <div className="text-3xl font-bold text-blue-600 mb-2">$$$</div>
                <p className="text-sm text-slate-600 mb-4">
                  Standard unpainted popcorn ceiling removal in typical rooms
                </p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex gap-2">
                    <span className="text-blue-600">✓</span>
                    <span>Dust containment</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600">✓</span>
                    <span>Basic scraping</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600">✓</span>
                    <span>Light skim coat</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-2xl bg-gradient-to-br from-amber-50 to-white border-2 border-amber-400 p-6 relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-500 text-white px-4 py-1 rounded-full text-xs font-semibold">
                  Most Popular
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3 mt-2">
                  Full Service
                </h3>
                <div className="text-3xl font-bold text-amber-600 mb-2">
                  $$$$
                </div>
                <p className="text-sm text-slate-600 mb-4">
                  Complete popcorn ceiling removal with Level 5 finish and
                  primer
                </p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex gap-2">
                    <span className="text-amber-600">✓</span>
                    <span>Full dust containment</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-amber-600">✓</span>
                    <span>Level 5 skim coat</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-amber-600">✓</span>
                    <span>HEPA sanding</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-amber-600">✓</span>
                    <span>Stain-block primer</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-2xl bg-gradient-to-br from-purple-50 to-white border border-purple-100 p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">
                  Premium Package
                </h3>
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  $$$$$
                </div>
                <p className="text-sm text-slate-600 mb-4">
                  Turnkey solution including paint, lighting coordination, and
                  warranty
                </p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex gap-2">
                    <span className="text-purple-600">✓</span>
                    <span>Everything in Full Service</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-purple-600">✓</span>
                    <span>Premium ceiling paint</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-purple-600">✓</span>
                    <span>Pot light coordination</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-purple-600">✓</span>
                    <span>Extended warranty</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8 rounded-2xl bg-slate-50 border border-slate-200 p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                Factors affecting popcorn ceiling removal cost:
              </h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-700">
                <ul className="space-y-2">
                  <li className="flex gap-2">
                    <span className="text-amber-600">•</span>
                    <span>Ceiling height (8' vs 10' vs cathedral)</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-amber-600">•</span>
                    <span>Painted vs unpainted texture</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-amber-600">•</span>
                    <span>Room size and accessibility</span>
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li className="flex gap-2">
                    <span className="text-amber-600">•</span>
                    <span>Number of fixtures and vents</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-amber-600">•</span>
                    <span>Existing damage or repairs needed</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-amber-600">•</span>
                    <span>Asbestos testing if required</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-6 text-center">
              <a href={PHONE_HREF} className="btn-cta inline-flex">
                Get your custom quote
              </a>
            </div>
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

      {/* SERVICE AREAS MENTION - Internal Linking */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Professional Services Across the Greater Toronto Area
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Expert{" "}
              <Link
                href="/services/popcorn-ceiling-removal/"
                className="text-blue-600 font-semibold hover:underline"
              >
                popcorn ceiling removal contractors
              </Link>{" "}
              serving homeowners across the GTA including{" "}
              <Link
                href="/popcorn-ceiling-removal/burlington/"
                className="text-blue-600 font-semibold hover:underline"
              >
                Burlington
              </Link>
              ,{" "}
              <Link
                href="/popcorn-ceiling-removal/mississauga/"
                className="text-blue-600 font-semibold hover:underline"
              >
                Mississauga popcorn ceiling removal
              </Link>{" "}
              (Port Credit, Erin Mills, Streetsville),{" "}
              <Link
                href="/popcorn-ceiling-removal/oakville/"
                className="text-blue-600 font-semibold hover:underline"
              >
                Oakville
              </Link>
              ,{" "}
              <Link
                href="/popcorn-ceiling-removal/toronto/"
                className="text-blue-600 font-semibold hover:underline"
              >
                Toronto
              </Link>
              , and{" "}
              <Link
                href="/popcorn-ceiling-removal/hamilton/"
                className="text-blue-600 font-semibold hover:underline"
              >
                Hamilton
              </Link>{" "}
              with dust-controlled ceiling texture removal, stipple ceiling
              removal, and Level 5 smooth finishes.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/services/popcorn-ceiling-removal/"
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold rounded-full hover:from-blue-600 hover:to-cyan-600 transition shadow-lg hover:shadow-xl"
            >
              Popcorn Ceiling Removal
            </Link>
            <Link
              href="/services/interior-painting/"
              className="px-6 py-3 bg-white border-2 border-gray-300 text-gray-700 font-semibold rounded-full hover:border-blue-500 hover:text-blue-600 transition"
            >
              Interior Painting
            </Link>
            <Link
              href="/services/wallpaper-removal/"
              className="px-6 py-3 bg-white border-2 border-gray-300 text-gray-700 font-semibold rounded-full hover:border-blue-500 hover:text-blue-600 transition"
            >
              Wallpaper Removal
            </Link>
            <Link
              href="/services/drywall-installation/"
              className="px-6 py-3 bg-white border-2 border-gray-300 text-gray-700 font-semibold rounded-full hover:border-blue-500 hover:text-blue-600 transition"
            >
              Drywall Installation
            </Link>
          </div>
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
    </>
  );
}
