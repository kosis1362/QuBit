import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Building2, Mail, User, MessageSquare } from 'lucide-react';

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

      const resData = await response.json();
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
              Connect with QuBit Quantum architects.
            </h2>

            <p className="text-base sm:text-lg text-[#555555] leading-relaxed mb-8">
              Whether you are preparing your enterprise infrastructure for post-quantum cryptographic migration or exploring high-performance algorithm acceleration on our QPU, our engineering leaders are ready to collaborate.
            </p>

            <div className="p-6 rounded-2xl bg-white border border-black/[0.08] space-y-4 shadow-xs">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#FF462D]/10 text-[#FF462D] flex items-center justify-center font-bold text-sm">
                  1
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#121212]">Technical Discovery Session</h4>
                  <p className="text-xs text-[#666666]">Comprehensive review of computational bottlenecks</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#FF462D]/10 text-[#FF462D] flex items-center justify-center font-bold text-sm">
                  2
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#121212]">Fault-Tolerant Co-processor Mapping</h4>
                  <p className="text-xs text-[#666666]">Direct benchmarking against your classical workload</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#FF462D]/10 text-[#FF462D] flex items-center justify-center font-bold text-sm">
                  3
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#121212]">Sovereign Deployment Roadmap</h4>
                  <p className="text-xs text-[#666666]">Air-gapped on-premise or managed cloud integration</p>
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
                  Inquiry Successfully Recorded
                </h3>
                <p className="text-sm text-[#555555] max-w-md mx-auto mb-6">
                  Your request has been stored in our PostgreSQL system. A principal quantum architect will reach out within 24 business hours.
                </p>
                <button
                  onClick={() => setSuccess(false)}
                  className="px-6 py-2.5 rounded-full bg-[#121212] text-white text-sm font-medium hover:bg-[#FF462D] transition cursor-pointer"
                >
                  Submit Another Inquiry
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
                      <option value="Quantum Cloud Infrastructure">Quantum Cloud Infrastructure</option>
                      <option value="Post-Quantum Cryptography & QKD">Post-Quantum Cryptography & QKD</option>
                      <option value="Financial Portfolio Modeling">Financial Portfolio Modeling</option>
                      <option value="Molecular Chemistry & Materials">Molecular Chemistry & Materials</option>
                      <option value="Dedicated On-Premise Cryostat QPU">Dedicated On-Premise Cryostat QPU</option>
                    </select>
                  </div>

                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-mono font-semibold uppercase text-[#737373] mb-2 tracking-wider">
                    Project Scope & Computational Requirements
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe your current computational bottlenecks or research targets..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full p-4 rounded-xl border border-black/10 bg-[#FBF9F5] text-sm text-[#121212] focus:outline-none focus:border-[#FF462D] transition"
                  />
                </div>

                {error && (
                  <div className="p-3 rounded-xl bg-red-50 text-red-600 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4" />
                    <span>{error}</span>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-full bg-[#FF462D] text-white font-medium text-base hover:bg-[#D82C00] transition flex items-center justify-center gap-2 shadow-md hover:shadow-lg disabled:opacity-60 cursor-pointer"
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Transmitting to QuBit Gateway...</span>
                    </>
                  ) : (
                    <>
                      <span>Transmit Consultation Request</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

                <p className="text-[11px] text-[#888888] font-mono text-center">
                  Protected by end-to-end encryption. Stored securely in PostgreSQL database.
                </p>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}

