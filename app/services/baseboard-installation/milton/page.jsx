import { cities } from "@/data/cities";
import { BaseboardCityPage, buildBaseboardMetadata } from "../city-template";

export const revalidate = 86400;

const CITY_NAME = "Milton";
const CITY_SLUG = "milton";
const cityData = cities.find((entry) => entry.slug === CITY_SLUG);
const signals = cityData && cityData.signals ? cityData.signals : null;

export const metadata = buildBaseboardMetadata(CITY_NAME, CITY_SLUG);

export default function Page() {
  return (
    <BaseboardCityPage
      cityName={CITY_NAME}
      citySlug={CITY_SLUG}
      signals={signals}
    />
  );
}
