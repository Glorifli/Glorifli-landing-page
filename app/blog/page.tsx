import React from 'react';
import { Metadata } from 'next';
import { getPosts } from '@/lib/posts';
import BlogPageContent from '@/components/blog/BlogPageContent';
import StructuredData from '@/components/StructuredData';

export const metadata: Metadata = {
    title: 'Blog | Glorifli - Business Marketing Insights',
    description: 'Expert advice on client acquisition, local SEO, AEO, and digital marketing strategies for local service business owners.',
    alternates: {
        canonical: 'https://glorifli.com/blog',
    },
    openGraph: {
        title: 'Blog | Glorifli - Business Marketing Insights',
        description: 'Expert advice on client acquisition, local SEO, AEO, and digital marketing strategies for local service business owners.',
        type: 'website',
        url: 'https://glorifli.com/blog',
        siteName: 'Glorifli',
    },
};

export default async function BlogIndex() {
    const posts = await getPosts();

    // Build Blog + ItemList schema from real post data
    const blogSchema = {
        "@context": "https://schema.org",
        "@type": "Blog",
        "@id": "https://glorifli.com/blog/#blog",
        name: "Glorifli Blog",
        description:
            "AEO and SEO insights for local service businesses — covering client acquisition, AI search optimization, and high-converting website strategies.",
        url: "https://glorifli.com/blog",
        inLanguage: "en-CA",
        publisher: {
            "@type": "Organization",
            "@id": "https://glorifli.com/#organization",
            name: "Glorifli",
            url: "https://glorifli.com",
        },
        blogPost: posts.map((post) => ({
            "@type": "BlogPosting",
            headline: post.title,
            description: post.excerpt,
            url: `https://glorifli.com/blog/${post.slug}`,
            datePublished: post.date,
            image: post.image ? `https://glorifli.com${post.image}` : undefined,
            author: {
                "@type": "Organization",
                name: "Glorifli",
                url: "https://glorifli.com",
            },
        })),
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://glorifli.com",
            },
            {
                "@type": "ListItem",
                position: 2,
                name: "Blog",
                item: "https://glorifli.com/blog",
            },
        ],
    };

    return (
        <>
            <StructuredData data={blogSchema} />
            <StructuredData data={breadcrumbSchema} />
            <BlogPageContent initialPosts={posts} />
        </>
    );
}
