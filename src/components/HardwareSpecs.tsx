import React from 'react';
import { Cpu, Eye, Scan, HardDrive, Shield, Sparkles, Layers } from 'lucide-react';
import { SpecCategory } from '../types';

export const HardwareSpecs: React.FC = () => {
  const specCategories: {
    category: string;
    icon: React.ComponentType<{ className?: string }>;
    specs: { label: string; value: string; highlight?: boolean }[];
  }[] = [
    {
      category: 'Core System',
      icon: Cpu,
      specs: [
        { label: 'Processor Architecture', value: 'ARM v9 / 64-bit Heterogeneous' },
        { label: 'Compute Cores', value: '16 Cores (8P + 8E) @ 3.2GHz' },
        { label: 'Neural Engine (NPU)', value: '45 TOPS / 16-Core Matrix Tensor', highlight: true },
        { label: 'Unified Memory', value: '32GB LPDDR5X (8533 MT/s)' },
        { label: 'Memory Bandwidth', value: '204.8 GB/s Low-Latency' },
        { label: 'Base Storage', value: '1TB PCIe Gen4 NVMe (Up to 4TB)' },
      ],
    },
    {
      category: 'Display Subsystem',
      icon: Eye,
      specs: [
        { label: 'Panel Type', value: 'Dual Custom Micro-OLED' },
        { label: 'Resolution (Per Eye)', value: '3840 × 3840 (4K Ultra-HD)', highlight: true },
        { label: 'Pixels Per Degree (PPD)', value: '42 PPD Retinal Density' },
        { label: 'Refresh Rate', value: '90Hz / 120Hz Adaptive VRR' },
        { label: 'Color Gamut', value: '100% DCI-P3 (10-bit Color Depth)' },
        { label: 'Peak Luminance', value: '5,000 nits HDR Peak' },
      ],
    },
    {
      category: 'Sensors & Tracking',
      icon: Scan,
      specs: [
        { label: 'Eye Tracking Cameras', value: '4× IR Micro-Cameras @ 120Hz' },
        { label: 'Hand & Skeletal Tracking', value: '6× Wide-FOV RGB/IR Array' },
        { label: 'Environment Mapping', value: 'Solid-State Time-of-Flight LiDAR', highlight: true },
        { label: 'Inertial Measurement', value: 'Dual 6-DOF IMU @ 1000Hz Zero Drift' },
        { label: 'Audio Arrays', value: '6-Mic Beamforming Spatial Array' },
        { label: 'Thermal Dissipation', value: 'Vapor Chamber + Whisper-Quiet Fan' },
      ],
    },
  ];

  return (
    <section id="hardware" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
      {/* Section Header */}
      <div className="max-w-3xl mb-16">
        <span className="text-xs font-mono font-semibold tracking-widest text-sky-400 uppercase mb-3 block">
          HARDWARE & SPECIFICATIONS
        </span>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
          Technical Specifications
        </h2>
        <p className="text-base sm:text-lg text-slate-400">
          Detailed hardware and software requirements for optimal performance in spatial computing environments.
        </p>
      </div>

      {/* Grid of Spec Categories */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {specCategories.map((cat, idx) => {
          const IconComp = cat.icon;
          return (
            <div
              key={idx}
              className="rounded-2xl border border-white/10 bg-[#0f131a] p-6 sm:p-8 flex flex-col justify-between hover:border-sky-500/30 transition-colors"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center space-x-3 mb-6 pb-4 border-b border-white/5">
                  <div className="w-10 h-10 rounded-xl bg-sky-950/60 border border-sky-400/30 flex items-center justify-center text-sky-400">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{cat.category}</h3>
                </div>

                {/* Specs List */}
                <div className="space-y-4">
                  {cat.specs.map((spec, sIdx) => (
                    <div
                      key={sIdx}
                      className={`flex flex-col space-y-1 pb-3 ${
                        sIdx < cat.specs.length - 1 ? 'border-b border-white/[0.03]' : ''
                      }`}
                    >
                      <span className="text-xs font-mono text-slate-500 uppercase">{spec.label}</span>
                      <span
                        className={`text-sm font-semibold tracking-tight ${
                          spec.highlight ? 'text-sky-300' : 'text-slate-200'
                        }`}
                      >
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom spec pill */}
              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>MIL-STD-810H Rated</span>
                <span className="text-emerald-400">Certified Compatible</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
