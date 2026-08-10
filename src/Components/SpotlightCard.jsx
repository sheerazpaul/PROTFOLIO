import { useRef } from "react";

const SpotlightCard = ({ children, className = "", spotlightColor = "rgba(99,102,241,0.14)" }) => {
  const ref = useRef(null);

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--spot-x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--spot-y", `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      className={`group relative overflow-hidden ${className}`}
      style={{ "--spot-x": "50%", "--spot-y": "50%" }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(420px circle at var(--spot-x) var(--spot-y), ${spotlightColor}, transparent 65%)`,
        }}
      />
      {children}
    </div>
  );
};

export default SpotlightCard;
