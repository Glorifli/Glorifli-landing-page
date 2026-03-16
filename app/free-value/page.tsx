import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import LeadMagnetForm from '@/components/LeadMagnetForm';

export const metadata: Metadata = {
    title: 'Free Value & Resources | Glorifli',
    description: 'Get free SEO Action Plans, Free Blog Content, and join our lifetime commission Affiliate Program. We build goodwill by giving value upfront.',
};

export default function FreeValueHubPage() {
    return (
        <div className="bg-black min-h-screen text-white pt-32 pb-24 px-6">
            <div className="max-w-5xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <span className="text-xs font-semibold text-primary uppercase tracking-widest">Free Value</span>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">
                    Free Resources to Grow Your <span className="text-primary">Local Business</span>
                </h1>
                <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-16">
                    We believe in giving upfront value to build trust. Whether you need a custom SEO action plan, free blog content, or want to partner with us for commissions, you're in the right place.
                </p>

                <div className="mb-20">
                    <LeadMagnetForm delay={0.1} />
                </div>

                <div className="grid md:grid-cols-3 gap-6 text-left">
                    <Link href="/free-value/free-services" className="group bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-primary/50 transition-all duration-300">
                        <h3 className="text-2xl font-bold text-white mb-3 font-heading group-hover:text-primary transition-colors">Free Services</h3>
                        <p className="text-gray-400 mb-6 flex-grow">Get your free custom SEO Action Plan + 2 Free SEO Optimized Blog Posts designed specifically for your local business.</p>
                        <span className="inline-flex items-center gap-2 text-primary font-bold">Get Started <ArrowRight className="w-4 h-4" /></span>
                    </Link>

                    <Link href="/free-value/free-blog-content" className="group bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-primary/50 transition-all duration-300">
                        <h3 className="text-2xl font-bold text-white mb-3 font-heading group-hover:text-primary transition-colors">Free SEO/AEO Blog Content</h3>
                        <p className="text-gray-400 mb-6 flex-grow">We'll write incredibly high-quality, high-ranking SEO content for your site for free, in exchange for a simple backlink to Glorifli.</p>
                        <span className="inline-flex items-center gap-2 text-primary font-bold">Request Content <ArrowRight className="w-4 h-4" /></span>
                    </Link>

                    <Link href="/free-value/make-money" className="group bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-primary/50 transition-all duration-300">
                        <h3 className="text-2xl font-bold text-white mb-3 font-heading group-hover:text-primary transition-colors">Make Money With Us Here!</h3>
                        <p className="text-gray-400 mb-6 flex-grow">Join our remote sales or affiliate program. We offer a true 20% lifetime commission on any job you bring in that closes.</p>
                        <span className="inline-flex items-center gap-2 text-primary font-bold">Apply Now <ArrowRight className="w-4 h-4" /></span>
                    </Link>
                </div>
            </div>
        </div>
    );
}
