export const metadata = {
  title: "Terms of Service",
  description: "Terms of service for EPF Pro Services website and quote requests.",
  alternates: { canonical: "/terms-of-service/" },
  robots: { index: true, follow: true },
};

export default function TermsOfServicePage() {
  return (
    <div className="container-x py-10">
      <h1 className="text-3xl font-bold text-[#123d31]">Terms of Service</h1>
      <p className="mt-4 text-[#33433d]">
        Information on this website is provided for general service details and project
        planning. Quotes are confirmed in writing after project review.
      </p>
      <p className="mt-3 text-[#33433d]">
        Timelines, scope, and pricing can vary based on site conditions, access, repairs,
        and selected finishes.
      </p>
      <p className="mt-3 text-[#33433d]">
        By submitting a form, you consent to be contacted about your requested service.
      </p>
      <p className="mt-3 text-[#33433d]">
        For questions about service terms, contact{" "}
        <a href="mailto:info@epfproservices.com" className="font-semibold underline">
          info@epfproservices.com
        </a>
        .
      </p>
      <p className="mt-3 text-sm text-[#5f706a]">Last updated: March 1, 2026.</p>
    </div>
  );
}
