import PopcornAdsLandingPage from "@/components/landing/PopcornAdsLandingPage";
import { getLandingData } from "@/components/landing/landingData";

const landing = getLandingData("oakville");

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

export default function OakvilleLandingPage() {
  return <PopcornAdsLandingPage landing={landing} />;
}
