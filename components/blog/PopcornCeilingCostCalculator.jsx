"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { PHONE_HREF, PHONE_NUMBER } from "@/app/config";

const formatCurrency = (value) =>
  new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: "CAD",
    maximumFractionDigits: 0,
  }).format(Number.isFinite(value) ? value : 0);

const pricing = {
  smallJobMinSf: 300,
  smallJobLow: 1500,
  smallJobHigh: 2600,
  unpaintedLowPerSf: 4,
  unpaintedHighPerSf: 10,
  paintedLowPerSf: 6,
  paintedHighPerSf: 15,
  hstPercent: 13,
};

const createId = () => {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
    return crypto.randomUUID();
  }
  return Math.random().toString(36).slice(2);
};

const createRoom = (name = "Room") => ({
  id: createId(),
  name,
  length: 12,
  width: 12,
  height: 8,
  painted: true,
  includeWalls: false,
  notes: "",
});

function calculateRoom(room) {
  const length = Number(room.length) || 0;
  const width = Number(room.width) || 0;
  const height = Number(room.height) || 0;
  const ceilingSf = length * width;
  const perimeter = (length + width) * 2;
  const wallSf = room.includeWalls ? perimeter * height : 0;
  const overHeight = height > 10;

  return {
    ceilingSf,
    wallSf,
    overHeight,
    pricingLabel: overHeight
      ? "10+ ft height premium"
      : room.painted
        ? "Painted ceiling range"
        : "Unpainted ceiling range",
  };
}

function getEstimateRange(rooms, includeHst) {
  const totalCeilingSf = rooms.reduce((sum, room) => {
    const length = Number(room.length) || 0;
    const width = Number(room.width) || 0;
    return sum + length * width;
  }, 0);

  if (!totalCeilingSf) {
    return {
      low: 0,
      high: 0,
      totalCeilingSf: 0,
      hasPainted: false,
      hasOver10Ft: false,
      isSmallJob: false,
    };
  }

  const hasPainted = rooms.some((room) => room.painted);
  const hasOver10Ft = rooms.some((room) => (Number(room.height) || 0) > 10);
  const isSmallJob = totalCeilingSf < pricing.smallJobMinSf;

  let low = isSmallJob
    ? pricing.smallJobLow
    : totalCeilingSf *
      (hasPainted ? pricing.paintedLowPerSf : pricing.unpaintedLowPerSf);

  let high = isSmallJob
    ? pricing.smallJobHigh
    : totalCeilingSf *
      (hasPainted ? pricing.paintedHighPerSf : pricing.unpaintedHighPerSf);

  if (hasOver10Ft) {
    low *= 3;
    high *= 3;
  }

  if (includeHst) {
    const taxMultiplier = 1 + pricing.hstPercent / 100;
    low *= taxMultiplier;
    high *= taxMultiplier;
  }

  return {
    low: Math.round(low),
    high: Math.round(high),
    totalCeilingSf,
    hasPainted,
    hasOver10Ft,
    isSmallJob,
  };
}

export default function PopcornCeilingCostCalculator() {
  const [rooms, setRooms] = useState([
    {
      ...createRoom("Living Room"),
      length: 18,
      width: 14,
    },
  ]);
  const [includeHst, setIncludeHst] = useState(true);
  const [projectNotes, setProjectNotes] = useState("");

  const results = useMemo(() => {
    const detailedRooms = rooms.map((room) => ({
      ...room,
      calculation: calculateRoom(room),
    }));

    return {
      detailedRooms,
      totalCeilingSf: detailedRooms.reduce(
        (sum, room) => sum + room.calculation.ceilingSf,
        0
      ),
      totalWallsSf: detailedRooms.reduce(
        (sum, room) => sum + room.calculation.wallSf,
        0
      ),
      estimateRange: getEstimateRange(rooms, includeHst),
    };
  }, [rooms, includeHst]);

  const updateRoom = (id, key, value) => {
    setRooms((current) =>
      current.map((room) => (room.id === id ? { ...room, [key]: value } : room))
    );
  };

  const addRoom = () => {
    setRooms((current) => [...current, createRoom(`Room ${current.length + 1}`)]);
  };

  const removeRoom = (id) => {
    setRooms((current) => current.filter((room) => room.id !== id));
  };

  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-amber-200 bg-[radial-gradient(circle_at_top_left,_rgba(255,251,235,1),_rgba(255,255,255,1)_38%,_rgba(248,250,252,1)_100%)] p-4 shadow-[0_28px_90px_-36px_rgba(15,23,42,.48)] md:p-6">
      <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-amber-400 via-orange-500 to-sky-500" />
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-orange-700">
            Featured Cost Tool
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Popcorn Ceiling Removal Cost Calculator
          </h2>
          <p className="mt-3 max-w-3xl text-base text-slate-600">
            Built for Toronto, Mississauga, Oakville, Burlington, Hamilton, Milton,
            Etobicoke, and North York homeowners who want a fast starting range before
            requesting a proper quote.
          </p>
        </div>
        <div className="rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-semibold text-orange-900">
          Wider planning ranges
        </div>
      </div>

      <div className="mt-5 grid gap-3 md:grid-cols-3">
        <div className="rounded-2xl border border-amber-200 bg-white/90 p-4 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-700">
            Starts at
          </p>
          <p className="mt-1 text-2xl font-bold text-slate-900">
            {formatCurrency(pricing.unpaintedLowPerSf)}/sf
          </p>
          <p className="mt-1 text-sm text-slate-600">Unpainted ceilings after 300 sq ft</p>
        </div>
        <div className="rounded-2xl border border-orange-200 bg-white/90 p-4 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-700">
            Up to
          </p>
          <p className="mt-1 text-2xl font-bold text-slate-900">
            {formatCurrency(pricing.paintedHighPerSf)}/sf
          </p>
          <p className="mt-1 text-sm text-slate-600">Heavier painted popcorn and repair scope</p>
        </div>
        <div className="rounded-2xl border border-sky-200 bg-white/90 p-4 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-700">
            Height rule
          </p>
          <p className="mt-1 text-2xl font-bold text-slate-900">3x labour</p>
          <p className="mt-1 text-sm text-slate-600">Applied when ceilings go above 10 ft</p>
        </div>
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-[1.45fr_.95fr]">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-slate-900">Room sizes</h3>
            <button
              type="button"
              onClick={addRoom}
              className="rounded-2xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Add room
            </button>
          </div>

          {results.detailedRooms.map((room, index) => (
            <div
              key={room.id}
              className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm"
            >
              <div className="flex items-center justify-between gap-3">
                <h4 className="text-lg font-semibold text-slate-900">
                  {room.name || `Room ${index + 1}`}
                </h4>
                {rooms.length > 1 ? (
                  <button
                    type="button"
                    onClick={() => removeRoom(room.id)}
                    className="rounded-2xl border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                  >
                    Remove
                  </button>
                ) : null}
              </div>

              <div className="mt-4 grid gap-4 md:grid-cols-4">
                <label className="space-y-2 text-sm text-slate-700">
                  <span className="font-medium">Room name</span>
                  <input
                    value={room.name}
                    onChange={(event) =>
                      updateRoom(room.id, "name", event.target.value)
                    }
                    className="w-full rounded-2xl border border-slate-300 px-3 py-2"
                  />
                </label>
                <label className="space-y-2 text-sm text-slate-700">
                  <span className="font-medium">Length (ft)</span>
                  <input
                    type="number"
                    min="0"
                    value={room.length}
                    onChange={(event) =>
                      updateRoom(room.id, "length", Number(event.target.value) || 0)
                    }
                    className="w-full rounded-2xl border border-slate-300 px-3 py-2"
                  />
                </label>
                <label className="space-y-2 text-sm text-slate-700">
                  <span className="font-medium">Width (ft)</span>
                  <input
                    type="number"
                    min="0"
                    value={room.width}
                    onChange={(event) =>
                      updateRoom(room.id, "width", Number(event.target.value) || 0)
                    }
                    className="w-full rounded-2xl border border-slate-300 px-3 py-2"
                  />
                </label>
                <label className="space-y-2 text-sm text-slate-700">
                  <span className="font-medium">Height (ft)</span>
                  <input
                    type="number"
                    min="0"
                    value={room.height}
                    onChange={(event) =>
                      updateRoom(room.id, "height", Number(event.target.value) || 0)
                    }
                    className="w-full rounded-2xl border border-slate-300 px-3 py-2"
                  />
                </label>
              </div>

              <div className="mt-4 grid gap-3 md:grid-cols-2">
                <label className="flex items-start gap-3 rounded-2xl border border-slate-200 p-4 text-sm text-slate-700">
                  <input
                    type="checkbox"
                    checked={room.painted}
                    onChange={(event) =>
                      updateRoom(room.id, "painted", event.target.checked)
                    }
                    className="mt-1 h-4 w-4"
                  />
                  <span>
                    <span className="block font-medium text-slate-900">
                      Painted popcorn
                    </span>
                    Higher labour range for painted texture and skim work.
                  </span>
                </label>

                <label className="flex items-start gap-3 rounded-2xl border border-slate-200 p-4 text-sm text-slate-700">
                  <input
                    type="checkbox"
                    checked={room.includeWalls}
                    onChange={(event) =>
                      updateRoom(room.id, "includeWalls", event.target.checked)
                    }
                    className="mt-1 h-4 w-4"
                  />
                  <span>
                    <span className="block font-medium text-slate-900">
                      Include wall repaint scope
                    </span>
                    Informational only for bundled painting discussions.
                  </span>
                </label>
              </div>

              <div className="mt-4 rounded-2xl bg-slate-50 p-4">
                <div className="grid gap-3 md:grid-cols-3">
                  <div>
                    <p className="text-xs uppercase tracking-wide text-slate-500">
                      Ceiling area
                    </p>
                    <p className="mt-1 text-lg font-semibold text-slate-900">
                      {room.calculation.ceilingSf.toFixed(0)} sf
                    </p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-slate-500">
                      Wall area
                    </p>
                    <p className="mt-1 text-lg font-semibold text-slate-900">
                      {room.calculation.wallSf.toFixed(0)} sf
                    </p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-slate-500">
                      Pricing rule
                    </p>
                    <p className="mt-1 text-lg font-semibold text-slate-900">
                      {room.calculation.pricingLabel}
                    </p>
                  </div>
                </div>
              </div>

              <label className="mt-4 block space-y-2 text-sm text-slate-700">
                <span className="font-medium">Room notes</span>
                <textarea
                  value={room.notes}
                  onChange={(event) =>
                    updateRoom(room.id, "notes", event.target.value)
                  }
                  placeholder="Optional notes about cracks, water stains, pot lights, or access."
                  className="min-h-[96px] w-full rounded-2xl border border-slate-300 px-3 py-2"
                />
              </label>
            </div>
          ))}
        </div>

        <aside className="space-y-4">
          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm xl:sticky xl:top-6">
            <h3 className="text-xl font-semibold text-slate-900">Estimate summary</h3>

            <div className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-1">
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-xs uppercase tracking-wide text-slate-500">
                  Ceiling square footage
                </p>
                <p className="mt-1 text-3xl font-semibold text-slate-900">
                  {results.totalCeilingSf.toFixed(0)} sf
                </p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-xs uppercase tracking-wide text-slate-500">
                  Walls selected
                </p>
                <p className="mt-1 text-3xl font-semibold text-slate-900">
                  {results.totalWallsSf.toFixed(0)} sf
                </p>
              </div>
            </div>

            <div className="mt-4 space-y-3 rounded-2xl border border-slate-200 p-4 text-sm text-slate-700">
              <div className="flex items-center justify-between gap-3">
                <span>Total ceiling area</span>
                <span>{results.totalCeilingSf.toFixed(0)} sf</span>
              </div>
              <div className="flex items-center justify-between gap-3">
                <span>Pricing model</span>
                <span className="text-right">
                  {results.estimateRange.isSmallJob
                    ? `Below ${pricing.smallJobMinSf} sf flat range`
                    : results.estimateRange.hasPainted
                      ? `Painted ${pricing.paintedLowPerSf}-${pricing.paintedHighPerSf}/sf`
                      : `Unpainted ${pricing.unpaintedLowPerSf}-${pricing.unpaintedHighPerSf}/sf`}
                </span>
              </div>
              <div className="flex items-center justify-between gap-3">
                <span>10+ ft ceilings</span>
                <span className="text-right">
                  {results.estimateRange.hasOver10Ft
                    ? "Triple-cost rule applied"
                    : "Standard height"}
                </span>
              </div>
              <div className="flex items-center justify-between gap-3">
                <span>HST</span>
                <span>{includeHst ? `Included (${pricing.hstPercent}%)` : "Excluded"}</span>
              </div>
              <div className="border-t border-slate-200 pt-3">
                <div className="flex items-center justify-between gap-3 text-base font-semibold text-slate-900">
                  <span>Estimated range</span>
                  <span>
                    {formatCurrency(results.estimateRange.low)} -{" "}
                    {formatCurrency(results.estimateRange.high)}
                  </span>
                </div>
                <p className="mt-2 text-xs text-slate-500">
                  Materials, repairs, lighting changes, and painting can move the final quote.
                </p>
              </div>
            </div>

            <label className="mt-4 flex items-start gap-3 rounded-2xl border border-slate-200 p-4 text-sm text-slate-700">
              <input
                type="checkbox"
                checked={includeHst}
                onChange={(event) => setIncludeHst(event.target.checked)}
                className="mt-1 h-4 w-4"
              />
              <span>
                <span className="block font-medium text-slate-900">
                  Include HST in estimate
                </span>
                Toggle this off if you want a pre-tax planning number.
              </span>
            </label>

            <div className="mt-4 rounded-2xl bg-slate-900 p-5 text-white">
              <p className="text-xs uppercase tracking-wide text-slate-300">
                Pricing rules used here
              </p>
              <p className="mt-3 text-sm text-slate-300">
                Below 300 sq ft, the calculator uses a flat labour range of
                {" "}
                {formatCurrency(pricing.smallJobLow)} to {formatCurrency(pricing.smallJobHigh)}.
                Larger jobs use {formatCurrency(pricing.unpaintedLowPerSf)}-
                {formatCurrency(pricing.unpaintedHighPerSf)} per sq ft for unpainted
                texture and {formatCurrency(pricing.paintedLowPerSf)}-
                {formatCurrency(pricing.paintedHighPerSf)} per sq ft for painted popcorn.
                Ceilings above 10 ft are priced at triple cost.
              </p>
            </div>

            <label className="mt-4 block space-y-2 text-sm text-slate-700">
              <span className="font-medium">Project notes</span>
              <textarea
                value={projectNotes}
                onChange={(event) => setProjectNotes(event.target.value)}
                placeholder="Optional project notes for your own planning."
                className="min-h-[96px] w-full rounded-2xl border border-slate-300 px-3 py-2"
              />
            </label>

            <div className="mt-4 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm text-slate-700">
              <p className="font-semibold text-slate-900">Need a proper estimate?</p>
              <p className="mt-2">
                This calculator is a planning tool only. For a written quote, send photos,
                room sizes, and ceiling heights so we can confirm condition, prep scope,
                and scheduling.
              </p>
              <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                <Link href="/quote/" className="btn-cta text-base">
                  Request a Quote
                </Link>
                <a
                  href={PHONE_HREF}
                  className="inline-flex items-center justify-center rounded-2xl border border-slate-300 px-5 py-3 font-semibold text-slate-900 transition hover:bg-white"
                >
                  Call {PHONE_NUMBER}
                </a>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
