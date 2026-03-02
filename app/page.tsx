import Hero from "@/components/Hero";
import PainPoints from "@/components/PainPoints";
import ValueProposition from "@/components/ValueProposition";
import ProofOfConcept from "@/components/ProofOfConcept";
import BookingCalendar from "@/components/BookingCalendar";
import FAQ from "@/components/FAQ";
import Services from "@/components/Services";
import StructuredData from "@/components/StructuredData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Glorifli - Risk-Free Website Building for Local Business",
  description: "We build high-converting websites for service businesses. If you don't like it, you don't pay. Get a free mock draft and scaling roadmap today.",
  openGraph: {
    title: "Glorifli - We Build Your Website, Or You Don't Pay",
    description: "Stop chasing clients. We create reliable systems that consistently attract qualified clients - without upfront risk.",
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
    title: "Glorifli - Risk-Free Website Building",
    description: "We build high-converting websites for service businesses. If you don't like it, you don't pay.",
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
    "Glorifli builds high-converting websites and AEO/SEO content systems for local service businesses. Guaranteed results or you don't pay.",
  foundingDate: "2025",
  areaServed: {
    "@type": "Country",
    name: "Canada",
  },
  sameAs: [
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
    "We build high-converting websites and AEO/SEO systems for local service businesses — guaranteed 3 new appointments in month 1 or you don't pay.",
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
            "8 SEO/AEO optimized blog posts monthly, Google Business Profile sync, citation network building, and guaranteed 3 new appointments per month.",
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
            "Complete website + SEO/AEO system. Guaranteed 3 new appointments in month 1 or money back.",
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
      <PainPoints />
      <ValueProposition />
      <BookingCalendar />
      <ProofOfConcept />
      <Services />
      <FAQ />
    </main>
  );
}
