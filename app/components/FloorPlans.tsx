const UNITS = [
  { config: "2 Bed (2T) — 239 units", area: "1071–1150 sq.ft", price: "Starting ₹1.39 Cr*" },
  { config: "3 Bed (2T) — 278 units", area: "1450–1550 sq.ft", price: "Starting ₹1.88 Cr*" },
  { config: "3 Bed (3T) — 135 units", area: "1700–1800 sq.ft", price: "Starting ₹2.19 Cr*" },
  { config: "Penthouse — 3 units", area: "3081–3183 sq.ft", price: "Price on request" },
];

export default function FloorPlans() {
  return (
    <div className="container">
      <section id="floorplans" style={{ padding: "var(--space-8) 0" }}>
        <span className="kicker">Floor Plans &amp; Unit Types</span>
        <div className="table-scroll">
          <table className="table">
            <thead>
              <tr>
                <th>Configuration</th>
                <th>Saleable Area</th>
                <th>Starting Price</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {UNITS.map((unit) => (
                <tr key={unit.config}>
                  <td>{unit.config}</td>
                  <td>{unit.area}</td>
                  <td>{unit.price}</td>
                  <td>
                    <a href="#contact" className="btn btn-secondary">
                      Enquire
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="table-footnote">
          *Tentative pricing shared at the Prestige Partner Circle Meet — subject to change. 655
          homes across 4 towers.
        </p>
      </section>
    </div>
  );
}
