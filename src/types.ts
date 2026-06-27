/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type Screen = 'home' | 'menu' | 'heritage' | 'reservations';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number; // Stored in Rupees (INR).
  goldTokens?: number; // Optional Gold Token equivalent or price.
  tags: string[];
  image?: string;
  category: 'peshkash' | 'khas-khana' | 'meetha' | 'special';
}

export interface CartItem {
  menuItem: MenuItem;
  quantity: number;
}

export interface Reservation {
  id: string;
  guests: number;
  date: string;
  seating: 'zen-garden' | 'durbar-hall' | 'jali-alcove';
  name: string;
  email: string;
  phone: string;
  specialRequests?: string;
  status: 'Pending' | 'Confirmed' | 'Declined';
  createdAt: string;
}
