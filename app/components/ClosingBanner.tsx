export default function ClosingBanner() {
  return (
    <section className="closing-banner">
      <div className="container" style={{ padding: "calc(2 * var(--space-6)) var(--page-inline-padding)" }}>
        <h3 className="closing-banner-title">
          655 homes. Prestige Garden Breez — The Prestige City&apos;s Final Chapter.
        </h3>
        <div style={{ marginTop: "var(--space-6)" }}>
          <a
            href="#contact"
            className="btn btn-ghost"
            style={{ color: "var(--color-bg)", borderColor: "var(--color-bg)" }}
          >
            Enquire Now
          </a>
        </div>
      </div>
    </section>
  );
}
