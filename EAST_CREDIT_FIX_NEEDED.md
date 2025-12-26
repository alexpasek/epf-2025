import Link from "next/link";
import { CONTACT } from "@/app/config";
export const revalidate = 86400;

export const metadata = {
title: "Popcorn Ceiling Removal — East Credit, Mississauga | Level 5 Finish",
description:
"East Credit homes: dust-controlled popcorn ceiling removal, full skim to Level 5, prime & paint-ready. Clear pricing and tidy daily wrap-ups.",
alternates: {
canonical: "/popcorn-ceiling-removal/mississauga/east-credit/",
},
openGraph: {
title: "Popcorn Ceiling Removal — East Credit, Mississauga",
description:
"Residential popcorn/stipple removal with clean workflow and Level 5 smoothness.",
url: "/popcorn-ceiling-removal/mississauga/east-credit/",
type: "article",
},
robots: { index: true, follow: true },
};

const phoneHref = (CONTACT && CONTACT.phoneHref) || "tel:+16479236784";

export default function Page() {
const images = Array.from(
{ length: 6 },
(\_, i) => `/services/popcorn-ceiling-removal/${i + 1}.webp`
);
return (
<>
<JsonLd />
{/_ Modern hero, highlights, gallery stay as-is... _/}
{/_ Then pricing, case studies, enhanced local details, original details, FAQ, CTA, nav, sticky _/}
</>
);
}
