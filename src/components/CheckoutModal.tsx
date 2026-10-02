import React, { useState } from 'react';
import { CartItem } from '../types';
import { X, CheckCircle2, ShieldCheck, Printer, ArrowLeft, Sparkles } from 'lucide-react';
import { soundService } from '../services/soundService';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onOrderCompleted: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  items,
  onOrderCompleted
}) => {
  const [step, setStep] = useState<'form' | 'certificate'>('form');
  const [formData, setFormData] = useState({
    recipientName: '',
    phone: '',
    address: '',
    city: '',
    birthYear: '',
    paymentMethod: 'Cash on Delivery (භාණ්ඩ ලැබුණු පසු මුදල් ගෙවීම)',
    monkNotes: ''
  });

  const [certificateData, setCertificateData] = useState<{
    code: string;
    recipient: string;
    consecrationDate: string;
    totalLKR: number;
  } | null>(null);

  if (!isOpen) return null;

  const totalLKR = items.reduce(
    (sum, item) => sum + item.product.priceLKR * item.quantity,
    0
  );

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    soundService.playChime(963);

    const generatedCode = `AVU-${Math.floor(1000 + Math.random() * 9000)}`;
    setCertificateData({
      code: generatedCode,
      recipient: formData.recipientName,
      consecrationDate: new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }),
      totalLKR
    });

    setStep('certificate');
    onOrderCompleted();
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
      <div className="relative w-full max-w-2xl bg-[#1d1b1a] rounded-3xl border border-[#f59e0b]/30 shadow-2xl overflow-hidden my-8">
        
        {/* Modal Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#a08e7a] hover:text-[#e8e1df] hover:bg-[#2c2928] z-20 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {step === 'form' ? (
          <div className="p-6 sm:p-10 flex flex-col gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2c2928] text-[#ffc174] text-[11px] font-semibold uppercase tracking-wider mb-2 border border-[#f59e0b]/20">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Consecration Order Finalization</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#e8e1df]">
                Destination Wearer &amp; Delivery Details
              </h2>
              <p className="text-xs text-[#d8c3ad] mt-1">
                Your talisman is consecrated with the specific recipient's intention before being sealed into the sacred velvet reliquary.
              </p>
            </div>

            {/* Order summary pill */}
            <div className="p-4 rounded-xl bg-[#221f1e] border border-[#373433] flex items-center justify-between text-xs">
              <span className="text-[#a08e7a]">Total Sanctified Items: {items.length}</span>
              <span className="font-serif text-base font-bold text-[#ffc174]">
                Total: Rs. {totalLKR.toLocaleString()} (Free Delivery)
              </span>
            </div>

            <form onSubmit={handleSubmitOrder} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-[#ffc174] uppercase tracking-wider">
                    Destined Wearer Name (පළඳින අයගේ නම):
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Priyantha Jayasuriya"
                    value={formData.recipientName}
                    onChange={(e) => setFormData({ ...formData, recipientName: e.target.value })}
                    className="px-4 py-2.5 rounded-xl bg-[#221f1e] border border-[#373433] text-sm text-[#e8e1df] focus:border-[#f59e0b] focus:outline-none"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-[#ffc174] uppercase tracking-wider">
                    WhatsApp Mobile Number:
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 077 123 4567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="px-4 py-2.5 rounded-xl bg-[#221f1e] border border-[#373433] text-sm text-[#e8e1df] focus:border-[#f59e0b] focus:outline-none"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-[#ffc174] uppercase tracking-wider">
                  Full Postal Delivery Address:
                </label>
                <input
                  type="text"
                  required
                  placeholder="Street Address, Apartment, Landmark..."
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="px-4 py-2.5 rounded-xl bg-[#221f1e] border border-[#373433] text-sm text-[#e8e1df] focus:border-[#f59e0b] focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-[#ffc174] uppercase tracking-wider">
                    City / Postal District:
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Colombo / Kandy / Galle"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="px-4 py-2.5 rounded-xl bg-[#221f1e] border border-[#373433] text-sm text-[#e8e1df] focus:border-[#f59e0b] focus:outline-none"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-[#ffc174] uppercase tracking-wider">
                    Wearer Birth Year (For Astro Alignment):
                  </label>
                  <input
                    type="number"
                    placeholder="e.g. 1992 (Optional)"
                    value={formData.birthYear}
                    onChange={(e) => setFormData({ ...formData, birthYear: e.target.value })}
                    className="px-4 py-2.5 rounded-xl bg-[#221f1e] border border-[#373433] text-sm text-[#e8e1df] focus:border-[#f59e0b] focus:outline-none"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-[#ffc174] uppercase tracking-wider">
                  Payment Method:
                </label>
                <select
                  value={formData.paymentMethod}
                  onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })}
                  className="px-4 py-2.5 rounded-xl bg-[#221f1e] border border-[#373433] text-sm text-[#e8e1df] focus:border-[#f59e0b] focus:outline-none"
                >
                  <option value="Cash on Delivery (භාණ්ඩ ලැබුණු පසු මුදල් ගෙවීම)">
                    Cash on Delivery (භාණ්ඩ ලැබුණු පසු මුදල් ගෙවීම) — Most Popular
                  </option>
                  <option value="Direct Monastic Bank Transfer">
                    Direct Monastic Bank Transfer (Commercial Bank / Sampath Bank)
                  </option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-[#ffc174] uppercase tracking-wider">
                  Specific Prayer or Intention Notes for Lineage Monk (Optional):
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Special protection for upcoming foreign examination or business launch..."
                  value={formData.monkNotes}
                  onChange={(e) => setFormData({ ...formData, monkNotes: e.target.value })}
                  className="px-4 py-2.5 rounded-xl bg-[#221f1e] border border-[#373433] text-sm text-[#e8e1df] focus:border-[#f59e0b] focus:outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="mt-3 py-3.5 px-6 rounded-full bg-gradient-to-r from-[#f59e0b] to-[#d97707] text-[#472a00] font-bold text-sm uppercase tracking-wider hover:brightness-110 transition-all cursor-pointer shadow-lg flex items-center justify-center gap-2"
              >
                <span>Authorize Sanctification &amp; Place Order</span>
              </button>
            </form>
          </div>
        ) : (
          /* Consecration Certificate View */
          <div className="p-6 sm:p-10 flex flex-col gap-6 items-center text-center">
            
            {/* The Certificate Paper Container */}
            <div className="w-full bg-[#151312] p-8 rounded-2xl border-2 border-[#f59e0b]/50 gold-glow relative overflow-hidden flex flex-col items-center gap-4">
              
              {/* Corner Ornaments */}
              <div className="absolute top-2 left-2 text-[#f59e0b]/40 text-xs">✦</div>
              <div className="absolute top-2 right-2 text-[#f59e0b]/40 text-xs">✦</div>
              <div className="absolute bottom-2 left-2 text-[#f59e0b]/40 text-xs">✦</div>
              <div className="absolute bottom-2 right-2 text-[#f59e0b]/40 text-xs">✦</div>

              <img
                src="https://i.imgur.com/Hibii5P.png"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = '/logo.png';
                }}
                alt="OUDHARA Seal"
                className="h-18 w-auto object-contain filter drop-shadow-[0_0_15px_rgba(245,158,11,0.6)] mb-1"
                referrerPolicy="no-referrer"
              />

              <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-[#ffc174]">
                OUDHARA MONASTIC HERMITAGE • KANDY
              </span>

              <h3 className="font-serif text-2xl sm:text-3xl text-[#e8e1df] font-bold">
                Certificate of Metaphysical Sanctification
              </h3>

              <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#f59e0b] to-transparent my-1"></div>

              <p className="text-xs sm:text-sm text-[#d8c3ad] max-w-lg leading-relaxed">
                This document certifies that the volcanic black obsidian Pixiu artifact bearing code <strong className="text-[#ffc174] font-mono">{certificateData?.code}</strong> has undergone the sacred four-fold purification protocol and 108 cycles of Maha Paritta chanting in the destined name of:
              </p>

              <div className="py-2 px-6 rounded-xl bg-[#221f1e] border border-[#f59e0b]/30">
                <span className="font-serif text-xl sm:text-2xl text-[#ffc174] font-bold">
                  {certificateData?.recipient}
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full max-w-md pt-2 text-left">
                <div className="p-2.5 rounded-lg bg-[#1d1b1a] border border-[#373433]">
                  <span className="text-[10px] text-[#a08e7a] block uppercase">Chamber</span>
                  <span className="text-xs font-semibold text-[#e8e1df]">Inner Sanctum</span>
                </div>
                <div className="p-2.5 rounded-lg bg-[#1d1b1a] border border-[#373433]">
                  <span className="text-[10px] text-[#a08e7a] block uppercase">Ritual Seal</span>
                  <span className="text-xs font-semibold text-[#e8e1df]">108 Chants</span>
                </div>
                <div className="p-2.5 rounded-lg bg-[#1d1b1a] border border-[#373433] col-span-2 sm:col-span-1">
                  <span className="text-[10px] text-[#a08e7a] block uppercase">Mineral Integrity</span>
                  <span className="text-xs font-semibold text-[#ffc174]">100% Volcanic</span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-[#a08e7a] pt-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Sanctified on: {certificateData?.consecrationDate}</span>
              </div>
            </div>

            {/* Post-order Instructions */}
            <div className="text-xs text-[#d8c3ad] leading-relaxed max-w-md">
              Your sealed reliquary is being prepared. Our sacred courier will deliver to your doorstep within <strong>24 to 48 hours</strong>. Please retain your code <strong className="text-[#ffc174]">{certificateData?.code}</strong> for tracking.
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handlePrint}
                className="px-5 py-2.5 rounded-full bg-[#221f1e] text-[#e8e1df] hover:text-[#ffc174] font-medium text-xs border border-[#534434] transition-colors flex items-center gap-2 cursor-pointer"
              >
                <Printer className="w-4 h-4" />
                <span>Print Certificate</span>
              </button>

              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#f59e0b] to-[#d97707] text-[#472a00] font-bold text-xs uppercase tracking-wider hover:brightness-110 cursor-pointer"
              >
                Return to Sanctuary
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
