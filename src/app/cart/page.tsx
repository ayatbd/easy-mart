"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// --- Types ---
interface CartItem {
  id: string;
  name: string;
  variant: string;
  price: number;
  quantity: number;
  image: string;
}

// --- Initial Mock Data ---
const initialCartItems: CartItem[] = [
  {
    id: "1",
    name: "Sony PlayStation 5 Console",
    variant: "White / 1TB",
    price: 499.0,
    quantity: 1,
    image: "/ps5.png",
  },
  {
    id: "2",
    name: "JBL Boombox 3 Portable Speaker",
    variant: "Midnight Black",
    price: 399.0,
    quantity: 2,
    image: "/jbl-speaker.png",
  },
  {
    id: "3",
    name: "Gucci Intense Oud EDP",
    variant: "90ml",
    price: 185.0,
    quantity: 1,
    image: "/perfume.png",
  },
];

export default function Cart() {
  const [cartItems, setCartItems] = useState<CartItem[]>(initialCartItems);
  const [promoCode, setPromoCode] = useState("");

  // --- Handlers ---
  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item,
      ),
    );
  };

  const removeItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // --- Calculations ---
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  const shipping = subtotal > 0 ? 15.0 : 0; // Flat rate or free conditionally
  const total = subtotal + shipping;

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 min-h-screen">
      {/* Page Header */}
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
          Your Cart
        </h1>
        <p className="text-gray-500 mt-2">
          {cartItems.length} items in your bag.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-8 flex flex-col gap-6">
          {cartItems.length === 0 ? (
            <div className="text-center py-20 bg-gray-50 rounded-3xl border border-gray-100">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Your cart is empty
              </h2>
              <Link
                href="/shop"
                className="inline-flex items-center justify-center px-8 py-3 bg-emerald-600 text-white rounded-full font-medium hover:bg-emerald-700 transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row items-center gap-6 p-4 sm:p-6 bg-white border border-gray-200 rounded-3xl hover:shadow-sm transition-shadow"
              >
                <div className="relative w-full sm:w-32 h-32 bg-gray-50 rounded-2xl overflow-hidden shrink-0">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-contain p-2"
                  />
                </div>
                <div className="flex-1 flex flex-col w-full">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 leading-tight">
                        {item.name}
                      </h3>
                      <p className="text-sm text-gray-500 mt-1">
                        {item.variant}
                      </p>
                    </div>
                    <p className="text-lg font-bold text-gray-900">
                      ${item.price.toFixed(2)}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-6">
                    <div className="flex items-center bg-gray-50 border border-gray-200 rounded-full p-1">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="w-8 h-8 flex items-center justify-center rounded-full text-gray-600 hover:bg-white hover:shadow-sm transition-all"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="w-4 h-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 12h-15"
                          />
                        </svg>
                      </button>
                      <span className="w-10 text-center text-sm font-semibold text-gray-900">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="w-8 h-8 flex items-center justify-center rounded-full text-gray-600 hover:bg-white hover:shadow-sm transition-all"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="w-4 h-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 4.5v15m7.5-7.5h-15"
                          />
                        </svg>
                      </button>
                    </div>

                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-gray-400 hover:text-red-500 transition-colors p-2"
                      aria-label="Remove item"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="lg:col-span-4">
          <div className="bg-gray-50 rounded-3xl p-6 sm:p-8 sticky top-32">
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              Order Summary
            </h2>

            <div className="flex flex-col gap-4 text-sm text-gray-600 border-b border-gray-200 pb-6 mb-6">
              <div className="flex justify-between items-center">
                <span>Subtotal</span>
                <span className="font-medium text-gray-900">
                  ${subtotal.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span>Shipping Estimate</span>
                <span className="font-medium text-gray-900">
                  ${shipping.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span>Tax Estimate</span>
                <span className="font-medium text-gray-900">
                  Calculated at checkout
                </span>
              </div>
            </div>

            <div className="flex justify-between items-center mb-8">
              <span className="text-lg font-bold text-gray-900">Total</span>
              <span className="text-2xl font-black text-gray-900">
                ${total.toFixed(2)}
              </span>
            </div>

            <Link
              href="/checkout"
              // disabled={cartItems.length === 0}
              className="w-full bg-emerald-600 text-white rounded-full py-2.5 font-semibold text-lg hover:bg-emerald-700 hover:shadow-lg transition-all disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              Proceed to Checkout
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-sm font-medium text-gray-900 mb-3">
                Add a promo code
              </p>
              <div className="flex items-center bg-white rounded-full border border-gray-200 overflow-hidden focus-within:border-emerald-500 focus-within:ring-1 focus-within:ring-emerald-500 transition-all">
                <input
                  type="text"
                  placeholder="Enter code"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  className="w-full px-4 py-3 text-sm outline-none bg-transparent"
                />
                <button className="px-6 py-3 text-sm font-semibold text-emerald-600 hover:bg-emerald-50 transition-colors">
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
