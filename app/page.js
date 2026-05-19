"use client";

import Link from "next/link";
import { useEffect } from "react";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";

export default function Home() {
  useEffect(() => {
    // No-op: keep for future client-only enhancements.
  }, []);

  const scrollTo = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <SiteHeader variant="home" />

      <main id="main">
        {/* HERO */}
        <section className="hero" id="top">
          <div className="container hero-content">
            <h1>Veteran-Led Housing, Transportation, and Financial Stability for Memphis.</h1>
            <p>
              Infinite Vision, Incorporated is a Memphis-based social innovation organization focused on stabilizing
              individuals and families through a coordinated Housing + Transportation + Financial Empowerment model.
            </p>
            <div className="hero-actions">
              <a href="#contact" onClick={(e) => scrollTo(e, "contact")} className="btn primary">
                Refer a Veteran
              </a>
              <Link href="/programs" className="btn secondary">
                Explore Programs
              </Link>
              <a href="#donate" onClick={(e) => scrollTo(e, "donate")} className="btn outline">
                Donate
              </a>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="section">
          <div className="container">
            <h2>About Infinite Vision</h2>
            <p className="lead">
              We are a veteran-led, Memphis-based nonprofit aligning housing, transportation, and financial systems so
              veterans and their families can achieve long-term stability and economic mobility.
            </p>
            <div className="grid two">
              <div>
                <h3>Mission</h3>
                <p>
                  To provide integrated housing, transportation, and financial systems that empower individuals and
                  families to achieve long-term stability and economic mobility.
                </p>
                <h3>Vision</h3>
                <p>A Memphis where every resident has the mobility, stability, and financial tools needed to thrive.</p>
              </div>
              <div>
                <h3>Core Values</h3>
                <ul className="pill-list">
                  <li>Dignity</li>
                  <li>Mobility</li>
                  <li>Transparency</li>
                  <li>Innovation</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* MODEL */}
        <section id="model" className="section section-alt">
          <div className="container">
            <div className="section-header-row">
              <h2>Our Integrated Model</h2>
              <p className="breadcrumbs">
                Looking for details? <Link href="/programs">View all programs</Link>.
              </p>
            </div>
            <p className="lead">
              Infinite Vision aligns housing, transportation, and financial systems into a single operational framework.
            </p>
            <div className="grid four">
              <Link className="card-link" href="/programs/housing-pathways" aria-label="Housing Pathways program details">
                <div className="card">
                  <h3>Housing Pathways</h3>
                  <p>Intake to stabilization with placement, retention, and case management.</p>
                </div>
              </Link>
              <Link
                className="card-link"
                href="/programs/transportation-access"
                aria-label="Transportation Access program details"
              >
                <div className="card">
                  <h3>Transportation Access</h3>
                  <p>Tiered mobility support: rideshare, shuttle, ADA options, and micro-transit.</p>
                </div>
              </Link>
              <Link
                className="card-link"
                href="/programs/financial-empowerment"
                aria-label="Financial Empowerment program details"
              >
                <div className="card">
                  <h3>Financial Empowerment</h3>
                  <p>Budgeting, credit building, savings milestones, and coaching.</p>
                </div>
              </Link>
              <Link
                className="card-link"
                href="/programs/community-integration"
                aria-label="Community Integration program details"
              >
                <div className="card">
                  <h3>Community Integration</h3>
                  <p>Connecting veterans to workforce, community supports, and trusted organizations.</p>
                </div>
              </Link>
            </div>

            <div className="grid two" style={{ marginTop: "1.5rem" }}>
              <div className="card">
                <h3>Memphis implementation phases</h3>
                <ul>
                  <li>
                    <strong>0–30 days</strong>: stabilization (intake, immediate housing steps, mobility set-up)
                  </li>
                  <li>
                    <strong>30–60 days</strong>: mobility integration (reliable access to care, work, and training)
                  </li>
                  <li>
                    <strong>60–90+ days</strong>: long-term stability (retention, income growth, sustained supports)
                  </li>
                </ul>
              </div>

              <div className="card">
                <h3>Partner ecosystem (trust and coordination)</h3>
                <p>
                  We work alongside Memphis-aligned partners across VA care, housing systems, transportation providers,
                  workforce agencies, and financial coaching resources. Partners are presented as role-based ecosystems,
                  not logos, to keep pathways clear and trustworthy.
                </p>
                <p>
                  <Link href="/partners" className="btn primary">
                    View Partners
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* TRANSPORTATION */}
        <section id="transportation" className="section">
          <div className="container">
            <h2>Veteran Transportation Hybrid Model</h2>
            <p className="lead">
              Reliable, predictable, and dignified mobility so veterans never have to choose between housing, work, and health.
            </p>
            <div className="grid two">
              <div>
                <h3>Priorities</h3>
                <ul>
                  <li>Healthcare & VA appointments</li>
                  <li>Employment & job training</li>
                  <li>Housing-related appointments</li>
                  <li>Legal obligations</li>
                  <li>Childcare & essential needs</li>
                </ul>
              </div>
              <div>
                <h3>Transportation Tiers</h3>
                <div className="tier-grid">
                  <div className="tier-card">
                    <h4>Tier 1 — High Need</h4>
                    <p>Daily medical &amp; employment trips, ADA vehicles, intensive support.</p>
                  </div>
                  <div className="tier-card">
                    <h4>Tier 2 — Moderate Need</h4>
                    <p>Weekly medical, scheduled routes, shared rides.</p>
                  </div>
                  <div className="tier-card">
                    <h4>Tier 3 — Low Need</h4>
                    <p>Transportation stipends, limited rides, self-managed mobility.</p>
                  </div>
                </div>

                <p style={{ marginTop: "1rem" }}>
                  See full details in{" "}
                  <Link href="/programs/transportation-access">Transportation Access</Link>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* MEMPHIS */}
        <section id="memphis" className="section section-alt">
          <div className="container">
            <h2>Built for Memphis Veterans</h2>
            <p className="lead">
              Memphis faces high veteran homelessness, limited transit connectivity, and transportation gaps.
            </p>
            <div className="grid three timeline">
              <div className="card">
                <h3>0–30 Days</h3>
                <p>Stabilization: intake, housing placement, transportation access.</p>
              </div>
              <div className="card">
                <h3>30–60 Days</h3>
                <p>Mobility Integration: routes, employment, healthcare, coaching.</p>
              </div>
              <div className="card">
                <h3>60–90+ Days</h3>
                <p>Long-Term Stability: retention, tier adjustments, outcomes.</p>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section id="testimonials" className="section">
          <div className="container">
            <h2>Veteran Voices</h2>
            <p className="lead">Sample testimonials representing the impact Infinite Vision aims to deliver.</p>
            <div className="grid three">
              <div className="card testimonial">
                <p>“Infinite Vision helped me keep my housing and get to my VA appointments on time.”</p>
                <p className="testimonial-name">Sgt. J. Williams, U.S. Army (Ret.)</p>
              </div>
              <div className="card testimonial">
                <p>“The financial coaching and transportation stipends gave my family breathing room.”</p>
                <p className="testimonial-name">SSG M. Rodriguez, Army National Guard</p>
              </div>
              <div className="card testimonial">
                <p>“Coordinated housing, transportation, and budgeting let me focus on recovery.”</p>
                <p className="testimonial-name">Cpl. A. Johnson, USMC Veteran</p>
              </div>
            </div>
          </div>
        </section>

        {/* DONATE */}
        <section id="donate" className="section donate-section">
          <div className="container">
            <h2>Invest in Veteran Stability</h2>
            <p className="lead">Your support powers housing, transportation, and financial empowerment.</p>
            <a href="#" className="btn primary">Donate Online (Coming Soon)</a>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section">
          <div className="container">
            <h2>Contact Us</h2>
            <p className="lead">Ready to refer a veteran or explore a partnership?</p>
            <div className="grid two">
              <form className="contact-form">
                <label>Name<input type="text" /></label>
                <label>Email<input type="email" /></label>
                <label>Organization<input type="text" /></label>
                <label>Message<textarea rows="4"></textarea></label>
                <button className="btn primary">Send Message</button>
              </form>
              <div>
                <h3>Memphis-Based. Veteran-Led.</h3>
                <p>Infinite Vision, Incorporated<br />Memphis, Tennessee</p>
                <p>Email: info@infinitevision.org<br />Phone: (901) 000-0000</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
