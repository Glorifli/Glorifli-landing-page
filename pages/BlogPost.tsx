import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, User, Clock, ArrowLeft } from 'lucide-react';
import { blogPosts } from '../data/blogData';

const BlogPost: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const post = blogPosts.find(p => p.slug === slug);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!post) {
        return <Navigate to="/blog" replace />;
    }

    return (
        <div className="bg-background text-white min-h-screen">
            {/* Hero Section */}
            <section className="pt-32 pb-8 px-6 bg-gradient-to-b from-surface to-background relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none"></div>

                <div className="max-w-4xl mx-auto relative z-10">
                    {/* Back Button */}
                    <Link
                        to="/blog"
                        className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all mb-8"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        <span>Back to Blog</span>
                    </Link>

                    {/* Category */}
                    <div className="mb-4">
                        <span className="px-4 py-2 bg-primary/20 text-primary text-sm font-semibold rounded-full border border-primary/30">
                            {post.category}
                        </span>
                    </div>

                    {/* Title */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold font-heading mb-6">
                        {post.title}
                    </motion.h1>

                    {/* Meta */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="flex flex-wrap items-center gap-6 text-gray-400"
                    >
                        <div className="flex items-center gap-2">
                            <User className="w-4 h-4" />
                            <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            <span>{post.readTime}</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Featured Image */}
            <section className="px-6 mb-12">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="max-w-4xl mx-auto"
                >
                    <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-64 md:h-96 object-cover rounded-3xl"
                    />
                </motion.div>
            </section>

            {/* Content */}
            <section className="px-6 pb-16">
                <motion.article
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="max-w-4xl mx-auto"
                >
                    <style>{`
            .tldr-box {
              background: linear-gradient(135deg, rgba(56, 189, 248, 0.1), rgba(125, 211, 252, 0.05));
              border-left: 4px solid #38bdf8;
              padding: 1.5rem;
              margin: 2rem 0;
              border-radius: 12px;
            }
            .tldr-box h3 {
              color: #38bdf8;
              font-size: 1.25rem;
              margin-bottom: 1rem;
              font-weight: 600;
            }
            .tldr-box ul {
              margin: 0;
              padding-left: 1.5rem;
            }
            .tldr-box li {
              color: #e5e7eb;
              margin-bottom: 0.5rem;
            }
          `}</style>
                    <div
                        className="prose prose-invert prose-lg max-w-none
              prose-headings:font-heading prose-headings:text-white prose-headings:font-bold
              prose-h2:text-4xl prose-h2:uppercase prose-h2:mt-16 prose-h2:mb-8 prose-h2:tracking-wide
              prose-h3:text-2xl prose-h3:uppercase prose-h3:mt-12 prose-h3:mb-6 prose-h3:text-gray-100 prose-h3:tracking-wide
              prose-p:text-gray-300 prose-p:leading-loose prose-p:mb-8 prose-p:text-lg
              prose-a:text-gray-100 prose-a:underline prose-a:decoration-2
              prose-a:decoration-primary/70 prose-a:underline-offset-4
              hover:prose-a:decoration-primary hover:prose-a:text-white
              prose-a:transition-all prose-a:font-medium
              prose-strong:text-white prose-strong:font-bold
              prose-ul:text-gray-300 prose-ul:my-8 prose-ul:text-lg prose-ul:leading-loose
              prose-ol:text-gray-300 prose-ol:my-8 prose-ol:text-lg prose-ol:leading-loose
              prose-li:mb-3
              prose-lead:text-2xl prose-lead:text-gray-300 prose-lead:mb-12 prose-lead:leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />
                </motion.article>
            </section>

            {/* Related Posts / CTA */}
            <section className="py-16 px-6 bg-surface/50">
                <div className="max-w-4xl mx-auto">
                    <div className="glass-panel rounded-3xl p-8 md:p-12 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Want Results Like These?
                        </h2>
                        <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                            Get a professionally designed website that implements these strategies and converts visitors into patients
                        </p>
                        <Link
                            to="/#form"
                            className="inline-block bg-white text-black font-bold px-8 py-4 rounded-xl hover:bg-gray-200 transition-colors"
                        >
                            Start Your Risk-Free Build
                        </Link>
                    </div>

                    {/* More Posts */}
                    <div className="mt-12 text-center">
                        <Link
                            to="/blog"
                            className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all font-semibold"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            <span>Read More Articles</span>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BlogPost;
