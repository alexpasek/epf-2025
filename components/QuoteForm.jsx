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
      {/* your inputs... */}
      <input
        className=" border shadow-md border-gray-500 rounded-2xl p-3"
        name="name"
        placeholder="Name"
        required
      />
      <input
        className="border shadow-md  border-gray-500 rounded-2xl p-3"
        name="phone"
        placeholder="Phone"
        required
      />
      <input
        className="border shadow-md border-gray-500 rounded-2xl p-3 md:col-span-2"
        type="email"
        name="email"
        placeholder="Email"
      />
      <textarea
        className="border shadow-md border-gray-500 rounded-2xl p-3 md:col-span-2"
        rows={5}
        name="details"
        placeholder="Project details"
      />

      <button
        type="submit"
        disabled={sending}
        className="btn-cta md:col-span-2 w-full px-6 py-4 rounded-2xl text-white
                   bg-gradient-to-b from-blue-500 to-blue-700 shadow-lg
                   disabled:opacity-70"
      >
        {sending ? "Sending..." : "Send"}
      </button>

      {status && <p className="text-sm md:col-span-2 text-red-600">{status}</p>}
    </form>
  );
}
