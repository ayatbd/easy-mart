"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/modules/Container";
import Label from "@/components/modules/Label";
import { useGetProductsQuery } from "@/redux/api/exploreProductsApi";

// --- Types (Updated to match MongoDB fields) ---
interface Product {
  _id: string;
  name: string;
  image: string;
  original_price: number; // changed from price
  old_price: number; // changed from oldPrice
  discount_percent: number; // changed from discount
  ratings: number; // changed from rating
  reviews: number;
}

// Star Rating Component
const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-4 h-4 ${
            star <= Math.round(rating) ? "text-[#FFAD33]" : "text-gray-300"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

export default function ExploreProducts() {
  // Fetching data
  const { data: productsResponse, isLoading } = useGetProductsQuery({
    page: 1,
    limit: 10,
  });

  // Adjusted to handle the common Redux RTK Query response structure
  const products: Product[] = productsResponse?.data || [];

  const scrollRef = useRef<HTMLDivElement>(null);

  // --- Scroll Logic ---
  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  if (isLoading) {
    return (
      <div className="py-20 text-center font-bold">Loading Products...</div>
    );
  }

  return (
    <Container>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-8">
          <Label>Our Products</Label>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="flex flex-col md:flex-row md:items-end gap-10 md:gap-20">
              <h2 className="text-3xl md:text-4xl font-bold text-black tracking-wider">
                Explore Our Products
              </h2>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => scroll("left")}
                className="w-11 h-11 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
                aria-label="Scroll Left"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                  />
                </svg>
              </button>
              <button
                onClick={() => scroll("right")}
                className="w-11 h-11 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
                aria-label="Scroll Right"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* --- Product Carousel (Rectified Grid to Flex for Scrolling) --- */}
        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-6"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {products.map((product: Product) => (
            <div
              key={product._id}
              className="min-w-67.5 max-w-67.5 snap-start group cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative bg-[#F5F5F5] rounded-md h-62.5 flex items-center justify-center overflow-hidden mb-4 p-4">
                {/* Wishlist/View Icons */}
                <div className="absolute top-3 right-3 flex flex-col gap-2 z-10">
                  <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-[#DB4444] hover:text-white transition-all shadow-sm">
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
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                      />
                    </svg>
                  </button>
                  <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors shadow-sm cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="black"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                    </svg>
                  </button>
                </div>

                <div className="relative w-full h-full">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="w-full h-full mix-blend-multiply"
                  />
                </div>

                {/* Add To Cart Hover Button */}
                <button className="absolute bottom-0 left-0 w-full bg-black text-white py-3 font-medium translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  Add To Cart
                </button>
              </div>

              {/* Product Info */}
              <div className="flex flex-col gap-1">
                <h3 className="text-black font-bold truncate">
                  {product.name}
                </h3>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-3">
                    <span className="text-[#DB4444] font-bold">
                      ${product.original_price}
                    </span>
                    <span className="text-gray-500 line-through text-sm">
                      ${product.old_price}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <StarRating rating={product.ratings} />
                    <span className="text-gray-500 text-sm font-semibold">
                      ({product.reviews})
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/products"
            className="bg-[#DB4444] text-white px-12 py-4 rounded font-medium hover:bg-red-700 transition-colors"
          >
            View All Products
          </Link>
        </div>

        <style jsx global>{`
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </section>
    </Container>
  );
}
