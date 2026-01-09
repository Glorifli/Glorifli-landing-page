import React from 'react';
import { Metadata } from 'next';
import { getPosts } from '@/lib/posts';
import BlogPageContent from '@/components/blog/BlogPageContent';

export const metadata: Metadata = {
    title: 'Blog | Glorifli - Medical Practice Marketing Insights',
    description: 'Expert advice on patient acquisition, medical SEO, and digital marketing strategies for doctors and clinics.',
};

export default async function BlogIndex() {
    const posts = await getPosts();

    return <BlogPageContent initialPosts={posts} />;
}
