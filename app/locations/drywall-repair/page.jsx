import DrywallAdsLandingPage from "@/components/landing/DrywallAdsLandingPage";

export const metadata = {
  title: "Drywall Repair | Fast Price Range & Patch Repair Quote",
  description:
    "General drywall repair ad landing page with a quick repair price range, photo-based quote flow, dust-controlled sanding, and patch plus paint options.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: "/locations/drywall-repair/",
  },
};

export default function DrywallRepairAdsPage() {
  return <DrywallAdsLandingPage />;
}
