"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Scene3Reveal() {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(contentRef.current, 
        { opacity: 0, y: 100 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1.5,
          ease: "expo.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top center",
            toggleActions: "play none none reverse"
          }
        }
      );

      gsap.to(".bg-glow", {
        opacity: 0.6,
        scale: 1.2,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center bg-[#080808] overflow-hidden pt-20">
      {/* Warm Background Glows */}
      <div className="absolute inset-0 z-0">
        <div className="bg-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-orange-500/10 rounded-full blur-[150px] opacity-0" />
      </div>

      <div className="container relative z-10 mx-auto px-6 max-w-5xl">
        <div ref={contentRef} className="flex flex-col items-center text-center">
          {/* Logo Placeholder */}
          <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center mb-12 shadow-[0_0_50px_rgba(249,115,22,0.3)]">
            <span className="text-5xl">🐾</span>
          </div>

          <h2 className="text-5xl md:text-8xl font-bold tracking-tight text-white mb-8">
            Your Pet Should <br />
            <span className="gradient-text-orange text-glow-orange">Never Feel Alone.</span>
          </h2>

          <p className="text-xl md:text-2xl text-neutral-400 max-w-2xl mx-auto leading-relaxed mb-12">
            OpenPaw is building the world&apos;s first open-source AI companion ecosystem for pets. 
            Keep them engaged, monitored, and connected—even when you aren&apos;t there.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full">
            <a href="https://github.com/openpawrobotai" target="_blank" rel="noopener noreferrer" className="px-10 py-5 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(249,115,22,0.4)]">
              Join The Movement
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
