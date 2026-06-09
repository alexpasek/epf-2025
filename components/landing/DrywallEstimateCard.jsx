"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const repairTypes = [
  { key: "small-holes", label: "Small holes" },
  { key: "large-patches", label: "Large patches" },
  { key: "ceiling", label: "Ceiling repair" },
  { key: "water-damage", label: "Water damage" },
];

const typeRanges = {
  "small-holes": [350, 850],
  "large-patches": [750, 1800],
  ceiling: [850, 2400],
  "water-damage": [950, 3200],
};

function formatMoney(value) {
  return new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: "CAD",
    maximumFractionDigits: 0,
  }).format(value);
}

function getEstimate({ repairType, patches, paint, texture, urgent }) {
  const base = typeRanges[repairType];
  if (!base) return null;

  let multiplier = 1 + Math.max(0, patches - 1) * 0.22;
  if (paint === "paint-yes") multiplier += 0.18;
  if (texture === "texture-match") multiplier += 0.12;
  if (urgent === "same-day") multiplier += 0.1;

  return base.map((value) => Math.round((value * multiplier) / 25) * 25);
}

function track(event, payload) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...payload });
  if (typeof window.gtag === "function") {
    window.gtag("event", event, payload);
  }
}

function readFileAsBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = String(reader.result || "");
      resolve(result.split(",")[1] || "");
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

export default function DrywallEstimateCard() {
  const router = useRouter();
  const [repairType, setRepairType] = useState("small-holes");
  const [patches, setPatches] = useState(1);
  const [paint, setPaint] = useState("paint-not-sure");
  const [texture, setTexture] = useState("smooth");
  const [urgent, setUrgent] = useState("flexible");
  const [moisture, setMoisture] = useState(false);
  const [photoNames, setPhotoNames] = useState([]);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState("");

  const estimate = getEstimate({ repairType, patches, paint, texture, urgent });
  const repairLabel =
    repairTypes.find((item) => item.key === repairType)?.label || repairType;

  async function onSubmit(e) {
    e.preventDefault();
    setStatus("");
    setSending(true);

    const form = new FormData(e.currentTarget);
    const name = (form.get("name") || "").toString();
    const phone = (form.get("phone") || "").toString();
    const email = (form.get("email") || "").toString();
    const notes = (form.get("notes") || "").toString();
    const photoFiles = form
      .getAll("photos")
      .filter((file) => file && file.name && file.size);
    const oversizedPhoto = photoFiles.find((file) => file.size > 4 * 1024 * 1024);
    if (oversizedPhoto) {
      setStatus("Please keep each photo under 4 MB, or text larger photos to us.");
      setSending(false);
      return;
    }
    const displayedEstimate = estimate
      ? `${formatMoney(estimate[0])} - ${formatMoney(estimate[1])}`
      : "Not shown";
    const attachments = await Promise.all(
      photoFiles.slice(0, 3).map(async (file) => ({
        filename: file.name,
        content: await readFileAsBase64(file),
      }))
    );

    const details = [
      "Lead source: Google Ads landing page",
      "Service: Drywall repair",
      `Repair type: ${repairLabel}`,
      `Patch count: ${patches}`,
      `Paint included: ${paint}`,
      `Texture/finish: ${texture}`,
      `Timeline: ${urgent}`,
      `Active moisture/leak concern: ${moisture ? "Yes" : "No"}`,
      `Displayed rough estimate: ${displayedEstimate}`,
      `Photos attached: ${attachments.length}`,
      `Notes: ${notes || "N/A"}`,
    ].join("\n");

    try {
      const response = await fetch("/api/sendmail/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, details, attachments }),
      });

      if (!response.ok) {
        const text = await response.text();
        setStatus(text || "Failed to send. Please call us directly.");
        return;
      }

      track("ads_form_submit", {
        city: "GTA & Nearby Areas",
        service: "drywall-repair",
        location: "landing-page",
      });

      if (
        typeof window !== "undefined" &&
        typeof window.gtag_report_conversion === "function"
      ) {
        window.gtag_report_conversion();
      }
      router.push("/thank-you/?source=google-ads&service=drywall-repair");
    } catch {
      setStatus("Network issue. Please call us now and we can quote by phone.");
    } finally {
      setSending(false);
    }
  }

  return (
    <div
      id="quick-quote"
      className="rounded-[22px] border border-sky-200 bg-white p-4 shadow-[0_24px_50px_-30px_rgba(15,73,120,.55)] md:p-6"
    >
      <h2 className="text-center text-3xl font-black uppercase leading-none text-sky-950 md:text-[2.45rem]">
        Get Your Repair Range
      </h2>
      <p className="mt-1 text-center text-lg font-bold text-slate-600 md:text-2xl">
        Free, fast, and email optional
      </p>

      <form onSubmit={onSubmit} className="mt-4 grid gap-3 md:grid-cols-2">
        <fieldset
          className="md:col-span-2 grid grid-cols-2 gap-2"
          aria-label="Repair type"
        >
          {repairTypes.map((item) => {
            const active = repairType === item.key;
            return (
              <label
                key={item.key}
                className={[
                  "cursor-pointer rounded-2xl border px-3 py-3 text-center text-sm font-black uppercase transition md:text-base",
                  active
                    ? "border-sky-700 bg-sky-700 text-white"
                    : "border-sky-200 bg-sky-50 text-sky-950 hover:border-orange-400",
                ].join(" ")}
              >
                <input
                  type="radio"
                  name="repairType"
                  value={item.key}
                  checked={active}
                  onChange={() => setRepairType(item.key)}
                  className="sr-only"
                />
                {item.label}
              </label>
            );
          })}
        </fieldset>

        <div className="md:col-span-2 rounded-2xl border border-sky-200 bg-sky-50 p-3">
          <div className="flex items-center justify-between gap-3">
            <label
              htmlFor="patches"
              className="text-sm font-black uppercase tracking-[0.08em] text-sky-950"
            >
              Number of damaged areas
            </label>
            <span className="rounded-full bg-orange-500 px-3 py-1 text-sm font-black text-white">
              {patches}
            </span>
          </div>
          <input
            id="patches"
            name="patches"
            type="range"
            min="1"
            max="8"
            value={patches}
            onChange={(e) => setPatches(Number(e.target.value))}
            className="mt-3 w-full accent-orange-500"
          />
          <div className="mt-1 flex justify-between text-xs font-bold text-slate-500">
            <span>1</span>
            <span>3</span>
            <span>5</span>
            <span>8+</span>
          </div>
        </div>

        <select
          name="paint"
          value={paint}
          onChange={(e) => setPaint(e.target.value)}
          className="h-12 rounded-2xl border border-sky-200 bg-white px-3 text-slate-700 md:text-lg"
        >
          <option value="paint-not-sure">Paint included? Not sure</option>
          <option value="paint-no">Patch only</option>
          <option value="paint-yes">Patch + paint blend</option>
        </select>

        <select
          name="texture"
          value={texture}
          onChange={(e) => setTexture(e.target.value)}
          className="h-12 rounded-2xl border border-sky-200 bg-white px-3 text-slate-700 md:text-lg"
        >
          <option value="smooth">Smooth drywall finish</option>
          <option value="texture-match">Texture / ceiling match needed</option>
        </select>

        <select
          name="urgent"
          value={urgent}
          onChange={(e) => setUrgent(e.target.value)}
          className="md:col-span-2 h-12 rounded-2xl border border-sky-200 bg-white px-3 text-slate-700 md:text-lg"
        >
          <option value="flexible">Flexible timing</option>
          <option value="same-day">Need fast / same-day response</option>
        </select>

        <label className="md:col-span-2 flex cursor-pointer gap-3 rounded-2xl border border-orange-200 bg-orange-50 p-3 text-slate-700">
          <input
            type="checkbox"
            name="moisture"
            checked={moisture}
            onChange={(e) => setMoisture(e.target.checked)}
            className="mt-1 h-4 w-4 accent-orange-500"
          />
          <span>
            <span className="block font-black text-sky-950">
              There may still be moisture or an active leak
            </span>
            <span className="mt-1 block text-sm font-semibold">
              If water damage is active, the source should be fixed before
              drywall is closed and finished.
            </span>
          </span>
        </label>

        <div className="md:col-span-2 rounded-2xl border border-orange-200 bg-orange-50 p-4">
          <p className="text-sm font-black uppercase tracking-[0.12em] text-orange-700">
            Rough Estimate
          </p>
          <p className="mt-1 text-[2rem] font-black leading-tight text-sky-950 md:text-[2.45rem]">
            {formatMoney(estimate[0])} - {formatMoney(estimate[1])}
          </p>
          <p className="mt-2 text-sm font-bold text-slate-700">
            Final price depends on patch size, backing/framing, ceiling access,
            texture, dry time, primer, and whether paint blending is included.
          </p>
        </div>

        <input
          name="name"
          required
          placeholder="Your Name"
          className="h-12 rounded-2xl border border-sky-200 bg-white px-3 text-slate-700 placeholder:text-slate-500 md:text-lg"
        />
        <input
          name="phone"
          required
          placeholder="Phone Number"
          className="h-12 rounded-2xl border border-sky-200 bg-white px-3 text-slate-700 placeholder:text-slate-500 md:text-lg"
        />
        <input
          type="email"
          name="email"
          placeholder="Email (Optional)"
          className="md:col-span-2 h-12 rounded-2xl border border-sky-200 bg-white px-3 text-slate-700 placeholder:text-slate-500 md:text-lg"
        />
        <textarea
          name="notes"
          rows={2}
          placeholder="Tell us what happened or what room it is in"
          className="md:col-span-2 rounded-2xl border border-sky-200 bg-white px-3 py-2 text-slate-700 placeholder:text-slate-500 md:text-lg"
        />
        <label className="md:col-span-2 rounded-2xl border-2 border-dashed border-sky-300 bg-sky-50 p-4 text-center">
          <span className="block text-lg font-black text-sky-950">
            Upload repair photos
          </span>
          <span className="mt-1 block text-sm font-semibold text-slate-600">
            Add up to 3 photos, 4 MB each. Wide shots and close-ups help us
            price the repair faster.
          </span>
          <input
            type="file"
            name="photos"
            accept="image/*"
            multiple
            onChange={(e) => {
              const files = Array.from(e.target.files || []).slice(0, 3);
              setPhotoNames(files.map((file) => file.name));
            }}
            className="mt-3 block w-full cursor-pointer rounded-xl border border-sky-200 bg-white text-sm text-slate-700 file:mr-3 file:border-0 file:bg-orange-500 file:px-4 file:py-2 file:font-black file:text-white"
          />
          {photoNames.length ? (
            <span className="mt-2 block text-sm font-bold text-sky-800">
              Selected: {photoNames.join(", ")}
            </span>
          ) : null}
        </label>
        <button
          type="submit"
          disabled={sending}
          className="md:col-span-2 rounded-2xl bg-gradient-to-b from-orange-500 to-orange-600 px-4 py-4 text-2xl font-black uppercase tracking-wide text-white shadow-lg transition hover:from-orange-400 hover:to-orange-600 disabled:opacity-70 md:text-[2.1rem]"
        >
          {sending ? "Sending..." : "Get My Drywall Repair Price »"}
        </button>
        <p className="md:col-span-2 text-center text-xs font-semibold text-slate-500">
          By submitting, you agree to our{" "}
          <a href="/privacy-policy/" className="text-sky-800 underline">
            Privacy Policy
          </a>{" "}
          and{" "}
          <a href="/terms-of-service/" className="text-sky-800 underline">
            Terms of Service
          </a>
          .
        </p>
      </form>

      {status ? <p className="mt-3 text-sm text-orange-700">{status}</p> : null}
    </div>
  );
}
