import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SocialMediaWidget from "@/components/sections/SocialMediaWidget";
import { getGlobalContent } from "@/lib/content";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const revalidate = 3600;

export const metadata = {
  metadataBase: new URL('https://madenydigital.com'),
  title: "Madeny Digital Services | Web Development & E-Commerce Solutions | Calgary",
  description: "Calgary's premier digital agency specializing in website development, e-commerce solutions, mobile apps, and digital marketing for mobiles, laptops & accessories businesses.",
  keywords: "web development, e-commerce, mobile app development, digital marketing, Calgary, Canada, Madeny Digital",
  authors: [{ name: "Madeny Digital Services" }],
  alternates: { canonical: 'https://madenydigital.com' },
  openGraph: {
    title: "Madeny Digital Services | Calgary's Premier Digital Agency",
    description: "Transform your business with stunning websites, powerful e-commerce solutions, and cutting-edge digital experiences.",
    url: 'https://madenydigital.com',
    type: "website",
    locale: "en_CA",
    siteName: "Madeny Digital Services",
  },
  twitter: {
    card: "summary_large_image",
    title: "Madeny Digital Services | Calgary's Premier Digital Agency",
    description: "Transform your business with stunning websites, powerful e-commerce solutions, and cutting-edge digital experiences.",
  },
};

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Madeny Digital Services',
  description: "Calgary's premier digital agency specializing in website development, e-commerce solutions, mobile apps, and tech repair services.",
  url: 'https://madenydigital.com',
  telephone: '+1-587-XXX-XXXX',
  email: 'info@madenydigital.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Calgary',
    addressRegion: 'AB',
    addressCountry: 'CA',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 51.0447,
    longitude: -114.0719,
  },
  areaServed: { '@type': 'City', name: 'Calgary' },
  priceRange: '$$',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '10:00',
      closes: '16:00',
    },
  ],
  sameAs: [
    'https://facebook.com/madenydigital',
    'https://instagram.com/madenydigital',
  ],
};

export default async function RootLayout({ children }) {
  const globalContent = await getGlobalContent();

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <SocialMediaWidget data={globalContent?.socialWidget} />
      </body>
    </html>
  );
}
