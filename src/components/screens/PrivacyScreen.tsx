import React from 'react';
import { Shield, Lock, EyeOff, Scroll, CheckCircle2 } from 'lucide-react';

export const PrivacyScreen: React.FC = () => {
  return (
    <div className="flex flex-col w-full py-12 max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center flex flex-col items-center gap-3 mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2c2928] text-[#ffc174] text-xs font-semibold uppercase tracking-[0.15em] border border-[#f59e0b]/20">
          <Shield className="w-3.5 h-3.5" />
          <span>Sacred Hermitage Trust</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#e8e1df]">
          Privacy Policy &amp; Sacred Covenant
        </h1>
        <p className="text-sm sm:text-base text-[#d8c3ad] leading-relaxed">
          In our lineage, trust is a spiritual pact. We safeguard your name, birth details, and personal intentions with absolute confidentiality.
        </p>
      </div>

      <div className="bg-[#1d1b1a] rounded-3xl p-6 sm:p-10 border border-[#f59e0b]/20 shadow-2xl flex flex-col gap-8">
        
        {/* Covenant Statement */}
        <div className="p-5 rounded-2xl bg-[#221f1e] border border-[#f59e0b]/30 flex items-start gap-4">
          <Lock className="w-6 h-6 text-[#ffc174] shrink-0 mt-1" />
          <div>
            <h3 className="font-serif text-lg font-semibold text-[#ffc174]">
              The Monastic Secrecy Charter
            </h3>
            <p className="text-xs sm:text-sm text-[#d8c3ad] leading-relaxed mt-1">
              Any personal birth date, astrological nakshatra, or emotional affliction shared with our custodians is used solely to chant individual pirith protections. Once the talisman is sealed inside the consecrated reliquary, handwritten prayer chits are traditionally returned to earth through sacred ceremonial water.
            </p>
          </div>
        </div>

        {/* Core Principles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2 p-5 rounded-xl bg-[#221f1e] border border-[#373433]">
            <span className="text-xs uppercase tracking-wider font-semibold text-[#ffc174] flex items-center gap-1.5">
              <EyeOff className="w-4 h-4" />
              Zero Commercial Data Sharing
            </span>
            <p className="text-xs text-[#d8c3ad] leading-relaxed">
              We never sell, rent, or distribute seeker details to ad networks, marketing brokers, or external entities. Your sacred intentions remain strictly between you and the monastic custodian.
            </p>
          </div>

          <div className="flex flex-col gap-2 p-5 rounded-xl bg-[#221f1e] border border-[#373433]">
            <span className="text-xs uppercase tracking-wider font-semibold text-[#ffb77d] flex items-center gap-1.5">
              <Scroll className="w-4 h-4" />
              Direct WhatsApp Communication
            </span>
            <p className="text-xs text-[#d8c3ad] leading-relaxed">
              All messages exchanged with our consecrated support line (<strong>074 118 0006</strong> / <strong>+94 74 118 0006</strong>) are end-to-end encrypted under standard WhatsApp protocol and handled exclusively by our designated monastic caretakers.
            </p>
            <div className="pt-2">
              <a
                href="https://wa.me/94741180006?text=Namaskaram.%20I%20have%20a%20privacy%20or%20sacred%20intention%20inquiry%20regarding%20my%20data."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-700/80 hover:bg-emerald-600 text-white text-xs font-semibold shadow-sm transition-all"
              >
                <span className="material-symbols-outlined text-[16px]">chat</span>
                <span>Chat on WhatsApp: 074 118 0006</span>
              </a>
            </div>
          </div>
        </div>

        {/* Dedicated WhatsApp Privacy Inquiries Banner */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-[#221f1e] via-[#2c2928] to-[#221f1e] border border-[#f59e0b]/25 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col gap-1 text-center sm:text-left">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#ffc174]">
              Data Privacy &amp; Confidential Intentions Officer
            </span>
            <h4 className="font-serif text-lg text-[#e8e1df] font-semibold">
              Have questions or wish to delete your birth details?
            </h4>
            <p className="text-xs text-[#d8c3ad]">
              Contact our privacy steward directly via WhatsApp for instant record verification or erasure.
            </p>
          </div>
          <a
            href="https://wa.me/94741180006?text=Namaskaram%20Custodian.%20I%20would%20like%20to%20inquire%20about%20my%20privacy%20and%20personal%20details."
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#f59e0b] to-[#d97707] text-[#472a00] font-bold text-xs uppercase tracking-wider hover:brightness-110 transition-all shadow-md flex items-center gap-2 whitespace-nowrap cursor-pointer shrink-0"
          >
            <span className="material-symbols-outlined text-[18px]">chat</span>
            <span>WhatsApp: 074 118 0006</span>
          </a>
        </div>

        {/* Order Fulfillment & Delivery */}
        <div className="flex flex-col gap-3">
          <h3 className="font-serif text-xl text-[#e8e1df]">
            Order Fulfillment &amp; Courier Security
          </h3>
          <p className="text-xs sm:text-sm text-[#d8c3ad] leading-relaxed">
            When ordering a consecrated talisman via Cash on Delivery (COD) or sacred priority courier, your shipping address and contact number are transmitted solely to our bonded courier partners to ensure secure doorstep delivery in an unmarked, tamper-evident outer box.
          </p>
          <ul className="text-xs text-[#a08e7a] flex flex-col gap-2 pl-4 list-disc">
            <li>Discrete, respectful exterior packaging without sensational metaphysical claims.</li>
            <li>Right to request immediate erasure of your customer records after delivery confirmation.</li>
            <li>No unsolicited promotional spam or telemarketing robocalls.</li>
          </ul>
        </div>

        {/* Contact info */}
        <div className="pt-6 border-t border-[#373433] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#a08e7a]">
          <span>Effective Date: Gregorian &amp; Buddhist Era 2568</span>
          <div className="flex items-center gap-3">
            <span>Inquiries: <a href="mailto:lineage@oudhara.com" className="text-[#e8e1df] hover:underline">lineage@oudhara.com</a></span>
            <span>•</span>
            <a
              href="https://wa.me/94741180006"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#ffc174] hover:underline font-semibold flex items-center gap-1"
            >
              <span className="material-symbols-outlined text-[14px]">chat</span>
              <span>WhatsApp: 074 118 0006</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
