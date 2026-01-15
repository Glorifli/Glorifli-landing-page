import React from 'react';
import { Metadata } from 'next';
import { getPosts } from '@/lib/posts';
import BlogPageContent from '@/components/blog/BlogPageContent';

export const metadata: Metadata = {
    title: 'Blog | Glorifli - Business Marketing Insights',
    description: 'Expert advice on client acquisition, local SEO, and digital marketing strategies for business owners.',
};

export default async function BlogIndex() {
    const posts = await getPosts();

    return <BlogPageContent initialPosts={posts} />;
}
