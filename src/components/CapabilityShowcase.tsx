import React, { useState, useRef, useEffect } from 'react';
import {
  Layers,
  Sparkles,
  Zap,
  Activity,
  Box,
  Fingerprint,
  Radio,
  Cpu,
  Shield,
  ArrowRight,
  Eye,
  Sliders,
  Scan,
  Repeat,
  Compass,
} from 'lucide-react';
import { ShowcaseTabId, HapticMaterial } from '../types';

export const CapabilityShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ShowcaseTabId>('neural');
  const [hapticMaterial, setHapticMaterial] = useState<HapticMaterial>('glass');
  const [hapticSwipePos, setHapticSwipePos] = useState({ x: 50, active: false });
  const [quantumState, setQuantumState] = useState<'coherent' | 'calculating'>('coherent');
  const [volumetricDepth, setVolumetricDepth] = useState(65);

  const tabListRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<Record<ShowcaseTabId, HTMLButtonElement | null>>({
    neural: null,
    volumetric: null,
    quantum: null,
    haptic: null,
  });

  const tabs: { id: ShowcaseTabId; label: string }[] = [
    { id: 'neural', label: 'Neural Rendering' },
    { id: 'volumetric', label: 'Volumetric Logic' },
    { id: 'quantum', label: 'Quantum State' },
    { id: 'haptic', label: 'Haptic Mesh' },
  ];

  // Accessible Roving Tabindex & Keyboard Navigation
  const handleKeyDown = (e: React.KeyboardEvent, currentId: ShowcaseTabId) => {
    const tabIds = tabs.map((t) => t.id);
    const currentIndex = tabIds.indexOf(currentId);
    let nextIndex = -1;

    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
      e.preventDefault();
      nextIndex = (currentIndex + 1) % tabIds.length;
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
      e.preventDefault();
      nextIndex = (currentIndex - 1 + tabIds.length) % tabIds.length;
    } else if (e.key === 'Home') {
      e.preventDefault();
      nextIndex = 0;
    } else if (e.key === 'End') {
      e.preventDefault();
      nextIndex = tabIds.length - 1;
    }

    if (nextIndex !== -1) {
      const nextId = tabIds[nextIndex];
      setActiveTab(nextId);
      tabRefs.current[nextId]?.focus();
    }
  };

  // Quantum Coherence pulse
  const triggerQuantumPulse = () => {
    setQuantumState('calculating');
    setTimeout(() => setQuantumState('coherent'), 600);
  };

  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
      {/* Header */}
      <div className="mb-14">
        <span className="text-xs font-mono font-semibold tracking-widest text-sky-400 uppercase mb-3 block">
          CORE CAPABILITIES
        </span>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
          Interactive Showcase
        </h2>
        <p className="text-base sm:text-lg text-slate-400 max-w-2xl">
          Explore the core systems defining the spatial computing era. Use arrow keys to navigate between subsystems.
        </p>
      </div>

      {/* Main Tabbed Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Vertical Tablist (4 cols) */}
        <div
          ref={tabListRef}
          role="tablist"
          aria-label="Lumina OS Capabilities"
          aria-orientation="vertical"
          className="lg:col-span-4 flex flex-col space-y-3"
        >
          {tabs.map((tab) => {
            const isSelected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                ref={(el) => {
                  tabRefs.current[tab.id] = el;
                }}
                id={`tab-${tab.id}`}
                role="tab"
                aria-selected={isSelected}
                aria-controls={`panel-${tab.id}`}
                tabIndex={isSelected ? 0 : -1}
                onClick={() => setActiveTab(tab.id)}
                onKeyDown={(e) => handleKeyDown(e, tab.id)}
                className={`w-full text-left p-5 rounded-xl border transition-all duration-200 cursor-pointer flex items-center justify-between group focus-visible:ring-2 focus-visible:ring-sky-400 ${
                  isSelected
                    ? 'border-sky-400 bg-[#121824] shadow-[0_0_25px_rgba(56,189,248,0.15)]'
                    : 'border-white/10 bg-[#0d1017] hover:border-white/20 hover:bg-[#10141e]'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div
                    className={`w-3 h-3 rounded-full transition-colors ${
                      isSelected ? 'bg-sky-400 animate-pulse' : 'bg-slate-700 group-hover:bg-slate-500'
                    }`}
                  />
                  <span className={`text-base sm:text-lg font-bold tracking-tight ${isSelected ? 'text-white' : 'text-slate-400 group-hover:text-slate-200'}`}>
                    {tab.label}
                  </span>
                </div>
                {isSelected && <ArrowRight className="w-5 h-5 text-sky-400 shrink-0" />}
              </button>
            );
          })}
        </div>

        {/* Right Active Tab Panel (8 cols) */}
        <div className="lg:col-span-8 min-h-[540px]">
          {/* TAB 1: NEURAL RENDERING */}
          <div
            id="panel-neural"
            role="tabpanel"
            aria-labelledby="tab-neural"
            hidden={activeTab !== 'neural'}
            className="space-y-6"
          >
            {/* Top overview card */}
            <div className="rounded-2xl border border-white/10 bg-[#0f131a] p-6 sm:p-8">
              <div className="flex items-center space-x-3 text-sky-400 mb-4">
                <Scan className="w-6 h-6" />
                <h3 className="text-2xl font-bold text-white">Environmental Mesh Optimization</h3>
              </div>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                Our proprietary neural network reconstructs physical environments into sub-millimeter
                accurate volumetric meshes at 120 frames per second, ensuring zero latency between
                physical reality and digital overlays.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-white/5 font-mono text-xs text-slate-400">
                <div>
                  <span className="text-slate-500 block text-[10px]">FRAME RATE</span>
                  <span className="text-white font-bold text-sm">120 FPS</span>
                </div>
                <div>
                  <span className="text-slate-500 block text-[10px]">MESH ACCURACY</span>
                  <span className="text-sky-300 font-bold text-sm">&lt; 0.4 mm</span>
                </div>
                <div>
                  <span className="text-slate-500 block text-[10px]">PHOTON-TO-MOTION</span>
                  <span className="text-emerald-400 font-bold text-sm">0.83 ms</span>
                </div>
              </div>
            </div>

            {/* Rendering Pipeline Subsection */}
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-white">Rendering Pipeline</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Data Acquisition Card */}
                <div className="rounded-xl border border-white/10 bg-[#0c1017] p-5 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center space-x-2 text-sky-400 mb-3">
                      <Radio className="w-4 h-4" />
                      <span className="font-mono text-xs font-semibold uppercase">Data Acquisition</span>
                    </div>
                    <p className="text-xs text-slate-400 mb-4">
                      Simultaneous LiDAR scanning and stereoscopic optical input captures raw spatial data points in real time.
                    </p>
                  </div>
                  <div className="h-28 rounded-lg bg-[#080a0f] border border-white/5 flex items-center justify-center p-3 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#38bdf810_1px,transparent_1px),linear-gradient(to_bottom,#38bdf810_1px,transparent_1px)] bg-[size:12px_12px]" />
                    <span className="font-mono text-[11px] text-sky-300/80 z-10">LiDAR 100k pts/sec Active</span>
                  </div>
                </div>

                {/* Neural Synthesis Card */}
                <div className="rounded-xl border border-white/10 bg-[#0c1017] p-5 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-2 text-sky-400">
                        <Cpu className="w-4 h-4" />
                        <span className="font-mono text-xs font-semibold uppercase">Neural Synthesis</span>
                      </div>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-amber-500/20 text-amber-300 border border-amber-500/30">
                        CORE TECH
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 mb-4">
                      Raw point clouds are processed through custom tensor architecture for real-time watertight spatial volume.
                    </p>
                  </div>
                  <div className="h-28 rounded-lg bg-[#080a0f] border border-white/5 flex flex-col justify-center p-3 font-mono text-[10px] text-slate-400 space-y-1">
                    <div className="flex justify-between text-slate-300">
                      <span>DUAL-STREAM CNN+TRANSFORMER</span>
                      <span className="text-emerald-400">0.83ms</span>
                    </div>
                    <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-sky-400 h-full w-[94%]" />
                    </div>
                    <span className="text-slate-500">Spatial Nodes: 16,384 // Layer L07 Activated</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Applications Subsection */}
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-white">Applications</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-xl border border-white/10 bg-[#0f131a] p-5">
                  <h5 className="text-sm font-bold text-white mb-1.5">Architectural Viz</h5>
                  <p className="text-xs text-slate-400">
                    Evaluate material properties and lighting accurately before construction begins with photorealistic caustics.
                  </p>
                </div>
                <div className="rounded-xl border border-white/10 bg-[#0f131a] p-5">
                  <h5 className="text-sm font-bold text-white mb-1.5">Spatial Gaming</h5>
                  <p className="text-xs text-slate-400">
                    Digital objects cast physical shadows with sub-millimeter occlusion into real-world geometry.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* TAB 2: VOLUMETRIC LOGIC */}
          <div
            id="panel-volumetric"
            role="tabpanel"
            aria-labelledby="tab-volumetric"
            hidden={activeTab !== 'volumetric'}
            className="space-y-6"
          >
            <div className="rounded-2xl border border-white/10 bg-[#0f131a] p-6 sm:p-8">
              <div className="flex items-center space-x-3 text-sky-400 mb-4">
                <Box className="w-6 h-6" />
                <h3 className="text-2xl font-bold text-white">Volumetric Logic</h3>
              </div>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                Seamlessly translate 2D inputs into 3D spatial environments. Our volumetric
                processing engine ensures zero latency in multi-layered glass interfaces,
                allowing for unprecedented depth interaction without thermal throttling.
              </p>

              {/* Interactive Depth Layering Controller */}
              <div className="rounded-xl border border-white/10 bg-[#0c1017] p-6 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <label htmlFor="depth-slider" className="text-xs font-mono text-slate-300 flex items-center gap-2">
                    <Sliders className="w-4 h-4 text-sky-400" />
                    Interactive Depth Extrusion: <span className="text-sky-400 font-bold">{volumetricDepth}mm</span>
                  </label>
                  <span className="text-xs font-mono text-emerald-400">Thermal Headroom: +4.2°C Stable</span>
                </div>

                <input
                  id="depth-slider"
                  type="range"
                  min="10"
                  max="120"
                  value={volumetricDepth}
                  onChange={(e) => setVolumetricDepth(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-sky-400 focus-visible:ring-2 focus-visible:ring-sky-400"
                  aria-label="Volumetric depth extrusion slider"
                />

                {/* 3D Visual Depth Simulation */}
                <div className="relative h-44 rounded-xl bg-[#07090e] border border-white/5 overflow-hidden flex items-center justify-center p-4">
                  <div
                    className="absolute w-48 h-28 rounded-lg border border-sky-400/40 bg-sky-950/20 flex items-center justify-center font-mono text-xs text-sky-300 shadow-xl transition-all duration-150"
                    style={{
                      transform: `perspective(600px) rotateX(15deg) translateZ(${volumetricDepth * 0.5}px)`,
                    }}
                  >
                    Foreground Layer (Z: {volumetricDepth}mm)
                  </div>
                  <div
                    className="absolute w-56 h-32 rounded-lg border border-slate-700/60 bg-slate-900/40 flex items-end justify-center pb-2 font-mono text-[10px] text-slate-500 shadow"
                    style={{
                      transform: 'perspective(600px) rotateX(15deg) translateZ(0px)',
                    }}
                  >
                    Spatial Base Canvas (Z: 0mm)
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* TAB 3: QUANTUM STATE */}
          <div
            id="panel-quantum"
            role="tabpanel"
            aria-labelledby="tab-quantum"
            hidden={activeTab !== 'quantum'}
            className="space-y-6"
          >
            <div className="rounded-2xl border border-white/10 bg-[#0f131a] p-6 sm:p-8">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3 text-sky-400">
                  <Sparkles className="w-6 h-6" />
                  <h3 className="text-2xl font-bold text-white">Quantum State Processing</h3>
                </div>
                <span className="px-2.5 py-1 rounded text-xs font-mono bg-sky-950/80 text-sky-300 border border-sky-400/30">
                  CORE ARCHITECTURE
                </span>
              </div>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                Harnessing multidimensional compute arrays to solve complex spatial algorithms
                instantaneously. Experience the calm precision of true glass-level processing.
              </p>

              {/* Orbiting Quantum Visualizer (Screenshot 21) */}
              <div className="rounded-xl border border-white/10 bg-[#0c1017] p-6 mb-6 flex flex-col items-center">
                <div className="relative w-64 h-64 flex items-center justify-center my-4">
                  {/* Concentric rings */}
                  <div className="absolute inset-0 rounded-full border border-sky-500/20" />
                  <div className="absolute inset-8 rounded-full border border-sky-400/30" />
                  <div className="absolute inset-16 rounded-full border border-sky-300/40" />

                  {/* Central Node */}
                  <button
                    onClick={triggerQuantumPulse}
                    className="w-12 h-12 rounded-full bg-white text-slate-950 flex items-center justify-center font-bold text-xs shadow-[0_0_25px_rgba(255,255,255,0.8)] cursor-pointer focus-visible:ring-2 focus-visible:ring-sky-400"
                    title="Click to pulse quantum state"
                    aria-label="Pulse quantum state calculation"
                  >
                    {quantumState === 'coherent' ? 'Q-01' : 'SYNC'}
                  </button>

                  {/* Orbital Nodes */}
                  {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
                    <div
                      key={i}
                      className="absolute w-3 h-3 rounded-full bg-sky-400 shadow-[0_0_10px_rgba(56,189,248,0.8)]"
                      style={{
                        transform: `rotate(${deg}deg) translate(95px) rotate(-${deg}deg)`,
                        transition: 'transform 0.5s ease',
                      }}
                    />
                  ))}
                </div>

                <div className="w-full flex items-center justify-between pt-4 border-t border-white/5 font-mono text-xs text-slate-400">
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    State: {quantumState === 'coherent' ? 'Coherent' : 'Recalibrating...'}
                  </span>
                  <span className="text-sky-300">99.998% Sync Precision</span>
                </div>
              </div>

              {/* 3 Quantum Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="rounded-xl border border-white/10 bg-[#0c1017] p-4">
                  <h5 className="text-sm font-bold text-white mb-2">Superposition Logic</h5>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Evaluate multiple spatial pathways simultaneously to resolve interactions upon direct gaze observation.
                  </p>
                </div>
                <div className="rounded-xl border border-white/10 bg-[#0c1017] p-4">
                  <h5 className="text-sm font-bold text-white mb-2">Entanglement Sync</h5>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Instantly propagate state changes across distributed spatial clusters with sub-millisecond fidelity.
                  </p>
                </div>
                <div className="rounded-xl border border-white/10 bg-[#0c1017] p-4">
                  <h5 className="text-sm font-bold text-white mb-2">Decoherence Protection</h5>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Advanced error correction shields active spatial processes from environmental interference.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* TAB 4: HAPTIC MESH */}
          <div
            id="panel-haptic"
            role="tabpanel"
            aria-labelledby="tab-haptic"
            hidden={activeTab !== 'haptic'}
            className="space-y-6"
          >
            <div className="rounded-2xl border border-white/10 bg-[#0f131a] p-6 sm:p-8">
              <span className="text-xs font-mono font-semibold tracking-widest text-amber-400 uppercase mb-2 block">
                HAPTIC MESH TECHNOLOGY
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                Feel the Digital Sub-Millimeter Precision.
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                Experience tactile feedback that transcends vibration. Our Haptic Mesh simulates
                textures, mass, and resistance, bridging the gap between physical and spatial
                computing environments.
              </p>

              {/* Haptic Sandbox Area (Screenshot 17) */}
              <div className="rounded-xl border border-white/10 bg-[#0c1017] p-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                  <div>
                    <h4 className="text-base font-bold text-white">Haptic Sandbox</h4>
                    <p className="text-xs text-slate-400">Interact and drag across the pad to simulate micro-surface resistance.</p>
                  </div>

                  {/* Material Switcher Pills */}
                  <div className="flex items-center space-x-2">
                    {(['glass', 'carbon', 'silk'] as HapticMaterial[]).map((mat) => (
                      <button
                        key={mat}
                        onClick={() => setHapticMaterial(mat)}
                        className={`px-4 py-1.5 rounded-full text-xs font-mono capitalize transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-sky-400 ${
                          hapticMaterial === mat
                            ? 'bg-sky-400 text-slate-950 font-bold shadow-[0_0_12px_rgba(56,189,248,0.4)]'
                            : 'bg-slate-800/80 text-slate-400 hover:text-white'
                        }`}
                      >
                        {mat}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Interactive Drag & Swipe Area */}
                <div
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = ((e.clientX - rect.left) / rect.width) * 100;
                    setHapticSwipePos({ x: Math.max(0, Math.min(100, x)), active: true });
                  }}
                  onMouseLeave={() => setHapticSwipePos((prev) => ({ ...prev, active: false }))}
                  onTouchMove={(e) => {
                    if (e.touches[0]) {
                      const rect = e.currentTarget.getBoundingClientRect();
                      const x = ((e.touches[0].clientX - rect.left) / rect.width) * 100;
                      setHapticSwipePos({ x: Math.max(0, Math.min(100, x)), active: true });
                    }
                  }}
                  className="relative h-40 rounded-xl bg-[#080b10] border border-sky-500/20 overflow-hidden flex items-center justify-center cursor-crosshair select-none"
                  aria-label="Haptic interactive swipe area"
                  role="region"
                >
                  {/* Dynamic Texture waveform beam */}
                  <div
                    className="absolute inset-y-0 w-32 bg-gradient-to-r from-transparent via-sky-400/25 to-transparent blur-md pointer-events-none transition-all duration-75"
                    style={{ left: `calc(${hapticSwipePos.x}% - 64px)` }}
                  />

                  {/* Laser line tracker */}
                  <div
                    className="absolute inset-y-0 w-0.5 bg-sky-300 pointer-events-none shadow-[0_0_10px_#38bdf8]"
                    style={{ left: `${hapticSwipePos.x}%` }}
                  />

                  <div className="z-10 text-center pointer-events-none">
                    <span className="text-sm font-mono tracking-widest text-slate-400 font-semibold block">
                      {hapticSwipePos.active ? `SWIPING OVER ${hapticMaterial.toUpperCase()}` : 'SWIPE AREA'}
                    </span>
                    <span className="text-[11px] font-mono text-sky-400/80 mt-1 block">
                      {hapticMaterial === 'glass' && 'Ultra-smooth surface // 0.01μm roughness // Low resistance'}
                      {hapticMaterial === 'carbon' && 'Woven fiber feedback // 450Hz pulse array // High rigidity'}
                      {hapticMaterial === 'silk' && 'Soft fluid gradient // Continuous micro-damping // Variable friction'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
