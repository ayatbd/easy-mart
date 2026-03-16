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

// mock data
const slides = [
  {
    id: 1,
    image: "/images/main/hero/watch.png",
    name: "Apple Watch Ultra 3",
    title: `Up to 10% off Voucher`,
  },
  {
    id: 2,
    image: "/images/main/hero/headphone.jpg",
    name: "Royal Headphone",
    title: `Pick your favorite color`,
  },
  {
    id: 3,
    image: "/images/main/hero/headphone.png",
    name: "Apple Watch Ultra 3",
    title: `Up to 10% off Voucher`,
  },
  {
    id: 4,
    image: "/images/main/hero/headphone.png",
    name: "Apple Watch Ultra 3",
    title: `Up to 10% off Voucher`,
  },
];

const categories: Category[] = [
  { name: "Woman's Fashion", hasSub: true, link: "" },
  { name: "Men's Fashion", hasSub: true, link: "" },
  { name: "Electronics", hasSub: false, link: "" },
  { name: "Home & Lifestyle", hasSub: false, link: "" },
  { name: "Medicine", hasSub: false, link: "" },
  { name: "Sports & Outdoor", hasSub: false, link: "" },
  { name: "Baby's & Toys", hasSub: false, link: "" },
  { name: "Groceries & Pets", hasSub: false, link: "" },
  { name: "Health & Beauty", hasSub: false, link: "" },
];

const HeroSection: React.FC = () => {
  return (
    <section className="mt-20">
      <Container>
        <div className="max-w-7xl mx-auto flex px-4 sm:px-6 lg:px-8">
          {/* Sidebar */}
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

          {/* Swiper Slider */}
          <main className="flex-1 lg:pl-10 pt-10 w-full overflow-hidden">
            <div
              className="
                w-full h-full relative 
                [&_.swiper-pagination-bullet]:bg-gray-500
                [&_.swiper-pagination-bullet]:opacity-100[&_.swiper-pagination-bullet]:w-3 
                [&_.swiper-pagination-bullet]:h-3[&_.swiper-pagination-bullet-active]:bg-red-500[&_.swiper-pagination-bullet-active]:border-2 
                [&_.swiper-pagination-bullet-active]:border-white
              "
            >
              <Swiper
                modules={[Pagination, Autoplay]}
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                loop={true}
                className="h-87.5 md:h-100 w-full bg-black text-white rounded-none md:rounded-lg overflow-hidden"
              >
                {slides.map((slide, index) => (
                  <SwiperSlide key={index}>
                    <div className="flex w-full h-full relative">
                      <div className="flex flex-col justify-center pl-8 md:pl-16 z-10 w-full md:w-1/2">
                        <div className="flex items-center gap-4 mb-5">
                          <span className="text-base font-light tracking-wide">
                            {slide.name}
                          </span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-[56px] font-semibold leading-[1.2] mb-6">
                          {slide.title}
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
                            src={slide.image}
                            alt="Apple Watch Ultra 3"
                            fill
                            className="object-contain object-bottom md:object-center drop-shadow-2xl"
                            priority
                          />
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
                {/* Slide 1: Apple Watch */}
                {/* <SwiperSlide>
                  <div className="flex w-full h-full relative">
                    <div className="flex flex-col justify-center pl-8 md:pl-16 z-10 w-full md:w-1/2">
                      <div className="flex items-center gap-4 mb-5">
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
                </SwiperSlide> */}
              </Swiper>
            </div>
          </main>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
