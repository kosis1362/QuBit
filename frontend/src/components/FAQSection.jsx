import React, { useState } from 'react';
import { Plus, Minus, ArrowRight, HelpCircle } from 'lucide-react';

export default function FAQSection({ onContactClick }) {
  const [openIndex, setOpenIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Architecture & Hybrid Cloud', 'Post-Quantum Security', 'Hardware & Cryogenics', 'Enterprise Adoption'];

  const faqs = [
    {
      category: 'Architecture & Hybrid Cloud',
      question: 'How does QuBit integrate with our existing AWS, Azure, or private cloud workloads?',
      answer: 'QuBit provides sub-millisecond gRPC and REST APIs over dedicated low-latency fiber interconnects. Our hybrid quantum runtime automatically compiles circuits, dispatches quantum coprocessor jobs, and returns classical state vector solutions into your existing Kubernetes or cloud orchestrators without architectural refactoring.'
    },
    {
      category: 'Post-Quantum Security',
      question: 'What is "Harvest Now, Decrypt Later" (HNDL), and how does QuBit protect against it?',
      answer: 'Adversaries are currently capturing encrypted enterprise and government transmissions to decrypt once fault-tolerant quantum computers emerge. QuBit implements NIST FIPS-approved module lattice cryptography (ML-KEM and ML-DSA) paired with fiber-based Quantum Key Distribution (QKD), providing mathematically proven immunity against both classical and quantum decryption vectors.'
    },
    {
      category: 'Hardware & Cryogenics',
      question: 'How do QuBit dilution refrigerators maintain 14.2 mK operating temperatures?',
      answer: 'Our superconducting transmons operate inside closed-cycle, dry helium-3/helium-4 dilution refrigerators that cool the quantum processing units to 14.2 millikelvin (-273.136 °C). Multi-stage magnetic and radiation shielding eliminates thermal photons and environmental noise, sustaining record Ramsey T2 coherence times.'
    },
    {
      category: 'Enterprise Adoption',
      question: 'Can QuBit deploy dedicated quantum systems on-premise for sovereign or air-gapped environments?',
      answer: 'Yes. For sovereign national agencies and defense organizations with strict data residency mandates, QuBit delivers turnkey, containerized cryogenic QPU installations with zero outbound external telemetry, managed under complete sovereign customer governance.'
    },
    {
      category: 'Architecture & Hybrid Cloud',
      question: 'Which quantum programming frameworks and SDKs are natively supported?',
      answer: 'QuBit supports Qiskit, Cirq, Pennylane, OpenQASM 3.0, and our high-performance Python SDK. Circuits are transpiled down to microwave pulse schedules with automatic dynamical decoupling and zero-noise extrapolation.'
    },
    {
      category: 'Enterprise Adoption',
      question: 'What is the onboarding timeline for enterprise consulting and discovery engagements?',
      answer: 'Our advisory team initiates engagements with a 2-week Technical Discovery Session to profile your computational bottlenecks. Proof-of-concept hybrid pipelines typically deploy to our live QPU within 30 to 45 business days with guaranteed SLA uptime.'
    }
  ];

  const filteredFaqs = activeCategory === 'All' 
    ? faqs 
    : faqs.filter(f => f.category === activeCategory);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-white text-[#121212] border-t border-black/[0.08]">
      <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[#FF462D] font-mono text-xs font-semibold tracking-eyebrow uppercase">
                // KNOWLEDGE BASE & GOVERNANCE
              </span>
              <div className="h-[1px] w-12 bg-[#FF462D]/40" />
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-[#121212] mb-4">
              Frequently asked questions
            </h2>
            <p className="text-base sm:text-lg text-[#555555] leading-relaxed max-w-2xl font-normal">
              Essential technical answers on sovereign quantum deployment, hybrid cloud orchestrations, and post-quantum cryptographic migration.
            </p>
          </div>

          <div className="lg:col-span-4 flex items-end justify-start lg:justify-end">
            <button
              onClick={onContactClick}
              className="inline-flex items-center gap-2 text-sm font-medium text-[#121212] hover:text-[#FF462D] transition py-2 group"
            >
              <span>Have a specific architectural inquiry? Talk to an expert</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setOpenIndex(0);
              }}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 whitespace-nowrap cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#121212] text-white shadow-xs'
                  : 'bg-[#F4F0E8] text-[#555555] hover:bg-[#ECE7DD] hover:text-[#121212]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ Accordion List */}
        <div className="divide-y divide-black/[0.08] border-y border-black/[0.08]">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="py-6 sm:py-8 transition-colors group">
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-start justify-between text-left gap-6 cursor-pointer select-none"
                >
                  <span className="text-lg sm:text-xl font-normal text-[#121212] group-hover:text-[#FF462D] transition-colors leading-snug">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full border border-black/10 flex items-center justify-center shrink-0 transition-transform duration-200 ${isOpen ? 'bg-[#FF462D] text-white border-transparent rotate-180' : 'bg-white text-[#121212] group-hover:border-black/30'}`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="mt-4 pr-12 text-[15px] sm:text-base text-[#555555] leading-relaxed font-normal animate-fadeIn">
                    <p>{faq.answer}</p>
                    <div className="mt-3 flex items-center gap-2 text-xs font-mono text-[#888888]">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      <span>Category: {faq.category}</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
