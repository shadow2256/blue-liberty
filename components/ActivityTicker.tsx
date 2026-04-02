"use client";

import { useEffect, useState } from "react";

const activities = [
  { name: "Sarah K.", city: "Miami", action: "just joined the waitlist" },
  { name: "James R.", city: "Orlando", action: "secured early access" },
  { name: "Maria T.", city: "Tampa", action: "claimed a founding spot" },
  { name: "Robert A.", city: "Fort Lauderdale", action: "joined the waitlist" },
  { name: "Emily W.", city: "Jacksonville", action: "secured early access" },
  { name: "Carlos M.", city: "Naples", action: "joined the waitlist" },
  { name: "Priya S.", city: "Sarasota", action: "claimed a founding spot" },
  { name: "Daniel B.", city: "Boca Raton", action: "just joined the waitlist" },
];

export default function ActivityTicker() {
  const [current, setCurrent] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShow(false);
      setTimeout(() => {
        setCurrent((c) => (c + 1) % activities.length);
        setShow(true);
      }, 400);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  const activity = activities[current];

  return (
    <div className="fixed bottom-6 left-6 z-40 max-w-[280px] pointer-events-none">
      <div
        className="bg-white rounded-xl shadow-float border border-slate/20 px-4 py-3 transition-all duration-400"
        style={{
          opacity: show ? 1 : 0,
          transform: show ? "translateY(0) scale(1)" : "translateY(8px) scale(0.97)",
        }}
      >
        <div className="flex items-start gap-3">
          {/* Avatar */}
          <div className="w-8 h-8 rounded-full bg-royal flex items-center justify-center shrink-0 shadow-royal">
            <span className="text-[10px] font-bold text-white">
              {activity.name.split(" ").map((n) => n[0]).join("")}
            </span>
          </div>

          <div className="min-w-0">
            <p className="text-[12px] text-ink leading-snug">
              <span className="font-bold">{activity.name}</span>
              {" from "}
              <span className="font-semibold text-royal">{activity.city}</span>
              {" "}
              <span className="text-ink/60">{activity.action}</span>
            </p>
            <p className="text-[10.5px] text-ink/35 mt-0.5">Just now · Blue Liberty</p>
          </div>
        </div>

        {/* Live indicator */}
        <div className="absolute top-3 right-3 flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
        </div>
      </div>
    </div>
  );
}
