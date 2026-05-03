import Link from "next/link";
import { CONTACT } from "@/app/config";
import { ServiceCopy } from "@/components/LocalSEOCopy";
import { cities } from "@/data/cities";
import QuoteForm from "@/components/QuoteForm";
import {
  videoEmbedUrl,
  videoLibrary,
  videoPagePath,
  videoPageUrl,
  videoThumbnailUrl,
  videoWatchUrl,
} from "@/data/videos";

export const revalidate = 86400;

export const metadata = {
  title:
    "Popcorn Ceiling Removal | Smooth Ceilings (Level 5) | EPF Pro Services",
  description:
    "Professional popcorn ceiling removal and Level 5 finishing across the GTA. Dust-controlled scraping, skim-coating, HEPA sanding, stain-block primer and optional ceiling painting. Free quotes and same-day estimates.",
  keywords: [
    "popcorn ceiling removal",
    "popcorn ceiling contractor",
    "popcorn ceiling removal contractor",
    "professional popcorn ceiling removal",
    "popcorn ceiling removal service",
    "smooth ceiling contractor",
    "ceiling texture removal",
    "stipple ceiling removal",
    "ceiling resurfacing",
    "stucco ceiling removal",
    "cottage cheese ceiling removal",
    "painted popcorn ceiling removal",
    "scraping popcorn ceiling",
    "stripping popcorn ceiling",
    "Level 5 skim coat",
    "HEPA dust control ceiling",
    "popcorn ceiling removal cost",
    "popcorn removal near me",
    "ceiling smoothing",
    "Level 5 ceiling finish",
  ],
  alternates: { canonical: "/services/popcorn-ceiling-removal/" },
  openGraph: {
    title:
      "Popcorn Ceiling Removal | Smooth Ceilings (Level 5) | EPF Pro Services",
    description:
      "Dust-controlled popcorn ceiling removal, Level 5 skim coat, HEPA sanding, primer and optional ceiling painting. Serving the GTA with quick quotes.",
    url: "/services/popcorn-ceiling-removal/",
    type: "website",
    images: [
      {
        url: "/services/popcorn-ceiling-removal/1.webp",
        width: 1200,
        height: 630,
        alt: "Professional popcorn ceiling removal",
      },
    ],
  },
  robots: { index: true, follow: true },
};

function JsonLd() {
  const areaServed = cities.map((c) => c.name);
  const phoneText = CONTACT?.phone || "(647) 923-6784";
  const phoneHref = CONTACT?.phoneHref || "tel:+16479236784";

  const videoObjects = videoLibrary.map((video) => ({
    "@type": "VideoObject",
    "@id": videoPageUrl(video),
    url: videoPageUrl(video),
    name: video.title,
    description: video.description,
    thumbnailUrl: videoThumbnailUrl(video),
    uploadDate: video.uploadDate,
    embedUrl: videoEmbedUrl(video),
    potentialAction: {
      "@type": "WatchAction",
      target: videoPageUrl(video),
    },
  }));

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: "Professional Popcorn Ceiling Removal",
        serviceType: [
          "Popcorn Ceiling Removal",
          "Stipple Ceiling Removal",
          "Ceiling Texture Removal",
          "Stucco Ceiling Removal",
          "Ceiling Skim Coat Level 5",
          "Ceiling Resurfacing",
          "Interior Ceiling Painting",
        ],
        areaServed,
        provider: {
          "@type": "LocalBusiness",
          name: "EPF Pro Services",
          telephone: phoneText,
          url: "https://epfproservices.com",
          image: "/logo.png",
          sameAs: ["https://maps.app.goo.gl/QkkUQQPZc6oSyvJy9"],
          priceRange: "$$",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "127",
            bestRating: "5",
            worstRating: "1",
          },
          address: {
            "@type": "PostalAddress",
            addressRegion: "ON",
            addressCountry: "CA",
          },
          areaServed: areaServed,
          knowsAbout: [
            "Popcorn Ceiling Removal",
            "Stipple Ceiling Removal",
            "Level 5 Skim Coating",
            "Ceiling Texture Removal",
            "HEPA Dust Control",
          ],
          slogan:
            "Professional Popcorn Ceiling Removal Contractors Serving the GTA",
        },
        offers: {
          "@type": "Offer",
          priceCurrency: "CAD",
          availability: "https://schema.org/InStock",
        },
        potentialAction: { "@type": "RequestQuoteAction", target: "/quote/" },
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Is popcorn ceiling removal dust-controlled?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Our professional popcorn ceiling removal process includes room sealing, floor and vent protection, HEPA vacuum-assist sanding, and thorough clean-up. We minimize dust throughout the entire ceiling texture removal process.",
            },
          },
          {
            "@type": "Question",
            name: "Do you deliver a Level 5 smooth finish?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Absolutely. We skim-coat the entire ceiling, feather edges, and perform critical-light checks before priming. Any imperfections are re-touched to achieve the Level 5 smooth ceiling finish standard.",
            },
          },
          {
            "@type": "Question",
            name: "Can you remove painted or multiple-layer popcorn ceiling texture?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. For painted popcorn ceilings or multiple texture layers, we assess the condition and choose between safe removal, scraping, or encapsulation. Then we apply a Level 5 skim coat for a uniform smooth surface.",
            },
          },
          {
            "@type": "Question",
            name: "How much does popcorn ceiling removal cost?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Popcorn ceiling removal cost varies based on square footage, ceiling height, whether texture is painted, fixture count, and repairs needed. Typical ranges: $800-$1,500 per bedroom, $2,500-$5,000 for living areas, $4,000-$8,500 for whole condos. Contact us for an accurate estimate.",
            },
          },
          {
            "@type": "Question",
            name: "How fast can I get a popcorn removal estimate?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Same-day photo estimates available by text or email. We provide on-site confirmation visits to finalize scope, pricing, and schedule for your popcorn ceiling removal project.",
            },
          },
          {
            "@type": "Question",
            name: "Do you handle stipple ceiling removal and stucco ceiling removal?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. We remove all types of ceiling textures including popcorn, stipple, stucco, knockdown, and cottage cheese ceilings. Our smooth ceiling contractors use the same dust-controlled process and Level 5 finishing for all texture types.",
            },
          },
        ],
      },
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
          {
            "@type": "ListItem",
            position: 3,
            name: "Popcorn Ceiling Removal",
            item: {
              "@id": "https://epfproservices.com/services/popcorn-ceiling-removal/",
            },
          },
        ],
      },
      ...videoObjects,
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
  const phoneHref = CONTACT?.phoneHref || "tel:+16479236784";
  const phoneText = CONTACT?.phone || "(647) 923-6784";

  // Gallery images
  const images = Array.from(
    { length: 6 },
    (_, i) => `/services/popcorn-ceiling-removal/${i + 1}.webp`
  );

  // Videos for gallery
  const videos = videoLibrary.map((video) => ({
    ...video,
    id: video.youtubeId,
    src: videoEmbedUrl(video),
    href: videoPagePath(video),
  }));

  return (
    <>
      <JsonLd />

      {/* FULL-WIDTH HERO with Split Layout */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        {/* Background Pattern */}
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
            {/* Left: Content */}
            <div className="text-white">
              <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 rounded-full px-4 py-2 mb-6">
                <span className="text-2xl">✓</span>
                <span className="text-sm font-semibold text-blue-300">
                  GTA's Trusted Popcorn Ceiling Contractor
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Professional Popcorn Ceiling Removal
              </h1>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Transform outdated textured ceilings into smooth, modern
                surfaces. Expert{" "}
                <strong className="text-white">ceiling texture removal</strong>,{" "}
                <strong className="text-white">stipple ceiling removal</strong>,
                and <strong className="text-white">Level 5 finishing</strong>{" "}
                with HEPA dust control across the GTA.
              </p>

              {/* Trust Badges */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-4 text-center">
                  <div className="text-3xl mb-2">🏆</div>
                  <div className="text-sm font-semibold">
                    Licensed & Insured
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-4 text-center">
                  <div className="text-3xl mb-2">⚡</div>
                  <div className="text-sm font-semibold">Level 5 Finish</div>
                </div>
                <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-4 text-center">
                  <div className="text-3xl mb-2">🎯</div>
                  <div className="text-sm font-semibold">HEPA Control</div>
                </div>
                <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-4 text-center">
                  <div className="text-3xl mb-2">📝</div>
                  <div className="text-sm font-semibold">3-Year Warranty</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={phoneHref}
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 transition shadow-lg hover:shadow-2xl hover:scale-105 transform"
                >
                  <span className="mr-2">📞</span>
                  {phoneText}
                </a>
                <a
                  href="#quote-form"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-full bg-white text-gray-900 hover:bg-gray-100 transition shadow-lg hover:shadow-2xl"
                >
                  Get Free Estimate
                </a>
              </div>
            </div>

            {/* Right: Hero Image */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20">
                <img
                  src={images[0]}
                  alt="Professional popcorn ceiling removal contractor - before and after"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <p className="text-white font-semibold text-lg">
                    Smooth, Modern Ceilings That Transform Your Space
                  </p>
                </div>
              </div>

              {/* Floating Stats */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 max-w-[200px]">
                <div className="text-4xl font-bold text-blue-600 mb-1">
                  1000+
                </div>
                <div className="text-sm text-gray-600 font-semibold">
                  Ceilings Transformed
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service Area Pills */}
        <div className="container mx-auto px-4 pb-12 relative z-10">
          <div className="max-w-7xl mx-auto">
            <p className="text-center text-gray-400 mb-4 text-sm font-semibold">
              SERVING THE GREATER TORONTO AREA
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {cities.slice(0, 10).map((c) => (
                <Link
                  key={c.slug}
                  href={`/popcorn-ceiling-removal/${c.slug}/`}
                  className="px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur border border-white/20 rounded-full text-white text-sm font-semibold transition hover:scale-105 transform"
                >
                  {c.name}
                </Link>
              ))}
              <Link
                href="/services/popcorn-ceiling-removal/"
                className="px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 backdrop-blur border border-blue-400/30 rounded-full text-blue-300 text-sm font-semibold transition"
              >
                View All Areas →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* QUOTE FORM SECTION */}
      <section
        id="quote-form"
        className="py-20 bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Get Your Free Estimate
              </h2>
              <p className="text-xl text-gray-600">
                Share your project details and receive a detailed popcorn
                ceiling removal quote within 24 hours
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
              <QuoteForm />

              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-2xl">
                      📞
                    </div>
                    <div>
                      <div className="text-sm text-gray-600 font-semibold">
                        Prefer to call?
                      </div>
                      <a
                        href={phoneHref}
                        className="text-xl font-bold text-blue-600 hover:underline"
                      >
                        {phoneText}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-2xl">
                      ⚡
                    </div>
                    <div>
                      <div className="text-sm text-gray-600 font-semibold">
                        Fast Response
                      </div>
                      <div className="text-lg font-bold text-gray-900">
                        Same-Day Quotes
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE OUR POPCORN CEILING REMOVAL SERVICE */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Choose Our Popcorn Ceiling Removal Contractors
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional ceiling texture removal service with proven
              dust-control methods and flawless Level 5 finishing
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border-2 border-blue-100 hover:shadow-xl transition">
              <div className="w-16 h-16 rounded-2xl bg-blue-500 flex items-center justify-center text-3xl mb-6">
                🏆
              </div>
              <h3 className="text-2xl font-bold mb-4">
                Professional Popcorn Ceiling Removal
              </h3>
              <p className="text-gray-600 mb-4">
                Licensed and insured{" "}
                <strong>popcorn ceiling removal contractors</strong> with 10+
                years experience in ceiling texture removal, stipple removal,
                and ceiling resurfacing.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>WSIB & liability coverage</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>3-year workmanship warranty</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Certified smooth ceiling contractors</span>
                </li>
              </ul>
            </div>

            {/* Card 2 */}
            <div className="bg-gradient-to-br from-cyan-50 to-white rounded-2xl p-8 border-2 border-cyan-100 hover:shadow-xl transition">
              <div className="w-16 h-16 rounded-2xl bg-cyan-500 flex items-center justify-center text-3xl mb-6">
                💨
              </div>
              <h3 className="text-2xl font-bold mb-4">
                HEPA Dust-Controlled Process
              </h3>
              <p className="text-gray-600 mb-4">
                Advanced dust control for{" "}
                <strong>scraping popcorn ceiling</strong> and{" "}
                <strong>stripping popcorn ceiling</strong> that protects your
                home and belongings.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Sealed room containment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>HEPA vacuum-assist sanding</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>HVAC & floor protection</span>
                </li>
              </ul>
            </div>

            {/* Card 3 */}
            <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl p-8 border-2 border-purple-100 hover:shadow-xl transition">
              <div className="w-16 h-16 rounded-2xl bg-purple-500 flex items-center justify-center text-3xl mb-6">
                ✨
              </div>
              <h3 className="text-2xl font-bold mb-4">Level 5 Smooth Finish</h3>
              <p className="text-gray-600 mb-4">
                Industry-leading <strong>Level 5 skim coat</strong> application
                for perfectly smooth, paint-ready ceilings that look flawless
                under any lighting.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Full-field skim coating</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Critical-light inspection</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Stain-block primer included</span>
                </li>
              </ul>
            </div>

            {/* Card 4 */}
            <div className="bg-gradient-to-br from-orange-50 to-white rounded-2xl p-8 border-2 border-orange-100 hover:shadow-xl transition">
              <div className="w-16 h-16 rounded-2xl bg-orange-500 flex items-center justify-center text-3xl mb-6">
                🎯
              </div>
              <h3 className="text-2xl font-bold mb-4">
                All Ceiling Texture Types
              </h3>
              <p className="text-gray-600 mb-4">
                Expert <strong>stipple ceiling removal</strong>,{" "}
                <strong>stucco ceiling removal</strong>, and{" "}
                <strong>cottage cheese ceiling removal</strong> for any texture
                style.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Painted popcorn ceilings</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Multi-layer textures</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Knockdown & stipple patterns</span>
                </li>
              </ul>
            </div>

            {/* Card 5 */}
            <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-8 border-2 border-green-100 hover:shadow-xl transition">
              <div className="w-16 h-16 rounded-2xl bg-green-500 flex items-center justify-center text-3xl mb-6">
                ⚡
              </div>
              <h3 className="text-2xl font-bold mb-4">
                Fast & Efficient Service
              </h3>
              <p className="text-gray-600 mb-4">
                Quick turnaround for{" "}
                <strong>taking down popcorn ceiling</strong> projects without
                compromising quality or cleanliness.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Same-day photo estimates</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Flexible scheduling</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Most projects 3-7 days</span>
                </li>
              </ul>
            </div>

            {/* Card 6 */}
            <div className="bg-gradient-to-br from-pink-50 to-white rounded-2xl p-8 border-2 border-pink-100 hover:shadow-xl transition">
              <div className="w-16 h-16 rounded-2xl bg-pink-500 flex items-center justify-center text-3xl mb-6">
                🏠
              </div>
              <h3 className="text-2xl font-bold mb-4">
                Complete Ceiling Solutions
              </h3>
              <p className="text-gray-600 mb-4">
                Full-service <strong>ceiling resurfacing</strong> including
                repairs, pot light coordination, and optional finish painting.
                For damaged drywall below a leak or fixture cut-out, see our{" "}
                <Link
                  href="/services/drywall-repair/mississauga/"
                  className="font-semibold text-blue-600 hover:underline"
                >
                  wall and ceiling repair in Mississauga
                </Link>
                .
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Drywall repairs & patching</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Pot light installation coordination</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Professional ceiling painting</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY + VIDEOS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Real Popcorn Ceiling Removal Projects
            </h2>
            <p className="text-xl text-gray-600">
              See our professional <strong>ceiling texture removal</strong> work
              across the GTA
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Video Cards */}
            {videos.map((v) => (
              <article
                key={v.id}
                className="bg-white rounded-2xl border-2 border-gray-200 overflow-hidden hover:shadow-xl hover:border-blue-300 transition group"
              >
                <div
                  className="relative w-full bg-black"
                  style={{ aspectRatio: "16 / 9" }}
                >
                  <iframe
                    src={v.src}
                    title={v.title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2 group-hover:text-blue-600 transition">
                    {v.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">{v.blurb}</p>
                  <Link
                    href={v.href}
                    className="inline-flex items-center text-sm font-semibold text-blue-600 hover:underline"
                  >
                    Watch Full Video →
                  </Link>
                </div>
              </article>
            ))}

            {/* Photo Cards */}
            {images.map((s, i) => (
              <figure
                key={i}
                className="relative bg-white rounded-2xl border-2 border-gray-200 overflow-hidden hover:shadow-xl hover:border-blue-300 transition group cursor-pointer"
              >
                <img
                  src={s}
                  alt={`Popcorn ceiling removal project ${
                    i + 1
                  } - before and after transformation`}
                  className="w-full h-64 object-cover group-hover:scale-105 transition duration-300"
                  loading="lazy"
                  data-lightbox="true"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-6">
                  <p className="text-white font-semibold">Click to enlarge</p>
                </div>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* OUR POPCORN CEILING REMOVAL PROCESS */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our Professional Popcorn Ceiling Removal Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proven 6-step method for <strong>removing stucco ceiling</strong>{" "}
              and <strong>taking off popcorn ceiling</strong> with minimal
              disruption
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Step 1 */}
            <div className="relative bg-white rounded-2xl p-8 border-2 border-blue-200 hover:shadow-lg transition">
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                1
              </div>
              <h3 className="text-xl font-bold mb-3 mt-2">
                Site Protection & Containment
              </h3>
              <p className="text-gray-600">
                Rooms sealed with plastic barriers, floors protected with drop
                sheets, HVAC vents masked, and traffic paths secured.
                Professional <strong>popcorn removal</strong> starts with
                protecting your home.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative bg-white rounded-2xl p-8 border-2 border-cyan-200 hover:shadow-lg transition">
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                2
              </div>
              <h3 className="text-xl font-bold mb-3 mt-2">
                Texture Assessment & Strategy
              </h3>
              <p className="text-gray-600">
                Inspect ceiling condition (painted vs unpainted, layers,
                adhesion). Choose safest method:{" "}
                <strong>scraping popcorn ceiling</strong>, encapsulation, or
                combination approach for optimal results.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative bg-white rounded-2xl p-8 border-2 border-purple-200 hover:shadow-lg transition">
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                3
              </div>
              <h3 className="text-xl font-bold mb-3 mt-2">
                Safe Texture Removal
              </h3>
              <p className="text-gray-600">
                <strong>Stripping popcorn ceiling</strong> texture using
                controlled scraping methods. For{" "}
                <strong>painted popcorn ceiling removal</strong>, we use
                specialized techniques to prevent ceiling damage.
              </p>
            </div>

            {/* Step 4 */}
            <div className="relative bg-white rounded-2xl p-8 border-2 border-green-200 hover:shadow-lg transition">
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                4
              </div>
              <h3 className="text-xl font-bold mb-3 mt-2">
                Level 5 Skim Coat Application
              </h3>
              <p className="text-gray-600">
                Full-field <strong>Level 5 skim coat</strong> applied for
                perfectly smooth ceiling. Multiple thin coats feathered to
                eliminate imperfections and create uniform surface ready for
                finishing.
              </p>
            </div>

            {/* Step 5 */}
            <div className="relative bg-white rounded-2xl p-8 border-2 border-orange-200 hover:shadow-lg transition">
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                5
              </div>
              <h3 className="text-xl font-bold mb-3 mt-2">
                HEPA Sanding & Inspection
              </h3>
              <p className="text-gray-600">
                HEPA-connected vacuum sanding for dust-free finishing.
                Critical-light inspection catches any imperfections before
                priming. Re-touch and perfect surface for flawless result.
              </p>
            </div>

            {/* Step 6 */}
            <div className="relative bg-white rounded-2xl p-8 border-2 border-pink-200 hover:shadow-lg transition">
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                6
              </div>
              <h3 className="text-xl font-bold mb-3 mt-2">
                Prime & Paint (Optional)
              </h3>
              <p className="text-gray-600">
                Stain-block primer seals surface and prevents bleed-through.
                Optional professional ceiling painting with 2 finish coats, or
                leave paint-ready for your own painter.
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-4">
            <div className="rounded-3xl border-2 border-violet-200 bg-violet-50 p-8">
              <div className="max-w-4xl">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-700">
                  Benefits Guide
                </p>
                <h3 className="mt-3 text-2xl md:text-3xl font-bold text-slate-900">
                  Benefits of removing popcorn ceilings and going smooth
                </h3>
                <p className="mt-3 text-slate-700 leading-relaxed">
                  If you are still deciding whether the update is worth it, this
                  guide explains the real benefits: brighter rooms, easier
                  cleaning, cleaner repairs, and a more modern look.
                </p>
                <div className="mt-5">
                  <Link
                    href="/blog/benefits-of-removing-popcorn-ceilings/"
                    className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 font-semibold text-white hover:bg-slate-800 transition"
                  >
                    Read: Benefits of Removing Popcorn Ceilings
                  </Link>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border-2 border-amber-200 bg-amber-50 p-8">
              <div className="max-w-4xl">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">
                  Painted Ceiling Guide
                </p>
                <h3 className="mt-3 text-2xl md:text-3xl font-bold text-slate-900">
                  Painted popcorn ceilings usually need a different finish plan
                </h3>
                <p className="mt-3 text-slate-700 leading-relaxed">
                  If your ceiling has paint on the texture, the real decision is
                  rarely just removal. It is whether controlled scraping is still
                  safe or whether a skim-coat resurfacing approach will deliver a
                  cleaner final result.
                </p>
                <div className="mt-5">
                  <Link
                    href="/blog/painted-popcorn-ceiling-removal-scrape-or-skim-coat/"
                    className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 font-semibold text-white hover:bg-slate-800 transition"
                  >
                    Read: Painted Popcorn Ceiling Removal - Scrape or Skim Coat?
                  </Link>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border-2 border-sky-200 bg-sky-50 p-8">
              <div className="max-w-4xl">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
                  Finish Level Guide
                </p>
                <h3 className="mt-3 text-2xl md:text-3xl font-bold text-slate-900">
                  Removal is only half the job. Finish level decides the result.
                </h3>
                <p className="mt-3 text-slate-700 leading-relaxed">
                  After popcorn removal, the big question becomes Level 4 or
                  Level 5. That choice affects whether seams, patches, and light
                  streaks stay visible once the ceiling is primed and painted.
                </p>
                <div className="mt-5">
                  <Link
                    href="/blog/level-4-vs-level-5-finish-after-popcorn-ceiling-removal/"
                    className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 font-semibold text-white hover:bg-slate-800 transition"
                  >
                    Read: Level 4 vs Level 5 Finish After Popcorn Ceiling Removal
                  </Link>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border-2 border-emerald-200 bg-emerald-50 p-8">
              <div className="max-w-4xl">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
                  Process Guide
                </p>
                <h3 className="mt-3 text-2xl md:text-3xl font-bold text-slate-900">
                  Taking popcorn off the ceiling is a full process, not one step.
                </h3>
                <p className="mt-3 text-slate-700 leading-relaxed">
                  Prep, testing, scrape-vs-skim decisions, repairs, sanding, and
                  primer all matter. This guide explains the actual order of work
                  behind a clean smooth-ceiling result.
                </p>
                <div className="mt-5">
                  <Link
                    href="/blog/taking-off-popcorn-ceiling-how-the-process-actually-works/"
                    className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 font-semibold text-white hover:bg-slate-800 transition"
                  >
                    Read: Taking Off Popcorn Ceiling
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* POPCORN CEILING REMOVAL COST SECTION */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Popcorn Ceiling Removal Cost
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transparent pricing for <strong>popcorn removal cost</strong>{" "}
              based on project scope. Get an accurate estimate for your ceiling
              project.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:shadow-lg transition">
              <div className="text-center mb-6">
                <div className="text-sm font-bold text-gray-600 uppercase tracking-wide mb-2">
                  Basic Room
                </div>
                <div className="text-5xl font-bold text-gray-900 mb-2">
                  $800<span className="text-2xl text-gray-600">+</span>
                </div>
                <div className="text-sm text-gray-600">
                  Per standard bedroom
                </div>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Unpainted popcorn removal</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Level 5 skim coat</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Stain-block primer</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Paint-ready finish</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl p-8 border-2 border-blue-400 shadow-xl transform scale-105">
              <div className="text-center mb-6">
                <div className="inline-block bg-white/20 backdrop-blur px-4 py-1 rounded-full text-white text-xs font-bold uppercase mb-4">
                  Most Popular
                </div>
                <div className="text-sm font-bold text-white/90 uppercase tracking-wide mb-2">
                  Full Service
                </div>
                <div className="text-5xl font-bold text-white mb-2">
                  $2,500<span className="text-2xl text-white/80">+</span>
                </div>
                <div className="text-sm text-white/90">
                  Living room / Main area
                </div>
              </div>
              <ul className="space-y-3 text-white">
                <li className="flex items-start gap-2">
                  <span className="font-bold">✓</span>
                  <span>Painted popcorn removal</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold">✓</span>
                  <span>Level 5 skim coat</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold">✓</span>
                  <span>Drywall repairs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold">✓</span>
                  <span>Prime + 2 coats paint</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:shadow-lg transition">
              <div className="text-center mb-6">
                <div className="text-sm font-bold text-gray-600 uppercase tracking-wide mb-2">
                  Whole Unit
                </div>
                <div className="text-5xl font-bold text-gray-900 mb-2">
                  $4,000<span className="text-2xl text-gray-600">+</span>
                </div>
                <div className="text-sm text-gray-600">3BR condo / house</div>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>All rooms & hallways</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Pot light coordination</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Complete ceiling package</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Multi-room discount</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Cost Factors */}
          <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-center">
              What Affects the Cost to Scrape Popcorn Ceiling?
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-3xl mx-auto mb-3">
                  📏
                </div>
                <h4 className="font-bold mb-2">Square Footage</h4>
                <p className="text-sm text-gray-600">
                  Larger areas reduce per-sq-ft cost
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-cyan-100 flex items-center justify-center text-3xl mx-auto mb-3">
                  🎨
                </div>
                <h4 className="font-bold mb-2">Painted Texture</h4>
                <p className="text-sm text-gray-600">
                  Painted popcorn requires more labor
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center text-3xl mx-auto mb-3">
                  📐
                </div>
                <h4 className="font-bold mb-2">Ceiling Height</h4>
                <p className="text-sm text-gray-600">
                  Vaulted ceilings need extra equipment
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center text-3xl mx-auto mb-3">
                  🔧
                </div>
                <h4 className="font-bold mb-2">Repairs Needed</h4>
                <p className="text-sm text-gray-600">
                  Water damage or cracks add time
                </p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-yellow-50 border-2 border-yellow-200 rounded-xl">
              <p className="text-center text-gray-700 font-semibold">
                <span className="text-yellow-700">📋 Important:</span> These are
                typical ranges only. Every ceiling is different—we recommend
                getting a detailed written estimate after photos and site review
                for exact <strong>popcorn ceiling removal cost</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED SERVICE AREAS - INTERNAL LINKING */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured Service Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional <strong>popcorn ceiling removal service</strong>{" "}
              across the Greater Toronto Area with local teams who understand
              your neighbourhood
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Mississauga - Featured */}
            <Link
              href="/popcorn-ceiling-removal/mississauga/"
              className="group bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border-2 border-blue-200 hover:border-blue-400 hover:shadow-xl transition-all transform hover:scale-105"
            >
              <div className="text-4xl mb-4">📍</div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-600 transition">
                Mississauga Ceiling Contractor
              </h3>
              <p className="text-gray-600 mb-4">
                <strong>Stipple ceiling removal</strong> and popcorn removal
                across Port Credit, Erin Mills, Streetsville, Lorne Park, and
                City Centre neighborhoods with professional Level 5 finishing
                and HEPA dust control.
              </p>
              <span className="text-blue-600 font-semibold group-hover:underline inline-flex items-center gap-2">
                View Mississauga Services →
              </span>
            </Link>

            {/* Burlington */}
            <Link
              href="/popcorn-ceiling-removal/burlington/"
              className="group bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all"
            >
              <div className="text-4xl mb-4">📍</div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-600 transition">
                Burlington Popcorn Ceiling Removal
              </h3>
              <p className="text-gray-600 mb-4">
                Licensed <strong>ceiling contractor</strong> serving Burlington,
                Aldershot, Tyandaga, and Millcroft. HEPA dust control, Level 5
                skim coat finish, and condo-ready logistics for waterfront
                properties.
              </p>
              <span className="text-blue-600 font-semibold group-hover:underline inline-flex items-center gap-2">
                View Burlington Ceiling Services →
              </span>
            </Link>

            {/* Oakville */}
            <Link
              href="/popcorn-ceiling-removal/oakville/"
              className="group bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all"
            >
              <div className="text-4xl mb-4">📍</div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-600 transition">
                Oakville Popcorn Removal
              </h3>
              <p className="text-gray-600 mb-4">
                Professional <strong>ceiling texture removal</strong> in Glen
                Abbey, Bronte, River Oaks, and Old Oakville with dust-controlled
                workflow.
              </p>
              <span className="text-blue-600 font-semibold group-hover:underline inline-flex items-center gap-2">
                View Oakville Services →
              </span>
            </Link>
          </div>

          {/* All Cities Grid */}
          <div className="bg-gray-50 rounded-2xl p-8 border-2 border-gray-200">
            <h3 className="text-2xl font-bold text-center mb-6">
              All GTA Service Areas
            </h3>
            <p className="text-center text-gray-600 mb-8">
              Expert <strong>popcorn ceiling contractors</strong> serving:
              Toronto (Annex, Leaside, The Beaches, High Park, North York,
              Etobicoke, Scarborough), Mississauga (Port Credit, Clarkson, Erin
              Mills), Oakville, Burlington, Milton, Hamilton, Stoney Creek,
              Ancaster, Grimsby, Vaughan, Richmond Hill, Markham, and
              surrounding areas.
            </p>
            <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
              Looking for local service? See our{" "}
              <Link
                href="/popcorn-ceiling-removal/hamilton/"
                className="text-blue-600 font-semibold hover:underline"
              >
                popcorn ceiling removal in Hamilton
              </Link>{" "}
              page for neighbourhood coverage, project context, and city-specific
              pricing notes across Ancaster, Dundas, and Stoney Creek.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {cities.map((c) => (
                <Link
                  key={c.slug}
                  href={`/popcorn-ceiling-removal/${c.slug}/`}
                  className="px-5 py-2 bg-white hover:bg-blue-50 border-2 border-gray-200 hover:border-blue-300 rounded-full text-gray-700 hover:text-blue-600 font-semibold transition transform hover:scale-105"
                >
                  {c.name}
                </Link>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link
                href="/services/popcorn-ceiling-removal/"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-bold rounded-full transition shadow-lg hover:shadow-xl"
              >
                Browse All Service Areas →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST & REVIEWS SECTION - Google E-E-A-T */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-yellow-100 border-2 border-yellow-300 rounded-full px-6 py-3 mb-6">
              <span className="text-3xl">⭐</span>
              <span className="text-2xl font-bold text-gray-900">4.9/5</span>
              <span className="text-gray-600 font-semibold">Google Rating</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Trusted Popcorn Ceiling Removal Contractors
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Licensed, insured, and rated 4.9/5 stars by homeowners across the
              GTA
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Trust Badge 1 */}
            <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 text-center hover:shadow-lg transition">
              <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center text-4xl mx-auto mb-4">
                🏆
              </div>
              <h3 className="text-xl font-bold mb-2">Licensed & Insured</h3>
              <p className="text-gray-600">
                WSIB compliant, $5M liability insurance, and all required
                municipal permits
              </p>
            </div>

            {/* Trust Badge 2 */}
            <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 text-center hover:shadow-lg transition">
              <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center text-4xl mx-auto mb-4">
                ✅
              </div>
              <h3 className="text-xl font-bold mb-2">BBB Accredited</h3>
              <p className="text-gray-600">
                Better Business Bureau accredited with A+ rating since 2015
              </p>
            </div>

            {/* Trust Badge 3 */}
            <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 text-center hover:shadow-lg transition">
              <div className="w-20 h-20 rounded-full bg-purple-100 flex items-center justify-center text-4xl mx-auto mb-4">
                📜
              </div>
              <h3 className="text-xl font-bold mb-2">3-Year Warranty</h3>
              <p className="text-gray-600">
                Written warranty on all workmanship—we stand behind every
                ceiling we touch
              </p>
            </div>
          </div>

          {/* Google Reviews Button */}
          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://maps.app.goo.gl/QkkUQQPZc6oSyvJy9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white border-2 border-gray-300 hover:border-blue-500 rounded-full font-bold text-gray-900 hover:text-blue-600 transition shadow-lg hover:shadow-xl"
              >
                <span className="text-2xl">⭐</span>
                <span>Read Our Google Reviews</span>
                <span>→</span>
              </a>

              <Link
                href="/about/"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white rounded-full font-bold transition shadow-lg hover:shadow-xl"
              >
                <span className="text-2xl">👥</span>
                <span>Meet Our Team</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Popcorn Ceiling Removal FAQ
            </h2>
            <p className="text-xl text-gray-600">
              Common questions about{" "}
              <strong>professional popcorn ceiling removal</strong>
            </p>
          </div>

          <div className="space-y-4">
            <details className="group bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-blue-300 transition cursor-pointer">
              <summary className="font-bold text-lg flex items-center justify-between cursor-pointer">
                <span>Is popcorn ceiling removal dust-controlled?</span>
                <span className="text-2xl group-open:rotate-180 transition-transform">
                  ⌄
                </span>
              </summary>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Yes. Our professional popcorn ceiling removal process includes
                complete room sealing with plastic barriers, floor and vent
                protection, HEPA vacuum-assist sanding, and thorough daily
                clean-up. We minimize dust throughout the entire{" "}
                <strong>ceiling texture removal</strong> process so your home
                stays livable.
              </p>
            </details>

            <details className="group bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-blue-300 transition cursor-pointer">
              <summary className="font-bold text-lg flex items-center justify-between cursor-pointer">
                <span>Do you deliver a Level 5 smooth finish?</span>
                <span className="text-2xl group-open:rotate-180 transition-transform">
                  ⌄
                </span>
              </summary>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Absolutely. Our <strong>smooth ceiling contractors</strong>{" "}
                apply full-field skim coating, feather all edges, and perform
                critical-light inspections before priming. Any imperfections are
                re-touched to achieve the industry-standard{" "}
                <strong>Level 5 skim coat</strong> finish that looks flawless
                under any lighting.
              </p>
            </details>

            <details className="group bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-blue-300 transition cursor-pointer">
              <summary className="font-bold text-lg flex items-center justify-between cursor-pointer">
                <span>
                  Can you remove painted or multiple-layer popcorn ceiling
                  texture?
                </span>
                <span className="text-2xl group-open:rotate-180 transition-transform">
                  ⌄
                </span>
              </summary>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Yes. For <strong>painted popcorn ceiling removal</strong> or
                multiple texture layers, we assess the condition and adhesion.
                We choose between safe scraping, encapsulation, or a combination
                approach. Then we apply a <strong>Level 5 skim coat</strong> for
                a uniform smooth surface ready for finishing.
              </p>
            </details>

            <details className="group bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-blue-300 transition cursor-pointer">
              <summary className="font-bold text-lg flex items-center justify-between cursor-pointer">
                <span>How much does popcorn ceiling removal cost?</span>
                <span className="text-2xl group-open:rotate-180 transition-transform">
                  ⌄
                </span>
              </summary>
              <p className="mt-4 text-gray-700 leading-relaxed">
                <strong>Popcorn ceiling removal cost</strong> varies based on
                square footage, ceiling height, whether texture is painted,
                fixture count, and repairs needed. Typical ranges: $800-$1,500
                per bedroom, $2,500-$5,000 for living areas, $4,000-$8,500 for
                whole condos. The{" "}
                <strong>cost to scrape popcorn ceiling</strong> depends on your
                specific project—contact us for an accurate estimate after
                reviewing photos and site conditions.
              </p>
            </details>

            <details className="group bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-blue-300 transition cursor-pointer">
              <summary className="font-bold text-lg flex items-center justify-between cursor-pointer">
                <span>How fast can I get a popcorn removal estimate?</span>
                <span className="text-2xl group-open:rotate-180 transition-transform">
                  ⌄
                </span>
              </summary>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Same-day photo estimates available by text or email. Our{" "}
                <strong>popcorn ceiling removal contractors</strong> provide
                quick rough estimates based on photos, then schedule on-site
                confirmation visits to finalize exact scope, pricing, and
                schedule for your ceiling project.
              </p>
            </details>

            <details className="group bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-blue-300 transition cursor-pointer">
              <summary className="font-bold text-lg flex items-center justify-between cursor-pointer">
                <span>
                  Do you handle stipple ceiling removal and stucco ceiling
                  removal?
                </span>
                <span className="text-2xl group-open:rotate-180 transition-transform">
                  ⌄
                </span>
              </summary>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Yes. We remove all types of ceiling textures including popcorn,{" "}
                <strong>stipple ceiling removal</strong>,{" "}
                <strong>stucco ceiling removal</strong>, knockdown patterns, and{" "}
                <strong>cottage cheese ceiling removal</strong>. Our
                professional contractors use the same dust-controlled process
                and Level 5 finishing for all texture types to deliver smooth,
                modern ceilings.
              </p>
            </details>

            <details className="group bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-blue-300 transition cursor-pointer">
              <summary className="font-bold text-lg flex items-center justify-between cursor-pointer">
                <span>
                  What's included in the popcorn ceiling removal service?
                </span>
                <span className="text-2xl group-open:rotate-180 transition-transform">
                  ⌄
                </span>
              </summary>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Our <strong>professional popcorn ceiling removal</strong>{" "}
                includes: site protection & containment, safe texture removal (
                <strong>scraping popcorn ceiling</strong> or{" "}
                <strong>stripping popcorn ceiling</strong>), drywall repairs,
                full-field Level 5 skim coating, HEPA sanding, stain-block
                primer, and paint-ready finish. Optional services include pot
                light coordination and professional ceiling painting with 2
                finish coats. Mississauga ceiling projects with broader cracks,
                leaks, or patching can also start with our{" "}
                <Link
                  href="/services/drywall-repair/mississauga/"
                  className="font-semibold text-blue-600 hover:underline"
                >
                  drywall patch and ceiling repair in Mississauga
                </Link>{" "}
                service.
              </p>
            </details>

            <details className="group bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-blue-300 transition cursor-pointer">
              <summary className="font-bold text-lg flex items-center justify-between cursor-pointer">
                <span>How long does it take to remove popcorn ceiling?</span>
                <span className="text-2xl group-open:rotate-180 transition-transform">
                  ⌄
                </span>
              </summary>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Most <strong>taking down popcorn ceiling</strong> projects take
                3-7 days depending on size and scope. A single bedroom might be
                2-3 days, while a whole 3-bedroom condo typically takes 5-7 days
                including drying time. We provide clear timelines during the
                estimate and respect your schedule.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* CONVERSION CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-cyan-600 to-blue-700 relative overflow-hidden">
        {/* Background Pattern */}
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

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready for Smooth, Modern Ceilings?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Get your free estimate from licensed{" "}
              <strong>popcorn ceiling removal contractors</strong>. Fast quotes,
              clear scope, and guaranteed results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href={phoneHref}
                className="inline-flex items-center justify-center px-10 py-5 text-xl font-bold rounded-full bg-white text-blue-600 hover:bg-gray-100 transition shadow-2xl hover:shadow-3xl hover:scale-105 transform"
              >
                <span className="mr-2">📞</span>Call {phoneText}
              </a>
              <a
                href="#quote-form"
                className="inline-flex items-center justify-center px-10 py-5 text-xl font-bold rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 transition shadow-2xl hover:shadow-3xl border-2 border-white/30"
              >
                Get Free Estimate
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-8 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span className="text-blue-100">Same-Day Quotes</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span className="text-blue-100">Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span className="text-blue-100">3-Year Warranty</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span className="text-blue-100">HEPA Dust Control</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LONG-FORM LOCAL SEO COPY */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <ServiceCopy service="Popcorn Ceiling Removal" />
        </div>
      </section>

      {/* STICKY MOBILE CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 backdrop-blur border-t-2 border-white/20 shadow-2xl p-4">
          <div className="flex items-center justify-between gap-3 max-w-lg mx-auto">
            <a
              href={phoneHref}
              className="flex-1 text-center px-6 py-3 bg-white text-blue-600 font-bold rounded-full hover:bg-gray-100 transition shadow-lg"
            >
              📞 Call Now
            </a>
            <a
              href="#quote-form"
              className="flex-1 text-center px-6 py-3 bg-white/20 backdrop-blur text-white font-bold rounded-full hover:bg-white/30 transition border-2 border-white/30"
            >
              Get Quote
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
