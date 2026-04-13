"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import HowItWorks from "@/components/HowItWorks";
import PropertyListings from "@/components/PropertyListings";
import Benefits from "@/components/Benefits";
import SocialProof from "@/components/SocialProof";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import ActivityTicker from "@/components/ActivityTicker";
import WaitlistModal from "@/components/WaitlistModal";

export default function HomePage() {
  const [waitlistOpen, setWaitlistOpen] = useState(false);

  return (
    <>
      <Navbar />

      <main className="flex-1">
        <Hero onWaitlist={() => setWaitlistOpen(true)} />
        <TrustBar />
        <HowItWorks />

        {/* Mid-page CTA — second form touchpoint */}
        <section className="py-14 bg-mist border-y border-slate/15">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <p className="text-[11px] font-bold text-ink/30 uppercase tracking-[0.2em] mb-3">Early Access</p>
            <h2 className="font-display font-extrabold text-ink text-2xl md:text-3xl leading-tight tracking-tight mb-3">
              Ready to own your first Florida property share?
            </h2>
            <p className="text-ink/50 text-[14.5px] leading-relaxed mb-6">
              Join 312+ investors already on the waitlist. Spots are limited — founding rates won&apos;t last.
            </p>
            <button
              onClick={() => setWaitlistOpen(true)}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-royal text-white font-bold text-[15px] shadow-royal hover:shadow-royal-lg hover:bg-[#1a47f0] transition-all duration-200 cursor-pointer"
            >
              Get Early Access
              <span className="text-white/70">→</span>
            </button>
            <p className="text-ink/30 text-[11.5px] mt-3">No credit card. No commitment.</p>
          </div>
        </section>

        <PropertyListings />
        <Benefits onWaitlist={() => setWaitlistOpen(true)} />

        <SocialProof />

        <Testimonials />

        {/* Waitlist section anchor */}
        <section id="waitlist" className="py-20 bg-white border-t border-slate/10">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-royal/10 border border-royal/20 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-royal animate-pulse" />
              <span className="text-royal text-[12px] font-semibold tracking-wide uppercase">
                47 spots remaining
              </span>
            </div>
            <h2 className="font-display font-extrabold text-ink text-4xl md:text-5xl leading-tight tracking-tight mb-5">
              Join the early access list
            </h2>
            <p className="text-ink/55 text-lg leading-relaxed mb-8 max-w-xl mx-auto">
              Founding members lock in exclusive rates and get first pick of premium
              Florida properties before we open to the public.
            </p>
            <button
              onClick={() => setWaitlistOpen(true)}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-royal text-white font-bold text-[16px] shadow-royal hover:shadow-royal-lg hover:bg-[#1a47f0] transition-all duration-200 cursor-pointer"
            >
              Claim Early Access
              <span className="text-white/70">→</span>
            </button>
            <div className="flex flex-row flex-wrap justify-center gap-x-6 gap-y-2 mt-5">
              <span className="text-ink/40 text-[12px] flex items-center gap-1.5">
                <span className="text-royal font-bold">✓</span> Free 30-min strategy call
              </span>
              <span className="text-ink/40 text-[12px] flex items-center gap-1.5">
                <span className="text-royal font-bold">✓</span> 100% satisfaction guaranteed
              </span>
              <span className="text-ink/40 text-[12px] flex items-center gap-1.5">
                <span className="text-royal font-bold">✓</span> No commitment required
              </span>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* FOMO live ticker */}
      <ActivityTicker />

      {/* Waitlist modal */}
      <WaitlistModal open={waitlistOpen} onClose={() => setWaitlistOpen(false)} />
    </>
  );
}
