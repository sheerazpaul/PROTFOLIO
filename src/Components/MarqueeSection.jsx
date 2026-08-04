import React, { useEffect, useRef } from "react";

const rowOne = [
  "/images/img 1.png",
  "/images/img 3.png",
  "/images/img 5.png",
  "/images/img 6.png",
  "/images/img 9.png",
  "/images/Workflow.png",
  "/images/Veltrix.png",
];

const rowTwo = [
  "/images/Weather_App.png",
  "/images/Sky.png",
  "/images/img 4.png",
  "/images/img 7.png",
  "/images/img 8.png",
];

const MarqueeSection = () => {
  const sectionRef = useRef(null);
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      const section = sectionRef.current;
      if (!section) return;
      const sectionTop = section.offsetTop;
      const offset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      if (row1Ref.current) {
        row1Ref.current.style.transform = `translateX(${offset - 200}px)`;
      }
      if (row2Ref.current) {
        row2Ref.current.style.transform = `translateX(${-(offset - 200)}px)`;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const tiles = (imgs, keyPrefix) =>
    [imgs, imgs, imgs].flat().map((src, i) => (
      <img
        key={`${keyPrefix}-${i}`}
        src={src}
        alt="project preview"
        loading="lazy"
        draggable={false}
        className="w-[420px] h-[270px] rounded-2xl object-cover shrink-0"
      />
    ));

  return (
    <section
      ref={sectionRef}
      className="bg-[#081425] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden"
    >
      <div ref={row1Ref} className="flex gap-3 will-change-transform">
        {tiles(rowOne, "r1")}
      </div>
      <div ref={row2Ref} className="flex gap-3 mt-3 will-change-transform">
        {tiles(rowTwo, "r2")}
      </div>
    </section>
  );
};

export default MarqueeSection;
