"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";
import { faqItems, FAQ_CATEGORIES, FaqCategory } from "@/lib/faq-data";
import { motion, AnimatePresence } from "framer-motion";

const categoryColors: Record<FaqCategory | "All", string> = {
    "All": "bg-primary/10 text-primary border-primary/30",
    "AEO & GEO": "bg-accent/10 text-accent border-accent/30",
    "SEO Basics": "bg-purple-400/10 text-purple-300 border-purple-400/30",
    "Local SEO": "bg-green-400/10 text-green-300 border-green-400/30",
    "Content Strategy": "bg-yellow-400/10 text-yellow-300 border-yellow-400/30",
};

const categoryBadge: Record<FaqCategory, string> = {
    "AEO & GEO": "bg-accent/10 text-accent border-accent/20",
    "SEO Basics": "bg-purple-400/10 text-purple-300 border-purple-400/20",
    "Local SEO": "bg-green-400/10 text-green-300 border-green-400/20",
    "Content Strategy": "bg-yellow-400/10 text-yellow-300 border-yellow-400/20",
};

type FilterCategory = "All" | FaqCategory;

export default function FAQIndexClient() {
    const [activeFilter, setActiveFilter] = useState<FilterCategory>("All");
    const [searchQuery, setSearchQuery] = useState("");

    const filtered = faqItems.filter((item) => {
        const matchesCategory = activeFilter === "All" || item.category === activeFilter;
        const matchesSearch =
            searchQuery === "" ||
            item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="bg-black min-h-screen text-white">
            {/* ── Hero ── */}
            <section className="relative pt-32 pb-16 px-6 overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-primary/6 rounded-full blur-[160px] pointer-events-none" />
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        <span className="text-xs font-semibold text-primary uppercase tracking-widest">AEO & SEO Education Hub</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold font-heading tracking-tighter leading-tight mb-6">
                        SEO, AEO & GEO Questions{' '}
                        <span className="text-primary">Answered</span> for Service Businesses
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-10">
                        The most commonly asked questions about local SEO, Answer Engine Optimization, and Generative Engine Optimization — answered in plain English, with actionable steps for local service businesses.
                    </p>
                    {/* Search */}
                    <div className="relative max-w-xl mx-auto">
                        <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                        <input
                            type="text"
                            placeholder="Search questions..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-5 py-4 bg-white/5 border border-white/10 rounded-full text-white placeholder:text-gray-600 focus:outline-none focus:border-primary/50 focus:bg-white/8 transition-all"
                        />
                    </div>
                </div>
            </section>

            <div className="max-w-6xl mx-auto px-6 pb-24">
                {/* ── Category Filter ── */}
                <div className="flex flex-wrap gap-3 justify-center mb-12">
                    {(["All", ...FAQ_CATEGORIES] as FilterCategory[]).map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveFilter(cat)}
                            className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-200 ${activeFilter === cat
                                ? categoryColors[cat]
                                : "bg-white/3 text-gray-500 border-white/5 hover:border-white/15 hover:text-gray-300"
                                }`}
                        >
                            {cat}
                            <span className="ml-2 text-xs opacity-60">
                                {cat === "All"
                                    ? faqItems.length
                                    : faqItems.filter((i) => i.category === cat).length}
                            </span>
                        </button>
                    ))}
                </div>

                {/* ── Question Cards ── */}
                <AnimatePresence mode="popLayout">
                    {filtered.length === 0 ? (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center py-16 text-gray-600"
                        >
                            No questions match your search.
                        </motion.div>
                    ) : (
                        <motion.div
                            layout
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                        >
                            {filtered.map((item, i) => (
                                <motion.article
                                    key={item.slug}
                                    layout
                                    initial={{ opacity: 0, y: 12 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.25, delay: i * 0.03 }}
                                >
                                    <Link
                                        href={`/faq/${item.slug}`}
                                        className="bg-black/30 border border-white/8 rounded-2xl p-6 flex flex-col hover:border-white/15 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 group h-full"
                                    >
                                        {/* Category badge */}
                                        <span className={`self-start px-3 py-1 text-xs font-semibold rounded-full border mb-4 ${categoryBadge[item.category]}`}>
                                            {item.category}
                                        </span>

                                        {/* Question */}
                                        <h2 className="text-base font-bold text-white mb-3 leading-snug flex-grow group-hover:text-primary transition-colors duration-200">
                                            {item.question}
                                        </h2>

                                        {/* Excerpt */}
                                        <p className="text-sm text-gray-500 leading-relaxed mb-5 line-clamp-3">
                                            {item.excerpt}
                                        </p>

                                        {/* CTA */}
                                        <div className="inline-flex items-center gap-2 text-sm font-bold text-primary group-hover:gap-3 transition-all duration-200">
                                            Read Full Answer
                                            <ArrowRight className="w-4 h-4" />
                                        </div>
                                    </Link>
                                </motion.article>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
