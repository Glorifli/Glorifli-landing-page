"use client";

import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
    {
        quote: "I knew I could help more clients, but they couldn't find me. Glorifli changed that. Now, when people search for services in my area, my business is the first thing they see. I'm finally serving the clients who need me most.",
        author: "Sarah Jenkins",
        role: "Business Owner",
        image: "/testimonials/sarah.png"
    },
    {
        quote: "Our old website was confusing and didn't convert. Glorifli's clear messaging and automated booking system completely turned it around. We've seen a 3x increase in new client appointments since launching.",
        author: "Michael Ross",
        role: "Service Provider",
        image: "/testimonials/ross.png"
    },
    {
        quote: "My clients used to express a lot of uncertainty about whether I could actually help them or not. But Glorifli's content strategy educated my clients before they even walked in. The authority we've built allows us to focus on service rather than convincing clients of our value.",
        author: "Elena Rodriguez",
        role: "Agency Founder",
        image: "/testimonials/rodriguez.png"
    }
];

const ProofOfConcept: React.FC = () => {
    return (
        <section id="proof" className="py-24 px-6 bg-background relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute right-0 top-1/4 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold font-heading text-white">
                        Trusted By <span className="text-primary">Business Owners</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
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
                            className="glass-panel p-8 rounded-3xl border border-white/5 flex flex-col cursor-default"
                        >
                            <div className="mb-6">
                                <svg className="w-8 h-8 text-primary/40 mb-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" />
                                </svg>
                                <p className="text-gray-200 leading-relaxed text-lg">"{testimonial.quote}"</p>
                            </div>
                            <div className="mt-auto flex items-center gap-4 pt-6 border-t border-white/5">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.author}
                                    className="w-12 h-12 rounded-full border border-white/10"
                                />
                                <div>
                                    <h4 className="font-bold text-white text-sm">{testimonial.author}</h4>
                                    <p className="text-gray-400 text-xs">{testimonial.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProofOfConcept;
