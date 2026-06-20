import SkylightDrywallRepairPage from "@/components/SkylightDrywallRepairPage";

export const revalidate = 86400;

export const metadata = {
  title: "Skylight & Cathedral Ceiling Repair | Popcorn Removal & Painting",
  description:
    "Interior skylight and cathedral ceiling repair, light well refinishing, ceiling water stain repair, popcorn or stipple removal, primer, painting, and smooth ceiling prep.",
  keywords: [
    "skylight drywall repair",
    "drywall repair around skylight",
    "skylight shaft repair",
    "light well drywall repair",
    "cathedral ceiling repair",
    "cathedral ceiling repair around skylight",
    "vaulted ceiling repair around skylight",
    "skylight tunnel drywall repair",
    "skylight water damage repair",
    "ceiling water damage around skylight",
    "ceiling repair around skylight",
    "ceiling stain from skylight leak",
    "popcorn ceiling removal around skylight",
    "cathedral ceiling popcorn removal",
    "stipple removal around skylight",
    "remove popcorn ceiling around skylight",
    "drywall repair after skylight leak",
    "smooth ceiling around skylight",
    "ceiling painting after skylight repair",
    "painting cathedral ceiling around skylight",
  ],
  alternates: { canonical: "/services/skylight-drywall-repair/" },
  openGraph: {
    title: "Skylight & Cathedral Ceiling Repair | EPF Pro Services",
    description:
      "Interior drywall repair, skylight shaft refinishing, cathedral ceiling repair, popcorn or stipple removal, primer, painting, and smooth finish prep.",
    url: "/services/skylight-drywall-repair/",
    type: "website",
    images: [
      {
        url: "/services/skylight-drywall-repair/skylight-drywall-repair-clean-hero-v2.jpg",
        width: 1200,
        height: 630,
        alt: "Clean skylight drywall repair and smooth ceiling preparation around a bright light well",
      },
    ],
  },
  robots: { index: true, follow: true },
};

export default function Page() {
  return <SkylightDrywallRepairPage />;
}
