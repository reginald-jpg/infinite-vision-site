import Link from "next/link";
import InnerPageShell, { CrumbLink } from "../components/InnerPageShell";

export const metadata = {
  title: "Operations & Outcomes | Infinite Vision",
  description:
    "Operational model, staffing touchpoints, outcomes measurement, and compliance approach for Infinite Vision’s integrated veteran programs in Memphis.",
};

export default function OperationsPage() {
  return (
    <InnerPageShell
      eyebrow="Operations"
      title="Operations & Outcomes"
      breadcrumbs={
        <>
          <CrumbLink href="/">Home</CrumbLink> / Operations
        </>
      }
      lead="Infinite Vision operates as an integrated delivery system: housing stability, transportation access, and financial empowerment reinforce each other so veterans are not navigating disconnected programs."
    >
            <div className="grid two">
              <div className="card">
                <h2>How the integrated workflow runs</h2>
                <ol className="program-steps">
                  <li>
                    <strong>Intake and triage</strong>: identify urgency, safety needs, and immediate barriers.
                  </li>
                  <li>
                    <strong>Assessment</strong>: determine housing barriers, mobility needs, and financial stability risks.
                  </li>
                  <li>
                    <strong>Service plan</strong>: align housing steps with transportation scheduling and financial milestones.
                  </li>
                  <li>
                    <strong>Stabilization</strong>: reduce missed appointments and failed handoffs through coordinated follow-up.
                  </li>
                  <li>
                    <strong>Retention</strong>: maintain stability through ongoing case management and escalation pathways.
                  </li>
                </ol>
                <p>
                  See program specifics in <Link href="/programs">Programs</Link>.
                </p>
              </div>

              <div className="card">
                <h2>Memphis implementation phases</h2>
                <ul>
                  <li>
                    <strong>0–30 days</strong>: stabilization (intake, immediate housing steps, mobility set-up)
                  </li>
                  <li>
                    <strong>30–60 days</strong>: mobility integration (reliable access to care, work, and training)
                  </li>
                  <li>
                    <strong>60–90+ days</strong>: long-term stability (retention, income routines, sustained supports)
                  </li>
                </ul>
                <p>
                  Built for a Memphis context where transportation gaps and fragmented service ecosystems can interrupt
                  care, work, and housing retention.
                </p>
              </div>
            </div>

            <div className="grid two">
              <div className="card">
                <h2>Staffing model (touchpoints)</h2>
                <ul>
                  <li>
                    <strong>Case managers</strong>: integrated service planning, follow-up, retention supports
                  </li>
                  <li>
                    <strong>Housing navigators</strong>: placement coordination and provider/landlord communication
                  </li>
                  <li>
                    <strong>Transportation coordinators</strong>: scheduling, tiering, vendor coordination, trip resolution
                  </li>
                  <li>
                    <strong>Financial coaches</strong>: budgeting, milestones, coaching cadence aligned to stability steps
                  </li>
                  <li>
                    <strong>Data &amp; outcomes staff</strong>: measurement, reporting, continuous improvement
                  </li>
                  <li>
                    <strong>Compliance &amp; QA</strong>: accessibility, safety, privacy processes, incident review
                  </li>
                  <li>
                    <strong>Program director</strong>: operational oversight, partner coordination, performance management
                  </li>
                  <li>
                    <strong>Executive director</strong>: strategy, funding, governance alignment, community accountability
                  </li>
                </ul>
              </div>

              <div className="card">
                <h2>Outcomes &amp; evaluation (what we track)</h2>
                <ul>
                  <li>
                    <strong>Housing retention</strong> (30/60/90-day and annual)
                  </li>
                  <li>
                    <strong>Transportation reliability</strong> (trip completion, on-time performance, issue resolution)
                  </li>
                  <li>
                    <strong>Reduced missed medical appointments</strong> through coordinated mobility planning
                  </li>
                  <li>
                    <strong>Employment placement</strong> and training follow-through (where applicable)
                  </li>
                  <li>
                    <strong>Income stabilization</strong> and financial milestones (budgeting, savings steps, bill protection)
                  </li>
                </ul>
                <p>
                  Partner ecosystems that reinforce trust live on <Link href="/partners">Partners</Link>.
                </p>
              </div>
            </div>

            <div className="grid two">
              <div className="card">
                <h2>Risk, compliance, and safety</h2>
                <ul>
                  <li>
                    <strong>Trauma-informed care</strong>: predictable communication and nonjudgmental support
                  </li>
                  <li>
                    <strong>Veteran privacy</strong>: minimum necessary information sharing for coordination
                  </li>
                  <li>
                    <strong>Transportation safety</strong>: incident reporting and escalation paths
                  </li>
                  <li>
                    <strong>ADA / accessibility</strong>: accessible options and accommodations where required
                  </li>
                  <li>
                    <strong>Financial data protection</strong>: sensitive data minimization and safe handling
                  </li>
                  <li>
                    <strong>Continuous quality improvement</strong>: learn-and-improve loops based on outcomes data
                  </li>
                </ul>
              </div>

              <div className="card">
                <h2>Care-model inspiration (principles)</h2>
                <ul>
                  <li>
                    <strong>Warm, human-centered experience</strong>: welcoming, safe, dignified pathways
                  </li>
                  <li>
                    <strong>Clean structure and clarity</strong>: simple navigation, modular programs, clear next steps
                  </li>
                  <li>
                    <strong>Professional and scalable</strong>: funder-ready reporting and operational consistency
                  </li>
                </ul>
              </div>
            </div>
    </InnerPageShell>
  );
}

