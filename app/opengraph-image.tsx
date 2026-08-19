import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Prestige Garden Breez — Sarjapur Road, Bengaluru";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#f3f2f2",
          color: "#201e1d",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 22,
            fontWeight: 800,
            letterSpacing: 2,
            textTransform: "uppercase",
            color: "#7c1405",
            background: "#fff2ef",
            padding: "8px 20px",
            marginBottom: 32,
          }}
        >
          Phase 7 · The Prestige City
        </div>
        <div style={{ display: "flex", fontSize: 84, fontWeight: 800, lineHeight: 1.05 }}>
          Prestige Garden Breez
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 30,
            fontWeight: 400,
            marginTop: 28,
            color: "#444141",
          }}
        >
          Sarjapur Road, East Bangalore
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 26,
            fontWeight: 800,
            marginTop: 40,
            color: "#ec3013",
          }}
        >
          10 Acres · 655 Homes · 2 &amp; 3 Bed Residences
        </div>
      </div>
    ),
    { ...size }
  );
}
