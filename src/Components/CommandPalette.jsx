import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, CornerDownLeft, ArrowUp, FileText, Github, Linkedin, Home, User, Code2, Briefcase, FolderGit2, Cpu, MessageSquareQuote, Mail, Sparkles } from "lucide-react";
import Profile from "../Profile.json";

const iconMap = { home: Home, user: User, code: Code2, briefcase: Briefcase, projects: FolderGit2, services: Cpu, quotes: MessageSquareQuote, contact: Mail, resume: FileText, sparkle: Sparkles };

const CommandPalette = () => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [index, setIndex] = useState(0);
  const inputRef = useRef(null);

  const personal = Profile.personal;

  const commands = useMemo(() => {
    const go = (id) => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    const sections = [
      { id: "home", label: "Home", icon: "home", hint: "hero", run: () => window.scrollTo({ top: 0, behavior: "smooth" }) },
      { id: "about", label: "About", icon: "user", hint: "bio", run: () => go("about") },
      { id: "skills", label: "Skills", icon: "code", hint: "stack", run: () => go("skills") },
      { id: "experience", label: "Experience", icon: "briefcase", hint: "work", run: () => go("experience") },
      { id: "projects", label: "Projects", icon: "projects", hint: "work", run: () => go("projects") },
      { id: "services", label: "Services", icon: "services", hint: "offerings", run: () => go("services") },
      { id: "contact", label: "Contact", icon: "contact", hint: "email", run: () => go("contact") },
    ];
    const actions = [
      { id: "resume", label: "Open Resume", icon: "resume", hint: "pdf", run: () => { window.location.hash = "resume"; } },
      { id: "gh", label: "GitHub", icon: "github", hint: "external", run: () => window.open("https://github.com/sheerazpaul", "_blank") },
      { id: "li", label: "LinkedIn", icon: "linkedin", hint: "external", run: () => window.open("https://linkedin.com/in/sheerazpaul", "_blank") },
      { id: "top", label: "Back to Top", icon: "sparkle", hint: "scroll", run: () => window.scrollTo({ top: 0, behavior: "smooth" }) },
    ];
    return [...sections, ...actions];
  }, []);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return commands;
    return commands.filter((c) => c.label.toLowerCase().includes(q) || c.hint.toLowerCase().includes(q));
  }, [commands, query]);

  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (!open) {
          setQuery("");
          setIndex(0);
        }
        setOpen((v) => !v);
        setTimeout(() => inputRef.current?.focus(), 60);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const runCommand = (cmd) => {
    setOpen(false);
    setTimeout(cmd.run, 80);
  };

  const onKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setIndex((i) => Math.min(i + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter" && results[index]) {
      e.preventDefault();
      runCommand(results[index]);
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[1200] flex items-start justify-center px-4 pt-24 sm:pt-32"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="absolute inset-0 bg-background/70 backdrop-blur-sm" onClick={() => setOpen(false)} />
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-xl overflow-hidden rounded-2xl glass shadow-2xl shadow-black/40"
          >
            <div className="flex items-center gap-3 border-b border-border px-5 py-4">
              <Search className="text-muted" size={18} />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setIndex(0);
                }}
                onKeyDown={onKeyDown}
                placeholder="Type a command or search…"
                className="flex-1 bg-transparent text-sm text-ink outline-none placeholder:text-muted/60"
              />
              <kbd className="hidden sm:inline-flex items-center gap-1 px-2 py-1 text-[10px] font-medium text-muted glass rounded-md">
                ESC
              </kbd>
            </div>
            <div className="max-h-80 overflow-y-auto p-2">
              {results.length === 0 && (
                <p className="px-4 py-8 text-center text-sm text-muted">
                  No results for <span className="text-ink">“{query}”</span>
                </p>
              )}
              {results.map((cmd, i) => {
                const Icon = iconMap[cmd.icon] || (cmd.icon === "github" ? Github : cmd.icon === "linkedin" ? Linkedin : Sparkles);
                return (
                  <button
                    key={cmd.id}
                    onMouseEnter={() => setIndex(i)}
                    onClick={() => runCommand(cmd)}
                    className={`flex w-full items-center justify-between gap-3 rounded-xl px-4 py-3 text-left transition-colors duration-150 ${
                      i === index ? "bg-primary/15 text-ink" : "text-muted"
                    }`}
                  >
                    <span className="flex items-center gap-3 text-sm">
                      <Icon size={16} className={i === index ? "text-primary" : "text-muted"} />
                      {cmd.label}
                    </span>
                    <span className="flex items-center gap-2">
                      <span className="text-[11px] text-muted/60 capitalize">{cmd.hint}</span>
                      {i === index && <CornerDownLeft size={13} className="text-primary" />}
                    </span>
                  </button>
                );
              })}
            </div>
            <div className="flex items-center justify-between border-t border-border px-5 py-3 text-[11px] text-muted/70">
              <span>↑↓ to navigate</span>
              <span>↵ to select</span>
              <span className="flex items-center gap-1.5">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                {personal.role}
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CommandPalette;
