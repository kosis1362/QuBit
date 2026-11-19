import React, { useState, useEffect } from 'react';
import { RefreshCw, Activity } from 'lucide-react';

export default function MetricsStrip() {
  const [metrics, setMetrics] = useState({
    coherence_time_us: 420.8,
    two_qubit_gate_fidelity_pct: 99.94,
    quantum_volume: 262144,
    cryogenic_temperature_mk: 14.2,
    live_qubit_count: 1152,
    active_global_clusters: 24
  });
  const [loading, setLoading] = useState(false);

  const fetchMetrics = async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/metrics');
      if (res.ok) {
        const data = await res.json();
        setMetrics(data);
      }
    } catch (e) {
      console.log('Using default quantum metrics', e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMetrics();
    const interval = setInterval(fetchMetrics, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="metrics" className="py-16 md:py-24 bg-[#FAF7F2] border-y border-black/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[#FF462D] font-mono text-xs font-semibold tracking-eyebrow uppercase">
                // SYSTEM TELEMETRY
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#121212]">
              Global Quantum Performance Verification
            </h2>
          </div>

          <button
            onClick={fetchMetrics}
            disabled={loading}
            className="self-start sm:self-auto inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-black/10 text-xs font-mono text-[#555555] hover:border-black/30 hover:text-[#121212] transition"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin text-[#FF462D]' : ''}`} />
            <span>POLL FASTAPI TELEMETRY</span>
          </button>
        </div>

        {/* 4-Column Metric Grid with Kyndryl hairline dividers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-black/[0.1] bg-white rounded-2xl border border-black/[0.08] shadow-sm overflow-hidden">
          
          {/* Metric 1 */}
          <div className="p-8 sm:p-10 flex flex-col justify-between group hover:bg-[#FBF9F5] transition-colors">
            <span className="text-xs uppercase font-mono tracking-wider text-[#737373] mb-4">
              Physical QPU Scale
            </span>
            <div className="text-5xl sm:text-6xl font-extrabold text-[#121212] tracking-tight mb-3">
              {metrics.live_qubit_count || '1,152'}
              <span className="text-[#FF462D] text-3xl font-normal ml-1">q</span>
            </div>
            <p className="text-sm text-[#555555] leading-relaxed">
              Monolithic transmon arrays deployed across 4 interconnected dilution refrigeration stages.
            </p>
          </div>

          {/* Metric 2 */}
          <div className="p-8 sm:p-10 flex flex-col justify-between group hover:bg-[#FBF9F5] transition-colors">
            <span className="text-xs uppercase font-mono tracking-wider text-[#737373] mb-4">
              2-Qubit Gate Fidelity
            </span>
            <div className="text-5xl sm:text-6xl font-extrabold text-[#FF462D] tracking-tight mb-3">
              {metrics.two_qubit_gate_fidelity_pct || '99.94'}
              <span className="text-[#121212] text-3xl font-normal ml-0.5">%</span>
            </div>
            <p className="text-sm text-[#555555] leading-relaxed">
              Randomized benchmarking average across cross-resonance and parametric flux drives.
            </p>
          </div>

          {/* Metric 3 */}
          <div className="p-8 sm:p-10 flex flex-col justify-between group hover:bg-[#FBF9F5] transition-colors">
            <span className="text-xs uppercase font-mono tracking-wider text-[#737373] mb-4">
              Coherence Time (T2)
            </span>
            <div className="text-5xl sm:text-6xl font-extrabold text-[#121212] tracking-tight mb-3">
              {metrics.coherence_time_us || '420.8'}
              <span className="text-[#FF462D] text-2xl font-normal ml-1">µs</span>
            </div>
            <p className="text-sm text-[#555555] leading-relaxed">
              Extended Ramsey dephasing coherence sustained via active dynamical decoupling pulses.
            </p>
          </div>

          {/* Metric 4 */}
          <div className="p-8 sm:p-10 flex flex-col justify-between group hover:bg-[#FBF9F5] transition-colors">
            <span className="text-xs uppercase font-mono tracking-wider text-[#737373] mb-4">
              Thermal Noise Floor
            </span>
            <div className="text-5xl sm:text-6xl font-extrabold text-[#121212] tracking-tight mb-3">
              {metrics.cryogenic_temperature_mk || '14.2'}
              <span className="text-[#FF462D] text-2xl font-normal ml-1">mK</span>
            </div>
            <p className="text-sm text-[#555555] leading-relaxed">
              Closed-cycle dry dilution refrigerator base temperature, near absolute zero (-273.136 °C).
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
