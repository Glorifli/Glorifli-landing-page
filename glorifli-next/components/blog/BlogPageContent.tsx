'use client';

import React, { useState } from 'react';
import BlogHero from '@/components/blog/BlogHero';
import PostCard from '@/components/blog/PostCard';
import CategoryFilter from '@/components/blog/CategoryFilter';
import { PostData } from '@/lib/posts';

interface BlogPageContentProps {
    initialPosts: Omit<PostData, 'content'>[];
}

export default function BlogPageContent({ initialPosts }: BlogPageContentProps) {
    const [activeCategory, setActiveCategory] = useState('All Posts');

    // Sort posts by date (newest first)
    const sortedPosts = [...initialPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    // Filter posts based on active category
    const filteredPosts = activeCategory === 'All Posts'
        ? sortedPosts
        : sortedPosts.filter(post => post.tags?.some(tag => tag === activeCategory));

    const featuredPost = filteredPosts[0];
    const remainingPosts = filteredPosts.slice(1);

    return (
        <div className="min-h-screen bg-background pt-32 pb-24 px-6 relative">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-primary/5 to-transparent -z-10" />

            <div className="max-w-7xl mx-auto">
                <div className="mb-12 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-white">
                        Glorifli <span className="text-primary">Insights</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-2">
                        Actionable strategies to grow your medical practice. Learn how to attract more patients and build a thriving clinic.
                    </p>
                    <p className="text-lg text-primary font-medium">
                        We equip you with the strategies to help you bring healing to more people!
                    </p>
                </div>

                {featuredPost && <BlogHero post={featuredPost} />}

                <CategoryFilter activeCategory={activeCategory} onCategoryChange={setActiveCategory} />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {remainingPosts.map((post) => (
                        <PostCard
                            key={post.slug}
                            title={post.title}
                            excerpt={post.excerpt}
                            slug={post.slug}
                            date={post.date}
                            category={post.tags?.[0] || 'Marketing'}
                            author={post.author || 'Glorifli Team'}
                            image={post.image}
                        />
                    ))}
                </div>

                {filteredPosts.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-gray-500">No posts found in this category. Try selecting a different category!</p>
                    </div>
                )}
            </div>
        </div>
    );
}
