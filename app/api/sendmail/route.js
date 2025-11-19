import { NextResponse } from "next/server";
export const runtime = "edge"; // must be edge on Cloudflare Pages
export const dynamic = "force-dynamic"; // avoid caching

export async function POST(req) {
    try {
        const {
            name = "",
                email = "",
                phone = "",
                details = "",
        } = await req.json();

        // 🔒 Read & sanitize env
        const apiKey = (process.env.RESEND_API_KEY || "").trim();
        if (!apiKey) {
            return NextResponse.json({ ok: false, error: "Missing RESEND_API_KEY" }, { status: 500 });
        }

        const to = (process.env.QUOTE_TO_EMAIL || "webtoronto22@gmail.com").trim();

        // For first tests use Resend sandbox sender.
        // After you verify epfproservices.com in Resend, switch to e.g. no-reply@epfproservices.com
        const from = (
            process.env.RESEND_FROM || "Popcorn Ceiling Removal Pro <onboarding@resend.dev>"
        ).trim();

        // Build payload
        const payload = {
            from,
            to: [to],
            subject: "New Quote Request",
            text: `New quote request

Name: ${name}
Email: ${email}
Phone: ${phone}

Details:
${details}
`,
            reply_to: email || undefined,
        };

        const r = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
                // 🚫 newline/space in secrets causes "Invalid header value"
                Authorization: `Bearer ${apiKey}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        });

        const txt = await r.text();
        if (!r.ok) {
            return NextResponse.json({ ok: false, status: r.status, body: txt }, { status: 502 });
        }
        return NextResponse.json({ ok: true, status: r.status, body: txt });
    } catch (e) {
        return NextResponse.json({ ok: false, error: e && e.message ? e.message : "Bad request" }, { status: 400 });
    }
}