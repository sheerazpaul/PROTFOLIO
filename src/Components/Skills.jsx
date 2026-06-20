import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import profile from "../Profile.json";

function Skills() {
  const { skills } = profile;
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  const SkillCategory = ({ title, items }) => (
    <div className="col-span-12 md:col-span-4">
      <h3 className="mb-6 text-xl font-bold text-white text-center md:text-left tracking-wide">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">{title}</span>
      </h3>
      <motion.div 
        variants={containerVariants}
        className="grid grid-cols-2 gap-4"
      >
        {items?.map((skill, i) => (
          <motion.div 
            key={i} 
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -5 }}
            className="flex items-center gap-3 p-4 bg-card-glass border border-white/10 rounded-xl backdrop-blur-md shadow-lg transition-all hover:border-primary/50 group"
          >
            <div className="w-2 h-2 rounded-full bg-primary group-hover:bg-secondary group-hover:shadow-[0_0_10px_var(--color-primary)] transition-all"></div>
            <span className="text-softGray font-medium group-hover:text-white transition-colors">{skill.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );

  return (
    <section
      ref={ref}
      id="skills"
      className="px-6 py-32 bg-dark relative md:px-12"
    >
      <div className="absolute top-[20%] left-[5%] w-[30%] h-[30%] rounded-full bg-primary/10 blur-[100px] pointer-events-none" />
      <div className="mx-auto max-w-7xl relative z-10">
        <motion.div 
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="space-y-16"
        >
          {/* Title */}
          <motion.div variants={itemVariants} className="text-center">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 border border-primary/20">
              EXPERTISE
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Technical <span className="text-primary">Skills</span></h2>
          </motion.div>

          <div className="grid grid-cols-12 gap-8 md:gap-12">
            <SkillCategory title="Frontend" items={skills.frontend} />
            <SkillCategory title="Backend" items={skills.backend} />
            <SkillCategory title="Tools & Platforms" items={skills.tools} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;