export default function Location() {
  return (
    <div className="container">
      <section id="location" className="location-grid" style={{ padding: "var(--space-8) 0" }}>
        <div>
          <span className="kicker">Location</span>
          <h2 style={{ fontSize: 30, color: "var(--color-neutral-900)" }}>Sarjapur Road</h2>
          <p className="location-body">
            Prestige Garden Breez is on Sarjapur–Marathahalli Road (SH-35), East Bangalore —
            within reach of Whitefield, Marathahalli, the ORR tech corridor and the Sarjapur
            employment belt.
          </p>
          <a
            href="#contact"
            className="btn btn-secondary"
            style={{ marginTop: "var(--space-4)", display: "inline-block" }}
          >
            Get Directions on Enquiry
          </a>
        </div>
        <figure className="location-map">
          <iframe
            title="Prestige Garden Breez location map"
            src="https://www.google.com/maps?q=The+Prestige+City+Sarjapur+Marathahalli+Road+Yamare+Village+Bengaluru+562125&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </figure>
      </section>
    </div>
  );
}
