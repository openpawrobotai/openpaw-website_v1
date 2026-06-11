"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const features = [
  { label: "Function", traditional: "Watch your pet", openpaw: "Interact with your pet" },
  { label: "Role", traditional: "Passive monitoring", openpaw: "Active companionship" },
  { label: "Result", traditional: "Records moments", openpaw: "Creates moments" },
  { label: "Intelligence", traditional: "Basic motion alerts", openpaw: "Behavioral AI analysis" },
];

export default function Solution() {
  return (
    <section className="relative py-32 section-gradient-1 overflow-hidden" id="solution">
      <div className="container relative z-10 mx-auto px-6 max-w-6xl">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-purple mb-6 border border-purple-500/20"
          >
            <span className="text-sm font-medium text-purple-200">The Solution</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            More Than <span className="gradient-text-purple">A Camera.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto"
          >
            Static cameras just let you watch your pet be lonely. OpenPaw is an active presence that brings joy, stimulation, and connection to their day.
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Traditional Column */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass p-8 rounded-3xl border border-white/5 opacity-60"
            >
              <h3 className="text-xl font-medium text-neutral-400 mb-8 text-center uppercase tracking-wider text-sm">Traditional Pet Camera</h3>
              <div className="space-y-6">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-neutral-800 flex items-center justify-center">
                      <X className="w-3 h-3 text-neutral-500" />
                    </div>
                    <div>
                      <p className="text-sm text-neutral-500 mb-1">{feature.label}</p>
                      <p className="text-neutral-300">{feature.traditional}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* OpenPaw Column */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-purple p-8 rounded-3xl border border-purple-500/30 relative overflow-hidden glow-purple"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/20 blur-[50px] rounded-full" />
              <h3 className="text-xl font-bold text-white mb-8 text-center uppercase tracking-wider text-sm">OpenPaw</h3>
              <div className="space-y-6 relative z-10">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-purple-500/20 border border-purple-500/50 flex items-center justify-center">
                      <Check className="w-3 h-3 text-purple-400" />
                    </div>
                    <div>
                      <p className="text-sm text-purple-300/70 mb-1">{feature.label}</p>
                      <p className="text-white font-medium">{feature.openpaw}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
