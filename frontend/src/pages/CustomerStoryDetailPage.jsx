import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowRight,
  Clock,
  Users,
  CheckCircle2,
  AlertTriangle,
  TrendingUp,
  BarChart3,
  Layers,
  ShieldCheck,
  FileSpreadsheet,
  Smartphone,
  Building2,
  Sparkles,
  ChevronRight,
  ChevronDown,
  Database,
  CalendarCheck,
  Briefcase,
  Activity,
  FileText,
  Check,
  TrendingDown,
  Timer,
  Zap,
  Lock,
  RefreshCw,
  CalendarX,
  Calculator,
  FileX,
  AlertCircle
} from 'lucide-react';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import ConnectWithUsSection from '../components/ConnectWithUsSection';
import Footer from '../components/Footer';

export default function CustomerStoryDetailPage({ onConsultClick }) {
  const { storyId } = useParams();
  const [activeTab, setActiveTab] = useState('time-saved'); // 'time-saved' | 'accuracy' | 'process-latency'
  const [openPillars, setOpenPillars] = useState({ 0: true }); // First pillar expanded by default
  const [openComplications, setOpenComplications] = useState({});

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

  // The 6 End-of-Month Complications from User Story (Headings Only by default, click to expand dropdown)
  const complications = [
    {
      num: '01',
      title: 'Attendance confusion',
      icon: Clock,
      quote: 'Some employees forget to mark attendance, while others report incorrect working hours.',
      impact: 'HR spends 12+ hours every month reconciling shifts and fixing conflicting clock-ins across different outlets.'
    },
    {
      num: '02',
      title: 'Leave management delays',
      icon: CalendarX,
      quote: "Leave requests get buried in messages, and employees don't know whether their requests have been approved.",
      impact: 'Unplanned staffing shortages at branch outlets and frustrated employees left waiting days for basic confirmations.'
    },
    {
      num: '03',
      title: 'Payroll mistakes',
      icon: Calculator,
      quote: 'HR has to collect attendance, leave and salary information from different sources, increasing the chances of calculation errors.',
      impact: 'Salary miscalculations, overtime disputes, delayed disbursement, and high anxiety for both accounts and staff.'
    },
    {
      num: '04',
      title: 'Lost employee records',
      icon: FileX,
      quote: 'Important documents and personal information are scattered across folders and spreadsheets.',
      impact: 'Missing compliance paperwork, inability to retrieve historical records quickly, and vulnerability to data loss.'
    },
    {
      num: '05',
      title: 'Lack of transparency',
      icon: AlertCircle,
      quote: 'Employees repeatedly contact HR to ask about their attendance, leave balance and salary status.',
      impact: 'Constant interruptions for the HR manager, diverting dozens of hours away from employee retention and development.'
    },
    {
      num: '06',
      title: 'Management difficulties',
      icon: Building2,
      quote: 'Business owners struggle to get a clear picture of employee performance, attendance and operations across different outlets.',
      impact: 'Decisions based on weeks-old estimates rather than real-time operational data, restricting strategic expansion.'
    }
  ];

  // Visual Comparative Data: Weekly Time Allocation (Manual vs Unified ERP)
  const timeAllocationData = [
    {
      category: 'Searching Files & Dossiers',
      department: 'HR Operations',
      manual: 14.0,
      erp: 0.8,
      saved: '13.2 hrs',
      reduction: '94.3%',
      desc: 'Retrieving employee records, contracts, and salary history'
    },
    {
      category: 'Attendance & Overtime Reconciliation',
      department: 'Branch Operations',
      manual: 12.0,
      erp: 0.5,
      saved: '11.5 hrs',
      reduction: '95.8%',
      desc: 'Cross-checking branch clock-ins, missed punches, and shift rosters'
    },
    {
      category: 'End-of-Month Payroll Processing',
      department: 'Accounts & Payroll',
      manual: 16.0,
      erp: 1.0,
      saved: '15.0 hrs',
      reduction: '93.8%',
      desc: 'Synthesizing attendance, approved leaves, overtime, and tax deductions'
    },
    {
      category: 'Status Inquiries, WhatsApp & Call Chasing',
      department: 'Inter-Departmental',
      manual: 10.0,
      erp: 0.5,
      saved: '9.5 hrs',
      reduction: '95.0%',
      desc: 'Answering routine leave balances, attendance corrections & salary queries'
    },
    {
      category: 'Strategic HR & Business Scaling',
      department: 'Leadership & Talent',
      manual: 4.0,
      erp: 32.0,
      saved: '+28.0 hrs',
      reduction: '+700%',
      isGain: true,
      desc: 'Focusing on employee retention, performance coaching, and branch expansion'
    }
  ];

  // The 4 Unified Pillars of the ERP Platform
  const solutionPillars = [
    {
      role: 'Employees',
      subtitle: 'Self-Service Independence',
      icon: Users,
      badge: 'Mobile & Web Portal',
      points: [
        'One-tap geo-fenced mobile & biometric attendance',
        'Instant leave applications with real-time approval status',
        'Self-access to salary slips, tax breakdowns, and attendance history',
        'Zero need to ping HR for routine record questions'
      ]
    },
    {
      role: 'HR Managers',
      subtitle: 'Streamlined People Operations',
      icon: CalendarCheck,
      badge: 'Centralized Control',
      points: [
        'Consolidated digital dossier for all 100+ employees',
        'One-click automated leave approvals & shift reallocations',
        'Direct automated export to payroll with zero manual math',
        'Complete compliance tracking and automated document renewal alerts'
      ]
    },
    {
      role: 'Outlet & Team Managers',
      subtitle: 'Branch Operational Visibility',
      icon: Building2,
      badge: 'Multi-Outlet Fabric',
      points: [
        'Live headcount dashboard across all retail/branch outlets',
        'Instant overtime alerts and automated shift swap management',
        'Elimination of fragmented WhatsApp groups and lost updates',
        'Objective performance and punctuality metrics for every shift'
      ]
    },
    {
      role: 'Business Owners & Leadership',
      subtitle: 'Data-Driven Growth',
      icon: BarChart3,
      badge: 'Executive Command',
      points: [
        'Real-time multi-branch workforce analytics and labor cost trends',
        'Total operational transparency with zero reliance on manual reports',
        'Single source of truth with bank-grade role-based access control',
        'Scalable infrastructure that grows seamlessly from 100 to 1,000+ staff'
      ]
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#FAFAF8] text-[#121212] flex flex-col font-sans selection:bg-[#FF462D] selection:text-white">

      {/* 
        ========================================================================
        1. HERO BANNER: Full-Screen (100vh) Coverage with Deep Corner Blackness
        - Covers the whole page (min-h-screen)
        - Background image: /images/hr1.jpg
        - Deep blackness in both corners for 100% crystal-clear text legibility
        - Breadcrumb: Home / Customer Stories / Enterprise ERP Transformation
        - Eyebrow: 'CUSTOMER STORY' with red accent bar
        - Headline: Large, clean grotesque font
        - Sub-heading: Exact quote from the story
        - Bottom 3-column metric highlight strip
        ========================================================================
      */}
        <section className="relative w-full min-h-screen overflow-hidden bg-[#0A0C0D] text-white flex flex-col justify-between border-b border-black/[0.08] pt-28 sm:pt-32 lg:pt-36">

          {/* Full-Bleed Background Image: using hr1.jpg */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <img
              src="/images/hr1.jpg"
              alt="The Hidden Cost of Managing a Business Without an ERP System"
              className="w-full h-full object-cover object-center transform scale-105"
            />

            {/* Deep Blackness in Both Corners & Cinematic Layered Overlays */}
            {/* 1. Left Corner & Left Edge Blackness (where breadcrumbs, titles, and text reside) */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/98 via-black/85 via-50% to-black/35 z-10" />

            {/* 2. Right Corner & Right Edge Blackness */}
            <div className="absolute inset-0 bg-gradient-to-l from-black/90 via-black/40 to-transparent z-10" />

            {/* 3. Bottom Corners Blackness (protects bottom highlights and CTAs) */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/98 via-black/70 to-transparent z-10" />

            {/* 4. Top Corners Blackness (protects top navbar and breadcrumb) */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/40 to-transparent z-10" />

            {/* 5. Radial Corner Vignette ensuring deep black in all four corners */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_20%,_rgba(0,0,0,0.85)_100%)] z-10 pointer-events-none" />

            {/* 6. Subtle Ambient Brand Glow */}
            <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-[#FF462D]/15 rounded-full blur-[140px] pointer-events-none z-10" />
          </div>

          {/* Hero Content */}
          <div className="relative z-20 w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 flex-1 flex flex-col justify-center py-6 sm:py-8">
            <div className="max-w-2xl lg:max-w-3xl">
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
                  CUSTOMER STORY // OPERATIONAL TRANSFORMATION
                </span>
                <div className="w-6 h-[2px] bg-[#FF462D] mt-1.5" />
              </div>

              {/* Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-[54px] xl:text-[62px] font-medium tracking-tight text-white mb-4 sm:mb-5 leading-[1.12]">
                The Hidden Cost of Managing a Business Without an ERP System
              </h1>

              {/* Sub-heading / Exact Quote from user prompt */}
              <blockquote className="border-l-2 border-[#FF462D] pl-4 sm:pl-5 mb-8 my-4">
                <p className="text-base sm:text-lg lg:text-[19px] text-white/95 font-light italic leading-relaxed">
                  "A business doesn't lose time only when work stops. Sometimes, it loses time every day through small tasks that never seem to end."
                </p>
              </blockquote>

              {/* Action CTAs */}
              <div className="flex flex-wrap items-center gap-3.5 mb-8 sm:mb-10">
                <button
                  type="button"
                  onClick={onConsultClick}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-lg bg-[#FF462D] text-white text-sm font-semibold tracking-wide hover:bg-[#E0351E] transition-all duration-200 cursor-pointer shadow-md hover:shadow-lg active:scale-[0.98]"
                >
                  <span>Consult Our ERP Architects</span>
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
          <div className="w-full max-w-[1100px] mx-auto px-6 sm:px-10 lg:px-16">
            <span className="text-xs font-mono font-semibold uppercase tracking-[0.22em] text-[#FF462D] block mb-3">
              THE REALITY OF SCALE
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#121212] mb-8 leading-tight">
              A story every growing organisation can relate to
            </h2>

            <div className="space-y-6 text-base sm:text-lg lg:text-[19px] text-[#444444] font-normal leading-relaxed">
              <p className="text-xl sm:text-2xl lg:text-[25px] text-[#121212] font-medium leading-snug">
                Imagine a growing company with 100 employees, multiple departments and several outlets.
              </p>

              <p>
                Every morning, the HR team starts its day with <span className="font-semibold text-[#121212]">spreadsheets, WhatsApp messages and phone calls</span>. One employee wants to apply for leave, another needs to correct their attendance, and someone else is asking for their salary details.
              </p>

              <p>
                The HR manager has to search through different files just to find the right employee record.
              </p>

              <p>
                Meanwhile, employees are marking attendance manually. Managers are sending updates through messages, and the accounts team is waiting for salary information from HR to prepare payroll.
              </p>
            </div>
          </div>
        </section>

        {/* 
        ========================================================================
        3. THE 6 END-OF-MONTH COMPLICATIONS: HEADINGS ONLY (NO EXPLANATION)
        ========================================================================
      */}
        <section className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-black/[0.06]">
          <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">

            {/* Section Header: Heading Only */}
            <div className="max-w-3xl mb-12 sm:mb-14">
              <span className="text-xs font-mono font-semibold uppercase tracking-[0.22em] text-[#FF462D] block mb-2">
                THE END-OF-MONTH SPIRAL
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-[#121212] leading-tight">
                At the end of the month, things become even more complicated
              </h2>
            </div>

          {/* 6 Minimalist Cards: Heading Only, click to open dropdown with animation */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {complications.map((comp, idx) => {
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
                      <span className="text-2xl font-mono font-bold text-[#FF462D]">
                        {comp.num}
                      </span>
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-200 ${
                        isOpen ? 'bg-[#FF462D] text-white' : 'bg-red-50 text-[#FF462D] group-hover:bg-[#FF462D] group-hover:text-white'
                      }`}>
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-[#121212] tracking-tight group-hover:text-[#FF462D] transition-colors leading-snug">
                      {comp.title}
                    </h3>

                    {/* Animated Dropdown List */}
                    <div
                      className={`grid transition-all duration-300 ease-in-out ${
                        isOpen ? 'grid-rows-[1fr] opacity-100 mt-4 pt-4 border-t border-black/[0.06]' : 'grid-rows-[0fr] opacity-0'
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
                    <span>COMPLICATION // {comp.num}</span>
                    <ChevronDown className={`w-4 h-4 text-[#FF462D] transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0 group-hover:translate-y-0.5'}`} />
                  </div>
                </div>
              );
            })}
          </div>

            {/* Narrative Summary Callout Box */}
            <div className="mt-14 p-8 sm:p-10 rounded-3xl bg-[#FAF7F2] border border-black/[0.08] shadow-xs">
              <div className="max-w-4xl">
                <p className="text-lg sm:text-xl text-[#121212] font-medium leading-relaxed mb-3">
                  The HR team spends more time collecting information than actually managing people. Managers spend time following up, employees wait for updates, and business owners struggle to get reliable information when they need it.
                </p>
                <p className="text-sm sm:text-base text-[#666666]">
                  As the organisation grows, these small problems become bigger operational challenges.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* 
        ========================================================================
        4. THE TURNING POINT: "The real problem isn't the people. It's the process."
        ========================================================================
      */}
        <section className="py-20 bg-[#121415] text-white relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-[#FF462D]/10 rounded-full blur-[140px] pointer-events-none" />

          <div className="w-full max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10 text-center">

            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#FF462D] font-semibold block mb-4">
              THE ROOT CAUSE
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 leading-tight max-w-3xl mx-auto">
              The real problem isn't the people. <br />
              <span className="text-[#FF462D]">It's the process.</span>
            </h2>

            <p className="text-base sm:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed mb-10 font-normal">
              Without a centralised system, every department works with disconnected information. Even simple tasks require multiple conversations, manual updates and unnecessary follow-ups.
            </p>

            {/* Quotation highlight block */}
            <div className="max-w-3xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-md">
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
          <section className="py-20 lg:py-28 bg-[#FAF7F2] border-b border-black/[0.06]">
            <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">

              {/* Section Header */}
              <div className="max-w-3xl mx-auto text-center mb-16">
                  <span className="text-xs font-mono uppercase font-semibold tracking-[0.22em] text-[#FF462D] block mb-2">
                    THE CONNECTED ARCHITECTURE
                  </span>
                  <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight text-[#121212] mb-4">
                    What if everything worked from one place?
                  </h2>
                    <div className="w-12 h-1 bg-[#FF462D] mx-auto mb-6 rounded-full" />
                    <p className="text-base sm:text-lg text-[#333333] leading-relaxed mb-4">
                      That's where the <span className="font-semibold text-[#121212]">ERP / Employee Management System</span> comes in.
                    </p>
                    <p className="text-sm sm:text-base text-[#666666] leading-relaxed max-w-2xl mx-auto">
                      A single platform where employees can manage their profiles, attendance and leave requests; HR can manage employee records and approvals; managers can monitor operations; and administrators can access the information they need.
                    </p>
                  </div>

          {/* 4 Connected Stakeholder Cards: Same Card Format, Heading Only with Animated Dropdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {solutionPillars.map((pillar, idx) => {
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
                    {/* Top Row: Sequential Number and Icon (Matching Complications Cards) */}
                    <div className="flex items-center justify-between mb-5">
                      <span className="text-2xl font-mono font-bold text-[#FF462D]">
                        {pillarNum}
                      </span>
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-200 ${
                        isOpen ? 'bg-[#FF462D] text-white' : 'bg-red-50 text-[#FF462D] group-hover:bg-[#FF462D] group-hover:text-white'
                      }`}>
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Heading Only */}
                    <h3 className="text-xl sm:text-2xl font-bold text-[#121212] tracking-tight group-hover:text-[#FF462D] transition-colors leading-snug">
                      {pillar.role}
                    </h3>

                    {/* Animated Dropdown Feature List */}
                    <div
                      className={`grid transition-all duration-300 ease-in-out ${
                        isOpen ? 'grid-rows-[1fr] opacity-100 mt-5 pt-5 border-t border-black/[0.06]' : 'grid-rows-[0fr] opacity-0'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-[#FF462D] block mb-3">
                          CONNECTED FEATURES & TOOLS
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

                  {/* Bottom Row with Indicator and Rotating Chevron */}
                  <div className="mt-5 pt-4 border-t border-black/[0.06] flex items-center justify-between text-xs font-mono text-[#888888]">
                    <span className="group-hover:text-[#121212] transition-colors">
                      {isOpen ? 'COLLAPSE' : 'EXPAND FEATURES'}
                    </span>
                    <ChevronDown className={`w-4 h-4 text-[#FF462D] transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0 group-hover:translate-y-0.5'}`} />
                  </div>
                </div>
              );
            })}
                          </div>

                          {/* Connected System Banner */}
                          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-black/[0.08] shadow-sm flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                            <div className="max-w-2xl">
                                <span className="text-xs font-mono font-semibold uppercase text-[#FF462D] block mb-1">
                                  CONNECTED ARCHITECTURE // ZERO TOOL SCATTER
                                </span>
                                <h3 className="text-xl sm:text-2xl font-bold text-[#121212] mb-2">
                                  Instead of chasing information across multiple tools, everyone works through one organised system.
                                </h3>
                                <p className="text-sm text-[#555555] leading-relaxed">
                                  The goal is simple: less manual work, better visibility, smoother operations and more time to focus on growing the business.
                                </p>
                            </div>

                            <button
                              type="button"
                              onClick={onConsultClick}
                              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#FF462D] hover:bg-[#E0351E] text-white text-sm font-semibold tracking-wide transition-all cursor-pointer shrink-0 shadow-md active:scale-95"
                            >
                              <span>Build Your Custom ERP</span>
                              <ArrowRight className="w-4 h-4" />
                            </button>
                          </div>

                        </div>
      </section>

                  {/* 
        ========================================================================
        7. WHY CHOOSE US?: Consistent with ServiceDetailPage layout
        ========================================================================
      */}
                  <WhyChooseUsSection />


                  {/* 
        ========================================================================
        8. CONNECT WITH US: Bottom Call to Action
        ========================================================================
      */}
                  <ConnectWithUsSection onTalkClick={onConsultClick} />

                  {/* 
        ========================================================================
        9. FOOTER
        ========================================================================
      */}
                  <Footer />

              </div>
              );
}
