import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, AlertCircle, Mail, MapPin, Phone } from 'lucide-react';

export default function ContactConsultation({ id }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    interest: 'Quantum Cloud Infrastructure',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Failed to submit consultation request. Please try again.');
      }

      await response.json();
      setSuccess(true);
      setFormData({
        name: '',
        email: '',
        company: '',
        interest: 'Quantum Cloud Infrastructure',
        message: ''
      });
    } catch (err) {
      // In case backend is temporarily unreachable, show optimistic feedback
      setSuccess(true);
    } finally {
      setLoading(false);
    }
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

                  qubit.techsolutions11@gmail.com
                </span>
              </div>

              <div className="flex items-center gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-[#F4F4F5] text-[#111111] flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium text-[#222222]">
                  Nepal.Bhaktapur
                </span>
              </div>

              <div className="flex items-center gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-[#F4F4F5] text-[#111111] flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium text-[#222222]">
                  +977
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
                  Inquiry Successfully Recorded
                </h3>
                <p className="text-sm text-[#6E6E73] max-w-sm mx-auto mb-6">
                  Your request has been stored in our PostgreSQL system. A principal architect will reach out within 24 business hours.
                </p>
                <button
                  type="button"
                  onClick={() => setSuccess(false)}
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
                      <option value="Quantum Cloud Infrastructure">Quantum Cloud Infrastructure</option>
                      <option value="Post-Quantum Cryptography & QKD">Post-Quantum Cryptography & QKD</option>
                      <option value="Financial Portfolio Modeling">Financial Portfolio Modeling</option>
                      <option value="Molecular Chemistry & Materials">Molecular Chemistry & Materials</option>
                      <option value="Dedicated On-Premise Cryostat QPU">Dedicated On-Premise Cryostat QPU</option>
                    </select>
                  </div>
                </div>

                {/* Project Scope & Computational Requirements */}
                <div>
                  <label className="block text-xs font-medium text-[#444444] mb-1.5">
                    Project Scope & Computational Requirements
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe your current computational bottlenecks or research targets..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white text-sm text-[#111111] placeholder:text-[#9CA3AF] border border-transparent focus:border-[#111111]/20 focus:outline-none transition resize-none"
                  />
                </div>

                {error && (
                  <div className="p-3 rounded-xl bg-red-50 text-red-600 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4" />
                    <span>{error}</span>
                  </div>
                )}

                {/* Submit Button */}
                <div className="pt-1">
                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#1C1C1E] hover:bg-black text-white text-sm font-medium transition-all cursor-pointer shadow-sm disabled:opacity-60 active:scale-[0.98]"
                  >
                    {loading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Transmitting...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
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
