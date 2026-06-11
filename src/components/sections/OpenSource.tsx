"use client";

import { motion } from "framer-motion";
import { GitPullRequest, GitMerge, Users } from "lucide-react";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

const initialContributionLevels = Array.from({ length: 60 }).map(() => Math.floor(Math.random() * 5));

export default function OpenSource() {
  const displayLevels = initialContributionLevels;

  return (
    <section className="relative py-32 bg-[#080808] overflow-hidden" id="open-source">
      {/* Decorative Grid */}
      <div className="absolute inset-0 grid-pattern opacity-30 z-0" />
      
      <div className="container relative z-10 mx-auto px-6 max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 border border-white/10"
            >
              <GithubIcon className="w-4 h-4 text-white" />
              <span className="text-sm font-medium text-white">Open Source</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              Built In <span className="gradient-text-warm">Public.</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-neutral-400 mb-8 leading-relaxed"
            >
              OpenPaw is being built as an open-source robotics initiative. We believe the future of pet companionship shouldn&apos;t be locked behind walled gardens. Developers, engineers, designers, pet owners, and researchers are invited to contribute.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-2 gap-6 mb-10"
            >
              <div className="glass p-6 rounded-2xl border border-white/5">
                <Users className="w-6 h-6 text-orange-400 mb-3" />
                <h4 className="text-white font-semibold mb-1">Community Driven</h4>
                <p className="text-sm text-neutral-500">Built by pet lovers, for pet lovers.</p>
              </div>
              <div className="glass p-6 rounded-2xl border border-white/5">
                <GitPullRequest className="w-6 h-6 text-purple-400 mb-3" />
                <h4 className="text-white font-semibold mb-1">Extensible OS</h4>
                <p className="text-sm text-neutral-500">Create your own behaviors and apps.</p>
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9, x: 20 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 w-full"
          >
            {/* Faux GitHub Contribution Graph */}
            <div className="glass p-8 rounded-3xl border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-10">
                <GitMerge className="w-32 h-32 text-white" />
              </div>
              
              <div className="flex items-center justify-between mb-8 relative z-10">
                <div>
                  <h3 className="text-white font-medium">openpaw-core</h3>
                  <p className="text-sm text-neutral-500">Active development</p>
                </div>
                <div className="px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-medium">
                  Public
                </div>
              </div>

              <div className="grid grid-cols-12 gap-2 mb-6 relative z-10">
                {displayLevels.map((level, i) => (
                  <div 
                    key={i} 
                    className={`w-full aspect-square rounded-sm contrib-${level}`}
                  />
                ))}
              </div>

              <a 
                href="https://github.com/openpawrobotai"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors text-white text-sm font-medium border border-white/10 flex items-center justify-center gap-2"
              >
                <GithubIcon className="w-4 h-4" /> View Repository
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
