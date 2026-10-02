import React, { useState } from 'react';
import { X, Calendar, Sparkles, CheckCircle2, MessageSquare } from 'lucide-react';
import { soundService } from '../services/soundService';

interface CeremonyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CeremonyModal: React.FC<CeremonyModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [intention, setIntention] = useState('Wealth & Abundance Alignment');
  const [date, setDate] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    soundService.playChime(741);
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="relative w-full max-w-lg bg-[#1d1b1a] rounded-3xl border border-[#f59e0b]/30 p-6 sm:p-8 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#a08e7a] hover:text-[#e8e1df] rounded-full hover:bg-[#2c2928] cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="flex flex-col items-center text-center gap-3 py-6">
            <CheckCircle2 className="w-12 h-12 text-[#ffc174]" />
            <h3 className="font-serif text-xl sm:text-2xl text-[#e8e1df] font-semibold">
              Ceremony Request Recorded
            </h3>
            <p className="text-xs text-[#d8c3ad] leading-relaxed max-w-sm">
              Our temple coordinator will reach out to you directly on WhatsApp ({phone}) to confirm the ceremony timing and auspicious hour.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-4 px-6 py-2.5 rounded-full bg-[#f59e0b] text-[#472a00] font-bold text-xs uppercase tracking-wider cursor-pointer hover:brightness-110"
            >
              Close
            </button>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#ffc174] uppercase tracking-wider">
              <Calendar className="w-4 h-4" />
              <span>Sacred Appointment</span>
            </div>

            <h2 className="font-serif text-2xl text-[#e8e1df]">
              Schedule Monastic Blessing Ceremony
            </h2>

            <p className="text-xs text-[#d8c3ad] leading-relaxed">
              Include your personal intentions in the sacred Pirith chant conducted at the Kandy Hermitage.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3.5 mt-2">
              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-[#ffc174] uppercase tracking-wider">
                  Seeker's Name:
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="px-4 py-2.5 rounded-xl bg-[#221f1e] border border-[#373433] text-sm text-[#e8e1df] focus:border-[#f59e0b] focus:outline-none"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-[#ffc174] uppercase tracking-wider">
                  WhatsApp Contact:
                </label>
                <input
                  type="tel"
                  required
                  placeholder="074 118 0006 or your phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="px-4 py-2.5 rounded-xl bg-[#221f1e] border border-[#373433] text-sm text-[#e8e1df] focus:border-[#f59e0b] focus:outline-none"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-[#ffc174] uppercase tracking-wider">
                  Intention Focus:
                </label>
                <select
                  value={intention}
                  onChange={(e) => setIntention(e.target.value)}
                  className="px-4 py-2.5 rounded-xl bg-[#221f1e] border border-[#373433] text-sm text-[#e8e1df] focus:border-[#f59e0b] focus:outline-none"
                >
                  <option value="Wealth & Abundance Alignment">Wealth &amp; Abundance Alignment (ධන ආකර්ෂණය)</option>
                  <option value="Evil Eye & Psychic Cleansing">Evil Eye &amp; Psychic Cleansing (ඇස්වහ කටවහ)</option>
                  <option value="Health, Vitality & Longevity">Health, Vitality &amp; Longevity</option>
                  <option value="Business, Venture & Contract Luck">Business, Venture &amp; Contract Luck</option>
                </select>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-[#ffc174] uppercase tracking-wider">
                  Preferred Date (Lunar Alignment):
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="px-4 py-2.5 rounded-xl bg-[#221f1e] border border-[#373433] text-sm text-[#e8e1df] focus:border-[#f59e0b] focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="mt-2 py-3 px-6 rounded-full bg-gradient-to-r from-[#f59e0b] to-[#d97707] text-[#472a00] font-bold text-sm uppercase tracking-wider hover:brightness-110 cursor-pointer shadow-lg"
              >
                Confirm Blessing Ceremony
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
