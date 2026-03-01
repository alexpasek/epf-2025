"use client";

function track(event, payload) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...payload });
  if (typeof window.gtag === "function") {
    window.gtag("event", event, payload);
  }
}

export default function LandingActionButtons({
  city,
  phoneHref,
  phoneLabel = "Call Now",
  quoteHref = "#quick-quote",
  quoteLabel = "Get My Quote",
  className = "",
  callClassName = "",
  quoteClassName = "",
  showCall = true,
  showQuote = true,
}) {
  return (
    <div className={className}>
      {showQuote && (
        <a
          href={quoteHref}
          onClick={() =>
            track("ads_quote_click", {
              city,
              service: "popcorn-ceiling-removal",
              location: "landing-page",
            })
          }
          className={quoteClassName}
        >
          {quoteLabel}
        </a>
      )}
      {showCall && (
        <a
          href={phoneHref}
          onClick={() =>
            track("ads_phone_click", {
              city,
              service: "popcorn-ceiling-removal",
              location: "landing-page",
            })
          }
          className={callClassName}
        >
          {phoneLabel}
        </a>
      )}
    </div>
  );
}

