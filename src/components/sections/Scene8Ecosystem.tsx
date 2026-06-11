"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Smartphone, Bot, Brain, Cloud, Users, Radio } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const ecosystem = [
  { id: 1, icon: Bot, title: "Companion", desc: "The AI Intelligence", pos: "top-1/4 left-1/4" },
  { id: 2, icon: Radio, title: "BallBot", desc: "Hardware Platform", pos: "top-1/3 right-1/4" },
  { id: 3, icon: Smartphone, title: "Mobile App", desc: "Remote Experience", pos: "bottom-1/4 left-1/3" },
  { id: 4, icon: Brain, title: "AI Platform", desc: "Neural Engine", pos: "bottom-1/3 right-1/3" },
  { id: 5, icon: Cloud, title: "Cloud", desc: "Secure Infrastructure", pos: "top-1/2 left-10" },
  { id: 6, icon: Users, title: "Movement", desc: "Open Source Community", pos: "top-1/2 right-10" },
];

export default function Scene8Ecosystem() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".eco-node", {
        scale: 0,
        opacity: 0,
        duration: 1,
        stagger: {
          each: 0.1,
          from: "center",
        },
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
        }
      });

      // Ambient floating
      gsap.to(".eco-node", {
        y: "random(-20, 20)",
        x: "random(-20, 20)",
        duration: "random(2, 4)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative py-40 bg-[#080808] overflow-hidden">
      <div className="absolute inset-0 bg-glow-purple opacity-20 blur-[120px]" />
      
      <div className="container relative z-10 mx-auto px-6 max-w-6xl text-center mb-20">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
          A Complete <span className="gradient-text-warm">Ecosystem.</span>
        </h2>
        <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
          OpenPaw is more than a robot. It&apos;s a distributed intelligence movement designed to end pet loneliness through open hardware and software.
        </p>
      </div>

      <div className="relative h-[600px] max-w-5xl mx-auto">
        {/* Connection Lines (SVGs would be better for real dynamic lines) */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <div className="w-full h-full border border-dashed border-white/20 rounded-full animate-spin-slow" />
          <div className="absolute w-[80%] h-[80%] border border-dashed border-white/20 rounded-full animate-reverse-spin-slow" />
        </div>

        {ecosystem.map((node) => (
          <div 
            key={node.id} 
            className={`eco-node absolute ${node.pos} glass p-6 rounded-3xl border border-white/5 flex flex-col items-center gap-3 w-48 text-center hover:border-orange-500/30 transition-all cursor-pointer group`}
          >
            <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-orange-500/10 transition-colors">
              <node.icon className="w-6 h-6 text-white group-hover:text-orange-500 transition-colors" />
            </div>
            <div>
              <div className="text-white font-bold text-sm">{node.title}</div>
              <div className="text-neutral-500 text-[10px] uppercase tracking-widest">{node.desc}</div>
            </div>
          </div>
        ))}

        {/* Center Node */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-orange-500 to-purple-600 flex items-center justify-center shadow-[0_0_80px_rgba(249,115,22,0.4)] animate-pulse">
            <span className="text-5xl">🐾</span>
          </div>
        </div>
      </div>
    </section>
  );
}
