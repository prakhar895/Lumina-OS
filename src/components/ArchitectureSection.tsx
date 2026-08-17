import React, { useState } from 'react';
import { Cpu, Box, Activity, CheckCircle2, Copy, Check, ExternalLink, Code2 } from 'lucide-react';

interface ArchitectureSectionProps {
  onOpenSpecs: () => void;
  onOpenWhitepaper: () => void;
}

export const ArchitectureSection: React.FC<ArchitectureSectionProps> = ({
  onOpenSpecs,
  onOpenWhitepaper,
}) => {
  const [copiedCode, setCopiedCode] = useState(false);
  const [activeLayer, setActiveLayer] = useState<number | null>(null);

  const codeSnippet = `#include <Lumina/Spatial.h>

void InitializeEnvironment() {
  auto session = Lumina::CreateSession();
  session->RequestMeshTopology(
    Lumina::Quality::High,
    Lumina::Latency::Minimal
  );
  session->BeginRenderLoop();
}`;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const layers = [
    { title: 'Volumetric Application Layer', desc: 'Spatial UI kits, 3D WebAssembly runtimes, high-level composables' },
    { title: 'Spatial Compositor & Caustics', desc: '240Hz rigid-body physics, realistic light refraction, depth occlusions' },
    { title: 'Neural Tensor Engine (45 TOPS)', desc: 'Sub-millimeter mesh reconstruction, gaze intent prediction, latency zeroing' },
    { title: 'Deterministic Microkernel', desc: 'Zero-latency hardware interrupts, ARM v9 bare-metal execution' },
  ];

  return (
    <section id="architecture" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
      {/* Eyebrow and Header */}
      <div className="flex flex-col items-start max-w-3xl mb-16">
        <span className="text-xs font-mono font-semibold tracking-widest text-sky-400 uppercase mb-3">
          SYSTEM STACK
        </span>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6">
          The Architecture of Reality
        </h2>
        <p className="text-base sm:text-lg text-slate-400 leading-relaxed mb-8">
          Built from the silicon up, Lumina OS integrates a zero-latency microkernel with
          advanced spatial APIs, bridging the physical and digital worlds with absolute precision.
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <button
            onClick={onOpenSpecs}
            className="px-6 py-3 text-xs font-bold tracking-wider text-slate-950 bg-sky-300 hover:bg-sky-200 rounded-lg transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-sky-400"
          >
            Explore Architecture
          </button>
          <button
            onClick={onOpenWhitepaper}
            className="px-6 py-3 text-xs font-semibold tracking-wider text-slate-300 hover:text-white bg-slate-900 border border-slate-700/80 hover:border-slate-500 rounded-lg transition-colors cursor-pointer flex items-center space-x-2 focus-visible:ring-2 focus-visible:ring-sky-400"
          >
            <span>Read the Whitepaper</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Layered Glass Wafer Graphic + Architecture Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
        {/* Interactive 3D Stack Wafer Visual (5 cols) */}
        <div className="lg:col-span-5 rounded-2xl border border-white/10 bg-[#0f131a] p-6 flex flex-col justify-between h-full min-h-[380px]">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-mono text-slate-400 uppercase">Silicon-to-Glass Stack</span>
            <span className="text-xs font-mono text-sky-400">4 Layer Micro-Architecture</span>
          </div>

          {/* Interactive Stack Visualizer */}
          <div className="py-4 space-y-3">
            {layers.map((layer, idx) => {
              const isHovered = activeLayer === idx;
              return (
                <div
                  key={idx}
                  onMouseEnter={() => setActiveLayer(idx)}
                  onMouseLeave={() => setActiveLayer(null)}
                  className={`p-4 rounded-xl border transition-all duration-200 cursor-pointer ${
                    isHovered
                      ? 'border-sky-400 bg-sky-950/40 translate-x-2 shadow-[0_0_20px_rgba(56,189,248,0.2)]'
                      : 'border-white/10 bg-[#141924]/80 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-sky-300">LAYER 0{4 - idx}</span>
                    <span className="text-[10px] font-mono text-slate-500 uppercase">
                      {idx === 3 ? 'Silicon Level' : 'Glass Level'}
                    </span>
                  </div>
                  <h4 className="text-sm font-semibold text-white mt-1">{layer.title}</h4>
                  <p className="text-xs text-slate-400 mt-1">{layer.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500">
            <span>Pass-through latency: 0.8ms</span>
            <span>Deterministic 240Hz</span>
          </div>
        </div>

        {/* 3 Core Pillars Cards (7 cols) */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Lumina Kernel Card */}
          <div className="sm:col-span-1 rounded-2xl border border-white/10 bg-[#0f131a] p-6 hover:border-sky-500/30 transition-colors flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-sky-950/60 border border-sky-400/30 flex items-center justify-center mb-5 text-sky-400">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Lumina Kernel</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-6">
                A completely re-architected microkernel optimized for zero-latency spatial
                interrupts. It bypasses traditional threading models to ensure deterministic
                execution for rendering and sensor fusion.
              </p>
            </div>
            <button
              onClick={onOpenSpecs}
              className="text-xs font-mono font-semibold text-sky-400 hover:text-sky-300 flex items-center space-x-1.5 transition-colors cursor-pointer group"
            >
              <span>Explore Kernel Specs</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>

          {/* Spatial Engine Card */}
          <div className="sm:col-span-1 rounded-2xl border border-white/10 bg-[#0f131a] p-6 hover:border-sky-500/30 transition-colors flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-amber-950/40 border border-amber-400/30 flex items-center justify-center mb-5 text-amber-400">
                <Box className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Spatial Engine</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-6">
                Real-time environmental mapping, precise occlusion, and rigid-body physics
                simulated at 240Hz with hardware-accelerated BVH ray-tracing and geometric
                anchor persistence.
              </p>
            </div>
            <div className="text-xs font-mono text-amber-300/80 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              240Hz Rigid Simulation
            </div>
          </div>

          {/* Neural Pipeline Card (Spans full width) */}
          <div className="sm:col-span-2 rounded-2xl border border-white/10 bg-[#0f131a] p-6 hover:border-sky-500/30 transition-colors">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-950/40 border border-emerald-400/30 flex items-center justify-center text-emerald-400 shrink-0">
                  <Activity className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Neural Pipeline</h3>
                  <p className="text-sm text-slate-400 mt-1">
                    Hardware-accelerated AI subsystem dedicated to intent prediction, gaze tracking, and tensor mesh inference.
                  </p>
                </div>
              </div>
              <div className="font-mono text-xs text-emerald-400 bg-emerald-950/40 px-3 py-1.5 rounded-lg border border-emerald-500/20 whitespace-nowrap self-start sm:self-auto">
                45 TOPS INT8 / FP16
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Developer Ecosystem ("Write Once, Render Anywhere") */}
      <div className="rounded-2xl border border-white/10 bg-[#0c1017] p-6 sm:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left info column */}
          <div className="lg:col-span-5">
            <span className="text-xs font-mono font-semibold tracking-widest text-sky-400 uppercase mb-2 block">
              DEVELOPER ECOSYSTEM
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Write Once, Render Anywhere
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              The Lumina SDK provides a unified toolset for building volumetric applications.
              Access low-level hardware APIs or utilize high-level UI frameworks to deploy
              experiences across the entire hardware ecosystem.
            </p>

            <ul className="space-y-3">
              {[
                'Unified Spatial API for 2D & 3D canvases',
                'C++ & Rust Native Zero-Cost Bindings',
                'Real-time Hardware Profiling & Frame Diagnostics',
              ].map((feat, i) => (
                <li key={i} className="flex items-center space-x-3 text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Code Block column */}
          <div className="lg:col-span-7">
            <div className="rounded-xl border border-white/10 bg-[#080a0f] overflow-hidden shadow-2xl">
              {/* Code window title bar */}
              <div className="px-4 py-3 border-b border-white/5 bg-[#0e121a] flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/60" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/60" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/60" />
                  <span className="text-xs font-mono text-slate-400 ml-2">LuminaApp.cpp</span>
                </div>

                <button
                  onClick={handleCopyCode}
                  className="flex items-center space-x-1.5 text-xs font-mono text-slate-400 hover:text-sky-300 transition-colors p-1 rounded focus-visible:ring-2 focus-visible:ring-sky-400 cursor-pointer"
                  aria-label="Copy code snippet to clipboard"
                >
                  {copiedCode ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Code content */}
              <pre className="p-5 font-mono text-xs sm:text-sm text-slate-300 overflow-x-auto leading-relaxed">
                <code>
                  <span className="text-purple-400">#include</span> <span className="text-emerald-300">&lt;Lumina/Spatial.h&gt;</span>
                  {'\n\n'}
                  <span className="text-blue-400">void</span> <span className="text-amber-300">InitializeEnvironment</span>() {'{'}
                  {'\n  '}<span className="text-blue-400">auto</span> session = Lumina::<span className="text-amber-300">CreateSession</span>();
                  {'\n  '}session-&gt;<span className="text-amber-300">RequestMeshTopology</span>(
                  {'\n    '}Lumina::Quality::High,
                  {'\n    '}Lumina::Latency::Minimal
                  {'\n  '});
                  {'\n  '}session-&gt;<span className="text-amber-300">BeginRenderLoop</span>();
                  {'\n}'}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
