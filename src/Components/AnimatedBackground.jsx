import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";

const AnimatedBackground = () => {
  const [mounted, setMounted] = useState(false);
  const mx = useMotionValue(50);
  const my = useMotionValue(50);
  const sx = useSpring(mx, { stiffness: 60, damping: 20 });
  const sy = useSpring(my, { stiffness: 60, damping: 20 });
  const mouseGlow = useMotionTemplate`radial-gradient(620px circle at ${sx}% ${sy}%, var(--glow-color), transparent 72%)`;

  useEffect(() => {
    const move = (e) => {
      mx.set((e.clientX / window.innerWidth) * 100);
      my.set((e.clientY / window.innerHeight) * 100);
    };
    window.addEventListener("mousemove", move);
    const t = setTimeout(() => setMounted(true), 200);
    return () => {
      window.removeEventListener("mousemove", move);
      clearTimeout(t);
    };
  }, [mx, my]);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden>
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/40 to-background" />

      <motion.div
        className="absolute -top-40 -left-40 w-[42rem] h-[42rem] rounded-full opacity-25 blur-[130px]"
        style={{ background: "var(--color-primary)" }}
        animate={mounted ? { x: [0, 60, -20, 0], y: [0, 30, 70, 0] } : undefined}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 -right-48 w-[36rem] h-[36rem] rounded-full opacity-20 blur-[130px]"
        style={{ background: "var(--color-secondary)" }}
        animate={mounted ? { x: [0, -50, 30, 0], y: [0, 40, -30, 0] } : undefined}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-48 left-1/3 w-[34rem] h-[34rem] rounded-full opacity-[0.12] blur-[140px]"
        style={{ background: "var(--color-accent)" }}
        animate={mounted ? { x: [0, 40, -40, 0], y: [0, -30, 20, 0] } : undefined}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div className="absolute inset-0" style={{ background: mouseGlow }} />
    </div>
  );
};

export default AnimatedBackground;
