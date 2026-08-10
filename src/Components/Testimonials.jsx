import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const testimonials = [
  {
    name: "Ahmed Raza",
    role: "Product Lead · TechNova",
    quote: "Sheeraz delivered a frontend that our designers called 'impossible to ship pixel-perfect' — he shipped it ahead of schedule. The attention to detail is rare.",
    rating: 5,
  },
  {
    name: "Sara Khan",
    role: "Founder · MDST Studio",
    quote: "The landing page he built lifted our conversion rate by 40%. Smooth animations, flawless responsiveness, and genuinely great communication throughout.",
    rating: 5,
  },
  {
    name: "Usman Tariq",
    role: "Engineering Manager",
    quote: "Clean architecture, thoughtful code reviews, and a real sense of ownership. Working with Sheeraz raised the bar for the whole team.",
    rating: 5,
  },
  {
    name: "Ayesha Malik",
    role: "UX Designer · Freelance",
    quote: "He translates complex backends into interfaces that feel effortless. Every interaction is considered — nothing is left to chance.",
    rating: 5,
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const current = testimonials[index];

  return (
    <section id="testimonials" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6 md:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title={
            <>
              Kind <span className="text-gradient">Words</span>
            </>
          }
        />

        <Reveal>
          <div className="relative">
            <Quote className="absolute -top-6 left-6 h-12 w-12 text-primary/20" />

            <div className="glass relative overflow-hidden rounded-3xl p-8 md:p-12">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -24, filter: "blur(8px)" }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="min-h-[16rem] md:min-h-[13rem]"
                >
                  <div className="mb-6 flex gap-1">
                    {Array.from({ length: current.rating }).map((_, i) => (
                      <Star key={i} size={16} className="fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-base leading-relaxed text-ink md:text-lg md:leading-relaxed">
                    “{current.quote}”
                  </p>
                  <div className="mt-8 flex items-center gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary font-display text-base font-bold text-white shadow-lg shadow-primary/30">
                      {current.name.charAt(0)}
                    </span>
                    <div>
                      <p className="font-display text-sm font-semibold text-ink">{current.name}</p>
                      <p className="text-xs text-muted">{current.role}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="mt-8 flex items-center justify-center gap-3">
              {testimonials.map((t, i) => (
                <button
                  key={t.name}
                  onClick={() => setIndex(i)}
                  aria-label={`Show testimonial from ${t.name}`}
                  className="cursor-pointer p-1"
                >
                  <span
                    className={`block h-2 rounded-full transition-all duration-400 ${
                      i === index ? "w-8 bg-gradient-to-r from-primary to-secondary" : "w-2 bg-border hover:bg-muted/40"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-14" delay={0.15}>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-center">
            {["On Time Delivery", "Pixel Perfect", "Clear Communication", "5★ Avg. Rating"].map((tag) => (
              <span key={tag} className="text-xs font-medium uppercase tracking-widest text-muted/70">
                {tag}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Testimonials;
