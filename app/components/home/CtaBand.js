import Link from "next/link";
import { DONATION_URL } from "../../constants";

/**
 * Navy CTA band with gold-accent buttons — placed near the bottom of the homepage.
 */
export default function CtaBand({ onReferClick }) {
  return (
    <section
      className="bg-navy py-16 md:py-20"
      aria-labelledby="cta-heading"
    >
      <div className="container mx-auto w-[90%] max-w-4xl text-center">
        <h2 id="cta-heading" className="text-3xl font-bold text-white md:text-4xl">
          How You Can Support Memphis Veterans
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-white/85">
          Every referral, partnership, and donation strengthens housing pathways, transportation access, and
          financial empowerment for those who served.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href={DONATION_URL}
            className="inline-flex rounded-full bg-gold px-8 py-3.5 text-base font-bold text-navy transition-colors hover:bg-gold-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            target="_blank"
            rel="noopener noreferrer"
          >
            Donate
          </a>
          <a
            href="#contact"
            onClick={onReferClick}
            className="inline-flex rounded-full border-2 border-gold px-8 py-3.5 text-base font-bold text-gold transition-colors hover:bg-gold hover:text-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
          >
            Refer a Veteran
          </a>
          <Link
            href="/partners"
            className="inline-flex rounded-full border-2 border-white/40 px-8 py-3.5 text-base font-bold text-white transition-colors hover:border-gold hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
          >
            Become a Partner
          </Link>
        </div>
      </div>
    </section>
  );
}
