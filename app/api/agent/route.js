// /app/api/agent/route.js
import { NextResponse } from "next/server";
import {
  recordMessage,
  cancelFuture,
  scheduleFollowups,
  setContact,
} from "@/lib/chatStore";

export const runtime = "edge"; // Cloudflare: "edge"; local: "nodejs" if needed

// Model
var MODEL =
  process.env.OPENAI_MODEL ||
  process.env.NEXT_PUBLIC_OPENAI_MODEL ||
  "gpt-5-mini";
var DEBUG = process.env.NEXT_PUBLIC_DEBUG_AGENT === "1";

/** =========================
 *  GLOBAL MINIMUM POLICY
 *  ======================= */
const MIN_SF_THRESHOLD = 300; // floor sqft threshold
const MIN_CHARGE = 1400; // labour-only minimum for small jobs

/** =========================================================
 *  OPTIONAL "ONLINE AVERAGES" (no API keys; 3s timeout; 12h cache)
 *  Set env MARKET_AVG_JSON to a JSON file with:
 *  {
 *    "painting_floor_sqft": {"low":2.5,"high":4.5},
 *    "wallpaper_wall_sqft": {"low":2.0,"high":4.0},
 *    "drywall_total_sqft":  {"low":3.0,"high":6.0}
 *  }
 *  Falls back to DEFAULT_AVG if unreachable/invalid.
 *  ======================================================= */
const DEFAULT_AVG = {
  painting_floor_sqft: { low: 2.5, high: 4.5 },
  wallpaper_wall_sqft: { low: 2.0, high: 4.0 },
  drywall_total_sqft: { low: 3.0, high: 6.0 },
};
const AVERAGES_URL = process.env.MARKET_AVG_JSON || "";

function pick(obj, key, def) {
  if (!obj) return def;
  return Object.prototype.hasOwnProperty.call(obj, key) ? obj[key] : def;
}

function validRange(x) {
  return (
    x &&
    typeof x.low === "number" &&
    typeof x.high === "number" &&
    x.high >= x.low
  );
}
let MARKET_CACHE = { ts: 0, data: null };
const CACHE_TTL_MS = 12 * 60 * 60 * 1000;

async function fetchOnlineAverages() {
  const now = Date.now();
  if (MARKET_CACHE.data && now - MARKET_CACHE.ts < CACHE_TTL_MS) {
    return { ok: true, source: "cache", result: MARKET_CACHE.data };
  }
  if (!AVERAGES_URL) {
    MARKET_CACHE = { ts: now, data: DEFAULT_AVG };
    return { ok: true, source: "fallback", result: DEFAULT_AVG };
  }
  try {
    const ctrl = new AbortController();
    const t = setTimeout(() => ctrl.abort(), 3000);
    const r = await fetch(AVERAGES_URL, {
      signal: ctrl.signal,
      cache: "no-store",
      cf: { cacheTtl: 0 },
    });
    clearTimeout(t);
    if (!r.ok) {
      MARKET_CACHE = { ts: now, data: DEFAULT_AVG };
      return { ok: true, source: "fallback", result: DEFAULT_AVG };
    }
    const data = await r.json();
    const out = {
      painting_floor_sqft: pick(
        data,
        "painting_floor_sqft",
        DEFAULT_AVG.painting_floor_sqft
      ),
      wallpaper_wall_sqft: pick(
        data,
        "wallpaper_wall_sqft",
        DEFAULT_AVG.wallpaper_wall_sqft
      ),
      drywall_total_sqft: pick(
        data,
        "drywall_total_sqft",
        DEFAULT_AVG.drywall_total_sqft
      ),
    };
    if (
      !validRange(out.painting_floor_sqft) ||
      !validRange(out.wallpaper_wall_sqft) ||
      !validRange(out.drywall_total_sqft)
    ) {
      MARKET_CACHE = { ts: now, data: DEFAULT_AVG };
      return { ok: true, source: "fallback", result: DEFAULT_AVG };
    }
    MARKET_CACHE = { ts: now, data: out };
    return { ok: true, source: "online", result: out };
  } catch {
    MARKET_CACHE = { ts: now, data: DEFAULT_AVG };
    return { ok: true, source: "fallback", result: DEFAULT_AVG };
  }
}

/** =========================================================
 *  SALES SYSTEM PROMPT (updated with Minimum Charge policy)
 *  ======================================================= */
var SALES_SYSTEM =
  "ROLE & SERVICES:\n" +
  "You are the Popcorn Ceiling Removal Pro AI sales agent for POPCORN CEILING REMOVAL, DRYWALL (board + tape/finish), INTERIOR PAINTING (walls/ceilings/trim on request), and WALLPAPER REMOVAL.\n\n" +
  "TONE & STYLE:\n" +
  "- Polite, concise, confident, never pushy. Human and warm.\n" +
  "- One short paragraph or a few bullets per message (max ~6 lines).\n" +
  "- Ask ONE question at a time. Acknowledge what the user already said.\n" +
  "- Mirror the user's service/location words; avoid naming cities unless the user does.\n" +
  "- Use emojis sparingly (e.g., 📞 for call, ✅ for confirmation).\n\n" +
  "GUARDRAILS:\n" +
  "- Provide labour-only ballparks (materials & HST extra). NEVER a final quote.\n" +
  "- Do not invent availability; when asked, use the checkAvailability tool's text.\n" +
  "- Ask consent before emailing details; only say 'sent' after sendLead succeeds.\n" +
  "- Prefer phone over email for contact. If they dislike phone, offer /quote/.\n\n" +
  "DISCOVERY (SEQUENTIAL):\n" +
  "1) Service? (popcorn / drywall / painting / wallpaper)\n" +
  "2) City / neighbourhood?\n" +
  "3) Rooms/areas and approx FLOOR sqft (or rough sizes)?\n" +
  "4) Timeline window (e.g., 'next 1–2 weeks')?\n" +
  "5) Service details (popcorn: painted? height? repairs/pot-lights?) …\n\n" +
  "PRICING POLICY (LABOUR-ONLY; NOT A QUOTE):\n" +
  "- **Minimum charge**: If FLOOR sqft < " +
  MIN_SF_THRESHOLD +
  ", price per sqft is not economical. Use a **per-job minimum** of **$" +
  MIN_CHARGE +
  "** labour. State this clearly and explain why.\n" +
  "- **Popcorn**: If FLOOR sqft ≥ 300, normal height (≤10 ft), no heavy repairs → give per-sqft. If small/tall/complex → per-job (typical unpainted ~$1,400–$2,200; painted/tall ~$1,800–$2,400+).\n" +
  "- **Standard guides when per-sqft applies**:\n" +
  "  • Popcorn: unpainted ~$5.5–$7.5/sqft; painted/heavy/tall ~$7.5–$9.5+/sqft.\n" +
  "  • Drywall (board+tape to paint-ready): ~$3.5–$5.5/sqft (scope/height affect).\n" +
  "  • Interior painting (typical walls): ~$1.2–$2.2 per FLOOR sqft.\n" +
  "  • Wallpaper removal (+ skim/prime): wall proxy ≈ 2.7× floor sqft; ~$0.9–$1.6 per WALL sqft.\n" +
  "Always repeat: 'These are labour-only ballparks. Materials & HST are extra.'\n\n" +
  "AVERAGE COST QUESTIONS:\n" +
  "- If user asks 'average cost/price':\n" +
  "  1) Ask ONE clarifying Q first (service? approx floor sqft?).\n" +
  "  2) Then call getOnlineAverages and present 'current online averages (CAD)'.\n" +
  "  3) Do NOT name cities unless user did.\n" +
  "  4) If minimum applies, lead with the minimum (do not show tiny per-sqft math).\n\n" +
  "QUOTE LINKS & OUTPUT RULES:\n" +
  "- Use createQuoteLink to prefill /quote/ when you have name/phone/city/details.\n" +
  "- When presenting a quote link, output ONLY the raw `/quote/?...` on its own line (no extra words/markdown). The UI will render it.\n" +
  "- Before sendLead, ask explicit consent; only confirm after tool success.\n" +
  "- If details are missing, ask the highest-impact next question.\n";

/** Tools spec */
function toolsSpec() {
  return [
    {
      type: "function",
      function: {
        name: "getPricingEstimate",
        description:
          "Labour-only ballpark for a service. service: 'popcorn' | 'drywall' | 'painting' | 'wallpaper'. Input sqft is FLOOR sqft; function handles wall area proxies internally for painting/wallpaper. Enforces global minimum for small areas.",
        parameters: {
          type: "object",
          properties: {
            service: {
              type: "string",
              enum: ["popcorn", "drywall", "painting", "wallpaper"],
            },
            sqft: { type: "number" },
            painted: { type: "boolean", description: "Only for popcorn." },
            repairs: {
              type: "string",
              enum: ["none", "light", "moderate", "heavy"],
              default: "none",
            },
            ceilingHeightFt: { type: "number", default: 8 },
            rooms: { type: "number", default: 1 },
            city: { type: "string", default: "" },
          },
          required: ["service", "sqft"],
        },
      },
    },
    {
      type: "function",
      function: {
        name: "getOnlineAverages",
        description:
          "Fetch current online averages (CAD) from MARKET_AVG_JSON if set (3s timeout, 12h cache). Otherwise fallback constants. painting: per FLOOR s/f; wallpaper: per WALL s/f; drywall: total s/f.",
        parameters: { type: "object", properties: {} },
      },
    },
    {
      type: "function",
      function: {
        name: "createQuoteLink",
        description:
          "Return a /quote/ link prefilled with qs params + current path/utm if provided.",
        parameters: {
          type: "object",
          properties: {
            name: { type: "string" },
            phone: { type: "string" },
            email: { type: "string" },
            city: { type: "string" },
            details: { type: "string" },
            sourcePath: { type: "string" },
            utm: { type: "string" },
          },
        },
      },
    },
    {
      type: "function",
      function: {
        name: "sendLead",
        description:
          "Email lead to team via internal /api/sendmail/. Use ONLY with user consent.",
        parameters: {
          type: "object",
          properties: {
            sessionId: { type: "string" },
            name: { type: "string" },
            phone: { type: "string" },
            email: { type: "string" },
            city: { type: "string" },
            details: { type: "string" },
            sourcePath: { type: "string" },
            utm: { type: "string" },
          },
          required: ["sessionId", "details"],
        },
      },
    },
    {
      type: "function",
      function: {
        name: "checkAvailability",
        description: "Return availability blurb for next 2–3 weeks (static).",
        parameters: { type: "object", properties: {} },
      },
    },
  ];
}

/** Labour-only estimator with GLOBAL MINIMUM enforcement */
function estimateByService(input) {
  var service = pick(input, "service", "popcorn");
  var sqft = Number(pick(input, "sqft", 0));
  var painted = !!pick(input, "painted", false);
  var repairs = pick(input, "repairs", "none");
  var ceilingHeightFt = Number(pick(input, "ceilingHeightFt", 8));

  if (sqft <= 0) return { ok: false, error: "sqft must be > 0" };

  var result = {
    labourLow: 0,
    labourHigh: 0,
    rateLow: 0,
    rateHigh: 0,
    days: 2,
    minApplied: false,
    note: "Labour-only ballpark. Materials & HST extra.",
  };

  // --- POPCORN ---
  if (service === "popcorn") {
    var low = painted ? 7.5 : 5.5;
    var high = painted ? 9.5 : 7.5;
    var bumpMap = { none: 0, light: 0.5, moderate: 1.0, heavy: 2.0 };
    var bump = pick(bumpMap, repairs, 0);
    low += bump;
    high += bump;
    if (ceilingHeightFt >= 9 && ceilingHeightFt < 11) {
      low += 0.5;
      high += 0.75;
    } else if (ceilingHeightFt >= 11) {
      low += 1.0;
      high += 1.5;
    }

    result.rateLow = low;
    result.rateHigh = high;
    result.labourLow = Math.round(low * sqft);
    result.labourHigh = Math.round(high * sqft);
    result.days = sqft > 1100 ? 4 : sqft > 700 ? 3 : 2;

    // GLOBAL MINIMUM for small areas
    if (sqft < MIN_SF_THRESHOLD) {
      result.minApplied = true;
      result.labourLow = Math.max(result.labourLow, MIN_CHARGE);
      result.labourHigh = Math.max(result.labourHigh, result.labourLow);
      result.note += ` Minimum charge $${MIN_CHARGE.toLocaleString()} applies for areas under ${MIN_SF_THRESHOLD} sqft (priced per job).`;
    }
    return { ok: true, result: result };
  }

  // --- DRYWALL ---
  if (service === "drywall") {
    var dLow = 3.5,
      dHigh = 5.5;
    if (ceilingHeightFt >= 9 && ceilingHeightFt < 11) {
      dLow += 0.3;
      dHigh += 0.5;
    } else if (ceilingHeightFt >= 11) {
      dLow += 0.6;
      dHigh += 0.9;
    }
    var dBumpMap = { none: 0, light: 0.2, moderate: 0.5, heavy: 1.0 };
    var dBump = pick(dBumpMap, repairs, 0);
    dLow += dBump;
    dHigh += dBump;
    result.rateLow = dLow;
    result.rateHigh = dHigh;
    result.labourLow = Math.round(dLow * sqft);
    result.labourHigh = Math.round(dHigh * sqft);
    result.days = sqft > 1200 ? 5 : sqft > 800 ? 4 : 3;

    if (sqft < MIN_SF_THRESHOLD) {
      result.minApplied = true;
      result.labourLow = Math.max(result.labourLow, MIN_CHARGE);
      result.labourHigh = Math.max(result.labourHigh, result.labourLow);
      result.note += ` Minimum charge $${MIN_CHARGE.toLocaleString()} applies for areas under ${MIN_SF_THRESHOLD} sqft (priced per job).`;
    }
    return { ok: true, result: result };
  }

  // --- PAINTING (walls) ---
  if (service === "painting") {
    var pLowRate = 1.2,
      pHighRate = 2.2;
    var pBumpMap = { none: 0, light: 0.2, moderate: 0.5, heavy: 0.9 };
    var pBump = pick(pBumpMap, repairs, 0);
    pLowRate += pBump;
    pHighRate += pBump;
    result.rateLow = pLowRate;
    result.rateHigh = pHighRate;
    result.labourLow = Math.round(pLowRate * sqft);
    result.labourHigh = Math.round(pHighRate * sqft);
    result.days = sqft > 1400 ? 4 : sqft > 800 ? 3 : 2;

    if (sqft < MIN_SF_THRESHOLD) {
      result.minApplied = true;
      result.labourLow = Math.max(result.labourLow, MIN_CHARGE);
      result.labourHigh = Math.max(result.labourHigh, result.labourLow);
      result.note += ` Minimum charge $${MIN_CHARGE.toLocaleString()} applies for areas under ${MIN_SF_THRESHOLD} sqft (priced per job).`;
    }
    return { ok: true, result: result };
  }

  // --- WALLPAPER REMOVAL ---
  if (service === "wallpaper") {
    var wallSqft = Math.round(sqft * 2.7);
    var wLowPerWall = 0.9,
      wHighPerWall = 1.6;
    var wBumpMap = { none: 0, light: 0.1, moderate: 0.3, heavy: 0.6 };
    var wBump = pick(wBumpMap, repairs, 0);
    wLowPerWall += wBump;
    wHighPerWall += wBump;
    result.rateLow = wLowPerWall;
    result.rateHigh = wHighPerWall;
    result.labourLow = Math.round(wLowPerWall * wallSqft);
    result.labourHigh = Math.round(wHighPerWall * wallSqft);
    result.days = wallSqft > 3000 ? 4 : wallSqft > 1800 ? 3 : 2;
    result.note += " Uses wall-area proxy ≈ 2.7× floor sqft.";

    if (sqft < MIN_SF_THRESHOLD) {
      result.minApplied = true;
      result.labourLow = Math.max(result.labourLow, MIN_CHARGE);
      result.labourHigh = Math.max(result.labourHigh, result.labourLow);
      result.note += ` Minimum charge $${MIN_CHARGE.toLocaleString()} applies for areas under ${MIN_SF_THRESHOLD} sqft (priced per job).`;
    }
    return { ok: true, result: result };
  }

  return { ok: false, error: "Unknown service" };
}

/** Execute tool calls */
async function toolRunner(name, args) {
  if (name === "getPricingEstimate") return estimateByService(args || {});
  if (name === "getOnlineAverages") return await fetchOnlineAverages();

  if (name === "createQuoteLink") {
    var qs = new URLSearchParams();
    if (args && args.name) qs.set("name", args.name);
    if (args && args.phone) qs.set("phone", args.phone);
    if (args && args.email) qs.set("email", args.email);
    if (args && args.city) qs.set("city", args.city);
    if (args && args.details) qs.set("details", args.details);
    if (args && args.sourcePath) qs.set("source", args.sourcePath);
    if (args && args.utm) qs.set("utm", args.utm);
    return { ok: true, result: "/quote/?" + qs.toString() };
  }

  if (name === "sendLead") {
    try {
      if (args && args.sessionId && (args.email || args.phone)) {
        setContact(args.sessionId, {
          email: args.email || "",
          phone: args.phone || "",
          consent: { email: args.email ? true : false },
        });
      }
      var base = process.env.NEXT_PUBLIC_BASE_URL || "";
      var html =
        "<h3>Website Chat Lead</h3>" +
        "<p><b>Name:</b> " +
        (args && args.name ? args.name : "") +
        "</p>" +
        "<p><b>Phone:</b> " +
        (args && args.phone ? args.phone : "") +
        "</p>" +
        "<p><b>Email:</b> " +
        (args && args.email ? args.email : "") +
        "</p>" +
        "<p><b>City:</b> " +
        (args && args.city ? args.city : "") +
        "</p>" +
        "<p><b>Source:</b> " +
        (args && args.sourcePath ? args.sourcePath : "") +
        (args && args.utm ? " (" + args.utm + ")" : "") +
        "</p>" +
        '<pre style="white-space:pre-wrap;">' +
        (args && args.details ? args.details : "") +
        "</pre>";

      await fetch(base + "/api/sendmail/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ subject: "New Website Chat Lead", html: html }),
      });
      return { ok: true, result: "Lead emailed" };
    } catch (e) {
      return { ok: false, error: "Email failed" };
    }
  }

  if (name === "checkAvailability") {
    return {
      ok: true,
      result:
        "Openings: small jobs next week; larger main floors the following week. Evenings for estimates available.",
    };
  }

  return { ok: false, error: "Unknown tool" };
}

/** OpenAI call with tools (unchanged flow) */
async function callOpenAI(messages, ctx) {
  var key = process.env.OPENAI_API_KEY;
  if (!key) return null;

  var body1 = {
    model: MODEL,
    temperature: 0.3,
    messages: [
      { role: "system", content: SALES_SYSTEM },
      {
        role: "system",
        content:
          "Context: path=" +
          (ctx && ctx.source ? ctx.source : "") +
          " utm=" +
          (ctx && ctx.utm ? ctx.utm : "") +
          " session=" +
          (ctx && ctx.sessionId ? ctx.sessionId : ""),
      },
    ].concat(messages),
    tools: toolsSpec(),
    tool_choice: "auto",
  };

  var r = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: "Bearer " + key,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body1),
  });
  var data = await r.json();
  if (!r.ok)
    throw new Error("LLM error " + r.status + ": " + JSON.stringify(data));

  var choices = data && data.choices ? data.choices : [];
  var assistant = choices.length > 0 ? choices[0].message : null;

  var call = null;
  if (assistant && assistant.tool_calls && assistant.tool_calls.length > 0) {
    call = assistant.tool_calls[0];
  }

  if (call) {
    var args = {};
    try {
      args = JSON.parse(
        call.function && call.function.arguments
          ? call.function.arguments
          : "{}"
      );
    } catch (e) {
      args = {};
    }
    if (
      call.function &&
      call.function.name === "sendLead" &&
      ctx &&
      ctx.sessionId
    ) {
      args.sessionId = ctx.sessionId;
    }

    var toolRes = await toolRunner(
      call.function ? call.function.name : "",
      args
    );

    var body2 = {
      model: MODEL,
      temperature: 0.2,
      messages: [
        { role: "system", content: SALES_SYSTEM },
        {
          role: "system",
          content:
            "Context: path=" +
            (ctx && ctx.source ? ctx.source : "") +
            " utm=" +
            (ctx && ctx.utm ? ctx.utm : "") +
            " session=" +
            (ctx && ctx.sessionId ? ctx.sessionId : ""),
        },
      ]
        .concat(messages)
        .concat([
          assistant,
          {
            role: "tool",
            tool_call_id: call.id,
            name: call.function ? call.function.name : "unknown",
            content: JSON.stringify(toolRes),
          },
        ]),
    };

    var r2 = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + key,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body2),
    });
    var data2 = await r2.json();
    if (!r2.ok)
      throw new Error(
        "LLM step2 error " + r2.status + ": " + JSON.stringify(data2)
      );

    var choices2 = data2 && data2.choices ? data2.choices : [];
    var finalMsg = choices2.length > 0 ? choices2[0].message : null;
    return finalMsg && finalMsg.content ? finalMsg.content : null;
  }

  return assistant && assistant.content ? assistant.content : null;
}

/** Detect service from last user text for fallback copy */
function detectServiceFromText(text) {
  var s = (text || "").toLowerCase();
  if (s.indexOf("drywall") >= 0) return "drywall";
  if (s.indexOf("paint") >= 0) return "painting";
  if (s.indexOf("wallpaper") >= 0) return "wallpaper";
  return "popcorn";
}

export async function POST(req) {
  try {
    var body = await req.json();
    var messages = body && body.messages ? body.messages : [];
    var sessionId = body && body.sessionId ? body.sessionId : "";
    var source = body && body.source ? body.source : "";
    var utm = body && body.utm ? body.utm : "";

    if (!sessionId) {
      return NextResponse.json(
        { reply: "missing sessionId", usedFallback: true },
        { status: 400 }
      );
    }

    var last = messages.length > 0 ? messages[messages.length - 1] : null;
    if (last && last.role === "user")
      recordMessage(sessionId, "user", last.content);

    var reply = null;
    var usedFallback = false;
    var diag = null;

    try {
      reply = await callOpenAI(messages, {
        sessionId: sessionId,
        source: source,
        utm: utm,
      });
    } catch (e) {
      if (DEBUG) {
        diag = {
          error: String(e && e.message ? e.message : e),
          hasKey: !!process.env.OPENAI_API_KEY,
          model: MODEL,
        };
      }
    }

    if (!reply) {
      usedFallback = true;
      var svc = detectServiceFromText(last && last.content ? last.content : "");
      var priceLine = "";
      if (svc === "drywall")
        priceLine =
          "Drywall (board + tape/finish) often lands ~ $3.5–$5.5/sqft labour (height/complexity affect). ";
      else if (svc === "painting")
        priceLine =
          "Interior painting commonly ~ $1.2–$2.2 per floor sqft labour (condition/coats affect). ";
      else if (svc === "wallpaper")
        priceLine =
          "Wallpaper removal (+ skim/prime) uses wall proxy ≈ 2.7× floor sqft: ~ $0.9–$1.6 per wall sqft labour. ";
      else
        priceLine =
          "Unpainted popcorn often ~ $5.5–$7.5/sqft labour; painted/heavier repairs ~$7.5–$9.5+/sqft. ";

      reply =
        priceLine +
        `For small areas (< ${MIN_SF_THRESHOLD} sqft), our **minimum labour charge is $${MIN_CHARGE.toLocaleString()}** because setup/containment time dominates. Materials & HST extra.\n\n` +
        "Could you share the service and approx. floor sqft? I’ll tighten the range.\n\n" +
        "Next steps: call 📞 (647) 923-6784 or /quote/.";
    }

    recordMessage(sessionId, "assistant", reply);
    cancelFuture(sessionId);
    scheduleFollowups(sessionId, { email: true });

    var payload = { reply: reply, usedFallback: usedFallback };
    if (DEBUG)
      payload.diag = diag || {
        ok: true,
        hasKey: !!process.env.OPENAI_API_KEY,
        model: MODEL,
      };
    return NextResponse.json(payload);
  } catch (e) {
    var payload = {
      reply: "Server error. Please call (647) 923-6784 or use /quote/.",
      usedFallback: true,
    };
    if (DEBUG) payload.diag = { error: String(e && e.message ? e.message : e) };
    return NextResponse.json(payload, { status: 500 });
  }
}
