"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import useRevealRefs from "@/components/useRevealRefs";

const retainers = [
  {
    name: "Ignite Sessions Retainer",
    price: "$700 - $1,500 / month",
    summary:
      "A strategic advisory and project structuring retainer for individuals, teams, or organisations managing one or multiple projects at the idea, initiation, or planning stage.",
    points: [
      "Continuous advisory across active projects",
      "Project definition, clarification, and scope refinement",
      "Roadmap development and high-level planning support",
      "Early-stage governance, risk, and feasibility guidance",
    ],
  },
  {
    name: "Implementation Partnership Retainer",
    price: "$3,500 - $8,000 / month",
    summary:
      "An execution support retainer for project environments that need continuous coordination, delivery oversight, and stronger operational systems across active workstreams.",
    points: [
      "Execution support across active projects",
      "Workstream coordination and dependency tracking",
      "Stakeholder engagement and communication management",
      "Team alignment, delivery discipline, and workflow improvement",
    ],
  },
  {
    name: "Impact Execution Retainer",
    price: "$8,000 - $15,000 / month",
    summary:
      "A full embedded project management model for organisations requiring end-to-end delivery ownership across multiple initiatives or complex project ecosystems.",
    points: [
      "Full lifecycle project management across projects",
      "Governance, budgeting, risk, and performance systems",
      "Leadership coordination and stakeholder ecosystem management",
      "Accountability for outcomes, deliverables, and execution integrity",
    ],
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const setRef = useRevealRefs();

  const prev = () =>
    setCurrent((value) => (value - 1 + retainers.length) % retainers.length);
  const next = () => setCurrent((value) => (value + 1) % retainers.length);

  return (
    <section id="testimonials" className="site-section bg-cream/5">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sage/5 blur-[120px]" />

      <div className="section-frame relative z-10 max-w-5xl">
        <div className="mb-16 text-center">
          <p
            ref={setRef(0)}
            className="reveal mb-4 font-mono text-xs uppercase tracking-[0.3em] text-gold"
          >
            Retention Model
          </p>
          <h2
            ref={setRef(1)}
            className="reveal delay-1 font-display text-4xl font-black leading-tight md:text-5xl"
          >
            Embedded support for{" "}
            <span className="gold-text italic">continuous project delivery</span>.
          </h2>
        </div>

        <div
          ref={setRef(2)}
          className="reveal delay-2 relative overflow-hidden rounded-3xl border border-gold/15 bg-ink p-8 md:p-14"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.45, ease: "easeInOut" }}
              className="relative z-10"
            >
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-gold">
                {retainers[current].name}
              </p>
              <h3 className="mt-4 font-display text-4xl font-black text-cream md:text-5xl">
                {retainers[current].price}
              </h3>
              <p className="mb-8 mt-5 text-base leading-relaxed text-cream/70 md:text-lg">
                {retainers[current].summary}
              </p>

              <div className="grid gap-4 md:grid-cols-2">
                {retainers[current].points.map((point) => (
                  <div
                    key={point}
                    className="rounded-2xl border border-gold/10 bg-gold/5 p-5 text-sm leading-relaxed text-cream/70"
                  >
                    {point}
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="absolute bottom-6 right-6 flex gap-3 md:bottom-8 md:right-10">
            <button
              onClick={prev}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 text-gold transition-colors hover:bg-gold/10"
            >
              <HiChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 text-gold transition-colors hover:bg-gold/10"
            >
              <HiChevronRight size={18} />
            </button>
          </div>

          <div className="absolute bottom-7 left-1/2 flex -translate-x-1/2 gap-2 md:bottom-10">
            {retainers.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === current ? "w-4 bg-gold" : "w-1.5 bg-cream/20"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
