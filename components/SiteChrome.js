import Link from "next/link";
import Image from "next/image";
import logo from "../edurole-logo.png";
import MainNav from "./MainNav";
import MobileNav from "./MobileNav";

export const Arrow = () => <span aria-hidden="true">↗</span>;

export function Brand() {
  return (
    <Link href="/" className="brand" aria-label="EduRole home">
      <Image src={logo} alt="EduRole" priority />
    </Link>
  );
}

export function SiteHeader() {
  return (
    <header className="nav">
      <Brand />
      <MainNav />
      <div className="nav-actions">
        <a className="login-link" href="https://cloud.edurole.com" target="_blank" rel="noreferrer">
          Cloud login
        </a>
        <Link className="button button-small" href="/contact">Talk to us <Arrow /></Link>
      </div>
      <MobileNav />
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer>
      <div className="footer-main">
        <div className="footer-about">
          <Brand />
          <p>A comprehensive Education Management Information System by <a href="https://www.corelink.co.zm" target="_blank" rel="noreferrer">Corelink Consulting Ltd.</a>, trusted by 57+ institutions across Zambia, Zimbabwe and the Netherlands.</p>
          <a href="tel:+260963493849">+260 96 349 38 49</a>
          <a href="mailto:info@edurole.com">info@edurole.com</a>
        </div>
        <div className="footer-column">
          <h3>Products</h3>
          <Link href="/campus">EduRole Campus</Link>
          <Link href="/school">EduRole School</Link>
          <Link href="/emis">EduRole EMIS</Link>
          <a href="https://cloud.edurole.com" target="_blank" rel="noreferrer">Cloud Login ↗</a>
          <Link href="/contact">Request a Demo</Link>
        </div>
        <div className="footer-column">
          <h3>Solutions</h3>
          <Link href="/campus">Universities & Colleges</Link>
          <Link href="/school">Primary & Secondary</Link>
          <Link href="/emis">Ministries & Regulators</Link>
          <Link href="/campus#deployment">Cloud & On-Premise</Link>
          <Link href="/campus#integrations">Integrations</Link>
        </div>
        <div className="footer-column">
          <h3>Company</h3>
          <Link href="/clients">Our Clients</Link>
          <Link href="/contact">Contact Us</Link>
          <a href="https://www.corelink.co.zm" target="_blank" rel="noreferrer">Corelink ↗</a>
          <a href="https://api.whatsapp.com/send/?phone=260963493849&text&type=phone_number&app_absent=0" target="_blank" rel="noreferrer">WhatsApp ↗</a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Corelink Consulting Ltd. · All rights reserved.</span>
        <span>EduRole — Education Management Information System</span>
      </div>
    </footer>
  );
}

export function PageShell({ children }) {
  return (
    <main className="site-shell">
      <div className="page">
        <SiteHeader />
        {children}
        <SiteFooter />
      </div>
    </main>
  );
}

export function CtaBand({
  title = "Ready to transform your institution?",
  text = "Tell us what you need. We’ll show you how EduRole fits your institution.",
}) {
  return (
    <section className="cta-band">
      <div>
        <span className="eyebrow light">Start a conversation</span>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <Link className="button button-light" href="/contact">Request a demo <Arrow /></Link>
    </section>
  );
}
