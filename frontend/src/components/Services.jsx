import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(1); // Default to 02 matching Kyndryl reference image

  const panels = [
    {
      id: "01",
      badge: "01",
      headline: "Software Development",
      bgHex: "#1FA452",
      logo: (
        <div className="flex items-center gap-2 text-white font-sans tracking-tight">
          <span className="text-2xl font-bold tracking-tighter">QuBit</span>
          <span className="text-xs font-light tracking-wider uppercase ml-1 opacity-90"></span>
        </div>
      )
    },
    {
      id: "02",
      badge: "02",
      headline: "AI Automation & Data Analytics",
      bgHex: "#1B904B",
      logo: (
        <div className="text-white font-sans flex items-baseline">
          <span className="text-3xl sm:text-4xl font-bold tracking-tight">QuBit</span>
          <span className="text-xs align-super ml-0.5 font-bold">®</span>
        </div>
      )
    },
    {
      id: "03",
      badge: "03",
      headline: "Website Development",
      analyst: "IDC MarketScape",
      bgHex: "#187E3F",
      logo: (
        <div className="text-white font-sans flex items-baseline gap-2">
          <span className="text-2xl sm:text-3xl font-black tracking-widest">QuBit</span>
          <span className="text-xs font-medium uppercase opacity-90 tracking-wider"></span>
        </div>
      )
    },
    {
      id: "04",
      badge: "04",
      headline: "Graphic Design & Branding",
      analyst: "Forrester",
      bgHex: "#126230",
      logo: (
        <div className="text-white font-serif tracking-[0.2em]">
          <span className="text-xl sm:text-2xl font-bold">QuBit</span>
        </div>
      )
    }
  ];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? panels.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === panels.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="Services" className="w-full bg-[#FBF9F5] py-8 sm:py-12 lg:py-16">
      <div id="services" />
      <div id="who-we-are-recognition" />
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10">

        {/* Main Card Container (Rounded Card matching Kyndryl 1:1 reference image) */}
        <div className="rounded-[24px] sm:rounded-[32px] lg:rounded-[36px] overflow-hidden bg-[#EFF2F2] flex flex-col lg:flex-row items-stretch min-h-[480px] sm:min-h-[500px] lg:min-h-[520px] shadow-sm border border-black/[0.04]">

          {/* Left Column (Headline + Navigation Chevrons) */}
          <div className="lg:w-[32%] xl:w-[30%] p-8 sm:p-10 lg:p-12 xl:p-14 flex flex-col justify-between shrink-0 bg-[#EFF2F2] self-stretch z-10">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-normal tracking-[-0.03em] leading-[1.08] text-[#121212]">
                Services
                <br />
                Provided
                <br />
                by <span className="text-[#FF462D]">QuBit</span>
              </h2>
            </div>

            {/* Left / Right Chevron Navigation Controls */}
            <div className="pt-8 sm:pt-10 flex items-center gap-4 text-[#121212]">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-black/10 active:scale-95 transition-all cursor-pointer text-[#121212]"
                aria-label="Previous Service"
              >
                <ChevronLeft className="w-5 h-5 text-[#121212]" />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-black/10 active:scale-95 transition-all cursor-pointer text-[#121212]"
                aria-label="Next Service"
              >
                <ChevronRight className="w-5 h-5 text-[#121212]" />
              </button>
            </div>
          </div>

          {/* Right Column: Full-Height Interactive Sliding Accordion (01, 02, 03, 04) */}
          {/* Note: self-stretch without conflicting height percentages guarantees 100% full vertical height */}
          <div className="lg:w-[68%] xl:w-[70%] flex flex-row items-stretch self-stretch min-h-[380px] sm:min-h-[440px] overflow-hidden">
            {panels.map((panel, idx) => {
              const isActive = activeIndex === idx;

              return (
                <div
                  key={panel.id}
                  onClick={() => setActiveIndex(idx)}
                  style={{
                    backgroundColor: panel.bgHex,
                    flex: isActive ? 6 : 1,
                    transition: 'flex 600ms cubic-bezier(0.25, 1, 0.5, 1)'
                  }}
                  className="relative cursor-pointer self-stretch min-w-0 flex flex-col justify-between select-none overflow-hidden group"
                >
                  {/* Top Badge: Circle with number 01, 02, 03, 04 */}
                  <div className="pt-6 sm:pt-8 px-4 sm:px-8 w-full flex items-center justify-start shrink-0 z-10">
                    <div
                      className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-mono text-xs sm:text-sm font-semibold transition-all duration-300 shrink-0 ${isActive
                        ? 'bg-white/25 text-white shadow-xs font-bold'
                        : 'bg-white/15 text-white/90 group-hover:bg-white/25 mx-auto lg:mx-0'
                        }`}
                    >
                      {panel.badge}
                    </div>
                  </div>

                  {/* Active Content: Fills full height, fades in cleanly, never glitches */}
                  <div
                    className={`absolute inset-0 pt-20 sm:pt-24 px-6 sm:px-10 pb-8 sm:pb-10 flex flex-col justify-between transition-opacity duration-300 ease-out ${isActive ? 'opacity-100 delay-150 pointer-events-auto' : 'opacity-0 pointer-events-none'
                      }`}
                    style={{ minWidth: '340px', maxWidth: '640px' }}
                  >
                    {/* Headline text */}
                    <div className="my-auto py-2">
                      <h3 className="text-xl sm:text-2xl lg:text-[30px] xl:text-[34px] font-normal text-white leading-[1.24] tracking-tight">
                        {panel.headline}
                      </h3>
                    </div>

                    {/* Bottom Logo matching Kyndryl Gartner/analyst placement */}
                    <div className="pt-4">
                      {panel.logo}
                    </div>
                  </div>

                  {/* Spacer ensuring full vertical height stretch */}
                  <div className="flex-1 w-full" />

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
