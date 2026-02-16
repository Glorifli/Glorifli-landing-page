"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (href: string) => {
        setIsMobileMenuOpen(false);

        // If clicking on a home section while on blog page, navigate home first
        if (pathname !== '/' && href.startsWith('#')) {
            window.location.href = '/' + href;
        } else if (href.startsWith('#')) {
            // Smooth scroll on same page
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else if (href.startsWith('/')) {
            // For actual route changes like /blog
            window.location.href = href;
        }
    };

    const navLinks = [
        { name: 'My Services', href: '#services', isRoute: false },
        { name: 'About', href: '/about', isRoute: true },
        { name: 'Consulting', href: '#calendar', isRoute: false },
        { name: 'Blog', href: '/blog', isRoute: true },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-[5px] group">
                    <img
                        src="/GlorifliLogo.png"
                        alt="Glorifli Logo"
                        className="h-16 w-auto group-hover:scale-105 transition-transform duration-300"
                    />
                    <span className="text-2xl font-bold font-heading tracking-tight text-white group-hover:text-primary transition-colors">
                        Glorifli
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        link.isRoute ? (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-gray-400 hover:text-white transition-colors relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
                            </Link>
                        ) : (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => {
                                    if (pathname !== '/') {
                                        e.preventDefault();
                                        window.location.href = '/' + link.href;
                                    } else {
                                        e.preventDefault();
                                        const element = document.querySelector(link.href);
                                        if (element) {
                                            element.scrollIntoView({ behavior: 'smooth' });
                                        }
                                    }
                                }}
                                className="text-sm font-medium text-gray-400 hover:text-white transition-colors relative group cursor-pointer"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
                            </a>
                        )
                    ))}
                    <a
                        href={pathname === '/' ? '#form' : '/#form'}
                        className="px-5 py-2 rounded-full bg-white/5 border border-white/10 text-white text-sm font-medium hover:bg-white/10 hover:border-primary/50 hover:text-primary hover:shadow-[0_0_15px_rgba(56,189,248,0.3)] transition-all duration-300"
                    >
                        Get Started
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-black/95 border-b border-white/10 overflow-hidden"
                    >
                        <div className="flex flex-col p-6 gap-4">
                            {navLinks.map((link) => (
                                link.isRoute ? (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className="text-lg font-medium text-gray-300 hover:text-primary"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                ) : (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        className="text-lg font-medium text-gray-300 hover:text-primary"
                                        onClick={() => handleNavClick(link.href)}
                                    >
                                        {link.name}
                                    </a>
                                )
                            ))}
                            <a
                                href={pathname === '/' ? '#form' : '/#form'}
                                className="w-full text-center px-5 py-3 rounded-xl bg-primary/10 text-primary border border-primary/20 font-bold"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Get Started
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
