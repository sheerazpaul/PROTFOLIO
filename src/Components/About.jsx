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
      className="px-6 py-24 bg-white md:px-12"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div variants={fadeInUp} className="mb-16 text-center">
          <span className="inline-block px-4 py-2 bg-[#14B8A6]/10 text-[#14B8A6] rounded-full text-sm font-medium mb-4">
            ABOUT ME
          </span>
          <h2 className="text-4xl font-bold text-gray-900 md:text-5xl">
            Who is <span className="text-[#14B8A6]">Sheeraz Paul</span>
          </h2>
        </motion.div>

        {/* About Grid */}
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Left Column - Bio */}
          <motion.div variants={fadeInUp} className="lg:col-span-1">
            <div className="h-full p-6 bg-gray-50 rounded-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#14B8A6]/10 flex items-center justify-center">
                  <Code className="text-[#14B8A6]" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Bio</h3>
              </div>
              <p className="leading-relaxed text-gray-600">
                {about.description}
              </p>
              
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#14B8A6]/10 flex items-center justify-center">
                    <GraduationCap className="text-[#14B8A6]" size={18} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Education</p>
                    <p className="font-medium">{education[0]?.degree} - {education[0]?.institute}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#14B8A6]/10 flex items-center justify-center">
                    <Briefcase className="text-[#14B8A6]" size={18} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Current Role</p>
                    <p className="font-medium">{workExperience?.role} at {workExperience?.company}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#14B8A6]/10 flex items-center justify-center">
                    <Award className="text-[#14B8A6]" size={18} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Experience</p>
                    <p className="font-medium">1+ Years</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Experience & Skills */}
          <motion.div variants={fadeInUp} className="lg:col-span-2">
            {/* Current Role */}
            <div className="p-6 mb-6 bg-white border border-gray-200 rounded-2xl">
              <h3 className="mb-4 text-xl font-bold text-gray-900">Current Position</h3>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#14B8A6]/10 flex items-center justify-center flex-shrink-0">
                  <Briefcase className="text-[#14B8A6]" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900">{workExperience?.role}</h4>
                  <p className="text-[#14B8A6] font-medium">{workExperience?.company}</p>
                  <p className="mt-1 text-sm text-gray-500">{workExperience?.duration}</p>
                  <p className="mt-3 text-gray-600">{workExperience?.description}</p>
                </div>
              </div>
            </div>

            {/* Responsibilities & Achievements */}
            <div className="grid gap-6 mb-6 md:grid-cols-2">
              <div className="p-6 bg-gray-50 rounded-2xl">
                <h4 className="flex items-center gap-2 mb-4 font-bold text-gray-900">
                  <div className="w-6 h-6 rounded-full bg-[#14B8A6]/10 flex items-center justify-center">
                    <span className="text-[#14B8A6] text-xs">✓</span>
                  </div>
                  Responsibilities
                </h4>
                <ul className="space-y-2">
                  {workExperience?.responsibilities.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#14B8A6] mt-1.5"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 bg-gray-50 rounded-2xl">
                <h4 className="flex items-center gap-2 mb-4 font-bold text-gray-900">
                  <div className="w-6 h-6 rounded-full bg-[#14B8A6]/10 flex items-center justify-center">
                    <span className="text-[#14B8A6] text-xs">🏆</span>
                  </div>
                  Achievements
                </h4>
                <ul className="space-y-2">
                  {workExperience?.achievements.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#14B8A6] mt-1.5"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Skills */}
            <div className="p-6 bg-white border border-gray-200 rounded-2xl">
              <h3 className="mb-6 text-xl font-bold text-gray-900">Skills & Expertise</h3>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <p className="mb-3 text-sm text-gray-500">FRONTEND</p>
                  <div className="flex flex-wrap gap-2">
                    {skills.frontend.map((skill, i) => (
                      <span key={i} className="px-3 py-1.5 bg-[#14B8A6]/10 text-[#14B8A6] rounded-lg text-sm">
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="mb-3 text-sm text-gray-500">TOOLS</p>
                  <div className="flex flex-wrap gap-2">
                    {skills.tools.map((skill, i) => (
                      <span key={i} className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-sm">
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