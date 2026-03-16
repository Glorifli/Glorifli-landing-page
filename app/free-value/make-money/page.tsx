import React from 'react';
import { Metadata } from 'next';
import { ArrowRight, DollarSign, Users, Award } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Affiliate & Remote Sales Partner Program | Glorifli',
    description: 'Join Glorifli\'s Partner Program. We offer a true 20% lifetime commission on any job you bring in that closes.',
};

export default function MakeMoneyPage() {
    return (
        <div className="bg-black min-h-screen text-white pt-32 pb-24 px-6">
            <div className="max-w-4xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
                    <span className="text-xs font-semibold text-primary uppercase tracking-widest">Partner Program</span>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">
                    Make Money With Us: <span className="text-primary">20% Lifetime Commission</span>
                </h1>
                <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
                    Whether you're an affiliate marketer, a B2B agency looking for a white-label partner, or a remote sales contractor—bring us a client that closes, and you receive 20% of the revenue. Forever.
                </p>

                <div className="grid md:grid-cols-3 gap-6 text-left mb-16">
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                        <DollarSign className="w-8 h-8 text-primary mb-4" />
                        <h3 className="font-bold text-lg mb-2">High-Ticket Payouts</h3>
                        <p className="text-gray-400 text-sm">20% of a $1,256.50 setup fee is $251. 20% of a $589.50 monthly recurring retainer is $117/mo. It adds up fast.</p>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                        <Award className="w-8 h-8 text-primary mb-4" />
                        <h3 className="font-bold text-lg mb-2">Lifetime Attribution</h3>
                        <p className="text-gray-400 text-sm">As long as the client stays with Glorifli and keeps paying their monthly recurring fee, you keep getting paid your 20%.</p>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                        <Users className="w-8 h-8 text-primary mb-4" />
                        <h3 className="font-bold text-lg mb-2">Easy to Sell</h3>
                        <p className="text-gray-400 text-sm">We guarantee 10 booked leads in 60 days or we work for free. You're selling an irresistible, risk-free offer to business owners.</p>
                    </div>
                </div>

                <div className="bg-gradient-to-br from-primary/20 to-black border border-primary/30 rounded-3xl p-10 md:p-14 text-center">
                    <h2 className="text-3xl font-bold mb-4 font-heading">Ready to Become a Partner?</h2>
                    <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                        Book a quick intro call using the calendar link below. We'll set you up with your affiliate tracking tools and promotional materials.
                    </p>
                    <Link
                        href="/#calendar"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-black font-bold rounded-full hover:bg-white transition-all duration-300 shadow-[0_0_20px_-4px_rgba(56,189,248,0.3)]"
                    >
                        Schedule Partner Onboarding <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
