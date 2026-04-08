"use client";

import { useState } from "react";
import { MessageCircle, Mail, X } from "lucide-react";

export default function FloatingChat() {
  const [open, setOpen] = useState(false);

  const phoneNumber = "8801XXXXXXXXX";
  const message = "Hello, I need help!";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-24 right-6 z-50 flex flex-col items-end gap-3">
      {/* OPTIONS */}
      <div
        className={`
          flex flex-col gap-3 mb-2
          transition-all duration-300
          ${open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5 pointer-events-none"}
        `}
      >
        {/* WhatsApp */}
        <a
          href={whatsappLink}
          target="_blank"
          className="
            flex items-center gap-3
            bg-white/80 backdrop-blur-md
            px-4 py-2 rounded-full
            shadow-lg hover:shadow-xl
            transition hover:scale-105
          "
        >
          <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white">
            <MessageCircle size={18} />
          </div>
          <span className="text-sm font-medium text-gray-800">WhatsApp</span>
        </a>

        {/* Email */}
        <a
          href="mailto:your@email.com"
          className="
            flex items-center gap-3
            bg-white/80 backdrop-blur-md
            px-4 py-2 rounded-full
            shadow-lg hover:shadow-xl
            transition hover:scale-105
          "
        >
          <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white">
            <Mail size={18} />
          </div>
          <span className="text-sm font-medium text-gray-800">Email Us</span>
        </a>
      </div>

      {/* MAIN BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        className="
          w-12 h-12 rounded-full
          bg-gradient-to-r from-indigo-500 to-purple-600
          text-white
          flex items-center justify-center
          shadow-xl hover:shadow-2xl
          transition-all duration-300 animate-[fadeInUp_0.5s_ease]
          hover:scale-110 active:scale-95
        "
      >
        {open ? <X size={22} /> : <MessageCircle size={22} />}
      </button>
    </div>
  );
}
