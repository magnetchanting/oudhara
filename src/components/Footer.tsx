import React from 'react';
import { ScreenType } from '../types';

interface FooterProps {
  onNavigate: (screen: ScreenType) => void;
  onOpenConsultation: () => void;
  onOpenOrderLookup: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenConsultation,
  onOpenOrderLookup
}) => {
  return (
    <footer className="w-full bg-[#100e0d] border-t border-[#f59e0b]/15 mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-[#2c2928]">
          
          {/* Brand & Lineage Statement */}
          <div className="md:col-span-2 flex flex-col gap-3.5">
            <div className="flex items-center">
              <img
                src="https://i.imgur.com/Hibii5P.png"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = '/logo.png';
                }}
                alt="OUDHARA Sacred Talismans"
                className="h-14 sm:h-16 w-auto object-contain filter drop-shadow-[0_0_12px_rgba(245,158,11,0.5)] -ml-1"
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="text-[14px] leading-relaxed text-[#d8c3ad] max-w-md">
              Consecrated Black Obsidian Pixiu talismans channeled through ancient lineage rituals. Crafted to activate divine energetic shields, magnetic abundance, and harmonic metaphysical balance.
            </p>
            <div className="flex items-center gap-2 text-[#ffc174] text-xs font-semibold tracking-wider uppercase mt-2">
              <span className="material-symbols-outlined text-[16px]">verified</span>
              <span>Authentic Monastic Sanctification Lineage</span>
            </div>
          </div>

          {/* Sacred Portals Links */}
          <div className="flex flex-col gap-2">
            <span className="text-xs font-semibold text-[#ffc174] tracking-[0.15em] uppercase mb-1">
              Sacred Portals
            </span>
            <button
              onClick={() => {
                onNavigate('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-left text-[14px] text-[#d8c3ad] hover:text-[#ffc174] transition-colors py-0.5 cursor-pointer"
            >
              Talisman Sanctuary
            </button>
            <button
              onClick={() => {
                onNavigate('about');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-left text-[14px] text-[#d8c3ad] hover:text-[#ffc174] transition-colors py-0.5 cursor-pointer"
            >
              Aura & Energy Guide
            </button>
            <button
              onClick={onOpenConsultation}
              className="text-left text-[14px] text-[#d8c3ad] hover:text-[#ffc174] transition-colors py-0.5 cursor-pointer"
            >
              Custom Consecration
            </button>
            <button
              onClick={() => {
                onNavigate('about');
                const el = document.getElementById('aura-diagnostic-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-left text-[14px] text-[#d8c3ad] hover:text-[#ffc174] transition-colors py-0.5 cursor-pointer"
            >
              Chakra Alignment Check
            </button>
          </div>

          {/* Sanctuary Support Links */}
          <div className="flex flex-col gap-2">
            <span className="text-xs font-semibold text-[#ffc174] tracking-[0.15em] uppercase mb-1">
              Sanctuary Support
            </span>
            <span className="text-[14px] text-[#d8c3ad] flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              Direct Monk Consultation: Available
            </span>
            <span className="text-[14px] text-[#d8c3ad]">
              Worldwide Sacred Courier Delivery
            </span>
            <button
              onClick={onOpenOrderLookup}
              className="text-left text-[14px] text-[#ffc174] hover:underline transition-colors py-0.5 cursor-pointer"
            >
              Track Sanctification Progress
            </button>
            <button
              onClick={() => {
                onNavigate('privacy');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-left text-[14px] text-[#d8c3ad] hover:text-[#ffc174] transition-colors py-0.5 cursor-pointer mt-1"
            >
              Privacy & Sacred Covenant
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#a08e7a]">
          <span>© 2024 OUDHARA Talismans. All Metaphysical Rights Reserved.</span>
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded bg-[#1d1b1a] border border-[#373433] text-[#d8c3ad]">
              Elemental Resonance: Obsidian & Gold
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
