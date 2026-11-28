import React from 'react';

export default function Footer({ onContactClick, onSimulateClick }) {
  const quickLinksCol1 = [
    { label: 'About us', href: '#who-we-are' },
    { label: 'Consulting services', href: '#how-we-help' },
    { label: 'Contact us', href: '#connect-with-us', onClick: onContactClick },
  ];

  const quickLinksCol2 = [

    { label: 'Technology services', href: '#our-expertise' },
  ];

  const legalLinks = [
    'Privacy',
    'Terms',
    'Security',
    'Accessibility',
    'Sitemap',

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


            <div className="flex items-center gap-3 sm:gap-4">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/qubit-tech-aaa7a3452"
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

              {/* Gmail */}
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=qubit.techsolutions11@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="w-7 h-7 text-[#2B2B2B] hover:text-[#FF462D] transition flex items-center justify-center font-bold text-sm"
                aria-label="Gmail: qubit.techsolutions11@gmail.com"
                title="Compose email to qubit.techsolutions11@gmail.com on Gmail"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.146C21.69 2.28 24 3.434 24 5.457z" />
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href="https://whatsapp.com"
                target="_blank"
                rel="noreferrer"
                className="w-7 h-7 text-[#2B2B2B] hover:text-[#FF462D] transition flex items-center justify-center font-bold text-sm"
                aria-label="WhatsApp"
                title="WhatsApp"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.031 2c-5.516 0-9.969 4.453-9.969 9.969 0 1.766.469 3.484 1.344 5L2 22l5.156-1.344c1.469.797 3.141 1.219 4.875 1.219 5.516 0 9.969-4.453 9.969-9.969C22 6.453 17.547 2 12.031 2zm5.813 14.125c-.25.703-1.438 1.344-2 1.422-.516.078-1.172.109-1.891-.125-.438-.141-1-.328-1.719-.641-3.016-1.297-4.984-4.328-5.141-4.531-.156-.203-1.234-1.641-1.234-3.125 0-1.484.781-2.219 1.063-2.516.281-.297.609-.375.813-.375.203 0 .406 0 .578.016.188.016.438-.078.688.516.25.609.859 2.094.938 2.25.078.156.125.344.031.547-.094.203-.141.328-.297.5-.156.172-.328.391-.469.516-.156.141-.313.297-.141.594.172.297.766 1.266 1.641 2.047 1.125 1 2.078 1.313 2.375 1.469.297.156.469.125.641-.078.172-.203.734-.859.938-1.156.203-.297.406-.25.672-.156.266.094 1.719.813 2.016.953.297.141.484.219.563.344.078.125.078.719-.172 1.422z" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/share/1Fo8CvVbZ3/"
                target="_blank"
                rel="noreferrer"
                className="w-7 h-7 text-[#2B2B2B] hover:text-[#FF462D] transition flex items-center justify-center font-bold text-sm"
                aria-label="Facebook"
                title="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Middle Row: Tagline on Left, Quick Links on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center py-2 sm:py-3">

          {/* Left Column: Signature Tagline */}
          <div className="lg:col-span-6 flex items-center">
            <h2 className="text-2xl sm:text-3xl lg:text-[46px] xl:text-[52px] font-medium tracking-tight text-[#2B2B2B] leading-tight">
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
