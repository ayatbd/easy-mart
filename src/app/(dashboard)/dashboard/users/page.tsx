"use client";
import React from "react";
import {
  Users,
  UserPlus,
  UserCheck,
  UserMinus,
  Mail,
  ShieldCheck,
  MoreVertical,
  TrendingUp,
  Search,
} from "lucide-react";
import Link from "next/link";

function AdminUserManagement() {
  // Mock Data for User Stats
  const stats = [
    {
      title: "Total Customers",
      value: "2,420",
      icon: Users,
      change: "+12.5%",
      color: "text-blue-600",
      bg: "bg-blue-100",
    },
    {
      title: "Active Now",
      value: "156",
      icon: UserCheck,
      change: "+5.4%",
      color: "text-green-600",
      bg: "bg-green-100",
    },
    {
      title: "New This Month",
      value: "432",
      icon: UserPlus,
      change: "+18.1%",
      color: "text-purple-600",
      bg: "bg-purple-100",
    },
    {
      title: "Churn Rate",
      value: "2.1%",
      icon: UserMinus,
      change: "-0.5%",
      color: "text-[#DB4444]",
      bg: "bg-red-50",
    },
  ];

  const users = [
    {
      id: "USR-001",
      name: "John Doe",
      email: "john@example.com",
      role: "Customer",
      status: "Active",
      joined: "Oct 12, 2023",
    },
    {
      id: "USR-002",
      name: "Jane Smith",
      email: "jane.s@gmail.com",
      role: "Admin",
      status: "Active",
      joined: "Jan 05, 2023",
    },
    {
      id: "USR-003",
      name: "Robert Fox",
      email: "robert.fox@outlook.com",
      role: "Customer",
      status: "Suspended",
      joined: "Mar 15, 2024",
    },
    {
      id: "USR-004",
      name: "Emily Brown",
      email: "emily.b@company.com",
      role: "Editor",
      status: "Inactive",
      joined: "Dec 22, 2023",
    },
  ];

  return (
    <div className="space-y-8">
      {/* 1. Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">User Management</h1>
          <p className="text-gray-500 text-sm">
            Manage your customer base and administrative roles.
          </p>
        </div>
        <div className="flex gap-3">
          <div className="relative">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={18}
            />
            <input
              type="text"
              placeholder="Search users..."
              className="pl-10 pr-4 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-[#DB4444]"
            />
          </div>
          <button className="bg-[#DB4444] hover:bg-[#c13a3a] text-white px-5 py-2.5 rounded-md flex items-center gap-2 transition-all font-medium text-sm">
            <UserPlus size={18} />
            Add User
          </button>
        </div>
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

      {/* 3. Main Content: User Table & Roles */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Users Table */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="p-6 border-b flex items-center justify-between">
            <h3 className="font-bold text-gray-800">All Users</h3>
            <button className="text-gray-500 text-sm hover:text-[#DB4444] font-medium">
              Filter List
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-gray-50 text-gray-600 uppercase text-[11px] font-bold">
                <tr>
                  <th className="px-6 py-4">User</th>
                  <th className="px-6 py-4">Role</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4">Joined</th>
                  <th className="px-6 py-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {users.map((user) => (
                  <tr
                    key={user.id}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-6 py-4">
                      <div className="flex flex-col">
                        <span className="font-bold text-gray-800">
                          {user.name}
                        </span>
                        <span className="text-xs text-gray-500">
                          {user.email}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-600 font-medium">
                      {user.role}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-2.5 py-1 rounded-full text-[11px] font-bold ${
                          user.status === "Active"
                            ? "bg-green-100 text-green-700"
                            : user.status === "Suspended"
                              ? "bg-red-100 text-red-700"
                              : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {user.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-600">{user.joined}</td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-gray-400 hover:text-gray-600">
                        <MoreVertical size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Sidebar: Role Distribution & Top Customers */}
        <div className="space-y-6">
          {/* Admin Prompt Card */}
          <div className="bg-[#1f1f1f] text-white p-6 rounded-xl shadow-sm relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-lg font-bold mb-2">Security Audit</h3>
              <p className="text-gray-400 text-sm mb-4">
                You have 3 administrators without Two-Factor Authentication
                (2FA) enabled.
              </p>
              <button className="bg-white text-black text-xs px-4 py-2 rounded font-bold uppercase tracking-wider inline-block hover:bg-gray-100">
                Send Reminders
              </button>
            </div>
            <ShieldCheck
              className="absolute -right-4 -bottom-4 text-white/10"
              size={120}
            />
          </div>

          {/* User Distribution Card */}
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
            <h3 className="font-bold text-gray-800 mb-4">User Roles</h3>
            <div className="space-y-4">
              {[
                { name: "Customers", val: 88, color: "bg-[#DB4444]" },
                { name: "Admins", val: 4, color: "bg-blue-500" },
                { name: "Editors", val: 8, color: "bg-purple-500" },
              ].map((role) => (
                <div key={role.name}>
                  <div className="flex justify-between text-xs mb-1 font-medium">
                    <span>{role.name}</span>
                    <span>{role.val}%</span>
                  </div>
                  <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                    <div
                      className={`${role.color} h-full`}
                      style={{ width: `${role.val}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Support Card */}
          <div className="bg-blue-50 border border-blue-100 p-5 rounded-xl">
            <div className="flex gap-3">
              <Mail className="text-blue-600" size={20} />
              <div>
                <h4 className="text-sm font-bold text-blue-900">
                  Need help with users?
                </h4>
                <p className="text-xs text-blue-700 mt-1">
                  Export your customer list for marketing campaigns via CSV.
                </p>
                <button className="mt-3 text-xs font-bold text-blue-600 underline">
                  Export Data
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminUserManagement;
