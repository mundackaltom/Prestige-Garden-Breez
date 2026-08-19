import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Prestige Garden Breez — Sarjapur Road",
  description:
    "Your final opportunity to own a premium home at Prestige Garden Breez, Sarjapur Road — Phase 7 of Prestige Group's 180-acre township, The Prestige City, in East Bangalore.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={archivo.variable}>
      <body>{children}</body>
    </html>
  );
}
