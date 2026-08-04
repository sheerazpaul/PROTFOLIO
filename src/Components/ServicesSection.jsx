import React from "react";
import FadeIn from "./FadeIn";

const services = [
  {
    num: "01",
    name: "Frontend Development",
    desc: "Building fast, responsive, and accessible interfaces with React, Tailwind CSS, and smooth modern animations that feel alive.",
  },
  {
    num: "02",
    name: "Backend & APIs",
    desc: "Designing robust REST APIs and scalable server-side architecture with Django and Django REST Framework.",
  },
  {
    num: "03",
    name: "Full Stack Web Apps",
    desc: "Shipping end-to-end web applications — from database schema to pixel-perfect UI — built to scale from day one.",
  },
  {
    num: "04",
    name: "UI/UX Design",
    desc: "Designing clean, modern, and conversion-focused interfaces with attention to layout, typography, and user experience.",
  },
  {
    num: "05",
    name: "Performance Optimization",
    desc: "Optimizing load times and rendering through code splitting, asset optimization, and caching strategies.",
  },
];

const ServicesSection = () => {
  return (
    <section
      id="services"
      className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <FadeIn
        as="h2"
        className="text-[#081425] font-black uppercase text-center text-[clamp(3rem,12vw,160px)] mb-16 sm:mb-20 md:mb-28 leading-none tracking-tight"
      >
        Services
      </FadeIn>

      <div className="max-w-5xl mx-auto divide-y divide-[rgba(8,20,37,0.15)]">
        {services.map((service, i) => (
          <FadeIn
            key={service.num}
            delay={i * 0.1}
            className="flex flex-col md:flex-row md:items-start gap-4 md:gap-12 py-8 sm:py-10 md:py-12"
          >
            <span className="text-[#081425] font-black leading-none text-[clamp(3rem,10vw,140px)]">
              {service.num}
            </span>
            <div className="md:pt-2">
              <h3 className="text-[#081425] font-medium uppercase text-[clamp(1rem,2.2vw,2.1rem)]">
                {service.name}
              </h3>
              <p className="mt-2 md:mt-3 text-[#081425] font-light leading-relaxed max-w-2xl text-[clamp(0.85rem,1.6vw,1.25rem)] opacity-60">
                {service.desc}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
