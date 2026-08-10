import { motion } from "framer-motion";
import Reveal from "./Reveal";

const SectionHeading = ({ eyebrow, title, description, align = "center" }) => {
  const alignment = align === "left" ? "text-left" : "text-center items-center";
  return (
    <Reveal className={`flex flex-col gap-4 ${alignment} mb-14 md:mb-20`}>
      <motion.span
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 px-4 py-1.5 glass rounded-full text-xs font-semibold uppercase tracking-[0.2em] text-muted"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary to-secondary" />
        {eyebrow}
      </motion.span>
      <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-ink">
        {title}
      </h2>
      {description && (
        <p className={`max-w-2xl text-muted text-base md:text-lg leading-relaxed ${align === "left" ? "" : "mx-auto"}`}>
          {description}
        </p>
      )}
    </Reveal>
  );
};

export default SectionHeading;
