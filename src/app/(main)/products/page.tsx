"use client";

import Container from "@/components/modules/Container";
import Link from "next/link";
import Image from "next/image";
import { useGetProductsQuery } from "@/redux/api/exploreProductsApi";
import { useState } from "react";

interface Product {
  _id: string;
  name: string;
  image: string;
  original_price: number;
  old_price: number;
  discount_percent: number;
  ratings: number;
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

export default function AllProductsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 12; // Products per page

  const { data: productsResponse, isLoading } = useGetProductsQuery({
    page: currentPage,
    limit: limit,
  });

  const products: Product[] = productsResponse?.data || [];

  const totalPages = productsResponse?.totalPages || 1;

  if (isLoading)
    return <div className="py-20 text-center">Loading Gallery...</div>;

  return (
    <Container>
      <div className="py-20">
        <h1 className="text-3xl font-bold mb-8">
          All Products ({products.length})
        </h1>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
          {products.map((product) => (
            <div
              key={product._id}
              className="min-w-67.5 max-w-67.5 snap-start group"
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
                  <Link
                    href={`/products/${product._id}`}
                    className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors shadow-sm cursor-pointer"
                  >
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
                  </Link>
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
        {/* --- PAGINATION CONTROLS --- */}
        <div className="mt-16 flex justify-center items-center gap-4">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-6 py-2 border rounded-md font-medium transition-colors hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Previous
          </button>

          <div className="flex gap-2">
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={`w-10 h-10 rounded-md border font-medium transition-all ${
                  currentPage === index + 1
                    ? "bg-[#DB4444] text-white border-[#DB4444]"
                    : "hover:bg-gray-50"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>

          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="px-6 py-2 border rounded-md font-medium transition-colors hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>
      </div>
    </Container>
  );
}
