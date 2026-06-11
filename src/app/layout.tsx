import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
  title: "OpenPaw — Your Pet Should Never Feel Alone",
  description:
    "OpenPaw is building an AI-powered companion that keeps pets engaged, monitored, and connected when their humans are away. Join the open-source revolution in pet companionship.",
  keywords: [
    "pet companion",
    "AI pet robot",
    "pet loneliness",
    "open source pet tech",
    "smart pet device",
    "separation anxiety pets",
  ],
  openGraph: {
    title: "OpenPaw — Your Pet Should Never Feel Alone",
    description:
      "AI-powered companion robots for pets. Open source. Built in public.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#080808] text-white antialiased overflow-x-hidden">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
