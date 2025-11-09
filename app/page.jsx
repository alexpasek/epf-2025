import Link from "next/link";
import { cities } from "@/data/cities";
import { PHONE_HREF, PHONE_NUMBER } from "./config";
import QuoteForm from "@/components/QuoteForm"; 
import ReviewScroller from "@/components/ReviewScroller";
export const revalidate = 86400;

export const metadata = {
  title: "Wallpaper Removal • Popcorn Ceiling • Drywall • Painting — GTA",
  description:
    "Dust-controlled wallpaper removal, popcorn ceiling smoothing to Level 5, drywall finishing, and interior painting across the GTA. Fast estimates, clear scope, and a written warranty.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Wallpaper • Popcorn Ceiling • Drywall • Painting — GTA",
    description:
      "GTA pros for wallpaper removal, popcorn ceiling smoothing (Level 5), drywall and painting. Dust-controlled, tidy, and guaranteed.",
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
        "@id": "https://example.com/#business",
        "name": "Wallpaper Removal Pro",
        "url": "https://example.com/",
        "telephone": PHONE_NUMBER,
        "areaServed": areaServed,
        "image": "https://example.com/og.webp",
        "priceRange": "$$",
        "serviceArea": { "@type": "AdministrativeArea", "name": "Greater Toronto Area" },
        "description":
          "Dust-controlled wallpaper removal, popcorn ceiling smoothing to Level 5, drywall finishing, and interior painting across the GTA.",
      },
      {
        "@type": "Service",
        "name": "Wallpaper Removal & Popcorn Ceiling Smoothing",
        "serviceType": [
          "Wallpaper Removal",
          "Popcorn Ceiling Removal",
          "Drywall Taping & Skim Coat (Level 5)",
          "Interior Painting"
        ],
        "areaServed": areaServed,
        "provider": { "@id": "https://example.com/#business" }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Is the work dust-controlled?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We isolate rooms, use plastic containment, vacuum-assist sanding, and a tidy clean-up so your home stays livable."
            }
          },
          {
            "@type": "Question",
            "name": "Do you handle painted or stubborn wallpaper?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We score, steam or gel-soften, remove backing and adhesive, wash the substrate, repair, skim-coat to Level 5 if needed, then prime."
            }
          },
          {
            "@type": "Question",
            "name": "What about asbestos in old popcorn?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "If a ceiling is pre-1990s or suspect, we recommend testing before disturbance. We only proceed with safe methods and proper containment."
            }
          },
          {
            "@type": "Question",
            "name": "How fast can I get an estimate?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Same-day phone/text estimates with photos. Site visit available for final scope and schedule."
            }
          }
        ]
      }
    ]
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
  const imgs = Array.from({ length: 8 }, (_, i) => `/home/${i + 1}.webp`);

  return (
    <div className="container-x py-10">
      <JsonLd />

      {/* HERO */}
      <header className="max-w-5xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Wallpaper • Popcorn Ceiling • Drywall • Painting
            </h1>
            <p className="mt-3 text-lg text-gray-700">
              Dust-controlled, schedule-reliable, and finished{" "}
              <strong>Level 5 smooth</strong>. Clear scope, daily updates, and a
              written warranty.
            </p>
          </div>
          <div className="flex gap-3">
            <a href={PHONE_HREF} className="btn-cta">
              📞 {PHONE_NUMBER}
            </a>
            <a href="/quote/" className="btn-cta">
              Get My Quote
            </a>
          </div>
        </div>

        {/* City pills (internal linking for local SEO) */}
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {cities.map((c) => (
            <Link key={c.slug} href={`/${c.slug}/`} className="pill">
              {c.name}
            </Link>
          ))}
        </div>
      </header>

      {/* WHY US / PROOF */}
      <section className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="card p-6 bg-white">
          <h3 className="text-xl font-semibold">Dust-Controlled</h3>
          <p className="text-gray-600 mt-2">
            Plastic containment, floor & vent protection, vacuum-assist sanding,
            and spotless clean-up.
          </p>
        </div>
        <div className="card p-6 bg-white">
          <h3 className="text-xl font-semibold">Level 5 Finish</h3>
          <p className="text-gray-600 mt-2">
            Skim-coat & feather, critical-light check, prime & re-skim where
            needed—so ceilings look perfect in daylight.
          </p>
        </div>
        <div className="card p-6 bg-white">
          <h3 className="text-xl font-semibold">Trusted & Guaranteed</h3>
          <p className="text-gray-600 mt-2">
            Written scope, start/finish plan, and a 3-year workmanship warranty.
            Insured & WSIB covered.
          </p>
        </div>
      </section>

      {/* YOUR EXISTING GALLERY — unchanged */}
      <div className="py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {imgs.map((s, i) => (
          <img
            data-lightbox="true"
            key={i}
            src={s}
            alt={`GTA project ${i + 1}`}
            className="w-full h-56 object-cover rounded-2xl border shadow"
          />
        ))}
      </div>

      {/*quote form*/}
      <section className="mt-10 card p-6 bg-white">
        <h2 className="text-2xl font-semibold">Get a Fast Quote</h2>
        <p className="mt-2 text-gray-700">
          Share a few details and we’ll reply quickly with scope, timeline, and
          a clear estimate.
        </p>
        <div className="mt-6">
          <QuoteForm />
        </div>
      </section>

      {/* SERVICE STACK / SALES COPY */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="card p-6 bg-white">
          <h2 className="text-2xl font-semibold">
            Wallpaper Removal (Clean Substrate)
          </h2>
          <ul className="mt-3 space-y-2 text-gray-700 list-disc pl-5">
            <li>
              Score → steam/gel soften → remove top layer & backing → adhesive
              wash
            </li>
            <li>Repairs & skim-coat as needed → prime with bonding sealer</li>
            <li>
              Optional: paint finish (ceilings/walls), trim caulking & finishing
            </li>
          </ul>
        </div>
        <div className="card p-6 bg-white">
          <h2 className="text-2xl font-semibold">
            Popcorn Ceiling to Smooth (Level 5)
          </h2>
          <ul className="mt-3 space-y-2 text-gray-700 list-disc pl-5">
            <li>
              Containment & protection, scrape or encapsulate where appropriate
            </li>
            <li>
              Full skim-coat & sanding to Level 5, critical-light inspection
            </li>
            <li>
              Prime & paint ready finish; pot-light/fixture patches blended
            </li>
          </ul>
        </div>
      </section>

      {/* NEIGHBORHOODS (keywords only, no links needed) */}
      <section className="mt-10 card p-6 bg-white">
        <h2 className="text-2xl font-semibold">GTA Coverage</h2>
        <p className="mt-2 text-gray-700">
          Toronto (Annex, Leaside, The Beaches, High Park, North York,
          Etobicoke, Scarborough), Mississauga (Port Credit, Clarkson, Erin
          Mills), Oakville, Burlington, Milton, Hamilton, Stoney Creek,
          Ancaster, Grimsby, Vaughan, Richmond Hill.
        </p>
      </section>

      {/* SOCIAL PROOF + CTA */}
      <section className="mt-10 card p-6 bg-white flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold">
            Ready for a guaranteed, dust-controlled job?
          </h3>
          <p className="text-gray-600">
            Fast estimate with photos. Clear plan & schedule.
          </p>
        </div>
        <div className="flex gap-3">
          <a href={PHONE_HREF} className="btn-cta">
            📞 {PHONE_NUMBER}
          </a>
          <a href="/quote/" className="btn-cta">
            Get My Quote
          </a>
        </div>
      </section>

      {/* FAQ (visible content + matches JSON-LD) */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold">FAQ</h2>
        <details className="card p-6 bg-white mt-4">
          <summary className="font-medium">
            Is the work dust-controlled?
          </summary>
          <p className="mt-2 text-gray-700">
            Yes—containment, vent masking, vacuum-assist sanding, and full
            clean-up.
          </p>
        </details>
        <details className="card p-6 bg-white mt-4">
          <summary className="font-medium">
            Do you handle painted or stubborn wallpaper?
          </summary>
          <p className="mt-2 text-gray-700">
            We score, steam/gel-soften, remove the backing and glue, repair,
            then skim-coat and prime.
          </p>
        </details>
        <details className="card p-6 bg-white mt-4">
          <summary className="font-medium">
            What about asbestos in old popcorn?
          </summary>
          <p className="mt-2 text-gray-700">
            We recommend testing when in doubt and only proceed with safe,
            contained methods.
          </p>
        </details>
        <details className="card p-6 bg-white mt-4">
          <summary className="font-medium">
            How fast can I get an estimate?
          </summary>
          <p className="mt-2 text-gray-700">
            Same-day phone/text estimate with photos; on-site visit for final
            scope and schedule.
          </p>
        </details>
      </section>

      {/* STICKY MOBILE CTA
      
      */}
      <div className="bg-white/95 backdrop-blur border shadow-xl rounded-2xl p-3 flex items-center justify-between gap-3">
        <a href={PHONE_HREF} className="btn-cta flex-1 text-center">
          📞 Call {PHONE_NUMBER}
        </a>
        <a href="/quote/" className="btn-cta flex-1 text-center">
          Get My Quote
        </a>
      </div>
    </div>
  );
}
