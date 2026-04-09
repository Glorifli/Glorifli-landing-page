import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/StructuredData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PopupForm from "@/components/PopupForm";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Glorifli - Risk-Free Website Building",
  description: "We'll build your website, and if you don't like it, you don't pay!",
  metadataBase: new URL("https://glorifli.com"),
  verification: {
    google: "KjzE4LVqu5Z77zREXcoxlIpiOx-rLpiQpjqhgd0dTxU",
  },
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
        "founder": {
          "@type": "Person",
          "name": "Brendan Dillon",
          "jobTitle": "Founder & CEO",
          "sameAs": [
            "https://www.google.com/maps/place/Glorifli/data=!4m2!3m1!1s0x0:0x5eea403674673dc6",
            "https://www.linkedin.com/in/brendan-dillon-341035377",
            "https://www.youtube.com/@BrendanDillon22",
            "https://www.instagram.com/brendan.dillon.business/",
            "https://www.threads.net/@brendan.dillon.business",
            "https://x.com/BrendanDil64464"
          ]
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
      <head>
        <link rel="dns-prefetch" href="https://r2.leadsy.ai" />
        <link rel="dns-prefetch" href="https://calendly.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} antialiased bg-background text-white selection:bg-primary/30 selection:text-primary-100`}
      >
        <StructuredData data={jsonLd} />
        <Navbar />
        {children}
        <PopupForm />
        <Footer />
        <SpeedInsights />
        <Analytics />
        {/* Leadsy AI tag — deferred to after page is interactive to avoid render-blocking */}
        <Script
          id="vtag-ai-js"
          src="https://r2.leadsy.ai/tag.js"
          data-pid="RG0l6sbiq6jkX5Qv"
          data-version="062024"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
