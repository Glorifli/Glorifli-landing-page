"use client";

import React from 'react';

const categories = [
    "All Posts",
    "Patient Acquisition",
    "Marketing Strategy",
    "SEO & AEO",
    "Technology",
    "Social Media"
];

interface CategoryFilterProps {
    activeCategory: string;
    onCategoryChange: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ activeCategory, onCategoryChange }) => {
    return (
        <div className="flex flex-wrap gap-3 mb-12 justify-center">
            {categories.map((cat, index) => (
                <button
                    key={index}
                    onClick={() => onCategoryChange(cat)}
                    className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border ${activeCategory === cat
                            ? 'bg-white/10 text-white border-white/20 hover:bg-white/15'
                            : 'bg-transparent text-gray-400 border-white/5 hover:border-primary/50 hover:text-primary'
                        }`}
                >
                    {cat}
                </button>
            ))}
        </div>
    );
};

export default CategoryFilter;
