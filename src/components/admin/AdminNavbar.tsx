"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { Bell, User, Search } from "lucide-react";

const AdminNavbar = () => {
  const pathname = usePathname();

  // Logic to turn "/admin/add-product" into "Add Product"
  const getPageTitle = () => {
    const segment = pathname.split("/").pop();
    if (segment === "admin" || !segment) return "Overview";
    return segment.replace(/-/g, " ");
  };

  return (
    <header className="h-16 bg-white border-b flex items-center justify-between px-6 sticky top-0 z-30">
      {/* 1. Left Side: Dynamic Page Title */}
      <div className="hidden sm:block">
        <h2 className="text-xl font-bold capitalize text-gray-800 tracking-tight">
          {getPageTitle()}
        </h2>
      </div>

      {/* 2. Right Side: Search & Profile */}
      <div className="flex items-center gap-4 ml-auto sm:ml-0">
        {/* Simple Search bar (Desktop only) */}
        <div className="relative hidden md:block">
          <input
            type="text"
            placeholder="Search statistics..."
            className="bg-gray-100 text-sm rounded-md pl-10 pr-4 py-2 w-64 focus:outline-none focus:ring-1 focus:ring-[#DB4444] transition-all"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
        </div>

        {/* Notification Bell */}
        <button className="p-2 text-gray-500 hover:text-[#DB4444] transition-colors relative">
          <Bell size={22} />
          <span className="absolute top-1.5 right-1.5 bg-[#DB4444] text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center border-2 border-white">
            2
          </span>
        </button>

        {/* Admin Profile Info */}
        <div className="flex items-center gap-3 pl-4 border-l ml-2">
          <div className="text-right hidden lg:block">
            <p className="text-sm font-semibold text-gray-800 leading-tight">
              Admin Name
            </p>
            <p className="text-xs text-gray-500">Main Administrator</p>
          </div>
          <div className="h-10 w-10 bg-gray-50 rounded-full flex items-center justify-center text-[#DB4444] border border-gray-200 cursor-pointer hover:bg-gray-100 transition-colors">
            <User size={20} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminNavbar;
