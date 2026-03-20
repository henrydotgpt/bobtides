"use client";

import { useState } from "react";

/* ─── DATA ─── */
const peptides = [
  {
    name: "BPC-157",
    aka: "Body Protection Compound",
    category: "Recovery & Healing",
    benefits: [
      "Accelerates tendon, ligament, and muscle healing",
      "Protects and heals the gut lining",
      "Reduces inflammation systemically",
      "Promotes angiogenesis (new blood vessel formation)",
      "Shown to counteract NSAID-induced gut damage",
    ],
    considerations: [
      "Most studies are animal-based (rodent models)",
      "Not FDA-approved for therapeutic use",
      "Long-term human safety data is limited",
    ],
    verdict: "One of the most promising recovery peptides available. Animal data is overwhelmingly positive across dozens of tissue types. The gap is human clinical trials — but thousands of practitioners and athletes report consistent results.",
    researchScore: 85,
  },
  {
    name: "GHK-Cu",
    aka: "Copper Peptide",
    category: "Skin & Anti-Aging",
    benefits: [
      "Stimulates collagen and elastin production",
      "Reduces wrinkles, fine lines, and age spots",
      "Promotes wound healing and skin repair",
      "Acts as a potent antioxidant",
      "Improves skin thickness, elasticity, and moisture",
    ],
    considerations: [
      "Topical forms are well-studied; injectable less so",
      "Effects are gradual (4-12 weeks for visible results)",
      "Quality varies significantly between suppliers",
    ],
    verdict: "The gold standard for skin rejuvenation peptides. Unlike most anti-aging claims, GHK-Cu has peer-reviewed research backing its collagen-boosting effects. Topical application is well-established; injectable protocols are emerging.",
    researchScore: 90,
  },
  {
    name: "TB-500",
    aka: "Thymosin Beta-4",
    category: "Recovery & Performance",
    benefits: [
      "Promotes tissue repair and regeneration",
      "Reduces inflammation and scar tissue",
      "Improves flexibility and range of motion",
      "Supports cardiac tissue repair",
      "Enhances hair regrowth in some studies",
    ],
    considerations: [
      "Banned in competitive sports (WADA prohibited list)",
      "Primarily studied in animal models",
      "Some concern about promoting growth in existing tumors",
    ],
    verdict: "A powerful recovery tool with strong anecdotal and preclinical support. Often stacked with BPC-157 for synergistic healing. The tumor concern is theoretical — no causal evidence in healthy individuals — but worth acknowledging.",
    researchScore: 75,
  },
  {
    name: "CJC-1295 / Ipamorelin",
    aka: "Growth Hormone Secretagogue Stack",
    category: "Performance & Longevity",
    benefits: [
      "Stimulates natural growth hormone release",
      "Improves body composition (less fat, more lean mass)",
      "Enhances deep sleep quality",
      "Supports bone density and joint health",
      "Anti-aging effects through HGH pathway",
    ],
    considerations: [
      "Can cause water retention and tingling initially",
      "Requires consistent dosing protocol (typically before bed)",
      "Not a replacement for proper training and nutrition",
    ],
    verdict: "The most popular GH-boosting stack for good reason. Unlike synthetic HGH, this works WITH your body's natural pulsatile release pattern. The sleep improvements alone are worth investigating.",
    researchScore: 80,
  },
  {
    name: "Semaglutide",
    aka: "GLP-1 Receptor Agonist",
    category: "Metabolic & Weight Management",
    benefits: [
      "Clinically proven 15-20% body weight reduction",
      "FDA-approved (Wegovy/Ozempic) with extensive trial data",
      "Improves insulin sensitivity and blood sugar control",
      "Reduces cardiovascular risk markers",
      "Appetite regulation through gut-brain signaling",
    ],
    considerations: [
      "Common GI side effects (nausea, especially early on)",
      "Potential muscle mass loss without resistance training",
      "Rebound weight gain if discontinued without lifestyle changes",
    ],
    verdict: "The most clinically validated peptide in existence. FDA-approved with massive Phase 3 trial data. Not just a weight loss tool — the cardiovascular and metabolic benefits are real and significant.",
    researchScore: 98,
  },
  {
    name: "AOD-9604",
    aka: "Anti-Obesity Drug Fragment",
    category: "Fat Loss",
    benefits: [
      "Stimulates fat breakdown (lipolysis) without affecting blood sugar",
      "Derived from HGH fragment — targets fat metabolism specifically",
      "No impact on IGF-1 levels (safer HGH alternative for fat loss)",
      "Supports cartilage regeneration in some studies",
      "TGA-approved in Australia for certain applications",
    ],
    considerations: [
      "Less clinical data than semaglutide for weight management",
      "Results can be modest without proper diet and training",
      "Not FDA-approved in the US",
    ],
    verdict: "A targeted fat-loss peptide that avoids the systemic effects of full HGH therapy. The Australian TGA approval gives it more regulatory legitimacy than most peptides. Best results when stacked with proper nutrition.",
    researchScore: 70,
  },
];

const faqs = [
  {
    q: "What exactly are peptides?",
    a: "Peptides are short chains of amino acids (typically 2-50) that act as signaling molecules in your body. Think of them as precise instructions that tell your cells what to do — heal faster, produce more collagen, release growth hormone, or burn fat. Your body already makes thousands of peptides naturally. Supplemental peptides amplify specific pathways.",
  },
  {
    q: "Are peptides safe?",
    a: "Safety depends on the specific peptide, dosage, source quality, and your individual health profile. FDA-approved peptides like semaglutide have extensive safety data. Research peptides like BPC-157 have strong animal safety profiles but limited human clinical trials. The biggest risk isn't the peptides themselves — it's buying from unverified sources with questionable purity. Always source from reputable suppliers with third-party testing.",
  },
  {
    q: "Are peptides legal?",
    a: "Most peptides are legal to purchase for personal use or research purposes. Some (like semaglutide) require a prescription. Others (like TB-500) are banned in competitive sports by WADA. Regulations vary by country. In the UAE, GCC, US, and EU, peptides exist in a gray zone — not explicitly banned for personal use but not FDA-approved as supplements either.",
  },
  {
    q: "How do peptides differ from steroids?",
    a: "Fundamentally different mechanisms. Steroids are synthetic hormones that override your body's natural production (and often suppress it). Peptides are signaling molecules that work WITH your body's existing systems — they amplify natural processes rather than replacing them. The side effect profile, recovery impact, and long-term risk are dramatically different.",
  },
  {
    q: "Where should I start?",
    a: "For most people: start with the goal, not the peptide. Want better skin? GHK-Cu topical. Recovering from injury? BPC-157. Sleep and body composition? CJC-1295/Ipamorelin. Weight management? Talk to a doctor about semaglutide. Always start at the lowest effective dose, source from tested suppliers, and ideally work with a practitioner who understands peptide protocols.",
  },
];

/* ─── COMPONENTS ─── */

function Nav() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0A0A0F]/80 backdrop-blur-xl border-b border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="text-xl font-bold">
          <span className="text-white">Bob</span>
          <span className="text-accent">Tides</span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
          <a href="#peptides" className="hover:text-white transition">Peptides</a>
          <a href="#science" className="hover:text-white transition">The Science</a>
          <a href="#faq" className="hover:text-white transition">FAQ</a>
          <a
            href="https://instagram.com/bobtides"
            target="_blank"
            className="px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent hover:bg-accent/20 transition"
          >
            Follow @bobtides
          </a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-16 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-8">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          The Peptide Wave Is Here
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] mb-6">
          Ride the{" "}
          <span className="gradient-text">tide</span>
          <br />
          of optimal performance
        </h1>

        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Research-backed peptide education. No bro-science. No hype.
          Just the data — and what it actually means for your body, your recovery, and your longevity.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#peptides"
            className="px-8 py-4 bg-accent text-black font-bold rounded-full hover:shadow-[0_0_30px_rgba(0,212,170,0.3)] transition-all duration-300"
          >
            Explore Peptides ↓
          </a>
          <a
            href="#science"
            className="px-8 py-4 border border-white/10 text-white font-semibold rounded-full hover:border-accent/30 hover:bg-accent/5 transition-all duration-300"
          >
            The Science
          </a>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-3 gap-8 max-w-lg mx-auto">
          {[
            { value: "7,000+", label: "Studies Published" },
            { value: "6", label: "Key Peptides" },
            { value: "∞", label: "Potential" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold gradient-text">{stat.value}</div>
              <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Wave decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0A0F] to-transparent" />
    </section>
  );
}

function PeptideCard({ peptide, index }: { peptide: typeof peptides[0]; index: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="relative rounded-2xl bg-[#12121A] border border-white/[0.06] hover:border-accent/20 transition-all duration-500 overflow-hidden group"
    >
      {/* Research score bar */}
      <div className="h-1 bg-white/[0.03]">
        <div
          className="h-full bg-gradient-to-r from-accent/60 to-accent transition-all duration-1000"
          style={{ width: `${peptide.researchScore}%` }}
        />
      </div>

      <div className="p-6 md:p-8">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <span className="text-xs font-medium text-accent/70 uppercase tracking-wider">
              {peptide.category}
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-white mt-1">{peptide.name}</h3>
            <p className="text-sm text-gray-500 mt-1">{peptide.aka}</p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-black text-accent">{peptide.researchScore}</div>
            <div className="text-[10px] text-gray-500 uppercase tracking-wider">Research Score</div>
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-4">
          <h4 className="text-xs font-bold text-green-400/80 uppercase tracking-wider mb-3">✓ Benefits</h4>
          <ul className="space-y-2">
            {peptide.benefits.map((b) => (
              <li key={b} className="flex items-start gap-2 text-sm text-gray-300">
                <span className="text-green-400 mt-0.5 flex-shrink-0">✓</span>
                {b}
              </li>
            ))}
          </ul>
        </div>

        {/* Considerations */}
        <div className="mb-4">
          <h4 className="text-xs font-bold text-yellow-400/80 uppercase tracking-wider mb-3">⚠ Considerations</h4>
          <ul className="space-y-2">
            {peptide.considerations.map((c) => (
              <li key={c} className="flex items-start gap-2 text-sm text-gray-400">
                <span className="text-yellow-400 mt-0.5 flex-shrink-0">⚠</span>
                {c}
              </li>
            ))}
          </ul>
        </div>

        {/* Verdict */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="w-full text-left mt-4 pt-4 border-t border-white/[0.06]"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-accent uppercase tracking-wider">The Verdict</span>
            <span className="text-accent text-sm">{expanded ? "−" : "+"}</span>
          </div>
          {expanded && (
            <p className="mt-3 text-sm text-gray-300 leading-relaxed">{peptide.verdict}</p>
          )}
        </button>
      </div>

      {/* Bottom glow */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/0 to-transparent group-hover:via-accent/30 transition-all duration-700" />
    </div>
  );
}

function ScienceSection() {
  return (
    <section id="science" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-accent uppercase tracking-[3px]">The Science</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Pros vs. cons —{" "}
            <span className="gradient-text">honestly.</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
            We don&apos;t pretend peptides are magic. We present the research as it stands — and let the data speak.
            Spoiler: for most peptides, the data is speaking pretty loudly.
          </p>
        </div>

        {/* Pro vs Con comparison */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Pros */}
          <div className="rounded-2xl bg-green-500/5 border border-green-500/10 p-8">
            <h3 className="text-lg font-bold text-green-400 mb-6">What the research supports</h3>
            <ul className="space-y-4">
              {[
                "Peptides work WITH your body's natural signaling — not against it",
                "Multiple peptides have decades of preclinical data supporting efficacy",
                "Semaglutide (GLP-1) is FDA-approved with massive Phase 3 trial evidence",
                "GHK-Cu has peer-reviewed collagen and wound-healing data in humans",
                "Side effect profiles are generally mild compared to hormones or steroids",
                "Targeted mechanisms mean less systemic disruption than broad-spectrum drugs",
                "Growing physician adoption is accelerating legitimate clinical use",
                "The anti-aging and recovery applications align with the body's own repair pathways",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-gray-300">
                  <span className="text-green-400 font-bold mt-0.5">+</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Cons */}
          <div className="rounded-2xl bg-yellow-500/5 border border-yellow-500/10 p-8">
            <h3 className="text-lg font-bold text-yellow-400 mb-6">What to be aware of</h3>
            <ul className="space-y-4">
              {[
                "Many peptides lack large-scale human clinical trials",
                "The supplement industry has quality control issues — source matters",
                "Not FDA-regulated as supplements (gray zone in most countries)",
                "Some peptides are banned in competitive sports (WADA)",
                "Individual responses vary — what works for one person may not for another",
                "Long-term safety data (10+ years) is limited for newer peptides",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-gray-400">
                  <span className="text-yellow-400 font-bold mt-0.5">–</span>
                  {item}
                </li>
              ))}
            </ul>

            {/* The verdict callout */}
            <div className="mt-8 p-4 rounded-xl bg-accent/5 border border-accent/10">
              <p className="text-sm text-accent font-medium">
                The bottom line: 8 evidence-backed advantages vs 6 valid cautions — most of which are about
                regulation and sourcing, not the science itself. The peptides aren&apos;t the risk. The
                unregulated market is.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-accent uppercase tracking-[3px]">FAQ</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Questions?{" "}
            <span className="gradient-text">Answered.</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <details
              key={faq.q}
              className="group rounded-2xl bg-[#12121A] border border-white/[0.06] hover:border-accent/20 transition-all duration-300 overflow-hidden"
              open={openIndex === i}
              onClick={(e) => {
                e.preventDefault();
                setOpenIndex(openIndex === i ? null : i);
              }}
            >
              <summary className="flex items-center justify-between cursor-pointer px-6 py-5 text-white font-semibold list-none">
                <span>{faq.q}</span>
                <span className="text-accent text-xl ml-4 flex-shrink-0">
                  {openIndex === i ? "−" : "+"}
                </span>
              </summary>
              {openIndex === i && (
                <div className="px-6 pb-5 text-gray-400 leading-relaxed text-sm border-t border-white/[0.04] pt-4">
                  {faq.a}
                </div>
              )}
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <a href="#" className="text-2xl font-bold">
              <span className="text-white">Bob</span>
              <span className="text-accent">Tides</span>
            </a>
            <p className="text-gray-500 text-sm mt-2">Research-backed peptide education.</p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://instagram.com/bobtides"
              target="_blank"
              className="text-gray-400 hover:text-accent transition"
            >
              Instagram
            </a>
            <a href="#peptides" className="text-gray-400 hover:text-white transition">
              Peptides
            </a>
            <a href="#science" className="text-gray-400 hover:text-white transition">
              Science
            </a>
            <a href="#faq" className="text-gray-400 hover:text-white transition">
              FAQ
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/[0.04] text-center">
          <p className="text-xs text-gray-600">
            Disclaimer: This site is for educational purposes only. Nothing on BobTides constitutes medical advice.
            Always consult a qualified healthcare professional before starting any peptide protocol.
            Individual results may vary.
          </p>
          <p className="text-xs text-gray-700 mt-3">© 2026 BobTides. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

/* ─── MAIN PAGE ─── */
export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />

      {/* Peptides Grid */}
      <section id="peptides" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-bold text-accent uppercase tracking-[3px]">The Peptides</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Know what you&apos;re{" "}
              <span className="gradient-text">putting in your body.</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Each peptide profiled with benefits, considerations, research scores, and our honest verdict.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {peptides.map((p, i) => (
              <PeptideCard key={p.name} peptide={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      <ScienceSection />
      <FAQSection />

      {/* CTA */}
      <section className="py-32 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to ride the{" "}
            <span className="gradient-text">tide?</span>
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
            Follow BobTides for daily peptide education, protocol breakdowns, and the latest research — no BS.
          </p>
          <a
            href="https://instagram.com/bobtides"
            target="_blank"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-black font-bold rounded-full hover:shadow-[0_0_30px_rgba(0,212,170,0.3)] transition-all duration-300 text-lg"
          >
            Follow @bobtides on Instagram →
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
