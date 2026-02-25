import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: "About Glorifli - We Build Client Acquisition Systems",
    description: "Glorifli builds AI-First Client Acquisition Systems. We focus on AEO (Answer Engine Optimization) & SEO to turn traffic into revenue 24/7.",
    openGraph: {
        title: "About Glorifli - AI-First Client Acquisition",
        description: "Stop relying on passive websites. We build systems that capture revenue 24/7 using AEO and Conversion Architecture.",
        images: ["https://glorifli.com/images/blog/featured-hero.png"], // Reuse existing OG image or update if specific one provided
    },
};

const AboutPage = () => {
    // FAQ Data for Schema and Display
    const faqs = [
        {
            question: "What is the difference between a website and a Client Acquisition System?",
            answer: "A website is a static brochure that tells people who you are. A Client Acquisition System is a dynamic engine that actively attracts traffic via AEO/SEO, captures leads via mobile-optimized funnels, and converts them via our proprietary Conversion Architecture. Glorifli builds systems, not just websites."
        },
        {
            question: "Why does AEO matter for local businesses?",
            answer: "AEO (Answer Engine Optimization) matters because modern consumers use voice search and quick-answer queries to find services. If your business isn't optimized to be the 'Direct Answer' for queries like 'best plumber near me,' search engines will recommend your competitors instead. We ensure you are the cited authority."
        },
        {
            question: "Does Glorifli work with my specific industry?",
            answer: "Yes. Whether you are in healthcare, home services, law, or finance, the principles of Entity Optimization and Trust Signals remain the same. Search engines look for 'E-E-A-T' (Experience, Expertise, Authoritativeness, Trustworthiness) across all sectors, and we build that infrastructure for you."
        },
        {
            question: "How quickly can I see results with this strategy?",
            answer: "Unlike traditional SEO which can take 6-12 months for general keywords, an AEO-focused strategy can yield results much faster—often within 4 to 8 weeks—because we are targeting specific 'long-tail' questions and high-intent actions rather than generic keywords."
        },
        {
            question: "Do I need to replace my current team?",
            answer: "No. Our systems are designed to empower your team, not replace them. By automating the capture of the 40% of after-hours bookings and routine inquiries, your staff can focus on high-value tasks and customer service."
        }
    ];

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "mainEntity": {
            "@type": "Organization",
            "name": "Glorifli",
            "description": "Glorifli is a specialized digital growth agency that builds AI-First Client Acquisition Systems.",
            "url": "https://glorifli.com",
            "logo": "https://glorifli.com/logo.png",
            "sameAs": [
                "https://www.linkedin.com/company/glorifli",
                // Add other social profiles here
            ]
        },
        "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://glorifli.com"
                },
                {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "About Us",
                    "item": "https://glorifli.com/about"
                }
            ]
        }
    };

    // FAQ Schema
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };

    return (
        <div className="bg-black min-h-screen text-white pt-24 pb-12">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <div className="max-w-4xl mx-auto px-6">
                {/* Header Section */}
                <section className="mb-16 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 mb-6 font-heading tracking-tight leading-tight">
                        We Don't Build Websites. <br /> <span className="text-primary">We Build Client Acquisition Systems.</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Glorifli's mission is to transition local service businesses from the "Blue Link" era of traditional SEO to the "Answer Engine" era of high-intent growth, guided by a higher calling.
                    </p>
                </section>

                {/* Who Is Glorifli */}
                <section className="mb-16 scroll-mt-24" id="who-we-are">
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-10 backdrop-blur-sm">
                        <h2 className="text-3xl font-bold mb-6 text-white font-heading">Who Is Glorifli?</h2>
                        <p className="text-gray-300 text-lg leading-relaxed mb-6 font-medium border-l-4 border-primary pl-4">
                            Glorifli is a specialized digital growth agency that builds AI-First Client Acquisition Systems. We use Answer Engine Optimization (AEO) and proprietary Conversion Architecture so that local businesses become the "Direct Answer" in search results and capture revenue 24/7.
                        </p>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            Unlike traditional web design agencies that focus purely on aesthetics, we build "Level 10" systems that ensure your business ranks highly, converts mobile traffic into booked appointments immediately, and leverages the latest in AI and Entity Search.
                        </p>
                    </div>
                </section>

                {/* Our Core Values */}
                <section className="mb-16 scroll-mt-24" id="our-values">
                    <h2 className="text-3xl font-bold mb-6 text-white font-heading">What Are Our Core Values?</h2>
                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                        At Glorifli, our approach to business and client relationships is rooted in a fundamental, unwavering principle:
                    </p>
                    <div className="bg-gradient-to-br from-primary/10 to-black border border-primary/30 rounded-xl p-8 mb-8">
                        <h3 className="text-2xl font-bold text-white mb-4">Serving Clients as Christ Served Us</h3>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            We believe that true success is found in service. We aim to serve our clients with the same profound dedication, humility, and sacrificial love that Christ demonstrated. This means prioritizing your business's success above our own ego, acting with radical transparency, and committing to excellence not just for profit, but as a reflection of our faith. We don't just want to build your digital acquiring system; we want to see you, your family, and your employees flourish.
                        </p>
                    </div>
                </section>

                {/* Why Traditional Methods Fail */}
                <section className="mb-16 scroll-mt-24" id="why-traditional-seo-fails">
                    <h2 className="text-3xl font-bold mb-6 text-white font-heading">Why Do "Pretty" Websites Fail to Drive Revenue?</h2>

                    <p className="text-gray-300 text-lg leading-relaxed mb-6 font-medium border-l-4 border-primary pl-4">
                        A visually appealing website fails to drive revenue if it acts only as a static digital brochure instead of an active acquisition engine. In the modern era, 58% of Google searches end without a click because AI tools answer the user's question directly.
                    </p>

                    <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                        <p>
                            For the last decade, businesses were told to "blog more" and "post on social media." However, if your website isn't optimized for Answer Engines (like ChatGPT, Perplexity, and Google's AI Overviews) and doesn't explicitly answer high-intent queries, you are invisible to the modern consumer.
                        </p>
                        <p>
                            At <strong className="text-white">Glorifli</strong>, we reject the "Brochure Method." We believe your digital presence should be an automated machine that captures and converts leads while you sleep.
                        </p>
                    </div>
                </section>

                {/* The Methodology */}
                <section className="mb-16 scroll-mt-24" id="glorifli-methodology">
                    <h2 className="text-3xl font-bold mb-4 text-white font-heading border-b border-white/10 pb-4">How Does Glorifli's 4-Pillar Growth Protocol Work?</h2>
                    <p className="text-gray-400 mb-8 italic">We don't guess. We use a data-backed framework to construct Client Acquisition Systems:</p>

                    <div className="grid gap-8">
                        {/* Pillar 1 */}
                        <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-primary/50 transition-colors">
                            <h3 className="text-xl font-bold text-primary mb-3">1. AEO & SEO Infrastructure (The Answer Strategy)</h3>
                            <p className="text-gray-300 mb-4">
                                Most agencies build websites for humans. We build them for search engines and AI assistants. We use <strong>Server-Side Rendering</strong> and <strong>Nested Schema Markup</strong> to ensure you are the cited authority when users ask queries like, <em>"Who is the best service provider near me?"</em>
                            </p>
                        </div>

                        {/* Pillar 2 */}
                        <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-primary/50 transition-colors">
                            <h3 className="text-xl font-bold text-primary mb-3">2. Mobile-First Booking Engine</h3>
                            <p className="text-gray-300">
                                Over <strong>82% of service appointments are booked via mobile search</strong>. We construct friction-free, lightning-fast mobile funnels designed to convert visitors into booked appointments in under 60 seconds without clumsy pinch-to-zoom interfaces.
                            </p>
                        </div>

                        {/* Pillar 3 */}
                        <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-primary/50 transition-colors">
                            <h3 className="text-xl font-bold text-primary mb-3">3. Proprietary Conversion Architecture</h3>
                            <p className="text-gray-300 mb-4">
                                Passive contact forms lose leads. We implement systems that capture revenue around the clock:
                            </p>
                            <ul className="list-disc pl-5 text-gray-300 space-y-2">
                                <li><strong>The After-Hours Protocol:</strong> 40% of appointments are booked after you close. Our system captures, qualifies, and schedules these leads automatically.</li>
                                <li><strong>Direct Response Mechanisms:</strong> Clear, undeniable calls to action integrated at the exact point of highest user intent.</li>
                            </ul>
                        </div>

                        {/* Pillar 4 */}
                        <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-primary/50 transition-colors">
                            <h3 className="text-xl font-bold text-primary mb-3">4. Entity Authority & Trust</h3>
                            <p className="text-gray-300">
                                Answer Engines require "Consensus Optimization" to trust a brand. We align your reviews, external directory listings, and digital footprint, signaling to the algorithms that you are a Safe Recommendation backed by strong <strong>E-E-A-T</strong> (Experience, Expertise, Authoritativeness, and Trustworthiness).
                            </p>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="mb-16 bg-gradient-to-br from-primary/20 via-black to-black border border-primary/30 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold mb-6 text-white font-heading">Ready to Convert Traffic into Appointments?</h2>
                        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                            We build systems designed to get more people into your business. Stop settling for a brochure.
                        </p>

                        <div className="grid md:grid-cols-3 gap-6 text-left mb-8">
                            <div className="bg-black/50 p-4 rounded-lg border border-white/5">
                                <h4 className="font-bold text-primary mb-2">1. Improved Visibility</h4>
                                <p className="text-sm text-gray-400">AEO strategy ensures you are the cited answer.</p>
                            </div>
                            <div className="bg-black/50 p-4 rounded-lg border border-white/5">
                                <h4 className="font-bold text-primary mb-2">2. Conversion Architecture</h4>
                                <p className="text-sm text-gray-400">Turn visitors into booked appointments instantly.</p>
                            </div>
                            <div className="bg-black/50 p-4 rounded-lg border border-white/5">
                                <h4 className="font-bold text-primary mb-2">3. Greater Credibility</h4>
                                <p className="text-sm text-gray-400">Establish immediate authority with E-E-A-T optimized designs.</p>
                            </div>
                        </div>

                        <div className="flex flex-col items-center">
                            <p className="text-white font-bold text-lg mb-6">Ready to stop playing small?</p>
                            <Link href="/#calendar" className="inline-block px-8 py-4 bg-primary text-black font-bold rounded-full hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/20">
                                Book Your Strategy Call
                            </Link>
                        </div>
                    </div>
                    {/* Decorative background glow */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full pointer-events-none" />
                </section>

                {/* FAQ Section */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-8 text-white font-heading text-center">Frequently Asked Questions</h2>
                    <div className="space-y-6">
                        {faqs.map((faq, index) => (
                            <div key={index} className="bg-white/5 border border-white/10 rounded-lg p-6">
                                <h3 className="text-lg font-bold text-white mb-2">{faq.question}</h3>
                                <p className="text-gray-300 leading-relaxed text-sm md:text-base">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default AboutPage;
