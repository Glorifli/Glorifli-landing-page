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
            <article className="max-w-4xl mx-auto py-20 px-6 sm:px-8">
                <header className="mb-10 text-center">
                    <Link href="/blog" className="text-sm font-semibold text-gray-400 hover:text-primary mb-6 inline-block transition-colors">&larr; Back to Blog</Link>
                    <time className="block text-sm text-gray-400 mb-2">{post.date}</time>
                    <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 text-white">{post.title}</h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">{post.excerpt}</p>
                </header>

                {post.image && (
                    <div className="mb-12 rounded-2xl overflow-hidden">
                        <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-auto object-cover"
                        />
                    </div>
                )}

                <div className="prose prose-lg prose-invert max-w-none mx-auto prose-headings:text-white prose-p:text-gray-300 prose-a:text-primary prose-a:no-underline hover:prose-a:text-primary/80 prose-strong:text-white prose-li:text-gray-300">
                    {/* @ts-ignore */}
                    <MDXRemote source={post.content} />
                </div>
            </article>
        </div>
    );
}
