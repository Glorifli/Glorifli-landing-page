"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Calendar, Award, ArrowRight } from 'lucide-react';

const features = [
    {
        icon: Eye,
        title: 'Improve Your Visibility',
        description: 'Our AEO & SEO optimized blogs answer specific client questions, ensuring your business appears before your competitors when people need you.',
        color: 'text-primary',
        colSpan: 'md:col-span-1'
    },
    {
        icon: Calendar,
        title: 'Book More Appointments',
        description: "We guarantee you 3 new clients booked in the first month after we launch your site or you don't pay till we hit that milestone!",
        color: 'text-accent',
        colSpan: 'md:col-span-1',
        hoverColor: 'text-accent',
        glowColor: 'rgba(255, 255, 115, 0.5)', // Yellow glow
        shadowColor: 'rgba(255, 255, 115, 0.4)'
    },
    {
        icon: Award,
        title: 'Earn Greater Credibility',
        description: "We'll build your high-converting website to establish client trust and authority for your business.",
        color: 'text-primary',
        colSpan: 'md:col-span-1',
        hoverColor: 'text-primary',
        glowColor: 'rgba(56, 189, 248, 0.5)', // Blue glow
        shadowColor: 'rgba(56, 189, 248, 0.4)'
    }
];

const ValueProposition: React.FC = () => {
    return (
        <section id="features" className="py-24 px-6 bg-surface border-t border-white/5 relative">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">
                        Need Help Converting <span className="text-primary">Eyes Into Appointments?</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        We don't just build websites. We build client acquisition systems to get more people into your business!
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{
                                duration: 0.4,
                                ease: "easeOut"
                            }}
                            className={`glass-panel p-8 rounded-3xl group cursor-default relative overflow-hidden ${feature.colSpan} border border-white/5`}
                        >
                            {/* Hover Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10">
                                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors">
                                    <feature.icon className={`w-6 h-6 ${feature.color}`} />
                                </div>
                                <h3 className={`text-2xl font-bold mb-3 text-white group-hover:${feature.hoverColor || 'text-primary'} transition-colors`}>
                                    {feature.title}
                                </h3>
                                <p className="text-gray-400 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="flex justify-center mt-12">
                    <a
                        href="#calendar"
                        className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-primary/90 font-heading rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-gray-900 hover:bg-primary shadow-[0_0_30px_-5px_rgba(56,189,248,0.5)] hover:shadow-[0_0_50px_-10px_rgba(56,189,248,0.7)]"
                    >
                        <span className="mr-2">Get Started!</span>
                        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ValueProposition;
