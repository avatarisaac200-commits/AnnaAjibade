"use client";

import { HiStar } from "react-icons/hi";
import useRevealRefs from "@/components/useRevealRefs";

const reviews = [
  {
    name: "Client Review 01",
    role: "Replace with real client name and role",
    quote:
      "Add a real client review here that speaks to structure, execution quality, communication, and measurable outcomes.",
  },
  {
    name: "Client Review 02",
    role: "Replace with real client name and organisation",
    quote:
      "Use this space for feedback that shows how the project was improved, delivered, or made more sustainable through your involvement.",
  },
  {
    name: "Client Review 03",
    role: "Replace with real stakeholder attribution",
    quote:
      "A premium portfolio should only use authentic testimonials, so replace this placeholder with verified client or partner feedback.",
  },
];

export default function Reviews() {
  const setRef = useRevealRefs();

  return (
    <section id="reviews" className="site-section bg-ink">
      <div className="pointer-events-none absolute left-1/2 top-24 h-80 w-[44rem] -translate-x-1/2 rounded-full bg-gold/8 blur-[120px]" />

      <div className="section-frame relative z-10">
        <div className="mb-14 max-w-3xl">
          <p
            ref={setRef(0)}
            className="reveal mb-4 font-mono text-xs uppercase tracking-[0.3em] text-gold"
          >
            Reviews
          </p>
          <h2
            ref={setRef(1)}
            className="reveal delay-1 font-display text-4xl font-black leading-tight md:text-5xl lg:text-6xl"
          >
            Trusted feedback from the people behind the{" "}
            <span className="gold-text italic">work and results</span>.
          </h2>
          <p
            ref={setRef(2)}
            className="reveal delay-2 mt-6 max-w-2xl text-base leading-relaxed text-cream/60"
          >
            Replace the placeholders below with real client, partner, or
            stakeholder testimonials. Strong reviews should reference delivery,
            clarity, communication, and impact.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <article
              key={review.name}
              ref={setRef(index + 3)}
              className="reveal card-glow rounded-[2rem] border border-gold/15 bg-cream/5 p-7"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="mb-5 flex gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <HiStar key={starIndex} size={18} />
                ))}
              </div>
              <p className="text-base leading-relaxed text-cream/72">
                "{review.quote}"
              </p>
              <div className="mt-8 border-t border-gold/10 pt-5">
                <p className="font-display text-xl font-bold text-cream">
                  {review.name}
                </p>
                <p className="mt-2 text-sm text-cream/45">{review.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
