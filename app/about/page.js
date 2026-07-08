import { CtaBand, PageShell } from "../../components/SiteChrome";

export const metadata = { title: "About EduRole" };

const values = [
  ["Resilient", "Runs in low bandwidth", "A small footprint designed for African campuses and modest infrastructure."],
  ["Complete", "125+ modules, one login", "The entire institution shares one platform and one source of information."],
  ["Connected", "Integrates with your stack", "Connect Sage, Navision, Moodle, Koha, SSO, banks and national systems."],
  ["Flexible", "Cloud or on-premise", "Choose secure cloud infrastructure or retain full control on your own servers."],
  ["Accountable", "National-grade reporting", "Real-time dashboards from one department to an entire education sector."],
  ["Supported", "Backed by Corelink", "Built and maintained by an experienced African enterprise software team."],
];

export default function AboutPage() {
  return (
    <PageShell>
      <section className="simple-page-hero about-page-hero">
        <span className="eyebrow light">Built in Zambia. Proven at scale.</span>
        <h1>Technology shaped around<br />how institutions really work.</h1>
        <p>More than 12 years solving the operational realities of African education.</p>
      </section>
      <section className="story-section">
        <div>
          <span className="eyebrow">What EduRole is</span>
          <h2>The system that runs the institution.</h2>
        </div>
        <div>
          <p>EduRole is a complete Education Management Information System. It connects enrollment, fees, exams, staff, learning and regulatory reporting so institutions can work from reliable information.</p>
          <p>Originally built for universities in Zambia, EduRole now supports schools, universities and regulators across Central and Southern Africa.</p>
        </div>
      </section>
      <section className="value-section">
        {values.map(([label, title, text], index) => (
          <article key={title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <small>{label}</small>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </section>
      <CtaBand title="Build on a platform that understands your reality." />
    </PageShell>
  );
}
