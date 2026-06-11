"use client";

import { Howl } from "howler";

// Placeholder sound URLs - in a real app, these would be local assets
const SOUNDS = {
  hover: "https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3",
  click: "https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3",
  transition: "https://assets.mixkit.co/active_storage/sfx/2560/2560-preview.mp3",
};

export const playSound = (type: keyof typeof SOUNDS) => {
  const sound = new Howl({
    src: [SOUNDS[type]],
    volume: type === "hover" ? 0.1 : 0.2,
  });
  sound.play();
};
