import React from "react";

const Label = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="flex items-center gap-4 mb-4">
        <div className="w-5 h-10 bg-[#DB4444] rounded-sm"></div>
        <span className="text-[#DB4444] font-semibold text-base">
          {children}
        </span>
      </div>
    </>
  );
};

export default Label;
