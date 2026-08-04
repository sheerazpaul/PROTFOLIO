import React from "react";
import Profile from "../Profile.json";
import Navbar from "./Navbar";
import FadeIn from "./FadeIn";
import Magnet from "./Magnet";
import ContactButton from "./ContactButton";

const HeroSection = () => {
  const { personal } = Profile;
  const firstName = personal.name.split(" ")[0];
  const tagline = "a full stack developer driven by crafting striking and unforgettable projects";

  return (
    <section
      id="home"
      className="relative h-screen flex flex-col bg-[#081425] overflow-x-clip"
    >
      <Navbar />

      <h1 className="text-center text-[#F8FAFC] font-black uppercase tracking-tight text-2xl sm:text-3xl mt-4">
        i love you buggay
      </h1>

      <div className="relative flex flex-col justify-center flex-1">
        <div className="overflow-hidden">
          <FadeIn
            delay={0.15}
            y={40}
            as="h1"
            className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[12vw] sm:text-[11vw] md:text-[11vw] lg:text-[11.5vw] mt-6 sm:mt-4 md:-mt-5"
          >
            Hi, i&apos;m {firstName}
          </FadeIn>
        </div>

        <div className="flex items-end justify-between px-6 mt-auto pb-7 sm:pb-8 md:pb-10 md:px-10">
          <FadeIn
            delay={0.35}
            y={20}
            as="p"
            className="max-w-[160px] sm:max-w-[220px] md:max-w-[260px] text-[#F8FAFC] font-light uppercase tracking-wide leading-snug text-[clamp(0.75rem,1.4vw,1.5rem)]"
          >
            {tagline}
          </FadeIn>
          <FadeIn delay={0.5} y={20}>
            <ContactButton />
          </FadeIn>
        </div>
      </div>

      <div className="absolute z-10 -translate-x-1/2 -translate-y-1/2 pointer-events-none left-1/2 top-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0">
        <FadeIn delay={0.6} y={30}>
          <Magnet
            padding={150}
            strength={3}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
          >
            <div className="rounded-full bg-gradient-to-tr from-[#4EB1C5] via-[#14B8A6] to-[#ffb781] p-[6px] shadow-[0_0_60px_rgba(78,177,197,0.45)]">
              <img
                src="/images/profile.png"
                alt={personal.name}
                className="w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 object-cover object-top rounded-full border-4 border-[#081425] select-none"
                draggable={false}
              />
            </div>
          </Magnet>
        </FadeIn>
      </div>
    </section>
  );
};

export default HeroSection;
