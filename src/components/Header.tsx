/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Menu, ShoppingBag, X } from 'lucide-react';
import { Screen } from '../types';

interface HeaderProps {
  activeScreen: Screen;
  onNavigate: (screen: Screen) => void;
  cartCount: number;
  onCartClick: () => void;
  reservationCount: number;
}

export default function Header({
  activeScreen,
  onNavigate,
  cartCount,
  onCartClick,
  reservationCount,
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'menu', label: 'The Menu' },
    { id: 'heritage', label: 'Our Heritage' },
    { id: 'reservations', label: 'Reservations' },
  ] as const;

  return (
    <>
      <header id="top-header" className="fixed top-0 w-full z-50 bg-[#080808]/85 backdrop-blur-xl border-b border-[#C5A059]/20 transition-all duration-300 shadow-lg shadow-black/40">
        <div className="flex items-center justify-between px-6 py-4 w-full max-w-[1280px] mx-auto">
          {/* Menu Button / Logo */}
          <div className="flex items-center gap-4">
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-[#C5A059] active:scale-95 transition-transform cursor-pointer focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>

          <h1
            id="app-logo"
            onClick={() => onNavigate('home')}
            className="font-serif text-xl sm:text-2xl tracking-widest text-[#C5A059] uppercase cursor-pointer text-center select-none"
          >
            RAJMAHAL CULINAIRE
          </h1>

          <div className="flex items-center gap-6">
            {/* Desktop Navigation */}
            <nav id="desktop-nav" className="hidden md:flex gap-8 items-center">
              {navItems.map((item) => {
                const isActive = activeScreen === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => onNavigate(item.id)}
                    className={`font-sans font-semibold text-sm uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                      isActive
                        ? 'text-[#C5A059] border-b-2 border-[#C5A059] pb-1'
                        : 'text-zinc-400 hover:text-[#DFBA73]'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </nav>

            {/* Shopping Bag & Reservation Status */}
            <div className="flex items-center gap-4">
              {/* Reservations count indicator */}
              {reservationCount > 0 && (
                <button
                  id="header-reservations-btn"
                  onClick={() => onNavigate('reservations')}
                  className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#C5A059]/10 border border-[#C5A059]/20 text-[#C5A059] text-xs font-semibold tracking-wider uppercase active:scale-95 transition-transform"
                >
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-ping" />
                  <span>{reservationCount} Booked</span>
                </button>
              )}

              {/* Shopping Bag Button */}
              <button
                id="shopping-bag-btn"
                onClick={onCartClick}
                className="active:scale-95 transition-transform text-[#C5A059] relative cursor-pointer p-1"
                aria-label="View cart"
              >
                <ShoppingBag className="w-6 h-6" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#C5A059] text-black text-[10px] w-4.5 h-4.5 rounded-full flex items-center justify-center font-bold shadow-sm animate-pulse">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div id="mobile-drawer" className="fixed inset-0 z-50 flex justify-start">
          {/* Backdrop */}
          <div
            id="mobile-drawer-backdrop"
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
          />

          {/* Sidebar */}
          <div
            id="mobile-drawer-sidebar"
            className="relative w-80 max-w-[85vw] h-full bg-[#0A0A0A] border-r border-[#C5A059]/20 p-8 flex flex-col justify-between z-10 animate-slide-in"
          >
            <div>
              <div className="flex items-center justify-between mb-12">
                <h2 className="font-serif text-lg text-[#C5A059] tracking-widest uppercase">
                  Navigation
                </h2>
                <button
                  id="mobile-drawer-close"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[#C5A059] hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex flex-col gap-6">
                {navItems.map((item) => {
                  const isActive = activeScreen === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        onNavigate(item.id);
                        setMobileMenuOpen(false);
                      }}
                      className={`text-left font-sans font-semibold text-base uppercase tracking-widest py-2 border-b border-white/10 transition-colors ${
                        isActive ? 'text-[#C5A059]' : 'text-[#F0F0F0]'
                      }`}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="border-t border-[#C5A059]/20 pt-6">
              <p className="font-serif text-[#C5A059] tracking-widest text-sm mb-2 uppercase">
                Rajmahal Culinaire
              </p>
              <p className="text-zinc-400 text-xs leading-relaxed">
                Experience royal Indian cuisine at its finest.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
