"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Quote } from "lucide-react";

export default function Scene11Founder() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".founder-content", {
        y: 40,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative py-40 bg-[#050505] overflow-hidden">
      <div className="container relative z-10 mx-auto px-6 max-w-4xl">
        <div className="founder-content glass p-12 md:p-20 rounded-[4rem] border border-white/5 relative">
          <Quote className="absolute top-12 left-12 w-16 h-16 text-orange-500/10" />
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-10 tracking-tight leading-tight">
              &quot;Most pet technology allows owners to watch. Very little actually interacts. <span className="text-orange-500">We wanted to change that.</span>&quot;
            </h2>
            
            <div className="flex items-center gap-6">
              <div>
                <div className="text-white font-bold text-lg">Ashok Jaiswal</div>
                <div className="text-neutral-500 text-sm">Founder, OpenPaw</div>
              </div>
            </div>
          </div>

          <div className="mt-16 pt-16 border-t border-white/5 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-white font-bold mb-4 uppercase tracking-widest text-xs">The Observation</h4>
              <p className="text-neutral-400 text-sm leading-relaxed">
                OpenPaw started with a simple observation: pets are social creatures. Leaving them with a camera they can&apos;t interact with doesn&apos;t solve the emotional void of isolation.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4 uppercase tracking-widest text-xs">The Mission</h4>
              <p className="text-neutral-400 text-sm leading-relaxed">
                We believe companionship should be a right, not a luxury. By building open-source hardware and AI, we ensure that every pet owner can provide their pet with a friend.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
