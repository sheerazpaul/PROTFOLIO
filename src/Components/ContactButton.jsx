import React from "react";

const ContactButton = ({ className = "", label = "Contact Me", onClick }) => {
  const handleClick = (e) => {
    if (onClick) {
      onClick(e);
      return;
    }
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button
      onClick={handleClick}
      className={`rounded-full bg-[linear-gradient(123deg,#081425_7%,#4EB1C5_37%,#14B8A6_72%,#ffb781_100%)] text-white font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base shadow-[0px_4px_4px_rgba(78,177,197,0.35),inset_4px_4px_12px_#3a9aae] outline outline-2 outline-white outline-offset-[-3px] cursor-pointer transition-transform duration-300 hover:scale-105 active:scale-95 ${className}`}
    >
      {label}
    </button>
  );
};

export default ContactButton;
