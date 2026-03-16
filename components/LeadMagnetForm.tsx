"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle2, Globe } from 'lucide-react';

type Step = 'website' | 'contact' | 'done';

const INTERNAL_API = '/api/leads';

interface LeadMagnetFormProps {
    className?: string;
    delay?: number;
    title?: React.ReactNode;
    subtitle?: React.ReactNode;
    successMessageTitle?: React.ReactNode;
    successMessageSubtitle?: React.ReactNode;
    submitButtonText?: React.ReactNode;
    leadType?: string;
}

export default function LeadMagnetForm({
    className = "",
    delay = 0,
    title = <>Get Your <span className="text-primary">Personalized SEO</span> Action Plan!</>,
    subtitle = "The Sooner Your Website Ranks the Sooner You Will be Booking Appointments Without having to Lift a Finger!",
    successMessageTitle = "You're on the list!",
    successMessageSubtitle = "We'll send your personalised SEO Action Plan within 24–48 hrs. Check your inbox.",
    submitButtonText = <>Get Access <ArrowRight className="w-3.5 h-3.5" /></>,
    leadType = 'hero-seo-audit'
}: LeadMagnetFormProps) {
    const [step, setStep] = useState<Step>('website');
    const [website, setWebsite] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState('');

    const handleWebsiteNext = (e: React.FormEvent) => {
        e.preventDefault();
        if (website.trim()) {
            let formattedUrl = website.trim();
            if (formattedUrl !== 'No website' && !/^https?:\/\//i.test(formattedUrl)) {
                formattedUrl = `https://${formattedUrl}`;
            }
            setWebsite(formattedUrl);
            setStep('contact');
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true);
        setError('');
        try {
            await fetch(INTERNAL_API, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    website,
                    name,
                    email,
                    leadType,
                }),
            });

            await fetch('https://services.leadconnectorhq.com/hooks/KyBfQlriCJtzUoDteCDn/webhook-trigger/9c2fa94d-e665-4e04-aa14-1aa3c9dfe687', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    website,
                    name,
                    email,
                    leadType,
                }),
            });
            setStep('done');
        } catch {
            setError('Something went wrong. Please try again.');
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay }}
            className={`max-w-md w-full mx-auto ${className}`}
        >
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm">
                <p className="text-sm font-bold text-white mb-1 text-center">
                    {title}
                </p>
                <p className="text-xs text-gray-400 text-center mb-4">
                    {subtitle}
                </p>

                {step !== 'done' && (
                    <div className="mb-4">
                        <div className="flex justify-between items-center mb-1.5">
                            <span className="text-xs text-gray-500 font-medium">
                                Step {step === 'website' ? '1' : '2'} of 2
                            </span>
                            <span className="text-xs text-primary font-semibold">
                                {step === 'website' ? '50%' : '100%'}
                            </span>
                        </div>
                        <div className="h-1.5 w-full bg-white/8 rounded-full overflow-hidden">
                            <motion.div
                                className="h-full rounded-full"
                                style={{
                                    background: 'linear-gradient(90deg, #38bdf8, #7dd3fc)',
                                    boxShadow: '0 0 8px rgba(56,189,248,0.6)',
                                }}
                                initial={{ width: '0%' }}
                                animate={{ width: step === 'website' ? '50%' : '100%' }}
                                transition={{ duration: 0.45, ease: 'easeOut' }}
                            />
                        </div>
                    </div>
                )}

                <AnimatePresence mode="wait">
                    {step === 'website' && (
                        <motion.form
                            key="step-website"
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -10 }}
                            transition={{ duration: 0.2 }}
                            onSubmit={handleWebsiteNext}
                            className="flex flex-col gap-3"
                        >
                            <div className="flex gap-2">
                                <div className="relative flex-1">
                                    <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                                    <input
                                        type="text"
                                        id="hero-website"
                                        required
                                        placeholder="https://yourbusiness.com"
                                        value={website}
                                        onChange={(e) => setWebsite(e.target.value)}
                                        className="w-full pl-9 pr-3 py-3 bg-black/50 border border-white/10 rounded-xl text-white text-sm placeholder-gray-600 focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/40 transition-all border-none"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="flex-shrink-0 flex items-center gap-1.5 px-4 py-3 bg-white text-black text-sm font-bold rounded-xl hover:bg-gray-200 transition-all duration-200 shadow-[0_0_20px_-4px_rgba(56,189,248,0.6)]"
                                >
                                    Next <ArrowRight className="w-3.5 h-3.5" />
                                </button>
                            </div>
                            <button
                                type="button"
                                onClick={() => { setWebsite('No website'); setStep('contact'); }}
                                className="text-xs text-gray-400 hover:text-white transition-colors text-left pl-1"
                            >
                                I don't have a website yet
                            </button>
                        </motion.form>
                    )}

                    {step === 'contact' && (
                        <motion.form
                            key="step-contact"
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -10 }}
                            transition={{ duration: 0.2 }}
                            onSubmit={handleSubmit}
                            className="space-y-3"
                        >
                            <p className="text-xs text-gray-500 text-left">
                                ✅ <span className="text-gray-400">{website}</span> — now tell us where to send your plan:
                            </p>
                            <input
                                type="text"
                                id="hero-name"
                                required
                                placeholder="Full Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl text-white text-sm placeholder-gray-600 focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/40 transition-all"
                            />
                            <input
                                type="email"
                                id="hero-email"
                                required
                                placeholder="Work Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl text-white text-sm placeholder-gray-600 focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/40 transition-all"
                            />
                            {error && <p className="text-red-400 text-xs">{error}</p>}
                            <button
                                type="submit"
                                disabled={submitting}
                                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-white text-black text-sm font-bold rounded-xl hover:bg-sky-400 hover:text-white transition-all duration-200 shadow-[0_0_20px_-4px_rgba(56,189,248,0.6)] disabled:opacity-60"
                            >
                                {submitting ? 'Sending…' : submitButtonText}
                            </button>
                            <p className="text-center text-lg font-extrabold tracking-widest text-primary">FREE</p>
                        </motion.form>
                    )}

                    {step === 'done' && (
                        <motion.div
                            key="step-done"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.25 }}
                            className="text-center py-2"
                        >
                            <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                                <CheckCircle2 className="w-5 h-5 text-green-400" />
                            </div>
                            <p className="text-sm font-bold text-white mb-1">{successMessageTitle}</p>
                            <p className="text-xs text-gray-500">{successMessageSubtitle}</p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <div className="flex items-center justify-center gap-4 mt-5 text-xs text-gray-600">
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-secondary" /> 100% Free</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-secondary" /> Actionable Steps</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-secondary" /> No Sales Call Required</span>
            </div>
        </motion.div>
    );
}
