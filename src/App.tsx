import React, { useState } from 'react';
import { ScreenType, CartItem } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { AboutAuraScreen } from './components/screens/AboutAuraScreen';
import { SanctuaryScreen } from './components/screens/SanctuaryScreen';
import { BlessingsScreen } from './components/screens/BlessingsScreen';
import { PrivacyScreen } from './components/screens/PrivacyScreen';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { CeremonyModal } from './components/CeremonyModal';
import { TALISMAN_PRODUCTS } from './data/metaphysicalData';

export default function App() {
  // Screens: 'about' matches the provided screenshot precisely
  const [currentScreen, setCurrentScreen] = useState<ScreenType>('about');

  // Cart state
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      product: TALISMAN_PRODUCTS[0],
      beadSize: '12mm (Potent / Recommended)',
      quantity: 1,
      recipientName: 'Seeker of Sovereignty'
    }
  ]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isCeremonyOpen, setIsCeremonyOpen] = useState(false);

  // Cart Handlers
  const handleAddToCart = (item: CartItem) => {
    setCartItems((prev) => {
      const existingIdx = prev.findIndex(
        (i) => i.product.id === item.product.id && i.beadSize === item.beadSize
      );
      if (existingIdx > -1) {
        const copy = [...prev];
        copy[existingIdx].quantity += item.quantity;
        return copy;
      }
      return [...prev, item];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (index: number, newQty: number) => {
    if (newQty <= 0) {
      handleRemoveItem(index);
      return;
    }
    setCartItems((prev) => {
      const copy = [...prev];
      copy[index].quantity = newQty;
      return copy;
    });
  };

  const handleRemoveItem = (index: number) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#151312] text-[#e8e1df] flex flex-col selection:bg-[#f59e0b] selection:text-[#472a00]">
      {/* Top Bar Navigation */}
      <Navbar
        currentScreen={currentScreen}
        onNavigate={(screen) => setCurrentScreen(screen)}
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenConsultation={() => setIsCeremonyOpen(true)}
        onOpenOrderLookup={() => {
          setCurrentScreen('contact');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Main Content Area */}
      <main className="w-full pt-20 bg-[#151312] flex-1">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {currentScreen === 'about' && (
            <AboutAuraScreen
              onNavigate={(screen) => setCurrentScreen(screen)}
              onOpenConsultation={() => setIsCeremonyOpen(true)}
              onSelectProductForCheckout={() => {
                setIsCartOpen(true);
              }}
            />
          )}

          {currentScreen === 'home' && (
            <SanctuaryScreen
              onAddToCart={handleAddToCart}
              onNavigate={(screen) => setCurrentScreen(screen)}
              onOpenConsultation={() => setIsCeremonyOpen(true)}
            />
          )}

          {currentScreen === 'contact' && (
            <BlessingsScreen
              onOpenOrderLookup={() => {
                setCurrentScreen('contact');
              }}
            />
          )}

          {currentScreen === 'privacy' && <PrivacyScreen />}
        </div>
      </main>

      {/* Footer */}
      <Footer
        onNavigate={(screen) => setCurrentScreen(screen)}
        onOpenConsultation={() => setIsCeremonyOpen(true)}
        onOpenOrderLookup={() => {
          setCurrentScreen('contact');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onProceedToCheckout={() => {
          setIsCartOpen(false);
          setIsCheckoutOpen(true);
        }}
      />

      {/* Checkout Modal with Sanctification Certificate */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        items={cartItems}
        onOrderCompleted={() => {
          setCartItems([]);
        }}
      />

      {/* Ceremony Scheduling Modal */}
      <CeremonyModal
        isOpen={isCeremonyOpen}
        onClose={() => setIsCeremonyOpen(false)}
      />
    </div>
  );
}
