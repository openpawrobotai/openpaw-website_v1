"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Cpu, CpuIcon, Layers, Cloud, Sparkles, Smartphone } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const layers = [
  { id: "hw", icon: CpuIcon, title: "Edge Hardware", desc: "ESP32-S3 powered robotics with local sensor processing.", color: "text-orange-500" },
  { id: "ai", icon: Sparkles, title: "AI Intelligence", desc: "On-device behavior analysis and emotive responses.", color: "text-purple-500" },
  { id: "cloud", icon: Cloud, title: "Cloud Services", desc: "Secure remote connectivity and long-term health telemetry.", color: "text-blue-500" },
  { id: "app", icon: Smartphone, title: "Companion App", desc: "Seamless human-to-pet interaction interface.", color: "text-orange-400" },
];

export default function Scene6Technology() {
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

      tl.from(".tech-intro", { opacity: 0, y: 50, duration: 1 });

      layers.forEach((layer, i) => {
        tl.fromTo(`.layer-${layer.id}`, 
          { opacity: 0, x: -50, scale: 0.9 },
          { opacity: 1, x: 0, scale: 1, duration: 1 },
          ">-0.5"
        );
        
        if (i < layers.length - 1) {
          tl.fromTo(`.arrow-${i}`, 
            { height: 0, opacity: 0 },
            { height: 40, opacity: 1, duration: 0.5 }
          );
        }
      });

      tl.to(".tech-stack-viz", { scale: 1.05, duration: 2 }, ">");
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="technology" ref={containerRef} className="relative h-screen bg-[#050505] overflow-hidden flex flex-col items-center justify-center pt-20">
      <div className="absolute inset-0 dot-pattern opacity-10" />
      
      <div className="container relative z-10 mx-auto px-6 max-w-4xl">
        <div className="tech-intro text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Built on a <span className="gradient-text-orange">Modern Stack.</span></h2>
          <p className="text-neutral-500 max-w-xl mx-auto">From silicon to the palm of your hand, our ecosystem is engineered for reliability and intelligence.</p>
        </div>

        <div className="tech-stack-viz relative flex flex-col items-center gap-0">
          {layers.map((layer, idx) => (
            <div key={layer.id} className="flex flex-col items-center">
              <div className={`layer-${layer.id} glass p-6 md:p-8 rounded-3xl border border-white/5 flex items-center gap-6 w-full max-w-md group hover:border-orange-500/20 transition-all`}>
                <div className={`w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center ${layer.color} group-hover:scale-110 transition-transform`}>
                  <layer.icon size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">{layer.title}</h3>
                  <p className="text-neutral-500 text-sm leading-tight">{layer.desc}</p>
                </div>
              </div>
              
              {idx < layers.length - 1 && (
                <div className={`arrow-${idx} w-px bg-gradient-to-b from-orange-500 to-purple-500 my-2 opacity-0`} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
