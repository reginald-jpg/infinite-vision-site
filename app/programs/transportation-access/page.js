import Link from "next/link";
import InnerPageShell, { CrumbLink } from "../../components/InnerPageShell";

export const metadata = {
  title: "Transportation Access | Infinite Vision",
  description:
    "Transportation Access: tiered mobility support for veterans using rideshare, shuttle, ADA options, and micro-transit.",
};

export default function TransportationAccessPage() {
  return (
    <InnerPageShell
      eyebrow="Programs"
      title="Transportation Access"
      breadcrumbs={
        <>
          <CrumbLink href="/">Home</CrumbLink> / <CrumbLink href="/programs">Programs</CrumbLink> / Transportation Access
        </>
      }
      lead="A tiered mobility system that supports reliable access to VA care, employment, job training, and housing-related appointments."
    >
            <div className="grid two">
              <div className="card">
                <h2>Transportation priorities</h2>
                <ul>
                  <li>Healthcare &amp; VA appointments</li>
                  <li>Employment &amp; job training</li>
                  <li>Housing-related appointments</li>
                  <li>Legal obligations</li>
                  <li>Childcare &amp; essential needs</li>
                </ul>

                <h2>Transportation tiers</h2>
                <p>Support level is based on need and updated as circumstances change.</p>
                <div className="grid three">
                  <div className="tier-card">
                    <h3>Tier 1 — High Need</h3>
                    <p>Daily medical &amp; employment trips, ADA vehicles, intensive support.</p>
                  </div>
                  <div className="tier-card">
                    <h3>Tier 2 — Moderate Need</h3>
                    <p>Weekly medical, scheduled routes, shared rides.</p>
                  </div>
                  <div className="tier-card">
                    <h3>Tier 3 — Low Need</h3>
                    <p>Transportation stipends, limited rides, self-managed mobility.</p>
                  </div>
                </div>
              </div>

              <div className="card">
                <h2>Mobility options we coordinate</h2>
                <ul>
                  <li>Rideshare support</li>
                  <li>Shuttle services</li>
                  <li>ADA-accessible options</li>
                  <li>Micro-transit / on-demand routes (where available)</li>
                </ul>

                <h2>Routing strategy</h2>
                <ul>
                  <li>Predictive routing</li>
                  <li>Workforce shuttles</li>
                  <li>VA priority routes</li>
                  <li>Evening/weekend flexibility</li>
                </ul>

                <h2>Cost management</h2>
                <ul>
                  <li>Pre-approved trip categories</li>
                  <li>Route optimization</li>
                  <li>Shared-ride incentives</li>
                  <li>Monthly caps</li>
                </ul>

                <h2>Technology &amp; coordination</h2>
                <ul>
                  <li>Centralized scheduling</li>
                  <li>Real-time monitoring</li>
                  <li>Case manager integration</li>
                  <li>Data tracking</li>
                </ul>

                <h2>Related services</h2>
                <ul>
                  <li>
                    <Link href="/programs/housing-pathways">Housing Pathways</Link> for intake, placement, and stabilization
                  </li>
                  <li>
                    <Link href="/programs/financial-empowerment">Financial Empowerment</Link> for budgeting and savings milestones
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
                For staffing touchpoints, outcomes metrics, and safety/compliance approach, see{" "}
                <Link href="/operations">Operations &amp; Outcomes</Link>.
              </p>
            </div>

            <details className="partner-details">
              <summary>Transportation Providers &amp; Mobility Partners</summary>
              <ul>
                <li>
                  <strong>MATA</strong>: transit connectivity and route-based access where appropriate.
                </li>
                <li>
                  <strong>Uber Health</strong>: managed rides for eligible health-related appointments.
                </li>
                <li>
                  <strong>Lyft Concierge</strong>: scheduled rides and coordinated trip management.
                </li>
                <li>
                  <strong>NEMT providers</strong>: non-emergency medical transportation options where eligible.
                </li>
                <li>
                  <strong>Micro-transit providers</strong>: on-demand or flexible-route options where available.
                </li>
                <li>
                  <strong>Shuttle vendors</strong>: workforce and program shuttles for predictable travel.
                </li>
              </ul>
              <p style={{ marginTop: "0.75rem" }}>
                Full role-based partner ecosystem: <Link href="/partners">Partners</Link>.
              </p>
            </details>
    </InnerPageShell>
  );
}

