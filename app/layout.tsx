import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/StructuredData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Glorifli - Risk-Free Website Building",
  description: "We'll build your website, and if you don't like it, you don't pay!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://glorifli.com/#organization",
        "name": "Glorifli",
        "url": "https://glorifli.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://glorifli.com/logo.png",
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://glorifli.com/#website",
        "url": "https://glorifli.com",
        "name": "Glorifli",
        "publisher": {
          "@id": "https://glorifli.com/#organization",
        },
      },
    ],
  };

  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-white selection:bg-primary/30 selection:text-primary-100`}
      >
        <StructuredData data={jsonLd} />
        <Navbar />
        {children}
        <Footer />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
