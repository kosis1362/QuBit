import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, ChevronDown, Check, Building2, Timer, CheckCircle2 } from 'lucide-react';
import { CUSTOMER_STORIES_DATA } from '../data/customerStoriesData';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import ConnectWithUsSection from '../components/ConnectWithUsSection';
import Footer from '../components/Footer';

export default function CustomerStoryDetailPage({ onConsultClick }) {
  const { storyId } = useParams();
  const story = CUSTOMER_STORIES_DATA[storyId] || CUSTOMER_STORIES_DATA['erp-system'];

  const [openPillars, setOpenPillars] = useState({ 0: true });
  const [openComplications, setOpenComplications] = useState({});

  useEffect(() => {
    setOpenPillars({ 0: true });
    setOpenComplications({});
  }, [story.id]);

  const togglePillar = (index) => {
    setOpenPillars((prev) => (prev[index] ? {} : { [index]: true }));
  };

  const toggleComplication = (index) => {
    setOpenComplications((prev) => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <>
      <div className="relative z-10 min-h-screen bg-[#FAFAF8] text-[#121212] flex flex-col font-sans selection:bg-[#FF462D] selection:text-white shadow-[0_20px_50px_rgba(0,0,0,0.18)] mb-[50vh]">
      {/* 1. HERO BANNER: Full-Screen (100vh) Coverage with Deep Corner Blackness */}
      <section className="relative w-full min-h-screen overflow-hidden bg-[#0A0C0D] text-white flex flex-col justify-between border-b border-black/[0.08] pt-28 sm:pt-32 lg:pt-36">
        {/* Full-Bleed Background Media */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {story.heroMedia.type === 'video' ? (
            <video
              key={story.heroMedia.src}
              src={story.heroMedia.src}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="w-full h-full object-cover object-center transform scale-105"
            />
          ) : (
            <img
              src={story.heroMedia.src}
              alt={story.heroMedia.alt}
              className="w-full h-full object-cover object-center transform scale-105"
            />
          )}

          {/* Deep Blackness in Both Corners & Cinematic Layered Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/98 via-black/85 via-50% to-black/35 z-10" />
          <div className="absolute inset-0 bg-gradient-to-l from-black/90 via-black/40 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/98 via-black/70 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/40 to-transparent z-10" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_20%,_rgba(0,0,0,0.85)_100%)] z-10 pointer-events-none" />
          <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-[#FF462D]/15 rounded-full blur-[140px] pointer-events-none z-10" />
        </div>

        {/* Hero Content */}
        <div className="relative z-20 w-full px-6 sm:px-10 lg:px-16 flex-1 flex flex-col justify-center py-6 sm:py-8">
          <div className="w-full">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="text-xs sm:text-[13px] text-white/70 mb-6 sm:mb-8 font-normal flex items-center gap-2 flex-wrap">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span className="text-white/40">/</span>
              <span className="text-white/70">Customer Stories</span>
              <span className="text-white/40">/</span>
              <span className="text-white font-medium truncate max-w-xs sm:max-w-md">Enterprise ERP Transformation</span>
            </nav>

            {/* Category Tag with Red Accent Line */}
            <div className="mb-4 sm:mb-5">
              <span className="text-xs font-mono uppercase tracking-[0.22em] text-white/90 font-medium block">
                {story.eyebrow}
              </span>
              <div className="w-6 h-[2px] bg-[#FF462D] mt-1.5" />
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[54px] xl:text-[62px] font-medium tracking-tight text-white mb-4 sm:mb-5 leading-[1.12]">
              {story.title}
            </h1>

            {/* Sub-heading / Exact Quote */}
            <blockquote className="border-l-2 border-[#FF462D] pl-4 sm:pl-5 mb-8 my-4">
              <p className="text-base sm:text-lg lg:text-[19px] text-white/95 font-light italic leading-relaxed">
                "{story.quote}"
              </p>
            </blockquote>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 mb-8 sm:mb-10">
              <button
                type="button"
                onClick={onConsultClick}
                className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-lg bg-[#FF462D] text-white text-sm font-semibold tracking-wide hover:bg-[#E0351E] transition-all duration-200 cursor-pointer shadow-md hover:shadow-lg active:scale-[0.98]"
              >
                <span>{story.ctaLabel}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#story-flow"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white border border-white/25 text-sm font-semibold transition-all backdrop-blur-sm cursor-pointer"
              >
                Read The Journey
              </a>
            </div>
          </div>
        </div>

        {/* Bottom 3-Column Highlight Strip */}
        <div className="relative z-20 w-full border-t border-white/20 bg-black/50 backdrop-blur-md">
          <div className="w-full px-6 sm:px-10 lg:px-16">
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/20">
              <div className="py-4 sm:py-5 md:px-6 first:pl-0 flex items-center gap-3 text-sm sm:text-[15px] font-normal text-white/90 leading-snug">
                <Building2 className="w-5 h-5 text-[#FF462D] shrink-0" />
                <span>100+ Employees Across Multiple Outlets</span>
              </div>
              <div className="py-4 sm:py-5 md:px-6 flex items-center gap-3 text-sm sm:text-[15px] font-normal text-white/90 leading-snug">
                <Timer className="w-5 h-5 text-[#00897B] shrink-0" />
                <span>94% Drop in Weekly Administrative Chasing</span>
              </div>
              <div className="py-4 sm:py-5 md:px-6 last:pr-0 flex items-center gap-3 text-sm sm:text-[15px] font-normal text-white/90 leading-snug">
                <CheckCircle2 className="w-5 h-5 text-[#FF462D] shrink-0" />
                <span>100% End-of-Month Payroll Calculation Precision</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        2. STORY INTRODUCTION: A Story Every Growing Organisation Can Relate To
        ========================================================================
      */}
      <section id="story-flow" className="py-16 sm:py-20 lg:py-24 bg-[#FAF7F2] border-b border-black/[0.06]">
        <div className="w-full px-6 sm:px-10 lg:px-16">
          <span className="text-xs font-mono font-semibold uppercase tracking-[0.22em] text-[#FF462D] block mb-3">
            THE REALITY OF SCALE
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#121212] mb-8 leading-tight">
            A story every growing organisation can relate to
          </h2>

          <div className="space-y-6 text-base sm:text-lg lg:text-[19px] text-[#444444] font-normal leading-relaxed">
            <p className="text-xl sm:text-2xl lg:text-[25px] text-[#121212] font-medium leading-snug">
              {story.intro.lead}
            </p>
            {story.intro.paragraphs.map((paragraph, idx) => (
              <p key={idx}>
                {typeof paragraph === 'string' ? (
                  paragraph
                ) : (
                  <>
                    {paragraph.prefix}
                    <span className="font-semibold text-[#121212]">{paragraph.highlight}</span>
                    {paragraph.suffix}
                  </>
                )}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        3. THE 6 END-OF-MONTH COMPLICATIONS: HEADINGS ONLY (NO EXPLANATION)
        ========================================================================
      */}
      <section className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-black/[0.06]">
        <div className="w-full px-6 sm:px-10 lg:px-16">

          {/* Section Header: Heading Only */}
          <div className="w-full mb-12 sm:mb-14">
            <span className="text-xs font-mono font-semibold uppercase tracking-[0.22em] text-[#FF462D] block mb-2">
              THE END-OF-MONTH SPIRAL
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-[#121212] leading-tight">
              At the end of the month, things become even more complicated
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-start">
            {story.complications.map((comp, idx) => {
              const Icon = comp.icon;
              const isOpen = !!openComplications[idx];
              return (
                <div
                  key={comp.num}
                  onClick={() => toggleComplication(idx)}
                  className={`group relative rounded-2xl p-7 sm:p-8 border transition-all duration-300 flex flex-col justify-between cursor-pointer ${isOpen
                      ? 'bg-white border-[#FF462D]/50 shadow-md ring-1 ring-[#FF462D]/15'
                      : 'bg-[#FAFAF8] border-black/[0.08] hover:border-[#FF462D]/40 hover:bg-white hover:shadow-lg'
                    }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <span className="text-2xl font-mono font-bold text-[#FF462D]">{comp.num}</span>
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-200 ${isOpen
                            ? 'bg-[#FF462D] text-white'
                            : 'bg-red-50 text-[#FF462D] group-hover:bg-[#FF462D] group-hover:text-white'
                          }`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-[#121212] tracking-tight group-hover:text-[#FF462D] transition-colors leading-snug">
                      {comp.title}
                    </h3>

                    <div
                      className={`grid transition-all duration-300 ease-in-out ${isOpen
                          ? 'grid-rows-[1fr] opacity-100 mt-4 pt-4 border-t border-black/[0.06]'
                          : 'grid-rows-[0fr] opacity-0'
                        }`}
                    >
                      <div className="overflow-hidden space-y-3">
                        <blockquote className="text-xs sm:text-sm italic text-[#333333] bg-[#FAF7F2] p-3 rounded-xl border border-black/[0.04]">
                          "{comp.quote}"
                        </blockquote>
                        <p className="text-xs text-[#555555] leading-relaxed">
                          <span className="font-semibold text-[#121212]">Operational Fallout: </span>
                          {comp.impact}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 pt-4 border-t border-black/[0.06] flex items-center justify-between text-xs font-mono text-[#888888]">
                    <span>
                      {story.complicationsSection.cardTag} // {comp.num}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#FF462D] transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0 group-hover:translate-y-0.5'
                        }`}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-14 p-8 sm:p-10 rounded-3xl bg-[#FAF7F2] border border-black/[0.08] shadow-xs">
            <div className="w-full">
              <p className="text-lg sm:text-xl text-[#121212] font-medium leading-relaxed mb-3">
                {story.complicationsSection.summaryLead}
              </p>
              <p className="text-sm sm:text-base text-[#666666]">{story.complicationsSection.summarySub}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE TURNING POINT */}
      <section className="py-20 bg-[#121415] text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-[#FF462D]/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="w-full lg:w-[70%] mx-auto px-6 sm:px-10 lg:px-0 relative z-10 text-center">

          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#FF462D] font-semibold block mb-4">
            THE ROOT CAUSE
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 leading-tight w-full">
            The real problem isn't the people. <br />
            <span className="text-[#FF462D]">It's the process.</span>
          </h2>

          <p className="text-base sm:text-xl text-white/80 w-full leading-relaxed mb-10 font-normal">
            Without a centralised system, every department works with disconnected information. Even simple tasks require multiple conversations, manual updates and unnecessary follow-ups.
          </p>

          {/* Quotation highlight block */}
          <div className="w-full bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-md">
            <p className="text-lg sm:text-2xl font-light italic text-white/95 leading-relaxed mb-4">
              "When information is scattered, work becomes complicated. When everything is connected, people can focus on what really matters."
            </p>
            <span className="text-xs sm:text-sm font-mono tracking-widest text-[#FF462D] uppercase font-semibold">
              — The idea behind a connected ERP system
            </span>
          </div>

        </div>
      </section>

      {/* 
        ========================================================================
        5. VISUAL GRAPHS & COMPARATIVE OPERATIONAL ANALYTICS
        - Interactive Comparative Bar Charts (Time allocation before vs after)
        - Latency & SLA Progress Gauges
        - Directed System Architecture diagram
        ========================================================================
      */}


      {/* 
        ========================================================================
        6. THE SOLUTION: What if everything worked from one place?
        Matching the whole page color palette (warm sandstone #FAF7F2 / #FAFAF8)
        ========================================================================
      */}
      <section className="py-20 lg:py-28 bg-[#F7F7F7] border-b border-black/[0.05]">
        <div className="w-full px-6 sm:px-10 lg:px-16">

          {/* Section Header */}
          <div className="w-full text-center mb-16">
            <span className="inline-block px-3 py-1 rounded-md bg-[#EAEAEA] text-[#555555] text-xs font-medium tracking-tight mb-5">
              The Connected Architecture
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-[-0.03em] leading-[1.14] text-[#111111] mb-4">
              What if everything{' '}
              <span className="text-[#8E8E93]">worked from one place?</span>
            </h2>
            <p className="text-base sm:text-lg text-[#3A3A3C] leading-relaxed mb-3 font-medium">
              That's where the <span className="font-bold text-[#111111]">ERP / Employee Management System</span> comes in.
            </p>
            <p className="text-sm sm:text-base text-[#6E6E73] leading-relaxed w-full">
              A single platform where employees can manage their profiles, attendance and leave requests; HR can manage employee records and approvals; managers can monitor operations; and administrators can access the information they need.
            </p>
          </div>

          {/* 4 Connected Stakeholder Cards: Single-Open Accordion with Dot Points */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-16 items-start">
            {story.solutionPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              const isOpen = !!openPillars[idx];
              const pillarNum = `0${idx + 1}`;

              return (
                <div
                  key={idx}
                  onClick={() => togglePillar(idx)}
                  className={`group relative rounded-2xl p-6 sm:p-7 border transition-all duration-300 flex flex-col justify-between cursor-pointer ${isOpen
                      ? 'bg-white border-black/[0.12] shadow-md'
                      : 'bg-white/85 border-black/[0.05] hover:border-black/[0.12] hover:bg-white hover:shadow-md'
                    }`}
                >
                  <div>
                    {/* Top Row: Sequential Number and Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-sm font-semibold tracking-tight text-[#8E8E93]">
                        {pillarNum}
                      </span>
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-200 ${isOpen ? 'bg-[#141414] text-white' : 'bg-[#F2F2F2] text-[#141414] group-hover:bg-[#141414] group-hover:text-white'
                        }`}>
                        <Icon className="w-4.5 h-4.5" />
                      </div>
                    </div>

                    {/* Heading Only */}
                    <h3 className="text-lg sm:text-xl font-bold text-[#111111] tracking-[-0.02em] leading-snug">
                      {pillar.role}
                    </h3>

                    <div
                      className={`grid transition-all duration-300 ease-in-out ${isOpen
                          ? 'grid-rows-[1fr] opacity-100 mt-5 pt-5 border-t border-black/[0.06]'
                          : 'grid-rows-[0fr] opacity-0'
                        }`}
                    >
                      <div className="overflow-hidden">
                        <span className="text-[11px] font-medium text-[#8E8E93] block mb-3">
                          Connected Features & Tools
                        </span>
                        <ul className="space-y-2.5">
                          {pillar.points.map((pt, pIdx) => (
                            <li key={pIdx} className="text-[13px] text-[#444444] flex items-start gap-2.5 leading-relaxed">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#141414] shrink-0 mt-2" />
                              <span>{pt}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Row with Indicator and Rotating Chevron */}
                  <div className="mt-5 pt-4 border-t border-black/[0.05] flex items-center justify-between text-xs font-medium text-[#8E8E93]">
                    <span className="group-hover:text-[#111111] transition-colors">
                      {isOpen ? 'Collapse' : 'Expand features'}
                    </span>
                    <ChevronDown className={`w-4 h-4 text-[#141414] transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0 group-hover:translate-y-0.5'}`} />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-black/[0.08] shadow-sm flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="w-full">
              <span className="text-xs font-mono font-semibold uppercase text-[#FF462D] block mb-1">
                {story.solutionSection.bannerEyebrow}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#121212] mb-2">
                {story.solutionSection.bannerHeading}
              </h3>
              <p className="text-sm text-[#555555] leading-relaxed">{story.solutionSection.bannerDesc}</p>
            </div>

            <button
              type="button"
              onClick={onConsultClick}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#FF462D] hover:bg-[#E0351E] text-white text-sm font-semibold tracking-wide transition-all cursor-pointer shrink-0 shadow-md active:scale-95"
            >
              <span>{story.solutionSection.bannerCta}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 6. WHY CHOOSE US? */}
      <WhyChooseUsSection />

      {/* 7. CONNECT WITH US */}
      <ConnectWithUsSection onTalkClick={onConsultClick} />

      </div>

      {/* 8. FOOTER (Fixed 50vh Curtain Reveal matching HomePage) */}
      <div className="fixed bottom-0 left-0 w-full h-[50vh] z-0 pointer-events-auto overflow-hidden">
        <Footer />
      </div>
    </>
  );
}
