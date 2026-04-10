"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import { useAddToCartMutation } from "@/redux/api/cartApi";
import { toast } from "sonner";
import { useGetWishlistItemsQuery } from "@/redux/api/wishlistApi";

// --- Types ---
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

const recommendedProducts = [
  {
    id: "r1",
    name: "ASUS FHD Gaming Laptop",
    image: "/laptop.png",
    price: 960,
    oldPrice: 1160,
    discount: 17,
    rating: 5,
    reviews: 65,
  },
  {
    id: "r2",
    name: "IPS LCD Gaming Monitor",
    image: "/monitor.png",
    price: 1160,
    rating: 5,
    reviews: 65,
  },
  {
    id: "r3",
    name: "HAVIT HV-G92 Gamepad",
    image: "/gamepad.png",
    price: 560,
    rating: 5,
    reviews: 65,
    isNew: true,
  },
  {
    id: "r4",
    name: "AK-900 Wired Keyboard",
    image: "/keyboard.png",
    price: 200,
    rating: 5,
    reviews: 65,
  },
];

// --- Star Rating Component ---
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

export default function Wishlist() {
  const { user } = useSelector((state: any) => state.auth);

  // 2. Fetch data
  const { data: initialWishlist, isLoading } = useGetWishlistItemsQuery(
    user?.email,
    {
      skip: !user?.email,
    },
  );
  // const [wishlist, setWishlist] = useState<Product[]>(initialWishlist);
  const [addToCart] = useAddToCartMutation();
  const [wishlistItems, setWishlistItems] = useState<Product[]>([]);

  useEffect(() => {
    if (initialWishlist) {
      setWishlistItems(initialWishlist);
    }
  }, [initialWishlist]);

  const handleProtectedAction = async (
    e: React.MouseEvent<HTMLButtonElement>,
    actionType: "Cart" | "Wishlist",
    product: Product,
  ) => {
    e.preventDefault();

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
        toast("Added to Cart!");
      } catch (error) {
        console.error("Failed to add to cart", error);
      }
    }
  };

  const moveAllToBag = () => {
    alert("All items moved to your bag!");
    setWishlistItems([]);
  };

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 min-h-screen">
      {/* --- Wishlist Section --- */}
      <section className="mb-24">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 border-b border-gray-100 pb-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
              Saved Items
            </h1>
            <p className="text-gray-500 mt-2">
              You have{" "}
              <span className="font-semibold text-emerald-600">
                {wishlistItems.length}
              </span>{" "}
              items in your wishlist.
            </p>
          </div>

          {wishlistItems.length > 0 && (
            <button
              onClick={moveAllToBag}
              className="px-8 py-3 bg-white border border-gray-200 text-gray-700 rounded-full font-medium hover:border-emerald-600 hover:text-emerald-600 transition-all duration-300 shadow-sm hover:shadow-md w-full sm:w-auto"
            >
              Move All to Cart
            </button>
          )}
        </div>

        {/* Wishlist Grid */}
        {wishlistItems.length > 0 ? (
          <div className="flex gap-8 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-6">
            {wishlistItems.map((product) => (
              <div
                key={product._id}
                className="min-w-67.5 max-w-67.5 snap-start group cursor-pointer"
              >
                <div className="relative bg-[#F5F5F5] rounded-md h-62.5 flex items-center justify-center overflow-hidden mb-4 p-4">
                  <div className="relative w-full h-full">
                    <button
                      // onClick={(e) => {
                      //   e.preventDefault();
                      //   removeFromWishlist(product.id);
                      // }}
                      className="absolute top-0 right-0 w-8 h-8 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-white shadow-sm transition-all z-10"
                      aria-label="Remove from wishlist"
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
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
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
        ) : (
          // Empty State
          <div className="flex flex-col items-center justify-center py-20 bg-gray-50 rounded-3xl border border-gray-100 border-dashed">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-sm mb-6 text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Your wishlist is empty
            </h2>
            <p className="text-gray-500 mb-8">
              Looks like you haven&apos;t saved any items yet.
            </p>
            <Link
              href="/shop"
              className="px-8 py-3 bg-emerald-600 text-white rounded-full font-medium hover:bg-emerald-700 transition-colors shadow-lg"
            >
              Start Shopping
            </Link>
          </div>
        )}
      </section>

      {/* --- Just For You Section --- */}
      <section>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
          {/* Custom Modern Label (Pulsing Dot) */}
          <div className="flex flex-col gap-4">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-100 w-max">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-emerald-700 font-bold text-xs sm:text-sm tracking-[0.15em] uppercase">
                Recommended
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
              Just For You
            </h2>
          </div>

          <Link
            href="/shop"
            className="text-emerald-600 font-semibold hover:text-emerald-700 hover:underline underline-offset-4 transition-all pb-2"
          >
            View All Products &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {recommendedProducts.map((product) => (
            <div
              key={product.id}
              className="group flex flex-col bg-white border border-gray-100 rounded-3xl p-4 hover:shadow-xl transition-all duration-500 cursor-pointer"
            >
              <div className="relative w-full h-[220px] bg-gray-50 rounded-2xl overflow-hidden mb-5">
                {product.discount && (
                  <div className="absolute top-3 left-3 bg-emerald-100 text-emerald-800 text-[10px] font-bold px-3 py-1.5 rounded-full z-10 uppercase tracking-wide">
                    {product.discount}% OFF
                  </div>
                )}

                {product.isNew && !product.discount && (
                  <div className="absolute top-3 left-3 bg-gray-900 text-white text-[10px] font-bold px-3 py-1.5 rounded-full z-10 uppercase tracking-wide shadow-sm">
                    New Arrival
                  </div>
                )}

                {/* Quick Add to Wishlist Button */}
                <button className="absolute top-3 right-3 w-8 h-8 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-white shadow-sm transition-all z-10">
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
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                </button>

                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-contain p-4 group-hover:scale-110 transition-transform duration-700 ease-out"
                />

                <div className="absolute bottom-3 left-3 right-3 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-10">
                  <button className="w-full bg-emerald-600 text-white py-3 rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-emerald-700 transition-colors shadow-lg">
                    Add to Cart
                  </button>
                </div>
              </div>

              <div className="flex flex-col gap-1.5 px-1 flex-1">
                <h3 className="text-gray-900 font-semibold truncate text-lg">
                  {product.name}
                </h3>
                <div className="flex items-center gap-3 mt-1">
                  <span className="text-emerald-600 font-bold text-lg">
                    ${product.price}
                  </span>
                  {product.oldPrice && (
                    <span className="text-gray-400 line-through font-medium text-sm">
                      ${product.oldPrice}
                    </span>
                  )}
                </div>

                {product.rating && (
                  <div className="flex items-center gap-2 mt-1">
                    <StarRating rating={product.rating} />
                    <span className="text-gray-500 text-xs font-medium">
                      ({product.reviews})
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
