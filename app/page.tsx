import Hero from "@/components/Hero";
import PainPoints from "@/components/PainPoints";
import ValueProposition from "@/components/ValueProposition";
import ProofOfConcept from "@/components/ProofOfConcept";
import LeadForm from "@/components/LeadForm";
import BookingCalendar from "@/components/BookingCalendar";
import FAQ from "@/components/FAQ";
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
        url: "https://glorifli.com/images/blog/featured-hero.png", // Using a high-quality existing image as default OG
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

export default function Home() {
  return (
    <main>
      <Hero />
      <PainPoints />
      <ValueProposition />
      <ProofOfConcept />
      <LeadForm />
      <BookingCalendar />
      <FAQ />
    </main>
  );
}
