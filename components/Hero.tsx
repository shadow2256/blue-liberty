"use client";

import { useEffect, useRef, useState } from "react";
import { MapPin, TrendingUp, Shield, ChevronRight } from "lucide-react";

const trustBadges = [
  { icon: Shield, label: "Asset-backed access", sub: "Real property collateral" },
  { icon: Shield, label: "Transparent ownership", sub: "On-chain documentation" },
  { icon: MapPin, label: "Florida-focused", sub: "Premium market opportunities" },
];

export default function Hero({ onWaitlist }: { onWaitlist: () => void }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative min-h-[100svh] flex items-center pt-16 overflow-hidden bg-gradient-to-br from-mist via-salt-white to-white">
      {/* Subtle background grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `linear-gradient(rgba(12,23,109,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(12,23,109,0.05) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Brand glow — right side behind cards */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-royal/6 blur-3xl" />
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 rounded-full bg-horizon/8 blur-3xl" />
      </div>

      {/* Roofline accent — top right corner, desktop only */}
      <svg className="absolute top-16 right-0 w-64 h-48 pointer-events-none opacity-[0.035] hidden md:block" viewBox="0 0 256 192" fill="none" aria-hidden="true">
        <path d="M256 96 L192 32 L128 96 L192 96" stroke="#0C176D" strokeWidth="1.5" fill="none" />
        <path d="M256 140 L164 48 L72 140 L164 140" stroke="#2F5BFF" strokeWidth="1" fill="none" />
        <path d="M256 184 L136 64 L16 184 L136 184" stroke="#0FA8FF" strokeWidth="0.75" fill="none" />
      </svg>

      {/* Horizon line accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate/40 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 py-20 w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: copy */}
        <div
          className="transition-all duration-700"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
          }}
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-royal/10 border border-royal/20 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-royal animate-pulse" />
            <span className="text-royal text-[12px] font-semibold tracking-wide uppercase">
              Early Access Now Open
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display font-extrabold text-ink leading-[1.08] tracking-tight mb-5">
            <span className="block text-[40px] sm:text-5xl md:text-6xl lg:text-[64px]">Own Florida Real Estate.</span>
            <span className="block text-[40px] sm:text-5xl md:text-6xl lg:text-[64px] text-royal font-black">
              From $500.
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-ink/60 text-lg leading-relaxed max-w-[420px] mb-8">
            Invest in asset-backed properties across Florida&apos;s fastest-growing markets
            without the barriers of traditional ownership.
          </p>

          {/* CTAs */}
          <div className="flex flex-row gap-3 mb-10 flex-wrap">
            <button
              onClick={onWaitlist}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-royal text-white font-semibold text-[15px] shadow-royal hover:shadow-royal-lg hover:bg-[#1a47f0] transition-all duration-200 cursor-pointer group"
            >
              Explore Properties
              <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
            <a
              href="#how-it-works"
              className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-[15px] transition-all duration-300 cursor-pointer"
              style={{ background: "#EAF1FF", color: "#0C176D" }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = "#0C176D"; (e.currentTarget as HTMLAnchorElement).style.color = "#fff"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = "#EAF1FF"; (e.currentTarget as HTMLAnchorElement).style.color = "#0C176D"; }}
            >
              How It Works
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6"/></svg>
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-6">
            {trustBadges.map((badge) => (
              <div key={badge.label} className="flex items-center gap-2.5">
                <div className="w-1 h-7 rounded-full bg-royal/30 shrink-0" />
                <div>
                  <p className="text-[11px] font-bold text-ink uppercase tracking-wider leading-tight">{badge.label}</p>
                  <p className="text-[11px] text-ink/45 leading-tight">{badge.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: floating UI mockup cards */}
        <div
          className="relative h-[520px] lg:h-[580px] hidden md:block transition-all duration-700 delay-200"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(32px)",
          }}
        >
          {/* Main property listing card */}
          <div className="absolute left-8 top-14 w-[240px] bg-white rounded-2xl shadow-float border border-slate/20 overflow-hidden z-20 animate-float">
            <div
              className="h-[130px] bg-cover bg-center"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=480&h=260&fit=crop&auto=format')`,
              }}
              role="img"
              aria-label="Florida waterfront property"
            />
            <div className="p-3">
              <div className="flex items-center gap-1 text-[10.5px] text-ink/50 mb-1">
                <MapPin className="w-3 h-3" />
                <span>Florida Pensile, FL</span>
              </div>
              <p className="text-[11px] text-ink/60 mb-2">Waterfront condo · Pensacola Beach</p>
              <div className="flex items-center justify-between">
                <span className="text-[13px] font-bold text-ink">$345,900</span>
                <span className="text-[10.5px] px-2 py-0.5 rounded-full bg-royal/10 text-royal font-semibold">
                  Invest
                </span>
              </div>
            </div>
          </div>

          {/* Listing card widget — top right */}
          <div className="absolute right-0 top-6 w-[200px] bg-white rounded-2xl shadow-float border border-slate/20 p-3.5 z-30">
            <p className="text-[10px] font-bold text-ink/40 uppercase tracking-widest mb-2.5">Listing Cards</p>
            <div className="flex items-center gap-2 mb-1.5">
              <MapPin className="w-3 h-3 text-royal shrink-0" />
              <span className="text-[11.5px] font-semibold text-ink">Lower Horda</span>
            </div>
            <p className="text-[10px] text-ink/40 mb-3">Short fractional property</p>
            <div className="grid grid-cols-2 gap-x-3 gap-y-1">
              <div>
                <p className="text-[9.5px] text-ink/40 uppercase tracking-wide">Target yield</p>
                <p className="text-[13px] font-bold text-royal">37.5%</p>
              </div>
              <div>
                <p className="text-[9.5px] text-ink/40 uppercase tracking-wide">Minimum</p>
                <p className="text-[13px] font-bold text-ink">$18.6M</p>
              </div>
            </div>
          </div>

          {/* Dashboard widget — center */}
          <div className="absolute left-1/2 -translate-x-1/2 top-[200px] w-[220px] bg-white rounded-2xl shadow-float border border-slate/20 p-4 z-20">
            <div className="flex items-center justify-between mb-3">
              <p className="text-[10px] font-bold text-ink/40 uppercase tracking-widest">Investment</p>
              <div className="flex items-center gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                <span className="text-[10px] text-ink/40">Live</span>
              </div>
            </div>
            {/* Mini chart bars */}
            <div className="flex items-end gap-1 h-10 mb-3">
              {[30, 50, 40, 65, 55, 80, 70, 90, 75, 95].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-sm"
                  style={{
                    height: `${h}%`,
                    backgroundColor: i === 9 ? "#2F5BFF" : "#EAF1FF",
                  }}
                />
              ))}
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[9.5px] text-ink/40">Metric</p>
                <p className="text-[14px] font-bold text-ink">53.1TB</p>
              </div>
              <span className="text-[11px] px-2 py-0.5 rounded-full bg-green-50 text-green-600 font-bold">
                +4.51%
              </span>
            </div>
          </div>

          {/* Brand card */}
          <div className="absolute left-4 bottom-[140px] w-[110px] bg-ink rounded-xl shadow-float p-3 z-30 flex flex-col items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
              <span className="font-display font-extrabold text-white text-lg">B</span>
            </div>
            <span className="text-[9px] font-bold text-white/60 text-center tracking-widest uppercase">Blue Liberty</span>
          </div>

          {/* Second property image — bottom center */}
          <div className="absolute right-6 bottom-[100px] w-[210px] bg-white rounded-2xl shadow-float border border-slate/20 overflow-hidden z-20">
            <div
              className="h-[100px] bg-cover bg-center"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=420&h=200&fit=crop&auto=format')`,
              }}
              role="img"
              aria-label="Florida luxury villa"
            />
            <div className="px-3 py-2">
              <p className="text-[10.5px] font-semibold text-ink">High National Florida Miseem</p>
              <p className="text-[9.5px] text-ink/40 mb-1.5">Allen unoountained property</p>
              <div className="flex items-center justify-between">
                <span className="text-[12.5px] font-bold text-ink">$240,000</span>
                <span className="text-[9.5px] px-2 py-0.5 rounded-full bg-green-50 text-green-600 font-semibold">
                  Save 4.3%
                </span>
              </div>
            </div>
          </div>

          {/* Portfolio card */}
          <div className="absolute right-2 top-[240px] w-[130px] bg-white rounded-2xl shadow-float border border-slate/20 p-3.5 z-30 flex flex-col items-center gap-2">
            <p className="text-[9.5px] text-ink/40 uppercase tracking-widest font-bold">Portfolio</p>
            <div className="w-12 h-12 rounded-xl bg-ink/5 flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-royal" />
            </div>
            <p className="text-[12.5px] font-bold text-ink">Portfolio</p>
          </div>

          {/* Subtle glow orbs behind cards */}
          <div className="absolute top-1/3 left-1/3 w-40 h-40 rounded-full bg-royal/8 blur-3xl pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/4 w-32 h-32 rounded-full bg-horizon/10 blur-2xl pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
