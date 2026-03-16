import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Check, Star } from 'lucide-react';
import LeadMagnetForm from '@/components/LeadMagnetForm';

export const metadata: Metadata = {
    title: "Digital Marketing Services | Glorifli — AEO, SEO & Web Design",
    description: "Explore Glorifli's services: custom high-converting websites ($1,256.50), SEO/AEO optimization ($589.50/mo), and the complete Autonomous Revenue Engine. 10 leads in 60 days guaranteed.",
    openGraph: {
        title: "Glorifli Services — AEO, SEO & Web Design for Local Businesses",
        description: "View Glorifli's full service offering. Custom websites, SEO/AEO content systems, and a complete Revenue Engine — all backed by a 10-leads-in-60-days guarantee.",
        url: "https://glorifli.com/services",
        type: "website",
        images: ["https://glorifli.com/images/blog/featured-hero.png"],
    },
    alternates: { canonical: "https://glorifli.com/services" },
};

const services = [
    {
        slug: "custom-website",
        name: "Custom High-Converting Website",
        tagline: "Your digital storefront — built to turn traffic into booked leads.",
        price: "$1,256.50",
        priceNote: "one-time setup fee",
        marketValue: "$4,700+",
        badge: null,
        highlight: false,
        features: [
            "Custom Design & Branding",
            "Mobile & Desktop Optimized",
            "Conversion Copywriting Included",
            "Integrated Booking System",
            "Domain Transfer or Acquisition",
            "Up to 3 Revisions (First 60 Days)",
            "Email & Phone Lead Capture",
            "Mock Draft — Yours to Keep",
            "60 Days of Free Blog Content",
        ],
    },
    {
        slug: "seo-aeo-optimization",
        name: "SEO/AEO Optimization",
        tagline: "Dominate local search and become the AI-recommended answer.",
        price: "$589.50",
        priceNote: "/month (free until 10 leads are booked)",
        marketValue: "$2,500/mo",
        badge: null,
        highlight: false,
        features: [
            "8 SEO/AEO Optimized Blog Posts Monthly",
            "Google Business Profile Sync",
            "Citation Network Building",
            "AI Search Optimization (ChatGPT, Gemini, Perplexity)",
            "Full Backend Site Optimization",
            "Targets Local High-Intent Traffic",
            "Builds Entity Authority Online",
            "10 Leads in 60 Days or We Keep Working Free",
        ],
    },
    {
        slug: "autonomous-revenue-engine",
        name: "Autonomous Revenue Generating Engine",
        tagline: "The complete system. Build, rank, convert — on autopilot.",
        price: "$1,256.50 setup",
        priceNote: "then $589.50/mo (free until 10 leads booked)",
        marketValue: "$8,900+",
        badge: "Best Value",
        highlight: true,
        features: [
            "Everything in Website + SEO Plans",
            "60 Days of Free Blog Content",
            "Full AEO Infrastructure Setup",
            "Google Business Profile Optimization",
            "AI Search Optimization",
            "Priority Support",
            "10 New Leads in 60 Days From Payment",
            "SEO/AEO Runs Free Until Goal Is Hit",
            "No Long-Term Contracts",
        ],
    },
];

const roiExamples = [
    { industry: "Roofing", avg: "$11,500/job", closes: "3 closes", revenue: "$34,500", roi: "2,646%" },
    { industry: "HVAC", avg: "$8,500/job", closes: "3 closes", revenue: "$25,500", roi: "1,929%" },
    { industry: "Home Remodeling", avg: "$25,000/job", closes: "3 closes", revenue: "$75,000", roi: "5,869%" },
    { industry: "Landscaping", avg: "$4,500/job", closes: "3 closes", revenue: "$13,500", roi: "974%" },
    { industry: "Plumbing", avg: "$1,800/job", closes: "3 closes", revenue: "$5,400", roi: "330%" },
];

const valueStack = [
    { item: "High-Converting Website Build", value: "$3,500" },
    { item: "Full Site Copywriting", value: "$800" },
    { item: "Booking System Integration", value: "$400" },
    { item: "SEO/AEO Blog Service (First 60 Days)", value: "$2,500" },
    { item: "Google Business Profile Optimization", value: "$500" },
    { item: "AI Search (AEO) Infrastructure", value: "$1,200" },
];

const listingSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Glorifli Services",
    url: "https://glorifli.com/services",
    itemListElement: services.map((s, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: s.name,
        url: `https://glorifli.com/services/${s.slug}`,
        description: s.tagline,
    })),
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://glorifli.com" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://glorifli.com/services" },
    ],
};

export default function ServicesPage() {
    return (
        <div className="bg-black min-h-screen text-white">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(listingSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

            {/* ── Hero ── */}
            <section className="relative pt-32 pb-16 px-6 overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/8 rounded-full blur-[140px] pointer-events-none" />
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
                        <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                        <span className="text-xs font-semibold text-accent uppercase tracking-widest">10 Leads in 60 Days — Guaranteed</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold font-heading tracking-tighter leading-tight mb-6">
                        What Digital Marketing Services{' '}
                        <span className="text-primary">Does Glorifli Offer?</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-6">
                        Glorifli offers three core services: a custom high-converting website, an SEO/AEO content system, and the complete Autonomous Revenue Engine — all backed by a performance guarantee.
                    </p>
                    <p className="text-gray-500 text-sm">
                        <strong className="text-white">Total market value: $8,900+</strong> — Your investment: $1,256.50 to start.
                    </p>
                </div>
            </section>

            <div className="max-w-6xl mx-auto px-6 pb-24">

                {/* ── Service Cards ── */}
                <section className="mb-20">
                    <h2 className="text-2xl font-bold text-white font-heading mb-10 text-center">
                        Which Glorifli Service Is Right for Your Business?
                    </h2>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                        {services.map((service) => (
                            <div
                                key={service.slug}
                                className={`relative rounded-3xl p-8 border flex flex-col h-full transition-all duration-300 ${service.highlight
                                    ? 'bg-white/5 border-primary/50 shadow-[0_0_40px_rgba(56,189,248,0.1)]'
                                    : 'bg-black/30 border-white/10 hover:border-white/20'
                                    }`}
                            >
                                {service.badge && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-black text-sm font-bold rounded-full shadow-lg">
                                        {service.badge}
                                    </div>
                                )}
                                <div className="mb-6">
                                    <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                                    <p className="text-gray-400 text-sm">{service.tagline}</p>
                                </div>
                                <div className="mb-6">
                                    <span className="text-3xl font-bold text-white">{service.price}</span>
                                    <p className="text-xs text-gray-500 mt-1">{service.priceNote}</p>
                                    <p className="text-xs text-primary mt-1">Market value: {service.marketValue}</p>
                                </div>
                                <ul className="space-y-3 mb-8 flex-grow">
                                    {service.features.map((f) => (
                                        <li key={f} className="flex items-start gap-3 text-sm text-gray-300">
                                            <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                                            <span>{f}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Link
                                    href={`/services/${service.slug}`}
                                    className={`w-full py-4 rounded-xl font-bold text-center transition-all duration-300 flex items-center justify-center gap-2 group ${service.highlight
                                        ? 'bg-primary text-black hover:bg-white'
                                        : 'bg-white/10 text-white hover:bg-primary hover:text-black'
                                        }`}
                                >
                                    Learn More
                                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── Value Stack ── */}
                <section className="mb-20">
                    <h2 className="text-2xl font-bold text-white font-heading mb-4 text-center">
                        Why Is the $1,256.50 Setup Fee Worth It? The Value Stack.
                    </h2>
                    <p className="text-center text-gray-400 mb-10 max-w-2xl mx-auto">
                        Every deliverable Glorifli provides has a clear market rate. Here's what you'd pay on the open market — and what you actually invest.
                    </p>
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
                                        <td className="px-6 py-4 text-right text-primary font-bold">{row.value}</td>
                                    </tr>
                                ))}
                                <tr className="bg-primary/10 border-t-2 border-primary/30">
                                    <td className="px-6 py-4 font-bold text-white">Total Market Value</td>
                                    <td className="px-6 py-4 text-right text-lg">
                                        <span className="relative inline-block font-bold text-primary">
                                            $8,900+
                                            <span className="absolute left-[-5%] top-1/2 w-[110%] h-[2px] bg-red-500 -rotate-12 origin-center pointer-events-none rounded-full" />
                                        </span>
                                    </td>
                                </tr>
                                <tr className="border-t border-white/5">
                                    <td className="px-6 py-4 text-gray-300">Your Investment (Setup Fee)</td>
                                    <td className="px-6 py-4 text-right font-bold text-accent text-lg">$1,256.50</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* ── ROI Examples ── */}
                <section className="mb-20">
                    <h2 className="text-2xl font-bold text-white font-heading mb-4 text-center">
                        What Is the ROI of Glorifli's Services by Industry?
                    </h2>
                    <p className="text-center text-gray-400 mb-3 max-w-2xl mx-auto">
                        SEO/AEO leads close at 25–45% because prospects searched for exactly what you offer, in your city, at the moment they need it. Here's what closing just 3 of your 10 guaranteed leads looks like:
                    </p>
                    <p className="text-center text-xs text-gray-600 mb-10">
                        Based on 30% close rate (conservative floor). Sources:{' '}
                        <a href="https://modernize.com/" target="_blank" rel="noopener noreferrer" className="hover:text-primary underline decoration-white/20 hover:decoration-primary/50 transition-colors">Modernize</a>,{' '}
                        <a href="https://www.angi.com/" target="_blank" rel="noopener noreferrer" className="hover:text-primary underline decoration-white/20 hover:decoration-primary/50 transition-colors">Angi</a>,{' '}
                        <a href="https://homeguide.com/" target="_blank" rel="noopener noreferrer" className="hover:text-primary underline decoration-white/20 hover:decoration-primary/50 transition-colors">HomeGuide</a>,{' '}
                        <a href="https://www.quickenloans.com/" target="_blank" rel="noopener noreferrer" className="hover:text-primary underline decoration-white/20 hover:decoration-primary/50 transition-colors">Quicken Loans</a> (2025–2026).
                    </p>
                    <div className="overflow-x-auto rounded-3xl border border-white/10">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="border-b border-white/10 bg-white/5">
                                    <th className="text-left px-6 py-4 text-gray-400 font-medium">Industry</th>
                                    <th className="text-right px-6 py-4 text-gray-400 font-medium">Avg Job Value</th>
                                    <th className="text-right px-6 py-4 text-gray-400 font-medium">3 Closes</th>
                                    <th className="text-right px-6 py-4 text-gray-400 font-medium">Revenue</th>
                                    <th className="text-right px-6 py-4 text-gray-400 font-medium">ROI on $1,256</th>
                                </tr>
                            </thead>
                            <tbody>
                                {roiExamples.map((row, i) => (
                                    <tr key={i} className="border-b border-white/5 hover:bg-white/3 transition-colors">
                                        <td className="px-6 py-4 font-medium text-white">{row.industry}</td>
                                        <td className="px-6 py-4 text-right text-gray-400">{row.avg}</td>
                                        <td className="px-6 py-4 text-right text-gray-400">{row.closes}</td>
                                        <td className="px-6 py-4 text-right font-bold text-white">{row.revenue}</td>
                                        <td className="px-6 py-4 text-right font-bold text-primary">{row.roi}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* ── CTA ── */}
                <section className="bg-gradient-to-br from-primary/20 via-black to-black border border-primary/30 rounded-3xl p-10 md:p-14 text-center relative overflow-hidden mb-20">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full pointer-events-none" />
                    <div className="relative z-10">
                        <Star className="w-8 h-8 text-primary mx-auto mb-4" />
                        <h2 className="text-3xl font-bold mb-4 text-white font-heading">
                            Ready to Get Started?
                        </h2>
                        <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                            Pay the $1,256.50 setup fee, get your website live, and we run the SEO/AEO service free until your 10 leads are delivered — all within 60 days.
                        </p>
                        <Link
                            href="/#calendar"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-black font-bold rounded-full hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/20"
                        >
                            Book Your Free Strategy Call
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </section>

                {/* ── Free Value Section ── */}
                <section className="mb-20 text-center" id="free-value">
                    <h2 className="text-3xl font-bold text-white font-heading mb-4">Take Advantage of Our Free Resources!</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto mb-12">Get a custom SEO Action Plan, Free Backlink Content, or join our Lifetime Commission Affiliate Program.</p>

                    <div className="mb-16">
                        <LeadMagnetForm className="" delay={0.1} />
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 text-left max-w-5xl mx-auto">
                        <Link href="/free-value/free-services" className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                            <h3 className="text-xl font-bold text-white mb-2 font-heading group-hover:text-primary transition-colors">Free Services</h3>
                            <p className="text-sm text-gray-400 mb-4">Get your free custom SEO Action Plan + 2 Free SEO Optimized Blog Posts designed specifically for your local business.</p>
                            <span className="text-primary text-sm font-bold flex items-center gap-2">Get Started <ArrowRight className="w-4 h-4" /></span>
                        </Link>

                        <Link href="/free-value/free-blog-content" className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                            <h3 className="text-xl font-bold text-white mb-2 font-heading group-hover:text-primary transition-colors">Free SEO/AEO Blog Content</h3>
                            <p className="text-sm text-gray-400 mb-4">We'll write incredibly high-quality, high-ranking SEO content for your site for free, in exchange for a simple backlink to Glorifli.</p>
                            <span className="text-primary text-sm font-bold flex items-center gap-2">Request Content <ArrowRight className="w-4 h-4" /></span>
                        </Link>

                        <Link href="/free-value/make-money" className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                            <h3 className="text-xl font-bold text-white mb-2 font-heading group-hover:text-primary transition-colors">Make Money With Us Here!</h3>
                            <p className="text-sm text-gray-400 mb-4">Join our remote sales or affiliate program. We offer a true 20% lifetime commission on any job you bring in that closes.</p>
                            <span className="text-primary text-sm font-bold flex items-center gap-2">Apply Now <ArrowRight className="w-4 h-4" /></span>
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    );
}
