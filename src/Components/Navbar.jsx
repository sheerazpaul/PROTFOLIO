import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sun, Moon, FileText, Menu, X } from "lucide-react";
import { useTheme } from "./ThemeContext";
import { personal } from "../Profile.json";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  const navItems = ["Skills", "Projects", "Contact"];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-dark/80 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-16">
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-xl font-bold tracking-wider cursor-pointer"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">{personal.name.charAt(0)}</span>
            <span className="text-text">{personal.name.slice(1)}</span>
          </button>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className="px-4 py-2 text-sm font-medium text-softGray hover:text-text hover:bg-border rounded-lg transition-all duration-300"
              >
                {item}
              </button>
            ))}
            <div className="w-px h-6 bg-border mx-2" />
            <button
              onClick={() => { window.location.hash = "resume"; }}
              className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-softGray hover:text-text hover:bg-border rounded-lg transition-all duration-300"
            >
              <FileText size={14} /> Resume
            </button>
            <button
              onClick={toggleTheme}
              className="w-9 h-9 flex items-center justify-center rounded-lg text-softGray hover:text-text hover:bg-border transition-all duration-300 ml-1"
            >
              {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
            </button>
          </div>

          <div className="flex md:hidden items-center gap-2">
            <button onClick={() => { window.location.hash = "resume"; }} className="p-2 text-softGray hover:text-text">
              <FileText size={18} />
            </button>
            <button onClick={toggleTheme} className="p-2 text-softGray hover:text-text">
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button onClick={() => setMobileOpen(!mobileOpen)} className="p-2 text-text">
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden bg-card border-t border-border"
        >
          <div className="px-6 py-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className="block w-full text-left px-3 py-2 text-sm text-softGray hover:text-text hover:bg-border rounded-lg transition-all"
              >
                {item}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}

export default Navbar;
