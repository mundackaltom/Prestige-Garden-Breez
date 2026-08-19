const STATS = [
  { value: "10", label: "Acres of Premium Living" },
  { value: "655", label: "Exclusive Homes" },
  { value: "2 & 3", label: "Bed Premium Residences" },
  { value: "85%", label: "Landscaped Open Spaces" },
];

export default function Stats() {
  return (
    <div className="band">
      <div className="container">
        <div className="stats-grid">
          {STATS.map((stat) => (
            <div key={stat.label}>
              <p className="stat-value">{stat.value}</p>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
