"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Label from "@/components/modules/Label";
import Container from "@/components/modules/Container";

interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
  oldPrice?: number;
  rating: number;
  reviews: number;
}

const bestSellingProducts: Product[] = [
  {
    id: "1",
    name: "The North Coat",
    image: "/images/main/best-selling/image1.png",
    price: 260,
    oldPrice: 360,
    rating: 5,
    reviews: 65,
  },
  {
    id: "2",
    name: "Gucci Duffle Bag",
    image: "/images/main/best-selling/image2.png",
    price: 960,
    oldPrice: 1160,
    rating: 4.5,
    reviews: 65,
  },
  {
    id: "3",
    name: "RGB Liquid CPU Cooler",
    image: "/images/main/best-selling/image3.png",
    price: 160,
    oldPrice: 170,
    rating: 4.5,
    reviews: 65,
  },
  {
    id: "4",
    name: "Small Bookshelf",
    image: "/images/main/best-selling/image4.png",
    price: 360,
    rating: 5,
    reviews: 65,
  },
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => {
        if (rating >= star) {
          return (
            <svg
              key={star}
              className="w-4 h-4 text-[#FFAD33]"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          );
        } else if (rating >= star - 0.5) {
          return (
            <svg
              key={star}
              className="w-4 h-4 text-[#FFAD33]"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <defs>
                <linearGradient
                  id={`half-${star}`}
                  x1="0"
                  x2="100%"
                  y1="0"
                  y2="0"
                >
                  <stop offset="50%" stopColor="currentColor" />
                  <stop offset="50%" stopColor="#D1D5DB" />
                </linearGradient>
              </defs>
              <path
                fill={`url(#half-${star})`}
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>
          );
        }
        return (
          <svg
            key={star}
            className="w-4 h-4 text-gray-300"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        );
      })}
    </div>
  );
};

export default function BestSellingProducts() {
  return (
    <Container>
      <section className="mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-10">
          <Label>Best Selling</Label>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <h2 className="text-3xl md:text-4xl font-bold text-black tracking-wider">
              Best Selling Products
            </h2>

            <Link
              href="/products"
              className="bg-emerald-600 text-white px-10 py-2 rounded-sm font-medium hover:bg-emerald-700 transition-colors whitespace-nowrap text-center"
            >
              View All
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {bestSellingProducts.map((product) => (
            <div
              key={product.id}
              className="group cursor-pointer flex flex-col"
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

                <div className="relative w-full h-40">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5 flex-1">
                <h3 className="text-black font-medium truncate">
                  {product.name}
                </h3>
                <div className="flex items-center gap-3">
                  <span className="text-[#DB4444] font-medium">
                    ${product.price}
                  </span>
                  {product.oldPrice && (
                    <span className="text-gray-500 line-through font-medium">
                      ${product.oldPrice}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2 mt-0.5">
                  <StarRating rating={product.rating} />
                  <span className="text-gray-500 text-sm font-semibold">
                    ({product.reviews})
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
}
