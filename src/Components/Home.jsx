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
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50 pt-32" id="home">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-6 md:px-12"
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
              <span className="inline-block px-4 py-2 bg-[#14B8A6]/10 text-[#14B8A6] rounded-full text-sm font-medium">
                WELCOME TO MY PORTFOLIO
              </span>
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="text-[#14B8A6]">Creative</span>
              <br />
              Design Experience
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-xl text-gray-600 max-w-lg">
              {personal.role} based in {personal.location} with a passion for creating beautiful web experiences.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex gap-4 pt-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('works').scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-[#14B8A6] text-white rounded-xl font-medium
                  hover:bg-[#0D9488] transition-all duration-300 shadow-lg shadow-[#14B8A6]/30"
              >
                View My Work
              </motion.button>
              
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-[#14B8A6] text-[#14B8A6] rounded-xl font-medium
                  hover:bg-[#14B8A6] hover:text-white transition-all duration-300"
              >
                Contact Me
              </motion.a>
            </motion.div>

            {/* Stats Mini */}
            <motion.div variants={fadeInUp} className="flex gap-8 pt-8">
              <div>
                <p className="text-3xl font-bold text-[#14B8A6]">80+</p>
                <p className="text-gray-500">Clients</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#14B8A6]">200+</p>
                <p className="text-gray-500">Projects</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#14B8A6]">99+</p>
                <p className="text-gray-500">Reviews</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
              <div className="flex flex-col items-center text-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#14B8A6] to-[#0D9488] p-1 mb-4">
                  <img
                    src={personal.profileImage}
                    alt={personal.name}
                    className="w-full h-full rounded-full object-cover border-4 border-white"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{personal.name}</h3>
                <p className="text-[#14B8A6] font-medium mt-1">{personal.role}</p>
                <p className="text-gray-500 text-sm mt-4">{personal.ctaText}</p>
                
                <div className="w-full h-px bg-gray-200 my-6"></div>
                
                <div className="flex gap-4">
                  <a href="https://github.com/sheerazpaul" target="_blank" rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#14B8A6] hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.26.82-.58 0-.287-.01-1.05-.015-2.06-3.338.726-4.042-1.61-4.042-1.61-.546-1.39-1.335-1.76-1.335-1.76-1.09-.746.082-.73.082-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.776.418-1.306.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.235-3.22-.123-.3-.535-1.52.117-3.16 0 0 1.008-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.29-1.552 3.297-1.23 3.297-1.23.653 1.64.24 2.86.118 3.16.768.84 1.233 1.91 1.233 3.22 0 4.61-2.804 5.62-5.476 5.92.43.37.824 1.1.824 2.22 0 1.6-.015 2.89-.015 3.28 0 .32.216.7.83.58C20.565 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/></svg>
                  </a>
                  <a href="https://linkedin.com/in/sheerazpaul" target="_blank" rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#14B8A6] hover:text-white transition-colors">
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
            className="cursor-pointer w-10 h-10 rounded-full bg-[#14B8A6]/10 flex items-center justify-center"
          >
            <ArrowDown className="text-[#14B8A6]" size={20} />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;