import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowRight,
  Plus,
  Minus,
  Sparkles,
  Layers,
  Code2
} from 'lucide-react';
import { WHAT_WE_DO_SERVICES } from '../data/servicesData';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import ConnectWithUsSection from '../components/ConnectWithUsSection';
import Footer from '../components/Footer';

export default function ServiceDetailPage({ onConsultClick }) {
  const { serviceId } = useParams();
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  // Find matching service or fallback to first
  const service = WHAT_WE_DO_SERVICES.find((s) => s.id === serviceId) || WHAT_WE_DO_SERVICES[0];

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? -1 : index);
  };

  return (
    <div className="relative min-h-screen bg-[#FAFAF8] text-[#121212] flex flex-col font-sans selection:bg-[#FF462D] selection:text-white">

      {/* 
        ========================================================================
        1. HERO BANNER: 1:1 Match to Reference Example (media_1795199984293_beec6a2f.jpg)
        - Full-bleed photographic background with dark cinematic overlays
        - Breadcrumb: Home / Services / [Service Title]
        - Eyebrow: 'SERVICES' with red accent bar
        - Headline: Concise, large grotesque font
        - Sub-heading: Short, punchy single sentence value proposition ('keep content small')
        - Action CTAs: 'Get In Touch' and 'Explore Features'
        - Bottom Strip: 3-column highlights separated by vertical borders
        ========================================================================
      */}
      <section className="relative w-full min-h-[580px] sm:min-h-[640px] lg:min-h-[700px] overflow-hidden bg-[#101314] text-white flex flex-col justify-between border-b border-black/[0.08] pt-28 sm:pt-32 lg:pt-36">
        
        {/* Full-Bleed Background Image */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src={service.heroImage || '/images/corporate_web_design_hero.jpg'}
            alt={service.title}
            className="w-full h-full object-cover object-center transform scale-102"
          />
          {/* Layered Cinematic Overlays matching the Kyndryl reference image */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/92 via-black/75 to-black/35 z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/45 z-10" />
          <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-[#FF462D]/15 rounded-full blur-[140px] pointer-events-none z-10" />
        </div>

        {/* Hero Content (Breadcrumb, Category, Title, Subtitle, CTA) */}
        <div className="relative z-20 w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 flex-1 flex flex-col justify-center py-6 sm:py-8">
          <div className="max-w-2xl lg:max-w-3xl">
            {/* Breadcrumb matching reference image */}
            <nav aria-label="Breadcrumb" className="text-xs sm:text-[13px] text-white/70 mb-6 sm:mb-8 font-normal flex items-center gap-2">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span className="text-white/40">/</span>
              <span className="text-white/70">Services</span>
              <span className="text-white/40">/</span>
              <span className="text-white font-medium">{service.title}</span>
            </nav>

            {/* Category Tag with Red Accent Line matching reference image */}
            <div className="mb-4 sm:mb-5">
              <span className="text-xs font-mono uppercase tracking-[0.22em] text-white/90 font-medium block">
                SERVICES
              </span>
              <div className="w-6 h-[2px] bg-[#FF462D] mt-1.5" />
            </div>

            {/* Clean Grotesque Headline matching reference image */}
            <h1 className="text-4xl sm:text-5xl lg:text-[58px] xl:text-[66px] font-medium tracking-tight text-white mb-4 sm:mb-5 leading-[1.08]">
              {service.heroTitle || service.title}
            </h1>

            {/* Short, Punchy Subtitle ('keep the content small') */}
            <p className="text-base sm:text-lg lg:text-[18px] text-white/90 font-normal leading-relaxed max-w-xl mb-8">
              {service.heroSubtitle}
            </p>

            {/* Action CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-8 sm:mb-10">
              <button
                type="button"
                onClick={onConsultClick}
                className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-lg bg-[#FF462D] text-white text-sm font-semibold tracking-wide hover:bg-[#E0351E] transition-all duration-200 cursor-pointer shadow-md hover:shadow-lg active:scale-[0.98]"
              >
                <span>Get In Touch</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#key-features"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white border border-white/25 text-sm font-semibold transition-all backdrop-blur-sm cursor-pointer"
              >
                Explore Features
              </a>
            </div>
          </div>
        </div>

        {/* Bottom 3-Column Highlight Strip matching reference image */}
        <div className="relative z-20 w-full border-t border-white/20 bg-black/50 backdrop-blur-md">
          <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/20">
              {service.heroHighlights?.map((item, idx) => (
                <div
                  key={idx}
                  className="py-4 sm:py-5 md:px-6 first:pl-0 last:pr-0 flex items-center text-sm sm:text-[15px] font-normal text-white/90 leading-snug"
                >
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        2. KEY FEATURES: 1:1 Match to User Image 2 Style
        Background: Light mint/cyan (#EDFBF9)
        Header: Centered 'Key Features of [Service Name]'
        Grid: 6 white rounded cards with teal icons, uppercase titles & descriptions
        ========================================================================
      */}
      <section id="key-features" className="py-20 lg:py-28 bg-[#EDFBF9] border-b border-black/[0.06]">
        <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">

          {/* Centered Section Title matching Image 2 */}
          <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#121212]">
              Key Features of {service.title}
            </h2>
            <div className="w-12 h-1 bg-[#00897B] mx-auto mt-4 rounded-full" />
          </div>

          {/* 6-Card Grid matching Image 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {service.features.map((feat, index) => {
              const Icon = feat.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-7 sm:p-8 shadow-sm border border-black/[0.05] hover:shadow-md hover:border-[#00897B]/30 transition-all duration-200 flex flex-col justify-start group"
                >
                  {/* Teal Icon at top left */}
                  <div className="w-12 h-12 rounded-xl bg-[#E0F7F4] text-[#00897B] flex items-center justify-center mb-5 group-hover:bg-[#00897B] group-hover:text-white transition-colors duration-200">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Uppercase Bold Title */}
                  <h3 className="text-sm sm:text-base font-bold text-[#121212] tracking-wide uppercase mb-3 leading-snug">
                    {feat.title}
                  </h3>

                  {/* Concise Description */}
                  <p className="text-sm text-[#555555] leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 
        ========================================================================
        3. WHY CHOOSE US?: 1:1 Match to User Image 3 Style
        Clean white background, 6 cards with teal icons highlighting QuBit values
        ========================================================================
      */}
      <WhyChooseUsSection />

      {/* 
        ========================================================================
        4. Agile Execution Lifecycle & Enterprise Tech Stack
        ========================================================================
      */}
      <section className="py-20 lg:py-28 bg-[#FAFAF8] border-b border-black/[0.06]">
        <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="max-w-2xl mb-12">
            <span className="text-[#00897B] font-mono text-xs font-semibold tracking-eyebrow uppercase mb-2 block">

            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#121212] mb-3">
              How we execute and deliver
            </h2>
            <p className="text-sm sm:text-base text-[#555555] leading-relaxed">
              Our proven agile lifecycle ensures complete transparency, rigorous quality gates, and on-time delivery.
            </p>
          </div>

          {/* 5-Step Agile Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 lg:gap-6 mb-16">
            {service.process.map((step) => (
              <div
                key={step.step}
                className="p-6 rounded-2xl bg-white border border-black/[0.06] shadow-xs flex flex-col justify-between"
              >
                <div>
                  <span className="text-2xl font-mono font-bold text-[#00897B] block mb-3">
                    {step.step}
                  </span>
                  <h3 className="text-base font-semibold text-[#121212] mb-2 leading-snug">
                    {step.title}
                  </h3>
                </div>
                <p className="text-xs text-[#666666] leading-relaxed mt-2">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Enterprise Tech Stack Tags */}
          <div className="p-8 rounded-3xl bg-white border border-black/[0.06] shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <span className="text-xs uppercase font-mono text-[#00897B] font-semibold block mb-1">

              </span>
              <span className="text-base sm:text-lg font-bold text-[#121212]">
                Battle-tested tools and frameworks
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {service.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3.5 py-1.5 rounded-full bg-[#FAFAF8] border border-black/10 text-xs font-mono font-medium text-[#2B2B2B]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        5. Service-Specific FAQs
        ========================================================================
      */}
      <section className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-black/[0.06]">
        <div className="w-full max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="max-w-2xl mb-12">
            <span className="text-[#00897B] font-mono text-xs font-semibold tracking-eyebrow uppercase mb-2 block">

            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#121212]">
              Frequently asked questions
            </h2>
          </div>

          <div className="divide-y divide-black/[0.08]">
            {service.faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div key={idx} className="py-6">
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between text-left text-lg sm:text-xl font-medium text-[#121212] hover:text-[#00897B] transition cursor-pointer gap-4"
                  >
                    <span>{faq.q}</span>
                    <span className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center shrink-0">
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>
                  {isOpen && (
                    <p className="mt-4 text-base text-[#555555] leading-relaxed pr-8">
                      {faq.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        6. Bottom Section: Connect With Us (Red geometric lattice pattern)
        ========================================================================
      */}
      <ConnectWithUsSection onTalkClick={onConsultClick} />

      {/* 
        ========================================================================
        7. Sandstone QuBit Footer ('Track Your Progress™')
        ========================================================================
      */}
      <Footer onContactClick={onConsultClick} />

    </div>
  );
}
