import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, ChevronDown, Check } from 'lucide-react';
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
    setOpenPillars((prev) => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const toggleComplication = (index) => {
    setOpenComplications((prev) => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div className="relative min-h-screen bg-[#FAFAF8] text-[#121212] flex flex-col font-sans selection:bg-[#FF462D] selection:text-white">
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
        <div className="relative z-20 w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 flex-1 flex flex-col justify-center py-6 sm:py-8">
          <div className="max-w-2xl lg:max-w-3xl">
            {/* Breadcrumb */}
            <nav
              aria-label="Breadcrumb"
              className="text-xs sm:text-[13px] text-white/70 mb-6 sm:mb-8 font-normal flex items-center gap-2 flex-wrap"
            >
              <Link to="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span className="text-white/40">/</span>
              <span className="text-white/70">Customer Stories</span>
              <span className="text-white/40">/</span>
              <span className="text-white font-medium truncate max-w-xs sm:max-w-md">
                {story.breadcrumb}
              </span>
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
          <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/20">
              {story.highlights.map((item, idx) => {
                const HighlightIcon = item.icon;
                return (
                  <div
                    key={idx}
                    className={`py-4 sm:py-5 md:px-6 ${
                      idx === 0 ? 'first:pl-0' : idx === story.highlights.length - 1 ? 'last:pr-0' : ''
                    } flex items-center gap-3 text-sm sm:text-[15px] font-normal text-white/90 leading-snug`}
                  >
                    <HighlightIcon className={`w-5 h-5 ${item.color} shrink-0`} />
                    <span>{item.text}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 2. STORY INTRODUCTION */}
      <section id="story-flow" className="py-16 sm:py-20 lg:py-24 bg-[#FAF7F2] border-b border-black/[0.06]">
        <div className="w-full max-w-[1100px] mx-auto px-6 sm:px-10 lg:px-16">
          <span className="text-xs font-mono font-semibold uppercase tracking-[0.22em] text-[#FF462D] block mb-3">
            {story.intro.eyebrow}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#121212] mb-8 leading-tight">
            {story.intro.heading}
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

      {/* 3. THE 6 COMPLICATIONS: HEADINGS ONLY WITH EXPANDABLE DROPDOWN */}
      <section className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-black/[0.06]">
        <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="max-w-3xl mb-12 sm:mb-14">
            <span className="text-xs font-mono font-semibold uppercase tracking-[0.22em] text-[#FF462D] block mb-2">
              {story.complicationsSection.eyebrow}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-[#121212] leading-tight">
              {story.complicationsSection.heading}
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
                  className={`group relative rounded-2xl p-7 sm:p-8 border transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                    isOpen
                      ? 'bg-white border-[#FF462D]/50 shadow-md ring-1 ring-[#FF462D]/15'
                      : 'bg-[#FAFAF8] border-black/[0.08] hover:border-[#FF462D]/40 hover:bg-white hover:shadow-lg'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <span className="text-2xl font-mono font-bold text-[#FF462D]">{comp.num}</span>
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-200 ${
                          isOpen
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
                      className={`grid transition-all duration-300 ease-in-out ${
                        isOpen
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
                      className={`w-4 h-4 text-[#FF462D] transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : 'rotate-0 group-hover:translate-y-0.5'
                      }`}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-14 p-8 sm:p-10 rounded-3xl bg-[#FAF7F2] border border-black/[0.08] shadow-xs">
            <div className="max-w-4xl">
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

        <div className="w-full max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10 text-center">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#FF462D] font-semibold block mb-4">
            {story.turningPoint.eyebrow}
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 leading-tight max-w-3xl mx-auto">
            {story.turningPoint.headingLine1} <br />
            <span className="text-[#FF462D]">{story.turningPoint.headingAccent}</span>
          </h2>

          <p className="text-base sm:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed mb-10 font-normal">
            {story.turningPoint.description}
          </p>

          <div className="max-w-3xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-md">
            <p className="text-lg sm:text-2xl font-light italic text-white/95 leading-relaxed mb-4">
              {story.turningPoint.quote}
            </p>
            <span className="text-xs sm:text-sm font-mono tracking-widest text-[#FF462D] uppercase font-semibold">
              {story.turningPoint.attribution}
            </span>
          </div>
        </div>
      </section>

      {/* 5. THE SOLUTION: CONNECTED ARCHITECTURE */}
      <section className="py-20 lg:py-28 bg-[#FAF7F2] border-b border-black/[0.06]">
        <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-mono uppercase font-semibold tracking-[0.22em] text-[#FF462D] block mb-2">
              {story.solutionSection.eyebrow}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight text-[#121212] mb-4">
              {story.solutionSection.heading}
            </h2>
            <div className="w-12 h-1 bg-[#FF462D] mx-auto mb-6 rounded-full" />
            <p className="text-base sm:text-lg text-[#333333] leading-relaxed mb-4">
              {story.solutionSection.leadPrefix}{' '}
              <span className="font-semibold text-[#121212]">{story.solutionSection.leadHighlight}</span>{' '}
              {story.solutionSection.leadSuffix}
            </p>
            <p className="text-sm sm:text-base text-[#666666] leading-relaxed max-w-2xl mx-auto">
              {story.solutionSection.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 items-start">
            {story.solutionPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              const isOpen = !!openPillars[idx];
              const pillarNum = `0${idx + 1}`;

              return (
                <div
                  key={idx}
                  onClick={() => togglePillar(idx)}
                  className={`group relative rounded-2xl p-7 sm:p-8 border transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                    isOpen
                      ? 'bg-white border-[#FF462D]/50 shadow-md ring-1 ring-[#FF462D]/15'
                      : 'bg-[#FAFAF8] border-black/[0.08] hover:border-[#FF462D]/40 hover:bg-white hover:shadow-lg'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <span className="text-2xl font-mono font-bold text-[#FF462D]">{pillarNum}</span>
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-200 ${
                          isOpen
                            ? 'bg-[#FF462D] text-white'
                            : 'bg-red-50 text-[#FF462D] group-hover:bg-[#FF462D] group-hover:text-white'
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-[#121212] tracking-tight group-hover:text-[#FF462D] transition-colors leading-snug">
                      {pillar.role}
                    </h3>

                    <div
                      className={`grid transition-all duration-300 ease-in-out ${
                        isOpen
                          ? 'grid-rows-[1fr] opacity-100 mt-5 pt-5 border-t border-black/[0.06]'
                          : 'grid-rows-[0fr] opacity-0'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-[#FF462D] block mb-3">
                          {story.solutionSection.featuresLabel}
                        </span>
                        <ul className="space-y-2.5">
                          {pillar.points.map((pt, pIdx) => (
                            <li key={pIdx} className="text-xs sm:text-[13px] text-[#444444] flex items-start gap-2.5 leading-relaxed">
                              <Check className="w-3.5 h-3.5 text-[#FF462D] shrink-0 mt-0.5" />
                              <span>{pt}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 pt-4 border-t border-black/[0.06] flex items-center justify-between text-xs font-mono text-[#888888]">
                    <span className="group-hover:text-[#121212] transition-colors">
                      {isOpen ? 'COLLAPSE' : 'EXPAND FEATURES'}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#FF462D] transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : 'rotate-0 group-hover:translate-y-0.5'
                      }`}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-black/[0.08] shadow-sm flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="max-w-2xl">
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

      {/* 8. FOOTER */}
      <Footer />
    </div>
  );
}
