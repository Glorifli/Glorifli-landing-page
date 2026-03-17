"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import StructuredData from './StructuredData';

const faqs = [
    {
        question: "How to get more consistent leads for my roofing business?",
        answer: "Getting more leads for roofing businesses is a breeze with our Autonomous Revenue Engine. Instead of paying for shared HomeAdvisor leads that race to the bottom on price, we build you an AEO-optimized site that captures homeowners exactly when they search for 'roof repair near me' or ask ChatGPT for local recommendations. You get exclusive, high-intent leads straight to your phone."
    },
    {
        question: "Why should I hire Glorifli for HVAC SEO instead of a generic web marketing agency?",
        answer: "Generic agencies charge you $2,000/month just to publish generic blog posts and hope for the best, without tying their pay to your actual ROI. Glorifli specializes exclusively in local service businesses. Most importantly, we put our money where our mouth is: if you don't get 10 new booked leads within 60 days of paying the $1,256.50 setup fee, our ongoing services are completely free until you do."
    },
    {
        question: "What is the best way to get my plumbing business recommended to people on AI?",
        answer: (
            <>
                <strong className="text-white block mb-2">The Strategy:</strong>
                To get recommended by ChatGPT, Gemini, and Google's AI Overviews, your plumbing business needs massive "Entity Authority." AI models compile facts from across the web to determine the most trusted local plumber.
                <br /><br />
                <strong className="text-white block mb-2">The Execution:</strong>
                We ensure your Name, Address, and Phone (NAP) are identical across 50+ directories. We inject aggressive LocalBusiness and FAQPage schema markup into your site's code, and we write high-density factual content that AI scrapers love to cite.
            </>
        ),
        schemaAnswer: "To get recommended by ChatGPT, Gemini, and Google's AI Overviews, your plumbing business needs massive \"Entity Authority.\" We ensure your Name, Address, and Phone (NAP) are identical across 50+ directories, inject LocalBusiness schema markup into your site, and write high-density factual content."
    },
    {
        question: "Is it worth paying $1,256.50 for a custom home remodeling website? What is the ROI?",
        answer: "Absolutely. Home remodeling is a high-ticket service. Our $1,256.50 setup fee gets you a custom, high-converting digital storefront designed to capture leads. Our data shows that true SEO and AEO leads close at a conservative 30% rate. If our guaranteed 10 leads convert into just 3 remodeling jobs (averaging $25,000 each), that's $75,000 in revenue from a one-time $1,256.50 investment and a performance-backed $589.50/mo retainer."
    },
    {
        question: "What happens if you don't get my landscaping company 10 new leads in 60 days?",
        answer: "We work for free until we do. The 60-day clock begins the moment your $1,256.50 setup fee is paid. We build your site and run your SEO/AEO completely free during that time. If day 60 hits and we haven't generated 10 exclusive leads for your landscaping business, you do not pay a single cent of the $589.50 monthly retainer until the 10th lead is booked. No excuses."
    },
    {
        question: "Do I have to write the blog posts for my local SEO to rank in Google Maps?",
        answer: "No. You focus on running your service business; we handle the fulfillment. We research hyper-specific local keywords (like 'water heater repair cost near me') and write 8 fully optimized, human-sounding blog posts every single month. This constant flow of fresh, localized content signals to Google that your business is the most active and authoritative in your service area, pushing you straight into the Local 3-Pack."
    },
    {
        question: "Can I just use Glorifli for the $589.50/mo SEO without the website build?",
        answer: "We only run our SEO/AEO optimization on websites that we build and control ourselves. Why? Because achieving a 10-leads-in-60-days guarantee requires a flawlessly optimized technical foundation. We need total access to inject our precise Schema markup, optimize the loading speed, and build the dedicated service landing pages that actually convert the traffic we send."
    }
];

const FAQ: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": (faq as any).schemaAnswer || faq.answer
            }
        }))
    };

    return (
        <section id="faq" className="py-24 px-6 bg-surface">
            <StructuredData data={jsonLd} />
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold mb-12 font-heading text-center">Frequently asked questions</h2>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border border-white/5 rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300 bg-black/20"
                        >
                            <button
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                            >
                                <span className="text-lg font-medium text-white pr-8">{faq.question}</span>
                                <ChevronDown
                                    className={`flex-shrink-0 text-primary transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}
                                    size={20}
                                />
                            </button>
                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="px-6 pb-5 text-gray-400 leading-relaxed border-t border-white/5 pt-4">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
