import React from "react";
import { motion } from "framer-motion";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Projects from "./Components/Projects.jsx";
import Stats from "./Components/Stats_Data.jsx"; //Import the new component
import About from "./Components/About.jsx";
import "./index.css";

function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white min-h-screen"
    >
      <Navbar />
      <Home />
      <Projects/>
      <Stats /> {/* Add this line */}
      <About/>
    </motion.div>
  );
}

export default App;