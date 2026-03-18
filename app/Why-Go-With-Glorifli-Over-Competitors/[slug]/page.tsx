import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, CheckCircle2, X, Minus } from 'lucide-react';

// ── Competitor data ──────────────────────────────────────────────────────────
const competitors: Record<string, {
    name: string;
    slug: string;
    tagline: React.ReactNode;
    description: React.ReactNode;
    directAnswer: React.ReactNode;

    glorifliSiteCost: string;
    competitorSiteCost: string;

    glorifliMonthly: string;
    competitorMonthly: string;

    glorifliGuarantee: string;
    competitorGuarantee: string;

    glorifliAEO: string;
    competitorAEO: string;

    glorifliRisk: string;
    competitorRisk: string;

    bestForCompetitor: React.ReactNode;
    bestForGlorifli: React.ReactNode;

    faq: { q: string; a: string }[];
}> = {
    smartsites: {
        name: 'SmartSites',
        slug: 'smartsites',
        tagline: 'Full-Service SEO, PPC & Web Design Agency',
        description: <>SmartSites is a top-rated full-service digital agency offering SEO, PPC, and web design with a strong reputation across industries. <a href="https://www.smartsites.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors underline underline-offset-2">Visit their website</a>.</>,
        directAnswer: <>Glorifli and SmartSites both build websites and run <Link href="/services/autonomous-revenue-engine-for-service-businesses" className="text-primary hover:underline underline-offset-2">SEO campaigns</Link>, but they serve different market segments. SmartSites is a strong full-service agency best suited for mid-market or growing businesses with larger budgets. Glorifli is purpose-built for single-location local service businesses — offering a lower all-in price (<Link href="/services/custom-website-for-service-businesses" className="text-primary hover:underline underline-offset-2">$1,256.50 setup</Link> + $589.50/mo), an explicit AEO system, and a 10-appointments-in-60-days guarantee that SmartSites does not publicly offer.</>,

        glorifliSiteCost: '$1,256.50 one-time (conversion-optimized, booking-ready)',
        competitorSiteCost: '$2,500–$10,000+ for a comparable custom build',

        glorifliMonthly: '$589.50/mo — 8 AEO/SEO blogs, GBP sync, citation network',
        competitorMonthly: '$1,800–$2,600+/mo for SEO; PPC requires additional budget',

        glorifliGuarantee: '10 new booked appointments in 60 days or no service fee — we work free until the milestone is hit',
        competitorGuarantee: 'No public "appointments or free" guarantee; success is framed as increased traffic and ROI',

        glorifliAEO: 'Built-in from day 1 — structured to be cited by ChatGPT, Perplexity, and Google AI Overviews',
        competitorAEO: 'Focuses on traditional SEO and local visibility; AEO/LLM optimization not emphasized on public pricing pages',

        glorifliRisk: 'Low — flat cost, clear milestone, no long-term contract',
        competitorRisk: 'Medium–High — sizeable monthly commitment with no outcome-specific guarantee',

        bestForCompetitor: 'SmartSites is a great fit for businesses with $2,000+/mo marketing budgets, multi-location operations, or those needing PPC alongside SEO — especially if you already have a website and want a well-known agency name behind your campaigns.',
        bestForGlorifli: <>Glorifli is the better choice for a single-location service business (HVAC, roofing, plumbing, etc.) that needs a high-converting website, <Link href="/services/autonomous-revenue-engine-for-service-businesses" className="text-primary hover:underline underline-offset-2">AEO infrastructure</Link>, and a clear guarantee — without committing to enterprise-level retainers.</>,

        faq: [
            { q: 'Is SmartSites good for small local businesses?', a: 'SmartSites has a strong reputation and produces results, but their pricing (often $1,800–$2,600+/mo for SEO alone) is typically higher than what a single-location local service business needs in their first year. Glorifli offers comparable SEO/AEO capability at $589.50/mo with an outcome guarantee.' },
            { q: 'Does SmartSites guarantee booked appointments?', a: 'SmartSites does not publicly offer a "booked appointments or free" style guarantee. Their success metrics are typically framed around traffic growth, keyword rankings, and ROI improvements. Glorifli guarantees 10 new booked appointments in 60 days or waives the service fee.' },
            { q: 'What is the biggest difference between Glorifli and SmartSites?', a: 'Price and guarantee. Glorifli\'s all-in launch cost ($1,256.50 site + $589.50/mo SEO/AEO) is significantly lower, and we tie our service fee to a specific outcome — booked appointments — not vanity metrics.' },
        ],
    },

    victorious: {
        name: 'Victorious SEO',
        slug: 'victorious',
        tagline: 'Enterprise-Level SEO & Content Agency',
        description: <>Victorious is a premium SEO agency designed for larger budgets, with advanced link-building, content strategy, and long-term organic growth campaigns. <a href="https://victoriousseo.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors underline underline-offset-2">Visit their website</a>.</>,
        directAnswer: <>Victorious is an enterprise-grade SEO agency with entry plans starting around $4,999/month — a budget that is typically out of reach for single-location local service businesses. Glorifli targets the same outcome (more clients from organic search) at a fraction of the cost ($589.50/mo), with an explicit <Link href="/blog/what-is-aeo-for-home-service-businesses" className="text-primary hover:underline underline-offset-2">AEO layer</Link> built for AI search and a <Link href="/Why-Go-With-Glorifli-Over-Competitors" className="text-primary hover:underline underline-offset-2">10-appointment guarantee</Link> that Victorious does not offer.</>,

        glorifliSiteCost: '$1,256.50 one-time (conversion-optimized, booking-ready)',
        competitorSiteCost: 'Not a primary service — Victorious typically works with existing sites',

        glorifliMonthly: '$589.50/mo — 8 AEO/SEO blogs, GBP sync, citation network',
        competitorMonthly: '$4,999–$20,000+/mo for full SEO campaigns',

        glorifliGuarantee: '10 new booked appointments in 60 days or no service fee — we work free until the milestone is hit',
        competitorGuarantee: 'No "pay only if X clients" offer; value is framed around long-term organic growth',

        glorifliAEO: 'Built-in from day 1 — structured to be cited by ChatGPT, Perplexity, and Google AI Overviews',
        competitorAEO: 'Discusses AI/generative search, but not positioned as a small-business AEO bundle',

        glorifliRisk: 'Low — flat cost, clear milestone, no long-term contract',
        competitorRisk: 'High — powerful for funded companies, but overkill and expensive for single-location local businesses',

        bestForCompetitor: 'Victorious is ideal for funded companies, e-commerce brands, or established businesses with $5,000+/mo SEO budgets who need aggressive link-building and a dedicated account team. If organic rankings are a top-line business priority with budget to match, Victorious delivers.',
        bestForGlorifli: <>Glorifli is built for local service businesses that can't justify $5,000+ per month on SEO alone. If you need a website, AEO infrastructure, GBP optimization, and content — all tied to a <Link href="/Why-Go-With-Glorifli-Over-Competitors" className="text-primary hover:underline underline-offset-2">booked-appointment guarantee</Link> — Glorifli provides that system at $589.50/mo.</>,

        faq: [
            { q: 'Is Victorious SEO worth it for a small local business?', a: 'Victorious is powerful but typically priced for larger organizations. Their entry-level plans start near $5,000/month — which represents a significant financial commitment for a single-location service business. Glorifli provides comparable organic visibility at $589.50/mo, purpose-built for local appointment booking.' },
            { q: 'How does Glorifli compare to Victorious on AEO?', a: 'Victorious discusses AI and generative search in an advanced context, but doesn\'t offer it as a packaged system for small local businesses. Glorifli explicitly builds every page and blog post using AEO principles — structured data, direct-answer formatting, and GBP sync — so AI assistants cite your business.' },
            { q: 'Does Victorious guarantee results?', a: 'Victorious does not currently offer a public "leads or free" guarantee. Glorifli guarantees 10 booked appointments in 60 days or waives the service fee entirely, continuing to work free until that milestone is reached.' },
        ],
    },

    npackel: {
        name: 'NPAccel',
        slug: 'npackel',
        tagline: 'Performance-Focused Local SEO Agency',
        description: <>NPAccel is a local SEO agency focused on leads and revenue rather than pure rankings, serving small and medium-sized businesses. <a href="https://npaccel.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors underline underline-offset-2">Visit their website</a>.</>,
        directAnswer: <>NPAccel and Glorifli are both focused on generating leads for local service businesses rather than chasing vanity rankings. The key differences are price, guarantee, and <Link href="/blog/what-is-aeo-for-home-service-businesses" className="text-primary hover:underline underline-offset-2">AEO</Link>. NPAccel's local SEO packages commonly start in the low-to-mid four figures per month with a conventional retainer model. Glorifli offers the same local-focused outcome at $589.50/mo — with an explicit <Link href="/services/autonomous-revenue-engine-for-service-businesses" className="text-primary hover:underline underline-offset-2">AEO system</Link> and a 10-appointments-or-free guarantee that NPAccel does not currently publicly offer.</>,

        glorifliSiteCost: '$1,256.50 one-time (conversion-optimized, booking-ready)',
        competitorSiteCost: 'Separate engagement when site work is needed',

        glorifliMonthly: '$589.50/mo — 8 AEO/SEO blogs, GBP sync, citation network',
        competitorMonthly: 'Low-to-mid four figures per month for SMB local SEO',

        glorifliGuarantee: '10 new booked appointments in 60 days or no service fee — we work free until the milestone is hit',
        competitorGuarantee: 'Lead and revenue growth framed as the goal, but no clear "or we work free" guarantee publicly stated',

        glorifliAEO: 'Built-in from day 1 — structured to be cited by ChatGPT, Perplexity, and Google AI Overviews',
        competitorAEO: 'Mentions AI/GEO in broader SEO context but not as a packaged AEO system for small local businesses',

        glorifliRisk: 'Low — flat cost, clear milestone, no long-term contract',
        competitorRisk: 'Medium–High — strong local focus, but conventional retainer model means you carry the performance risk',

        bestForCompetitor: 'NPAccel is a solid option for local businesses with a meaningful marketing budget who want an agency focused on lead generation rather than just rankings. If your business generates enough revenue to absorb a mid-to-high four-figure monthly retainer comfortably, NPAccel is worth evaluating.',
        bestForGlorifli: <>Glorifli is the better fit when you want local-intent content, GBP management, <Link href="/services/autonomous-revenue-engine-for-service-businesses" className="text-primary hover:underline underline-offset-2">AEO infrastructure</Link>, and a site — all tied to a specific guarantee — without the conventional retainer risk. Ideal for business owners who want skin-in-the-game performance alignment.</>,

        faq: [
            { q: 'How does Glorifli differ from NPAccel for local service businesses?', a: 'Both focus on local lead generation, but Glorifli includes a website, AEO infrastructure for AI search, and a 10-appointment guarantee — all at $589.50/mo. NPAccel packages typically start higher and operate on a conventional retainer without a public outcome guarantee.' },
            { q: 'Does NPAccel offer AEO optimization?', a: 'NPAccel mentions AI and GEO in a broader context, but doesn\'t package it as an explicit AEO system for small local businesses. Glorifli builds every deliverable — blogs, pages, schema — with AEO principles so your business gets cited by ChatGPT, Perplexity, and Google AI.' },
            { q: 'Is a retainer model riskier than a guarantee model?', a: 'In a retainer model, you pay every month regardless of whether the lead volume target is hit — the performance risk sits with you. In Glorifli\'s model, if 10 booked appointments aren\'t delivered in 60 days, the service fee is waived until the milestone is reached. The performance risk sits with Glorifli.' },
        ],
    },

    'web-design-agencies': {
        name: 'Big-Name Web Design Agencies',
        slug: 'web-design-agencies',
        tagline: 'Custom Site Builds for Polished Marketing Presences',
        description: <>Large web design agencies build polished, custom marketing sites across industries — often with beautiful design but without built-in <Link href="/services/autonomous-revenue-engine-for-service-businesses" className="text-white hover:text-primary transition-colors underline underline-offset-2">lead generation engines</Link>, AEO, or appointment guarantees.</>,
        directAnswer: <>Big-name web design agencies typically charge $2,500–$10,000+ for a custom site, then upsell ongoing SEO retainers at $1,000–$3,000+/mo. They rarely guarantee specific booked appointments — success is measured as a "beautiful site" plus traffic growth. Glorifli builds a high-converting, <Link href="/services/autonomous-revenue-engine-for-service-businesses" className="text-primary hover:underline underline-offset-2">AEO-optimized</Link> site for a $1,256.50 one-time fee with the SEO/AEO system running at $589.50/mo and a 10-appointment guarantee — not just a portfolio piece.</>,

        glorifliSiteCost: '$1,256.50 one-time — conversion wireframes, booking, AEO-ready',
        competitorSiteCost: '$2,500–$10,000+ for a comparable custom build — often before SEO is added',

        glorifliMonthly: '$589.50/mo — 8 AEO/SEO blogs, GBP sync, citation network',
        competitorMonthly: '$1,000–$3,000+/mo SEO upsell (often a separate team or partner agency)',

        glorifliGuarantee: '10 new booked appointments in 60 days or no service fee — we work free until the milestone is hit',
        competitorGuarantee: 'Rarely guarantee specific booked appointments — success defined as design delivery and traffic',

        glorifliAEO: 'Built-in from day 1 — structured to be cited by ChatGPT, Perplexity, and Google AI Overviews',
        competitorAEO: 'May add basic schema for "SEO-friendly" builds, but typically not AEO/LLM-native',

        glorifliRisk: 'Low — flat cost, clear milestone, no long-term contract',
        competitorRisk: 'Medium — you get a professional site, but no built-in client acquisition guarantee',

        bestForCompetitor: 'Big-name web design agencies are a strong fit for established businesses, funded startups, or brands that need a highly polished visual identity as a primary priority — especially for investor pitches, rebrands, or markets where brand perception is a dominant buying factor.',
        bestForGlorifli: <>Glorifli is purpose-built for local service businesses where the <Link href="/services/custom-website-for-service-businesses" className="text-primary hover:underline underline-offset-2">website's main job</Link> is to generate booked appointments. If you need a great-looking, conversion-optimized site with AEO infrastructure and a performance guarantee — not just a design award — Glorifli is the better fit.</>,

        faq: [
            { q: 'Why is a web design agency not enough for a local service business?', a: 'A visually stunning website is a starting point, not a system. Without AEO infrastructure, mobile-optimized booking funnels, and ongoing SEO content, even a $10,000 custom site can sit idle. Glorifli builds the traffic and conversion engine alongside the site.' },
            { q: 'Do web design agencies guarantee appointments?', a: 'Almost no web design agency publicly guarantees a specific number of booked appointments. Their deliverable is the site itself — traffic and conversions are framed as dependent on many external factors. Glorifli\'s deliverable is the outcome: 10 booked appointments in 60 days.' },
            { q: 'Is $1,256.50 for a business website too good to be true?', a: 'Glorifli\'s $1,256.50 setup fee reflects a focused, conversion-first build — not a custom brand identity agency project. The site is built on a proven high-converting template optimized for local service businesses, with booking integration, schema markup, and AEO-ready page structure.' },
        ],
    },

    'local-seo-agencies': {
        name: 'Typical Local SEO Agencies',
        slug: 'local-seo-agencies',
        tagline: 'Rankings, GBP Management & Basic Content',
        description: <>Typical local SEO agencies focus on keyword rankings, <Link href="/blog/google-business-profile-for-contractors-complete-guide" className="text-white hover:text-primary transition-colors underline underline-offset-2">Google Business Profile citations</Link>, and basic blog content — usually on a monthly retainer without outcome-specific guarantees.</>,
        directAnswer: <>Typical local SEO agencies charge $500–$2,000+/mo on retainer and focus on keyword rankings and GBP management. They rarely offer a guarantee tied to booked appointments. Glorifli operates in a similar price range ($589.50/mo) but adds an explicit <Link href="/services/autonomous-revenue-engine-for-service-businesses" className="text-primary hover:underline underline-offset-2">AEO layer</Link> (built for ChatGPT and Google AI), 8 monthly blog posts, and a 10-appointments-in-60-days guarantee that most local SEO agencies don't offer.</>,

        glorifliSiteCost: '$1,256.50 one-time — conversion-optimized, AEO-ready, booking-integrated',
        competitorSiteCost: 'Sometimes a templated site or basic redesign included in packages (low thousands)',

        glorifliMonthly: '$589.50/mo — 8 AEO/SEO blogs, GBP sync, citation network',
        competitorMonthly: '$500–$2,000+/mo, with stronger providers starting near $1,600/mo',

        glorifliGuarantee: '10 new booked appointments in 60 days or no service fee — we work free until the milestone is hit',
        competitorGuarantee: 'Most avoid hard guarantees; may promise "improved visibility" — not specific appointments',

        glorifliAEO: 'Built-in from day 1 — structured to be cited by ChatGPT, Perplexity, and Google AI Overviews',
        competitorAEO: 'Focus is mainly traditional SEO and maps rankings; few explicitly optimize for AEO/AI assistants',

        glorifliRisk: 'Low — flat cost, clear milestone, no long-term contract',
        competitorRisk: 'Medium — usually locked into a monthly retainer with no precise outcome milestone',

        bestForCompetitor: 'A typical local SEO agency is a reasonable fit for businesses that already have a solid site, have some existing organic presence, and want a no-frills retainer to maintain and improve their rankings over time without switching to a new provider.',
        bestForGlorifli: <>Glorifli is the better choice when you want a website built from scratch, <Link href="/blog/what-is-aeo-for-home-service-businesses" className="text-primary hover:underline underline-offset-2">AEO optimization for AI-driven search</Link>, a content engine (8 monthly blogs), and a clear guarantee — all bundled at a comparable or lower monthly cost than most "typical" local SEO packages.</>,

        faq: [
            { q: 'What is the difference between Glorifli and a local SEO agency?', a: 'Most local SEO agencies focus on traditional keyword rankings and GBP management on a retainer with no outcome guarantee. Glorifli adds an AEO layer, 8 monthly blogs, a high-converting website build, and a 10-appointment guarantee — at a similar or lower monthly price.' },
            { q: 'Why don\'t most local SEO agencies offer guarantees?', a: 'Guaranteeing specific revenue outcomes is difficult when the agency doesn\'t control the site, the offer, or the sales process. Glorifli controls the full funnel — site build, content, AEO, and GBP — which allows us to tie the service fee to a specific milestone.' },
            { q: 'Is a $500/mo local SEO retainer worth it compared to Glorifli?', a: 'A $500/mo budget is the low end of local SEO. At that price, most agencies provide basic GBP management and limited content. For $89.50 more per month, Glorifli provides 8 AEO-optimized blogs, full GBP sync, citation building, and a 10-appointment guarantee.' },
        ],
    },
};

export async function generateStaticParams() {
    return Object.keys(competitors).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const c = competitors[slug];
    if (!c) return {};
    return {
        title: `Glorifli vs ${c.name} | Honest Comparison for Local Service Businesses`,
        description: `See how Glorifli compares to ${c.name} on pricing, guarantees, AEO capability, and risk profile — so you can make the best choice for your local service business.`,
        openGraph: {
            title: `Glorifli vs ${c.name}`,
            description: `An honest comparison of Glorifli and ${c.name} for local service businesses.`,
            url: `https://glorifli.com/Why-Go-With-Glorifli-Over-Competitors/${slug}`,
            type: 'article',
            images: ['https://glorifli.com/images/blog/featured-hero.png'],
        },
        alternates: { canonical: `https://glorifli.com/Why-Go-With-Glorifli-Over-Competitors/${slug}` },
    };
}

export default async function CompetitorPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const c = competitors[slug];
    if (!c) notFound();

    const comparisonSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        '@id': `https://glorifli.com/Why-Go-With-Glorifli-Over-Competitors/${slug}#webpage`,
        url: `https://glorifli.com/Why-Go-With-Glorifli-Over-Competitors/${slug}`,
        name: `Glorifli vs ${c.name} — Which Is Better?`,
        description: c.description,
        breadcrumb: {
            '@type': 'BreadcrumbList',
            itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://glorifli.com' },
                { '@type': 'ListItem', position: 2, name: 'Compare', item: 'https://glorifli.com/Why-Go-With-Glorifli-Over-Competitors' },
                { '@type': 'ListItem', position: 3, name: `Glorifli vs ${c.name}`, item: `https://glorifli.com/Why-Go-With-Glorifli-Over-Competitors/${slug}` },
            ],
        },
    };

    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: c.faq.map((f) => ({
            '@type': 'Question',
            name: f.q,
            acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
    };

    const comparisons = [
        { label: 'Website Cost', glorifli: c.glorifliSiteCost, competitor: c.competitorSiteCost },
        { label: 'Monthly SEO/AEO', glorifli: c.glorifliMonthly, competitor: c.competitorMonthly },
        { label: 'Performance Guarantee', glorifli: c.glorifliGuarantee, competitor: c.competitorGuarantee },
        { label: 'AEO / AI Search', glorifli: c.glorifliAEO, competitor: c.competitorAEO },
        { label: 'Risk Profile', glorifli: c.glorifliRisk, competitor: c.competitorRisk },
    ];

    return (
        <div className="bg-black min-h-screen text-white">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(comparisonSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            {/* ── Hero ── */}
            <section className="relative pt-32 pb-20 px-6 overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/8 rounded-full blur-[140px] pointer-events-none" />
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
                        <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                        <span className="text-xs font-semibold text-accent uppercase tracking-widest">Honest Comparison</span>
                    </div>
                    <p className="text-sm text-gray-500 uppercase tracking-widest font-semibold mb-3">Glorifli vs</p>
                    <h1 className="text-4xl md:text-6xl font-bold font-heading tracking-tighter leading-tight mb-6">
                        <span className="text-primary">{c.name}</span>
                    </h1>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">{c.description}</p>

                    <div className="flex items-center justify-between mb-8">
                        <Link href="/Why-Go-With-Glorifli-Over-Competitors" className="text-sm text-gray-500 hover:text-primary transition-colors flex items-center gap-1.5">
                            <ArrowRight className="w-4 h-4 rotate-180" /> Back to all comparisons
                        </Link>
                        <span className="text-xs font-semibold text-primary uppercase tracking-widest px-3 py-1 bg-primary/10 rounded-full border border-primary/20">
                            Objective Comparison
                        </span>
                    </div>
                </div>
            </section>

            <div className="max-w-4xl mx-auto px-6 pb-24">

                {/* ── Direct Answer (AEO paragraph) ── */}
                <section className="mb-20 scroll-mt-24" id="overview">
                    <p className="text-gray-200 text-lg leading-relaxed border-l-4 border-primary pl-5 py-1 bg-white/3 rounded-r-xl">
                        {c.directAnswer}
                    </p>
                </section>

                {/* ── Side-by-Side Comparison ── */}
                <section className="mb-20 scroll-mt-24" id="side-by-side">
                    <h2 className="text-3xl font-bold mb-2 font-heading text-white">Glorifli vs {c.name}: Side-by-Side</h2>
                    <p className="text-gray-500 mb-8">A factual breakdown across the factors that matter most to a local service business.</p>
                    <div className="rounded-2xl border border-white/10 overflow-hidden">
                        <div className="grid grid-cols-3 bg-white/5 border-b border-white/10 text-xs font-bold uppercase tracking-widest text-gray-400">
                            <div className="px-5 py-4">Factor</div>
                            <div className="px-5 py-4 text-primary">Glorifli</div>
                            <div className="px-5 py-4">{c.name}</div>
                        </div>
                        {comparisons.map((row, i) => (
                            <div key={row.label} className={`grid grid-cols-3 border-b border-white/5 text-sm ${i % 2 === 0 ? 'bg-transparent' : 'bg-white/2'}`}>
                                <div className="px-5 py-5 font-semibold text-gray-300">{row.label}</div>
                                <div className="px-5 py-5 text-gray-200 border-l border-primary/20 bg-primary/3">
                                    <CheckCircle2 className="w-4 h-4 text-primary inline mr-1.5 flex-shrink-0" />
                                    {row.glorifli}
                                </div>
                                <div className="px-5 py-5 text-gray-400 border-l border-white/5">
                                    <Minus className="w-4 h-4 text-gray-600 inline mr-1.5 flex-shrink-0" />
                                    {row.competitor}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── Best For ── */}
                <section className="mb-20 scroll-mt-24" id="best-for">
                    <h2 className="text-3xl font-bold mb-8 font-heading text-white">Who Is Each Option Best For?</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-7 hover:border-white/20 transition-colors">
                            <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">{c.name} is best for:</p>
                            <p className="text-gray-300 leading-relaxed">{c.bestForCompetitor}</p>
                        </div>
                        <div className="bg-primary/5 border border-primary/30 rounded-2xl p-7 hover:border-primary/50 transition-colors">
                            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">Glorifli is best for:</p>
                            <p className="text-gray-200 leading-relaxed">{c.bestForGlorifli}</p>
                        </div>
                    </div>
                </section>

                {/* ── Why Our Guarantee Matters ── */}
                <section className="mb-20 scroll-mt-24" id="guarantee">
                    <h2 className="text-3xl font-bold mb-6 font-heading text-white">Why Our Guarantee Matters More Than "More Traffic"</h2>
                    <p className="text-gray-200 text-lg leading-relaxed mb-4 border-l-4 border-accent pl-5">
                        Most agencies — including {c.name} — measure success by <em>traffic</em>, <em>keyword rankings</em>, or <em>impressions</em>. A local service business lives or dies by one number: <strong className="text-white">booked appointments</strong>.
                    </p>
                    <p className="text-gray-400 text-lg leading-relaxed mb-4">
                        Glorifli's guarantee: 10 new appointments booked in your first 60 days after launch, or the $589.50/mo service fee is waived — we keep working until that milestone is hit. No vague "improved visibility," no retainer while you wait 12 months.
                    </p>
                    <div className="grid md:grid-cols-3 gap-5 mt-8">
                        {[
                            { step: 'Step 1', title: 'Pay $1,256.50 Setup', desc: 'Site goes live. 60-day clock starts. First month of SEO/AEO runs free.' },
                            { step: 'Step 2', title: 'We Deliver 10 Appointments', desc: 'AEO content, GBP sync, and citations drive local intent traffic to your booking engine.' },
                            { step: 'Step 3', title: 'Milestone Hit, You Decide', desc: 'Once 10 appointments are booked, choose to continue at $589.50/mo. No contract pressure.' },
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
                <section className="mb-20 scroll-mt-24" id="faq">
                    <h2 className="text-3xl font-bold mb-8 font-heading text-white">Common Questions About Glorifli vs {c.name}</h2>
                    <div className="space-y-4">
                        {c.faq.map((f, i) => (
                            <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-primary/30 transition-colors">
                                <h3 className="text-lg font-bold text-white mb-3">{f.q}</h3>
                                <p className="text-gray-400 leading-relaxed text-sm md:text-base">{f.a}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── CTA ── */}
                <section className="bg-gradient-to-br from-primary/20 via-black to-black border border-primary/30 rounded-3xl p-10 md:p-14 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full pointer-events-none" />
                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold mb-4 text-white font-heading">
                            See If Glorifli Is the Right Fit for Your Business
                        </h2>
                        <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                            Book a free 20-minute strategy call. We'll be honest about whether our system fits your situation — and if it doesn't, we'll tell you.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/#calendar"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-black font-bold rounded-full hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/20"
                            >
                                Book Your Free Strategy Call
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                            <Link
                                href="/about"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-full hover:bg-white/10 hover:border-primary/40 transition-all duration-300"
                            >
                                Learn About Glorifli
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                        <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-gray-500">
                            {['10 Appointments in 60 Days', 'No Long-Term Contracts', 'No Hidden Fees', 'AEO Built-In from Day 1'].map((t) => (
                                <span key={t} className="flex items-center gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-primary" /> {t}
                                </span>
                            ))}
                        </div>
                        <div className="text-center mt-12 pt-8 border-t border-white/10">
                            <p className="text-gray-400 mb-4">Want to see how we stack up against other agencies and platforms?</p>
                            <div className="flex justify-center gap-6">
                                <Link href="/Why-Go-With-Glorifli-Over-Competitors" className="text-sm text-gray-500 hover:text-primary transition-colors">
                                    View all comparisons <ArrowRight className="w-3 h-3 inline ml-1" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
