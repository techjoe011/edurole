"use client";

import { useEffect } from "react";

export default function MotionEnhancements() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const heroes = [...document.querySelectorAll(".hero, .inner-hero, .simple-page-hero")];
    const onMove = (event) => {
      const target = event.currentTarget;
      const bounds = target.getBoundingClientRect();
      target.style.setProperty("--mx", `${event.clientX - bounds.left}px`);
      target.style.setProperty("--my", `${event.clientY - bounds.top}px`);
    };

    heroes.forEach((hero) => hero.addEventListener("pointermove", onMove));
    return () => heroes.forEach((hero) => hero.removeEventListener("pointermove", onMove));
  }, []);

  return null;
}
