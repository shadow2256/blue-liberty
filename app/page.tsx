"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import HowItWorks from "@/components/HowItWorks";
import PropertyListings from "@/components/PropertyListings";
import Benefits from "@/components/Benefits";
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

        <PropertyListings />
        <Benefits onWaitlist={() => setWaitlistOpen(true)} />

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
              Don't Miss Your Spot
            </h2>
            <p className="text-ink/55 text-lg leading-relaxed mb-8 max-w-xl mx-auto">
              Early access members lock in founding rates and get first pick of premium
              Florida property listings before the platform goes public.
            </p>
            <button
              onClick={() => setWaitlistOpen(true)}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-royal text-white font-bold text-[16px] shadow-royal hover:shadow-royal-lg hover:bg-[#1a47f0] transition-all duration-200 cursor-pointer"
            >
              Claim Early Access
              <span className="text-white/70">→</span>
            </button>
            <p className="text-ink/35 text-[12px] mt-4">No credit card required.</p>
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
