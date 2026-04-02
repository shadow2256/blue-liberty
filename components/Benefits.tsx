"use client";

import { useEffect, useRef, useState } from "react";
import { TrendingDown, Shield, Eye, Monitor, Star, Clock } from "lucide-react";

const benefits = [
  {
    icon: TrendingDown,
    title: "Lower entry threshold",
    desc: "Access premium Florida real estate from as little as $500.",
    color: "text-royal",
    bg: "bg-royal/8",
  },
  {
    icon: Shield,
    title: "Real asset backing",
    desc: "Every share is backed by a legally owned physical property.",
    color: "text-horizon",
    bg: "bg-horizon/8",
  },
  {
    icon: Eye,
    title: "Transparent ownership model",
    desc: "Full documentation, audited structures, and clear ownership.",
    color: "text-ink",
    bg: "bg-ink/8",
  },
  {
    icon: Monitor,
    title: "Modern digital experience",
    desc: "Track performance, yields, and portfolio metrics in real time.",
    color: "text-royal",
    bg: "bg-royal/8",
  },
  {
    icon: Star,
    title: "Access to curated properties",
    desc: "Only pre-vetted, high-quality Florida markets make the cut.",
    color: "text-horizon",
    bg: "bg-horizon/8",
  },
  {
    icon: Clock,
    title: "Designed for long-term participation",
    desc: "Compound returns and grow ownership exposure over time.",
    color: "text-ink",
    bg: "bg-ink/8",
  },
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
    <section ref={ref} className="py-20 bg-mist px-6">
      <div>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: benefits grid */}
          <div>
            <p className="text-[10.5px] font-bold text-ink/30 uppercase tracking-[0.2em] mb-3">
              Benefits / Value Grid
            </p>
            <h2
              className="font-display font-extrabold text-ink text-3xl md:text-4xl leading-tight tracking-tight mb-10 transition-all duration-700"
              style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(16px)" }}
            >
              Built to Make Property Access More Intelligent
            </h2>

            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((b, i) => (
                <div
                  key={b.title}
                  className="group bg-white rounded-xl p-4 border border-slate/20 shadow-card hover:shadow-card-hover transition-all duration-300 cursor-default"
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateY(0)" : "translateY(16px)",
                    transitionDelay: `${i * 80}ms`,
                    transitionDuration: "600ms",
                  }}
                >
                  <div className={`w-9 h-9 rounded-xl ${b.bg} flex items-center justify-center mb-3`}>
                    <b.icon className={`w-4.5 h-4.5 ${b.color}`} strokeWidth={1.8} />
                  </div>
                  <h3 className="text-[13.5px] font-bold text-ink mb-1">{b.title}</h3>
                  <p className="text-[12px] text-ink/55 leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: CTA dark card */}
          <div
            className="transition-all duration-700 delay-300"
            style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)" }}
          >
            <div
              className="rounded-2xl p-8 text-white relative overflow-hidden"
              style={{ background: "linear-gradient(135deg, #0C176D 0%, #081040 100%)" }}
            >
              {/* Glow */}
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-royal/20 blur-3xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-horizon/15 blur-2xl" />

              <div className="relative">
                <h3 className="font-display font-extrabold text-white text-2xl md:text-3xl leading-tight mb-4">
                  Start Building Ownership on Your Terms
                </h3>
                <p className="text-white/60 text-[14px] leading-relaxed mb-6">
                  Blue Liberty combines premium property access with a cleaner, more modern
                  ownership experience. Join early and lock in founding member rates.
                </p>
                <button
                  onClick={onWaitlist}
                  className="inline-flex items-center px-6 py-3.5 rounded-xl bg-royal text-white font-semibold text-[14px] shadow-royal hover:shadow-royal-lg hover:bg-[#1a47f0] transition-all duration-200 cursor-pointer"
                >
                  View Opportunities
                </button>
              </div>
            </div>

            {/* Education cards */}
            <div className="mt-6">
              <p className="text-[10.5px] font-bold text-ink/30 uppercase tracking-[0.2em] mb-4">
                Education Cards
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "Market Insights",
                  "How Tokenized Ownership Works",
                  "Investor FAQ",
                  "Investor Insights",
                  "Property Strategy",
                  "Platform Overview",
                ].map((card) => (
                  <button
                    key={card}
                    className="text-left px-4 py-3 bg-white rounded-xl border border-slate/20 shadow-card text-[12.5px] font-semibold text-ink hover:border-royal hover:text-royal hover:shadow-card-hover transition-all duration-200 cursor-pointer"
                  >
                    {card}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
