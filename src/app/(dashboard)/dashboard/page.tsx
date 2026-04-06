"use client";
import React from "react";
import {
  DollarSign,
  ShoppingBag,
  Package,
  Users,
  ArrowUpRight,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";

function AdminDashboardHome() {
  // Mock Data (You will fetch this from your /products, /orders, and /users APIs later)
  const stats = [
    {
      title: "Total Revenue",
      value: "$45,231.89",
      icon: DollarSign,
      change: "+20.1%",
      color: "text-green-600",
      bg: "bg-green-100",
    },
    {
      title: "Total Orders",
      value: "1,205",
      icon: ShoppingBag,
      change: "+12.5%",
      color: "text-blue-600",
      bg: "bg-blue-100",
    },
    {
      title: "Active Products",
      value: "48",
      icon: Package,
      change: "0%",
      color: "text-[#DB4444]",
      bg: "bg-red-50",
    },
    {
      title: "Total Customers",
      value: "2,420",
      icon: Users,
      change: "+18%",
      color: "text-purple-600",
      bg: "bg-purple-100",
    },
  ];

  const recentOrders = [
    {
      id: "#12541",
      customer: "John Doe",
      status: "Delivered",
      total: "$120.00",
    },
    {
      id: "#12542",
      customer: "Jane Smith",
      status: "Pending",
      total: "$850.00",
    },
    {
      id: "#12543",
      customer: "Robert Fox",
      status: "Shipped",
      total: "$45.00",
    },
    {
      id: "#12544",
      customer: "Emily Brown",
      status: "Cancelled",
      total: "$210.00",
    },
  ];

  return (
    <div className="space-y-8">
      {/* 1. Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            Welcome Back, Admin
          </h1>
          <p className="text-gray-500 text-sm">
            Here is what is happening with your store today.
          </p>
        </div>
        <Link
          href="/admin/add-product"
          className="bg-[#DB4444] hover:bg-[#c13a3a] text-white px-5 py-2.5 rounded-md flex items-center gap-2 transition-all w-fit font-medium text-sm"
        >
          <Package size={18} />
          Add New Product
        </Link>
      </div>

      {/* 2. Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`p-2 rounded-lg ${stat.bg} ${stat.color}`}>
                <stat.icon size={24} />
              </div>
              <span
                className={`text-xs font-bold ${stat.color} flex items-center`}
              >
                {stat.change} <TrendingUp size={12} className="ml-1" />
              </span>
            </div>
            <h3 className="text-gray-500 text-sm font-medium">{stat.title}</h3>
            <p className="text-2xl font-bold text-gray-800 mt-1">
              {stat.value}
            </p>
          </div>
        ))}
      </div>

      {/* 3. Bottom Section: Recent Orders & Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Orders Table */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="p-6 border-b flex items-center justify-between">
            <h3 className="font-bold text-gray-800">Recent Orders</h3>
            <Link
              href="/admin/manage-orders"
              className="text-[#DB4444] text-sm font-semibold hover:underline"
            >
              View All
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-gray-50 text-gray-600 uppercase text-[11px] font-bold">
                <tr>
                  <th className="px-6 py-4">Order ID</th>
                  <th className="px-6 py-4">Customer</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4">Total</th>
                  <th className="px-6 py-4">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {recentOrders.map((order) => (
                  <tr
                    key={order.id}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-6 py-4 font-medium text-gray-800">
                      {order.id}
                    </td>
                    <td className="px-6 py-4 text-gray-600">
                      {order.customer}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-2.5 py-1 rounded-full text-[11px] font-bold ${
                          order.status === "Delivered"
                            ? "bg-green-100 text-green-700"
                            : order.status === "Pending"
                              ? "bg-yellow-100 text-yellow-700"
                              : order.status === "Cancelled"
                                ? "bg-red-100 text-red-700"
                                : "bg-blue-100 text-blue-700"
                        }`}
                      >
                        {order.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 font-semibold text-gray-800">
                      {order.total}
                    </td>
                    <td className="px-6 py-4">
                      <button className="text-gray-400 hover:text-[#DB4444]">
                        <ArrowUpRight size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Actions / Store Status */}
        <div className="space-y-6">
          <div className="bg-[#1f1f1f] text-white p-6 rounded-xl shadow-sm relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-lg font-bold mb-2">Inventory Alert</h3>
              <p className="text-gray-400 text-sm mb-4">
                5 products are running low on stock. Restock soon to avoid
                losing sales.
              </p>
              <Link
                href="/admin/all-products"
                className="bg-[#DB4444] text-white text-xs px-4 py-2 rounded font-bold uppercase tracking-wider inline-block"
              >
                Check Inventory
              </Link>
            </div>
            <Package
              className="absolute -right-4 -bottom-4 text-white/10"
              size={120}
            />
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
            <h3 className="font-bold text-gray-800 mb-4">Top Categories</h3>
            <div className="space-y-4">
              {[
                { name: "Electronics", val: 75 },
                { name: "Fashion", val: 45 },
                { name: "Home Decor", val: 30 },
              ].map((cat) => (
                <div key={cat.name}>
                  <div className="flex justify-between text-xs mb-1 font-medium">
                    <span>{cat.name}</span>
                    <span>{cat.val}%</span>
                  </div>
                  <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                    <div
                      className="bg-[#DB4444] h-full"
                      style={{ width: `${cat.val}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboardHome;
