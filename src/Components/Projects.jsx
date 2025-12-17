import React from "react";
import Profile from "../Profile.json";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
const Projects = () => {
  const projects = Profile.ProjectsLink;
  return (
    <section
      id="projects"
      className="min-h-screen bg-zinc-950 px-6 md:px-20 py-24"
    >
      <h2 className="text-4xl font-bold text-center text-[#4eb1c5] mb-16">
        Projects
      </h2>
      <div className="grid md:grid-cols-2 gap-10 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:border-[#4eb1c5]/40 transition duration-300"
          >
            <div className="relative h-56 overflow-hidden">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition" />
              <div className="absolute top-4 right-4 flex gap-3 opacity-0 group-hover:opacity-100 transition">
                <a
                  href={project.url}
                  target="_blank"
                  className="p-3 rounded-full bg-white/10 backdrop-blur-md text-white hover:text-[#4eb1c5] hover:bg-black"
                >
                  <FaExternalLinkAlt />
                </a>
                <a
                  href="https://github.com/sheerazpaul"
                  target="_blank"
                  className="p-3 rounded-full bg-[#4eb1c5]/10 backdrop-blur-md text-white hover:text-[#4eb1c5] hover:bg-black"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-white mb-3">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                A modern web project built using React and Tailwind CSS with
                responsive UI and clean architecture.
              </p>
              <div className="flex flex-wrap gap-3 text-sm text-gray-300 mb-6">
                <span>React</span>
                <span>Tailwind</span>
                <span>Vercel</span>
              </div>
              <div className="flex gap-4">
                <a
                  href={project.url}
                  target="_blank"
                  className="flex items-center gap-2 px-5 py-2 rounded-lg border border-white/20 text-white hover:border-[#4eb1c5] hover:text-[#4eb1c5] transition"
                >
                  <FaExternalLinkAlt />
                  Live Demo
                </a>
                <a
                  href="https://github.com/sheerazpaul"
                  target="_blank"
                  className="flex items-center gap-2 px-5 py-2 rounded-lg border border-white/20 text-white hover:border-[#4eb1c5] hover:text-[#4eb1c5] transition"
                >
                  <FaGithub />
                  Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-12 flex justify-center">
        <a
          href="https://github.com/sheerazpaul"
          target="_blank"
          rel="noreferrer"
        >
          <button className="px-6 py-3 rounded-full bg-[#4eb1c5] text-white hover:bg-[#2396ad] transition shadow-sm shadow-[#4eb1c5]/30 font-semibold">
            View Projects
          </button>
        </a>
      </div>
    </section>
  );
};
export default Projects;