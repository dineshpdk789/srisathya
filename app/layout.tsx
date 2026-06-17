import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sri Sathya Children's Hospital | Best Pediatrician in Dharmavaram",
  description: "Trusted child specialist hospital in Dharmavaram offering newborn care, vaccination, pediatric emergency and more. Expert pediatric care with compassion.",
  keywords: ["best child hospital in Dharmavaram", "best pediatrician in Dharmavaram", "child specialist doctor Dharmavaram", "vaccination centre Dharmavaram", "newborn care hospital Dharmavaram", "pediatric emergency Dharmavaram", "children's hospital near me", "child clinic Dharmavaram"],
  openGraph: {
    title: "Sri Sathya Children's Hospital | Best Pediatrician in Dharmavaram",
    description: "Trusted child specialist hospital in Dharmavaram offering newborn care, vaccination, pediatric emergency and more.",
    url: "https://srisathyachildrenshospital.com",
    siteName: "Sri Sathya Children's Hospital",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sri Sathya Children's Hospital | Best Pediatrician in Dharmavaram",
    description: "Trusted child specialist hospital in Dharmavaram",
  },
  alternates: {
    canonical: "https://srisathyachildrenshospital.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Hospital",
    name: "Sri Sathya Children's Hospital",
    description: "Trusted child specialist hospital in Dharmavaram, Andhra Pradesh",
    address: {
      "@type": "PostalAddress",
      streetAddress: "ICICI Bank Building, Old R.S. Road, Near Babu Jagjeevan Ram Statue, JJR Nagar",
      addressLocality: "Dharmavaram",
      addressRegion: "Andhra Pradesh",
      postalCode: "515671",
      addressCountry: "IN",
    },
    telephone: "+919999999999",
    url: "https://srisathyachildrenshospital.com",
    priceRange: "₹₹",
    medicalSpecialty: ["Pediatrics", "Neonatology"],
    openingHours: [
      "Mo-Fr 09:00-13:00,17:00-20:00",
      "Sa 09:00-13:00"
    ],
    emergency: true,
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
