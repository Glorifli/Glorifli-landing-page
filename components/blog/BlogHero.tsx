"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface BlogHeroProps {
    post: {
        title: string;
        excerpt: string;
        slug: string;
        date: string;
        tags?: string[];
        author: string;
        image?: string;
    };
}

const BlogHero: React.FC<BlogHeroProps> = ({ post }) => {
    return (
        <section className="mb-20">
            <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="group relative rounded-[2.5rem] overflow-hidden border border-white/10"
            >
                <Link href={`/blog/${post.slug}`} className="block relative aspect-[16/9] md:aspect-[16/9]">
                    {/* Background Image */}
                    <div
                        className="absolute inset-0 bg-cover bg-center transform duration-700 group-hover:scale-105"
                        style={{
                            backgroundImage: `url(${post.image || '/images/blog/practice-website.png'})`,
                            backgroundColor: '#0f0f10'
                        }}
                    />
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-black/30" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-transparent" />

                    <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 lg:p-16">
                        <div className="max-w-4xl">
                            <motion.span
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-wider text-black bg-accent rounded-full uppercase"
                            >
                                Featured • {post.tags?.[0] || 'Article'}
                            </motion.span>

                            <motion.h1
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading text-white mb-6 leading-tight group-hover:text-primary transition-colors"
                            >
                                {post.title}
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="text-xl text-gray-300 max-w-2xl mb-8 line-clamp-2 md:line-clamp-none"
                            >
                                {post.excerpt}
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="flex items-center gap-4 text-sm font-medium text-gray-400"
                            >
                                <span className="text-white">By {post.author}</span>
                                <span>•</span>
                                <time dateTime={post.date}>{post.date}</time>
                            </motion.div>
                        </div>
                    </div>
                </Link>
            </motion.div>
        </section>
    );
};

export default BlogHero;
