import React from "react";
import { motion } from "framer-motion";
import Profile from "../Profile.json";
import { Code, Database, Palette } from "lucide-react";

const iconMap = {
  js: Code, react: Code, tailwind: Palette, html: Code, bootstrap: Palette,
  css: Code, redux: Code, reactquery: Code, python: Code, django: Database,
  flask: Code, graphql: Code, api: Code, sql: Database, code: Code,
  postman: Code, git: Code, github: Code, vercel: Code, vscode: Code, figma: Palette, linux: Code
};

const PageTwo = () => {
  const { skills, "Work Experience": experiences } = Profile;

  const skillGroups = [
    { title: "Frontend", items: skills.frontend, icon: Palette, color: "from-primary to-secondary" },
    { title: "Backend", items: skills.backend, icon: Database, color: "from-primary to-secondary" },
    { title: "Tools", items: skills.tools, icon: Code, color: "from-primary to-secondary" }
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div className="min-h-full overflow-y-auto">
      <div className="px-6 md:px-12 py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          {/* Skills Section */}
          <motion.div
            id="skills"
            variants={container}
            initial="hidden"
            animate="visible"
            className="mb-20"
          >
            <motion.div variants={item} className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary border border-primary/20 rounded-full text-sm font-medium mb-4">
                EXPERTISE
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-text">Technical <span className="text-primary">Skills</span></h2>
            </motion.div>

            <div className="grid gap-10 md:grid-cols-3">
              {skillGroups.map((group) => (
                <motion.div key={group.title} variants={item} className="p-6 bg-card-glass border border-border rounded-2xl backdrop-blur-md">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <group.icon className="text-primary" size={20} />
                    </div>
                    <h3 className="text-lg font-bold text-text">{group.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {group.items.map((skill, i) => {
                      const Icon = iconMap[skill.icon] || Code;
                      return (
                        <motion.div
                          key={i}
                          whileHover={{ scale: 1.05, y: -2 }}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: i * 0.05 }}
                          className="flex items-center gap-2 px-3.5 py-2 bg-dark/40 border border-border rounded-xl hover:border-primary/50 hover:bg-primary/10 transition-colors shadow-sm group cursor-default"
                        >
                          <Icon className="text-primary/70 group-hover:text-primary transition-colors" size={16} />
                          <span className="text-sm font-medium text-text group-hover:text-white">{skill.name}</span>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experience Section */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={item} className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary border border-primary/20 rounded-full text-sm font-medium mb-4">
                CAREER
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-text">Work <span className="text-primary">Experience</span></h2>
            </motion.div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-[23px] md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary/30" />

              <div className="space-y-10">
                {experiences.map((exp, i) => (
                  <motion.div
                    key={i}
                    variants={item}
                    className="relative pl-16 md:pl-20"
                  >
                    {/* Timeline Node */}
                    <div className="absolute left-[14px] md:left-[19px] top-1 w-[18px] h-[18px] rounded-full bg-dark border-2 border-primary flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>

                    <div className="p-6 md:p-8 bg-card-glass border border-border rounded-2xl backdrop-blur-md hover:border-primary/30 transition-all">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-text">{exp.role}</h3>
                          <p className="text-primary font-medium">{exp.company}</p>
                        </div>
                        <span className="inline-block px-3 py-1 text-xs text-softGray bg-dark/50 rounded-full border border-border shrink-0">
                          {exp.duration}
                        </span>
                      </div>
                      <p className="text-sm text-softGray leading-relaxed mb-4">{exp.description}</p>

                      <div className="grid gap-4 md:grid-cols-2">
                        <div>
                          <p className="text-[10px] font-bold tracking-wider text-text uppercase mb-2 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                            Responsibilities
                          </p>
                          <ul className="space-y-1.5">
                            {exp.responsibilities.slice(0, 2).map((r, j) => (
                              <li key={j} className="text-xs text-softGray flex items-start gap-2">
                                <span className="text-primary mt-0.5">→</span>
                                {r}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="text-[10px] font-bold tracking-wider text-text uppercase mb-2 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                            Achievements
                          </p>
                          <ul className="space-y-1.5">
                            {exp.achievements.slice(0, 2).map((a, j) => (
                              <li key={j} className="text-xs text-softGray flex items-start gap-2">
                                <span className="text-secondary mt-0.5">→</span>
                                {a}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PageTwo;
