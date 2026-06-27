/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ChevronDown } from 'lucide-react';
import { Screen } from '../types';

interface HeroProps {
  onNavigate: (screen: Screen) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section
      id="hero-section"
      className="relative h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* Background with Ambient Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center transition-transform duration-[12s] scale-105"
          style={{
            backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCa5yBLtegrkr-67693xh7pTaen0PVFn-uurhWiVkzjUQBT6g1gEvUB2zxQAgRxg0yqxJcGTguurIib0EcvJOIQwa--GUcNjT0IUczBymr7GZ0Tkn-rdGIyAaPdGu6delOjAu5BDh5RVvnci8VmYK4hmSWbklRsC8rlnfoh6xrukfD-7bL9Np0ychQlfGdbUjQuCOSvKlFoUMzJDXN00YytOxX1uAO6ylmqHuikarfbkGOvh87KMwCgquhAGWW7LUvNaDj_aChKQw')`,
          }}
        />
        <div className="absolute inset-0 hero-gradient" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mt-16">
        <span className="font-sans font-semibold text-xs sm:text-sm text-[#C5A059] uppercase tracking-[0.3em] block mb-4">
          A Legacy of Flavors
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl md:text-6xl text-[#F0F0F0] mb-8 leading-tight font-bold tracking-wide">
          Royal Welcome to the <br className="hidden sm:inline" /> Palace of Flavors
        </h2>
        <p className="font-sans text-zinc-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          Where Parisian culinary precision meets the rich, time-honored heritage of Rajputana. Embark on a sensory feast fit for Kings and Queens.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
          <button
            id="hero-reserve-btn"
            onClick={() => onNavigate('reservations')}
            className="w-full sm:w-auto bg-[#C5A059] hover:bg-[#DFBA73] text-black px-8 py-4 font-sans font-bold text-xs uppercase tracking-widest rounded-sm shadow-xl hover:shadow-[0_0_25px_rgba(197,160,89,0.35)] transition-all duration-300 active:scale-95 cursor-pointer"
          >
            Reserve Your Table
          </button>
          <button
            id="hero-menu-btn"
            onClick={() => onNavigate('menu')}
            className="w-full sm:w-auto border border-[#C5A059] text-[#F0F0F0] hover:bg-[#C5A059]/10 px-8 py-4 font-sans font-bold text-xs uppercase tracking-widest rounded-sm transition-all duration-300 active:scale-95 cursor-pointer"
          >
            Explore The Menu
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        id="hero-scroll-indicator"
        onClick={() => {
          const nextSection = document.getElementById('chef-heritage-section');
          if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
          }
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[#C5A059] animate-bounce cursor-pointer hover:scale-110 transition-transform p-2 focus:outline-none"
        aria-label="Scroll down to chef bio"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
}
