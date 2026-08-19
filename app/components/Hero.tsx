import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero">
      <Image
        src="/assets/video-thumbnail-entrance-sign.jpeg"
        alt="The Prestige City entrance signage"
        fill
        sizes="100vw"
        className="hero-image"
        priority
      />
      <div className="hero-scrim" />

      <div className="hero-content container">
        <span className="tag tag-accent hero-tag">Phase 7 · The Prestige City</span>
        <h1 className="hero-title">Prestige Garden Breez</h1>
        <p className="hero-body">
          Your final opportunity to own a premium home at Prestige Garden Breez, Sarjapur Road —
          Phase 7 of Prestige Group&apos;s 180-acre township, The Prestige City, in East Bangalore.
        </p>
        <div className="hero-actions">
          <a href="#contact" className="btn btn-primary">
            Enquire Now
          </a>
          <a href="#floorplans" className="btn btn-ghost">
            View Floor Plans
          </a>
        </div>
      </div>
    </section>
  );
}
