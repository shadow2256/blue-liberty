"use client";

import { useState, useEffect } from "react";
import { X, CheckCircle, Shield, Users, TrendingUp } from "lucide-react";

interface WaitlistModalProps {
  open: boolean;
  onClose: () => void;
}

const spotsLeft = 47;

export default function WaitlistModal({ open, onClose }: WaitlistModalProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    if (open) document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open, onClose]);

  // Lock scroll when open
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setLoading(true);
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="waitlist-title"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-ink/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div className="relative bg-white rounded-3xl shadow-float w-full max-w-[460px] overflow-hidden">
        {/* Top gradient bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-royal via-horizon to-royal" />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-ink/6 hover:bg-ink/10 flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close"
        >
          <X className="w-4 h-4 text-ink/60" />
        </button>

        <div className="p-8">
          {!submitted ? (
            <>
              {/* Scarcity badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-50 border border-red-100 mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
                <span className="text-[11.5px] font-bold text-red-600 uppercase tracking-wide">
                  Only {spotsLeft} early access spots remaining
                </span>
              </div>

              <h2 id="waitlist-title" className="font-display font-extrabold text-ink text-2xl leading-tight mb-2">
                Get Early Access to Blue Liberty
              </h2>
              <p className="text-ink/55 text-[13.5px] leading-relaxed mb-6">
                Join founding members and lock in exclusive early access rates before
                we open to the public.
              </p>

              {/* Trust signals */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                {[
                  { icon: Shield, label: "Asset-backed" },
                  { icon: Users, label: "312 waitlisted" },
                  { icon: TrendingUp, label: "Up to 5.3% yield" },
                ].map((s) => (
                  <div key={s.label} className="flex flex-col items-center gap-1.5 p-3 bg-mist rounded-xl">
                    <s.icon className="w-4 h-4 text-royal" />
                    <span className="text-[11px] font-semibold text-ink text-center leading-tight">{s.label}</span>
                  </div>
                ))}
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} noValidate>
                <label htmlFor="waitlist-email" className="block text-[12.5px] font-semibold text-ink mb-2">
                  Your email address
                </label>
                <input
                  id="waitlist-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@email.com"
                  autoComplete="email"
                  className="w-full px-4 py-3.5 rounded-xl border-2 border-slate/30 focus:border-royal focus:outline-none text-ink text-[14px] placeholder:text-ink/30 transition-colors mb-2 bg-salt-white"
                  aria-describedby={error ? "waitlist-error" : undefined}
                />
                {error && (
                  <p id="waitlist-error" className="text-[12px] text-red-500 mb-3" role="alert">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 rounded-xl bg-royal text-white font-bold text-[15px] shadow-royal hover:shadow-royal-lg hover:bg-[#1a47f0] transition-all duration-200 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-2"
                >
                  {loading ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Securing your spot...
                    </>
                  ) : (
                    "Claim Early Access →"
                  )}
                </button>
              </form>

              <p className="text-[11px] text-ink/30 text-center mt-4">
                No credit card required. Unsubscribe anytime.
              </p>
            </>
          ) : (
            /* Success state */
            <div className="flex flex-col items-center text-center py-4">
              <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mb-5">
                <CheckCircle className="w-8 h-8 text-green-500" />
              </div>
              <h2 className="font-display font-extrabold text-ink text-2xl mb-2">
                You're on the list!
              </h2>
              <p className="text-ink/55 text-[13.5px] leading-relaxed mb-2">
                We'll notify <span className="font-semibold text-ink">{email}</span> when
                your early access is ready.
              </p>
              <p className="text-ink/40 text-[12px] mb-6">
                You're spot #{312 + 1} — founding member rates locked.
              </p>
              <button
                onClick={onClose}
                className="px-6 py-3 rounded-xl bg-royal text-white font-semibold text-[14px] shadow-royal hover:shadow-royal-lg hover:bg-[#1a47f0] transition-all cursor-pointer"
              >
                Back to Blue Liberty
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
