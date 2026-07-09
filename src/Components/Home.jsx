import React from "react";
import { motion } from "framer-motion";
import Profile from "../Profile.json";
import { ArrowDown } from "lucide-react";

const Home = () => {
  const { personal } = Profile;

  const fadeInUp = {
    initial: { y: 60, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.8 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen pt-32 bg-dark relative overflow-hidden" id="home">
      {/* Background glowing effects */}
      <motion.div 
        animate={{ y: [0, -30, 0], scale: [1, 1.1, 1] }} 
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/20 blur-[120px] pointer-events-none" 
      />
      <motion.div 
        animate={{ y: [0, 30, 0], scale: [1, 1.2, 1] }} 
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-secondary/10 blur-[120px] pointer-events-none" 
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="px-6 mx-auto max-w-7xl md:px-12"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Column - Text Content */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="space-y-8"
          >
            <motion.div variants={fadeInUp}>
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                WELCOME TO MY PORTFOLIO
              </span>
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-5xl font-bold leading-tight md:text-7xl text-text">
              Hi, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">{personal.name}</span>
              <br />
              <span className="text-4xl md:text-6xl text-softGray font-medium">{personal.role}</span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="max-w-xl text-lg md:text-xl text-softGray leading-relaxed">
              I architect and build scalable web applications — from React frontends to Django APIs. Based in {personal.location}, I ship production-grade code that drives real impact.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 pt-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('works').scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-primary text-white rounded-xl font-medium
                  hover:opacity-90 transition-all duration-300 shadow-lg shadow-primary/30"
              >
                View My Work
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => { window.location.hash = "resume"; }}
                className="px-8 py-4 bg-card-glass border border-border backdrop-blur-md text-text rounded-xl font-medium
                  hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
              >
                Download CV
              </motion.button>
              
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-primary text-primary rounded-xl font-medium
                  hover:bg-primary hover:text-white transition-all duration-300"
              >
                Contact Me
              </motion.a>
            </motion.div>

            {/* Stats Row */}
            <motion.div variants={fadeInUp} className="flex gap-8 md:gap-12 pt-8">
              {[
                { value: "1+", label: "Years Experience" },
                { value: "6+", label: "Projects Delivered" },
                { value: "8+", label: "Technologies" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <p className="text-3xl md:text-4xl font-bold text-primary">{stat.value}</p>
                  <p className="text-sm text-softGray mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="p-8 ">
              <div className="flex flex-col items-center text-center">
                <motion.div 
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="w-60 h-60 rounded-full bg-gradient-to-br from-primary to-secondary p-1 mb-4 shadow-[0_0_30px_rgba(20,184,166,0.3)]"
                >
                  <img
                    src={personal.profileImage}
                    alt={personal.name}
                    className="object-cover w-full h-full border-4 border-dark rounded-full"
                  />
                </motion.div>
                <h3 className="mt-2 text-2xl font-bold text-text">{personal.name}</h3>
                <p className="text-primary font-medium mt-2">{personal.role}</p>
                <p className="mt-4 text-sm text-softGray">{personal.ctaText}</p>
                <div className="flex gap-4 mt-4">
                  <a href="https://github.com/sheerazpaul" target="_blank" rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-card-glass border border-border backdrop-blur-md flex items-center justify-center text-softGray hover:bg-primary hover:text-white transition-all shadow-lg">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.26.82-.58 0-.287-.01-1.05-.015-2.06-3.338.726-4.042-1.61-4.042-1.61-.546-1.39-1.335-1.76-1.335-1.76-1.09-.746.082-.73.082-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.776.418-1.306.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.235-3.22-.123-.3-.535-1.52.117-3.16 0 0 1.008-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.29-1.552 3.297-1.23 3.297-1.23.653 1.64.24 2.86.118 3.16.768.84 1.233 1.91 1.233 3.22 0 4.61-2.804 5.62-5.476 5.92.43.37.824 1.1.824 2.22 0 1.6-.015 2.89-.015 3.28 0 .32.216.7.83.58C20.565 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/></svg>
                  </a>
                  <a href="https://linkedin.com/in/sheerazpaul" target="_blank" rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-card-glass border border-border backdrop-blur-md flex items-center justify-center text-softGray hover:bg-primary hover:text-white transition-all shadow-lg">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="flex justify-center mt-12"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            onClick={() => window.scrollBy({ top: window.innerHeight, behavior: "smooth" })}
            className="cursor-pointer w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center"
          >
            <ArrowDown className="text-primary" size={20} />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;