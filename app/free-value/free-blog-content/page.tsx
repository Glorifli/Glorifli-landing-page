import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import LeadMagnetForm from '@/components/LeadMagnetForm';
import GenericFAQ, { FAQItem } from '@/components/GenericFAQ';

export const metadata: Metadata = {
    title: 'Free SEO/AEO Blog Content | Glorifli',
    description: 'Get free, high-quality SEO/AEO optimized blog content for your local service business in exchange for a simple backlink.',
};

const blogFaqs: FAQItem[] = [
    {
        question: "How long does it take for you to write the blog post?",
        answer: "Once you request the content and tell us your target niche and keyword, our team will research and write the fully optimized post within 48-72 hours."
    },
    {
        question: "Where can I see examples of your previous blog work?",
        answer: (
            <>
                You can read through our own internal content on the <Link href="/blog" className="text-primary hover:text-primary-light transition-colors">Glorifli Blog</Link> to see the exact structure, tone, and AEO optimization formatting we use to rank local service businesses.
            </>
        ),
        schemaAnswer: "You can read through our own internal content on the Glorifli Blog to see the exact structure, tone, and AEO optimization formatting we use to rank local service businesses."
    },
    {
        question: "How exactly do I place the backlink to Glorifli?",
        answer: (
            <>
                Within the blog post we give you, we will specify a natural, contextual sentence where the backlink should go. It will simply be a small hyperlink pointing back to the <Link href="/free-value" className="text-primary hover:text-primary-light transition-colors">Glorifli Free Value Hub</Link> or our Home page.
            </>
        ),
        schemaAnswer: "Within the blog post we give you, we will specify a natural, contextual sentence where the backlink should go. It will simply be a small hyperlink pointing back to the Glorifli Free Value Hub or our Home page."
    },
    {
        question: "Can I choose the specific topic for the blog post?",
        answer: "Yes! When you email us to request the exchange, simply let us know what specific service or pain point you want the blog to address, and we will structure the content strictly around what your ideal customers are searching for."
    }
];

export default function FreeBlogContentPage() {
    return (
        <div className="bg-black min-h-screen text-white pt-32 pb-24 px-6">
            <div className="max-w-4xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
                    <span className="text-xs font-semibold text-primary uppercase tracking-widest">Backlink Exchange Program</span>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">
                    Free High-Ranking Content For Your Site
                </h1>
                <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
                    We'll write incredibly high-quality, high-ranking SEO/AEO content for your site for free. The only requirement? A simple backlink to Glorifli.
                </p>

                <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 text-left mb-16">
                    <h2 className="text-2xl font-bold mb-6 font-heading text-primary">How the Program Works</h2>
                    <ol className="space-y-6">
                        <li className="flex gap-4">
                            <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold flex-shrink-0">1</span>
                            <div>
                                <h3 className="font-bold text-white text-lg">You Request Content</h3>
                                <p className="text-gray-400 mt-1">Tell us your niche, your target city, and the specific service you want to rank for.</p>
                            </div>
                        </li>
                        <li className="flex gap-4">
                            <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold flex-shrink-0">2</span>
                            <div>
                                <h3 className="font-bold text-white text-lg">We Research & Write</h3>
                                <p className="text-gray-400 mt-1">Our team researches the keyword and writes a comprehensive, SEO-optimized and AEO-ready blog post designed to capture leads.</p>
                            </div>
                        </li>
                        <li className="flex gap-4">
                            <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold flex-shrink-0">3</span>
                            <div>
                                <h3 className="font-bold text-white text-lg">You Publish & We Link</h3>
                                <p className="text-gray-400 mt-1">You publish the blog on your site (keeping all the traffic and leads it generates). In return, you simply include one do-follow link back to a relevant Glorifli page within the text.</p>
                            </div>
                        </li>
                    </ol>
                </div>

                <div className="text-center max-w-lg mx-auto">
                    <LeadMagnetForm
                        title={<>Get Your <span className="text-primary">Free Blog Content</span>!</>}
                        subtitle="We give it for free in exchange for a back link to our website and a review for our service to boost our visibility so we help you and you in turn help us"
                        leadType="free-blog-content"
                        successMessageTitle="We received your request!"
                        successMessageSubtitle="We will be in touch shortly with your custom and optimized Free Blog Content."
                        submitButtonText={<>Request Free Blog <ArrowRight className="w-3.5 h-3.5" /></>}
                    />
                </div>

                <div className="mt-24 border-t border-white/10 pt-16">
                    <GenericFAQ faqs={blogFaqs} className="" title="Backlink Exchange FAQ" />
                </div>
            </div>
        </div>
    );
}
