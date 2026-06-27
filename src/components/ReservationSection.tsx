/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Users, Calendar, ArrowRight, CheckCircle2, MapPin, Clock, X, Trash2 } from 'lucide-react';
import { Reservation } from '../types';

interface ReservationSectionProps {
  reservations: Reservation[];
  onAddReservation: (reservation: Omit<Reservation, 'id' | 'createdAt' | 'status'>) => void;
  onCancelReservation: (id: string) => void;
}

export default function ReservationSection({
  reservations,
  onAddReservation,
  onCancelReservation,
}: ReservationSectionProps) {
  const [guests, setGuests] = useState<number>(2);
  const [date, setDate] = useState<string>('');
  const [seating, setSeating] = useState<'zen-garden' | 'durbar-hall' | 'jali-alcove'>('zen-garden');
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [specialRequests, setSpecialRequests] = useState<string>('');
  const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false);
  const [lastSubmitted, setLastSubmitted] = useState<Reservation | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!date || !name || !email || !phone) {
      alert('Please fill in all required fields.');
      return;
    }

    // Call state handler in parent
    onAddReservation({
      guests,
      date,
      seating,
      name,
      email,
      phone,
      specialRequests,
    });

    // Save for locally displaying success summary
    const newRes: Reservation = {
      id: Math.random().toString(36).substring(7),
      guests,
      date,
      seating,
      name,
      email,
      phone,
      specialRequests,
      status: 'Confirmed', // Imperial concierge instantly pre-confirms!
      createdAt: new Date().toISOString(),
    };

    setLastSubmitted(newRes);
    setShowSuccessModal(true);

    // Reset Form
    setDate('');
    setName('');
    setEmail('');
    setPhone('');
    setSpecialRequests('');
  };

  const getSeatingLabel = (key: string) => {
    switch (key) {
      case 'zen-garden':
        return 'The Zen Garden';
      case 'durbar-hall':
        return 'The Durbar Hall';
      case 'jali-alcove':
        return 'The Jali Alcove';
      default:
        return key;
    }
  };

  return (
    <div id="reservation-view" className="pt-32 pb-24 px-6 max-w-[1280px] mx-auto">
      {/* Hero Header */}
      <section className="text-center mb-16 space-y-4">
        <span className="font-sans font-semibold text-xs text-[#C5A059] uppercase tracking-[0.3em] block mb-2">
          Imperial Hospitality
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-[#F0F0F0] tracking-wide">
          Secure Your Seat at the Royal Table
        </h2>
        <p className="font-sans text-sm sm:text-base md:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed font-light">
          Experience the zenith of Rajasthani fine dining. From intimate courtyard settings to the grandeur of our halls, your journey through heritage begins here.
        </p>
      </section>

      {/* Main reservation workspace */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left column: Reservation Form */}
        <div className="lg:col-span-7 glass-panel bg-[#0A0A0A] border border-[#C5A059]/15 p-6 sm:p-10 md:p-12 rounded-xl relative overflow-hidden shadow-2xl">
          {/* Decorative gold backdrop badge */}
          <div className="absolute top-0 right-0 w-32 h-32 opacity-10 pointer-events-none">
            <svg className="w-full h-full text-[#C5A059]" viewBox="0 0 100 100">
              <path d="M50 0 L100 50 L50 100 L0 50 Z" fill="currentColor" />
            </svg>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
            {/* Row 1: Guests and Date */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Number of Guests */}
              <div className="space-y-2">
                <label className="font-sans font-semibold text-xs text-[#C5A059] uppercase tracking-wider block">
                  Number of Guests
                </label>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 -translate-y-1/2 text-[#C5A059]/60 w-5 h-5 pointer-events-none" />
                  <select
                    value={guests}
                    onChange={(e) => setGuests(Number(e.target.value))}
                    className="w-full bg-[#121212] border-b border-zinc-700 py-3 pl-11 pr-4 text-[#F0F0F0] font-sans text-sm focus:border-[#C5A059] focus:outline-none appearance-none cursor-pointer rounded-sm"
                  >
                    <option value={1} className="bg-black text-[#F0F0F0]">1 Guest</option>
                    <option value={2} className="bg-black text-[#F0F0F0]">2 Guests</option>
                    <option value={3} className="bg-black text-[#F0F0F0]">3 Guests</option>
                    <option value={4} className="bg-black text-[#F0F0F0]">4 Guests</option>
                    <option value={5} className="bg-black text-[#F0F0F0]">5 Guests</option>
                    <option value={6} className="bg-black text-[#F0F0F0]">6+ Guests (Private Suite)</option>
                  </select>
                </div>
              </div>

              {/* Preferred Date */}
              <div className="space-y-2">
                <label className="font-sans font-semibold text-xs text-[#C5A059] uppercase tracking-wider block">
                  Preferred Date
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-[#C5A059]/60 w-5 h-5 pointer-events-none" />
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full bg-[#121212] border-b border-zinc-700 py-3 pl-11 pr-4 text-[#F0F0F0] font-sans text-sm focus:border-[#C5A059] focus:outline-none cursor-pointer rounded-sm"
                  />
                </div>
              </div>
            </div>

            {/* Atmosphere Selection */}
            <div className="space-y-4">
              <label className="font-sans font-semibold text-xs text-[#C5A059] uppercase tracking-wider block">
                Choose Your Seating Atmosphere
              </label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Option 1: Zen Garden */}
                <button
                  type="button"
                  onClick={() => setSeating('zen-garden')}
                  className={`p-4 border rounded-lg text-left transition-all duration-300 cursor-pointer ${
                    seating === 'zen-garden'
                      ? 'border-[#C5A059] bg-[#C5A059]/10 shadow-[0_0_15px_rgba(197,160,89,0.1)]'
                      : 'border-zinc-800 hover:border-[#C5A059]/40 bg-transparent'
                  }`}
                >
                  <h4 className="font-serif text-sm font-bold text-[#F0F0F0] mb-1">
                    The Zen Garden
                  </h4>
                  <p className="text-[11px] text-zinc-400 leading-relaxed font-light">
                    Open-air serenity with moonlit fountains.
                  </p>
                </button>

                {/* Option 2: Durbar Hall */}
                <button
                  type="button"
                  onClick={() => setSeating('durbar-hall')}
                  className={`p-4 border rounded-lg text-left transition-all duration-300 cursor-pointer ${
                    seating === 'durbar-hall'
                      ? 'border-[#C5A059] bg-[#C5A059]/10 shadow-[0_0_15px_rgba(197,160,89,0.1)]'
                      : 'border-zinc-800 hover:border-[#C5A059]/40 bg-transparent'
                  }`}
                >
                  <h4 className="font-serif text-sm font-bold text-[#F0F0F0] mb-1">
                    The Durbar Hall
                  </h4>
                  <p className="text-[11px] text-zinc-400 leading-relaxed font-light">
                    Imperial grandeur under crystal chandeliers.
                  </p>
                </button>

                {/* Option 3: Jali Alcove */}
                <button
                  type="button"
                  onClick={() => setSeating('jali-alcove')}
                  className={`p-4 border rounded-lg text-left transition-all duration-300 cursor-pointer ${
                    seating === 'jali-alcove'
                      ? 'border-[#C5A059] bg-[#C5A059]/10 shadow-[0_0_15px_rgba(197,160,89,0.1)]'
                      : 'border-zinc-800 hover:border-[#C5A059]/40 bg-transparent'
                  }`}
                >
                  <h4 className="font-serif text-sm font-bold text-[#F0F0F0] mb-1">
                    The Jali Alcove
                  </h4>
                  <p className="text-[11px] text-zinc-400 leading-relaxed font-light">
                    Private, candle-lit dining behind screens.
                  </p>
                </button>
              </div>
            </div>

            {/* Personal Details */}
            <div className="space-y-8">
              {/* Full Name */}
              <div className="relative">
                <label className="font-sans font-semibold text-xs text-[#C5A059] uppercase tracking-wider block mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Maharaja/Maharani Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-[#121212]/50 border-b border-zinc-700 py-3 text-[#F0F0F0] font-sans text-sm focus:border-[#C5A059] focus:outline-none placeholder-zinc-600"
                />
              </div>

              {/* Email and Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative">
                  <label className="font-sans font-semibold text-xs text-[#C5A059] uppercase tracking-wider block mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="contact@royal.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#121212]/50 border-b border-zinc-700 py-3 text-[#F0F0F0] font-sans text-sm focus:border-[#C5A059] focus:outline-none placeholder-zinc-600"
                  />
                </div>

                <div className="relative">
                  <label className="font-sans font-semibold text-xs text-[#C5A059] uppercase tracking-wider block mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 XXXX XXX XXX"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-[#121212]/50 border-b border-zinc-700 py-3 text-[#F0F0F0] font-sans text-sm focus:border-[#C5A059] focus:outline-none placeholder-zinc-600"
                  />
                </div>
              </div>
            </div>

            {/* Special requests */}
            <div className="relative">
              <label className="font-sans font-semibold text-xs text-[#C5A059] uppercase tracking-wider block mb-1">
                Special Requirements (Dietary, Occasions)
              </label>
              <textarea
                placeholder="Tell us how we can make your evening exceptional..."
                value={specialRequests}
                onChange={(e) => setSpecialRequests(e.target.value)}
                rows={2}
                className="w-full bg-[#121212]/50 border-b border-zinc-700 py-3 text-[#F0F0F0] font-sans text-sm focus:border-[#C5A059] focus:outline-none resize-none placeholder-zinc-600"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full py-5 bg-[#C5A059] hover:bg-[#DFBA73] text-black font-sans font-bold text-xs uppercase tracking-[0.2em] rounded-md hover:shadow-[0_0_20px_rgba(197,160,89,0.4)] transition-all duration-500 flex items-center justify-center gap-3 active:scale-[0.98] cursor-pointer"
              >
                <span>Request Reservation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>

        {/* Right column: Info & Bookings list */}
        <div className="lg:col-span-5 space-y-8">
          {/* Active Bookings Log */}
          {reservations.length > 0 && (
            <div className="glass-panel p-6 sm:p-8 rounded-xl border border-[#C5A059]/15 bg-black/40 shadow-xl">
              <h4 className="font-sans font-bold text-xs text-[#C5A059] uppercase tracking-widest mb-6 flex items-center justify-between">
                <span>Your Active Bookings</span>
                <span className="bg-[#C5A059]/10 text-[#C5A059] px-2 py-0.5 rounded-full text-[10px]">
                  {reservations.length} Active
                </span>
              </h4>

              <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2">
                {reservations.map((res) => (
                  <div
                    key={res.id}
                    className="p-4 bg-[#121212] rounded-lg border border-[#C5A059]/15 flex items-center justify-between gap-4 group"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-serif font-bold text-sm text-[#F0F0F0]">
                          {res.name}
                        </span>
                        <span className="text-[10px] bg-green-500/10 text-green-400 px-1.5 py-0.5 rounded font-sans uppercase">
                          Confirmed
                        </span>
                      </div>
                      <div className="text-xs text-zinc-400 flex flex-wrap gap-x-3 gap-y-1 font-light">
                        <span className="flex items-center gap-1">
                          <Users className="w-3 h-3 text-[#C5A059]" /> {res.guests} Guests
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-[#C5A059]" /> {res.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-[#C5A059]" /> {getSeatingLabel(res.seating)}
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() => onCancelReservation(res.id)}
                      className="p-2 text-zinc-500 hover:text-red-400 rounded hover:bg-red-500/10 transition-colors active:scale-90 cursor-pointer"
                      title="Cancel Reservation"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Ambience Preview Card */}
          <div className="relative rounded-xl overflow-hidden aspect-[4/5] shadow-2xl group border border-[#C5A059]/20">
            <img
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 select-none pointer-events-none"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMWy71gLVZekZlKrRWYnjwjoKYh1XIwt2om5CrCHr80Vzw4ZZL7wcW5uzNvBD31D8y7Lrvgwa1wSK0IGj4XRiZ5tDIai53mRxdC3aI8OaZGOT8HbX5dhVyA6hsBuepmX-cBuaxi2Z_qB4LRW6bgxeK5Sbo0EN7ZtVd-QW2hDW37F7jfIGATT7lhEB6o8ctZrHl3TuHu36--qKJf5Hi_N1xtjaaGlOGgoHda8mdYsjPcE88GEgdFjlHb760YyfyjGEfOdSVdcHTyw"
              alt="Golden candles and luxurious pillows of Durbar Hall"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-90" />
            <div className="absolute bottom-0 p-8 space-y-2">
              <h3 className="font-serif text-xl sm:text-2xl text-[#C5A059] font-bold">
                The Royal Experience
              </h3>
              <p className="font-sans text-xs sm:text-sm text-zinc-300 leading-relaxed font-light">
                Every reservation includes a private tour of our heritage spice cellar and a complimentary royal amuse-bouche prepared live at your table.
              </p>
            </div>
          </div>

          {/* Policies Glass Card */}
          <div className="glass-panel p-6 sm:p-8 rounded-xl space-y-6 bg-[#0A0A0A]/60 border border-zinc-800">
            <h4 className="font-sans font-bold text-xs text-[#C5A059] uppercase tracking-widest border-b border-[#C5A059]/20 pb-2">
              Etiquette &amp; Policies
            </h4>
            <ul className="space-y-4 text-xs sm:text-sm">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-[#C5A059] w-5 h-5 shrink-0 mt-0.5" />
                <p className="font-sans text-zinc-400 leading-normal">
                  <strong className="text-[#F0F0F0] font-semibold">Dress Code:</strong> Smart Casual or Traditional Heritage wear is highly preferred.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-[#C5A059] w-5 h-5 shrink-0 mt-0.5" />
                <p className="font-sans text-zinc-400 leading-normal">
                  <strong className="text-[#F0F0F0] font-semibold">Punctuality:</strong> Tables are held for 20 minutes past your reservation time.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-[#C5A059] w-5 h-5 shrink-0 mt-0.5" />
                <p className="font-sans text-zinc-400 leading-normal">
                  <strong className="text-[#F0F0F0] font-semibold">Cancellations:</strong> Please notify us 24 hours in advance for parties of 6+.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Success Modal / Confirmed reservation screen overlay */}
      {showSuccessModal && lastSubmitted && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            onClick={() => setShowSuccessModal(false)}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          <div className="relative glass-panel bg-[#080808] border-2 border-[#C5A059] rounded-xl p-8 max-w-lg w-full text-center z-10 shadow-2xl animate-scale-up space-y-6">
            <button
              onClick={() => setShowSuccessModal(false)}
              className="absolute top-4 right-4 text-zinc-400 hover:text-[#C5A059] transition-colors cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center mx-auto text-green-400">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <span className="font-sans text-xs text-[#C5A059] uppercase tracking-widest font-semibold block">
                Booking Pre-Confirmed
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#F0F0F0] font-bold">
                Royal Table Secured
              </h3>
              <p className="font-sans text-xs sm:text-sm text-zinc-400 font-light max-w-sm mx-auto">
                Welcome to the Palace Circle. A confirmation text and email have been dispatched to your court.
              </p>
            </div>

            {/* Booking Details Card */}
            <div className="bg-[#121212] border border-[#C5A059]/15 rounded-lg p-5 text-left space-y-3 font-sans text-xs sm:text-sm">
              <div className="flex justify-between border-b border-[#C5A059]/10 pb-2">
                <span className="text-zinc-500 font-light">Host Name</span>
                <span className="text-[#F0F0F0] font-semibold">{lastSubmitted.name}</span>
              </div>
              <div className="flex justify-between border-b border-[#C5A059]/10 pb-2">
                <span className="text-zinc-500 font-light">Party Size</span>
                <span className="text-[#F0F0F0] font-semibold flex items-center gap-1">
                  <Users className="w-4.5 h-4.5 text-[#C5A059]" /> {lastSubmitted.guests} Guests
                </span>
              </div>
              <div className="flex justify-between border-b border-[#C5A059]/10 pb-2">
                <span className="text-zinc-500 font-light">Preferred Date</span>
                <span className="text-[#F0F0F0] font-semibold flex items-center gap-1">
                  <Calendar className="w-4.5 h-4.5 text-[#C5A059]" /> {lastSubmitted.date}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500 font-light">Atmosphere</span>
                <span className="text-[#C5A059] font-bold flex items-center gap-1">
                  <MapPin className="w-4.5 h-4.5 text-[#C5A059]" /> {getSeatingLabel(lastSubmitted.seating)}
                </span>
              </div>
            </div>

            <button
              onClick={() => setShowSuccessModal(false)}
              className="w-full py-3 bg-[#C5A059] hover:bg-[#DFBA73] text-black font-sans font-bold text-xs uppercase tracking-widest rounded transition-colors cursor-pointer"
            >
              Close Confirmation
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
