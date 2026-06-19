import { redirect } from "next/navigation";

export const revalidate = 0;
export const runtime = "edge";

export default function Page() {
  redirect("/service-areas/popcorn/");
}
