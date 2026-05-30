"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback } from "react";
import { DONATION_URL } from "../constants";

export default function SiteHeader({ variant = "home" }) {
  const onSkipToMain = useCallback((e) => {
    if (!document) return;
    const el = document.getElementById("main");
    if (!el) return;
    e.preventDefault();
    el.setAttribute("tabindex", "-1");
    el.focus({ preventScroll: true });
    el.scrollIntoView({ behavior: "smooth" });
  }, []);

  const navLinkClass =
    "text-sm text-white/90 transition-colors hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold";

  return (
    <header className="sticky top-0 z-50 bg-navy shadow-md">
      <a
        className="absolute left-[-9999px] top-2 z-[1000] rounded-lg bg-white px-3 py-2 text-charcoal focus:left-3 focus:outline focus:outline-2 focus:outline-gold"
        href="#main"
        onClick={onSkipToMain}
      >
        Skip to main content
      </a>

      <div className="container mx-auto flex w-[90%] max-w-6xl flex-wrap items-center justify-between gap-4 py-3">
        <Link href="/" className="inline-flex items-center gap-2.5" aria-label="Infinite Vision home">
          <Image
            src="/infinite-vision-logo.png"
            alt=""
            width={68}
            height={68}
            priority
            className="h-[52px] w-auto md:h-[60px] lg:h-[68px]"
          />
          <span className="text-sm font-bold uppercase tracking-[0.14em] text-gold md:text-base lg:text-lg">
            Infinite Vision
          </span>
        </Link>

        <nav className="flex flex-wrap items-center justify-end gap-x-4 gap-y-2" aria-label="Primary">
          {variant === "home" ? (
            <>
              <a href="#about" className={navLinkClass}>About</a>
              <a href="#model" className={navLinkClass}>Our Model</a>
              <a href="#transportation" className={navLinkClass}>Transportation</a>
              <a href="#memphis" className={navLinkClass}>Memphis Impact</a>
              <Link href="/partners" className={navLinkClass}>Partners</Link>
              <a href="#testimonials" className={navLinkClass}>Veteran Voices</a>
              <a href="#contact" className={navLinkClass}>Contact</a>
              <a
                href={DONATION_URL}
                className="rounded-full bg-gold px-4 py-2 text-sm font-bold text-navy transition-colors hover:bg-gold-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                target="_blank"
                rel="noopener noreferrer"
              >
                Donate
              </a>
            </>
          ) : (
            <>
              <Link href="/programs" className={navLinkClass}>Programs</Link>
              <Link href="/partners" className={navLinkClass}>Partners</Link>
              <Link href="/operations" className={navLinkClass}>Operations</Link>
              <Link href="/#contact" className={navLinkClass}>Contact</Link>
              <a
                href={DONATION_URL}
                className="rounded-full bg-gold px-4 py-2 text-sm font-bold text-navy transition-colors hover:bg-gold-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                target="_blank"
                rel="noopener noreferrer"
              >
                Donate
              </a>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
