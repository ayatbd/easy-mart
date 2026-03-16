"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/modules/Container";
import Label from "@/components/modules/Label";

// --- Types ---
interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
  oldPrice: number;
  discount: number;
  rating: number;
  reviews: number;
}

// --- Mock Data ---
const flashSalesProducts: Product[] = [
  {
    id: "1",
    name: "HAVIT HV-G92 Gamepad",
    image: "/images/main/exploreProducts/image1.png",
    price: 120,
    oldPrice: 160,
    discount: 40,
    rating: 5,
    reviews: 88,
  },
  {
    id: "2",
    name: "AK-900 Wired Keyboard",
    image: "/images/main/exploreProducts/image2.png",
    price: 960,
    oldPrice: 1160,
    discount: 35,
    rating: 4,
    reviews: 75,
  },
  {
    id: "3",
    name: "IPS LCD Gaming Monitor",
    image: "/images/main/exploreProducts/image3.png",
    price: 370,
    oldPrice: 400,
    discount: 30,
    rating: 5,
    reviews: 99,
  },
  {
    id: "4",
    name: "S-Series Comfort Chair",
    image: "/images/main/exploreProducts/image4.png",
    price: 375,
    oldPrice: 400,
    discount: 25,
    rating: 4.5,
    reviews: 99,
  },
  {
    id: "5",
    name: "S-Series Comfort Chair 2",
    image: "/images/main/exploreProducts/image5.png",
    price: 375,
    oldPrice: 400,
    discount: 25,
    rating: 4.5,
    reviews: 99,
  },
  {
    id: "6",
    name: "S-Series Comfort Chair 2",
    image: "/images/main/exploreProducts/image6.png",
    price: 375,
    oldPrice: 400,
    discount: 25,
    rating: 4.5,
    reviews: 99,
  },
  {
    id: "7",
    name: "S-Series Comfort Chair 2",
    image: "/images/main/exploreProducts/image7.png",
    price: 375,
    oldPrice: 400,
    discount: 25,
    rating: 4.5,
    reviews: 99,
  },
  {
    id: "8",
    name: "S-Series Comfort Chair 2",
    image: "/images/main/exploreProducts/image8.png",
    price: 375,
    oldPrice: 400,
    discount: 25,
    rating: 4.5,
    reviews: 99,
  },
];

// Star Rating Component
const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-4 h-4 ${
            star <= rating
              ? "text-[#FFAD33]"
              : star - 0.5 === rating
                ? "text-[#FFAD33]"
                : "text-gray-300"
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
  const scrollRef = useRef<HTMLDivElement>(null);

  // --- Scroll Logic ---
  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300; // Width of card + gap roughly
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

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

        {/* --- Product Carousel --- */}
        <div
          ref={scrollRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {flashSalesProducts.map((product) => (
            <div
              key={product.id}
              className="min-w-65 snap-start group cursor-pointer"
            >
              <div className="relative bg-[#F5F5F5] rounded-md h-62.5 flex items-center justify-center overflow-hidden mb-4 p-4">
                <div className="absolute top-3 right-3 flex flex-col gap-2 z-10">
                  <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors shadow-sm">
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
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                      />
                    </svg>
                  </button>
                  <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors shadow-sm">
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

                <div className="relative w-full h-37.5">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain"
                  />
                </div>

                <button className="absolute bottom-0 left-0 w-full bg-black text-white py-2.5 font-medium translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  Add To Cart
                </button>
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-black font-medium truncate">
                  {product.name}
                </h3>
                <div className="flex gap-2">
                  <div className="flex items-center gap-3">
                    <span className="text-[#DB4444] font-medium">
                      ${product.price}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 mt-1">
                    <StarRating rating={product.rating} />
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
            className="bg-emerald-600 text-white px-12 py-2 rounded-sm font-medium hover:bg-emerald-700 transition-colors"
          >
            View All Products
          </Link>
        </div>

        {/* Add global style block just to hide the webkit scrollbar for a cleaner UI if tailwind plugin isn't installed */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
            .hide-scrollbar::-webkit-scrollbar {
              display: none;
            }
          `,
          }}
        />
      </section>
    </Container>
  );
}
