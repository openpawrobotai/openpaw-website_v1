"use client";

import { motion } from "framer-motion";
import { Eye, BrainCircuit, Sparkles } from "lucide-react";

const steps = [
  {
    icon: Eye,
    title: "1. See",
    description: "Advanced computer vision continuously monitors and understands your pet's activity, recognizing playfulness, rest, or anxiety.",
    color: "orange",
  },
  {
    icon: BrainCircuit,
    title: "2. Understand",
    description: "On-board AI interprets behavior and context in real-time, deciding what kind of interaction your pet needs most at that exact moment.",
    color: "purple",
  },
  {
    icon: Sparkles,
    title: "3. Engage",
    description: "OpenPaw responds intelligently—moving, playing sounds, dispensing treats, or initiating a game to stimulate and comfort them.",
    color: "orange",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative py-32 bg-[#080808] overflow-hidden" id="how-it-works">
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent z-0 hidden lg:block" />

      <div className="container relative z-10 mx-auto px-6 max-w-6xl">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            How It <span className="text-neutral-500">Works.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto"
          >
            A seamless loop of perception, cognition, and action.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 relative">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative flex flex-col items-center text-center group"
            >
              {/* Connector Line for Mobile */}
              {index !== steps.length - 1 && (
                <div className="absolute top-[120px] left-1/2 w-px h-16 bg-gradient-to-b from-white/10 to-transparent lg:hidden" />
              )}
              
              <div className={`w-24 h-24 rounded-3xl glass flex items-center justify-center mb-8 relative z-10 
                ${step.color === 'orange' ? 'group-hover:border-orange-500/50 glow-orange' : 'group-hover:border-purple-500/50 glow-purple'} transition-all duration-500`}
              >
                <step.icon className={`w-10 h-10 ${step.color === 'orange' ? 'text-orange-400' : 'text-purple-400'}`} />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
              <p className="text-neutral-400 leading-relaxed max-w-sm">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
