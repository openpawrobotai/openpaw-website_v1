"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const roadmap = [
  { year: "2026", title: "OpenPaw Companion", desc: "Release of the core AI intelligence and alpha hardware." },
  { year: "2027", title: "OpenPaw BallBot", desc: "First mass-producible self-balancing companion robot." },
  { year: "2028", title: "Indoor Mapping", desc: "Advanced navigation and room-to-room pet interaction." },
  { year: "2029", title: "AI Pet Intelligence", desc: "Deep behavioral learning and emotive evolution." },
  { year: "2030", title: "OpenPaw Ecosystem", desc: "The global standard for open-source pet robotics." },
];

export default function Scene12Roadmap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=400%",
          scrub: 1,
          pin: true,
        },
      });

      tl.to(lineRef.current, { scaleY: 1, duration: 4, ease: "none" });

      const items = gsap.utils.toArray(".roadmap-item");
      items.forEach((item: any, i) => {
        tl.fromTo(item, 
          { opacity: 0, x: i % 2 === 0 ? -50 : 50 },
          { opacity: 1, x: 0, duration: 1 },
          i * 0.8
        );
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen bg-[#080808] overflow-hidden flex flex-col items-center justify-center">
      <div className="container relative z-10 mx-auto px-6 max-w-6xl">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Our Roadmap to the <span className="gradient-text-orange">Future.</span></h2>
          <p className="text-neutral-500">The journey to ending pet loneliness has just begun.</p>
        </div>

        <div className="relative max-w-4xl mx-auto h-[600px]">
          {/* Vertical Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-white/10" />
          <div ref={lineRef} className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-orange-500 scale-y-0 origin-top shadow-[0_0_15px_rgba(249,115,22,0.5)]" />
          
          <div className="h-full flex flex-col justify-between py-10">
            {roadmap.map((milestone, idx) => (
              <div 
                key={idx} 
                className={`roadmap-item flex items-center gap-10 w-full ${idx % 2 === 0 ? 'flex-row-reverse text-right' : 'flex-row text-left'}`}
              >
                <div className="flex-1">
                  <div className="text-orange-500 font-black text-2xl md:text-4xl mb-2">{milestone.year}</div>
                  <h3 className="text-white font-bold text-xl mb-2">{milestone.title}</h3>
                  <p className="text-neutral-500 text-sm max-w-xs inline-block">{milestone.desc}</p>
                </div>
                
                <div className="w-4 h-4 rounded-full bg-[#080808] border-2 border-orange-500 z-10 relative">
                  <div className="absolute inset-0 bg-orange-500 rounded-full animate-ping opacity-20" />
                </div>
                
                <div className="flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
