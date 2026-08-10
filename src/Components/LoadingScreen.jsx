import { motion } from "framer-motion";

const LoadingScreen = () => {
  return (
    <motion.div
      className="fixed inset-0 z-[1000] flex flex-col items-center justify-center gap-6 bg-background"
      exit={{ opacity: 0, scale: 1.04, filter: "blur(6px)" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="relative">
        <div className="w-20 h-20 rounded-2xl gradient-border flex items-center justify-center">
          <span className="font-display text-3xl font-bold text-gradient">SP</span>
        </div>
        <div className="absolute inset-0 rounded-2xl bg-primary/30 blur-2xl" />
      </div>
      <motion.span
        className="font-display text-xs uppercase tracking-[0.4em] text-muted"
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 1.6, repeat: Infinity }}
      >
        Loading
      </motion.span>
      <div className="w-40 h-px bg-border overflow-hidden rounded-full">
        <motion.div
          className="h-full bg-gradient-to-r from-primary via-secondary to-accent"
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
