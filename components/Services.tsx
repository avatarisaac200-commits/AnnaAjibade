"use client";

import useRevealRefs from "@/components/useRevealRefs";

const coreServices = [
  {
    number: "01",
    title: "Project Architecture and Design",
    desc: "Structuring ideas into clearly defined projects with scope, objectives, deliverables, and a viable execution pathway.",
  },
  {
    number: "02",
    title: "Operational Management",
    desc: "Designing systems, workflows, and delivery structures that keep projects coordinated, accountable, and moving.",
  },
  {
    number: "03",
    title: "Partnership Development and Resource Mobilisation",
    desc: "Building stakeholder alignment while developing funding, sponsorship, and partnership strategies that support delivery.",
  },
  {
    number: "04",
    title: "Impact Evaluation and Sustainability Design",
    desc: "Creating measurement, reporting, and continuity systems that strengthen learning, accountability, and long-term value.",
  },
];

const packages = [
  {
    title: "Ignite Session",
    investment: "$100",
    summary:
      "A focused one-hour strategy and clarity session that turns early-stage thinking into a defined and execution-ready project framework.",
    bullets: [
      "Project initiation and requirement gathering",
      "Scope definition, objectives, and deliverables",
      "Work breakdown structure and roadmap development",
      "Stakeholder mapping and early risk assessment",
    ],
    outcome:
      "You receive a Project Initiation Document with clear scope, structured direction, and a step-by-step execution roadmap.",
  },
  {
    title: "Implementation Partnership",
    investment: "$800 - $2,000",
    summary:
      "A one-off engagement for projects already in motion that need stronger coordination, execution support, and operational clarity.",
    bullets: [
      "Execution refinement and workstream coordination",
      "Stakeholder alignment and communication support",
      "Timeline, milestone, and accountability structuring",
      "Issue resolution and workflow system design",
    ],
    outcome:
      "Your project gains stronger execution structure, improved coordination systems, and smoother delivery from planning into implementation.",
  },
  {
    title: "Impact Execution",
    investment: "$2,500 - $4,500",
    summary:
      "A comprehensive end-to-end project management service where Anna takes ownership of the project lifecycle from initiation through closure.",
    bullets: [
      "Full scope definition, planning, and task decomposition",
      "Budgeting, resource planning, and team structuring",
      "Stakeholder, sponsorship, and partnership management",
      "Execution oversight, monitoring, evaluation, and closure",
    ],
    outcome:
      "Your project is delivered as a fully managed initiative with defined systems, governance, accountability, and measurable outcomes.",
  },
];

export default function Services() {
  const setRef = useRevealRefs();

  return (
    <section id="services" className="site-section diagonal-cut-reverse bg-cream/5">
      <div className="absolute right-0 top-1/3 h-80 w-80 bg-ember/5 blur-[110px] pointer-events-none" />

      <div className="section-frame">
        <div className="mb-20 max-w-3xl">
          <p
            ref={setRef(0)}
            className="reveal mb-4 font-mono text-xs uppercase tracking-[0.3em] text-gold"
          >
            My Services
          </p>
          <h2
            ref={setRef(1)}
            className="reveal delay-1 font-display text-4xl font-black leading-tight md:text-5xl lg:text-6xl"
          >
            Strategic services designed to move{" "}
            <span className="gold-text italic">ideas into execution</span>.
          </h2>
        </div>

        <div className="mb-20 divide-y divide-gold/10">
          {coreServices.map((service, index) => (
            <div
              key={service.title}
              ref={setRef(index + 2)}
              className="reveal group grid gap-6 rounded-2xl px-3 py-10 transition-colors duration-500 hover:bg-gold/3 md:grid-cols-[120px_1fr]"
              style={{ transitionDelay: `${index * 0.08}s` }}
            >
              <span className="pt-1 font-display text-5xl font-black leading-none text-cream/10 transition-colors duration-500 group-hover:text-gold/30">
                {service.number}
              </span>
              <div>
                <h3 className="mb-3 font-display text-xl font-bold text-cream transition-colors duration-300 group-hover:text-gold md:text-2xl">
                  {service.title}
                </h3>
                <p className="max-w-3xl text-sm leading-relaxed text-cream/60 md:text-base">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-8 max-w-3xl">
          <p
            ref={setRef(6)}
            className="reveal mb-4 font-mono text-xs uppercase tracking-[0.3em] text-gold"
          >
            Signature Offers
          </p>
          <h3
            ref={setRef(7)}
            className="reveal delay-1 font-display text-3xl font-bold leading-tight text-cream md:text-4xl"
          >
            Three ways to work together on a one-off project basis.
          </h3>
        </div>

        <div className="grid gap-6 xl:grid-cols-3">
          {packages.map((item, index) => (
            <article
              key={item.title}
              ref={setRef(index + 8)}
              className="reveal card-glow flex h-full flex-col rounded-3xl border border-gold/15 bg-gold/5 p-8"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="mb-5 flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.28em] text-gold">
                    {item.title}
                  </p>
                  <h4 className="mt-3 font-display text-3xl font-bold text-cream">
                    {item.investment}
                  </h4>
                </div>
              </div>
              <p className="mb-6 text-sm leading-relaxed text-cream/65">
                {item.summary}
              </p>
              <div className="mb-6 space-y-3">
                {item.bullets.map((bullet) => (
                  <div key={bullet} className="flex gap-3">
                    <span className="mt-2 block h-2 w-2 shrink-0 rounded-full bg-gold" />
                    <p className="text-sm leading-relaxed text-cream/60">
                      {bullet}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-auto rounded-2xl border border-gold/10 bg-cream/5 p-5">
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-gold">
                  Outcome
                </p>
                <p className="mt-3 text-sm leading-relaxed text-cream/65">
                  {item.outcome}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
