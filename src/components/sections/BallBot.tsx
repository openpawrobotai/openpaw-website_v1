"use client";

import { motion } from "framer-motion";
import { Cpu, ExternalLink, Activity } from "lucide-react";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

export default function BallBot() {
  return (
    <section className="relative py-32 section-gradient-1 overflow-hidden" id="ballbot">
      <div className="container relative z-10 mx-auto px-6 max-w-6xl">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-purple mb-6 border border-purple-500/20"
          >
            <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
            <span className="text-sm font-medium text-purple-200">Hardware Platform</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Meet <span className="gradient-text-purple">BallBot.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto"
          >
            Our first reference design. An open-source, self-balancing robotic platform built specifically to house the OpenPaw intelligence.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Visual Side */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass p-8 rounded-3xl border border-white/5 relative overflow-hidden flex flex-col justify-center min-h-[400px] items-center"
          >
            <div className="absolute inset-0 dot-pattern opacity-20" />
            
            {/* Abstract representation of BallBot */}
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-24 h-24 rounded-2xl bg-neutral-900 border border-purple-500/30 flex items-center justify-center glow-purple z-20 float">
                <Cpu className="w-10 h-10 text-purple-400" />
              </div>
              <div className="w-2 h-16 bg-gradient-to-b from-purple-500/50 to-orange-500/50 z-10" />
              <div className="w-32 h-32 rounded-full bg-neutral-900 border border-orange-500/30 flex items-center justify-center glow-orange float-delay-1 relative overflow-hidden">
                 <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent" />
                 <Activity className="w-8 h-8 text-orange-400 opacity-50" />
              </div>
            </div>
            
            <div className="absolute bottom-6 left-0 right-0 text-center">
              <p className="text-xs text-neutral-500 uppercase tracking-widest">Self-Balancing Architecture</p>
            </div>
          </motion.div>

          {/* Info Side */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <div className="glass p-8 rounded-3xl border border-white/5 flex-1">
              <h3 className="text-2xl font-bold text-white mb-4">Current Status: Alpha</h3>
              <p className="text-neutral-400 mb-6 leading-relaxed">
                The hardware design, firmware, and balancing algorithms are currently in active development. We are using standard off-the-shelf components to ensure anyone can build their own.
              </p>
              
              <ul className="space-y-4 mb-8">
                {['ESP32-S3 Core', 'IMU 6-axis balancing', 'Dual brushless motors', 'Computer Vision via edge TPU'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-neutral-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                    {item}
                  </li>
                ))}
              </ul>

              <a 
                href="https://github.com/openpawrobotai"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 text-white text-sm font-medium transition-colors border border-white/10 w-full justify-center"
              >
                <GithubIcon className="w-4 h-4" /> View Hardware Repo <ExternalLink className="w-3 h-3 ml-1 text-neutral-500" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
