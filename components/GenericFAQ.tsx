"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import StructuredData from './StructuredData';

export interface FAQItem {
    question: string;
    answer: React.ReactNode;
    schemaAnswer?: string;
}

interface GenericFAQProps {
    faqs: FAQItem[];
    title?: string;
    className?: string;
}

const GenericFAQ: React.FC<GenericFAQProps> = ({ faqs, title = "Frequently Asked Questions", className = "py-24 px-6 bg-surface" }) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.schemaAnswer || (typeof faq.answer === 'string' ? faq.answer : "Please see our website for the full answer.")
            }
        }))
    };

    return (
        <section className={className}>
            <StructuredData data={jsonLd} />
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold mb-12 font-heading text-center">{title}</h2>

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

export default GenericFAQ;
