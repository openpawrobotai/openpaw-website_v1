"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const visions = [
  "A future where every pet has a companion.",
  "A future where companionship is accessible.",
  "A future where pets are never truly alone.",
];

export default function Scene4Vision() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=300%",
          scrub: 1,
          pin: true,
        },
      });

      const visionItems = gsap.utils.toArray(".vision-item");
      visionItems.forEach((item: any, i) => {
        tl.fromTo(item, 
          { opacity: 0, scale: 0.8, filter: "blur(20px)" },
          { opacity: 1, scale: 1, filter: "blur(0px)", duration: 1.5 }
        ).to(item, 
          { opacity: 0, scale: 1.2, filter: "blur(20px)", duration: 1.5, delay: 0.5 }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen bg-[#050505] overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 grid-pattern opacity-10" />
      
      <div className="container relative z-10 mx-auto px-6 max-w-6xl h-full flex items-center justify-center">
        {visions.map((vision, idx) => (
          <div key={idx} className="vision-item absolute text-center px-4 w-full">
            <h2 className="text-4xl md:text-7xl lg:text-8xl font-black text-white leading-tight tracking-tighter">
              {vision}
            </h2>
          </div>
        ))}
      </div>
      
      {/* Dynamic Light Beam */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-orange-500/50 via-purple-500/20 to-transparent" />
    </section>
  );
}
