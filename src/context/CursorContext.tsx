"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

export type CursorVariant = 
  | "default"
  | "button"
  | "link"
  | "text"
  | "video"
  | "image"
  | "drag"
  | "disabled"
  | "magnetic";

interface CursorContextType {
  variant: CursorVariant;
  setVariant: (variant: CursorVariant) => void;
  cursorText: string;
  setCursorText: (text: string) => void;
  isHovering: boolean;
  setIsHovering: (hovering: boolean) => void;
}

const CursorContext = createContext<CursorContextType | undefined>(undefined);

export const CursorProvider = ({ children }: { children: ReactNode }) => {
  const [variant, setVariant] = useState<CursorVariant>("default");
  const [cursorText, setCursorText] = useState("");
  const [isHovering, setIsHovering] = useState(false);

  return (
    <CursorContext.Provider
      value={{
        variant,
        setVariant,
        cursorText,
        setCursorText,
        isHovering,
        setIsHovering,
      }}
    >
      {children}
    </CursorContext.Provider>
  );
};

export const useCursor = () => {
  const context = useContext(CursorContext);
  if (context === undefined) {
    throw new Error("useCursor must be used within a CursorProvider");
  }
  return context;
};
