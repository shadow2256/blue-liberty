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
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
      {/* Rounded square background */}
      <rect width="36" height="36" rx="9" fill="#0C176D" />

      {/* === B LETTERMARK === */}
      {/* Left vertical bar */}
      <rect x="8" y="8" width="4" height="20" rx="1" fill="white" />

      {/* Upper bump of B */}
      <path
        d="M12 8 h4 a5 5 0 0 1 0 10 h-4 z"
        fill="white"
      />
      {/* Upper bump inner cutout */}
      <path
        d="M12 10 h3.5 a3 3 0 0 1 0 6 h-3.5 z"
        fill="#0C176D"
      />

      {/* Lower bump of B */}
      <path
        d="M12 18 h4.5 a6 6 0 0 1 0 10 h-4.5 z"
        fill="white"
      />
      {/* Lower bump inner cutout */}
      <path
        d="M12 20 h4 a4 4 0 0 1 0 6 h-4 z"
        fill="#0C176D"
      />

      {/* === PALM FROND ACCENT (top-right of B) === */}
      {/* Main frond leaf */}
      <path
        d="M21 9 Q24 6 27 8 Q25 11 21 9 Z"
        fill="#0FA8FF"
      />
      {/* Secondary frond leaf */}
      <path
        d="M23 7 Q27 5 28 9 Q25.5 9 23 7 Z"
        fill="#84C6FF"
        fillOpacity="0.85"
      />
    </svg>
  );
}
