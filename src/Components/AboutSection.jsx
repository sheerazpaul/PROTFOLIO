import React from "react";
import Profile from "../Profile.json";
import FadeIn from "./FadeIn";
import AnimatedText from "./AnimatedText";
import ContactButton from "./ContactButton";

const AboutSection = () => {
  const { about } = Profile;

  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20 bg-[#081425] overflow-hidden"
    >
      <FadeIn
        delay={0.1}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] pointer-events-none"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
          alt="moon"
          loading="lazy"
          className="w-[120px] sm:w-[160px] md:w-[210px] select-none"
          draggable={false}
        />
      </FadeIn>

      <FadeIn
        delay={0.25}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] pointer-events-none"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
          alt="3d object"
          loading="lazy"
          className="w-[100px] sm:w-[140px] md:w-[180px] select-none"
          draggable={false}
        />
      </FadeIn>

      <FadeIn
        delay={0.15}
        x={80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] pointer-events-none"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
          alt="lego"
          loading="lazy"
          className="w-[120px] sm:w-[160px] md:w-[210px] select-none"
          draggable={false}
        />
      </FadeIn>

      <FadeIn
        delay={0.3}
        x={80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] pointer-events-none"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
          alt="3d group"
          loading="lazy"
          className="w-[130px] sm:w-[170px] md:w-[220px] select-none"
          draggable={false}
        />
      </FadeIn>

      <div className="relative flex flex-col items-center gap-10 sm:gap-14 md:gap-16">
        <FadeIn
          as="h2"
          className="hero-heading font-black uppercase leading-none tracking-tight text-center text-[clamp(3rem,12vw,160px)]"
        >
          About me
        </FadeIn>
        <AnimatedText
          text={about.description}
          className="max-w-[560px] text-center text-[#F8FAFC] font-medium leading-relaxed text-[clamp(1rem,2vw,1.35rem)]"
        />
      </div>

      <FadeIn className="relative mt-16 sm:mt-20 md:mt-24">
        <ContactButton />
      </FadeIn>
    </section>
  );
};

export default AboutSection;
