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
                        Mission: To transition local service businesses from the "Blue Link" era of traditional SEO to the "Answer Engine" era of high-intent growth.
                    </p>
                </section>

                {/* Who Is Glorifli */}
                <section className="mb-16">
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-10 backdrop-blur-sm">
                        <h2 className="text-3xl font-bold mb-6 text-white font-heading">Who Is Glorifli? (The Direct Answer)</h2>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            Glorifli is a specialized digital growth agency that builds AI-First Client Acquisition Systems. Unlike traditional web design agencies that focus on aesthetics, Glorifli focuses on AEO (Answer Engine Optimization) and SEO infrastructure. We build "Level 10" systems that ensure your business is the cited answer in search results, captures the 82% of mobile bookings competitors miss, and uses a proprietary Conversion Architecture to turn traffic into revenue 24/7.
                        </p>
                    </div>
                </section>

                {/* The Philosophy */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold mb-6 text-white font-heading">The Philosophy: Why "Pretty" Websites Don't Pay the Bills</h2>
                    <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                        <p>
                            Look, if you are reading this, you probably already know the truth: <strong className="text-white">The old way of marketing is dead.</strong>
                        </p>
                        <p>
                            For the last decade, businesses were told to "blog more" and "post on social media" to get traffic. But today, <strong className="text-white">58% of Google searches end without a click</strong> because AI tools and search snippets answer the user's question directly.
                        </p>
                        <p>
                            If your website is just a digital brochure, you are invisible to the modern consumer.
                        </p>
                        <p>
                            At <strong className="text-white">Glorifli</strong>, we reject the "Brochure Method." We believe your digital presence should be a machine—a system that works while you sleep.
                        </p>
                    </div>
                </section>

                {/* The Methodology */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold mb-8 text-white font-heading border-b border-white/10 pb-4">The Glorifli Methodology: The 4-Pillar "Growth Protocol"</h2>
                    <p className="text-gray-400 mb-8 italic">We don't guess. We use a data-backed framework derived from analyzing thousands of successful interactions.</p>

                    <div className="grid gap-8">
                        {/* Pillar 1 */}
                        <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-primary/50 transition-colors">
                            <h3 className="text-xl font-bold text-primary mb-3">Pillar 1: AEO & SEO Infrastructure (The "Answer" Strategy)</h3>
                            <p className="text-gray-300 mb-4">
                                Most agencies build websites for humans. We build them for <strong className="text-white">Search Engines</strong> and <strong className="text-white">AI Agents</strong>. We use <strong className="text-white">Server-Side Rendering</strong> and <strong className="text-white">Nested Schema Markup</strong> to ensure that when a user asks Google or Siri, <em>"Who is the best service provider near me?"</em>, your business is the recommended answer.
                            </p>
                            <p className="text-sm text-gray-400 bg-black/30 p-3 rounded border-l-2 border-primary">
                                <strong>The Result:</strong> You don't just rank; you get <strong>cited</strong>.
                            </p>
                        </div>

                        {/* Pillar 2 */}
                        <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-primary/50 transition-colors">
                            <h3 className="text-xl font-bold text-primary mb-3">Pillar 2: The Mobile-First Booking Engine</h3>
                            <p className="text-gray-300">
                                The data is undeniable: <strong className="text-white">82% of service appointments are booked via mobile search</strong>. If your site requires "pinching and zooming," you are losing money. We build friction-free mobile experiences that convert visitors into booked appointments in under 60 seconds.
                            </p>
                        </div>

                        {/* Pillar 3 */}
                        <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-primary/50 transition-colors">
                            <h3 className="text-xl font-bold text-primary mb-3">Pillar 3: Our Proprietary Conversion Architecture</h3>
                            <p className="text-gray-300 mb-4">
                                Stop relying on passive contact forms that go to an inbox no one checks. We implement a <strong className="text-white">Conversion Architecture</strong> designed to capture revenue 24/7.
                            </p>
                            <ul className="list-disc pl-5 text-gray-300 space-y-2">
                                <li>
                                    <strong className="text-white">The "After-Hours" Protocol:</strong> <strong className="text-white">40% of appointments are booked after hours</strong> when you are closed. Our system captures, qualifies, and secures these leads automatically, ensuring you never miss a deal just because it’s 9:00 PM.
                                </li>
                            </ul>
                        </div>

                        {/* Pillar 4 */}
                        <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-primary/50 transition-colors">
                            <h3 className="text-xl font-bold text-primary mb-3">Pillar 4: Entity Authority & Trust</h3>
                            <p className="text-gray-300">
                                Search engines don't trust what <em>you</em> say; they trust what <em>others</em> say about you. We utilize <strong className="text-white">Consensus Optimization</strong> to align your reviews, directory listings, and "digital footprint" across the web. This signals to the algorithms that you are a "Safe Recommendation."
                            </p>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="mb-16 bg-gradient-to-br from-primary/20 via-black to-black border border-primary/30 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold mb-6 text-white font-heading">Need Help Converting Eyes Into Appointments?</h2>
                        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                            We don't just build websites. We build <strong>Client Acquisition Systems</strong> designed to get more people into your business.
                        </p>

                        <div className="grid md:grid-cols-3 gap-6 text-left mb-8">
                            <div className="bg-black/50 p-4 rounded-lg border border-white/5">
                                <h4 className="font-bold text-primary mb-2">1. Improved Visibility</h4>
                                <p className="text-sm text-gray-400">AEO strategy ensures you are the recommended answer.</p>
                            </div>
                            <div className="bg-black/50 p-4 rounded-lg border border-white/5">
                                <h4 className="font-bold text-primary mb-2">2. Conversion Architecture</h4>
                                <p className="text-sm text-gray-400">Turn visitors into booked appointments instantly.</p>
                            </div>
                            <div className="bg-black/50 p-4 rounded-lg border border-white/5">
                                <h4 className="font-bold text-primary mb-2">3. Greater Credibility</h4>
                                <p className="text-sm text-gray-400">Establish immediate authority with trust-optimized designs.</p>
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
