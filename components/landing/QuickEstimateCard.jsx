"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const conditions = [
  { key: "unpainted", label: "Unpainted" },
  { key: "painted", label: "Painted" },
  { key: "not-sure", label: "Not Sure" },
];

const roomRanges = {
  "1 room": [950, 1800],
  "2-3 rooms": [2400, 3800],
  "4+ rooms": [4500, 8500],
  "whole home": [6500, 12500],
};

const roomHints = {
  "1 room": "Bedroom, office, or small living room",
  "2-3 rooms": "A few bedrooms, hallway, or main living areas",
  "4+ rooms": "Main floor or multiple larger spaces",
  "whole home": "Full-home ceiling update",
};

const finishOptions = [
  { key: "paint-no", label: "No" },
  { key: "paint-yes", label: "Yes" },
  { key: "paint-not-sure", label: "Not Sure" },
];

function formatMoney(value) {
  return new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: "CAD",
    maximumFractionDigits: 0,
  }).format(value);
}

function getEstimateRange({ rooms, squareFeet, condition, height, furnished, painting }) {
  const base = squareFeet
    ? [Math.max(850, squareFeet * 4.2), Math.max(1400, squareFeet * 6.4)]
    : roomRanges[rooms];
  if (!base) return null;

  let multiplier = 1;
  if (condition === "painted") multiplier += 0.18;
  if (condition === "not-sure") multiplier += 0.08;
  if (height === "10+ ft") multiplier += 0.12;
  if (height === "vaulted or cathedral") multiplier += 0.22;
  if (furnished === "furnished") multiplier += 0.08;
  if (painting === "paint-yes") multiplier += 0.16;

  return base.map((value) => Math.round((value * multiplier) / 50) * 50);
}

function getAdjustmentLabels({ condition, height, furnished, painting }) {
  const labels = [];
  if (condition === "painted") labels.push("Painted texture");
  if (condition === "not-sure") labels.push("Condition check needed");
  if (height === "10+ ft") labels.push("10+ ft ceilings");
  if (height === "vaulted or cathedral") labels.push("Vaulted / cathedral areas");
  if (furnished === "furnished") labels.push("Furniture protection");
  if (painting === "paint-yes") labels.push("Painting included");
  return labels;
}

function track(event, payload) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...payload });
  if (typeof window.gtag === "function") {
    window.gtag("event", event, payload);
  }
}

export default function QuickEstimateCard({ city, enhanced = false }) {
  const router = useRouter();
  const [condition, setCondition] = useState("unpainted");
  const [rooms, setRooms] = useState("");
  const [squareFeet, setSquareFeet] = useState(500);
  const [height, setHeight] = useState("");
  const [furnished, setFurnished] = useState("furnished");
  const [painting, setPainting] = useState("paint-not-sure");
  const [pre1982, setPre1982] = useState(false);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState("");

  const estimateRange = enhanced
    ? getEstimateRange({ rooms, squareFeet, condition, height, furnished, painting })
    : null;
  const adjustmentLabels = enhanced
    ? getAdjustmentLabels({ condition, height, furnished, painting })
    : [];

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
    const squareFeet = (form.get("squareFeet") || "").toString();
    const furnishedStatus = (form.get("furnished") || "").toString();
    const paintingStatus = (form.get("painting") || "").toString();
    const asbestosFlag = form.get("pre1982") ? "Yes" : "No";
    const notes = (form.get("notes") || "").toString();
    const displayedEstimate = estimateRange
      ? `${formatMoney(estimateRange[0])} - ${formatMoney(estimateRange[1])}`
      : "Not shown";

    const details = [
      "Lead source: Google Ads landing page",
      "Service: Popcorn ceiling removal",
      `City landing page: ${city}`,
      `Ceiling condition: ${conditionLabel}`,
      `Rooms/size: ${rooms}`,
      `Approx. square feet: ${squareFeet || "N/A"}`,
      `Ceiling height: ${height}`,
      `Furnished/vacant: ${furnishedStatus || "N/A"}`,
      `Painting included: ${paintingStatus || "N/A"}`,
      `Built before 1982 / asbestos note: ${asbestosFlag}`,
      `Displayed rough estimate: ${displayedEstimate}`,
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
      if (
        typeof window !== "undefined" &&
        typeof window.gtag_report_conversion === "function"
      ) {
        window.gtag_report_conversion();
      }
      router.push(thankYouUrl);
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
        {enhanced ? "Get Your Price Range" : "Get your free quote!"}
      </h3>
      <p className="mt-1 text-center text-[1.1rem] font-semibold text-[#3e4a45] md:text-[1.8rem]">
        {enhanced
          ? "Free, fast, and email optional"
          : "Request Your Fast & Free Estimate"}
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
          value={rooms}
          onChange={(e) => setRooms(e.target.value)}
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
          value={height}
          onChange={(e) => setHeight(e.target.value)}
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

        {enhanced ? (
          <>
            <div className="md:col-span-2 rounded-2xl border border-[#d4ddd6] bg-white p-3">
              <div className="flex items-center justify-between gap-3">
                <label
                  htmlFor="squareFeet"
                  className="text-sm font-bold uppercase tracking-[0.08em] text-[#164b3b] md:text-base"
                >
                  Approx. ceiling area
                </label>
                <span className="rounded-full bg-[#145542] px-3 py-1 text-sm font-bold text-white">
                  {squareFeet.toLocaleString("en-CA")} sq ft
                </span>
              </div>
              <input
                id="squareFeet"
                name="squareFeet"
                type="range"
                min="100"
                max="3000"
                step="50"
                value={squareFeet}
                onChange={(e) => setSquareFeet(Number(e.target.value))}
                className="mt-3 w-full accent-[#df4b23]"
              />
              <div className="mt-1 flex justify-between text-xs font-semibold text-[#65736e]">
                <span>100</span>
                <span>800</span>
                <span>1,500</span>
                <span>3,000 sq ft</span>
              </div>
              <p className="mt-2 text-xs font-medium text-[#56655f] md:text-sm">
                {rooms ? roomHints[rooms] : "Pick rooms or slide to the rough ceiling size."}
              </p>
            </div>

            <select
              name="furnished"
              value={furnished}
              onChange={(e) => setFurnished(e.target.value)}
              className="h-11 rounded-xl border border-[#b9c3bb] bg-white px-3 text-sm text-[#1d3e34] md:h-12 md:text-[1.22rem]"
            >
              <option value="furnished">Furnished room</option>
              <option value="vacant">Vacant room</option>
            </select>

            <select
              name="painting"
              value={painting}
              onChange={(e) => setPainting(e.target.value)}
              className="h-11 rounded-xl border border-[#b9c3bb] bg-white px-3 text-sm text-[#1d3e34] md:h-12 md:text-[1.22rem]"
            >
              {finishOptions.map((item) => (
                <option key={item.key} value={item.key}>
                  Paint included? {item.label}
                </option>
              ))}
            </select>

            <label className="md:col-span-2 flex cursor-pointer gap-3 rounded-2xl border border-[#e2c580] bg-[#fff8e6] p-3 text-[#4b3511]">
              <input
                type="checkbox"
                name="pre1982"
                checked={pre1982}
                onChange={(e) => setPre1982(e.target.checked)}
                className="mt-1 h-4 w-4 accent-[#df4b23]"
              />
              <span>
                <span className="block text-sm font-bold md:text-base">
                  My home may have been built before 1982
                </span>
                <span className="mt-1 block text-xs font-medium md:text-sm">
                  Older texture can require asbestos testing before removal.
                  We can explain the next step when we review your photos.
                </span>
              </span>
            </label>

            <div className="md:col-span-2 rounded-2xl border border-[#e4b965] bg-[#fff7df] p-3 text-[#163f35]">
              <p className="text-xs font-bold uppercase tracking-[0.13em] text-[#9a5a12] md:text-sm">
                Rough Estimate
              </p>
              {estimateRange ? (
                <p className="mt-1 text-[1.65rem] font-black leading-tight md:text-[2.15rem]">
                  {formatMoney(estimateRange[0])} - {formatMoney(estimateRange[1])}
                </p>
              ) : (
                <p className="mt-1 text-base font-bold md:text-xl">
                  Choose rooms and ceiling height to see a range.
                </p>
              )}
              <p className="mt-1 text-xs font-medium text-[#5d4b23] md:text-sm">
                Final pricing depends on painted texture, ceiling height,
                patching, access, and whether painting is included.
              </p>
              <div className="mt-3 rounded-xl border border-[#ecd38d] bg-white/70 p-2">
                <p className="text-xs font-bold uppercase tracking-[0.1em] text-[#9a5a12]">
                  Price adjustments applied
                </p>
                <p className="mt-1 text-sm font-semibold text-[#31453e]">
                  {adjustmentLabels.length
                    ? adjustmentLabels.join(" · ")
                    : "Standard-height, accessible ceiling"}
                </p>
              </div>
              <p className="mt-3 rounded-xl bg-[#145542] px-3 py-2 text-sm font-semibold text-white">
                Payment options: e-transfer, credit card, and staged payments
                for larger projects. Exact scope is confirmed after photos or a
                site visit.
              </p>
            </div>
          </>
        ) : null}

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
          {sending
            ? "Sending..."
            : enhanced
              ? "Get My Popcorn Ceiling Price »"
              : "Get My Quote »"}
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
