import SeoBlogAgentClient from "./SeoBlogAgentClient";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "SEO Blog Agent",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

export default function SeoBlogAgentPage() {
  return <SeoBlogAgentClient />;
}
