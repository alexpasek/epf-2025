import Link from "next/link";
import QuoteForm from "@/components/QuoteForm";
import LocalSignals from "@/components/LocalSignals";
import { PHONE_HREF, PHONE_NUMBER } from "@/app/config";

export const revalidate = 86400;

const SERVICE_URL = "/services/baseboard-installation/";
const HERO_IMG = "/services/baseboard-installation.jpg";

export const metadata = {
  title:
    "Baseboard Installation After Popcorn Ceiling Removal | EPF Pro Services",
  description:
    "Finish your popcorn ceiling removal with premium baseboard installation, shoe moulding, caulk and paint-ready trim across the GTA.",
  alternates: { canonical: SERVICE_URL },
  openGraph: {
    title:
      "Baseboard Installation & Trim Finishing — Popcorn Ceiling Removal Pros",
    description:
      "We combine dust-controlled popcorn ceiling removal with new baseboards, leveled corners, caulk and paint-ready trim throughout the GTA.",
    url: SERVICE_URL,
    type: "article",
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
  "Measure, mark, and laser level to ensure baseboards align with new ceilings and flooring transitions.",
  "Precision cuts (miter + coped corners) so MDF and wood profiles close tight even in older homes.",
  "Secure with finish nails/adhesive, fill fastener holes, sand smooth, and caulk the top and shoe mould seams.",
  "Prime + paint-ready delivery, or optional spray/brush finish coordinated with our ceiling/wall crews.",
];

const FAQS = [
  {
    q: "Can you install baseboards right after popcorn ceiling removal?",
    a: "Yes. Once ceilings are Level 5 smooth and primed we install new trim while protection is still in place, so there’s no dust on fresh baseboards.",
  },
  {
    q: "Will you remove existing baseboards and haul them away?",
    a: "We score caulk, gently remove existing trim and shoe, and dispose of debris. If portions are in good condition we can re-use or splice to match.",
  },
  {
    q: "Do you also paint the new baseboards?",
    a: "Most clients ask us to prime and finish coat the trim so it’s turnkey with the rest of the popcorn removal project. We can also prep for your painter.",
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
    areaServed: [
      "Mississauga",
      "Toronto",
      "Oakville",
      "Burlington",
      "Hamilton",
      "Milton",
    ],
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
    <div className="container-x py-10 space-y-12">
      <JsonLd />

      {/* Hero */}
      <section className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr] items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-amber-600">
            Popcorn ceiling finishing • GTA
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
            Baseboard Installation After Popcorn Ceiling Removal
          </h1>
          <p className="mt-4 text-lg text-slate-700">
            Smooth ceilings deserve crisp trim. We remove old baseboards, prep
            walls after popcorn ceiling removal, and install new MDF or solid
            wood profiles with tight coped corners, shoe moulding, caulk, and a
            paint-ready finish throughout Mississauga, Toronto, Oakville,
            Burlington, Hamilton, and nearby.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={PHONE_HREF} className="btn-cta">
              📞 {PHONE_NUMBER}
            </a>
            <Link href="/quote/" className="btn-cta">
              Book baseboard install
            </Link>
          </div>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg">
          <h2 className="text-2xl font-semibold">
            Plan trim right after ceiling smoothing
          </h2>
          <p className="mt-3 text-sm text-slate-600">
            Upload photos or drawings of the rooms and we’ll send a combined
            popcorn ceiling + baseboard estimate with timing for both trades.
          </p>
          <div className="mt-4">
            <QuoteForm />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="grid gap-4 sm:grid-cols-3">
        {[
          {
            label: "Homes updated with new trim after popcorn removal",
            value: "720+",
          },
          { label: "Profiles stocked (MDF, wood, modern square)", value: "18" },
          { label: "Average rating", value: "5 ★" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm"
          >
            <div className="text-3xl font-semibold text-slate-900">
              {stat.value}
            </div>
            <p className="mt-1 text-sm text-slate-600">{stat.label}</p>
          </div>
        ))}
      </section>

      {/* Service details */}
      <section className="grid gap-6 lg:grid-cols-2">
        <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold">
            What’s included in our baseboard package
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
            <li>Removal and disposal of old baseboards and shoe moulding.</li>
            <li>
              Laser-leveled layout so trim aligns with new ceiling and flooring
              heights after popcorn removal.
            </li>
            <li>
              Coped inside corners, tight scarf joints on long walls, and
              flexible caulk for shadow-free lines.
            </li>
            <li>
              Nail-hole fill, sanding, and optional priming/finish painting for a
              turnkey look.
            </li>
          </ul>
        </article>
        <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold">
            Perfect pairing with popcorn ceiling smoothing
          </h2>
          <p className="mt-3 text-slate-700">
            When we scrape, skim, and paint ceilings we already protect floors
            and furniture. That’s the ideal time to upgrade baseboards, add shoe
            moulding, or cover uneven drywall edges from removed crown. You get
            a single project manager, one schedule, and a consistent finish from
            ceiling to floor.
          </p>
          <p className="mt-3 text-slate-700">
            Need casings or wainscoting too? We can add matching profiles so the
            room feels fully refreshed after texture removal.
          </p>
        </article>
      </section>

      {/* Process */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-semibold">Our trim installation steps</h2>
        <ol className="mt-4 list-decimal space-y-3 pl-6 text-slate-700">
          {PROCESS.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </section>

      {/* Local signals */}
      <LocalSignals signals={LOCAL_SIGNALS} />

      {/* FAQ */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-semibold">
          Baseboard installation FAQs
        </h2>
        <div className="mt-4 space-y-4">
          {FAQS.map((faq) => (
            <details
              key={faq.q}
              className="rounded-2xl border border-slate-200 p-4"
            >
              <summary className="cursor-pointer text-lg font-semibold text-slate-900">
                {faq.q}
              </summary>
              <p className="mt-2 text-sm text-slate-600">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-3xl bg-gradient-to-r from-amber-500 to-red-500 p-8 text-white shadow-2xl">
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-white/80">
              Ready when you are
            </p>
            <h2 className="mt-2 text-3xl font-semibold">
              Finish your popcorn ceiling project with fresh baseboards
            </h2>
            <p className="mt-3 text-white/90">
              One crew handles the ceiling smoothing and trim work so you get a
              seamless result from top to bottom.
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
              Request a baseboard quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
