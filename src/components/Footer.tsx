/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Globe, Share2, Mail } from 'lucide-react';
import { Screen } from '../types';

interface FooterProps {
  onNavigate: (screen: Screen) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const handleNav = (screen: Screen) => {
    onNavigate(screen);
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full rounded-t-[100px] sm:rounded-t-[200px] bg-[#160c00] border-t border-[#e9c349]/20 bg-repeat shadow-2xl relative overflow-hidden mt-16 pb-12">
      {/* Visual background blend */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1d1101]/20 to-[#160c00]/80 pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center py-16 px-6 max-w-[1280px] mx-auto text-center space-y-8">
        {/* Foot Brand Header */}
        <h2
          onClick={() => handleNav('home')}
          className="font-serif text-2xl sm:text-3xl text-[#e9c349] tracking-[0.2em] uppercase cursor-pointer hover:scale-105 transition-transform"
        >
          RAJMAHAL CULINAIRE
        </h2>

        {/* Footer Navigation Map */}
        <nav className="flex flex-wrap justify-center gap-6 sm:gap-10 font-sans text-xs sm:text-sm tracking-[0.15em] uppercase font-semibold text-[#cec3d3]">
          <button
            onClick={() => handleNav('menu')}
            className="hover:text-[#e9c349] transition-colors cursor-pointer"
          >
            The Menu
          </button>
          <button
            onClick={() => handleNav('heritage')}
            className="hover:text-[#e9c349] transition-colors cursor-pointer"
          >
            Our Heritage
          </button>
          <button
            onClick={() => handleNav('reservations')}
            className="hover:text-[#e9c349] text-[#e9c349] font-bold transition-colors cursor-pointer"
          >
            Reservations
          </button>
          <a
            href="#private-dining"
            onClick={(e) => {
              e.preventDefault();
              alert('Private suites and imperial catering can be arranged. Our grand concierge will contact you on your royal email.');
            }}
            className="hover:text-[#e9c349] transition-colors"
          >
            Private Dining
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              alert('Rajmahal Culinaire: Palace Road, Jaipur, Rajasthan.\nPhone: +91 141 2623344\nEmail: concierge@rajmahalculinaire.com');
            }}
            className="hover:text-[#e9c349] transition-colors"
          >
            Contact
          </a>
        </nav>

        {/* Social Icons */}
        <div className="flex gap-5">
          <button
            onClick={() => alert('Official Rajmahal Culinaire Global Website: https://rajmahalculinaire.com')}
            className="w-10 h-10 border border-[#e9c349]/30 rounded-full flex items-center justify-center text-[#e9c349] hover:bg-[#e9c349] hover:text-[#1d1101] transition-all cursor-pointer shadow active:scale-90"
            aria-label="Global Site"
          >
            <Globe className="w-4 h-4" />
          </button>
          <button
            onClick={() => {
              if (navigator.share) {
                navigator.share({
                  title: 'Rajmahal Culinaire',
                  text: 'Imperial Rajasthani fine dining combining ancient recipes with molecular gastronomy.',
                  url: window.location.href,
                }).catch(() => {});
              } else {
                alert('Share Link: ' + window.location.href);
              }
            }}
            className="w-10 h-10 border border-[#e9c349]/30 rounded-full flex items-center justify-center text-[#e9c349] hover:bg-[#e9c349] hover:text-[#1d1101] transition-all cursor-pointer shadow active:scale-90"
            aria-label="Share Link"
          >
            <Share2 className="w-4 h-4" />
          </button>
          <a
            href="mailto:concierge@rajmahalculinaire.com"
            className="w-10 h-10 border border-[#e9c349]/30 rounded-full flex items-center justify-center text-[#e9c349] hover:bg-[#e9c349] hover:text-[#1d1101] transition-all cursor-pointer shadow active:scale-90"
            aria-label="Contact Concierge"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        {/* Copyright */}
        <p className="font-sans text-[10px] sm:text-xs uppercase tracking-widest text-[#cec3d3]/40">
          © 2026 RAJMAHAL CULINAIRE. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
}
