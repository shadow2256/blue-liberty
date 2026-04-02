export default function TrustBar() {
  return (
    <section className="bg-white border-y border-slate/15 py-7">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
          {/* Featured In */}
          <div className="flex flex-col items-center gap-2.5 flex-1">
            <p className="text-[10px] font-bold text-ink/25 uppercase tracking-widest">Featured In</p>
            <ForbesLogo />
          </div>

          <div className="hidden sm:block w-px h-10 bg-slate/20" />

          {/* Trusted Platform */}
          <div className="flex flex-col items-center gap-2.5 flex-1">
            <p className="text-[10px] font-bold text-ink/25 uppercase tracking-widest">Trusted Platform</p>
            <div className="flex items-center gap-1.5 text-ink/35">
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
              <span className="text-[15px] font-semibold tracking-tight">TrustedPlatch</span>
            </div>
          </div>

          <div className="hidden sm:block w-px h-10 bg-slate/20" />

          {/* Investor-Focused */}
          <div className="flex flex-col items-center gap-2.5 flex-1">
            <p className="text-[10px] font-bold text-ink/25 uppercase tracking-widest">Investor-Focused</p>
            <div className="flex items-center gap-1.5 text-ink/35">
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
              <span className="text-[15px] font-semibold tracking-tight">Prowaster</span>
            </div>
          </div>

          <div className="hidden sm:block w-px h-10 bg-slate/20" />

          {/* Property-Backed */}
          <div className="flex flex-col items-center gap-2.5 flex-1">
            <p className="text-[10px] font-bold text-ink/25 uppercase tracking-widest">Property-Backed</p>
            <div className="flex items-center gap-1.5 text-ink/35">
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                <polyline points="9,22 9,12 15,12 15,22" />
              </svg>
              <span className="text-[15px] font-semibold tracking-tight">Investinser</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ForbesLogo() {
  return (
    <svg viewBox="0 0 80 22" className="h-5 w-auto" aria-label="Forbes" role="img">
      <text
        x="0" y="18"
        fontFamily="Georgia, serif"
        fontSize="20"
        fontWeight="bold"
        fill="#0C176D"
        opacity="0.35"
      >
        Forbes
      </text>
    </svg>
  );
}
