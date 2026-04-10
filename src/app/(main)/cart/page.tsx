"use client";

import React, { useState, useEffect } from "react"; // 1. Added useEffect
import Image from "next/image";
import Link from "next/link";
import { useGetCartItemsQuery } from "@/redux/api/cartApi";
import { useSelector } from "react-redux";

interface CartItem {
  _id: string; // MongoDB uses _id
  name: string;
  price: number;
  quantity: number;
  image: string;
  variant?: string;
}

export default function Cart() {
  const { user } = useSelector((state: any) => state.auth);

  // 2. Fetch data
  const { data: initialCartItems, isLoading } = useGetCartItemsQuery(
    user?.email,
    {
      skip: !user?.email,
    },
  );

  // 3. Initialize with an empty array [] to prevent .reduce() crash
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  // const [promoCode, setPromoCode] = useState("");

  // 4. Update local state when API data arrives
  useEffect(() => {
    if (initialCartItems) {
      setCartItems(initialCartItems);
    }
  }, [initialCartItems]);

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems((prev) =>
      prev.map((item) =>
        item._id === id ? { ...item, quantity: newQuantity } : item,
      ),
    );
  };

  const removeItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item._id !== id));
  };

  // 5. Calculate (cartItems is now guaranteed to be an array, even if empty)
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  const shipping = subtotal > 0 ? 15.0 : 0;
  const total = subtotal + shipping;

  // 6. Handle Loading State
  if (isLoading)
    return <div className="pt-40 text-center">Loading your cart...</div>;

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 min-h-screen">
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
                href="/"
                className="inline-flex items-center justify-center px-8 py-3 bg-emerald-600 text-white rounded-full font-medium"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            cartItems.map((item) => (
              <div
                key={item._id}
                className="flex flex-col sm:flex-row items-center gap-6 p-4 sm:p-6 bg-white border border-gray-200 rounded-3xl hover:shadow-sm"
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
                      <h3 className="text-lg font-semibold text-gray-900">
                        {item.name}
                      </h3>
                      <p className="text-sm text-gray-500 mt-1">
                        {item.variant || "Standard"}
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
                          updateQuantity(item._id, item.quantity - 1)
                        }
                        className="w-8 h-8 flex items-center justify-center rounded-full text-gray-600 hover:bg-white transition-all"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M20 12H4"
                          />
                        </svg>
                      </button>
                      <span className="w-10 text-center text-sm font-semibold">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item._id, item.quantity + 1)
                        }
                        className="w-8 h-8 flex items-center justify-center rounded-full text-gray-600 hover:bg-white transition-all"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 6v12m6-6H6"
                          />
                        </svg>
                      </button>
                    </div>

                    <button
                      onClick={() => removeItem(item._id)}
                      className="text-gray-400 hover:text-red-500 p-2"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Order Summary Section */}
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
                <span>Shipping</span>
                <span className="font-medium text-gray-900">
                  ${shipping.toFixed(2)}
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
              className="w-full bg-emerald-600 text-white rounded-full py-3 font-semibold text-lg flex items-center justify-center gap-2"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
