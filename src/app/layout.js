import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SocialMediaWidget from "@/components/sections/shared/SocialMediaWidget";
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
  metadataBase: new URL('https://www.madnydigitalservices.com'),
  title: "Madny Digital Services | Web Development & E-Commerce Solutions | Calgary",
  description: "Calgary's premier digital agency specializing in website development, e-commerce solutions, mobile apps, and digital marketing for mobiles, laptops & accessories businesses.",
  keywords: "web development, e-commerce, mobile app development, digital marketing, Calgary, Canada, Madny Digital",
  authors: [{ name: "Madny Digital Services" }],
  alternates: { canonical: 'https://www.madnydigitalservices.com' },
  openGraph: {
    title: "Madny Digital Services | Calgary's Premier Digital Agency",
    description: "Transform your business with stunning websites, powerful e-commerce solutions, and cutting-edge digital experiences.",
    url: 'https://www.madnydigitalservices.com',
    type: "website",
    locale: "en_CA",
    siteName: "Madny Digital Services",
  },
  twitter: {
    card: "summary_large_image",
    title: "Madny Digital Services | Calgary's Premier Digital Agency",
    description: "Transform your business with stunning websites, powerful e-commerce solutions, and cutting-edge digital experiences.",
  },
};

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Madny Digital Services',
  legalName: 'Madny Digital Services Group Ltd.',
  description: "Calgary's premier digital agency specializing in website development, e-commerce solutions, mobile apps, and tech repair services.",
  url: 'https://www.madnydigitalservices.com',
  telephone: '+1-403-708-8214',
  email: 'madny786@hotmail.com',
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+1-403-708-8214',
      contactType: 'customer service',
    },
    {
      '@type': 'ContactPoint',
      telephone: '+1-403-493-7500',
      contactType: 'customer service',
    },
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: '#216, 55 Westwinds Cres NE',
    addressLocality: 'Calgary',
    addressRegion: 'AB',
    postalCode: 'T3J 5H2',
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
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '11:00',
      closes: '19:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Sunday',
      opens: '12:00',
      closes: '17:00',
    },
  ],
  sameAs: [
    'https://www.facebook.com/share/17UsEhwnzo/?mibextid=wwXIfr',
    'https://www.instagram.com/madnydigitalservices',
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
