import Link from "next/link";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_PHONE_TEL,
  CONTACT_ADDRESS,
  ORG_EIN,
  LINKEDIN_URL,
} from "../constants";

/**
 * Upgraded footer — navy background, nonprofit credentials, and contact details.
 */
export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-dark text-white">
      <div className="container mx-auto w-[90%] max-w-6xl py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="text-lg font-bold text-gold">Memphis-Based. Veteran-Led.</p>
            <p className="mt-3 text-sm leading-relaxed text-white/80">
              Infinite Vision, Incorporated integrates housing, transportation, and financial empowerment for
              long-term veteran stability.
            </p>
            <p className="mt-4 text-sm text-white/70">
              501(c)(3) nonprofit organization
              <br />
              EIN: {ORG_EIN}
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.15em] text-gold">Contact</h2>
            <address className="mt-3 not-italic text-sm leading-relaxed text-white/80">
              Infinite Vision, Incorporated
              <br />
              {CONTACT_ADDRESS.line1}
              <br />
              {CONTACT_ADDRESS.city}, {CONTACT_ADDRESS.state} {CONTACT_ADDRESS.zip}
              <br />
              {CONTACT_ADDRESS.country}
            </address>
            <p className="mt-3 text-sm">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-gold transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              >
                {CONTACT_EMAIL}
              </a>
              <br />
              <a
                href={`tel:${CONTACT_PHONE_TEL}`}
                className="text-gold transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              >
                {CONTACT_PHONE}
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.15em] text-gold">Connect</h2>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link href="/programs" className="text-white/80 transition-colors hover:text-gold">
                  Programs
                </Link>
              </li>
              <li>
                <Link href="/partners" className="text-white/80 transition-colors hover:text-gold">
                  Partners
                </Link>
              </li>
              <li>
                <Link href="/operations" className="text-white/80 transition-colors hover:text-gold">
                  Operations
                </Link>
              </li>
              <li>
                <a
                  href={LINKEDIN_URL}
                  className="inline-flex items-center gap-2 text-white/80 transition-colors hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Infinite Vision on LinkedIn (opens in new tab)"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 114.126 0 2.063 2.063 0 01-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/15 pt-6 text-center text-sm text-white/60">
          <p>&copy; {year} Infinite Vision, Incorporated. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
