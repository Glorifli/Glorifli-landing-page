import React from 'react';
import { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Free SEO/AEO Blog Content | Glorifli',
    description: 'Get free, high-quality SEO/AEO optimized blog content for your local service business in exchange for a simple backlink.',
};

export default function FreeBlogContentPage() {
    return (
        <div className="bg-black min-h-screen text-white pt-32 pb-24 px-6">
            <div className="max-w-4xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
                    <span className="text-xs font-semibold text-primary uppercase tracking-widest">Backlink Exchange Program</span>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">
                    Free High-Ranking Content For Your Site
                </h1>
                <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
                    We'll write incredibly high-quality, high-ranking SEO/AEO content for your site for free. The only requirement? A simple backlink to Glorifli.
                </p>

                <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 text-left mb-16">
                    <h2 className="text-2xl font-bold mb-6 font-heading text-primary">How the Program Works</h2>
                    <ol className="space-y-6">
                        <li className="flex gap-4">
                            <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold flex-shrink-0">1</span>
                            <div>
                                <h3 className="font-bold text-white text-lg">You Request Content</h3>
                                <p className="text-gray-400 mt-1">Tell us your niche, your target city, and the specific service you want to rank for.</p>
                            </div>
                        </li>
                        <li className="flex gap-4">
                            <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold flex-shrink-0">2</span>
                            <div>
                                <h3 className="font-bold text-white text-lg">We Research & Write</h3>
                                <p className="text-gray-400 mt-1">Our team researches the keyword and writes a comprehensive, SEO-optimized and AEO-ready blog post designed to capture leads.</p>
                            </div>
                        </li>
                        <li className="flex gap-4">
                            <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold flex-shrink-0">3</span>
                            <div>
                                <h3 className="font-bold text-white text-lg">You Publish & We Link</h3>
                                <p className="text-gray-400 mt-1">You publish the blog on your site (keeping all the traffic and leads it generates). In return, you simply include one do-follow link back to a relevant Glorifli page within the text.</p>
                            </div>
                        </li>
                    </ol>
                </div>

                <div className="text-center">
                    <h3 className="text-xl font-bold mb-4">Interested in a free blog post?</h3>
                    <a href="mailto:contact@glorifli.com?subject=Free%20Blog%20Content%20Exchange" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-black font-bold rounded-full hover:bg-white transition-all duration-300 shadow-[0_0_20px_-4px_rgba(56,189,248,0.3)]">
                        Email Us to Start <ArrowRight className="w-4 h-4" />
                    </a>
                </div>
            </div>
        </div>
    );
}
