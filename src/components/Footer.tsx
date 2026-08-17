import React from 'react';
import { Layers, Activity, Github, ExternalLink } from 'lucide-react';
import { NavigationSection, LegalDocType } from '../types';

interface FooterProps {
  onNavigate: (section: NavigationSection) => void;
  onOpenLegal: (type: LegalDocType) => void;
  onOpenSpecs: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenLegal,
  onOpenSpecs,
}) => {
  return (
    <footer className="border-t border-white/10 bg-[#07090d] text-slate-400 text-xs pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/5">
          {/* Brand Col (4 cols) */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center">
                <Layers className="w-3.5 h-3.5 text-slate-950 stroke-[2.5]" />
              </div>
              <span className="text-lg font-bold tracking-tight text-white font-mono">
                Lumina <span className="font-light text-sky-400">OS</span>
              </span>
            </div>
            <p className="text-slate-400 max-w-sm leading-relaxed">
              The next-generation spatial computing operating system. Unifying physical environments with deterministic silicon-to-glass rendering.
            </p>
            <div className="flex items-center space-x-2 text-[11px] font-mono text-emerald-400 pt-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>All Systems Nominal · 120Hz Coherent</span>
            </div>
          </div>

          {/* Links: Platform (2 cols) */}
          <div className="md:col-span-2 space-y-3">
            <span className="font-mono text-white font-semibold uppercase tracking-wider block">
              PLATFORM
            </span>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate('platform')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Overview
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('features')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Neural Rendering
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('features')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Haptic Mesh
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenSpecs}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Architecture Stack
                </button>
              </li>
            </ul>
          </div>

          {/* Links: Hardware (2 cols) */}
          <div className="md:col-span-2 space-y-3">
            <span className="font-mono text-white font-semibold uppercase tracking-wider block">
              HARDWARE
            </span>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate('hardware')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Tech Specs
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('hardware')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Micro-OLED Panel
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('hardware')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Neural Tensor Core
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('enterprise')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Enterprise Fleet
                </button>
              </li>
            </ul>
          </div>

          {/* Links: Legal & Resources (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <span className="font-mono text-white font-semibold uppercase tracking-wider block">
              LEGAL & GOVERNANCE
            </span>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onOpenLegal('privacy')}
                  className="hover:text-sky-300 transition-colors cursor-pointer flex items-center space-x-1.5"
                >
                  <span>Privacy Policy & Biometric Protection</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegal('terms')}
                  className="hover:text-sky-300 transition-colors cursor-pointer flex items-center space-x-1.5"
                >
                  <span>Terms of Service & Kernel Licensing</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegal('legal')}
                  className="hover:text-sky-300 transition-colors cursor-pointer flex items-center space-x-1.5"
                >
                  <span>Legal Notices & Patent Registry</span>
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 font-mono">
          <div>
            © 2026 Lumina Systems Inc. All rights reserved. The Architecture of Reality.
          </div>
          <div className="flex items-center space-x-6">
            <span>FIPS 140-3 Enclave</span>
            <span>ARM v9 Certified</span>
            <span>Micro-OLED 4K</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
