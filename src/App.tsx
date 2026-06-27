/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { CalendarCheck, ChevronRight } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import ChefSection from './components/ChefSection';
import DailySpecials from './components/DailySpecials';
import MenuSection from './components/MenuSection';
import HeritageSection from './components/HeritageSection';
import ReservationSection from './components/ReservationSection';
import CartDrawer from './components/CartDrawer';
import Footer from './components/Footer';
import { Screen, CartItem, MenuItem, Reservation } from './types';

export default function App() {
  const [activeScreen, setActiveScreen] = useState<Screen>('home');
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  // Initialize and load persistent data
  useEffect(() => {
    const savedReservations = localStorage.getItem('rajmahal_reservations');
    if (savedReservations) {
      try {
        setReservations(JSON.parse(savedReservations));
      } catch (e) {
        console.error('Failed to load reservations:', e);
      }
    }

    const savedCart = localStorage.getItem('rajmahal_cart');
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart));
      } catch (e) {
        console.error('Failed to load cart:', e);
      }
    }
  }, []);

  // Sync reservations to storage
  const saveReservations = (newReservations: Reservation[]) => {
    setReservations(newReservations);
    localStorage.setItem('rajmahal_reservations', JSON.stringify(newReservations));
  };

  // Sync cart to storage
  const saveCart = (newCart: CartItem[]) => {
    setCartItems(newCart);
    localStorage.setItem('rajmahal_cart', JSON.stringify(newCart));
  };

  // Handlers
  const handleNavigate = (screen: Screen) => {
    setActiveScreen(screen);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAddToCart = (menuItem: MenuItem) => {
    const existing = cartItems.find((item) => item.menuItem.id === menuItem.id);
    let updated: CartItem[];
    if (existing) {
      updated = cartItems.map((item) =>
        item.menuItem.id === menuItem.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      updated = [...cartItems, { menuItem, quantity: 1 }];
    }
    saveCart(updated);
    // Open cart automatically to provide micro-feedback
    setCartOpen(true);
  };

  const handleUpdateQuantity = (itemId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveItem(itemId);
      return;
    }
    const updated = cartItems.map((item) =>
      item.menuItem.id === itemId ? { ...item, quantity } : item
    );
    saveCart(updated);
  };

  const handleRemoveItem = (itemId: string) => {
    const updated = cartItems.filter((item) => item.menuItem.id !== itemId);
    saveCart(updated);
  };

  const handleClearCart = () => {
    saveCart([]);
  };

  const handleAddReservation = (bookingData: Omit<Reservation, 'id' | 'createdAt' | 'status'>) => {
    const newBooking: Reservation = {
      ...bookingData,
      id: Math.random().toString(36).substring(7),
      status: 'Confirmed',
      createdAt: new Date().toISOString(),
    };
    saveReservations([newBooking, ...reservations]);
  };

  const handleCancelReservation = (id: string) => {
    if (window.confirm('Do you wish to release your reservation at the royal table?')) {
      const updated = reservations.filter((res) => res.id !== id);
      saveReservations(updated);
    }
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterSubscribed(true);
    setNewsletterEmail('');
    setTimeout(() => {
      alert('Sovereign circle subscription confirmed. Welcome to Rajmahal Culinaire.');
    }, 100);
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="jali-pattern min-h-screen text-[#F0F0F0] flex flex-col justify-between selection:bg-[#C5A059] selection:text-black">
      {/* Navigation Header */}
      <Header
        activeScreen={activeScreen}
        onNavigate={handleNavigate}
        cartCount={totalCartCount}
        onCartClick={() => setCartOpen(true)}
        reservationCount={reservations.length}
      />

      {/* Main Screen Router */}
      <main className="flex-grow animate-fade-in">
        {activeScreen === 'home' && (
          <div className="space-y-0">
            {/* Hero Welcome */}
            <Hero onNavigate={handleNavigate} />

            {/* Chef Elena Portrait & Philosophy */}
            <ChefSection />

            {/* Daily specials / Mahala section */}
            <DailySpecials
              onAddToCart={handleAddToCart}
              onViewFullMenu={() => handleNavigate('menu')}
            />

            {/* Join the Royal Circle Newsletter */}
            <section className="py-24 px-6">
              <div className="max-w-4xl mx-auto glass-card p-12 md:p-20 text-center relative overflow-hidden rounded-xl shadow-2xl border border-[#C5A059]/20">
                <div className="absolute inset-0 bg-[#C5A059]/5 opacity-5 pointer-events-none jali-pattern" />
                <h3 className="font-serif text-2xl sm:text-4xl font-bold mb-4 text-[#F0F0F0] tracking-wide">
                  Join the Royal Circle
                </h3>
                <p className="font-sans text-sm sm:text-base text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
                  Subscribe for exclusive invitations to our seasonal tasting menus, secret culinary archives, and private chef's table events.
                </p>

                {newsletterSubscribed ? (
                  <div className="text-green-400 font-sans font-semibold text-sm tracking-wide">
                    👑 Welcome to the Royal Circle. Check your inbox for your digital seal.
                  </div>
                ) : (
                  <form
                    onSubmit={handleNewsletterSubmit}
                    className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
                  >
                    <input
                      type="email"
                      required
                      placeholder="Your royal email"
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      className="bg-transparent border-b border-white/20 focus:border-[#C5A059] text-[#F0F0F0] placeholder-zinc-500 flex-grow py-3 px-2 transition-colors duration-300 font-sans text-sm outline-none focus:ring-0"
                    />
                    <button
                      type="submit"
                      className="bg-[#C5A059] hover:bg-[#DFBA73] text-black px-8 py-3.5 font-sans font-bold text-xs uppercase tracking-widest rounded-sm transition-colors active:scale-95 cursor-pointer whitespace-nowrap shadow-md"
                    >
                      Inscribe
                    </button>
                  </form>
                )}
              </div>
            </section>
          </div>
        )}

        {activeScreen === 'menu' && (
          <MenuSection
            onAddToCart={handleAddToCart}
            onBookTable={() => handleNavigate('reservations')}
          />
        )}

        {activeScreen === 'heritage' && (
          <HeritageSection onNavigate={handleNavigate} />
        )}

        {activeScreen === 'reservations' && (
          <ReservationSection
            reservations={reservations}
            onAddReservation={handleAddReservation}
            onCancelReservation={handleCancelReservation}
          />
        )}
      </main>

      {/* Brand Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Slide-out Order Cart Drawer */}
      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Floating Reservation Action for high-fidelity micro-interaction */}
      {activeScreen !== 'reservations' && (
        <button
          id="floating-reserve-btn"
          onClick={() => handleNavigate('reservations')}
          className="fixed bottom-8 right-8 bg-[#C5A059] text-black hover:bg-[#DFBA73] px-6 py-4 rounded-full font-sans font-bold text-xs shadow-2xl hover:scale-105 active:scale-95 transition-all z-40 flex items-center gap-2 cursor-pointer border border-black/20 hover:shadow-[0_0_25px_rgba(197,160,89,0.4)] uppercase tracking-wider"
          title="Reserve your table"
        >
          <CalendarCheck className="w-4.5 h-4.5" />
          <span>Reserve Table</span>
        </button>
      )}
    </div>
  );
}
