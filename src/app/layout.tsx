import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Industrial Plant Movement, Installation, Crane Hire & Risk Management | Simmons Industrial Services Ltd",
  description: "Trusted since 1992, Simmons Industrial offers safe, efficient plant movement, crane hire & industrial services across the UK & Europe. Book your free site survey today!",
  keywords: "plant movement, machinery installation, crane hire, contract lifting, industrial logistics, engineering solutions, lifting assurance, storage, UK, London",
  authors: [{ name: "Simmons Industrial Services Ltd" }],
  creator: "Simmons Industrial Services Ltd",
  publisher: "Simmons Industrial Services Ltd",
  robots: "index, follow",
  openGraph: {
    title: "Simmons Industrial Services Ltd | Plant Movement & Crane Hire Specialists",
    description: "Trusted since 1992, Simmons Industrial offers safe, efficient plant movement, crane hire & industrial services. 33+ years experience.",
    url: "https://www.simmons-industrial.co.uk",
    siteName: "Simmons Industrial Services Ltd",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Simmons Industrial Services Ltd | Plant Movement & Crane Hire",
    description: "Trusted since 1992. Safe, efficient plant movement, crane hire & industrial services across the UK & Europe.",
  },
  alternates: {
    canonical: "https://www.simmons-industrial.co.uk",
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Simmons Industrial Services Ltd",
              description: "Industrial plant movement, machinery installation, crane hire and contract lifting specialists. Trusted since 1992.",
              url: "https://www.simmons-industrial.co.uk",
              telephone: "+442086883553",
              email: "info@simmons-industrial.co.uk",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Unit 3, Beddington Farm Road",
                addressLocality: "Croydon",
                addressRegion: "Greater London",
                postalCode: "CR0 4WQ",
                addressCountry: "GB",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 51.3761,
                longitude: -0.1196,
              },
              openingHours: ["Mo-Fr 07:45-17:00"],
              foundingDate: "1992",
              priceRange: "££",
              areaServed: {
                "@type": "Place",
                name: "United Kingdom and Europe",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Industrial Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Plant & Machinery Installation",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Mobile Crane Hire & Contract Lifting",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Logistics & Transport",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Engineering Solutions",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Lifting Assurance Advisors",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Storage & Warehousing",
                    },
                  },
                ],
              },
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#0a0a0f] text-[#f5f5f5]">{children}</body>
    </html>
  );
}
