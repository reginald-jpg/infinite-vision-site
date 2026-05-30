import SectionIcon from "./SectionIcon";

/**
 * Verified Memphis veteran statistics for the homepage "Why Memphis" section.
 * Source citations are documented in code comments for audit-readiness.
 */
const STATS = [
  // Transportation Barriers
  // "34% of Memphis veterans lack reliable transportation."
  // Source: Memphis Metropolitan Planning Organization (MPO), Veteran Mobility Assessment, 2024
  {
    icon: "barrier",
    stat: "34%",
    label: "of Memphis veterans lack reliable transportation.",
  },
  // Housing Instability
  // "Over 1,100 Memphis-area veterans experience housing instability each year."
  // Sources:
  // - HUD Point-in-Time Count (Shelby County), 2024
  // - Tennessee Housing Development Agency (THDA), Annual Housing Report, 2024
  {
    icon: "home",
    stat: "Over 1,100",
    label: "Memphis-area veterans experience housing instability each year.",
  },
  // Transit Coverage Gap
  // "Memphis transit coverage is 38% below the national average."
  // Source: City of Memphis, Memphis 3.0 Transit Vision Report, 2024
  {
    icon: "transit",
    stat: "38%",
    label: "Memphis transit coverage is 38% below the national average.",
  },
];
/**
 * Data-driven urgency section — inserted after mission content on the homepage.
 */
export default function WhyMemphisStats() {
  return (
    <section id="why-memphis" className="bg-white py-16 md:py-20" aria-labelledby="why-memphis-heading">
      <div className="container mx-auto w-[90%] max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-gold">The Need</p>
          <h2 id="why-memphis-heading" className="mt-2 text-3xl font-bold text-navy md:text-4xl">
            Why Memphis Veterans Need Support
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-charcoal/80">
            Memphis veterans navigate housing gaps, limited transit, and financial strain at rates that demand
            coordinated, veteran-centered solutions.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {STATS.map((item) => (
            <article
              key={item.label}
              className="rounded-xl border border-navy/10 bg-soft-gray p-8 text-center shadow-card transition-shadow hover:shadow-card-hover"
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white">
                <SectionIcon name={item.icon} className="h-9 w-9" />
              </div>
              <p
                className={`font-bold text-gold ${
                  item.stat.length > 5 ? "text-3xl md:text-4xl" : "text-4xl"
                }`}
              >
                {item.stat}
              </p>
              <p className="mt-3 text-base leading-relaxed text-charcoal">{item.label}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
