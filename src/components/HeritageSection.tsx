/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Sparkles, Beaker, Scroll, ChevronDown, Award } from 'lucide-react';
import { Screen } from '../types';

interface HeritageSectionProps {
  onNavigate: (screen: Screen) => void;
}

export default function HeritageSection({ onNavigate }: HeritageSectionProps) {
  const pillars = [
    {
      icon: <Sparkles className="w-8 h-8 text-[#C5A059]" />,
      title: 'Sacred Geometry',
      description: 'Plating inspired by Mandalas, ensuring visual harmony that prepares the mind for the digestive journey ahead.',
    },
    {
      icon: <Beaker className="w-8 h-8 text-[#C5A059]" />,
      title: 'Kinetic Infusions',
      description: 'Utilizing ultrasonic vibration to extract the pure essence of herbs without applying heat that destroys medicinal potency.',
    },
    {
      icon: <Scroll className="w-8 h-8 text-[#C5A059]" />,
      title: 'Oral Traditions',
      description: "Preserving the 'Khansama' scrolls—private royal journals passed down through centuries of kitchen mastery.",
    },
  ];

  const timelineEvents = [
    {
      year: '1240 AD',
      title: 'THE AYURVEDIC SEED',
      description: 'The foundation was laid in the royal kitchens of Mewar, where physicians and chefs collaborated to create "Rasayanas" – restorative foods that harmonized the spirit through sensory delight.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCMjDSiUD8lzQggM81gSkdCez7qbZT_Sh3DKsdU4WQUZbW5cQSTJvnpKj3WjzqQBsQm5Az75mdqIUSOlo8oH96c8EP5oSVf47U2_Ip4yppgoXVAgzovQU-thuGFe72_TsjmdtI3ZjlIzk2t6Lltj-HD-SWBXYEUAY-TqUQAkio7GIMt7fSVAIKJDUbgGTj47oUQ82AJizE2AfJlgxXPtv4huHhZibHS1tLRjt7YtL9PR1T8sG0XIRcfpVJqsxKrWrn3ueu6vm0fKQ',
      alignLeft: true,
    },
    {
      year: '1998 AD',
      title: 'MOLECULAR EVOLUTION',
      description: "The transition to Rajmahal Culinaire began as we introduced scientific precision—sous-vide at exact Ayurvedic temperatures—to preserve the 'Prana' or life force within every organic ingredient.",
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAIfe5xHPOCNU0sumJWmT5SchxS_0q7Ei-X6tyKkTHZVzZ37NlOTtAQuqYfT1uUSjtkguk9B09DtbqkxJvzaDUBfk0_qshlF5xK1a71PqCB8vMBL8hMXw0_Ram0QORbR6sG2k2zOqCfbL8oRzOlQNLtIQbVyhbjbVDEOfiVuBUYEuPrQsCZG0seDdYiUNzpLlqVAQf-9SqdtxIInOpckn54g7PefG61O9824YrZKgQdRahPEVDKxgYVuy4KR9LxZ8eJs0qnS3-vcA',
      alignLeft: false,
    },
    {
      year: 'PRESENT DAY',
      title: 'THE CULINAIRE PHILOSOPHY',
      description: "Today, we don't just serve meals; we orchestrate sensory experiences. Each dish is a mathematical proof of flavor, a symphony of ancient heritage and futuristic technique.",
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDV1Vp2iIdH1F7F_dTI-RM6hNa_6GuAdr4XzYL4YfCEQffKBtIGwmKXZAumq5Qc6SDkjSlo5xN-LlqcGLac98g1p7Lugqq7hZcN2iR7GWBrmentATg9eyMelfV7UxDvOUZ8XSOfrjXUWCW8x09CFRG9elBaH3Nso_PGD7off4mld2Gc7ZYvFTOPXsJPeaaBRqbM32ImUUQCpv4pPjIXq5iT8oHffsfpQXXntPwTibplyyA8Mcg2eRnpYKGuEk1bjzTxGkWw3CnExA',
      alignLeft: true,
    },
  ];

  return (
    <div id="heritage-view" className="pt-24 pb-12">
      {/* Hero Header */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[#080808]/60" />
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <span className="font-sans font-semibold text-[#C5A059] tracking-[0.3em] uppercase block mb-6 text-sm">
            Our Heritage
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-7xl text-[#C5A059] text-glow mb-8 tracking-widest font-bold">
            THE LEGACY OF KINGS
          </h2>
          <p className="font-sans text-zinc-300 text-base sm:text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            Where the sacred geometry of ancient Ayurveda meets the precise mechanics of modern culinary physics.
          </p>

          <button
            onClick={() => {
              const startSection = document.getElementById('visionary-section');
              if (startSection) {
                startSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="flex flex-col items-center mx-auto text-[#C5A059] hover:scale-105 active:scale-95 transition-transform group cursor-pointer"
          >
            <span className="font-sans text-xs uppercase tracking-widest mb-2 text-[#C5A059]">
              Begin Journey
            </span>
            <ChevronDown className="w-6 h-6 animate-bounce" />
          </button>
        </div>
      </section>

      {/* The Visionary (Bento Grid Style) */}
      <section
        id="visionary-section"
        className="py-24 px-6 max-w-[1280px] mx-auto scroll-mt-24"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          <div className="md:col-span-7 relative group overflow-hidden rounded-lg aspect-square md:aspect-auto border border-[#C5A059]/20 shadow-2xl">
            <img
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 select-none pointer-events-none"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkI_fSbmG_-0enJpuEMDMWLthANS9JWvIX_OcPxO_1k0NHGBzAduNonPFGWDWlFpCcF_ezz9C6UNfaoAGS7ulXE8sasucs9xPhOtVQLyQ_pXVC717RbwBE6iSjZAhN8zTozuhbxdnR2FsqkeTQVUTMkEfPh-knCYBCt7xqNjCHwKHaMYgNtSFVsnKvt-FZKuL4c3LcNcmQYGLeAcyybXETbT2qnWJIcUjv2Tclcneh2GSPVHQoVAi9Lbuy4kEUAeV2QWCpZeoKvA"
              alt="Master Chef Vikram Rathore with copper instruments and spices"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent pointer-events-none" />
          </div>

          <div className="md:col-span-5 flex flex-col justify-center glass-card p-8 sm:p-12 rounded-lg border border-[#C5A059]/20 shadow-xl">
            <div className="flex items-center gap-2 mb-4">
              <Award className="w-5 h-5 text-[#C5A059]" />
              <span className="font-sans font-bold text-xs uppercase tracking-widest text-[#C5A059]">
                Royal Custodian
              </span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#C5A059] mb-6 font-bold tracking-wide">
              THE VISIONARY
            </h3>
            <p className="font-sans text-zinc-400 leading-relaxed mb-8 font-light text-sm sm:text-base">
              Master Chef Vikram Rathore, a third-generation royal cook, redefined the landscape of Indian gastronomy by merging forgotten 12th-century recipes with centrifugal extraction and thermal imaging.
            </p>
            <blockquote className="border-l-2 border-[#C5A059] pl-6 italic text-[#F0F0F0] mb-8 leading-relaxed text-sm sm:text-base">
              "Culinary excellence is not just a skill; it is a ritual of balancing the five elements—Agni, Vayu, Akasha, Prithvi, and Jala."
            </blockquote>
          </div>
        </div>
      </section>

      {/* Vertical Scroll Narrative / Timeline */}
      <section className="relative py-24 bg-[#0A0A0A] border-y border-[#C5A059]/10">
        {/* Center Line for desktop */}
        <div className="absolute left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-[#C5A059]/40 to-transparent hidden md:block" />

        <div className="max-w-[1280px] mx-auto px-6 relative">
          {timelineEvents.map((event, idx) => {
            return (
              <div
                key={event.year}
                className="flex flex-col md:flex-row items-center gap-8 md:gap-12 mb-16 md:mb-24 relative last:mb-0"
              >
                {/* Timeline node dot */}
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#C5A059] shadow-[0_0_15px_#C5A059] z-20 hidden md:block" />

                {/* Left side card block */}
                <div
                  className={`w-full md:w-1/2 flex justify-end ${
                    event.alignLeft ? 'order-2 md:order-1' : 'order-2 md:order-2'
                  }`}
                >
                  <div
                    className={`glass-card p-6 sm:p-10 rounded-lg w-full border border-[#C5A059]/20 shadow-xl ${
                      event.alignLeft
                        ? 'text-left md:text-right md:translate-x-[-12px]'
                        : 'text-left md:translate-x-[12px]'
                    }`}
                  >
                    <span className="font-serif text-xl sm:text-2xl text-[#C5A059] block mb-2 font-bold">
                      {event.year}
                    </span>
                    <h4 className="font-serif text-lg sm:text-xl text-[#F0F0F0] mb-4 font-bold tracking-wider">
                      {event.title}
                    </h4>
                    <p className="font-sans text-sm text-zinc-400 leading-relaxed font-light">
                      {event.description}
                    </p>
                  </div>
                </div>

                {/* Right side image block */}
                <div
                  className={`w-full md:w-1/2 ${
                    event.alignLeft ? 'order-1 md:order-2' : 'order-1 md:order-1'
                  }`}
                >
                  <div className="w-full h-64 sm:h-80 rounded-lg overflow-hidden shadow-2xl border border-[#C5A059]/10 relative group">
                    <img
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 select-none pointer-events-none"
                      src={event.image}
                      alt={event.title}
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Signature Philosophy (Three Cards) */}
      <section className="py-24 px-6 max-w-[1280px] mx-auto">
        <h3 className="font-serif text-2xl sm:text-3xl text-[#C5A059] text-center mb-16 uppercase tracking-[0.2em] font-bold">
          Pillars of Heritage
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="glass-card p-8 rounded-lg group hover:border-[#C5A059]/60 transition-all duration-500 flex flex-col shadow-lg border border-[#C5A059]/10"
            >
              <div className="w-16 h-16 rounded-full bg-[#C5A059]/10 flex items-center justify-center mb-6 border border-[#C5A059]/30 group-hover:bg-[#C5A059]/20 transition-colors shadow">
                {pillar.icon}
              </div>
              <h5 className="font-serif text-lg sm:text-xl text-[#F0F0F0] mb-4 uppercase font-bold tracking-wide">
                {pillar.title}
              </h5>
              <p className="font-sans text-sm text-zinc-400 leading-relaxed font-light">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Taste the History CTA Section */}
      <section className="py-20 relative overflow-hidden bg-[#0A0A0A] border-t border-[#C5A059]/10">
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <h3 className="font-serif text-3xl sm:text-5xl text-[#C5A059] mb-8 font-bold tracking-wider">
            TASTE THE HISTORY
          </h3>
          <p className="font-sans text-zinc-300 text-base sm:text-lg mb-12 max-w-2xl mx-auto leading-relaxed font-light">
            Reserve your seat at the royal table today and experience a historic fusion of science, culinary art, and timeless heritage.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
            <button
              onClick={() => onNavigate('reservations')}
              className="w-full sm:w-auto px-12 py-4 bg-[#C5A059] hover:bg-[#DFBA73] text-black font-sans font-bold text-xs uppercase tracking-widest rounded-sm transition-all shadow-xl active:scale-95 cursor-pointer"
            >
              Book a Table
            </button>
            <button
              onClick={() => onNavigate('menu')}
              className="w-full sm:w-auto px-12 py-4 border border-[#C5A059] text-[#C5A059] hover:bg-[#C5A059]/10 font-sans font-bold text-xs uppercase tracking-widest rounded-sm transition-all active:scale-95 cursor-pointer"
            >
              View Menu
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
