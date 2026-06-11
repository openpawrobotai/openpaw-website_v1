"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useCursor, CursorVariant } from "@/context/CursorContext";

interface MagneticProps {
  children: React.ReactElement;
  strength?: number;
  variant?: CursorVariant;
  text?: string;
}

export default function Magnetic({ 
  children, 
  strength = 0.2, 
  variant = "magnetic", 
  text = "" 
}: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const { setVariant, setCursorText, setIsHovering } = useCursor();

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * strength, y: middleY * strength });
  };

  const handleMouseEnter = () => {
    setVariant(variant);
    if (text) setCursorText(text);
    setIsHovering(true);
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
    setVariant("default");
    setCursorText("");
    setIsHovering(false);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
}
