"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import ImageLightbox, { LightboxItem } from "@/components/ImageLightbox";

type Slide = {
  src: string;
  alt: string;
  label: string;
  note: string;
};

const slides: Slide[] = [
  {
    src: "/photos/amara-1.jpg",
    alt: "Anna Ajibade portrait one",
    label: "Programme Lead",
    note: "Cross-sector delivery",
  },
  {
    src: "/photos/amara-2.jpg",
    alt: "Anna Ajibade portrait two",
    label: "Strategy Partner",
    note: "Mission-aligned execution",
  },
  {
    src: "/photos/amara-3.jpg",
    alt: "Anna Ajibade portrait three",
    label: "Stakeholder Builder",
    note: "Government, donor, community",
  },
  {
    src: "/photos/amara-4.jpg",
    alt: "Anna Ajibade portrait four",
    label: "Impact Operator",
    note: "Systems with measurable outcomes",
  },
  {
    src: "/photos/amara-5.jpg",
    alt: "Anna Ajibade portrait five",
    label: "Trusted Advisor",
    note: "Clear decisions under complexity",
  },
];

export default function PhotoRail() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    if (selectedIndex !== null) return;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 3600);

    return () => window.clearInterval(timer);
  }, [selectedIndex]);

  const nextIndex = (activeIndex + 1) % slides.length;
  const tailIndex = (activeIndex + 2) % slides.length;

  const lightboxItems: LightboxItem[] = useMemo(
    () =>
      slides.map((slide) => ({
        src: slide.src,
        alt: slide.alt,
        caption: "Anna Ajibade",
        subcaption: `${slide.label} · ${slide.note}`,
      })),
    []
  );

  return (
    <>
      <div className="relative overflow-hidden rounded-[2.25rem] bg-[radial-gradient(circle_at_top_left,rgba(96,165,250,0.14),transparent_38%),linear-gradient(180deg,rgba(255,255,255,0.76)_0%,rgba(219,234,254,0.58)_100%)] p-4 shadow-[0_28px_90px_rgba(15,23,42,0.12)] dark:bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.16),transparent_38%),linear-gradient(180deg,rgba(15,23,42,0.82)_0%,rgba(8,15,30,0.95)_100%)] md:p-6">
        <div className="grid items-center gap-8 xl:grid-cols-[1.15fr_0.85fr]">
          <div className="relative mx-auto h-[18rem] w-full max-w-[42rem] md:h-[24rem] xl:mx-0 xl:h-[28rem] xl:max-w-none">
            <motion.button
              type="button"
              onClick={() => setSelectedIndex(tailIndex)}
              animate={{ rotate: -9, x: 28, y: 22, scale: 0.9 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-y-6 right-0 z-0 hidden w-[52%] cursor-zoom-in overflow-hidden rounded-[1.8rem] opacity-35 shadow-[0_18px_50px_rgba(15,23,42,0.16)] lg:block"
              aria-label={`Open ${slides[tailIndex].alt}`}
            >
              <Image
                src={slides[tailIndex].src}
                alt={slides[tailIndex].alt}
                fill
                sizes="(max-width: 1280px) 40vw, 360px"
                className="object-cover object-top"
              />
            </motion.button>

            <motion.button
              type="button"
              onClick={() => setSelectedIndex(nextIndex)}
              animate={{ rotate: -5, x: 14, y: 10, scale: 0.96 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-y-4 right-2 z-10 hidden w-[62%] cursor-zoom-in overflow-hidden rounded-[1.9rem] shadow-[0_24px_65px_rgba(15,23,42,0.2)] sm:block"
              aria-label={`Open ${slides[nextIndex].alt}`}
            >
              <Image
                src={slides[nextIndex].src}
                alt={slides[nextIndex].alt}
                fill
                sizes="(max-width: 1280px) 48vw, 420px"
                className="object-cover object-top"
              />
            </motion.button>

            <AnimatePresence mode="wait">
              <motion.button
                key={slides[activeIndex].src}
                type="button"
                onClick={() => setSelectedIndex(activeIndex)}
                initial={{ opacity: 0, x: 80, rotate: 5, scale: 0.94 }}
                animate={{ opacity: 1, x: 0, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, x: -70, rotate: -6, scale: 0.92 }}
                transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 z-20 cursor-zoom-in overflow-hidden rounded-[2rem] shadow-[0_34px_90px_rgba(15,23,42,0.24)]"
                aria-label={`Open ${slides[activeIndex].alt}`}
              >
                <Image
                  src={slides[activeIndex].src}
                  alt={slides[activeIndex].alt}
                  fill
                  priority
                  sizes="(max-width: 1280px) 70vw, 720px"
                  className="object-contain object-top bg-white/20 dark:bg-slate-950/20"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.06)_0%,rgba(15,23,42,0.14)_40%,rgba(15,23,42,0.66)_100%)]" />
              </motion.button>
            </AnimatePresence>
          </div>

          <div className="relative z-30 px-2 md:px-4 xl:max-w-md">
            <AnimatePresence mode="wait">
              <motion.div
                key={`copy-${activeIndex}`}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.45 }}
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.34em] text-gold md:text-xs">
                  {slides[activeIndex].label}
                </p>
                <p className="mt-3 font-display text-3xl font-black leading-tight text-cream md:text-5xl">
                  Anna Ajibade
                </p>
                <p className="mt-3 max-w-md text-sm text-cream/70 md:text-base">
                  {slides[activeIndex].note}
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="mt-6 flex items-center gap-3">
              {slides.map((slide, index) => (
                <button
                  key={slide.src}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`overflow-hidden rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? "h-2.5 w-12 bg-gold"
                      : "h-2.5 w-2.5 bg-gold/35 hover:bg-gold/60"
                  }`}
                  aria-label={`View slide ${index + 1}`}
                />
              ))}
            </div>
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
