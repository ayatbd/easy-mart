import React from "react";
import Link from "next/link";

const TopHeader: React.FC = () => {
  return (
    <div className="w-full bg-black text-white h-12 flex items-center justify-between px-4 sm:px-10 text-xs sm:text-sm">
      {/* Left empty container to balance the flex layout and keep center text perfectly centered */}
      <div className="hidden lg:flex flex-1"></div>

      {/* Center Announcement Text */}
      <div className="text-center flex justify-center items-center flex-wrap gap-x-2">
        <p>
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </p>
        <Link
          href="/shop"
          className="font-semibold underline underline-offset-4 decoration-1 hover:text-gray-300 transition-colors"
        >
          ShopNow
        </Link>
      </div>

      {/* Right Language Selector */}
      <div className="hidden lg:flex flex-1 justify-end items-center">
        <button
          className="flex items-center gap-2 hover:text-gray-300 transition-colors focus:outline-none"
          aria-label="Select Language"
        >
          <span>English</span>
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
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TopHeader;
