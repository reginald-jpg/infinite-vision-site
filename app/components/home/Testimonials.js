/**
 * Enhanced testimonial cards with navy typography and gold accents.
 */
const TESTIMONIALS = [
  {
    quote:
      "Infinite Vision helped me keep my housing and get to my VA appointments on time.",
    name: "Sgt. J. Williams, U.S. Army (Ret.)",
  },
  {
    quote: "The financial coaching and transportation stipends gave my family breathing room.",
    name: "SSG M. Rodriguez, Army National Guard",
  },
  {
    quote: "Coordinated housing, transportation, and budgeting let me focus on recovery.",
    name: "Cpl. A. Johnson, USMC Veteran",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-white py-16 md:py-20" aria-labelledby="testimonials-heading">
      <div className="container mx-auto w-[90%] max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-gold">Veteran Voices</p>
          <h2 id="testimonials-heading" className="mt-2 text-3xl font-bold text-navy md:text-4xl">
            Veteran Voices
          </h2>
          <p className="mt-4 text-lg text-charcoal/80">
            Sample testimonials representing the impact Infinite Vision aims to deliver.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {TESTIMONIALS.map((item) => (
            <figure
              key={item.name}
              className="flex flex-col rounded-xl bg-soft-gray p-8 shadow-card transition-shadow hover:shadow-card-hover"
            >
              <div
                className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-navy text-gold"
                aria-hidden="true"
              >
                <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C9.24 2 7 4.24 7 7v1H6a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V10a2 2 0 00-2-2h-1V7c0-2.76-2.24-5-5-5zm0 2a3 3 0 013 3v1H9V7a3 3 0 013-3z" />
                </svg>
              </div>
              <blockquote className="flex-1 border-l-4 border-gold pl-4 text-lg leading-relaxed text-navy">
                &ldquo;{item.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 text-sm font-semibold text-gold">{item.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
