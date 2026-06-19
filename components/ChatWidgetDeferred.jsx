"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { isAdsLandingPath } from "@/lib/isAdsLandingPath";

const ChatWidgetAgent = dynamic(() => import("./ChatWidgetAgent"), {
  loading: () => null,
});

export default function ChatWidgetDeferred() {
  const pathname = usePathname();
  const isLanding = isAdsLandingPath(pathname || "");

  const [ready, setReady] = useState(false);
  const [openOnMount, setOpenOnMount] = useState(false);

  useEffect(() => {
    if (isLanding) return;
    if (ready) return;
    let idleId;
    if (typeof window !== "undefined" && "requestIdleCallback" in window) {
      idleId = window.requestIdleCallback(() => setReady(true), {
        timeout: 3000,
      });
      return () => window.cancelIdleCallback(idleId);
    }
    const t = setTimeout(() => setReady(true), 2000);
    return () => clearTimeout(t);
  }, [ready, isLanding]);

  if (isLanding) {
    return null;
  }

  if (!ready) {
    return (
      <button
        aria-label="Open chat"
        onClick={() => {
          setOpenOnMount(true);
          setReady(true);
        }}
        className="fixed z-[9998] right-4 md:right-6 h-16 w-16 rounded-full bg-gradient-to-b from-blue-500 to-blue-700 text-white shadow-2xl border border-white/20 grid place-items-center active:scale-[0.98] focus:outline-none"
        style={{ bottom: "24px" }}
      >
        <span className="absolute inline-flex h-16 w-16 rounded-full bg-blue-500/40 animate-ping"></span>
        <svg viewBox="0 0 24 24" className="relative h-7 w-7 fill-current drop-shadow">
          <path d="M20 2H4a2 2 0 0 0-2 2v17l4-4h14a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z" />
        </svg>
      </button>
    );
  }

  return <ChatWidgetAgent defaultOpen={openOnMount} />;
}
