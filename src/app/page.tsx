"use client";

import { useState } from "react";

/* ─── DATA ─── */
const peptides = [
  {
    name: "BPC-157",
    aka: "Body Protection Compound",
    cat: "Recovery & Healing",
    icon: "🔬",
    accent: "#10b981",
    bg: "rgba(16,185,129,0.08)",
    border: "rgba(16,185,129,0.25)",
    benefits: ["Accelerates tendon, ligament & muscle healing", "Protects and heals gut lining", "Reduces systemic inflammation", "Promotes new blood vessel formation", "Counteracts NSAID-induced gut damage"],
    cons: ["Most studies are animal-based", "Not FDA-approved for therapeutic use", "Limited long-term human data"],
    verdict: "One of the most promising recovery peptides. Animal data is overwhelmingly positive across dozens of tissue types. Thousands of practitioners report consistent results.",
    score: 85,
  },
  {
    name: "GHK-Cu",
    aka: "Copper Peptide",
    cat: "Skin & Anti-Aging",
    icon: "✨",
    accent: "#8b5cf6",
    bg: "rgba(139,92,246,0.08)",
    border: "rgba(139,92,246,0.25)",
    benefits: ["Stimulates collagen & elastin production", "Reduces wrinkles, fine lines & age spots", "Promotes wound healing & skin repair", "Potent antioxidant properties", "Improves skin thickness & elasticity"],
    cons: ["Injectable protocols still emerging", "Effects are gradual (4–12 weeks)", "Quality varies between suppliers"],
    verdict: "The gold standard for skin rejuvenation. Unlike most anti-aging claims, GHK-Cu has peer-reviewed research backing its collagen-boosting effects.",
    score: 90,
  },
  {
    name: "TB-500",
    aka: "Thymosin Beta-4",
    cat: "Recovery & Performance",
    icon: "⚡",
    accent: "#f59e0b",
    bg: "rgba(245,158,11,0.08)",
    border: "rgba(245,158,11,0.25)",
    benefits: ["Promotes tissue repair & regeneration", "Reduces inflammation & scar tissue", "Improves flexibility & range of motion", "Supports cardiac tissue repair", "Enhances hair regrowth"],
    cons: ["Banned in competitive sports (WADA)", "Primarily animal model studies", "Theoretical tumor growth concern"],
    verdict: "Powerful recovery tool with strong preclinical support. Often stacked with BPC-157 for synergistic healing. Tumor concern is theoretical — no evidence in healthy individuals.",
    score: 75,
  },
  {
    name: "CJC-1295 / Ipamorelin",
    aka: "GH Secretagogue Stack",
    cat: "Performance & Longevity",
    icon: "🧬",
    accent: "#06b6d4",
    bg: "rgba(6,182,212,0.08)",
    border: "rgba(6,182,212,0.25)",
    benefits: ["Stimulates natural growth hormone release", "Improves body composition", "Enhances deep sleep quality", "Supports bone density & joint health", "Anti-aging through natural HGH pathway"],
    cons: ["Water retention early on", "Requires consistent dosing protocol", "Not a replacement for training & nutrition"],
    verdict: "Most popular GH-boosting stack for good reason. Works WITH your body's natural release pattern. The sleep improvements alone are worth investigating.",
    score: 80,
  },
  {
    name: "Semaglutide",
    aka: "GLP-1 Receptor Agonist",
    cat: "Metabolic & Weight",
    icon: "🎯",
    accent: "#f43f5e",
    bg: "rgba(244,63,94,0.08)",
    border: "rgba(244,63,94,0.25)",
    benefits: ["Clinically proven 15–20% weight reduction", "FDA-approved with massive Phase 3 data", "Improves insulin sensitivity", "Reduces cardiovascular risk markers", "Appetite regulation via gut-brain signaling"],
    cons: ["GI side effects early on", "Muscle loss without resistance training", "Rebound weight without lifestyle changes"],
    verdict: "Most clinically validated peptide in existence. FDA-approved with massive trial data. Not just weight loss — cardiovascular and metabolic benefits are significant.",
    score: 98,
  },
  {
    name: "AOD-9604",
    aka: "Anti-Obesity Drug Fragment",
    cat: "Targeted Fat Loss",
    icon: "🔥",
    accent: "#f97316",
    bg: "rgba(249,115,22,0.08)",
    border: "rgba(249,115,22,0.25)",
    benefits: ["Stimulates fat breakdown without affecting blood sugar", "Targets fat metabolism specifically", "No impact on IGF-1 levels", "Supports cartilage regeneration", "TGA-approved in Australia"],
    cons: ["Less data than semaglutide", "Modest without proper diet", "Not FDA-approved in the US"],
    verdict: "Targeted fat-loss peptide avoiding systemic effects of full HGH therapy. Australian TGA approval gives more regulatory legitimacy than most. Best stacked with nutrition.",
    score: 70,
  },
];

const faqs = [
  { q: "What exactly are peptides?", a: "Short chains of amino acids (2–50) that act as signaling molecules in your body. They tell your cells what to do — heal faster, produce more collagen, release growth hormone, or burn fat. Your body already makes thousands naturally. Supplemental peptides amplify specific pathways." },
  { q: "Are peptides safe?", a: "Safety depends on the specific peptide, dosage, and source quality. FDA-approved ones like semaglutide have extensive safety data. Research peptides like BPC-157 have strong animal profiles but limited human trials. The biggest real risk? Buying from unverified sources with questionable purity." },
  { q: "Are peptides legal?", a: "Most are legal for personal use or research. Some require a prescription (semaglutide). Others are banned in competitive sports (TB-500 via WADA). Regulations vary by country — they exist in a regulatory gray zone in most markets." },
  { q: "How are peptides different from steroids?", a: "Fundamentally different mechanisms. Steroids override your body's natural hormone production and often suppress it. Peptides work WITH your existing systems — amplifying natural processes rather than replacing them. Side effects, recovery impact, and long-term risk profiles are dramatically different." },
  { q: "Where should I start?", a: "Start with the goal: Skin → GHK-Cu topical. Injury recovery → BPC-157. Sleep & body composition → CJC-1295/Ipamorelin. Weight management → talk to a doctor about semaglutide. Always start at the lowest effective dose, source from tested suppliers, and ideally work with a practitioner." },
];

/* ─── COMPONENTS ─── */

function PeptideCard({ p }: { p: typeof peptides[0] }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{
        background: p.bg,
        borderColor: p.border,
      }}
      className="rounded-2xl border p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-5">
        <div>
          <div
            style={{ color: p.accent, background: `${p.accent}15` }}
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full mb-3"
          >
            {p.icon} {p.cat}
          </div>
          <h3 className="text-xl font-bold text-white leading-tight">{p.name}</h3>
          <p className="text-xs text-gray-500 mt-1">{p.aka}</p>
        </div>
        <div className="text-right ml-4 flex-shrink-0">
          <div className="text-3xl font-black" style={{ color: p.accent }}>{p.score}</div>
          <div className="text-[10px] text-gray-600 uppercase tracking-wider">Score</div>
        </div>
      </div>

      {/* Score bar */}
      <div className="h-1.5 rounded-full bg-gray-800 mb-5">
        <div className="h-full rounded-full transition-all" style={{ width: `${p.score}%`, background: p.accent }} />
      </div>

      {/* Benefits */}
      <div className="space-y-2.5 mb-5">
        {p.benefits.map((b) => (
          <div key={b} className="flex items-start gap-2">
            <span className="text-green-400 text-xs mt-1 flex-shrink-0">✓</span>
            <span className="text-sm text-gray-300 leading-snug">{b}</span>
          </div>
        ))}
      </div>

      {/* Considerations */}
      <div className="space-y-2.5 mb-5">
        {p.cons.map((c) => (
          <div key={c} className="flex items-start gap-2">
            <span className="text-yellow-500 text-xs mt-1 flex-shrink-0">⚠</span>
            <span className="text-sm text-gray-400 leading-snug">{c}</span>
          </div>
        ))}
      </div>

      {/* Verdict */}
      <button onClick={() => setOpen(!open)} className="w-full text-left pt-4 border-t border-gray-700/50">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-wider" style={{ color: p.accent }}>
            The Verdict
          </span>
          <span style={{ color: p.accent }} className="text-lg font-light">{open ? "−" : "+"}</span>
        </div>
        {open && <p className="mt-3 text-sm text-gray-400 leading-relaxed">{p.verdict}</p>}
      </button>
    </div>
  );
}

/* ─── MAIN PAGE ─── */
export default function Home() {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  return (
    <main className="bg-[#08080D] text-white overflow-x-hidden">
      {/* NAV */}
      <nav className="fixed top-0 w-full z-50" style={{ background: "rgba(8,8,13,0.85)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#" className="text-xl font-bold tracking-tight">
            Bob<span className="text-[#00D4AA]">Tides</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm">
            <a href="#peptides" className="text-gray-400 hover:text-white transition">Peptides</a>
            <a href="#science" className="text-gray-400 hover:text-white transition">Science</a>
            <a href="#faq" className="text-gray-400 hover:text-white transition">FAQ</a>
            <a href="https://instagram.com/ibrahimdaherr" target="_blank" rel="noopener" className="px-5 py-2 bg-[#00D4AA] text-black font-bold text-xs uppercase tracking-wider rounded-full hover:brightness-110 transition">
              Follow Bobby
            </a>
          </div>
        </div>
      </nav>

      {/* ═══════════ HERO ═══════════ */}
      <section className="relative min-h-screen flex items-center pt-16">
        {/* BG image */}
        <img
          src="/images/hero.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Overlays */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #08080D 5%, rgba(8,8,13,0.4) 50%, rgba(8,8,13,0.15) 100%)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(8,8,13,0.7) 0%, transparent 60%)" }} />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full py-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8" style={{ background: "rgba(0,212,170,0.12)", border: "1px solid rgba(0,212,170,0.25)" }}>
              <span className="w-2 h-2 rounded-full bg-[#00D4AA] animate-pulse" />
              <span className="text-[#00D4AA] text-sm font-medium">Research-Backed Peptide Education</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] mb-6">
              Ride the
              <br />
              <span style={{ background: "linear-gradient(135deg, #00D4AA, #00A3FF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                peptide wave.
              </span>
            </h1>

            <p className="text-lg text-gray-400 max-w-lg mb-10 leading-relaxed">
              No bro-science. No hype. Just the data on what peptides actually do for your body, your recovery, and your longevity.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#peptides" className="px-8 py-4 bg-[#00D4AA] text-black font-bold rounded-full hover:shadow-[0_0_30px_rgba(0,212,170,0.4)] transition-all text-sm uppercase tracking-wider">
                Explore Peptides ↓
              </a>
              <a href="#science" className="px-8 py-4 rounded-full text-white font-semibold text-sm transition-all" style={{ border: "1px solid rgba(255,255,255,0.15)" }}>
                The Science →
              </a>
            </div>

            {/* Stats */}
            <div className="mt-20 grid grid-cols-3 gap-10 max-w-md">
              {[
                { v: "7,000+", l: "Published Studies" },
                { v: "6", l: "Key Peptides" },
                { v: "85%", l: "Avg Research Score" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="text-2xl font-bold text-white">{s.v}</div>
                  <div className="text-xs text-gray-500 mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ PEPTIDES ═══════════ */}
      <section id="peptides" className="py-24 lg:py-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-xl mb-14">
            <span className="text-xs font-bold text-[#00D4AA] uppercase tracking-[3px] block mb-3">The Peptides</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Know what you&apos;re putting in your body.
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Each peptide profiled with research scores, benefits, honest considerations, and our verdict.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {peptides.map((p) => (
              <PeptideCard key={p.name} p={p} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ SCIENCE — PROS VS CONS ═══════════ */}
      <section id="science" className="py-24 lg:py-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header with image */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <span className="text-xs font-bold text-[#00D4AA] uppercase tracking-[3px] block mb-3">The Science</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Pros vs. cons —{" "}
                <span style={{ background: "linear-gradient(135deg, #00D4AA, #00A3FF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  honestly.
                </span>
              </h2>
              <p className="text-gray-400 leading-relaxed">
                We present research as it stands. For most peptides, the evidence leans heavily positive — the real risks are in sourcing and regulation, not the molecules.
              </p>
            </div>
            <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: "16/10" }}>
              <img src="/images/science.jpg" alt="Science" className="w-full h-full object-cover" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(8,8,13,0.6), transparent)" }} />
            </div>
          </div>

          {/* Pros and Cons */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl p-8" style={{ background: "rgba(16,185,129,0.06)", border: "1px solid rgba(16,185,129,0.2)" }}>
              <h3 className="text-lg font-bold text-emerald-400 mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full flex items-center justify-center text-sm" style={{ background: "rgba(16,185,129,0.15)" }}>✓</span>
                What research supports
              </h3>
              <div className="space-y-4">
                {[
                  "Work WITH your body's natural signaling — not against it",
                  "Multiple peptides have decades of preclinical data",
                  "Semaglutide is FDA-approved with massive Phase 3 evidence",
                  "GHK-Cu has peer-reviewed collagen data in humans",
                  "Mild side effect profiles vs. hormones or steroids",
                  "Targeted mechanisms = less systemic disruption",
                  "Growing physician adoption accelerating clinical use",
                  "Anti-aging applications align with natural repair pathways",
                ].map((x) => (
                  <div key={x} className="flex items-start gap-3">
                    <span className="text-emerald-400 font-bold mt-0.5 flex-shrink-0">+</span>
                    <span className="text-sm text-gray-300">{x}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl p-8" style={{ background: "rgba(245,158,11,0.05)", border: "1px solid rgba(245,158,11,0.2)" }}>
              <h3 className="text-lg font-bold text-amber-400 mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full flex items-center justify-center text-sm" style={{ background: "rgba(245,158,11,0.15)" }}>⚠</span>
                What to be aware of
              </h3>
              <div className="space-y-4">
                {[
                  "Many lack large-scale human clinical trials",
                  "Supplement industry has quality control issues",
                  "Not FDA-regulated as supplements (gray zone)",
                  "Some banned in competitive sports (WADA)",
                  "Individual responses vary person to person",
                  "Long-term safety data (10+ years) is limited",
                ].map((x) => (
                  <div key={x} className="flex items-start gap-3">
                    <span className="text-amber-400 font-bold mt-0.5 flex-shrink-0">–</span>
                    <span className="text-sm text-gray-400">{x}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-5 rounded-xl" style={{ background: "rgba(0,212,170,0.06)", border: "1px solid rgba(0,212,170,0.15)" }}>
                <p className="text-sm text-[#00D4AA] leading-relaxed">
                  <strong>Bottom line:</strong> 8 evidence-backed pros vs 6 valid cautions — most about regulation and sourcing, not the science. The peptides aren&apos;t the risk. The unregulated market is.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ THE WAVE — lifestyle split ═══════════ */}
      <section className="py-24 lg:py-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
            <div className="relative" style={{ minHeight: "400px" }}>
              <img src="/images/performance.jpg" alt="Performance" className="absolute inset-0 w-full h-full object-cover" />
            </div>
            <div className="p-10 lg:p-16 flex flex-col justify-center" style={{ background: "rgba(255,255,255,0.03)" }}>
              <span className="text-xs font-bold text-[#00D4AA] uppercase tracking-[3px] block mb-4">The Wave</span>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Peptides aren&apos;t magic.<br />They&apos;re precision.
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                The difference? They work with your biology, not against it. No overriding hormones. No shutting down natural production. Just amplifying what your body already knows how to do.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Recovery. Skin. Performance. Longevity. Fat loss. Each peptide targets a specific pathway with surgical precision. Know the science, source it right, dose it smart.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ FAQ ═══════════ */}
      <section id="faq" className="py-24 lg:py-32 px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-bold text-[#00D4AA] uppercase tracking-[3px] block mb-3">FAQ</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Got questions?</h2>
          </div>

          <div className="space-y-3">
            {faqs.map((f, i) => (
              <div
                key={f.q}
                className="rounded-xl overflow-hidden transition-all"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <button
                  onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-white/[0.02] transition"
                >
                  <span className="font-semibold text-white pr-4">{f.q}</span>
                  <span className="text-[#00D4AA] text-xl flex-shrink-0">{faqOpen === i ? "−" : "+"}</span>
                </button>
                {faqOpen === i && (
                  <div className="px-6 pb-5 text-gray-400 text-sm leading-relaxed" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                    <div className="pt-4">{f.a}</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ CTA ═══════════ */}
      <section className="py-24 lg:py-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden">
            <img src="/images/lifestyle.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0" style={{ background: "rgba(8,8,13,0.75)", backdropFilter: "blur(2px)" }} />
            <div className="relative text-center py-24 px-8">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Ride the <span className="text-[#00D4AA]">tide.</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-md mx-auto mb-10">
                Daily peptide education, protocol breakdowns, and the latest research. No BS.
              </p>
              <a
                href="https://instagram.com/ibrahimdaherr"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 px-10 py-5 bg-[#00D4AA] text-black font-bold rounded-full hover:shadow-[0_0_40px_rgba(0,212,170,0.4)] transition-all text-sm uppercase tracking-wider"
              >
                Follow @BobTides →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ FOOTER ═══════════ */}
      <footer style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }} className="py-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xl font-bold">Bob<span className="text-[#00D4AA]">Tides</span></span>
            <p className="text-gray-600 text-sm mt-1">Research-backed peptide education</p>
          </div>
          <div className="flex gap-8 text-sm text-gray-500">
            <a href="#peptides" className="hover:text-white transition">Peptides</a>
            <a href="#science" className="hover:text-white transition">Science</a>
            <a href="#faq" className="hover:text-white transition">FAQ</a>
            <a href="https://instagram.com/ibrahimdaherr" target="_blank" rel="noopener" className="hover:text-[#00D4AA] transition">Instagram</a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-8" style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
          <p className="text-[11px] text-gray-700 text-center max-w-2xl mx-auto">
            Disclaimer: Educational purposes only. Nothing on BobTides constitutes medical advice. Consult a qualified healthcare professional before starting any peptide protocol. Individual results vary. © 2026 BobTides.
          </p>
        </div>
      </footer>
    </main>
  );
}
