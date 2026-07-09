import Link from "next/link";
import { Arrow, CtaBand, PageShell } from "../../components/SiteChrome";
import AnimatedStats from "../../components/AnimatedStats";
import ClientGroups from "../../components/ClientGroups";
import ClientMap from "../../components/ClientMap";

export const metadata = { title: "EduRole Clients" };

const groups = [
  ["Universities", ["ZCAS University", "Kwame Nkrumah University", "Mulungushi University", "Eden University", "Mukuba University", "Kapasa Makasa University", "Rusangu University", "University of Lusaka (UNILUS)", "George Benson Christian University", "Solusi University", "NUST", "Lupane State University", "Zimbabwe School of Mines"]],
  ["Medical & Health", ["Lusaka Apex Medical University", "Levy Mwanawasa Medical University", "Chipata College of Nursing", "Kafue Institute of Health Sciences"]],
  ["Colleges, Institutes & Bodies", ["NIPA", "Evelyn Hone College", "TVTC Luanshya", "NORTEC Ndola", "LBTC Lusaka", "Zambia Institute of Tourism", "WARMA", "ZIHRM", "ZIPS"]],
];

const stats = [
  { value: 57, suffix: "+", label: "Institutions" },
  { value: 1000000, suffix: "+", label: "Students", format: "compact-million" },
  { value: 26, suffix: "+", label: "Mapped campuses" },
  { value: 3, label: "Countries" },
];

export default function ClientsPage() {
  return (
    <PageShell>
      <section className="simple-page-hero clients-page-hero">
        <div>
          <span className="eyebrow light">Our reach</span>
          <h1>Trusted across Africa.</h1>
          <p>From primary schools to national universities, EduRole supports institutions across the region.</p>
        </div>
      </section>
      <AnimatedStats stats={stats} />
      <section className="map-section">
        <span className="eyebrow">Deployment & reach</span>
        <h2>Where EduRole runs.</h2>
        <p>Interactive map of institution locations across Zambia, Zimbabwe and beyond. Click a marker for details.</p>
        <ClientMap />
      </section>
      <section className="client-list-section client-directory-section">
        <div className="content-intro">
          <span className="eyebrow">Notable institutions</span>
          <h2>Who we serve.</h2>
          <p>Institutions use EduRole to manage admissions, finance, academics, staff and sector reporting.</p>
          <Link href="/contact" className="inline-link">Join these institutions <Arrow /></Link>
        </div>
        <ClientGroups groups={groups} />
      </section>
      <CtaBand title="Ready to join them?" />
    </PageShell>
  );
}
