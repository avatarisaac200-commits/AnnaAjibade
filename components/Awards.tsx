"use client";

import Image from "next/image";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";
import useRevealRefs from "@/components/useRevealRefs";

const details = [
  "The Nigeria 25 Under 25 Awards is a prestigious platform that recognizes young Nigerians under 25 who are making remarkable impacts in their fields, from business and innovation to arts, advocacy, and social entrepreneurship.",
  "This award celebrates vision, creativity, and hard work, shining a spotlight on the next generation of leaders who are shaping the future of Nigeria.",
  "Being part of this award and even the nomination class is an opportunity to showcase talent, dedication, and the impact of your work to a national audience.",
];

const imagePath = "/awards/25under25-voting-portal.jpg";

export default function Awards() {
  const setRef = useRevealRefs();

  return (
    <section
      id="awards"
      className="site-section bg-[linear-gradient(180deg,rgba(37,99,235,0.03)_0%,rgba(255,255,255,0)_100%)]"
    >
      <div className="pointer-events-none absolute right-0 top-20 h-72 w-72 rounded-full bg-gold/10 blur-[120px]" />

      <div className="section-frame grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div ref={setRef(0)} className="reveal delay-1">
          <div className="overflow-hidden rounded-[2rem] border border-gold/15 bg-cream/5 p-3 shadow-[0_24px_70px_rgba(15,23,42,0.12)]">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-slate-950">
              <Image
                src={imagePath}
                alt="Nigeria 25 Under 25 voting portal artwork"
                fill
                sizes="(max-width: 1024px) 100vw, 44vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div>
          <p
            ref={setRef(1)}
            className="reveal mb-4 font-mono text-xs uppercase tracking-[0.3em] text-gold"
          >
            Awards and Recognitions
          </p>
          <h2
            ref={setRef(2)}
            className="reveal delay-1 max-w-3xl font-display text-4xl font-black leading-tight md:text-5xl lg:text-6xl"
          >
            Recognition that amplifies{" "}
            <span className="gold-text italic">impact, visibility, and trust</span>.
          </h2>

          <div
            ref={setRef(3)}
            className="reveal delay-2 mt-8 rounded-[2rem] border border-gold/15 bg-gold/5 p-6 md:p-8"
          >
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-gold">
              Step 1
            </p>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-cream/75">
              Click on the voting portal link and you will be directed to the
              official 25 Under 25 website.
            </p>
            <a
              href="https://25under25.org/vote"
              target="_blank"
              rel="noreferrer"
              className="btn-primary mt-6 inline-flex items-center gap-3 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-white shadow-[0_16px_40px_rgba(37,99,235,0.28)] transition-colors duration-300 hover:bg-gold-light"
            >
              Visit the Voting Portal
              <HiArrowTopRightOnSquare size={18} />
            </a>
          </div>

          <div className="mt-8 space-y-5">
            <p
              ref={setRef(4)}
              className="reveal delay-3 font-mono text-xs uppercase tracking-[0.3em] text-cream/40"
            >
              About the Nigeria 25 Under 25 Awards
            </p>
            {details.map((item, index) => (
              <p
                key={item}
                ref={setRef(index + 5)}
                className="reveal text-base leading-relaxed text-cream/70"
              >
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
