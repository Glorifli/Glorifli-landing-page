import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import LeadMagnetForm from '@/components/LeadMagnetForm';
import { CheckCircle2 } from 'lucide-react';
import GenericFAQ, { FAQItem } from '@/components/GenericFAQ';

export const metadata: Metadata = {
    title: 'Free SEO Services & Action Plan | Glorifli',
    description: 'Get a custom SEO Action Plan and 2 Free SEO Optimized Blog Posts designed specifically for your local business.',
};

const servicesFaqs: FAQItem[] = [
    {
        question: "What exactly is included in the SEO Action plan?",
        answer: (
            <>
                You will receive a comprehensive technical action plan for your website, a targeted list of local search terms you are currently missing, and <Link href="/blog" className="text-primary hover:text-primary-light transition-colors">two free custom blog posts</Link> fully optimized and ready to publish.
            </>
        ),
        schemaAnswer: "You will receive a comprehensive technical action plan for your website, a targeted list of local search terms you are currently missing, and two free custom blog posts fully optimized and ready to publish."
    },
    {
        question: "How long does it take to receive my plan?",
        answer: "Because we do not use automated generic reports, a real human will create your action plan and craft the blog content. This usually takes between 24 and 48 business hours."
    },
    {
        question: "Is there really no catch?",
        answer: (
            <>
                No catch. We provide this upfront value because we know that when business owners see our quality of work, a percentage of them will hire us for our full <Link href="/services" className="text-primary hover:text-primary-light transition-colors">Autonomous Revenue Engine</Link> service. But there is absolutely zero obligation to buy anything.
            </>
        ),
        schemaAnswer: "No catch. We provide this upfront value because we know that when business owners see our quality of work, a percentage of them will hire us for our full Autonomous Revenue Engine service. But there is absolutely zero obligation to buy anything."
    },
    {
        question: "What if I want Glorifli to implement the plan for me?",
        answer: (
            <>
                If you love the plan and want us to take over your monthly SEO completely on autopilot, you can review our <Link href="/services/seo-aeo-optimization" className="text-primary hover:text-primary-light transition-colors">SEO/AEO Optimization Service</Link> or book a call with us to get started!
            </>
        ),
        schemaAnswer: "If you love the plan and want us to take over your monthly SEO completely on autopilot, you can review our SEO/AEO Optimization Service or book a call with us to get started!"
    }
];

export default function FreeServicesPage() {
    return (
        <div className="bg-black min-h-screen text-white pt-32 pb-24 px-6">
            <div className="max-w-4xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
                    <span className="text-xs font-semibold text-primary uppercase tracking-widest">Free Services</span>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">
                    Get Your Free <span className="text-primary">SEO Action Plan</span>
                </h1>
                <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
                    Stop guessing why your phone isn't ringing. We'll analyze your site and deliver a step-by-step roadmap to outrank your competitors, plus write 2 free blog posts to get you started.
                </p>

                <div className="grid md:grid-cols-2 gap-12 items-center text-left mb-16">
                    <div>
                        <h2 className="text-2xl font-bold mb-6 font-heading">What You'll Receive:</h2>
                        <ul className="space-y-4">
                            <li className="flex gap-3">
                                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                                <span className="text-gray-300">A comprehensive SEO & AEO action plan identifying exactly why you're losing leads to competitors.</span>
                            </li>
                            <li className="flex gap-3">
                                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                                <span className="text-gray-300">A targeted list of local search terms and high-intent keywords missing from your site.</span>
                            </li>
                            <li className="flex gap-3">
                                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                                <span className="text-gray-300"><strong className="text-white">2 Free Custom Blog Posts:</strong> Fully optimized, written specifically for your business, ready to publish.</span>
                            </li>
                        </ul>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
                        <LeadMagnetForm delay={0.2} />
                    </div>
                </div>

                <div className="mt-24 border-t border-white/10 pt-16">
                    <GenericFAQ faqs={servicesFaqs} className="" title="Free Services FAQ" />
                </div>
            </div>
        </div>
    );
}
