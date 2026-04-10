"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import { useAddToCartMutation } from "@/redux/api/cartApi";
import { toast } from "sonner";
import {
  useDeleteWishlistItemMutation,
  useGetWishlistItemsQuery,
} from "@/redux/api/wishlistApi";

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

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-4 h-4 ${star <= Math.round(rating) ? "text-[#FFAD33]" : "text-gray-300"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

export default function Wishlist() {
  const { user } = useSelector((state: any) => state.auth);
  const { data: initialWishlist, isLoading } = useGetWishlistItemsQuery(
    user?.email,
    { skip: !user?.email },
  );

  const [deleteWishlistItem] = useDeleteWishlistItemMutation();
  const [addToCart] = useAddToCartMutation();

  const [wishlistItems, setWishlistItems] = useState<Product[]>([]);

  useEffect(() => {
    if (initialWishlist) setWishlistItems(initialWishlist);
  }, [initialWishlist]);

  // --- Add to Cart and Remove from Wishlist ---
  const handleMoveToCart = async (product: Product) => {
    try {
      const cartItem = {
        productId: product._id,
        email: user.email,
        name: product.name,
        price: product.original_price,
        image: product.image,
        quantity: 1,
      };

      // 1. Add to cart
      await addToCart(cartItem).unwrap();

      // 2. Remove from wishlist
      await deleteWishlistItem(product._id).unwrap();

      toast.success(`${product.name} moved to cart!`);
    } catch (error) {
      toast.error("Failed to move item to cart");
    }
  };

  // --- Move All to Cart ---
  const moveAllToBag = async () => {
    try {
      const promises = wishlistItems.map((product) => {
        const cartItem = {
          productId: product._id,
          email: user.email,
          name: product.name,
          price: product.original_price,
          image: product.image,
          quantity: 1,
        };
        return addToCart(cartItem)
          .unwrap()
          .then(() => deleteWishlistItem(product._id).unwrap());
      });

      await Promise.all(promises);
      toast.success("All items moved to your bag!");
    } catch (error) {
      toast.error("Some items failed to move");
    }
  };

  if (isLoading)
    return (
      <div className="py-40 text-center font-bold text-2xl">
        Loading Wishlist...
      </div>
    );

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 min-h-screen">
      {/* --- Wishlist Section --- */}
      <section className="mb-24">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 border-b border-gray-100 pb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
              Saved Items ({wishlistItems.length})
            </h1>
          </div>

          {wishlistItems.length > 0 && (
            <button
              onClick={moveAllToBag}
              className="px-8 py-3 bg-white border border-gray-200 text-gray-700 rounded-md font-medium hover:border-[#DB4444] hover:text-[#DB4444] transition-all"
            >
              Move All To Bag
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {wishlistItems.map((product) => (
            <div key={product._id} className="group cursor-pointer">
              <div className="relative bg-[#F5F5F5] rounded-md h-64 flex items-center justify-center overflow-hidden mb-4 p-4">
                <button
                  onClick={() => deleteWishlistItem(product._id)}
                  className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center text-gray-800 hover:text-red-500 shadow-sm z-10"
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
                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                    />
                  </svg>
                </button>
                <div className="relative w-full h-full">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <button
                  onClick={() => handleMoveToCart(product)}
                  className="absolute bottom-0 left-0 w-full bg-black text-white py-2 text-sm font-medium translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                >
                  Add To Cart
                </button>
              </div>
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
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- Just For You Section --- */}
      <section>
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-4">
            <div className="w-5 h-10 bg-[#DB4444] rounded"></div>
            <h2 className="text-xl font-bold text-black tracking-tight">
              Just For You
            </h2>
          </div>
          <Link
            href="/shop"
            className="px-8 py-3 border border-gray-300 rounded font-medium hover:bg-gray-50 transition-all"
          >
            See All
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Using same design as wishlist/shop for Just For You */}
          {wishlistItems.slice(0, 4).map((product) => (
            <div key={product._id} className="group cursor-pointer">
              <div className="relative bg-[#F5F5F5] rounded-md h-64 flex items-center justify-center overflow-hidden mb-4 p-4">
                <div className="absolute top-3 right-3 flex flex-col gap-2 z-10">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm">
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
                        d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="relative w-full h-full">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <button
                  onClick={() => handleMoveToCart(product)}
                  className="absolute bottom-0 left-0 w-full bg-black text-white py-2 text-sm font-medium translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                >
                  Add To Cart
                </button>
              </div>
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
                  <span className="text-gray-500 text-xs">
                    ({product.reviews})
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
