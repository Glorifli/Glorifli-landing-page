import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                // All standard crawlers: allow everything except private/api routes
                userAgent: '*',
                allow: '/',
                disallow: ['/private/', '/api/'],
            },
            {
                // Explicitly welcome AI crawlers for AEO citation eligibility
                userAgent: ['GPTBot', 'CCBot', 'Google-Extended', 'PerplexityBot', 'anthropic-ai', 'Claude-Web'],
                allow: '/',
            }
        ],
        sitemap: 'https://glorifli.com/sitemap.xml',
    };
}
