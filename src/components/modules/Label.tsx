import React from "react";

const Label = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex items-center gap-4 mb-6">
      <div className="w-10 h-0.5 bg-gray-900"></div>
      <span className="text-gray-900 font-bold text-sm tracking-[0.25em] uppercase">
        {children}
      </span>
    </div>
  );
};

export default Label;
