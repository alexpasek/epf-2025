import Link from "next/link";
import { cities } from "@/data/cities";

export const revalidate = 86400;

export const metadata = {
  title: "Popcorn Ceiling Removal — Service Areas (GTA)",
  description:
    "Find popcorn ceiling removal in your city. Dust-controlled workflow, Level 5 skim, stain-block primer and a bright paint-ready finish across the GTA.",
  alternates: { canonical: "/service-areas/popcorn-ceiling-removal/" },
  openGraph: {
    title: "Popcorn Ceiling Removal — Service Areas (GTA)",
    description:
      "Choose your city or neighbourhood for Level 5 smooth ceilings. Clean, contained, guaranteed.",
    url: "/service-areas/popcorn-ceiling-removal/",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function Page() {
  return (
    <div className="container-x py-10">
      <header className="max-w-5xl">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          Popcorn Ceiling Removal — Service Areas
        </h1>
        <p className="mt-3 text-gray-700">
          Pick your city or neighbourhood to see a local page with process,
          timelines and examples.
        </p>
      </header>

      <section className="mt-6 space-y-6">
        {cities.map((c) => (
          <div key={c.slug} className="card p-6 bg-white">
            <div className="flex items-center justify-between gap-3">
              <h2 className="text-xl font-semibold">{c.name}</h2>
              <Link
                href={`/service-areas/popcorn-ceiling-removal/${c.slug}/`}
                className="btn-cta"
              >
                View {c.name} page →
              </Link>
            </div>

            {Array.isArray(c.neighborhoods) && c.neighborhoods.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {c.neighborhoods.map((n) => (
                  <Link
                    key={n.slug}
                    href={`/service-areas/popcorn-ceiling-removal/${c.slug}/${n.slug}/`}
                    className="pill"
                  >
                    {n.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </section>

      {/* JSON-LD: list each city service URL */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Popcorn Ceiling Removal — Service Areas",
            hasPart: cities.map((c) => ({
              "@type": "Service",
              name: `Popcorn Ceiling Removal in ${c.name}`,
              areaServed: c.name,
              url: `/service-areas/popcorn-ceiling-removal/${c.slug}/`,
            })),
          }),
        }}
      />
    </div>
  );
}
