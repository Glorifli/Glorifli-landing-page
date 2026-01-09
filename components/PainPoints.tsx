"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { EyeOff, MessageSquareX, TrendingUp } from 'lucide-react';

const painPoints = [
    {
        icon: EyeOff,
        title: "Lack of Visibility",
        description: "You're an expert in your field, but to the patients who need you most, you're invisible. While less qualified competitors rank higher, your practice remains the best kept secret in town.",
        accentColor: "text-accent",
        glowColor: "from-accent/10"
    },
    {
        icon: MessageSquareX,
        title: "Unclear messaging",
        description: "Generic marketing like 'holistic health' doesn't speak to specific pain. Without addressing exact health issues, patients won't know if you can actually heal them, leading to lost opportunities.",
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
                        Your Practice Isn't The Problem. <span className="text-primary text-glow">Marketing Is.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-400 max-w-2xl mx-auto"
                    >
                        We get more eyes on your practice. You heal more patients.
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
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{
                        y: -10,
                        boxShadow: "0 0 40px -10px rgba(56, 189, 248, 0.4)",
                        borderColor: "rgba(56, 189, 248, 0.5)"
                    }}
                    viewport={{ once: true }}
                    transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                        mass: 1
                    }}
                    className="relative rounded-[2rem] border border-primary/20 bg-primary/5 p-8 md:p-12 overflow-hidden"
                >
                    {/* Decorative element */}
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

                    <div className="relative z-10 text-center max-w-3xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                            <TrendingUp className="w-4 h-4" />
                            The Glorifli Solution
                        </div>
                        <h3 className="text-3xl md:text-5xl font-bold font-heading mb-8 text-white">
                            How We'll Solve <span className="text-primary italic">These Problems For You</span>
                        </h3>
                        <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-6">
                            Glorifli's trusted framework ensures increased visibility and clear messaging for your practice. Our proprietary website architecture enables your practice to get in front of more eyes and seamlessly convert those eyes into appointments.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default PainPoints;
