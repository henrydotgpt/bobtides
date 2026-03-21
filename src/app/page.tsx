"use client";

import { useState } from "react";

/* ═══════════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════════ */

const peptides = [
  {
    name: "BPC-157",
    tag: "Recovery",
    desc: "Body Protection Compound — the most talked-about recovery peptide. Accelerates healing of tendons, ligaments, muscles, and gut lining. Dozens of animal studies show remarkable tissue repair across every system tested.",
    score: 85,
    keyBenefit: "Gut & tissue repair",
    status: "Research",
  },
  {
    name: "GHK-Cu",
    tag: "Anti-Aging",
    desc: "Copper peptide backed by peer-reviewed human studies. Stimulates collagen and elastin, reduces wrinkles, improves skin thickness. The rare peptide where the topical data is actually strong.",
    score: 90,
    keyBenefit: "Collagen synthesis",
    status: "Studied",
  },
  {
    name: "TB-500",
    tag: "Performance",
    desc: "Thymosin Beta-4 — reduces inflammation, promotes tissue regeneration, improves flexibility. Often stacked with BPC-157 for synergistic recovery. Note: WADA-banned in competitive sports.",
    score: 75,
    keyBenefit: "Tissue regeneration",
    status: "Research",
  },
  {
    name: "CJC-1295 / Ipamorelin",
    tag: "Longevity",
    desc: "The gold-standard growth hormone secretagogue stack. Stimulates natural GH release, improves sleep quality, body composition, and joint health. Works with your pulsatile rhythm, not against it.",
    score: 80,
    keyBenefit: "Natural GH release",
    status: "Research",
  },
  {
    name: "Semaglutide",
    tag: "Metabolic",
    desc: "GLP-1 receptor agonist. FDA-approved with massive Phase 3 trial data. Clinically proven 15-20% body weight reduction plus cardiovascular and metabolic benefits. The most validated peptide in existence.",
    score: 98,
    keyBenefit: "FDA-approved weight loss",
    status: "FDA Approved",
  },
  {
    name: "AOD-9604",
    tag: "Fat Loss",
    desc: "An HGH fragment that targets fat metabolism without systemic growth hormone effects. TGA-approved in Australia. Stimulates lipolysis without impacting blood sugar or IGF-1 levels.",
    score: 70,
    keyBenefit: "Targeted fat breakdown",
    status: "TGA Approved",
  },
];

const pros = [
  "Work with your body's natural signaling",
  "Decades of preclinical research data",
  "Semaglutide: FDA-approved, Phase 3 validated",
  "GHK-Cu: peer-reviewed collagen data in humans",
  "Mild side effects vs. steroids or hormones",
  "Targeted mechanisms, less systemic disruption",
  "Growing physician adoption worldwide",
  "Aligned with natural repair pathways",
];

const cons = [
  "Many lack large-scale human clinical trials",
  "Quality control varies between suppliers",
  "Not FDA-regulated as supplements",
  "Some banned in competitive sports",
  "Individual responses vary",
  "Limited 10+ year safety data",
];

const faqs = [
  { q: "What exactly are peptides?", a: "Short chains of amino acids (2-50) that act as signaling molecules. They tell your cells what to do — heal, produce collagen, release growth hormone, or burn fat. Your body makes thousands naturally. Supplemental peptides amplify specific pathways." },
  { q: "Are peptides safe?", a: "Depends on the peptide, dosage, and source. FDA-approved ones like semaglutide have extensive safety data. Research peptides like BPC-157 have strong animal profiles but limited human trials. The biggest risk is unverified sources with questionable purity." },
  { q: "How are they different from steroids?", a: "Fundamentally different. Steroids override your body's hormone production. Peptides work WITH your existing systems — amplifying natural processes. Side effects, recovery impact, and long-term risk are dramatically different." },
  { q: "Are peptides legal?", a: "Most are legal for personal use. Some require a prescription (semaglutide). Others are banned in competitive sports (TB-500). Regulations vary by country — they exist in a gray zone in most markets." },
  { q: "Where should I start?", a: "Start with the goal: Skin → GHK-Cu. Injury → BPC-157. Sleep & body comp → CJC-1295/Ipamorelin. Weight → talk to a doctor about semaglutide. Start low, source tested, work with a practitioner." },
];

/* ═══════════════════════════════════════════════
   COMPONENTS
   ═══════════════════════════════════════════════ */

function Nav() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0C0C0C]/90 backdrop-blur-xl" style={{ borderBottom: "1px solid #1a1a1a" }}>
      <div className="max-w-[1200px] mx-auto px-5 h-14 flex items-center justify-between">
        <a href="#" className="text-lg font-bold tracking-tight text-white">
          BOB<span className="text-[#00D4AA]">TIDES</span>
        </a>
        <div className="hidden sm:flex items-center gap-6 text-[13px]">
          <a href="#peptides" className="text-[#888] hover:text-white transition">Peptides</a>
          <a href="#evidence" className="text-[#888] hover:text-white transition">Evidence</a>
          <a href="#faq" className="text-[#888] hover:text-white transition">FAQ</a>
          <a href="https://instagram.com/ibrahimdaherr" target="_blank" rel="noopener"
            className="ml-2 px-4 py-1.5 border border-[#00D4AA]/40 text-[#00D4AA] rounded-full text-xs font-semibold hover:bg-[#00D4AA]/10 transition">
            @bobtides
          </a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="pt-14">
      {/* Image */}
      <div className="relative w-full overflow-hidden" style={{ height: "clamp(280px, 50vh, 500px)" }}>
        <img src="/images/hero.jpg" alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(12,12,12,0) 30%, #0C0C0C 100%)" }} />
        {/* Brand overlay on image */}
        <div className="absolute bottom-8 left-0 right-0 text-center">
          <p className="text-[#00D4AA] text-xs font-bold uppercase tracking-[5px] mb-2">BobTides</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-[800px] mx-auto px-5 pt-8 pb-20 text-center">
        <h1 className="text-[clamp(2.2rem,6vw,4.5rem)] font-extrabold leading-[1.05] tracking-tight mb-5">
          The peptide
          <br />
          <span className="text-[#00D4AA]">education hub.</span>
        </h1>
        <p className="text-[#888] text-base sm:text-lg max-w-[520px] mx-auto leading-relaxed mb-8">
          Research-backed profiles on every peptide worth knowing.
          No bro-science. No hype. Just the data.
        </p>
        <div className="flex justify-center gap-3">
          <a href="#peptides"
            className="px-6 py-3 bg-[#00D4AA] text-[#0C0C0C] font-bold text-sm rounded-lg hover:brightness-110 transition">
            Explore Peptides
          </a>
          <a href="#evidence"
            className="px-6 py-3 text-white text-sm font-medium rounded-lg transition hover:bg-[#1a1a1a]"
            style={{ border: "1px solid #333" }}>
            See the Evidence
          </a>
        </div>

        {/* Metrics */}
        <div className="mt-14 grid grid-cols-3 max-w-[400px] mx-auto">
          {[
            { n: "7,000+", l: "Studies" },
            { n: "6", l: "Peptides" },
            { n: "83%", l: "Avg Score" },
          ].map((m) => (
            <div key={m.l} className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-white">{m.n}</div>
              <div className="text-[11px] text-[#555] uppercase tracking-wider mt-1">{m.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PeptideCard({ p, i }: { p: typeof peptides[0]; i: number }) {
  return (
    <div className="bg-[#161616] rounded-xl overflow-hidden hover:bg-[#1a1a1a] transition-colors group"
      style={{ border: "1px solid #222" }}>
      <div className="p-5 sm:p-6">
        {/* Top row */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#00D4AA] bg-[#00D4AA]/10 px-2.5 py-1 rounded">
                {p.tag}
              </span>
              <span className="text-[10px] font-medium uppercase tracking-wider text-[#555] bg-[#1e1e1e] px-2.5 py-1 rounded">
                {p.status}
              </span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white leading-tight">{p.name}</h3>
          </div>
          <div className="text-right ml-3 flex-shrink-0">
            <div className="text-2xl font-black text-white">{p.score}</div>
            <div className="text-[9px] text-[#555] uppercase tracking-widest">/100</div>
          </div>
        </div>

        {/* Score bar */}
        <div className="h-1 rounded-full bg-[#1e1e1e] mb-4">
          <div className="h-full rounded-full bg-[#00D4AA]" style={{ width: `${p.score}%` }} />
        </div>

        {/* Description */}
        <p className="text-sm text-[#999] leading-relaxed mb-4">
          {p.desc}
        </p>

        {/* Key benefit */}
        <div className="flex items-center gap-2 pt-3" style={{ borderTop: "1px solid #222" }}>
          <span className="text-[10px] text-[#555] uppercase tracking-wider">Key benefit</span>
          <span className="text-xs text-[#ccc] font-medium">{p.keyBenefit}</span>
        </div>
      </div>
    </div>
  );
}

function Evidence() {
  return (
    <section id="evidence" className="py-20 sm:py-28">
      <div className="max-w-[1200px] mx-auto px-5">
        {/* Header */}
        <div className="max-w-[600px] mb-14">
          <p className="text-[#00D4AA] text-xs font-bold uppercase tracking-[4px] mb-3">The Evidence</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Pros vs. cons — honestly.</h2>
          <p className="text-[#888] leading-relaxed">
            We don&apos;t pretend peptides are magic. Here&apos;s the research as it stands —
            and what actually matters.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {/* Pros */}
          <div className="bg-[#161616] rounded-xl p-6 sm:p-8" style={{ border: "1px solid #1e3a2f" }}>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-8 rounded-lg bg-emerald-500/15 flex items-center justify-center text-emerald-400 text-sm font-bold">+</span>
              <h3 className="text-base font-bold text-emerald-400">Supported by research</h3>
            </div>
            <div className="space-y-3.5">
              {pros.map((p) => (
                <div key={p} className="flex items-start gap-3">
                  <span className="text-emerald-500 text-xs mt-1 flex-shrink-0">●</span>
                  <span className="text-sm text-[#bbb] leading-relaxed">{p}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Cons */}
          <div className="bg-[#161616] rounded-xl p-6 sm:p-8" style={{ border: "1px solid #3a2f1e" }}>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-8 rounded-lg bg-amber-500/15 flex items-center justify-center text-amber-400 text-sm font-bold">–</span>
              <h3 className="text-base font-bold text-amber-400">Be aware of</h3>
            </div>
            <div className="space-y-3.5">
              {cons.map((c) => (
                <div key={c} className="flex items-start gap-3">
                  <span className="text-amber-500 text-xs mt-1 flex-shrink-0">●</span>
                  <span className="text-sm text-[#999] leading-relaxed">{c}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 rounded-lg bg-[#0C0C0C]" style={{ border: "1px solid #222" }}>
              <p className="text-xs text-[#00D4AA] leading-relaxed">
                <strong>Bottom line:</strong> 8 evidence-backed advantages vs 6 valid cautions —
                most about regulation and sourcing, not the molecules. Source smart. Dose smart.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Explainer() {
  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="grid lg:grid-cols-2 gap-0 rounded-xl overflow-hidden" style={{ border: "1px solid #222" }}>
          <div className="relative" style={{ minHeight: "350px" }}>
            <img src="/images/science.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
          </div>
          <div className="bg-[#161616] p-8 sm:p-12 flex flex-col justify-center">
            <p className="text-[#00D4AA] text-xs font-bold uppercase tracking-[4px] mb-4">How They Work</p>
            <h2 className="text-2xl sm:text-3xl font-bold mb-5 leading-tight">
              Peptides aren&apos;t magic.
              <br />They&apos;re precision.
            </h2>
            <p className="text-[#888] text-sm leading-relaxed mb-4">
              Steroids override your hormones. Peptides work with them. Short amino acid chains that signal your cells to
              do what they already know how to do — just more of it.
            </p>
            <p className="text-[#888] text-sm leading-relaxed">
              Recovery. Skin. Body composition. Longevity. Each peptide targets a specific biological pathway. No broad-spectrum
              disruption. No shutdown. Just amplification.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 sm:py-28">
      <div className="max-w-[700px] mx-auto px-5">
        <div className="text-center mb-12">
          <p className="text-[#00D4AA] text-xs font-bold uppercase tracking-[4px] mb-3">FAQ</p>
          <h2 className="text-3xl sm:text-4xl font-bold">Common questions.</h2>
        </div>

        <div className="space-y-2">
          {faqs.map((f, i) => (
            <div key={f.q} className="rounded-lg overflow-hidden" style={{ border: "1px solid #222", background: "#161616" }}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-[#1a1a1a] transition"
              >
                <span className="text-sm font-semibold text-white pr-4">{f.q}</span>
                <span className="text-[#00D4AA] text-lg flex-shrink-0 w-6 text-center">{open === i ? "−" : "+"}</span>
              </button>
              {open === i && (
                <div className="px-5 pb-4 text-sm text-[#888] leading-relaxed" style={{ borderTop: "1px solid #1e1e1e" }}>
                  <div className="pt-3">{f.a}</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="relative rounded-xl overflow-hidden">
          <img src="/images/lifestyle.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/70" />
          <div className="relative text-center py-16 sm:py-24 px-6">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Follow the <span className="text-[#00D4AA]">tide.</span>
            </h2>
            <p className="text-[#888] max-w-md mx-auto mb-8 text-sm sm:text-base">
              Peptide breakdowns, protocol insights, and research updates. No BS.
            </p>
            <a
              href="https://instagram.com/ibrahimdaherr"
              target="_blank"
              rel="noopener"
              className="inline-block px-8 py-3.5 bg-[#00D4AA] text-[#0C0C0C] font-bold text-sm rounded-lg hover:brightness-110 transition"
            >
              Follow @BobTides on Instagram →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-12 px-5" style={{ borderTop: "1px solid #1a1a1a" }}>
      <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm font-bold text-white">
          BOB<span className="text-[#00D4AA]">TIDES</span>
          <span className="text-[#333] font-normal ml-3 text-xs">Research-backed peptide education</span>
        </div>
        <div className="flex gap-6 text-xs text-[#555]">
          <a href="#peptides" className="hover:text-white transition">Peptides</a>
          <a href="#evidence" className="hover:text-white transition">Evidence</a>
          <a href="#faq" className="hover:text-white transition">FAQ</a>
          <a href="https://instagram.com/ibrahimdaherr" target="_blank" rel="noopener" className="hover:text-[#00D4AA] transition">Instagram</a>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto mt-8 pt-6" style={{ borderTop: "1px solid #141414" }}>
        <p className="text-[10px] text-[#333] text-center max-w-lg mx-auto leading-relaxed">
          Educational purposes only. Not medical advice. Consult a healthcare professional before starting any protocol.
          © 2026 BobTides.
        </p>
      </div>
    </footer>
  );
}

/* ═══════════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════════ */

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />

      {/* Peptides */}
      <section id="peptides" className="py-20 sm:py-28">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-10 gap-4">
            <div>
              <p className="text-[#00D4AA] text-xs font-bold uppercase tracking-[4px] mb-3">The Peptides</p>
              <h2 className="text-3xl sm:text-4xl font-bold">Know what you&apos;re taking.</h2>
            </div>
            <p className="text-[#555] text-sm max-w-[300px]">
              Each scored on research depth, clinical evidence, and safety profile.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {peptides.map((p, i) => (
              <PeptideCard key={p.name} p={p} i={i} />
            ))}
          </div>
        </div>
      </section>

      <Evidence />
      <Explainer />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
