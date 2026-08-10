import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, CheckCircle2, ChevronDown, Layers } from "lucide-react";
import SectionHeading from "./SectionHeading";
import SpotlightCard from "./SpotlightCard";
import Reveal from "./Reveal";
import Profile from "../Profile.json";

const roleTech = {
  "Front End Developer": ["React", "JavaScript", "CSS3", "REST APIs", "Responsive Design", "Git"],
  "Full Stack Developer": ["React", "Django", "Python", "REST APIs", "PostgreSQL", "Docker"],
};

const Experience = () => {
  const experiences = Profile["Work Experience"];
  const [active, setActive] = useState(0);

  return (
    <section id="experience" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6 md:px-8">
        <SectionHeading
          eyebrow="Career"
          title={
            <>
              Work <span className="text-gradient">Experience</span>
            </>
          }
          description="Select a role to explore responsibilities, achievements, and the technologies behind each chapter."
        />

        <div className="relative space-y-4 before:absolute before:left-[21px] before:top-6 before:bottom-6 before:w-px before:bg-gradient-to-b before:from-primary before:via-secondary before:to-transparent md:before:left-[26px]">
          {experiences.map((exp, i) => {
            const isActive = active === i;
            const monogram = exp.company.charAt(0);
            return (
              <Reveal key={i} delay={i * 0.12}>
                <div className="relative pl-14 md:pl-[4.5rem]">
                  <button
                    onClick={() => setActive(isActive ? -1 : i)}
                    aria-expanded={isActive}
                    className="absolute left-0 top-6 z-10 cursor-pointer"
                  >
                    <motion.span
                      animate={{ scale: isActive ? 1.15 : 1 }}
                      className="flex h-11 w-11 items-center justify-center rounded-2xl border font-display text-sm font-bold text-ink shadow-lg shadow-black/20 md:h-[3.25rem] md:w-[3.25rem] md:text-base"
                      style={{
                        borderColor: isActive ? "var(--color-primary)" : "var(--color-border)",
                        background: isActive
                          ? "linear-gradient(135deg, var(--color-primary), var(--color-secondary))"
                          : "var(--color-surface)",
                        color: isActive ? "#fff" : "var(--color-ink)",
                      }}
                    >
                      {monogram}
                    </motion.span>
                  </button>

                  <SpotlightCard
                    className={`glass rounded-2xl p-6 transition-all duration-500 md:p-7 ${
                      isActive ? "shadow-xl shadow-primary/10" : ""
                    }`}
                  >
                    <button
                      onClick={() => setActive(isActive ? -1 : i)}
                      className="flex w-full items-start justify-between gap-4 text-left cursor-pointer"
                    >
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3">
                          <h3 className="font-display text-lg font-semibold text-ink md:text-xl">{exp.role}</h3>
                          {i === experiences.length - 1 && (
                            <span className="rounded-full bg-accent/15 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-accent">
                              Current
                            </span>
                          )}
                        </div>
                        <p className="mt-1 flex items-center gap-2 text-sm text-primary">
                          <Briefcase size={14} /> {exp.company} · {exp.duration}
                        </p>
                        <p className="mt-3 text-sm leading-relaxed text-muted">{exp.description}</p>
                      </div>
                      <motion.span
                        animate={{ rotate: isActive ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className={`mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-border text-muted ${
                          isActive ? "text-primary" : ""
                        }`}
                      >
                        <ChevronDown size={16} />
                      </motion.span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="mt-6 grid gap-6 md:grid-cols-2">
                            <div>
                              <p className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted">
                                <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Responsibilities
                              </p>
                              <ul className="space-y-2.5">
                                {exp.responsibilities.map((r, j) => (
                                  <li key={j} className="flex items-start gap-2.5 text-sm text-muted">
                                    <span className="mt-1 text-primary">→</span>
                                    {r}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <p className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted">
                                <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Achievements
                              </p>
                              <ul className="space-y-2.5">
                                {exp.achievements.map((a, j) => (
                                  <li key={j} className="flex items-start gap-2.5 text-sm text-muted">
                                    <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-accent" />
                                    {a}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          <div className="mt-6 border-t border-border pt-5">
                            <p className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted">
                              <Layers size={14} className="text-secondary" /> Technologies
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {(roleTech[exp.role] || []).map((tech) => (
                                <span
                                  key={tech}
                                  className="rounded-lg border border-border bg-background/60 px-3 py-1.5 text-xs font-medium text-ink transition-colors hover:border-primary/40"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </SpotlightCard>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
