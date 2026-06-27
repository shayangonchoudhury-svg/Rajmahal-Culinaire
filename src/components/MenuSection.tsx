/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Plus, HelpCircle, Star, Sparkles, Leaf } from 'lucide-react';
import { MenuItem } from '../types';
import { MENU_ITEMS } from '../data';

interface MenuSectionProps {
  onAddToCart: (item: MenuItem) => void;
  onBookTable: () => void;
}

export default function MenuSection({ onAddToCart, onBookTable }: MenuSectionProps) {
  const peshkashItems = MENU_ITEMS.filter((item) => item.category === 'peshkash');
  const khasKhanaItems = MENU_ITEMS.filter((item) => item.category === 'khas-khana');
  const meethaItems = MENU_ITEMS.filter((item) => item.category === 'meetha');

  // Laal Maas is the featured big item
  const featuredKhasKhana = khasKhanaItems.find((item) => item.id === 'laal-maas');
  const sideKhasKhana = khasKhanaItems.filter((item) => item.id !== 'laal-maas');

  return (
    <div id="full-menu-section" className="pt-32 pb-24">
      {/* Imperial Hero Header */}
      <section className="max-w-[1280px] mx-auto px-6 mb-16 text-center animate-fade-in">
        <h2 className="font-sans font-semibold text-[#C5A059] text-xs uppercase tracking-[0.3em] mb-4">
          Imperial Grandeur
        </h2>
        <h1 className="font-serif text-3xl sm:text-4xl md:text-6xl font-bold text-[#F0F0F0] mb-6">
          The Shahi Dastarkhwan
        </h1>
        <p className="font-sans text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto italic font-light leading-relaxed">
          A royal feast curated from the ancestral kitchens of Rajasthan, celebrating flavors that once graced the tables of Maharajas.
        </p>
      </section>

      {/* Menu Section: Peshkash */}
      <section id="peshkash-section" className="max-w-[1280px] mx-auto px-6 mb-24 scroll-mt-24">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px flex-grow bg-gradient-to-r from-transparent via-[#C5A059]/30 to-transparent" />
          <h3 className="font-serif text-2xl sm:text-3xl text-[#C5A059] uppercase tracking-widest font-bold">
            Peshkash
          </h3>
          <div className="h-px flex-grow bg-gradient-to-r from-transparent via-[#C5A059]/30 to-transparent" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {peshkashItems.map((item) => {
            const hasGoldTokens = item.goldTokens !== undefined;

            return (
              <div
                key={item.id}
                className="velvet-texture glass-card p-8 rounded-lg shadow-2xl relative group border border-[#C5A059]/15 hover:border-[#C5A059]/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="absolute inset-0 bg-[#C5A059]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div>
                  <div className="flex justify-between items-start mb-4 gap-2">
                    <h4 className="font-serif text-xl sm:text-2xl text-[#C5A059] font-bold">
                      {item.name}
                    </h4>
                    {hasGoldTokens ? (
                      <span className="font-sans text-xs font-semibold text-[#DFBA73] border border-[#C5A059]/20 px-2 py-1 uppercase tracking-wider text-right whitespace-nowrap bg-black/60">
                        {item.goldTokens} Gold Tokens
                      </span>
                    ) : (
                      <span className="font-serif text-base sm:text-lg text-[#DFBA73] border border-[#C5A059]/20 px-2.5 py-1 whitespace-nowrap bg-black/60">
                        ₹{item.price}
                      </span>
                    )}
                  </div>

                  <p className="font-sans text-sm text-zinc-300 mb-6 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-[#C5A059]/10">
                  <div className="flex gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] uppercase tracking-wider border border-[#C5A059]/30 px-2.5 py-0.5 rounded-full text-[#C5A059] font-sans"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button
                    id={`add-to-cart-peshkash-${item.id}`}
                    onClick={() => onAddToCart(item)}
                    className="flex items-center justify-center p-2 rounded-full bg-[#C5A059] text-black hover:bg-[#DFBA73] active:scale-90 transition-all cursor-pointer shadow-md"
                    title={`Add ${item.name} to order`}
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Menu Section: Khas Khana */}
      <section id="khas-khana-section" className="max-w-[1280px] mx-auto px-6 mb-24 scroll-mt-24">
        <div className="flex flex-col items-center mb-12">
          <h3 className="font-serif text-2xl sm:text-3xl text-[#C5A059] uppercase tracking-[0.3em] mb-2 font-bold">
            Khas Khana
          </h3>
          <div className="w-24 h-0.5 bg-[#C5A059]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* Large Featured Card (Laal Maas) */}
          {featuredKhasKhana && (
            <div className="relative rounded-lg overflow-hidden group h-[500px] border border-[#C5A059]/20 shadow-2xl flex flex-col justify-end">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{
                  backgroundImage: `url('${featuredKhasKhana.image}')`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/40 to-transparent pointer-events-none" />

              <div className="relative z-10 p-6 sm:p-8 glass-card border-t border-[#C5A059]/20">
                <div className="flex flex-col sm:flex-row justify-between sm:items-end gap-4">
                  <div className="space-y-2">
                    <span className="px-2.5 py-0.5 border border-[#C5A059]/40 rounded-full text-[9px] text-[#C5A059] uppercase font-sans tracking-widest bg-black">
                      Featured Classic
                    </span>
                    <h4 className="font-serif text-2xl sm:text-3xl text-[#C5A059] font-bold">
                      {featuredKhasKhana.name}
                    </h4>
                    <p className="font-sans text-sm text-zinc-300 max-w-md font-light leading-relaxed">
                      {featuredKhasKhana.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between sm:flex-col sm:items-end gap-3 self-stretch sm:self-auto">
                    <span className="font-serif text-xl text-[#DFBA73] font-bold">
                      ₹{featuredKhasKhana.price.toLocaleString('en-IN')}
                    </span>
                    <button
                      id={`add-to-cart-khas-khana-${featuredKhasKhana.id}`}
                      onClick={() => onAddToCart(featuredKhasKhana)}
                      className="flex items-center gap-1.5 px-4 py-2 bg-[#C5A059] hover:bg-[#DFBA73] text-black font-sans font-bold text-xs uppercase tracking-wider rounded-sm active:scale-95 transition-all cursor-pointer shadow-md"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Add to Order</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* List of other Khas Khana Items */}
          <div className="flex flex-col gap-6 justify-between">
            {sideKhasKhana.map((item) => {
              const hasGoldTokens = item.goldTokens !== undefined;

              return (
                <div
                  key={item.id}
                  className="velvet-texture glass-card p-6 border-l-4 border-l-[#C5A059] rounded-r flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 group hover:border-l-8 transition-all duration-300"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h4 className="font-serif text-lg sm:text-xl text-[#C5A059] font-bold group-hover:translate-x-1 transition-transform">
                        {item.name}
                      </h4>
                      {item.tags.includes('Vegetarian') && (
                        <Leaf className="w-4 h-4 text-green-500 fill-green-500/20" />
                      )}
                    </div>
                    <p className="font-sans text-xs sm:text-sm text-zinc-400 italic font-light">
                      {item.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between sm:justify-end gap-4 w-full sm:w-auto pt-3 sm:pt-0 border-t sm:border-t-0 border-[#C5A059]/10">
                    <div className="text-left sm:text-right">
                      {hasGoldTokens ? (
                        <div className="font-sans text-xs font-semibold text-[#DFBA73] uppercase tracking-wider">
                          {item.goldTokens} Gold Tokens
                        </div>
                      ) : (
                        <div className="font-serif text-sm sm:text-base text-[#DFBA73] font-bold">
                          ₹{item.price}
                        </div>
                      )}
                      <span className="hidden sm:inline-block text-[10px] uppercase text-zinc-500 tracking-wider">
                        {item.tags.includes('Vegetarian') ? 'Veg' : 'Mutton'} Curry
                      </span>
                    </div>

                    <button
                      id={`add-to-cart-khas-side-${item.id}`}
                      onClick={() => onAddToCart(item)}
                      className="flex items-center justify-center p-2 rounded-full bg-[#C5A059] text-black hover:bg-[#DFBA73] active:scale-90 transition-all cursor-pointer shadow"
                      title={`Add ${item.name} to order`}
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Menu Section: Meetha */}
      <section id="meetha-section" className="max-w-[1280px] mx-auto px-6 mb-12 scroll-mt-24">
        <div className="flex items-center gap-4 mb-12">
          <h3 className="font-serif text-2xl sm:text-3xl text-[#C5A059] uppercase tracking-widest font-bold">
            Meetha
          </h3>
          <div className="h-px flex-grow bg-gradient-to-r from-[#C5A059]/30 to-transparent" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {meethaItems.map((item) => {
            const hasGoldTokens = item.goldTokens !== undefined;

            return (
              <div
                key={item.id}
                className="bg-[#121212] p-6 rounded-lg border border-[#C5A059]/10 hover:border-[#C5A059]/40 transition-all duration-300 flex flex-col justify-between h-full group"
              >
                <div>
                  {/* Square image frame */}
                  <div className="w-full aspect-square mb-4 overflow-hidden rounded relative">
                    <img
                      className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110 select-none pointer-events-none"
                      src={item.image}
                      alt={item.name}
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                  </div>

                  <h4 className="font-serif text-lg text-[#C5A059] text-center mb-1 font-bold">
                    {item.name}
                  </h4>
                  <p className="text-center text-zinc-400 text-xs sm:text-sm font-light mb-4 min-h-[40px]">
                    {item.description}
                  </p>
                </div>

                <div className="flex justify-between items-center mt-auto pt-4 border-t border-[#C5A059]/10">
                  {hasGoldTokens ? (
                    <span className="font-sans text-xs font-semibold text-[#DFBA73] uppercase tracking-wider">
                      {item.goldTokens} Tokens
                    </span>
                  ) : (
                    <span className="font-serif text-sm sm:text-base text-[#DFBA73] font-bold">
                      ₹{item.price}
                    </span>
                  )}

                  <button
                    id={`add-to-cart-meetha-${item.id}`}
                    onClick={() => onAddToCart(item)}
                    className="flex items-center justify-center p-1.5 rounded-full bg-[#C5A059] text-black hover:bg-[#DFBA73] active:scale-90 transition-all cursor-pointer"
                    title={`Add ${item.name} to order`}
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Floating Order/Reservation Call to Action Button */}
      <div className="mt-20 text-center">
        <button
          id="menu-cta-book-btn"
          onClick={onBookTable}
          className="bg-[#C5A059] hover:bg-[#DFBA73] text-black px-10 py-4 font-sans font-bold text-xs uppercase tracking-[0.2em] rounded-full shadow-2xl transition-all duration-300 active:scale-95 cursor-pointer hover:shadow-[0_0_25px_rgba(197,160,89,0.35)]"
        >
          Secure Royal Seating
        </button>
      </div>
    </div>
  );
}
