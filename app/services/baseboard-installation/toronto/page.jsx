import Link from "next/link";
import QuoteForm from "@/components/QuoteForm";
import LocalSignals from "@/components/LocalSignals";
import { PHONE_HREF, PHONE_NUMBER } from "@/app/config";
import { cities } from "@/data/cities";
import { absoluteServiceUrl, buildBaseboardCityGraph } from "../schema";

export const revalidate = 86400;

const CITY_NAME = "Toronto";
const CITY_SLUG = "toronto";
const SERVICE_URL = `/services/baseboard-installation/${CITY_SLUG}/`;
const ABSOLUTE_SERVICE_URL = absoluteServiceUrl(SERVICE_URL);
const HERO_IMAGE =
  "/gallery/baseboard-installation/baseboard-installation00002.jpg";

const cityData = cities.find((entry) => entry.slug === CITY_SLUG);
const signals = cityData && cityData.signals ? cityData.signals : null;

export const metadata = {
  title: `Baseboard Installation Toronto | Professional Baseboard Contractors`,
  description:
    "Professional baseboard installation in Toronto. Expert baseboard installation, baseboard replacement, shoe moulding. Licensed contractor serving all Toronto neighborhoods. Free quotes, 3-year warranty.",
  keywords: [
    "baseboard installation toronto",
    "baseboard replacement toronto",
    "baseboard contractors toronto",
    "shoe moulding installation toronto",
    "baseboards near me toronto",
  ],
  alternates: { canonical: ABSOLUTE_SERVICE_URL },
  openGraph: {
    title: `Baseboard Installation Toronto | Professional Baseboard Contractors`,
    description:
      "Professional baseboard installation in Toronto. Expert baseboard installation, baseboard replacement, shoe moulding. Licensed contractor.",
    url: ABSOLUTE_SERVICE_URL,
    type: "website",
    images: [{ url: absoluteServiceUrl(HERO_IMAGE) }],
  },
  robots: { index: true, follow: true },
};

function JsonLd() {
  const data = buildBaseboardCityGraph({
    cityName: CITY_NAME,
    serviceUrl: ABSOLUTE_SERVICE_URL,
    description:
      "Professional baseboard installation in Toronto for trim replacement, shoe moulding, caulking, and paint-ready finishing in houses, condos, and renovation projects.",
    faqs: [
      {
        q: `How much does baseboard installation cost in ${CITY_NAME}?`,
        a: `Pricing in ${CITY_NAME} depends on linear footage, profile height, material choice, and whether old trim removal and painting are included.`,
      },
      {
        q: `Do you install baseboards after flooring or drywall work in ${CITY_NAME}?`,
        a: `Yes. We regularly schedule baseboard installation after flooring, drywall repair, or repainting so the final trim package fits the finished room cleanly.`,
      },
      {
        q: `Do you handle caulking and nail-hole filling too?`,
        a: `Yes. Our baseboard scopes include fitment, fastening, filling, caulking, sanding, and a paint-ready handoff.`,
      },
      {
        q: `Do you work in occupied homes and condos in ${CITY_NAME}?`,
        a: `Yes. We protect finished floors, contain dust, and sequence work carefully so occupied spaces stay usable.`,
      },
    ],
  });

  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function Page() {
  return (
    <div className="bg-gray-50">
      <JsonLd />

      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-hidden min-h-[60vh] flex items-center">
        <div className="relative container mx-auto px-4 py-16">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="max-w-4xl">
              <div className="inline-block mb-4 px-4 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full border border-blue-400/30">
                <span className="text-sm font-semibold text-blue-300">
                  🏆 Toronto's Trusted Baseboard Contractor
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Baseboard Installation in Toronto
              </h1>

              <p className="text-xl text-gray-200 mb-6 leading-relaxed">
                Professional baseboard installation in Toronto. From condos to
                heritage homes, we deliver precise baseboard installation for all
                property types throughout Toronto and the GTA.
              </p>

              <div className="flex gap-4">
                <a
                  href={PHONE_HREF}
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 rounded-full font-bold text-lg shadow-xl transition-all hover:scale-105"
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
            </div>

            <figure
              className="overflow-hidden border-2 border-slate-300 bg-white shadow-[0_8px_30px_rgba(0,0,0,.06)]"
              style={{ height: "320px" }}
            >
              <img
                src={HERO_IMAGE}
                alt={`Baseboard installation in ${CITY_NAME}`}
                className="h-full w-full object-cover transition duration-200 ease-out hover:brightness-110 hover:contrast-110"
                loading="eager"
                decoding="async"
              />
            </figure>
          </div>
        </div>
      </section>

      {/* QUOTE FORM */}
      <section id="quote-form" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
            <h2 className="text-3xl font-bold mb-6 text-center">
              Get Your Free Quote
            </h2>
            <QuoteForm />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
              Baseboard Installation Services in Toronto
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl border-2 border-gray-100">
                <h3 className="text-2xl font-bold mb-4">
                  Condo Baseboard Installation
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Specialized baseboard installation for Toronto condos with
                  building access coordination and minimal disruption to
                  neighbors.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl border-2 border-gray-100">
                <h3 className="text-2xl font-bold mb-4">
                  Heritage Home Baseboards
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Custom baseboard installation for Toronto's historic homes,
                  matching period profiles and maintaining architectural
                  character.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl border-2 border-gray-100">
                <h3 className="text-2xl font-bold mb-4">
                  Modern Baseboard Styles
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Contemporary tall baseboards (6-8 inches) for Toronto's new
                  builds and renovated properties.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl border-2 border-gray-100">
                <h3 className="text-2xl font-bold mb-4">Complete Finishing</h3>
                <p className="text-gray-700 leading-relaxed">
                  Professional caulking, painting, and staining services for a
                  flawless finished look throughout Toronto.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LOCAL SIGNALS */}
      {signals && <LocalSignals signals={signals} />}

      {/* BACK TO HUB */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 text-center">
          <Link
            href="/services/baseboard-installation/"
            className="inline-flex items-center text-blue-600 font-semibold hover:underline"
          >
            ← Back to All Service Areas
          </Link>
        </div>
      </section>
    </div>
  );
}
