import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import {personal} from "../Profile.json"
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const navItems = ["Home", "Works", "Profile", "Contact"];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${scrolled ? "bg-white/90 backdrop-blur-md shadow-lg" : "bg-transparent"}`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold"
          >
            <span className="text-[#14B8A6]">{personal.name.charAt(0)}</span>
            <span className="text-gray-900">{personal.name.slice(1)}</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase() === 'home' ? 'home' : 
                                                  item.toLowerCase() === 'works' ? 'works' :
                                                  item.toLowerCase() === 'profile' ? 'profile' : 'contact')}
                className="text-gray-600 hover:text-[#14B8A6] transition-colors font-medium"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Connect Button */}
          <motion.a
            href="https://www.linkedin.com/in/sheerazpaul"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block"
          >
            <button className="px-6 py-2 bg-[#14B8A6] text-white rounded-lg font-medium
              hover:bg-[#0D9488] transition-colors shadow-lg shadow-[#14B8A6]/30">
              Let's Connect
            </button>
          </motion.a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-700"
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
          className="md:hidden bg-white border-t border-gray-200"
        >
          <div className="px-6 py-4 space-y-3">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="block w-full text-left py-2 text-gray-600 hover:text-[#14B8A6] font-medium"
              >
                {item}
              </button>
            ))}
            <a
              href="https://www.linkedin.com/in/sheerazpaul"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-4"
            >
              <button className="w-full px-6 py-3 bg-[#14B8A6] text-white rounded-lg font-medium">
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