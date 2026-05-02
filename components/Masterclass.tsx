"use client";

import Image from "next/image";
import useRevealRefs from "@/components/useRevealRefs";

const curriculum = [
  {
    day: "Day 01",
    date: "Friday, June 19 · 6:00 PM - 10:00 PM WAT",
    title: "Designing, Positioning, and Fundable Ideas",
    summary:
      "Turning ideas into clear, compelling, visible, and fundable concepts.",
    topics: [
      "The power of projects in the future of work",
      "From idea to clarity through structured thinking",
      "Designing high-impact projects and events",
      "Strategic positioning and branding",
      "Designing for visibility from day one",
      "Building fundable ideas from the start",
    ],
  },
  {
    day: "Day 02",
    date: "Saturday, June 20 · 6:00 PM - 10:00 PM WAT",
    title: "Funding, Partnerships, and Resource Mobilisation",
    summary:
      "Securing the money, partnerships, and resources needed to bring ideas to life.",
    topics: [
      "Understanding the African funding landscape",
      "Sponsor and partner psychology",
      "Crafting winning proposals and pitches",
      "Visibility and branding as a funding tool",
      "Building strategic partnerships",
      "Resource mobilisation beyond money",
    ],
  },
  {
    day: "Day 03",
    date: "Sunday, June 21 · 6:00 PM - 10:00 PM WAT",
    title: "Open Masterclass: Clarity and Real Conversations",
    summary:
      "Practical direction from practitioners with honest, real-world conversation.",
    topics: [
      "Project and event design live deep-dive Q&A",
      "Funding and sponsorship questions answered",
      "Execution and implementation challenges",
      "Branding and visibility strategies",
      "Personal growth and leadership consistency",
    ],
  },
];

const audience = [
  "University students involved in leadership, volunteering, or campus initiatives",
  "Early-career professionals building influence through project-based work",
  "NGO and social enterprise founders strengthening execution capacity",
  "Event planners and coordinators aiming for a more strategic standard",
  "Aspiring changemakers with ideas that need structure, funding, and direction",
];

const outcomes = [
  "Design structured, high-impact projects with clear objectives and delivery models",
  "Position initiatives with strategic clarity that attracts audience, funding, and partners",
  "Fund projects through stronger proposals, sponsorship approaches, and partnerships",
  "Mobilise financial and non-financial resources more effectively",
  "Execute projects and events with better systems, timelines, and team coordination",
  "Build long-term visibility and credibility that outlasts one-off projects",
];

export default function Masterclass() {
  const setRef = useRevealRefs();

  return (
    <>
      <section id="masterclass" className="site-section bg-cream/5">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.16),transparent_55%)]" />

        <div className="section-frame relative z-10">
          <div className="grid gap-10 xl:grid-cols-[0.95fr_1.05fr] xl:items-start">
            <div>
              <p
                ref={setRef(0)}
                className="reveal mb-4 font-mono text-xs uppercase tracking-[0.3em] text-gold"
              >
                Dreamers to Doers
              </p>
              <h2
                ref={setRef(1)}
                className="reveal delay-1 max-w-4xl font-display text-4xl font-black leading-tight md:text-5xl lg:text-6xl"
              >
                A Pan-African masterclass for turning{" "}
                <span className="gold-text italic">ideas into execution</span>.
              </h2>
              <p
                ref={setRef(2)}
                className="reveal delay-2 mt-6 max-w-2xl text-base leading-relaxed text-cream/65 md:text-lg"
              >
                An advanced 3-day masterclass on designing, funding, and
                executing world-class events and social impact projects for
                African changemakers ready to build with more clarity.
              </p>

              <div
                ref={setRef(3)}
                className="reveal delay-3 mt-8 rounded-[2rem] border border-gold/15 bg-ink p-6 md:p-8"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-gold/10 bg-gold/5 p-5">
                    <p className="font-mono text-xs uppercase tracking-[0.28em] text-gold">
                      Format
                    </p>
                    <p className="mt-3 font-display text-2xl font-bold text-cream">
                      Virtual on Zoom
                    </p>
                  </div>
                  <div className="rounded-2xl border border-gold/10 bg-gold/5 p-5">
                    <p className="font-mono text-xs uppercase tracking-[0.28em] text-gold">
                      Dates
                    </p>
                    <p className="mt-3 font-display text-2xl font-bold text-cream">
                      June 19 - 21
                    </p>
                  </div>
                  <div className="rounded-2xl border border-gold/10 bg-gold/5 p-5">
                    <p className="font-mono text-xs uppercase tracking-[0.28em] text-gold">
                      Daily Time
                    </p>
                    <p className="mt-3 font-display text-2xl font-bold text-cream">
                      6:00 PM - 10:00 PM WAT
                    </p>
                  </div>
                  <div className="rounded-2xl border border-gold/10 bg-gold/5 p-5">
                    <p className="font-mono text-xs uppercase tracking-[0.28em] text-gold">
                      Cohort
                    </p>
                    <p className="mt-3 font-display text-2xl font-bold text-cream">
                      100 changemakers
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#contact"
                  className="btn-primary rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-white shadow-[0_16px_40px_rgba(37,99,235,0.28)] transition-all duration-300 hover:bg-gold-light"
                >
                  Enquire About the Masterclass
                </a>
                <a
                  href="#masterclass-host"
                  className="rounded-full border border-gold/20 px-7 py-3.5 text-sm font-semibold text-cream transition-colors duration-300 hover:border-gold/40 hover:text-gold"
                >
                  Meet the Host
                </a>
              </div>
            </div>

            <div
              ref={setRef(4)}
              className="reveal delay-2 rounded-[2rem] border border-gold/15 bg-gold/5 p-6 md:p-8"
            >
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-gold">
                Why this matters
              </p>
              <h3 className="mt-4 font-display text-3xl font-black leading-tight text-cream md:text-4xl">
                Africa does not lack dreamers. It lacks equipped doers.
              </h3>
              <p className="mt-5 text-base leading-relaxed text-cream/65">
                Promising initiatives stall and strong ideas lose momentum not
                because of a lack of passion, but because execution systems,
                practical knowledge, and fundable structure are often missing.
              </p>
              <p className="mt-4 text-base leading-relaxed text-cream/65">
                This masterclass was built to close that gap through practical
                frameworks, real-world project thinking, and a focused path
                from concept to implementation.
              </p>

              <div className="mt-8 rounded-[1.5rem] border border-gold/10 bg-cream/5 p-5">
                <p className="font-mono text-xs uppercase tracking-[0.28em] text-gold">
                  Investment
                </p>
                <div className="mt-3 flex flex-wrap items-end gap-4">
                  <p className="font-display text-4xl font-black text-cream">
                    NGN 10,000
                  </p>
                  <p className="pb-1 text-sm text-cream/45 line-through">
                    NGN 20,000
                  </p>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-cream/60">
                  Early bird pricing from the source page, with full 3-day live
                  access and the same complete curriculum.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-20">
            <p
              ref={setRef(5)}
              className="reveal mb-4 font-mono text-xs uppercase tracking-[0.3em] text-gold"
            >
              Curriculum
            </p>
            <h3
              ref={setRef(6)}
              className="reveal delay-1 font-display text-3xl font-black leading-tight text-cream md:text-5xl"
            >
              3 days of end-to-end execution.
            </h3>

            <div className="mt-10 grid gap-6 xl:grid-cols-3">
              {curriculum.map((item, index) => (
                <article
                  key={item.day}
                  ref={setRef(index + 7)}
                  className="reveal card-glow rounded-[2rem] border border-gold/15 bg-ink p-7"
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  <p className="font-mono text-xs uppercase tracking-[0.28em] text-gold">
                    {item.day}
                  </p>
                  <p className="mt-3 text-xs uppercase tracking-[0.18em] text-cream/40">
                    {item.date}
                  </p>
                  <h4 className="mt-5 font-display text-2xl font-bold leading-tight text-cream">
                    {item.title}
                  </h4>
                  <p className="mt-4 text-sm leading-relaxed text-cream/65">
                    {item.summary}
                  </p>
                  <div className="mt-6 space-y-3">
                    {item.topics.map((topic) => (
                      <div key={topic} className="flex gap-3">
                        <span className="mt-2 block h-2 w-2 shrink-0 rounded-full bg-gold" />
                        <p className="text-sm leading-relaxed text-cream/60">
                          {topic}
                        </p>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-20 grid gap-8 xl:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p
                ref={setRef(10)}
                className="reveal mb-4 font-mono text-xs uppercase tracking-[0.3em] text-gold"
              >
                Who it&apos;s for
              </p>
              <h3
                ref={setRef(11)}
                className="reveal delay-1 font-display text-3xl font-black leading-tight text-cream md:text-5xl"
              >
                Built for serious Pan-African changemakers.
              </h3>
              <p
                ref={setRef(12)}
                className="reveal delay-2 mt-6 max-w-xl text-base leading-relaxed text-cream/65"
              >
                For participants ready to move beyond conversation and build
                ideas with stronger positioning, execution discipline, and
                resource mobilisation.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {audience.map((item, index) => (
                <div
                  key={item}
                  ref={setRef(index + 13)}
                  className="reveal rounded-2xl border border-gold/10 bg-gold/5 p-5"
                  style={{ transitionDelay: `${index * 0.08}s` }}
                >
                  <p className="text-sm leading-relaxed text-cream/65">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-20">
            <p
              ref={setRef(18)}
              className="reveal mb-4 font-mono text-xs uppercase tracking-[0.3em] text-gold"
            >
              Outcomes
            </p>
            <h3
              ref={setRef(19)}
              className="reveal delay-1 font-display text-3xl font-black leading-tight text-cream md:text-5xl"
            >
              What participants leave equipped to do.
            </h3>

            <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {outcomes.map((item, index) => (
                <div
                  key={item}
                  ref={setRef(index + 20)}
                  className="reveal rounded-2xl border border-gold/10 bg-ink p-6"
                  style={{ transitionDelay: `${index * 0.08}s` }}
                >
                  <p className="font-display text-xl font-bold text-cream">
                    {item.split(" ")[0]}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-cream/60">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="masterclass-host" className="site-section bg-ink">
        <div className="section-frame grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div ref={setRef(26)} className="reveal delay-1">
            <div className="relative mx-auto aspect-[4/5] max-w-[28rem] overflow-hidden rounded-[2rem] border border-gold/15 bg-gold/5 p-3 shadow-[0_28px_90px_rgba(15,23,42,0.2)]">
              <div className="relative h-full overflow-hidden rounded-[1.5rem] bg-slate-950">
                <Image
                  src="/photos/amara-4.jpg"
                  alt="Anna Ajibade"
                  fill
                  sizes="(max-width: 1024px) 100vw, 420px"
                  className="scale-[1.16] object-cover object-[center_12%]"
                />
              </div>
            </div>
          </div>

          <div>
            <p
              ref={setRef(27)}
              className="reveal mb-4 font-mono text-xs uppercase tracking-[0.3em] text-gold"
            >
              Host
            </p>
            <h2
              ref={setRef(28)}
              className="reveal delay-1 font-display text-4xl font-black leading-tight text-cream md:text-5xl lg:text-6xl"
            >
              Anna Ajibade
            </h2>
            <p
              ref={setRef(29)}
              className="reveal delay-2 mt-4 font-mono text-xs uppercase tracking-[0.28em] text-cream/45"
            >
              Senior Project Manager · Strategy and Execution Lead
            </p>

            <div className="mt-8 space-y-5">
              <p
                ref={setRef(30)}
                className="reveal delay-3 text-base leading-relaxed text-cream/68"
              >
                Anna Ajibade is a senior-level project manager focused on
                designing, coordinating, and executing high-impact initiatives
                across education, leadership, youth development, and social
                impact spaces.
              </p>
              <p
                ref={setRef(31)}
                className="reveal delay-4 text-base leading-relaxed text-cream/68"
              >
                Her work sits at the intersection of strategy and execution,
                helping teams move ideas from early concept into structured,
                measurable, and sustainable delivery.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                { value: "150+", label: "Projects delivered" },
                { value: "USD 20,000", label: "Funding mobilised" },
                { value: "3+", label: "Years of focused delivery" },
              ].map((item, index) => (
                <div
                  key={item.label}
                  ref={setRef(index + 32)}
                  className="reveal rounded-2xl border border-gold/10 bg-gold/5 p-5"
                  style={{ transitionDelay: `${index * 0.08}s` }}
                >
                  <p className="font-display text-2xl font-black text-cream">
                    {item.value}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-cream/55">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
