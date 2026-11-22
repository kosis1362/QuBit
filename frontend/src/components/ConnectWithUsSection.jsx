import React from 'react';
import TrellisPattern from './TrellisPattern';

export default function ConnectWithUsSection({ onTalkClick }) {
  return (
    <section
      id="Contact Us"
      className="relative w-full h-[50vh] min-h-[360px] max-h-[50vh] bg-[#FAFAF8] border-t border-black/[0.06] overflow-hidden flex items-center"
    >
      <div id="contact-us" />
      <div id="connect-with-us" />
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center">

          {/* Left Column: Copy & Action (exact 1:1 match to Screenshot 1) */}
          <div className="lg:col-span-6 z-10 py-4 sm:py-6 pr-4 sm:pr-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#1A1A1A] mb-3 sm:mb-4">
              Connect with us
            </h2>

            <p className="text-sm sm:text-base lg:text-lg text-[#333333] font-normal leading-relaxed mb-6 max-w-[460px]">
              Let's create something that moves your business forward.

Whether you have a business challenge, an innovative idea, or an opportunity to collaborate, connect with us and discover what we can achieve together. <b style={{ color: '#e62c2cff', fontWeight: '700' }}> QuBit</b>, or just want to get in touch?
            </p>

            <div>
              <button
                type="button"
                onClick={onTalkClick}
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-2 sm:py-2.5 rounded-full border border-[#2B2B2B] text-xs sm:text-sm font-medium text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-all duration-200 cursor-pointer group shadow-xs active:scale-[0.98]"
              >
                <span>Let's talk</span>
                <span className="font-light transition-transform duration-200 group-hover:translate-x-1">&gt;</span>
              </button>
            </div>
          </div>

          {/* Spacer for desktop 12-col layout */}
          <div className="hidden lg:block lg:col-span-6" />

        </div>
      </div>

      {/* Right-aligned Full-Bleed Architectural Red Trellis Pattern (1:1 with Screenshot 1) */}
      <div className="hidden lg:block absolute top-0 bottom-0 right-0 w-[50%] pointer-events-none overflow-hidden">
        <TrellisPattern
          preserveAspectRatio="xMinYMid slice"
          className="w-full h-full"
        />
      </div>

      {/* Responsive Pattern for Tablet / Mobile */}
      <div className="block lg:hidden absolute right-0 bottom-0 w-1/2 h-full opacity-25 pointer-events-none overflow-hidden">
        <TrellisPattern
          preserveAspectRatio="xMinYMid slice"
          className="w-full h-full"
        />
      </div>
    </section>
  );
}
