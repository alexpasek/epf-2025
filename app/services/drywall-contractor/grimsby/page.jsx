import DrywallContractorCityPage from "../city-page-template";
import { getDrywallContractorCityPage, getMetadata } from "../city-page-data";

export const revalidate = 86400;
export const metadata = getMetadata(getDrywallContractorCityPage("grimsby"));

export default function Page() {
  return <DrywallContractorCityPage slug="grimsby" />;
}
