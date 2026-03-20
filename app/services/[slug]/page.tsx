import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Check, CheckCircle2 } from 'lucide-react';
import { notFound } from 'next/navigation';
import { getAllServiceSlugs, getServiceDataFromSlug } from '@/lib/services-data';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
    return getAllServiceSlugs();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const data = getServiceDataFromSlug(slug);
    if (!data) return {};

    const baseUrl = 'https://glorifli.com';

    return {
        title: data.service.seoTitleTemplate,
        description: data.service.seoDescriptionTemplate,
        openGraph: {
            title: data.service.seoTitleTemplate,
            description: data.service.ogDescriptionTemplate,
            url: `${baseUrl}/services/${slug}`,
            type: "website",
            images: [`${baseUrl}/images/blog/featured-hero.png`],
        },
        alternates: { canonical: `${baseUrl}/services/${slug}` },
    };
}

export default async function ServicePage({ params }: Props) {
    const { slug } = await params;
    const data = getServiceDataFromSlug(slug);
    if (!data) return notFound();

    const { service, industryName } = data;

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": `https://glorifli.com/services/${slug}#service`,
        name: service.seoTitleTemplate,
        provider: { "@id": "https://glorifli.com/#organization" },
        description: service.descriptionTemplate,
        offers: { "@type": "Offer", price: service.setupFee.replace(/[$,]/g, '') || service.monthlyFee.replace(/[$,]/g, '').replace('/mo', ''), priceCurrency: "USD" },
        url: `https://glorifli.com/services/${slug}`,
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: service.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://glorifli.com" },
            { "@type": "ListItem", position: 2, name: "Services", item: "https://glorifli.com/services" },
            { "@type": "ListItem", position: 3, name: service.name, item: `https://glorifli.com/services/${slug}` },
        ],
    };

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
                    <span className="text-gray-400 capitalize">{service.name.toLowerCase()} for {industryName}</span>
                </nav>
            </div>

            <div className="max-w-4xl mx-auto px-6 pb-24">
                {/* Hero */}
                <section className="mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
                        <span className="text-xs font-semibold text-primary uppercase tracking-widest">
                            {service.setupFee !== '$0' ? `${service.setupFee} One-Time Setup` : 'Free Until 10 Leads'}
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold font-heading tracking-tighter leading-tight mb-6">
                        Glorifli's <span className="text-primary">{service.name}</span> For {industryName === 'Service' ? 'Service Businesses' : `${industryName} Businesses`}
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-6 border-l-4 border-primary pl-5">
                        {service.descriptionTemplate} Market value: <strong className="text-white">{service.marketValue}</strong>
                    </p>
                    <div className="flex flex-wrap gap-4 mt-8">
                        <Link href="/#calendar" className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-black font-bold rounded-full hover:bg-white transition-all duration-300">
                            Book a Free Strategy Call <ArrowRight className="w-4 h-4" />
                         (plus, we'll optimize your Google My Business profile for free)</Link>
                        <Link href="/services" className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/5 border border-white/10 text-white font-bold rounded-full hover:bg-white/10 transition-all duration-300">
                            View All Services
                        </Link>
                    </div>
                </section>

                {/* Features */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold text-white font-heading mb-8">What Does This Service Include?</h2>
                    <div className="grid md:grid-cols-2 gap-5">
                        {service.features.map((f) => (
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

                {/* Value Stack (if exists) */}
                {service.valueStack && (
                    <section className="mb-16">
                        <h2 className="text-2xl font-bold text-white font-heading mb-6">The True Market Value</h2>
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 overflow-hidden">
                            <div className="overflow-x-auto">
                                <table className="w-full text-left">
                                    <thead>
                                        <tr className="border-b border-white/10">
                                            <th className="pb-4 font-bold text-gray-400 w-1/2">Included Service</th>
                                            <th className="pb-4 font-bold text-gray-400">Market Value</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/5">
                                        {service.valueStack.map((v, idx) => (
                                            <tr key={idx} className="hover:bg-white/5 transition-colors group">
                                                <td className="py-4 text-white group-hover:text-primary transition-colors">{v.item}</td>
                                                <td className="py-4 text-gray-400"><span className="line-through decoration-red-500/50">{v.market}</span></td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div className="mt-6 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center bg-primary/5 rounded-xl p-6 border border-primary/20">
                                <div>
                                    <p className="text-gray-400 text-sm mb-1 uppercase tracking-wider font-semibold">Total Value</p>
                                    <p className="text-3xl font-bold text-primary font-heading line-through decoration-red-500/50">{service.marketValue}</p>
                                </div>
                                <div className="text-center md:text-right mt-4 md:mt-0">
                                    <p className="text-gray-400 text-sm mb-1 uppercase tracking-wider font-semibold">Your Setup Fee</p>
                                    <p className="text-4xl font-bold text-accent font-heading">{service.setupFee}</p>
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {/* ROI (if exists) */}
                {service.roiRows && (
                    <section className="mb-16">
                        <h2 className="text-2xl font-bold text-white font-heading mb-6">Typical ROI Based on 10 Leads</h2>
                        <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden overflow-x-auto">
                            <table className="w-full text-left min-w-[600px]">
                                <thead className="bg-white/5 border-b border-white/10">
                                    <tr>
                                        <th className="p-4 font-bold text-gray-400">Industry</th>
                                        <th className="p-4 font-bold text-gray-400">Avg Job Value</th>
                                        <th className="p-4 font-bold text-gray-400">Est. Revenue (3 Closes)</th>
                                        <th className="p-4 font-bold text-gray-400 text-accent">ROI</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/5">
                                    {service.roiRows.map((r, i) => (
                                        <tr key={i} className="hover:bg-white/5 transition-colors">
                                            <td className="p-4 text-white font-medium">{r.industry}</td>
                                            <td className="p-4 text-gray-400">{r.avg}</td>
                                            <td className="p-4 text-gray-300">{r.revenue}</td>
                                            <td className="p-4 font-bold text-accent">{r.roi}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>
                )}

                {/* FAQs */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-white font-heading mb-8">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {service.faqs.map((f, i) => (
                            <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6">
                                <details className="group">
                                    <summary className="flex justify-between items-center font-bold text-lg cursor-pointer list-none text-white">
                                        {f.q}
                                        <span className="transition-transform duration-300 group-open:rotate-180">
                                            <ArrowRight className="w-5 h-5 text-primary rotate-90 group-open:rotate-[-90deg] transition-all" />
                                        </span>
                                    </summary>
                                    <p className="text-gray-400 mt-4 leading-relaxed [&>a]:text-primary [&>a:hover]:underline [&>a]:font-medium" dangerouslySetInnerHTML={{ __html: f.a }} />
                                </details>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Final CTA */}
                <div className="text-center bg-primary/10 border border-primary/20 rounded-3xl p-10 md:p-16">
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 text-white">Ready to Dominate Your Niche?</h2>
                    <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">Stop leaving money on the table. Claim your guaranteed growth system today.</p>
                    <Link href="/#calendar" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-black font-bold rounded-full hover:bg-white transition-all duration-300 text-lg shadow-[0_0_30px_rgba(255,255,255,0.3)]">
                        Get Started Risk-Free <ArrowRight className="w-5 h-5" />
                     (plus, we'll optimize your Google My Business profile for free)</Link>
                </div>
            </div>
        </div>
    );
}
