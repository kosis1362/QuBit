import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle2, Mail, MapPin, Phone } from 'lucide-react';
import {
  getConsultationSent,
  setConsultationSent,
  clearConsultationSent
} from '../utils/consultationStorage';

export default function ContactConsultation({ id }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    interest: 'Corporate Website Design',
    message: ''
  });
  const [success, setSuccess] = useState(() => getConsultationSent());

  useEffect(() => {
    const syncSentState = () => {
      if (getConsultationSent()) {
        setSuccess(true);
      }
    };
    window.addEventListener('pageshow', syncSentState);
    return () => window.removeEventListener('pageshow', syncSentState);
  }, []);

  const COMPANY_EMAIL = 'qubit.techsolutions11@gmail.com';

  const buildGmailUrl = (data) => {
    const subject = encodeURIComponent(
      `Consultation Request: ${data.interest} - ${data.name || 'New Inquiry'}`
    );
    const body = encodeURIComponent(
      [
        `From: ${data.name} (${data.email})`,
        `Organization / Company: ${data.company || 'N/A'}`,
        `Strategic Focus: ${data.interest}`,
        '',
        'Project Scope & Requirements:',
        data.message || 'N/A'
      ].join('\n')
    );

    return `https://mail.google.com/mail/?view=cm&fs=1&to=${COMPANY_EMAIL}&su=${subject}&body=${body}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const gmailUrl = buildGmailUrl(formData);

    setConsultationSent();
    setSuccess(true);
    setFormData({
      name: '',
      email: '',
      company: '',
      interest: 'Corporate Website Design',
      message: ''
    });

    window.location.href = gmailUrl;
  };

  const handleSendAnother = () => {
    clearConsultationSent();
    setSuccess(false);
  };

  return (
    <section id={id || 'contact'} className="py-6 sm:py-10 bg-white text-[#111111]">
      <div className="w-full px-2 sm:px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">

          {/* Left Column: Heading, Copy & Contact Details */}
          <div className="lg:col-span-5 flex flex-col justify-between lg:min-h-[460px] pt-2">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-medium tracking-[-0.03em] leading-[1.12] text-[#111111] mb-4">
                Talk to our
                <br />
                support team
              </h2>

              <p className="text-sm sm:text-[15px] text-[#6E6E73] leading-relaxed max-w-xs">
                Feel free to reach out for project inquiries, enterprise architecture, or any questions you may have.
              </p>
            </div>

            {/* Contact Info Rows */}
            <div className="mt-10 lg:mt-16 space-y-3.5">
              <div className="flex items-center gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-[#F4F4F5] text-[#111111] flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium text-[#222222]">
                  {COMPANY_EMAIL}
                </span>
              </div>

              <div className="flex items-center gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-[#F4F4F5] text-[#111111] flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium text-[#222222]">
                  India · Global Enterprise Delivery
                </span>
              </div>

              <div className="flex items-center gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-[#F4F4F5] text-[#111111] flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium text-[#222222]">
                  +91 98765 43210
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Soft Gray Form Card */}
          <div className="lg:col-span-7 bg-[#F4F4F5] rounded-2xl p-6 sm:p-8">
            {success ? (
              <div className="text-center py-12">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-semibold text-[#111111] mb-2">
                  Email Draft Opened
                </h3>
                <p className="text-sm text-[#6E6E73] max-w-sm mx-auto mb-6">
                  Your consultation details have been pre-filled in Gmail for {COMPANY_EMAIL}.
                </p>
                <button
                  type="button"
                  onClick={handleSendAnother}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#1C1C1E] text-white text-sm font-medium hover:bg-black transition cursor-pointer"
                >
                  <span>Submit Another Inquiry</span>
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-medium text-[#444444] mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Dr. Alan Turing"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white text-sm text-[#111111] placeholder:text-[#9CA3AF] border border-transparent focus:border-[#111111]/20 focus:outline-none transition"
                    />
                  </div>

                  {/* Work Email */}
                  <div>
                    <label className="block text-xs font-medium text-[#444444] mb-1.5">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alan@enterprise.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white text-sm text-[#111111] placeholder:text-[#9CA3AF] border border-transparent focus:border-[#111111]/20 focus:outline-none transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Organization / Company */}
                  <div>
                    <label className="block text-xs font-medium text-[#444444] mb-1.5">
                      Organization / Company
                    </label>
                    <input
                      type="text"
                      placeholder="Acme Global Corp"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white text-sm text-[#111111] placeholder:text-[#9CA3AF] border border-transparent focus:border-[#111111]/20 focus:outline-none transition"
                    />
                  </div>

                  {/* Strategic Focus */}
                  <div>
                    <label className="block text-xs font-medium text-[#444444] mb-1.5">
                      Strategic Focus
                    </label>
                    <select
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white text-sm text-[#111111] border border-transparent focus:border-[#111111]/20 focus:outline-none transition cursor-pointer"
                    >
                      <option value="Corporate Website Design">Corporate Website Design</option>
                      <option value="E-commerce Solution">E-commerce Solution</option>
                      <option value="Mobile App Development">Mobile App Development</option>
                      <option value="Software Development">Software Development</option>
                      <option value="Search Engine Optimization">Search Engine Optimization</option>
                      <option value="Graphics Designing">Graphics Designing</option>
                      <option value="2D Animation">2D Animation</option>
                      <option value="Server Management">Server Management</option>
                    </select>
                  </div>
                </div>

                {/* Project Scope & Requirements */}
                <div>
                  <label className="block text-xs font-medium text-[#444444] mb-1.5">
                    Project Scope &amp; Requirements
                  </label>
                  <textarea
                    rows={4}
                    maxLength={1500}
                    placeholder="Describe your project goals, timeline, or technical requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white text-sm text-[#111111] placeholder:text-[#9CA3AF] border border-transparent focus:border-[#111111]/20 focus:outline-none transition resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-1">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#1C1C1E] hover:bg-black text-white text-sm font-medium transition-all cursor-pointer shadow-sm active:scale-[0.98]"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Compose an Email</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
