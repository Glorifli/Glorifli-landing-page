"use client";

import React, { useState } from 'react';
import dynamic from 'next/dynamic';

const StarBackground = dynamic(() => import('./StarBackground'), {
    ssr: false, // Do not render on the server to prevent hydration issues and block main thread
});
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle2, Globe, Phone } from 'lucide-react';

const Hero: React.FC = () => {

    return (
        <section className="relative min-h-[85vh] flex flex-col items-center justify-center overflow-hidden pt-32 pb-0 px-6">
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
                    Service Business Owners: Ready to Get{' '}
                    <span className="text-primary">More Appointments</span>{' '}
                    On <span className="text-primary">Autopilot</span>?
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
                >
                    We Guarantee You <strong className="text-white">5 New Appointments in the Next 30 Days</strong> or we work for free until you get those results.
                </motion.p>

                {/* Phone CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.25 }}
                    className="flex justify-center mb-10"
                >
                    <a
                        href="tel:+18555930609"
                        className="flex items-center gap-4 py-1.5 px-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary/50 transition-all duration-300 group"
                    >
                        <div className="flex items-center gap-2">
                             <Phone className="w-4 h-4 text-primary group-hover:rotate-12 transition-transform" />
                            <span className="text-xs font-semibold text-gray-300 tracking-wider">talk to our ai receptionist here:</span>
                        </div>
                        <span className="text-lg font-bold text-white leading-tight tracking-tight">+1 855-593-0609</span>
                    </a>
                </motion.div>

            </div>
        </section>
    );
};

export default Hero;
