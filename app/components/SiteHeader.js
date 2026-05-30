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

  return (
    <header className="site-header">
      <a className="skip-link" href="#main" onClick={onSkipToMain}>
        Skip to main content
      </a>

      <div className="container nav-container">
        <div className="logo">
          <Link href="/" aria-label="Infinite Vision home">
            <span className="logo-mark" aria-hidden="true">
              <Image
                src="/infinite-vision-logo.png"
                alt=""
                width={68}
                height={68}
                priority
              />
            </span>
            <span className="logo-text">Infinite Vision</span>
          </Link>
        </div>

        <nav className="main-nav" aria-label="Primary">
          {variant === "home" ? (
            <>
              <a href="#about">About</a>
              <a href="#model">Our Model</a>
              <a href="#transportation">Transportation</a>
              <a href="#memphis">Memphis Impact</a>
              <Link href="/partners">Partners</Link>
              <a href="#testimonials">Veteran Voices</a>
              <a href="#contact">Contact</a>
              <a
                href={DONATION_URL}
                className="nav-cta"
                target="_blank"
                rel="noopener noreferrer"
              >
                Donate
              </a>
            </>
          ) : (
            <>
              <Link href="/programs">Programs</Link>
              <Link href="/partners">Partners</Link>
              <Link href="/operations">Operations</Link>
              <Link href="/#contact">Contact</Link>
              <a
                href={DONATION_URL}
                className="nav-cta"
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

