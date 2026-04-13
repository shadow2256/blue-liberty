"use client";

// UPDATE: Replace placeholder client names with real ones from Imagine + Jordan's closed clients.
// Remove any $$ symbols — just use clean company names.

const clients = [
  { name: "Idolem", category: "Fashion & Lifestyle" },
  { name: "Groupe Lumina", category: "Real Estate Development" },
  { name: "Atlas Capital", category: "Private Investment" },
  { name: "Maison Nord", category: "Hospitality" },
  { name: "Nexora Group", category: "Tech & Innovation" },
  { name: "Verano Partners", category: "Family Office" },
];

export default function SocialProof() {
  return (
    <section className="py-20 bg-white border-t border-slate/10">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-[10.5px] font-bold text-ink/30 uppercase tracking-[0.2em] mb-3">
            Des entreprises qui ont dit oui
          </p>
          <h2 className="font-display font-extrabold text-ink text-3xl md:text-4xl leading-tight tracking-tight">
            Trusted by forward-thinking companies
          </h2>
          <p className="text-ink/45 text-[14px] mt-3 max-w-md mx-auto">
            From family offices to high-growth brands — these are the clients who committed first.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {clients.map((client) => (
            <div
              key={client.name}
              className="flex flex-col items-center justify-center gap-1.5 p-5 rounded-2xl border border-slate/20 bg-mist/50 hover:border-royal/30 hover:bg-mist transition-all duration-200"
            >
              <p className="font-display font-extrabold text-ink text-[17px] tracking-tight text-center">
                {client.name}
              </p>
              <p className="text-[11px] font-medium text-ink/35 text-center uppercase tracking-wide">
                {client.category}
              </p>
            </div>
          ))}
        </div>

        <p className="text-center text-[11.5px] text-ink/30 mt-8">
          Clients represented through{" "}
          <span className="font-semibold text-ink/50">Imagine</span> — and direct partnerships.
        </p>
      </div>
    </section>
  );
}
