import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, User, Clock, ArrowRight } from 'lucide-react';
import { blogPosts } from '../data/blogData';

const Blog: React.FC = () => {
    return (
        <div className="bg-background text-white min-h-screen">
            {/* Hero Section */}
            <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-surface to-background relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none"></div>

                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold font-heading mb-6"
                    >
                        Glorifli <span className="text-primary">Blog</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-400 max-w-2xl mx-auto"
                    >
                        Expert insights on healthcare marketing, web design, and patient acquisition strategies
                    </motion.p>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((post, index) => (
                            <motion.article
                                key={post.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="glass-panel rounded-3xl overflow-hidden group cursor-pointer hover:shadow-[0_20px_60px_-15px_rgba(56,189,248,0.4)] transition-all duration-300"
                            >
                                <Link to={`/blog/${post.slug}`} className="block">
                                    {/* Featured Image */}
                                    <div className="relative h-48 overflow-hidden">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute top-4 left-4">
                                            <span className="px-3 py-1 bg-primary/90 text-white text-xs font-semibold rounded-full">
                                                {post.category}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6">
                                        {/* Meta */}
                                        <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
                                            <div className="flex items-center gap-1">
                                                <Calendar className="w-3 h-3" />
                                                <span>{post.date}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Clock className="w-3 h-3" />
                                                <span>{post.readTime}</span>
                                            </div>
                                        </div>

                                        {/* Title */}
                                        <h2 className="text-xl font-bold mb-3 text-white group-hover:text-primary transition-colors line-clamp-2">
                                            {post.title}
                                        </h2>

                                        {/* Excerpt */}
                                        <p className="text-gray-400 mb-4 line-clamp-3">
                                            {post.excerpt}
                                        </p>

                                        {/* Read More */}
                                        <div className="flex items-center text-primary font-semibold group-hover:gap-2 transition-all">
                                            <span>Read More</span>
                                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </div>

                                        {/* Author */}
                                        <div className="mt-4 pt-4 border-t border-white/10 flex items-center gap-2 text-sm text-gray-400">
                                            <User className="w-4 h-4" />
                                            <span>{post.author}</span>
                                        </div>
                                    </div>
                                </Link>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="glass-panel rounded-3xl p-8 md:p-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Ready to Grow Your Practice?
                        </h2>
                        <p className="text-gray-400 mb-6">
                            Get a risk-free website that attracts qualified patients to your practice
                        </p>
                        <Link
                            to="/#form"
                            className="inline-block bg-white text-black font-bold px-8 py-4 rounded-xl hover:bg-gray-200 transition-colors"
                        >
                            Get Started Today
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;
