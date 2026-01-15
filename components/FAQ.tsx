"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

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
    }
];

const FAQ: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <section id="faq" className="py-24 px-6 bg-surface">
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
