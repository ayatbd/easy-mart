"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const navLinks = [
  { name: "Shop", href: "/" },
  { name: "Contact", href: "/contact" },
  { name: "About", href: "/about" },
  { name: "Journal", href: "/journal" },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Handle scroll effect for the sticky header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header className="border-b border-gray-200">
      {/* <TopHeader /> */}
      <div
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 backdrop-blur-md border-b border-gray-200 py-3 shadow-sm"
            : "bg-white py-5"
        }`}
      >
        <div className="md:max-w-295 mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="shrink-0 flex items-center gap-2">
            <div className="w-8 h-8 bg-emerald-600 rounded-tr-xl rounded-bl-xl rounded-tl-sm rounded-br-sm flex items-center justify-center">
              <span className="text-white font-bold text-lg leading-none">
                EM
              </span>
            </div>
            <Link
              href="/"
              className="text-2xl font-black tracking-tighter text-gray-900"
            >
              EASY MART<span className="text-emerald-600">.</span>
            </Link>
          </div>

          {/* Center: Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 px-4 py-2 rounded-full transition-all duration-300"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right: Actions (Search, Wishlist, Cart, Profile) */}
          <div className="flex items-center gap-3 sm:gap-5">
            {/* Expandable Search */}
            <div className="flex items-center">
              <div
                className={`flex items-center transition-all duration-300 ease-in-out overflow-hidden ${
                  isSearchOpen
                    ? "w-48 sm:w-64 opacity-100 mr-2"
                    : "w-0 opacity-0 mr-0"
                }`}
              >
                <input
                  type="text"
                  placeholder="Search AURA..."
                  className="w-full bg-gray-100 text-sm text-gray-900 rounded-full py-2 pl-4 pr-4 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all"
                />
              </div>
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-full transition-all"
                aria-label="Toggle Search"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  {isSearchOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                  )}
                </svg>
              </button>
            </div>

            {/* Wishlist Icon with Badge */}
            <Link
              href="/wishlist"
              className="relative p-2 text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-full transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
              {/* Notification Badge */}
              <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 text-[10px] font-bold text-white border-2 border-white">
                2
              </span>
            </Link>

            {/* Cart Icon with Badge */}
            <Link
              href="/cart"
              className="relative p-2 text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-full transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
              {/* Notification Badge */}
              <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-gray-900 text-[10px] font-bold text-white border-2 border-white">
                3
              </span>
            </Link>

            <button className="relative p-2 text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-full transition-all cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </button>

            {/* Mobile Menu Toggle (Visible only on small screens) */}
            <button className="md:hidden p-2 text-gray-600 rounded-full">
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
                  d="M3 12h18M3 6h18M3 18h18"
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
