const LINKS = [
  { href: "#about", label: "Overview" },
  { href: "#amenities", label: "Highlights" },
  { href: "#floorplans", label: "Floor Plans" },
  { href: "#video", label: "Film" },
  { href: "#gallery", label: "Gallery" },
  { href: "#location", label: "Location" },
];

export default function Nav() {
  return (
    <>
      <nav className="nav">
        <span className="nav-brand">Prestige Garden Breez</span>
        <div className="nav-links">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary">
            Enquire Now
          </a>
        </div>
      </nav>
      <div className="nav-spacer" />
    </>
  );
}
