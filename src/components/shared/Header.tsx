"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import { useGetCartItemsQuery } from "@/redux/api/cartApi";
import { useGetWishlistItemsQuery } from "@/redux/api/wishlistApi";
import { usePathname } from "next/navigation";
import ProfileDropdown from "../modules/ProfileDropdown";
import { Menu, X, Search, Heart, ShoppingBag } from "lucide-react"; // Added icons for cleaner code

const navLinks = [
  { name: "Shop", href: "/" },
  { name: "Contact", href: "/contact" },
  { name: "About", href: "/about" },
  { name: "Journal", href: "/journal" },
  { name: "Sign Up", href: "/signup" },
];

const Header: React.FC = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Mobile Menu State

  const { user, token } = useSelector((state: any) => state.auth);

  const { data: cartItems } = useGetCartItemsQuery(user?.email, {
    skip: !user?.email,
  });
  const { data: initialWishlistItems } = useGetWishlistItemsQuery(user?.email, {
    skip: !user?.email,
  });

  const cartCount = cartItems?.length || 0;
  const wishlistCount = initialWishlistItems?.length || 0;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when path changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <header>
      <div
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled || isMenuOpen
            ? "bg-white border-b border-gray-200 py-3 shadow-sm"
            : "bg-white py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* --- LOGO --- */}
          <div className="shrink-0 flex items-center gap-2">
            <div className="w-8 h-8 bg-emerald-600 rounded-tr-xl rounded-bl-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg leading-none">
                EM
              </span>
            </div>
            <Link
              href="/"
              className="text-xl sm:text-2xl font-black tracking-tighter text-gray-900"
            >
              Easy Mart<span className="text-emerald-600">.</span>
            </Link>
          </div>

          {/* --- DESKTOP NAV --- */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              if (link.name === "Sign Up" && (user || token)) return null;
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium px-4 py-2 rounded-full transition-all duration-300 ${
                    isActive
                      ? "bg-emerald-100 text-emerald-700"
                      : "text-gray-600 hover:text-emerald-600 hover:bg-emerald-50"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* --- ACTIONS --- */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Search (Hidden on very small screens unless toggled) */}
            <div className="flex items-center">
              <div
                className={`transition-all duration-300 overflow-hidden ${isSearchOpen ? "w-32 sm:w-64 opacity-100 mr-2" : "w-0 opacity-0"}`}
              >
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full bg-gray-100 text-sm rounded-full py-1.5 px-4 focus:outline-none ring-1 ring-gray-200"
                />
              </div>
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 text-gray-600 hover:bg-gray-100 rounded-full"
              >
                {isSearchOpen ? <X size={20} /> : <Search size={20} />}
              </button>
            </div>

            {/* Wishlist */}
            <Link
              href="/wishlist"
              className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-full"
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
              {wishlistCount > 0 && (
                <span className="absolute top-1 right-1 h-4 w-4 bg-emerald-500 text-white text-[10px] flex items-center justify-center rounded-full border-2 border-white font-bold">
                  {wishlistCount}
                </span>
              )}
            </Link>

            {/* Cart */}
            <Link
              href="/cart"
              className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-full"
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
              {cartCount > 0 && (
                <span className="absolute top-1 right-1 h-4 w-4 bg-gray-900 text-white text-[10px] flex items-center justify-center rounded-full border-2 border-white font-bold">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Profile */}
            {user && token ? (
              <ProfileDropdown />
            ) : (
              <Link
                href="/signup"
                className="hidden sm:block bg-emerald-600 text-white px-4 py-2 rounded-full text-sm font-medium"
              >
                Join
              </Link>
            )}

            {/* --- MOBILE HAMBURGER --- */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-full transition-all"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* --- MOBILE MENU OVERLAY --- */}
        <div
          className={`md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          <nav className="flex flex-col p-4 gap-2">
            {navLinks.map((link) => {
              if (link.name === "Sign Up" && (user || token)) return null;
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-3 rounded-xl text-base font-semibold transition-all ${
                    isActive
                      ? "bg-emerald-600 text-white"
                      : "text-gray-700 hover:bg-emerald-50"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            {!user && (
              <Link
                href="/signin"
                className="mt-2 px-4 py-3 bg-gray-100 text-center rounded-xl font-bold"
              >
                Sign In
              </Link>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
