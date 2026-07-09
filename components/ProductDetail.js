import Link from "next/link";
import { Arrow, CtaBand, PageShell } from "./SiteChrome";
import AnimatedStats from "./AnimatedStats";
import FeatureExplorer from "./FeatureExplorer";

function AudienceIcon({ index }) {
  const icons = [
    <><path d="M3 10 12 5l9 5M5 10v9M9 10v9M15 10v9M19 10v9M3 20h18" /></>,
    <><path d="M4 5h10v14H4zM7 9h4M7 13h4M17 8v8M14 12h6" /></>,
    <><circle cx="12" cy="9" r="4" /><path d="m9 13-2 8 5-3 5 3-2-8" /></>,
    <><path d="M12 3 4 7v5c0 5 3.4 8 8 9 4.6-1 8-4 8-9V7l-8-4Z" /><path d="m8 13 2.5 2.5L16 10" /></>,
  ];
  return (
    <span className="audience-icon">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        {icons[index]}
      </svg>
    </span>
  );
}

export default function ProductDetail({ product }) {
  return (
    <PageShell>
      <section className={`inner-hero ${product.theme}`}>
        <div>
          <div className="breadcrumbs"><Link href="/">Home</Link><span>/</span><span>{product.title}</span></div>
          <span className="eyebrow light">{product.kicker}</span>
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <div className="hero-actions">
            <Link className="button button-light" href="/contact">Request a demo <Arrow /></Link>
            <Link className="text-link" href="/contact?subject=quote">Get a quote <Arrow /></Link>
            {product.external && (
              <a className="text-link" href={product.external} target="_blank" rel="noreferrer">
                Access platform <Arrow />
              </a>
            )}
          </div>
        </div>
      </section>

      <AnimatedStats stats={product.stats} />

      <section className="content-section feature-content-section">
        <div className="content-intro">
          <span className="eyebrow">{product.sectionLabel}</span>
          <h2>{product.sectionTitle}</h2>
          <p>{product.sectionText}</p>
        </div>
        <FeatureExplorer features={product.features} />
      </section>

      {product.audiences && (
        <section className="audience-section">
          <div className="center-heading">
            <span className="eyebrow">Who it’s for</span>
            <h2>Built for those who run the whole system.</h2>
          </div>
          <div className="audience-grid">
            {product.audiences.map(([title, text], index) => (
              <article key={title}>
                <AudienceIcon index={index} />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>
      )}

      {product.spotlights?.map((spotlight) => (
        <section className="spotlight-section" id={spotlight.id} key={spotlight.id}>
          <div>
            <span className="eyebrow">{spotlight.label}</span>
            <h2>{spotlight.title}</h2>
            <p>{spotlight.text}</p>
          </div>
          <div className="spotlight-grid">
            {spotlight.items.map(([title, text]) => (
              <article key={title}><h3>{title}</h3><p>{text}</p></article>
            ))}
          </div>
        </section>
      ))}

      {product.options && (
        <section className="option-section" id="deployment">
          <div className="center-heading">
            <span className="eyebrow">Flexible by design</span>
            <h2>{product.options.title}</h2>
          </div>
          <div className="option-grid">
            {product.options.items.map((item) => (
              <article key={item.title}>
                <span className="option-mark">{item.mark}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <ul>{item.points.map((point) => <li key={point}>{point}</li>)}</ul>
              </article>
            ))}
          </div>
        </section>
      )}
      {product.integrations && (
        <section className="integration-section" id="integrations">
          <div className="center-heading">
            <span className="eyebrow">Integrations</span>
            <h2>Connects to your entire ecosystem.</h2>
          </div>
          <div className="integration-list">
            {product.integrations.map((integration) => <span key={integration}>{integration}</span>)}
          </div>
        </section>
      )}
      <CtaBand title={product.cta} />
      {product.related && (
        <section className="related-product">
          <div>
            <span className="eyebrow">{product.related.label}</span>
            <h2>{product.related.title}</h2>
            <p>{product.related.text}</p>
          </div>
          <Link className="button" href={product.related.href}>{product.related.link} <Arrow /></Link>
        </section>
      )}
    </PageShell>
  );
}
