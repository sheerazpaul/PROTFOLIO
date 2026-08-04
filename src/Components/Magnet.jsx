import React, { useEffect, useRef } from "react";

const Magnet = ({
  children,
  padding = 100,
  strength = 2,
  activeTransition = "transform 0.3s ease-out",
  inactiveTransition = "transform 0.6s ease-in-out",
  className = "",
}) => {
  const magnetRef = useRef(null);

  useEffect(() => {
    const magnet = magnetRef.current;
    if (!magnet) return;

    magnet.style.willChange = "transform";

    const onMouseMove = (e) => {
      const rect = magnet.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const distanceX = Math.abs(centerX - e.clientX);
      const distanceY = Math.abs(centerY - e.clientY);

      if (
        distanceX < rect.width / 2 + padding &&
        distanceY < rect.height / 2 + padding
      ) {
        magnet.style.transform = `translate3d(${(e.clientX - centerX) / strength}px, ${
          (e.clientY - centerY) / strength
        }px, 0)`;
        magnet.style.transition = activeTransition;
      } else {
        magnet.style.transform = "translate3d(0, 0, 0)";
        magnet.style.transition = inactiveTransition;
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      magnet.style.willChange = "";
    };
  }, [padding, strength, activeTransition, inactiveTransition]);

  return (
    <div ref={magnetRef} className={className}>
      {children}
    </div>
  );
};

export default Magnet;
