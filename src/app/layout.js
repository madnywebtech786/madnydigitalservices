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

export const metadata = {
  title: "Madeny Digital Services | Web Development & E-Commerce Solutions | Calgary",
  description: "Calgary's premier digital agency specializing in website development, e-commerce solutions, mobile apps, and digital marketing for mobiles, laptops & accessories businesses.",
  keywords: "web development, e-commerce, mobile app development, digital marketing, Calgary, Canada, Madeny Digital",
  authors: [{ name: "Madeny Digital Services" }],
  openGraph: {
    title: "Madeny Digital Services | Calgary's Premier Digital Agency",
    description: "Transform your business with stunning websites, powerful e-commerce solutions, and cutting-edge digital experiences.",
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

export default async function RootLayout({ children }) {
  const globalContent = await getGlobalContent();

  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <SocialMediaWidget data={globalContent?.socialWidget} />
      </body>
    </html>
  );
}
