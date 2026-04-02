"use client";

import { useEffect, useRef, useState } from "react";
import { TrendingDown, Shield, Eye, Monitor, Star, Clock } from "lucide-react";

const benefits = [
  {
    icon: TrendingDown,
    title: "Lower entry threshold",
    desc: "Access premium Florida real estate from as little as $500.",
    accent: "#2F5BFF",
  },
  {
    icon: Shield,
    title: "Real asset backing",
    desc: "Every share is backed by a legally owned physical property.",
    accent: "#0FA8FF",
  },
  {
    icon: Eye,
    title: "Transparent ownership model",
    desc: "Full documentation, audited structures, and clear ownership.",
    accent: "#0C176D",
  },
  {
    icon: Monitor,
    title: "Modern digital experience",
    desc: "Track performance, yields, and portfolio metrics in real time.",
    accent: "#2F5BFF",
  },
  {
    icon: Star,
    title: "Access to curated properties",
    desc: "Only pre-vetted, high-quality Florida markets make the cut.",
    accent: "#0FA8FF",
  },
  {
    icon: Clock,
    title: "Designed for long-term participation",
    desc: "Compound returns and grow ownership exposure over time.",
    accent: "#0C176D",
  },
];

const educationCards = [
  "Market Insights",
  "How Tokenized Ownership Works",
  "Investor FAQ",
  "Investor Insights",
  "Property Strategy",
  "Platform Overview",
];

export default function Benefits({ onWaitlist }: { onWaitlist: () => void }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-24 bg-mist px-6">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[10.5px] font-bold text-ink/30 uppercase tracking-[0.2em] mb-3">
            Benefits / Value Grid
          </p>
          <h2
            className="font-display font-extrabold text-ink text-3xl md:text-4xl leading-tight tracking-tight transition-all duration-700"
            style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(16px)" }}
          >
            Built to Make Property Access<br className="hidden sm:block" /> More Intelligent
          </h2>
        </div>

        {/* Benefits grid — 3 columns */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {benefits.map((b, i) => (
            <div
              key={b.title}
              className="relative bg-white rounded-2xl p-5 border border-slate/20 shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300 overflow-hidden"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(20px)",
                transitionDelay: `${i * 70}ms`,
                transitionDuration: "600ms",
              }}
            >
              {/* Icon */}
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center mb-4"
                style={{ backgroundColor: `${b.accent}14` }}
              >
                <b.icon className="w-[18px] h-[18px]" style={{ color: b.accent }} strokeWidth={1.8} />
              </div>

              <h3 className="text-[13.5px] font-bold text-ink leading-snug mb-1.5">{b.title}</h3>
              <p className="text-[12px] text-ink/50 leading-relaxed">{b.desc}</p>

              {/* Decorative bottom-right accent circle */}
              <div
                className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full opacity-10"
                style={{ background: `radial-gradient(circle, ${b.accent}, transparent 70%)` }}
              />
            </div>
          ))}
        </div>

        {/* CTA dark card — full width */}
        <div
          className="rounded-2xl p-10 text-white relative overflow-hidden mb-8 transition-all duration-700 delay-500"
          style={{
            background: "linear-gradient(135deg, #0C176D 0%, #081040 100%)",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
          }}
        >
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-royal/20 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-horizon/15 blur-2xl pointer-events-none" />

          <div className="relative text-center max-w-lg mx-auto">
            <h3 className="font-display font-extrabold text-white text-2xl md:text-3xl leading-tight mb-3">
              Start Building Ownership on Your Terms
            </h3>
            <p className="text-white/55 text-[14px] leading-relaxed mb-6">
              Blue Liberty combines premium property access with a cleaner, more modern ownership experience.
            </p>
            <button
              onClick={onWaitlist}
              className="inline-flex items-center px-7 py-3.5 rounded-xl bg-white font-bold text-[14px] shadow-lg hover:bg-mist transition-all duration-200 cursor-pointer"
              style={{ color: '#0C176D' }}
            >
              View Opportunities
            </button>
          </div>
        </div>

        {/* Education cards */}
        <div
          className="transition-all duration-700 delay-700"
          style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(16px)" }}
        >
          <p className="text-[10.5px] font-bold text-ink/30 uppercase tracking-[0.2em] mb-4 text-center">
            Education Cards
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {educationCards.map((card) => (
              <button
                key={card}
                className="px-5 py-3.5 bg-white rounded-xl border border-slate/20 shadow-card text-[13px] font-semibold text-ink hover:border-royal hover:text-royal hover:shadow-card-hover transition-all duration-200 cursor-pointer text-left"
              >
                {card}
              </button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
