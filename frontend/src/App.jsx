import React, { useState } from 'react';
import Navbar from './components/Navbar';
import FloatingSectionNav from './components/FloatingSectionNav';
import Hero from './components/Hero';
import NewsTicker from './components/NewsTicker';
import WhoWeAreSection from './components/WhoWeAreSection';
import IndustryRecognition from './components/IndustryRecognition';
import CustomerStoriesSection from './components/CustomerStoriesSection';
import SolutionsSection from './components/SolutionsSection';
import VideoBentoShowcase from './components/VideoBentoShowcase';
import FAQSection from './components/FAQSection';
import ConnectWithUsSection from './components/ConnectWithUsSection';
import ContactConsultation from './components/ContactConsultation';
import Footer from './components/Footer';
import { X } from 'lucide-react';

export default function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const openContact = () => {
    setIsContactModalOpen(true);
  };

  const closeContact = () => {
    setIsContactModalOpen(false);
  };

  const scrollToSimulator = () => {
    const el = document.getElementById('simulator') || document.getElementById('our-expertise');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#ECEAE6] text-[#121212] font-sans selection:bg-[#FF462D] selection:text-white">
      {/* 
        MAIN SCROLLABLE PAGE (Z-10):
        Sits on top with solid background and shadow.
        Has bottom margin equal to 50vh so as the user ends scrolling the page,
        it scrolls 50% only, creating a clean 50/50 split reveal:
        - Top 50% of viewport: 'Connect with us' section
        - Bottom 50% of viewport: 'QuBit' sandstone footer
      */}
      <div className="relative z-10 bg-[#FAFAF8] shadow-[0_20px_50px_rgba(0,0,0,0.18)] flex flex-col mb-[50vh]">
        {/* Floating curved island navbar */}
        <Navbar
          onConsultClick={openContact}
          onSearchClick={scrollToSimulator}
        />

        {/* Main Content Sections */}
        <main className="flex-1">
          {/* Page 1: Hero (70% viewport height with blurry glass navbar transition) */}
          <Hero
            onReportClick={openContact}
            onSimulateClick={scrollToSimulator}
          />

          {/* 3-Column News / Events / Whitepaper Strip */}
          <NewsTicker />

          {/* Sticky Pill Bar: Floats persistently over sections */}
          <FloatingSectionNav />

          {/* Page 2: "Who we are" */}
          <WhoWeAreSection />

          {/* Page 3: "Industry recognition. Customer trust." with green sliding accordion */}
          <IndustryRecognition />

          {/* Page 4: "Progress, one customer at a time" with 5-second slide progress */}
          <CustomerStoriesSection onStoryClick={openContact} />

          {/* Page 5: "How we help" — Enterprise Solutions */}
          {/*  <SolutionsSection onContactClick={openContact} /> */}

          {/* Page 6: "Our expertise" — Video Bento Showcase */}
          {/*  <VideoBentoShowcase /> */}

          {/* Page 7: "FAQ" — Knowledge Base & Questions */}
          {/*  <FAQSection onContactClick={openContact} /> */}

          {/* Last Content Section: 1:1 Match to Screenshot 1 "Connect with us" (Occupies top 50% of viewport when scrolled) */}
          <ConnectWithUsSection onTalkClick={openContact} />
        </main>
      </div>

      {/* 
        DOWN PAGE (FOOTER): 1:1 Match to Screenshot 2
        Fixed at bottom-0 underneath main content, taking exactly 50vh (bottom 50% of screen).
        Revealed seamlessly when current page finishes scrolling!
      */}
      <div className="fixed bottom-0 left-0 w-full h-[50vh] z-0 pointer-events-auto overflow-hidden">
        <Footer
          onContactClick={openContact}
          onSimulateClick={scrollToSimulator}
        />
      </div>

      {/* Consultation Modal Dialog (Triggered by "Let's talk >" or "Consult an expert") */}
      {isContactModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#FAF7F2] rounded-3xl shadow-2xl border border-black/10 p-6 sm:p-10"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeContact}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-black/5 hover:bg-black/10 flex items-center justify-center text-[#121212] transition-colors cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <ContactConsultation />
          </div>
        </div>
      )}
    </div>
  );
}
