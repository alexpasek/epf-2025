
  
  // ==========================================================
  // app/service-areas/page.jsx — Service Areas index (JavaScript)
  // ==========================================================
  import Link from "next/link";
  import { cities } from "@/data/cities";
  
  export const revalidate = 86400;
  
  export const metadata = {
    title: "Service Areas | Popcorn Ceiling Removal Pro",
    description: "We service Toronto & the GTA. Browse cities and neighbourhoods to see recent work and request a quote.",
  };
  
  export default function ServiceAreasPage() {
    return (
      <div className="container-x mx-auto px-4 py-10">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Service Areas</h1>
        <p className="mt-3 text-gray-700 max-w-3xl">
          We’re local to Toronto and work across the GTA every week. Choose your city to see neighbourhoods and request a free estimate.
        </p>
  
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {cities.map((city) => (
            <section key={city.slug} className="border rounded-2xl p-5">
              <h2 className="text-xl font-semibold">
                <Link href={`/service-areas/${city.slug}`} className="hover:underline">
                  {city.name}
                </Link>
              </h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {city.neighborhoods?.length ? (
                  city.neighborhoods.slice(0, 24).map((n) => (
                    <Link
                      key={n.slug}
                      href={`/service-areas/${city.slug}/${n.slug}`}
                      className="text-sm rounded-full border px-3 py-1 hover:bg-gray-50"
                    >
                      {n.name}
                    </Link>
                  ))
                ) : (
                  <span className="text-sm text-gray-500">Neighbourhood list coming soon.</span>
                )}
              </div>
            </section>
          ))}
        </div>
      </div>
    );
  }
  
 