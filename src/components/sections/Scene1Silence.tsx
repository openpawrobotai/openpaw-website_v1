"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronDown } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Scene1Silence() {
  const containerRef = useRef<HTMLDivElement>(null);
  const initialRef = useRef<HTMLDivElement>(null);
  const text1Ref = useRef<HTMLDivElement>(null);
  const text2Ref = useRef<HTMLDivElement>(null);
  const text3Ref = useRef<HTMLDivElement>(null);
  const silhouetteRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=400%",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      // Fade out initial robotic animation and prompt
      tl.to(initialRef.current, { opacity: 0, duration: 0.5 })
        // Fade in first text
        .to(text1Ref.current, { opacity: 1, duration: 1 })
        .to(text1Ref.current, { opacity: 0, duration: 1, delay: 1 })
        .to(text2Ref.current, { opacity: 1, duration: 1 })
        .to(text2Ref.current, { opacity: 0, duration: 1, delay: 1 })
        .to(text3Ref.current, { opacity: 1, duration: 1 })
        .to(text3Ref.current, { opacity: 0, duration: 1, delay: 1 })
        .to(silhouetteRef.current, { opacity: 0.3, scale: 1.1, duration: 2 });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen bg-black flex items-center justify-center overflow-hidden z-50">
      
      {/* Initial State: Immersive Robotic Animation */}
      <div ref={initialRef} className="absolute inset-0 flex flex-col items-center justify-center z-10">
        
        {/* Robotic AI Core Animation */}
        <div className="relative w-64 h-64 flex items-center justify-center mb-12">
          {/* Outer ring */}
          <div className="absolute inset-0 rounded-full border border-orange-500/20 animate-spin-slow" />
          <div className="absolute inset-4 rounded-full border border-purple-500/30 animate-reverse-spin-slow border-dashed" />
          
          {/* Inner core */}
          <div className="relative w-24 h-24 rounded-full bg-black border-2 border-orange-500 shadow-[0_0_50px_rgba(249,115,22,0.6)] flex items-center justify-center overflow-hidden group">
             <div className="absolute inset-0 bg-orange-500/20 animate-pulse" />
             {/* The "Eye" */}
             <div className="w-8 h-8 rounded-full bg-orange-400 shadow-[0_0_20px_rgba(255,255,255,0.8)] animate-ping opacity-50" />
             <div className="absolute w-4 h-4 rounded-full bg-white shadow-[0_0_10px_#fff]" />
          </div>
          
          {/* Floating particles/nodes */}
          <div className="absolute top-0 w-2 h-2 bg-orange-400 rounded-full blur-[1px] animate-bounce" />
          <div className="absolute bottom-0 right-10 w-3 h-3 bg-purple-500 rounded-full blur-[2px] animate-pulse" />
        </div>

        {/* Scroll Prompt */}
        <div className="absolute bottom-12 flex flex-col items-center gap-4 animate-bounce">
          <p className="text-neutral-400 text-xs md:text-sm tracking-[0.2em] uppercase font-medium text-center px-4">
            Scroll down to see what happens when you&apos;re away
          </p>
          <ChevronDown className="text-orange-500 w-6 h-6" />
        </div>
      </div>

      {/* Story Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
        <div ref={text1Ref} className="text-3xl md:text-5xl font-light text-white opacity-0 absolute will-change-transform">Every day...</div>
        <div ref={text2Ref} className="text-3xl md:text-5xl font-light text-white opacity-0 absolute will-change-transform">Millions of pets...</div>
        <div ref={text3Ref} className="text-3xl md:text-5xl font-light text-white opacity-0 absolute will-change-transform">Wait for someone to come home.</div>
      </div>

      {/* Silhouette */}
      <div 
        ref={silhouetteRef} 
        className="absolute inset-0 opacity-0 bg-[url('https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center grayscale contrast-125 will-change-opacity z-0"
        style={{ filter: 'brightness(0.2) contrast(1.5)' }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-0 pointer-events-none" />
    </section>
  );
}
