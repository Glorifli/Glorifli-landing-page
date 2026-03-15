import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Check, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
    title: "Custom High-Converting Website | Glorifli — $1,256.50 Setup",
    description: "Glorifli builds custom high-converting websites for local service businesses. $1,256.50 one-time setup. Mobile-optimized, conversion-architecture built, integrated booking, and 60 days of free blog content. 10 leads in 60 days guaranteed.",
    openGraph: {
        title: "Custom High-Converting Website by Glorifli — $1,256.50",
        description: "Stop losing leads to a brochure site. Glorifli builds client acquisition websites that rank, convert, and book while you sleep. $1,256.50 setup, 10 leads in 60 days guaranteed.",
        url: "https://glorifli.com/services/custom-website",
        type: "website",
        images: ["https://glorifli.com/images/blog/featured-hero.png"],
    },
    alternates: { canonical: "https://glorifli.com/services/custom-website" },
};

const features = [
    { title: "Custom Design & Branding", desc: "A unique look built around your brand identity — not a template anyone else is using." },
    { title: "Mobile & Desktop Optimized", desc: "82% of service appointments are booked via mobile. Your site will be flawless on every device." },
    { title: "Conversion Copywriting Done-For-You", desc: "Professional copy written to convert visitors into leads — you don't write a single word." },
    { title: "Integrated Booking System", desc: "A frictionless booking flow that captures leads around the clock, even after hours." },
    { title: "Domain Transfer or Acquisition", desc: "We handle the technical setup so your site goes live without you needing to be tech-savvy." },
    { title: "Email & Phone Lead Capture", desc: "Multiple capture points ensure you never miss a lead regardless of how they prefer to contact you." },
    { title: "Up to 3 Revisions (First 60 Days)", desc: "Your site, your way. We refine it until it's exactly right within the first 60 days." },
    { title: "Mock Draft — Yours to Keep", desc: "Your free mock draft is created before you pay — no commitment, no risk." },
    { title: "60 Days of Free Blog Content", desc: "16 AEO/SEO-optimized blog posts at launch to kickstart your organic traffic immediately." },
];

const valueStack = [
    { item: "High-Converting Website Build", market: "$3,500", yours: "✓" },
    { item: "Full Site Copywriting", market: "$800", yours: "✓" },
    { item: "Booking System Integration", market: "$400", yours: "✓" },
    { item: "60 Days SEO/AEO Blog Content", market: "$2,500", yours: "FREE (included)" },
    { item: "Domain Setup / Transfer", market: "$0–$200", yours: "✓" },
];

const roiExamples = [
    { industry: "Roofing", avg: "$11,500", revenue: "$34,500", roi: "2,646%", close: "3 jobs" },
    { industry: "HVAC", avg: "$8,500", revenue: "$25,500", roi: "1,929%", close: "3 jobs" },
    { industry: "Home Remodeling", avg: "$25,000", revenue: "$75,000", roi: "5,869%", close: "3 jobs" },
    { industry: "Landscaping", avg: "$4,500", revenue: "$13,500", roi: "974%", close: "3 jobs" },
    { industry: "Plumbing", avg: "$1,800", revenue: "$5,400", roi: "330%", close: "3 jobs" },
];

const faqs = [
    {
        q: "What is included in the custom website build?",
        a: "The $1,256.50 setup fee includes custom design and branding, mobile and desktop optimization, conversion copywriting, integrated booking system, domain setup or transfer, email and phone lead capture, up to 3 revisions in the first 60 days, a free mock draft, and 60 days of free AEO/SEO blog content (16 posts).",
    },
    {
        q: "How long does it take to build my website?",
        a: "Your first draft is delivered within 2 weeks. The site goes live within 30 days. You have up to 3 revision rounds during that first 60 days.",
    },
    {
        q: "Do I need to write any copy or provide images?",
        a: "No — conversion copywriting is included. However, providing real testimonials, photos of your team, and authentic project images will significantly improve trust and conversion rates.",
    },
    {
        q: "Why does the website cost $1,256.50?",
        a: "The market rate for a custom website with copywriting, booking integration, and one month of blog content is $4,700+. At $1,256.50, you're paying less than 27 cents on the dollar. The rest is covered by our confidence in the guarantee — we only win long-term when you do.",
    },
    {
        q: "What happens after my site is live?",
        a: "The 60-day clock starts the moment you pay. Your site goes live and the SEO/AEO service runs free until we deliver 10 booked leads. After that, you can continue the SEO/AEO service at $589.50/month or walk away — no contracts.",
    },
];

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://glorifli.com/services/custom-website#service",
    name: "Custom High-Converting Website",
    provider: { "@id": "https://glorifli.com/#organization" },
    description: "A custom designed, mobile-optimized, conversion-architecture website for local service businesses. Includes booking system, copywriting, domain setup, and 60 days of free blog content. $1,256.50 one-time setup.",
    offers: {
        "@type": "Offer",
        price: "1256.50",
        priceCurrency: "USD",
        priceSpecification: { "@type": "UnitPriceSpecification", price: "1256.50", priceCurrency: "USD", unitText: "one-time" },
    },
    url: "https://glorifli.com/services/custom-website",
    areaServed: [{ "@type": "Country", name: "United States" }],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://glorifli.com" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://glorifli.com/services" },
        { "@type": "ListItem", position: 3, name: "Custom Website", item: "https://glorifli.com/services/custom-website" },
    ],
};

export default function CustomWebsitePage() {
    return (
        <div className="bg-black min-h-screen text-white">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

            {/* Breadcrumb */}
            <div className="pt-28 px-6 max-w-4xl mx-auto">
                <nav className="text-sm text-gray-600 mb-8" aria-label="Breadcrumb">
                    <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                    <span className="mx-2">/</span>
                    <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
                    <span className="mx-2">/</span>
                    <span className="text-gray-400">Custom Website</span>
                </nav>
            </div>

            <div className="max-w-4xl mx-auto px-6 pb-24">

                {/* ── Hero ── */}
                <section className="mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
                        <span className="text-xs font-semibold text-primary uppercase tracking-widest">$1,256.50 One-Time Setup</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold font-heading tracking-tighter leading-tight mb-6">
                        What Is Glorifli's{' '}
                        <span className="text-primary">Custom High-Converting Website</span> Service?
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-6">
                        Glorifli's custom website service delivers a fully branded, mobile-optimized, conversion-architecture site that turns traffic into booked leads — not just visitors. For a one-time $1,256.50 setup fee, you get a $4,700+ value package, including 60 days of free <Link href="/services/seo-aeo-optimization" className="text-white hover:text-primary transition-colors underline underline-offset-2">AEO/SEO blog content</Link>.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Link href="/#calendar" className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-black font-bold rounded-full hover:bg-white transition-all duration-300 shadow-lg shadow-primary/20">
                            Book a Free Strategy Call <ArrowRight className="w-4 h-4" />
                        </Link>
                        <Link href="/services" className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/5 border border-white/10 text-white font-bold rounded-full hover:bg-white/10 transition-all duration-300">
                            View All Services
                        </Link>
                    </div>
                </section>

                {/* ── Features ── */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold text-white font-heading mb-8">
                        What Does the Custom Website Package Include?
                    </h2>
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

                {/* ── Price Justification ── */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold text-white font-heading mb-4">
                        Why Is $1,256.50 the Right Price for a Custom Website?
                    </h2>
                    <p className="text-gray-400 mb-8 leading-relaxed">
                        The combined market rate for everything included in this package exceeds $4,700. At $1,256.50, you're paying less than 27 cents on the dollar. Here's the breakdown:
                    </p>
                    <div className="bg-white/5 border border-white/10 rounded-3xl overflow-x-auto mb-6">
                        <table className="w-full min-w-[500px] text-sm">
                            <thead>
                                <tr className="border-b border-white/10">
                                    <th className="text-left px-6 py-4 text-gray-400 font-medium">Deliverable</th>
                                    <th className="text-right px-6 py-4 text-gray-400 font-medium">Market Rate</th>
                                    <th className="text-right px-6 py-4 text-gray-400 font-medium">Included</th>
                                </tr>
                            </thead>
                            <tbody>
                                {valueStack.map((row, i) => (
                                    <tr key={i} className="border-b border-white/5">
                                        <td className="px-6 py-4 text-gray-300">{row.item}</td>
                                        <td className="px-6 py-4 text-right text-primary font-bold">{row.market}</td>
                                        <td className="px-6 py-4 text-right text-green-400 font-bold">{row.yours}</td>
                                    </tr>
                                ))}
                                <tr className="bg-primary/10 border-t-2 border-primary/30">
                                    <td className="px-6 py-4 font-bold text-white">Total Market Value</td>
                                    <td className="px-6 py-4 text-right font-bold text-primary">$4,700+</td>
                                    <td className="px-6 py-4 text-right font-bold text-white">—</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-5 font-bold text-white text-base">Your Investment</td>
                                    <td colSpan={2} className="px-6 py-5 text-right font-bold text-white text-xl">$1,256.50</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="text-sm text-gray-500 italic">
                        Why so low? Because we only win long-term when you get results. Our guarantee is the bet — we're confident enough in our system to subsidize your entry price.
                    </p>
                </section>

                {/* ── ROI ── */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold text-white font-heading mb-4">
                        What Is the Return on Investment for a Glorifli Website?
                    </h2>
                    <p className="text-gray-400 mb-3 leading-relaxed">
                        SEO/AEO leads close at 25–45% — not the 2–5% of paid ads — because they're people who searched for exactly what you offer, in your city, right now. Here's what closing just 3 of your guaranteed 10 leads looks like in real revenue:
                    </p>
                    <p className="text-xs text-gray-600 mb-8">Based on 30% close rate. Sources:{' '}
                        <a href="https://modernize.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Modernize</a>,{' '}
                        <a href="https://www.angi.com/research/reports/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Angi</a>,{' '}
                        <a href="https://homeguide.com/costs" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">HomeGuide</a>,{' '}
                        <a href="https://www.quickenloans.com/learn/home-improvement-statistics" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Quicken Loans</a>{' '}
                        (2025–2026).
                    </p>
                    <div className="overflow-x-auto rounded-3xl border border-white/10">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="border-b border-white/10 bg-white/5">
                                    <th className="text-left px-6 py-4 text-gray-400 font-medium">Industry</th>
                                    <th className="text-right px-6 py-4 text-gray-400 font-medium">Avg Job</th>
                                    <th className="text-right px-6 py-4 text-gray-400 font-medium">Closes</th>
                                    <th className="text-right px-6 py-4 text-gray-400 font-medium">Revenue</th>
                                    <th className="text-right px-6 py-4 text-gray-400 font-medium">ROI</th>
                                </tr>
                            </thead>
                            <tbody>
                                {roiExamples.map((row, i) => (
                                    <tr key={i} className="border-b border-white/5 hover:bg-white/3 transition-colors">
                                        <td className="px-6 py-4 font-medium text-white">{row.industry}</td>
                                        <td className="px-6 py-4 text-right text-gray-400">{row.avg}</td>
                                        <td className="px-6 py-4 text-right text-gray-400">{row.close}</td>
                                        <td className="px-6 py-4 text-right font-bold text-white">{row.revenue}</td>
                                        <td className="px-6 py-4 text-right font-bold text-primary">{row.roi}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* ── FAQ ── */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold text-white font-heading mb-8 text-center">
                        Frequently Asked Questions — Custom Website
                    </h2>
                    <div className="space-y-4">
                        {faqs.map((faq, i) => (
                            <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-primary/30 transition-colors">
                                <h3 className="font-bold text-white mb-3">{faq.q}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── CTA ── */}
                <section className="bg-gradient-to-br from-primary/20 via-black to-black border border-primary/30 rounded-3xl p-10 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full pointer-events-none" />
                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold mb-4 text-white font-heading">Build Your Client Acquisition Machine</h2>
                        <p className="text-gray-400 mb-6 max-w-lg mx-auto">$1,256.50 setup. 10 leads guaranteed in 60 days. SEO/AEO runs free until you hit the goal.</p>
                        <Link href="/#calendar" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-black font-bold rounded-full hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/20">
                            Get Your Free Strategy Call <ArrowRight className="w-4 h-4" />
                        </Link>
                        <div className="flex flex-wrap justify-center gap-6 mt-6 text-sm text-gray-500">
                            {["$1,256.50 Setup Fee", "10 Leads in 60 Days", "No Long-Term Contracts", "No Hidden Fees"].map((t) => (
                                <span key={t} className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" />{t}</span>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
