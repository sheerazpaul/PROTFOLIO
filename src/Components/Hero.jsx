import { useRef } from "react";
import { motion, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, Sparkles, Download } from "lucide-react";
import Magnetic from "./Magnetic";
import Profile from "../Profile.json";

const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 30, filter: "blur(10px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] },
});

const Hero = () => {
  const personal = Profile.personal;
  const socials = Profile.socialLinks;
  const sectionRef = useRef(null);

  const mx = useMotionValue(50);
  const my = useMotionValue(50);
  const sx = useSpring(mx, { stiffness: 70, damping: 24 });
  const sy = useSpring(my, { stiffness: 70, damping: 24 });
  const glow = useMotionTemplate`radial-gradient(560px circle at ${sx}% ${sy}%, var(--glow-color), transparent 70%)`;

  const handleMove = (e) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set(((e.clientX - rect.left) / rect.width) * 100);
    my.set(((e.clientY - rect.top) / rect.height) * 100);
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const socialIcons = {
    github: <Github size={17} />,
    linkedin: <Linkedin size={17} />,
  };

  return (
    <section id="home" ref={sectionRef} onMouseMove={handleMove} className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16 md:pt-32">
      <motion.div className="pointer-events-none absolute inset-0" style={{ background: glow }} />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <motion.div {...fadeUp(0.1)} className="mb-6 inline-flex items-center gap-2.5 glass rounded-full px-4 py-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              <span className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
                Available for freelance work
              </span>
            </motion.div>

            <motion.h1 {...fadeUp(0.2)} className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-ink sm:text-6xl md:text-7xl xl:text-[5.2rem]">
              Hi, I'm <span className="text-gradient animate-gradient-text">{personal.name}</span>
            </motion.h1>

            <motion.p {...fadeUp(0.3)} className="mt-4 font-display text-xl font-medium text-muted md:text-2xl">
              {personal.role}
              <span className="ml-3 hidden sm:inline-flex items-center gap-2 text-sm text-muted/80">
                <Sparkles size={14} className="text-secondary" />
                {personal.specialization}
              </span>
            </motion.p>

            <motion.p {...fadeUp(0.4)} className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg">
              {personal.ctaText}
            </motion.p>

            <motion.div {...fadeUp(0.5)} className="mt-10 flex flex-wrap items-center gap-4">
              <Magnetic>
                <button
                  onClick={() => scrollTo("projects")}
                  className="group inline-flex items-center gap-2.5 rounded-2xl bg-gradient-to-r from-primary to-secondary px-7 py-4 font-display text-sm font-semibold text-white shadow-xl shadow-primary/30 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/40 cursor-pointer"
                >
                  View My Work
                  <ArrowRight size={17} className="transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </Magnetic>
              <Magnetic>
                <button
                  onClick={() => scrollTo("contact")}
                  className="inline-flex items-center gap-2.5 rounded-2xl glass px-7 py-4 font-display text-sm font-semibold text-ink transition-colors duration-300 hover:bg-border cursor-pointer"
                >
                  Contact Me
                </button>
              </Magnetic>
              <Magnetic>
                <button
                  onClick={() => { window.location.hash = "resume"; }}
                  aria-label="Download resume"
                  className="inline-flex h-12 w-12 items-center justify-center rounded-2xl glass text-muted transition-colors duration-300 hover:text-ink hover:bg-border cursor-pointer"
                >
                  <Download size={18} />
                </button>
              </Magnetic>
            </motion.div>

            <motion.div {...fadeUp(0.6)} className="mt-10 flex items-center gap-3">
              {socials.map((s) => (
                <Magnetic key={s.name} strength={0.25}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    className="flex h-11 w-11 items-center justify-center rounded-xl glass text-muted transition-all duration-300 hover:text-ink hover:border-primary/40 hover:-translate-y-0.5"
                  >
                    {socialIcons[s.icon] || <Sparkles size={16} />}
                  </a>
                </Magnetic>
              ))}
              <a
                href={`mailto:${personal.email}`}
                className="flex items-center gap-2 text-sm text-muted transition-colors hover:text-ink ml-2"
              >
                <Mail size={15} /> {personal.email}
              </a>
            </motion.div>
          </div>

          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, filter: "blur(14px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 1.1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative mx-auto max-w-md"
            >
              <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-primary/25 via-secondary/15 to-accent/20 blur-3xl" />

              <div className="relative rounded-[2rem] gradient-border p-[3px]">
                <div className="relative overflow-hidden rounded-[2rem] bg-surface">
                  <img
                    src={personal.profileImage}
                    alt={personal.name}
                    className="h-[26rem] w-full object-cover object-top md:h-[30rem]"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.8 }}
                className="absolute -left-4 top-16 sm:-left-8 float-slow"
              >
                <div className="glass rounded-2xl px-4 py-3 shadow-xl shadow-black/20">
                  <p className="font-display text-2xl font-bold text-gradient">1+</p>
                  <p className="text-xs text-muted">Years Experience</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.05, duration: 0.8 }}
                className="absolute -right-3 top-1/2 sm:-right-8 float-slower"
              >
                <div className="glass rounded-2xl px-4 py-3 shadow-xl shadow-black/20">
                  <p className="font-display text-2xl font-bold text-gradient">9+</p>
                  <p className="text-xs text-muted">Projects Shipped</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="absolute -bottom-5 left-8 float-slow"
              >
                <div className="glass flex items-center gap-2.5 rounded-2xl px-4 py-3 shadow-xl shadow-black/20">
                  <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-accent/15 text-accent">
                    <Sparkles size={15} />
                  </span>
                  <div>
                    <p className="text-xs font-semibold text-ink">Open to Work</p>
                    <p className="text-[11px] text-muted">Remote · Worldwide</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-16 hidden md:flex justify-center"
        >
          <button
            onClick={() => scrollTo("about")}
            aria-label="Scroll down"
            className="flex flex-col items-center gap-2 text-muted/60 transition-colors hover:text-ink cursor-pointer"
          >
            <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
            <motion.span
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="flex h-9 w-5 items-start justify-center rounded-full border border-muted/40 p-1.5"
            >
              <span className="h-2 w-1 rounded-full bg-primary" />
            </motion.span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
