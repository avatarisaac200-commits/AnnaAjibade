"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { HiOutlineX, HiChevronLeft, HiChevronRight } from "react-icons/hi";

export type LightboxItem = {
  src: string;
  alt: string;
  caption?: string;
  subcaption?: string;
};

type ImageLightboxProps = {
  items: LightboxItem[];
  currentIndex: number | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
};

const SWIPE_THRESHOLD = 50;

export default function ImageLightbox({
  items,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}: ImageLightboxProps) {
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    if (currentIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") onPrev();
      if (event.key === "ArrowRight") onNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex, onClose, onNext, onPrev]);

  const item = currentIndex !== null ? items[currentIndex] : null;

  return (
    <AnimatePresence>
      {item ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/88 p-4 backdrop-blur-lg"
          aria-modal="true"
          role="dialog"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 12 }}
            transition={{ duration: 0.32, ease: "easeOut" }}
            onClick={(event) => event.stopPropagation()}
            onTouchStart={(event) => {
              touchStartX.current = event.touches[0]?.clientX ?? null;
            }}
            onTouchEnd={(event) => {
              if (touchStartX.current === null) return;
              const endX = event.changedTouches[0]?.clientX ?? touchStartX.current;
              const deltaX = endX - touchStartX.current;

              if (deltaX > SWIPE_THRESHOLD) onPrev();
              if (deltaX < -SWIPE_THRESHOLD) onNext();

              touchStartX.current = null;
            }}
            className="relative w-full max-w-5xl"
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute right-3 top-3 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/12 text-white backdrop-blur-md transition-colors hover:bg-white/18"
              aria-label="Close image preview"
            >
              <HiOutlineX size={20} />
            </button>

            {items.length > 1 ? (
              <>
                <button
                  type="button"
                  onClick={onPrev}
                  className="absolute left-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/12 text-white backdrop-blur-md transition-colors hover:bg-white/18"
                  aria-label="Previous image"
                >
                  <HiChevronLeft size={22} />
                </button>
                <button
                  type="button"
                  onClick={onNext}
                  className="absolute right-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/12 text-white backdrop-blur-md transition-colors hover:bg-white/18"
                  aria-label="Next image"
                >
                  <HiChevronRight size={22} />
                </button>
              </>
            ) : null}

            <div className="relative aspect-[4/5] max-h-[85vh] overflow-hidden rounded-[2rem] bg-slate-900 shadow-[0_30px_120px_rgba(15,23,42,0.6)] sm:aspect-[16/10]">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </div>

            {(item.caption || item.subcaption) && (
              <div className="pointer-events-none absolute inset-x-0 bottom-0 rounded-b-[2rem] bg-gradient-to-t from-slate-950/88 via-slate-950/40 to-transparent px-6 pb-6 pt-16 text-left text-white">
                {item.caption ? (
                  <p className="font-display text-2xl font-bold">{item.caption}</p>
                ) : null}
                {item.subcaption ? (
                  <p className="mt-1 text-sm text-white/75">{item.subcaption}</p>
                ) : null}
              </div>
            )}
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
