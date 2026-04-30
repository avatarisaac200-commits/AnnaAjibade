"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HiMoon, HiOutlineSun } from "react-icons/hi";

const links = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Impact Footprints", href: "#impact" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24);
    handler();
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const handlePointerDown = (event: MouseEvent) => {
      if (!menuOpen || !navRef.current) return;
      if (!navRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("mousedown", handlePointerDown);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("mousedown", handlePointerDown);
      window.removeEventListener("resize", handleResize);
    };
  }, [menuOpen]);

  const toggleTheme = () => {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
    setIsDark(next);
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <motion.nav
      initial={{ y: -72, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 md:px-6"
    >
      <div ref={navRef} className="mx-auto max-w-7xl">
        <div
          className={`relative flex items-center justify-between rounded-full border px-4 py-3 transition-all duration-300 md:px-6 ${
            scrolled
              ? "theme-surface"
              : "border-gold/15 bg-white/55 backdrop-blur-xl dark:bg-slate-950/35"
          }`}
        >
          <a href="#" className="font-display text-xl font-bold tracking-tight">
            <span className="gold-text">A</span>
            <span className="text-cream">A</span>
          </a>

          <div className="hidden items-center gap-6 lg:flex">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs font-medium uppercase tracking-[0.18em] text-cream/70 transition-colors duration-300 hover:text-gold lg:text-sm"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={toggleTheme}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/20 bg-white/65 text-cream transition-colors duration-300 hover:border-gold/40 hover:text-gold dark:bg-white/5"
              aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
            >
              {isDark ? <HiOutlineSun size={18} /> : <HiMoon size={18} />}
            </button>

            <a
              href="#contact"
              className="hidden rounded-full bg-gold px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_34px_rgba(37,99,235,0.24)] transition-colors duration-300 hover:bg-gold-light lg:flex"
            >
              Contact
            </a>

            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full border border-gold/20 md:hidden"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-nav-menu"
            >
              <span
                className={`block h-0.5 w-5 bg-cream transition-all duration-300 ${
                  menuOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 bg-cream transition-all duration-300 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 bg-cream transition-all duration-300 ${
                  menuOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              id="mobile-nav-menu"
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="mt-3 overflow-hidden rounded-3xl border border-gold/15 bg-white/88 shadow-[0_22px_60px_rgba(15,23,42,0.12)] backdrop-blur-xl md:hidden dark:bg-slate-950/88"
            >
              <div className="flex flex-col p-3">
                {links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={closeMenu}
                    className="rounded-2xl px-4 py-3 text-sm font-medium uppercase tracking-[0.16em] text-cream/75 transition-colors duration-200 hover:bg-gold/10 hover:text-gold"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
