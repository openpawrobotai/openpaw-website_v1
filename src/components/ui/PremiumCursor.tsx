"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useCursor } from "@/context/CursorContext";

export default function PremiumCursor() {
  const { variant, cursorText } = useCursor();
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  // Mouse coordinate values
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Extremely snappy spring for the main dot (almost 1:1)
  const springConfig = { damping: 25, stiffness: 700, mass: 0.1 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  // Slightly slower spring for the elegant outer ring
  const ringSpringConfig = { damping: 30, stiffness: 300, mass: 0.2 };
  const ringX = useSpring(mouseX, ringSpringConfig);
  const ringY = useSpring(mouseY, ringSpringConfig);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) {
      setTimeout(() => setIsTouchDevice(true), 0);
    }
  }, []);

  useEffect(() => {
    if (isTouchDevice) return;

    const moveMouse = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", moveMouse, { passive: true });
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", moveMouse);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [mouseX, mouseY, isVisible, isTouchDevice]);

  if (isTouchDevice) return null;

  // Variants dictionary for framer-motion states
  const variants = {
    default: {
      height: 10,
      width: 10,
      x: "-50%",
      y: "-50%",
      backgroundColor: "#ffffff",
      boxShadow: "0 0 10px rgba(255, 255, 255, 0.5)",
      border: "none",
    },
    magnetic: {
      height: 48,
      width: 48,
      x: "-50%",
      y: "-50%",
      backgroundColor: "rgba(249, 115, 22, 0.1)",
      border: "1px solid rgba(249, 115, 22, 0.5)",
      boxShadow: "none",
    },
    text: {
      height: 64,
      width: 64,
      x: "-50%",
      y: "-50%",
      backgroundColor: "rgba(249, 115, 22, 0.95)",
      border: "none",
      boxShadow: "0 0 20px rgba(249, 115, 22, 0.4)",
    },
    link: {
      height: 24,
      width: 24,
      x: "-50%",
      y: "-50%",
      backgroundColor: "rgba(255, 255, 255, 0.2)",
      border: "1px solid rgba(255, 255, 255, 0.5)",
      boxShadow: "none",
    }
  };

  const ringVariants = {
    default: {
      height: 36,
      width: 36,
      x: "-50%",
      y: "-50%",
      opacity: 1,
      border: "1px solid rgba(255, 255, 255, 0.2)",
      backgroundColor: "transparent",
    },
    magnetic: {
      height: 0,
      width: 0,
      opacity: 0,
    },
    text: {
      height: 80,
      width: 80,
      opacity: 0,
    },
    link: {
      height: 0,
      width: 0,
      opacity: 0,
    }
  };

  return (
    <>
      <div style={{ opacity: isVisible ? 1 : 0 }} className="transition-opacity duration-300">
        {/* Outer Ring */}
        <motion.div
          className="fixed top-0 left-0 rounded-full pointer-events-none z-[9998]"
          style={{ x: ringX, y: ringY }}
          variants={ringVariants}
          animate={variant}
          initial="default"
          transition={{ duration: 0.2 }}
        />

        {/* Main Dot / State Container */}
        <motion.div
          className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] flex items-center justify-center overflow-hidden"
          style={{
            x: cursorX,
            y: cursorY,
            scale: isClicking ? 0.8 : 1,
          }}
          variants={variants}
          animate={variant}
          initial="default"
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          {variant === "text" && (
            <motion.span 
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-white text-[10px] font-bold uppercase tracking-widest pointer-events-none text-center"
            >
              {cursorText}
            </motion.span>
          )}
        </motion.div>
      </div>
    </>
  );
}

