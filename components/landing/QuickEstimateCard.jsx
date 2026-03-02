"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const conditions = [
  { key: "unpainted", label: "Unpainted" },
  { key: "painted", label: "Painted" },
  { key: "not-sure", label: "Not Sure" },
];

function track(event, payload) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...payload });
  if (typeof window.gtag === "function") {
    window.gtag("event", event, payload);
  }
}

export default function QuickEstimateCard({ city }) {
  const router = useRouter();
  const [condition, setCondition] = useState("unpainted");
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    setStatus("");
    setSending(true);

    const form = new FormData(e.currentTarget);
    const name = (form.get("name") || "").toString();
    const phone = (form.get("phone") || "").toString();
    const email = (form.get("email") || "").toString();
    const selectedCondition = (form.get("condition") || condition).toString();
    const conditionLabel =
      conditions.find((item) => item.key === selectedCondition)?.label || selectedCondition;
    const rooms = (form.get("rooms") || "").toString();
    const height = (form.get("height") || "").toString();
    const notes = (form.get("notes") || "").toString();

    const details = [
      "Lead source: Google Ads landing page",
      "Service: Popcorn ceiling removal",
      `City landing page: ${city}`,
      `Ceiling condition: ${conditionLabel}`,
      `Rooms/size: ${rooms}`,
      `Ceiling height: ${height}`,
      `Notes: ${notes || "N/A"}`,
    ].join("\n");

    try {
      const response = await fetch("/api/sendmail/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          details,
        }),
      });

      if (!response.ok) {
        const text = await response.text();
        setStatus(text || "Failed to send. Please call us directly.");
        return;
      }

      track("ads_form_submit", {
        city,
        service: "popcorn-ceiling-removal",
        location: "landing-page",
      });

      const thankYouUrl = `/thank-you/?source=google-ads&city=${encodeURIComponent(city)}`;
      if (typeof window !== "undefined" && typeof window.gtag_report_conversion === "function") {
        window.gtag_report_conversion(thankYouUrl);
      } else {
        router.push(thankYouUrl);
      }
    } catch {
      setStatus("Network issue. Please call us now and we can quote by phone.");
    } finally {
      setSending(false);
    }
  }

  return (
    <div
      id="quick-quote"
      className="rounded-[18px] border border-[#b6c1b9] bg-[#f5f5f3] p-4 shadow-[0_18px_28px_-18px_rgba(0,0,0,.62)] md:min-h-[37rem] md:p-6"
    >
      <h3
        className="text-center text-[1.65rem] font-bold uppercase leading-none text-[#124d3b] md:text-[2.3rem]"
        style={{
          fontFamily:
            '"Arial Narrow Bold", "Franklin Gothic Medium", Impact, sans-serif',
        }}
      >
        Get your free quote!
      </h3>
      <p className="mt-1 text-center text-[1.1rem] font-semibold text-[#3e4a45] md:text-[1.8rem]">
        Request Your Fast &amp; Free Estimate
      </p>

      <form onSubmit={onSubmit} className="mt-4 grid grid-cols-1 gap-2.5 md:grid-cols-2 md:gap-3">
        <fieldset
          className="md:col-span-2 grid grid-cols-3 overflow-hidden rounded-full border border-[#c4ccc6] bg-[#ebefec]"
          aria-label="Ceiling condition"
        >
          {conditions.map((item) => {
            const active = condition === item.key;
            return (
              <label
                key={item.key}
                className={[
                  "cursor-pointer px-1 py-2 text-center font-bold leading-tight transition sm:px-2 sm:py-2.5 md:py-3",
                  "text-[0.76rem] sm:text-sm md:text-[1.18rem] lg:text-[1.3rem]",
                  active
                    ? "bg-[#145542] text-white shadow-inner"
                    : "text-[#2f5247] hover:bg-[#e0e8e2]",
                ].join(" ")}
              >
                <input
                  type="radio"
                  name="condition"
                  value={item.key}
                  checked={active}
                  onChange={() => setCondition(item.key)}
                  className="sr-only"
                />
                <span className="block whitespace-nowrap">{item.label}</span>
              </label>
            );
          })}
        </fieldset>
        <p className="md:col-span-2 -mt-0.5 text-xs font-semibold uppercase tracking-[0.08em] text-[#2e5a4d] md:text-sm">
          Selected:{" "}
          {conditions.find((item) => item.key === condition)?.label || "Unpainted"}
        </p>

        <select
          name="rooms"
          required
          defaultValue=""
          className="h-11 rounded-xl border border-[#b9c3bb] bg-white px-3 text-sm text-[#1d3e34] md:h-12 md:text-[1.22rem]"
        >
          <option value="" disabled>
            Number of Rooms
          </option>
          <option value="1 room">1 room</option>
          <option value="2-3 rooms">2-3 rooms</option>
          <option value="4+ rooms">4+ rooms</option>
          <option value="whole home">Whole home</option>
        </select>

        <select
          name="height"
          required
          defaultValue=""
          className="h-11 rounded-xl border border-[#b9c3bb] bg-white px-3 text-sm text-[#1d3e34] md:h-12 md:text-[1.22rem]"
        >
          <option value="" disabled>
            Ceiling Height
          </option>
          <option value="standard 8-9 ft">Standard (8-9 ft)</option>
          <option value="10+ ft">10+ ft</option>
          <option value="vaulted or cathedral">Vaulted / cathedral</option>
          <option value="not sure">Not sure</option>
        </select>

        <input
          name="name"
          required
          placeholder="Your Name"
          className="h-11 rounded-xl border border-[#b9c3bb] bg-white px-3 text-sm text-[#1d3e34] placeholder:text-[#6e7c75] md:h-12 md:text-[1.22rem]"
        />
        <input
          name="phone"
          required
          placeholder="Phone Number"
          className="h-11 rounded-xl border border-[#b9c3bb] bg-white px-3 text-sm text-[#1d3e34] placeholder:text-[#6e7c75] md:h-12 md:text-[1.22rem]"
        />
        <input
          type="email"
          name="email"
          placeholder="Email (Optional)"
          className="h-11 rounded-xl border border-[#b9c3bb] bg-white px-3 text-sm text-[#1d3e34] placeholder:text-[#6e7c75] md:col-span-2 md:h-12 md:text-[1.22rem]"
        />
        <textarea
          name="notes"
          rows={2}
          placeholder="Any Notes (Optional)"
          className="rounded-xl border border-[#b9c3bb] bg-white px-3 py-2 text-sm text-[#1d3e34] placeholder:text-[#6e7c75] md:col-span-2 md:min-h-[5rem] md:text-[1.22rem]"
        />

        <button
          type="submit"
          disabled={sending}
          className="md:col-span-2 rounded-xl bg-gradient-to-b from-[#f26537] to-[#df4b23] px-4 py-3 text-[1.3rem] font-bold uppercase tracking-wide text-white shadow-md transition hover:from-[#f4784f] hover:to-[#d74520] disabled:opacity-70 md:mt-1 md:text-[2.15rem]"
        >
          {sending ? "Sending..." : "Get My Quote »"}
        </button>
        <p className="md:col-span-2 text-center text-xs text-[#4f615b] md:text-sm">
          By submitting, you agree to our{" "}
          <a href="/privacy-policy/" className="font-semibold text-[#0f4f3a] underline">
            Privacy Policy
          </a>{" "}
          and{" "}
          <a href="/terms-of-service/" className="font-semibold text-[#0f4f3a] underline">
            Terms of Service
          </a>
          .
        </p>
      </form>

      {status ? <p className="mt-3 text-sm text-[#9b3520]">{status}</p> : null}
    </div>
  );
}
