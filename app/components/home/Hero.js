import Image from "next/image";
import { DONATION_URL } from "../../constants";

/**
 * Full-width hero with local Memphis skyline imagery, navy overlay, and primary CTAs.
 */
export default function Hero({ onReferClick }) {
  return (
    <section
      id="top"
      className="relative flex min-h-[85vh] items-center overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-memphis.jpg"
          alt="Downtown Memphis skyline viewed from the Mississippi River"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 z-[1] bg-navy/70" aria-hidden="true" />

      <div className="container relative z-10 mx-auto w-[90%] max-w-5xl px-0 py-20 text-center text-white md:py-28">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-gold">
          Memphis-Based · Veteran-Led
        </p>
        <h1
          id="hero-heading"
          className="mx-auto max-w-4xl text-3xl font-bold leading-tight md:text-5xl md:leading-tight"
        >
          Veteran-Led Housing, Transportation, and Financial Stability for Memphis.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/90 md:text-xl">
          Infinite Vision, Incorporated is a Memphis-based social innovation organization focused on
          stabilizing individuals and families through a coordinated Housing + Transportation + Financial
          Empowerment model.
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
            className="inline-flex rounded-full border-2 border-white px-8 py-3.5 text-base font-bold text-white transition-colors hover:border-gold hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
          >
            Refer a Veteran
          </a>
        </div>
      </div>
    </section>
  );
}
