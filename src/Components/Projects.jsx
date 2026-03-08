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
      className="py-24 px-6 md:px-12 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-[#14B8A6]/10 text-[#14B8A6] rounded-full text-sm font-medium mb-4">
            MY WORK
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Featured <span className="text-[#14B8A6]">Projects</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            Here are some of my recent projects that showcase my skills and experience in frontend development.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -10 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-700 hover:bg-[#14B8A6] hover:text-white transition-all"
                  >
                    <ExternalLink size={18} />
                  </a>
                  <a
                    href="https://github.com/sheerazpaul"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-700 hover:bg-[#14B8A6] hover:text-white transition-all"
                  >
                    <Github size={18} />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  A modern web project built with React and Tailwind CSS featuring responsive design and clean UI.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["React", "Tailwind", "Vercel"].map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs rounded-full bg-[#14B8A6]/10 text-[#14B8A6]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#14B8A6] font-medium hover:underline flex items-center gap-1"
                  >
                    Live Demo <ExternalLink size={14} />
                  </a>
                  <a
                    href="https://github.com/sheerazpaul"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 font-medium hover:text-[#14B8A6] flex items-center gap-1"
                  >
                    Source <Github size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div variants={fadeInUp} className="text-center mt-16">
          <a
            href="https://github.com/sheerazpaul"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-4 bg-[#14B8A6] text-white rounded-xl font-medium
              hover:bg-[#0D9488] transition-colors shadow-lg shadow-[#14B8A6]/30">
              View All Projects on GitHub
            </button>
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Projects;