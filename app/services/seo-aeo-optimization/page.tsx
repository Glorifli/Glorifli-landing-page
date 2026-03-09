import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Check, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
    title: "SEO/AEO Optimization Service | Glorifli — Free Until 10 Leads Booked",
    description: "Glorifli's SEO/AEO service: 8 monthly blog posts, GBP sync, citation building, AI search optimization. Free during your 60-day guarantee window, then $589.50/month.",
    openGraph: {
        title: "SEO/AEO Optimization by Glorifli — Free Until 10 Leads Booked",
        description: "Get cited by ChatGPT, Perplexity, and Google AI. 8 AEO/SEO blogs monthly, GBP sync, citation building — free until your 10 leads hit.",
        url: "https://glorifli.com/services/seo-aeo-optimization",
        type: "website",
        images: ["https://glorifli.com/images/blog/featured-hero.png"],
    },
    alternates: { canonical: "https://glorifli.com/services/seo-aeo-optimization" },
};

const features = [
    { title: "8 SEO/AEO Optimized Blog Posts Monthly", desc: "Each post targets a specific high-intent question your ideal clients are searching. Written for both Google and AI assistants." },
    { title: "Google Business Profile Sync", desc: "We optimize and sync your GBP so you show up in local map packs and Google AI Local answers." },
    { title: "Citation Network Building", desc: "We build and verify your business across 50+ directories — a key signal AI models use to verify entity authority." },
    { title: "AI Search Optimization", desc: "Structured content and schema markup so ChatGPT, Gemini, and Perplexity cite your business in their answers." },
    { title: "Full Backend Site Optimization", desc: "Site speed, Core Web Vitals, structured data, canonical tags, and sitemap management." },
    { title: "Local High-Intent Traffic Targeting", desc: "We target queries like 'best HVAC company in [city]' — people who are ready to book right now." },
    { title: "Entity Authority Building", desc: "Consensus Optimization aligns your reviews, listings, and digital footprint so Google and AI trust your brand." },
    { title: "Free Until 10 Leads Are Booked", desc: "Runs completely free during your 60-day guarantee window. Clock starts when your $1,256.50 setup fee is paid." },
];

const comparisonRows = [
    { metric: "Typical Close Rate", seoAeo: "25–45%", ads: "2–5%" },
    { metric: "Lead Intent", seoAeo: "High — searched for you", ads: "Low — interrupted" },
    { metric: "Long-Term Cost Per Lead", seoAeo: "Decreasing", ads: "Increasing" },
    { metric: "Works While You Sleep", seoAeo: "✓ Yes", ads: "✗ No" },
    { metric: "Builds Brand Authority", seoAeo: "✓ Yes", ads: "✗ No" },
    { metric: "AI / Answer Engine Visibility", seoAeo: "✓ Yes", ads: "✗ No" },
];

const roiRows = [
    { industry: "Roofing", avg: "$11,500", revenue: "$34,500", roi: "2,646%" },
    { industry: "HVAC", avg: "$8,500", revenue: "$25,500", roi: "1,929%" },
    { industry: "Home Remodeling", avg: "$25,000", revenue: "$75,000", roi: "5,869%" },
    { industry: "Landscaping", avg: "$4,500", revenue: "$13,500", roi: "974%" },
    { industry: "Plumbing", avg: "$1,800", revenue: "$5,400", roi: "330%" },
];

const faqs = [
    { q: "What is the difference between SEO and AEO?", a: "Traditional SEO optimizes for ranked links in Google's blue-link results. AEO (Answer Engine Optimization) optimizes to become the cited answer when users ask AI tools like ChatGPT, Perplexity, or Google AI Overviews. Since 58% of searches now end without a click, AEO is the fastest-growing source of high-intent leads." },
    { q: "How does the SEO/AEO service pricing work?", a: "The service runs free during your 60-day guarantee window, which starts the moment you pay the $1,256.50 setup fee. Once we deliver your 10 booked leads, you choose whether to continue at $589.50/month. If we miss the target, the service continues free until we deliver." },
    { q: "How quickly does SEO/AEO show results?", a: "Our AEO-focused strategy targets high-intent long-tail questions and can generate results in 4–8 weeks. Unlike broad-keyword SEO that takes 6–12 months. We guarantee 10 leads within 60 days of your setup payment." },
    { q: "Why does the SEO/AEO service cost $589.50/month?", a: "The market rate for 8 AEO/SEO blog posts alone is $2,500/month. We also include GBP management, citation building, backend optimization, and AI search targeting. Combined market value exceeds $3,500/month. At $589.50, you're paying roughly 17 cents on the dollar." },
    { q: "Do I need the website too, or can I just get SEO/AEO?", a: "Our SEO/AEO optimization is most effective paired with our custom website, since both are built with the same AEO infrastructure. However, we can discuss standalone packages — book a strategy call to find out what's right for your situation." },
];

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://glorifli.com/services/seo-aeo-optimization#service",
    name: "SEO/AEO Optimization",
    provider: { "@id": "https://glorifli.com/#organization" },
    description: "Monthly SEO/AEO for local service businesses: 8 blog posts, GBP sync, citation building, AI search optimization. Free until 10 leads are booked, then $589.50/month.",
    offers: { "@type": "Offer", price: "589.50", priceCurrency: "USD" },
    url: "https://glorifli.com/services/seo-aeo-optimization",
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
        { "@type": "ListItem", position: 3, name: "SEO/AEO Optimization", item: "https://glorifli.com/services/seo-aeo-optimization" },
    ],
};

export default function SEOAEOPage() {
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
                    <span className="text-gray-400">SEO/AEO Optimization</span>
                </nav>
            </div>

            <div className="max-w-4xl mx-auto px-6 pb-24">
                {/* Hero */}
                <section className="mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-6">
                        <span className="text-xs font-semibold text-accent uppercase tracking-widest">Free Until 10 Leads — Then $589.50/mo</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold font-heading tracking-tighter leading-tight mb-6">
                        What Is Glorifli's <span className="text-primary">SEO/AEO Optimization</span> Service?
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-4 border-l-4 border-primary pl-5">
                        Glorifli's SEO/AEO Optimization makes your business the answer that Google and AI assistants (ChatGPT, Perplexity, Google AI) recommend when local buyers search for your services. It runs completely free until we deliver 10 booked leads — then $589.50/month. Market value: <strong className="text-white">$3,500+/month.</strong>
                    </p>
                    <div className="flex flex-wrap gap-4 mt-8">
                        <Link href="/#calendar" className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-black font-bold rounded-full hover:bg-white transition-all duration-300">
                            Book a Free Strategy Call <ArrowRight className="w-4 h-4" />
                        </Link>
                        <Link href="/services" className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/5 border border-white/10 text-white font-bold rounded-full hover:bg-white/10 transition-all duration-300">
                            View All Services
                        </Link>
                    </div>
                </section>

                {/* Why AEO */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold text-white font-heading mb-4">Why Is AEO More Valuable Than Traditional SEO in 2025?</h2>
                    <p className="text-gray-400 mb-4 leading-relaxed border-l-4 border-accent pl-5">
                        <strong className="text-white">58% of Google searches now end without a click.</strong> AI tools answer the user directly — meaning the business that gets cited wins the lead without a click. Traditional SEO chases blue-link rankings. AEO wins the citation.
                    </p>
                    <p className="text-gray-400 leading-relaxed">Our strategy targets the exact high-intent questions local buyers ask and structures your content so AI systems cite your business — turning your site into a 24/7 lead engine.</p>
                </section>

                {/* Features */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold text-white font-heading mb-8">What Does the SEO/AEO Service Include?</h2>
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

                {/* SEO/AEO vs Ads */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold text-white font-heading mb-4">How Does SEO/AEO Compare to Paid Advertising?</h2>
                    <p className="text-gray-400 mb-8">SEO/AEO leads close at 25–45% vs 2–5% for paid ads — because they searched for exactly what you offer, right now.</p>
                    <div className="overflow-x-auto rounded-3xl border border-white/10">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="border-b border-white/10 bg-white/5">
                                    <th className="text-left px-6 py-4 text-gray-400 font-medium">Metric</th>
                                    <th className="text-center px-6 py-4 text-primary font-bold">SEO/AEO (Glorifli)</th>
                                    <th className="text-center px-6 py-4 text-gray-400 font-medium">Paid Ads</th>
                                </tr>
                            </thead>
                            <tbody>
                                {comparisonRows.map((row, i) => (
                                    <tr key={i} className="border-b border-white/5 hover:bg-white/3 transition-colors">
                                        <td className="px-6 py-4 text-gray-300">{row.metric}</td>
                                        <td className="px-6 py-4 text-center font-bold text-primary">{row.seoAeo}</td>
                                        <td className="px-6 py-4 text-center text-gray-500">{row.ads}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Price Justification */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold text-white font-heading mb-4">Why Is $589.50/Month Fair for This Service?</h2>
                    <p className="text-gray-400 mb-6">The market rate for just the blog posts is $2,500/month. Stack in GBP management, citation building, and AI optimization — and you're looking at $3,500+/month on the open market. At $589.50, you're paying about 17 cents on the dollar.</p>
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                        {[
                            { item: "8 AEO/SEO Blog Posts (Monthly)", market: "$2,500/mo" },
                            { item: "GBP Management & Optimization", market: "$300–$500/mo" },
                            { item: "Citation Network Maintenance", market: "$200–$400/mo" },
                            { item: "AI Search (AEO) Optimization", market: "$500–$800/mo" },
                        ].map((r) => (
                            <div key={r.item} className="flex justify-between items-center py-3 border-b border-white/5">
                                <span className="text-sm text-gray-400">{r.item}</span>
                                <span className="text-sm font-bold text-primary">{r.market}</span>
                            </div>
                        ))}
                        <div className="flex justify-between items-center pt-4 mt-2 border-t border-primary/30">
                            <span className="font-bold text-white">Market Total</span>
                            <span className="font-bold text-primary text-lg">~$3,500–$4,200/mo</span>
                        </div>
                        <div className="flex justify-between items-center mt-2">
                            <span className="font-bold text-white">Your Price (Post-Guarantee)</span>
                            <span className="font-bold text-white text-xl">$589.50/mo</span>
                        </div>
                    </div>
                </section>

                {/* ROI */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold text-white font-heading mb-4">What ROI Can I Expect from SEO/AEO?</h2>
                    <p className="text-gray-400 mb-3">Closing just 3 of your guaranteed 10 leads pays for your investment many times over. Sources: Modernize, Angi, HomeGuide (2025–2026).</p>
                    <div className="overflow-x-auto rounded-3xl border border-white/10">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="border-b border-white/10 bg-white/5">
                                    <th className="text-left px-6 py-4 text-gray-400 font-medium">Industry</th>
                                    <th className="text-right px-6 py-4 text-gray-400 font-medium">Avg Job</th>
                                    <th className="text-right px-6 py-4 text-gray-400 font-medium">3 Closes</th>
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
                    <h2 className="text-2xl font-bold text-white font-heading mb-8 text-center">Frequently Asked Questions — SEO/AEO Optimization</h2>
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
                        <h2 className="text-3xl font-bold mb-4 text-white font-heading">Become the AI-Recommended Answer in Your City</h2>
                        <p className="text-gray-400 mb-6 max-w-lg mx-auto">SEO/AEO runs free until 10 leads are delivered. Then $589.50/mo — or walk away, no contracts.</p>
                        <Link href="/#calendar" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-black font-bold rounded-full hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/20">
                            Book Your Free Strategy Call <ArrowRight className="w-4 h-4" />
                        </Link>
                        <div className="flex flex-wrap justify-center gap-6 mt-6 text-sm text-gray-500">
                            {["Free Until 10 Leads Hit", "25–45% Close Rate", "Cited by ChatGPT & Google AI", "No Hidden Fees"].map((t) => (
                                <span key={t} className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" />{t}</span>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
