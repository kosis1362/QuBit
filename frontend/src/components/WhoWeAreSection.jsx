import React, { useState } from 'react';
import { Play, X } from 'lucide-react';

export default function WhoWeAreSection() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  const whoWeAreData = {
    eyebrow: "WHO WE ARE",
    title: "Building the software, AI, and insights that drive your business forward",
    description: "We don’t just write code; we solve real-world business challenges. Whether you need custom software to streamline operations, AI automation to eliminate repetitive manual work, or business analytics to make sense of your data, QuBit builds the practical technology that actually works. We partner with you to turn your toughest operational bottlenecks into your biggest competitive advantages.",
    links: [


    ],
    cardTitle: "We are QuBit",
    hoverImage: "/images/qubit_cyber_face.jpg",
    hoverSubtitle: "THE ARCHITECTURE OF PROGRESS",
    videoSrc: "/videos/qubit_core.mp4"
  };

  return (
    <section id="who-we-are" className="w-full bg-white text-[#121212] pt-8 pb-16 lg:pt-10 lg:pb-24 overflow-hidden border-b border-black/[0.06]">
      {/* FULL-WIDTH HORIZONTAL CONTAINER */}
      <div className="w-full px-6 sm:px-12 lg:px-20 xl:px-28">

        {/* Two-Column Section Layout spanning full width */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Narrative & Links */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div>
              {/* Eyebrow with Terracotta Red Accent Bar (Matching Kyndryl 1:1) */}
              <div className="mb-4">
                <span className="text-[11px] font-semibold tracking-wider uppercase text-[#737373] font-mono">
                  {whoWeAreData.eyebrow}
                </span>
                <div className="h-[2px] w-6 bg-[#FF462D] mt-1" />
              </div>

              {/* Main Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-medium tracking-tight text-[#121212] leading-[1.14] mb-6">
                {whoWeAreData.title}
              </h2>

              {/* Body Text */}
              <p className="text-[15px] sm:text-base text-[#555555] leading-relaxed mb-12 max-w-xl font-normal">
                {whoWeAreData.description}
              </p>
            </div>

            {/* Bottom Links Row */}
            <div className="pt-6 border-t border-black/[0.08] flex flex-wrap items-center gap-4 text-xs sm:text-sm font-medium text-[#121212]">
              {whoWeAreData.links.map((link, idx) => (
                <React.Fragment key={idx}>
                  <a
                    href={link.href}
                    className="hover:text-[#FF462D] transition-colors py-1 flex items-center gap-1 group"
                  >
                    <span>{link.label}</span>
                  </a>
                  {idx < whoWeAreData.links.length - 1 && (
                    <span className="text-black/25">|</span>
                  )}
                </React.Fragment>
              ))}
            </div>

          </div>

          {/* Right Column: Full-Width Card with Hover Image Reveal */}
          <div className="lg:col-span-7">
            <div
              className="group relative w-full aspect-[16/10] sm:aspect-[16/9] lg:aspect-[16/10] rounded-none sm:rounded-sm overflow-hidden shadow-sm cursor-pointer select-none"
              onClick={() => setVideoModalOpen(true)}
            >

              {/* Layer 1: Solid Terracotta / Red-Orange Base Background */}
              <div className="absolute inset-0 bg-[#FF462D] transition-all duration-500 ease-in-out group-hover:scale-[1.02]" />

              {/* Layer 2: The Cybernetic Astronaut Image (Reveals smoothly on Hover) */}
              <img
                src={whoWeAreData.hoverImage}
                alt="Cybernetic Quantum Interface"
                className="absolute inset-0 w-full h-full object-cover object-top opacity-0 group-hover:opacity-100 scale-100 group-hover:scale-105 transition-all duration-700 ease-out"
              />

              {/* Layer 3: High-Tech Cybernetic Overlay Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Layer 4: Subtle HUD Circuit Scanlines on Hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none"
                style={{
                  backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(255, 70, 45, 0.4) 0%, transparent 80%)'
                }}
              />

              {/* Centered Large Typography ("We are Qubit") */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10 pointer-events-none">
                <span className="text-xs sm:text-sm font-mono tracking-widest uppercase text-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-y-2 group-hover:translate-y-0 mb-2">
                  {whoWeAreData.hoverSubtitle}
                </span>

                <h3 className="text-4xl sm:text-6xl lg:text-7xl font-normal text-white tracking-tight drop-shadow-md transition-all duration-500 group-hover:scale-105 group-hover:text-white">
                  {whoWeAreData.cardTitle}
                </h3>
              </div>

              {/* Bottom-Left Watch Button */}
              <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-8 z-20">
                <button
                  type="button"
                  className="px-6 py-2.5 sm:px-7 sm:py-3 border border-white text-white font-medium text-xs sm:text-sm transition-all duration-300 bg-transparent group-hover:bg-white group-hover:text-[#121212] flex items-center gap-2 rounded-none cursor-pointer shadow-sm hover:shadow-md"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Watch</span>
                </button>
              </div>


            </div>

          </div>
        </div>

      </div>



      {/* Cinematic Video Modal */}
      {videoModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-lg flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
          onClick={() => setVideoModalOpen(false)}
        >
          <div
            className="relative w-full max-w-5xl bg-[#121212] rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-black/40">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF462D]" />
                <span className="text-xs font-mono uppercase tracking-wider text-white/90">
                  {whoWeAreData.cardTitle} // OFFICIAL PRESENTATION
                </span>
              </div>
              <button
                onClick={() => setVideoModalOpen(false)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Video Player */}
            <div className="aspect-[16/9] w-full bg-black">
              <video
                src={whoWeAreData.videoSrc}
                autoPlay
                controls
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
