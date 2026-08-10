import { motion } from "framer-motion";
import { Download, Building2, GraduationCap } from "lucide-react";
import Magnetic from "./Magnetic";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import CountUp from "./CountUp";
import SpotlightCard from "./SpotlightCard";
import Profile from "../Profile.json";

const About = () => {
  const { personal, about, experience } = Profile;
  const allSkills = [...Profile.skills.frontend, ...Profile.skills.backend, ...Profile.skills.tools];

  const stats = [
    { end: 1, suffix: "+", label: "Years Experience" },
    { end: 9, suffix: "+", label: "Projects Shipped" },
    { end: 8, suffix: "+", label: "Technologies" },
    { end: 100, suffix: "%", label: "Commitment" },
  ];

  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <SectionHeading
          eyebrow="About Me"
          title={
            <>
              Crafting <span className="text-gradient">digital experiences</span>
            </>
          }
          description="A focused full-stack engineer who cares about the details — from database schema to the last pixel."
        />

        <div className="grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-5" delay={0.1}>
            <SpotlightCard className="glass h-full rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary text-white shadow-lg shadow-primary/30">
                  <GraduationCap size={22} />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-ink">Who I am</h3>
                  <p className="text-sm text-muted">{personal.role}</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-muted">{about.description}</p>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-2xl bg-background/60 border border-border p-5 text-center">
                    <p className="font-display text-3xl font-bold text-gradient">
                      <CountUp end={stat.end} suffix={stat.suffix} />
                    </p>
                    <p className="mt-1 text-xs text-muted">{stat.label}</p>
                  </div>
                ))}
              </div>

              <Magnetic className="mt-8">
                <button
                  onClick={() => { window.location.hash = "resume"; }}
                  className="group inline-flex w-full items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-primary to-secondary px-6 py-4 font-display text-sm font-semibold text-white shadow-xl shadow-primary/30 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/40 cursor-pointer"
                >
                  <Download size={17} className="transition-transform duration-300 group-hover:translate-y-0.5" />
                  Download Resume
                </button>
              </Magnetic>
            </SpotlightCard>
          </Reveal>

          <div className="lg:col-span-7">
            <Reveal delay={0.2}>
              <div className="flex items-center gap-3 mb-8">
                <Building2 className="text-primary" size={20} />
                <h3 className="font-display text-xl font-semibold text-ink">Professional Journey</h3>
              </div>
            </Reveal>

            <div className="relative space-y-6 before:absolute before:left-[13px] before:top-3 before:bottom-3 before:w-px before:bg-gradient-to-b before:from-primary before:via-secondary before:to-transparent md:before:left-[17px]">
              {experience.map((exp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                  className="relative pl-12 md:pl-16"
                >
                  <span className="absolute left-0 top-1.5 flex h-7 w-7 items-center justify-center rounded-full border border-primary bg-background md:h-9 md:w-9">
                    <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-br from-primary to-secondary" />
                  </span>
                  <SpotlightCard className="glass rounded-2xl p-6 transition-colors duration-300">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div>
                        <h4 className="font-display text-lg font-semibold text-ink">{exp.role}</h4>
                        <p className="text-sm text-primary">{exp.company}</p>
                      </div>
                      <span className="rounded-full border border-border bg-background/60 px-3 py-1 text-xs text-muted">
                        {exp.duration}
                      </span>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-muted">{exp.description}</p>
                  </SpotlightCard>
                </motion.div>
              ))}
            </div>

            <Reveal delay={0.2} className="mt-10">
              <div className="flex flex-wrap gap-2.5">
                {allSkills.slice(0, 12).map((skill) => (
                  <span
                    key={skill.name}
                    className="rounded-xl border border-border bg-background/60 px-3.5 py-2 text-xs font-medium text-muted transition-all duration-300 hover:border-primary/40 hover:text-ink"
                  >
                    {skill.name}
                  </span>
                ))}
                <span className="rounded-xl gradient-border px-3.5 py-2 text-xs font-semibold text-ink">
                  +{Math.max(allSkills.length - 12, 0)} more
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
