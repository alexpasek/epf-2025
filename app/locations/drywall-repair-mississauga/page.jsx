import Link from "next/link";
import { SITE_URL } from "@/app/config";

export const dynamic = "force-static";
export const revalidate = 86400;

const BASE_URL = (SITE_URL || "https://epfproservices.com").replace(/\/$/, "");
const PATH = "/locations/drywall-repair-mississauga/";
const SERVICE_PATH = "/services/drywall-repair/mississauga/";

const AREAS = [
  ["port-credit", "Port Credit", "Waterfront condos, village homes, fixture patches, and ceiling stain repairs."],
  ["streetsville", "Streetsville", "Older homes, stairwell cracks, basement patches, and seam repair before painting."],
  ["erin-mills", "Erin Mills", "Family homes, townhomes, ceiling leak stains, patching, and paint-ready repairs."],
  ["city-centre", "City Centre", "Square One high-rise repairs, move-out dents, TV mount holes, and ceiling stains."],
  ["cooksville", "Cooksville", "Condos, rentals, older repairs, wall patching, and practical turnover work."],
  ["meadowvale", "Meadowvale", "Basement water damage, family-room dents, ceiling patches, and crack repair."],
  ["churchill-meadows", "Churchill Meadows", "Newer homes, settlement cracks, screw pops, stairwells, and basement repairs."],
  ["clarkson", "Clarkson", "Lake-area homes, moisture-aware repairs, ceiling stains, and wall patching."],
  ["lorne-park", "Lorne Park", "Premium homes, smooth ceilings, visible wall repairs, and careful paint-ready finishing."],
];

export const metadata = {
  title: "Drywall Repair Mississauga Neighbourhoods | EPF Pro Services",
  description:
    "Neighbourhood drywall repair pages for Mississauga: Port Credit, Streetsville, Erin Mills, City Centre, Cooksville, Meadowvale, Churchill Meadows, Clarkson, and Lorne Park.",
  alternates: { canonical: `${BASE_URL}${PATH}` },
  robots: { index: true, follow: true },
};

function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Drywall Repair Mississauga",
        item: { "@id": `${BASE_URL}${SERVICE_PATH}` },
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Mississauga Neighbourhoods",
        item: { "@id": `${BASE_URL}${PATH}` },
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
  return (
    <main className="bg-white text-slate-900">
      <JsonLd />
      <section className="bg-slate-950 text-white">
        <div className="container mx-auto px-4 py-16">
          <h1 className="max-w-4xl text-4xl font-bold md:text-6xl">
            Mississauga Drywall Repair by Neighbourhood
          </h1>
          <p className="mt-5 max-w-3xl text-lg text-slate-200">
            Local drywall repair details for Mississauga neighbourhoods, linked
            back to the main{" "}
            <Link href={SERVICE_PATH} className="font-semibold text-blue-200 underline">
              drywall repair Mississauga
            </Link>{" "}
            service page for quotes, repair types, and photo review.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-14">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {AREAS.map(([slug, name, desc]) => (
            <Link
              key={slug}
              href={`${PATH}${slug}/`}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm hover:shadow-lg"
            >
              <h2 className="text-2xl font-bold">Drywall repair near {name}</h2>
              <p className="mt-3 text-slate-600">{desc}</p>
              <span className="mt-5 inline-flex font-semibold text-blue-700">
                View {name} repair page
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
