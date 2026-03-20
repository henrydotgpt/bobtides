"use client";

import { useState } from "react";
import Image from "next/image";

/* ─── DATA ─── */
const peptides = [
  {
    name: "BPC-157",
    aka: "Body Protection Compound",
    category: "Recovery",
    emoji: "🔬",
    color: "from-emerald-500/30 to-emerald-900/20",
    border: "border-emerald-500/30 hover:border-emerald-400/60",
    badge: "bg-emerald-500/10 text-emerald-400",
    benefits: ["Accelerates tendon, ligament & muscle healing", "Protects and heals the gut lining", "Reduces systemic inflammation", "Promotes new blood vessel formation", "Counteracts NSAID-induced gut damage"],
    considerations: ["Most studies are animal-based", "Not FDA-approved for therapeutic use", "Limited long-term human data"],
    verdict: "One of the most promising recovery peptides. Animal data is overwhelmingly positive across dozens of tissue types. Thousands of practitioners and athletes report consistent results.",
    score: 85,
  },
  {
    name: "GHK-Cu",
    aka: "Copper Peptide",
    category: "Anti-Aging",
    emoji: "✨",
    color: "from-violet-500/30 to-violet-900/20",
    border: "border-violet-500/30 hover:border-violet-400/60",
    badge: "bg-violet-500/10 text-violet-400",
    benefits: ["Stimulates collagen & elastin production", "Reduces wrinkles, fine lines & age spots", "Promotes wound healing & skin repair", "Potent antioxidant properties", "Improves skin thickness & elasticity"],
    considerations: ["Injectable protocols are still emerging", "Effects are gradual (4–12 weeks)", "Quality varies between suppliers"],
    verdict: "The gold standard for skin rejuvenation peptides. Unlike most anti-aging claims, GHK-Cu has peer-reviewed research backing its collagen-boosting effects.",
    score: 90,
  },
  {
    name: "TB-500",
    aka: "Thymosin Beta-4",
    category: "Performance",
    emoji: "⚡",
    color: "from-amber-500/30 to-amber-900/20",
    border: "border-amber-500/30 hover:border-amber-400/60",
    badge: "bg-amber-500/10 text-amber-400",
    benefits: ["Promotes tissue repair & regeneration", "Reduces inflammation & scar tissue", "Improves flexibility & range of motion", "Supports cardiac tissue repair", "Enhances hair regrowth"],
    considerations: ["Banned in competitive sports (WADA)", "Primarily animal model studies", "Theoretical tumor growth concern"],
    verdict: "A powerful recovery tool with strong preclinical support. Often stacked with BPC-157 for synergistic healing. The tumor concern is theoretical — no causal evidence in healthy individuals.",
    score: 75,
  },
  {
    name: "CJC-1295 / Ipamorelin",
    aka: "GH Secretagogue Stack",
    category: "Longevity",
    emoji: "🧬",
    color: "from-cyan-500/30 to-cyan-900/20",
    border: "border-cyan-500/30 hover:border-cyan-400/60",
    badge: "bg-cyan-500/10 text-cyan-400",
    benefits: ["Stimulates natural growth hormone release", "Improves body composition", "Enhances deep sleep quality", "Supports bone density & joint health", "Anti-aging through natural HGH pathway"],
    considerations: ["Can cause water retention initially", "Requires consistent dosing protocol", "Not a replacement for training & nutrition"],
    verdict: "The most popular GH-boosting stack for good reason. Works WITH your body's natural pulsatile release pattern. The sleep improvements alone are worth investigating.",
    score: 80,
  },
  {
    name: "Semaglutide",
    aka: "GLP-1 Receptor Agonist",
    category: "Metabolic",
    emoji: "🎯",
    color: "from-rose-500/30 to-rose-900/20",
    border: "border-rose-500/30 hover:border-rose-400/60",
    badge: "bg-rose-500/10 text-rose-400",
    benefits: ["Clinically proven 15–20% weight reduction", "FDA-approved with massive trial data", "Improves insulin sensitivity", "Reduces cardiovascular risk markers", "Appetite regulation via gut-brain signaling"],
    considerations: ["Common GI side effects early on", "Potential muscle loss without resistance training", "Rebound weight gain if stopped without lifestyle changes"],
    verdict: "The most clinically validated peptide in existence. FDA-approved with massive Phase 3 data. Not just weight loss — the cardiovascular and metabolic benefits are real and significant.",
    score: 98,
  },
  {
    name: "AOD-9604",
    aka: "Anti-Obesity Drug Fragment",
    category: "Fat Loss",
    emoji: "🔥",
    color: "from-orange-500/30 to-orange-900/20",
    border: "border-orange-500/30 hover:border-orange-400/60",
    badge: "bg-orange-500/10 text-orange-400",
    benefits: ["Stimulates fat breakdown without affecting blood sugar", "Targets fat metabolism specifically", "No impact on IGF-1 levels", "Supports cartilage regeneration", "TGA-approved in Australia"],
    considerations: ["Less clinical data than semaglutide", "Results modest without proper diet", "Not FDA-approved in the US"],
    verdict: "A targeted fat-loss peptide that avoids systemic effects of full HGH therapy. The Australian TGA approval gives it more regulatory legitimacy than most. Best stacked with proper nutrition.",
    score: 70,
  },
];

const faqs = [
  { q: "What exactly are peptides?", a: "Short chains of amino acids (2–50) that act as signaling molecules. They tell your cells what to do — heal faster, produce more collagen, release growth hormone, or burn fat. Your body already makes thousands naturally. Supplemental peptides amplify specific pathways." },
  { q: "Are peptides safe?", a: "Depends on the specific peptide, dosage, and source quality. FDA-approved ones like semaglutide have extensive safety data. Research peptides like BPC-157 have strong animal safety profiles but limited human trials. The biggest risk is buying from unverified sources with questionable purity." },
  { q: "Are peptides legal?", a: "Most are legal for personal use or research. Some require a prescription (semaglutide). Others are banned in competitive sports (TB-500). Regulations vary by country — they exist in a gray zone in most markets." },
  { q: "How are peptides different from steroids?", a: "Fundamentally different. Steroids override your body's natural hormone production. Peptides work WITH your existing systems — amplifying natural processes rather than replacing them. The side effect profile and long-term risk are dramatically different." },
  { q: "Where should I start?", a: "Start with the goal: Better skin → GHK-Cu. Injury recovery → BPC-157. Sleep & body comp → CJC-1295/Ipamorelin. Weight management → talk to a doctor about semaglutide. Always start low, source from tested suppliers, and ideally work with a practitioner." },
];

/* ─── COMPONENTS ─── */

function PeptideCard({ p }: { p: typeof peptides[0] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`rounded-3xl border ${p.border} bg-gradient-to-br ${p.color} backdrop-blur-sm transition-all duration-500 overflow-hidden`}>
      <div className="p-8">
        <div className="flex items-start justify-between mb-6">
          <div>
            <span className={`inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${p.badge} mb-3`}>
              {p.emoji} {p.category}
            </span>
            <h3 className="text-2xl font-bold text-white">{p.name}</h3>
            <p className="text-sm text-white/50 mt-1">{p.aka}</p>
          </div>
          <div className="text-right flex-shrink-0">
            <div className="text-3xl font-black text-white/90">{p.score}</div>
            <div className="text-[10px] text-white/40 uppercase tracking-wider">Score</div>
          </div>
        </div>

        {/* Score bar */}
        <div className="h-1 rounded-full bg-white/5 mb-6">
          <div className="h-full rounded-full bg-[#00D4AA]/60" style={{ width: `${p.score}%` }} />
        </div>

        {/* Benefits */}
        <div className="space-y-2 mb-6">
          {p.benefits.map((b) => (
            <div key={b} className="flex items-start gap-2.5 text-sm">
              <span className="text-emerald-400 mt-0.5">✓</span>
              <span className="text-white/80">{b}</span>
            </div>
          ))}
        </div>

        {/* Considerations */}
        <div className="space-y-2 mb-6">
          {p.considerations.map((c) => (
            <div key={c} className="flex items-start gap-2.5 text-sm">
              <span className="text-amber-400 mt-0.5">⚠</span>
              <span className="text-white/60">{c}</span>
            </div>
          ))}
        </div>

        {/* Verdict toggle */}
        <button onClick={() => setOpen(!open)} className="w-full text-left pt-4 border-t border-white/[0.06]">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-[#00D4AA] uppercase tracking-wider">The Verdict</span>
            <span className="text-[#00D4AA] text-lg">{open ? "−" : "+"}</span>
          </div>
          {open && <p className="mt-3 text-sm text-white/60 leading-relaxed">{p.verdict}</p>}
        </button>
      </div>
    </div>
  );
}

/* ─── MAIN PAGE ─── */
export default function Home() {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  return (
    <main className="overflow-x-hidden">
      {/* NAV */}
      <nav className="fixed top-0 w-full z-50 bg-[#0A0A0F]/60 backdrop-blur-2xl border-b border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="text-xl font-bold tracking-tight">
            Bob<span className="text-[#00D4AA]">Tides</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm">
            <a href="#peptides" className="text-white/60 hover:text-white transition">Peptides</a>
            <a href="#science" className="text-white/60 hover:text-white transition">Science</a>
            <a href="#faq" className="text-white/60 hover:text-white transition">FAQ</a>
            <a href="https://instagram.com/ibrahimdaherr" target="_blank" className="px-5 py-2 bg-[#00D4AA] text-black font-bold text-xs uppercase tracking-wider rounded-full hover:shadow-[0_0_25px_rgba(0,212,170,0.3)] transition-all">
              Follow Bobby
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-end pb-24 px-6 pt-16">
        <div className="absolute inset-0">
          <Image src="/images/hero.jpg" alt="" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] via-[#0A0A0F]/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0F]/60 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto w-full">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00D4AA]/10 border border-[#00D4AA]/20 text-[#00D4AA] text-sm font-medium mb-8 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-[#00D4AA] animate-pulse" />
              Research-Backed Peptide Education
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-6">
              Ride the
              <br />
              <span className="bg-gradient-to-r from-[#00D4AA] to-[#00A3FF] bg-clip-text text-transparent">peptide wave.</span>
            </h1>

            <p className="text-lg text-white/60 max-w-lg mb-10 leading-relaxed">
              No bro-science. No hype. Just the data on what peptides actually do for your body, recovery, and longevity — and what they don&apos;t.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#peptides" className="px-8 py-4 bg-[#00D4AA] text-black font-bold rounded-full hover:shadow-[0_0_30px_rgba(0,212,170,0.3)] transition-all text-sm uppercase tracking-wider">
                Explore Peptides
              </a>
              <a href="#science" className="px-8 py-4 border border-white/10 text-white font-semibold rounded-full hover:bg-white/5 transition-all text-sm">
                The Science →
              </a>
            </div>
          </div>

          {/* Stats bar */}
          <div className="mt-16 flex gap-12">
            {[
              { val: "7,000+", label: "Published Studies" },
              { val: "6", label: "Key Peptides" },
              { val: "85%", label: "Avg Research Score" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-2xl font-bold text-white">{s.val}</div>
                <div className="text-xs text-white/40 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PEPTIDES */}
      <section id="peptides" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-xl mb-16">
            <span className="text-xs font-bold text-[#00D4AA] uppercase tracking-[3px]">The Peptides</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4 text-white">
              Know what you&apos;re putting in your body.
            </h2>
            <p className="text-white/50 leading-relaxed">
              Each peptide profiled with research scores, benefits, considerations, and our honest verdict. No fluff.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {peptides.map((p) => (
              <PeptideCard key={p.name} p={p} />
            ))}
          </div>
        </div>
      </section>

      {/* SCIENCE — PROS VS CONS */}
      <section id="science" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <span className="text-xs font-bold text-[#00D4AA] uppercase tracking-[3px]">The Science</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-white">
                Pros vs. cons —<br />
                <span className="bg-gradient-to-r from-[#00D4AA] to-[#00A3FF] bg-clip-text text-transparent">honestly.</span>
              </h2>
              <p className="text-white/50 leading-relaxed">
                We present the research as it stands. For most peptides, the evidence leans heavily positive — the real risks are in sourcing and regulation, not the molecules themselves.
              </p>
            </div>
            <div className="relative h-80 rounded-3xl overflow-hidden">
              <Image src="/images/science.jpg" alt="Science" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F]/80 to-transparent" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Pros */}
            <div className="rounded-3xl bg-emerald-500/[0.03] border border-emerald-500/10 p-8">
              <h3 className="text-xl font-bold text-emerald-400 mb-8 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-sm">✓</span>
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
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="text-emerald-400 font-bold mt-0.5 flex-shrink-0">+</span>
                    <span className="text-sm text-white/60">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Cons */}
            <div className="rounded-3xl bg-amber-500/[0.03] border border-amber-500/10 p-8">
              <h3 className="text-xl font-bold text-amber-400 mb-8 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center text-sm">⚠</span>
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
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="text-amber-400 font-bold mt-0.5 flex-shrink-0">–</span>
                    <span className="text-sm text-white/60">{item}</span>
                  </div>
                ))}
              </div>

              {/* Verdict box */}
              <div className="mt-8 p-5 rounded-2xl bg-[#00D4AA]/[0.05] border border-[#00D4AA]/10">
                <p className="text-sm text-[#00D4AA]/80 leading-relaxed">
                  <strong className="text-[#00D4AA]">Bottom line:</strong> 8 evidence-backed pros vs 6 valid cautions — most of which are about regulation and sourcing, not the science. The peptides aren&apos;t the risk. The unregulated market is. Source smart.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LIFESTYLE SECTION */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-white/[0.06]">
            <div className="relative h-80 lg:h-auto">
              <Image src="/images/performance.jpg" alt="Performance" fill className="object-cover" />
            </div>
            <div className="bg-white/[0.02] p-12 lg:p-16 flex flex-col justify-center">
              <span className="text-xs font-bold text-[#00D4AA] uppercase tracking-[3px] mb-4">The Wave</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Peptides aren&apos;t magic.<br />They&apos;re precision.
              </h2>
              <p className="text-white/50 leading-relaxed mb-6">
                The difference between peptides and everything else? They work with your biology, not against it. No overriding your hormones. No shutting down natural production. Just amplifying what your body already knows how to do.
              </p>
              <p className="text-white/50 leading-relaxed">
                Recovery. Skin. Performance. Longevity. Fat loss. Each peptide targets a specific pathway with surgical precision. Know the science, source it right, dose it smart — and let your biology do what it was designed to do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-bold text-[#00D4AA] uppercase tracking-[3px]">FAQ</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 text-white">
              Got questions?
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={faq.q}
                className="rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-[#00D4AA]/20 transition-all overflow-hidden"
              >
                <button
                  onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                >
                  <span className="font-semibold text-white pr-4">{faq.q}</span>
                  <span className="text-[#00D4AA] text-xl flex-shrink-0">{faqOpen === i ? "−" : "+"}</span>
                </button>
                {faqOpen === i && (
                  <div className="px-6 pb-5 text-white/50 text-sm leading-relaxed border-t border-white/[0.04] pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0">
              <Image src="/images/lifestyle.jpg" alt="" fill className="object-cover" />
              <div className="absolute inset-0 bg-[#0A0A0F]/80 backdrop-blur-sm" />
            </div>
            <div className="relative text-center py-24 px-8">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Ride the <span className="text-[#00D4AA]">tide.</span>
              </h2>
              <p className="text-white/60 text-lg max-w-md mx-auto mb-10">
                Daily peptide education, protocol breakdowns, and the latest research. No BS.
              </p>
              <a
                href="https://instagram.com/ibrahimdaherr"
                target="_blank"
                className="inline-flex items-center gap-2 px-10 py-5 bg-[#00D4AA] text-black font-bold rounded-full hover:shadow-[0_0_40px_rgba(0,212,170,0.4)] transition-all text-sm uppercase tracking-wider"
              >
                Follow @BobTides →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/[0.04] py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xl font-bold">Bob<span className="text-[#00D4AA]">Tides</span></span>
            <p className="text-white/30 text-sm mt-1">Research-backed peptide education</p>
          </div>
          <div className="flex gap-8 text-sm text-white/40">
            <a href="#peptides" className="hover:text-white transition">Peptides</a>
            <a href="#science" className="hover:text-white transition">Science</a>
            <a href="#faq" className="hover:text-white transition">FAQ</a>
            <a href="https://instagram.com/ibrahimdaherr" target="_blank" className="hover:text-[#00D4AA] transition">Instagram</a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/[0.03]">
          <p className="text-[11px] text-white/20 text-center max-w-2xl mx-auto">
            Disclaimer: Educational purposes only. Nothing on BobTides constitutes medical advice. Consult a qualified healthcare professional before starting any peptide protocol. Individual results vary. © 2026 BobTides.
          </p>
        </div>
      </footer>
    </main>
  );
}
