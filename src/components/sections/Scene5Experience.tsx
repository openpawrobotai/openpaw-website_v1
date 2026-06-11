"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Activity, Heart, Moon, Shield, Smartphone, Camera } from "lucide-react";
import { gsap } from "gsap";

const metrics = [
  { label: "Activity Score", value: 92, unit: "%", icon: Activity, color: "text-orange-400" },
  { label: "Mood Score", value: "Happy", unit: "", icon: Heart, color: "text-red-400" },
  { label: "Sleep Quality", value: "Excellent", unit: "", icon: Moon, color: "text-purple-400" },
];

export default function Scene5Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".dashboard-card", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative py-40 bg-[#080808] overflow-hidden">
      <div className="container relative z-10 mx-auto px-6 max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
              A Window Into <br />
              <span className="gradient-text-orange">Their World.</span>
            </h2>
            <p className="text-xl text-neutral-400 mb-12 leading-relaxed">
              Experience the future of pet companionship through a sophisticated, real-time dashboard. 
              Monitor wellness, track activity, and interact from anywhere.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { icon: Shield, title: "Smart Alerts", desc: "AI detects barking or distress." },
                { icon: Smartphone, title: "Remote Play", desc: "Interact via voice and toys." },
                { icon: Camera, title: "HD Vision", desc: "Clear view of every moment." },
                { icon: Activity, title: "Insights", desc: "Behavioral health reporting." },
              ].map((item, i) => (
                <div key={i} className="glass p-6 rounded-2xl border border-white/5 hover:border-orange-500/20 transition-all group">
                  <item.icon className="w-6 h-6 text-orange-500 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-white font-bold mb-1">{item.title}</h3>
                  <p className="text-neutral-500 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="dashboard-card glass p-8 rounded-[2.5rem] border border-white/10 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 p-8">
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/20 border border-green-500/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[10px] font-bold text-green-400 uppercase tracking-widest">Live Monitoring</span>
                </div>
              </div>

              <div className="mb-12">
                <h4 className="text-white/50 text-xs font-bold uppercase tracking-[0.2em] mb-4">Wellness Overview</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {metrics.map((m, i) => (
                    <div key={i} className="bg-white/5 p-6 rounded-3xl border border-white/5">
                      <m.icon className={`w-5 h-5 ${m.color} mb-4`} />
                      <div className="text-2xl font-bold text-white leading-none mb-1">{m.value}{m.unit}</div>
                      <div className="text-xs text-neutral-500">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative aspect-video rounded-3xl bg-neutral-900 overflow-hidden border border-white/5 mb-8">
                <img 
                  src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=1000" 
                  alt="Pet View" 
                  className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-6 left-6 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                    <Smartphone className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="text-white text-sm font-bold">Luna is active</div>
                    <div className="text-white/40 text-[10px]">Living Room • 2m ago</div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "92%" }}
                    className="h-full bg-orange-500" 
                  />
                </div>
                <div className="flex justify-between items-center text-[10px] text-white/40 font-bold uppercase tracking-widest">
                  <span>Daily Goal</span>
                  <span className="text-orange-400">92% Complete</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
