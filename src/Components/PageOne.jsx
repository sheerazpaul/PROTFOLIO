import React from "react";
import { motion } from "framer-motion";
import Profile from "../Profile.json";
import { Route } from "lucide-react";

const PageOne = () => {
  const { personal, about, experience } = Profile;

  return (
    <div className="min-h-full overflow-y-auto">
      <div className="relative flex flex-col justify-center min-h-screen px-6 md:px-12">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/20 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-secondary/10 blur-[120px] pointer-events-none" />

        <div className="w-full mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="space-y-8">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-block px-4 py-2 text-sm font-medium border rounded-full bg-primary/10 text-primary border-primary/20"
              >
                WELCOME TO MY PORTFOLIO
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-5xl font-extrabold leading-tight tracking-tight md:text-7xl text-text"
              >
                Hi, I'm{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">{personal.name}</span>
                <br />
                <span className="text-3xl font-normal md:text-5xl text-softGray">{personal.role}</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="max-w-xl text-lg leading-relaxed text-softGray"
              >
                {personal.ctaText}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap gap-4 pt-2"
              >
                <a
                  href="https://github.com/sheerazpaul"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3.5 bg-gradient-to-r from-primary to-secondary text-white text-sm font-semibold rounded-xl hover:opacity-90 transition-all shadow-lg shadow-primary/30"
                >
                  View My Work
                </a>
                <button
                  onClick={() => { window.location.hash = "resume"; }}
                  className="px-8 py-3.5 bg-card-glass border border-border backdrop-blur-md text-text text-sm font-semibold rounded-xl hover:bg-primary hover:text-white hover:border-primary transition-all"
                >
                  Download CV
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex gap-8 pt-6 md:gap-12"
              >
                {[
                  { value: "1+", label: "Years Exp" },
                  { value: "6+", label: "Projects" },
                  { value: "8+", label: "Technologies" },
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <p className="text-3xl font-bold md:text-4xl text-primary">{stat.value}</p>
                    <p className="mt-1 text-xs tracking-wide text-softGray">{stat.label}</p>
                  </div>
                ))}
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="flex flex-col items-center">
                <div className="w-56 h-56 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-primary to-secondary p-1 mb-4 shadow-[0_0_40px_rgba(78,177,197,0.25)]">
                  <img
                    src={personal.profileImage}
                    alt={personal.name}
                    className="object-cover w-full h-full border-4 rounded-full border-dark"
                  />
                </div>
                <h3 className="text-xl font-bold text-text">{personal.name}</h3>
                <p className="text-sm font-medium text-primary">{personal.role}</p>
                <div className="flex gap-3 mt-3">
                  <a href="https://github.com/sheerazpaul" target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center transition-all border rounded-full w-9 h-9 bg-card-glass border-border backdrop-blur-md text-softGray hover:bg-primary hover:text-white">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.26.82-.58 0-.287-.01-1.05-.015-2.06-3.338.726-4.042-1.61-4.042-1.61-.546-1.39-1.335-1.76-1.335-1.76-1.09-.746.082-.73.082-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.776.418-1.306.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.235-3.22-.123-.3-.535-1.52.117-3.16 0 0 1.008-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.29-1.552 3.297-1.23 3.297-1.23.653 1.64.24 2.86.118 3.16.768.84 1.233 1.91 1.233 3.22 0 4.61-2.804 5.62-5.476 5.92.43.37.824 1.1.824 2.22 0 1.6-.015 2.89-.015 3.28 0 .32.216.7.83.58C20.565 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/></svg>
                  </a>
                  <a href="https://linkedin.com/in/sheerazpaul" target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center transition-all border rounded-full w-9 h-9 bg-card-glass border-border backdrop-blur-md text-softGray hover:bg-primary hover:text-white">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* About Me Section */}
      <section className="relative px-6 py-24 overflow-hidden md:px-12" id="about">
        <div className="absolute top-1/4 -right-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="mx-auto max-w-7xl">
          <div className="grid items-start grid-cols-1 gap-16 lg:grid-cols-12">
            {/* Left: Profile Image */}
            <div className="flex justify-center lg:col-span-5">
              <div className="relative group">
                <div className="absolute border rounded-full -inset-4 bg-card-glass border-border animate-pulse opacity-30" />
                <div className="relative w-64 h-64 p-2 border rounded-full md:w-80 md:h-80 bg-card-glass border-border backdrop-blur-md">
                  <div className="w-full h-full overflow-hidden rounded-full bg-dark">
                    <img
                      src={personal.profileImage}
                      alt={personal.name}
                      className="object-cover w-full h-full transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-card-glass border border-border backdrop-blur-md px-5 py-2.5 rounded-2xl flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 bg-primary rounded-full animate-ping" />
                  <span className="text-xs font-semibold text-text">6+ Years Exp</span>
                </div>
              </div>
            </div>

            {/* Right: Content */}
            <div className="space-y-10 lg:col-span-7">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-px bg-primary" />
                  <span className="text-primary text-xs font-semibold uppercase tracking-[0.15em]">About Me</span>
                </div>
                <h2 className="mb-6 text-3xl font-extrabold leading-tight md:text-5xl text-text">
                  The Architect Behind <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-tertiary">The Code</span>
                </h2>
                <div className="space-y-5 text-base leading-relaxed text-softGray">
                  <p>{about.description}</p>
                  <p>
                    I believe that great software is not just about writing code that works—it's about crafting
                    solutions that are maintainable, performant, and delightful for users. Every project I ship
                    is built to scale — from the database schema to the last pixel.
                  </p>
                </div>
              </div>

              {/* Professional Journey Timeline */}
              <div className="p-8 border bg-card-glass border-border rounded-2xl backdrop-blur-md">
                <h3 className="flex items-center gap-3 mb-8 text-xl font-bold text-text">
                  <Route className="text-primary" size={22} />
                  Professional Journey
                </h3>
                <div className="relative ml-3 space-y-10 border-l-2 border-dashed border-border">
                  {experience.map((exp, i) => (
                    <div key={i} className="relative pl-10">
                      <div className={`absolute left-[-9px] top-1 w-4 h-4 rounded-full ${i === 0 ? 'bg-primary ring-4 ring-primary/20' : 'bg-border ring-4 ring-border/10'}`} />
                      <div>
                        <span className={`text-xs font-bold ${i === 0 ? 'text-primary' : 'text-softGray'}`}>{exp.duration}</span>
                        <h4 className="text-base font-bold text-text mt-0.5">{exp.role} at {exp.company}</h4>
                        <p className="mt-1 text-sm text-softGray">{exp.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PageOne;
