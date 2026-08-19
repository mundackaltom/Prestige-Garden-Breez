const UNITS = [
  { config: "2 Bed (2T)", units: "239 units", area: "1071–1150 sq.ft", price: "Starting ₹1.39 Cr*" },
  { config: "3 Bed (2T)", units: "278 units", area: "1450–1550 sq.ft", price: "Starting ₹1.88 Cr*" },
  { config: "3 Bed (3T)", units: "135 units", area: "1700–1800 sq.ft", price: "Starting ₹2.19 Cr*" },
  { config: "Penthouse", units: "3 units", area: "3081–3183 sq.ft", price: "Price on request" },
];

export default function FloorPlans() {
  return (
    <div className="container">
      <section id="floorplans" style={{ padding: "var(--space-8) 0" }}>
        <span className="kicker">Floor Plans &amp; Unit Types</span>
        <div className="plans-grid">
          {UNITS.map((unit) => (
            <div className="card elev-sm plan-card" key={unit.config}>
              <p className="card-kicker">
                {unit.config} · {unit.units}
              </p>
              <p className="plan-price">{unit.price}</p>
              <p className="plan-meta">{unit.area}</p>
              <a href="#contact" className="btn btn-secondary plan-cta">
                Enquire
              </a>
            </div>
          ))}
        </div>
        <p className="table-footnote">
          *Tentative pricing shared at the Prestige Partner Circle Meet — subject to change. 655
          homes across 4 towers.
        </p>
      </section>
    </div>
  );
}
