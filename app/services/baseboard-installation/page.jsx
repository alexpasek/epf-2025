import Link from "next/link";
import QuoteForm from "@/components/QuoteForm";
import LocalSignals from "@/components/LocalSignals";
import { PHONE_HREF, PHONE_NUMBER } from "@/app/config";
import { BASEBOARD_SERVICE_AREAS } from "./service-areas";

export const revalidate = 86400;

const SERVICE_URL = "/services/baseboard-installation/";
const HERO_IMG = "/services/baseboard-installation.jpg";
const HERO_IMAGE =
  "/gallery/baseboard-installation/baseboard-installation00003.jpg";

export const metadata = {
  title: "Baseboard Installation GTA | Professional Baseboard Contractors",
  description:
    "Professional baseboard installation across the Greater Toronto Area. Expert baseboard installation, baseboard replacement, shoe moulding. Licensed contractor. Free quotes, 3-year warranty.",
  keywords: [
    "baseboard installation GTA",
    "baseboard installation Toronto",
    "baseboard installation Mississauga",
    "baseboard replacement",
    "baseboard contractors",
    "shoe moulding installation",
    "baseboards near me",
  ],
  alternates: { canonical: SERVICE_URL },
  openGraph: {
    title: "Baseboard Installation GTA | Professional Baseboard Contractors",
    description:
      "Professional baseboard installation across the Greater Toronto Area. Expert baseboard installation, baseboard replacement, shoe moulding. Licensed contractor.",
    url: SERVICE_URL,
    type: "website",
    images: HERO_IMG ? [{ url: HERO_IMG }] : [],
  },
  robots: { index: true, follow: true },
};

const LOCAL_SIGNALS = {
  paintStores: [
    {
      name: "Sherwin-Williams Paint Store – Mississauga Dixie",
      address: "1315 Dundas St E Unit 3, Mississauga",
      url: "https://www.sherwin-williams.ca/",
    },
    {
      name: "Benjamin Moore – Oakville Colour Gallery",
      address: "326 Kerr St, Oakville",
      url: "https://www.benjaminmoore.com/",
    },
  ],
  bigBox: [
    {
      name: "Home Depot – Burlington North",
      address: "3050 Davidson Ct, Burlington",
      url: "https://www.homedepot.ca/",
    },
  ],
  authorities: {
    permitsURL:
      "https://www.mississauga.ca/services-and-programs/building-and-renovating/permits-and-approvals/",
    hazardousWasteURL:
      "https://www.halton.ca/For-Residents/Recycling-and-Waste/Household-Hazardous-Waste",
    dropOffDepotsURL:
      "https://www.toronto.ca/services-payments/recycling-organics-garbage/hazardous-waste/depots/",
  },
};

const PROCESS = [
  {
    title: "Room Assessment & Measurement",
    desc: "Precise measurements and profile selection. We account for wall irregularities, corner angles, and transition points.",
  },
  {
    title: "Remove Existing Trim",
    desc: "Careful removal of old baseboards, shoe moulding, and quarter round without damaging drywall.",
  },
  {
    title: "Wall Preparation",
    desc: "Level check, fill gaps, and prep surfaces for perfect baseboard adhesion and alignment.",
  },
  {
    title: "Precision Installation",
    desc: "Coped inside corners, mitered outside corners, and scarf joints for seamless long runs. Professional nail placement.",
  },
  {
    title: "Finishing & Caulking",
    desc: "Fill nail holes, caulk top edge and shoe mould, sand smooth for paint-ready finish.",
  },
  {
    title: "Paint & Final Inspection",
    desc: "Optional primer and finish coat. Final quality check ensuring tight seams and clean lines.",
  },
];

const FAQS = [
  {
    q: "How much does baseboard installation cost in the GTA?",
    a: "Cost depends on linear footage, profile type (MDF vs hardwood), ceiling height, and complexity. Most GTA homes range $8-15 per linear foot installed. Share room dimensions for an accurate quote.",
  },
  {
    q: "Can you install baseboards after popcorn ceiling removal?",
    a: "Yes. Once ceilings are Level 5 smooth and primed we install new trim while protection is still in place, so there's no dust on fresh baseboards.",
  },
  {
    q: "What types of baseboards do you install?",
    a: "We install MDF (primed or raw), solid wood (oak, maple, poplar), PVC for moisture areas, and modern square profiles. We help you choose based on style and budget.",
  },
  {
    q: "Do you remove old baseboards?",
    a: "Yes. We carefully remove existing baseboards and shoe moulding, patch wall imperfections, and haul away debris.",
  },
  {
    q: "How long does baseboard installation take?",
    a: "A typical 2000 sq ft home takes 2-3 days depending on profile complexity and whether painting is included.",
  },
  {
    q: "Do you caulk and paint baseboards?",
    a: "Yes. We caulk all seams for a professional finish and can prime/paint to match your walls or leave paint-ready.",
  },
  {
    q: "What is the difference between shoe moulding and quarter round?",
    a: "Shoe moulding is flatter and follows the baseboard profile, while quarter round is a perfect 90-degree arc. We recommend based on your flooring type and baseboard style.",
  },
  {
    q: "Can you match existing baseboards in other rooms?",
    a: "Yes. We can source matching profiles or mill custom pieces to blend with existing trim in other rooms for a consistent look throughout your home.",
  },
];

function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Baseboard Installation & Trim Finishing",
    serviceType: "Baseboard installation",
    url: SERVICE_URL,
    provider: { "@id": "/#business" },
    description:
      "Baseboard installation, shoe moulding, caulk and paint-ready trim after popcorn ceiling removal across the Greater Toronto Area.",
    areaServed: BASEBOARD_SERVICE_AREAS.map((area) => area.name),
    offers: {
      "@type": "Offer",
      priceCurrency: "CAD",
      availabilityStarts: new Date().toISOString(),
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

export default function BaseboardInstallationPage() {
  return (
    <div className="bg-gray-50">
      <JsonLd />

      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          {HERO_IMG && (
            <div
              className="h-full w-full bg-cover bg-center"
              style={{ backgroundImage: `url(${HERO_IMG})` }}
            />
          )}
        </div>

        <div className="relative container mx-auto px-4 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-block mb-4 px-4 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full border border-blue-400/30">
                <span className="text-sm font-semibold text-blue-300">
                  GTA's Trusted Baseboard Contractor
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Professional Baseboard Installation in the GTA
              </h1>

              <p className="text-xl text-gray-200 mb-6 leading-relaxed">
                Looking for expert baseboard installation in the GTA? Our
                professional contractors specialize in baseboard installation,
                baseboard replacement, and shoe moulding for homes throughout
                the GTA.
              </p>
              <p className="text-lg text-gray-200 mb-6 leading-relaxed">
                From precise measurements and coped corners to caulking and
                painting, we deliver flawless baseboard installation that
                transforms your space. Serving Toronto, Mississauga, Oakville,
                Burlington, Hamilton, Milton, Etobicoke, North York, Grimsby,
                and St. Catharines.
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
                  <div className="text-3xl font-bold text-cyan-300">850+</div>
                  <div className="text-sm text-gray-300">
                    Projects Completed
                  </div>
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

            {/* Right Form */}
            <div className="space-y-6">
              <figure
                className="overflow-hidden border-2 border-slate-300 bg-white shadow-[0_8px_30px_rgba(0,0,0,.06)]"
                style={{ height: "320px" }}
              >
                <img
                  src={HERO_IMAGE}
                  alt="Baseboard installation in the GTA"
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
                  Professional baseboard installation — Fast response, transparent
                  pricing
                </p>

                <QuoteForm />

                <div className="mt-6 pt-6 border-t border-gray-200 text-center">
                  <p className="text-sm text-gray-600 mb-2">Serving the GTA:</p>
                  <p className="text-xs text-gray-500">
                    Toronto • Mississauga • Oakville • Burlington • Hamilton •
                    Milton • Etobicoke • North York • Grimsby • St. Catharines
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Professional Baseboard Installation Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Expert baseboard installation across the GTA
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: "🏗️",
                  title: "New Baseboard Installation",
                  desc: "Professional installation of brand new baseboards in MDF, hardwood, or PVC with perfect coped inside corners and tight miter joints.",
                  features: [
                    "MDF, hardwood & PVC",
                    "All profile styles",
                    "Coped corners",
                  ],
                  color: "blue",
                },
                {
                  icon: "�",
                  title: "Baseboard Replacement",
                  desc: "Complete removal of old, damaged baseboards and installation of new trim with proper wall preparation and finishing.",
                  features: [
                    "Old trim removal",
                    "Wall prep & repair",
                    "Debris disposal",
                  ],
                  color: "green",
                },
                {
                  icon: "👞",
                  title: "Shoe Moulding & Quarter Round",
                  desc: "Add shoe moulding or quarter round to complement your baseboards and cover expansion gaps at flooring transitions.",
                  features: [
                    "Shoe moulding",
                    "Quarter round",
                    "Floor transitions",
                  ],
                  color: "purple",
                },
                {
                  icon: "📏",
                  title: "Tall Baseboard Installation",
                  desc: "Modern tall baseboards (6-8 inches) installation for contemporary homes with high ceilings and open floor plans.",
                  features: [
                    "6-8 inch profiles",
                    "Modern styles",
                    "High ceiling rooms",
                  ],
                  color: "orange",
                },
                {
                  icon: "�️",
                  title: "Caulking & Finishing",
                  desc: "Professional caulking of all seams, nail hole filling, and sanding for a seamless paint-ready finish.",
                  features: [
                    "Seamless caulking",
                    "Nail hole filling",
                    "Paint-ready",
                  ],
                  color: "cyan",
                },
                {
                  icon: "🎨",
                  title: "Painting & Staining",
                  desc: "Complete priming and painting service or staining for wood baseboards to match your interior design.",
                  features: [
                    "Primer & paint",
                    "Wood staining",
                    "Color matching",
                  ],
                  color: "amber",
                },
              ].map((service) => (
                <div
                  key={service.title}
                  className={`group p-8 rounded-2xl bg-gradient-to-br from-${service.color}-50 via-white to-${service.color}-50 border-2 border-${service.color}-100 hover:border-${service.color}-300 hover:shadow-2xl transition-all duration-300`}
                >
                  <div
                    className={`w-16 h-16 bg-gradient-to-br from-${service.color}-500 to-${service.color}-600 rounded-2xl flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform`}
                  >
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {service.desc}
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <span className={`text-${service.color}-500`}>✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
              Why Choose Us for Baseboard Installation in the GTA
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Baseboard installation requires precision, experience, and
              attention to detail. Poorly installed baseboards show gaps, uneven
              corners, and visible nail holes that detract from your home's
              appearance. Our experienced contractors deliver professional
              results using proper techniques for coping, mitering, and
              finishing.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              GTA homeowners choose us because we focus on craftsmanship and
              customer satisfaction — whether it's a single room baseboard
              replacement or a whole-house baseboard installation project.
            </p>
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
              Our Baseboard Installation Process
            </h2>
            <p className="text-center text-lg text-gray-600 mb-16 max-w-3xl mx-auto">
              Professional workflow delivering perfect baseboards every time
            </p>

            <div className="space-y-8">
              {PROCESS.map((step, idx) => (
                <div
                  key={idx}
                  className="flex gap-6 items-start bg-white p-6 rounded-2xl shadow-lg border-2 border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    {idx + 1}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-gray-900">
                      {step.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section id="service-areas" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Baseboard Installation Service Areas
            </h2>
            <p className="text-lg text-gray-600">
              Choose your city for local baseboard installation details.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {BASEBOARD_SERVICE_AREAS.map((area) => (
              <Link
                key={area.slug}
                href={`${SERVICE_URL}${area.slug}/`}
                className="group p-6 bg-white rounded-2xl border-2 border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all"
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-bold group-hover:text-blue-600 transition-colors">
                    {area.name}
                  </h3>
                  <span className="text-2xl group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>
                <p className="text-sm text-gray-600">
                  Baseboard installation, replacement, shoe moulding, and clean
                  finishing for {area.name} homes.
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* LOCAL SIGNALS */}
      <LocalSignals signals={LOCAL_SIGNALS} />

      {/* FAQ SECTION */}
      <section id="faqs" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Baseboard Installation FAQ
          </h2>

          <div className="space-y-4">
            {FAQS.map((faq) => (
              <details
                key={faq.q}
                className="rounded-2xl border border-slate-200 p-5 shadow-sm bg-white hover:border-blue-200 transition-colors"
              >
                <summary className="cursor-pointer text-lg font-semibold">
                  {faq.q}
                </summary>
                <p className="mt-2 text-sm text-slate-600">{faq.a}</p>
              </details>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="#quote-form"
              className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-all shadow-2xl hover:scale-105"
            >
              Get a Free Quote
            </a>
            <div className="mt-4">
              <a
                className="font-bold text-blue-700 hover:underline"
                href={PHONE_HREF}
              >
                Or call {PHONE_NUMBER}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE AREAS - Link to City Pages */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
              Baseboard Installation Service Areas
            </h2>
            <p className="text-center text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
              Professional baseboard installation throughout the Greater Toronto
              Area
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {BASEBOARD_SERVICE_AREAS.map((area) => (
                <Link
                  key={area.slug}
                  href={`${SERVICE_URL}${area.slug}/`}
                  className="group p-6 bg-white rounded-2xl border-2 border-gray-200 hover:border-blue-400 hover:shadow-xl transition-all text-center"
                >
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                    {area.name}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Baseboard installation in {area.name}
                  </p>
                </Link>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-4">
                Need baseboard installation outside these areas?
              </p>
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-bold text-lg rounded-full hover:bg-blue-700 transition-all shadow-2xl hover:scale-105"
              >
                <span className="mr-2">📞</span>Call {PHONE_NUMBER}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* BLOG RESOURCES */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
              Baseboard Installation Resources
            </h2>
            <p className="text-center text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
              Expert guides to help you plan your baseboard installation project
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <Link
                href="/blog/baseboard-installation-guide-mississauga-gta/"
                className="group bg-white p-6 rounded-2xl border-2 border-gray-200 hover:border-blue-400 hover:shadow-xl transition-all"
              >
                <div className="text-4xl mb-4">📐</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
                  Complete Installation Guide
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Learn about materials, costs, and the professional
                  installation process
                </p>
              </Link>

              <Link
                href="/blog/baseboard-installation-after-popcorn-ceiling-removal/"
                className="group bg-white p-6 rounded-2xl border-2 border-gray-200 hover:border-blue-400 hover:shadow-xl transition-all"
              >
                <div className="text-4xl mb-4">🏠</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
                  After Ceiling Removal
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Why baseboard installation pairs perfectly with ceiling
                  smoothing projects
                </p>
              </Link>

              <Link
                href="/blog/choosing-right-baseboards-mdf-hardwood-pvc/"
                className="group bg-white p-6 rounded-2xl border-2 border-gray-200 hover:border-blue-400 hover:shadow-xl transition-all"
              >
                <div className="text-4xl mb-4">🪵</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
                  Choosing Materials
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Compare MDF, hardwood, and PVC baseboards for your home
                </p>
              </Link>
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/blog/"
                className="inline-flex items-center justify-center px-8 py-4 bg-white border-2 border-blue-600 text-blue-600 font-bold text-lg rounded-full hover:bg-blue-50 transition-all"
              >
                View All Resources →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-cyan-900 to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready for Professional Baseboard Installation in the GTA?
            </h2>
            <p className="text-2xl mb-8 text-blue-100">
              Your trusted baseboard contractor for flawless baseboard
              installation
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-10">
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center px-10 py-5 bg-white text-blue-900 hover:bg-gray-100 font-bold text-lg rounded-full shadow-2xl hover:scale-105 transition-all"
              >
                <span className="mr-2">📞</span>
                {PHONE_NUMBER}
              </a>
              <a
                href="/quote/"
                className="inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 font-bold text-lg rounded-full shadow-2xl hover:scale-105 transition-all"
              >
                Get Free Quote
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-8 text-sm text-blue-200">
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span>Same-Day Quotes</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span>3-Year Warranty</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
