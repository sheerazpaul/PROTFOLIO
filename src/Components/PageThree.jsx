import React from "react";
import { motion } from "framer-motion";
import Profile from "../Profile.json";
import { ExternalLink, Github } from "lucide-react";

const PageThree = () => {
  const projects = Profile.ProjectsLink;

  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const item = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div className="min-h-full overflow-y-auto">
      <div className="px-6 md:px-12 py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <motion.div
            id="projects"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={item} className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary border border-primary/20 rounded-full text-sm font-medium mb-4">
                PORTFOLIO
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-text">Recent <span className="text-primary">Projects</span></h2>
              <p className="max-w-2xl mx-auto mt-4 text-softGray text-sm">
                Real-world applications built with modern technologies.
              </p>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, i) => (
                <motion.div
                  key={i}
                  variants={item}
                  whileHover={{ y: -6, scale: 1.01 }}
                  className="group bg-card-glass border border-border rounded-2xl backdrop-blur-md overflow-hidden hover:border-primary/40 transition-all"
                >
                  {project.img && project.img !== "." && (
                    <div className="relative h-44 overflow-hidden">
                      <img
                        src={project.img}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent" />
                      <div className="absolute top-3 right-3 flex gap-2">
                        {project.url && (
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 rounded-lg bg-dark/60 backdrop-blur-sm flex items-center justify-center text-softGray hover:text-primary hover:bg-primary/20 transition-all"
                          >
                            <ExternalLink size={14} />
                          </a>
                        )}
                      </div>
                    </div>
                  )}

                  <div className="p-5">
                    <h3 className="text-base font-bold text-text mb-2">{project.title}</h3>
                    {project.description && project.description !== "." && (
                      <p className="text-xs text-softGray leading-relaxed mb-3 line-clamp-2">{project.description}</p>
                    )}
                    <div className="flex flex-wrap gap-1.5">
                      {(project.tech || []).map((t, j) => (
                        <span key={j} className="px-2.5 py-1 text-[10px] font-medium rounded-lg bg-primary/10 text-primary border border-primary/20">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PageThree;
