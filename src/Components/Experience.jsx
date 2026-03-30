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
      className="px-6 py-32 bg-white border-t border-black md:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid-12">
          {/* Title */}
          <div className="col-span-12 mb-16">
            <h2 className="text-5xl font-bold tracking-tighter md:text-7xl">
              EXPERIENCE
            </h2>
          </div>

          {/* Experience List */}
          {experience.map((item, index) => (
            <div key={index} className="col-span-12 mb-16 last:mb-0">
              <div className="grid-12">
                {/* Left column - role & company */}
                <div className="col-span-12 mb-4 md:col-span-4 md:mb-0">
                  <h3 className="text-xl font-medium">{item.role}</h3>
                  <p className="mt-1 text-gray-600">{item.company}</p>
                  <p className="mt-1 text-sm text-gray-500">{item.duration}</p>
                </div>

                {/* Right column - description */}
                <div className="col-span-12 md:col-span-7 md:col-start-6">
                  <p className="mb-6 leading-relaxed text-gray-700">
                    {item.description}
                  </p>
                  
                  {/* Responsibilities - simple list */}
                  <div className="mb-4">
                    <p className="mb-2 text-sm font-medium">Responsibilities:</p>
                    <ul className="space-y-1">
                      {item.responsibilities.map((res, i) => (
                        <li key={i} className="text-sm text-gray-600">
                          — {res}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Achievements - simple list */}
                  <div>
                    <p className="mb-2 text-sm font-medium">Achievements:</p>
                    <ul className="space-y-1">
                      {item.achievements.map((ach, i) => (
                        <li key={i} className="text-sm text-gray-600">
                          — {ach}
                        </li>
                      ))}
                    </ul>
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