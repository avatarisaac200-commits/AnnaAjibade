"use client";

const items = [
  "Project Architecture",
  "Operational Management",
  "Partnership Development",
  "Resource Mobilisation",
  "Impact Evaluation",
  "Sustainability Design",
  "Youth Development",
  "Community Engagement",
  "Leadership Development",
  "Execution Strategy",
];

export default function Marquee() {
  const doubled = [...items, ...items];

  return (
    <div className="w-full overflow-hidden border-y border-gold/15 bg-white/30 py-4 backdrop-blur-sm dark:bg-white/5">
      <div className="marquee-track">
        {doubled.map((item, index) => (
          <span key={`${item}-${index}`} className="flex shrink-0 items-center">
            <span className="whitespace-nowrap px-6 font-mono text-xs uppercase tracking-[0.25em] text-gold">
              {item}
            </span>
            <span className="text-base text-ember">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}
