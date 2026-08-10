import { motion } from "framer-motion";
import { Github, ExternalLink, Star, ArrowUpRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import SpotlightCard from "./SpotlightCard";
import Reveal from "./Reveal";
import Magnetic from "./Magnetic";
import Profile from "../Profile.json";

const Projects = () => {
  const projects = Profile.ProjectsLink;
  const githubUrl = "https://github.com/sheerazpaul";
  const featured = projects[0];
  const rest = projects.slice(1);

  const ProjectCard = ({ project, i = 0 }) => (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: (i % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group h-full"
    >
      <SpotlightCard className="glass flex h-full flex-col rounded-3xl transition-all duration-500 hover:-translate-y-2">
        <div className="relative overflow-hidden">
          <img
            src={project.img}
            alt={project.title}
            loading="lazy"
            className="aspect-video w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
          {i < 2 && (
            <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full glass px-3 py-1.5 text-xs font-semibold text-ink">
              <Star size={12} className="fill-accent text-accent" />
              Featured
            </span>
          )}
          <div className="absolute right-4 top-4 flex gap-2 opacity-0 transition-all duration-300 group-hover:opacity-100">
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} on GitHub`}
              className="flex h-9 w-9 items-center justify-center rounded-xl glass text-ink transition-colors hover:bg-primary"
            >
              <Github size={15} />
            </a>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${project.title} live`}
              className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-white transition-colors hover:bg-secondary"
            >
              <ExternalLink size={15} />
            </a>
          </div>
        </div>

        <div className="flex flex-1 flex-col p-6">
          <h3 className="font-display text-lg font-semibold text-ink transition-colors group-hover:text-primary">
            {project.title}
          </h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{project.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span key={t} className="rounded-lg border border-border bg-background/60 px-2.5 py-1 text-[11px] text-muted">
                {t}
              </span>
            ))}
          </div>
        </div>
      </SpotlightCard>
    </motion.div>
  );

  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <SectionHeading
          eyebrow="Portfolio"
          title={
            <>
              Featured <span className="text-gradient">Projects</span>
            </>
          }
          description="A selection of production work — each built with care for performance, polish, and real-world impact."
        />

        <Reveal className="mb-6">
          <SpotlightCard className="glass overflow-hidden rounded-3xl">
            <div className="grid lg:grid-cols-2">
              <div className="relative overflow-hidden">
                <img
                  src={featured.img}
                  alt={featured.title}
                  loading="lazy"
                  className="h-64 w-full object-cover transition-transform duration-700 lg:h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/40" />
              </div>
              <div className="relative flex flex-col justify-center p-8 md:p-12">
                <span className="inline-flex w-fit items-center gap-2 rounded-full bg-primary/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
                  <ArrowUpRight size={13} /> Flagship Project
                </span>
                <h3 className="mt-5 font-display text-3xl font-bold text-ink md:text-4xl">{featured.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted md:text-base">{featured.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {featured.tech.map((t) => (
                    <span key={t} className="rounded-lg border border-border bg-background/60 px-3 py-1.5 text-xs text-ink">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Magnetic>
                    <a
                      href={featured.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-primary to-secondary px-6 py-3.5 font-display text-sm font-semibold text-white shadow-xl shadow-primary/30 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/40"
                    >
                      Live Demo <ExternalLink size={15} />
                    </a>
                  </Magnetic>
                  <Magnetic>
                    <a
                      href={githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-2xl glass px-6 py-3.5 font-display text-sm font-semibold text-ink transition-colors hover:bg-border"
                    >
                      <Github size={15} /> Source
                    </a>
                  </Magnetic>
                </div>
              </div>
            </div>
          </SpotlightCard>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((project, i) => (
            <ProjectCard key={project.title} project={project} i={i} />
          ))}
        </div>

        <Reveal className="mt-10 text-center">
          <Magnetic>
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl glass px-7 py-4 font-display text-sm font-semibold text-ink transition-colors hover:bg-border"
            >
              <Github size={17} /> View More on GitHub
            </a>
          </Magnetic>
        </Reveal>
      </div>
    </section>
  );
};

export default Projects;
