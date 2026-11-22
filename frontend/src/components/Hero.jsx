import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight, ArrowRight } from 'lucide-react';

export default function Hero({ onReportClick, onSimulateClick }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const videoRef = useRef(null);

  const slides = [
    {
      id: 0,
      title: "Solve Smarter,Grow Faster",
      subtitle: "From intelligent automation to custom software, AI-powered solutions, and digital experiences, we help businesses simplify operations, solve real problems, and unlock new opportunities.",
      cta: "Contact Us",
      video: "/videos/qubit_interface.mp4",
      action: onReportClick
    },
    {
      id: 1,
      title: "Reimagine business. Reinvent possibilities.",
      subtitle: "We bring ideas, technology, and innovation together to solve real-world business challenges.",
      cta: "Explore Services",
      video: "/videos/qubit_core.mp4",
      action: onSimulateClick
    },
    {
      id: 2,
      title: "Think beyond limits. Build beyond expectations.",
      subtitle: "We empower businesses to move forward with smarter digital solutions.",
      cta: "Explore Work",
      video: "/videos/qubit_matrix.mp4",
      action: onReportClick
    },
    {
      id: 3,
      title: "Less complexity. More possibilities.",
      subtitle: "We design and deliver intelligent digital solutions that eliminate inefficiencies, simplify business operations, and help companies work smarter, move faster, and grow stronger.",
      cta: "About Us",
      video: "/videos/qubit_quantum.mp4",
      action: onSimulateClick
    }
  ];

  // Auto advance slides every 8 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const slide = slides[currentSlide];

  return (
    <section className="relative w-full h-[90vh] min-h-[700px] max-h-[950px] bg-[#121212] overflow-hidden flex flex-col justify-between text-white">

      {/* Background Graphic / Video Stage (Covers 100% of top full screen) */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-[#101314]">

        {/* Layered Gradient Lighting matching Kyndryl's Hero Atmosphere */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0C0E10] via-[#0C0E10]/85 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-[#121212]/40 z-10 pointer-events-none" />

        {/* Subtle Cyan to Terracotta Glow Orbs */}
        <div className="absolute top-1/4 right-1/3 w-[500px] h-[500px] bg-cyan-600/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/3 right-10 w-[600px] h-[600px] bg-[#FF462D]/20 rounded-full blur-[160px] pointer-events-none" />

        {/* Video Player Display on the right half */}
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[65%] h-full flex items-center justify-center opacity-85 mix-blend-screen overflow-hidden">
          <video
            ref={videoRef}
            key={slide.video}
            src={slide.video}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover scale-105 transition-opacity duration-700 ease-in-out"
          />
        </div>

        {/* Isometric Grid Wireframe Overlay (Kyndryl 3D matrix effect) */}
        <div
          className="absolute inset-0 opacity-[0.18] pointer-events-none z-10"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.15) 1px, transparent 1px),
                              linear-gradient(to bottom, rgba(255, 255, 255, 0.15) 1px, transparent 1px)`,
            backgroundSize: '48px 48px',
            maskImage: 'radial-gradient(ellipse at 70% 50%, black 20%, transparent 75%)',
            WebkitMaskImage: 'radial-gradient(ellipse at 70% 50%, black 20%, transparent 75%)'
          }}
        />

      </div>

      {/* Main Hero Content (Covers exactly 70% height with balanced typography) */}
      <div className="relative z-20 max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex items-center pt-24 sm:pt-28 pb-4 sm:pb-6">
        <div className="max-w-2xl">

          {/* Headline: Clean, Light, Elegant Grotesque */}
          <h1 className="text-4xl sm:text-5xl lg:text-[62px] xl:text-[68px] font-light tracking-[-0.03em] leading-[1.08] text-white mb-3 sm:mb-4">
            {slide.title}
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base lg:text-[17px] text-white/85 font-normal leading-relaxed mb-5 sm:mb-6 max-w-xl">
            {slide.subtitle}
          </p>

          {/* Rectangular Outline CTA Button (Matches Kyndryl screenshot) */}
          <div>
            <button
              onClick={slide.action}
              className="inline-flex items-center gap-3 px-5 py-2.5 sm:px-6 sm:py-3 rounded-md border border-white/80 text-white hover:bg-white hover:text-black font-medium text-xs sm:text-sm transition-all duration-200 cursor-pointer shadow-sm group"
            >
              <span>{slide.cta}</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </div>

        </div>
      </div>

      {/* Carousel Pagination Dots (Centered at Bottom of Hero) */}
      <div className="relative z-20 w-full pb-3 sm:pb-4 flex items-center justify-center gap-2.5">
        {slides.map((s, idx) => (
          <button
            key={s.id}
            onClick={() => setCurrentSlide(idx)}
            className={`h-2 transition-all duration-300 rounded-full cursor-pointer ${currentSlide === idx
              ? 'w-8 bg-white/90'
              : 'w-2 bg-white/35 hover:bg-white/60'
              }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

    </section>
  );
}
