"use client";

import { ArrowUpIcon } from "lucide-react";
import { useEffect, useState } from "react";

export default function ScrollButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed bottom-6 right-6 z-50
        flex items-center justify-center
        w-12 h-12 rounded-full
        bg-black text-white
        shadow-lg hover:shadow-xl
        transition-all duration-300
        hover:-translate-y-1 hover:scale-105 hover:cursor-pointer
        active:scale-95
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"}
      `}
    >
      <ArrowUpIcon />
    </button>
  );
}
