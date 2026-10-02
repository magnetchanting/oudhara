import React, { useState } from 'react';
import { ScreenType } from '../types';
import { ASSETS } from '../data/metaphysicalData';
import { ShoppingBag, Menu, X, MessageCircle, Sparkles, UserCheck } from 'lucide-react';

interface NavbarProps {
  currentScreen: ScreenType;
  onNavigate: (screen: ScreenType) => void;
  cartCount: number;
  onOpenCart: () => void;
  onOpenConsultation: () => void;
  onOpenOrderLookup: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentScreen,
  onNavigate,
  cartCount,
  onOpenCart,
  onOpenConsultation,
  onOpenOrderLookup
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { label: string; screen: ScreenType }[] = [
    { label: 'Home', screen: 'home' },
    { label: 'About Aura & Pixiu', screen: 'about' },
    { label: 'Contact & Blessings', screen: 'contact' },
    { label: 'Privacy Policy', screen: 'privacy' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#151312]/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.5)] border-b border-[#f59e0b]/15">
      <div className="h-20 max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between gap-6">
        
        {/* Brand Zone: Authentic Logo + Wordmark */}
        <button
          onClick={() => {
            onNavigate('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center text-left group transition-transform focus:outline-none cursor-pointer"
        >
          <img
            src="https://i.imgur.com/Hibii5P.png"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = '/logo.png';
            }}
            alt="OUDHARA Sacred Talismans"
            className="h-12 sm:h-14 w-auto object-contain filter drop-shadow-[0_0_16px_rgba(245,158,11,0.6)] group-hover:scale-105 transition-all"
            referrerPolicy="no-referrer"
          />
        </button>

        {/* Desktop Nav Zone */}
        <nav className="hidden lg:flex items-center gap-2">
          {navItems.map((item) => {
            const isActive = currentScreen === item.screen;
            return (
              <button
                key={item.screen}
                onClick={() => {
                  onNavigate(item.screen);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`text-[15px] font-medium transition-all py-2 px-3.5 rounded-lg whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-[#2c2928] text-[#ffc174] font-semibold shadow-[inset_0_1px_0_rgba(245,158,11,0.2)]'
                    : 'text-[#d8c3ad] hover:text-[#e8e1df] hover:bg-[#1d1b1a]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Action Zone: WhatsApp + Cart + Lookup */}
        <div className="flex items-center gap-3">
          
          {/* WhatsApp Action Button matching screenshot style */}
          <a
            href="https://wa.me/94741180006?text=Namaskaram%20Avudara%20Monastery.%20I%20would%20like%20guidance%20on%20Aura%20Alignment%20and%20consecrated%20Pixiu%20talismans."
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#f59e0b] to-[#d97707] text-[#472a00] font-semibold text-xs tracking-wide shadow-[0_0_16px_rgba(245,158,11,0.28)] hover:shadow-[0_0_24px_rgba(245,158,11,0.5)] hover:brightness-110 transition-all cursor-pointer whitespace-nowrap"
          >
            <span className="material-symbols-outlined text-[16px]">chat</span>
            <span>WhatsApp Blessings</span>
          </a>

          {/* Cart Trigger */}
          <button
            onClick={onOpenCart}
            aria-label="View Cart"
            className="relative p-2.5 rounded-full bg-[#1d1b1a] hover:bg-[#2c2928] text-[#ffc174] border border-[#f59e0b]/20 hover:border-[#f59e0b]/40 transition-all cursor-pointer"
            title="Sanctified Reliquary Cart"
          >
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#f59e0b] text-[#472a00] text-[11px] font-bold flex items-center justify-center shadow-[0_0_10px_rgba(245,158,11,0.6)]">
                {cartCount}
              </span>
            )}
          </button>

          {/* Sanctification Status / Order Lookup Avatar */}
          <button
            onClick={onOpenOrderLookup}
            className="w-9 h-9 rounded-full bg-[#ffc174] hover:bg-[#ffdcc3] flex items-center justify-center shrink-0 text-[#472a00] transition-colors cursor-pointer shadow-sm"
            title="Consecration & Order Verification"
          >
            <span className="material-symbols-outlined text-[20px]">person</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#d8c3ad] hover:text-[#ffc174] focus:outline-none cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#151312] border-b border-[#f59e0b]/20 px-6 py-5 flex flex-col gap-3 shadow-2xl">
          {navItems.map((item) => (
            <button
              key={item.screen}
              onClick={() => {
                onNavigate(item.screen);
                setMobileMenuOpen(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`text-left text-base py-2.5 px-3 rounded-lg font-medium ${
                currentScreen === item.screen
                  ? 'bg-[#2c2928] text-[#ffc174] font-semibold'
                  : 'text-[#d8c3ad] hover:text-[#ffc174]'
              }`}
            >
              {item.label}
            </button>
          ))}

          <div className="pt-3 border-t border-[#373433] flex flex-col gap-2.5">
            <a
              href="https://wa.me/94741180006"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-full bg-gradient-to-r from-[#f59e0b] to-[#d97707] text-[#472a00] font-semibold text-sm"
            >
              <span className="material-symbols-outlined text-[18px]">chat</span>
              WhatsApp Direct Blessings (074 118 0006)
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
