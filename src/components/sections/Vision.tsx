"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const milestones = [
  { year: "Phase 1", title: "Awareness", desc: "Understanding pet behavior through edge AI and computer vision." },
  { year: "Phase 2", title: "Interaction", desc: "Autonomous play, voice recognition, and real-time response." },
  { year: "Phase 3", title: "Mobility", desc: "Self-balancing, room mapping, and physical companionship." },
  { year: "Phase 4", title: "Wellness", desc: "Long-term health tracking, mood analysis, and behavioral insights." },
];

export default function Vision() {
  return (
    <section className="relative py-32 bg-[#0a0a0a] overflow-hidden" id="vision">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1a1a1a]/50 to-transparent z-0" />
      
      <div className="container relative z-10 mx-auto px-6 max-w-6xl">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 border border-white/10"
          >
            <Sparkles className="w-4 h-4 text-orange-400" />
            <span className="text-sm font-medium text-white">Roadmap</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            The Future of <br className="hidden md:block" />
            <span className="text-neutral-500">Pet Companionship.</span>
          </motion.h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-orange-500/20 to-transparent md:-translate-x-1/2 hidden md:block" />
          
          <div className="space-y-12 relative">
            {milestones.map((milestone, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`flex flex-col md:flex-row gap-8 items-start md:items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Connector Dot */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-neutral-900 border-2 border-orange-500 z-10 shadow-[0_0_15px_rgba(249,115,22,0.5)]" />
                
                <div className="flex-1 md:text-right w-full">
                  {idx % 2 === 0 ? (
                    <div className="glass p-6 md:p-8 rounded-3xl border border-white/5 md:text-left hover:border-orange-500/20 transition-colors">
                      <span className="text-orange-400 font-mono text-sm mb-2 block">{milestone.year}</span>
                      <h3 className="text-2xl font-bold text-white mb-3">{milestone.title}</h3>
                      <p className="text-neutral-400">{milestone.desc}</p>
                    </div>
                  ) : (
                    <div className="glass p-6 md:p-8 rounded-3xl border border-white/5 md:text-right hover:border-orange-500/20 transition-colors">
                      <span className="text-orange-400 font-mono text-sm mb-2 block">{milestone.year}</span>
                      <h3 className="text-2xl font-bold text-white mb-3">{milestone.title}</h3>
                      <p className="text-neutral-400">{milestone.desc}</p>
                    </div>
                  )}
                </div>
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
