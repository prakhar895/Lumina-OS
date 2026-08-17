import React, { useReducer } from 'react';
import { Sliders, Cpu, Check, Activity, ShieldCheck, Power, RefreshCw } from 'lucide-react';
import { SystemToggleState, SystemToggleAction } from '../types';

const initialToggleState: SystemToggleState = {
  neuralMesh: true,
  raytracedCaustics: true,
  submillimeterHaptics: true,
  superpositionBuffer: false,
  quantumEntanglement: true,
  gazeInterrupts: true,
};

function toggleReducer(state: SystemToggleState, action: SystemToggleAction): SystemToggleState {
  switch (action.type) {
    case 'TOGGLE':
      return {
        ...state,
        [action.key]: !state[action.key],
      };
    case 'SET_ALL':
      return {
        neuralMesh: action.value,
        raytracedCaustics: action.value,
        submillimeterHaptics: action.value,
        superpositionBuffer: action.value,
        quantumEntanglement: action.value,
        gazeInterrupts: action.value,
      };
    case 'RESET':
      return initialToggleState;
    default:
      return state;
  }
}

export const FeatureToggles: React.FC = () => {
  const [state, dispatch] = useReducer(toggleReducer, initialToggleState);

  const toggleItems: {
    key: keyof SystemToggleState;
    label: string;
    description: string;
    category: string;
    powerCost: string;
  }[] = [
    {
      key: 'neuralMesh',
      label: 'Neural Mesh Reconstruction',
      description: 'Sub-millimeter volumetric surface generation via 16-core NPU at 120 FPS.',
      category: 'SPATIAL COMPOSITOR',
      powerCost: '14.2 TOPS',
    },
    {
      key: 'raytracedCaustics',
      label: 'Ray-Traced Glass Caustics',
      description: 'Hardware-accelerated BVH refraction calculations for multi-layered glass UI.',
      category: 'OPTICS ENGINE',
      powerCost: '18.5 TOPS',
    },
    {
      key: 'submillimeterHaptics',
      label: 'Sub-Millimeter Haptic Mesh',
      description: 'Dynamic texture resistance and mass emulation on tactile touchpoints.',
      category: 'SENSORY SUBSYSTEM',
      powerCost: '3.1 TOPS',
    },
    {
      key: 'superpositionBuffer',
      label: 'Superposition State Buffer',
      description: 'Speculative multi-pathway intent pre-computation for 0.0ms perceived latency.',
      category: 'QUANTUM LOGIC',
      powerCost: '8.4 TOPS',
    },
    {
      key: 'quantumEntanglement',
      label: 'Entanglement Workspace Sync',
      description: 'Continuous cryptographic state replication across paired enterprise headsets.',
      category: 'SECURITY ENCLAVE',
      powerCost: '2.8 TOPS',
    },
    {
      key: 'gazeInterrupts',
      label: 'Deterministic Gaze Interrupts',
      description: 'Bypasses standard event queue to render micro-focus states instantly.',
      category: 'KERNEL LEVEL',
      powerCost: '4.6 TOPS',
    },
  ];

  const activeCount = Object.values(state).filter(Boolean).length;
  const activeTops = toggleItems
    .filter((item) => state[item.key])
    .reduce((sum, item) => sum + parseFloat(item.powerCost), 0)
    .toFixed(1);

  return (
    <section id="system-config" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
        <div>
          <span className="text-xs font-mono font-semibold tracking-widest text-sky-400 uppercase mb-3 block">
            KERNEL CONFIGURATION
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
            System Subsystem Flags
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl">
            Configure active Lumina OS hardware subsystems in real-time. Toggles modify microkernel execution pipelines.
          </p>
        </div>

        {/* Global Controls & Status HUD */}
        <div className="flex items-center gap-3">
          <div className="px-4 py-2 rounded-xl bg-[#0d1118] border border-white/10 flex items-center space-x-4 text-xs font-mono">
            <div>
              <span className="text-slate-500 block text-[10px]">ACTIVE SUBSYSTEMS</span>
              <span className="text-sky-400 font-bold">{activeCount} / 6 ONLINE</span>
            </div>
            <div className="w-px h-6 bg-white/10" />
            <div>
              <span className="text-slate-500 block text-[10px]">TOTAL LOAD</span>
              <span className="text-emerald-400 font-bold">{activeTops} TOPS</span>
            </div>
          </div>

          <button
            onClick={() => dispatch({ type: 'RESET' })}
            className="p-2.5 rounded-xl border border-white/10 bg-[#0d1118] hover:bg-white/5 text-slate-400 hover:text-white transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-sky-400"
            title="Reset to default kernel configuration"
            aria-label="Reset kernel subsystem toggles"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Grid of Toggles */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {toggleItems.map((item) => {
          const isChecked = state[item.key];
          const inputId = `toggle-${item.key}`;

          return (
            <div
              key={item.key}
              className={`rounded-2xl p-6 transition-all duration-200 flex flex-col justify-between ${
                isChecked
                  ? 'border-2 border-sky-400 bg-[#0f141f] shadow-[0_0_20px_rgba(56,189,248,0.12)]'
                  : 'border border-white/10 bg-[#0c0f16] opacity-75 hover:opacity-100'
              }`}
            >
              <div>
                {/* Header with Subsystem Category & Accessible Real Checkbox Input */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono tracking-wider text-slate-500 uppercase">
                    {item.category}
                  </span>

                  {/* Accessible Visually Restyled Real Checkbox */}
                  <label
                    htmlFor={inputId}
                    className="relative inline-flex items-center cursor-pointer select-none"
                  >
                    <input
                      id={inputId}
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => dispatch({ type: 'TOGGLE', key: item.key })}
                      className="sr-only peer"
                      aria-label={`${item.label} (${isChecked ? 'Active' : 'Standby'})`}
                    />
                    <div
                      className={`w-12 h-6 rounded-full transition-colors relative flex items-center p-0.5 ${
                        isChecked ? 'bg-sky-400' : 'bg-slate-800'
                      }`}
                    >
                      <div
                        className={`w-5 h-5 rounded-full bg-slate-950 transition-transform duration-200 flex items-center justify-center ${
                          isChecked ? 'translate-x-6' : 'translate-x-0'
                        }`}
                      >
                        {isChecked && <Check className="w-3 h-3 text-sky-400 stroke-[3]" />}
                      </div>
                    </div>
                  </label>
                </div>

                <label
                  htmlFor={inputId}
                  className="block text-base font-bold text-white mb-2 cursor-pointer"
                >
                  {item.label}
                </label>
                <p className="text-xs text-slate-400 leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* State label & compute metric */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between font-mono text-xs">
                <span
                  className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] font-semibold ${
                    isChecked
                      ? 'bg-sky-950/80 text-sky-300 border border-sky-400/30'
                      : 'bg-slate-900 text-slate-500 border border-slate-800'
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      isChecked ? 'bg-sky-400 animate-pulse' : 'bg-slate-600'
                    }`}
                  />
                  {isChecked ? `ACTIVE [${item.powerCost}]` : 'STANDBY'}
                </span>

                <span className="text-slate-500 text-[11px]">
                  {isChecked ? '0.0ms Latency' : 'Offline'}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
