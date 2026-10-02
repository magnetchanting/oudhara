import React from 'react';
import { CartItem } from '../types';
import { X, Trash2, Plus, Minus, ShoppingBag, ShieldCheck, ArrowRight } from 'lucide-react';
import { soundService } from '../services/soundService';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (index: number, newQty: number) => void;
  onRemoveItem: (index: number) => void;
  onProceedToCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onProceedToCheckout,
}) => {
  if (!isOpen) return null;

  const totalLKR = items.reduce(
    (sum, item) => sum + item.product.priceLKR * item.quantity,
    0
  );

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#151312] border-l border-[#f59e0b]/20 shadow-2xl flex flex-col">
          
          {/* Header */}
          <div className="p-6 bg-[#1d1b1a] border-b border-[#373433] flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <ShoppingBag className="w-5 h-5 text-[#ffc174]" />
              <h2 className="font-serif text-lg font-semibold text-[#e8e1df]">
                Sanctified Reliquary Cart
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-[#a08e7a] hover:text-[#e8e1df] hover:bg-[#2c2928] cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items List */}
          <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-4">
            {items.length === 0 ? (
              <div className="flex-1 flex flex-col items-center justify-center text-center gap-3 text-[#a08e7a]">
                <ShoppingBag className="w-12 h-12 text-[#373433]" />
                <p className="text-sm font-medium">Your reliquary is currently empty.</p>
                <p className="text-xs max-w-xs">
                  Select a consecrated Pixiu artifact from our sanctuary to begin alignment.
                </p>
              </div>
            ) : (
              items.map((item, index) => (
                <div
                  key={`${item.product.id}-${index}`}
                  className="p-4 rounded-xl bg-[#1d1b1a] border border-[#373433] flex gap-3.5"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-18 h-18 rounded-lg object-cover bg-[#221f1e] shrink-0 border border-[#f59e0b]/20"
                    referrerPolicy="no-referrer"
                  />
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="text-xs font-semibold text-[#e8e1df] line-clamp-1">
                          {item.product.name}
                        </h4>
                        <button
                          onClick={() => {
                            soundService.playChime(396);
                            onRemoveItem(index);
                          }}
                          className="text-[#a08e7a] hover:text-red-400 p-0.5 cursor-pointer"
                          title="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <span className="text-[11px] text-[#ffb77d] block">
                        {item.beadSize}
                      </span>
                      {item.recipientName && (
                        <span className="text-[10px] text-[#ffc174] bg-[#2c2928] px-2 py-0.5 rounded mt-1 inline-block border border-[#f59e0b]/20">
                          Blessing for: {item.recipientName}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center justify-between mt-2 pt-2 border-t border-[#2c2928]">
                      <div className="flex items-center gap-2 bg-[#221f1e] rounded-lg px-2 py-1 border border-[#373433]">
                        <button
                          onClick={() => onUpdateQuantity(index, item.quantity - 1)}
                          className="text-[#a08e7a] hover:text-[#e8e1df] cursor-pointer"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-semibold text-[#e8e1df] w-4 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(index, item.quantity + 1)}
                          className="text-[#a08e7a] hover:text-[#e8e1df] cursor-pointer"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <span className="font-serif text-sm font-bold text-[#ffc174]">
                        Rs. {(item.product.priceLKR * item.quantity).toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer & Checkout */}
          {items.length > 0 && (
            <div className="p-6 bg-[#1d1b1a] border-t border-[#373433] flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center justify-between text-xs text-[#a08e7a]">
                  <span>Monastic Consecration:</span>
                  <span className="text-emerald-400 font-semibold">Included (Free)</span>
                </div>
                <div className="flex items-center justify-between text-xs text-[#a08e7a]">
                  <span>Sacred Courier Delivery:</span>
                  <span className="text-emerald-400 font-semibold">Free Islandwide (COD Available)</span>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-[#2c2928]">
                  <span className="text-sm font-semibold text-[#e8e1df]">Total Offering:</span>
                  <span className="font-serif text-xl font-bold text-[#ffc174]">
                    Rs. {totalLKR.toLocaleString()}
                  </span>
                </div>
              </div>

              <button
                onClick={() => {
                  soundService.playChime(852);
                  onProceedToCheckout();
                }}
                className="w-full py-3.5 px-6 rounded-full bg-gradient-to-r from-[#f59e0b] to-[#d97707] text-[#472a00] font-bold text-sm uppercase tracking-wider hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-lg cursor-pointer"
              >
                <span>Proceed to Consecration Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-[#a08e7a]">
                <ShieldCheck className="w-4 h-4 text-[#ffc174]" />
                <span>Certified Pure Volcanic Obsidian • Cash on Delivery</span>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
