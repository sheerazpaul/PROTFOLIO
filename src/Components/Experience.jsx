import React from "react";
import Profile from "../Profile.json";
const Experience = () => {
  const experience = Profile["Work Experience"];
  return (
    <section
      id="experience"
      className="min-h-screen bg-zinc-950 px-6 md:px-20 py-28"
    >
      <div className="max-w-5xl mx-auto mb-20 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#4eb1c5] mb-4">
          Work Experience
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Professional roles that helped me grow as a frontend developer and
          build real-world, scalable applications.
        </p>
      </div>
      <div className="max-w-5xl mx-auto space-y-14">
        {experience.map((item, index) => (
          <div
            key={index}
            className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10 transition hover:border-[#4eb1c5]/10 hover:shadow-sm hover:shadow-[#4eb1c5]"
          >
            <span className="absolute left-0 top-8 h-20 w-1 rounded-full bg-[#4eb1c5]/70" />
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-1">
                  {item.role}
                </h3>
                <p className="text-gray-400">{item.company}</p>
              </div>
              <span className="mt-4 md:mt-0 px-4 py-1.5 rounded-full text-sm bg-blue-500/10 text-[#4eb1c5] border border-[#4eb1c5]/20">
                {item.duration}
              </span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-8">
              {item.description}
            </p>
            <div className="mb-10">
              <h4 className="text-lg font-semibold text-white mb-3">
                About Company
              </h4>
              <p className="text-gray-400 leading-relaxed">
                {item.AboutCompany}
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 ">
              <div className="bg-black/30 border border-[#4eb1c5]/10 rounded-2xl p-6 hover:scale-105 hover:border-[#4eb1c5] transition">
                <h4 className="text-lg font-semibold text-white mb-4">
                  Responsibilities
                </h4>
                <ul className="space-y-3 text-gray-400 list-disc list-inside ">
                  {item.responsibilities.map((res, i) => (
                    <li key={i}>{res}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-black/30 border border-white/10 rounded-2xl p-6 hover:scale-105 hover:border-[#4eb1c5] transition">
                <h4 className="text-lg font-semibold text-white mb-4">
                  Achievements
                </h4>
                <ul className="space-y-3 text-gray-400 list-disc list-inside">
                  {item.achievements.map((ach, i) => (
                    <li key={i}>{ach}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Experience;