import React from 'react';
import {
  Users,
  Laptop,
  Lightbulb,
  ThumbsUp,
  MessageSquare,
  Headphones
} from 'lucide-react';

const WHY_CHOOSE_US_DATA = [
  {
    title: 'PROFESSIONAL AND EXPERIENCED TEAM',
    desc: "QuBit's experienced tech team ensures your project specifications are fulfilled with precision and industry-best coding standards are rigorously adopted.",
    icon: Users
  },
  {
    title: 'LATEST TRENDS AND TECHNOLOGY',
    desc: 'At QuBit, we leverage the latest engineering trends and modern technology frameworks so we deliver high-performance, future-ready solutions to our clients.',
    icon: Laptop
  },
  {
    title: 'INNOVATIVE AND CREATIVE IDEAS',
    desc: 'Creativity and technical innovation are essential to modern competitive advantage. You will always receive strategic, high-impact ideas for your project from us.',
    icon: Lightbulb
  },
  {
    title: 'GREAT QUALITY',
    desc: 'We are best at what we do and take utmost pride in delivering exceptional quality. Our QA team rigorously tests systems before final deployment to ensure zero defects.',
    icon: ThumbsUp
  },
  {
    title: 'EXCELLENT COMMUNICATION',
    desc: 'We believe proactive communication is a core foundation of project success. We understand your goals, communicate clearly throughout development, listen, discuss, and deliver.',
    icon: MessageSquare
  },
  {
    title: 'SUPPORT AND SUGGESTIONS',
    desc: 'Our focus extends beyond initial delivery to ongoing technical support and optimization suggestions. Our dedicated team is always ready to assist you after deployment.',
    icon: Headphones
  }
];

export default function WhyChooseUsSection() {
  return (
    <section id="why-choose-us" className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-black/[0.06]">
      <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">

        {/* Section Header: Centered uppercase title matching Image 3 */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <span className="text-[#009688] font-mono text-xs font-semibold tracking-eyebrow uppercase block mb-2">

          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#121212] uppercase">
            WHY CHOOSE US?
          </h2>
          <div className="w-12 h-1 bg-[#009688] mx-auto mt-4 rounded-full" />
        </div>

        {/* 6-Card Grid matching Image 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WHY_CHOOSE_US_DATA.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-7 sm:p-8 shadow-sm border border-black/[0.07] hover:shadow-md hover:border-[#009688]/30 transition-all duration-200 flex flex-col justify-start group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#E0F7F4] text-[#009688] flex items-center justify-center mb-5 group-hover:bg-[#009688] group-hover:text-white transition-colors duration-200">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-[#121212] tracking-wide uppercase mb-3 leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-[#555555] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
