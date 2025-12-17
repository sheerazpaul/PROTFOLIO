import React from "react";
import Profile from "../Profile.json";
import { FaUserGraduate, FaBriefcase, FaUser } from "react-icons/fa";

const About = () => {
  const { about, education, experience } = Profile;

  return (
    <section className="bg-black w-full  text-white px-4 sm:px-6 md:px-20 py-5 sm:py-5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
        <div>
          <div className="flex items-center gap-3 mb-4 sm:mb-6">
            <FaUser className="text-[#4eb1c5] text-3xl sm:text-4xl" />
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#4eb1c5] ">
              {about.title}
            </h1>
          </div>
          <p className="text-white text-base sm:text-lg md:text-lg leading-relaxed mb-4">
            {about.description}
          </p>
        </div>

        <div className="space-y-8 sm:space-y-12">
          <div>
            <div className="flex items-center gap-3 mb-4 sm:mb-6 ">
              <FaUserGraduate className="text-[#4eb1c5] text-2xl sm:text-3xl" />
              <h2 className="text-2xl sm:text-3xl font-semibold text-[#4eb1c5]">
                Education
              </h2>
            </div>
            {education.map((edu, index) => (
              <div
                key={index}
                className="mb-4 sm:mb-6 p-4 sm:p-6 rounded-2xl bg-black/20 border border-[#4eb1c5]/30 transition hover:scale-105"
              >
                <h3 className="text-lg sm:text-xl font-medium text-white">{edu.degree}</h3>
                <p className="text-white">{edu.institute}</p>
                <span className="text-sm sm:text-base text-white">{edu.duration}</span>
              </div>
            ))}
          </div>

       
          <div>
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <FaBriefcase className="text-[#4eb1c5] text-2xl sm:text-3xl" />
              <h2 className="text-2xl sm:text-3xl font-semibold text-[#4eb1c5]">
                Experience
              </h2>
            </div>
            {experience.map((exp, index) => (
              <div
                key={index}
                className="mb-4 sm:mb-6 p-4 sm:p-6 rounded-2xl bg-black/20 border border-[#4eb1c5]/30 transition hover:scale-105"
              >
                <h3 className="text-lg sm:text-xl font-medium text-white">{exp.role}</h3>
                <p className="text-white">{exp.company}</p>
                <span className="text-sm sm:text-base text-white">{exp.duration}</span>
                <p className="mt-2 sm:mt-3 text-white text-sm sm:text-base leading-relaxed">
                  {exp.description ||
                    "Worked on multiple projects, contributing to frontend development and UI design, ensuring high-quality and responsive applications."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
