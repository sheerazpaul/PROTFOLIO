import { ArrowUp, Github, Linkedin, Sparkles, Mail } from "lucide-react";
import { useTheme } from "./ThemeContext";
import Profile from "../Profile.json";

const Footer = () => {
  const personal = Profile.personal;
  const contact = Profile.contact;
  const socialLinks = Profile.socialLinks;
  const { theme } = useTheme();

  const links = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const socialIcons = { github: Github, linkedin: Linkedin };

  return (
    <footer className="relative border-t border-border py-12">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="flex flex-col items-center gap-8">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group flex flex-col items-center gap-2 text-muted transition-colors hover:text-ink cursor-pointer"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl glass transition-all duration-300 group-hover:-translate-y-1 group-hover:border-primary/40">
              <ArrowUp size={17} />
            </span>
            <span className="text-[10px] uppercase tracking-[0.3em]">Back to top</span>
          </button>

          <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(link.href);
                }}
                className="text-sm text-muted transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {socialLinks.map((s) => {
              const Icon = socialIcons[s.icon] || Sparkles;
              return (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="flex h-10 w-10 items-center justify-center rounded-xl glass text-muted transition-all duration-300 hover:text-ink hover:border-primary/40 hover:-translate-y-0.5"
                >
                  <Icon size={16} />
                </a>
              );
            })}
            <a
              href={`mailto:${personal.email}`}
              aria-label="Email"
              className="flex h-10 w-10 items-center justify-center rounded-xl glass text-muted transition-all duration-300 hover:text-ink hover:border-primary/40 hover:-translate-y-0.5"
            >
              <Mail size={16} />
            </a>
          </div>

          <div className="flex flex-col items-center gap-2 text-center">
            <p className="flex items-center gap-2 text-sm text-muted">
              <Sparkles size={13} className="text-primary" />
              Designed & built with care by <span className="font-medium text-ink">{personal.name}</span>
            </p>
            <p className="text-xs text-muted/70">{contact.text}</p>
            <p className="text-xs text-muted/70">
              {theme === "dark" ? "🌙 Dark mode" : "☀️ Light mode"} · React + Vite + Tailwind · Framer Motion
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
