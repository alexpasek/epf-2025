import SkylightDrywallRepairPage from "@/components/SkylightDrywallRepairPage";

export const revalidate = 86400;

export const metadata = {
  title: "Skylight Drywall Repair & Ceiling Damage Repair | EPF Pro Services",
  description:
    "Interior skylight drywall repair, light well refinishing, ceiling water stain repair, popcorn or stipple removal around skylights, and smooth ceiling prep.",
  keywords: [
    "skylight drywall repair",
    "drywall repair around skylight",
    "skylight shaft repair",
    "light well drywall repair",
    "skylight tunnel drywall repair",
    "skylight water damage repair",
    "ceiling water damage around skylight",
    "ceiling repair around skylight",
    "ceiling stain from skylight leak",
    "popcorn ceiling removal around skylight",
    "stipple removal around skylight",
    "remove popcorn ceiling around skylight",
    "drywall repair after skylight leak",
    "smooth ceiling around skylight",
  ],
  alternates: { canonical: "/services/skylight-drywall-repair/" },
  openGraph: {
    title: "Skylight Drywall Repair & Ceiling Damage Repair | EPF Pro Services",
    description:
      "Interior drywall repair, skylight shaft refinishing, popcorn or stipple removal around skylights, primer, and smooth paint-ready finish.",
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
