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
          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Who is <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Sheeraz Paul</span>
          </h2>
        </motion.div>

        {/* About Grid */}
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Left Column - Bio */}
          <motion.div variants={fadeInUp} className="lg:col-span-1">
            <div className="h-full p-6 bg-card-glass border border-white/10 rounded-2xl shadow-xl backdrop-blur-md">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Code className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white">Bio</h3>
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
                    <p className="font-medium text-white">{workExperience?.role} at {workExperience?.company}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Award className="text-primary" size={18} />
                  </div>
                  <div>
                    <p className="text-sm text-softGray">Experience</p>
                    <p className="font-medium text-white">1+ Years</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Experience & Skills */}
          <motion.div variants={fadeInUp} className="lg:col-span-2">
            {/* Current Role */}
            <div className="p-6 mb-6 bg-card-glass border border-white/10 rounded-2xl shadow-lg backdrop-blur-md">
              <h3 className="mb-4 text-xl font-bold text-white">Current Position</h3>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Briefcase className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">{workExperience?.role}</h4>
                  <p className="text-primary font-medium">{workExperience?.company}</p>
                  <p className="mt-1 text-sm text-softGray">{workExperience?.duration}</p>
                  <p className="mt-3 text-softGray leading-relaxed">{workExperience?.description}</p>
                </div>
              </div>
            </div>

            {/* Responsibilities & Achievements */}
            <div className="grid gap-6 mb-6 md:grid-cols-2">
              <div className="p-6 bg-card-glass border border-white/5 rounded-2xl backdrop-blur-md">
                <h4 className="flex items-center gap-2 mb-4 font-bold text-white">
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

              <div className="p-6 bg-card-glass border border-white/5 rounded-2xl backdrop-blur-md">
                <h4 className="flex items-center gap-2 mb-4 font-bold text-white">
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
            <div className="p-6 bg-card-glass border border-white/10 rounded-2xl shadow-lg backdrop-blur-md">
              <h3 className="mb-6 text-xl font-bold text-white">Skills & Expertise</h3>
              <div className="grid gap-6 md:grid-cols-3">
                <div>
                  <p className="mb-3 text-sm text-softGray font-semibold tracking-wider">FRONTEND</p>
                  <div className="flex flex-wrap gap-2">
                    {skills.frontend.map((skill, i) => (
                      <span key={i} className="px-3 py-1.5 bg-primary/10 text-primary border border-primary/20 rounded-lg text-sm">
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="mb-3 text-sm text-softGray font-semibold tracking-wider">BACKEND</p>
                  <div className="flex flex-wrap gap-2">
                    {skills.backend.map((skill, i) => (
                      <span key={i} className="px-3 py-1.5 bg-secondary/10 text-secondary border border-secondary/20 rounded-lg text-sm">
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="mb-3 text-sm text-softGray font-semibold tracking-wider">TOOLS</p>
                  <div className="flex flex-wrap gap-2">
                    {skills.tools.map((skill, i) => (
                      <span key={i} className="px-3 py-1.5 bg-white/5 text-white border border-white/10 rounded-lg text-sm">
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ProfileSection;