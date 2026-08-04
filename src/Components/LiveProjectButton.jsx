import React from "react";

const LiveProjectButton = ({ href, className = "" }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block rounded-full border-2 border-[#F8FAFC] text-[#F8FAFC] font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base hover:bg-[#F8FAFC]/10 transition-colors duration-300 ${className}`}
    >
      Live Project
    </a>
  );
};

export default LiveProjectButton;
