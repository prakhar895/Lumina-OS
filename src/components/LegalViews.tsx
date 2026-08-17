import React, { useState } from 'react';
import { Shield, FileText, Scale, Lock, CheckCircle2, X, Download, Printer } from 'lucide-react';
import { LegalDocType } from '../types';

interface LegalViewsProps {
  type: LegalDocType;
  isOpen: boolean;
  onClose: () => void;
}

export const LegalViews: React.FC<LegalViewsProps> = ({ type, isOpen, onClose }) => {
  const [activeSection, setActiveSection] = useState(0);
  const [accepted, setAccepted] = useState(false);

  if (!isOpen) return null;

  const docs = {
    terms: {
      title: 'Terms of Service',
      version: 'Version 4.2 · Updated February 2026',
      sections: [
        {
          id: 'acceptance',
          title: '1. Acceptance of Terms',
          content:
            'By initializing, booting, or developing software on Lumina OS or associated spatial hardware, you agree to be bound by these Terms of Service. If you do not accept these terms, do not initialize the device kernel or install the developer SDK.',
        },
        {
          id: 'licensing',
          title: '2. Software Licensing & Spatial Kernel',
          content:
            'Lumina OS is licensed, not sold. Lumina Systems grants you a personal, non-exclusive, non-transferable license to execute the spatial compositor kernel on certified hardware. Reverse engineering or tampering with the deterministic microkernel interrupt scheduler is strictly prohibited.',
        },
        {
          id: 'hardware',
          title: '3. Hardware Interface Usage & Safety',
          content:
            'Users must maintain appropriate environmental clearance when using spatial immersion modes. Lumina OS includes automatic boundary warning systems that engage when approaching physical obstacles.',
        },
        {
          id: 'sdk',
          title: '4. SDK Developer Agreements',
          content:
            'Applications submitted for the Lumina Spatial Ecosystem must adhere to the 120 FPS performance guidelines and zero-unauthorized-camera-access protocols enforced by the Secure Enclave.',
        },
        {
          id: 'liability',
          title: '5. Limitation of Liability',
          content:
            'Lumina Systems shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your access to or inability to use the spatial computing platform.',
        },
      ],
    },
    privacy: {
      title: 'Privacy Policy',
      version: 'Version 3.8 · Updated February 2026',
      sections: [
        {
          id: 'spatial-data',
          title: '1. Spatial Data Collection & On-Device Processing',
          content:
            'Raw environmental point clouds, LiDAR mesh representations, and stereoscopic camera feeds are processed exclusively within the on-device Neural Tensor Engine. No raw camera or spatial point cloud data is ever transmitted to external servers without explicit cryptographic user authorization.',
        },
        {
          id: 'neural-telemetry',
          title: '2. Neural Rendering Telemetry',
          content:
            'Anonymized performance diagnostics (such as average photon-to-motion latency and frame rate stability) may be collected to improve compositor scheduling. All telemetry is aggregated and stripped of spatial coordinates.',
        },
        {
          id: 'biometrics',
          title: '3. Biometric Security & Iris Keying',
          content:
            'Iris and eye-tracking tokens used for authentication and deterministic gaze selection are isolated inside the FIPS 140-3 Level 3 Secure Enclave. Applications only receive normalized directional ray vectors, never raw biometric sensor feeds.',
        },
      ],
    },
    legal: {
      title: 'Legal Notices & Patents',
      version: 'Updated Q1 2026',
      sections: [
        {
          id: 'patents',
          title: '1. Spatial Engine Patents',
          content:
            'Lumina OS and its underlying sub-millimeter mesh reconstruction architecture are protected by US and international patents: US Pat. Nos. 11,894,201; 12,019,438; and international PCT applications covering deterministic spatial kernel scheduling.',
        },
        {
          id: 'trademarks',
          title: '2. Trademark Usage Guidelines',
          content:
            'Lumina, Lumina OS, Haptic Mesh, and the Lumina prism logo are registered trademarks of Lumina Systems Inc. Third-party developers may use the "Designed for Lumina OS" badge in accordance with the brand guidelines.',
        },
        {
          id: 'compliance',
          title: '3. Regulatory Compliance',
          content:
            'Lumina hardware devices comply with FCC Part 15 Class B, CE Radio Equipment Directive 2014/53/EU, and ISO/IEC 27001 cybersecurity frameworks for enterprise spatial deployments.',
        },
      ],
    },
  };

  const currentDoc = docs[type];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
    >
      <div className="relative w-full max-w-4xl max-h-[85vh] rounded-2xl border border-white/10 bg-[#0d1017] shadow-2xl flex flex-col overflow-hidden">
        {/* Modal Header */}
        <div className="p-6 border-b border-white/10 bg-[#0a0c12] flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-lg bg-sky-950/80 border border-sky-400/30 flex items-center justify-center text-sky-400">
              {type === 'privacy' ? (
                <Lock className="w-4 h-4" />
              ) : type === 'legal' ? (
                <Scale className="w-4 h-4" />
              ) : (
                <FileText className="w-4 h-4" />
              )}
            </div>
            <div>
              <h3 id="legal-modal-title" className="text-lg font-bold text-white">
                {currentDoc.title}
              </h3>
              <p className="text-xs font-mono text-slate-400">{currentDoc.version}</p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => window.print()}
              className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 cursor-pointer focus-visible:ring-2 focus-visible:ring-sky-400"
              title="Print Document"
              aria-label="Print Document"
            >
              <Printer className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 cursor-pointer focus-visible:ring-2 focus-visible:ring-sky-400"
              aria-label="Close legal modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body with Sidebar + Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 flex-1 overflow-hidden">
          {/* Left Table of Contents (4 cols) */}
          <div className="md:col-span-4 border-r border-white/10 p-4 bg-[#090b10] overflow-y-auto space-y-1">
            <span className="text-[10px] font-mono uppercase text-slate-500 px-3 py-1 block">
              TABLE OF CONTENTS
            </span>
            {currentDoc.sections.map((sec, idx) => (
              <button
                key={sec.id}
                onClick={() => setActiveSection(idx)}
                className={`w-full text-left px-3 py-2 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                  activeSection === idx
                    ? 'text-sky-300 bg-sky-950/60 border border-sky-400/30'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                }`}
              >
                {sec.title}
              </button>
            ))}
          </div>

          {/* Right Section Content (8 cols) */}
          <div className="md:col-span-8 p-6 overflow-y-auto space-y-6 bg-[#0c0f16]">
            {type === 'privacy' && (
              <div className="p-4 rounded-xl bg-sky-950/40 border border-sky-400/30 flex items-start space-x-3">
                <Shield className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                <div className="text-xs text-sky-200">
                  <span className="font-bold block mb-0.5">Critical Security Notice</span>
                  All point clouds, LiDAR mesh data, and eye vectors are computed 100% on-device. Zero spatial data egress by default.
                </div>
              </div>
            )}

            <div>
              <h4 className="text-base font-bold text-white mb-3">
                {currentDoc.sections[activeSection].title}
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                {currentDoc.sections[activeSection].content}
              </p>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-white/10 bg-[#0a0c12] flex items-center justify-between">
          <div className="text-xs text-slate-500 font-mono">
            {accepted ? 'Terms Acknowledged' : 'Please review all terms'}
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white rounded-lg hover:bg-white/5 cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                setAccepted(true);
                setTimeout(onClose, 400);
              }}
              className="px-5 py-2 text-xs font-bold text-slate-950 bg-sky-300 hover:bg-sky-200 rounded-lg transition-colors cursor-pointer flex items-center space-x-1.5"
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Accept & Continue</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
