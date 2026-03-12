"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Globe } from 'lucide-react';

const PopupForm: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        websiteUrl: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            const hasSeenPopup = localStorage.getItem('hasSeenPopup');
            if (!hasSeenPopup) {
                setIsVisible(true);
            }
        }, 7000); // 7 seconds delay

        return () => clearTimeout(timer);
    }, []);

    const handleClose = () => {
        setIsVisible(false);
        localStorage.setItem('hasSeenPopup', 'true');
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // 1. Submit to Google Sheets via Internal API (Secure Service Account)
            try {
                await fetch('/api/leads', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formState),
                });
            } catch (err) {
                console.warn('Google Sheet API error:', err);
            }

            // 2. Submit to LeadConnector (Keep as is)
            const response = await fetch('https://services.leadconnectorhq.com/hooks/KyBfQlriCJtzUoDteCDn/webhook-trigger/9c2fa94d-e665-4e04-aa14-1aa3c9dfe687', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ...formState, source: 'popup' }),
            });

            if (response.ok) {
                setIsSubmitted(true);
                localStorage.setItem('hasSeenPopup', 'true');
                setTimeout(() => {
                    setIsVisible(false);
                }, 3000);
            } else {
                console.warn('Submission failed');
            }
        } catch (error) {
            console.warn('Error submitting form:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleClose}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.92, y: 24 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.92, y: 24 }}
                        transition={{ type: 'spring', damping: 22, stiffness: 260 }}
                        className="relative w-full max-w-md rounded-3xl overflow-hidden"
                    >
                        {/* Glow orb behind card */}
                        <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary/20 rounded-full blur-[80px] pointer-events-none" />
                        <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-accent/15 rounded-full blur-[60px] pointer-events-none" />

                        {/* Glass card */}
                        <div className="relative bg-black/60 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-[0_8px_60px_rgba(0,0,0,0.6)] overflow-hidden">
                            {/* Racing-glow border */}
                            <div className="absolute inset-0 rounded-3xl pointer-events-none" style={{ boxShadow: 'inset 0 0 0 1px rgba(56,189,248,0.15), 0 0 40px -8px rgba(56,189,248,0.25)' }} />

                            {/* Close Button */}
                            <button
                                onClick={handleClose}
                                aria-label="Close"
                                className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors z-10"
                            >
                                <X size={20} />
                            </button>

                            <div className="relative z-10 text-center">
                                {isSubmitted ? (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="py-10"
                                    >
                                        <div className="w-16 h-16 bg-success/20 text-green-400 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
                                            ✓
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-2">You're In!</h3>
                                        <p className="text-gray-400">Thanks for signing up. We'll be in touch shortly.</p>
                                    </motion.div>
                                ) : (
                                    <>
                                        <h2 className="text-2xl md:text-3xl font-bold font-heading mb-2">
                                            Get Your <span className="text-primary">Personalized Seo</span> Action Plan!
                                        </h2>
                                        <p className="text-gray-400 mb-8 text-sm">
                                            The Sooner Your Website Ranks the Sooner You Will be Booking Appointments Without having to Lift a Finger!
                                        </p>

                                        <form onSubmit={handleSubmit} className="space-y-3 text-left">
                                            <div>
                                                <label htmlFor="popup-name" className="block text-xs font-medium text-gray-500 mb-1 ml-1">Full Name</label>
                                                <input
                                                    type="text"
                                                    id="popup-name"
                                                    required
                                                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/40 transition-all text-sm"
                                                    placeholder="John Doe"
                                                    value={formState.name}
                                                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="popup-email" className="block text-xs font-medium text-gray-500 mb-1 ml-1">Work Email</label>
                                                <input
                                                    type="email"
                                                    id="popup-email"
                                                    required
                                                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/40 transition-all text-sm"
                                                    placeholder="john@company.com"
                                                    value={formState.email}
                                                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                                />
                                            </div>
                                            <div className="relative">
                                                <label htmlFor="popup-website" className="block text-xs font-medium text-gray-500 mb-1 ml-1">Website URL</label>
                                                <Globe className="absolute left-3 bottom-3.5 w-4 h-4 text-gray-500" />
                                                <input
                                                    type="url"
                                                    id="popup-website"
                                                    required
                                                    className="w-full pl-9 pr-4 bg-black/50 border border-white/10 rounded-xl py-3 text-white placeholder-gray-600 focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/40 transition-all text-sm"
                                                    placeholder="https://yourwebsite.com"
                                                    value={formState.websiteUrl}
                                                    onChange={(e) => setFormState({ ...formState, websiteUrl: e.target.value })}
                                                />
                                            </div>

                                            <button
                                                type="submit"
                                                disabled={isSubmitting}
                                                className="w-full flex items-center justify-center gap-2 bg-white text-black font-bold rounded-xl py-3 hover:bg-gray-200 transition-colors disabled:opacity-70 disabled:cursor-not-allowed mt-1 shadow-[0_0_25px_-5px_rgba(56,189,248,0.5)] hover:shadow-[0_0_35px_-8px_rgba(56,189,248,0.7)]"
                                            >
                                                {isSubmitting ? 'Processing...' : 'Get Instant Access'}
                                            </button>
                                        </form>

                                        <p className="mt-5 text-center text-3xl font-extrabold tracking-widest text-primary">
                                            FREE
                                        </p>
                                    </>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default PopupForm;
