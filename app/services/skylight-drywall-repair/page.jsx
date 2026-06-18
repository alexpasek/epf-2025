import SkylightDrywallRepairPage from "@/components/SkylightDrywallRepairPage";

export const revalidate = 86400;

export const metadata = {
  title: "Skylight Drywall Repair & Ceiling Damage Repair | EPF Pro Services",
  description:
    "Interior drywall repair around skylights, skylight shaft repairs, ceiling water damage repair, and popcorn ceiling removal around skylights.",
  keywords: [
    "skylight drywall repair",
    "drywall repair around skylight",
    "skylight shaft repair",
    "light well drywall repair",
    "skylight water damage repair",
    "ceiling water damage around skylight",
    "popcorn ceiling removal around skylight",
    "stipple removal around skylight",
    "drywall repair after skylight leak",
    "smooth ceiling around skylight",
  ],
  alternates: { canonical: "/services/skylight-drywall-repair/" },
  openGraph: {
    title: "Skylight Drywall Repair & Ceiling Damage Repair | EPF Pro Services",
    description:
      "Interior drywall repair, skylight shaft refinishing, popcorn ceiling removal around skylights, primer, and smooth paint-ready finish.",
    url: "/services/skylight-drywall-repair/",
    type: "website",
    images: [
      {
        url: "/services/popcorn-ceiling-removal/2.webp",
        width: 1200,
        height: 630,
        alt: "Skylight drywall repair and ceiling damage repair around a light well",
      },
    ],
  },
  robots: { index: true, follow: true },
};

export default function Page() {
  return <SkylightDrywallRepairPage />;
}
