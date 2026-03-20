import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import LeadMagnetForm from '@/components/LeadMagnetForm';
import GenericFAQ, { FAQItem } from '@/components/GenericFAQ';

export const metadata: Metadata = {
    title: 'Free Value & Resources | Glorifli',
    description: 'Get a free SEO Action Plan and join our lifetime commission Affiliate Program. We build goodwill by giving value upfront.',
};

const hubFaqs: FAQItem[] = [
    {
        question: "What is the Free Value Hub?",
        answer: (
            <>
                The Free Value Hub is our way of building absolute trust before you pay us a dime. We offer resources like a free SEO Action Plan and a partner program to help your <Link href="/services" className="text-primary hover:text-primary-light transition-colors">local service business</Link> grow immediately. Read our philosophy in <Link href="/blog/why-your-business-growth-has-stalled" className="text-primary hover:underline transition-colors">why business growth stalls</Link>. Let's chat about your goals: <Link href="/#calendar" className="text-primary font-bold hover:underline">book a call</Link> (plus, we'll optimize your Google My Business profile for free).
            </>
        ),
        schemaAnswer: "The Free Value Hub is our way of building absolute trust before you pay us a dime. We offer resources like a free SEO Action Plan and a partner program to help your local service business grow immediately. Read our philosophy in why business growth stalls. Let's chat about your goals: book a call."
    },
    {
        question: "How do I claim my free SEO Action plan?",
        answer: (
            <>
                Simply fill out the short form at the <Link href="/free-value/free-services" className="text-primary hover:text-primary-light transition-colors">top of this page</Link> with your website, name, and email. Our team will manually review your site and send you a personalized action plan within 24-48 hours. See what we look for by reading <Link href="/blog/why-your-phone-isnt-ringing" className="text-primary hover:underline transition-colors">why your phone isn't ringing</Link>. Want to skip the wait? <Link href="/#calendar" className="text-primary font-bold hover:underline">Book a strategy call now (plus, we'll optimize your Google My Business profile for free)</Link> (plus, we'll optimize your Google My Business profile for free).
            </>
        ),
        schemaAnswer: "Simply fill out the short form at the top of this page with your website, name, and email. Our team will manually review your site and send you a personalized action plan within 24-48 hours. See what we look for by reading why your phone isn't ringing. Want to skip the wait? Book a strategy call now."
    },
    {
        question: "Where can I find more information about your paid services?",
        answer: (
            <>
                If you are ready to let us implement these strategies for you on autopilot, you can visit our <Link href="/services" className="text-primary hover:text-primary-light transition-colors">Services page</Link> to see our full, risk-free guarantee. You can also visit our <Link href="/faq" className="text-primary hover:text-primary-light transition-colors">main FAQ page</Link> for details about timelines and pricing. Then read <Link href="/blog/the-blue-link-era-is-dead" className="text-primary hover:underline transition-colors">why the blue link era is dead</Link>. <Link href="/#calendar" className="text-primary font-bold hover:underline">Book a free consultation here (plus, we'll optimize your Google My Business profile for free)</Link> (plus, we'll optimize your Google My Business profile for free).
            </>
        ),
        schemaAnswer: "If you are ready to let us implement these strategies for you on autopilot, you can visit our Services page to see our full, risk-free guarantee. You can also visit our main FAQ page for details about timelines and pricing. Then read why the blue link era is dead. Book a free consultation here."
    },
    {
        question: "How does the backlink exchange program work?",
        answer: (
            <>
                If you are looking to exchange backlinks with Glorifli to boost your own Domain Authority, we occasionally partner with relevant service businesses for natural link placements. Have questions? <Link href="/#calendar" className="text-primary font-bold hover:underline">Book a call</Link> (plus, we'll optimize your Google My Business profile for free).
            </>
        ),
        schemaAnswer: "If you are looking to exchange backlinks with Glorifli to boost your own Domain Authority, we occasionally partner with relevant service businesses for natural link placements. Have questions? Book a call."
    }
];

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
                    We believe in giving upfront value to build trust. Whether you need a custom SEO action plan or want to partner with us for commissions, you're in the right place.
                </p>

                <div className="mb-20">
                    <LeadMagnetForm delay={0.1} />
                </div>

                <div className="grid md:grid-cols-2 gap-6 text-left">
                    <Link href="/free-value/free-services" className="group bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-primary/50 transition-all duration-300">
                        <h3 className="text-2xl font-bold text-white mb-3 font-heading group-hover:text-primary transition-colors">Free Services</h3>
                        <p className="text-gray-400 mb-6 flex-grow">Get your free custom SEO Action Plan and we'll optimize your Google My Business profile to get more views.</p>
                        <span className="inline-flex items-center gap-2 text-primary font-bold">Get Started <ArrowRight className="w-4 h-4" /></span>
                    </Link>

                    {/* Partner Program */}
                    <Link href="/free-value/make-money" className="group bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-primary/50 transition-all duration-300">
                        <h3 className="text-2xl font-bold text-white mb-3 font-heading group-hover:text-primary transition-colors">Make Money With Us Here!</h3>
                        <p className="text-gray-400 mb-6 flex-grow">Join our remote sales or affiliate program. We offer a true 20% lifetime commission on any job you bring in that closes.</p>
                        <span className="inline-flex items-center gap-2 text-primary font-bold">Apply Now <ArrowRight className="w-4 h-4" /></span>
                    </Link>
                </div>

                <div className="max-w-4xl mx-auto mt-24 border-t border-white/10 pt-16">
                    <GenericFAQ faqs={hubFaqs} className="" title="Free Value Hub FAQ" />
                </div>
            </div>
        </div>
    );
}
