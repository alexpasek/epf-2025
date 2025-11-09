// /app/api/agent/thread/route.js
import { NextResponse } from "next/server";
import {
  getThread,
  runDue,
  recordMessage,
  markSent,
  setContact,
} from "@/lib/chatStore";

export const runtime = "edge"; //"edge" forr clowflare nodejs"for local

// --- helpers (old-school, no optional chaining) ---
function msgFor(key) {
  switch (key) {
    case "idle-15m":
      return "Still here if you need me. Share rooms/areas, approx. sq ft, and if popcorn is painted—I’ll tighten your ballpark. Or call 📞 (647) 923-6784.";
    case "day-1":
      return "Quick check-in 👋 Unpainted often lands ~$5.5–$7.5/sqft labour; painted/heavier repairs ~$7.5–$9.5+/sqft (materials + HST extra).";
    case "day-3":
      return "We include Level 5 skim, raking-light inspection, and stain-block primer so the finish reads flat and bright.";
    case "day-7":
      return "Last ping—want me to pencil a tentative window and send a written scope? Call 📞 (647) 923-6784 or use /quote/.";
    default:
      return "Happy to help with a tighter range or timeline if you’d like.";
  }
}

function emailHTML(msg) {
  var base = process.env.NEXT_PUBLIC_BASE_URL || "";
  var quote = base + "/quote/";
  return (
    '<div style="font:14px/1.5 -apple-system,Segoe UI,Roboto,Arial">' +
    "<p>" +
    msg +
    "</p>" +
    '<p>Next steps:<br>• Call: <a href="tel:+16479236784">(647) 923-6784</a><br>• Fast Quote: <a href="' +
    quote +
    '">' +
    quote +
    "</a></p>" +
    "<hr/><small>Reply STOP to opt out.</small>" +
    "</div>"
  );
}

async function sendEmail(to, subject, html) {
  try {
    var base = process.env.NEXT_PUBLIC_BASE_URL || "";
    var r = await fetch(base + "/api/sendmail/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ to: to, subject: subject, html: html }),
    });
    return r.ok;
  } catch (e) {
    return false;
  }
}

// --- GET: poll + inject due follow-ups (chat + email) ---
export async function GET(req) {
  var url = new URL(req.url);
  var sessionId = url.searchParams.get("sessionId") || "";
  if (!sessionId) {
    return NextResponse.json({ error: "missing sessionId" }, { status: 400 });
  }

  var data = runDue(sessionId);
  var t = data.t;
  var due = data.due;

  for (var i = 0; i < due.length; i++) {
    var f = due[i];
    var msg = msgFor(f.key);

    if (f.channel === "chat") {
      recordMessage(sessionId, "assistant", msg);
      markSent(sessionId, f.key);
    } else if (f.channel === "email") {
      // Only send if consent + email present
      var hasConsent = t && t.consent && t.consent.email === true;
      var hasEmail =
        t && t.contact && t.contact.email && String(t.contact.email).length > 3;
      if (hasConsent && hasEmail) {
        await sendEmail(
          t.contact.email,
          "Quick follow-up on your ceilings",
          emailHTML(msg)
        );
      }
      markSent(sessionId, f.key);
    }
  }

  var thread = getThread(sessionId);
  return NextResponse.json({
    messages: thread && thread.messages ? thread.messages : [],
    followups: thread && thread.followups ? thread.followups : [],
  });
}

// --- POST: save a chat message OR contact/consent ---
export async function POST(req) {
  var body = await req.json();
  var sessionId = body && body.sessionId ? body.sessionId : "";
  if (!sessionId) {
    return NextResponse.json({ error: "missing sessionId" }, { status: 400 });
  }

  var contact = body && body.contact ? body.contact : null;
  var role = body && body.role ? body.role : "";
  var content = body && body.content ? body.content : "";

  if (contact) {
    // contact: { email, phone, consent: { email: true/false, sms?: true/false } }
    var payload = {
      email: contact.email ? contact.email : "",
      phone: contact.phone ? contact.phone : "",
      consent: contact.consent ? contact.consent : {},
    };
    setContact(sessionId, payload);
    return NextResponse.json({ ok: true });
  }

  if (role && content) {
    recordMessage(sessionId, role, content);
    return NextResponse.json({ ok: true });
  }

  return NextResponse.json({ ok: true });
}
