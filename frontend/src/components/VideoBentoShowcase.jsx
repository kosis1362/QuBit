import React, { useState } from 'react';
import { ArrowRight, Sparkles, Layers, Sliders, Shield } from 'lucide-react';

export default function VideoBentoShowcase() {
  const [activeCard, setActiveCard] = useState(null);

  const showcaseItems = [
    {
      id: "core",
      videoSrc: "/videos/qubit_core.mp4",
      eyebrow: "CORE 01 // CAVITY COHERENCE",
      title: "Resonant Superconducting Core",
      description: "Superconducting microwave resonators operating at 14.2 mK to achieve world-record coherence times and low dielectric loss.",
      badge: "Superconducting QPU",
      icon: Sparkles,
      colSpan: "lg:col-span-8",
      aspectRatio: "aspect-[16/9]",
    },
    {
      id: "interface",
      videoSrc: "/videos/qubit_interface.mp4",
      eyebrow: "WORKSPACE 02 // HYBRID ORCHESTRATION",
      title: "Precision Interface & Tooling",
      description: "Connecting enterprise workflows, IDEs, and creative compute stacks directly into quantum compiler pipelines.",
      badge: "Classical-Quantum Bridge",
      icon: Sliders,
      colSpan: "lg:col-span-4",
      aspectRatio: "aspect-[16/9]",
    },
    {
      id: "matrix",
      videoSrc: "/videos/qubit_matrix.mp4",
      eyebrow: "TOPOLOGY 03 // LATTICE GEOMETRY",
      title: "Multi-Qubit Entanglement Lattice",
      description: "Hexagonal planar connectivity designed for surface-code syndromic extraction and topological phase stability.",
      badge: "Heavy-Hex Topology",
      icon: Layers,
      colSpan: "lg:col-span-6",
      aspectRatio: "aspect-[16/9]",
    },
    {
      id: "quantum",
      videoSrc: "/videos/qubit_quantum.mp4",
      eyebrow: "DYNAMICS 04 // ORBITAL SYNTHESIS",
      title: "Topological Quantum State Tomography",
      description: "Continuous real-time parity checks neutralizing phase-flip and bit-flip errors before state decoherence occurs.",
      badge: "Real-time Parity Correction",
      icon: Shield,
      colSpan: "lg:col-span-6",
      aspectRatio: "aspect-[16/9]",
    }
  ];

  return (
    <section id="our-expertise" className="py-20 md:py-32 bg-[#FBF9F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[#FF462D] font-mono text-xs font-semibold tracking-eyebrow uppercase">
              // ARCHITECTURAL SHOWCASE
            </span>
            <div className="h-[1px] w-12 bg-[#FF462D]/40" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#121212] mb-5">
            Engineered for physical precision. Built for sovereign scale.
          </h2>
          <p className="text-base sm:text-lg text-[#555555] leading-relaxed">
            Explore the core technological pillars powering QuBit's next-generation quantum platform—from microwave resonant cavities and hardware control interfaces to topological lattice geometry.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {showcaseItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                onMouseEnter={() => setActiveCard(item.id)}
                onMouseLeave={() => setActiveCard(null)}
                className={`${item.colSpan} group rounded-2xl sm:rounded-3xl bg-white border border-black/[0.08] p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-kyndryl-hover relative overflow-hidden`}
              >
                {/* Video Container (16:9 widescreen processed video) */}
                <div className={`w-full ${item.aspectRatio} rounded-xl sm:rounded-2xl overflow-hidden bg-black mb-6 relative border border-black/10`}>
                  <video
                    src={item.videoSrc}
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                  {/* Subtle glass badge */}
                  <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[11px] font-mono text-white/90">
                    {item.badge}
                  </div>
                </div>

                {/* Content Details */}
                <div>
                  <div className="flex items-center gap-2 mb-2 text-xs font-mono font-semibold text-[#FF462D] tracking-wider uppercase">
                    <IconComponent className="w-3.5 h-3.5" />
                    <span>{item.eyebrow}</span>
                  </div>

                  <h3 className="text-2xl font-bold text-[#121212] tracking-tight mb-3 transition-colors duration-200 group-hover:text-[#FF462D]">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#555555] leading-relaxed mb-6 font-normal">
                    {item.description}
                  </p>
                </div>

                {/* Footer link with directional arrow animation */}
                <div className="pt-4 border-t border-black/[0.06] flex items-center justify-between text-sm font-medium text-[#121212]">
                  <span className="group-hover:text-[#FF462D] transition-colors">
                    View Technical Specification
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#F4F0E8] flex items-center justify-center transition-all duration-200 group-hover:bg-[#FF462D] group-hover:text-white">
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
