"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import Label from "@/components/modules/Label";
import Container from "@/components/modules/Container";
import ProductModal from "@/components/modals/ProductModal";
import { useGetProductsQuery } from "@/redux/api/exploreProductsApi";
import { useSelector } from "react-redux";
import { useAddToCartMutation } from "@/redux/api/cartApi";
import { useAddToWishlistMutation } from "@/redux/api/wishlistApi";
import { toast } from "sonner";
import Link from "next/link";
import { SpinnerBadge } from "@/app/loading";

interface Product {
  _id: string;
  name: string;
  image: string;
  original_price: number;
  old_price: number;
  discount_percent: number;
  ratings: number;
  reviews: number;
  best_selling: boolean;
}

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
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data: productsResponse, isLoading } = useGetProductsQuery({
    page: 1,
    limit: 100,
  });

  // getting flash sales products by filtering the name flashSales
  const products: Product[] = productsResponse?.data || [];

  const bestSellingProducts = products?.filter(
    (product) => product?.best_selling && product?.best_selling === true,
  );

  const { user, token } = useSelector((state: any) => state.auth);

  const [addToCart] = useAddToCartMutation();
  const [addToWishlist] = useAddToWishlistMutation();

  // --- Reusable Auth Check ---
  const handleProtectedAction = async (
    e: React.MouseEvent<HTMLButtonElement>,
    actionType: "Cart" | "Wishlist",
    product: Product,
  ) => {
    e.preventDefault();
    if (!user || !token) {
      setIsModalOpen(true);
      return;
    }

    if (actionType === "Cart") {
      const cartItem = {
        productId: product._id,
        email: user.email,
        name: product.name,
        price: product.original_price,
        image: product.image,
        quantity: 1,
      };

      try {
        await addToCart(cartItem).unwrap();
        toast.success("Added to Cart!");
      } catch (error) {
        console.error("Failed to add to cart", error);
      }
    }

    if (actionType === "Wishlist") {
      const wishlistItem = {
        productId: product._id,
        userEmail: user.email,
        name: product.name,
        price: product.original_price,
        image: product.image,
        old_price: product.old_price,
        discount_percent: product.discount_percent,
        ratings: product.ratings,
        reviews: product.reviews,
      };

      try {
        await addToWishlist(wishlistItem).unwrap();
        toast.success("Added to Wishlist!");
      } catch (error) {
        console.error("Failed to add to wishlist", error);
      }
    }
  };

  if (isLoading) return <SpinnerBadge />;

  return (
    <Container>
      <ProductModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-8">
          <Label>This month</Label>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex flex-col md:flex-row md:items-end gap-10 md:gap-20">
              <h2 className="text-3xl md:text-4xl font-bold text-black tracking-wider">
                Best Selling Products
              </h2>
            </div>

            <div className="flex items-center gap-2">
              {/* --- View All Button --- */}
              <div className="mt-4 sm:mt-0">
                <Link
                  href="/products"
                  className="bg-emerald-600 text-white px-6 sm:px-10 text-sm sm:text-base  py-3 rounded-sm font-medium hover:bg-emerald-700 transition-colors"
                >
                  View All
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-flow-col auto-cols-[75%] sm:auto-cols-[50%] md:grid-flow-row md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 overflow-x-auto md:overflow-visible snap-x md:snap-none hide-scrollbar pb-4">
          {bestSellingProducts.map((product: Product) => (
            <div key={product._id} className="snap-start md:snap-none group">
              <div className="relative bg-[#F5F5F5] rounded-md h-52 sm:h-56 md:h-60 lg:h-64 flex items-center justify-center overflow-hidden mb-4 p-4">
                {/* Wishlist Icon - PROTECTED */}
                <div className="absolute top-3 right-3 flex flex-col gap-2 z-10">
                  <button
                    onClick={(e) =>
                      handleProtectedAction(e, "Wishlist", product)
                    }
                    className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-[#DB4444] hover:text-white transition-all shadow-sm"
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

                {/* Add To Cart Button - PROTECTED */}
                <button
                  onClick={(e) => handleProtectedAction(e, "Cart", product)}
                  className="absolute bottom-0 left-0 w-full bg-black text-white py-3 font-medium translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                >
                  Add To Cart
                </button>
              </div>

              {/* Info section... */}
              <div className="flex flex-col gap-1">
                <h3 className="text-black font-bold truncate">
                  {product.name}
                </h3>
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
          ))}
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
