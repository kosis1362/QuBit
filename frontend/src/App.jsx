import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import CustomerStoryDetailPage from './pages/CustomerStoryDetailPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import ScrollToTop from './components/ScrollToTop';
import ContactConsultation, { getConsultationSent } from './components/ContactConsultation';
import { X } from 'lucide-react';

export default function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(() => getConsultationSent());

  useEffect(() => {
    const syncModalOnReturn = () => {
      if (getConsultationSent()) {
        setIsContactModalOpen(true);
      }
    };
    window.addEventListener('pageshow', syncModalOnReturn);
    return () => window.removeEventListener('pageshow', syncModalOnReturn);
  }, []);

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

          {/* 11 Dedicated Internal Service Detail Pages */}
          <Route
            path="/services/:serviceId"
            element={
              <ServiceDetailPage
                onConsultClick={openContact}
              />
            }
          />

          {/* Customer Stories Case Study Detail Page */}
          <Route
            path="/customer-stories/:storyId"
            element={
              <CustomerStoryDetailPage
                onConsultClick={openContact}
              />
            }
          />
          <Route
            path="/customer-stories"
            element={
              <CustomerStoryDetailPage
                onConsultClick={openContact}
              />
            }
          />

          {/* Dedicated Production Project Detail Page */}
          <Route
            path="/projects/:projectId"
            element={
              <ProjectDetailPage
                onConsultClick={openContact}
              />
            }
          />
          <Route
            path="/projects"
            element={<Navigate to="/#our-projects" replace />}
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