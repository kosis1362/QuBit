import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Pause, ChevronLeft, ChevronRight, X, Sparkles, CheckCircle2 } from 'lucide-react';

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
      eyebrow: "ENTERPRISE OPERATIONS // ERP",
      title: "The Hidden Cost of Managing a Business Without an ERP System",
      description: "Imagine a growing company with 100 employees, multiple departments and several outlets—transforming morning spreadsheets, attendance chaos, and payroll friction into a single unified platform.",
      image: "/images/hr1.jpg",
      slug: "erp-system",
      details: "A business doesn't lose time only when work stops. Sometimes, it loses time every day through small tasks that never seem to end. By unifying employee profiles, attendance, leave requests, and payroll approvals into a single ERP platform, administrative chasing dropped by 94% and payroll calculation mistakes were eliminated."
    },
    {
      id: 1,
      badge: "02",
      eyebrow: "IT MODERNIZATION",
      title: "Smart Real Estate & PropTech: Digitizing Property Management.",
      description: "Developing a modern real estate technology platform integrating cloud-based infrastructure, interactive Mapbox geospatial services, and intelligent property management workflows to enhance property discovery, streamline listing operations, and deliver seamless multi-user experiences.",
      video: "/videos/real_estate_5s.mp4",
      slug: "real-estate-hub",
      details: "Developed Luxe Real Estate Hub to address the challenges of fragmented property listings, difficult property discovery, and limited location-based visibility. The platform provides a centralized solution for buyers and sellers to explore properties, manage listings, and discover suitable properties based on location, simplifying the overall property search experience."
    },
    {
      id: 2,
      badge: "03",
      eyebrow: "ALGORITHMIC FINANCE & COMPUTING",
      title: "Tier-1 Financial Institution Achieves 120x Acceleration in Real-Time Portfolio Risk Simulation",
      description: "Eliminating legacy GPU cluster bottlenecks with next-generation algorithmic compute pipelines, processing complex derivatives and extreme volatility stress tests in under 5 seconds.",
      image: "/images/story_team_success_hd.jpg",
      slug: "erp-system",
      details: "By refactoring non-linear Monte Carlo pricing workflows and deploying advanced hardware-accelerated coprocessors, the institution achieved sub-second capital adequacy checks, reducing capital buffer reserves while maintaining full regulatory compliance."
    }
  ];

  // Auto-play video when an active slide contains a video
  useEffect(() => {
    if (stories[currentSlide]?.video && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => { });
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
      <div id="Products" />
      <div id="products" />
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
              className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${isCurrent ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                }`}
            >
              {/* Renders Video or Enhanced Full-Bleed Image */}
              {story.video ? (
                <video
                  ref={videoRef}
                  src={story.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover object-center"
                />
              ) : (
                <img
                  src={story.image}
                  alt={story.title}
                  loading="lazy"
                  decoding="async"
                  className={`w-full h-full object-cover object-center transition-transform duration-[6000ms] ease-out ${isCurrent ? 'scale-[1.03]' : 'scale-100'
                    }`}
                />
              )}

              {/* Deep Corner Blackness & Layered Overlays for High Text Contrast */}
              {/* Left Corner & Edge */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/98 via-black/85 via-50% to-black/30 pointer-events-none" />
              {/* Right Corner & Edge */}
              <div className="absolute inset-0 bg-gradient-to-l from-black/90 via-black/40 to-transparent pointer-events-none" />
              {/* Bottom Corners */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/98 via-black/70 to-transparent pointer-events-none" />
              {/* Top Corners */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/40 to-transparent pointer-events-none" />
              {/* Radial Corner Vignette */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_20%,_rgba(0,0,0,0.85)_100%)] pointer-events-none" />

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

                  {/* Clickable Action Button */}
                  <div className="flex flex-wrap items-center gap-3.5 mb-2">
                    <Link
                      to={`/customer-stories/${story.slug || 'erp-system'}`}
                      className="px-5 py-2.5 sm:px-6 sm:py-3 border border-white/80 bg-black/30 backdrop-blur-xs text-white hover:bg-white hover:text-[#121212] font-medium text-xs sm:text-sm rounded-none sm:rounded-sm transition-all duration-200 cursor-pointer shadow-sm active:scale-95 flex items-center gap-2 group"
                    >
                      <span>Read full story</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
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
                      className={`h-full rounded-full transition-all ${isActive
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

      {/* Story Case Study Highlights Modal (No Video Player) */}
      {storyModal && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn"
          onClick={() => setStoryModal(null)}
        >
          <div
            className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-black/10 mb-5">
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

            <div className="mb-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-[#121212] tracking-tight mb-4">
                {storyModal.title}
              </h3>

              <div className="p-5 rounded-2xl bg-[#FAF7F2] border border-black/[0.06] mb-5">
                <span className="text-xs font-mono font-semibold text-[#888888] uppercase block mb-1">
                  EXECUTIVE SUMMARY
                </span>
                <p className="text-sm sm:text-base text-[#333333] leading-relaxed font-normal">
                  {storyModal.details}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs font-mono text-[#555555]">
                <div className="p-3 rounded-xl bg-gray-50 border border-black/[0.04] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Architecture Verified</span>
                </div>
                <div className="p-3 rounded-xl bg-gray-50 border border-black/[0.04] flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#FF462D] shrink-0" />
                  <span>Modernized Infrastructure</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-black/10 flex items-center justify-between gap-4">
              <button
                onClick={() => setStoryModal(null)}
                className="px-5 py-2.5 rounded-xl border border-black/15 text-xs font-semibold text-[#555555] hover:text-[#121212] transition cursor-pointer"
              >
                Close
              </button>
              <Link
                to={`/customer-stories/${storyModal.slug || 'erp-system'}`}
                onClick={() => setStoryModal(null)}
                className="px-6 py-2.5 rounded-xl bg-[#FF462D] hover:bg-[#E0351E] text-white text-xs sm:text-sm font-semibold transition cursor-pointer shadow-md flex items-center gap-2"
              >
                <span>Read Full Case Study</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
