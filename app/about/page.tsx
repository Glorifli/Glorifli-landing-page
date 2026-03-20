import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Star, Zap, Shield, Users } from 'lucide-react';

export const metadata: Metadata = {
    title: "About Glorifli | Who Builds Your Client Acquisition System?",
    description: "Glorifli is a specialized digital growth agency founded by Brendan Dillon. We build AEO/SEO-optimized websites that guarantee 10 new leads in 60 days — or we work free until we do.",
    openGraph: {
        title: "About Glorifli — Who Builds Your Client Acquisition System?",
        description: "Learn how Glorifli's 4-Pillar Growth Protocol uses AEO, SEO, and Conversion Architecture to turn local service businesses into lead-generating machines.",
        images: ["https://glorifli.com/images/blog/featured-hero.png"],
        url: "https://glorifli.com/about",
        type: "website",
    },
    alternates: {
        canonical: "https://glorifli.com/about",
    },
};

const AboutPage = () => {
    // --- Schema Data ---
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": "https://glorifli.com/#organization",
        name: "Glorifli",
        url: "https://glorifli.com",
        logo: "https://glorifli.com/logo.png",
        foundingDate: "2025",
        description:
            "Glorifli is a specialized digital growth agency that builds AEO/SEO-optimized websites and client acquisition systems for local service businesses. We guarantee 10 new leads in 60 days or we work free.",
        founder: {
            "@type": "Person",
            "@id": "https://glorifli.com/#founder",
            name: "Brendan Dillon",
            jobTitle: "Founder & Lead Strategist",
            url: "https://www.linkedin.com/in/brendan-dillon-341035377",
            sameAs: [
                "https://www.linkedin.com/in/brendan-dillon-341035377",
                "https://www.youtube.com/@BrendanDillon22",
                "https://www.instagram.com/brendan.dillon.business/",
            ],
        },
        areaServed: [
            { "@type": "Country", name: "United States" },
        ],
        serviceType: [
            "Website Design",
            "SEO Optimization",
            "Answer Engine Optimization",
            "Google Business Profile Management",
            "Lead Generation",
        ],
        sameAs: [
            "https://www.google.com/maps/place/Glorifli/data=!4m2!3m1!1s0x0:0x5eea403674673dc6",
            "https://www.linkedin.com/in/brendan-dillon-341035377",
            "https://www.youtube.com/@BrendanDillon22",
            "https://www.instagram.com/brendan.dillon.business/",
        ],
    };

    const aboutPageSchema = {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "@id": "https://glorifli.com/about#webpage",
        url: "https://glorifli.com/about",
        name: "About Glorifli",
        description:
            "Learn who Glorifli is, how the 4-Pillar Growth Protocol works, and why local service businesses choose us for AEO/SEO-driven lead generation.",
        breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://glorifli.com" },
                { "@type": "ListItem", position: 2, name: "About", item: "https://glorifli.com/about" },
            ],
        },
        mainEntity: { "@id": "https://glorifli.com/#organization" },
    };

    const faqs = [
        {
            question: "What is the difference between a website and a Client Acquisition System?",
            answer:
                "A website is a static brochure that tells people who you are. A Client Acquisition System is a dynamic engine that actively attracts traffic via AEO/SEO, captures leads via mobile-optimized funnels, and converts them via proven Conversion Architecture. Glorifli builds systems, not just websites.",
        },
        {
            question: "Why does AEO (Answer Engine Optimization) matter for local businesses?",
            answer:
                "AEO matters because 58% of Google searches now end without a click — AI tools like ChatGPT, Perplexity, and Google's AI Overviews answer the user's question directly. If your business isn't the cited answer for queries like 'best plumber near me,' you're invisible. We ensure you're the authority AI recommends.",
        },
        {
            question: "What industries does Glorifli work with?",
            answer:
                "Glorifli works with local service businesses across home services (roofing, HVAC, plumbing, landscaping, remodeling), healthcare, legal, and professional services. The principles of Entity Authority, AEO, and E-E-A-T apply universally — if you serve local clients, we can build your acquisition system.",
        },
        {
            question: "How quickly can I see results with Glorifli's strategy?",
            answer:
                "Unlike traditional SEO that takes 6–12 months, our AEO-focused strategy can generate results in 4–8 weeks because we target specific high-intent queries rather than generic keywords. We guarantee 10 new leads within 60 days of your $1,256.50 setup payment — or the SEO/AEO service keeps running free until we deliver.",
        },
        {
            question: "What does Glorifli's guarantee actually cover?",
            answer:
                "The guarantee covers 10 booked leads within 60 days of your setup fee payment. During that period, the $589.50/month SEO/AEO service runs completely free. If we miss the 10-lead target, the service continues at no charge until we hit it. There are no hidden fees, no long-term contracts, and the guarantee never expires.",
        },
        {
            question: "Who is Brendan Dillon, the founder of Glorifli?",
            answer:
                "Brendan Dillon is the founder and lead strategist of Glorifli. He specializes in Answer Engine Optimization (AEO), conversion architecture, and building client acquisition systems for local service businesses. He founded Glorifli in 2025 with the mission to serve clients with radical transparency and a performance-first guarantee.",
        },
    ];

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
    };

    const stats = [
        { value: "58%", label: "of Google searches end without a click — AEO captures these" },
        { value: "82%", label: "of service appointments are booked via mobile search" },
        { value: "25–45%", label: "close rate for SEO/AEO leads vs 2–5% for paid ads" },
        { value: "60 Days", label: "to 10 guaranteed leads — or we work free until we deliver" },
    ];

    const pillars = [
        {
            icon: Zap,
            number: "01",
            title: "AEO & SEO Infrastructure",
            heading: "How does Glorifli make your business the AI-recommended answer?",
            body: "We build your site using Server-Side Rendering and nested Schema Markup so that AI assistants (ChatGPT, Perplexity, Google AI) cite your business when users ask high-intent questions. Our 8 monthly AEO/SEO-optimized blog posts target the exact questions your ideal clients are searching for.",
        },
        {
            icon: Users,
            number: "02",
            title: "Mobile-First Booking Engine",
            heading: "Why does mobile optimization drive more revenue?",
            body: "82% of service appointments are booked via mobile search. We build friction-free, lightning-fast mobile funnels that convert visitors into booked appointments in under 60 seconds — no pinch-to-zoom, no confusion, no drop-off.",
        },
        {
            icon: Shield,
            number: "03",
            title: "Conversion Architecture",
            heading: "How does Glorifli turn website visitors into paying clients?",
            body: "Passive contact forms lose 40% of after-hours inquiries. We implement systems that capture, qualify, and schedule leads automatically — even while you sleep. Our Conversion Architecture uses direct-response design at the exact point of highest user intent.",
        },
        {
            icon: Star,
            number: "04",
            title: "Entity Authority & Trust",
            heading: "How do you get ChatGPT and Google to trust and recommend your business?",
            body: "AI models trust what others say, not what you say about yourself. We use Consensus Optimization — aligning your reviews, directory listings, and digital footprint across the web — so algorithms view you as the Safe Recommendation, backed by strong E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness).",
        },
    ];

    return (
        <div className="bg-black min-h-screen text-white">
            {/* JSON-LD Schemas */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            {/* ── Hero ── */}
            <section className="relative pt-32 pb-20 px-6 overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/8 rounded-full blur-[140px] pointer-events-none" />
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
                        <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                        <span className="text-xs font-semibold text-accent uppercase tracking-widest">Performance-Guaranteed Agency</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold font-heading tracking-tighter leading-tight mb-6">
                        Who Is Glorifli — and{' '}
                        <span className="text-primary">Why Do We Guarantee Results?</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        Glorifli is a specialized digital growth agency founded by Brendan Dillon. We build <Link href="/services/autonomous-revenue-engine-for-service-businesses" className="text-primary hover:underline underline-offset-2">AEO/SEO-optimized client acquisition systems</Link> for local service businesses — and we put our money where our mouth is.
                    </p>
                </div>
            </section>

            <div className="max-w-4xl mx-auto px-6 pb-20">

                {/* ── Who Is Glorifli ── */}
                <section className="mb-20 scroll-mt-24" id="who-we-are">
                    <h2 className="text-3xl font-bold mb-6 text-white font-heading">
                        What Is Glorifli and What Does It Do?
                    </h2>
                    {/* Direct-answer paragraph — optimized for AI citation */}
                    <p className="text-gray-200 text-lg leading-relaxed mb-6 border-l-4 border-primary pl-5 py-1 bg-white/3 rounded-r-xl">
                        <strong className="text-white">Glorifli</strong> is an American digital growth agency based in New York, USA, that builds <Link href="/services/custom-website-for-service-businesses" className="text-white hover:text-primary transition-colors underline underline-offset-2">high-converting websites</Link> and <Link href="/services/autonomous-revenue-engine-for-service-businesses" className="text-white hover:text-primary transition-colors underline underline-offset-2">AEO/SEO content systems</Link> for local service businesses. Founded in 2025 by Brendan Dillon, Glorifli offers a <Link href="/Why-Go-With-Glorifli-Over-Competitors" className="text-white hover:text-primary transition-colors underline underline-offset-2">performance guarantee</Link>: pay the $1,256.50 setup fee, and we deliver 10 new leads within 60 days — or the SEO/AEO service continues free until we do.
                    </p>
                    <p className="text-gray-400 text-lg leading-relaxed">
                        Unlike traditional web design agencies that focus purely on aesthetics, we build what we call "Level 10" systems — digital infrastructure that ranks in search, gets cited by AI, converts mobile visitors into booked appointments, and scales without ad spend.
                    </p>
                </section>

                {/* ── Stats ── */}
                <section className="mb-20">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {stats.map((stat) => (
                            <div key={stat.value} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-primary/40 transition-colors">
                                <div className="text-3xl font-bold text-primary font-heading mb-2">{stat.value}</div>
                                <p className="text-xs text-gray-400 leading-snug">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── Why Traditional Methods Fail ── */}
                <section className="mb-20 scroll-mt-24" id="why-traditional-seo-fails">
                    <h2 className="text-3xl font-bold mb-6 text-white font-heading">
                        Why Do "Pretty" Websites Fail to Generate Leads?
                    </h2>
                    <p className="text-gray-200 text-lg leading-relaxed mb-4 border-l-4 border-accent pl-5">
                        A visually appealing website fails to generate leads when it acts as a static digital brochure rather than an active acquisition engine. In the modern search landscape, <strong className="text-white">58% of Google searches end without a click</strong> — AI tools answer the query directly, bypassing traditional blue-link results entirely.
                    </p>
                    <p className="text-gray-400 text-lg leading-relaxed mb-4">
                        For the last decade, businesses were told to "blog more" and "post on social media." But if your website isn't structured for Answer Engines (ChatGPT, Perplexity, Google AI Overviews), you're invisible to the modern consumer asking high-intent questions like <em>"Who is the best HVAC company near me?"</em>
                    </p>
                    <p className="text-gray-400 text-lg leading-relaxed">
                        At <strong className="text-white">Glorifli</strong>, we reject the Brochure Method. We build digital systems that generate and convert leads automatically — turning your website into your highest-performing salesperson.
                    </p>
                </section>

                {/* ── 4-Pillar Protocol ── */}
                <section className="mb-20 scroll-mt-24" id="glorifli-methodology">
                    <h2 className="text-3xl font-bold mb-2 text-white font-heading">
                        How Does Glorifli's 4-Pillar Growth Protocol Work?
                    </h2>
                    <p className="text-gray-500 mb-10 italic">A data-backed framework built to make your business the AI-recommended answer — and keep your calendar full.</p>

                    <div className="space-y-6">
                        {pillars.map((pillar) => (
                            <div key={pillar.number} className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-primary/40 transition-colors group">
                                <div className="flex items-start gap-6">
                                    <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                        <pillar.icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Pillar {pillar.number} — {pillar.title}</p>
                                        <h3 className="text-xl font-bold text-white mb-3">{pillar.heading}</h3>
                                        <p className="text-gray-400 leading-relaxed">{pillar.body}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── Core Values ── */}
                <section className="mb-20 scroll-mt-24" id="our-values">
                    <h2 className="text-3xl font-bold mb-6 text-white font-heading">
                        What Are Glorifli's Core Values?
                    </h2>
                    <p className="text-gray-400 text-lg leading-relaxed mb-6">
                        At Glorifli, our approach to every client relationship is rooted in one fundamental principle:
                    </p>
                    <div className="bg-gradient-to-br from-primary/10 to-transparent border border-primary/30 rounded-2xl p-8">
                        <h3 className="text-2xl font-bold text-white mb-3 font-heading">Serving Clients as Christ Served Us</h3>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            We believe true success is found in genuine service. We aim to serve each client with the same dedication, humility, and sacrificial commitment that Christ demonstrated — prioritizing your success above our own ego, acting with radical transparency, and committing to excellence not merely for profit, but as a reflection of our faith. We don't just want to build your acquisition system; we want to see you, your family, and your team flourish.
                        </p>
                    </div>
                </section>

                {/* ── The Guarantee ── */}
                <section className="mb-20 scroll-mt-24" id="the-guarantee">
                    <h2 className="text-3xl font-bold mb-6 text-white font-heading">
                        What Is Glorifli's Performance Guarantee?
                    </h2>
                    <p className="text-gray-200 text-lg leading-relaxed mb-6 border-l-4 border-primary pl-5">
                        <strong className="text-white">Glorifli's guarantee:</strong> Pay the one-time $1,256.50 setup fee. Your website goes live and the $589.50/month SEO/AEO service runs completely free. Within 60 days from payment, we deliver 10 new booked leads. If we miss that target, the SEO/AEO service continues at no charge until we hit it. The guarantee never expires.
                    </p>
                    <div className="grid md:grid-cols-3 gap-5">
                        {[
                            { step: "Step 1", title: "Pay $1,256.50 Setup Fee", desc: "Your website is built, branded, and live. 1 free month of blog content included. 60-day clock starts." },
                            { step: "Step 2", title: "SEO/AEO Runs Free", desc: "The $589.50/mo SEO/AEO service runs at no cost while we work to deliver your 10 leads." },
                            { step: "Step 3", title: "10 Leads Delivered", desc: "Once 10 leads are booked, you choose whether to continue at $589.50/mo. No pressure, no contracts." },
                        ].map(({ step, title, desc }) => (
                            <div key={step} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-primary/40 transition-colors">
                                <p className="text-xs font-bold text-primary uppercase tracking-widest mb-2">{step}</p>
                                <h4 className="font-bold text-white mb-2">{title}</h4>
                                <p className="text-sm text-gray-400">{desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── FAQ ── */}
                <section className="mb-20" id="faq">
                    <h2 className="text-3xl font-bold mb-8 text-white font-heading text-center">
                        Frequently Asked Questions About Glorifli
                    </h2>
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div key={index} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-primary/30 transition-colors">
                                <h3 className="text-lg font-bold text-white mb-3">{faq.question}</h3>
                                <p className="text-gray-400 leading-relaxed text-sm md:text-base">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── CTA ── */}
                <section className="bg-gradient-to-br from-primary/20 via-black to-black border border-primary/30 rounded-3xl p-10 md:p-14 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full pointer-events-none" />
                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold mb-4 text-white font-heading">
                            Ready to Take on 10 New Leads in 60 Days?
                        </h2>
                        <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                            Pay the $1,256.50 setup fee and we guarantee 10 booked leads within 60 days — or the SEO/AEO service keeps running free until we deliver. No contracts, no hidden fees.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/#calendar"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-black font-bold rounded-full hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/20"
                            >
                                Book Your Free Strategy Call
                                <ArrowRight className="w-4 h-4" />
                             (plus, we'll optimize your Google My Business profile for free)</Link>
                            <Link
                                href="/services"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-full hover:bg-white/10 hover:border-primary/40 transition-all duration-300"
                            >
                                View All Services
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                        <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-gray-500">
                            {["10 Leads Guaranteed", "No Long-Term Contracts", "No Hidden Fees", "SEO/AEO Free Until Results"].map((t) => (
                                <span key={t} className="flex items-center gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-primary" /> {t}
                                </span>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default AboutPage;
