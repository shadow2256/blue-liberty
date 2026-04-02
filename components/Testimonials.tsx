"use client";

import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    quote:
      "Blue Liberty combines premium property access with broad accents and professional estate dominance, beautiful, transparent access to real fractional assets.",
    name: "Immae Rames",
    role: "Early Investor",
    avatar: "IR",
    color: "bg-royal",
  },
  {
    quote:
      "Blue Liberty communicates results for estate connections and owners, also expansive Florida properties techniques and more. A genuinely modern experience.",
    name: "Numed Nomes",
    role: "Property Investor",
    avatar: "NN",
    color: "bg-ink",
  },
  {
    quote:
      "Blue Liberty combines premium property access with a cleaner, more modern ownership experience. The yield transparency is unmatched.",
    name: "Michael Johnson",
    role: "Portfolio Builder",
    avatar: "MJ",
    color: "bg-horizon",
  },
];

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

  // Auto-advance carousel
  useEffect(() => {
    const t = setInterval(() => setActive((a) => (a + 1) % testimonials.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="about" ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-[10.5px] font-bold text-ink/30 uppercase tracking-[0.2em] mb-3 text-center">
          Testimonials
        </p>
        <h2
          className="font-display font-extrabold text-ink text-4xl md:text-5xl text-center leading-tight tracking-tight mb-14 transition-all duration-700"
          style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(16px)" }}
        >
          Built for Real Confidence
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`relative bg-white rounded-2xl border p-6 shadow-card cursor-pointer transition-all duration-300 ${
                active === i
                  ? "border-royal shadow-card-hover scale-[1.02]"
                  : "border-slate/20 hover:border-royal/40"
              }`}
              onClick={() => setActive(i)}
              style={{
                opacity: visible ? 1 : 0,
                transform: visible
                  ? active === i ? "scale(1.02)" : "scale(1)"
                  : "translateY(20px)",
                transitionDelay: `${i * 100}ms`,
                transitionDuration: "600ms",
              }}
            >
              {/* Quote mark */}
              <div className="text-[48px] font-display font-extrabold text-royal/15 leading-none -mb-2 -mt-1">
                "
              </div>

              <p className="text-[13.5px] text-ink/70 leading-relaxed mb-5 italic">
                {t.quote}
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
                active === i ? "w-6 h-2 bg-royal" : "w-2 h-2 bg-slate/40"
              }`}
              aria-label={`View testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
