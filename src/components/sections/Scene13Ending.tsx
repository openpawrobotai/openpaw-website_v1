"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { MessageCircle, GitPullRequest, ArrowRight } from "lucide-react";
import Magnetic from "@/components/ui/Magnetic";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export default function Scene13Ending() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=200%",
          scrub: 1,
          pin: true,
        },
      });

      tl.fromTo(".ending-text-1", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1 })
        .to(".ending-text-1", { opacity: 0, y: -20, duration: 1, delay: 1 })
        .fromTo(".ending-text-2", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1 })
        .to(".ending-text-2", { opacity: 0, y: -20, duration: 1, delay: 1 })
        .fromTo(".final-cta", { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 1 });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen bg-black overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-orange-500/10" />
      
      <div className="container relative z-10 mx-auto px-6 max-w-4xl text-center">
        <div className="ending-text-1 absolute inset-0 flex items-center justify-center pointer-events-none opacity-0">
          <h2 className="text-4xl md:text-7xl font-light text-white tracking-tight">One day...</h2>
        </div>

        <div className="ending-text-2 absolute inset-0 flex items-center justify-center pointer-events-none opacity-0">
          <h2 className="text-4xl md:text-7xl font-light text-white tracking-tight px-6">No pet should spend the day alone.</h2>
        </div>

        <div className="final-cta opacity-0">
          <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center mb-12 mx-auto shadow-[0_0_50px_rgba(249,115,22,0.3)]">
            <span className="text-5xl">🐾</span>
          </div>
          
          <h2 className="text-5xl md:text-8xl font-black text-white mb-12 tracking-tighter">
            Join The <span className="gradient-text-orange">Mission.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto w-full">
            <a href="https://linktr.ee/openpawrobot" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between px-8 py-6 rounded-2xl bg-white text-black font-bold group hover:bg-neutral-200 transition-all w-full">
              <span className="flex items-center gap-3"><MessageCircle /> Join Community</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="https://github.com/openpawrobotai" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between px-8 py-6 rounded-2xl glass border border-white/10 text-white font-bold group hover:bg-white/5 transition-all w-full">
              <span className="flex items-center gap-3"><GitPullRequest /> Become A Contributor</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <div className="col-span-1 md:col-span-2 w-full">
              <a href="https://github.com/openpawrobotai" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between px-8 py-6 rounded-2xl glass border border-white/10 text-white font-bold group hover:bg-white/5 transition-all w-full">
                <span className="flex items-center gap-3"><GithubIcon /> View Our Open Source Stack</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
          
          <div className="mt-20 text-neutral-600 text-xs font-bold uppercase tracking-[0.3em]">
            Building the future in public since 2026
          </div>
        </div>
      </div>
    </section>
  );
}
