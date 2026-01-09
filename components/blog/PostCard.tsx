"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface PostCardProps {
    title: string;
    excerpt: string;
    slug: string;
    date: string;
    category: string;
    author: string;
    readTime?: string;
    image?: string; // In a real app this would be required
}

const PostCard: React.FC<PostCardProps> = ({
    title,
    excerpt,
    slug,
    date,
    category,
    author,
    readTime = "5 min read",
    image = "/images/blog-placeholder.jpg" // Fallback
}) => {
    return (
        <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group flex flex-col h-full"
        >
            <Link href={`/blog/${slug}`} className="block h-full">
                <div className="glass-panel rounded-3xl overflow-hidden border border-white/5 h-full transition-all duration-500 ease-out group-hover:border-primary/30 group-hover:shadow-[0_0_30px_-10px_rgba(56,189,248,0.3)] group-hover:-translate-y-2">
                    {/* Image Container */}
                    <div className="relative h-48 sm:h-64 overflow-hidden">
                        <div className="absolute inset-0 bg-gray-800" />
                        {/* Image */}
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                            style={{ backgroundImage: `url(${image})`, backgroundColor: '#1a1a1a' }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />

                        <div className="absolute top-4 left-4">
                            <span className="px-3 py-1 text-xs font-medium tracking-wider text-black bg-accent rounded-full uppercase">
                                {category}
                            </span>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 sm:p-8 flex flex-col flex-grow">
                        <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                            <time dateTime={date}>{date}</time>
                            <span>•</span>
                            <span>{readTime}</span>
                        </div>

                        <h3 className="text-xl sm:text-2xl font-bold font-heading text-white mb-3 group-hover:text-primary transition-colors line-clamp-2">
                            {title}
                        </h3>

                        <p className="text-gray-400 leading-relaxed mb-6 line-clamp-3">
                            {excerpt}
                        </p>

                        <div className="mt-auto flex items-center justify-between pt-6 border-t border-white/5">
                            <span className="text-sm font-medium text-gray-300">
                                By {author}
                            </span>
                            <span className="text-primary text-sm font-medium group-hover:translate-x-1 transition-transform">
                                Read Article →
                            </span>
                        </div>
                    </div>
                </div>
            </Link>
        </motion.article>
    );
};

export default PostCard;
