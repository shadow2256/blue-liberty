"use client";

import { useEffect, useRef, useState } from "react";
import { MapPin } from "lucide-react";

const properties = [
  {
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=480&h=280&fit=crop&auto=format",
    location: "Coral Gables, Florida",
    desc: "3-bed waterfront villa in one of Miami's most stable rental markets. 96% occupancy last year.",
    yield: "4.20",
    entry: "$1,500",
    tag: "Prime",
  },
  {
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=480&h=280&fit=crop&auto=format",
    location: "Naples, Florida",
    desc: "Luxury beachfront condo with strong seasonal rental demand and consistent appreciation.",
    yield: "5.30",
    entry: "$2,000",
    tag: "High Yield",
  },
  {
    image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=480&h=280&fit=crop&auto=format",
    location: "Orlando, Florida",
    desc: "Short-term rental property near major attractions. Ideal first entry into Florida real estate.",
    yield: "3.80",
    entry: "$500",
    tag: "Entry Level",
  },
];

function YieldCounter({ value }: { value: string }) {
  const [display, setDisplay] = useState("0.00");
  const ref = useRef<HTMLSpanElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true;
          const target = parseFloat(value);
          const duration = 1200;
          const start = performance.now();
          const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplay((target * eased).toFixed(2));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [value]);

  return <span ref={ref}>{display}</span>;
}

export default function PropertyListings() {
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
    <section id="properties" ref={ref} className="py-24 bg-white px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <p className="text-[10.5px] font-bold text-ink/30 uppercase tracking-[0.2em] mb-3">
            Property Listings
          </p>
          <h2
            className="font-display font-extrabold text-ink text-4xl md:text-5xl leading-tight tracking-tight transition-all duration-700"
            style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(16px)" }}
          >
            Invest in Fractional
            <br />
            Florida Properties
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {properties.map((p, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl border border-slate/20 shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden cursor-pointer"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(20px)",
                transitionDelay: `${i * 100}ms`,
                transitionDuration: "600ms",
              }}
            >
              {/* Image */}
              <div className="relative h-[170px] overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                  style={{ backgroundImage: `url('${p.image}')` }}
                  role="img"
                  aria-label={`${p.location} property`}
                />
                <div className="absolute top-3 right-3">
                  <span className="text-[10.5px] px-2.5 py-1 rounded-full bg-white/90 text-ink font-bold shadow-sm">
                    {p.tag}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <div className="flex items-center gap-1.5 text-[11.5px] text-ink/60 mb-1">
                  <MapPin className="w-3 h-3 text-royal" />
                  <span className="font-semibold">{p.location}</span>
                </div>
                <p className="text-[12px] text-ink/50 mb-3 leading-relaxed">{p.desc}</p>

                <div className="grid grid-cols-2 gap-3 pt-3 border-t border-slate/15">
                  <div>
                    <p className="text-[10px] font-bold text-ink/30 uppercase tracking-wide mb-0.5">Target Yield</p>
                    <p className="text-[24px] md:text-[20px] font-extrabold text-royal leading-none">
                      <YieldCounter value={p.yield} />%
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-ink/30 uppercase tracking-wide mb-0.5">Min. Entry</p>
                    <p className="text-[19px] md:text-[15px] font-bold text-ink leading-none">{p.entry}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center">
          <button className="inline-flex items-center px-8 py-3.5 rounded-xl border-2 border-royal text-royal font-semibold text-[14.5px] hover:bg-royal hover:text-white transition-all duration-200 cursor-pointer">
            View All Properties
          </button>
        </div>
      </div>
    </section>
  );
}
