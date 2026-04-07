"use client";

import { MessageCircle, Mail } from "lucide-react";

export default function FloatingChat() {
  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-3">
      {/* WhatsApp */}
      <a
        href="https://wa.me/8801XXXXXXXXX"
        target="_blank"
        className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white shadow-md hover:scale-110 transition"
      >
        <MessageCircle size={20} />
      </a>

      {/* Email */}
      <a
        href="mailto:your@email.com"
        className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white shadow-md hover:scale-110 transition"
      >
        <Mail size={20} />
      </a>
    </div>
  );
}
