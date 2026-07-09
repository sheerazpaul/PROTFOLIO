import React from "react";
import { Github, Linkedin, Mail, Heart } from "lucide-react";
import profile from "../Profile.json";

const Footer = () => {
  const { personal } = profile;
  const year = new Date().getFullYear();

  return (
    <footer className="bg-dark border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-text font-semibold text-lg">{personal.name}</p>
            <p className="text-softGray text-sm mt-1">{personal.role}</p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/sheerazpaul"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-card-glass border border-border backdrop-blur-md flex items-center justify-center text-softGray hover:bg-primary hover:text-white transition-all"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://linkedin.com/in/sheerazpaul"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-card-glass border border-border backdrop-blur-md flex items-center justify-center text-softGray hover:bg-primary hover:text-white transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={`mailto:${profile.contact?.email || personal.email}`}
              className="w-10 h-10 rounded-full bg-card-glass border border-border backdrop-blur-md flex items-center justify-center text-softGray hover:bg-primary hover:text-white transition-all"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-softGray text-sm flex items-center justify-center gap-1">
            &copy; {year} {personal.name}. Built with <Heart size={12} className="text-primary" /> using React & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
