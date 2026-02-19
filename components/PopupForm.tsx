"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const PopupForm: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [formState, setFormState] = useState({
        name: '',
        email: ''
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
                console.error('Submission failed');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
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
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative w-full max-w-md bg-surface border border-white/10 rounded-3xl p-8 shadow-2xl overflow-hidden"
                    >
                        {/* Glass effect background */}
                        <div className="absolute inset-0 bg-white/5 pointer-events-none" />

                        {/* Close Button */}
                        <button
                            onClick={handleClose}
                            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                        >
                            <X size={24} />
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
                                        Get Your <span className="text-primary">Free Audit</span>
                                    </h2>
                                    <p className="text-gray-400 mb-8 text-sm">
                                        Join our list to receive exclusive insights and a free audit of your current digital presence.
                                    </p>

                                    <form onSubmit={handleSubmit} className="space-y-4 text-left">
                                        <div>
                                            <label htmlFor="popup-name" className="block text-xs font-medium text-gray-400 mb-1 ml-1">Full Name</label>
                                            <input
                                                type="text"
                                                id="popup-name"
                                                required
                                                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                                                placeholder="John Doe"
                                                value={formState.name}
                                                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="popup-email" className="block text-xs font-medium text-gray-400 mb-1 ml-1">Work Email</label>
                                            <input
                                                type="email"
                                                id="popup-email"
                                                required
                                                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                                                placeholder="john@company.com"
                                                value={formState.email}
                                                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full bg-white text-black font-bold rounded-xl py-3 hover:bg-gray-200 transition-colors disabled:opacity-70 disabled:cursor-not-allowed mt-4"
                                        >
                                            {isSubmitting ? 'Processing...' : 'Get Instant Access'}
                                        </button>
                                    </form>
                                </>
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default PopupForm;
