import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Profile from "../Profile.json";
import { Award, Code, Briefcase, GraduationCap } from "lucide-react";

const ProfileSection = () => {
  const { about, education, experience, personal, skills } = Profile;
  const workExperience = Profile["Work Experience"][0];
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  const fadeInUp = {
    hidden: { y: 60, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <motion.section
      ref={ref}
      id="profile"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={staggerContainer}
      className="px-6 py-24 bg-dark md:px-12 relative overflow-hidden"
    >
      <motion.div 
        animate={{ x: [0, -30, 0], y: [0, 30, 0], scale: [1, 1.1, 1] }} 
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[10%] right-[5%] w-[40%] h-[40%] rounded-full bg-secondary/5 blur-[120px] pointer-events-none" 
      />
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div variants={fadeInUp} className="mb-16 text-center">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary border border-primary/20 rounded-full text-sm font-medium mb-4">
            ABOUT ME
          </span>
          <h2 className="text-4xl font-bold text-text md:text-5xl">
            Full Stack Developer &bull; <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Problem Solver</span>
          </h2>
        </motion.div>

        {/* About Grid */}
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Left Column - Bio */}
          <motion.div variants={fadeInUp} className="lg:col-span-1">
            <div className="h-full p-6 bg-card-glass border border-border rounded-2xl shadow-xl backdrop-blur-md">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Code className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-bold text-text">Bio</h3>
              </div>
              <p className="leading-relaxed text-softGray">
                {about.description}
              </p>
              
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Briefcase className="text-primary" size={18} />
                  </div>
                  <div>
                    <p className="text-sm text-softGray">Current Role</p>
                    <p className="font-medium text-text">{workExperience?.role} at {workExperience?.company}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Award className="text-primary" size={18} />
                  </div>
                  <div>
                    <p className="text-sm text-softGray">Experience</p>
                    <p className="font-medium text-text">1+ Years</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Experience & Skills */}
          <motion.div variants={fadeInUp} className="lg:col-span-2">
            {/* Current Role */}
            <div className="p-6 mb-6 bg-card-glass border border-border rounded-2xl shadow-lg backdrop-blur-md">
              <h3 className="mb-4 text-xl font-bold text-text">Current Position</h3>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Briefcase className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-text">{workExperience?.role}</h4>
                  <p className="text-primary font-medium">{workExperience?.company}</p>
                  <p className="mt-1 text-sm text-softGray">{workExperience?.duration}</p>
                  <p className="mt-3 text-softGray leading-relaxed">{workExperience?.description}</p>
                </div>
              </div>
            </div>

            {/* Responsibilities & Achievements */}
            <div className="grid gap-6 mb-6 md:grid-cols-2">
              <div className="p-6 bg-card-glass border border-border rounded-2xl backdrop-blur-md">
                <h4 className="flex items-center gap-2 mb-4 font-bold text-text">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary text-xs">✓</span>
                  </div>
                  Responsibilities
                </h4>
                <ul className="space-y-2">
                  {workExperience?.responsibilities.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-softGray">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 bg-card-glass border border-border rounded-2xl backdrop-blur-md">
                <h4 className="flex items-center gap-2 mb-4 font-bold text-text">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary text-xs">🏆</span>
                  </div>
                  Achievements
                </h4>
                <ul className="space-y-2">
                  {workExperience?.achievements.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-softGray">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Skills */}
            <div className="p-6 bg-card-glass border border-border rounded-2xl shadow-lg backdrop-blur-md">
              <h3 className="mb-6 text-xl font-bold text-text">Skills & Expertise</h3>
              <div className="grid gap-8 md:grid-cols-3">
                {[
                  { title: "FRONTEND", items: skills.frontend, textClass: "text-primary", barClass: "bg-primary" },
                  { title: "BACKEND", items: skills.backend, textClass: "text-secondary", barClass: "bg-secondary" },
                  { title: "TOOLS", items: skills.tools, textClass: "text-text", barClass: "bg-text" },
                ].map((group) => (
                  <div key={group.title}>
                    <p className="mb-4 text-sm text-softGray font-semibold tracking-wider">{group.title}</p>
                    <div className="space-y-3">
                      {group.items.map((skill, i) => (
                        <div key={i}>
                          <div className="flex justify-between items-center mb-1">
                            <span className={`text-sm font-medium ${group.textClass}`}>{skill.name}</span>
                            {skill.level && (
                              <span className="text-xs text-softGray">{skill.level}%</span>
                            )}
                          </div>
                          <div className="w-full h-1.5 bg-dark rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={inView ? { width: `${skill.level || 80}%` } : { width: 0 }}
                              transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                              className={`h-full rounded-full ${group.barClass}`}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ProfileSection;