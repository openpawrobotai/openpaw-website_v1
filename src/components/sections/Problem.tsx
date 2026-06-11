"use client";

import { motion } from "framer-motion";
import { Clock, HeartCrack, Activity, Brain } from "lucide-react";

const stats = [
  {
    icon: Clock,
    title: "8+ Hours",
    description: "Average time pets spend completely alone every single day.",
  },
  {
    icon: HeartCrack,
    title: "Separation Anxiety",
    description: "Leading to stress, pacing, and destructive behavior at home.",
  },
  {
    icon: Activity,
    title: "Lack of Stimulation",
    description: "Boredom causes lethargy and long-term behavioral issues.",
  },
  {
    icon: Brain,
    title: "Missed Connection",
    description: "They wait for us. They deserve more than just an empty room.",
  },
];

export default function Problem() {
  return (
    <section className="relative py-32 bg-[#080808] overflow-hidden" id="problem">
      <div className="container relative z-10 mx-auto px-6 max-w-6xl">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Being Home Alone <span className="text-neutral-500">Isn&apos;t Easy.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto"
          >
            We love our pets like family, yet modern life forces us to leave them behind for most of the day. The isolation takes a silent toll on their well-being.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-8 md:p-10 rounded-3xl border border-white/5 hover:border-white/10 transition-colors card-hover group"
            >
              <div className="w-14 h-14 rounded-2xl bg-neutral-900/80 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-orange-500/10 group-hover:border-orange-500/30 transition-colors">
                <stat.icon className="w-7 h-7 text-neutral-400 group-hover:text-orange-400 transition-colors" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">{stat.title}</h3>
              <p className="text-neutral-400 leading-relaxed text-lg">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
