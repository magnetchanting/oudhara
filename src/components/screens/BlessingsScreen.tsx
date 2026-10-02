import React, { useState } from 'react';
import { Phone, Calendar, Clock, Sparkles, CheckCircle2, MessageCircle, MapPin, Search } from 'lucide-react';
import { soundService } from '../../services/soundService';

interface BlessingsScreenProps {
  onOpenOrderLookup?: () => void;
}

export const BlessingsScreen: React.FC<BlessingsScreenProps> = () => {
  // Appointment Form State
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    intention: 'Wealth & Business Protection (ධන ආරක්ෂාව)',
    ceremonyType: 'Virtual Monastic Chanting Live Stream',
    preferredDate: '',
    notes: ''
  });

  // Tracking Lookup State
  const [lookupCode, setLookupCode] = useState('');
  const [trackingResult, setTrackingResult] = useState<{
    code: string;
    recipient: string;
    stage: number;
    stageName: string;
    dispatchStatus: string;
    date: string;
  } | null>(null);

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    soundService.playChime(741);
    setFormSubmitted(true);
  };

  const handleLookup = (e: React.FormEvent) => {
    e.preventDefault();
    soundService.playChime(528);
    // Demo tracker response
    setTrackingResult({
      code: lookupCode.toUpperCase() || 'AVU-9842',
      recipient: 'Sanctified Destined Wearer',
      stage: 3,
      stageName: 'Stage 03: Lunar Meridian Full Moon Charging',
      dispatchStatus: 'Consecration in Progress • Dispatch within 24 Hours',
      date: 'Lunar Cycle: Waxing Gibbous'
    });
  };

  return (
    <div className="flex flex-col w-full py-12">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto flex flex-col items-center gap-3 mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2c2928] text-[#ffc174] text-xs font-semibold uppercase tracking-[0.15em] border border-[#f59e0b]/20">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Direct Monastic Communion</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#e8e1df]">
          Contact &amp; Sacred Blessings
        </h1>
        <p className="text-sm sm:text-base text-[#d8c3ad] leading-relaxed">
          Whether you need elemental guidance before wearing your Pixiu dragon, wish to schedule an individualized Pirith blessing, or check your talisman's sanctification status.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left Column: Direct Phone & Ceremony Booking */}
        <div className="lg:col-span-7 flex flex-col gap-8">
          
          {/* Quick Direct Hotline Banner */}
          <div className="bg-gradient-to-r from-[#2c2928] to-[#221f1e] rounded-2xl p-6 border border-[#f59e0b]/30 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#f59e0b] text-[#472a00] flex items-center justify-center shrink-0 shadow-md">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs text-[#a08e7a] uppercase tracking-wider block font-semibold">
                  24/7 Consecration Custodians
                </span>
                <span className="font-serif text-xl sm:text-2xl text-[#ffc174] font-bold block">
                  074 118 0006
                </span>
                <span className="text-xs text-[#d8c3ad]">
                  International: +94 74 118 0006 (WhatsApp Available)
                </span>
              </div>
            </div>

            <a
              href="https://wa.me/94741180006"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Chat</span>
            </a>
          </div>

          {/* Ceremony Booking Form */}
          <div className="bg-[#1d1b1a] rounded-3xl p-6 sm:p-8 border border-[#f59e0b]/20 shadow-xl">
            <h2 className="font-serif text-2xl text-[#e8e1df] mb-2">
              Schedule Monastic Blessing Ceremony
            </h2>
            <p className="text-xs sm:text-sm text-[#d8c3ad] mb-6 leading-relaxed">
              Submit your birth information and energetic intention to be included in our upcoming full-moon Pirith and Seth Chanting rituals.
            </p>

            {formSubmitted ? (
              <div className="p-6 rounded-2xl bg-[#221f1e] border border-[#f59e0b]/40 flex flex-col items-center text-center gap-3">
                <CheckCircle2 className="w-12 h-12 text-[#ffc174]" />
                <h3 className="font-serif text-xl text-[#ffc174] font-semibold">
                  Blessing Intention Received
                </h3>
                <p className="text-xs text-[#d8c3ad] leading-relaxed max-w-md">
                  May peace, protection, and boundless prosperity surround you. Our custodian monk will contact you via WhatsApp at <strong>{formData.phone}</strong> to confirm the auspicious recitation hour.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="mt-3 text-xs text-[#ffc174] hover:underline cursor-pointer"
                >
                  Submit another intention
                </button>
              </div>
            ) : (
              <form onSubmit={handleBookingSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-[#ffc174] uppercase tracking-wider">
                      Full Name (සම්පූර්ණ නම):
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Kasun Bandara"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="px-4 py-2.5 rounded-xl bg-[#221f1e] border border-[#373433] text-sm text-[#e8e1df] focus:border-[#f59e0b] focus:outline-none"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-[#ffc174] uppercase tracking-wider">
                      WhatsApp Phone Number:
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

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-[#ffc174] uppercase tracking-wider">
                      Auspicious Intention:
                    </label>
                    <select
                      value={formData.intention}
                      onChange={(e) => setFormData({ ...formData, intention: e.target.value })}
                      className="px-4 py-2.5 rounded-xl bg-[#221f1e] border border-[#373433] text-sm text-[#e8e1df] focus:border-[#f59e0b] focus:outline-none"
                    >
                      <option value="Wealth & Business Protection (ධන ආරක්ෂාව)">Wealth &amp; Business Protection (ධන ආරක්ෂාව)</option>
                      <option value="Evil Eye & Psychic Cleansing (ඇස්වහ කටවහ දුරු කිරීම)">Evil Eye &amp; Psychic Cleansing (ඇස්වහ කටවහ)</option>
                      <option value="Physical Vitality & Fatigue Recovery">Physical Vitality &amp; Fatigue Recovery</option>
                      <option value="Career & Commercial Expansion">Career &amp; Commercial Expansion</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-[#ffc174] uppercase tracking-wider">
                      Ceremony Type:
                    </label>
                    <select
                      value={formData.ceremonyType}
                      onChange={(e) => setFormData({ ...formData, ceremonyType: e.target.value })}
                      className="px-4 py-2.5 rounded-xl bg-[#221f1e] border border-[#373433] text-sm text-[#e8e1df] focus:border-[#f59e0b] focus:outline-none"
                    >
                      <option value="Virtual Monastic Chanting Live Stream">Virtual Monastic Chanting Live Stream</option>
                      <option value="In-Person Hermitage Blessing (Kandy Sanctuary)">In-Person Hermitage Blessing (Kandy Sanctuary)</option>
                      <option value="Personal Reliquary Consecration (Mailed)">Personal Reliquary Consecration (Mailed)</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-[#ffc174] uppercase tracking-wider">
                    Special Prayers / Personal Notes (Optional):
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Mention specific concerns, astrological nakshatra, or intention details..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="px-4 py-2.5 rounded-xl bg-[#221f1e] border border-[#373433] text-sm text-[#e8e1df] focus:border-[#f59e0b] focus:outline-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="mt-2 py-3 px-6 rounded-full bg-gradient-to-r from-[#f59e0b] to-[#d97707] text-[#472a00] font-bold text-sm uppercase tracking-wider hover:brightness-110 transition-all cursor-pointer shadow-lg"
                >
                  Schedule Auspicious Blessing
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Right Column: Sanctification Tracker & Hermitage Info */}
        <div className="lg:col-span-5 flex flex-col gap-8">
          
          {/* Sanctification Order Tracker */}
          <div className="bg-[#1d1b1a] rounded-3xl p-6 sm:p-8 border border-[#f59e0b]/20 shadow-xl">
            <div className="flex items-center gap-2 text-[#ffc174] text-xs font-semibold uppercase tracking-wider mb-2">
              <Search className="w-4 h-4" />
              <span>Sacred Verification</span>
            </div>
            <h3 className="font-serif text-xl sm:text-2xl text-[#e8e1df] mb-2">
              Track Talisman Sanctification
            </h3>
            <p className="text-xs text-[#d8c3ad] leading-relaxed mb-4">
              Enter your Order Code (e.g. AVU-808) or phone number to check which consecration phase your talisman is undergoing.
            </p>

            <form onSubmit={handleLookup} className="flex gap-2 mb-4">
              <input
                type="text"
                placeholder="Enter Code (e.g. AVU-808)"
                value={lookupCode}
                onChange={(e) => setLookupCode(e.target.value)}
                className="flex-1 px-4 py-2 rounded-xl bg-[#221f1e] border border-[#373433] text-sm text-[#e8e1df] focus:border-[#f59e0b] focus:outline-none uppercase"
                required
              />
              <button
                type="submit"
                className="px-4 py-2 rounded-xl bg-[#f59e0b] text-[#472a00] font-bold text-xs uppercase tracking-wider hover:brightness-110 cursor-pointer"
              >
                Track
              </button>
            </form>

            {trackingResult && (
              <div className="p-4 rounded-xl bg-[#221f1e] border border-[#f59e0b]/30 flex flex-col gap-3 animate-fadeIn">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#ffc174]">{trackingResult.code}</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 font-semibold border border-emerald-800">
                    Active Consecration
                  </span>
                </div>
                <div className="text-sm font-semibold text-[#e8e1df]">
                  {trackingResult.stageName}
                </div>
                <div className="w-full bg-[#2c2928] h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-[#f59e0b] to-[#38bdf8] h-full rounded-full transition-all"
                    style={{ width: `${(trackingResult.stage / 4) * 100}%` }}
                  ></div>
                </div>
                <span className="text-xs text-[#a08e7a]">
                  Status: {trackingResult.dispatchStatus}
                </span>
              </div>
            )}
          </div>

          {/* Lineage Hermitage Sanctuary Details */}
          <div className="bg-[#221f1e] rounded-3xl p-6 sm:p-8 border border-[#373433] flex flex-col gap-4">
            <h3 className="font-serif text-lg font-semibold text-[#ffc174]">
              Hermitage Sanctum Location
            </h3>
            <div className="flex items-start gap-3 text-xs text-[#d8c3ad] leading-relaxed">
              <MapPin className="w-5 h-5 text-[#ffc174] shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#e8e1df] block text-sm">Oudhara Metaphysical Hermitage</strong>
                <span>Upper Hantana Mountain Range, Kandy, Sri Lanka.</span>
                <span className="block text-[#a08e7a] mt-1">Open for consecrated talisman collections by prior appointment.</span>
              </div>
            </div>

            <div className="pt-3 border-t border-[#373433] flex flex-col gap-1.5 text-xs text-[#a08e7a]">
              <div className="flex items-center justify-between">
                <span>Direct Line:</span>
                <span className="text-[#e8e1df]">074 118 0006</span>
              </div>
              <div className="flex items-center justify-between">
                <span>International Delivery:</span>
                <span className="text-emerald-400">DHL Express / Sacred Insured</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
