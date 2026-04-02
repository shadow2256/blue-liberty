"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Marketplace", href: "#properties" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Properties", href: "#properties" },
  { label: "Invest", href: "#waitlist" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#education" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-card border-b border-slate/20"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0" aria-label="Blue Liberty home">
          <BlueLibertyLogo />
          <span className="font-display font-extrabold text-ink text-[15px] tracking-[0.12em] uppercase">
            Blue Liberty
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-[13.5px] font-medium text-ink/70 hover:text-ink transition-colors duration-150 cursor-pointer"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center">
          <a
            href="#waitlist"
            className="inline-flex items-center px-5 py-2.5 rounded-lg bg-royal text-white text-[13.5px] font-semibold shadow-royal hover:shadow-royal-lg hover:bg-[#1a47f0] transition-all duration-200 cursor-pointer"
          >
            Get Started
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 bg-ink transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-5 h-0.5 bg-ink transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-ink transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-slate/20 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-[15px] font-medium text-ink/80 hover:text-royal transition-colors cursor-pointer"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#waitlist"
            onClick={() => setMenuOpen(false)}
            className="inline-flex justify-center items-center px-5 py-3 rounded-lg bg-royal text-white text-[14px] font-semibold shadow-royal cursor-pointer"
          >
            Get Started
          </a>
        </div>
      )}
    </header>
  );
}

function BlueLibertyLogo() {
  return (
    <svg width="36" height="44" viewBox="0 0 72 88" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="nav-b-grad" x1="0" y1="0" x2="72" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#2B5CAD" />
          <stop offset="55%" stopColor="#6FA0D8" />
          <stop offset="100%" stopColor="#B8D4EE" />
        </linearGradient>
      </defs>

      {/* B letterform — fill-rule evenodd cuts out the two bowls */}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="
          M 4 4 L 44 4
          C 58 4 68 13 68 24
          C 68 33 63 39 55 42
          C 64 46 70 54 70 64
          C 70 76 60 84 44 84
          L 4 84 Z

          M 16 15 L 41 15
          C 49 15 55 21 55 27
          C 55 33 49 39 41 39
          L 16 39 Z

          M 16 49 L 43 49
          C 53 49 59 55 59 63
          C 59 71 53 77 43 77
          L 16 77 Z
        "
        fill="url(#nav-b-grad)"
      />

      {/* Palm trunk */}
      <line x1="35" y1="72" x2="35" y2="18" stroke="#0C176D" strokeWidth="2.5" strokeLinecap="round" />

      {/* Palm fronds fanning out from top of trunk */}
      <path d="M35 20 Q22 10 11 17" stroke="#0C176D" strokeWidth="2.2" fill="none" strokeLinecap="round" />
      <path d="M35 20 Q28 7 29 1"  stroke="#0C176D" strokeWidth="2.2" fill="none" strokeLinecap="round" />
      <path d="M35 20 Q40 6 44 1"  stroke="#0C176D" strokeWidth="2.2" fill="none" strokeLinecap="round" />
      <path d="M35 20 Q48 10 58 15" stroke="#0C176D" strokeWidth="2.2" fill="none" strokeLinecap="round" />
      <path d="M35 20 Q50 15 57 10" stroke="#0C176D" strokeWidth="1.6" fill="none" strokeLinecap="round" />
      <path d="M35 20 Q19 15 13 10" stroke="#0C176D" strokeWidth="1.6" fill="none" strokeLinecap="round" />

      {/* Roofline chevron — sits in the lower bowl */}
      <path
        d="M20 76 L35 58 L50 76"
        stroke="#0C176D"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
