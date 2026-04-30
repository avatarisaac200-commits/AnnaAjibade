"use client";

import useRevealRefs from "@/components/useRevealRefs";

const highlights = [
  {
    title: "150+ Projects Delivered",
    desc: "Across education, youth development, leadership, community engagement, and social impact initiatives.",
  },
  {
    title: "NGN 15 Million+ Mobilised",
    desc: "Raised through structured collaboration with teams, partners, and stakeholders.",
  },
  {
    title: "Strategy to Execution",
    desc: "Building systems that ensure ideas do not just start, but finish with clarity and accountability.",
  },
  {
    title: "Senior-Level Coordination",
    desc: "Managing grassroots programmes, large-scale events, and multi-stakeholder interventions.",
  },
];

export default function About() {
  const setRef = useRevealRefs({ threshold: 0.15 });

  return (
    <section id="about" className="site-section bg-ink">
      <div className="absolute left-0 top-0 h-full w-1/2 bg-gradient-to-r from-gold/5 to-transparent pointer-events-none" />

      <div className="section-frame grid items-start gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
        <div>
          <p
            ref={setRef(0)}
            className="reveal delay-1 mb-6 font-mono text-xs uppercase tracking-[0.3em] text-gold"
          >
            About Me
          </p>
          <h2
            ref={setRef(1)}
            className="reveal delay-2 mb-8 font-display text-4xl font-black leading-tight md:text-5xl lg:text-6xl"
          >
            I tell stories across{" "}
            <span className="gold-text italic">pages, projects, and places</span>{" "}
            that shape progressive mindsets.
          </h2>

          <blockquote
            ref={setRef(2)}
            className="reveal delay-3 ember-line mb-10 pl-6"
          >
            <p className="font-display text-xl italic leading-relaxed text-cream/85">
              What if the difference between an idea that fades and one that
              transforms lives is not brilliance, but structure and execution?
            </p>
          </blockquote>

          <div className="space-y-5">
            <p
              ref={setRef(3)}
              className="reveal delay-4 text-base leading-relaxed text-cream/70"
            >
              Every impactful initiative once existed as a passing thought:
              uncertain, unstructured, and easy to ignore. The real work begins
              with the questions that shape execution: how do we make this
              work, who does it serve, and how far can it go?
            </p>
            <p
              ref={setRef(4)}
              className="reveal delay-5 text-base leading-relaxed text-cream/70"
            >
              Hello, my name is Anna Ajibade. I am a senior-level project
              manager with a strong focus on designing, coordinating, and
              executing high-impact initiatives that drive measurable social
              change.
            </p>
            <p
              ref={setRef(5)}
              className="reveal delay-6 text-base leading-relaxed text-cream/70"
            >
              Over the past three years, I have led and delivered more than 150
              projects spanning education, youth and leadership development,
              community engagement, and social impact initiatives. My work has
              ranged from grassroots outreach programmes and large-scale events
              to multi-stakeholder interventions that address real community
              needs and systemic gaps.
            </p>
            <p
              ref={setRef(6)}
              className="reveal text-base leading-relaxed text-cream/70"
            >
              I have also successfully mobilised over 15 million naira in
              funding, working with teams, partners, and stakeholders to
              translate ideas into structured, fundable, and sustainable
              projects. My work sits at the intersection of strategy and
              execution, building systems that ensure ideas do not just start,
              but are completed with clarity, accountability, and impact.
            </p>
          </div>
        </div>

        <div ref={setRef(7)} className="reveal delay-3 grid gap-4 sm:grid-cols-2">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="card-glow rounded-2xl border border-gold/10 bg-gold/5 p-6"
            >
              <h3 className="mb-3 font-display text-lg font-bold text-cream">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-cream/60">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
