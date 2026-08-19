"use client";

import { useState } from "react";
import Image from "next/image";

const LINKS = [
  { href: "#about", label: "Overview" },
  { href: "#amenities", label: "Highlights" },
  { href: "#floorplans", label: "Floor Plans" },
  { href: "#video", label: "Film" },
  { href: "#gallery", label: "Gallery" },
  { href: "#location", label: "Location" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="site-header">
        <div className="partner-strip">
          <Image
            src="/assets/prestige-authorised-sales-partner.jpg"
            alt="Prestige Group — Authorised Sales Partner"
            width={1280}
            height={323}
            className="partner-badge"
            priority
          />
        </div>

        <nav className="nav">
          <span className="nav-brand">Prestige Garden Breez</span>

          <div className="nav-links nav-links-desktop">
            {LINKS.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
            <a href="#contact" className="btn btn-primary">
              Enquire Now
            </a>
          </div>

          <button
            type="button"
            className="nav-toggle"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <span className="nav-toggle-bar" />
            <span className="nav-toggle-bar" />
            <span className="nav-toggle-bar" />
          </button>
        </nav>

        {open && (
          <div className="nav-dropdown">
            {LINKS.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </a>
            ))}
            <a href="#contact" className="btn btn-primary nav-dropdown-cta" onClick={() => setOpen(false)}>
              Enquire Now
            </a>
          </div>
        )}
      </div>

      <div className="nav-spacer" />
    </>
  );
}
