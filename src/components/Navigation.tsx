import React, { useState } from 'react';
import { Globe, Menu, X, Layers, Sparkles } from 'lucide-react';
import { NavigationSection } from '../types';

interface NavigationProps {
  activeSection: NavigationSection;
  onNavigate: (section: NavigationSection) => void;
  onOpenPreorder: () => void;
  onOpenLegal: (type: 'terms' | 'privacy' | 'legal') => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  activeSection,
  onNavigate,
  onOpenPreorder,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState<'EN' | 'JA' | 'DE'>('EN');

  const navItems: { id: NavigationSection; label: string }[] = [
    { id: 'platform', label: 'PLATFORM' },
    { id: 'features', label: 'FEATURES' },
    { id: 'hardware', label: 'HARDWARE' },
    { id: 'enterprise', label: 'ENTERPRISE' },
  ];

  const handleItemClick = (id: NavigationSection) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleLanguage = () => {
    const langs: ('EN' | 'JA' | 'DE')[] = ['EN', 'JA', 'DE'];
    const nextIdx = (langs.indexOf(language) + 1) % langs.length;
    setLanguage(langs[nextIdx]);
  };

  return (
    <>
      {/* Accessible Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-sky-400 text-slate-950 font-semibold rounded-md shadow-lg outline-none"
      >
        Skip to main content
      </a>

      <header className="sticky top-0 z-40 w-full border-b border-white/5 bg-[#090a0d]/90 backdrop-blur-md transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Brand Logo */}
          <button
            onClick={() => handleItemClick('platform')}
            className="flex items-center space-x-3 text-left focus-visible:ring-2 focus-visible:ring-sky-400 rounded-md p-1 -m-1 transition-opacity hover:opacity-90 cursor-pointer"
            aria-label="Lumina OS Home"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center shadow-[0_0_15px_rgba(56,189,248,0.35)]">
              <Layers className="w-4 h-4 text-slate-950 stroke-[2.5]" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white font-mono">
              Lumina <span className="font-light text-sky-400">OS</span>
            </span>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2" aria-label="Main Navigation">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item.id)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`px-4 py-2 text-xs font-semibold tracking-wider transition-all duration-150 rounded-md cursor-pointer focus-visible:ring-2 focus-visible:ring-sky-400 ${
                    isActive
                      ? 'text-white border-b-2 border-sky-400 font-bold bg-white/[0.04]'
                      : 'text-slate-400 hover:text-slate-100 hover:bg-white/[0.02]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1.5 px-2.5 py-1.5 text-xs text-slate-400 hover:text-slate-200 rounded-md hover:bg-white/5 transition-colors focus-visible:ring-2 focus-visible:ring-sky-400 cursor-pointer"
              title="Change language"
              aria-label={`Current language: ${language}. Click to change.`}
            >
              <Globe className="w-3.5 h-3.5" />
              <span className="font-mono">{language}</span>
            </button>

            <button
              onClick={onOpenPreorder}
              className="px-5 py-2 text-xs font-bold tracking-wide text-slate-950 bg-sky-300 hover:bg-sky-200 active:bg-sky-400 rounded-full transition-all duration-150 shadow-[0_0_20px_rgba(125,211,252,0.25)] hover:shadow-[0_0_25px_rgba(125,211,252,0.45)] cursor-pointer focus-visible:ring-2 focus-visible:ring-sky-400 flex items-center space-x-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-slate-900" />
              <span>Pre-order</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={onOpenPreorder}
              className="px-3 py-1.5 text-xs font-bold text-slate-950 bg-sky-300 rounded-full"
            >
              Pre-order
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-400 hover:text-white rounded-md focus-visible:ring-2 focus-visible:ring-sky-400"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-white/10 bg-[#0c0e14] px-4 pt-2 pb-6 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                className={`block w-full text-left px-3 py-2.5 rounded-lg text-sm font-semibold tracking-wider ${
                  activeSection === item.id
                    ? 'text-sky-400 bg-sky-950/40 border border-sky-800/50'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </header>
    </>
  );
};
