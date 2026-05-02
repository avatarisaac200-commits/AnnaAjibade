"use client";

import { motion } from "framer-motion";
import { HiArrowDown } from "react-icons/hi";
import PhotoRail from "@/components/PhotoRail";

const stats = [
  { value: "150+", label: "Projects delivered" },
  { value: "USD 20,000", label: "Funding mobilised" },
  { value: "3+", label: "Years of focused delivery" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pb-20 pt-20 sm:px-6 md:pb-24 md:pt-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(96,165,250,0.16),transparent_22%),radial-gradient(circle_at_top_right,rgba(14,165,233,0.12),transparent_26%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.12),transparent_22%),radial-gradient(circle_at_top_right,rgba(59,130,246,0.14),transparent_26%)]" />
      <div className="absolute left-1/2 top-24 -z-10 h-80 w-[44rem] -translate-x-1/2 rounded-full bg-gold/10 blur-[140px]" />

      <div className="section-frame">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-12 md:mb-14"
        >
          <PhotoRail />
        </motion.div>

        <div className="grid items-end gap-8 xl:grid-cols-[1.2fr_0.8fr] xl:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="theme-surface rounded-[2rem] p-7 sm:p-8 md:p-10 xl:p-12"
          >
            <p className="mb-6 font-mono text-xs uppercase tracking-[0.34em] text-gold">
              Senior project manager
            </p>
            <h1 className="max-w-4xl font-display text-4xl font-black leading-[0.97] tracking-tight text-cream sm:text-5xl md:text-6xl xl:text-7xl">
              I tell stories across{" "}
              <span className="gold-text italic">pages, projects, and places</span>{" "}
              that shape progressive mindsets.
            </h1>
            <p className="theme-muted mt-6 max-w-2xl text-base leading-relaxed sm:text-lg md:text-xl">
              Anna Ajibade designs, coordinates, and executes high-impact
              initiatives that move ideas from concept to structured,
              measurable social change.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="btn-primary rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-white shadow-[0_16px_40px_rgba(37,99,235,0.28)] transition-all duration-300 hover:bg-gold-light"
              >
                Start a Project
              </a>
              <a
                href="#services"
                className="rounded-full border border-gold/20 px-7 py-3.5 text-sm font-semibold text-cream transition-colors duration-300 hover:border-gold/40 hover:text-gold"
              >
                View Services
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="space-y-5 xl:pl-2"
          >
            <div className="theme-surface rounded-[2rem] p-7">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-gold">
                What Anna brings
              </p>
              <ul className="mt-5 space-y-4">
                {[
                  "Structured project architecture that turns raw ideas into clear execution plans",
                  "Strong coordination across teams, partners, stakeholders, and community-facing work",
                  "Operational systems that keep delivery accountable, fundable, and sustainable",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-base text-cream">
                    <span className="mt-2 block h-2 w-2 shrink-0 rounded-full bg-gold" />
                    <span className="theme-muted leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 xl:grid-cols-1 2xl:grid-cols-3">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.35 + index * 0.1 }}
                  className="theme-surface rounded-[1.5rem] p-5"
                >
                  <p className="font-display text-3xl font-black text-cream">
                    {stat.value}
                  </p>
                  <p className="theme-muted mt-2 text-sm leading-relaxed">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        className="mt-10 flex flex-col items-center gap-2 text-center text-gold/70"
      >
        <span className="font-mono text-xs uppercase tracking-[0.3em]">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <HiArrowDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
}
