import React, { useState, useEffect } from 'react';
import { CheckCircle2, Building2, Mail, User } from 'lucide-react';
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
    <section id={id || "contact"} className="py-20 md:py-32 bg-[#FAF7F2] border-t border-black/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Narrative Column */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[#FF462D] font-mono text-xs font-semibold tracking-eyebrow uppercase">
                // ENTERPRISE ENGAGEMENT
              </span>
              <div className="h-[1px] w-12 bg-[#FF462D]/40" />
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#121212] mb-6">
              Connect with QuBit.
            </h2>

            <p className="text-base sm:text-lg text-[#555555] leading-relaxed mb-8">
              Whether you are launching a high-converting corporate platform, scaling an e-commerce store, or building custom enterprise software, our engineering leaders are ready to collaborate.
            </p>

            <div className="p-6 rounded-2xl bg-white border border-black/[0.08] space-y-4 shadow-xs">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#FF462D]/10 text-[#FF462D] flex items-center justify-center font-bold text-sm">
                  1
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#121212]">Technical Discovery Session</h4>
                  <p className="text-xs text-[#666666]">Comprehensive review of your business goals &amp; workflows</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#FF462D]/10 text-[#FF462D] flex items-center justify-center font-bold text-sm">
                  2
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#121212]">Solution Architecture Mapping</h4>
                  <p className="text-xs text-[#666666]">Tailored web, mobile, cloud, or ERP system blueprint</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#FF462D]/10 text-[#FF462D] flex items-center justify-center font-bold text-sm">
                  3
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#121212]">Production Deployment Roadmap</h4>
                  <p className="text-xs text-[#666666]">Agile delivery milestones with ongoing support &amp; SEO</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-12 border border-black/[0.08] shadow-kyndryl">

            {success ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-[#121212] mb-2">
                  Consultation Draft Ready
                </h3>
                <p className="text-sm text-[#555555] max-w-md mx-auto mb-6">
                  If you&apos;ve sent your email in Gmail, our team will reach out within 24 business hours. Need to reach out again?
                </p>
                <button
                  type="button"
                  onClick={handleSendAnother}
                  className="px-6 py-2.5 rounded-full bg-[#121212] text-white text-sm font-medium hover:bg-[#FF462D] transition cursor-pointer"
                >
                  Send Another Query
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-mono font-semibold uppercase text-[#737373] mb-2 tracking-wider">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-[#888888] absolute left-3.5 top-3.5 pointer-events-none" />
                      <input
                        type="text"
                        required
                        placeholder="Dr. Alan Turing"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-black/10 bg-[#FBF9F5] text-sm text-[#121212] focus:outline-none focus:border-[#FF462D] transition"
                      />
                    </div>
                  </div>

                  {/* Work Email */}
                  <div>
                    <label className="block text-xs font-mono font-semibold uppercase text-[#737373] mb-2 tracking-wider">
                      Work Email *
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-[#888888] absolute left-3.5 top-3.5 pointer-events-none" />
                      <input
                        type="email"
                        required
                        placeholder="alan@enterprise.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-black/10 bg-[#FBF9F5] text-sm text-[#121212] focus:outline-none focus:border-[#FF462D] transition"
                      />
                    </div>
                  </div>

                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                  {/* Company */}
                  <div>
                    <label className="block text-xs font-mono font-semibold uppercase text-[#737373] mb-2 tracking-wider">
                      Organization / Company
                    </label>
                    <div className="relative">
                      <Building2 className="w-4 h-4 text-[#888888] absolute left-3.5 top-3.5 pointer-events-none" />
                      <input
                        type="text"
                        placeholder="Acme Global Corp"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-black/10 bg-[#FBF9F5] text-sm text-[#121212] focus:outline-none focus:border-[#FF462D] transition"
                      />
                    </div>
                  </div>

                  {/* Area of Interest */}
                  <div>
                    <label className="block text-xs font-mono font-semibold uppercase text-[#737373] mb-2 tracking-wider">
                      Strategic Focus
                    </label>
                    <select
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-black/10 bg-[#FBF9F5] text-sm text-[#121212] focus:outline-none focus:border-[#FF462D] transition cursor-pointer"
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

                {/* Message */}
                <div>
                  <label className="block text-xs font-mono font-semibold uppercase text-[#737373] mb-2 tracking-wider">
                    Project Scope &amp; Requirements
                  </label>
                  <textarea
                    rows={4}
                    maxLength={1500}
                    placeholder="Describe your project goals, timeline, or technical requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full p-4 rounded-xl border border-black/10 bg-[#FBF9F5] text-sm text-[#121212] focus:outline-none focus:border-[#FF462D] transition"
                  />
                </div>

                {/* Compose an Email Button */}
                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-[#FF462D] text-white font-medium text-base hover:bg-[#D82C00] transition flex items-center justify-center gap-2 shadow-md hover:shadow-lg cursor-pointer"
                >
                  <Mail className="w-4 h-4" />
                  <span>Compose an Email</span>
                </button>



              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}

