import Image from "next/image";

export default function ProjectFilm() {
  return (
    <div className="container" style={{ paddingTop: "var(--space-8)" }}>
      <section id="video">
        <span className="kicker">Project Film</span>
        <a
          href="https://www.youtube.com/watch?v=Bf9i6gt1zs4"
          target="_blank"
          rel="noopener noreferrer"
          className="video-frame"
        >
          <Image
            src="/assets/video-thumbnail-entrance-sign.jpeg"
            alt="Prestige Garden Breez entrance signage — watch the project film"
            fill
            sizes="(max-width: 900px) 100vw, 900px"
            style={{ objectFit: "cover" }}
          />
          <span className="video-scrim" />
          <span className="video-play">
            <span className="video-play-icon" />
          </span>
        </a>
      </section>
    </div>
  );
}
