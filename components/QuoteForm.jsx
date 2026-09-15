"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function QuoteForm() {
  const router = useRouter();
  const [status, setStatus] = useState(null);
  const [sending, setSending] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    setStatus(null);
    setSending(true);

    const data = Object.fromEntries(new FormData(e.currentTarget));

    try {
      const r = await fetch("/api/sendmail/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const txt = await r.text();

      if (r.ok) {
        // ✅ go to the dedicated thank-you page
        router.push("/thank-you/");
        return;
      }

      // Show server error text if any
      setStatus(`Error: ${txt || "Email failed"}`);
    } catch {
      setStatus("Network error. Please try again.");
    } finally {
      setSending(false);
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 "
    >
      <label className="grid gap-2 text-sm font-medium">Name (required)
        <input className="border shadow-md border-gray-500 rounded-2xl p-3" name="name" autoComplete="name" placeholder="Your name" required />
      </label>
      <label className="grid gap-2 text-sm font-medium">Phone (required)
        <input className="border shadow-md border-gray-500 rounded-2xl p-3" type="tel" name="phone" autoComplete="tel" placeholder="Your phone number" required />
      </label>
      <label className="grid gap-2 text-sm font-medium md:col-span-2">Email (optional)
        <input className="border shadow-md border-gray-500 rounded-2xl p-3" type="email" name="email" autoComplete="email" placeholder="you@example.com" />
      </label>
      <label className="grid gap-2 text-sm font-medium md:col-span-2">Project details (optional)
        <textarea className="border shadow-md border-gray-500 rounded-2xl p-3" rows={5} name="details" placeholder="Your city, the service you need, room sizes and preferred timing. You can include a link to photos." />
      </label>

      <button
        type="submit"
        disabled={sending}
        className="btn-cta md:col-span-2 w-full px-6 py-4 rounded-2xl text-white
                   bg-gradient-to-b from-blue-500 to-blue-700 shadow-lg
                   disabled:opacity-70"
      >
        {sending ? "Sending..." : "Send estimate request"}
      </button>

      {status && <p role="alert" className="text-sm md:col-span-2 text-red-600">{status}</p>}
    </form>
  );
}
