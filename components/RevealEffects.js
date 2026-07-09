"use client";

import { useEffect } from "react";

const targets = [
  ".product-mini",
  ".stat-card",
  ".advantage-grid article",
  ".solution",
  ".feature-list article",
  ".feature-explorer",
  ".audience-grid article",
  ".spotlight-grid article",
  ".integration-list span",
  ".product-page-card",
  ".value-section article",
  ".client-groups article",
  ".client-groups details",
  ".contact-panel article",
  ".faq-list details",
  ".option-grid article",
  ".related-product > *",
  ".client-map",
].join(",");

export default function RevealEffects() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const items = [...document.querySelectorAll(targets)];
    items.forEach((item, index) => {
      item.classList.add("reveal-item");
      item.style.setProperty("--reveal-delay", `${(index % 4) * 70}ms`);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -35px" },
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return null;
}
