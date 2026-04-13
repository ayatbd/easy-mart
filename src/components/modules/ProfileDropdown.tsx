"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ProfileDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Toggle dropdown
  const toggleDropdown = () => setIsOpen((prev) => !prev);

  // Close dropdown
  const closeDropdown = () => setIsOpen(false);

  // Handle outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        closeDropdown();
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="relative w-max mx-auto">
      {/* Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          toggleDropdown();
        }}
        className="relative p-2 text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-full transition-all cursor-pointer"
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
            d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
        </svg>
      </button>

      {/* Dropdown */}
      {isOpen && (
        <ul className="absolute right-0 shadow-md border border-gray-200 bg-white p-2 mt-2 z-50 w-48 rounded-2xl max-h-96 overflow-auto">
          {[
            { text: "Dashboard", link: "/dashboard" },
            { text: "Settings", link: "/" },
            { text: "Sign out", link: "/signout" },
          ].map((item) => (
            <li
              key={item.link}
              className="py-2.5 px-4 hover:bg-gray-50 rounded-lg text-slate-600 text-sm cursor-pointer"
            >
              <Link href={item.link}>{item.text}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
