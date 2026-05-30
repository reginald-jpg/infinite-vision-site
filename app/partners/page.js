import Link from "next/link";
import InnerPageShell, { CrumbLink } from "../components/InnerPageShell";

export const metadata = {
  title: "Partners | Infinite Vision",
  description:
    "Memphis-aligned partner ecosystem supporting veteran housing stability, transportation access, financial empowerment, and community integration.",
};

export default function PartnersPage() {
  return (
    <InnerPageShell
      eyebrow="Partners"
      title="Partner Ecosystem"
      breadcrumbs={
        <>
          <CrumbLink href="/">Home</CrumbLink> / Partners
        </>
      }
      lead="Infinite Vision coordinates across Memphis to reduce missed appointments, stabilize housing, and support long-term mobility and financial progress. Partners are shown as role-based ecosystems (not logos) to keep pathways clear and trustworthy."
    >
            <div className="grid two">
              <div className="card">
                <h2>Veteran &amp; Government Partners</h2>
                <ul>
                  <li>
                    <strong>Memphis VA Medical Center</strong>: clinical care coordination and access points for veteran support.
                  </li>
                  <li>
                    <strong>Tennessee Department of Veterans Services</strong>: benefits navigation and state-aligned support.
                  </li>
                  <li>
                    <strong>Shelby County Veterans Services Office</strong>: local navigation and veteran service coordination.
                  </li>
                  <li>
                    <strong>VA Community Care Network (CCN)</strong>: community-based care access pathways.
                  </li>
                  <li>
                    <strong>VA Homeless Programs (SSVF, HUD-VASH, GPD)</strong>: housing stabilization resources and referrals.
                  </li>
                  <li>
                    <strong>Tennessee Valley Healthcare System</strong>: regional VA-aligned system coordination.
                  </li>
                  <li>
                    <strong>Memphis Vet Center</strong>: counseling and veteran support services.
                  </li>
                  <li>
                    <strong>Tennessee National Guard Family Programs</strong>: family support connections for Guard members.
                  </li>
                  <li>
                    <strong>U.S. DOL VETS</strong>: workforce-aligned veteran employment support coordination.
                  </li>
                </ul>
              </div>

              <div className="card">
                <h2>Transportation Partners</h2>
                <ul>
                  <li>
                    <strong>MATA</strong>: public transit connectivity and route-based access.
                  </li>
                  <li>
                    <strong>Uber Health</strong>: non-emergency medical transportation coordination options.
                  </li>
                  <li>
                    <strong>Lyft Concierge</strong>: scheduled rides and managed trip coordination.
                  </li>
                  <li>
                    <strong>NEMT providers</strong>: medical trip fulfillment where eligible.
                  </li>
                  <li>
                    <strong>Micro-transit providers</strong>: on-demand or flexible route options where available.
                  </li>
                  <li>
                    <strong>Shuttle vendors</strong>: workforce and program shuttles for predictable travel.
                  </li>
                  <li>
                    <strong>Workforce shuttle partners</strong>: employer-aligned or training-aligned route coordination.
                  </li>
                </ul>
                <p>
                  Explore the full mobility model in <Link href="/programs/transportation-access">Transportation Access</Link>.
                </p>
              </div>
            </div>

            <div className="grid two">
              <div className="card">
                <h2>Housing Partners</h2>
                <ul>
                  <li>
                    <strong>Memphis Housing Authority</strong>: housing access pathways and coordination.
                  </li>
                  <li>
                    <strong>Shelby County Housing Department</strong>: local housing supports and alignment.
                  </li>
                  <li>
                    <strong>Habitat for Humanity Memphis</strong>: housing stability supports where applicable.
                  </li>
                  <li>
                    <strong>United Housing, Inc.</strong>: housing support coordination and resources.
                  </li>
                  <li>
                    <strong>Memphis Center for Independent Living</strong>: disability access and independent living supports.
                  </li>
                  <li>
                    <strong>Permanent supportive housing providers</strong>: stabilization supports and retention resources.
                  </li>
                  <li>
                    <strong>Transitional housing providers</strong>: step-down pathways toward stability.
                  </li>
                  <li>
                    <strong>Emergency shelters (excluding Alpha Omega)</strong>: crisis stabilization entry points.
                  </li>
                  <li>
                    <strong>Local landlords &amp; property managers</strong>: placement options and retention collaboration.
                  </li>
                </ul>
                <p>
                  Explore the step-by-step pathway in <Link href="/programs/housing-pathways">Housing Pathways</Link>.
                </p>
              </div>

              <div className="card">
                <h2>Financial Empowerment Partners</h2>
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
                <p>
                  Explore platform elements in <Link href="/programs/financial-empowerment">Financial Empowerment</Link>.
                </p>
              </div>
            </div>

            <div className="grid two">
              <div className="card">
                <h2>Workforce &amp; Employment Partners</h2>
                <h3>Major employers</h3>
                <ul>
                  <li>FedEx</li>
                  <li>Amazon</li>
                  <li>Nike Distribution Center</li>
                  <li>AutoZone</li>
                  <li>St. Jude</li>
                  <li>Methodist</li>
                  <li>Baptist</li>
                  <li>Regional One</li>
                  <li>City of Memphis</li>
                  <li>Shelby County Government</li>
                  <li>Memphis-Shelby County Schools</li>
                </ul>
                <h3>Workforce agencies</h3>
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
                    <strong>Goodwill Excel Center</strong>: education and workforce readiness.
                  </li>
                  <li>
                    <strong>HopeWorks</strong>: training and career pathway supports.
                  </li>
                </ul>
              </div>

              <div className="card">
                <h2>Community, Education, Healthcare &amp; Legal Partners</h2>

                <h3>Healthcare &amp; behavioral health</h3>
                <ul>
                  <li>Methodist</li>
                  <li>Baptist</li>
                  <li>Regional One</li>
                  <li>Christ Community</li>
                  <li>Church Health</li>
                  <li>Memphis Mental Health Institute</li>
                  <li>Alliance Healthcare</li>
                  <li>Lakeside</li>
                  <li>Compass</li>
                  <li>Memphis Recovery Centers</li>
                  <li>Serenity Recovery Centers</li>
                </ul>

                <h3>Community &amp; social services</h3>
                <ul>
                  <li>Mid-South Food Bank</li>
                  <li>YMCA</li>
                  <li>Boys &amp; Girls Clubs</li>
                  <li>Salvation Army (non-residential)</li>
                  <li>Catholic Charities</li>
                  <li>Jewish Family Services</li>
                  <li>Faith-based partners (non-residential)</li>
                  <li>Memphis Public Libraries</li>
                </ul>

                <h3>Education &amp; training</h3>
                <ul>
                  <li>Southwest Tennessee Community College</li>
                  <li>University of Memphis VMSS</li>
                  <li>TCAT</li>
                  <li>CodeCrew</li>
                  <li>Moore Tech</li>
                  <li>Apprenticeship programs</li>
                </ul>

                <h3>Legal &amp; court</h3>
                <ul>
                  <li>Shelby County Veterans Court</li>
                  <li>Memphis Area Legal Services</li>
                  <li>Community Legal Center</li>
                  <li>Tennessee Justice Center</li>
                </ul>
              </div>
            </div>

            <div className="card" style={{ marginTop: "1.5rem" }}>
              <h2>How partners appear across the website</h2>
              <ul>
                <li>
                  Program pages show partner lists as <strong>collapsed</strong> sections at the bottom to reinforce trust without
                  diluting the veteran experience.
                </li>
                <li>
                  We do not place partner lists on the homepage hero or donation experience.
                </li>
              </ul>
              <p>
                Start with <Link href="/programs">Programs</Link> to see how these ecosystems support step-by-step pathways.
              </p>
            </div>
    </InnerPageShell>
  );
}

