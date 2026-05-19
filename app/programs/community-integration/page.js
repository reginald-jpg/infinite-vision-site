import Link from "next/link";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";

export const metadata = {
  title: "Community Integration | Infinite Vision",
  description:
    "Community Integration: connecting veterans to workforce agencies, nonprofits, faith-based groups, and community organizations.",
};

export default function CommunityIntegrationPage() {
  return (
    <>
      <SiteHeader variant="inner" />

      <main id="main">
        <section className="section section-alt">
          <div className="container">
            <div className="section-header-row">
              <h1>Community Integration</h1>
              <p className="breadcrumbs">
                <Link href="/">Home</Link> / <Link href="/programs">Programs</Link> / Community Integration
              </p>
            </div>

            <p className="lead">
              Helping veterans connect to workforce systems and trusted community supports—so progress is sustained, not
              temporary.
            </p>

            <div className="grid two">
              <div className="card">
                <h2>Who we coordinate with</h2>
                <ul>
                  <li>Workforce agencies and job training providers</li>
                  <li>Nonprofits and community organizations</li>
                  <li>Faith-based groups (when preferred by the veteran)</li>
                  <li>Veteran-serving organizations</li>
                </ul>
                <p style={{ marginTop: "1rem" }}>
                  For our Memphis implementation phases (0–30 / 30–60 / 60–90+), see <Link href="/programs">Programs</Link>.
                </p>
              </div>

              <div className="card">
                <h2>How this connects to stability</h2>
                <ul>
                  <li>Workforce support improves long-term housing retention</li>
                  <li>Community supports reduce isolation and increase follow-through</li>
                  <li>Coordinated services reduce duplication and missed appointments</li>
                </ul>

                <h2>Related services</h2>
                <ul>
                  <li>
                    <Link href="/programs/housing-pathways">Housing Pathways</Link> for placement and retention support
                  </li>
                  <li>
                    <Link href="/programs/transportation-access">Transportation Access</Link> for consistent access to appointments
                  </li>
                  <li>
                    <Link href="/programs/financial-empowerment">Financial Empowerment</Link> for coaching and milestones
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid two">
              <div className="card">
                <h2>Outcomes we track</h2>
                <ul>
                  <li>
                    <strong>Employment placement</strong> and training follow-through (where applicable)
                  </li>
                  <li>
                    <strong>Reduced missed appointments</strong> through coordinated transportation planning
                  </li>
                  <li>
                    <strong>Stability milestones</strong> aligned to housing retention and income routines
                  </li>
                </ul>
              </div>
              <div className="card">
                <h2>Staffing touchpoints</h2>
                <ul>
                  <li>
                    <strong>Case manager</strong>: warm handoffs and service coordination across pillars
                  </li>
                  <li>
                    <strong>Community partnership liaison</strong>: maintains role clarity and trusted referral pathways
                  </li>
                  <li>
                    <strong>Transportation coordinator</strong>: ensures access to workforce and essential appointments
                  </li>
                </ul>
              </div>
            </div>

            <div className="card" style={{ marginTop: "1.5rem" }}>
              <h2>Risk, safety, and privacy</h2>
              <ul>
                <li>
                  <strong>Trauma-informed referrals</strong>: avoid overwhelming handoffs; prioritize clarity and consent.
                </li>
                <li>
                  <strong>Privacy-minded coordination</strong>: share only what is needed to connect services.
                </li>
                <li>
                  <strong>Continuous quality improvement</strong>: improve referral success and reduce duplication.
                </li>
              </ul>
            </div>

            <details className="partner-details">
              <summary>Community Partners &amp; Veteran-Serving Organizations</summary>
              <ul>
                <li>
                  <strong>Workforce Mid-South</strong>: job navigation and employer connections.
                </li>
                <li>
                  <strong>Tennessee Career Centers</strong>: training and placement pathways.
                </li>
                <li>
                  <strong>Greater Memphis Chamber Workforce Initiatives</strong>: employer-aligned workforce development.
                </li>
                <li>
                  <strong>Memphis Urban League</strong>: workforce supports and coaching.
                </li>
                <li>
                  <strong>HopeWorks</strong>: training and career pathway supports.
                </li>
                <li>
                  <strong>Goodwill Excel Center</strong>: education and workforce readiness.
                </li>
                <li>
                  <strong>Mid-South Food Bank</strong>: food access and stability supports.
                </li>
                <li>
                  <strong>Memphis Public Libraries</strong>: community access points for resources and digital navigation.
                </li>
                <li>
                  <strong>Shelby County Veterans Court</strong>: connection to veteran-specific court supports where relevant.
                </li>
              </ul>
            </details>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}

