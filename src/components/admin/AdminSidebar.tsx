"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  PlusCircle,
  ShoppingBag,
  Users,
  ShoppingCart,
  Menu,
  X,
  ArrowLeft,
} from "lucide-react";

const AdminSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "Add Product", href: "/dashboard/add-product", icon: PlusCircle },
    {
      name: "All Products",
      href: "/dashboard/all-products",
      icon: ShoppingBag,
    },
    {
      name: "Manage Orders",
      href: "/dashboard/manage-orders",
      icon: ShoppingCart,
    },
    { name: "Users", href: "/admin/users", icon: Users },
  ];

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      {/* --- MOBILE MOBILE HEADER --- */}
      <div className="lg:hidden flex items-center justify-between bg-white px-4 py-3 border-b">
        <h1 className="text-xl font-bold text-[#DB4444]">Easy Mart</h1>
        <button onClick={toggleSidebar} className="p-2 text-gray-600">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* --- SIDEBAR --- */}
      <aside
        className={`
          fixed inset-y-0 left-0 z-50 w-64 bg-white border-r transform transition-transform duration-300 ease-in-out
          lg:translate-x-0 lg:static lg:inset-0
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Sidebar Header */}
        <div className="p-6 border-b hidden lg:block">
          <Link href="/admin">
            <h1 className="text-2xl font-bold text-[#DB4444]">Easy Mart</h1>
            <p className="text-xs text-gray-500 font-medium">ADMIN PANEL</p>
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="mt-6 px-4 space-y-2">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`
                  flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200
                  ${
                    isActive
                      ? "bg-[#DB4444] text-white shadow-md shadow-red-200"
                      : "text-gray-600 hover:bg-gray-100"
                  }
                `}
              >
                <item.icon size={20} />
                <span className="font-medium">{item.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Bottom Footer Section */}
        <div className="absolute bottom-0 w-full p-4 border-t">
          <Link
            href="/"
            className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:text-[#DB4444] transition-colors"
          >
            <ArrowLeft size={20} />
            <span className="font-medium">Back to Store</span>
          </Link>
        </div>
      </aside>

      {/* --- MOBILE OVERLAY --- */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
};

export default AdminSidebar;
