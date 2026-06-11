"use client";

import { useRef, Suspense, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, PerspectiveCamera, ContactShadows } from "@react-three/drei";
import * as THREE from "three";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function BallBotModel() {
  const meshRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();
    // Subtle breathing animation
    meshRef.current.position.y = Math.sin(t) * 0.1;
  });

  return (
    <group ref={meshRef}>
      {/* Abstract BallBot Representation */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        {/* Main Body */}
        <mesh position={[0, 1.2, 0]}>
          <boxGeometry args={[1, 0.8, 1]} />
          <meshStandardMaterial color="#222" metalness={0.8} roughness={0.2} />
        </mesh>
        {/* "Head" / Sensor Array */}
        <mesh position={[0, 1.8, 0]}>
          <cylinderGeometry args={[0.4, 0.4, 0.4, 32]} />
          <meshStandardMaterial color="#f97316" emissive="#f97316" emissiveIntensity={2} />
        </mesh>
        {/* The Ball */}
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[0.8, 64, 64]} />
          <meshStandardMaterial color="#111" metalness={0.9} roughness={0.1} />
        </mesh>
      </Float>
    </group>
  );
}

export default function Scene7BallBot() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=300%",
          scrub: 1,
          pin: true,
        },
      });

      tl.from(".spec-item", {
        opacity: 0,
        x: (i) => (i % 2 === 0 ? -100 : 100),
        stagger: 0.5,
        duration: 1,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen bg-[#050505] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Canvas shadows dpr={[1, 1.5]} frameloop="demand">
          <PerspectiveCamera makeDefault position={[0, 0, 6]} fov={50} />
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} castShadow />
          <pointLight position={[-10, -10, -10]} color="#f97316" intensity={1} />
          
          <Suspense fallback={null}>
            <BallBotModel />
            <Environment preset="city" />
            <ContactShadows position={[0, -1, 0]} opacity={0.4} scale={10} blur={2} far={4} />
          </Suspense>
        </Canvas>
      </div>

      <div className="container relative z-10 mx-auto px-6 h-full pointer-events-none">
        <div className="flex flex-col justify-between h-full py-20">
          <div className="max-w-xl">
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">Engineering <br /><span className="gradient-text-orange">Stability.</span></h2>
            <p className="text-neutral-400 text-lg">Meet BallBot. An open-source, self-balancing robotic platform designed specifically for pet interaction.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-40 gap-y-12 w-full">
            {[
              { title: "Stability System", desc: "IMU-driven 6-axis real-time balancing." },
              { title: "Motion Control", desc: "High-torque dual-motor drivetrain." },
              { title: "Sensor Fusion", desc: "Edge AI powered computer vision." },
              { title: "Safe Design", desc: "Soft-shell impact-resistant architecture." },
            ].map((spec, i) => (
              <div key={i} className="spec-item p-6 glass rounded-2xl border border-white/5 pointer-events-auto">
                <h3 className="text-orange-500 font-bold mb-2 uppercase tracking-widest text-xs">{spec.title}</h3>
                <p className="text-white font-medium">{spec.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
