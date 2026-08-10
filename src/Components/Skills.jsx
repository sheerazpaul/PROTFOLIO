import { motion } from "framer-motion";
import { Palette, Database, Wrench } from "lucide-react";
import SectionHeading from "./SectionHeading";
import SpotlightCard from "./SpotlightCard";
import Reveal from "./Reveal";
import Profile from "../Profile.json";

const groups = [
  { key: "frontend", title: "Frontend", icon: Palette, accent: "#4F46E5" },
  { key: "backend", title: "Backend", icon: Database, accent: "#06B6D4" },
  { key: "tools", title: "Tools", icon: Wrench, accent: "#22C55E" },
];

const Skills = () => {
  const skills = Profile.skills;

  return (
    <section id="skills" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <SectionHeading
          eyebrow="Expertise"
          title={
            <>
              Technical <span className="text-gradient">Skills</span>
            </>
          }
          description="A pragmatic toolkit refined through real production work — measured, honest, and continuously improving."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {groups.map((group, gi) => {
            const Icon = group.icon;
            const items = skills[group.key];
            return (
              <Reveal key={group.key} delay={gi * 0.12}>
                <SpotlightCard className="glass h-full rounded-3xl p-7">
                  <div className="mb-8 flex items-center gap-4">
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-2xl border border-border"
                      style={{ background: `${group.accent}1a`, color: group.accent }}
                    >
                      <Icon size={22} />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-semibold text-ink">{group.title}</h3>
                      <p className="text-xs text-muted">{items.length} skills</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {items.map((skill, i) => (
                      <motion.button
                        key={skill.name}
                        type="button"
                        initial={{ opacity: 0, y: 14, scale: 0.92 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true, margin: "-40px" }}
                        transition={{ duration: 0.45, delay: 0.05 * i, ease: [0.22, 1, 0.36, 1] }}
                        whileHover={{ y: -3, scale: 1.04 }}
                        className="cursor-pointer rounded-xl border border-border bg-background/60 px-4 py-2.5 text-sm font-medium text-ink transition-colors duration-300"
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = `${group.accent}1f`;
                          e.currentTarget.style.borderColor = group.accent;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = "";
                          e.currentTarget.style.borderColor = "";
                        }}
                      >
                        {skill.name}
                      </motion.button>
                    ))}
                  </div>
                </SpotlightCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
