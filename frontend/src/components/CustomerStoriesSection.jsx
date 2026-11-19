import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Play, Pause, ChevronLeft, ChevronRight, X } from 'lucide-react';

export default function CustomerStoriesSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0); // 0 to 100%
  const [isPaused, setIsPaused] = useState(false);
  const [storyModal, setStoryModal] = useState(null);
  const videoRef = useRef(null);

  const stories = [
    {
      id: 0,
      badge: "01",
      eyebrow: "IT MODERNIZATION",
      title: "Smart Real Estate & PropTech: Digitizing Property Portfolios & Digital Twin BIM for 2.5M+ Units",
      description: "Deploying high-resiliency cloud edge networks, digital twin architectural BIM models, and automated asset intelligence to optimize commercial real estate, smart power distribution, and multi-tenant property operations.",
      video: "/videos/real_estate_5s.mp4",
      details: "Through end-to-end cloud modernization and IoT smart building telemetry, the commercial real estate enterprise unified 2.5 million residential and commercial units into a single digital-twin control fabric, reducing building energy overhead by 34% and automating tenant lease lifecycle operations."
    },
    {
      id: 1,
      badge: "02",
      eyebrow: "HYBRID CLOUD & STRATEGIC ADVISORY",
      title: "Enterprise Consortium Unifies Mission-Critical Workloads on Sovereign Cloud Architecture",
      description: "Collaborating with cross-functional leadership to migrate legacy ERP and high-performance compute clusters into a unified hybrid platform with zero operational downtime.",
      image: "/images/story_team_workshop_hd.jpg",
      video: "/videos/qubit_matrix.mp4",
      details: "Our consulting architects co-designed a multi-stage modernization roadmap across 14 global operating facilities, consolidating disparate data silos into a high-throughput hybrid cloud fabric that accelerated engineering delivery cycles by 3.5x."
    },
    {
      id: 2,
      badge: "03",
      eyebrow: "ALGORITHMIC FINANCE & COMPUTING",
      title: "Tier-1 Financial Institution Achieves 120x Acceleration in Real-Time Portfolio Risk Simulation",
      description: "Eliminating legacy GPU cluster bottlenecks with next-generation algorithmic compute pipelines, processing complex derivatives and extreme volatility stress tests in under 5 seconds.",
      image: "/images/story_team_success_hd.jpg",
      video: "/videos/qubit_interface.mp4",
      details: "By refactoring non-linear Monte Carlo pricing workflows and deploying advanced hardware-accelerated coprocessors, the institution achieved sub-second capital adequacy checks, reducing capital buffer reserves while maintaining full regulatory compliance."
    }
  ];

  // Auto-play the 5s video when Slide 1 is active
  useEffect(() => {
    if (currentSlide === 0 && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  }, [currentSlide]);

  // 5-second progress bar filling smoothly (40ms ticks)
  useEffect(() => {
    if (isPaused) return;

    const intervalTime = 40; // update every 40ms
    const step = 100 / (5000 / intervalTime); // precisely 5000ms

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentSlide((curr) => (curr + 1) % stories.length);
          return 0;
        }
        return prev + step;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [isPaused, stories.length, currentSlide]);

  const handleSelectSlide = (index) => {
    setCurrentSlide(index);
    setProgress(0);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? stories.length - 1 : prev - 1));
    setProgress(0);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === stories.length - 1 ? 0 : prev + 1));
    setProgress(0);
  };

  return (
    <section id="customer-stories" className="w-full bg-[#FBF9F5] text-[#121212] overflow-hidden pt-12 md:pt-16 pb-12">
      
      {/* Section Header Text (Above the full-width image/video) */}
      <div className="w-full px-6 sm:px-12 lg:px-20 xl:px-28 mb-8 sm:mb-10">
        <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-light tracking-[-0.03em] leading-[1.12] text-[#121212] mb-3">
          Progress, one customer at a time
        </h2>
        <p className="text-sm sm:text-base text-[#555555] leading-relaxed max-w-2xl font-normal">
          We work hand-in-hand with customers and our strategic partners to run and transform their essential systems.
        </p>
      </div>

      {/* FULL-WIDTH EDGE-TO-EDGE HORIZONTAL CAROUSEL (Covers 100% of the screen horizontally) */}
      <div 
        className="relative w-full aspect-[16/9] md:aspect-[21/9] lg:aspect-[24/10] min-h-[500px] md:min-h-[560px] lg:min-h-[620px] bg-black overflow-hidden select-none"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Render Full-Bleed Slides with Smooth Crossfade */}
        {stories.map((story, idx) => {
          const isCurrent = currentSlide === idx;

          return (
            <div
              key={story.id}
              className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${
                isCurrent ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              {/* Slide 1: Always plays the 5-second video (no static image, no 3D toggles) */}
              {idx === 0 ? (
                <video
                  ref={videoRef}
                  src={story.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  className="w-full h-full object-cover object-center"
                />
              ) : (
                /* High-Quality Enhanced Full-Screen Image for subsequent stories */
                <img
                  src={story.image}
                  alt={story.title}
                  className={`w-full h-full object-cover object-center transition-transform duration-[6000ms] ease-out ${
                    isCurrent ? 'scale-[1.03]' : 'scale-100'
                  }`}
                />
              )}

              {/* Cinematic Gradient Vignette (Provides dark contrast on left for crystal clear typography) */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/25 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/30 pointer-events-none" />

              {/* Left Content Overlay: Eyebrow, Title, Description, and Buttons */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-10 lg:p-16 lg:pl-20 xl:pl-28 z-20 max-w-4xl pointer-events-none">
                <div className="pointer-events-auto">
                  
                  {/* Eyebrow with Terracotta Red Accent Bar (Matching Kyndryl 1:1) */}
                  <div className="mb-3">
                    <span className="text-[11px] font-mono font-semibold tracking-wider uppercase text-white/90">
                      {story.eyebrow}
                    </span>
                    <div className="h-[2px] w-6 bg-[#FF462D] mt-1" />
                  </div>

                  {/* Monumental Story Title */}
                  <h3 className="text-2xl sm:text-3xl lg:text-[40px] font-normal text-white leading-[1.2] tracking-tight mb-4 drop-shadow-md">
                    {story.title}
                  </h3>

                  {/* Narrative Subtext */}
                  <p className="text-sm sm:text-base text-white/80 leading-relaxed mb-8 max-w-2xl line-clamp-2 sm:line-clamp-none font-normal">
                    {story.description}
                  </p>

                  {/* Clickable Action Buttons matching Kyndryl 1:1 */}
                  <div className="flex flex-wrap items-center gap-3.5 mb-2">
                    <button
                      type="button"
                      onClick={() => setStoryModal(story)}
                      className="px-5 py-2.5 sm:px-6 sm:py-3 border border-white/80 bg-black/30 backdrop-blur-xs text-white hover:bg-white hover:text-[#121212] font-medium text-xs sm:text-sm rounded-none sm:rounded-sm transition-all duration-200 cursor-pointer shadow-sm active:scale-95"
                    >
                      Highlights
                    </button>
                    <button
                      type="button"
                      onClick={() => setStoryModal(story)}
                      className="px-5 py-2.5 sm:px-6 sm:py-3 border border-white/80 bg-black/30 backdrop-blur-xs text-white hover:bg-white hover:text-[#121212] font-medium text-xs sm:text-sm rounded-none sm:rounded-sm transition-all duration-200 cursor-pointer shadow-sm active:scale-95 flex items-center gap-2 group"
                    >
                      <span>Read full story</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>

                </div>
              </div>

            </div>
          );
        })}

        {/* Top-Right Play/Pause Toggle */}
        <div className="absolute top-6 right-6 sm:top-10 sm:right-10 z-30">
          <button
            onClick={() => setIsPaused(!isPaused)}
            className="w-9 h-9 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white/80 hover:text-white flex items-center justify-center transition cursor-pointer"
            title={isPaused ? "Resume auto-slide" : "Pause auto-slide"}
          >
            {isPaused ? <Play className="w-3.5 h-3.5 fill-current" /> : <Pause className="w-3.5 h-3.5" />}
          </button>
        </div>

        {/* Side Chevrons */}
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-black/30 hover:bg-black/60 text-white/80 hover:text-white backdrop-blur-md border border-white/10 hidden sm:flex items-center justify-center transition cursor-pointer"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-black/30 hover:bg-black/60 text-white/80 hover:text-white backdrop-blur-md border border-white/10 hidden sm:flex items-center justify-center transition cursor-pointer"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

      </div>

      {/* THE 3 SLIDING PROGRESS STICKS AT THE DOWN SIDE (Matching Kyndryl 1:1) */}
      <div className="w-full bg-[#FAF7F2] pt-6 pb-4 px-4 sm:px-6 lg:px-8 border-b border-black/[0.06]">
        <div className="w-full px-6 sm:px-12 lg:px-20 xl:px-28 mx-auto flex items-center justify-center">
          
          <div className="flex items-center gap-4 sm:gap-6 w-full max-w-xl justify-center">
            {stories.map((st, idx) => {
              const isActive = currentSlide === idx;
              const isPast = currentSlide > idx;

              return (
                <button
                  key={st.id}
                  onClick={() => handleSelectSlide(idx)}
                  className="flex-1 py-3 group cursor-pointer text-left relative focus:outline-none"
                  aria-label={`Jump to slide ${idx + 1}`}
                >
                  {/* The Horizontal Stick Container */}
                  <div className="h-[2.5px] sm:h-[3.5px] w-full bg-[#D1CBC1] rounded-full overflow-hidden relative transition-colors group-hover:bg-[#B5ADA1]">
                    
                    {/* The Active Filling Stick: Fills over 5 seconds */}
                    <div
                      className={`h-full rounded-full transition-all ${
                        isActive
                          ? 'bg-[#FF462D]'
                          : isPast
                          ? 'bg-[#121212]/40'
                          : 'bg-transparent'
                      }`}
                      style={{
                        width: isActive ? `${progress}%` : isPast ? '100%' : '0%',
                        transition: isActive ? 'width 40ms linear' : 'width 300ms ease'
                      }}
                    />
                  </div>
                </button>
              );
            })}
          </div>

        </div>
      </div>

      {/* Story Video & Case Study Modal */}
      {storyModal && (
        <div 
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn"
          onClick={() => setStoryModal(null)}
        >
          <div 
            className="relative w-full max-w-3xl bg-white rounded-2xl overflow-hidden shadow-2xl p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-black/10 mb-4">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#FF462D]">
                // {storyModal.eyebrow}
              </span>
              <button 
                onClick={() => setStoryModal(null)}
                className="w-8 h-8 rounded-full bg-black/5 hover:bg-black/10 flex items-center justify-center text-[#121212] transition"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Video Player inside Modal */}
            <div className="aspect-[16/9] w-full rounded-xl overflow-hidden bg-black mb-6">
              <video
                src={storyModal.video || "/videos/real_estate_5s.mp4"}
                autoPlay
                loop
                controls
                className="w-full h-full object-cover"
              />
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-[#121212] tracking-tight mb-3">
              {storyModal.title}
            </h3>

            <p className="text-sm sm:text-base text-[#555555] leading-relaxed mb-6 font-normal">
              {storyModal.details}
            </p>

            <div className="pt-4 border-t border-black/10 flex items-center justify-between">
              <span className="text-xs font-mono text-[#888888]">
                VERIFIED ARCHITECTURE DISPATCH // 2026
              </span>
              <button
                onClick={() => setStoryModal(null)}
                className="px-5 py-2 rounded-full bg-[#121212] hover:bg-[#FF462D] text-white text-xs font-medium transition cursor-pointer"
              >
                Close Presentation
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
