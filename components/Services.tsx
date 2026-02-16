"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const services = [
    {
        name: "SEO/AEO Optimization",
        price: "$589.50",
        period: "/month",
        description: "Dominate local search and become the AI-recommended answer.",
        features: [
            "8 SEO/AEO Optimized Blogs Monthly",
            "Standard SEO/AEO Optimization",
            "Google Business Profile Sync",
            "Citation Network Building",
            "Guarantee: 3 New Appointments/Mo or Free!"
        ],
        ctaLink: "https://buy.stripe.com/aFa6oH3zn4GLbAi1o9cwg0b",
        highlight: false
    },
    {
        name: "Custom High-Converting Website",
        price: "$1,256.50",
        period: "",
        description: "A digital storefront designed to turn visitors into booked appointments.",
        features: [
            "Custom Design & Branding",
            "Mobile & Desktop Optimization",
            "Proven Conversion Wiremapping",
            "2 Revisions (2-Week Period)",
            "Integrated Booking System"
        ],
        ctaLink: "https://buy.stripe.com/28EbJ17PD2yD5bUgj3cwg0c",
        highlight: false
    },
    {
        name: "Autonomous Revenue Generating Engine",
        price: "Combo",
        period: "",
        description: "The complete system. Build your site, fill your calendar, and scale on autopilot.",
        features: [
            "ALL Features from Website & SEO Plans",
            "Full AEO Infrastructure Setup",
            "Priority Support",
            "Guarantee: 3 New Appointments in Month 1",
            "Or Your Money Back (Service Fee)"
        ],
        ctaLink: "https://buy.stripe.com/cNi4gz3znehlgUC1o9cwg0a",
        highlight: true,
        badge: "Best Value",
        priceDetail: "$1,256.50 + $589.50/mo"
    }
];

const Services: React.FC = () => {
    return (
        <section id="services" className="py-24 px-6 bg-surface relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute left-0 top-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-secondary/10 via-background to-background pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold font-heading text-white mb-6">
                        My <span className="text-primary">Services</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Simple, transparent pricing. No hidden fees. Just results.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative rounded-3xl p-8 border ${service.highlight
                                ? 'bg-white/5 border-primary/50 shadow-[0_0_30px_rgba(56,189,248,0.1)]'
                                : 'bg-black/20 border-white/5 hover:border-white/10'
                                } backdrop-blur-sm transition-all duration-300 flex flex-col h-full`}
                        >
                            {service.highlight && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-black text-sm font-bold rounded-full shadow-lg">
                                    {service.badge}
                                </div>
                            )}

                            <div className="mb-8">
                                <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                                <p className="text-gray-400 text-sm h-10">{service.description}</p>
                            </div>

                            <div className="mb-8">
                                <div className="flex items-baseline gap-1">
                                    {service.price === "Combo" ? (
                                        <div className="flex flex-col">
                                            <span className="text-3xl font-bold text-white tracking-tight">Complete System</span>
                                            <span className="text-sm text-primary mt-1">{service.priceDetail}</span>
                                        </div>
                                    ) : (
                                        <>
                                            <span className="text-4xl font-bold text-white tracking-tight">{service.price}</span>
                                            <span className="text-gray-400">{service.period}</span>
                                        </>
                                    )}
                                </div>
                            </div>

                            <ul className="space-y-4 mb-8 flex-grow">
                                {service.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                                        <Check className="w-5 h-5 text-primary flex-shrink-0" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <a
                                href={service.ctaLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`w-full py-4 rounded-xl font-bold text-center transition-all duration-300 bg-white/10 text-white hover:bg-primary hover:text-black hover:scale-[1.02]`}
                            >
                                Get Started
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
