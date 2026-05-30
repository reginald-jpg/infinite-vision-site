"use client";

import Link from "next/link";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import Hero from "./components/home/Hero";
import WhyMemphisStats from "./components/home/WhyMemphisStats";
import Testimonials from "./components/home/Testimonials";
import CtaBand from "./components/home/CtaBand";
import SectionIcon from "./components/home/SectionIcon";
import {
  DONATION_URL,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_PHONE_TEL,
  CONTACT_ADDRESS,
} from "./constants";

export default function Home() {
  const scrollTo = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <SiteHeader variant="home" />

      <main id="main">
        <Hero onReferClick={(e) => scrollTo(e, "contact")} />

        {/* ABOUT — mission content preserved; enhanced layout */}
        <section id="about" className="bg-soft-gray py-16 md:py-20" aria-labelledby="about-heading">
          <div className="container mx-auto w-[90%] max-w-6xl">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-gold">About Us</p>
            <h2 id="about-heading" className="mt-2 text-3xl font-bold text-navy md:text-4xl">
              About Infinite Vision
            </h2>
            <p className="mt-4 max-w-3xl text-lg leading-relaxed text-charcoal/80">
              We are a veteran-led, Memphis-based nonprofit aligning housing, transportation, and financial systems so
              veterans and their families can achieve long-term stability and economic mobility.
            </p>

            <div className="mt-12 grid gap-8 md:grid-cols-2">
              <div className="rounded-xl bg-white p-8 shadow-card">
                <h3 className="border-l-4 border-gold pl-4 text-xl font-bold text-navy">Mission</h3>
                <p className="mt-4 leading-relaxed text-charcoal/85">
                  To provide integrated housing, transportation, and financial systems that empower individuals and
                  families to achieve long-term stability and economic mobility.
                </p>
                <h3 className="mt-8 border-l-4 border-gold pl-4 text-xl font-bold text-navy">Vision</h3>
                <p className="mt-4 leading-relaxed text-charcoal/85">
                  A Memphis where every resident has the mobility, stability, and financial tools needed to thrive.
                </p>
              </div>
              <div className="rounded-xl bg-white p-8 shadow-card">
                <h3 className="border-l-4 border-gold pl-4 text-xl font-bold text-navy">Core Values</h3>
                <ul className="mt-6 flex flex-wrap gap-3">
                  {["Dignity", "Mobility", "Transparency", "Innovation"].map((value) => (
                    <li
                      key={value}
                      className="rounded-full bg-navy px-4 py-2 text-sm font-semibold text-white"
                    >
                      {value}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <WhyMemphisStats />

        {/* MODEL — alternating white band with service icons */}
        <section id="model" className="bg-soft-gray py-16 md:py-20" aria-labelledby="model-heading">
          <div className="container mx-auto w-[90%] max-w-6xl">
            <div className="flex flex-wrap items-baseline justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.15em] text-gold">Our Approach</p>
                <h2 id="model-heading" className="mt-2 text-3xl font-bold text-navy md:text-4xl">
                  Our Integrated Model
                </h2>
              </div>
              <p className="text-sm text-charcoal/70">
                Looking for details?{" "}
                <Link href="/programs" className="font-semibold text-navy underline hover:text-gold">
                  View all programs
                </Link>
                .
              </p>
            </div>
            <p className="mt-4 max-w-3xl text-lg leading-relaxed text-charcoal/80">
              Infinite Vision aligns housing, transportation, and financial systems into a single operational framework.
            </p>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  href: "/programs/housing-pathways",
                  label: "Housing Pathways program details",
                  icon: "housing",
                  title: "Housing Pathways",
                  text: "Intake to stabilization with placement, retention, and case management.",
                },
                {
                  href: "/programs/transportation-access",
                  label: "Transportation Access program details",
                  icon: "transport",
                  title: "Transportation Access",
                  text: "Tiered mobility support: rideshare, shuttle, ADA options, and micro-transit.",
                },
                {
                  href: "/programs/financial-empowerment",
                  label: "Financial Empowerment program details",
                  icon: "finance",
                  title: "Financial Empowerment",
                  text: "Budgeting, credit building, savings milestones, and coaching.",
                },
                {
                  href: "/programs/community-integration",
                  label: "Community Integration program details",
                  icon: "community",
                  title: "Community Integration",
                  text: "Connecting veterans to workforce, community supports, and trusted organizations.",
                },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-label={item.label}
                  className="group block rounded-xl bg-white p-6 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-card-hover"
                >
                  <SectionIcon name={item.icon} className="h-10 w-10" />
                  <h3 className="mt-4 text-lg font-bold text-navy group-hover:text-gold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal/80">{item.text}</p>
                </Link>
              ))}
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-xl bg-white p-8 shadow-card">
                <h3 className="text-xl font-bold text-navy">Memphis implementation phases</h3>
                <ul className="mt-4 space-y-3 text-charcoal/85">
                  <li>
                    <strong className="text-navy">0–30 days</strong>: stabilization (intake, immediate housing steps,
                    mobility set-up)
                  </li>
                  <li>
                    <strong className="text-navy">30–60 days</strong>: mobility integration (reliable access to care,
                    work, and training)
                  </li>
                  <li>
                    <strong className="text-navy">60–90+ days</strong>: long-term stability (retention, income growth,
                    sustained supports)
                  </li>
                </ul>
              </div>
              <div className="rounded-xl bg-white p-8 shadow-card">
                <h3 className="text-xl font-bold text-navy">Partner ecosystem (trust and coordination)</h3>
                <p className="mt-4 leading-relaxed text-charcoal/85">
                  We work alongside Memphis-aligned partners across VA care, housing systems, transportation providers,
                  workforce agencies, and financial coaching resources. Partners are presented as role-based ecosystems,
                  not logos, to keep pathways clear and trustworthy.
                </p>
                <Link
                  href="/partners"
                  className="mt-6 inline-flex rounded-full bg-gold px-6 py-2.5 text-sm font-bold text-navy transition-colors hover:bg-gold-muted"
                >
                  View Partners
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* TRANSPORTATION */}
        <section id="transportation" className="bg-white py-16 md:py-20" aria-labelledby="transportation-heading">
          <div className="container mx-auto w-[90%] max-w-6xl">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-gold">Mobility</p>
            <h2 id="transportation-heading" className="mt-2 text-3xl font-bold text-navy md:text-4xl">
              Veteran Transportation Hybrid Model
            </h2>
            <p className="mt-4 max-w-3xl text-lg leading-relaxed text-charcoal/80">
              Reliable, predictable, and dignified mobility so veterans never have to choose between housing, work, and
              health.
            </p>
            <div className="mt-12 grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="border-l-4 border-gold pl-4 text-xl font-bold text-navy">Priorities</h3>
                <ul className="mt-4 space-y-2 text-charcoal/85">
                  <li>Healthcare &amp; VA appointments</li>
                  <li>Employment &amp; job training</li>
                  <li>Housing-related appointments</li>
                  <li>Legal obligations</li>
                  <li>Childcare &amp; essential needs</li>
                </ul>
              </div>
              <div>
                <h3 className="border-l-4 border-gold pl-4 text-xl font-bold text-navy">Transportation Tiers</h3>
                <div className="mt-4 space-y-4">
                  <div className="rounded-lg bg-navy p-4 text-white">
                    <h4 className="font-bold text-gold">Tier 1 — High Need</h4>
                    <p className="mt-1 text-sm text-white/85">
                      Daily medical &amp; employment trips, ADA vehicles, intensive support.
                    </p>
                  </div>
                  <div className="rounded-lg bg-navy p-4 text-white">
                    <h4 className="font-bold text-gold">Tier 2 — Moderate Need</h4>
                    <p className="mt-1 text-sm text-white/85">Weekly medical, scheduled routes, shared rides.</p>
                  </div>
                  <div className="rounded-lg bg-navy p-4 text-white">
                    <h4 className="font-bold text-gold">Tier 3 — Low Need</h4>
                    <p className="mt-1 text-sm text-white/85">
                      Transportation stipends, limited rides, self-managed mobility.
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-charcoal/80">
                  See full details in{" "}
                  <Link href="/programs/transportation-access" className="font-semibold text-navy underline hover:text-gold">
                    Transportation Access
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* MEMPHIS */}
        <section id="memphis" className="bg-soft-gray py-16 md:py-20" aria-labelledby="memphis-heading">
          <div className="container mx-auto w-[90%] max-w-6xl">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-gold">Local Impact</p>
            <h2 id="memphis-heading" className="mt-2 text-3xl font-bold text-navy md:text-4xl">
              Built for Memphis Veterans
            </h2>
            <p className="mt-4 max-w-3xl text-lg leading-relaxed text-charcoal/80">
              Memphis faces high veteran homelessness, limited transit connectivity, and transportation gaps.
            </p>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {[
                { title: "0–30 Days", text: "Stabilization: intake, housing placement, transportation access." },
                { title: "30–60 Days", text: "Mobility Integration: routes, employment, healthcare, coaching." },
                { title: "60–90+ Days", text: "Long-Term Stability: retention, tier adjustments, outcomes." },
              ].map((phase) => (
                <div key={phase.title} className="rounded-xl bg-white p-8 shadow-card">
                  <h3 className="text-xl font-bold text-navy">{phase.title}</h3>
                  <p className="mt-3 leading-relaxed text-charcoal/85">{phase.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Testimonials />

        {/* DONATE — preserved section */}
        <section id="donate" className="bg-navy py-16 text-center text-white md:py-20" aria-labelledby="donate-heading">
          <div className="container mx-auto w-[90%] max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-gold">Give</p>
            <h2 id="donate-heading" className="mt-2 text-3xl font-bold md:text-4xl">
              Invest in Veteran Stability
            </h2>
            <p className="mt-4 text-lg text-white/85">
              Your support powers housing, transportation, and financial empowerment.
            </p>
            <a
              href={DONATION_URL}
              className="mt-8 inline-flex rounded-full bg-gold px-8 py-3.5 text-base font-bold text-navy transition-colors hover:bg-gold-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              target="_blank"
              rel="noopener noreferrer"
            >
              Donate Online
            </a>
          </div>
        </section>

        <CtaBand onReferClick={(e) => scrollTo(e, "contact")} />

        {/* CONTACT */}
        <section id="contact" className="bg-white py-16 md:py-20" aria-labelledby="contact-heading">
          <div className="container mx-auto w-[90%] max-w-6xl">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-gold">Get in Touch</p>
            <h2 id="contact-heading" className="mt-2 text-3xl font-bold text-navy md:text-4xl">
              Contact Us
            </h2>
            <p className="mt-4 text-lg text-charcoal/80">
              Ready to refer a veteran or explore a partnership?
            </p>
            <div className="mt-12 grid gap-10 md:grid-cols-2">
              <form className="contact-form rounded-xl bg-soft-gray p-8">
                <label>
                  Name
                  <input type="text" name="name" autoComplete="name" />
                </label>
                <label>
                  Email
                  <input type="email" name="email" autoComplete="email" />
                </label>
                <label>
                  Organization
                  <input type="text" name="organization" />
                </label>
                <label>
                  Message
                  <textarea rows="4" name="message" />
                </label>
                <button type="button" className="btn primary w-fit">
                  Send Message
                </button>
              </form>
              <div>
                <h3 className="text-xl font-bold text-navy">Memphis-Based. Veteran-Led.</h3>
                <address className="mt-4 not-italic leading-relaxed text-charcoal/85">
                  Infinite Vision, Incorporated
                  <br />
                  {CONTACT_ADDRESS.line1}
                  <br />
                  {CONTACT_ADDRESS.city}, {CONTACT_ADDRESS.state} {CONTACT_ADDRESS.zip}
                  <br />
                  {CONTACT_ADDRESS.country}
                </address>
                <p className="mt-4 text-charcoal/85">
                  Email:{" "}
                  <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold text-navy hover:text-gold">
                    {CONTACT_EMAIL}
                  </a>
                  <br />
                  Phone:{" "}
                  <a href={`tel:${CONTACT_PHONE_TEL}`} className="font-semibold text-navy hover:text-gold">
                    {CONTACT_PHONE}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
