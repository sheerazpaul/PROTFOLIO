import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeProvider } from "./Components/ThemeContext";
import HeroSection from "./Components/HeroSection";
import AboutSection from "./Components/AboutSection";
import ServicesSection from "./Components/ServicesSection";
import SkillsSection from "./Components/SkillsSection";
import ExperienceSection from "./Components/ExperienceSection";
import ProjectsSection from "./Components/ProjectsSection";
import ContactSection from "./Components/ContactSection";
import Resume from "./Components/Resume";
import "./index.css";

function App() {
  const [page, setPage] = useState("portfolio");

  useEffect(() => {
    const handleHash = () => {
      setPage(window.location.hash === "#resume" ? "resume" : "portfolio");
    };
    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  return (
    <ThemeProvider>
      <AnimatePresence mode="wait">
        {page === "resume" ? (
          <Resume key="resume" onBack={() => { window.location.hash = ""; }} />
        ) : (
          <motion.div
            key="portfolio"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ overflowX: "clip" }}
            className="bg-[#081425] min-h-screen relative"
          >
            <HeroSection />
            <AboutSection />
            <ServicesSection />
            <SkillsSection />
            <ExperienceSection />
            <ProjectsSection />
            <ContactSection />
          </motion.div>
        )}
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default App;
