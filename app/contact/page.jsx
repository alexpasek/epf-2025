import { CONTACT } from "@/app/config";
export const metadata = { title: "Contact — Wallpaper Removal Pro" };
export default function Page() {
  return (
    <div className="container-x py-10">
      <h1 className="text-3xl font-bold">Contact</h1>
      <p className="mt-2 text-gray-700">
        Text or call:{" "}
        <a className="underline" href={CONTACT.phoneHref}>
          +1 (647) 812-9135
        </a>
      </p>
      <p className="mt-2 text-gray-700">
        Email:{" "}
        <a className="underline" href={`mailto:${CONTACT.email}`}>
          {CONTACT.email}
        </a>
      </p>
    </div>
  );
}
