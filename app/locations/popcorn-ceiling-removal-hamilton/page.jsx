import { redirect } from "next/navigation";

export const metadata = {
  title: "Popcorn Ceiling Removal Hamilton | EPF Pro Services",
  description:
    "Hamilton popcorn ceiling removal guide for Stoney Creek, Hamilton Mountain, Dundas, Ancaster, Waterdown, condos, basements, dust control, cost, and timelines.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function HamiltonPopcornLandingRedirect() {
  redirect("/blog/popcorn-ceiling-removal-hamilton-local-guide/");
}
