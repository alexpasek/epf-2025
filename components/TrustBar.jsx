'use client';
import { usePathname } from "next/navigation";
import { isAdsLandingPath } from "@/lib/isAdsLandingPath";

export default function TrustBar(){
  const pathname = usePathname();
  if (isAdsLandingPath(pathname || "")) {
    return null;
  }

  return(<div className=" border-b bg-white/80">
    <div className=" hidden container-x py-3 md:grid sm:grid-cols-3 gap-3 text-sm text-gray-700">
      <div>Trusted since <b>2005</b></div>
      <div>Fully <b>insured</b> • Dust control</div>
      <div><b>3-year</b> warranty</div>
    </div></div>);
}
