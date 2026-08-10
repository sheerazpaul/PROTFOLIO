import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { Sun, Moon, Menu, X, FileText, Search } from "lucide-react";
import { useTheme } from "./ThemeContext";
import Profile from "../Profile.json";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  const personal = Profile.personal;

  const links = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    return scrollY.on("change", (y) => setScrolled(y > 24));
  }, [scrollY]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const scrollTo = (href) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const openPalette = () => {
    window.dispatchEvent(new KeyboardEvent("keydown", { key: "k", metaKey: true, bubbles: true }));
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-[90] px-4 sm:px-6"
      >
        <div className="mx-auto max-w-7xl">
          <div
            className={`mt-4 flex items-center justify-between rounded-2xl px-4 sm:px-6 h-16 transition-all duration-500 ${
              scrolled ? "glass shadow-lg shadow-black/10" : "border border-transparent"
            }`}
          >
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-2.5 cursor-pointer"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary font-display text-sm font-bold text-white shadow-lg shadow-primary/30">
                {personal.name.charAt(0)}
              </span>
              <span className="hidden sm:block font-display text-base font-semibold tracking-tight text-ink">
                {personal.name}
              </span>
            </button>

            <nav className="hidden lg:flex items-center gap-1">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(link.href);
                  }}
                  className="relative px-4 py-2 text-sm font-medium text-muted rounded-xl transition-colors duration-300 hover:text-ink hover:bg-border"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-1.5">
              <button
                onClick={openPalette}
                aria-label="Command palette"
                className="hidden md:flex items-center gap-2 h-9 px-3 rounded-xl text-muted hover:text-ink hover:bg-border transition-colors cursor-pointer"
              >
                <Search size={16} />
                <span className="text-xs">Search</span>
                <kbd className="px-1.5 py-0.5 text-[10px] glass rounded">⌘K</kbd>
              </button>
              <button
                onClick={() => { window.location.hash = "resume"; }}
                className="hidden sm:flex items-center gap-2 h-9 px-3 rounded-xl text-sm font-medium text-muted hover:text-ink hover:bg-border transition-colors cursor-pointer"
              >
                <FileText size={16} /> Resume
              </button>
              <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="flex h-9 w-9 items-center justify-center rounded-xl text-muted hover:text-ink hover:bg-border transition-colors cursor-pointer"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={theme}
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
                  </motion.span>
                </AnimatePresence>
              </button>
              <button
                onClick={() => setOpen(true)}
                aria-label="Open menu"
                className="lg:hidden flex h-9 w-9 items-center justify-center rounded-xl text-ink hover:bg-border transition-colors cursor-pointer"
              >
                <Menu size={19} />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[95] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-background/70 backdrop-blur-sm" onClick={() => setOpen(false)} />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 34 }}
              className="absolute top-0 right-0 h-full w-[84%] max-w-sm bg-surface border-l border-border p-7 flex flex-col"
            >
              <div className="flex items-center justify-between mb-10">
                <span className="font-display text-lg font-semibold text-ink">{personal.name}</span>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="flex h-10 w-10 items-center justify-center rounded-xl glass text-ink cursor-pointer"
                >
                  <X size={18} />
                </button>
              </div>

              <nav className="flex flex-col gap-1">
                {links.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i + 0.1 }}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo(link.href);
                    }}
                    className="flex items-center justify-between rounded-xl px-4 py-3.5 text-lg font-display font-medium text-muted hover:text-ink hover:bg-border transition-colors cursor-pointer"
                  >
                    <span>0{i + 1} · {link.label}</span>
                    <span className="text-primary text-sm">→</span>
                  </motion.a>
                ))}
              </nav>

              <div className="mt-auto space-y-3 pt-8">
                <button
                  onClick={() => { window.location.hash = "resume"; }}
                  className="flex w-full items-center justify-center gap-2 rounded-xl gradient-border py-3.5 font-display text-sm font-semibold text-ink cursor-pointer"
                >
                  <FileText size={16} /> View Resume
                </button>
                <p className="text-center text-xs text-muted/70">{personal.email}</p>
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
