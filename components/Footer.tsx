export default function Footer() {
  return (
    <footer className="border-t border-gold/10 bg-ink px-6 py-10">
      <div className="section-frame flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="font-display text-xl font-bold">
          <span className="gold-text">A</span>
          <span className="text-cream">A</span>
        </div>
        <p className="text-center font-mono text-xs tracking-wide text-cream/25">
          © {new Date().getFullYear()} Anna Ajibade · Senior Project Manager
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          {[
            { label: "About", href: "#about" },
            { label: "Services", href: "#services" },
            { label: "Impact", href: "#impact" },
            { label: "Contact", href: "#contact" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-xs uppercase tracking-[0.16em] text-cream/35 transition-colors hover:text-gold"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
