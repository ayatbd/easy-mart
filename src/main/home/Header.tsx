import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-20">
        {/* Left: Logo */}
        <div className="flex-shrink-0">
          <Link
            href="/"
            className="text-2xl font-bold tracking-wide text-black"
          >
            Exclusive
          </Link>
        </div>

        {/* Center: Navigation Links */}
        <nav className="hidden md:flex items-center gap-10">
          <Link
            href="/"
            className="text-black font-medium underline underline-offset-[6px] decoration-1 hover:text-gray-600 transition-colors"
          >
            Home
          </Link>
          <Link
            href="/contact"
            className="text-black hover:underline underline-offset-[6px] decoration-1 hover:text-gray-600 transition-colors"
          >
            Contact
          </Link>
          <Link
            href="/about"
            className="text-black hover:underline underline-offset-[6px] decoration-1 hover:text-gray-600 transition-colors"
          >
            About
          </Link>
          <Link
            href="/signup"
            className="text-black hover:underline underline-offset-[6px] decoration-1 hover:text-gray-600 transition-colors"
          >
            Sign Up
          </Link>
        </nav>

        {/* Right: Search Bar & Icons */}
        <div className="flex items-center gap-6">
          {/* Search Input */}
          <div className="relative hidden lg:block">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="w-64 bg-[#F5F5F5] text-sm text-black placeholder-gray-500 rounded-md py-2.5 pl-4 pr-10 focus:outline-none focus:ring-1 focus:ring-gray-300 transition-all"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-800 hover:text-black">
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
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </button>
          </div>

          {/* Icons container */}
          <div className="flex items-center gap-4">
            {/* Wishlist / Heart Icon */}
            <button
              aria-label="Wishlist"
              className="text-black hover:text-gray-600 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-7 h-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
            </button>

            {/* Cart Icon */}
            <button
              aria-label="Shopping Cart"
              className="text-black hover:text-gray-600 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-7 h-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
