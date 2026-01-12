import { getAllPostSlugs, getPostData } from "@/lib/posts";
import StructuredData from "@/components/StructuredData";
import { CompileMDXResult, MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import path from "path";
import fs from "fs";
import Link from "next/link";

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
    const paths = getAllPostSlugs();
    return paths.map((path) => path.params);
}

export async function generateMetadata({ params }: Props) {
    const { slug } = await params;
    const post = await getPostData(slug);

    if (!post) {
        return {
            title: "Post Not Found",
        };
    }

    return {
        title: `${post.title} | Glorifli Blog`,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            type: "article",
            publishedTime: post.date,
            authors: ["Glorifli Team"],
        },
    };
}

export default async function BlogPost({ params }: Props) {
    const { slug } = await params;
    const post = await getPostData(slug);

    if (!post) {
        notFound();
    }

    // Calculate Read Time
    const words = post.content.split(/\s+/g).length;
    const readTimeMinutes = Math.ceil(words / 200);

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: post.title,
        datePublished: post.date,
        dateModified: post.date,
        description: post.excerpt,
        author: {
            "@type": "Organization",
            name: "Glorifli",
            url: "https://glorifli.com",
        },
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `https://glorifli.com/blog/${slug}`,
        },
        speakable: {
            "@type": "SpeakableSpecification",
            xpath: ["/html/head/title", "/html/head/meta[@name='description']/@content"],
        },
    };

    return (
        <div className="min-h-screen bg-background text-white font-sans">
            <StructuredData data={jsonLd} />
            <article className="max-w-3xl mx-auto py-20 px-6 sm:px-8">
                <header className="mb-12 text-center">
                    <h1 className="text-4xl md:text-6xl font-serif font-bold uppercase tracking-widest leading-tight text-white mb-8">
                        {post.title}
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light max-w-2xl mx-auto">{post.excerpt}</p>
                </header>

                {post.image && (
                    <div className="mb-8 rounded-sm overflow-hidden border border-white/10 aspect-video relative">
                        <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                        />
                    </div>
                )}

                <div className="flex flex-col items-center gap-4 mb-16 border-b border-white/10 pb-12">
                    <time className="block text-sm text-primary font-mono uppercase tracking-[0.2em]">{post.date}</time>
                    <div className="flex items-center gap-2 text-xs text-gray-500 font-mono uppercase tracking-widest border border-white/10 px-4 py-2 rounded-full">
                        <span>TLDR; Est. {readTimeMinutes} Min Read</span>
                    </div>
                </div>

                <div className="prose prose-lg prose-invert max-w-none mx-auto 
                    prose-headings:font-serif prose-headings:uppercase prose-headings:tracking-widest prose-headings:text-white prose-headings:font-normal prose-headings:mt-16 prose-headings:mb-8 prose-headings:border-b prose-headings:border-white/10 prose-headings:pb-4
                    prose-h2:text-3xl prose-h3:text-2xl
                    prose-p:text-gray-300 prose-p:leading-[2.5] prose-p:font-light prose-p:mb-8
                    prose-a:text-white prose-a:underline prose-a:decoration-white/30 prose-a:underline-offset-4 hover:prose-a:decoration-primary hover:prose-a:text-primary transition-all
                    prose-strong:text-white prose-strong:font-semibold
                    prose-ul:my-10 prose-li:text-gray-300 prose-li:my-4 prose-li:leading-loose marker:prose-li:text-primary">
                    {/* @ts-ignore */}
                    <MDXRemote source={post.content} />
                </div>

                <div className="mt-24 text-center border-t border-white/10 pt-12">
                    <Link
                        href="/blog"
                        className="inline-flex items-center px-8 py-3 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 hover:border-primary/50 transition-all group uppercase tracking-widest"
                    >
                        <span className="mr-2 group-hover:-translate-x-1 transition-transform">&larr;</span> Back to Blog
                    </Link>
                </div>
            </article>
        </div>
    );
}
