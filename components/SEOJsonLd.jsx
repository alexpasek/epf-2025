import { BRAND_NAME, SERVICE_AREAS, CONTACT, SITE_URL } from "@/app/config";
export default function SEOJsonLd() {
  const baseUrl = (SITE_URL || "https://epfproservices.com").replace(/\/$/, "");
  const orgId = `${baseUrl}/#org`;
  const data = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": orgId,
    "name": BRAND_NAME,
    "areaServed": SERVICE_AREAS,
    "telephone": CONTACT.phone,
    "url": baseUrl + "/",
    "image": `${baseUrl}/android-chrome-512x512.png`,
    "address": CONTACT.address || undefined,
    "description":
      "Wallpaper removal, popcorn ceiling removal, drywall installation & interior painting across the GTA."
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
