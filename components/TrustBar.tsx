"use client";

const logos = [
  { label: "Forbes", type: "text", font: "serif" },
  { label: "Trusted Platform", type: "badge", icon: "shield" },
  { label: "TechCrunch", type: "text", font: "sans" },
  { label: "Property-Backed", type: "badge", icon: "home" },
  { label: "Bloomberg", type: "text", font: "serif" },
  { label: "Investor-Focused", type: "badge", icon: "clock" },
  { label: "Business Insider", type: "text", font: "sans" },
  { label: "Asset-Verified", type: "badge", icon: "check" },
];

function LogoItem({ item }: { item: typeof logos[0] }) {
  return (
    <div className="flex items-center gap-2 px-8 shrink-0 opacity-40 hover:opacity-70 transition-opacity duration-200">
      {item.type === "badge" && (
        <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          {item.icon === "shield" && <path d="M12 2l7 4v6c0 5-7 10-7 10S5 17 5 12V6l7-4z" />}
          {item.icon === "home" && <><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9,22 9,12 15,12 15,22" /></>}
          {item.icon === "clock" && <><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></>}
          {item.icon === "check" && <><path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22,4 12,14.01 9,11.01" /></>}
        </svg>
      )}
      <span
        className="text-[15px] font-semibold text-ink tracking-tight whitespace-nowrap"
        style={{ fontFamily: item.font === "serif" ? "Georgia, serif" : undefined }}
      >
        {item.label}
      </span>
    </div>
  );
}

export default function TrustBar() {
  // Duplicate for seamless loop
  const items = [...logos, ...logos];

  return (
    <section className="bg-white border-y border-slate/15 py-5 overflow-hidden">
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none" style={{ background: "linear-gradient(to right, white, transparent)" }} />
        <div className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none" style={{ background: "linear-gradient(to left, white, transparent)" }} />

        {/* Scrolling track */}
        <div className="ticker-wrapper flex">
          <div
            className="ticker-track flex items-center"
            style={{ animation: "ticker 28s linear infinite" }}
          >
            {items.map((item, i) => (
              <LogoItem key={i} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
