import React from "react";
import Profile from "../Profile.json";
import FadeIn from "./FadeIn";
import {
  Code,
  Database,
  Palette,
  Terminal,
  Cloud,
  Layers,
} from "lucide-react";

const iconMap = {
  js: Code,
  react: Code,
  tailwind: Palette,
  html: Code,
  bootstrap: Layers,
  css: Code,
  redux: Layers,
  reactquery: Cloud,
  python: Code,
  django: Database,
  flask: Code,
  graphql: Code,
  api: Code,
  sql: Database,
  code: Code,
  postman: Terminal,
  git: Code,
  github: Code,
  vercel: Cloud,
  vscode: Code,
  figma: Palette,
  linux: Terminal,
};

const SkillsSection = () => {
  const { skills } = Profile;

  const groups = [
    { title: "Frontend", items: skills.frontend, icon: Palette },
    { title: "Backend", items: skills.backend, icon: Database },
    { title: "Tools", items: skills.tools, icon: Terminal },
  ];

  return (
    <section className="bg-[#081425] px-5 sm:px-8 md:px-10 py-24 sm:py-28">
      <FadeIn
        as="h2"
        className="hero-heading font-black uppercase leading-none tracking-tight text-center text-[clamp(3rem,12vw,160px)]"
      >
        Skills
      </FadeIn>

      <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-3 mt-16 sm:mt-20">
        {groups.map((group, i) => (
          <FadeIn
            key={group.title}
            delay={i * 0.1}
            className="border border-[#F8FAFC]/15 rounded-[28px] p-6 sm:p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <group.icon className="text-[#F8FAFC]" size={24} />
              <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-wide text-[#F8FAFC]">
                {group.title}
              </h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {group.items.map((skill, j) => {
                const Icon = iconMap[skill.icon] || Code;
                return (
                  <span
                    key={j}
                    className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#F8FAFC]/20 text-sm text-[#F8FAFC] hover:bg-[#F8FAFC]/10 transition-colors duration-300"
                  >
                    <Icon size={15} className="opacity-70 shrink-0" />
                    {skill.name}
                  </span>
                );
              })}
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
