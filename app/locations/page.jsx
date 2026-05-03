import Link from "next/link";
import { SITE_URL } from "@/app/config";

export const dynamic = "force-static";
export const revalidate = 86400;

const BASE_URL = (SITE_URL || "https://epfproservices.com").replace(/\/$/, "");
const PATH = "/locations/";

export const metadata = {
  title: "Locations | EPF Pro Services",
  description:
    "Find EPF Pro Services location pages for drywall repair, popcorn ceiling removal, ceiling repair, painting, and wall finishing across Mississauga and the GTA.",
  alternates: { canonical: `${BASE_URL}${PATH}` },
  robots: { index: true, follow: true },
};

const locationGroups = [
  {
    title: "Mississauga drywall repair",
    links: [
      ["Mississauga drywall repair neighbourhoods", "/locations/drywall-repair-mississauga/"],
      ["Drywall repair Mississauga service page", "/services/drywall-repair/mississauga/"],
    ],
  },
  {
    title: "Popcorn ceiling removal",
    links: [
      ["Popcorn ceiling removal Mississauga", "/locations/popcorn-ceiling-removal-mississauga/"],
      ["Popcorn ceiling removal Burlington", "/locations/popcorn-ceiling-removal-burlington/"],
      ["Popcorn ceiling removal Oakville", "/locations/popcorn-ceiling-removal-oakville/"],
      ["Popcorn ceiling removal Waterdown", "/locations/popcorn-ceiling-removal-waterdown/"],
    ],
  },
];

function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${BASE_URL}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Locations",
        item: `${BASE_URL}${PATH}`,
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

export default function LocationsPage() {
  return (
    <main className="bg-white text-slate-900">
      <JsonLd />
      <section className="bg-slate-950 text-white">
        <div className="container mx-auto px-4 py-16">
          <h1 className="max-w-4xl text-4xl font-bold md:text-6xl">
            EPF Pro Services Locations
          </h1>
          <p className="mt-5 max-w-3xl text-lg text-slate-200">
            Browse local EPF Pro Services pages for drywall repair, ceiling
            repair, popcorn ceiling removal, painting, and wall finishing across
            Mississauga and nearby GTA service areas.
          </p>
        </div>
      </section>

      <section className="container mx-auto grid gap-6 px-4 py-14 md:grid-cols-2">
        {locationGroups.map((group) => (
          <div key={group.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-2xl font-bold">{group.title}</h2>
            <div className="mt-5 space-y-3">
              {group.links.map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  className="block rounded-2xl bg-white p-4 font-semibold text-blue-700 hover:text-blue-900"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
