import React, { useState, useEffect, useRef } from 'react';

export default function FloatingSectionNav() {
  const [activeSection, setActiveSection] = useState('who-we-are');
  const [isStuck, setIsStuck] = useState(false);
  const navRef = useRef(null);

  const sections = [
    { id: 'who-we-are', label: 'Who we are' },
    { id: 'customer-stories', label: 'Customer stories' },
    { id: 'connect-with-us', label: 'Connect with us' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // 1. Detect if the sticky bar is currently stuck near top of viewport
      if (navRef.current) {
        const rect = navRef.current.getBoundingClientRect();
        setIsStuck(rect.top <= 28);
      }

      // 2. Determine which section is currently in view (Scroll-Spy)
      const scrollPosition = window.scrollY + 180; // Lookahead offset

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = sections[i];
        const el = document.getElementById(sec.id);
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY;
          if (scrollPosition >= top) {
            setActiveSection(sec.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      // Offset for floating section nav pill bar (~60px) + margin
      const yOffset = -90;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <div
      id="global-floating-nav"
      ref={navRef}
      className="sticky top-4 sm:top-5 z-40 w-full flex justify-center py-2 pointer-events-none transition-all duration-300"
    >
      <div
        className={`pointer-events-auto inline-flex items-center gap-1 sm:gap-2 p-1.5 rounded-full transition-all duration-300 max-w-[95vw] overflow-x-auto no-scrollbar ${
          isStuck
            ? 'bg-white/95 backdrop-blur-md border border-black/[0.1] shadow-lg'
            : 'bg-[#F4F0E8]/90 backdrop-blur-xs border border-black/[0.06] shadow-sm'
        }`}
      >
        {sections.map((sec) => {
          const isActive = activeSection === sec.id;
          return (
            <button
              key={sec.id}
              onClick={() => scrollToSection(sec.id)}
              className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 whitespace-nowrap cursor-pointer ${
                isActive
                  ? 'bg-[#121212] text-white shadow-sm'
                  : 'text-[#555555] hover:text-[#121212] hover:bg-black/[0.04]'
              }`}
            >
              {sec.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
