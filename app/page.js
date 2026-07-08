import Link from "next/link";
import { Arrow, SiteFooter, SiteHeader } from "../components/SiteChrome";

const Icon = ({ type }) => {
  const paths = {
    campus: (
      <>
        <path d="M3 10 12 5l9 5" />
        <path d="M5 10v8M9 10v8M15 10v8M19 10v8M3 19h18" />
      </>
    ),
    school: (
      <>
        <path d="M4 21V10l8-5 8 5v11" />
        <path d="M9 21v-6h6v6M8 11h.01M12 11h.01M16 11h.01" />
      </>
    ),
    nation: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" />
      </>
    ),
    analytics: (
      <>
        <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
        <path d="m3 8 7-5 6 7 5-4" />
      </>
    ),
    cloud: (
      <>
        <path d="M17 18H7a4 4 0 0 1-.6-7.95A6 6 0 0 1 18 8a5 5 0 0 1-1 10Z" />
        <path d="M12 12v7M9 15l3-3 3 3" />
      </>
    ),
    modules: (
      <>
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </>
    ),
    integrate: (
      <>
        <path d="M8 12h8M12 8v8" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="4" cy="12" r="2" />
        <circle cx="20" cy="12" r="2" />
        <circle cx="12" cy="4" r="2" />
        <circle cx="12" cy="20" r="2" />
      </>
    ),
  };

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.65">
      {paths[type]}
    </svg>
  );
};

const products = [
  {
    icon: "campus",
    label: "Full EMIS Suite",
    title: "EduRole Campus",
    text: "Universities & colleges",
    href: "/campus",
  },
  {
    icon: "school",
    label: "Cloud SaaS",
    title: "EduRole School",
    text: "Primary & secondary",
    href: "/school",
  },
  {
    icon: "nation",
    label: "National Scale",
    title: "EduRole EMIS",
    text: "Ministries & regulators",
    href: "/emis",
  },
];

const advantages = [
  {
    icon: "cloud",
    title: "Cloud or on-premise",
    text: "Keep full data sovereignty or use our secure cloud infrastructure.",
  },
  {
    icon: "modules",
    title: "125+ modules, one login",
    text: "Admissions to graduation, finance to payroll — all in one place.",
  },
  {
    icon: "analytics",
    title: "Real-time analytics",
    text: "Make informed decisions with live institutional and national data.",
  },
  {
    icon: "integrate",
    title: "Works with your stack",
    text: "Connect Sage, Navision, Moodle, Koha, SSO, banks, and more.",
  },
];

const stats = [
  ["1M+", "Students served", "every year"],
  ["57+", "Institutions", "across the region"],
  ["700M+", "Kwacha collected", "on our platforms"],
  ["12+", "Years building", "education systems"],
];

export default function Home() {
  return (
    <main className="site-shell">
      <div className="page">
        <SiteHeader />

        <section className="hero">
          <div className="hero-copy">
            <span className="eyebrow light">Education management, reimagined</span>
            <h1>Powering education<br />across Africa.</h1>
            <p>
              One platform for admissions, finance, exams, HR and analytics —
              trusted with over a million students every year.
            </p>
            <div className="hero-actions">
              <Link href="/products" className="button button-light">Explore EduRole <Arrow /></Link>
              <Link href="/contact" className="text-link">Request a demo <span>→</span></Link>
            </div>
          </div>
        </section>

        <section className="product-strip" id="products">
          {products.map((product) => (
            <Link href={product.href} className="product-mini" key={product.title}>
              <span className="mini-icon"><Icon type={product.icon} /></span>
              <span>
                <small>{product.label}</small>
                <b>{product.title}</b>
                <em>{product.text}</em>
              </span>
              <Arrow />
            </Link>
          ))}
        </section>

        <section className="intro section" id="about">
          <div className="section-heading">
            <span className="eyebrow">Built in Zambia. Proven at scale.</span>
            <h2>The system that runs<br />the institution.</h2>
          </div>
          <div className="intro-copy">
            <p>
              EduRole carries the daily work of schools, colleges, and
              universities — enrolling students, collecting fees, running
              exams, paying staff, and reporting to regulators.
            </p>
            <Link className="inline-link" href="/about">Why EduRole <span>→</span></Link>
          </div>
          <div className="stats-grid">
            {stats.map(([number, title, sub], index) => (
              <div className={`stat-card ${index === 0 ? "active" : ""}`} key={title}>
                <strong>{number}</strong>
                <span>{title}</span>
                <small>{sub}</small>
              </div>
            ))}
          </div>
          <div className="campus-collage">
            <div className="campus-main" />
            <div className="campus-small" />
            <div className="floating-badge"><Arrow /></div>
          </div>
        </section>

        <section className="section why" id="why">
          <div className="center-heading">
            <span className="eyebrow">Why institutions choose us</span>
            <h2>Built for real conditions.</h2>
            <p>Enterprise capability, shaped for the realities of African education.</p>
          </div>
          <div className="advantage-grid">
            {advantages.map((item, index) => (
              <article className={index === 0 ? "featured" : ""} key={item.title}>
                <span className="advantage-icon"><Icon type={item.icon} /></span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
          <Link href="/products" className="button section-button">See the platform <span>→</span></Link>
        </section>

        <section className="section impact" id="clients">
          <div className="section-heading">
            <span className="eyebrow">One platform. Every level.</span>
            <h2>Designed around<br />your institution.</h2>
          </div>
          <div className="intro-copy">
            <p>
              From one primary school to an entire national system, choose the
              EduRole platform that fits how you work today — and where you’re going.
            </p>
          </div>
          <div className="solution-grid">
            <Link href="/campus" className="solution solution-campus">
              <div className="solution-label">
                <small>Universities & colleges</small>
                <h3>EduRole Campus</h3>
                <span>125+ connected modules <Arrow /></span>
              </div>
            </Link>
            <Link href="/school" className="solution solution-school">
              <div className="solution-label">
                <small>Primary & secondary</small>
                <h3>EduRole School</h3>
                <span>Cloud-based and ready <Arrow /></span>
              </div>
            </Link>
            <Link href="/emis" className="solution solution-emis">
              <div className="solution-label">
                <small>Ministries & regulators</small>
                <h3>National EMIS</h3>
                <span>One view of every institution <Arrow /></span>
              </div>
            </Link>
            <article className="cta-card">
              <span className="eyebrow light">Let’s build what’s next</span>
              <h3>Ready to transform your institution?</h3>
              <Link className="button button-light" href="/contact">Talk to our team <Arrow /></Link>
            </article>
          </div>
        </section>

        <section className="faq-section">
          <div className="content-intro">
            <span className="eyebrow">Common questions</span>
            <h2>Answers, clearly.</h2>
          </div>
          <div className="faq-list">
            <details>
              <summary>What is EduRole?</summary>
              <p>EduRole is a comprehensive Education Management Information System built by Corelink Consulting. It runs admissions, finance, exams, HR, eLearning and analytics for institutions across Zambia, Zimbabwe and the Netherlands.</p>
            </details>
            <details>
              <summary>What’s the difference between Campus, School and EMIS?</summary>
              <p>Campus is the full 125+ module suite for a university or college. School is cloud SaaS for primary and secondary schools. EMIS lets a regulator or ministry manage an entire sector through one national platform.</p>
            </details>
            <details>
              <summary>Can EduRole be hosted on-premise?</summary>
              <p>Yes. Campus and EMIS can run securely in the cloud or on your own servers for full data sovereignty. EduRole School is delivered as cloud SaaS.</p>
            </details>
            <details>
              <summary>Which systems does EduRole integrate with?</summary>
              <p>Sage, Microsoft Navision, Moodle, Koha, LDAP and Active Directory, Google Workspace, bank payment APIs and national financial management systems.</p>
            </details>
            <details>
              <summary>Does EduRole include eLearning and AI course building?</summary>
              <p>Yes. Campus includes eLearning, a digital eLibrary and a private self-hosted AI model that helps lecturers build courses from their own materials while keeping institutional data on campus.</p>
            </details>
          </div>
        </section>

        <SiteFooter />
      </div>
    </main>
  );
}
