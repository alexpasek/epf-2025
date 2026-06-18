import { notFound } from "next/navigation";
import SkylightDrywallRepairPage from "@/components/SkylightDrywallRepairPage";
import {
  skylightRepairCities,
  skylightRepairCityMap,
} from "@/data/skylightRepairCities";

export const revalidate = 86400;

export function generateStaticParams() {
  return skylightRepairCities.map((city) => ({ city: city.slug }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const city = skylightRepairCityMap.get(resolvedParams?.city);
  if (!city) return { title: "Skylight Drywall Repair" };

  const path = `/skylight-drywall-repair/${city.slug}/`;
  return {
    title: city.title,
    description: city.metaDescription,
    keywords: [
      `skylight drywall repair ${city.city}`,
      `drywall repair around skylight ${city.city}`,
      `skylight shaft repair ${city.city}`,
      `light well drywall repair ${city.city}`,
      `skylight water damage repair ${city.city}`,
      `ceiling water damage around skylight ${city.city}`,
      `popcorn ceiling removal around skylight ${city.city}`,
      `stipple removal around skylight ${city.city}`,
      `smooth ceiling around skylight ${city.city}`,
    ],
    alternates: { canonical: path },
    openGraph: {
      title: city.title,
      description: city.metaDescription,
      url: path,
      type: "website",
      images: [
        {
          url: city.heroImage,
          width: 1200,
          height: 630,
          alt: city.imageAlt,
        },
      ],
    },
    robots: { index: true, follow: true },
  };
}

export default async function Page({ params }) {
  const resolvedParams = await params;
  const city = skylightRepairCityMap.get(resolvedParams?.city);
  if (!city) notFound();

  return <SkylightDrywallRepairPage city={city} />;
}
