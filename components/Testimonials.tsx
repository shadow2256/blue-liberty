"use client";

import { useEffect, useRef, useState } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Blue Liberty gives me access to premium Florida real estate I couldn't touch before. Completely transparent, real assets — this is the future of property investing.",
    name: "James R.",
    role: "Early Investor · Miami, FL",
    avatar: "JR",
    color: "bg-royal",
  },
  {
    quote:
      "I've tried other platforms but nothing matches the clarity and quality here. The yield tracking is straightforward and the properties are genuinely curated.",
    name: "Sophia M.",
    role: "Property Investor · Tampa, FL",
    avatar: "SM",
    color: "bg-ink",
  },
  {
    quote:
      "Fractional ownership used to feel risky. Blue Liberty changed that — the documentation and ownership structure gives me real confidence in every investment.",
    name: "Michael J.",
    role: "Portfolio Builder · Orlando, FL",
    avatar: "MJ",
    color: "bg-horizon",
  },
];

function StarRow() {
  return (
    <div className="flex gap-0.5 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-3.5 h-3.5 text-royal fill-royal" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const t = setInterval(() => setActive((a) => (a + 1) % testimonials.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="about" ref={ref} className="py-24 bg-mist">
      {/* Top horizon line */}
      <div className="h-px bg-gradient-to-r from-transparent via-slate/30 to-transparent mb-0" />

      <div className="max-w-5xl mx-auto px-6">
        <p className="text-[10.5px] font-bold text-ink/30 uppercase tracking-[0.2em] mb-3 text-center">
          Investor Stories
        </p>
        <h2
          className="font-display font-extrabold text-ink text-4xl md:text-5xl text-center leading-tight tracking-tight mb-14 transition-all duration-700"
          style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(16px)" }}
        >
          Built for Real Confidence
        </h2>

        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`relative bg-white rounded-2xl border p-6 shadow-card cursor-pointer transition-all duration-300 ${
                active === i
                  ? "border-royal shadow-card-hover -translate-y-1"
                  : "border-white hover:border-royal/30 hover:-translate-y-0.5"
              }`}
              onClick={() => setActive(i)}
              style={{
                opacity: visible ? 1 : 0,
                transitionDelay: `${i * 100}ms`,
                transitionDuration: "600ms",
              }}
            >
              {/* Active indicator */}
              {active === i && (
                <div className="absolute top-0 left-6 right-6 h-0.5 rounded-full bg-gradient-to-r from-royal to-horizon" />
              )}

              <StarRow />

              <p className="text-[13.5px] text-ink/70 leading-relaxed mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <div className={`w-9 h-9 rounded-full ${t.color} flex items-center justify-center shrink-0`}>
                  <span className="text-[11px] font-bold text-white">{t.avatar}</span>
                </div>
                <div>
                  <p className="text-[13px] font-bold text-ink">{t.name}</p>
                  <p className="text-[11.5px] text-ink/40">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`rounded-full transition-all duration-300 cursor-pointer ${
                active === i ? "w-6 h-2 bg-royal" : "w-2 h-2 bg-ink/20"
              }`}
              aria-label={`View testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
