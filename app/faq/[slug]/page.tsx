import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { faqItems, getFaqBySlug, getRelatedFaqs } from "@/lib/faq-data";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
    return faqItems.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props) {
    const { slug } = await params;
    const item = getFaqBySlug(slug);
    if (!item) return { title: "Question Not Found" };
    return {
        title: `${item.question} | Glorifli FAQ`,
        description: item.excerpt,
        openGraph: {
            title: item.question,
            description: item.excerpt,
            url: `https://glorifli.com/faq/${item.slug}`,
            type: "article",
            images: ["https://glorifli.com/images/blog/featured-hero.png"],
        },
        alternates: { canonical: `https://glorifli.com/faq/${item.slug}` },
    };
}

const categoryColor: Record<string, string> = {
    "HVAC SEO": "text-blue-300 border-blue-400/30 bg-blue-400/10",
    "Roofing SEO": "text-red-300 border-red-400/30 bg-red-400/10",
    "Plumbing SEO": "text-cyan-300 border-cyan-400/30 bg-cyan-400/10",
    "Landscaping SEO": "text-green-300 border-green-400/30 bg-green-400/10",
    "Remodeling SEO": "text-yellow-300 border-yellow-400/30 bg-yellow-400/10",
    "Guarantees & Objections": "text-purple-300 border-purple-400/30 bg-purple-400/10",
};

export default async function FAQSlugPage({ params }: Props) {
    const { slug } = await params;
    const item = getFaqBySlug(slug);
    if (!item) notFound();

    const related = getRelatedFaqs(item.relatedSlugs);

    // Build full answer text for schema
    const fullAnswerText = [
        item.excerpt,
        ...item.sections.flatMap((s: any) => [s.body, ...(s.bullets ?? [])]),
        "Key takeaways: " + item.keyTakeaways.join(". "),
    ].join(" ");

    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "@id": `https://glorifli.com/faq/${item.slug}#article`,
        headline: item.question,
        description: item.excerpt,
        datePublished: item.datePublished,
        dateModified: item.datePublished,
        url: `https://glorifli.com/faq/${item.slug}`,
        author: { "@type": "Organization", "@id": "https://glorifli.com/#organization", name: "Glorifli", url: "https://glorifli.com" },
        publisher: { "@type": "Organization", name: "Glorifli", url: "https://glorifli.com", logo: { "@type": "ImageObject", url: "https://glorifli.com/logo.png" } },
        mainEntityOfPage: { "@type": "WebPage", "@id": `https://glorifli.com/faq/${item.slug}` },
        speakable: {
            "@type": "SpeakableSpecification",
            xpath: ["/html/head/title", "/html/head/meta[@name='description']/@content"],
        },
    };

    const qaSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
            {
                "@type": "Question",
                name: item.question,
                acceptedAnswer: { "@type": "Answer", text: fullAnswerText },
            },
            ...item.sections.map((s: any) => ({
                "@type": "Question",
                name: s.heading,
                acceptedAnswer: {
                    "@type": "Answer",
                    text: [s.body, ...(s.bullets ?? []), s.stat ?? ""].filter(Boolean).join(" "),
                },
            })),
        ],
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://glorifli.com" },
            { "@type": "ListItem", position: 2, name: "FAQ", item: "https://glorifli.com/faq" },
            { "@type": "ListItem", position: 3, name: item.question, item: `https://glorifli.com/faq/${item.slug}` },
        ],
    };

    return (
        <div className="bg-black min-h-screen text-white">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(qaSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

            {/* Breadcrumb */}
            <div className="pt-28 px-6 max-w-3xl mx-auto">
                <nav className="text-sm text-gray-600 mb-8 flex items-center gap-2 flex-wrap" aria-label="Breadcrumb">
                    <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                    <span>/</span>
                    <Link href="/faq" className="hover:text-primary transition-colors">FAQ</Link>
                    <span>/</span>
                    <span className="text-gray-500 truncate max-w-[280px]">{item.question.slice(0, 60)}…</span>
                </nav>
            </div>

            <article className="max-w-3xl mx-auto px-6 pb-24">
                {/* ── Header ── */}
                <header className="mb-12">
                    <span className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full border mb-6 ${categoryColor[item.category]}`}>
                        {item.category}
                    </span>
                    <h1 className="text-3xl md:text-5xl font-bold font-heading tracking-tight leading-tight mb-6">
                        {item.question}
                    </h1>
                    {/* Direct answer intro — the AEO citation paragraph */}
                    <p className="text-xl text-gray-300 leading-relaxed border-l-4 border-primary pl-5 py-1">
                        {item.excerpt}
                    </p>
                    <p className="text-xs text-gray-600 mt-4">Published: {item.datePublished} · Glorifli Editorial Team</p>
                </header>

                {/* ── Sections ── */}
                <div className="space-y-12">
                    {item.sections.map((section: any, i: number) => (
                        <section key={i}>
                            <h2 className="text-xl md:text-2xl font-bold text-white font-heading mb-4">
                                {section.heading}
                            </h2>

                            {/* Stat callout */}
                            {section.stat && (
                                <div className="bg-primary/10 border border-primary/25 rounded-xl p-4 mb-4 text-sm text-primary font-medium leading-relaxed">
                                    📊 {section.stat}
                                </div>
                            )}

                            <div
                                className="text-gray-400 leading-[1.9] mb-4 [&>a]:text-primary [&>a:hover]:underline [&>a]:font-medium [&>a]:transition-colors"
                                dangerouslySetInnerHTML={{ __html: section.body }}
                            />

                            {section.bullets && section.bullets.length > 0 && (
                                <ul className="space-y-3 mt-4">
                                    {section.bullets.map((b: string, bi: number) => (
                                        <li key={bi} className="flex items-start gap-3 text-sm text-gray-300 leading-relaxed">
                                            <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
                                            <span>{b}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </section>
                    ))}
                </div>

                {/* ── Key Takeaways ── */}
                <div className="mt-14 bg-white/5 border border-white/10 rounded-2xl p-7">
                    <h2 className="text-lg font-bold text-white mb-5 flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary" />
                        Key Takeaways
                    </h2>
                    <ul className="space-y-3">
                        {item.keyTakeaways.map((t: string, i: number) => (
                            <li key={i} className="flex items-start gap-3 text-sm text-gray-300 leading-relaxed">
                                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                                <span>{t}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* ── CTA ── */}
                <div className="mt-14 bg-gradient-to-br from-primary/15 via-black to-black border border-primary/25 rounded-2xl p-8 text-center">
                    <h2 className="text-xl font-bold text-white mb-3">Want Glorifli to Handle This for You?</h2>
                    <p className="text-gray-400 text-sm mb-6 max-w-md mx-auto">
                        We build the AEO/SEO infrastructure, publish the content, and optimize your GBP — all backed by a 5-leads-in-60-days guarantee.
                    </p>
                    <div className="flex flex-col items-center">
                        <Link
                            href="/#calendar"
                            className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-black font-bold rounded-full hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/20"
                        >
                            Book a Free Strategy Call <ArrowRight className="w-4 h-4" />
                        </Link>
                        
                    </div>
                </div>

                {/* ── Related Questions ── */}
                {related.length > 0 && (
                    <div className="mt-14">
                        <h2 className="text-lg font-bold text-white mb-6">Related Questions</h2>
                        <div className="space-y-3">
                            {related.map((rel: any) => (
                                <Link
                                    key={rel.slug}
                                    href={`/faq/${rel.slug}`}
                                    className="block bg-white/3 border border-white/8 rounded-xl p-5 hover:border-primary/30 hover:bg-white/5 transition-all duration-200 group"
                                >
                                    <div className="flex items-start justify-between gap-4">
                                        <div>
                                            <span className="text-xs text-gray-600 mb-2 block">{rel.category}</span>
                                            <h3 className="text-sm font-bold text-white group-hover:text-primary transition-colors duration-200">
                                                {rel.question}
                                            </h3>
                                        </div>
                                        <ArrowRight className="w-4 h-4 text-gray-600 flex-shrink-0 group-hover:text-primary group-hover:translate-x-1 transition-all duration-200 mt-1" />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}

                {/* ── Back nav ── */}
                <div className="mt-12 pt-8 border-t border-white/10 text-center">
                    <Link
                        href="/faq"
                        className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-primary transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to All Questions
                    </Link>
                </div>
            </article>
        </div>
    );
}
