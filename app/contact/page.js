import { PageShell } from "../../components/SiteChrome";

export const metadata = { title: "Contact EduRole" };

export default function ContactPage() {
  return (
    <PageShell>
      <section className="contact-layout">
        <div className="contact-copy">
          <span className="eyebrow">Talk to a specialist</span>
          <h1>Let’s talk.</h1>
          <p>Whether you need a demo, a quote, or a conversation about a difficult institutional problem, our team is ready to help.</p>
          <div className="contact-actions">
            <a href="mailto:info@edurole.com" className="button">Email our team <span>↗</span></a>
            <a href="https://api.whatsapp.com/send/?phone=260963493849&text&type=phone_number&app_absent=0" target="_blank" rel="noreferrer" className="outline-button">WhatsApp us <span>↗</span></a>
          </div>
        </div>
        <div className="contact-panel">
          <article>
            <small>Office address</small>
            <h3>Ngwerema Road 5<br />Olympia Park, Lusaka</h3>
            <a href="https://www.google.com/maps/search/?api=1&query=Ngwerema+Road+5+Olympia+Park+Lusaka" target="_blank" rel="noreferrer">View on Google Maps ↗</a>
          </article>
          <article><small>Phone</small><h3><a href="tel:+260963493849">+260 96 349 38 49</a></h3></article>
          <article><small>Email</small><h3><a href="mailto:info@edurole.com">info@edurole.com</a></h3></article>
          <article><small>Cloud platform</small><h3><a href="https://cloud.edurole.com" target="_blank" rel="noreferrer">cloud.edurole.com ↗</a></h3></article>
        </div>
      </section>
    </PageShell>
  );
}
