"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  ["/", "Home"],
  ["/about", "About"],
  ["/products", "Products"],
  ["/clients", "Clients"],
];

function isActive(pathname, href) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function MainNav() {
  const pathname = usePathname();

  return (
    <nav aria-label="Main navigation">
      {navItems.slice(0, 2).map(([href, label]) => (
        <Link className={isActive(pathname, href) ? "is-active" : ""} href={href} key={href}>
          {label}
        </Link>
      ))}
      <span className="nav-products">
        <Link className={isActive(pathname, "/products") || ["/campus", "/school", "/emis"].some((href) => isActive(pathname, href)) ? "is-active" : ""} href="/products">
          Products
        </Link>
        <span className="product-menu">
          <Link href="/campus"><small>Full EMIS Suite</small><strong>EduRole Campus</strong><em>Universities & colleges</em></Link>
          <Link href="/school"><small>Cloud SaaS</small><strong>EduRole School</strong><em>Primary & secondary</em></Link>
          <Link href="/emis"><small>National Scale</small><strong>EduRole EMIS</strong><em>Ministries & regulators</em></Link>
        </span>
      </span>
      {navItems.slice(3).map(([href, label]) => (
        <Link className={isActive(pathname, href) ? "is-active" : ""} href={href} key={href}>
          {label}
        </Link>
      ))}
    </nav>
  );
}
