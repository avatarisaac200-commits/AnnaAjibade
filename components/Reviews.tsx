"use client";

import { HiStar } from "react-icons/hi";
import useRevealRefs from "@/components/useRevealRefs";

const reviews = [
  {
    name: "Adaeze M.",
    role: "Programme Director",
    quote:
      "Anna brought structure to a project that had vision but no real execution system. She helped us clarify priorities, coordinate stakeholders, and move from scattered ideas into a working plan that the team could actually deliver against.",
  },
  {
    name: "Tosin A.",
    role: "Founder, Social Impact Initiative",
    quote:
      "What stood out most was her ability to stay calm under pressure while keeping every moving part aligned. Communication improved immediately, timelines became clearer, and we had far more confidence in how the project was being managed.",
  },
  {
    name: "Esther O.",
    role: "Partnerships and Operations Lead",
    quote:
      "Anna combines strategic thinking with disciplined follow-through. She does not just help you plan well, she helps you build the systems, accountability, and clarity needed to see the work through properly.",
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
            Feedback from clients and collaborators who value structure,
            delivery discipline, thoughtful coordination, and measurable
            outcomes.
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
