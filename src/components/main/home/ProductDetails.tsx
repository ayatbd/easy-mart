"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// --- Types ---
interface Product {
  id: string;
  name: string;
  price: number;
  oldPrice?: number;
  rating: number;
  reviews: number;
  description: string;
  images: string[];
  colors: { name: string; hex: string }[];
  sizes?: string[];
  inStock: boolean;
}

// --- Mock Data ---
const product: Product = {
  id: "p1",
  name: "Sony DualSense Wireless Controller",
  price: 69.99,
  oldPrice: 74.99,
  rating: 4.8,
  reviews: 1245,
  description:
    "Discover a deeper, highly immersive gaming experience that brings the action to life in the palms of your hands. The DualSense wireless controller offers immersive haptic feedback, dynamic adaptive triggers, and a built-in microphone, all integrated into an iconic comfortable design.",
  images: [
    "/images/products/controller-1.png", // Replace with actual transparent PNGs
    "/images/products/controller-2.png",
    "/images/products/controller-3.png",
    "/images/products/controller-4.png",
  ],
  colors: [
    { name: "White", hex: "#FFFFFF" },
    { name: "Midnight Black", hex: "#171717" },
    { name: "Cosmic Red", hex: "#B91C1C" },
  ],
  sizes: ["Standard", "Edge Pro"],
  inStock: true,
};

// --- Star Rating Component ---
const StarRating = ({
  rating,
  reviews,
}: {
  rating: number;
  reviews: number;
}) => {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className={`w-4 h-4 ${
              star <= Math.floor(rating) ? "text-amber-400" : "text-gray-200"
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <span className="text-gray-500 text-sm font-medium">
        ({reviews} Reviews)
      </span>
    </div>
  );
};

export default function ProductDetails() {
  const [mainImage, setMainImage] = useState(product.images[0]);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(product.colors[0].name);
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] || "");

  const handleQuantityChange = (type: "inc" | "dec") => {
    if (type === "dec" && quantity > 1) setQuantity(quantity - 1);
    if (type === "inc" && quantity < 10) setQuantity(quantity + 1);
  };

  return (
    // pt-32 accounts for the fixed header
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 min-h-screen">
      {/* Breadcrumbs */}
      <nav className="mb-8 text-sm font-medium text-gray-500 flex items-center gap-2">
        <Link href="/" className="hover:text-emerald-600 transition-colors">
          Home
        </Link>
        <span>/</span>
        <Link
          href="/category/gaming"
          className="hover:text-emerald-600 transition-colors"
        >
          Gaming
        </Link>
        <span>/</span>
        <span className="text-gray-900">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* --- Left Column: Image Gallery --- */}
        <div className="lg:col-span-7 flex flex-col-reverse md:flex-row gap-4 md:gap-6 h-max">
          {/* Thumbnails */}
          <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-y-auto hide-scrollbar w-full md:w-24 flex-shrink-0">
            {product.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setMainImage(img)}
                className={`relative w-20 h-20 md:w-full md:h-24 bg-gray-50 rounded-2xl overflow-hidden border-2 transition-all ${
                  mainImage === img
                    ? "border-emerald-500 ring-2 ring-emerald-500/20"
                    : "border-transparent hover:border-gray-200"
                }`}
              >
                <Image
                  src={img}
                  alt={`Thumbnail ${idx + 1}`}
                  fill
                  className="object-contain p-2"
                />
              </button>
            ))}
          </div>

          {/* Main Image */}
          <div className="relative w-full h-87.5 sm:h-112.5 md:h-137.5 bg-gray-50 rounded-3xl overflow-hidden flex items-center justify-center">
            <Image
              src={mainImage}
              alt={product.name}
              fill
              className="object-contain p-8 transition-opacity duration-500 ease-in-out"
              priority
            />
          </div>
        </div>

        {/* --- Right Column: Product Info --- */}
        <div className="lg:col-span-5 flex flex-col">
          {/* Title & Rating */}
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-3">
            {product.name}
          </h1>
          <div className="flex items-center gap-4 mb-6">
            <StarRating rating={product.rating} reviews={product.reviews} />
            <span className="text-gray-300">|</span>
            {product.inStock ? (
              <span className="flex items-center gap-2 text-emerald-600 font-medium text-sm">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                In Stock
              </span>
            ) : (
              <span className="text-red-500 font-medium text-sm">
                Out of Stock
              </span>
            )}
          </div>

          {/* Price */}
          <div className="flex items-end gap-4 mb-6">
            <span className="text-3xl font-black text-gray-900">
              ${product.price.toFixed(2)}
            </span>
            {product.oldPrice && (
              <span className="text-xl text-gray-400 line-through mb-1 font-medium">
                ${product.oldPrice.toFixed(2)}
              </span>
            )}
          </div>

          <p className="text-gray-600 leading-relaxed mb-8">
            {product.description}
          </p>

          <hr className="border-gray-100 mb-8" />

          {/* Variants: Colors */}
          <div className="mb-6">
            <span className="block text-sm font-semibold text-gray-900 mb-3">
              Color:{" "}
              <span className="text-gray-500 font-normal ml-1">
                {selectedColor}
              </span>
            </span>
            <div className="flex items-center gap-3">
              {product.colors.map((color) => (
                <button
                  key={color.name}
                  onClick={() => setSelectedColor(color.name)}
                  className={`relative w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                    selectedColor === color.name
                      ? "ring-2 ring-emerald-500 ring-offset-2"
                      : "ring-1 ring-gray-200 hover:scale-110"
                  }`}
                  style={{ backgroundColor: color.hex }}
                  aria-label={`Select ${color.name}`}
                />
              ))}
            </div>
          </div>

          {/* Variants: Size/Edition */}
          {product.sizes && (
            <div className="mb-8">
              <span className="block text-sm font-semibold text-gray-900 mb-3">
                Edition
              </span>
              <div className="flex flex-wrap items-center gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-5 py-2.5 rounded-xl border font-medium text-sm transition-all ${
                      selectedSize === size
                        ? "border-emerald-600 bg-emerald-50 text-emerald-700 shadow-sm"
                        : "border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:bg-gray-50"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Actions: Quantity & Add to Cart */}
          <div className="flex items-center gap-4 mb-10">
            {/* Quantity Selector */}
            <div className="flex items-center bg-gray-50 border border-gray-200 rounded-2xl h-14">
              <button
                onClick={() => handleQuantityChange("dec")}
                className="w-12 h-full flex items-center justify-center text-gray-600 hover:bg-gray-100 hover:text-gray-900 rounded-l-2xl transition-colors"
              >
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
                    d="M19.5 12h-15"
                  />
                </svg>
              </button>
              <span className="w-12 text-center font-bold text-gray-900 text-lg">
                {quantity}
              </span>
              <button
                onClick={() => handleQuantityChange("inc")}
                className="w-12 h-full flex items-center justify-center text-emerald-600 hover:bg-emerald-50 hover:text-emerald-700 rounded-r-2xl transition-colors"
              >
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
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </button>
            </div>

            {/* Add to Cart Button */}
            <button className="flex-1 bg-emerald-600 text-white h-14 rounded-2xl font-semibold text-lg hover:bg-emerald-700 hover:shadow-lg transition-all flex items-center justify-center gap-2">
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
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
              Add to Cart
            </button>

            {/* Wishlist Button */}
            <button className="w-14 h-14 flex items-center justify-center bg-white border border-gray-200 rounded-2xl text-gray-500 hover:text-red-500 hover:border-red-200 hover:bg-red-50 transition-all">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
            </button>
          </div>

          {/* Delivery & Returns Service Cards */}
          <div className="flex flex-col border border-gray-200 rounded-3xl overflow-hidden bg-white">
            <div className="flex items-center gap-4 p-5 sm:p-6 border-b border-gray-100">
              <div className="text-gray-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Free Delivery</h4>
                <Link
                  href="#"
                  className="text-sm text-gray-500 underline underline-offset-2 hover:text-emerald-600 transition-colors"
                >
                  Enter your postal code for Delivery Availability
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-4 p-5 sm:p-6">
              <div className="text-gray-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Return Delivery</h4>
                <p className="text-sm text-gray-500">
                  Free 30 Days Delivery Returns.{" "}
                  <Link
                    href="#"
                    className="underline underline-offset-2 hover:text-emerald-600 transition-colors"
                  >
                    Details
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
