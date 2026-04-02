import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Blue Liberty Brand System
        ink: "#0C176D",        // Blue Liberty Ink — trust sections, dark headers
        royal: "#2F5BFF",      // Liberty Royal — CTAs, buttons, links
        horizon: "#0FA8FF",    // Horizon Blue — accents, highlights
        mist: "#EAF1FF",       // Mist Surface — light section backgrounds
        "salt-white": "#FBFAFF", // Salt White — white sections
        slate: "#84C6FF",      // Harbor Slate — accent color
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-plus-jakarta)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(135deg, #EAF1FF 0%, #FBFAFF 60%, #EAF1FF 100%)",
        "dark-gradient": "linear-gradient(135deg, #0C176D 0%, #0A1240 50%, #0C176D 100%)",
        "royal-gradient": "linear-gradient(135deg, #2F5BFF 0%, #0FA8FF 100%)",
        "card-gradient": "linear-gradient(145deg, rgba(255,255,255,0.9) 0%, rgba(234,241,255,0.8) 100%)",
      },
      boxShadow: {
        card: "0 4px 24px rgba(12, 23, 109, 0.08), 0 1px 4px rgba(12, 23, 109, 0.04)",
        "card-hover": "0 8px 40px rgba(12, 23, 109, 0.14), 0 2px 8px rgba(12, 23, 109, 0.08)",
        royal: "0 4px 20px rgba(47, 91, 255, 0.35)",
        "royal-lg": "0 8px 32px rgba(47, 91, 255, 0.4)",
        float: "0 20px 60px rgba(12, 23, 109, 0.15), 0 4px 16px rgba(12, 23, 109, 0.08)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.5s ease-out forwards",
        ticker: "ticker 30s linear infinite",
        "pulse-slow": "pulse 3s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "slide-in": "slideIn 0.4s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        ticker: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        slideIn: {
          "0%": { opacity: "0", transform: "translateX(-12px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
