// components/Footer.jsx
import ReviewScroller from "@/components/ReviewScroller";
import { SERVICE_AREAS } from "@/app/config";

export default function Footer() {
  return (
    <footer
      className="mt-16 border-t bg-white"
      itemScope
      itemType="https://schema.org/LocalBusiness"
    >
      {/* Reviews strip (unchanged) */}
      <section id="reviews" className="mt-10 md:mt-16 scroll-mt-24">
        <ReviewScroller
          className="py-4 md:py-6"
          brand="30 64 175"
          accent="16 185 129"
          bg="vivid"
          bgAlpha={0.12}
          cardAlpha={0.1}
          hoverAlpha={0.2}
          mobileTall
        />
      </section>

      {/* Footer cols */}
      <div className="container-x py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Business info */}
        <div>
          <div className="font-semibold" itemProp="name">
            Wallpaper Removal Pro
          </div>
          <p className="mt-2 text-sm text-gray-600">
            Serving {SERVICE_AREAS.join(" · ")}
          </p>

          {/* Hours (added) */}
          <div
            className="mt-3 text-sm text-gray-700"
            itemProp="openingHoursSpecification"
          >
            <div className="font-medium text-gray-900">🕘 Hours</div>
            <meta itemProp="opens" content="08:00" />
            <meta itemProp="closes" content="21:00" />
            <p itemProp="openingHours">Mon–Sun: 8:00 AM – 9:00 PM</p>
          </div>

          {/* Address */}
          <address
            className="mt-3 not-italic text-sm text-gray-700"
            itemProp="address"
            itemScope
            itemType="https://schema.org/PostalAddress"
          >
            <div className="font-medium text-gray-900">📍 Address</div>
            <a
              className="mt-1 block hover:underline"
              href="https://maps.google.com/?q=2394+Haines+Rd,+Mississauga,+ON+L4Y+1Y6"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open address in Google Maps"
            >
              <span itemProp="streetAddress">2394 Haines Rd</span>,{" "}
              <span itemProp="addressLocality">Mississauga</span>,{" "}
              <span itemProp="addressRegion">ON</span>{" "}
              <span itemProp="postalCode">L4Y 1Y6</span>
            </a>
            <meta itemProp="addressCountry" content="CA" />
          </address>

          <p className="mt-3 text-sm text-gray-600">
            © {new Date().getFullYear()}
          </p>
        </div>

        {/* Company (unchanged) */}
        <div className="md:text-center">
          <div className="font-semibold ">Company</div>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a href="/contact/" className="hover:underline">
                Contact
              </a>
            </li>
            <li>
              <a href="/about/" className="hover:underline">
                About us
              </a>
            </li>
            <li>
              <a href="/blog/" className="hover:underline">
                Blog
              </a>
            </li>
            <li>
              <a href="/our-work/" className="hover:underline">
                Before &amp; After
              </a>
            </li>
            <li>
              <a href="/quote/" className="hover:underline">
                Get Quote
              </a>
            </li>
          </ul>
        </div>

        {/* Legal + Social (centered better) */}
        <div className="md:text-center md:justify-self-center md:flex md:flex-col md:items-center">
          <div className="font-semibold">Legal</div>
          <p className="mt-3 text-sm text-gray-600">All rights reserved.</p>

          <div className="mt-4 w-full">
            <div className="text-sm font-medium mb-2 md:justify-center md:flex">
              Follow us
            </div>
            <div className="md:flex md:justify-center">
              <SocialButtons
                instagram="https://www.instagram.com/wallpaperremovalpro" // ← update
                facebook="https://www.facebook.com/share/17bsRz3MTi/?mibextid=wwXIfr" // ← update
                size={60} // button diameter (px)
                icon={26} // icon size (px)
                gap={12} // space between buttons (px)
                variant="solid"
                className="mb-[calc(env(safe-area-inset-bottom)+24px)] md:mb-0" // sits a little above phone buttons on mobile, not sticky
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ---------- Social buttons (no sticky) ---------- */
function SocialButtons({
  instagram,
  facebook,
  size = 56,
  icon = 24,
  gap = 10,
  variant = "solid",
  className = "",
}) {
  const btnBase =
    "inline-flex items-center justify-center rounded-full border transition-transform duration-200 will-change-transform hover:-translate-y-0.5 active:translate-y-0 shadow-[0_12px_28px_-14px_rgba(0,0,0,0.45),_0_2px_6px_rgba(0,0,0,0.08)] border-black/10 text-white";

  const igBg =
    variant === "gradient"
      ? "conic-gradient(from 210deg, #f58529, #dd2a7b, #8134af, #515bd4, #f58529)"
      : "#E1306C";
  const fbBg = "#1877F2";

  return (
    <ul className={`flex ${className}`} style={{ gap }}>
      <li>
        <a
          href={instagram}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className={btnBase}
          style={{
            width: size,
            height: size,
            background: igBg,
            boxShadow:
              "inset 0 1px 0 rgba(255,255,255,.35), inset 0 -1px 0 rgba(0,0,0,.12), 0 18px 36px -16px rgba(0,0,0,.35), 0 6px 12px rgba(0,0,0,.12)",
          }}
        >
          <InstagramIcon style={{ width: icon, height: icon }} />
        </a>
      </li>
      <li>
        <a
          href={facebook}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className={btnBase}
          style={{
            width: size,
            height: size,
            background: fbBg,
            boxShadow:
              "inset 0 1px 0 rgba(255,255,255,.35), inset 0 -1px 0 rgba(0,0,0,.12), 0 18px 36px -16px rgba(0,0,0,.35), 0 6px 12px rgba(0,0,0,.12)",
          }}
        >
          <FacebookIcon style={{ width: icon, height: icon }} />
        </a>
      </li>
    </ul>
  );
}

/* ---------- Inline SVGs ---------- */
function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 5a5 5 0 100 10 5 5 0 000-10zm6-1.5a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zM12 9a3 3 0 110 6 3 3 0 010-6z"
      />
    </svg>
  );
}

function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M22 12.06C22 6.49 17.52 2 11.94 2S2 6.49 2 12.06C2 17.08 5.66 21.21 10.44 22v-6.97H8.25v-2.9h2.19V9.7c0-2.17 1.29-3.36 3.27-3.36.95 0 1.95.17 1.95.17v2.14h-1.1c-1.09 0-1.43.68-1.43 1.38v1.99h2.5l-.4 2.9h-2.1V22C18.34 21.21 22 17.08 22 12.06z"
      />
    </svg>
  );
}
