import { SITE_URL } from "@/app/config";

const description =
  "Professional popcorn ceiling removal contractor in Hamilton. Expert ceiling texture removal, stipple ceiling removal, and ceiling resurfacing with dust control & Level 5 smooth finish. Serving Ancaster, Dundas, Westdale, Waterdown, Stoney Creek.";

export default function Head() {
  const canonicalUrl = `${SITE_URL}/popcorn-ceiling-removal/hamilton/`;

  return (
    <>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
    </>
  );
}
