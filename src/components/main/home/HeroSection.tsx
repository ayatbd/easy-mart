"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";
import Container from "@/components/modules/Container";

// Types
interface Category {
  name: string;
  hasSub: boolean;
  link: string;
}

const categories: Category[] = [
  { name: "Woman's Fashion", hasSub: true, link: "/category/womans-fashion" },
  { name: "Men's Fashion", hasSub: true, link: "/category/mens-fashion" },
  { name: "Electronics", hasSub: false, link: "/category/electronics" },
  { name: "Home & Lifestyle", hasSub: false, link: "/category/home-lifestyle" },
  { name: "Medicine", hasSub: false, link: "/category/medicine" },
  { name: "Sports & Outdoor", hasSub: false, link: "/category/sports" },
  { name: "Baby's & Toys", hasSub: false, link: "/category/baby-toys" },
  { name: "Groceries & Pets", hasSub: false, link: "/category/groceries" },
  { name: "Health & Beauty", hasSub: false, link: "/category/health-beauty" },
];

const HeroSection: React.FC = () => {
  return (
    <section className="mt-20">
      <Container>
        <div className="max-w-7xl mx-auto flex px-4 sm:px-6 lg:px-8">
          <aside className="hidden lg:flex flex-col w-62.5 border-r border-gray-200 pt-10 pr-6">
            <ul className="flex flex-col gap-4">
              {categories.map((cat, index) => (
                <li key={index}>
                  <Link
                    href={cat.link}
                    className="flex items-center justify-between text-black hover:text-gray-600 transition-colors text-[15px] md:text-base font-medium"
                  >
                    {cat.name}
                    {cat.hasSub && (
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
                          d="m8.25 4.5 7.5 7.5-7.5 7.5"
                        />
                      </svg>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </aside>

          {/* Swiper */}
          <main className="flex-1 lg:pl-10 pt-10 w-full overflow-hidden">
            <div
              className="
          w-full h-full relative[&_.swiper-pagination-bullet]:bg-gray-500
          [&_.swiper-pagination-bullet]:opacity-100
          [&_.swiper-pagination-bullet]:w-3[&_.swiper-pagination-bullet]:h-3
          [&_.swiper-pagination-bullet-active]:bg-red-500
          [&_.swiper-pagination-bullet-active]:border-2[&_.swiper-pagination-bullet-active]:border-white
        "
            >
              <Swiper
                modules={[Pagination, Autoplay]}
                pagination={{ clickable: true }}
                autoplay={{ delay: 10000, disableOnInteraction: false }}
                loop={true}
                className="h-87.5 md:h-100 w-full bg-black text-white rounded-none md:rounded-lg overflow-hidden"
              >
                {/* Slide 1 */}
                <SwiperSlide>
                  <div className="flex w-full h-full relative">
                    <div className="flex flex-col justify-center pl-8 md:pl-16 z-10 w-full md:w-1/2">
                      <div className="flex items-center gap-4 mb-5">
                        {/* <svg
                          viewBox="0 0 384 512"
                          width="40"
                          height="40"
                          fill="white"
                        >
                          <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                        </svg> */}
                        <span className="text-base font-light tracking-wide">
                          Apple Watch Ultra 3
                        </span>
                      </div>

                      <h1 className="text-4xl md:text-5xl lg:text-[56px] font-semibold leading-[1.2] mb-6">
                        Up to 10% <br /> off Voucher
                      </h1>

                      <Link
                        href="/shop"
                        className="flex items-center gap-2 w-max pb-1 border-b border-white hover:text-gray-300 hover:border-gray-300 transition-colors"
                      >
                        <span className="font-medium">Shop Now</span>
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
                            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                          />
                        </svg>
                      </Link>
                    </div>

                    <div className="absolute right-0 bottom-0 md:relative md:w-1/2 flex justify-end h-full">
                      <div className="relative w-full h-[90%] md:h-full mt-auto">
                        <Image
                          src="/images/main/hero/watch.png"
                          alt="Apple Watch Ultra 3"
                          fill
                          className="object-contain object-bottom md:object-center drop-shadow-2xl"
                          priority
                        />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="flex w-full h-full items-center justify-center bg-black">
                    <h2 className="text-white text-3xl">
                      Slide 2 Content Here
                    </h2>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </main>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
