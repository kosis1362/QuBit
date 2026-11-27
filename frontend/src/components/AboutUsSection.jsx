import React, { useState, useEffect } from 'react';
import { Play, Pause, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const SLIDE_DURATION_MS = 3000;

export default function AboutUsSection() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const whoWeAreData = {
    eyebrow: "WHO WE ARE",
    title: "Where we reimagine Business with Digital Possibilities",
    description: "We help businesses rethink what's possible through intelligent technology, AI-powered automation, and custom digital solutions. Turning real-world challenges into smarter ways of working, new opportunities, and sustainable growth.",
    links: [
      { label: "Explore Our Solutions", href: "#solutions" },
      { label: "Contact Us", href: "#contact" }
    ],
    cardTitle: "We are QuBit",
    hoverImage: "/images/qubit_cyber_face.jpg",
    hoverSubtitle: "THE ARCHITECTURE OF PROGRESS"
  };

  const watchSlides = [
    {
      id: "we-are-qubit",
      type: "intro",
      title: "We are QuBit",
      subtitle: "THE ARCHITECTURE OF PROGRESS",
      tagline: "Where we reimagine Business with Digital Possibilities"
    },
    {
      id: "transform-work",
      type: "image",
      src: "/images/who_we_are_1_transform.jpg",
      alt: "Transform the way you work"
    },
    {
      id: "solve-smarter",
      type: "image",
      src: "/images/who_we_are_2_solve_smarter.jpg",
      alt: "Solve Smarter Grow Faster"
    },
    {
      id: "businesses-better",
      type: "image",
      src: "/images/who_we_are_3_businesses.jpg",
      alt: "Making businesses work better"
    },
    {
      id: "complexity-clarity",
      type: "image",
      src: "/images/who_we_are_4_complexity.jpg",
      alt: "Turning Complexity into Clarity"
    }
  ];

  const openWatchModal = () => {
    setCurrentSlide(0);
    setIsPaused(false);
    setVideoModalOpen(true);
  };

  useEffect(() => {
    if (!videoModalOpen || isPaused) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % watchSlides.length);
    }, SLIDE_DURATION_MS);

    return () => clearInterval(timer);
  }, [videoModalOpen, isPaused, watchSlides.length]);

  useEffect(() => {
    if (!videoModalOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setVideoModalOpen(false);
      if (e.key === 'ArrowRight') setCurrentSlide((prev) => (prev + 1) % watchSlides.length);
      if (e.key === 'ArrowLeft') setCurrentSlide((prev) => (prev - 1 + watchSlides.length) % watchSlides.length);
      if (e.key === ' ') {
        e.preventDefault();
        setIsPaused((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [videoModalOpen, watchSlides.length]);

  const activeSlide = watchSlides[currentSlide];

  return (
    <section id="About Us" className="w-full bg-white text-[#121212] pt-8 pb-16 lg:pt-10 lg:pb-24 overflow-hidden border-b border-black/[0.06]">
      <div id="who-we-are" />
      <div id="about-us" />
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
              onClick={openWatchModal}
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



      {/* Cinematic Slideshow Modal */}
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
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF462D] animate-pulse" />
                <span className="text-xs font-mono uppercase tracking-wider text-white/90">
                  {whoWeAreData.cardTitle} // OFFICIAL PRESENTATION
                </span>
                <span className="text-[11px] font-mono text-white/50">
                  {currentSlide + 1} / {watchSlides.length}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setIsPaused((prev) => !prev)}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition"
                  aria-label={isPaused ? "Resume slideshow" : "Pause slideshow"}
                >
                  {isPaused ? <Play className="w-3.5 h-3.5 fill-current" /> : <Pause className="w-3.5 h-3.5" />}
                </button>
                <button
                  type="button"
                  onClick={() => setVideoModalOpen(false)}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition"
                  aria-label="Close presentation"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Slideshow Stage */}
            <div className="relative aspect-[16/9] w-full bg-[#121212] overflow-hidden select-none">
              <AnimatePresence mode="wait">
                {activeSlide.type === "intro" ? (
                  <motion.div
                    key={activeSlide.id}
                    initial={{ opacity: 0, scale: 1.03 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0 flex flex-col items-center justify-center bg-[#FF462D] text-white px-6 text-center overflow-hidden"
                  >
                    <motion.img
                      src={whoWeAreData.hoverImage}
                      alt=""
                      aria-hidden="true"
                      initial={{ scale: 1 }}
                      animate={{ scale: 1.06 }}
                      transition={{ duration: 3, ease: "linear" }}
                      className="absolute inset-0 w-full h-full object-cover object-top opacity-20 mix-blend-multiply pointer-events-none"
                    />
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.16) 0%, rgba(0, 0, 0, 0.28) 100%)'
                      }}
                    />
                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      className="relative z-10 max-w-2xl"
                    >
                      <span className="inline-block text-xs sm:text-sm font-mono tracking-[0.25em] uppercase text-white/85 mb-3">
                        {activeSlide.subtitle}
                      </span>
                      <h3 className="text-5xl sm:text-7xl lg:text-8xl font-normal tracking-tight drop-shadow-md mb-4">
                        {activeSlide.title}
                      </h3>
                      <p className="text-sm sm:text-base text-white/90 font-normal">
                        {activeSlide.tagline}
                      </p>
                    </motion.div>
                  </motion.div>
                ) : (
                  <motion.div
                    key={activeSlide.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.45, ease: "easeInOut" }}
                    className="absolute inset-0 bg-[#121212] overflow-hidden"
                  >
                    <motion.img
                      src={activeSlide.src}
                      alt={activeSlide.alt}
                      initial={{ scale: 1 }}
                      animate={{ scale: isPaused ? 1.02 : 1.04 }}
                      transition={{ duration: 3, ease: "linear" }}
                      className="w-full h-full object-contain"
                    />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Left / Right Navigation Arrows */}
              <button
                type="button"
                onClick={() => setCurrentSlide((prev) => (prev - 1 + watchSlides.length) % watchSlides.length)}
                className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-black/45 hover:bg-black/70 text-white flex items-center justify-center backdrop-blur-sm transition"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={() => setCurrentSlide((prev) => (prev + 1) % watchSlides.length)}
                className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-black/45 hover:bg-black/70 text-white flex items-center justify-center backdrop-blur-sm transition"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Bottom 3-Second Continuous Progress Bar */}
              <div className="absolute bottom-0 inset-x-0 z-20 px-4 pb-3 pt-6 bg-gradient-to-t from-black/70 to-transparent flex items-center gap-2">
                {watchSlides.map((slide, idx) => {
                  const isActive = idx === currentSlide;
                  const isCompleted = idx < currentSlide;
                  return (
                    <button
                      key={slide.id}
                      type="button"
                      onClick={() => setCurrentSlide(idx)}
                      aria-label={`Go to slide ${idx + 1}`}
                      className="flex-1 h-1.5 bg-white/25 rounded-full overflow-hidden cursor-pointer"
                    >
                      {isCompleted ? (
                        <div className="h-full w-full bg-[#FF462D]" />
                      ) : isActive ? (
                        <motion.div
                          key={`${slide.id}-${isPaused ? 'paused' : 'playing'}`}
                          initial={{ width: "0%" }}
                          animate={{ width: isPaused ? "50%" : "100%" }}
                          transition={{
                            duration: isPaused ? 0 : SLIDE_DURATION_MS / 1000,
                            ease: "linear"
                          }}
                          className="h-full bg-[#FF462D]"
                        />
                      ) : null}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
