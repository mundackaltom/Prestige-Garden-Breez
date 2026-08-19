import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";
import { CONTACT, SITE_URL } from "./site-config";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "800"],
  display: "swap",
});

const title = "Prestige Garden Breez — Sarjapur Road, Bengaluru";
const description =
  "Your final opportunity to own a premium home at Prestige Garden Breez, Sarjapur Road — Phase 7 of Prestige Group's 180-acre township, The Prestige City, in East Bangalore. 10 acres, 655 homes, 2 & 3 bed residences.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  keywords: [
    "Prestige Garden Breez",
    "Prestige Group Sarjapur Road",
    "The Prestige City",
    "apartments Sarjapur Road",
    "2 BHK 3 BHK Sarjapur Road",
    "Bengaluru new launch apartments",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title,
    description,
    url: SITE_URL,
    siteName: "Prestige Garden Breez",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ApartmentComplex",
      "@id": `${SITE_URL}/#property`,
      name: "Prestige Garden Breez",
      description,
      url: SITE_URL,
      image: `${SITE_URL}/assets/hero-bedroom.png`,
      telephone: CONTACT.phone,
      numberOfAccommodationUnits: {
        "@type": "QuantitativeValue",
        value: 655,
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "SH-35, Yamare Village, Sarjapur–Marathahalli Road",
        addressLocality: "Bengaluru",
        addressRegion: "Karnataka",
        postalCode: "562125",
        addressCountry: "IN",
      },
    },
    {
      "@type": "RealEstateAgent",
      "@id": `${SITE_URL}/#agent`,
      name: CONTACT.company,
      telephone: CONTACT.phone,
      email: CONTACT.email,
      url: SITE_URL,
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={archivo.variable}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
