"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  ["/", "Home"],
  ["/about", "About"],
  ["/products", "Products"],
  ["/campus", "EduRole Campus"],
  ["/school", "EduRole School"],
  ["/emis", "EduRole EMIS"],
  ["/clients", "Clients"],
  ["/contact", "Contact"],
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className={`mobile-menu ${open ? "is-open" : ""}`}>
      <button
        type="button"
        aria-label={open ? "Close navigation" : "Open navigation"}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <span /><span /><span />
      </button>
      <div className="mobile-menu-panel">
        {links.map(([href, label]) => (
          <Link href={href} key={href} onClick={() => setOpen(false)}>{label}</Link>
        ))}
        <a href="https://cloud.edurole.com" target="_blank" rel="noreferrer">Cloud login ↗</a>
      </div>
    </div>
  );
}
