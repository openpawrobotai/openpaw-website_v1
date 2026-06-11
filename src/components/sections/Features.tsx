"use client";

import { motion } from "framer-motion";
import { Bot, Radio, Gamepad2, BellRing, LineChart, Stethoscope, Mic, Code2 } from "lucide-react";

const features = [
  { icon: Bot, title: "AI Companion", description: "Autonomous personality that adapts to your pet.", span: "col-span-1 md:col-span-2 lg:col-span-2" },
  { icon: Radio, title: "Remote Monitoring", description: "HD video and two-way audio from anywhere.", span: "col-span-1 md:col-span-1 lg:col-span-1" },
  { icon: Gamepad2, title: "Interactive Play", description: "Laser pointers, treat dispensing, and movement games.", span: "col-span-1 md:col-span-1 lg:col-span-1" },
  { icon: BellRing, title: "Smart Alerts", description: "Get notified when they bark, cry, or need attention.", span: "col-span-1 md:col-span-2 lg:col-span-2" },
  { icon: LineChart, title: "Behavior Insights", description: "Daily reports on activity levels and mood.", span: "col-span-1 md:col-span-1 lg:col-span-2" },
  { icon: Stethoscope, title: "Future Wellness", description: "Tracking physical health markers over time.", span: "col-span-1 md:col-span-1 lg:col-span-1" },
  { icon: Mic, title: "Voice Interaction", description: "Recognizes your voice commands remotely.", span: "col-span-1 md:col-span-1 lg:col-span-1" },
  { icon: Code2, title: "Open Source", description: "Extendable ecosystem built by the community.", span: "col-span-1 md:col-span-2 lg:col-span-2" },
];

export default function Features() {
  return (
    <section className="relative py-32 section-gradient-2 overflow-hidden" id="features">
      <div className="container relative z-10 mx-auto px-6 max-w-6xl">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-orange mb-6 border border-orange-500/20"
          >
            <span className="text-sm font-medium text-orange-200">Capabilities</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Everything Your Pet Needs. <br className="hidden md:block" />
            <span className="text-neutral-500">All in one place.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className={`glass p-8 rounded-3xl border border-white/5 hover:border-white/20 transition-all group feature-card-border ${feature.span}`}
            >
              <feature.icon className="w-8 h-8 text-neutral-400 mb-6 group-hover:text-orange-400 transition-colors" />
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-neutral-400 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
