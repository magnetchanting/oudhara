import React, { useState } from 'react';
import { TALISMAN_PRODUCTS, ELEMENT_GUIDE, ASSETS } from '../../data/metaphysicalData';
import { TalismanProduct, CartItem, ScreenType } from '../../types';
import { Sparkles, Shield, Check, ShoppingBag, Eye, Heart, ArrowRight, Compass } from 'lucide-react';
import { soundService } from '../../services/soundService';

interface SanctuaryScreenProps {
  onAddToCart: (item: CartItem) => void;
  onNavigate: (screen: ScreenType) => void;
  onOpenConsultation: () => void;
}

export const SanctuaryScreen: React.FC<SanctuaryScreenProps> = ({
  onAddToCart,
  onNavigate,
  onOpenConsultation,
}) => {
  // Birth Year Calculator State
  const [birthYearInput, setBirthYearInput] = useState<string>('');
  const [matchedElement, setMatchedElement] = useState<typeof ELEMENT_GUIDE[0] | null>(null);

  // Selected bead sizes per product
  const [selectedSizes, setSelectedSizes] = useState<{ [productId: string]: string }>({
    'imperial-pixiu-12mm': '12mm (Potent / Recommended)',
    'double-pixiu-vault': '12mm (Potent)',
    'celestial-purification-kit': 'Standard Sacred Vessel'
  });

  // Selected recipient names for blessing
  const [recipientNames, setRecipientNames] = useState<{ [productId: string]: string }>({});

  const handleCalculateElement = (e: React.FormEvent) => {
    e.preventDefault();
    soundService.playChime(741);
    const year = parseInt(birthYearInput, 10);
    if (isNaN(year) || year < 1920 || year > 2030) return;
    const lastDigit = year % 10;
    const found = ELEMENT_GUIDE.find((g) => g.lastDigits.includes(lastDigit));
    setMatchedElement(found || ELEMENT_GUIDE[0]);
  };

  const handleAddProduct = (product: TalismanProduct) => {
    soundService.playChime(528);
    const size = selectedSizes[product.id] || product.beadSizes[0];
    const name = recipientNames[product.id] || '';
    onAddToCart({
      product,
      beadSize: size,
      quantity: 1,
      recipientName: name
    });
  };

  return (
    <div className="flex flex-col w-full">
      {/* Sanctuary Hero Banner */}
      <section className="relative py-12 md:py-16 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#f59e0b]/10 rounded-full blur-[140px] pointer-events-none"></div>

        <div className="flex flex-col items-center text-center max-w-3xl mx-auto gap-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2c2928] text-[#ffc174] text-xs font-semibold uppercase tracking-[0.15em] border border-[#f59e0b]/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Sacred Talisman Sanctuary</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#e8e1df] leading-tight">
            Consecrated Relics of <span className="text-[#ffc174] italic">Primordial Protection</span> &amp; Boundless Prosperity
          </h1>

          <p className="text-sm sm:text-base text-[#d8c3ad] leading-relaxed max-w-2xl">
            Each Oudhara talisman is not mere adornment, but an activated metaphysical receptor. Individually consecrated with 108 monastic chants, cleansed under lunar meridians, and sealed with sacred sandalwood.
          </p>

          <div className="flex items-center gap-4 pt-2">
            <button
              onClick={() => {
                const el = document.getElementById('catalog-grid');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-[#f59e0b] to-[#d97707] text-[#472a00] font-bold text-sm shadow-lg hover:shadow-2xl transition-all cursor-pointer"
            >
              Explore Sanctified Artifacts
            </button>
            <button
              onClick={() => {
                onNavigate('about');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-6 py-3 rounded-full bg-[#1d1b1a] text-[#e8e1df] hover:text-[#ffc174] font-medium text-sm border border-[#373433] transition-colors cursor-pointer"
            >
              Read Metaphysical Science
            </button>
          </div>
        </div>
      </section>

      {/* Interactive Birth Element & Pixiu Matching Guide */}
      <section className="py-8 my-6">
        <div className="bg-[#1d1b1a] rounded-3xl p-6 sm:p-10 border border-[#f59e0b]/25 shadow-xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 flex flex-col gap-3">
              <div className="flex items-center gap-2 text-[#ffc174] text-xs font-semibold uppercase tracking-wider">
                <Compass className="w-4 h-4" />
                <span>Taoist Element Astrology</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#e8e1df]">
                Find Your Birth Element Alignment
              </h3>
              <p className="text-xs sm:text-sm text-[#d8c3ad] leading-relaxed">
                Your birth year governs one of the five primordial elements (Wood, Fire, Earth, Metal, Water). Matching your talisman ensures resonance without elemental clashes.
              </p>

              <form onSubmit={handleCalculateElement} className="flex flex-col sm:flex-row gap-3 pt-2">
                <input
                  type="number"
                  placeholder="Enter Birth Year (e.g. 1988)"
                  value={birthYearInput}
                  onChange={(e) => setBirthYearInput(e.target.value)}
                  className="px-4 py-2.5 rounded-xl bg-[#221f1e] border border-[#373433] text-[#e8e1df] placeholder-[#a08e7a] text-sm focus:border-[#f59e0b] focus:outline-none"
                  min="1920"
                  max="2030"
                  required
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-[#f59e0b] text-[#472a00] font-bold text-xs uppercase tracking-wider hover:brightness-110 transition-all cursor-pointer whitespace-nowrap"
                >
                  Calculate Alignment
                </button>
              </form>
            </div>

            <div className="lg:col-span-6">
              {matchedElement ? (
                <div className="p-5 rounded-2xl bg-[#221f1e] border border-[#f59e0b]/40 shadow-lg flex flex-col gap-2.5 animate-fadeIn">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#ffb77d]">
                      Your Aligned Element
                    </span>
                    <span className="px-2.5 py-0.5 rounded bg-[#2c2928] text-[#ffc174] text-xs font-bold border border-[#f59e0b]/30">
                      Harmonized
                    </span>
                  </div>
                  <h4 className="font-serif text-xl sm:text-2xl text-[#ffc174] font-semibold">
                    {matchedElement.element}
                  </h4>
                  <p className="text-xs text-[#e8e1df] leading-relaxed">
                    {matchedElement.resonance}
                  </p>
                  <div className="p-3 bg-[#2c2928] rounded-xl border border-[#373433] mt-1">
                    <span className="text-[11px] text-[#a08e7a] block font-medium">Recommended Talisman Match:</span>
                    <span className="text-xs font-semibold text-[#ffc174]">{matchedElement.recommendation}</span>
                  </div>
                </div>
              ) : (
                <div className="p-6 rounded-2xl bg-[#221f1e] border border-dashed border-[#373433] flex flex-col items-center justify-center text-center gap-2 text-[#a08e7a]">
                  <span className="material-symbols-outlined text-[32px] text-[#ffc174]/50">auto_fix_high</span>
                  <span className="text-xs font-medium">Enter your birth year to reveal your element and custom Pixiu resonance.</span>
                </div>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* Catalog Grid */}
      <section id="catalog-grid" className="py-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-3">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#ffc174]">
              Sacred Treasury
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#e8e1df]">
              Individually Consecrated Pieces
            </h2>
          </div>
          <span className="text-xs text-[#a08e7a]">
            All talismans include custom intention inscription &amp; blessed reliquary
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TALISMAN_PRODUCTS.map((product) => {
            const currentSize = selectedSizes[product.id] || product.beadSizes[0];
            const currentRecipient = recipientNames[product.id] || '';

            return (
              <div
                key={product.id}
                className="bg-[#1d1b1a] rounded-2xl overflow-hidden border border-[#f59e0b]/20 hover:border-[#f59e0b]/40 transition-all flex flex-col shadow-xl group"
              >
                {/* Product Image */}
                <div className="relative h-64 overflow-hidden bg-[#221f1e]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#151312] via-transparent to-transparent opacity-60"></div>
                  
                  <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-[#100e0d]/80 backdrop-blur-md text-[#ffc174] text-[11px] font-semibold border border-[#f59e0b]/30">
                    {product.chakraTarget}
                  </span>
                </div>

                {/* Product Details */}
                <div className="p-6 flex flex-col flex-1 gap-4">
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-[#e8e1df] group-hover:text-[#ffc174] transition-colors">
                      {product.name}
                    </h3>
                    {product.sinhalaName && (
                      <span className="text-xs text-[#ffb77d] block mt-0.5">
                        {product.sinhalaName}
                      </span>
                    )}
                    <p className="text-xs text-[#a08e7a] mt-1 italic">
                      {product.tagline}
                    </p>
                  </div>

                  <p className="text-xs text-[#d8c3ad] leading-relaxed line-clamp-3">
                    {product.description}
                  </p>

                  {/* Bead Size Selector */}
                  <div className="flex flex-col gap-1.5 pt-1">
                    <label className="text-[11px] font-semibold text-[#ffc174] uppercase tracking-wider">
                      Select Bead Caliber:
                    </label>
                    <select
                      value={currentSize}
                      onChange={(e) =>
                        setSelectedSizes({ ...selectedSizes, [product.id]: e.target.value })
                      }
                      className="px-3 py-2 rounded-lg bg-[#221f1e] border border-[#373433] text-xs text-[#e8e1df] focus:border-[#f59e0b] focus:outline-none"
                    >
                      {product.beadSizes.map((size) => (
                        <option key={size} value={size} className="bg-[#151312]">
                          {size}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Recipient Inscription Name */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-semibold text-[#ffc174] uppercase tracking-wider">
                      Blessed Intention Name (Optional):
                    </label>
                    <input
                      type="text"
                      placeholder="Wearer's Name for Pirith Chanting"
                      value={currentRecipient}
                      onChange={(e) =>
                        setRecipientNames({ ...recipientNames, [product.id]: e.target.value })
                      }
                      className="px-3 py-2 rounded-lg bg-[#221f1e] border border-[#373433] text-xs text-[#e8e1df] placeholder-[#a08e7a] focus:border-[#f59e0b] focus:outline-none"
                    />
                  </div>

                  {/* Price & Action */}
                  <div className="mt-auto pt-4 border-t border-[#373433] flex items-center justify-between gap-3">
                    <div>
                      <span className="font-serif text-xl font-bold text-[#ffc174] block">
                        Rs. {product.priceLKR.toLocaleString()}
                      </span>
                      <span className="text-[10px] text-[#a08e7a]">
                        Approx. ${product.priceUSD} USD • Free Sanctified Delivery
                      </span>
                    </div>

                    <button
                      onClick={() => handleAddProduct(product)}
                      className="flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-gradient-to-r from-[#f59e0b] to-[#d97707] text-[#472a00] font-bold text-xs uppercase tracking-wider hover:brightness-110 transition-all cursor-pointer shadow-md"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>Sanctify &amp; Add</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Monastic Lineage Guarantees */}
      <section className="py-12 bg-[#221f1e] rounded-3xl p-6 sm:p-10 my-8 border border-[#f59e0b]/15">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex flex-col gap-2">
            <span className="material-symbols-outlined text-[28px] text-[#ffc174]">verified</span>
            <h4 className="text-sm font-semibold text-[#e8e1df]">Certified Volcanic Glass</h4>
            <p className="text-xs text-[#a08e7a] leading-relaxed">
              100% natural amorphous obsidian mined without synthetic dyes, pressed glass, or heavy metals.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <span className="material-symbols-outlined text-[28px] text-[#ffb77d]">temple_buddhist</span>
            <h4 className="text-sm font-semibold text-[#e8e1df]">108 Pirith Repetitions</h4>
            <p className="text-xs text-[#a08e7a] leading-relaxed">
              Consecrated through traditional Paritta protective verses chanted by elder lineage practitioners.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <span className="material-symbols-outlined text-[28px] text-[#ffc174]">draw</span>
            <h4 className="text-sm font-semibold text-[#e8e1df]">Destined Recipient Inscription</h4>
            <p className="text-xs text-[#a08e7a] leading-relaxed">
              Each talisman is sealed with the destined wearer’s name and birth intent inside the blessing reliquary.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <span className="material-symbols-outlined text-[28px] text-[#ffb77d]">local_shipping</span>
            <h4 className="text-sm font-semibold text-[#e8e1df]">Sacred Courier Delivery</h4>
            <p className="text-xs text-[#a08e7a] leading-relaxed">
              Cash on Delivery (COD) across Sri Lanka and secure insured international priority transport.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
