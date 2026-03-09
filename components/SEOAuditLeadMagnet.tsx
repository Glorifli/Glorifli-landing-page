"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Search, BarChart2, Zap } from 'lucide-react';

const SEOAuditLeadMagnet: React.FC = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        website: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError('');

        try {
            const response = await fetch(
                'https://services.leadconnectorhq.com/hooks/KyBfQlriCJtzUoDteCDn/webhook-trigger/9c2fa94d-e665-4e04-aa14-1aa3c9dfe687',
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        ...formState,
                        leadType: 'seo-audit-lead-magnet'
                    }),
                }
            );

            if (response.ok) {
                setIsSubmitted(true);
            } else {
                setError('Something went wrong. Please try again.');
            }
        } catch {
            setError('Something went wrong. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const perks = [
        { icon: Search, text: 'Full SEO/AEO visibility audit' },
        { icon: BarChart2, text: 'Actionable steps to rank higher' },
        { icon: Zap, text: 'Quick-wins to boost organic traffic fast' },
    ];

    return (
        <section
            id="seo-audit"
            className="py-20 px-6 bg-background relative overflow-hidden"
        >
            {/* Background glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/8 rounded-full blur-[140px] pointer-events-none -z-10" />
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] pointer-events-none -z-10" />

            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.5 }}
                    className="glass-panel rounded-[2.5rem] border border-primary/20 overflow-hidden relative p-8 md:p-14"
                >
                    {/* Racing border SVG */}
                    <svg
                        className="absolute inset-0 w-full h-full pointer-events-none"
                        preserveAspectRatio="none"
                    >
                        <rect
                            x="0.5"
                            y="0.5"
                            width="calc(100% - 1px)"
                            height="calc(100% - 1px)"
                            rx="40"
                            ry="40"
                            fill="none"
                            stroke="#38bdf8"
                            strokeWidth="2"
                            pathLength="1"
                            strokeDasharray="0.2 0.8"
                            strokeLinecap="round"
                            className="animate-[racingBorder_18s_linear_infinite]"
                            style={{ filter: 'drop-shadow(0 0 5px #38bdf8)' }}
                        />
                        <style>{`
                            @keyframes racingBorder {
                                0%   { stroke-dashoffset: 1; }
                                100% { stroke-dashoffset: 0; }
                            }
                        `}</style>
                    </svg>

                    <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
                        {/* Left — copy */}
                        <div>
                            {/* Badge */}
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-6">
                                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                                <span className="text-xs font-semibold text-accent uppercase tracking-widest">
                                    Free for a limited time
                                </span>
                            </div>

                            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 leading-tight">
                                Get Your Free{' '}
                                <span className="text-primary">SEO/AEO Audit</span>{' '}
                                With Actionable Steps
                            </h2>
                            <p className="text-gray-400 mb-8 leading-relaxed">
                                Want more organic traffic without spending more on ads? Drop your name, email, and website URL below and we'll send you a personalised SEO/AEO audit packed with actionable steps to generate more leads from search — completely free.
                            </p>

                            <ul className="space-y-3">
                                {perks.map(({ icon: Icon, text }) => (
                                    <li key={text} className="flex items-center gap-3 text-sm text-gray-300">
                                        <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                                            <Icon className="w-4 h-4 text-primary" />
                                        </div>
                                        {text}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Right — form */}
                        <div>
                            {isSubmitted ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="bg-white/5 rounded-2xl p-8 text-center border border-white/10"
                                >
                                    <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <CheckCircle2 className="w-8 h-8 text-green-400" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">You're on the list!</h3>
                                    <p className="text-gray-400 text-sm">
                                        We'll review your site and send your personalised SEO/AEO audit report within 24–48 hours. Keep an eye on your inbox!
                                    </p>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <label
                                            htmlFor="audit-name"
                                            className="block text-xs font-medium text-gray-400 mb-1.5 ml-1"
                                        >
                                            Full Name
                                        </label>
                                        <input
                                            type="text"
                                            id="audit-name"
                                            required
                                            placeholder="Jane Smith"
                                            value={formState.name}
                                            onChange={(e) =>
                                                setFormState({ ...formState, name: e.target.value })
                                            }
                                            className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                                        />
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="audit-email"
                                            className="block text-xs font-medium text-gray-400 mb-1.5 ml-1"
                                        >
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            id="audit-email"
                                            required
                                            placeholder="jane@yourbusiness.com"
                                            value={formState.email}
                                            onChange={(e) =>
                                                setFormState({ ...formState, email: e.target.value })
                                            }
                                            className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                                        />
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="audit-website"
                                            className="block text-xs font-medium text-gray-400 mb-1.5 ml-1"
                                        >
                                            Your Website URL
                                        </label>
                                        <input
                                            type="url"
                                            id="audit-website"
                                            required
                                            placeholder="https://yourbusiness.com"
                                            value={formState.website}
                                            onChange={(e) =>
                                                setFormState({ ...formState, website: e.target.value })
                                            }
                                            className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                                        />
                                    </div>

                                    {error && (
                                        <p className="text-red-400 text-sm text-center">{error}</p>
                                    )}

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="group w-full flex items-center justify-center gap-2 bg-primary/90 hover:bg-primary text-black font-bold rounded-xl py-4 transition-all duration-200 shadow-[0_0_25px_-5px_rgba(56,189,248,0.5)] hover:shadow-[0_0_40px_-8px_rgba(56,189,248,0.7)] disabled:opacity-60 disabled:cursor-not-allowed mt-1"
                                    >
                                        {isSubmitting ? (
                                            'Sending...'
                                        ) : (
                                            <>
                                                <span>Send Me My Free Audit</span>
                                                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                            </>
                                        )}
                                    </button>

                                    <p className="text-center text-xs text-gray-600 mt-2">
                                        No spam. Unsubscribe at any time.
                                    </p>
                                </form>
                            )}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default SEOAuditLeadMagnet;
