import React from 'react';
import FloatingSectionNav from '../components/FloatingSectionNav';
import Hero from '../components/Hero';
import AboutUsSection from '../components/AboutUsSection';
import Services from '../components/Services';
import CustomerStoriesSection from '../components/CustomerStoriesSection';
import OurProjectsSection from '../components/OurProjectsSection';
import ConnectWithUsSection from '../components/ConnectWithUsSection';
import Footer from '../components/Footer';

export default function HomePage({ onConsultClick, onSimulateClick }) {
  return (
    <>
      {/* 
        MAIN SCROLLABLE PAGE (Z-10):
        Sits on top with solid background and shadow.
        Has bottom margin equal to 50vh so as the user ends scrolling the page,
        it scrolls 50% only, creating a clean 50/50 split reveal:
        - Top 50% of viewport: 'Connect with us' section
        - Bottom 50% of viewport: 'QuBit' sandstone footer
      */}
      <div className="relative z-10 bg-[#FAFAF8] shadow-[0_20px_50px_rgba(0,0,0,0.18)] flex flex-col mb-[50vh]">
        <main className="flex-1">
          {/* Page 1: Hero (70% viewport height with blurry glass navbar transition) */}
          <Hero
            onReportClick={onConsultClick}
            onSimulateClick={onSimulateClick}
          />

          {/* Sticky Pill Bar: Floats persistently over sections */}
          <FloatingSectionNav />

          {/* Page 2: "About Us" */}
          <AboutUsSection />

          {/* Page 3: "Services" */}
          <Services />

          {/* Page 4: "Progress, one customer at a time" with 5-second slide progress */}
          <CustomerStoriesSection onStoryClick={onConsultClick} />

          {/* Page 5: "Our Projects" with 4 Featured Project Cards */}
          <OurProjectsSection onConsultClick={onConsultClick} />

          {/* Last Content Section: 1:1 Match to Screenshot 1 "Connect with us" (Occupies top 50% of viewport when scrolled) */}
          <ConnectWithUsSection onTalkClick={onConsultClick} />
        </main>
      </div>

      {/* 
        DOWN PAGE (FOOTER): 1:1 Match to Screenshot 2
        Fixed at bottom-0 underneath main content, taking exactly 50vh (bottom 50% of screen).
        Revealed seamlessly when current page finishes scrolling!
      */}
      <div className="fixed bottom-0 left-0 w-full h-[50vh] z-0 pointer-events-auto overflow-hidden">
        <Footer
          onContactClick={onConsultClick}
          onSimulateClick={onSimulateClick}
        />
      </div>
    </>
  );
}
