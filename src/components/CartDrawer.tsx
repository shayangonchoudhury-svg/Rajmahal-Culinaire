/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag, CreditCard } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (itemId: string, quantity: number) => void;
  onRemoveItem: (itemId: string) => void;
  onClearCart: () => void;
}

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}: CartDrawerProps) {
  const [checkingOut, setCheckingOut] = useState(false);
  const [checkoutComplete, setCheckoutComplete] = useState(false);

  if (!isOpen) return null;

  const subtotal = cartItems.reduce((acc, item) => acc + item.menuItem.price * item.quantity, 0);
  const gst = Math.round(subtotal * 0.18); // 18% GST for fine dining.
  const serviceCharge = Math.round(subtotal * 0.1); // 10% Service Charge.
  const total = subtotal + gst + serviceCharge;

  const handleCheckout = () => {
    setCheckingOut(true);
    setTimeout(() => {
      setCheckingOut(false);
      setCheckoutComplete(true);
      onClearCart();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end font-sans">
      {/* Backdrop */}
      <div
        id="cart-drawer-backdrop"
        onClick={() => {
          if (!checkingOut) onClose();
        }}
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
      />

      {/* Drawer Body */}
      <div
        id="cart-drawer-body"
        className="relative w-full max-w-md h-full bg-[#160c00] border-l border-[#e9c349]/20 flex flex-col justify-between shadow-2xl z-10 animate-slide-in"
      >
        {/* Header */}
        <div className="p-6 border-b border-[#e9c349]/20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-5 h-5 text-[#e9c349]" />
            <h3 className="font-serif text-lg text-[#e9c349] tracking-widest uppercase font-bold">
              Royal Order
            </h3>
            {cartItems.length > 0 && (
              <span className="bg-[#e9c349]/10 text-[#e9c349] text-xs px-2 py-0.5 rounded-full font-semibold border border-[#e9c349]/20">
                {cartItems.length}
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            disabled={checkingOut}
            className="text-[#cec3d3] hover:text-[#e9c349] transition-colors cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content body */}
        <div className="flex-grow overflow-y-auto p-6 space-y-6">
          {checkoutComplete ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
              <div className="w-16 h-16 rounded-full bg-green-500/15 border border-green-500/30 flex items-center justify-center text-green-400">
                <ShoppingBag className="w-10 h-10" />
              </div>
              <h4 className="font-serif text-xl font-bold text-[#f8dfbb]">Order Transmitted</h4>
              <p className="text-xs text-[#cec3d3] font-light max-w-xs leading-relaxed">
                Your culinary selections have been dispatched to Chef Elena's prep line. Our stewards will coordinate serving times with your table reservation.
              </p>
              <button
                onClick={() => {
                  setCheckoutComplete(false);
                  onClose();
                }}
                className="mt-6 px-6 py-2 border border-[#e9c349] text-[#e9c349] hover:bg-[#e9c349]/10 rounded-sm text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
              >
                Continue Journey
              </button>
            </div>
          ) : cartItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
              <ShoppingBag className="w-12 h-12 text-[#e9c349]/30" />
              <h4 className="font-serif text-base font-bold text-[#f8dfbb]/50 uppercase tracking-widest">
                Order is empty
              </h4>
              <p className="text-xs text-[#cec3d3]/40 font-light max-w-[240px]">
                Explore our Shahi Dastarkhwan menu and add items to your royal dining plan.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.menuItem.id}
                  className="p-4 bg-[#2a1d07]/40 border border-[#e9c349]/10 rounded-lg flex items-center justify-between gap-4 group"
                >
                  <div className="space-y-1 flex-grow">
                    <h5 className="font-serif text-sm font-bold text-[#f8dfbb]">
                      {item.menuItem.name}
                    </h5>
                    <p className="text-xs text-[#e9c349] font-medium">
                      ₹{item.menuItem.price.toLocaleString('en-IN')} each
                    </p>
                  </div>

                  {/* Quantity adjustment & Delete */}
                  <div className="flex items-center gap-3 shrink-0">
                    <div className="flex items-center bg-[#1d1101]/60 border border-[#e9c349]/25 rounded overflow-hidden">
                      <button
                        onClick={() => onUpdateQuantity(item.menuItem.id, item.quantity - 1)}
                        className="p-1.5 text-[#e9c349] hover:bg-[#e9c349]/10 transition-colors cursor-pointer"
                        title="Reduce quantity"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="px-2 text-xs text-[#f8dfbb] font-bold min-w-[20px] text-center select-none">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(item.menuItem.id, item.quantity + 1)}
                        className="p-1.5 text-[#e9c349] hover:bg-[#e9c349]/10 transition-colors cursor-pointer"
                        title="Increase quantity"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <button
                      onClick={() => onRemoveItem(item.menuItem.id)}
                      className="p-1.5 text-[#cec3d3]/40 hover:text-red-400 rounded hover:bg-red-500/10 transition-colors cursor-pointer"
                      title="Remove item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer Summary / Checkout CTA */}
        {cartItems.length > 0 && !checkoutComplete && (
          <div className="p-6 border-t border-[#e9c349]/20 bg-[#1d1101]/85 space-y-4">
            <div className="space-y-2 text-xs sm:text-sm">
              <div className="flex justify-between text-[#cec3d3]">
                <span className="font-light">Subtotal</span>
                <span>₹{subtotal.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between text-[#cec3d3]">
                <span className="font-light">GST (18%)</span>
                <span>₹{gst.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between text-[#cec3d3]">
                <span className="font-light">Imperial Service (10%)</span>
                <span>₹{serviceCharge.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between text-[#e9c349] pt-2 border-t border-[#e9c349]/10 font-bold text-base">
                <span>Total Amount</span>
                <span>₹{total.toLocaleString('en-IN')}</span>
              </div>
            </div>

            <button
              onClick={handleCheckout}
              disabled={checkingOut}
              className="w-full py-4 bg-[#e9c349] hover:bg-[#ffe088] disabled:bg-[#e9c349]/30 disabled:cursor-not-allowed text-[#1d1101] font-sans font-bold text-xs uppercase tracking-widest rounded transition-all duration-300 flex items-center justify-center gap-2.5 shadow-xl cursor-pointer"
            >
              {checkingOut ? (
                <>
                  <div className="w-4.5 h-4.5 border-2 border-[#1d1101] border-t-transparent rounded-full animate-spin" />
                  <span>Transmitting Order...</span>
                </>
              ) : (
                <>
                  <CreditCard className="w-4 h-4" />
                  <span>Confirm Royal Feast</span>
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
