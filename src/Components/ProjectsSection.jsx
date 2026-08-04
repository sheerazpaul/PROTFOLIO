import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Profile from "../Profile.json";
import FadeIn from "./FadeIn";
import LiveProjectButton from "./LiveProjectButton";

const ProjectCard = ({ project, index, range, targetScale, progress }) => {
  const scale = useTransform(progress, range, [1, targetScale]);
  const num = String(index + 1).padStart(2, "0");

  return (
    <div
      className="h-[85vh] flex items-center justify-center sticky"
      style={{ top: `${index * 28}px` }}
    >
      <motion.div
        style={{ scale }}
        className="w-full max-w-6xl origin-top rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#F8FAFC] bg-[#081425] p-4 sm:p-6 md:p-8"
      >
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div className="flex items-start gap-4 sm:gap-6">
            <span className="text-[#F8FAFC] font-black leading-none text-[clamp(3rem,8vw,140px)]">
              {num}
            </span>
            <div className="pt-1 sm:pt-2">
              <p className="text-[#F8FAFC]/50 font-medium uppercase tracking-widest text-xs sm:text-sm">
                Web App
              </p>
              <h3 className="mt-1 text-[#F8FAFC] font-bold uppercase tracking-wide text-[clamp(1.2rem,3vw,2.6rem)] leading-tight">
                {project.title}
              </h3>
            </div>
          </div>
          <div className="hidden md:block pt-2">
            <LiveProjectButton href={project.url} />
          </div>
        </div>

        <div className="mt-4 sm:mt-6">
          <img
            src={project.img}
            alt={project.title}
            loading="lazy"
            draggable={false}
            className="w-full h-[clamp(220px,36vw,480px)] object-cover object-top rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
          />
        </div>

        <div className="mt-4 sm:mt-6 flex items-center justify-between gap-4 flex-wrap">
          <p className="text-[#F8FAFC]/70 font-light leading-relaxed text-sm sm:text-base max-w-2xl">
            {project.description}
          </p>
          <div className="md:hidden">
            <LiveProjectButton href={project.url} className="px-6 py-2.5 text-xs" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const ProjectsSection = () => {
  const projects = Profile.ProjectsLink;
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <section
      id="projects"
      className="relative z-10 -mt-10 sm:-mt-12 md:-mt-14 rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] bg-[#081425] pt-20 sm:pt-24 px-5 sm:px-8 md:px-10 pb-10"
    >
      <FadeIn
        as="h2"
        className="hero-heading font-black uppercase leading-none tracking-tight text-center text-[clamp(3rem,12vw,160px)]"
      >
        Project
      </FadeIn>

      <div ref={container} className="mt-10 sm:mt-14 md:mt-20">
        {projects.map((project, i) => {
          const range = [i / projects.length, 1];
          const targetScale = 1 - (projects.length - 1 - i) * 0.03;
          return (
            <ProjectCard
              key={i}
              project={project}
              index={i}
              range={range}
              targetScale={targetScale}
              progress={scrollYProgress}
            />
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
