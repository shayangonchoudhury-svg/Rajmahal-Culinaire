/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Plus, ArrowRight } from 'lucide-react';
import { MenuItem } from '../types';
import { MENU_ITEMS } from '../data';

interface DailySpecialsProps {
  onAddToCart: (item: MenuItem) => void;
  onViewFullMenu: () => void;
}

export default function DailySpecials({ onAddToCart, onViewFullMenu }: DailySpecialsProps) {
  const specials = MENU_ITEMS.filter((item) => item.category === 'special');

  return (
    <section id="daily-mahala-section" className="py-24 bg-[#0A0A0A] border-y border-[#C5A059]/10 relative overflow-hidden">
      {/* Golden Blur Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A059]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C5A059]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="px-6 max-w-[1280px] mx-auto relative z-10">
        <div className="text-center mb-16">
          <h3 className="font-serif text-3xl sm:text-4xl text-[#C5A059] uppercase tracking-[0.2em] mb-2 font-bold">
            Daily Mahala
          </h3>
          <p className="font-sans text-xs sm:text-sm text-zinc-400 uppercase tracking-wider font-semibold">
            The Day's Treasures • Curated by the Chef
          </p>
        </div>

        {/* Specials Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {specials.map((item, idx) => {
            // Give card 2 (middle one) a distinctive golden border accent like the screenshot
            const isMiddle = idx === 1;

            return (
              <div
                key={item.id}
                className={`glass-card p-6 rounded-lg group hover:-translate-y-2 transition-all duration-500 flex flex-col h-full ${
                  isMiddle ? 'border-t-2 border-t-[#C5A059]' : ''
                }`}
              >
                {/* Image aspect-video */}
                <div className="aspect-video w-full rounded mb-6 overflow-hidden relative">
                  <img
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 select-none pointer-events-none"
                    src={item.image}
                    alt={item.name}
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
                </div>

                {/* Title & Price */}
                <div className="flex justify-between items-start mb-4 gap-2">
                  <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#F0F0F0] group-hover:text-[#C5A059] transition-colors">
                    {item.name}
                  </h4>
                  <span className="font-serif text-base sm:text-lg text-[#C5A059] font-semibold whitespace-nowrap">
                    ₹{item.price.toLocaleString('en-IN')}
                  </span>
                </div>

                {/* Description */}
                <p className="font-sans text-sm text-zinc-400 flex-grow leading-relaxed font-light mb-6">
                  {item.description}
                </p>

                {/* Bottom Row: Tags & Add Button */}
                <div className="flex justify-between items-center mt-auto gap-4 pt-4 border-t border-[#C5A059]/10">
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 border border-[#C5A059]/30 rounded-full text-[10px] text-[#C5A059] uppercase font-sans tracking-wider"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button
                    id={`add-to-cart-daily-${item.id}`}
                    onClick={() => onAddToCart(item)}
                    className="flex items-center justify-center p-2 rounded-full bg-[#C5A059] text-black hover:bg-[#DFBA73] active:scale-90 transition-all cursor-pointer shadow-md shadow-black/20"
                    title={`Add ${item.name} to order`}
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* View Full Menu CTA */}
        <div className="mt-16 text-center">
          <button
            id="view-full-menu-btn"
            onClick={onViewFullMenu}
            className="inline-flex items-center gap-3 font-sans font-bold text-xs text-[#C5A059] uppercase tracking-[0.2em] hover:gap-6 transition-all duration-300 cursor-pointer focus:outline-none group"
          >
            <span>View Full Menu</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
