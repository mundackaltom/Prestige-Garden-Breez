import Image from "next/image";

const GALLERY_IMAGES = [
  { src: "/assets/gallery-01-bedroom-desk.png", alt: "Bedroom desk" },
  { src: "/assets/gallery-02-kitchen.png", alt: "Kitchen" },
  { src: "/assets/gallery-03-bedroom-nook.png", alt: "Bedroom nook" },
  { src: "/assets/gallery-04-dining.png", alt: "Dining area" },
  { src: "/assets/gallery-05-living-room.png", alt: "Living room" },
  { src: "/assets/gallery-06-primary-bedroom.png", alt: "Primary bedroom" },
  { src: "/assets/gallery-07-console.png", alt: "Console unit" },
  { src: "/assets/gallery-08-seating.png", alt: "Living room seating" },
];

export default function Gallery() {
  return (
    <div className="band" id="gallery">
      <div className="container">
        <span className="kicker">Gallery</span>
        <div className="gallery-grid">
          {GALLERY_IMAGES.map((image) => (
            <figure className="gallery-item" key={image.src}>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 720px) 100vw, (max-width: 1200px) 50vw, 25vw"
                style={{ objectFit: "cover" }}
              />
            </figure>
          ))}
        </div>
      </div>
    </div>
  );
}
