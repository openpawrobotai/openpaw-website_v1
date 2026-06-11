"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const timelineData = [
  { time: "8:00 AM", text: "You leave for work." },
  { time: "9:15 AM", text: "Still waiting." },
  { time: "11:30 AM", text: "Nothing changed." },
  { time: "2:00 PM", text: "Still alone." },
  { time: "5:00 PM", text: "Waiting for the door to open." },
];

export default function Scene2Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

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

      tl.to(bgRef.current, { backgroundColor: "#020202", duration: 5 });

      const items = gsap.utils.toArray(".timeline-item");
      items.forEach((item: any, i) => {
        tl.fromTo(item, 
          { opacity: 0, y: 50 }, 
          { opacity: 1, y: 0, duration: 1 },
          i === 0 ? 0 : ">-0.5"
        ).to(item, 
          { opacity: 0, y: -50, duration: 1, delay: 0.5 }
        );
      });

      tl.fromTo(".final-question", 
        { opacity: 0, scale: 0.9 }, 
        { opacity: 1, scale: 1, duration: 1.5, ease: "power2.out" }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen bg-[#080808] overflow-hidden">
      <div ref={bgRef} className="absolute inset-0 transition-colors duration-1000" />
      
      <div className="container relative z-10 mx-auto px-6 h-full flex items-center justify-center">
        <div className="relative w-full max-w-4xl h-full flex flex-col items-center justify-center">
          {timelineData.map((item, idx) => (
            <div key={idx} className="timeline-item absolute flex flex-col items-center text-center opacity-0">
              <span className="text-orange-500 font-mono text-xl mb-4 tracking-tighter">{item.time}</span>
              <h3 className="text-4xl md:text-6xl font-bold text-white tracking-tight">{item.text}</h3>
            </div>
          ))}
          
          <div className="final-question absolute flex flex-col items-center text-center opacity-0">
            <h3 className="text-4xl md:text-7xl font-bold text-white mb-8">What if it didn&apos;t have to be this way?</h3>
            <div className="w-1 h-20 bg-gradient-to-b from-orange-500 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
