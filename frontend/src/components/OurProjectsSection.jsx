import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  Cpu,
  ShoppingBag
} from 'lucide-react';

export default function OurProjectsSection({ onConsultClick }) {
  const scrollContainerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftPos, setScrollLeftPos] = useState(0);

  const projects = [
    {
      id: 'erp-employee-management-system',
      title: 'ERP / Employee Management System',
      subheading: 'A cross-platform React Native, Spring Boot 3.2 & Neon PostgreSQL enterprise platform streamlining workforce lifecycle operations, attendance telemetry, and multi-outlet management.',
      category: 'Enterprise ERP & Mobile Apps',
      //badge: 'FEATURED PRODUCTION SYSTEM',
      image: '/images/hr1.jpg',
      demoUrl: 'https://employee-management-system-rose-tau.vercel.app/',
      detailSlug: 'erp-employee-management-system',
      tags: [],
      icon: UsersIcon
    },
    {
      id: 'proptech-digital-twin-bim',
      title: 'Smart Real Estate & PropTech: Digitizing Property Management.',
      subheading: 'Developing a modern real estate technology platform integrating cloud-based infrastructure, interactive Mapbox geospatial services, and intelligent property management workflows to enhance property discovery, streamline listing operations, and deliver seamless multi-user experiences.',
      category: 'Cloud Edge & 3D Spatial Telemetry',
      //badge: 'COMMERCIAL PROPTECH',
      image: '/images/corporate_web_design_hero.jpg',
      demoUrl: 'https://real-estate-beta-beige.vercel.app/',
      detailSlug: 'erp-employee-management-system', // Fallback to technical dossier
      tags: [],
      icon: Building2
    },
    {
      id: 'khata-ai',
      title: 'Khata AI — Business Management SaaS',
      subheading: 'A full-stack business management SaaS replacing traditional notebooks, registers, and scattered Excel spreadsheets with centralized sales, inventory, billing, expenses, and analytics.',
      category: 'Business Management SaaS',
      //badge: 'FULL-STACK SAAS',
      image: '/images/story_team_success_hd.jpg',
      demoUrl: 'https://khata-ai-69e93.web.app/',
      detailSlug: 'khata-ai',
      tags: [],
      icon: Cpu
    },
    {
      id: 'omnichannel-ecommerce-suite',
      title: 'Omnichannel Headless E-Commerce Suite',
      subheading: 'High-concurrency headless commerce platform delivering sub-second page performance, multi-currency checkout, and real-time multi-warehouse inventory synchronization.',
      category: 'Distributed Digital Commerce',
      //badge: 'HEADLESS RETAIL',
      image: '/images/ecommerce_hero.jpg',
      demoUrl: 'https://qubit-commerce.vercel.app',
      detailSlug: 'erp-employee-management-system',
      tags: [],
      icon: ShoppingBag
    }
  ];

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    let targetScroll = el.scrollLeft;
    let animId = null;

    // Smooth Lerp loop for buttery horizontal gliding
    const smoothStep = () => {
      if (!el) return;
      const current = el.scrollLeft;
      const diff = targetScroll - current;
      if (Math.abs(diff) > 0.5) {
        el.scrollLeft = current + diff * 0.15; // Smooth exponential damping
        animId = requestAnimationFrame(smoothStep);
      } else {
        el.scrollLeft = targetScroll;
        animId = null;
      }
    };

    // Wheel event handler: converts vertical scroll into ultra-smooth horizontal movement
    const onWheel = (e) => {
      // Let trackpad horizontal gestures pass through natively
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        targetScroll = el.scrollLeft;
        return;
      }

      const maxScroll = el.scrollWidth - el.clientWidth;
      const isUp = e.deltaY < 0;
      const isDown = e.deltaY > 0;

      const atStart = el.scrollLeft <= 4 && isUp;
      const atEnd = el.scrollLeft >= maxScroll - 4 && isDown;

      // If within horizontal scroll range, smoothly scroll horizontally
      if (!atStart && !atEnd) {
        e.preventDefault();
        targetScroll = Math.max(0, Math.min(maxScroll, targetScroll + e.deltaY * 1.1));
        if (!animId) {
          animId = requestAnimationFrame(smoothStep);
        }
      } else {
        targetScroll = el.scrollLeft;
      }
    };

    el.addEventListener('wheel', onWheel, { passive: false });

    return () => {
      el.removeEventListener('wheel', onWheel);
      if (animId) cancelAnimationFrame(animId);
    };
  }, []);

  // Mouse drag-to-scroll support
  const handleMouseDown = (e) => {
    if (e.target.closest('a') || e.target.closest('button')) return;
    setIsDragging(true);
    setStartX(e.pageX - (scrollContainerRef.current?.offsetLeft || 0));
    setScrollLeftPos(scrollContainerRef.current?.scrollLeft || 0);
  };

  const handleMouseLeaveOrUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 1.4;
    scrollContainerRef.current.scrollLeft = scrollLeftPos - walk;
  };

  return (
    <section id="our-projects" className="py-16 sm:py-20 lg:py-24 bg-[#FFFFFF] border-b border-black/[0.06] text-[#121212] overflow-hidden">
      <div className="w-full px-6 sm:px-10 lg:px-16">

        {/* Section Header */}
        <div className="mb-8 sm:mb-10 max-w-2xl">
          <div className="mb-2.5">
            <span className="text-xs font-mono font-semibold uppercase tracking-[0.22em] text-[#FF462D] block">
            </span>
            <div className="w-6 h-[2px] bg-[#FF462D] mt-1.5" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-[#121212] leading-tight">
            Our Projects
          </h2>

          <p className="text-sm sm:text-base text-[#555555] font-normal leading-relaxed mt-2.5">
            Explore mission-critical digital systems, scalable cloud platforms, and modern enterprise software engineered and deployed by QuBit.
          </p>
        </div>

      </div>

      {/* 
        ========================================================================
        COMPACT HORIZONTAL SCROLLING PROJECTS TRACK:
        - Compact cards sized for multi-card horizontal reel
        - Velvet-smooth momentum scroll loop
        - Smooth hover lift & zoom
        ========================================================================
      */}
      <div className="relative w-full">
        <div
          ref={scrollContainerRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeaveOrUp}
          onMouseUp={handleMouseLeaveOrUp}
          onMouseMove={handleMouseMove}
          className={`flex items-stretch gap-5 sm:gap-6 overflow-x-auto py-8 px-6 sm:px-10 lg:px-16 scroll-smooth snap-x snap-mandatory select-none ${isDragging ? 'cursor-grabbing' : 'cursor-grab'
            }`}
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
        >
          {projects.map((proj, idx) => (
            <div
              key={proj.id}
              className="w-[280px] sm:w-[340px] lg:w-[380px] shrink-0 snap-start group relative bg-[#FAFAF8] rounded-2xl sm:rounded-3xl overflow-hidden border border-black/[0.08] hover:border-[#FF462D]/60 hover:shadow-xl hover:shadow-black/15 transform hover:-translate-y-3 hover:scale-[1.03] transition-all duration-400 ease-out flex flex-col justify-between"
            >
              <div>
                {/* Visual Image Banner with Subtle Zoom */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/90">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                    draggable={false}
                  />

                  {/* Dark Vignette Overlay for Text Legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />

                  {/* Top Category Badge */}
                  <div className="absolute top-3.5 left-3.5 sm:top-4 sm:left-4 z-20 flex items-center gap-1.5">
                    <span className="px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[10px] font-mono font-medium text-white/95 uppercase tracking-wider">
                      {proj.badge}
                    </span>
                  </div>

                  {/* Bottom Tech Pills inside Image */}
                  <div className="absolute bottom-3 left-3 sm:bottom-3.5 sm:left-3.5 right-3 z-20 flex flex-wrap gap-1.5">
                    {proj.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-md bg-white/20 backdrop-blur-md border border-white/25 text-[9px] font-mono text-white/95 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                    {proj.tags.length > 3 && (
                      <span className="px-1.5 py-0.5 rounded-md bg-white/20 backdrop-blur-md border border-white/25 text-[9px] font-mono text-white/90">
                        +{proj.tags.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Face: Heading & Subheading Only */}
                <div className="p-5 sm:p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider font-semibold text-[#FF462D]">
                      PROJECT  0{idx + 1}
                    </span>
                    <span className="text-[11px] font-mono text-[#888888]">
                      {proj.category}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-[#121212] tracking-tight group-hover:text-[#FF462D] transition-colors duration-300 leading-snug mb-2 line-clamp-2">
                    {proj.title}
                  </h3>

                  <p className="text-xs sm:text-[13px] text-[#555555] leading-relaxed font-normal line-clamp-3">
                    {proj.subheading}
                  </p>
                </div>
              </div>

              {/* Action Buttons with Arrows: Visit Website & Learn About Project */}
              <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-2 border-t border-black/[0.06] flex items-center justify-between gap-2">
                {/* Button 1: Visit Website (External link with arrow) */}
                <a
                  href={proj.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg border border-black/15 bg-white text-xs font-semibold text-[#121212] hover:bg-[#121212] hover:text-white transition-all cursor-pointer shadow-xs active:scale-95 group/btn"
                >
                  <span>Website</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </a>

                {/* Button 2: Learn About Website / Project (Internal router link with arrow) */}
                <Link
                  to={`/projects/${proj.detailSlug}`}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#FF462D] hover:bg-[#E0351E] text-white text-xs font-semibold transition-all cursor-pointer shadow-sm hover:shadow-md active:scale-95 group/link"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function UsersIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
