import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
<<<<<<< Updated upstream
import HomePage from './pages/HomePage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import ScrollToTop from './components/ScrollToTop';
import ContactConsultation from './components/ContactConsultation';
import { X } from 'lucide-react';
=======
import FloatingSectionNav from './components/FloatingSectionNav';
import Hero from './components/Hero';
import AboutUsSection from './components/AboutUsSection';
import Services from './components/Services';
import CustomerStoriesSection from './components/CustomerStoriesSection';
import SolutionsSection from './components/SolutionsSection';
import VideoBentoShowcase from './components/VideoBentoShowcase';  
import ConnectWithUsSection from './components/ConnectWithUsSection';
import ContactConsultation from './components/ContactConsultation';
import Footer from './components/Footer';
import { X } from 'lucide-react';   
>>>>>>> Stashed changes

export default function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const openContact = () => {
    setIsContactModalOpen(true);
  };

  const closeContact = () => { 
    setIsContactModalOpen(false);
  };

  const scrollToSimulator = () => {
    const el = document.getElementById('connect-with-us') || document.getElementById('customer-stories');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <BrowserRouter>
      <ScrollToTop />

      <div className="relative min-h-screen bg-[#ECEAE6] text-[#121212] font-sans selection:bg-[#FF462D] selection:text-white">
        {/* Global Floating Glass Navbar with internal routing */}
        <Navbar
          onConsultClick={openContact}
          onSearchClick={scrollToSimulator}
        />

        {/* Dynamic Multi-Page Router */}
        <Routes>
          {/* Main Landing Page */}
          <Route
            path="/"
            element={
              <HomePage
                onConsultClick={openContact}
                onSimulateClick={scrollToSimulator}
              />
            }
          />

<<<<<<< Updated upstream
          {/* 11 Dedicated Internal Service Detail Pages */}
          <Route
            path="/services/:serviceId"
            element={
              <ServiceDetailPage
                onConsultClick={openContact}
              />
            }
          />

          {/* Fallback routes */}
          <Route path="/services" element={<Navigate to="/#what-we-do" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>

        {/* Global Consultation Modal Dialog */}
        {isContactModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/60 backdrop-blur-sm animate-fade-in">
            <div
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#FAF7F2] rounded-3xl shadow-2xl border border-black/10 p-6 sm:p-10"
              onClick={(e) => e.stopPropagation()}
=======
          {/* Sticky Pill Bar: Floats persistently over sections */}
          <FloatingSectionNav />

          {/* Page 2: "About Us" */}
          <AboutUsSection />

          {/* Page 3: "Services" */}
          <Services />

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
>>>>>>> Stashed changes
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
    </BrowserRouter>
  );
}
