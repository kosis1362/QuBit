import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, CheckCircle2, ShieldCheck, Zap, Layers } from 'lucide-react';
import { WHAT_WE_DO_SERVICES } from '../data/servicesData';

export default function SolutionsSection({ onContactClick }) {
  const [activeTab, setActiveTab] = useState(0);

  const activeSolution = WHAT_WE_DO_SERVICES[activeTab] || WHAT_WE_DO_SERVICES[0];
  const IconComponent = activeSolution.icon;

  // Technical specifications mapped to each service type
  const getServiceSpecs = (id) => {
    switch (id) {
      case 'web-design':
        return {
          framework: 'Next.js 14, Tailwind CSS, Headless CMS, Figma',
          delivery: 'Mobile-First Responsive Wireframes to Production',
          sla: '100% Core Web Vitals & Accessibility Pass'
        };
      case 'ecommerce-solution':
        return {
          framework: 'Shopify Plus, WooCommerce, Magento 2, Stripe, PayPal',
          delivery: 'End-to-End Inventory, Checkout & Order Automation',
          sla: '99.99% Payment Gateway Uptime'
        };
      case 'web-application-development':
        return {
          framework: 'React, Node.js, Python FastAPI, PostgreSQL, Redis',
          delivery: 'Microservices & High-Throughput REST/GraphQL APIs',
          sla: '< 100ms API Execution Latency'
        };
      case 'mobile-app-development':
        return {
          framework: 'Flutter, React Native, Swift (iOS), Kotlin (Android)',
          delivery: 'Bi-weekly CI/CD TestFlight & Google Play Releases',
          sla: '60fps Native Performance & Offline-First Sync'
        };
      case 'software-development':
        return {
          framework: 'Python, Go, Java, Docker, Kubernetes, AWS/GCP',
          delivery: 'Agile 2-Week Sprints with Continuous Delivery',
          sla: 'Zero-Downtime Blue/Green Deployments'
        };
      case 'search-engine-optimization':
        return {
          framework: 'Ahrefs, SEMrush, Google Search Console, Schema.org',
          delivery: 'On-Page Architecture, Content Clustering & Backlink Outreach',
          sla: 'Top 3-5 SERP Target Keyword Trajectory'
        };
      case 'graphic-design':
        return {
          framework: 'Adobe Creative Suite, Illustrator, Photoshop, Figma',
          delivery: 'Full Brand Book, Vector Master Assets & Guidelines',
          sla: 'Vector-Perfect Resolution & Print-Ready Standards'
        };
      case 'server-management':
        return {
          framework: 'Ubuntu, RHEL, Nginx, Docker, Terraform, Prometheus',
          delivery: '24/7 Monitoring, Automated Failover & Security Hardening',
          sla: '99.99% Guaranteed Infrastructure Uptime'
        };
      case '2d-animation':
        return {
          framework: 'Adobe After Effects, Premiere Pro, Animate, Illustrator',
          delivery: 'Concept Scripting, Storyboarding, Voiceover & 4K Render',
          sla: '60fps Ultra-HD Broadcast Quality'
        };
      case 'it-outsourcing':
        return {
          framework: 'Dedicated Senior Full-Stack, Mobile & QA Squads',
          delivery: 'Agile Team Augmentation with Daily Standups & Slack Sync',
          sla: '48-Hour Onboarding & Time-Zone Alignment'
        };
      case 'website-maintenance':
        return {
          framework: 'Automated Patching, Cloudflare WAF, Daily S3 Backups',
          delivery: 'Continuous Vulnerability Scans & Weekly Speed Optimization',
          sla: '< 1-Hour Critical Incident Response SLA'
        };
      default:
        return {
          framework: 'Cloud-Native Modern Enterprise Toolchains',
          delivery: 'Agile Lifecycle Execution & CI/CD Pipeline',
          sla: '99.99% Availability & Verified Quality'
        };
    }
  };

  const specs = getServiceSpecs(activeSolution.id);

  return (
    <section id="what-we-do" className="relative py-20 md:py-32 bg-[#FBF9F5] border-t border-black/[0.08]">
      {/* Anchor alias for Floating Section Nav "How we help" */}
      <div id="how-we-help" className="absolute -top-24 left-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[#FF462D] font-mono text-xs font-semibold tracking-eyebrow uppercase">
              // WHAT WE DO & HOW WE HELP
            </span>
            <div className="h-[1px] w-12 bg-[#FF462D]/40" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#121212] mb-5">
            End-to-end digital engineering and creative capabilities.
          </h2>
          <p className="text-base sm:text-lg text-[#555555] leading-relaxed">
            Explore our specialized practice areas—from corporate web design and mobile app ecosystems to 24/7 server infrastructure, graphics, and IT outsourcing.
          </p>
        </div>

        {/* Tab Controls: All 11 Services with Icons */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar border-b border-black/[0.08]">
          {WHAT_WE_DO_SERVICES.map((sol, index) => {
            const TabIcon = sol.icon;
            const isActive = activeTab === index;
            return (
              <button
                key={sol.id}
                onClick={() => setActiveTab(index)}
                className={`inline-flex items-center gap-2.5 px-5 py-3 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 whitespace-nowrap cursor-pointer shadow-xs active:scale-[0.98] ${
                  isActive
                    ? 'bg-[#FF462D] text-white shadow-md'
                    : 'bg-[#F4F0E8] text-[#555555] hover:bg-[#ECE7DD] hover:text-[#121212]'
                }`}
              >
                <TabIcon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-[#737373]'}`} />
                <span>{sol.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Solution Showcase Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch bg-white rounded-3xl p-8 sm:p-12 border border-black/[0.08] shadow-kyndryl">
          
          {/* Left Column: Narrative, Description & Deliverables */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full bg-[#FF462D]/10 text-[#FF462D] text-xs font-mono font-semibold uppercase tracking-wider">
                  {activeSolution.badge}
                </span>
                <span className="text-xs font-mono text-[#888888] uppercase">
                  {activeSolution.category}
                </span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-bold text-[#121212] tracking-tight mb-4">
                {activeSolution.title}
              </h3>

              <p className="text-base sm:text-lg text-[#555555] leading-relaxed mb-8">
                {activeSolution.description}
              </p>

              {/* Highlights Checklist */}
              <div className="space-y-3.5 mb-8">
                {activeSolution.highlights?.map((hl, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-sm sm:text-base font-medium text-[#333333]">{hl}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Benchmark Metric + Actions */}
            <div className="pt-6 border-t border-black/[0.06] flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono uppercase text-[#737373]">
                  Performance Standard:
                </span>
                <span className="text-sm sm:text-base font-bold font-mono text-[#FF462D]">
                  {activeSolution.metric}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Link
                  to={`/services/${activeSolution.id}`}
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full border border-black/20 text-xs sm:text-sm font-medium text-[#121212] hover:bg-black/5 hover:border-black/40 transition group/btn"
                >
                  <span>Explore Service Page</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-1 text-[#FF462D]" />
                </Link>

                <button
                  type="button"
                  onClick={onContactClick}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#121212] text-white text-xs sm:text-sm font-medium transition hover:bg-[#FF462D] cursor-pointer group shadow-sm active:scale-[0.98]"
                >
                  <span>Let's talk</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              </div>
            </div>

          </div>

          {/* Right Column: Architectural Technical Specifications Card */}
          <div className="lg:col-span-5 bg-[#FAF7F2] rounded-2xl p-8 border border-black/[0.06] flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-[#FF462D] mb-6 border border-black/5">
                <IconComponent className="w-7 h-7" />
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-white border border-black/5">
                  <span className="text-xs uppercase font-mono text-[#777777] block mb-1">
                    Tech Stack & Ecosystem
                  </span>
                  <span className="text-sm font-semibold text-[#121212]">
                    {specs.framework}
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-white border border-black/5">
                  <span className="text-xs uppercase font-mono text-[#777777] block mb-1">
                    Delivery & Deployment Model
                  </span>
                  <span className="text-sm font-semibold text-[#121212]">
                    {specs.delivery}
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-white border border-black/5">
                  <span className="text-xs uppercase font-mono text-[#777777] block mb-1">
                    Quality & Reliability Standard
                  </span>
                  <span className="text-sm font-semibold text-[#FF462D] font-mono">
                    {specs.sla}
                  </span>
                </div>
              </div>
            </div>

            <p className="text-xs text-[#888888] font-mono mt-6">
              VERIFIED SERVICE PRACTICE // QUBIT DIGITAL SOLUTIONS
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
