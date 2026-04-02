"use client";

import { useEffect, useRef, useState } from "react";
import { MapPin, TrendingUp, BarChart2 } from "lucide-react";

const steps = [
  {
    id: "A",
    title: "Discover premium Florida properties",
    description: "Browse curated, asset-backed properties across Florida's highest-growth markets.",
    icon: MapPin,
    visual: <PropertyCardMini />,
  },
  {
    id: "B",
    title: "Receive income and track performance",
    description: "Earn passive income from rental yields and monitor your portfolio in real time.",
    icon: BarChart2,
    visual: <DashboardMini />,
  },
  {
    id: "C",
    title: "Build long-term ownership exposure",
    description: "Compound your ownership stake across multiple premium Florida properties.",
    icon: TrendingUp,
    visual: <PortfolioMini />,
  },
];

export default function HowItWorks() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="how-it-works"
      ref={ref}
      className="relative py-24 overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0C176D 0%, #081040 50%, #0C176D 100%)" }}
    >
      {/* Roofline geometry accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate/30 to-transparent" />
      <div className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: `linear-gradient(rgba(132,198,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(132,198,255,0.15) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Glow orbs */}
      <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-royal/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full bg-horizon/15 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section badge */}
        <div className="flex justify-center mb-4">
          <span className="text-[10.5px] font-bold text-slate/60 uppercase tracking-[0.2em]">
            How It Works
          </span>
        </div>

        {/* Headline */}
        <h2
          className="font-display font-extrabold text-white text-center text-4xl md:text-5xl leading-tight tracking-tight mb-16 transition-all duration-700"
          style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)" }}
        >
          Real Estate Ownership,
          <br />
          Built for a New Generation
        </h2>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-6 relative">
          {/* Connector line */}
          <div className="absolute hidden md:block top-[72px] left-[calc(16.67%+24px)] right-[calc(16.67%+24px)] h-px border-t-2 border-dashed border-slate/25 z-0" />

          {steps.map((step, i) => (
            <div
              key={step.id}
              className="relative bg-white/8 backdrop-blur-sm border border-white/12 rounded-2xl p-6 flex flex-col items-start gap-4 transition-all duration-700 hover:bg-white/12 hover:border-white/20 cursor-default"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(24px)",
                transitionDelay: `${i * 150}ms`,
              }}
            >
              {/* Step icon */}
              <div className="flex items-center gap-3 w-full">
                <div className="w-10 h-10 rounded-2xl bg-white/15 border border-white/20 flex items-center justify-center shrink-0 z-10 relative shadow-royal">
                  <step.icon className="w-5 h-5 text-white" strokeWidth={1.8} />
                </div>
                <div className="h-px flex-1 border-t border-dashed border-white/15" />
              </div>

              {/* Title */}
              <h3 className="font-display font-bold text-white text-[17px] leading-snug">
                {step.title}
              </h3>

              <p className="text-white/50 text-[13.5px] leading-relaxed">
                {step.description}
              </p>

              {/* Visual mockup */}
              <div className="w-full mt-2">{step.visual}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PropertyCardMini() {
  return (
    <div className="rounded-xl overflow-hidden border border-white/15 bg-white/8">
      <div
        className="h-28 bg-cover bg-center"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=200&fit=crop&auto=format')` }}
        role="img"
        aria-label="Florida property"
      />
      <div className="p-3">
        <div className="flex items-center gap-1 text-[10px] text-white/50 mb-1">
          <MapPin className="w-2.5 h-2.5" />
          <span>Laurindaburg, Florida</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-[13px] font-bold text-white">$350,000</span>
          <span className="text-[9.5px] px-2 py-0.5 rounded-full bg-royal/60 text-white font-semibold">
            Tour Now
          </span>
        </div>
      </div>
    </div>
  );
}

function DashboardMini() {
  return (
    <div className="rounded-xl border border-white/15 bg-white/8 p-3">
      <div className="flex items-center justify-between mb-3">
        <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Dashboard</p>
        <p className="text-[10px] text-white/30">Transfer Summary</p>
      </div>
      <div className="grid grid-cols-3 gap-2 mb-3">
        {[
          { label: "Returns", val: "$550" },
          { label: "Yield", val: "4.2%" },
          { label: "Assets", val: "3" },
        ].map((s) => (
          <div key={s.label} className="bg-white/8 rounded-lg p-2 text-center">
            <p className="text-[10px] text-white/40">{s.label}</p>
            <p className="text-[13px] font-bold text-white">{s.val}</p>
          </div>
        ))}
      </div>
      {/* Mini sparkline */}
      <div className="flex items-end gap-0.5 h-8">
        {[40, 55, 45, 70, 60, 80, 72, 90, 82, 95, 88, 100].map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-sm"
            style={{ height: `${h}%`, backgroundColor: i >= 9 ? "#2F5BFF" : "rgba(132,198,255,0.25)" }}
          />
        ))}
      </div>
    </div>
  );
}

function PortfolioMini() {
  return (
    <div className="rounded-xl border border-white/15 bg-white/8 p-4 flex flex-col items-center gap-3">
      <div className="w-14 h-14 rounded-2xl bg-royal/80 shadow-royal flex items-center justify-center">
        <TrendingUp className="w-6 h-6 text-white" />
      </div>
      <p className="text-[15px] font-bold text-white">Portfolio</p>
      <div className="w-full grid grid-cols-2 gap-2">
        {[
          { label: "Properties", val: "6" },
          { label: "Total Value", val: "$1.2M" },
          { label: "Avg. Yield", val: "4.8%" },
          { label: "Income/mo", val: "$480" },
        ].map((s) => (
          <div key={s.label} className="bg-white/8 rounded-lg p-2">
            <p className="text-[9px] text-white/40">{s.label}</p>
            <p className="text-[12px] font-bold text-white">{s.val}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
