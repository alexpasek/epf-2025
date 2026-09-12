import GarageDrywallRepairPage, { garageMetadata } from "@/components/GarageDrywallRepairPage";
export const revalidate = 86400;
export const metadata = garageMetadata();
export default function Page() { return <GarageDrywallRepairPage />; }
