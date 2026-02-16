import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: ['/', '/blog/'],
                disallow: ['/private/'],
            },
            {
                userAgent: ['GPTBot', 'CCBot', 'Google-Extended'],
                allow: ['/'],
            }
        ],
        // We explicitly allow friendly AI bots to crawl for AEO
        sitemap: 'https://glorifli.com/sitemap.xml',
    };
}
