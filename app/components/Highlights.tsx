const HIGHLIGHTS = [
  "10 Acres of Premium Living",
  "Only 655 Exclusive Homes",
  "Premium 2 & 3 Bed Residences",
  "Clubhouse (G+2) with Lap & Kids' Pool, Event Lawn, Forest Trail and Play Courts",
  "85% Landscaped Open Spaces",
  "No Common Walls & Three-Side Open Homes",
];

export default function Highlights() {
  return (
    <div className="band" id="amenities">
      <div className="container">
        <span className="kicker">Project Highlights</span>
        {HIGHLIGHTS.map((title, i) => (
          <div className="highlight-row" key={title}>
            <p className="highlight-number">{String(i + 1).padStart(2, "0")}</p>
            <h3 className="highlight-title">{title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
