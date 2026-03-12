"use client";

import Container from "@/components/modules/Container";
import Label from "@/components/modules/Label";
import React, { useRef, useState } from "react";

// --- Types ---
interface Category {
  id: string;
  name: string;
  icon: React.ReactNode;
}

// --- Icons ---
const PhoneIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="5"
      y="2"
      width="14"
      height="20"
      rx="2"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <circle cx="12" cy="18" r="1" fill="currentColor" />
  </svg>
);

const ComputerIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="2"
      y="4"
      width="20"
      height="13"
      rx="1"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      d="M8 21H16"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M12 17V21"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const SmartWatchIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="7"
      y="6"
      width="10"
      height="12"
      rx="3"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      d="M9 2V6M15 2V6M9 18V22M15 18V22"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M10 10V14M12 11V14M14 12V14"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const CameraIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="3"
      y="8"
      width="18"
      height="12"
      rx="2"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <circle cx="12" cy="14" r="3" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="M8 8V6C8 4.89543 8.89543 4 10 4H14C15.1046 4 16 4.89543 16 6V8"
      stroke="currentColor"
      strokeWidth="1.5"
    />
  </svg>
);

const HeadphoneIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4 14V11C4 6.58172 7.58172 3 12 3C16.4183 3 20 6.58172 20 11V14"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <rect
      x="3"
      y="14"
      width="4"
      height="7"
      rx="2"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <rect
      x="17"
      y="14"
      width="4"
      height="7"
      rx="2"
      stroke="currentColor"
      strokeWidth="1.5"
    />
  </svg>
);

const GamingIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="2"
      y="6"
      width="20"
      height="12"
      rx="3"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      d="M6 12H10"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M8 10V14"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <circle cx="15" cy="10" r="1" fill="currentColor" />
    <circle cx="17" cy="13" r="1" fill="currentColor" />
  </svg>
);

// --- Mock Data ---
const categories: Category[] = [
  { id: "1", name: "Phones", icon: <PhoneIcon /> },
  { id: "2", name: "Computers", icon: <ComputerIcon /> },
  { id: "3", name: "SmartWatch", icon: <SmartWatchIcon /> },
  { id: "4", name: "Camera", icon: <CameraIcon /> }, // This one will be set as active by default to match your image
  { id: "5", name: "HeadPhones", icon: <HeadphoneIcon /> },
  { id: "6", name: "Gaming", icon: <GamingIcon /> },
];

export default function BrowseCategories() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState<string>("");

  // --- Scroll Logic ---
  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 200; // Adjusted scroll amount for category cards
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <Container>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* --- Section Header --- */}
        <div className="mb-10">
          {/* "Categories" Label */}
          <Label>Categories</Label>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-bold text-black tracking-wide">
              Browse By Category
            </h2>

            {/* Navigation Arrows */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => scroll("left")}
                className="w-11 h-11 bg-[#F5F5F5] hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
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
                className="w-11 h-11 bg-[#F5F5F5] hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
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

        {/* --- Category Grid / Carousel --- */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {categories.map((category) => {
            const isActive = activeCategory === category.id;

            return (
              <div
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`
                min-w-[170px] h-[145px] snap-start cursor-pointer 
                flex flex-col items-center justify-center gap-4 
                border rounded-md transition-all duration-300
                ${
                  isActive
                    ? "bg-[#DB4444] text-white border-[#DB4444] shadow-md"
                    : "bg-white text-black border-gray-300 hover:bg-[#DB4444] hover:text-white hover:border-[#DB4444]"
                }
              `}
              >
                {/* Icon Container - dynamically inherits color via currentColor */}
                <div className="text-current transition-colors duration-300">
                  {category.icon}
                </div>

                {/* Category Name */}
                <span className="font-medium">{category.name}</span>
              </div>
            );
          })}
        </div>

        {/* Global style block to hide webkit scrollbar */}
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
