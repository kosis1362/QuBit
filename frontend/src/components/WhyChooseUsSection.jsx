import React, { useState } from 'react';

const WHY_CHOOSE_US_DATA = [
  {
    title: 'Experienced Team',
    desc: "QuBit's experienced engineering team ensures your project specifications are fulfilled with precision and industry-best standards."
  },
  {
    title: 'Latest Technology',
    desc: 'We leverage modern frameworks and cloud-native architectures to deliver high-performance, future-ready solutions.'
  },
  {
    title: 'Innovative Ideas',
    desc: 'Strategic thinking and technical innovation are at our core—giving your product a clear competitive advantage.'
  },
  {
    title: 'Great Quality',
    desc: 'Our QA engineers rigorously test every workflow before deployment to ensure reliability and zero-defect delivery.'
  },
  {
    title: 'Dedicated Support',
    desc: 'Our commitment continues beyond launch with proactive communication, ongoing maintenance, and optimization.'
  }
];

export default function WhyChooseUsSection() {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <section id="why-choose-us" className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-black/[0.06]">
      <div className="w-full px-6 sm:px-10 lg:px-16">

        {/* Top-Left Minimalist Header */}
        <div className="mb-14 sm:mb-16">
          <span className="text-xs font-medium text-[#8E8E93] tracking-wide block">

          </span>
          <div className="w-6 h-[1.5px] bg-[#1A1A1A] mt-2.5 mb-6" />
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight text-[#1A1A1A] leading-[1.08]">
            Why
            <br />
            choose us
          </h2>
        </div>

        {/* 5-Column Cropped Numbered Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {WHY_CHOOSE_US_DATA.map((item, index) => {
            const isActive = activeIndex === index;
            return (
              <div
                key={index}
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => setActiveIndex(index)}
                className="group text-center cursor-pointer select-none"
              >
                {/* Cropped Oversized Number */}
                <div className="h-[46px] sm:h-[52px] overflow-hidden flex items-start justify-center mb-4">
                  <span
                    className={`text-6xl sm:text-[68px] font-black tracking-tighter leading-[0.82] transition-colors duration-200 ${isActive
                        ? 'text-[#2F5BEA]'
                        : 'text-[#D4D4D4] group-hover:text-[#9A9A9A]'
                      }`}
                  >
                    0{index + 1}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-[#1A1A1A] tracking-tight mb-2.5">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-[13px] text-[#777777] leading-relaxed max-w-[240px] mx-auto">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
