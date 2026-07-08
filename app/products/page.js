import Link from "next/link";
import { Arrow, CtaBand, PageShell } from "../../components/SiteChrome";

const products = [
  { href: "/campus", number: "01", label: "Universities & colleges", title: "EduRole Campus", text: "The complete EMIS suite with 125+ modules across admissions, academics, finance, HR and analytics.", theme: "campus-card" },
  { href: "/school", number: "02", label: "Primary & secondary", title: "EduRole School", text: "Cloud school management for enrollment, classes, grades, fees, attendance and parent access.", theme: "school-card" },
  { href: "/emis", number: "03", label: "Ministries & regulators", title: "EduRole EMIS", text: "A national platform for managing an entire education sector with consistent, real-time information.", theme: "emis-card" },
];

export const metadata = { title: "EduRole Products" };

export default function ProductsPage() {
  return (
    <PageShell>
      <section className="simple-page-hero">
        <span className="eyebrow light">Three products. One standard.</span>
        <h1>Choose the platform<br />that fits your institution.</h1>
        <p>From one school to a university or an entire national education system.</p>
      </section>
      <section className="product-page-grid">
        {products.map((product) => (
          <Link href={product.href} className={`product-page-card ${product.theme}`} key={product.title}>
            <span className="card-number">{product.number}</span>
            <div>
              <small>{product.label}</small>
              <h2>{product.title}</h2>
              <p>{product.text}</p>
              <strong>Explore product <Arrow /></strong>
            </div>
          </Link>
        ))}
      </section>
      <CtaBand />
    </PageShell>
  );
}
