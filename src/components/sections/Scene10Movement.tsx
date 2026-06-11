"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Globe, Heart, Share2, Sparkles, Users2 } from "lucide-react";

export default function Scene10Movement() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".movement-title", {
        scale: 0.9,
        opacity: 0,
        duration: 1.5,
        ease: "expo.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative py-40 bg-[#080808] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="container relative z-10 mx-auto px-6 max-w-6xl text-center">
        <div className="movement-title">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 mb-8">
            <Sparkles size={16} className="text-purple-400" />
            <span className="text-sm font-medium text-white">Join the Global Mission</span>
          </div>
          <h2 className="text-5xl md:text-8xl font-black text-white mb-12 tracking-tight">
            The OpenPaw <br />
            <span className="gradient-text-warm">Movement.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {[
            { label: "Community Members", value: "12,400+", icon: Users2 },
            { label: "Countries Represented", value: "84", icon: Globe },
            { label: "Open Issues Solved", value: "432", icon: Heart },
          ].map((stat, i) => (
            <div key={i} className="glass p-10 rounded-[3rem] border border-white/5 hover:bg-white/5 transition-all">
              <stat.icon size={32} className="text-orange-500 mx-auto mb-6" />
              <div className="text-4xl font-black text-white mb-2">{stat.value}</div>
              <div className="text-neutral-500 font-bold uppercase tracking-widest text-xs">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto glass p-12 rounded-[3.5rem] border border-white/10 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 relative z-10">The Future Of Pet Companionship <br />Should Belong To Everyone.</h3>
          <p className="text-neutral-400 mb-10 relative z-10">Whether you are a developer, a designer, a pet owner, or a dreamer—there is a place for you in the OpenPaw community. Help us define how pets interact with technology.</p>
          <div className="flex flex-wrap justify-center gap-4 relative z-10">
            <a href="https://github.com/openpawrobotai" target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-full bg-white text-black font-bold hover:scale-105 transition-transform inline-block">Become A Contributor</a>
            <a href="https://x.com/OpenPawOfficial" target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-full glass border border-white/10 text-white font-bold hover:bg-white/5 transition-all flex items-center gap-2">
              <Share2 size={18} /> Share The Mission
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
