"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import ImageLightbox, { LightboxItem } from "@/components/ImageLightbox";
import useRevealRefs from "@/components/useRevealRefs";

const stats = [
  {
    value: 150,
    suffix: "+",
    label: "Projects delivered",
    sub: "Across multiple social impact contexts",
  },
  {
    value: 15,
    prefix: "NGN ",
    suffix: "M+",
    label: "Funding mobilised",
    sub: "Through structured partnerships and support",
  },
  {
    value: 3,
    suffix: "+",
    label: "Years of focused delivery",
    sub: "Driving measurable social change",
  },
  {
    value: 4,
    suffix: "",
    label: "Core practice areas",
    sub: "From design to sustainability",
  },
];

const footprints = [
  "Education initiatives",
  "Youth development projects",
  "Leadership development programmes",
  "Community engagement interventions",
  "Grassroots outreach programmes",
  "Large-scale social impact events",
];

const impactImages = Array.from({ length: 12 }, (_, index) => ({
  src: `/impact/impact-${index + 1}.jpg`,
  alt: `Impact footprint ${index + 1}`,
  caption: `Impact footprint ${index + 1}`,
}));

export default function Impact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.25 });
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const setRef = useRevealRefs();

  const lightboxItems: LightboxItem[] = useMemo(
    () =>
      impactImages.map((image) => ({
        src: image.src,
        alt: image.alt,
        caption: image.caption,
        subcaption: "Impact Footprints",
      })),
    []
  );

  return (
    <>
      <section id="impact" className="site-section bg-ink">
        <div
          className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 select-none whitespace-nowrap font-display text-[18vw] font-black leading-none text-cream/[0.02]"
          aria-hidden
        >
          IMPACT
        </div>

        <div className="section-frame relative z-10">
          <div className="grid items-start gap-10 xl:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="mb-12 max-w-2xl">
                <p
                  ref={setRef(0)}
                  className="reveal mb-4 font-mono text-xs uppercase tracking-[0.3em] text-gold"
                >
                  Impact Footprints
                </p>
                <h2
                  ref={setRef(1)}
                  className="reveal delay-1 font-display text-4xl font-black leading-tight md:text-5xl"
                >
                  Structured work that leaves{" "}
                  <span className="gold-text italic">measurable footprints</span>.
                </h2>
                <p
                  ref={setRef(2)}
                  className="reveal delay-2 mt-6 max-w-xl text-base leading-relaxed text-cream/65"
                >
                  These projects reflect real delivery across communities,
                  programmes, events, partnerships, and social impact systems.
                </p>
              </div>

              <div ref={ref} className="grid grid-cols-2 gap-4 sm:gap-5">
                {stats.map((stat, index) => (
                  <div
                    key={stat.label}
                    ref={setRef(index + 3)}
                    className="reveal card-glow rounded-2xl border border-gold/15 bg-gold/5 p-6 text-center"
                    style={{ transitionDelay: `${index * 0.12}s` }}
                  >
                    <div className="gold-text mb-2 font-display text-3xl font-black md:text-4xl">
                      {inView ? (
                        <CountUp
                          start={0}
                          end={stat.value}
                          duration={2.2}
                          prefix={stat.prefix ?? ""}
                          suffix={stat.suffix ?? ""}
                          delay={index * 0.15}
                        />
                      ) : (
                        <span>
                          {stat.prefix ?? ""}0{stat.suffix ?? ""}
                        </span>
                      )}
                    </div>
                    <div className="mb-1 text-sm font-medium text-cream">
                      {stat.label}
                    </div>
                    <div className="font-mono text-xs text-cream/40">
                      {stat.sub}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div ref={setRef(7)} className="reveal delay-2">
              <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
                {impactImages.map((image, index) => (
                  <motion.button
                    key={image.src}
                    type="button"
                    onClick={() => setSelectedIndex(index)}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 0.5,
                      delay: Math.min(index * 0.04, 0.3),
                      ease: "easeOut",
                    }}
                    whileHover={{ y: -6, rotate: index % 2 === 0 ? -1.2 : 1.2 }}
                    className={`group relative cursor-zoom-in overflow-hidden rounded-[1.35rem] shadow-[0_22px_50px_rgba(15,23,42,0.14)] ${
                      index % 5 === 0
                        ? "col-span-2 aspect-[2/1.1] md:col-span-1 md:aspect-[4/5]"
                        : "aspect-[4/5]"
                    }`}
                    aria-label={`Open ${image.alt}`}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 280px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/24 via-transparent to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-100" />
                  </motion.button>
                ))}
              </div>
            </div>
          </div>

          <div
            ref={setRef(8)}
            className="reveal mt-14 rounded-3xl border border-gold/10 bg-cream/3 p-8 md:p-10"
          >
            <p className="mb-8 text-center font-mono text-xs uppercase tracking-[0.3em] text-cream/35">
              Footprints across
            </p>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {footprints.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-gold/10 bg-gold/5 px-5 py-4 text-center text-sm font-medium text-cream/75"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ImageLightbox
        items={lightboxItems}
        currentIndex={selectedIndex}
        onClose={() => setSelectedIndex(null)}
        onPrev={() =>
          setSelectedIndex((current) =>
            current === null
              ? null
              : (current - 1 + lightboxItems.length) % lightboxItems.length
          )
        }
        onNext={() =>
          setSelectedIndex((current) =>
            current === null ? null : (current + 1) % lightboxItems.length
          )
        }
      />
    </>
  );
}
