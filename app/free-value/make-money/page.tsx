import React from 'react';
import { Metadata } from 'next';
import { ArrowRight, DollarSign, Users, Award } from 'lucide-react';
import Link from 'next/link';
import GenericFAQ, { FAQItem } from '@/components/GenericFAQ';

export const metadata: Metadata = {
    title: 'Affiliate & Remote Sales Partner Program | Glorifli',
    description: 'Join Glorifli\'s Partner Program. We offer an ongoing $100 monthly commission for every active client you bring in.',
};

const affiliateFaqs: FAQItem[] = [
    {
        question: "When and how do I get paid my commission?",
        answer: (
            <>
                You get paid your $100 commission on the exact same day that the client makes their monthly payment to us. So if they pay their retainer on Tuesday, your $100 is sent via ACH or wire on that very same Tuesday. Not sure if sales is right for you? Read <Link href="/blog/why-contractor-business-not-getting-online-leads" className="text-primary hover:underline transition-colors">why local businesses need help with online leads</Link>. Ready to start? <Link href="/#calendar" className="text-primary font-bold hover:underline">Book your interview call here</Link>.
            </>
        )
    },
    {
        question: "How long does the $100 monthly commission last?",
        answer: (
            <>
                It lasts for the lifetime of the client. As long as they keep paying for our <Link href="/services" className="text-primary hover:text-primary-light transition-colors">monthly SEO/AEO retainer</Link>, you keep getting your $100 every single month—completely passively. Discover more about ongoing value in <Link href="/blog/how-much-does-hvac-marketing-cost" className="text-primary hover:underline transition-colors">how much marketing costs</Link>. Let's get you set up: <Link href="/#calendar" className="text-primary font-bold hover:underline">book a call today</Link>.
            </>
        ),
        schemaAnswer: "It lasts for the lifetime of the client. As long as they keep paying for our monthly SEO/AEO retainer, you keep getting your $100 every single month—completely passively. Discover more about ongoing value in how much marketing costs. Let's get you set up: book a call today."
    },
    {
        question: "Do I need to fulfill any of the actual services?",
        answer: (
            <>
                Absolutely not. Your only job is to bring the client to the door. Once they sign and pay, my team handles 100% of the website building, SEO optimization, and client communication. Our <Link href="/faq" className="text-primary hover:text-primary-light transition-colors">60-day performance guarantee</Link> handles all objections for you. Learn about our fulfillment strategy in <Link href="/blog/what-is-aeo-for-home-service-businesses" className="text-primary hover:underline transition-colors">what AEO means for service businesses</Link>. <Link href="/#calendar" className="text-primary font-bold hover:underline">Book a call</Link> to join the team.
            </>
        ),
        schemaAnswer: "Absolutely not. Your only job is to bring the client to the door. Once they sign and pay, my team handles 100% of the website building, SEO optimization, and client communication. Our 60-day performance guarantee handles all objections for you. Learn about our fulfillment strategy in what AEO means for service businesses. Book a call to join the team."
    },
    {
        question: "How do I start sending you potential clients today?",
        answer: (
            <>
                Simply book a quick 15-minute onboarding call via our <Link href="/#calendar" className="text-primary hover:text-primary-light transition-colors">strategy calendar</Link>. We will get you set up with your tracking system and give you all the promotional materials you need to start immediately. Curious how we close deals? Check out <Link href="/blog/whats-the-best-way-to-get-more-appointments-booked" className="text-primary hover:underline transition-colors">how to get more appointments booked</Link>. <Link href="/#calendar" className="text-primary font-bold hover:underline">Secure your interview slot now</Link>.
            </>
        ),
        schemaAnswer: "Simply book a quick 15-minute onboarding call via our strategy calendar. We will get you set up with your tracking system and give you all the promotional materials you need to start immediately. Curious how we close deals? Check out how to get more appointments booked. Secure your interview slot now."
    }
];

export default function MakeMoneyPage() {
    return (
        <div className="bg-black min-h-screen text-white pt-32 pb-24 px-6">
            <div className="max-w-4xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
                    <span className="text-xs font-semibold text-primary uppercase tracking-widest">Partner Program</span>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">
                    Make Money With Us: <span className="text-primary">$100 Monthly Commission</span>
                </h1>
                <p className="text-lg text-gray-400 mb-6 max-w-2xl mx-auto">
                    Whether you're an affiliate marketer, a B2B agency looking for a white-label partner, or a remote sales contractor—bring us a client that closes, and you receive $100 every month they are with us. Forever.
                </p>
                <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
                    This is a great opportunity to gain sales experience, make money in your free time, or completely replace your income. There is absolutely NO fulfillment required on your end. We even provide you with a proven cold call and cold email template to begin generating leads immediately. Once you pass a brief interview and sign our contract, boom—you can start today.
                </p>

                <div className="grid md:grid-cols-3 gap-6 text-left mb-16">
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                        <DollarSign className="w-8 h-8 text-primary mb-4" />
                        <h3 className="font-bold text-lg mb-2">Monthly Payouts</h3>
                        <p className="text-gray-400 text-sm">For every client you bring in that stays with us, you get $100 every single month they pay their retainer. It adds up fast.</p>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                        <Award className="w-8 h-8 text-primary mb-4" />
                        <h3 className="font-bold text-lg mb-2">Lifetime Attribution</h3>
                        <p className="text-gray-400 text-sm">As long as the client stays with Glorifli and keeps paying their monthly recurring fee, you keep getting paid your $100 every month.</p>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                        <Users className="w-8 h-8 text-primary mb-4" />
                        <h3 className="font-bold text-lg mb-2">Easy to Sell</h3>
                        <p className="text-gray-400 text-sm">We guarantee 5 booked leads in 60 days or we work for free. You're selling an irresistible, risk-free offer to business owners.</p>
                    </div>
                </div>

                <div className="bg-gradient-to-br from-primary/20 to-black border border-primary/30 rounded-3xl p-10 md:p-14 text-center">
                    <h2 className="text-3xl font-bold mb-4 font-heading">Ready to Become a Partner?</h2>
                    <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                        All partners must first pass a brief interview. Book your calendar slot below, and if it's a fit, we'll set you up with your contract, templates, and affiliate tracking tools.
                    </p>
                    <div className="flex flex-col items-center">
                        <Link
                            href="/#calendar"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-black font-bold rounded-full hover:bg-white transition-all duration-300 shadow-[0_0_20px_-4px_rgba(56,189,248,0.3)]"
                        >
                            Schedule Your Interview <ArrowRight className="w-4 h-4" />
                        </Link>
                        
                    </div>
                </div>

                <div className="mt-24 border-t border-white/10 pt-16">
                    <GenericFAQ faqs={affiliateFaqs} className="" title="Partner Program FAQ" />
                </div>
            </div>
        </div>
    );
}
