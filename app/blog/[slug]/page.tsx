import { getAllPostSlugs, getPostData } from "@/lib/posts";
import StructuredData from "@/components/StructuredData";
import { CompileMDXResult, MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import path from "path";
import fs from "fs";
import Link from "next/link";
import Image from "next/image";

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

    const images = post.image ? [`https://glorifli.com${post.image}`] : [];

    return {
        title: `${post.title} | Glorifli Blog`,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            type: "article",
            publishedTime: post.date,
            authors: ["Glorifli Team"],
            url: `https://glorifli.com/blog/${slug}`,
            images: images,
            siteName: "Glorifli",
        },
        twitter: {
            card: "summary_large_image",
            title: post.title,
            description: post.excerpt,
            images: images,
        },
        alternates: {
            canonical: `https://glorifli.com/blog/${slug}`,
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
    // Calculate Read Time
    let readTimeMinutes = 0;
    if (post.readTime) {
        readTimeMinutes = parseInt(post.readTime);
    } else {
        const words = post.content.split(/\s+/g).length;
        readTimeMinutes = Math.ceil(words / 200);
    }

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: post.title,
        datePublished: post.date,
        dateModified: post.date,
        description: post.excerpt,
        image: post.image ? `https://glorifli.com${post.image}` : undefined,
        keywords: [...(post.tags || []), ...(post.entities || [])].join(", "),
        author: {
            "@type": "Organization",
            name: "Glorifli",
            url: "https://glorifli.com",
            logo: {
                "@type": "ImageObject",
                url: "https://glorifli.com/logo.png" // Ensure this exists or use a valid placeholder
            }
        },
        publisher: {
            "@type": "Organization",
            name: "Glorifli",
            logo: {
                "@type": "ImageObject",
                url: "https://glorifli.com/logo.png"
            }
        },
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `https://glorifli.com/blog/${slug}`,
        },
        about: post.entities?.map(entity => ({
            "@type": "Thing",
            "name": entity
        })),
        speakable: {
            "@type": "SpeakableSpecification",
            xpath: ["/html/head/title", "/html/head/meta[@name='description']/@content"],
        },
        breadcrumb: {
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
                    "name": "Blog",
                    "item": "https://glorifli.com/blog"
                },
                {
                    "@type": "ListItem",
                    "position": 3,
                    "name": post.title,
                    "item": `https://glorifli.com/blog/${slug}`
                }
            ]
        }
    };

    return (
        <div className="min-h-screen bg-background text-white font-sans">
            <StructuredData data={jsonLd} />
            <article className="max-w-5xl mx-auto py-48 px-6 sm:px-8">
                <header className="mb-12 text-center">
                    <h1 className="text-4xl md:text-6xl font-serif font-bold uppercase tracking-widest leading-tight text-white mb-8">
                        {post.title}
                    </h1>
                </header>

                {post.image && (
                    <div className="mb-12 rounded-sm overflow-hidden border border-white/10 aspect-video relative">
                        <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 800px"
                            priority
                        />
                    </div>
                )}

                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light max-w-4xl mx-auto text-center mb-16">{post.excerpt}</p>

                <div className="flex flex-col items-center gap-4 mb-16 border-b border-white/10 pb-12">
                    <time className="block text-sm text-primary font-mono uppercase tracking-[0.2em]">{post.date}</time>
                    <div className="flex items-center gap-2 text-xs text-gray-500 font-mono uppercase tracking-widest border border-white/10 px-4 py-2 rounded-full">
                        <span>TLDR; Est. {readTimeMinutes} Min Read</span>
                    </div>
                </div>

                <div className="max-w-none mx-auto">
                    {/* @ts-ignore */}
                    <MDXRemote
                        source={post.content}
                        components={{
                            h1: (props) => <h1 {...props} className="text-5xl font-heading font-bold uppercase tracking-tight text-white mt-24 mb-12 border-b border-white/10 pb-6" />,
                            h2: (props) => <h2 {...props} className="text-4xl font-heading font-bold uppercase tracking-tight text-white mt-20 mb-10" />,
                            h3: (props) => <h3 {...props} className="text-3xl font-heading font-bold uppercase tracking-tight text-white mt-16 mb-8" />,
                            p: (props) => <p {...props} className="text-xl text-gray-300 leading-[2.2] font-light mb-10" />,
                            a: (props) => <a {...props} className="text-[#38bdf8] font-medium underline decoration-[#38bdf8] underline-offset-4 hover:text-[#38bdf8]/80 hover:decoration-[#38bdf8]/80 transition-all" />,
                            strong: (props) => <strong {...props} className="text-white font-bold text-xl" />,
                            ul: (props) => <ul {...props} className="list-disc pl-6 my-12 space-y-6" />,
                            li: (props) => <li {...props} className="text-xl text-gray-300 leading-loose marker:text-[#38bdf8]" />,
                        }}
                    />
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
