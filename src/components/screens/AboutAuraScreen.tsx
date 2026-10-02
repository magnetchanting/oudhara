import React, { useState } from 'react';
import {
  ASSETS,
  CHAKRA_LIST,
  AURA_STRESS_INDICATORS,
  CONSECRATION_PHASES,
  QUIZ_ITEMS,
  WEARING_RULES
} from '../../data/metaphysicalData';
import { soundService } from '../../services/soundService';
import { Volume2, VolumeX, Sparkles, Check, CheckSquare, Square, Phone, Calendar, ArrowRight } from 'lucide-react';
import { ScreenType } from '../../types';

interface AboutAuraScreenProps {
  onNavigate: (screen: ScreenType) => void;
  onOpenConsultation: () => void;
  onSelectProductForCheckout?: (productId: string) => void;
}

export const AboutAuraScreen: React.FC<AboutAuraScreenProps> = ({
  onNavigate,
  onOpenConsultation,
  onSelectProductForCheckout
}) => {
  // Selected Chakra ID (Default to Muladhara = 1)
  const [selectedChakraId, setSelectedChakraId] = useState<number>(1);
  const activeChakra = CHAKRA_LIST.find((c) => c.id === selectedChakraId) || CHAKRA_LIST[0];

  // 963 Hz Audio State
  const [isTonePlaying, setIsTonePlaying] = useState<boolean>(false);

  // Aura Pollution Quiz State
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);

  const handleToggleSymptom = (id: string) => {
    soundService.playChime(639);
    setSelectedSymptoms((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Calculate current score
  const currentScore = selectedSymptoms.reduce((acc, id) => {
    const item = QUIZ_ITEMS.find((q) => q.id === id);
    return acc + (item ? item.points : 0);
  }, 0);

  // Handle Chakra Selection
  const handleChakraClick = (id: number) => {
    setSelectedChakraId(id);
    const chakra = CHAKRA_LIST.find((c) => c.id === id);
    const freq = parseInt(chakra?.frequency || '528', 10);
    soundService.playChime(freq);
  };

  // Handle 963 Hz Frequency Toggle
  const toggleFrequency = () => {
    soundService.toggle963HzTone((playing) => {
      setIsTonePlaying(playing);
    });
  };

  return (
    <div className="flex flex-col w-full">
      {/* Atmospheric Scrim & Introduction Section */}
      <section className="relative py-12 md:py-16 overflow-hidden">
        {/* Ambient atmospheric glows matching the design system */}
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#f59e0b]/10 blur-[130px] pointer-events-none"></div>
        <div className="absolute top-1/2 -right-40 w-[30rem] h-[30rem] rounded-full bg-[#d97707]/10 blur-[160px] pointer-events-none"></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2c2928] text-[#ffc174] text-xs font-semibold uppercase tracking-[0.14em] shadow-sm w-fit border border-[#f59e0b]/20">
              <span className="material-symbols-outlined text-[15px]">auto_awesome</span>
              <span>Metaphysical Treatise &amp; Heritage</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-[46px] leading-[1.18] text-[#e8e1df] tracking-tight">
              The Sacred Science of <span className="text-[#ffc174] italic">Aura Alignment</span> &amp; The Dragon Guardian
            </h1>

            <p className="text-[16px] sm:text-[17px] text-[#d8c3ad] max-w-2xl leading-relaxed">
              Behind every energetic affliction lies an imbalanced vibrational field. When negative frequencies, psychic fatigue, and stagnant financial flow cloud your spiritual shield, the ancient alliance of volcanic Black Obsidian and the celestial Pixiu restores primordial sovereignty.
            </p>

            {/* Metaphysical Benefit Cards */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <div className="flex items-center gap-3 bg-[#221f1e] px-4 py-3 rounded-xl border border-[#f59e0b]/15 shadow-sm">
                <span className="material-symbols-outlined text-[#ffc174] text-[24px]">shield_with_heart</span>
                <div className="flex flex-col">
                  <span className="text-[10px] text-[#a08e7a] uppercase tracking-wider font-semibold">Spiritual Shielding</span>
                  <span className="text-sm font-semibold text-[#e8e1df]">Psychic Negativity Ward</span>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-[#221f1e] px-4 py-3 rounded-xl border border-[#d97707]/20 shadow-sm">
                <span className="material-symbols-outlined text-[#ffb77d] text-[24px]">savings</span>
                <div className="flex flex-col">
                  <span className="text-[10px] text-[#a08e7a] uppercase tracking-wider font-semibold">Magnetic Draw</span>
                  <span className="text-sm font-semibold text-[#e8e1df]">Infinite Abundance Inflow</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Hero Image Column with 963 Hz Audio Player */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden bg-[#1d1b1a] p-2.5 shadow-2xl border border-[#f59e0b]/20 gold-glow">
              <div className="relative w-full h-[400px] sm:h-[440px] rounded-xl overflow-hidden group">
                <img
                  className="w-full h-full object-cover rounded-xl transition-transform duration-700 group-hover:scale-105"
                  alt="Photorealistic consecrated black obsidian Pixiu bracelet resting on a rustic dark river stone with golden ethereal mist"
                  src={ASSETS.heroBracelet}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#100e0d] via-transparent to-transparent opacity-85"></div>

                {/* Interactive 963 Hz Audio Controller */}
                <div className="absolute bottom-3 left-3 right-3 p-4 bg-[#2c2928]/95 backdrop-blur-md rounded-xl border border-[#f59e0b]/30 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-1.5 text-[11px] font-semibold text-[#ffc174] uppercase tracking-wider">
                        <span className="w-2 h-2 rounded-full bg-[#f59e0b] animate-pulse"></span>
                        <span>Metaphysical Frequency</span>
                      </div>
                      <p className="text-sm font-semibold text-[#e8e1df] mt-0.5">
                        963 Hz • Crown to Root Resonance
                      </p>
                    </div>

                    <button
                      onClick={toggleFrequency}
                      className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                        isTonePlaying
                          ? 'bg-[#f59e0b] text-[#472a00] shadow-[0_0_15px_rgba(245,158,11,0.6)]'
                          : 'bg-[#1d1b1a] text-[#ffc174] hover:bg-[#373433] border border-[#f59e0b]/40'
                      }`}
                      title={isTonePlaying ? 'Pause 963 Hz Resonance' : 'Play 963 Hz Resonance'}
                    >
                      {isTonePlaying ? (
                        <>
                          <VolumeX className="w-4 h-4" />
                          <span>Sounding</span>
                          <span className="flex items-end gap-0.5 h-3 ml-1">
                            <span className="w-1 bg-[#472a00] h-2 animate-bounce"></span>
                            <span className="w-1 bg-[#472a00] h-3 animate-bounce [animation-delay:0.15s]"></span>
                            <span className="w-1 bg-[#472a00] h-1.5 animate-bounce [animation-delay:0.3s]"></span>
                          </span>
                        </>
                      ) : (
                        <>
                          <Volume2 className="w-4 h-4" />
                          <span>Hear 963Hz</span>
                          <span className="material-symbols-outlined text-[18px]">graphic_eq</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Interactive 7 Chakras & Human Aura Exploration Section */}
      <section id="aura-diagnostic-section" className="py-16 relative">
        <div className="text-center max-w-3xl mx-auto flex flex-col items-center gap-2 mb-12">
          <div className="text-xs uppercase tracking-[0.2em] font-semibold text-[#ffc174]">
            Energy Field Mechanics
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#e8e1df]">
            How External Impurities Pollute the Aura
          </h2>
          <p className="text-sm sm:text-base text-[#d8c3ad] leading-relaxed">
            Your subtle body radiates an electro-photonic field across seven vibrational gateways. Chronic exhaustion, mental brain fog, sudden setbacks, and blocked prosperity are palpable symptoms of an energetically polluted aura cycle.
          </p>
        </div>

        {/* Interactive Grid: Interactive Aura Selector + Visual Diagram */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Visual Avatar Display with 7 Interactive Hotspots */}
          <div className="lg:col-span-6 bg-[#1d1b1a] rounded-2xl p-6 relative overflow-hidden flex flex-col items-center justify-center min-h-[540px] border border-[#f59e0b]/15 shadow-xl">
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-[#f59e0b]/15 rounded-full blur-[80px] pointer-events-none"></div>

            <div className="relative w-full max-w-md h-[460px] flex items-center justify-center">
              <img
                className="w-full h-full object-contain filter drop-shadow-[0_0_35px_rgba(245,158,11,0.3)] select-none pointer-events-none"
                alt="Luminous celestial meditating yogi silhouette with vibrant glowing seven chakra centers emitting pure golden, azure, and emerald energy rings"
                src={ASSETS.chakraYogi}
                referrerPolicy="no-referrer"
              />

              {/* Dynamic hotspot buttons overlay on exact anatomical chakra points */}
              {CHAKRA_LIST.map((chakra) => {
                const isSelected = chakra.id === selectedChakraId;
                return (
                  <button
                    key={chakra.id}
                    onClick={() => handleChakraClick(chakra.id)}
                    style={{ top: chakra.topPercent }}
                    className={`absolute w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 transform -translate-x-1/2 cursor-pointer z-10 ${
                      isSelected
                        ? 'scale-130 shadow-[0_0_20px_rgba(245,158,11,1)] ring-2 ring-[#ffc174]'
                        : 'hover:scale-120 opacity-85 hover:opacity-100 shadow-[0_0_12px_rgba(245,158,11,0.6)]'
                    }`}
                    title={`${chakra.sanskrit} • ${chakra.name} (${chakra.english})`}
                  >
                    <span
                      className={`w-3.5 h-3.5 rounded-full ${isSelected ? 'animate-ping' : ''}`}
                      style={{ backgroundColor: chakra.color }}
                    ></span>
                    <span
                      className="absolute w-3 h-3 rounded-full"
                      style={{ backgroundColor: chakra.color }}
                    ></span>
                  </button>
                );
              })}
            </div>

            <div className="w-full flex items-center justify-between text-[#a08e7a] text-xs font-semibold pt-3 border-t border-[#373433]/40">
              <span>Root Gateway (Earth)</span>
              <span className="text-[#ffc174] flex items-center gap-1.5 animate-pulse">
                <span className="material-symbols-outlined text-[16px]">touch_app</span>
                Tap any node to inspect symptoms
              </span>
              <span>Crown Portal (Ether)</span>
            </div>
          </div>

          {/* Diagnostic Cards & Symptom Manifestation */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            
            {/* Card 1: Selected Chakra Blockage and Pixiu Cure */}
            <div className="bg-[#221f1e] rounded-2xl p-6 flex flex-col gap-3.5 border border-[#f59e0b]/20 shadow-lg relative overflow-hidden">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <span
                    className="w-3.5 h-3.5 rounded-full shrink-0 shadow-sm"
                    style={{ backgroundColor: activeChakra.color }}
                  ></span>
                  <span className="font-serif text-xl sm:text-2xl text-[#ffc174] font-semibold">
                    {activeChakra.name} • {activeChakra.english}
                  </span>
                </div>
                <span className="px-2.5 py-1 rounded bg-[#2c2928] text-[#ffddb8] text-xs font-semibold border border-[#534434]">
                  {activeChakra.element}
                </span>
              </div>

              <div className="text-xs text-[#a08e7a] flex items-center gap-2">
                <span>Sanskrit: <strong className="text-[#e8e1df]">{activeChakra.sanskrit}</strong></span>
                <span>•</span>
                <span>Resonance: <strong className="text-[#ffc174]">{activeChakra.frequency}</strong></span>
              </div>

              <p className="text-sm text-[#e8e1df] leading-relaxed">
                {activeChakra.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="bg-[#2c2928] p-3.5 rounded-xl border border-[#373433]">
                  <span className="text-[11px] text-[#ffb77d] uppercase tracking-wider font-semibold block mb-1">
                    Polluted Aura Symptom
                  </span>
                  <span className="text-xs text-[#e8e1df] leading-relaxed block">
                    {activeChakra.symptom}
                  </span>
                </div>
                <div className="bg-[#2c2928] p-3.5 rounded-xl border border-[#f59e0b]/20">
                  <span className="text-[11px] text-[#ffc174] uppercase tracking-wider font-semibold block mb-1">
                    Pixiu Realignment
                  </span>
                  <span className="text-xs text-[#e8e1df] leading-relaxed block">
                    {activeChakra.cure}
                  </span>
                </div>
              </div>
            </div>

            {/* Four Classical Aura Stress Indicators (From Provided Sacred Chart) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {AURA_STRESS_INDICATORS.map((indicator, idx) => (
                <div
                  key={idx}
                  className="bg-[#221f1e] p-4 rounded-xl flex items-start gap-3.5 border border-[#373433] hover:border-[#f59e0b]/30 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-[#2c2928] flex items-center justify-center shrink-0 text-[#ffc174]">
                    <span className="material-symbols-outlined text-[22px]">{indicator.icon}</span>
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-[#e8e1df] block mb-1">
                      {indicator.title}
                    </span>
                    <p className="text-xs text-[#d8c3ad] leading-relaxed">
                      {indicator.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* The Legend of the Golden Pixiu Dragon Guardian */}
      <section className="py-16 relative">
        <div className="bg-[#1d1b1a] rounded-3xl p-8 sm:p-12 relative overflow-hidden border border-[#f59e0b]/20 shadow-2xl">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-[#d97707]/15 blur-[120px] pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Legend Text */}
            <div className="lg:col-span-6 flex flex-col gap-4">
              <div className="flex items-center gap-2 text-[#ffc174] text-xs font-semibold uppercase tracking-[0.18em]">
                <span className="material-symbols-outlined text-[16px]">crown</span>
                <span>The Celestial Mythos &amp; Lineage</span>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#e8e1df]">
                The Celestial Beast of Inviolate Abundance
              </h2>

              <p className="text-sm sm:text-base text-[#d8c3ad] leading-relaxed">
                In sacred Taoist and Himalayan lore, the <strong>Pixiu (Pi Yao)</strong> is the ninth progeny of the Heavenly Dragon King. Having broken celestial law by indulging exclusively in royal treasures, the Jade Emperor sealed its digestive exit forever.
              </p>

              <p className="text-sm sm:text-base text-[#d8c3ad] leading-relaxed">
                Henceforth, the Pixiu became the supreme cosmos symbol of wealth containment: <span className="text-[#ffc174] font-semibold">consuming prosperity from all eight directions without ever releasing a single coin.</span> Paired with the ferocious protective roar of a winged celestial lion, it strikes dread into negative entities and ill-wishing eyes.
              </p>

              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="p-3 bg-[#221f1e] rounded-xl flex flex-col items-center text-center border border-[#373433]">
                  <span className="font-serif text-xl sm:text-2xl text-[#ffc174] font-bold">8 Directions</span>
                  <span className="text-[11px] text-[#a08e7a] mt-1 font-medium">Prosperity Sourcing</span>
                </div>
                <div className="p-3 bg-[#221f1e] rounded-xl flex flex-col items-center text-center border border-[#373433]">
                  <span className="font-serif text-xl sm:text-2xl text-[#ffc174] font-bold">0 Escape</span>
                  <span className="text-[11px] text-[#a08e7a] mt-1 font-medium">Wealth Lock Gate</span>
                </div>
                <div className="p-3 bg-[#221f1e] rounded-xl flex flex-col items-center text-center border border-[#373433]">
                  <span className="font-serif text-xl sm:text-2xl text-[#ffc174] font-bold">100% Ward</span>
                  <span className="text-[11px] text-[#a08e7a] mt-1 font-medium">Evil Eye Reversal</span>
                </div>
              </div>
            </div>

            {/* Pixiu Photo Card */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-[#221f1e] border border-[#f59e0b]/20">
                <img
                  className="w-full h-[360px] sm:h-[400px] object-cover"
                  alt="Close up dramatic macro photograph of an antique pure golden Chinese Pixiu dragon bead with intricate celestial scales"
                  src={ASSETS.pixiuCenterpiece}
                  referrerPolicy="no-referrer"
                />
                <div className="p-4 bg-[#2c2928] flex items-center justify-between border-t border-[#373433]">
                  <div className="flex flex-col">
                    <span className="text-base font-semibold text-[#ffc174]">Gilded Pixiu Centerpiece</span>
                    <span className="text-xs text-[#d8c3ad]">24K Antique Electroplated Pure Brass Core</span>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#f59e0b] text-[#472a00] text-[11px] font-bold uppercase tracking-wider shadow-sm">
                    Sacred Vault Cast
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Black Obsidian Mineralogy & Tibetan Sacred Mantras */}
      <section className="py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Mineral Science Card */}
          <div className="lg:col-span-6 bg-[#221f1e] rounded-3xl p-8 flex flex-col justify-between border border-[#f59e0b]/15 shadow-xl">
            <div className="flex flex-col gap-3">
              <div className="w-12 h-12 rounded-xl bg-[#2c2928] flex items-center justify-center text-[#ffc174]">
                <span className="material-symbols-outlined text-[26px]">volcano</span>
              </div>
              <span className="text-xs uppercase tracking-[0.16em] font-semibold text-[#ffc174]">
                Volcanic Vitreous Mineralogy
              </span>
              <h3 className="font-serif text-2xl text-[#e8e1df]">
                Black Obsidian: The Vacuum of Shadow Densities
              </h3>
              <p className="text-sm text-[#d8c3ad] leading-relaxed">
                Formed when felsic lava cools with rapid velocity without crystal lattice growth, natural Black Obsidian is volcanic glass imbued with primordial subterranean fire. Metaphysically, its dense amorphous structure acts as an unyielding energetic sponge—vacuuming psychic toxins, malicious gossip (<span className="text-[#ffc174]">ඇස්වහ කටවහ</span>), and depressive frequencies straight out of the user's auric boundary.
              </p>
            </div>

            <div className="mt-6 p-4 bg-[#1d1b1a] rounded-xl flex items-center gap-3.5 border border-[#373433]">
              <div className="w-10 h-10 rounded-full bg-[#ffc174]/15 flex items-center justify-center text-[#ffc174] shrink-0">
                <span className="material-symbols-outlined text-[22px]">filter_alt</span>
              </div>
              <div>
                <span className="text-sm font-semibold text-[#e8e1df] block">Neutralizing Geopathic Stress</span>
                <span className="text-xs text-[#a08e7a]">Grounds erratic electromagnetic radiation and low-vibrational environmental chatter.</span>
              </div>
            </div>
          </div>

          {/* Sacred Sanskrit Mantra Card */}
          <div className="lg:col-span-6 bg-[#221f1e] rounded-3xl p-8 flex flex-col justify-between border border-[#f59e0b]/15 shadow-xl">
            <div className="flex flex-col gap-3">
              <div className="w-12 h-12 rounded-xl bg-[#2c2928] flex items-center justify-center text-[#ffb77d]">
                <span className="material-symbols-outlined text-[26px]">format_quote</span>
              </div>
              <span className="text-xs uppercase tracking-[0.16em] font-semibold text-[#ffb77d]">
                Six-Syllable Incantation
              </span>
              <h3 className="font-serif text-2xl text-[#e8e1df]">
                Om Mani Padme Hum • 唵嘛呢叭咪吽
              </h3>
              <p className="text-sm text-[#d8c3ad] leading-relaxed">
                Every bead on the Oudhara Pixiu is laser-carved with the authentic 6-Syllable Tibetan Avalokiteshvara mantra in radiant golden lacquer. Each syllable addresses and purifies a specific karmic realm of existence, banishing delusion, greed, hostility, and sorrow.
              </p>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-2.5">
              <div className="p-3 bg-[#2c2928] rounded-xl text-center border border-[#373433]">
                <span className="font-serif text-xl text-[#ffc174] block font-bold">ॐ ओं</span>
                <span className="text-[11px] text-[#a08e7a] font-medium">OM: Bliss &amp; Ego</span>
              </div>
              <div className="p-3 bg-[#2c2928] rounded-xl text-center border border-[#373433]">
                <span className="font-serif text-xl text-[#ffc174] block font-bold">म णि</span>
                <span className="text-[11px] text-[#a08e7a] font-medium">MANI: Desire &amp; Compassion</span>
              </div>
              <div className="p-3 bg-[#2c2928] rounded-xl text-center border border-[#373433]">
                <span className="font-serif text-xl text-[#ffc174] block font-bold">पद्मे हूँ</span>
                <span className="text-[11px] text-[#a08e7a] font-medium">PADME HUM: Wisdom</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Step-by-Step Sanctification & Consecration Protocol */}
      <section className="py-16 relative">
        <div className="text-center max-w-2xl mx-auto flex flex-col items-center gap-2 mb-12">
          <div className="text-xs uppercase tracking-[0.2em] font-semibold text-[#ffc174]">
            The Sacred Protocol
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#e8e1df]">
            Monastic Consecration &amp; Energizing Rituals
          </h2>
          <p className="text-sm sm:text-base text-[#d8c3ad]">
            Unlike commercially manufactured trinkets, every Oudhara talisman is treated as a sentient metaphysical receptor, undergoing rigorous traditional blessing ceremonies.
          </p>
        </div>

        {/* 4-Phase Consecration Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CONSECRATION_PHASES.map((phase) => (
            <div
              key={phase.step}
              className="bg-[#221f1e] rounded-2xl p-6 flex flex-col gap-3 relative group hover:bg-[#2c2928] transition-all border border-[#f59e0b]/15 hover:border-[#f59e0b]/35 shadow-lg"
            >
              <span className="font-serif text-4xl text-[#534434] font-bold group-hover:text-[#a08e7a] transition-colors">
                {phase.step}
              </span>
              <div className="w-10 h-10 rounded-xl bg-[#2c2928] flex items-center justify-center text-[#ffc174] mb-1">
                <span className="material-symbols-outlined text-[22px]">{phase.icon}</span>
              </div>
              <h4 className="text-base font-semibold text-[#e8e1df]">
                {phase.title}
              </h4>
              <p className="text-xs text-[#d8c3ad] leading-relaxed">
                {phase.desc}
              </p>
              <span className="mt-auto pt-3 text-[11px] font-semibold text-[#ffc174] border-t border-[#373433]/50">
                {phase.duration}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Metaphysical Aura Quiz & Alignment Meter */}
      <section className="py-16 bg-[#1d1b1a] rounded-3xl p-6 sm:p-12 my-8 relative overflow-hidden border border-[#f59e0b]/20 shadow-2xl">
        <div className="max-w-3xl mx-auto flex flex-col gap-6">
          
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs uppercase tracking-[0.18em] font-semibold text-[#ffc174]">
                Interactive Diagnostic
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#e8e1df] mt-1">
                Check Your Current Auric Density Score
              </h3>
            </div>
            <div className="w-12 h-12 rounded-full bg-[#2c2928] flex items-center justify-center text-[#ffc174] border border-[#f59e0b]/20">
              <span className="material-symbols-outlined">network_check</span>
            </div>
          </div>

          {/* Quiz Options */}
          <div className="flex flex-col gap-3">
            <label className="text-sm sm:text-base font-semibold text-[#e8e1df]">
              Select what you have experienced over the past 30 days:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {QUIZ_ITEMS.map((item) => {
                const isChecked = selectedSymptoms.includes(item.id);
                return (
                  <button
                    key={item.id}
                    onClick={() => handleToggleSymptom(item.id)}
                    type="button"
                    className={`p-4 rounded-xl text-left flex items-center justify-between transition-all cursor-pointer border ${
                      isChecked
                        ? 'bg-[#2c2928] border-[#f59e0b]/40 shadow-sm'
                        : 'bg-[#221f1e] border-[#373433] hover:bg-[#2c2928]'
                    }`}
                  >
                    <span className="text-xs sm:text-sm text-[#e8e1df] pr-2 leading-relaxed">
                      {item.text}
                    </span>
                    <span
                      className={`material-symbols-outlined text-[20px] shrink-0 ${
                        isChecked ? 'text-[#ffc174]' : 'text-[#a08e7a]'
                      }`}
                    >
                      {isChecked ? 'check_box' : 'check_box_outline_blank'}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Aura Meter Result Card */}
          <div className="p-5 bg-[#221f1e] rounded-2xl flex flex-col gap-3 border border-[#f59e0b]/20">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-[#e8e1df]">
                Auric Pollution Indicator:
              </span>
              <span
                className={`font-serif text-lg sm:text-xl font-bold ${
                  currentScore >= 70
                    ? 'text-[#ffb77d]'
                    : currentScore >= 40
                    ? 'text-[#ffc174]'
                    : 'text-[#8ed5ff]'
                }`}
              >
                {currentScore === 0
                  ? 'Clear & Shielded (0%)'
                  : currentScore < 40
                  ? `Mild Static (${currentScore}%)`
                  : currentScore < 70
                  ? `Moderate Energetic Static (${currentScore}%)`
                  : `Heavy Static Blockage (${currentScore}%)`}
              </span>
            </div>

            {/* Glowing animated progress bar */}
            <div className="w-full bg-[#2c2928] h-3.5 rounded-full overflow-hidden p-0.5 border border-[#373433]">
              <div
                className="h-full bg-gradient-to-r from-[#38bdf8] via-[#f59e0b] to-[#d97707] rounded-full transition-all duration-500 shadow-[0_0_12px_rgba(245,158,11,0.5)]"
                style={{ width: `${Math.max(8, currentScore)}%` }}
              ></div>
            </div>

            <p className="text-xs text-[#d8c3ad] leading-relaxed">
              {currentScore === 0
                ? 'Select any symptoms you frequently experience to calculate energetic static.'
                : currentScore < 40
                ? 'Minor vulnerability to external low frequencies. Wearing the consecrated Pixiu talisman will preserve your natural field integrity.'
                : currentScore < 70
                ? 'Noticeable Drain: Your aura is experiencing periodic psychic drain and prana leakage. Monastic consecration will seal and rebuild your boundary.'
                : 'Crucial Need: Severe auric congestion detected. The Black Obsidian Pixiu alignment will immediately neutralize negative stagnant weight and reverse dissipation.'}
            </p>

            {currentScore >= 40 && (
              <div className="pt-2 flex items-center justify-between">
                <span className="text-xs text-[#ffc174] font-medium">Recommended: Imperial 12mm Obsidian Guardian</span>
                <button
                  onClick={() => onNavigate('home')}
                  className="px-3 py-1 rounded bg-[#f59e0b] text-[#472a00] text-xs font-bold hover:brightness-110 cursor-pointer"
                >
                  View Sovereign Talisman
                </button>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* Ethical Sourcing & Master Artisans Covenant */}
      <section className="py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          <div className="lg:col-span-5 relative">
            <div className="relative w-full h-[400px] sm:h-[440px] rounded-2xl overflow-hidden shadow-2xl border border-[#f59e0b]/20">
              <img
                className="w-full h-full object-cover"
                alt="An elder Buddhist monk artisan carefully inspecting and blessing consecrated obsidian stone beads in a serene monastery courtyard"
                src={ASSETS.monkArtisan}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#100e0d] via-transparent to-transparent opacity-75"></div>
              <div className="absolute bottom-4 left-4 p-3.5 rounded-xl bg-[#2c2928]/95 backdrop-blur-md border border-[#f59e0b]/25 shadow-lg">
                <span className="text-[11px] text-[#ffc174] uppercase tracking-wider font-semibold block">
                  Ethical Assurance
                </span>
                <span className="text-sm font-semibold text-[#e8e1df]">
                  Direct Lineage Monastic Care
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="flex items-center gap-2 text-[#ffb77d] text-xs font-semibold uppercase tracking-[0.18em]">
              <span className="material-symbols-outlined text-[16px]">verified_user</span>
              <span>The Oudhara Integrity Covenant</span>
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#e8e1df]">
              Crafted with Pure Intention, Honored by Lineage
            </h2>

            <p className="text-sm sm:text-base text-[#d8c3ad] leading-relaxed">
              Energy cannot be faked. A talisman created in exploitation or hurried mass manufacturing carries low, discordant frequencies that hinder spiritual work. Oudhara works directly with mindful lapidary artisans who hand-select natural obsidian nodules without artificial glass fillers or heat synthetics.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex flex-col gap-1.5 p-4 bg-[#221f1e] rounded-xl border border-[#373433]">
                <span className="material-symbols-outlined text-[#ffc174] text-[24px]">save_as</span>
                <span className="text-sm font-semibold text-[#e8e1df]">100% Raw Volcanic Obsidian</span>
                <span className="text-xs text-[#a08e7a]">Naturally mined, certified heavy mineral density, free of resin synthetics.</span>
              </div>

              <div className="flex flex-col gap-1.5 p-4 bg-[#221f1e] rounded-xl border border-[#373433]">
                <span className="material-symbols-outlined text-[#ffb77d] text-[24px]">volunteer_activism</span>
                <span className="text-sm font-semibold text-[#e8e1df]">Monastery Dana Support</span>
                <span className="text-xs text-[#a08e7a]">A portion of every talisman consecration supports sacred temple preservation and elder monks.</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Wearer Guidance & Proper Metaphysical Protocol */}
      <section className="py-16 bg-[#221f1e] rounded-3xl p-6 sm:p-12 border border-[#f59e0b]/15 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-3">
          <div className="flex flex-col gap-1">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#ffc174]">
              Sacred Etiquette
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#e8e1df]">
              How to Wear Your Pixiu Talisman Correctly
            </h3>
          </div>
          <span className="text-xs sm:text-sm text-[#a08e7a] max-w-sm">
            To retain the energized magnetic flow, observe the time-tested directional rules of the celestial dragon.
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Rule 1 */}
          <div className="bg-[#2c2928] p-6 rounded-2xl flex flex-col gap-3 border border-[#373433]">
            <div className="w-10 h-10 rounded-full bg-[#f59e0b] text-[#472a00] flex items-center justify-center font-bold text-base shadow-sm">
              L
            </div>
            <h4 className="text-base font-semibold text-[#e8e1df]">Left Hand for Wealth Influx</h4>
            <p className="text-xs text-[#d8c3ad] leading-relaxed">
              In vital meridian theory, energy enters through the left arm and departs via the right. Wear the Pixiu on your left wrist to welcome prosperity and auspicious luck into your energy sphere.
            </p>
          </div>

          {/* Rule 2 */}
          <div className="bg-[#2c2928] p-6 rounded-2xl flex flex-col gap-3 border border-[#373433]">
            <div className="w-10 h-10 rounded-full bg-[#d97707] text-[#472a00] flex items-center justify-center font-bold shadow-sm">
              <span className="material-symbols-outlined text-[20px]">north_east</span>
            </div>
            <h4 className="text-base font-semibold text-[#e8e1df]">Dragon Head Facing Outward</h4>
            <p className="text-xs text-[#d8c3ad] leading-relaxed">
              Ensure the Pixiu’s head points toward your little finger (outward to the world). This allows the guardian dragon to gaze outward, drawing wealth and sniffing out threats before they reach you.
            </p>
          </div>

          {/* Rule 3 */}
          <div className="bg-[#2c2928] p-6 rounded-2xl flex flex-col gap-3 border border-[#373433]">
            <div className="w-10 h-10 rounded-full bg-[#38bdf8] text-[#00354a] flex items-center justify-center font-bold shadow-sm">
              <span className="material-symbols-outlined text-[20px]">touch_app</span>
            </div>
            <h4 className="text-base font-semibold text-[#e8e1df]">Affectionate Connection</h4>
            <p className="text-xs text-[#d8c3ad] leading-relaxed">
              Regularly touch its back and golden body with clean hands to foster mutual resonance, but strictly avoid touching its eyes and mouth, through which it spots and seizes abundance.
            </p>
          </div>

        </div>
      </section>

      {/* Direct Blessing Hotline & Inquiries CTA Section */}
      <section className="py-16 mb-8">
        <div className="bg-gradient-to-br from-[#2c2928] to-[#221f1e] rounded-3xl p-8 sm:p-12 flex flex-col items-center text-center gap-4 shadow-2xl relative overflow-hidden border border-[#f59e0b]/30 gold-glow">
          <div className="w-16 h-16 rounded-full bg-[#ffc174]/15 flex items-center justify-center text-[#ffc174] mb-1">
            <span className="material-symbols-outlined text-[34px]">spa</span>
          </div>

          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#ffc174]">
            Need Aura Alignment Consultation?
          </span>

          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#e8e1df] max-w-2xl">
            Speak Directly with our Consecration Custodians
          </h2>

          <p className="text-sm sm:text-base text-[#d8c3ad] max-w-xl leading-relaxed">
            Have questions about matching your birth element to the Pixiu dragon? Reach out to our blessed guidance team directly via WhatsApp for individualized alignment support.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#f59e0b] to-[#d97707] text-[#472a00] font-bold text-sm shadow-lg hover:shadow-2xl hover:brightness-110 transition-all cursor-pointer"
              href="https://wa.me/94741180006?text=Namaskaram.%20I%20seek%20consultation%20on%20my%20birth%20element%20and%20Pixiu%20alignment."
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="material-symbols-outlined text-[20px]">call</span>
              <span>දැන්ම අමතන්න : 074 118 0006</span>
            </a>

            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#100e0d] text-[#e8e1df] hover:text-[#ffc174] font-semibold text-sm border border-[#534434] hover:bg-[#151312] transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">calendar_month</span>
              <span>Schedule Monastic Blessing Ceremony</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
