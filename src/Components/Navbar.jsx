import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeContext";
import {personal} from "../Profile.json"
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  const navItems = ["Home", "Projects", "Profile", "Contact"];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${scrolled ? "bg-dark/80 backdrop-blur-md shadow-lg border-b border-border" : "bg-transparent"}`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold tracking-wider"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">{personal.name.charAt(0)}</span>
            <span className="text-text">{personal.name.slice(1)}</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase() === 'home' ? 'home' : 
                                                  item.toLowerCase() === 'projects' ? 'works' :
                                                  item.toLowerCase() === 'profile' ? 'profile' : 'contact')}
                className="px-4 py-2 text-softGray hover:text-text hover:bg-border rounded-full transition-all duration-300 font-medium"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="hidden md:flex w-10 h-10 items-center justify-center rounded-full text-softGray hover:text-text hover:bg-border transition-all duration-300"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Resume Link */}
          <button
            onClick={() => { window.location.hash = "resume"; }}
            className="hidden md:inline-flex px-4 py-2 text-sm font-medium text-softGray hover:text-text hover:bg-border rounded-full transition-all duration-300"
          >
            Resume
          </button>

          {/* Connect Button */}
          <motion.a
            href="https://www.linkedin.com/in/sheerazpaul"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block"
          >
            <button className="px-6 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-bold tracking-wide
              hover:shadow-[0_0_25px_rgba(20,184,166,0.6)] transition-all duration-300 shadow-[0_0_15px_rgba(20,184,166,0.3)]">
              Let's Connect
            </button>
          </motion.a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-text hover:text-primary transition-colors"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-card border-t border-border"
        >
          <div className="px-6 py-4 space-y-3">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase() === 'projects' ? 'works' : item.toLowerCase())}
                className="block w-full text-left px-4 py-2 text-softGray hover:text-text hover:bg-border rounded-full transition-all duration-300 font-medium"
              >
                {item}
              </button>
            ))}
            <button
              onClick={toggleTheme}
              className="flex items-center gap-2 w-full px-4 py-2 text-softGray hover:text-text hover:bg-border rounded-full transition-all duration-300 font-medium"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              <span>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
            </button>
            <button
              onClick={() => { window.location.hash = "resume"; }}
              className="block w-full text-left px-4 py-2 text-softGray hover:text-text hover:bg-border rounded-full transition-all duration-300 font-medium"
            >
              Resume
            </button>
            <a
              href="https://www.linkedin.com/in/sheerazpaul"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-4"
            >
              <button className="w-full px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-bold tracking-wide hover:shadow-[0_0_25px_rgba(20,184,166,0.6)] transition-all duration-300">
                Let's Connect
              </button>
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}

export default Navbar;