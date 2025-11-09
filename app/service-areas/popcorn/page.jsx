import Link from "next/link";
import { cities } from "@/data/cities";

export const revalidate = 86400;

export const metadata = {
  title: "Popcorn Ceiling Removal — Service Areas (Cities & Neighbourhoods)",
  description:
    "Browse all cities and neighbourhoods we serve for popcorn ceiling removal. Dust-contained, Level 5 skim-coat, prime & paint.",
  alternates: { canonical: "/service-areas/popcorn" },
  openGraph: {
    title: "Popcorn Ceiling Removal — Service Areas (GTA)",
    description:
      "Choose your city or neighbourhood to see process, photos, and get a fast quote for popcorn ceiling removal.",
    url: "/service-areas/popcorn",
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
          Pick your <strong>city</strong>, or jump straight to a{" "}
          <strong>neighbourhood</strong> page with {`"`}popcorn ceiling removal
          in …{`"`}
        </p>
      </header>

      {/* Cities grid */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold">Cities</h2>
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {cities.map((c) => (
            <Link
              key={c.slug}
              href={`/service-areas/popcorn-ceiling-removal/${c.slug}/`}
              className="pill"
            >
              {c.name}
            </Link>
          ))}
        </div>
      </section>

      {/* All neighbourhoods grouped by city */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold">All Neighbourhoods</h2>

        <div className="mt-6 space-y-4">
          {cities.map((c) => {
            const hasHoods = c && c.neighborhoods && c.neighborhoods.length > 0;
            if (!hasHoods) return null;

            return (
              <div key={c.slug} className="card p-6 bg-white">
                <div className="flex items-center justify-between gap-3 flex-wrap">
                  <h3 className="text-xl font-semibold">{c.name}</h3>
                  <Link
                    href={`/service-areas/popcorn-ceiling-removal/${c.slug}/`}
                    className="underline underline-offset-2 text-sm"
                  >
                    View {c.name} city page →
                  </Link>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {c.neighborhoods.map((n) => (
                    <Link
                      key={n.slug}
                      href={`/service-areas/popcorn-ceiling-removal/${c.slug}/${n.slug}`}
                      className="pill"
                    >
                      {n.name}
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* JSON-LD for the listing page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Popcorn Ceiling Removal — Service Areas",
            url: "/service-areas/popcorn",
            hasPart: cities.map((c) => ({
              "@type": "CollectionPage",
              name: `Popcorn Ceiling Removal in ${c.name}`,
              url: `/service-areas/popcorn-ceiling-removal/${c.slug}`,
            })),
          }),
        }}
      />
    </div>
  );
}
