"use client";

import React, { useState } from 'react';
import StarBackground from './StarBackground';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle2, Globe } from 'lucide-react';

import LeadMagnetForm from './LeadMagnetForm';

const Hero: React.FC = () => {

    return (
        <section className="relative min-h-[100vh] flex flex-col items-center justify-center overflow-hidden pt-0 pb-16 px-6">
            <StarBackground />

            {/* Background Gradients */}
            <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] -z-10" />
            <div className="hidden md:block absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] -z-10" />

            <div className="relative z-10 max-w-4xl mx-auto text-center">

                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 hover:bg-white/10 transition-colors cursor-default"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                    </span>
                    <span className="text-xs font-medium text-gray-300 uppercase tracking-widest">Growth Guaranteed</span>
                </motion.div>

                {/* H1 — SEO keywords + conversion hook */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold tracking-tighter leading-[1.05] mb-6 text-white"
                >
                    Service Business Owners Ready to Get{' '}
                    <span className="text-primary">More Appointments</span>{' '}
                    on <span className="text-primary">Autopilot</span>?
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
                >
                    We Guarantee You <strong className="text-white">10 New Appointments in the Next 60 Days</strong> or we work for free until you get those results.
                </motion.p>

                {/* ── Compact Multi-Step Audit Form ── */}
                <LeadMagnetForm className="mt-32" delay={0.3} />

            </div>
        </section>
    );
};

export default Hero;
