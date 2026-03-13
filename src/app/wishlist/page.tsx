import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
  oldPrice?: number;
  discount?: number;
  rating?: number;
  reviews?: number;
  isNew?: boolean;
}

const wishlistProducts: Product[] = [
  {
    id: "w1",
    name: "Gucci duffle bag",
    image: "/bag.png",
    price: 960,
    oldPrice: 1160,
    discount: 35,
  },
  {
    id: "w2",
    name: "RGB liquid CPU Cooler",
    image: "/cooler.png",
    price: 196,
  },
  {
    id: "w3",
    name: "AK-900 Wired Keyboard",
    image: "/keyboard.png",
    price: 200,
  },
  {
    id: "w4",
    name: "HAVIT HV-G92 Gamepad",
    image: "/gamepad.png",
    price: 120,
    oldPrice: 160,
    discount: 40,
  },
];

const justForYouProducts: Product[] = [
  {
    id: "r1",
    name: "ASUS FHD Gaming Laptop",
    image: "/laptop.png",
    price: 960,
    oldPrice: 1160,
    discount: 35,
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

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-4 h-4 ${
            star <= rating ? "text-[#FFAD33]" : "text-gray-300"
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
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Wishlist Section */}
      <section className="mb-20">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-xl md:text-2xl font-medium text-black tracking-wide">
            Wishlist ({wishlistProducts.length})
          </h2>
          <button className="px-8 py-3 border border-gray-400 rounded-sm font-medium hover:bg-gray-50 transition-colors">
            Move All To Bag
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {wishlistProducts.map((product) => (
            <div
              key={product.id}
              className="group cursor-pointer flex flex-col"
            >
              <div className="relative bg-[#F5F5F5] rounded-md h-[250px] flex flex-col items-center justify-center overflow-hidden mb-4">
                {product.discount && (
                  <div className="absolute top-3 left-3 bg-[#DB4444] text-white text-xs font-medium px-3 py-1 rounded-sm z-10">
                    -{product.discount}%
                  </div>
                )}

                <div className="absolute top-3 right-3 flex flex-col gap-2 z-10">
                  <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors shadow-sm">
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

                <div className="relative w-full h-[140px] mt-4">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-contain"
                  />
                </div>

                <button className="absolute bottom-0 left-0 w-full bg-black text-white py-2.5 font-medium flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors">
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
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                    />
                  </svg>
                  Add To Cart
                </button>
              </div>

              <div className="flex flex-col gap-1.5">
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
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Just For You Section */}
      <section>
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-4">
            <div className="w-5 h-10 bg-[#DB4444] rounded-sm"></div>
            <span className="text-xl md:text-2xl text-black font-medium tracking-wide">
              Just For You
            </span>
          </div>
          <button className="px-8 py-3 border border-gray-400 rounded-sm font-medium hover:bg-gray-50 transition-colors">
            See All
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {justForYouProducts.map((product) => (
            <div
              key={product.id}
              className="group cursor-pointer flex flex-col"
            >
              <div className="relative bg-[#F5F5F5] rounded-md h-[250px] flex items-center justify-center overflow-hidden mb-4 p-4">
                {product.discount && (
                  <div className="absolute top-3 left-3 bg-[#DB4444] text-white text-xs font-medium px-3 py-1 rounded-sm z-10">
                    -{product.discount}%
                  </div>
                )}

                {product.isNew && !product.discount && (
                  <div className="absolute top-3 left-3 bg-[#00FF66] text-white text-xs font-medium px-3 py-1 rounded-sm z-10">
                    NEW
                  </div>
                )}

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

                <div className="relative w-full h-[160px]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-contain"
                  />
                </div>

                <button className="absolute bottom-0 left-0 w-full bg-black text-white py-2.5 font-medium flex items-center justify-center gap-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
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
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                    />
                  </svg>
                  Add To Cart
                </button>
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

                {product.rating && (
                  <div className="flex items-center gap-2 mt-0.5">
                    <StarRating rating={product.rating} />
                    <span className="text-gray-500 text-sm font-semibold">
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
