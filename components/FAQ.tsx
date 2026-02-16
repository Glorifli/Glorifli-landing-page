"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import StructuredData from './StructuredData';

const faqs = [
    {
        question: "What do I get when I book a strategy call?",
        answer: "When you book a strategy call, you get a completely free mock draft of your new site, free instructions on how to build it yourself, a custom scaling roadmap, and a comprehensive audit of your current online presence."
    },
    {
        question: "What makes your websites different?",
        answer: "We don't just build brochures; we build client acquisition systems. Our sites feature a proven landing page conversion structure, custom lead-generating chatbots, and high-performance SEO/AEO blogs designed to generate traffic and turn visitors into paying clients."
    },
    {
        question: "How long until my new site is live?",
        answer: "We'll send you your first draft of the website by the end of two weeks and the site will be live in less than a month."
    },
    {
        question: "Do I handle the text and images?",
        answer: "We can handle everything including professional copywriting. However, you'll get the best results by sending us testimonials and authentic images of your work and staff to build maximum trust."
    },
    {
        question: "What are the Guarantees?",
        answer: "We guarantee 3 new appointments booked in the first 30 days following the launch of your site! (Note: This guarantee applies exclusively to the \"Autonomous Revenue Generating Engine\" package)."
    },
    {
        question: "Is SEO dead? Why should I care about \"AEO\" for my local business?",
        answer: (
            <>
                <strong className="text-white block mb-2">The Direct Answer:</strong>
                SEO isn&apos;t dead, but the game has changed completely. Traditional SEO was about ranking a link; AEO is about becoming the cited answer when someone asks Siri or ChatGPT, &quot;Who is the best service provider near me?&quot;.
                <br /><br />
                <strong className="text-white block mb-2">The Data:</strong>
                With 58% of searches now ending without a click (Zero-Click searches), you need to be the direct answer displayed at the top. If you are ignoring AEO, you are ignoring the fastest-growing source of high-intent leads.
                <br /><br />
                <strong className="text-white block mb-2">The Move:</strong>
                Stop fighting for clicks and start fighting for citations. See how we can help you do this at <a href="#aeo-strategy" className="text-primary hover:text-primary-light underline decoration-primary/30 underline-offset-4 transition-all">Our AEO Strategy</a>.
            </>
        ),
        schemaAnswer: "The Direct Answer: SEO isn't dead, but the game has changed completely. Traditional SEO was about ranking a link; AEO is about becoming the cited answer when someone asks Siri or ChatGPT, \"Who is the best service provider near me?\". The Data: With 58% of searches now ending without a click (Zero-Click searches), you need to be the direct answer displayed at the top. If you are ignoring AEO, you are ignoring the fastest-growing source of high-intent leads. The Move: Stop fighting for clicks and start fighting for citations."
    },
    {
        question: "How do I get ChatGPT and Google AI to recommend my business?",
        answer: (
            <>
                <strong className="text-white block mb-2">The Strategy:</strong>
                You need to build &quot;Entity Authority.&quot; AI models don&apos;t trust what you say about yourself; they trust what others say. We use a strategy called &quot;Consensus optimization&quot; where we align your reviews, directory listings, and data across the web so the AI views you as the &quot;Safe Recommendation.&quot;
                <br /><br />
                <strong className="text-white block mb-2">The Protocol:</strong>
                <ul className="list-disc pl-5 space-y-1 mb-4">
                    <li><strong>Entity Consistency:</strong> Ensure your Name, Address, and Phone (NAP) are identical everywhere.</li>
                    <li><strong>Review Velocity:</strong> Get consistent reviews that mention specific services.</li>
                    <li><strong>Data Structuring:</strong> Feed the AI facts it can verify.</li>
                </ul>
                <strong className="text-white block mb-2">Get Started:</strong>
                <a href="#audit" className="text-primary hover:text-primary-light underline decoration-primary/30 underline-offset-4 transition-all">Book Your Entity Audit</a> and let&apos;s get you recommended.
            </>
        ),
        schemaAnswer: "The Strategy: You need to build \"Entity Authority.\" AI models don't trust what you say about yourself; they trust what others say. We use a strategy called \"Consensus optimization\" where we align your reviews, directory listings, and data across the web so the AI views you as the \"Safe Recommendation.\" The Protocol: Entity Consistency: Ensure your Name, Address, and Phone (NAP) are identical everywhere. Review Velocity: Get consistent reviews that mention specific services. Data Structuring: Feed the AI facts it can verify."
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
