"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { EyeOff, MessageSquareX, TrendingUp } from 'lucide-react';

const painPoints = [
    {
        icon: EyeOff,
        title: "Tired of people not knowing about your business?",
        description: "You're an expert in your field, but to the clients who need you most, you're invisible. Studies show that 82% of appointments are booked through searches made on mobile. This means that if your website doesnt have seamless online booking, you're missing out on a majority of the market share.",
        accentColor: "text-accent",
        glowColor: "from-accent/10"
    },
    {
        icon: MessageSquareX,
        title: "Struggling to Convert Website Visitors Into Loyal Clients?",
        description: "Studies show that nearly 70% of all customers chose online booking rather than booking over the phone. So if your site isn't designed to convert effortlessly your business's longevity will suffer.",
        accentColor: "text-accent",
        glowColor: "from-accent/10"
    }
];

const PainPoints: React.FC = () => {
    return (
        <section className="py-24 px-6 bg-background relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] -z-10" />

            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold font-heading mb-6"
                    >
                        Your Business Isn't The Problem. <span className="text-primary text-glow">Marketing Is.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-400 max-w-2xl mx-auto"
                    >
                        Fed up with High Marketing Costs? Tired of Having an Inconsistent Stream of Clients?
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                    {painPoints.map((point, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            whileHover={{
                                y: -10,
                                boxShadow: "0 0 30px -10px rgba(255, 255, 115, 0.3)",
                                borderColor: "rgba(255, 255, 115, 0.4)"
                            }}
                            viewport={{ once: true }}
                            transition={{
                                type: "spring",
                                stiffness: 500,
                                damping: 30,
                                mass: 1
                            }}
                            className="glass-panel p-8 rounded-3xl relative group overflow-hidden border border-white/5"
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${point.glowColor} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                            <div className="relative z-10">
                                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors">
                                    <point.icon className={`w-7 h-7 ${point.accentColor}`} />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-white uppercase tracking-tight">
                                    {point.title}
                                </h3>
                                <p className="text-gray-400 leading-relaxed text-lg">
                                    {point.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* The Solution / Results Section */}

            </div>
        </section>
    );
};

export default PainPoints;
