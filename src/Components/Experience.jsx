import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Profile from "../Profile.json";

const Experience = () => {
  const experience = Profile["Work Experience"];
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  const fadeInUp = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
  };

  return (
    <motion.section
      ref={ref}
      id="experience"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeInUp}
      className="px-6 py-32 bg-dark relative md:px-12 overflow-hidden"
    >
      <div className="absolute bottom-[10%] right-[5%] w-[40%] h-[40%] rounded-full bg-secondary/5 blur-[120px] pointer-events-none" />
      <div className="mx-auto max-w-7xl">
        <div className="grid-12">
          {/* Title */}
          <div className="col-span-12 mb-16">
            <h2 className="text-5xl font-bold tracking-tighter md:text-7xl text-white">
              EXPERIENCE
            </h2>
          </div>

          {/* Experience List */}
          {experience.map((item, index) => (
            <div key={index} className="col-span-12 mb-12 last:mb-0 p-8 bg-card-glass border border-white/10 rounded-3xl backdrop-blur-md shadow-lg hover:border-primary/30 transition-all">
              <div className="grid-12 gap-8">
                {/* Left column - role & company */}
                <div className="col-span-12 md:col-span-4">
                  <h3 className="text-2xl font-bold text-white">{item.role}</h3>
                  <p className="mt-2 text-primary font-medium text-lg">{item.company}</p>
                  <p className="mt-2 text-sm text-softGray inline-block px-3 py-1 bg-white/5 rounded-full border border-white/10">{item.duration}</p>
                </div>

                {/* Right column - description */}
                <div className="col-span-12 md:col-span-8">
                  <p className="mb-6 leading-relaxed text-softGray text-lg">
                    {item.description}
                  </p>
                  
                  {/* Responsibilities & Achievements */}
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
                      <p className="mb-4 text-sm font-bold tracking-wider text-white flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-primary"></span>
                        RESPONSIBILITIES
                      </p>
                      <ul className="space-y-3">
                        {item.responsibilities.map((res, i) => (
                          <li key={i} className="text-sm text-softGray flex items-start gap-2">
                            <span className="text-primary mt-1">→</span>
                            {res}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
                      <p className="mb-4 text-sm font-bold tracking-wider text-white flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-secondary"></span>
                        ACHIEVEMENTS
                      </p>
                      <ul className="space-y-3">
                        {item.achievements.map((ach, i) => (
                          <li key={i} className="text-sm text-softGray flex items-start gap-2">
                            <span className="text-secondary mt-1">→</span>
                            {ach}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;