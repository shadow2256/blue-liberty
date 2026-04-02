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
        <Link href="/" className="flex items-center gap-2.5 shrink-0" aria-label="Blue Liberty home">
          <BlueLibertyLogo />
          <span className="font-display font-bold text-ink text-[15px] tracking-[0.08em] uppercase">
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
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect width="32" height="32" rx="8" fill="#0C176D" />
      {/* Stylized B with roofline */}
      <path
        d="M9 8h8.5c2.5 0 4.5 1.8 4.5 4 0 1.2-.5 2.2-1.4 2.9C22.1 15.6 23 16.8 23 18.2 23 20.8 20.8 23 18 23H9V8z"
        fill="white"
        fillOpacity="0.95"
      />
      {/* Horizontal stripes (B inner) */}
      <rect x="9" y="8" width="7" height="2" rx="0" fill="#0C176D" />
      <rect x="9" y="14.5" width="7" height="2" rx="0" fill="#0C176D" />
      <rect x="9" y="21" width="7" height="2" rx="0" fill="#0C176D" />
      {/* Palm frond accent */}
      <path
        d="M20 7 Q22 5 24 7 Q22 8 20 7z"
        fill="#0FA8FF"
        fillOpacity="0.9"
      />
      <path
        d="M22 6 Q25 5 26 8 Q23.5 7.5 22 6z"
        fill="#84C6FF"
        fillOpacity="0.8"
      />
    </svg>
  );
}
