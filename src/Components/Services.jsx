import { Globe, Palette, Server, Gauge, ArrowUpRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import SpotlightCard from "./SpotlightCard";
import Reveal from "./Reveal";
import Profile from "../Profile.json";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Pixel-perfect, responsive frontends built with React — fast, accessible, and delightfully interactive.",
    accent: "#4F46E5",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Interfaces grounded in design systems, hierarchy, and motion — balancing beauty with usability.",
    accent: "#06B6D4",
  },
  {
    icon: Server,
    title: "Backend APIs",
    description: "Scalable REST and GraphQL services with clean architecture, robust auth, and optimized queries.",
    accent: "#22C55E",
  },
  {
    icon: Gauge,
    title: "Performance Optimization",
    description: "Code splitting, caching, and asset tuning that cut load times and keep interactions buttery smooth.",
    accent: "#F59E0B",
  },
];

const Services = () => {
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <SectionHeading
          eyebrow="Services"
          title={
            <>
              What I <span className="text-gradient">Do</span>
            </>
          }
          description="End-to-end capabilities for shipping products people love — from first sketch to deployed scale."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.title} delay={i * 0.1}>
                <SpotlightCard className="group glass h-full rounded-3xl p-7 transition-all duration-500 hover:-translate-y-2">
                  <div
                    className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-border transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
                    style={{ background: `${service.accent}1a`, color: service.accent }}
                  >
                    <Icon size={24} />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-ink">{service.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{service.description}</p>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted transition-colors group-hover:text-primary">
                    Learn more <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </SpotlightCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
