"use client";

import { useEffect, useRef, useState } from "react";
import { TrendingUp, Building2, Train, Waves, Sparkles } from "lucide-react";

const catalysts = [
  {
    icon: Waves,
    title: "Beachfront revitalization",
    desc: "Public-access upgrades, walkways, and amenity projects underway along the coastal corridor.",
  },
  {
    icon: Train,
    title: "Brightline expansion",
    desc: "Planned high-speed rail extension cutting commute time to Fort Lauderdale and Miami.",
  },
  {
    icon: Building2,
    title: "Adjacent luxury towers",
    desc: "Nearby condo and rental developments lifting comparable property values across surrounding blocks.",
  },
  {
    icon: TrendingUp,
    title: "Florida baseline appreciation",
    desc: "+58% over 5 years state-wide. Coastal Broward consistently outperforming.",
  },
];

export default function PompanoSpotlight() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="py-24 px-6 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0C176D 0%, #0A1240 50%, #0C176D 100%)",
      }}
    >
      {/* Decorative glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 20% 80%, rgba(47,91,255,0.25), transparent 50%), radial-gradient(circle at 80% 20%, rgba(15,168,255,0.20), transparent 50%)",
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <p className="text-[10.5px] font-bold text-slate uppercase tracking-[0.2em] mb-3">
            Phase 1 · Live · Pompano Beach
          </p>
          <h2
            className="font-display font-extrabold text-white text-4xl md:text-5xl leading-tight tracking-tight transition-all duration-700"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(16px)",
            }}
          >
            Why Pompano Beach
            <br />
            <span className="text-horizon">appreciates faster.</span>
          </h2>
          <p
            className="text-white/70 text-[15px] leading-relaxed mt-5 max-w-2xl mx-auto transition-all duration-700"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(16px)",
              transitionDelay: "150ms",
            }}
          >
            Florida residential real estate appreciated <strong className="text-white">+58% over the past five years</strong>. The
            block surrounding our Pompano Beach property is anchored by <strong className="text-white">one of South Florida&apos;s largest
            mixed-use projects in a generation</strong> — directly compounding that trajectory.
          </p>
        </div>

        {/* THE POMP — featured catalyst */}
        <div
          className="rounded-2xl p-6 md:p-8 mb-8 transition-all duration-700"
          style={{
            background:
              "linear-gradient(135deg, rgba(47,91,255,0.18), rgba(15,168,255,0.12))",
            border: "1px solid rgba(15,168,255,0.35)",
            backdropFilter: "blur(8px)",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transitionDelay: "180ms",
          }}
        >
          <div className="flex items-start gap-4 mb-5">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-horizon/25 border border-horizon/40">
              <Sparkles className="w-6 h-6 text-horizon" />
            </div>
            <div className="flex-1">
              <p className="text-horizon text-[10.5px] font-bold uppercase tracking-[0.2em] mb-1">
                Featured Catalyst
              </p>
              <h3 className="font-display font-extrabold text-white text-2xl md:text-[28px] leading-tight tracking-tight">
                The Pomp — $2B mixed-use development next door
              </h3>
            </div>
          </div>

          <p className="text-white/80 text-[14px] leading-relaxed mb-5">
            <strong className="text-white">The Cordish Companies + Caesars Entertainment</strong> are
            transforming the 223-acre former Pompano Park racetrack into a premier entertainment and
            residential destination. Anchored by Harrah&apos;s Pompano Beach Casino and the recently
            opened Topgolf, the development will add:
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-5">
            {[
              { v: "$2B", l: "Total investment" },
              { v: "223 ac", l: "Site size" },
              { v: "1.3M sqft", l: "Retail / entertainment" },
              { v: "4,000", l: "Luxury residential units" },
              { v: "2", l: "Hotels" },
              { v: "Class A", l: "Office space" },
              { v: "Live", l: "Topgolf · open" },
              { v: "Casino", l: "Harrah's anchor" },
            ].map((stat) => (
              <div
                key={stat.l}
                className="bg-white/5 border border-white/10 rounded-xl p-3 text-center"
              >
                <p className="text-white font-display font-extrabold text-[18px] md:text-[19px] leading-none mb-1">
                  {stat.v}
                </p>
                <p className="text-white/55 text-[10.5px] uppercase tracking-wide font-semibold leading-tight">
                  {stat.l}
                </p>
              </div>
            ))}
          </div>

          <p className="text-white/65 text-[12.5px] leading-relaxed italic">
            A development of this scale, anchored by two major institutional sponsors, lifts comparable
            property values across the surrounding submarket for years. The BL Property #1 asset sits
            inside this catchment — directly capturing the uplift without paying the new-construction
            premium.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 mb-10">
          {catalysts.map((c, i) => {
            const Icon = c.icon;
            return (
              <div
                key={i}
                className="bg-white/[0.06] border border-white/10 rounded-2xl p-6 backdrop-blur-sm transition-all duration-500"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(20px)",
                  transitionDelay: `${i * 100 + 200}ms`,
                }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 bg-horizon/15 border border-horizon/20">
                    <Icon className="w-5 h-5 text-horizon" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-white text-[16px] mb-1.5 tracking-tight">
                      {c.title}
                    </h3>
                    <p className="text-white/60 text-[13px] leading-relaxed">{c.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div
          className="bg-gradient-to-r from-royal to-horizon rounded-2xl p-6 md:p-8 transition-all duration-700"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transitionDelay: "600ms",
          }}
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <p className="text-white/80 text-[11.5px] font-bold uppercase tracking-[0.18em] mb-1.5">
                Long-Term Vision
              </p>
              <p className="text-white font-display font-bold text-[20px] md:text-[22px] leading-tight tracking-tight">
                Pompano is the first. The world is the portfolio.
              </p>
              <p className="text-white/80 text-[13.5px] leading-relaxed mt-2 max-w-xl">
                Florida launches the platform. Active pipeline includes Quebec ski chalets (100+ units),
                additional Florida properties, and select European assets — one strong-fundamentals
                property at a time, building toward a global tokenized real estate portfolio.
              </p>
            </div>
            <div className="flex flex-col items-end gap-1 flex-shrink-0">
              <p className="text-white/70 text-[10.5px] font-bold uppercase tracking-widest">
                Pompano 5yr ↑
              </p>
              <p className="text-white font-display font-extrabold text-4xl md:text-5xl leading-none">
                +58%
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
