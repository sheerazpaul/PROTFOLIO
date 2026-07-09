import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeProvider } from "./Components/ThemeContext";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Projects from "./Components/Projects.jsx";
import Stats from "./Components/Stats_Data.jsx";
import GitHubStats from "./Components/GitHubStats.jsx";
import About from "./Components/About.jsx";
import Blog from "./Components/Blog.jsx";
import Footer from "./Components/Footer.jsx";
import Resume from "./Components/Resume.jsx";
import "./index.css";

function App() {
  const [page, setPage] = useState("home");

  useEffect(() => {
    const handleHash = () => {
      setPage(window.location.hash === "#resume" ? "resume" : "home");
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
            transition={{ duration: 0.3 }}
            className="bg-dark min-h-screen relative overflow-hidden bg-grid"
          >
            <Navbar />
            <Home />
            <Projects/>
            <GitHubStats />
            <Stats />
            <About/>
            <Blog />
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default App;