import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import LeadMagnetForm from '@/components/LeadMagnetForm';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import GenericFAQ, { FAQItem } from '@/components/GenericFAQ';

export const metadata: Metadata = {
    title: 'Free SEO Services & Action Plan | Glorifli',
    description: "Get a custom SEO Action Plan and we'll optimize your Google My Business profile to get more views.",
};

const servicesFaqs: FAQItem[] = [
    {
        question: "What exactly is included in the SEO Action plan?",
        answer: (
            <>
                You will receive a comprehensive technical action plan for your website, a targeted list of local search terms you are currently missing, and we'll optimize your Google My Business profile to get more views. See our optimization basics in <Link href="/blog/what-is-aeo-for-home-service-businesses" className="text-primary hover:underline transition-colors">AEO for home service businesses</Link>. Let's get started: <Link href="/#calendar" className="text-primary font-bold hover:underline">book a call today (plus, we'll optimize your Google My Business profile for free)</Link> (plus, we'll optimize your Google My Business profile for free).
            </>
        ),
        schemaAnswer: "You will receive a comprehensive technical action plan for your website, a targeted list of local search terms you are currently missing, and we'll optimize your Google My Business profile to get more views. See our optimization basics in AEO for home service businesses. Let's get started: book a call today."
    },
    {
        question: "How long does it take to receive my plan?",
        answer: (
            <>
                Because we do not use automated generic reports, a real human will create your action plan and optimize your Google My Business profile. This usually takes between 24 and 48 business hours. Want to know what we look at? Read our guide on <Link href="/blog/what-makes-a-high-converting-landing-page" className="text-primary hover:underline transition-colors">what makes a high-converting landing page</Link>. Skip the wait—<Link href="/#calendar" className="text-primary font-bold hover:underline">book your strategy session (plus, we'll optimize your Google My Business profile for free)</Link> (plus, we'll optimize your Google My Business profile for free).
            </>
        )
    },
    {
        question: "Is there really no catch?",
        answer: (
            <>
                No catch. We provide this upfront value because we know that when business owners see our quality of work, a percentage of them will hire us for our full <Link href="/services" className="text-primary hover:text-primary-light transition-colors">Autonomous Revenue Engine</Link> service. But there is absolutely zero obligation to buy anything. Learn about our unique mindset in <Link href="/blog/why-contractor-business-not-getting-online-leads" className="text-primary hover:underline transition-colors">why we give away value</Link>. Have doubts? <Link href="/#calendar" className="text-primary font-bold hover:underline">Book a quick chat (plus, we'll optimize your Google My Business profile for free)</Link> (plus, we'll optimize your Google My Business profile for free).
            </>
        ),
        schemaAnswer: "No catch. We provide this upfront value because we know that when business owners see our quality of work, a percentage of them will hire us for our full Autonomous Revenue Engine service. But there is absolutely zero obligation to buy anything. Learn about our unique mindset in why we give away value. Have doubts? Book a quick chat."
    },
    {
        question: "What if I want Glorifli to implement the plan for me?",
        answer: (
            <>
                If you love the plan and want us to take over your monthly SEO completely on autopilot, you can review our <Link href="/services/autonomous-revenue-engine-for-service-businesses" className="text-primary hover:text-primary-light transition-colors">Autonomous Revenue Engine Service</Link> or book a call with us to get started! Read about <Link href="/blog/how-much-does-hvac-marketing-cost" className="text-primary hover:underline transition-colors">marketing costs for service businesses</Link>. Ready to delegate? <Link href="/#calendar" className="text-primary font-bold hover:underline">Book a call (plus, we'll optimize your Google My Business profile for free)</Link> (plus, we'll optimize your Google My Business profile for free).
            </>
        ),
        schemaAnswer: "If you love the plan and want us to take over your monthly SEO completely on autopilot, you can review our Autonomous Revenue Engine Service or book a call with us to get started! Read about marketing costs for service businesses. Ready to delegate? Book a call."
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
                    Stop guessing why your phone isn't ringing. We'll analyze your site and deliver a step-by-step roadmap to outrank your competitors, plus we'll optimize your Google My Business profile to get more views.
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
                            <li className="flex items-start gap-4">
                                <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                                    <ArrowRight className="w-4 h-4 text-primary" />
                                </div>
                                <span className="text-gray-300"><strong className="text-white">Google My Business Optimization:</strong> We'll optimize your Google My Business profile to get more views and drive more local traffic directly to your phone line.</span>
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
