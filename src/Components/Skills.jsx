import React, { useState } from "react";
import My_profile from "../My_profile.json";
import { FaJs, FaReact, FaGit, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiHtml5, SiPostman, SiVercel } from "react-icons/si";
import { BsBootstrapFill } from "react-icons/bs";
import { DiCss3 } from "react-icons/di";
import { VscVscode } from "react-icons/vsc";
import { TbBrandFigma } from "react-icons/tb";
const iconMap = {
  js: <FaJs  />,
  react: <FaReact  />,
  tailwind: <SiTailwindcss  />,
  html: <SiHtml5  />,
  postman: <SiPostman />,
  git: <FaGit  />,
  github: <FaGithub  />,
  vercel: <SiVercel />,
  bootstrap:<BsBootstrapFill />,
  css:<DiCss3 />,
  vscode :<VscVscode />,
  figma :<TbBrandFigma />,
};

function Skills() {
  const { skills } = My_profile;
  const [activeTab, setActiveTab] = useState("frontend");

  const currentSkills = activeTab === "frontend" ? skills.frontend : skills.tools;

  return (
    <section className="bg-black w-full  text-white px-6 md:px-20 py-10 flex flex-col items-center">

      <div className="flex flex-col gap-4 text-center">
        <h1 className="text-5xl text-[#4eb1c5] font-bold">My Skills</h1>
        <p className="text-white text-lg max-w-xl">
          A comprehensive overview of my technical expertise and the tools I use
          to bring ideas to life.
        </p>
      </div>
      <div className="flex gap-6 mt-10">
        {["frontend", "tools"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-8 py-2 rounded-full border-2 font-semibold transition-all duration-300 
              ${
                activeTab === tab
                  ? "bg-[#4eb1c5] text-black border-[#4eb1c5]"
                  : "border-[#4eb1c5] text-white hover:bg-[#4eb1c5] hover:text-black scale-105"
              }`}
          >
            {tab === "frontend" ? "Frontend" : "Tools"}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-10 mt-14 ">
        {currentSkills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center justify-center gap-3 p-6 bg-gray-900 rounded-2xl  transform transition-transform duration-300 hover:scale-105 hover:shadow-sm shadow-[#4eb1c5] "
          >
            <div className="text-6xl">{iconMap[skill.icon]}</div>
            <p className="text-white text-lg font-medium">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
