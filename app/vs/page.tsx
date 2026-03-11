import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, X, Minus } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Why Glorifli vs Other SEO & Web Design Agencies | Honest Comparison',
    description: 'See how Glorifli compares to SmartSites, Victorious, NPAccel, and typical web design or local SEO agencies — pricing, guarantees, AEO, and results for local service businesses.',
    openGraph: {
        title: 'Glorifli vs Other Agencies — Honest Comparison',
        description: 'Compare Glorifli against top SEO and web design agencies on price, outcome guarantees, and AEO capability.',
        url: 'https://glorifli.com/vs',
        type: 'website',
    },
    alternates: { canonical: 'https://glorifli.com/vs' },
};

const competitors = [
    { slug: 'smartsites', name: 'SmartSites', tagline: 'Full-service SEO & web design' },
    { slug: 'victorious', name: 'Victorious SEO', tagline: 'Enterprise-level SEO agency' },
    { slug: 'npackel', name: 'NPAccel', tagline: 'Performance-focused local SEO' },
    { slug: 'web-design-agencies', name: 'Big-Name Web Design Agencies', tagline: 'Polished custom site builds' },
    { slug: 'local-seo-agencies', name: 'Typical Local SEO Agencies', tagline: 'Rankings, GBP & basic content' },
];

const tableRows = [
    {
        provider: 'Glorifli',
        isGlorifli: true,
        focus: 'High-converting websites + SEO/AEO for booked appointments',
        siteCost: '$1,256.50 one-time',
        monthly: '$589.50/mo (8 blogs, GBP sync, citations)',
        guarantee: 'Yes — 3 new appointments in month 1 or you don\'t pay the service fee',
        risk: 'Low',
        aeo: 'Yes — explicitly built-in',
    },
    {
        provider: 'SmartSites',
        isGlorifli: false,
        focus: 'Full-service digital: SEO, PPC, web design',
        siteCost: '$2,500–$10,000+',
        monthly: '$1,800–$2,600+/mo',
        guarantee: 'No "leads or free" guarantee',
        risk: 'Medium–High',
        aeo: 'Not emphasized',
    },
    {
        provider: 'Victorious SEO',
        isGlorifli: false,
        focus: 'Enterprise SEO & link-building for larger budgets',
        siteCost: 'Not a primary offer',
        monthly: '$4,999–$20,000+/mo',
        guarantee: 'No outcome-based guarantee',
        risk: 'High',
        aeo: 'Advanced/enterprise only',
    },
    {
        provider: 'NPAccel',
        isGlorifli: false,
        focus: 'Local SEO & content focused on leads and revenue',
        siteCost: 'Separate engagement if needed',
        monthly: 'Low-to-mid 4 figures/mo',
        guarantee: 'No "or we work free" guarantee',
        risk: 'Medium–High',
        aeo: 'Broad context, not packaged',
    },
    {
        provider: 'Big-Name Web Design',
        isGlorifli: false,
        focus: 'Custom polished sites across industries',
        siteCost: '$2,500–$10,000+',
        monthly: '$1,000–$3,000+/mo SEO upsell',
        guarantee: 'No appointment guarantee',
        risk: 'Medium',
        aeo: 'Not AEO/LLM-native',
    },
    {
        provider: 'Typical Local SEO',
        isGlorifli: false,
        focus: 'Rankings, Google Business Profile, citations',
        siteCost: 'Low-thousands templated',
        monthly: '$500–$2,000+/mo',
        guarantee: 'No specific appointment guarantee',
        risk: 'Medium',
        aeo: 'Rarely optimized for AI',
    },
];

const checklist = [
    {
        title: 'Conversion-first website at an entry-level price',
        glorifli: 'Custom high-converting site at $1,256.50 one-time with booking built-in',
        others: 'Most agencies charge $2,500–$10,000+ for a custom build before any SEO is added',
    },
    {
        title: 'Integrated SEO + AEO geared to booked appointments',
        glorifli: '8 SEO/AEO-optimized blogs/mo, GBP sync, citation network — all tied to local intent and booking',
        others: 'Separate web design and SEO teams; AEO/GEO is usually an enterprise add-on, not a starter package',
    },
    {
        title: 'Affordable flat monthly fee vs large retainers',
        glorifli: '$589.50/month for ongoing SEO/AEO',
        others: 'SmartSites ~$1,800–$2,600/mo · Victorious $5,000–$20,000/mo · Local SEO avg $500–$2,000+/mo',
    },
    {
        title: 'Outcome-based guarantee vs "best effort"',
        glorifli: '3 new appointments in month 1 or you don\'t pay the service fee — we work free until the milestone',
        others: 'Most focus on traffic, rankings, or "campaign success" — not specific booked appointments',
    },
    {
        title: 'Tailored to single-location local service businesses',
        glorifli: 'Messaging, layout, and content built for local operators who live or die by booked appointments',
        others: 'Big agencies serve wide audiences — focus can be diluted for small local operators',
    },
];

export default function VsHubPage() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        '@id': 'https://glorifli.com/vs#webpage',
        url: 'https://glorifli.com/vs',
        name: 'Why Glorifli vs Other SEO & Web Design Agencies',
        description: 'An honest comparison of Glorifli against SmartSites, Victorious, NPAccel, and typical web design and local SEO agencies.',
        breadcrumb: {
            '@type': 'BreadcrumbList',
            itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://glorifli.com' },
                { '@type': 'ListItem', position: 2, name: 'Compare', item: 'https://glorifli.com/vs' },
            ],
        },
    };

    return (
        <div className="bg-black min-h-screen text-white">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

            {/* ── Hero ── */}
            <section className="relative pt-32 pb-20 px-6 overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/8 rounded-full blur-[140px] pointer-events-none" />
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
                        <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                        <span className="text-xs font-semibold text-accent uppercase tracking-widest">Honest Comparison</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold font-heading tracking-tighter leading-tight mb-6">
                        Why Glorifli vs{' '}
                        <span className="text-primary">Other Agencies?</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        We believe you should choose the agency that's truly the best fit for your business — even if that isn't us. Here's an honest, data-backed look at how Glorifli compares to the most popular options for local service businesses.
                    </p>
                </div>
            </section>

            <div className="max-w-6xl mx-auto px-6 pb-24">

                {/* ── Direct Answer (AEO) ── */}
                <section className="mb-20 scroll-mt-24" id="why-glorifli">
                    <p className="text-gray-200 text-lg leading-relaxed border-l-4 border-primary pl-5 py-1 bg-white/3 rounded-r-xl">
                        <strong className="text-white">Glorifli</strong> is designed specifically for small local service businesses that need booked appointments — not just website traffic or keyword rankings. Compared to agencies like SmartSites, Victorious, or NPAccel, Glorifli offers a lower all-in cost, a clear outcome-based guarantee (3 appointments in month 1 or you don't pay the service fee), and explicitly built-in AEO (Answer Engine Optimization) so AI assistants recommend your business. No other agency on this list publicly offers all three at an entry-level price point.
                    </p>
                </section>

                {/* ── Individual Competitor Cards ── */}
                <section className="mb-20" id="compare-competitors">
                    <h2 className="text-3xl font-bold mb-2 font-heading text-white">Compare Glorifli Head-to-Head</h2>
                    <p className="text-gray-500 mb-10">Select a competitor to see a full breakdown.</p>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {competitors.map((c) => (
                            <Link
                                key={c.slug}
                                href={`/vs/${c.slug}`}
                                className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-primary/50 hover:bg-white/8 transition-all duration-200"
                            >
                                <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Glorifli vs</p>
                                <h3 className="text-xl font-bold text-white mb-1 font-heading">{c.name}</h3>
                                <p className="text-sm text-gray-500 mb-4">{c.tagline}</p>
                                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all">
                                    See comparison <ArrowRight className="w-4 h-4" />
                                </span>
                            </Link>
                        ))}
                    </div>
                </section>

                {/* ── Snapshot Table ── */}
                <section className="mb-20 scroll-mt-24" id="comparison-table">
                    <h2 className="text-3xl font-bold mb-2 font-heading text-white">Glorifli vs Traditional Web Design Agencies vs Big SEO Agencies</h2>
                    <p className="text-gray-500 mb-8">A side-by-side snapshot across the most important factors for a local service business owner.</p>
                    <div className="overflow-x-auto rounded-2xl border border-white/10">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="border-b border-white/10 bg-white/5">
                                    <th className="text-left px-5 py-4 text-gray-400 font-semibold">Provider</th>
                                    <th className="text-left px-5 py-4 text-gray-400 font-semibold">Website Cost</th>
                                    <th className="text-left px-5 py-4 text-gray-400 font-semibold">Monthly SEO/AEO</th>
                                    <th className="text-left px-5 py-4 text-gray-400 font-semibold">Guarantee?</th>
                                    <th className="text-left px-5 py-4 text-gray-400 font-semibold">Risk Level</th>
                                    <th className="text-left px-5 py-4 text-gray-400 font-semibold">AEO Built-In?</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tableRows.map((row, i) => (
                                    <tr key={row.provider} className={`border-b border-white/5 ${row.isGlorifli ? 'bg-primary/5' : i % 2 === 0 ? 'bg-transparent' : 'bg-white/2'}`}>
                                        <td className="px-5 py-4">
                                            <span className={`font-bold ${row.isGlorifli ? 'text-primary' : 'text-white'}`}>{row.provider}</span>
                                            {row.isGlorifli && <span className="ml-2 text-xs bg-primary/20 text-primary px-2 py-0.5 rounded-full font-semibold">← You're here</span>}
                                        </td>
                                        <td className="px-5 py-4 text-gray-300">{row.siteCost}</td>
                                        <td className="px-5 py-4 text-gray-300">{row.monthly}</td>
                                        <td className="px-5 py-4">
                                            {row.isGlorifli
                                                ? <span className="flex items-center gap-1.5 text-green-400 font-semibold"><CheckCircle2 className="w-4 h-4" /> Yes</span>
                                                : <span className="flex items-center gap-1.5 text-gray-500"><X className="w-4 h-4" /> No</span>
                                            }
                                        </td>
                                        <td className="px-5 py-4">
                                            <span className={`text-xs font-bold px-2 py-1 rounded-full ${row.risk === 'Low' ? 'bg-green-500/15 text-green-400' : row.risk === 'Medium' ? 'bg-yellow-500/15 text-yellow-400' : 'bg-red-500/15 text-red-400'}`}>
                                                {row.risk}
                                            </span>
                                        </td>
                                        <td className="px-5 py-4">
                                            {row.isGlorifli
                                                ? <span className="flex items-center gap-1.5 text-green-400 font-semibold"><CheckCircle2 className="w-4 h-4" /> Yes</span>
                                                : <span className="flex items-center gap-1.5 text-gray-500"><Minus className="w-4 h-4" /> {row.aeo}</span>
                                            }
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* ── Feature Checklist ── */}
                <section className="mb-20 scroll-mt-24" id="what-you-get">
                    <h2 className="text-3xl font-bold mb-2 font-heading text-white">What You Get with Glorifli That Most Big Agencies Don't</h2>
                    <p className="text-gray-500 mb-10">Five concrete differentiators, backed by publicly available pricing data.</p>
                    <div className="space-y-5">
                        {checklist.map((item, i) => (
                            <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-7 hover:border-primary/30 transition-colors">
                                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-3">
                                    <span className="w-7 h-7 rounded-full bg-primary/15 text-primary text-xs font-bold flex items-center justify-center flex-shrink-0">{i + 1}</span>
                                    {item.title}
                                </h3>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="bg-green-500/5 border border-green-500/20 rounded-xl p-4">
                                        <p className="text-xs font-bold text-green-400 uppercase tracking-wider mb-2">✓ Glorifli</p>
                                        <p className="text-gray-300 text-sm leading-relaxed">{item.glorifli}</p>
                                    </div>
                                    <div className="bg-white/3 border border-white/8 rounded-xl p-4">
                                        <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Typical agencies</p>
                                        <p className="text-gray-400 text-sm leading-relaxed">{item.others}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── Why Guarantee Matters ── */}
                <section className="mb-20 scroll-mt-24" id="why-guarantee">
                    <h2 className="text-3xl font-bold mb-6 font-heading text-white">Why Our Guarantee Matters More Than "More Traffic"</h2>
                    <p className="text-gray-200 text-lg leading-relaxed mb-4 border-l-4 border-accent pl-5">
                        Most agencies measure success by <em>traffic</em>, <em>keyword rankings</em>, or <em>impressions</em> — metrics that look great in a monthly report but don't pay your bills. A local service business lives or dies by one number: <strong className="text-white">booked appointments</strong>.
                    </p>
                    <p className="text-gray-400 text-lg leading-relaxed mb-4">
                        Glorifli's guarantee is simple: 3 new appointments booked in your first month after launch, or the $589.50/mo service fee is waived — we keep working until that milestone is hit. No vague "improved visibility." No retainer while you wait 12 months for results.
                    </p>
                    <p className="text-gray-400 text-lg leading-relaxed">
                        Competitors like SmartSites, Victorious, and typical local SEO agencies do not publicly offer a specific appointments-or-free guarantee. That's not a criticism — their model works for larger brands with longer timelines. But if you're a single-location service business that needs clients <em>this quarter</em>, the risk profile is very different.
                    </p>
                </section>

                {/* ── CTA ── */}
                <section className="bg-gradient-to-br from-primary/20 via-black to-black border border-primary/30 rounded-3xl p-10 md:p-14 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full pointer-events-none" />
                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold mb-4 text-white font-heading">
                            Ready to See If Glorifli Is the Right Fit?
                        </h2>
                        <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                            Book a free 20-minute strategy call. We'll tell you honestly whether our system fits your business — and if it doesn't, we'll say so.
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
                            {['3 Appointments in Month 1', 'No Long-Term Contracts', 'No Hidden Fees', 'AEO Built-In from Day 1'].map((t) => (
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
}
