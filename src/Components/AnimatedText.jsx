import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Char = ({ char, progress, range }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);
  const display = char === " " ? "\u00A0" : char;

  return (
    <span className="relative inline-block">
      <span className="invisible">{display}</span>
      <motion.span className="absolute inset-0" style={{ opacity }}>
        {display}
      </motion.span>
    </span>
  );
};

const AnimatedText = ({ text, className = "" }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.2"],
  });

  return (
    <p ref={ref} className={className}>
      {text.split("").map((char, i) => (
        <Char
          key={i}
          char={char}
          progress={scrollYProgress}
          range={[i / text.length, (i + 1) / text.length]}
        />
      ))}
    </p>
  );
};

export default AnimatedText;
