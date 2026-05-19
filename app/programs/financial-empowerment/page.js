import Link from "next/link";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";

export const metadata = {
  title: "Financial Empowerment | Infinite Vision",
  description:
    "Financial Empowerment: budgeting, credit building, savings milestones, and coaching to support long-term stability.",
};

export default function FinancialEmpowermentPage() {
  return (
    <>
      <SiteHeader variant="inner" />

      <main id="main">
        <section className="section section-alt">
          <div className="container">
            <div className="section-header-row">
              <h1>Financial Empowerment</h1>
              <p className="breadcrumbs">
                <Link href="/">Home</Link> / <Link href="/programs">Programs</Link> / Financial Empowerment
              </p>
            </div>

            <p className="lead">
              Practical coaching and milestones that help veterans build stability—aligned with housing and mobility
              planning.
            </p>

            <div className="grid two">
              <div className="card">
                <h2>Core supports</h2>
                <ul>
                  <li>
                    <strong>Budgeting</strong>: clear monthly plan that matches income and essential needs
                  </li>
                  <li>
                    <strong>Credit building</strong>: steps that reduce risk and improve access to stable housing and work
                  </li>
                  <li>
                    <strong>Savings milestones</strong>: achievable targets that reinforce progress and resilience
                  </li>
                  <li>
                    <strong>Coaching</strong>: accountable support and check-ins
                  </li>
                </ul>

                <h2>Platform elements</h2>
                <ul>
                  <li>
                    <strong>Deposit tracking</strong>: consistent income awareness and planning.
                  </li>
                  <li>
                    <strong>Spending categorization</strong>: visibility into essentials vs. avoidable leakage.
                  </li>
                  <li>
                    <strong>Bill-protection alerts</strong>: prevent avoidable late fees and service disruption.
                  </li>
                  <li>
                    <strong>Predictive budgeting</strong>: forward-looking planning aligned to housing and transportation needs.
                  </li>
                </ul>
              </div>

              <div className="card">
                <h2>What success looks like</h2>
                <ul>
                  <li>Reduced late payments and fewer crisis expenses</li>
                  <li>Predictable transportation planning</li>
                  <li>Improved housing retention through stable routines</li>
                  <li>Progress milestones that are easy to track and explain</li>
                </ul>

                <h2>Related services</h2>
                <ul>
                  <li>
                    <Link href="/programs/housing-pathways">Housing Pathways</Link> for placement and stabilization
                  </li>
                  <li>
                    <Link href="/programs/transportation-access">Transportation Access</Link> for reliable access to work and care
                  </li>
                  <li>
                    <Link href="/programs/community-integration">Community Integration</Link> for workforce and community supports
                  </li>
                </ul>
              </div>
            </div>

            <div className="card" style={{ marginTop: "1.5rem" }}>
              <h2>Operations &amp; outcomes</h2>
              <p>
                For staffing touchpoints, outcomes metrics, and privacy/data protection approach, see{" "}
                <Link href="/operations">Operations &amp; Outcomes</Link>.
              </p>
            </div>

            <details className="partner-details">
              <summary>Financial Coaching &amp; Banking Partners</summary>
              <ul>
                <li>
                  <strong>United Way</strong>: community-aligned supports and coordination.
                </li>
                <li>
                  <strong>RISE Foundation</strong>: financial capability alignment and support.
                </li>
                <li>
                  <strong>Hope Credit Union</strong>: banking access and stability tools.
                </li>
                <li>
                  <strong>Paragon Bank</strong>: banking partnership pathways (as applicable).
                </li>
                <li>
                  <strong>Shelby County CSA</strong>: stabilization supports and coordinated resources.
                </li>
                <li>
                  <strong>IRS VITA</strong>: tax preparation assistance pathways.
                </li>
                <li>
                  <strong>Operation HOPE</strong>: financial coaching and empowerment resources.
                </li>
              </ul>
              <p style={{ marginTop: "0.75rem" }}>
                Full role-based partner ecosystem: <Link href="/partners">Partners</Link>.
              </p>
            </details>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}

