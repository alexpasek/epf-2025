import { SERVICE_AREAS, CONTACT, SITE_URL } from "@/app/config";
export default function SEOJsonLd() {
  const baseUrl = (SITE_URL || "https://epfproservices.com").replace(/\/$/, "");
  const orgId = `${baseUrl}/#org`;
  const data = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": orgId,
    "name": "EPF Pro Services",
    "areaServed": SERVICE_AREAS,
    "telephone": CONTACT.phone,
    "url": baseUrl + "/",
    "image": `${baseUrl}/android-chrome-512x512.png`,
    "address": CONTACT.address || undefined,
    "description":
      "Drywall installation, drywall repair, wallpaper removal, popcorn ceiling removal, and interior painting across the GTA."
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
