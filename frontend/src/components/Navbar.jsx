import React, { useState, useEffect } from 'react';
import { ChevronDown, ExternalLink, Bookmark, ChevronRight, Search, Menu, X } from 'lucide-react';

export default function Navbar({ onConsultClick, onSearchClick }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  // When user starts scrolling, the navbar smoothly disappears; when at top, it reappears
  useEffect(() => {
    const handleScroll = () => {
      // Disappears if user scrolls more than 40px down
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <div
      className={`fixed top-2 sm:top-3.5 left-0 right-0 z-50 w-full px-2 sm:px-3 lg:px-4 pointer-events-none transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isScrolled
          ? '-translate-y-28 opacity-0'
          : 'translate-y-0 opacity-100'
      }`}
    >
      {/* Blurry Transparent Frosted Glass Header */}
      <header className="pointer-events-auto w-full max-w-[98%] sm:max-w-[97%] lg:max-w-[98%] xl:max-w-[1720px] mx-auto bg-black/30 backdrop-blur-xl sm:backdrop-blur-2xl border border-white/20 rounded-[24px] sm:rounded-full px-5 sm:px-8 shadow-2xl text-white transition-all">
        <div className="flex items-center justify-between h-[70px] sm:h-[76px]">

          {/* Left Section: Logo & Main Nav with Enlarged Details */}
          <div className="flex items-center gap-8 lg:gap-12">
            {/* Kyndryl-style QuBit Logo (Prominent 36px font) */}
            <a href="#" className="flex items-center gap-1 group">
              <span className="text-3xl sm:text-[34px] lg:text-[36px] font-medium tracking-tight text-[#FF462D] font-sans transition-transform duration-200 group-hover:scale-[1.02]">
                QuBit
              </span>
            </a>

            {/* Desktop Navigation Links (Enlarged 15px - 16px font) */}
            <nav className="hidden xl:flex items-center gap-8 text-[15px] sm:text-base text-white/95 font-normal tracking-wide">

              {/* What we do */}
              <div className="relative group">
                <button
                  onClick={() => toggleDropdown('what')}
                  className="flex items-center gap-2 hover:text-white py-2 cursor-pointer transition-colors"
                >
                  <span>What we do</span>
                  <ChevronDown className="w-4 h-4 text-white/70 transition-transform group-hover:rotate-180" />
                </button>
                {/* Dropdown Menu */}
                <div className="absolute top-full left-0 w-72 bg-[#141414]/95 backdrop-blur-xl border border-white/15 rounded-2xl p-3.5 shadow-2xl opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200">
                  <a href="#systems" className="block px-3.5 py-2.5 rounded-xl text-sm text-white/85 hover:text-white hover:bg-white/10 transition">
                    Superconducting Quantum QPUs
                  </a>
                  <a href="#showcase" className="block px-3.5 py-2.5 rounded-xl text-sm text-white/85 hover:text-white hover:bg-white/10 transition">
                    Cryogenic Infrastructure
                  </a>
                  <a href="#solutions" className="block px-3.5 py-2.5 rounded-xl text-sm text-white/85 hover:text-white hover:bg-white/10 transition">
                    Hybrid Quantum-Classical Cloud
                  </a>
                  <a href="#simulator" className="block px-3.5 py-2.5 rounded-xl text-sm text-white/85 hover:text-white hover:bg-white/10 transition">
                    Quantum Simulator Gateway
                  </a>
                </div>
              </div>

              {/* Who we are */}
              <div className="relative group">
                <button
                  onClick={() => toggleDropdown('who')}
                  className="flex items-center gap-2 hover:text-white py-2 cursor-pointer transition-colors"
                >
                  <span>Who we are</span>
                  <ChevronDown className="w-4 h-4 text-white/70 transition-transform group-hover:rotate-180" />
                </button>
                {/* Dropdown Menu */}
                <div className="absolute top-full left-0 w-72 bg-[#141414]/95 backdrop-blur-xl border border-white/15 rounded-2xl p-3.5 shadow-2xl opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200">
                  <a href="#who-we-are" className="block px-3.5 py-2.5 rounded-xl text-sm text-white/85 hover:text-white hover:bg-white/10 transition">
                    Mission & Continuous Innovation
                  </a>
                  <a href="#who-we-are-recognition" className="block px-3.5 py-2.5 rounded-xl text-sm text-white/85 hover:text-white hover:bg-white/10 transition">
                    Industry & Analyst Recognition
                  </a>
                  <a href="#customer-stories" className="block px-3.5 py-2.5 rounded-xl text-sm text-white/85 hover:text-white hover:bg-white/10 transition">
                    Enterprise Customer Stories
                  </a>
                </div>
              </div>

              {/* Insights */}
              <div className="relative group">
                <button
                  onClick={() => toggleDropdown('insights')}
                  className="flex items-center gap-2 hover:text-white py-2 cursor-pointer transition-colors"
                >
                  <span>Insights</span>
                  <ChevronDown className="w-4 h-4 text-white/70 transition-transform group-hover:rotate-180" />
                </button>
                {/* Dropdown Menu */}
                <div className="absolute top-full left-0 w-72 bg-[#141414]/95 backdrop-blur-xl border border-white/15 rounded-2xl p-3.5 shadow-2xl opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200">
                  <a href="#readiness" className="block px-3.5 py-2.5 rounded-xl text-sm text-white/85 hover:text-white hover:bg-white/10 transition">
                    2026 Readiness Report
                  </a>
                  <a href="#research" className="block px-3.5 py-2.5 rounded-xl text-sm text-white/85 hover:text-white hover:bg-white/10 transition">
                    Topological Coherence Research
                  </a>
                  <a href="#pqc" className="block px-3.5 py-2.5 rounded-xl text-sm text-white/85 hover:text-white hover:bg-white/10 transition">
                    Post-Quantum Cryptography Migration
                  </a>
                </div>
              </div>

              {/* News */}
              <a href="#news" className="hover:text-white transition-colors">
                News
              </a>

              {/* Careers */}
              <a href="#careers" className="hover:text-white transition-colors">
                Careers
              </a>

            </nav>
          </div>

          {/* Right Section: Utilities & Actions with Enlarged Details */}
          <div className="flex items-center gap-5 sm:gap-6">

            {/* Investors Link */}
            <a
              href="#investors"
              className="hidden lg:flex items-center gap-1.5 text-[14px] sm:text-[15px] text-white/85 hover:text-white transition-colors"
            >
              <span>Investors</span>
              <ExternalLink className="w-3.5 h-3.5 text-white/60" />
            </a>

            {/* Region / Language Selector */}
            <div className="hidden lg:flex items-center gap-1.5 text-[14px] sm:text-[15px] text-white/85 hover:text-white cursor-pointer">
              <span>IN - EN</span>
              <ChevronDown className="w-4 h-4 text-white/60" />
            </div>

            {/* Signature Kyndryl Lime-Green Consult Button (Enlarged) */}
            <button
              onClick={onConsultClick}
              className="bg-[#24A148] hover:bg-[#1E8E3E] active:scale-95 text-[#0A2612] font-semibold text-xs sm:text-sm px-5 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer whitespace-nowrap"
            >
              Consult an expert
            </button>

            {/* Bookmark Icon Pill */}
            <div className="hidden sm:flex items-center bg-white/15 hover:bg-white/20 transition border border-white/20 rounded-full px-3 py-2 text-xs sm:text-sm text-white gap-2 cursor-pointer shadow-xs">
              <Bookmark className="w-4 h-4 text-white/90" />
              <span className="font-mono text-xs px-1">0</span>
              <div className="w-4.5 h-4.5 rounded-full bg-white/15 flex items-center justify-center">
                <ChevronRight className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Circular Search Button (Enlarged to 40px) */}
            <button
              onClick={onSearchClick}
              className="w-10 h-10 rounded-full bg-white/15 hover:bg-white/25 transition flex items-center justify-center text-white cursor-pointer border border-white/20 shadow-xs"
              title="Search"
            >
              <Search className="w-4.5 h-4.5" />
            </button>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2.5 rounded-xl text-white hover:bg-white/15"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden py-4 border-t border-white/15 flex flex-col gap-3.5 text-base px-2 pb-5">
            <a href="#systems" onClick={() => setMobileMenuOpen(false)} className="px-2 py-1.5 text-white/90 hover:text-[#FF462D]">
              What we do
            </a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="px-2 py-1.5 text-white/90 hover:text-[#FF462D]">
              Who we are
            </a>
            <a href="#insights" onClick={() => setMobileMenuOpen(false)} className="px-2 py-1.5 text-white/90 hover:text-[#FF462D]">
              Insights
            </a>
            <a href="#news" onClick={() => setMobileMenuOpen(false)} className="px-2 py-1.5 text-white/90 hover:text-[#FF462D]">
              News
            </a>
            <a href="#careers" onClick={() => setMobileMenuOpen(false)} className="px-2 py-1.5 text-white/90 hover:text-[#FF462D]">
              Careers
            </a>
            <div className="pt-2.5 border-t border-white/15 flex items-center justify-between px-2 text-sm text-white/70">
              <span>Region: IN - EN</span>
              <a href="#investors" className="hover:text-white">Investors ↗</a>
            </div>
          </div>
        )}

      </header>
    </div>
  );
}
