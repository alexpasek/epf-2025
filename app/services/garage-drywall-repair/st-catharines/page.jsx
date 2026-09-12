import GarageDrywallRepairPage, { garageMetadata } from "@/components/GarageDrywallRepairPage";
import { garageCities } from "@/lib/garage/cityContent";
const city = garageCities.find(c => c.slug === "st-catharines");
export const revalidate = 86400;
export const metadata = garageMetadata(city);
export default function Page() { return <GarageDrywallRepairPage city={city} />; }
