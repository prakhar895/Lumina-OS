import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Cpu, Layers, Sparkles, Terminal } from 'lucide-react';

interface HeroSectionProps {
  onExplorePlatform: () => void;
  onViewHardware: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExplorePlatform,
  onViewHardware,
}) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [activeChipNode, setActiveChipNode] = useState(0);

  // Single rAF-throttled scroll handler writing CSS custom property
  useEffect(() => {
    // Check prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      return; // Parallax disabled for reduced motion
    }

    let rafId: number | null = null;
    let lastScrollY = 0;

    const handleScroll = () => {
      lastScrollY = window.scrollY;
      if (rafId === null) {
        rafId = window.requestAnimationFrame(() => {
          if (heroRef.current) {
            const parallaxVal = Math.min(lastScrollY * 0.25, 120);
            heroRef.current.style.setProperty('--hero-offset-y', `${parallaxVal}px`);
          }
          rafId = null;
        });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId !== null) window.cancelAnimationFrame(rafId);
    };
  }, []);

  // Subtle interactive node switching in the holographic graphic
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveChipNode((prev) => (prev + 1) % 4);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="platform"
      ref={heroRef}
      className="relative min-h-[92vh] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-12 pb-20 overflow-hidden bg-hex-pattern"
      style={{
        transform: 'translate3d(0, 0, 0)',
      }}
    >
      {/* Radial ambient glow backdrop */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] max-w-full h-[500px] bg-gradient-to-b from-sky-500/10 via-blue-900/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      {/* Main Glass Hero Container (Single glass surface) */}
      <div className="w-full max-w-4xl mx-auto flex flex-col items-center text-center z-10">
        {/* Intro Badge */}
        <div
          className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-sky-400/20 bg-slate-900/70 text-sky-300 text-xs font-mono tracking-widest uppercase mb-8 shadow-[0_0_15px_rgba(56,189,248,0.15)]"
        >
          <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
          <span>Introducing the Future</span>
        </div>

        {/* Hero Title (Single H1 on the page) */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white max-w-3xl leading-[1.1] mb-6">
          Compute beyond <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-100 to-sky-400">
            the screen.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed mb-10">
          Experience a spatial environment designed for clarity and depth. Lumina OS
          transforms your physical space into an infinite, high-precision canvas.
        </p>

        {/* CTA Button Group */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-16">
          <button
            onClick={onExplorePlatform}
            className="w-full sm:w-auto px-8 py-3.5 text-sm font-bold tracking-wider text-slate-950 bg-gradient-to-r from-sky-300 to-sky-400 hover:from-sky-200 hover:to-sky-300 rounded-lg transition-all duration-200 shadow-[0_0_25px_rgba(56,189,248,0.35)] hover:shadow-[0_0_35px_rgba(56,189,248,0.55)] cursor-pointer flex items-center justify-center space-x-2 focus-visible:ring-2 focus-visible:ring-sky-400"
          >
            <span>EXPLORE PLATFORM</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onViewHardware}
            className="w-full sm:w-auto px-8 py-3.5 text-sm font-semibold tracking-wider text-slate-200 bg-slate-900/80 hover:bg-slate-800/90 border border-slate-700/80 hover:border-slate-500 rounded-lg transition-all duration-200 cursor-pointer flex items-center justify-center space-x-2 focus-visible:ring-2 focus-visible:ring-sky-400"
          >
            <Cpu className="w-4 h-4 text-sky-400" />
            <span>VIEW HARDWARE</span>
          </button>
        </div>
      </div>

      {/* Holographic Interactive Spatial Stage Graphic (Matches Screenshots 8 & 19) */}
      <div
        className="w-full max-w-5xl mx-auto mt-4 px-2 sm:px-4"
        style={{
          transform: 'translateY(calc(var(--hero-offset-y, 0px) * -0.3))',
          transition: 'transform 0.1s linear',
        }}
      >
        <div className="relative rounded-2xl border border-sky-500/20 bg-[#0c1018]/90 overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.8),0_0_40px_rgba(56,189,248,0.1)] aspect-[16/9] max-h-[500px]">
          {/* Header bar of the holographic visor stage */}
          <div className="absolute top-0 inset-x-0 h-10 border-b border-white/5 bg-[#090b10]/95 px-4 flex items-center justify-between z-20 text-xs font-mono text-slate-400">
            <div className="flex items-center space-x-3">
              <div className="flex space-x-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/60" />
              </div>
              <span className="text-slate-300 font-semibold">Lumina OS // Spatial Kernel v4.2</span>
            </div>
            <div className="hidden sm:flex items-center space-x-4">
              <span className="text-sky-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-ping" />
                120 FPS Coherent
              </span>
              <span className="text-slate-500">Latency: 0.8ms</span>
              <span className="text-slate-500">Sub-mm Mesh Active</span>
            </div>
          </div>

          {/* SVG Vector Holographic Spatial Canvas */}
          <div className="absolute inset-0 pt-10 flex items-center justify-center p-4">
            <svg
              className="w-full h-full object-contain"
              viewBox="0 0 1000 560"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Lumina OS Holographic Spatial Interface Diagram"
              role="img"
            >
              <defs>
                <linearGradient id="neonCyan" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#818cf8" stopOpacity="0.4" />
                </linearGradient>
                <linearGradient id="planeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#1e293b" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#0f172a" stopOpacity="0.3" />
                </linearGradient>
                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="6" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Grid Hex floor */}
              <path
                d="M 50 480 L 950 480 M 120 440 L 880 440 M 200 400 L 800 400 M 260 360 L 740 360"
                stroke="rgba(56,189,248,0.12)"
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />
              <path
                d="M 500 340 L 100 520 M 500 340 L 300 520 M 500 340 L 500 520 M 500 340 L 700 520 M 500 340 L 900 520"
                stroke="rgba(56,189,248,0.12)"
                strokeWidth="1.5"
              />

              {/* Holographic 3D Floating Glass Visor Plane (Left) */}
              <g transform="translate(100, 70)">
                {/* Floating Outer Glass Frame */}
                <polygon
                  points="20,40 380,20 440,320 80,340"
                  fill="url(#planeGrad)"
                  stroke="#38bdf8"
                  strokeWidth="2"
                  strokeOpacity="0.8"
                  filter="url(#glow)"
                />
                <polygon
                  points="35,55 365,35 425,305 95,325"
                  fill="none"
                  stroke="rgba(125,211,252,0.3)"
                  strokeWidth="1"
                />

                {/* Left Floating Tool Palette */}
                <rect x="45" y="70" width="36" height="36" rx="6" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" />
                <circle cx="63" cy="88" r="7" stroke="#7dd3fc" strokeWidth="1.5" fill="none" />
                
                <rect x="45" y="115" width="36" height="36" rx="6" fill="#0f172a" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                <path d="M 55 133 L 71 133 M 63 125 L 63 141" stroke="#94a3b8" strokeWidth="1.5" />

                <rect x="45" y="160" width="36" height="36" rx="6" fill="#0f172a" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                <polygon points="63,168 71,182 55,182" stroke="#94a3b8" strokeWidth="1.5" fill="none" />

                <rect x="45" y="205" width="36" height="36" rx="6" fill="#0f172a" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                <circle cx="63" cy="223" r="5" fill="#38bdf8" />

                {/* Center Spatial OS Logo Badge on Floating Glass */}
                <g transform="translate(140, 120)">
                  <polygon
                    points="30,10 60,25 60,60 30,75 0,60 0,25"
                    fill="rgba(56,189,248,0.15)"
                    stroke="#38bdf8"
                    strokeWidth="2"
                    filter="url(#glow)"
                  />
                  <path d="M 15 32 L 45 48 M 45 32 L 15 48" stroke="#ffffff" strokeWidth="2" />
                  <text x="75" y="45" fill="#ffffff" fontSize="22" fontWeight="bold" fontFamily="monospace">SPATIAL OS</text>
                  <text x="75" y="65" fill="#7dd3fc" fontSize="11" fontFamily="sans-serif" letterSpacing="2">REAL-TIME COMPOSITOR</text>
                </g>

                {/* 3D Polyhedral Spatial Node Cloud (Top Right of Plane) */}
                <g transform="translate(260, 60)">
                  <polygon points="40,20 70,5 95,30 80,65 30,55" stroke="#7dd3fc" strokeWidth="1.5" fill="rgba(56,189,248,0.08)" />
                  <line x1="40" y1="20" x2="80" y2="65" stroke="#38bdf8" strokeWidth="1" strokeDasharray="2 2" />
                  <circle cx="40" cy="20" r="3" fill="#ffffff" />
                  <circle cx="70" cy="5" r="3" fill="#38bdf8" />
                  <circle cx="95" cy="30" r="3" fill="#7dd3fc" />
                  <circle cx="80" cy="65" r="3" fill="#38bdf8" />
                </g>

                {/* Real-time telemetry sparklines */}
                <g transform="translate(240, 180)">
                  <path d="M 0 40 Q 20 10 40 25 T 80 15 T 120 30" fill="none" stroke="#38bdf8" strokeWidth="2" />
                  <text x="0" y="55" fill="#64748b" fontSize="9" fontFamily="monospace">TENSOR LATENCY: 0.83ms</text>
                </g>
              </g>

              {/* Silicon Neural Core Processor Chip (Bottom Right) */}
              <g transform="translate(680, 310)">
                {/* Chip Base Diamond */}
                <polygon
                  points="80,0 160,40 80,80 0,40"
                  fill="#0b1329"
                  stroke="#38bdf8"
                  strokeWidth="2.5"
                  filter="url(#glow)"
                />
                <polygon
                  points="80,10 140,40 80,70 20,40"
                  fill="#0284c7"
                  fillOpacity="0.4"
                  stroke="#93c5fd"
                  strokeWidth="1.5"
                />

                {/* Glowing Core Text */}
                <text x="80" y="44" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="bold" fontFamily="monospace">
                  LUMINA NPU
                </text>

                {/* Laser Light Channels streaming from Chip to Spatial Plane */}
                <path
                  d="M 20 40 C -80 0, -200 40, -320 -70"
                  stroke="#38bdf8"
                  strokeWidth="3"
                  filter="url(#glow)"
                  strokeDasharray="8 4"
                />
                <path
                  d="M 50 20 C -50 -40, -150 -60, -250 -120"
                  stroke="#7dd3fc"
                  strokeWidth="2"
                  strokeDasharray="6 3"
                />
                <path
                  d="M 120 30 C 200 -20, 240 -80, 280 -120"
                  stroke="#38bdf8"
                  strokeWidth="2.5"
                  filter="url(#glow)"
                />
                <path
                  d="M 80 80 C 80 140, 100 180, 120 220"
                  stroke="#38bdf8"
                  strokeWidth="2"
                />
                <path
                  d="M 0 40 C -80 80, -120 120, -160 160"
                  stroke="#0284c7"
                  strokeWidth="2"
                />
              </g>

              {/* Tagline overlay on right */}
              <text x="620" y="240" fill="#ffffff" fontSize="24" fontWeight="600" letterSpacing="3" fontFamily="sans-serif">
                DISCOVER THE FUTURE
              </text>
              <text x="620" y="270" fill="#7dd3fc" fontSize="20" fontWeight="300" letterSpacing="4" fontFamily="sans-serif">
                OF COMPUTING
              </text>
            </svg>
          </div>

          {/* Bottom quick spec strip */}
          <div className="absolute bottom-0 inset-x-0 py-2.5 px-4 bg-[#090b10]/90 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
            <span className="flex items-center gap-1.5 text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              Sub-Millimeter Neural Reconstruction
            </span>
            <div className="flex gap-4">
              <span className={activeChipNode === 0 ? 'text-sky-300 font-bold' : 'text-slate-500'}>OPTIC MESH</span>
              <span className={activeChipNode === 1 ? 'text-sky-300 font-bold' : 'text-slate-500'}>RAY-TRACE CAUSTICS</span>
              <span className={activeChipNode === 2 ? 'text-sky-300 font-bold' : 'text-slate-500'}>HAPTIC CORE</span>
              <span className={activeChipNode === 3 ? 'text-sky-300 font-bold' : 'text-slate-500'}>SUPERPOSITION</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
