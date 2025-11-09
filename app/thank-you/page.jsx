import { PHONE_HREF } from "../config";

// app/thank-you/page.jsx
export const metadata = {
  title: "Thank You | Wallpaper Removal Pro",
  robots: { index: false },
};

export default function ThankYou() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-20 text-center">
      <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
        Thanks! We received your request.
      </h1>
      <p className="mt-4 text-gray-600">
        We’ll reach out shortly. If it’s urgent, call us now.
      </p>
      <div className="mt-10">
        <a
          href={PHONE_HREF}
          className="inline-block px-8 py-4 rounded-2xl shadow-lg
                       bg-gradient-to-b from-blue-500 to-blue-700 text-white
                       hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Call (647) 923-6784
        </a>
      </div>
    </main>
  );
}
