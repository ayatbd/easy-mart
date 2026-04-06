// src/app/(admin)/layout.js
import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminNavbar from "@/components/admin/AdminNavbar";

export default function AdminLayout({ children }) {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-50">
      <AdminSidebar />
      <div className="flex-1">
        {/* Optional Header for Desktop */}
        <header className="hidden lg:flex bg-white border-b h-16 items-center px-8 justify-between">
          <h2 className="font-semibold text-gray-700">Admin Overview</h2>
          <div className="flex items-center gap-4">
            {/* Admin Profile Info could go here */}
            <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
          </div>
        </header>

        {/* Main Page Content */}
        <main className="p-4 lg:p-8">{children}</main>
      </div>
    </div>
  );
}
