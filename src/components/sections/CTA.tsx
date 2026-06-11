"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";

export default function CTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section className="relative py-40 overflow-hidden bg-[#050505]" id="cta">
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-500/10 rounded-full blur-[150px] mix-blend-screen opacity-50" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80&w=2000')] opacity-5 bg-cover bg-center mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-[#080808]" />
      </div>

      <div className="container relative z-10 mx-auto px-6 max-w-4xl text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-8">
            Because Every Pet <br />
            <span className="gradient-text-orange text-glow-orange">Deserves Company.</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-neutral-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Join us in building the future of AI-powered pet companionship. Stop leaving them alone, start keeping them connected.
          </p>

          <div className="max-w-md mx-auto mb-10">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email for early access"
                    className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 text-white placeholder-neutral-500 focus:outline-none focus:border-orange-500/50 transition-colors"
                    required
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-2 bottom-2 btn-primary px-6 rounded-full text-white font-medium flex items-center justify-center gap-2"
                  >
                    Join Waitlist
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass-orange rounded-2xl px-6 py-4 border border-orange-500/30"
              >
                <div className="text-lg font-bold text-white mb-1">
                  You&apos;re on the list!
                </div>
                <div className="text-orange-200/70 text-sm">
                  We&apos;ll reach out as soon as we launch the next batch.
                </div>
              </motion.div>
            )}
          </div>

          <div className="flex items-center justify-center gap-6">
            <a href="#community" className="text-neutral-400 hover:text-white transition-colors text-sm font-medium flex items-center gap-2">
              Join Discord Community
            </a>
            <div className="w-1 h-1 rounded-full bg-neutral-700" />
            <a href="https://github.com/openpawrobotai" className="text-neutral-400 hover:text-white transition-colors text-sm font-medium flex items-center gap-2">
              View on GitHub <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
