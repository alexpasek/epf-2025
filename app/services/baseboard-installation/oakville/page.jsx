import Link from "next/link";
import QuoteForm from "@/components/QuoteForm";
import LocalSignals from "@/components/LocalSignals";
import { PHONE_HREF, PHONE_NUMBER } from "@/app/config";
import { cities } from "@/data/cities";

export const revalidate = 86400;

const CITY_NAME = "Oakville";
const CITY_SLUG = "oakville";
const SERVICE_URL = `/services/baseboard-installation/${CITY_SLUG}/`;
const HERO_IMAGE =
  "/gallery/baseboard-installation/baseboard-installation00001.jpg";

const cityData = cities.find((entry) => entry.slug === CITY_SLUG);
const signals = cityData && cityData.signals ? cityData.signals : null;

export const metadata = {
  title: `Baseboard Installation Oakville | Professional Baseboard Contractors`,
  description:
    "Professional baseboard installation in Oakville. Expert baseboard installation, baseboard replacement, shoe moulding. Licensed contractor. Free quotes, 3-year warranty.",
  keywords: [
    "baseboard installation oakville",
    "baseboard replacement oakville",
    "baseboard contractors oakville",
    "shoe moulding installation",
    "baseboards near me",
  ],
  alternates: { canonical: SERVICE_URL },
  openGraph: {
    title: `Baseboard Installation Oakville | Professional Baseboard Contractors`,
    description:
      "Professional baseboard installation in Oakville. Expert baseboard installation, baseboard replacement, shoe moulding.",
    url: SERVICE_URL,
    type: "website",
  },
  robots: { index: true, follow: true },
};

function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Baseboard Installation in ${CITY_NAME}`,
    serviceType: [
      "Baseboard Installation",
      "Baseboard Replacement",
      "Shoe Moulding",
      "Caulking and Finishing",
    ],
    areaServed: { "@type": "City", name: `${CITY_NAME}, ON` },
    url: SERVICE_URL,
    provider: { "@id": "/#business" },
    offers: {
      "@type": "Offer",
      priceCurrency: "CAD",
      availability: "https://schema.org/InStock",
      url: SERVICE_URL,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function Page() {
  return (
    <div className="bg-gray-50">
      <JsonLd />

      {/* HERO - Copy Burlington/Mississauga structure */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="h-full w-full bg-cover bg-center"
            style={{
              backgroundImage: "url(/services/baseboard-installation.jpg)",
            }}
          />
        </div>

        <div className="relative container mx-auto px-4 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-4 px-4 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full border border-blue-400/30">
                <span className="text-sm font-semibold text-blue-300">
                  🏆 Oakville's #1 Baseboard Contractor
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Professional Baseboard Installation in Oakville
              </h1>

              <p className="text-xl text-gray-200 mb-6 leading-relaxed">
                Looking for expert baseboard installation in Oakville? Our
                professional contractors specialize in baseboard installation,
                baseboard replacement, and shoe moulding for Oakville's upscale
                homes—from Bronte to Glen Abbey, Kerr Village to Old Oakville,
                and premium lakefront estates.
              </p>
              <p className="text-lg text-gray-200 mb-6 leading-relaxed">
                With over 700 completed baseboard projects across Oakville, we
                deliver precise craftsmanship including coped corners, tight
                miter joints, seamless caulking, and premium paint-ready
                finishing that transforms your executive home.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
                  <span className="text-2xl">✓</span>
                  <span>Licensed & Insured</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
                  <span className="text-2xl">✓</span>
                  <span>3-Year Warranty</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
                  <span className="text-2xl">✓</span>
                  <span>Same-Day Quotes</span>
                </div>
              </div>

              <div className="flex gap-4">
                <a
                  href={PHONE_HREF}
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-105"
                >
                  <span className="mr-2">📞</span>
                  {PHONE_NUMBER}
                </a>
                <a
                  href="#quote-form"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full font-bold text-lg border-2 border-white/30 transition-all hover:scale-105"
                >
                  Free Quote
                </a>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-300">700+</div>
                  <div className="text-sm text-gray-300">Oakville Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-300">15+</div>
                  <div className="text-sm text-gray-300">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-300">5.0★</div>
                  <div className="text-sm text-gray-300">Average Rating</div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <figure
                className="overflow-hidden border-2 border-slate-300 bg-white shadow-[0_8px_30px_rgba(0,0,0,.06)]"
                style={{ height: "320px" }}
              >
                <img
                  src={HERO_IMAGE}
                  alt={`Finished baseboard installation in ${CITY_NAME}`}
                  className="h-full w-full object-cover transition duration-200 ease-out hover:brightness-110 hover:contrast-110"
                  loading="eager"
                  decoding="async"
                />
              </figure>

              <div
                className="bg-white rounded-3xl shadow-2xl p-8 text-gray-900"
                id="quote-form"
              >
                <h2 className="text-3xl font-bold mb-2 text-gray-900">
                  Get Your Free Quote
                </h2>
                <p className="text-gray-600 mb-6">
                  Professional baseboard installation in Oakville — Fast response,
                  transparent pricing
                </p>
                <QuoteForm />
                <div className="mt-6 pt-6 border-t border-gray-200 text-center">
                  <p className="text-sm text-gray-600 mb-2">
                    Serving all Oakville neighborhoods:
                  </p>
                  <p className="text-xs text-gray-500">
                    Bronte • Glen Abbey • Kerr Village • Old Oakville • Uptown
                    Core
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Continue with other sections using same pattern as Burlington... */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 text-center">
          <Link
            href="/services/baseboard-installation/"
            className="inline-flex items-center text-blue-600 font-semibold hover:underline text-lg"
          >
            ← Back to Baseboard Installation Hub
          </Link>
        </div>
      </section>
    </div>
  );
}
