import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "./Components/ThemeContext";
import LoadingScreen from "./Components/LoadingScreen";
import AnimatedBackground from "./Components/AnimatedBackground";
import CommandPalette from "./Components/CommandPalette";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";
import Services from "./Components/Services";
import Testimonials from "./Components/Testimonials";
import TechStack from "./Components/TechStack";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Resume from "./Components/Resume";
import "./index.css";

function App() {
  const [page, setPage] = useState("portfolio");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleHash = () => {
      setPage(window.location.hash === "#resume" ? "resume" : "portfolio");
    };
    handleHash();
    window.addEventListener("hashchange", handleHash);
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => {
      window.removeEventListener("hashchange", handleHash);
      clearTimeout(timer);
    };
  }, []);

  return (
    <ThemeProvider>
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen key="loader" />}
      </AnimatePresence>

      <CommandPalette />
      <Toaster
        position="bottom-center"
        toastOptions={{
          style: {
            background: "var(--color-surface)",
            color: "var(--color-ink)",
            border: "1px solid var(--color-border)",
            borderRadius: "16px",
            fontSize: "14px",
            backdropFilter: "blur(12px)",
          },
          success: { iconTheme: { primary: "var(--color-accent)", secondary: "#fff" } },
        }}
      />

      <AnimatePresence mode="wait">
        {page === "resume" ? (
          <Resume key="resume" onBack={() => { window.location.hash = ""; }} />
        ) : (
          <motion.div
            key="portfolio"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, filter: "blur(6px)" }}
            transition={{ duration: 0.5 }}
            className="noise relative min-h-screen bg-background"
          >
            <AnimatedBackground />
            <div className="relative z-10">
              <Navbar />
              <main>
                <Hero />
                <About />
                <Skills />
                <Experience />
                <Projects />
                <Services />
                <Testimonials />
                <TechStack />
                <Contact />
              </main>
              <Footer />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default App;
