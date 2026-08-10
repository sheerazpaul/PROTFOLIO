import { FaReact } from "react-icons/fa6";
import { SiNextdotjs, SiTypescript, SiNodedotjs, SiPython, SiDjango, SiPostgresql, SiDocker, SiAmazonwebservices } from "react-icons/si";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const stack = [
  { name: "React", icon: FaReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "Django", icon: SiDjango, color: "#44B78B" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "AWS", icon: SiAmazonwebservices, color: "#FF9900" },
];

const Row = () => (
  <>
    {stack.map((tech) => {
      const Icon = tech.icon;
      return (
        <div
          key={tech.name}
          className="mx-3 flex items-center gap-3 rounded-2xl glass px-6 py-4 transition-all duration-300 hover:border-primary/40 hover:-translate-y-1"
        >
          <Icon size={26} style={{ color: tech.color }} />
          <span className="font-display text-sm font-medium text-ink whitespace-nowrap">{tech.name}</span>
        </div>
      );
    })}
  </>
);

const TechStack = () => {
  return (
    <section id="tech-stack" className="relative py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <SectionHeading
          eyebrow="Tech Stack"
          title={
            <>
              Built with the <span className="text-gradient">modern web</span>
            </>
          }
        />
      </div>

      <Reveal>
        <div className="mask-fade-x relative overflow-hidden">
          <div className="animate-marquee flex w-max py-2">
            <Row />
            <Row />
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default TechStack;
