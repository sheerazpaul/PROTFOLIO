import React, { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, FileText } from "lucide-react";
import Profile from "../Profile.json";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { personal } = Profile;

  const links = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollTo = (href) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      className="relative z-20 flex items-center justify-between gap-4 px-6 md:px-10 pt-6 md:pt-8 text-[#F8FAFC]"
    >
      <a
        href="#home"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className="text-sm md:text-lg font-bold uppercase tracking-wider cursor-pointer"
      >
        {personal.name}
      </a>

      <div className="hidden sm:flex flex-1 justify-between max-w-xl mx-6 md:mx-10 lg:mx-16">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={(e) => {
              e.preventDefault();
              scrollTo(link.href);
            }}
            className="text-sm md:text-lg lg:text-[1.4rem] font-medium uppercase tracking-wider hover:opacity-70 transition-opacity duration-200 cursor-pointer"
          >
            {link.label}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <button
          onClick={() => {
            window.location.hash = "resume";
          }}
          className="hidden sm:flex items-center gap-2 text-sm md:text-lg lg:text-[1.4rem] font-medium uppercase tracking-wider hover:opacity-70 transition-opacity duration-200 cursor-pointer"
        >
          <FileText size={18} /> Résumé
        </button>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="sm:hidden p-1 text-[#F8FAFC] cursor-pointer"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="absolute top-full left-0 right-0 sm:hidden bg-[#152031] border-y border-[#F8FAFC]/10 px-6 py-4"
        >
          <div className="flex flex-col gap-3">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(link.href);
                }}
                className="text-lg font-medium uppercase tracking-wider text-[#F8FAFC] hover:opacity-70 transition-opacity duration-200 cursor-pointer"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => {
                window.location.hash = "resume";
              }}
              className="flex items-center gap-2 text-lg font-medium uppercase tracking-wider text-[#F8FAFC] hover:opacity-70 transition-opacity duration-200 text-left cursor-pointer"
            >
              <FileText size={18} /> Résumé
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
