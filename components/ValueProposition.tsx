"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Calendar, Award } from 'lucide-react';

const features = [
    {
        icon: Eye,
        title: 'Improved Visibility',
        description: 'Our AEO & SEO optimized blogs answer specific patient questions, ensuring your practice appears before your competitors when patients need care.',
        color: 'text-primary',
        colSpan: 'md:col-span-1'
    },
    {
        icon: Calendar,
        title: 'More Appointments',
        description: 'Our Ai-powered chatbot qualifies leads and books appointments 24/7.',
        color: 'text-accent',
        colSpan: 'md:col-span-1',
        hoverColor: 'text-accent',
        glowColor: 'rgba(255, 255, 115, 0.5)', // Yellow glow
        shadowColor: 'rgba(255, 255, 115, 0.4)'
    },
    {
        icon: Award,
        title: 'Greater Credibility',
        description: "We'll build your high-converting website to establish patient trust and authority for your practice.",
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
                        We don't just build websites. We build client acquisition systems to get more people into your practice!
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            whileHover={{
                                y: -10,
                                boxShadow: `0 0 40px -10px ${feature.shadowColor || 'rgba(56, 189, 248, 0.4)'}`,
                                borderColor: feature.glowColor || 'rgba(56, 189, 248, 0.5)'
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 500,
                                damping: 30,
                                mass: 1
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
            </div>
        </section>
    );
};

export default ValueProposition;
