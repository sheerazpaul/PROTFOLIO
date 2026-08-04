import React from "react";
import Profile from "../Profile.json";
import FadeIn from "./FadeIn";

const ExperienceSection = () => {
  const { "Work Experience": experiences } = Profile;

  return (
    <section className="bg-[#081425] px-5 sm:px-8 md:px-10 py-24 sm:py-28">
      <FadeIn
        as="h2"
        className="hero-heading font-black uppercase leading-none tracking-tight text-center text-[clamp(3rem,12vw,160px)]"
      >
        Experience
      </FadeIn>

      <div className="relative max-w-4xl mx-auto mt-16 sm:mt-20">
        <div className="absolute left-[7px] md:left-2 top-0 bottom-0 w-0.5 bg-[#F8FAFC]/20" />
        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <FadeIn
              key={i}
              delay={i * 0.1}
              className="relative pl-8 md:pl-12"
            >
              <span className="absolute left-0 md:left-[-5px] top-2 w-4 h-4 rounded-full border-2 border-[#4EB1C5] bg-[#081425]" />
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-3">
                  <h3 className="text-xl md:text-2xl font-bold uppercase tracking-wide text-[#F8FAFC]">
                    {exp.role}
                  </h3>
                  <span className="inline-block px-3 py-1 text-xs font-medium uppercase tracking-widest text-[#F8FAFC]/70 border border-[#F8FAFC]/20 rounded-full">
                    {exp.duration}
                  </span>
                </div>
                <p className="text-base font-medium uppercase tracking-wider text-[#4EB1C5]">
                  {exp.company}
                </p>
                <p className="mt-3 text-[#F8FAFC]/70 font-light leading-relaxed max-w-2xl">
                  {exp.description}
                </p>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div>
                    <p className="text-xs font-bold tracking-widest uppercase text-[#F8FAFC] mb-2 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#4EB1C5]" />
                      Responsibilities
                    </p>
                    <ul className="space-y-1.5">
                      {(exp.responsibilities || []).map((r, j) => (
                        <li
                          key={j}
                          className="text-sm text-[#F8FAFC]/60 font-light flex items-start gap-2"
                        >
                          <span className="text-[#4EB1C5] mt-0.5">→</span>
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-bold tracking-widest uppercase text-[#F8FAFC] mb-2 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ffb781]" />
                      Achievements
                    </p>
                    <ul className="space-y-1.5">
                      {(exp.achievements || []).map((a, j) => (
                        <li
                          key={j}
                          className="text-sm text-[#F8FAFC]/60 font-light flex items-start gap-2"
                        >
                          <span className="text-[#ffb781] mt-0.5">→</span>
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
