'use client';
import { CONTACT } from "@/app/config";
export default function StickyCTA(){
  return(<div id="sticky-cta" className="fixed inset-x-0 bottom-4 z-40 px-4 md:hidden">
    <div className="flex gap-3">
      <a href={CONTACT.phoneHref} className="btn-cta w-1/2 text-center">📞 Call</a>
      <a href="/quote/" className="btn-cta w-1/2 text-center">Get Quote</a>
    </div></div>);
}