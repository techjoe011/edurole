import Link from "next/link";
import { Arrow, CtaBand, PageShell } from "../../components/SiteChrome";
import ClientMap from "../../components/ClientMap";

export const metadata = { title: "EduRole Clients" };

const groups = [
  ["Universities", ["ZCAS University", "Kwame Nkrumah University", "Mulungushi University", "Eden University", "Mukuba University", "Kapasa Makasa University", "Rusangu University", "University of Lusaka (UNILUS)", "George Benson Christian University"]],
  ["Medical & Health", ["Lusaka Apex Medical University", "Levy Mwanawasa Medical University", "Chipata College of Nursing", "Kafue Institute of Health Sciences"]],
  ["Colleges, Institutes & Bodies", ["NIPA", "Evelyn Hone College", "TVTC Luanshya", "NORTEC Ndola", "LBTC Lusaka", "Zambia Institute of Tourism", "WARMA", "ZIHRM", "ZIPS"]],
  ["Zimbabwe", ["Solusi University", "NUST", "Lupane State University", "Zimbabwe School of Mines"]],
];

export default function ClientsPage() {
  return (
    <PageShell>
      <section className="simple-page-hero clients-page-hero">
        <span className="eyebrow light">Our reach</span>
        <h1>Trusted across Africa.</h1>
        <p>From primary schools to national universities, EduRole supports institutions across the region.</p>
      </section>
      <section className="client-stats detail-stats">
        {[["57+", "Institutions"], ["1M+", "Students"], ["26+", "Mapped campuses"], ["3", "Countries"]].map(([value, label]) => (
          <div key={label}><strong>{value}</strong><span>{label}</span></div>
        ))}
      </section>
      <section className="map-section">
        <span className="eyebrow">Deployment & reach</span>
        <h2>Where EduRole runs.</h2>
        <p>Interactive map of institution locations across Zambia, Zimbabwe and beyond. Click a marker for details.</p>
        <ClientMap />
      </section>
      <section className="client-list-section">
        <div className="content-intro">
          <span className="eyebrow">Notable institutions</span>
          <h2>Who we serve.</h2>
          <p>Institutions use EduRole to manage admissions, finance, academics, staff and sector reporting.</p>
          <Link href="/contact" className="inline-link">Join these institutions <Arrow /></Link>
        </div>
        <div className="client-groups">
          {groups.map(([title, clients]) => (
            <article key={title}>
              <h3>{title}</h3>
              <ul>{clients.map((client) => <li key={client}>{client}</li>)}</ul>
            </article>
          ))}
        </div>
      </section>
      <CtaBand title="Ready to join them?" />
    </PageShell>
  );
}
