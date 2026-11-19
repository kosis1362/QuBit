import React from 'react';

export default function Footer({ onContactClick, onSimulateClick }) {
  const quickLinksCol1 = [
    { label: 'About us', href: '#who-we-are' },
    { label: 'Careers', href: '#careers' },
    { label: 'Consulting services', href: '#how-we-help' },
    { label: 'Contact us', href: '#connect-with-us', onClick: onContactClick },
  ];

  const quickLinksCol2 = [
    { label: 'Industries', href: '#industries' },
    { label: 'Locations', href: '#locations' },
    { label: 'Technology services', href: '#our-expertise' },
  ];

  const legalLinks = [
    'Privacy',
    'Terms',
    'Security',
    'Certifications',
    'Accessibility',
    'Sitemap',
    'Do not sell or share my personal information',
    'Cookie Preferences',
  ];

  return (
    <footer className="w-full h-full bg-[#ECEAE6] text-[#2B2B2B] flex flex-col justify-between py-5 sm:py-7 lg:py-8 select-none">
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 flex-1 flex flex-col justify-between">

        {/* Top Header Row: Logo on Left, Language & Socials on Right */}
        <div className="flex items-center justify-between pb-2 sm:pb-3">
          {/* Brand Logo in terracotta red */}
          <a
            href="/"
            className="text-4xl sm:text-5xl lg:text-[74px] font-bold tracking-tight text-[#FF462D] hover:opacity-90 transition-opacity leading-none"
            aria-label="QuBit Home"
          >
            QuBit
          </a>

          {/* Top Right: Language Selector + Social Links */}
          <div className="flex items-center gap-5 sm:gap-7">
            <button
              type="button"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-[#2B2B2B] hover:text-[#FF462D] transition cursor-pointer"
            >
              <span>IN - EN</span>
              <span className="text-[10px]">▲</span>
            </button>

            <div className="flex items-center gap-3 sm:gap-4">
              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-7 h-7 rounded bg-[#2B2B2B] text-[#ECEAE6] hover:bg-[#FF462D] hover:text-white transition flex items-center justify-center font-bold text-xs"
                aria-label="LinkedIn"
              >
                in
              </a>

              {/* Twitter / X */}
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                className="w-7 h-7 text-[#2B2B2B] hover:text-[#FF462D] transition flex items-center justify-center font-bold text-sm"
                aria-label="X (formerly Twitter)"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Middle Row: Tagline on Left, Quick Links on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center py-2 sm:py-3">

          {/* Left Column: Signature Tagline */}
          <div className="lg:col-span-6 flex items-start">
            <h2 className="text-2xl sm:text-3xl lg:text-[70px] font-medium tracking-tight text-[#2B2B2B] leading-tight">
              Track Your Progress<sup className="text-xs sm:text-sm font-semibold ml-0.5">TM</sup>
            </h2>
          </div>

          {/* Right Column: Quick Links */}
          <div className="lg:col-span-6 lg:pl-10">
            <div className=" sm:text-[20px] sm:text-xs font-semibold tracking-[0.16em] uppercase text-[#0062FF] mb-2 sm:mb-2.5">
              QUICK LINKS
            </div>

            <div className="grid grid-cols-2 gap-x-8 gap-y-1.5 sm:gap-y-2 text-xs sm:text-[20px]">
              <ul className="space-y-1.5 sm:space-y-2">
                {quickLinksCol1.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={link.onClick}
                      className="text-[#2B2B2B] hover:text-[#FF462D] transition-colors duration-150 inline-block"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>

              <ul className="space-y-1.5 sm:space-y-2">
                {quickLinksCol2.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[#2B2B2B] hover:text-[#FF462D] transition-colors duration-150 inline-block"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom Row: Legal bar & Copyright */}
        <div className="pt-2 space-y-1.5">
          <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[11px] text-[#555555]">
            {legalLinks.map((item, idx) => (
              <React.Fragment key={item}>
                <a
                  href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className="hover:text-[#1A1A1A] transition-colors"
                >
                  {item}
                </a>
                {idx < legalLinks.length - 1 && (
                  <span className="text-[#888888] select-none">|</span>
                )}
              </React.Fragment>
            ))}
          </div>

          <div className="text-[11px] text-[#666666]">
            &copy; {new Date().getFullYear()} QuBit Inc. All rights reserved.
          </div>
        </div>

      </div>
    </footer>
  );
}
