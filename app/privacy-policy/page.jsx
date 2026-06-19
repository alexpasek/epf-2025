export const metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for EPF Pro Services quote requests and website usage.",
  alternates: { canonical: "/privacy-policy/" },
  robots: { index: true, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container-x py-10">
      <h1 className="text-3xl font-bold text-[#123d31]">Privacy Policy</h1>
      <p className="mt-4 text-[#33433d]">
        We collect contact information you submit through quote forms, including name,
        phone, email, and project notes, so we can prepare estimates and communicate
        about your project.
      </p>
      <p className="mt-3 text-[#33433d]">
        We use this information for service communication, scheduling, and follow-up.
        We do not sell your personal information.
      </p>
      <p className="mt-3 text-[#33433d]">
        If you would like to request updates, corrections, or deletion of your submitted
        information, contact us at{" "}
        <a href="mailto:info@epfproservices.com" className="font-semibold underline">
          info@epfproservices.com
        </a>
        .
      </p>
      <p className="mt-3 text-sm text-[#5f706a]">Last updated: March 1, 2026.</p>
    </div>
  );
}
