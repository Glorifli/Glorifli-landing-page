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
        <div className="min-h-screen bg-background text-white font-sans selection:bg-white/20 selection:text-white pb-32">
            <StructuredData data={jsonLd} />
            <article className="max-w-[1000px] w-[95vw] mx-auto pt-32 md:pt-48 px-4 md:px-0">
                <header className="mb-20">
                    <h1 className="text-[3.2em] md:text-[3.5em] font-normal leading-[1.1] tracking-tight text-white mb-8">
                        {post.title}
                    </h1>
                    <div className="flex flex-col gap-4 text-gray-400">
                        <p className="text-[1.2em] leading-relaxed max-w-2xl font-light text-gray-300">{post.excerpt}</p>
                        <div className="flex items-center gap-4 text-sm uppercase tracking-widest mt-4 opacity-60">
                            <time>{post.date}</time>
                            <span>|</span>
                            <span>{readTimeMinutes} Min Read</span>
                        </div>
                    </div>
                </header>

                {/* Minimalist Image Handling */}
                {post.image && (
                    <div className="mb-16 w-full aspect-video relative overflow-hidden bg-white/5 border border-white/10">
                        <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover opacity-80"
                        />
                    </div>
                )}

                <div className="prose prose-xl prose-invert max-w-none 
                    prose-headings:font-normal prose-headings:text-white prose-headings:tracking-tight
                    prose-h2:text-[2em] prose-h2:mt-16 prose-h2:mb-8
                    prose-h3:text-[1.5em] prose-h3:mt-12
                    prose-p:text-[1.35em] prose-p:leading-[1.8] prose-p:text-gray-300 prose-p:font-light prose-p:mb-10
                    prose-a:no-underline prose-a:border-b prose-a:border-gray-500 prose-a:text-white hover:prose-a:border-primary hover:prose-a:text-primary transition-all duration-200
                    prose-strong:font-medium prose-strong:text-white
                    prose-ul:text-[1.35em] prose-ul:text-gray-300 prose-ul:font-light prose-li:my-4
                    ">
                    {/* @ts-ignore */}
                    <MDXRemote source={post.content} />
                </div>

                <div className="mt-32 pt-16 border-t border-white/10">
                    <Link
                        href="/blog"
                        className="inline-block text-lg border-b border-gray-500 text-white hover:border-primary hover:text-primary transition-all uppercase tracking-wider"
                    >
                        &larr; Back to Blog
                    </Link>
                </div>
            </article>
        </div>
    );
}
