import React, { useState } from 'react';
import {
  ShieldCheck,
  Globe2,
  Server,
  Headphones,
  ArrowRight,
  Play,
  CheckCircle2,
  Lock,
  Building2,
  X,
  Send,
} from 'lucide-react';

export const EnterpriseSection: React.FC = () => {
  const [showDemoModal, setShowDemoModal] = useState(false);
  const [showSalesModal, setShowSalesModal] = useState(false);
  const [salesSubmitted, setSalesSubmitted] = useState(false);
  const [salesForm, setSalesForm] = useState({
    name: '',
    email: '',
    company: '',
    seats: '50-250 seats',
    notes: '',
  });

  const enterpriseFeatures = [
    {
      icon: ShieldCheck,
      title: 'Secure Enclave',
      desc: 'Hardware-backed isolation for spatial point clouds, eye tracking biometric tokens, and local encrypted vault storage.',
      metric: 'FIPS 140-3 Level 3',
    },
    {
      icon: Globe2,
      title: 'Global Sync',
      desc: 'Sub-millisecond state replication across multi-user spatial workspaces worldwide with peer-to-peer mesh fallback.',
      metric: '< 5ms Edge Sync',
    },
    {
      icon: Server,
      title: 'Fleet Management',
      desc: 'Zero-touch provisioning, custom enterprise app store distribution, centralized policy enforcement, and remote wipe.',
      metric: 'MDM / Intune Ready',
    },
    {
      icon: Headphones,
      title: 'Enterprise Support',
      desc: '24/7 dedicated spatial engineering team, custom kernel patch delivery, priority SLA routing, and white-glove onboarding.',
      metric: '99.99% Uptime SLA',
    },
  ];

  const handleSalesSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSalesSubmitted(true);
  };

  return (
    <section id="enterprise" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
      {/* Enterprise Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-sky-400/20 bg-sky-950/40 text-sky-300 text-xs font-mono tracking-widest uppercase mb-4">
            <Building2 className="w-3.5 h-3.5" />
            <span>ENTERPRISE READY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Lumina for Teams
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Deploy spatial computing at scale with zero-trust architecture, unified workspace
            synchronization, and administrative controls designed for the modern enterprise.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap items-center gap-4 shrink-0">
          <button
            onClick={() => setShowSalesModal(true)}
            className="px-6 py-3.5 text-xs font-bold tracking-wider text-slate-950 bg-sky-300 hover:bg-sky-200 rounded-lg transition-all shadow-[0_0_20px_rgba(125,211,252,0.3)] cursor-pointer focus-visible:ring-2 focus-visible:ring-sky-400"
          >
            Contact Sales
          </button>
          <button
            onClick={() => setShowDemoModal(true)}
            className="px-6 py-3.5 text-xs font-semibold tracking-wider text-slate-200 bg-slate-900 border border-slate-700/80 hover:border-slate-500 rounded-lg transition-colors cursor-pointer flex items-center space-x-2 focus-visible:ring-2 focus-visible:ring-sky-400"
          >
            <Play className="w-3.5 h-3.5 fill-current text-sky-400" />
            <span>Watch Demo</span>
          </button>
        </div>
      </div>

      {/* Enterprise Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {enterpriseFeatures.map((feat, idx) => {
          const IconComp = feat.icon;
          return (
            <div
              key={idx}
              className="rounded-2xl border border-white/10 bg-[#0f131a] p-6 hover:border-sky-500/30 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-sky-950/60 border border-sky-400/30 flex items-center justify-center text-sky-400 mb-5">
                  <IconComp className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{feat.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-6">{feat.desc}</p>
              </div>

              <div className="pt-4 border-t border-white/5 font-mono text-xs text-sky-300 flex items-center justify-between">
                <span>{feat.metric}</span>
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Demo Video Modal */}
      {showDemoModal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="demo-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        >
          <div className="relative w-full max-w-3xl rounded-2xl border border-white/10 bg-[#0d1017] p-6 shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
              <h3 id="demo-modal-title" className="text-lg font-bold text-white flex items-center gap-2">
                <Play className="w-4 h-4 text-sky-400" />
                Lumina OS Enterprise Multi-User Spatial Canvas Demo
              </h3>
              <button
                onClick={() => setShowDemoModal(false)}
                className="p-1 text-slate-400 hover:text-white rounded-lg focus-visible:ring-2 focus-visible:ring-sky-400"
                aria-label="Close demo modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Simulated interactive video display */}
            <div className="relative aspect-video rounded-xl bg-[#06080c] border border-white/5 overflow-hidden flex items-center justify-center p-4">
              <div className="text-center space-y-3">
                <div className="w-16 h-16 rounded-full bg-sky-400/20 border border-sky-400 flex items-center justify-center mx-auto text-sky-300 animate-pulse">
                  <Play className="w-8 h-8 fill-current ml-1" />
                </div>
                <h4 className="text-base font-semibold text-white">Spatial Collaboration in Action</h4>
                <p className="text-xs text-slate-400 max-w-md">
                  Interactive real-time 3D CAD modeling and multi-user telemetry synchronization across Tokyo and San Francisco.
                </p>
                <div className="flex justify-center gap-2 font-mono text-[11px] text-sky-300">
                  <span className="bg-sky-950/80 px-2.5 py-1 rounded border border-sky-400/30">120 FPS Realtime</span>
                  <span className="bg-emerald-950/80 px-2.5 py-1 rounded border border-emerald-400/30">P2P Encrypted</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Contact Sales Modal */}
      {showSalesModal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="sales-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        >
          <div className="relative w-full max-w-lg rounded-2xl border border-white/10 bg-[#0d1017] p-6 sm:p-8 shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
              <h3 id="sales-modal-title" className="text-xl font-bold text-white flex items-center gap-2">
                <Building2 className="w-5 h-5 text-sky-400" />
                Contact Enterprise Sales
              </h3>
              <button
                onClick={() => {
                  setShowSalesModal(false);
                  setSalesSubmitted(false);
                }}
                className="p-1 text-slate-400 hover:text-white rounded-lg focus-visible:ring-2 focus-visible:ring-sky-400"
                aria-label="Close sales modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {salesSubmitted ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-950 border border-emerald-400 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white">Inquiry Received</h4>
                <p className="text-sm text-slate-300 max-w-sm mx-auto">
                  A Lumina Enterprise Architect has received your request and will follow up with custom pricing and hardware allocation within 2 business hours.
                </p>
                <button
                  onClick={() => {
                    setShowSalesModal(false);
                    setSalesSubmitted(false);
                  }}
                  className="px-6 py-2.5 text-xs font-bold text-slate-950 bg-sky-300 rounded-lg hover:bg-sky-200 cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <form onSubmit={handleSalesSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    value={salesForm.name}
                    onChange={(e) => setSalesForm({ ...salesForm, name: e.target.value })}
                    placeholder="Jane Doe"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#080b10] border border-white/10 text-sm text-white focus-visible:ring-2 focus-visible:ring-sky-400 focus:border-transparent outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">Work Email</label>
                  <input
                    type="email"
                    required
                    value={salesForm.email}
                    onChange={(e) => setSalesForm({ ...salesForm, email: e.target.value })}
                    placeholder="jane@company.com"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#080b10] border border-white/10 text-sm text-white focus-visible:ring-2 focus-visible:ring-sky-400 focus:border-transparent outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">Organization / Enterprise</label>
                  <input
                    type="text"
                    required
                    value={salesForm.company}
                    onChange={(e) => setSalesForm({ ...salesForm, company: e.target.value })}
                    placeholder="Global Systems Corp"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#080b10] border border-white/10 text-sm text-white focus-visible:ring-2 focus-visible:ring-sky-400 focus:border-transparent outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">Estimated Hardware Deployment</label>
                  <select
                    value={salesForm.seats}
                    onChange={(e) => setSalesForm({ ...salesForm, seats: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#080b10] border border-white/10 text-sm text-white focus-visible:ring-2 focus-visible:ring-sky-400 focus:border-transparent outline-none"
                  >
                    <option value="10-50 seats">10 - 50 Visors</option>
                    <option value="50-250 seats">50 - 250 Visors</option>
                    <option value="250-1000 seats">250 - 1,000 Visors</option>
                    <option value="1000+ seats">1,000+ Visors (Custom Enclave)</option>
                  </select>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 text-xs font-bold tracking-wider text-slate-950 bg-sky-300 hover:bg-sky-200 rounded-lg transition-colors cursor-pointer flex items-center justify-center space-x-2"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Enterprise Request</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
