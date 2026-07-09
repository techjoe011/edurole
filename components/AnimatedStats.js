"use client";

import { useEffect, useMemo, useRef, useState } from "react";

function formatValue(value, format, suffix = "") {
  if (format === "compact-million") return `${Math.round(value / 1000000)}M${suffix}`;
  return `${Math.round(value).toLocaleString("en-US")}${suffix}`;
}

function normalizeStat(stat) {
  if (Array.isArray(stat)) {
    const [raw, label] = stat;
    const valueText = String(raw);
    const match = valueText.match(/^([^0-9]*)([\d,.]+)([A-Za-z+%]*)$/);
    if (!match) return { label, value: 0, prefix: "", suffix: valueText, staticValue: valueText };
    const [, prefix, number, suffix] = match;
    return {
      label,
      value: Number(number.replace(/,/g, "")),
      prefix,
      suffix,
    };
  }

  return stat;
}

export default function AnimatedStats({ stats }) {
  const normalizedStats = useMemo(() => stats.map(normalizeStat), [stats]);
  const ref = useRef(null);
  const [values, setValues] = useState(() => normalizedStats.map(() => 0));

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      setValues(normalizedStats.map((stat) => stat.value));
      return;
    }

    let frame;
    const duration = 1250;

    const run = () => {
      const start = performance.now();
      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setValues(normalizedStats.map((stat) => stat.value * eased));
        if (progress < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        run();
        observer.disconnect();
      },
      { threshold: 0.35 },
    );

    observer.observe(element);
    return () => {
      observer.disconnect();
      if (frame) cancelAnimationFrame(frame);
    };
  }, [normalizedStats]);

  return (
    <section ref={ref} className="client-stats detail-stats">
      {normalizedStats.map((stat, index) => (
        <div key={stat.label}>
          <strong>{stat.staticValue ?? `${stat.prefix ?? ""}${formatValue(values[index], stat.format, stat.suffix)}`}</strong>
          <span>{stat.label}</span>
        </div>
      ))}
    </section>
  );
}
