// src/app/(admin)/layout.js
import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminNavbar from "@/components/admin/AdminNavbar";

export default function AdminLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* 1. Admin Sidebar */}
      <AdminSidebar />

      <div className="flex-1 flex flex-col">
        {/* 2. Top Nav (Search, Admin Profile) */}
        <AdminNavbar />

        {/* 3. Main Content Area */}
        <main className="p-6 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
