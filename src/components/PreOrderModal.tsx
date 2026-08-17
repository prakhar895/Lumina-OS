import React, { useState } from 'react';
import { X, Sparkles, Check, CheckCircle2, Shield, Layers, ArrowRight } from 'lucide-react';

interface PreOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PreOrderModal: React.FC<PreOrderModalProps> = ({ isOpen, onClose }) => {
  const [selectedTier, setSelectedTier] = useState<'studio' | 'dev' | 'enterprise'>('dev');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [queueNumber, setQueueNumber] = useState(0);

  if (!isOpen) return null;

  const tiers = [
    {
      id: 'studio' as const,
      name: 'Lumina Studio Edition',
      price: '$2,899',
      tag: 'CREATOR & DESIGN',
      specs: [
        'Dual 4K Micro-OLED (3840×3840)',
        '45 TOPS Neural Pipeline',
        'Sub-Millimeter Haptic Mesh',
        '32GB LPDDR5X + 1TB NVMe',
      ],
    },
    {
      id: 'dev' as const,
      name: 'Lumina Developer Edition',
      price: '$3,499',
      tag: 'MOST POPULAR',
      specs: [
        'Hardware Debugging & JTAG Pod',
        'Zero-Latency Kernel SDK Access',
        '45 TOPS NPU + 32GB LPDDR5X',
        'Direct Kernel Interrupt Profiler',
      ],
    },
    {
      id: 'enterprise' as const,
      name: 'Lumina Enterprise Suite',
      price: '$4,999',
      tag: 'FLEET & SECURITY',
      specs: [
        'FIPS 140-3 Level 3 Secure Enclave',
        'Zero-Trust Fleet Management MDM',
        '64GB RAM + 2TB NVMe Storage',
        '24/7 Dedicated Spatial Support SLA',
      ],
    },
  ];

  const handleReserve = (e: React.FormEvent) => {
    e.preventDefault();
    setQueueNumber(Math.floor(1000 + Math.random() * 9000));
    setConfirmed(true);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="preorder-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
    >
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border border-white/10 bg-[#0d1017] p-6 sm:p-8 shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-sky-400/20 border border-sky-400/40 flex items-center justify-center text-sky-400">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 id="preorder-title" className="text-xl font-bold text-white">
                Reserve Lumina Hardware
              </h3>
              <p className="text-xs font-mono text-slate-400">Production Batch 01 · Ships Q3 2026</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-white rounded-lg focus-visible:ring-2 focus-visible:ring-sky-400"
            aria-label="Close preorder dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {confirmed ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-950 border border-emerald-400 text-emerald-400 flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(52,211,153,0.3)]">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-2xl font-bold text-white">Priority Reservation Confirmed</h4>
            <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
              Welcome, <span className="text-white font-semibold">{name || 'Explorer'}</span>. Your hardware allocation is locked. We’ll notify you at{' '}
              <span className="text-sky-300 font-mono">{email}</span> when production allocation opens for final delivery.
            </p>
            <div className="inline-block px-5 py-3 rounded-xl bg-slate-900 border border-white/10 font-mono text-xs text-sky-400">
              ALLOCATION NUMBER: <span className="font-bold text-white text-sm">#LUM-{queueNumber}</span>
            </div>
            <div className="pt-4">
              <button
                onClick={onClose}
                className="px-6 py-2.5 text-xs font-bold text-slate-950 bg-sky-300 rounded-lg hover:bg-sky-200 cursor-pointer"
              >
                Return to Lumina OS
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleReserve} className="space-y-6">
            {/* Tier Selector */}
            <div className="space-y-3">
              <label className="block text-xs font-mono text-slate-400 uppercase">
                Select Hardware Package
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {tiers.map((tier) => {
                  const isSelected = selectedTier === tier.id;
                  return (
                    <div
                      key={tier.id}
                      onClick={() => setSelectedTier(tier.id)}
                      className={`p-4 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                        isSelected
                          ? 'border-sky-400 bg-sky-950/40 shadow-[0_0_15px_rgba(56,189,248,0.2)]'
                          : 'border-white/10 bg-[#080b10] hover:border-white/20'
                      }`}
                    >
                      <div>
                        <span className="text-[9px] font-mono text-sky-400 tracking-wider block mb-1">
                          {tier.tag}
                        </span>
                        <h4 className="text-xs font-bold text-white leading-snug">{tier.name}</h4>
                        <div className="text-base font-extrabold text-sky-300 mt-2 font-mono">
                          {tier.price}
                        </div>
                      </div>

                      <div className="mt-3 pt-2 border-t border-white/5 space-y-1">
                        {tier.specs.slice(0, 2).map((s, i) => (
                          <div key={i} className="text-[10px] text-slate-400 flex items-center gap-1">
                            <Check className="w-2.5 h-2.5 text-sky-400 shrink-0" />
                            <span className="truncate">{s}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* User Form Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Alex Mercer"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#080b10] border border-white/10 text-sm text-white focus-visible:ring-2 focus-visible:ring-sky-400 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1">Email Address</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="alex@lumina.dev"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#080b10] border border-white/10 text-sm text-white focus-visible:ring-2 focus-visible:ring-sky-400 outline-none"
                />
              </div>
            </div>

            <div className="p-3 rounded-lg bg-[#080b10] border border-white/5 flex items-center justify-between text-xs font-mono text-slate-400">
              <span>No immediate payment required.</span>
              <span className="text-emerald-400">Batch 01 Slot Reserved</span>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 text-xs font-bold tracking-wider text-slate-950 bg-sky-300 hover:bg-sky-200 rounded-lg transition-all shadow-[0_0_20px_rgba(125,211,252,0.3)] cursor-pointer flex items-center justify-center space-x-2"
            >
              <span>Confirm Hardware Reservation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
