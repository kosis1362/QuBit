import React, { useState, useEffect } from 'react';
import { ArrowRight, ShieldCheck, Cloud, TrendingUp, Atom, Check } from 'lucide-react';

export default function SolutionsSection({ onContactClick }) {
  const [activeTab, setActiveTab] = useState(0);
  const [solutions, setSolutions] = useState([]);

  const defaultSolutions = [
    {
      id: "quantum-cloud",
      category: "CLOUD MODERNIZATION",
      title: "Hybrid Quantum-Classical Infrastructure",
      description: "Co-locate fault-tolerant quantum coprocessors directly adjacent to enterprise AWS, Azure, and Google Cloud clusters. Run classical preprocessing and quantum acceleration in single-digit microsecond pipelines.",
      highlights: [
        "Dynamic classical-to-quantum offloading",
        "Sub-millisecond API orchestration",
        "Zero-cold-start cryostat access pooling"
      ],
      metric: "99.999% Service Uptime",
      badge: "Enterprise Core",
      icon: Cloud
    },
    {
      id: "qkd-cryptography",
      category: "SECURITY & RESILIENCY",
      title: "Post-Quantum Cryptography & QKD",
      description: "Harden critical banking, healthcare, and defense infrastructure against quantum decryption. Deploy NIST FIPS-approved module lattices and Quantum Key Distribution (QKD) fiber nodes.",
      highlights: [
        "NIST-compliant lattice encapsulation (ML-KEM / ML-DSA)",
        "End-to-end quantum entanglement key distribution",
        "Automated cryptographic agility certificate rotations"
      ],
      metric: "100% Quantum-Immune",
      badge: "Mission Critical",
      icon: ShieldCheck
    },
    {
      id: "financial-arbitrage",
      category: "ALGORITHMIC FINANCE",
      title: "Quantum Monte Carlo Risk Modeling",
      description: "Execute complex multi-asset derivative pricing, non-linear portfolio optimization, and tail-risk calculations with quadratic speedups over traditional GPU compute grids.",
      highlights: [
        "Quadratic speedup in Value-at-Risk (VaR) calculations",
        "Combinatorial liquidity and collateral routing",
        "Real-time stress testing under extreme volatility"
      ],
      metric: "120x Quadratic Acceleration",
      badge: "Capital Markets",
      icon: TrendingUp
    },
    {
      id: "materials-chemistry",
      category: "MOLECULAR SIMULATION",
      title: "VQE Molecular Catalyst Synthesis",
      description: "Simulate strongly-correlated electron configurations, transition metal complexes, and battery electrolyte interfaces with exact variational ground-state solvers.",
      highlights: [
        "Exact Hamiltonian mapping with Jordan-Wigner transformations",
        "Femtosecond ground-state energy prediction",
        "Accelerated catalyst discovery for sustainable energy"
      ],
      metric: "Sub-Chemical Accuracy (1 kcal/mol)",
      badge: "Life Sciences & Materials",
      icon: Atom
    }
  ];

  useEffect(() => {
    fetch('/api/solutions')
      .then(res => res.ok ? res.json() : null)
      .then(data => {
        if (data && data.length) {
          // Merge icons and highlights into API response
          const merged = data.map((item, i) => ({
            ...defaultSolutions[i % defaultSolutions.length],
            ...item
          }));
          setSolutions(merged);
        } else {
          setSolutions(defaultSolutions);
        }
      })
      .catch(() => setSolutions(defaultSolutions));
  }, []);

  const activeSolution = solutions[activeTab] || defaultSolutions[0];
  const IconComponent = activeSolution.icon || Cloud;

  return (
    <section id="how-we-help" className="py-20 md:py-32 bg-[#FBF9F5] border-t border-black/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[#FF462D] font-mono text-xs font-semibold tracking-eyebrow uppercase">
              // ENTERPRISE SOLUTIONS & CONSULT
            </span>
            <div className="h-[1px] w-12 bg-[#FF462D]/40" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#121212] mb-5">
            Architected to solve humanity’s hardest computational barriers.
          </h2>
          <p className="text-base sm:text-lg text-[#555555] leading-relaxed">
            From financial risk modeling to post-quantum cryptographic resilience, QuBit's consulting practice bridges quantum breakthroughs to live corporate systems.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar border-b border-black/[0.08]">
          {(solutions.length ? solutions : defaultSolutions).map((sol, index) => (
            <button
              key={sol.id}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap cursor-pointer ${
                activeTab === index
                  ? 'bg-[#FF462D] text-white shadow-sm'
                  : 'bg-[#F4F0E8] text-[#555555] hover:bg-[#ECE7DD] hover:text-[#121212]'
              }`}
            >
              {sol.category}
            </button>
          ))}
        </div>

        {/* Active Solution Showcase Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch bg-white rounded-3xl p-8 sm:p-12 border border-black/[0.08] shadow-kyndryl">
          
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full bg-[#FF462D]/10 text-[#FF462D] text-xs font-mono font-semibold uppercase tracking-wider">
                  {activeSolution.badge}
                </span>
                <span className="text-xs font-mono text-[#888888] uppercase">
                  {activeSolution.category}
                </span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-bold text-[#121212] tracking-tight mb-4">
                {activeSolution.title}
              </h3>

              <p className="text-base sm:text-lg text-[#555555] leading-relaxed mb-8">
                {activeSolution.description}
              </p>

              {/* Highlights */}
              <div className="space-y-3 mb-8">
                {activeSolution.highlights?.map((hl, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-sm font-medium text-[#333333]">{hl}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-black/[0.06] flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono uppercase text-[#737373]">
                  Benchmark:
                </span>
                <span className="text-sm font-bold font-mono text-[#FF462D]">
                  {activeSolution.metric}
                </span>
              </div>

              <button
                onClick={onContactClick}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#121212] text-white text-sm font-medium transition hover:bg-[#FF462D] cursor-pointer group"
              >
                <span>Engage Consult Team</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>

          </div>

          <div className="lg:col-span-5 bg-[#FAF7F2] rounded-2xl p-8 border border-black/[0.06] flex flex-col justify-between">
            <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-[#FF462D] mb-6 border border-black/5">
              <IconComponent className="w-7 h-7" />
            </div>

            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-white border border-black/5">
                <span className="text-xs uppercase font-mono text-[#777777] block mb-1">
                  Compliance & Standards
                </span>
                <span className="text-sm font-semibold text-[#121212]">
                  NIST FIPS 203/204/205 & SOC-2 Type II Certified
                </span>
              </div>

              <div className="p-4 rounded-xl bg-white border border-black/5">
                <span className="text-xs uppercase font-mono text-[#777777] block mb-1">
                  Deployment Model
                </span>
                <span className="text-sm font-semibold text-[#121212]">
                  Air-Gapped Sovereign Cloud or Managed Dedicated QPU
                </span>
              </div>

              <div className="p-4 rounded-xl bg-white border border-black/5">
                <span className="text-xs uppercase font-mono text-[#777777] block mb-1">
                  API Response Latency
                </span>
                <span className="text-sm font-semibold text-[#FF462D] font-mono">
                  &lt; 0.8 ms over Dedicated Fiber
                </span>
              </div>
            </div>

            <p className="text-xs text-[#888888] font-mono mt-6">
              VERIFIED ARCHITECTURE // QUBIT CONSULTING GROUP
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

