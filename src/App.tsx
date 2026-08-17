import React, { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { ArchitectureSection } from './components/ArchitectureSection';
import { CapabilityShowcase } from './components/CapabilityShowcase';
import { FeatureToggles } from './components/FeatureToggles';
import { HardwareSpecs } from './components/HardwareSpecs';
import { EnterpriseSection } from './components/EnterpriseSection';
import { LegalViews } from './components/LegalViews';
import { PreOrderModal } from './components/PreOrderModal';
import { Footer } from './components/Footer';
import { NavigationSection, LegalDocType } from './types';
import { FileText, X } from 'lucide-react';

export function App() {
  const [activeSection, setActiveSection] = useState<NavigationSection>('platform');
  const [isPreorderOpen, setIsPreorderOpen] = useState(false);
  const [legalDocType, setLegalDocType] = useState<LegalDocType | null>(null);
  const [isWhitepaperOpen, setIsWhitepaperOpen] = useState(false);

  // IntersectionObserver for tracking current active navigation section
  useEffect(() => {
    const sectionIds: NavigationSection[] = ['platform', 'features', 'hardware', 'enterprise'];
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        { rootMargin: '-20% 0px -60% 0px' }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  const handleNavigate = (section: NavigationSection) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#090a0d] text-slate-100 flex flex-col selection:bg-sky-500/30 selection:text-sky-200">
      {/* Navigation Top Bar */}
      <Navigation
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenPreorder={() => setIsPreorderOpen(true)}
        onOpenLegal={(type) => setLegalDocType(type)}
      />

      {/* Main Semantic Landmark Content */}
      <main id="main-content" className="flex-1 focus:outline-none" tabIndex={-1}>
        {/* 1. Hero Section with Holographic Stage */}
        <HeroSection
          onExplorePlatform={() => handleNavigate('features')}
          onViewHardware={() => handleNavigate('hardware')}
        />

        {/* 2. Architecture of Reality (Silicon-to-Glass Stack) */}
        <ArchitectureSection
          onOpenSpecs={() => handleNavigate('hardware')}
          onOpenWhitepaper={() => setIsWhitepaperOpen(true)}
        />

        {/* 3. Core Capability Showcase (Neural Rendering, Volumetric Logic, Quantum State, Haptic Mesh) */}
        <CapabilityShowcase />

        {/* 4. Subsystem Feature Toggles (useReducer, Accessible Checkbox Controls) */}
        <FeatureToggles />

        {/* 5. Technical Specifications (Core System, Micro-OLED Display, Sensor Array) */}
        <HardwareSpecs />

        {/* 6. Enterprise Ready (Lumina for Teams, Secure Enclave, Global Sync) */}
        <EnterpriseSection />
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenLegal={(type) => setLegalDocType(type)}
        onOpenSpecs={() => handleNavigate('hardware')}
      />

      {/* Pre-order / Reservation Modal */}
      <PreOrderModal
        isOpen={isPreorderOpen}
        onClose={() => setIsPreorderOpen(false)}
      />

      {/* Legal Views Modal (Terms, Privacy, Legal Notices) */}
      {legalDocType && (
        <LegalViews
          type={legalDocType}
          isOpen={!!legalDocType}
          onClose={() => setLegalDocType(null)}
        />
      )}

      {/* Whitepaper Drawer / Modal */}
      {isWhitepaperOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="whitepaper-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
        >
          <div className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-2xl border border-white/10 bg-[#0d1017] p-6 sm:p-8 shadow-2xl space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-lg bg-sky-950/80 border border-sky-400/30 flex items-center justify-center text-sky-400">
                  <FileText className="w-4 h-4" />
                </div>
                <div>
                  <h3 id="whitepaper-title" className="text-xl font-bold text-white">
                    Lumina OS Technical Whitepaper
                  </h3>
                  <p className="text-xs font-mono text-slate-400">
                    Doc ID: LUM-WP-2026.04 · Architectural Specification
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsWhitepaperOpen(false)}
                className="p-1 text-slate-400 hover:text-white rounded-lg focus-visible:ring-2 focus-visible:ring-sky-400"
                aria-label="Close whitepaper modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-sm text-slate-300 leading-relaxed font-sans">
              <h4 className="text-base font-bold text-white font-mono">1. Deterministic Microkernel Interrupt Scheduling</h4>
              <p>
                Traditional general-purpose operating systems suffer from unpredictable thread jitter during multi-sensor polling. Lumina OS replaces preemptive CPU schedulers with hardware-pinned deterministic interrupts, ensuring stereoscopic photon-to-motion latency never exceeds 0.83 milliseconds at 120Hz refresh rates.
              </p>

              <h4 className="text-base font-bold text-white font-mono">2. Dual-Stream Neural Tensor Composition</h4>
              <p>
                LiDAR point-cloud density and IR reflectance vectors are fused directly into an on-chip tensor matrix. A spatial transformer network projects continuous watertight polygonal volumes onto the hardware compositor before physical eye saccades finish.
              </p>

              <h4 className="text-base font-bold text-white font-mono">3. Sub-Millimeter Haptic Mesh Emulation</h4>
              <p>
                Force-field gradients are calculated by modulating surface impedance vectors. The resulting dynamic frequency waveform drives localized piezoelectric micro-actuators with 0.01μm spatial resolution.
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 flex justify-end">
              <button
                onClick={() => setIsWhitepaperOpen(false)}
                className="px-6 py-2.5 text-xs font-bold text-slate-950 bg-sky-300 hover:bg-sky-200 rounded-lg transition-colors cursor-pointer"
              >
                Done Reading
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
