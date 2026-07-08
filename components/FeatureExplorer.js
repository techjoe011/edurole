"use client";

import { useState } from "react";

export default function FeatureExplorer({ features }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = features[activeIndex];

  return (
    <div className="feature-explorer">
      <div className="feature-selector" role="tablist" aria-label="Product features">
        {features.map((feature, index) => (
          <button
            type="button"
            role="tab"
            aria-selected={activeIndex === index}
            className={activeIndex === index ? "active" : ""}
            onClick={() => setActiveIndex(index)}
            key={feature.title}
          >
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{feature.title}</strong>
          </button>
        ))}
      </div>
      <article className="feature-detail" key={active.title} role="tabpanel">
        <span className="feature-detail-number">{String(activeIndex + 1).padStart(2, "0")}</span>
        <small>{active.label}</small>
        <h3>{active.title}</h3>
        <p>{active.text}</p>
        <div className="feature-progress">
          <span style={{ width: `${((activeIndex + 1) / features.length) * 100}%` }} />
        </div>
        <div className="feature-controls">
          <button
            type="button"
            disabled={activeIndex === 0}
            onClick={() => setActiveIndex((index) => index - 1)}
            aria-label="Previous feature"
          >
            ←
          </button>
          <span>{activeIndex + 1} / {features.length}</span>
          <button
            type="button"
            disabled={activeIndex === features.length - 1}
            onClick={() => setActiveIndex((index) => index + 1)}
            aria-label="Next feature"
          >
            →
          </button>
        </div>
      </article>
    </div>
  );
}
