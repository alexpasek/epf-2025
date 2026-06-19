import PopcornAdsLandingPage from "@/components/landing/PopcornAdsLandingPage";
import { getLandingData } from "@/components/landing/landingData";

const landing = getLandingData("waterdown");

export const metadata = {
  title: landing.metaTitle,
  description: landing.metaDescription,
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: `/locations/${landing.slug}`,
  },
};

export default function WaterdownLandingPage() {
  return <PopcornAdsLandingPage landing={landing} />;
}
