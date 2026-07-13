import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeProvider } from "./Components/ThemeContext";
import Navbar from "./Components/Navbar";
import PageOne from "./Components/PageOne";
import PageTwo from "./Components/PageTwo";
import PageThree from "./Components/PageThree";
import PageFour from "./Components/PageFour";
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
            className="bg-dark min-h-screen relative bg-grid"
          >
            <Navbar />
            <PageOne />
            <PageTwo />
            <PageThree />
            <PageFour />
          </motion.div>
        )}
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default App;
