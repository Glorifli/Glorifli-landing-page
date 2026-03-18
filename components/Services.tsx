"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const services = [
    {
        name: "Custom High-Converting Website",
        slug: "custom-website-for-service-businesses",
        price: "$1,256.50",
        period: "",
        marketValue: "$4,700+ market value",
        description: "A digital storefront designed to turn visitors into booked leads — 1 free month of blog content included.",
        features: [
            "Custom Design & Branding",
            "Mobile & Desktop Optimization",
            "Conversion Copywriting Done-For-You",
            "Integrated Booking System",
            "Domain Transfer or Acquisition",
            "1 Free Month of Blog Content Included"
        ],
        ctaLink: "https://buy.stripe.com/28EbJ17PD2yD5bUgj3cwg0c",
        highlight: false
    },
    {
        name: "Autonomous Revenue Generating Engine",
        slug: "autonomous-revenue-engine-for-service-businesses",
        price: "Combo",
        period: "",
        marketValue: "$8,900+ total market value",
        description: "The complete system. Build your site, fill your calendar, and scale on autopilot.",
        features: [
            "ALL Features from Website & SEO Plans",
            "1 Free Month of Blog Content",
            "Full AEO Infrastructure Setup",
            "Priority Support",
            "SEO/AEO Service Runs FREE Until 10 Leads Booked — Then $589.50/mo"
        ],
        ctaLink: "https://buy.stripe.com/cNi4gz3znehlgUC1o9cwg0a",
        highlight: true,
        badge: "Best Value",
        priceDetail: "$1,256.50 setup + $589.50/mo"
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
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-4">
                        Pay the $1,256.50 setup fee to get started. Your website goes live and the SEO/AEO service runs <strong className="text-white">free</strong> until we book you 10 leads — all within 60 days of payment. If we don't, we keep working at no charge until we do.
                    </p>
                    {/* Value Stack Highlight */}
                    <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-primary/30 bg-primary/5 text-sm text-gray-300 mt-2">
                        <span className="text-primary font-bold">$8,900+</span> in total market value —
                        <span className="text-white font-bold">you invest $1,256.50</span> to start
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className={`relative rounded-3xl p-8 border ${service.highlight
                                ? 'bg-white/5 border-primary/50 shadow-[0_0_30px_rgba(56,189,248,0.1)]'
                                : 'bg-black/20 border-white/5 hover:border-white/10'
                                } transition-all duration-300 flex flex-col h-full`}
                        >
                            {service.highlight && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-black text-sm font-bold rounded-full shadow-lg">
                                    {service.badge}
                                </div>
                            )}

                            <div className="mb-6">
                                <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                                <p className="text-gray-400 text-sm">{service.description}</p>
                            </div>

                            <div className="mb-6">
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
                                <p className="text-xs text-gray-600 mt-2">{service.marketValue}</p>
                            </div>

                            <ul className="space-y-4 mb-8 flex-grow">
                                {service.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                                        <Check className="w-5 h-5 text-primary flex-shrink-0" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* Dual CTAs: Get Started + Learn More */}
                            <div className="flex flex-col gap-3">
                                <a
                                    href={service.ctaLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`w-full py-3.5 rounded-xl font-bold text-center transition-all duration-300 ${service.highlight ? 'bg-primary text-black hover:bg-white' : 'bg-white/10 text-white hover:bg-primary hover:text-black hover:scale-[1.02]'}`}
                                >
                                    Get Started
                                </a>
                                <Link
                                    href={`/services/${service.slug}`}
                                    className="w-full py-2.5 rounded-xl font-medium text-center text-sm text-gray-400 hover:text-primary border border-white/5 hover:border-primary/30 transition-all duration-300 flex items-center justify-center gap-1.5 group"
                                >
                                    <span className="truncate">Explore {service.name}</span>
                                    <ArrowRight className="w-3.5 h-3.5 shrink-0 transition-transform group-hover:translate-x-0.5" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* ROI Proof Line */}
                <div className="mt-12 text-center">
                    <p className="text-gray-500 text-sm">
                        Roofing clients see up to <span className="text-white font-bold">2,646% ROI</span> · Home Remodeling up to <span className="text-white font-bold">5,869% ROI</span> · Based on 30% close rate of 10 guaranteed leads · Sources:{' '}
                        <a href="https://modernize.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Modernize</a>,{' '}
                        <a href="https://homeguide.com/costs" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">HomeGuide</a>,{' '}
                        <a href="https://www.angi.com/research/reports/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Angi</a>.{' '}
                        <Link href="/services" className="text-primary hover:underline">See full ROI breakdown →</Link>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Services;
