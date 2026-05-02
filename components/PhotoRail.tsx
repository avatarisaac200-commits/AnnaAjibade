"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import ImageLightbox, { LightboxItem } from "@/components/ImageLightbox";

type Slide = {
  src: string;
  alt: string;
  label: string;
  note: string;
  imageClassName?: string;
  thumbClassName?: string;
};

const slides: Slide[] = [
  {
    src: "/photos/amara-1.jpg",
    alt: "Anna Ajibade portrait one",
    label: "Programme Lead",
    note: "Cross-sector delivery",
    imageClassName:
      "scale-[1.18] object-cover object-[center_12%] sm:scale-[1.22] lg:scale-[1.34] lg:object-[center_10%]",
    thumbClassName: "scale-[1.16] object-cover object-[center_12%]",
  },
  {
    src: "/photos/amara-2.jpg",
    alt: "Anna Ajibade portrait two",
    label: "Strategy Partner",
    note: "Mission-aligned execution",
    imageClassName:
      "scale-[1.16] object-cover object-[center_14%] sm:scale-[1.2] lg:scale-[1.3] lg:object-[center_12%]",
    thumbClassName: "scale-[1.14] object-cover object-[center_14%]",
  },
  {
    src: "/photos/amara-3.jpg",
    alt: "Anna Ajibade portrait three",
    label: "Stakeholder Builder",
    note: "Multi-stakeholder alignment",
    imageClassName:
      "scale-[1.18] object-cover object-[center_13%] sm:scale-[1.22] lg:scale-[1.32] lg:object-[center_11%]",
    thumbClassName: "scale-[1.15] object-cover object-[center_13%]",
  },
  {
    src: "/photos/amara-4.jpg",
    alt: "Anna Ajibade portrait four",
    label: "Impact Operator",
    note: "Systems with measurable outcomes",
    imageClassName:
      "scale-[1.15] object-cover object-[center_15%] sm:scale-[1.19] lg:scale-[1.28] lg:object-[center_12%]",
    thumbClassName: "scale-[1.13] object-cover object-[center_15%]",
  },
  {
    src: "/photos/amara-5.jpg",
    alt: "Anna Ajibade portrait five",
    label: "Trusted Advisor",
    note: "Clear decisions under complexity",
    imageClassName:
      "scale-[1.17] object-cover object-[center_11%] sm:scale-[1.21] lg:scale-[1.33] lg:object-[center_9%]",
    thumbClassName: "scale-[1.15] object-cover object-[center_11%]",
  },
];

export default function PhotoRail() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (selectedIndex !== null) return;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 4600);

    return () => window.clearInterval(timer);
  }, [selectedIndex]);

  const lightboxItems: LightboxItem[] = useMemo(
    () =>
      slides.map((slide) => ({
        src: slide.src,
        alt: slide.alt,
        caption: "Anna Ajibade",
        subcaption: `${slide.label} - ${slide.note}`,
      })),
    []
  );

  const goTo = (index: number) => {
    setActiveIndex((index + slides.length) % slides.length);
  };

  const activeSlide = slides[activeIndex];

  return (
    <>
      <div className="relative mx-auto max-w-[72rem] overflow-hidden rounded-[2.25rem] bg-[radial-gradient(circle_at_top_left,rgba(96,165,250,0.14),transparent_38%),linear-gradient(180deg,rgba(255,255,255,0.76)_0%,rgba(219,234,254,0.58)_100%)] p-3 shadow-[0_28px_90px_rgba(15,23,42,0.12)] dark:bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.16),transparent_38%),linear-gradient(180deg,rgba(15,23,42,0.82)_0%,rgba(8,15,30,0.95)_100%)] sm:p-4 md:p-5">
        <div className="relative overflow-hidden rounded-[1.9rem] bg-slate-950/5">
          <div className="relative h-[26rem] sm:h-[32rem] lg:mx-auto lg:h-[46rem] lg:max-w-[52rem] xl:h-[48rem]">
            <AnimatePresence mode="wait">
              <motion.button
                key={activeSlide.src}
                type="button"
                onClick={() => setSelectedIndex(activeIndex)}
                initial={shouldReduceMotion ? false : { opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.985 }}
                transition={{ duration: shouldReduceMotion ? 0.12 : 0.55, ease: "easeOut" }}
                className="absolute inset-0 block w-full cursor-zoom-in overflow-hidden bg-slate-950"
                aria-label={`Open ${activeSlide.alt}`}
              >
                <Image
                  src={activeSlide.src}
                  alt={activeSlide.alt}
                  fill
                  priority
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 92vw, 1200px"
                  className={
                    activeSlide.imageClassName ??
                    "scale-[1.18] object-cover object-[center_12%] lg:scale-[1.3]"
                  }
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.1)_0%,rgba(15,23,42,0.14)_34%,rgba(15,23,42,0.72)_100%)]" />
              </motion.button>
            </AnimatePresence>

            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 p-4 sm:p-6 lg:p-8">
              <div className="flex items-end justify-between gap-4">
                <div className="pointer-events-auto max-w-xl rounded-[1.5rem] border border-white/15 bg-slate-950/35 p-4 backdrop-blur-md sm:p-5">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`copy-${activeIndex}`}
                      initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
                      transition={{ duration: 0.24 }}
                    >
                      <p className="font-mono text-[10px] uppercase tracking-[0.34em] text-gold md:text-xs">
                        {activeSlide.label}
                      </p>
                      <p className="mt-3 font-display text-3xl font-black leading-tight text-white md:text-5xl">
                        Anna Ajibade
                      </p>
                      <p className="mt-3 max-w-md text-sm text-white/72 md:text-base">
                        {activeSlide.note}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>

                <div className="pointer-events-auto hidden items-center gap-3 md:flex">
                  <button
                    type="button"
                    onClick={() => goTo(activeIndex - 1)}
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-slate-950/35 text-white transition-colors duration-300 hover:border-white/35 hover:bg-slate-950/55"
                    aria-label="Previous slide"
                  >
                    <HiArrowLeft size={18} />
                  </button>
                  <button
                    type="button"
                    onClick={() => goTo(activeIndex + 1)}
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-slate-950/35 text-white transition-colors duration-300 hover:border-white/35 hover:bg-slate-950/55"
                    aria-label="Next slide"
                  >
                    <HiArrowRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 flex flex-col gap-4 px-1 sm:mt-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            {slides.map((slide, index) => (
              <button
                key={slide.src}
                type="button"
                onClick={() => goTo(index)}
                className={`overflow-hidden rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "h-2.5 w-14 bg-gold"
                    : "h-2.5 w-2.5 bg-gold/35 hover:bg-gold/60"
                }`}
                aria-label={`View slide ${index + 1}`}
              />
            ))}
          </div>

          <div className="grid grid-cols-3 gap-2 sm:flex sm:items-center">
            {slides.map((slide, index) => (
              <button
                key={`${slide.src}-thumb`}
                type="button"
                onClick={() => goTo(index)}
                className={`relative h-16 overflow-hidden rounded-[1rem] border transition-all duration-300 sm:w-20 ${
                  index === activeIndex
                    ? "border-gold shadow-[0_14px_35px_rgba(37,99,235,0.28)]"
                    : "border-white/10 opacity-65 hover:opacity-100"
                }`}
                aria-label={`Select ${slide.label}`}
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  sizes="80px"
                  className={
                    slide.thumbClassName ?? "scale-[1.14] object-cover object-[center_12%]"
                  }
                />
              </button>
            ))}
          </div>
        </div>
      </div>

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
