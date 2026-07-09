import { PageShell } from "../../components/SiteChrome";

export const metadata = { title: "Contact EduRole" };

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 6h16v12H4z" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5.2 19.1 6.4 15A7.2 7.2 0 1 1 9 17.6l-3.8 1.5Z" />
      <path d="M9.5 8.6c.2-.4.3-.4.6-.4h.5c.2 0 .4.1.5.4l.7 1.6c.1.2 0 .5-.2.7l-.4.5c.7 1.2 1.6 2.1 2.9 2.8l.5-.5c.2-.2.5-.3.7-.2l1.6.7c.3.1.4.3.4.6v.5c0 .3-.1.5-.4.6-.6.3-1.2.4-1.8.3-3.1-.5-5.7-3.1-6.2-6.2-.1-.6 0-1.2.3-1.8Z" />
    </svg>
  );
}

export default function ContactPage() {
  return (
    <PageShell>
      <section className="contact-layout">
        <div className="contact-copy">
          <span className="eyebrow">Talk to a specialist</span>
          <h1>Let’s talk.</h1>
          <p>Whether you need a demo, a quote, or a conversation about a difficult institutional problem, our team is ready to help.</p>
          <div className="contact-actions">
            <a href="mailto:info@edurole.com" className="button icon-button"><MailIcon />Email our team <span>↗</span></a>
            <a href="https://api.whatsapp.com/send/?phone=260963493849&text&type=phone_number&app_absent=0" target="_blank" rel="noreferrer" className="outline-button icon-button"><WhatsAppIcon />WhatsApp us <span>↗</span></a>
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
