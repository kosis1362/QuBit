import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { ChevronDown, ChevronRight, Bookmark, Search, Menu, X, ArrowUpRight } from 'lucide-react';
import { WHAT_WE_DO_SERVICES } from '../data/servicesData';

export default function Navbar({ onConsultClick, onSearchClick }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileWhatWeDoOpen, setMobileWhatWeDoOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

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

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileWhatWeDoOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  const toggleDropdown = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const handleSectionNav = (hash) => {
    if (location.pathname !== '/') {
      navigate('/' + hash);
    } else {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
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
      <header className="pointer-events-auto w-full max-w-[98%] sm:max-w-[97%] lg:max-w-[98%] xl:max-w-[1720px] mx-auto bg-black/40 backdrop-blur-xl sm:backdrop-blur-2xl border border-white/20 rounded-[24px] sm:rounded-full px-5 sm:px-8 shadow-2xl text-white transition-all">
        <div className="flex items-center justify-between h-[70px] sm:h-[76px]">

          {/* Left: Brand + Navigation Items */}
          <div className="flex items-center gap-8 lg:gap-12">
            {/* Kyndryl-style QuBit Logo */}
            <Link to="/" className="flex items-center gap-1 group">
              <span className="text-3xl sm:text-[34px] lg:text-[36px] font-medium tracking-tight text-[#FF462D] font-sans transition-transform duration-200 group-hover:scale-[1.02]">
                QuBit
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center gap-8 text-[15px] sm:text-base text-white/95 font-normal tracking-wide">

              {/* What we do: 11 Dedicated Internal Service Pages */}
              <div className="relative group">
                <button
                  type="button"
                  onClick={() => toggleDropdown('what')}
                  className="flex items-center gap-2 hover:text-[#FF462D] py-2 cursor-pointer transition-colors"
                >
<<<<<<< Updated upstream
                  <span>What we do</span>
                  <ChevronDown className="w-4 h-4 text-white/70 transition-transform duration-200 group-hover:rotate-180" />
=======
                  <span>Services</span>
                  <ChevronDown className="w-4 h-4 text-white/70 transition-transform group-hover:rotate-180" />
>>>>>>> Stashed changes
                </button>

                {/* Mega Menu Dropdown */}
                <div className="absolute top-full left-0 mt-3.5 w-[960px] max-w-[92vw] bg-[#101010] border border-white/20 rounded-3xl p-6 shadow-[0_30px_90px_rgba(0,0,0,0.9)] opacity-0 translate-y-3 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 z-50">
                  <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-white/10">
                    <div className="flex items-center gap-2.5">
                      <span className="text-[11px] font-mono uppercase tracking-widest text-[#FF462D] font-semibold">// WHAT WE DO</span>
                      <div className="h-1 w-1 rounded-full bg-white/40" />
                      <span className="text-xs text-white/60">Dedicated Internal Service Practices</span>
                    </div>
                    <Link
                      to="/services/web-design"
                      className="text-xs text-[#FF462D] hover:text-[#ff6b57] transition font-medium flex items-center gap-1 cursor-pointer"
                    >
                      <span>Explore Services</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5 max-h-[62vh] overflow-y-auto pr-1">
                    {WHAT_WE_DO_SERVICES.map((item) => {
                      const IconComponent = item.icon;
                      return (
                        <Link
                          key={item.id}
                          to={`/services/${item.id}`}
                          className="flex items-start gap-3 p-3 rounded-2xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.06] hover:border-[#FF462D]/40 transition-all duration-200 group/item cursor-pointer"
                        >
                          <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 group-hover/item:bg-[#FF462D]/15 group-hover/item:border-[#FF462D]/40 flex items-center justify-center text-white/80 group-hover/item:text-[#FF462D] transition-colors shrink-0 mt-0.5">
                            <IconComponent className="w-4.5 h-4.5" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-1 text-[13px] font-medium text-white group-hover/item:text-[#FF462D] transition-colors leading-snug">
                              <span className="truncate">{item.title}</span>
                              <ChevronRight className="w-3.5 h-3.5 opacity-40 group-hover/item:opacity-90 group-hover/item:translate-x-0.5 transition-all" />
                            </div>
                            <p className="text-[11px] text-white/50 line-clamp-1 mt-0.5 font-normal">
                              {item.shortDesc}
                            </p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Who we are */}
              <div className="relative group">
                <button
                  type="button"
                  onClick={() => toggleDropdown('who')}
                  className="flex items-center gap-2 hover:text-[#FF462D] py-2 cursor-pointer transition-colors"
                >
<<<<<<< Updated upstream
                  <span>Who we are</span>
                  <ChevronDown className="w-4 h-4 text-white/70 transition-transform duration-200 group-hover:rotate-180" />
=======
                  <span>About US</span>
                  <ChevronDown className="w-4 h-4 text-white/70 transition-transform group-hover:rotate-180" />
>>>>>>> Stashed changes
                </button>
                {/* Dropdown Menu */}
                <div className="absolute top-full left-0 mt-3.5 w-72 bg-[#141414]/98 backdrop-blur-xl border border-white/15 rounded-2xl p-3.5 shadow-2xl opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200">
                  <button
                    type="button"
                    onClick={() => handleSectionNav('#who-we-are')}
                    className="w-full text-left block px-3.5 py-2.5 rounded-xl text-sm text-white/85 hover:text-white hover:bg-white/10 transition cursor-pointer"
                  >
                    Mission & Continuous Innovation
                  </button>
                  <button
                    type="button"
                    onClick={() => handleSectionNav('#who-we-are-recognition')}
                    className="w-full text-left block px-3.5 py-2.5 rounded-xl text-sm text-white/85 hover:text-white hover:bg-white/10 transition cursor-pointer"
                  >
                    Industry & Analyst Recognition
                  </button>
                  <button
                    type="button"
                    onClick={() => handleSectionNav('#customer-stories')}
                    className="w-full text-left block px-3.5 py-2.5 rounded-xl text-sm text-white/85 hover:text-white hover:bg-white/10 transition cursor-pointer"
                  >
                    Enterprise Customer Stories
                  </button>
                </div>
              </div>

<<<<<<< Updated upstream
              {/* Customer Stories */}
              <button
                type="button"
                onClick={() => handleSectionNav('#customer-stories')}
                className="hover:text-[#FF462D] py-2 transition-colors cursor-pointer"
              >
                Customer Stories
              </button>

              {/* News */}
              <button
                type="button"
                onClick={() => handleSectionNav('#news')}
                className="hover:text-[#FF462D] py-2 transition-colors cursor-pointer"
              >
                News
              </button>

              {/* Careers */}
              <button
                type="button"
                onClick={() => handleSectionNav('#connect-with-us')}
                className="hover:text-[#FF462D] py-2 transition-colors cursor-pointer"
              >
                Careers
              </button>
=======
              {/* Insights */}
              <div className="relative group">
                <button
                  onClick={() => toggleDropdown('insights')}
                  className="flex items-center gap-2 hover:text-white py-2 cursor-pointer transition-colors"
                >
                  <span>Products</span>
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

         
>>>>>>> Stashed changes

            </nav>
          </div>

          {/* Right: Global Actions & CTAs */}
          <div className="flex items-center gap-3.5 sm:gap-4.5">

<<<<<<< Updated upstream
            {/* Region / Language */}
            <div className="relative hidden md:block">
              <button
                type="button"
                className="flex items-center gap-1.5 text-xs sm:text-sm text-white/80 hover:text-white font-medium py-1.5 px-3 rounded-full hover:bg-white/10 transition cursor-pointer"
              >
                <span>IN - EN</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-70" />
              </button>
            </div>

            {/* Kyndryl Vibrant Emerald Green Pill Button */}
            <button
              type="button"
              onClick={onConsultClick}
              className="inline-flex items-center justify-center px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-[#1FA452] hover:bg-[#1B904B] text-white text-xs sm:text-sm font-semibold tracking-wide transition-all duration-200 cursor-pointer shadow-lg active:scale-[0.98]"
            >
              Consult an expert
            </button>
=======
            {/* Investors Link */}
            <a
              href="#investors"
              className="hidden lg:flex items-center gap-1.5 text-[14px] sm:text-[15px] text-white/85 hover:text-white transition-colors"
            >
              <span>Contact Us</span>
              <ExternalLink className="w-3.5 h-3.5 text-white/60" />
            </a>

            

         
>>>>>>> Stashed changes

            {/* Bookmark with Badge */}
            <button
              type="button"
              className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-full bg-white/15 hover:bg-white/25 transition text-white cursor-pointer border border-white/20 shadow-xs"
              title="Saved items"
            >
              <Bookmark className="w-4 h-4" />
              <span className="text-xs font-semibold">0</span>
              <ChevronRight className="w-3 h-3 opacity-60" />
            </button>

            {/* Search Glass Button */}
            <button
              type="button"
              onClick={onSearchClick}
              className="w-10 h-10 rounded-full bg-white/15 hover:bg-white/25 transition flex items-center justify-center text-white cursor-pointer border border-white/20 shadow-xs"
              title="Search"
            >
              <Search className="w-4.5 h-4.5" />
            </button>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2.5 rounded-xl text-white hover:bg-white/15 cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
<<<<<<< Updated upstream
          <div className="xl:hidden py-4 border-t border-white/15 flex flex-col gap-3 text-base px-2 pb-5">
            {/* What we do mobile dropdown */}
            <div className="border-b border-white/10 pb-2">
              <button
                type="button"
                onClick={() => setMobileWhatWeDoOpen(!mobileWhatWeDoOpen)}
                className="w-full flex items-center justify-between px-2 py-2 text-white/95 font-medium cursor-pointer"
              >
                <span>What we do (11 Services)</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileWhatWeDoOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileWhatWeDoOpen && (
                <div className="grid grid-cols-1 gap-1.5 pt-2 pl-2 max-h-[45vh] overflow-y-auto">
                  {WHAT_WE_DO_SERVICES.map((item) => {
                    const IconComponent = item.icon;
                    return (
                      <Link
                        key={item.id}
                        to={`/services/${item.id}`}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center gap-2.5 px-2.5 py-2 rounded-xl bg-white/[0.04] text-xs text-white/80 hover:text-white"
                      >
                        <IconComponent className="w-4 h-4 text-[#FF462D]" />
                        <span className="truncate">{item.title}</span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            <button
              type="button"
              onClick={() => { setMobileMenuOpen(false); handleSectionNav('#who-we-are'); }}
              className="text-left px-2 py-1.5 text-white/90 hover:text-[#FF462D]"
            >
              Who we are
            </button>
            <button
              type="button"
              onClick={() => { setMobileMenuOpen(false); handleSectionNav('#customer-stories'); }}
              className="text-left px-2 py-1.5 text-white/90 hover:text-[#FF462D]"
            >
              Customer Stories
            </button>
            <button
              type="button"
              onClick={() => { setMobileMenuOpen(false); handleSectionNav('#news'); }}
              className="text-left px-2 py-1.5 text-white/90 hover:text-[#FF462D]"
            >
              News
            </button>
            <button
              type="button"
              onClick={() => { setMobileMenuOpen(false); handleSectionNav('#connect-with-us'); }}
              className="text-left px-2 py-1.5 text-white/90 hover:text-[#FF462D]"
            >
              Careers
            </button>
            <div className="pt-2.5 border-t border-white/15 flex items-center justify-between px-2 text-sm text-white/70">
              <span>Region: IN - EN</span>
              <span className="text-white/50">QuBit Inc.</span>
            </div>
=======
          <div className="xl:hidden py-4 border-t border-white/15 flex flex-col gap-3.5 text-base px-2 pb-5">
            <a href="#systems" onClick={() => setMobileMenuOpen(false)} className="px-2 py-1.5 text-white/90 hover:text-[#FF462D]">
              About Us
            </a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="px-2 py-1.5 text-white/90 hover:text-[#FF462D]">
              Services
            </a>
            <a href="#insights" onClick={() => setMobileMenuOpen(false)} className="px-2 py-1.5 text-white/90 hover:text-[#FF462D]">
              Products
            </a>
            <a href="#news" onClick={() => setMobileMenuOpen(false)} className="px-2 py-1.5 text-white/90 hover:text-[#FF462D]">
              Contact Us
           
            </a>
>>>>>>> Stashed changes
          </div>
        )}

      </header>
    </div>
  );
}
