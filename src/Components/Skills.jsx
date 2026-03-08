import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import profile from "../Profile.json";

function Skills() {
  const { skills } = profile;
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  const fadeInUp = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
  };

  return (
    <motion.section
      ref={ref}
      id="skills"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeInUp}
      className="py-32 px-6 md:px-12 bg-white border-t border-black"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid-12">
          {/* Title */}
          <div className="col-span-12 md:col-span-3 mb-12 md:mb-0">
            <h2 className="text-2xl font-bold tracking-tight">SKILLS</h2>
          </div>

          {/* Frontend Skills */}
          <div className="col-span-12 md:col-span-4 mb-12 md:mb-0">
            <h3 className="text-lg font-medium mb-6">Frontend</h3>
            <ul className="space-y-2">
              {skills.frontend.map((skill, i) => (
                <li key={i} className="text-gray-700">
                  {skill.name}
                </li>
              ))}
            </ul>
          </div>

          {/* Tools */}
          <div className="col-span-12 md:col-span-4">
            <h3 className="text-lg font-medium mb-6">Tools</h3>
            <ul className="space-y-2">
              {skills.tools.map((skill, i) => (
                <li key={i} className="text-gray-700">
                  {skill.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Skills;