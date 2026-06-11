"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { GitBranch, GitCommit, GitPullRequest, Star, Terminal } from "lucide-react";

const repoStats = [
  { label: "Total Commits", value: "1,284", icon: GitCommit },
  { label: "Active Contributors", value: "42", icon: GitBranch },
  { label: "GitHub Stars", value: "856", icon: Star },
  { label: "Pull Requests", value: "156", icon: GitPullRequest },
];

export default function Scene9BuildInPublic() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".stat-card", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
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
      <div className="container relative z-10 mx-auto px-6 max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8">
              <Terminal size={14} className="text-orange-500" />
              <span className="text-[10px] font-bold text-white uppercase tracking-widest">Transparency first</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
              Built In <br />
              <span className="gradient-text-orange">Public.</span>
            </h2>
            <p className="text-xl text-neutral-400 mb-12 leading-relaxed">
              We believe trust is earned through transparency. Every line of code, every hardware revision, and every roadmap milestone is open for the world to see.
            </p>
            
            <a 
              href="https://github.com/openpawrobotai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-bold hover:bg-neutral-200 transition-all"
            >
              Explore Our Repositories
            </a>
          </div>

          <div className="lg:w-1/2 grid grid-cols-2 gap-4 w-full">
            {repoStats.map((stat, i) => (
              <div key={i} className="stat-card glass p-8 rounded-[2rem] border border-white/5 flex flex-col items-center text-center group hover:border-orange-500/20 transition-all">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <stat.icon size={24} className="text-orange-500" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-neutral-500 text-xs font-bold uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
            
            <div className="stat-card col-span-2 glass p-8 rounded-[2rem] border border-white/5 bg-gradient-to-br from-orange-500/5 to-transparent">
              <div className="flex items-center justify-between mb-4">
                <div className="text-white font-bold">Latest Milestone</div>
                <div className="text-orange-500 text-xs font-bold">85% COMPLETE</div>
              </div>
              <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden mb-4">
                <div className="h-full bg-orange-500 w-[85%]" />
              </div>
              <div className="text-neutral-500 text-sm">OpenPaw Companion Alpha Testing</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
