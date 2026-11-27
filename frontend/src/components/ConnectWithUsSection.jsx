import React from 'react';

export default function ConnectWithUsSection({ onTalkClick }) {
  return (
    <section
      id="Contact Us"
      className="relative w-full min-h-[360px] lg:h-[50vh] lg:max-h-[50vh] py-10 lg:py-0 bg-[#FAFAF8] border-t border-black/[0.06] overflow-hidden flex items-center"
    >
      <div id="contact-us" />
      <div id="connect-with-us" />
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8 lg:gap-0">

          {/* Left Column: Copy & Action */}
          <div className="lg:col-span-7 z-10 py-4 sm:py-6 pr-4 sm:pr-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#1A1A1A] mb-3 sm:mb-4">
              Connect with us
            </h2>

            <div className="text-sm sm:text-[15px] text-[#333333] font-normal leading-relaxed mb-6 space-y-1">
              <p>
                Let's create something that moves your business forward.
              </p>
              <p>
                Whether you have a business challenge, an innovative idea, or an opportunity to collaborate, connect with us and discover what we can achieve together.{' '}
                <b style={{ color: '#e62c2cff', fontWeight: '700' }}>QuBit</b>, or just want to get in touch?
              </p>
            </div>

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

          {/* Right Column: QuBit Logo */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <img
              src="/images/qubit-logo.png"
              alt="QuBit — Track Your Progress"
              className="w-52 sm:w-64 lg:w-80 xl:w-[340px] h-auto object-contain select-none"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
