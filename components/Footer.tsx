import React from 'react';
import Image from 'next/image';
import { Linkedin, Youtube, Instagram, Phone } from 'lucide-react';

const Footer: React.FC = () => {
    const socialLinks = [
        {
            name: 'LinkedIn',
            icon: <Linkedin className="w-5 h-5" />,
            href: 'https://www.linkedin.com/in/brendan-dillon-341035377'
        },
        {
            name: 'YouTube',
            icon: <Youtube className="w-5 h-5" />,
            href: 'https://www.youtube.com/@BrendanDillon22'
        },
        {
            name: 'Instagram',
            icon: <Instagram className="w-5 h-5" />,
            href: 'https://www.instagram.com/brendan.dillon.business/'
        },
        {
            name: 'Threads',
            icon: (
                <svg viewBox="0 0 192 192" className="w-5 h-5 fill-current">
                    <path d="M141.54 89.94c-1.38-20.3-17.75-29.38-34.94-29.38-16.1 0-32.96 8-36.9 26.68h-.12c3.48-18.06 18.67-22.9 31.75-22.9 11.53 0 24.36 5.8 25.46 21.05v.23L126.3 128a30.65 30.65 0 01-52.07-7.66h-3.9A34.4 34.4 0 00129.5 131l.6-2.58v2.6h3.8V89.92a54.38 54.38 0 00-3.6-21.72c-4.9-12.27-16.4-19.66-34.34-19.66C72.63 48.54 55 64.3 55 96s17.38 47.46 41 47.46c10.5 0 16.9-3.23 20.9-6.93l2.58 3.32c-4.9 4.46-12.4 8.2-23.47 8.2-26.64 0-46.08-18.57-46.08-52.05S69.2 43.46 96 43.46c21.24 0 35.8 9.38 42.15 25.1.4 1 .8 2.05 1.16 3.12zM94.6 117.8c7.4 0 17.65-3.82 20-18.2v-1.92c-1.57-11.75-12-16.16-23.75-16.16-16.05 0-25.04 8.78-25.04 19.33 0 9.8 7.37 16.95 18.8 16.95z" />
                </svg>
            ),
            href: 'https://www.threads.net/@brendan.dillon.business'
        },
        {
            name: 'X',
            icon: (
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
            ),
            href: 'https://x.com/BrendanDil64464'
        }
    ];

    return (
        <footer className="bg-black border-t border-white/10 py-12 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                    {/* Logo and Tagline */}
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-[5px]">
                            <Image
                                src="/GlorifliLogo.png"
                                alt="Glorifli Logo"
                                width={122}
                                height={64}
                                className="h-16 w-auto rounded"
                            />
                            <span className="text-2xl font-bold font-heading tracking-tight text-white">Glorifli</span>
                        </div>
                        <p className="text-sm text-gray-400 max-w-sm">
                            We guarantee 5 new appointments in 30 days — or we work for free until we get you those results.
                        </p>
                        <div className="flex items-center gap-2 group">
                            <Phone className="w-4 h-4 text-primary group-hover:rotate-12 transition-transform" />
                            <a href="tel:+18555930609" className="text-sm text-gray-400 hover:text-white transition-colors font-medium">
                                +1 855-593-0609
                            </a>
                        </div>
                        <p className="text-xs text-gray-600">© 2024 Glorifli Inc. All rights reserved.</p>
                    </div>

                    <div className="flex flex-col gap-6 md:items-end">
                        {/* Social Links */}
                        <div className="flex items-center gap-4">
                            {socialLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 bg-white/5 rounded-full text-gray-400 hover:text-primary hover:bg-white/10 transition-all duration-300"
                                    aria-label={`Follow us on ${link.name}`}
                                >
                                    {link.icon}
                                </a>
                            ))}
                        </div>

                        {/* Legal Links */}
                        <div className="flex gap-6 text-sm text-gray-500">
                            <a href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</a>
                            <a href="/terms-of-service" className="hover:text-primary transition-colors">Terms of Service</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
