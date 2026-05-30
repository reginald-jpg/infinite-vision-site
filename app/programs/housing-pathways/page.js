import Link from "next/link";
import InnerPageShell, { CrumbLink } from "../../components/InnerPageShell";

export const metadata = {
  title: "Housing Pathways | Infinite Vision",
  description:
    "Housing Pathways: intake, assessment, placement, stabilization, and case management to support veteran stability.",
};

export default function HousingPathwaysPage() {
  return (
    <InnerPageShell
      eyebrow="Programs"
      title="Housing Pathways"
      breadcrumbs={
        <>
          <CrumbLink href="/">Home</CrumbLink> / <CrumbLink href="/programs">Programs</CrumbLink> / Housing Pathways
        </>
      }
      lead="A structured pathway from first contact to stable housing—built for dignity, safety, and long-term retention."
    >
            <div className="grid two">
              <div className="card">
                <h2>How it works</h2>
                <ol className="program-steps">
                  <li>
                    <strong>Intake</strong>: We collect basic information and identify immediate safety needs.
                  </li>
                  <li>
                    <strong>Assessment</strong>: We evaluate housing barriers, documentation, and support needs.
                  </li>
                  <li>
                    <strong>Placement</strong>: We coordinate with available options and align to the right housing type.
                  </li>
                  <li>
                    <strong>Stabilization</strong>: We support move-in readiness, transportation, and continuity of care.
                  </li>
                  <li>
                    <strong>Case Management</strong>: Ongoing support focused on retention and progress milestones.
                  </li>
                </ol>

                <h2>Housing options we coordinate</h2>
                <ul>
                  <li>
                    <strong>Emergency stabilization</strong>: immediate safety and short-term housing continuity.
                  </li>
                  <li>
                    <strong>Transitional housing</strong>: structured step-down support toward stability.
                  </li>
                  <li>
                    <strong>Permanent supportive housing</strong>: longer-term stability with integrated supports where needed.
                  </li>
                  <li>
                    <strong>Landlord partnerships</strong>: placement options and retention collaboration.
                  </li>
                </ul>
              </div>

              <div className="card">
                <h2>What to expect</h2>
                <ul>
                  <li>Clear next steps after intake</li>
                  <li>Coordination across services (housing, mobility, and financial coaching)</li>
                  <li>Respectful communication and privacy-minded support</li>
                  <li>Planning that prioritizes stability and long-term outcomes</li>
                </ul>

                <h2>Housing culture (STC)</h2>
                <p>
                  We use a warm, home-like approach that keeps navigation and next steps simple while staying
                  professional and funder-ready. Our housing culture is guided by <strong>STC</strong>:
                </p>
                <ul>
                  <li>
                    <strong>Safety</strong>: predictable communication, clear expectations, and nonjudgmental support.
                  </li>
                  <li>
                    <strong>Trust</strong>: transparency about options, timelines, and responsibilities.
                  </li>
                  <li>
                    <strong>Connection</strong>: coordinated referrals so veterans are not forced to navigate alone.
                  </li>
                </ul>

                <h2>Related services</h2>
                <ul>
                  <li>
                    <Link href="/programs/transportation-access">Transportation Access</Link> for appointments, work, and housing steps
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
                For staffing touchpoints, outcomes metrics (30/60/90-day and annual), and compliance approach, see{" "}
                <Link href="/operations">Operations &amp; Outcomes</Link>.
              </p>
            </div>

            <details className="partner-details">
              <summary>Housing Partners &amp; Support Agencies</summary>
              <ul>
                <li>
                  <strong>Memphis Housing Authority</strong>: housing access coordination.
                </li>
                <li>
                  <strong>Shelby County Housing Department</strong>: local housing alignment.
                </li>
                <li>
                  <strong>PSH / transitional / emergency providers (excluding Alpha Omega)</strong>: placement pathways.
                </li>
                <li>
                  <strong>Landlords &amp; property managers</strong>: placement and retention collaboration.
                </li>
              </ul>
              <p style={{ marginTop: "0.75rem" }}>
                Full role-based partner ecosystem: <Link href="/partners">Partners</Link>.
              </p>
            </details>
    </InnerPageShell>
  );
}

