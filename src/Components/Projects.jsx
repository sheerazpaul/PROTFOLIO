import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Profile from "../Profile.json";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = Profile.ProjectsLink;
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  const fadeInUp = {
    hidden: { y: 60, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <motion.section
      ref={ref}
      id="works"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={staggerContainer}
      className="px-6 py-24 md:px-12 bg-dark relative overflow-hidden"
    >
      <motion.div 
        animate={{ x: [0, 20, 0], y: [0, -20, 0], scale: [1, 1.1, 1] }} 
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[30%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/5 blur-[120px] pointer-events-none" 
      />
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div variants={fadeInUp} className="mb-16 text-center">
          <span className="inline-block px-6 py-2 bg-primary/10 text-primary border border-primary/20 rounded-full text-sm font-medium mb-4">
            PORTFOLIO
          </span>
          <h2 className="text-4xl font-bold text-text md:text-5xl">
            Recent <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Projects</span>
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-softGray">
            Real-world applications built with modern technologies — from interactive UIs to full-stack platforms.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          variants={staggerContainer}
          className="grid gap-8 md:grid-cols-2"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -10 }}
              className="overflow-hidden transition-all duration-300 bg-card-glass border border-border backdrop-blur-md shadow-lg group rounded-2xl hover:shadow-[0_0_30px_rgba(20,184,166,0.3)] hover:border-primary/50"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.img}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-black/70 via-transparent to-transparent group-hover:opacity-100" />
                
                <div className="absolute flex gap-2 transition-opacity duration-300 opacity-0 top-4 right-4 group-hover:opacity-100">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-card/80 backdrop-blur-md flex items-center justify-center text-text hover:bg-primary hover:text-white transition-all shadow-lg border border-border"
                  >
                    <ExternalLink size={18} />
                  </a>
                  <a
                    href="https://github.com/sheerazpaul"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-card/80 backdrop-blur-md flex items-center justify-center text-text hover:bg-primary hover:text-white transition-all shadow-lg border border-border"
                  >
                    <Github size={18} />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="mb-2 text-2xl font-bold text-text">
                  {project.title}
                </h3>
                <p className="mb-4 text-softGray">
                  {project.description || "A modern web project featuring responsive design, clean UI, and robust performance."}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {(project.tech || ["React", "Tailwind", "Vercel"]).map((tech, i) => {
                    const dotColor = {
                      React: "bg-cyan-400",
                      "Tailwind CSS": "bg-sky-400",
                      "Google Maps API": "bg-green-400",
                      "Framer Motion": "bg-pink-400",
                      "REST API": "bg-amber-400",
                      "Python": "bg-blue-400",
                      "Django": "bg-emerald-400",
                      "Financial API": "bg-violet-400",
                      "CSS3": "bg-orange-400",
                    }[tech] || "bg-primary";
                    return (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1.5 px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        <span className={`w-1.5 h-1.5 rounded-full ${dotColor}`} />
                        {tech}
                      </span>
                    );
                  })}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary font-medium hover:text-secondary flex items-center gap-1 transition-colors"
                  >
                    Live Demo <ExternalLink size={14} />
                  </a>
                  <a
                    href="https://github.com/sheerazpaul"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-softGray font-medium hover:text-primary flex items-center gap-1 transition-colors"
                  >
                    Source <Github size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div variants={fadeInUp} className="mt-16 text-center">
          <a
            href="https://github.com/sheerazpaul"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-bold tracking-wide
              hover:opacity-90 transition-all shadow-[0_0_20px_rgba(20,184,166,0.4)] transform hover:-translate-y-1">
              View All Projects on GitHub
            </button>
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Projects;