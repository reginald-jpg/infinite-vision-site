import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

export const metadata = {
  title: "Programs | Infinite Vision",
  description:
    "Explore Infinite Vision’s integrated programs: Housing Pathways, Transportation Access, Financial Empowerment, and Community Integration.",
};

export default function ProgramsIndexPage() {
  return (
    <>
      <SiteHeader variant="inner" />

      <main id="main">
        <section className="section section-alt">
          <div className="container">
            <div className="section-header-row">
              <h1>Programs</h1>
              <p className="breadcrumbs">
                <Link href="/">Home</Link> / Programs
              </p>
            </div>

            <p className="lead">
              Infinite Vision is veteran-led and mission-driven. Our model aligns housing, transportation, financial
              empowerment, and community integration so veterans and their families can stabilize and move forward.
            </p>

            <div className="grid two">
              <div className="card">
                <h2>Memphis implementation strategy</h2>
                <ul>
                  <li>
                    <strong>0–30 Days</strong>: Stabilization
                  </li>
                  <li>
                    <strong>30–60 Days</strong>: Mobility Integration
                  </li>
                  <li>
                    <strong>60–90+ Days</strong>: Long-Term Stability
                  </li>
                </ul>
                <p>
                  We operate in a Memphis context where veteran homelessness and transportation gaps can disrupt care,
                  employment, and housing retention. Our model reduces missed appointments and fragmented handoffs by
                  coordinating services across pillars.
                </p>
              </div>

              <div className="card">
                <h2>Care-model inspiration (principles)</h2>
                <ul>
                  <li>
                    <strong>Warm, human-centered experience</strong>: veterans should feel welcomed, safe, and respected.
                  </li>
                  <li>
                    <strong>Clean structure and clarity</strong>: simple navigation, modular programs, and clear next steps.
                  </li>
                  <li>
                    <strong>Professional and funder-ready</strong>: operational credibility, measurable outcomes, and scalability.
                  </li>
                </ul>
                <p>
                  See the full partner ecosystem on the <Link href="/partners">Partners</Link> page.
                </p>
              </div>
            </div>

            <div className="grid two">
              <Link className="card-link" href="/programs/housing-pathways">
                <div className="card">
                  <h2>Housing Pathways</h2>
                  <p>Intake to stabilization with placement and ongoing case management.</p>
                </div>
              </Link>

              <Link className="card-link" href="/programs/transportation-access">
                <div className="card">
                  <h2>Transportation Access</h2>
                  <p>Tiered mobility support for VA care, work, training, and housing-related appointments.</p>
                </div>
              </Link>

              <Link className="card-link" href="/programs/financial-empowerment">
                <div className="card">
                  <h2>Financial Empowerment</h2>
                  <p>Budgeting, credit building, savings milestones, and coaching.</p>
                </div>
              </Link>

              <Link className="card-link" href="/programs/community-integration">
                <div className="card">
                  <h2>Community Integration</h2>
                  <p>Connecting veterans to workforce agencies, nonprofits, and community-based supports.</p>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}

