import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Check, CheckCircle2, Star } from 'lucide-react';

export const metadata: Metadata = {
    title: "Autonomous Revenue Engine | Glorifli — Complete Client Acquisition System",
    description: "Glorifli's Autonomous Revenue Engine combines a custom website + SEO/AEO system. $1,256.50 setup, SEO/AEO free until 10 leads booked. $8,900+ in market value. Up to 5,869% ROI.",
    openGraph: {
        title: "Glorifli's Autonomous Revenue Engine — $8,900+ Value, $1,256.50 to Start",
        description: "The complete client acquisition system: custom website + AEO/SEO + GBP + citations. 10 leads in 60 days or we work free. Market value $8,900+.",
        url: "https://glorifli.com/services/autonomous-revenue-engine",
        type: "website",
        images: ["https://glorifli.com/images/blog/featured-hero.png"],
    },
    alternates: { canonical: "https://glorifli.com/services/autonomous-revenue-engine" },
};

const features = [
    { title: "Custom High-Converting Website", desc: "Fully branded, mobile-optimized site built for conversions — not just aesthetics." },
    { title: "Conversion Copywriting Done-For-You", desc: "Professional copy written to convert visitors into booked leads. Zero writing required from you." },
    { title: "Integrated Booking System", desc: "Frictionless booking that captures leads 24/7, including after business hours." },
    { title: "60 Days of Free Blog Content", desc: "16 AEO/SEO blog posts at launch to kickstart organic traffic immediately." },
    { title: "8 SEO/AEO Blog Posts Monthly", desc: "Ongoing content that targets high-intent queries and builds your authority every month." },
    { title: "Google Business Profile Optimization", desc: "Full GBP setup and sync so you dominate local map packs and Google AI Local answers." },
    { title: "Citation Network Building", desc: "50+ verified directory listings — a critical trust signal for AI recommendation engines." },
    { title: "AI Search Optimization", desc: "Schema markup and structured content so ChatGPT, Perplexity, and Gemini cite your business." },
    { title: "Full Backend Site Optimization", desc: "Technical SEO, Core Web Vitals, structured data, and sitemap management." },
    { title: "Priority Support", desc: "Direct access for all questions, changes, and optimizations — you're never left waiting." },
    { title: "SEO/AEO Runs Free Until 10 Leads Booked", desc: "The entire $589.50/mo SEO service runs at no cost until we hit your 10-lead target." },
    { title: "No Long-Term Contracts", desc: "Cancel any time after we deliver. We earn your loyalty through results, not fine print." },
];

const valueStack = [
    { item: "Custom High-Converting Website", market: "$3,500" },
    { item: "Full Site Copywriting", market: "$800" },
    { item: "Booking System Integration", market: "$400" },
    { item: "SEO/AEO Blog Service (60 days free)", market: "$2,500" },
    { item: "Google Business Profile Optimization", market: "$500" },
    { item: "AI Search (AEO) Infrastructure Setup", market: "$1,200" },
];

const roiRows = [
    { industry: "Home Remodeling", avg: "$25,000", revenue: "$75,000", roi: "5,869%", note: "3 closes from 10 leads" },
    { industry: "Roofing", avg: "$11,500", revenue: "$34,500", roi: "2,646%", note: "3 closes from 10 leads" },
    { industry: "HVAC", avg: "$8,500", revenue: "$25,500", roi: "1,929%", note: "3 closes from 10 leads" },
    { industry: "Landscaping", avg: "$4,500", revenue: "$13,500", roi: "974%", note: "3 closes from 10 leads" },
    { industry: "Plumbing", avg: "$1,800", revenue: "$5,400", roi: "330%", note: "3 closes from 10 leads" },
];

const faqs = [
    { q: "What does the Autonomous Revenue Engine include?", a: "Everything: custom website with copywriting and booking system, 8 monthly SEO/AEO blog posts, Google Business Profile optimization, citation network building, AI search (AEO) infrastructure, backend SEO, 60 days of free blog content at launch, priority support, and the 10-leads-in-60-days guarantee." },
    { q: "How does the pricing work for the complete package?", a: "You pay $1,256.50 upfront for the website build. The SEO/AEO service ($589.50/month) runs free until we deliver 10 booked leads within 60 days. After the guarantee is satisfied, you choose whether to continue at $589.50/month. No contracts, no hidden fees." },
    { q: "Why is this called the Autonomous Revenue Engine?", a: "Because once built, the system generates and converts leads automatically — without you needing to run ads, post on social media, or manually chase prospects. Your website ranks, gets cited by AI, books appointments, and captures after-hours leads while you sleep." },
    { q: "What happens if we don't hit 10 leads in 60 days?", a: "The SEO/AEO service keeps running at no charge until we deliver 10 booked leads. The guarantee never expires. There is no scenario in which you pay and don't get results." },
    { q: "How is a $8,900+ value delivered for $1,256.50?", a: "We can offer this because we're betting on our own system. The setup fee covers our build cost. The SEO/AEO portion runs free during the guarantee period. If we deliver (and we do), you become a long-term client at $589.50/month — which is where we build our business. You take zero risk." },
];

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://glorifli.com/services/autonomous-revenue-engine#service",
    name: "Autonomous Revenue Generating Engine",
    provider: { "@id": "https://glorifli.com/#organization" },
    description: "Complete client acquisition system: custom website + ongoing SEO/AEO optimization. $1,256.50 setup, SEO/AEO free until 10 leads booked in 60 days, then $589.50/month. Total market value $8,900+.",
    offers: { "@type": "Offer", price: "1256.50", priceCurrency: "USD" },
    url: "https://glorifli.com/services/autonomous-revenue-engine",
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://glorifli.com" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://glorifli.com/services" },
        { "@type": "ListItem", position: 3, name: "Autonomous Revenue Engine", item: "https://glorifli.com/services/autonomous-revenue-engine" },
    ],
};

export default function ARGEPage() {
    return (
        <div className="bg-black min-h-screen text-white">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

            <div className="pt-28 px-6 max-w-4xl mx-auto">
                <nav className="text-sm text-gray-600 mb-8">
                    <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                    <span className="mx-2">/</span>
                    <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
                    <span className="mx-2">/</span>
                    <span className="text-gray-400">Autonomous Revenue Engine</span>
                </nav>
            </div>

            <div className="max-w-4xl mx-auto px-6 pb-24">

                {/* Hero */}
                <section className="mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
                        <Star className="w-3.5 h-3.5 text-primary" />
                        <span className="text-xs font-semibold text-primary uppercase tracking-widest">Best Value — $8,900+ Market Value</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold font-heading tracking-tighter leading-tight mb-6">
                        What Is Glorifli's{' '}
                        <span className="text-primary">Autonomous Revenue Generating Engine?</span>
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-4 border-l-4 border-primary pl-5">
                        The Autonomous Revenue Generating Engine is Glorifli's complete client acquisition system — a custom <Link href="/services/custom-website" className="text-white hover:text-primary transition-colors underline underline-offset-2">high-converting website</Link> combined with ongoing <Link href="/services/seo-aeo-optimization" className="text-white hover:text-primary transition-colors underline underline-offset-2">SEO/AEO optimization</Link>, Google Business Profile management, citation building, and AI search targeting. It generates and converts leads automatically, 24/7. Total market value: <strong className="text-white">$8,900+.</strong> Setup: <strong className="text-white">$1,256.50.</strong>
                    </p>
                    <div className="flex flex-wrap gap-4 mt-8">
                        <Link href="/#calendar" className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-black font-bold rounded-full hover:bg-white transition-all duration-300 shadow-lg shadow-primary/20">
                            Book a Free Strategy Call <ArrowRight className="w-4 h-4" />
                        </Link>
                        <Link href="/services" className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/5 border border-white/10 text-white font-bold rounded-full hover:bg-white/10 transition-all duration-300">
                            Compare All Services
                        </Link>
                    </div>
                </section>

                {/* Features */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold text-white font-heading mb-8">What Does the Autonomous Revenue Engine Include?</h2>
                    <div className="grid md:grid-cols-2 gap-5">
                        {features.map((f) => (
                            <div key={f.title} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-primary/30 transition-colors">
                                <div className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <div>
                                        <h3 className="font-bold text-white mb-1">{f.title}</h3>
                                        <p className="text-sm text-gray-400">{f.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Value Stack */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold text-white font-heading mb-4">Why Is the Autonomous Revenue Engine Worth $8,900+?</h2>
                    <p className="text-gray-400 mb-8 leading-relaxed">Every deliverable has a clear market rate. Here's what you would pay to assemble this system by hiring separately — and what you actually invest with Glorifli.</p>
                    <div className="bg-white/5 border border-white/10 rounded-3xl overflow-x-auto">
                        <table className="w-full min-w-[500px] text-sm">
                            <thead>
                                <tr className="border-b border-white/10">
                                    <th className="text-left px-6 py-4 text-gray-400 font-medium">Deliverable</th>
                                    <th className="text-right px-6 py-4 text-gray-400 font-medium">Market Rate</th>
                                </tr>
                            </thead>
                            <tbody>
                                {valueStack.map((row, i) => (
                                    <tr key={i} className="border-b border-white/5 hover:bg-white/3 transition-colors">
                                        <td className="px-6 py-4 text-gray-300">{row.item}</td>
                                        <td className="px-6 py-4 text-right text-primary font-bold">{row.market}</td>
                                    </tr>
                                ))}
                                <tr className="bg-primary/10 border-t-2 border-primary/30">
                                    <td className="px-6 py-4 font-bold text-white">Total Market Value</td>
                                    <td className="px-6 py-4 text-right font-bold text-primary text-lg">$8,900+</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-5 text-gray-400">Your Setup Investment</td>
                                    <td className="px-6 py-5 text-right font-bold text-white text-xl">$1,256.50</td>
                                </tr>
                                <tr className="border-t border-white/5">
                                    <td className="px-6 py-4 text-gray-400">SEO/AEO Service (ongoing)</td>
                                    <td className="px-6 py-4 text-right font-bold text-white">FREE until 10 leads, then $589.50/mo</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* ROI */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold text-white font-heading mb-4">What ROI Does the Revenue Engine Generate by Industry?</h2>
                    <p className="text-gray-400 mb-3 leading-relaxed">SEO/AEO leads close at 25–45% because prospects searched for exactly what you offer, in your city, right now. Closing just 3 of your guaranteed 10 leads returns your investment many times over.</p>
                    <p className="text-xs text-gray-600 mb-8">Based on 30% close rate (conservative floor). Sources: Modernize, Angi, HomeGuide, Quicken Loans (2025–2026).</p>
                    <div className="overflow-x-auto rounded-3xl border border-white/10">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="border-b border-white/10 bg-white/5">
                                    <th className="text-left px-6 py-4 text-gray-400 font-medium">Industry</th>
                                    <th className="text-right px-6 py-4 text-gray-400 font-medium">Avg Job</th>
                                    <th className="text-right px-6 py-4 text-gray-400 font-medium">3 Closes Revenue</th>
                                    <th className="text-right px-6 py-4 text-gray-400 font-medium">ROI vs $1,256</th>
                                </tr>
                            </thead>
                            <tbody>
                                {roiRows.map((row, i) => (
                                    <tr key={i} className="border-b border-white/5 hover:bg-white/3 transition-colors">
                                        <td className="px-6 py-4 font-medium text-white">{row.industry}</td>
                                        <td className="px-6 py-4 text-right text-gray-400">{row.avg}</td>
                                        <td className="px-6 py-4 text-right font-bold text-white">{row.revenue}</td>
                                        <td className="px-6 py-4 text-right font-bold text-primary">{row.roi}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* FAQ */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold text-white font-heading mb-8 text-center">Frequently Asked Questions — Autonomous Revenue Engine</h2>
                    <div className="space-y-4">
                        {faqs.map((faq, i) => (
                            <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-primary/30 transition-colors">
                                <h3 className="font-bold text-white mb-3">{faq.q}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA */}
                <section className="bg-gradient-to-br from-primary/20 via-black to-black border border-primary/30 rounded-3xl p-10 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full pointer-events-none" />
                    <div className="relative z-10">
                        <Star className="w-8 h-8 text-primary mx-auto mb-4" />
                        <h2 className="text-3xl font-bold mb-4 text-white font-heading">Build Your Autonomous Revenue Engine Today</h2>
                        <p className="text-gray-400 mb-6 max-w-lg mx-auto">$1,256.50 setup. $8,900+ in value. 10 leads in 60 days or we work free. The math isn't complicated — it's just hard to believe until you see it working.</p>
                        <Link href="/#calendar" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-black font-bold rounded-full hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/20">
                            Book Your Free Strategy Call <ArrowRight className="w-4 h-4" />
                        </Link>
                        <div className="flex flex-wrap justify-center gap-6 mt-6 text-sm text-gray-500">
                            {["$8,900+ Value", "10 Leads in 60 Days", "SEO/AEO Free Until Results", "No Contracts"].map((t) => (
                                <span key={t} className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" />{t}</span>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
