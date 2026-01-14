import React from 'react';
import Image from 'next/image';

const Footer: React.FC = () => {
    return (
        <footer className="bg-black border-t border-white/10 py-8 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                    {/* Logo and Tagline */}
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-[5px]">
                            <img
                                src="/GlorifliLogo.png"
                                alt="Glorifli Logo"
                                className="h-16 w-auto rounded"
                            />
                            <span className="text-2xl font-bold font-heading tracking-tight text-white">Glorifli</span>
                        </div>
                        <p className="text-sm text-gray-500 max-w-sm">
                            We'll build your website, and if you don't like it, you don't pay!
                        </p>
                        <p className="text-xs text-gray-600 mt-2">© 2025 Glorifli Inc. All rights reserved.</p>
                    </div>

                    {/* Links */}
                    <div className="flex gap-8 text-sm text-gray-400">
                        <a href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</a>
                        <a href="/terms-of-service" className="hover:text-primary transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
