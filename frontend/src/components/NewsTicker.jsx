import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function NewsTicker() {
  const newsItems = [
    {
      category: "EVENTS",
      headline: "Nov 20-22: QuBit Quantum Platform Summit 2026 — Sovereign Enterprise Infrastructure",
      href: "#events",
      meta: "Bengaluru & Virtual"
    },
    {
      category: "PRESS RELEASE",
      headline: "QuBit announces deployment of 1,152-qubit fault-tolerant superconducting processor",
      href: "#press",
      meta: "Press Dispatch"
    },
    {
      category: "WHITEPAPER",
      headline: "DPDP & Post-Quantum Enterprise Readiness in India and Global Markets",
      href: "#whitepaper",
      meta: "Readiness Architecture"
    }
  ];

  return (
    <section className="bg-white border-b border-black/[0.08] text-[#121212]">
      <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-black/[0.08]">
          {newsItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="py-7 px-4 sm:px-8 group hover:bg-[#FBF9F5] transition-colors flex flex-col justify-between"
            >
              <div>
                {/* Category Tag with Terracotta Indicator Bar */}
                <div className="mb-2.5">
                  <span className="text-[11px] font-semibold tracking-wider uppercase text-[#737373] font-mono">
                    {item.category}
                  </span>
                  <div className="h-[2px] w-5 bg-[#FF462D] mt-1 transition-all duration-300 group-hover:w-8" />
                </div>

                {/* Headline */}
                <h3 className="text-base sm:text-[17px] font-medium text-[#121212] leading-snug group-hover:text-[#FF462D] transition-colors line-clamp-2">
                  {item.headline}
                </h3>
              </div>

              {/* Bottom Meta */}
              <div className="pt-4 flex items-center justify-between text-xs text-[#888888]">
                <span>{item.meta}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#888888] group-hover:text-[#FF462D] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

