export default function Pricing() {
  return (
    <div className="band">
      <div className="container">
        <span className="kicker">Pricing</span>
        <h2 className="pricing-title">Price on request</h2>
        <p className="pricing-body">
          Tentative pricing starts at ₹1.39 Cr for a 2 Bed home. Final pricing and availability
          confirmed on enquiry.
        </p>
        <a
          href="#contact"
          className="btn btn-primary"
          style={{ marginTop: "var(--space-4)", display: "inline-block" }}
        >
          Enquire for Pricing
        </a>
      </div>
    </div>
  );
}
