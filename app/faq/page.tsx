import React from "react";
import { Metadata } from "next";
import { faqItems } from "@/lib/faq-data";
import FAQIndexClient from "./FAQIndexClient";

export const metadata: Metadata = {
    title: "SEO, AEO & GEO Questions Answered | Glorifli FAQ",
    description: "Answers to the most common questions about local SEO, Answer Engine Optimization (AEO), and Generative Engine Optimization (GEO) for local service businesses. From the 3-Pack to AI citations.",
    openGraph: {
        title: "SEO, AEO & GEO Questions Answered for Service Businesses | Glorifli FAQ",
        description: "15 in-depth answers to the most trending questions about local SEO, AEO, and GEO — written for local service businesses.",
        url: "https://glorifli.com/faq",
        type: "website",
        images: ["https://glorifli.com/images/blog/featured-hero.png"],
    },
    alternates: { canonical: "https://glorifli.com/faq" },
};

const faqPageSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    name: "SEO, AEO & GEO Questions for Local Service Businesses",
    url: "https://glorifli.com/faq",
    mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
            "@type": "Answer",
            text: item.excerpt + " " + item.keyTakeaways.join(" "),
            url: `https://glorifli.com/faq/${item.slug}`,
        },
    })),
};

const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "SEO, AEO & GEO FAQ — Glorifli",
    url: "https://glorifli.com/faq",
    numberOfItems: faqItems.length,
    itemListElement: faqItems.map((item, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: item.question,
        url: `https://glorifli.com/faq/${item.slug}`,
    })),
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://glorifli.com" },
        { "@type": "ListItem", position: 2, name: "FAQ", item: "https://glorifli.com/faq" },
    ],
};

export default function FAQPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <FAQIndexClient />
        </>
    );
}
