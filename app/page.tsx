import Hero from "@/components/Hero";
import SEOAuditLeadMagnet from "@/components/SEOAuditLeadMagnet";
import PainPoints from "@/components/PainPoints";
import ValueProposition from "@/components/ValueProposition";
import BookingCalendar from "@/components/BookingCalendar";
import FAQ from "@/components/FAQ";
import Services from "@/components/Services";
import StructuredData from "@/components/StructuredData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Glorifli - 10 New Leads in 60 Days or We Work for Free",
  description: "We build high-converting websites and SEO/AEO systems for local service businesses. Pay the $1,256.50 setup fee and get 10 new leads in 60 days — or we work for free until you do. Claim your free SEO/AEO audit today.",
  openGraph: {
    title: "Glorifli - 10 New Leads in 60 Days or We Work for Free",
    description: "Pay the $1,256.50 setup fee and get 10 new leads in 60 days — guaranteed. If we don't deliver, we work for free until we do.",
    type: "website",
    url: "https://glorifli.com",
    siteName: "Glorifli",
    images: [
      {
        url: "https://glorifli.com/images/blog/featured-hero.png",
        width: 1200,
        height: 630,
        alt: "Glorifli Website Building",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Glorifli - 10 New Leads in 60 Days Guaranteed",
    description: "Pay the $1,256.50 setup fee and get 10 new leads within 60 days — or we work for free until we deliver.",
    images: ["https://glorifli.com/images/blog/featured-hero.png"],
  },
  alternates: {
    canonical: "https://glorifli.com",
  },
};

// ─── JSON-LD Schema Objects ────────────────────────────────────────────────

/** Organization — tells AI engines who Glorifli is */
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://glorifli.com/#organization",
  name: "Glorifli",
  url: "https://glorifli.com",
  logo: {
    "@type": "ImageObject",
    url: "https://glorifli.com/logo.png",
    width: 512,
    height: 512,
  },
  description:
    "Glorifli builds high-converting websites and AEO/SEO content systems for local service businesses. $1,256.50 setup fee with a guarantee of 10 new leads in 60 days — or we work for free until we deliver.",
  foundingDate: "2025",
  areaServed: {
    "@type": "Country",
    name: "Canada",
  },
  sameAs: [
    "https://www.google.com/maps/place/Glorifli/data=!4m2!3m1!1s0x0:0x5eea403674673dc6",
    "https://www.linkedin.com/in/brendan-dillon-341035377",
    "https://www.youtube.com/@BrendanDillon22",
    "https://www.instagram.com/brendan.dillon.business/",
    "https://www.threads.net/@brendan.dillon.business",
    "https://x.com/BrendanDil64464",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    url: "https://glorifli.com/#calendar",
    availableLanguage: "English",
  },
};

/** WebSite — enables Google Sitelinks Search Box */
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://glorifli.com/#website",
  url: "https://glorifli.com",
  name: "Glorifli",
  description: "Risk-free website building and AEO/SEO optimization for local service businesses.",
  publisher: {
    "@id": "https://glorifli.com/#organization",
  },
  inLanguage: "en-CA",
};

/** ProfessionalService — triggers Local Business rich results in Google & AI */
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://glorifli.com/#business",
  name: "Glorifli",
  url: "https://glorifli.com",
  logo: "https://glorifli.com/logo.png",
  image: "https://glorifli.com/images/blog/featured-hero.png",
  description:
    "We build high-converting websites and AEO/SEO systems for local service businesses — guaranteed 10 new leads in 60 days of the $1,256.50 setup payment, or we work free until we deliver.",
  priceRange: "$$",
  currenciesAccepted: "CAD, USD",
  paymentAccepted: "Credit Card",
  areaServed: [
    { "@type": "Country", name: "Canada" },
    { "@type": "Country", name: "United States" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Glorifli Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "SEO/AEO Optimization",
          description:
            "8 SEO/AEO optimized blog posts monthly, Google Business Profile sync, citation network building, and guaranteed 10 new leads in 60 days or we keep working free.",
          offers: {
            "@type": "Offer",
            price: "589.50",
            priceCurrency: "USD",
            priceSpecification: {
              "@type": "UnitPriceSpecification",
              price: "589.50",
              priceCurrency: "USD",
              billingIncrement: 1,
              unitCode: "MON",
            },
          },
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Custom High-Converting Website",
          description:
            "Custom website design and development with proven conversion wiremapping, mobile optimization, and integrated booking system.",
          offers: {
            "@type": "Offer",
            price: "1256.50",
            priceCurrency: "USD",
          },
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Autonomous Revenue Generating Engine",
          description:
            "Complete website + SEO/AEO system. $1,256.50 setup fee with 60-day guarantee of 10 new leads — or we work free until results are delivered.",
        },
      },
    ],
  },
};

/** BreadcrumbList — helps Google understand site hierarchy */
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://glorifli.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Blog",
      item: "https://glorifli.com/blog",
    },
  ],
};

export default function Home() {
  return (
    <main>
      {/* AEO/SEO Structured Data — all injected into <head> as JSON-LD */}
      <StructuredData data={organizationSchema} />
      <StructuredData data={websiteSchema} />
      <StructuredData data={localBusinessSchema} />
      <StructuredData data={breadcrumbSchema} />

      <Hero />
      <SEOAuditLeadMagnet />
      <PainPoints />
      <ValueProposition />
      <BookingCalendar />
      <Services />
      <FAQ />
    </main>
  );
}
