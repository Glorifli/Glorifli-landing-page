import React from 'react';

export const INDUSTRIES = [
    { slug: 'hvac', name: 'HVAC' },
    { slug: 'landscaping', name: 'Landscaping' },
    { slug: 'home-remodeling', name: 'Home Remodeling' },
    { slug: 'roofing', name: 'Roofing' },
    { slug: 'plumbing', name: 'Plumbing' },
    { slug: 'service-businesses', name: 'Service' } // Default
];

export interface ServiceData {
    baseSlug: string;
    name: string;
    descriptionTemplate: string;
    setupFee: string;
    monthlyFee: string;
    marketValue: string;
    features: { title: string; desc: string }[];
    valueStack?: { item: string; market: string; yours?: string }[];
    roiRows: { industry: string; avg: string; revenue: string; roi: string; close?: string; note?: string }[];
    faqs: { q: string; a: string }[];
    seoTitleTemplate: string;
    seoDescriptionTemplate: string;
    ogDescriptionTemplate: string;
}

export const SERVICES: Record<string, ServiceData> = {
    'autonomous-revenue-engine': {
        baseSlug: 'autonomous-revenue-engine',
        name: 'Autonomous Revenue Engine',
        setupFee: '$1,256.50',
        monthlyFee: '$589.50',
        marketValue: '$8,900+',
        descriptionTemplate: "Complete client acquisition system for {industry} businesses: custom website + ongoing SEO/AEO optimization.",
        seoTitleTemplate: "Autonomous Revenue Engine for {industry} Businesses | Glorifli",
        seoDescriptionTemplate: "Glorifli's Autonomous Revenue Engine for {industry} businesses combines a custom website + SEO/AEO system. $1,256.50 setup, free until 5 leads booked.",
        ogDescriptionTemplate: "The complete client acquisition system for {industry} businesses: custom website + AEO/SEO + GBP + citations. 5 leads in 60 days guaranteed.",
        features: [
            { title: "Custom High-Converting Website", desc: "Fully branded, mobile-optimized site built for conversions — not just aesthetics." },
            { title: "Conversion Copywriting Done-For-You", desc: "Professional copy written to convert visitors into booked leads. Zero writing required from you." },
            { title: "Integrated Booking System", desc: "Frictionless booking that captures leads 24/7, including after business hours." },
            { title: "60 Days of Free Blog Content", desc: "16 AEO/SEO blog posts at launch to kickstart organic traffic immediately." },
            { title: "8 SEO/AEO Blog Posts Monthly", desc: "Ongoing content that targets high-intent queries and builds your authority every month." },
            { title: "Google Business Profile Optimization", desc: "Full GBP setup and sync so you dominate local map packs and Google AI Local answers." },
            { title: "Citation Network Building", desc: "50+ verified directory listings — a critical trust signal for AI recommendation engines." },
            { title: "AI Search Optimization", desc: "Schema markup and structured content so ChatGPT, Perplexity, and Gemini cite your business." },
            { title: "Full Backend Site Optimization", desc: "Technical SEO, Core Web Vitals, structured data, and sitemap management." },
            { title: "Priority Support", desc: "Direct access for all questions, changes, and optimizations — you're never left waiting." },
            { title: "SEO/AEO Runs Free Until 5 Leads Booked", desc: "The entire $589.50/mo SEO service runs at no cost until we hit your 5-lead target." },
            { title: "No Long-Term Contracts", desc: "Cancel any time after we deliver. We earn your loyalty through results, not fine print." },
        ],
        valueStack: [
            { item: "Custom High-Converting Website", market: "$3,500" },
            { item: "Full Site Copywriting", market: "$800" },
            { item: "Booking System Integration", market: "$400" },
            { item: "SEO/AEO Blog Service (60 days free)", market: "$2,500" },
            { item: "Google Business Profile Optimization", market: "$500" },
            { item: "AI Search (AEO) Infrastructure Setup", market: "$1,200" },
        ],
        roiRows: [
            { industry: "Home Remodeling", avg: "$25,000", revenue: "$25k–$50k", roi: "1,889%–3,879%", note: "1-2 closes from 5 appointments" },
            { industry: "Roofing", avg: "$11,500", revenue: "$11.5k–$23k", roi: "815%–1,730%", note: "1-2 closes from 5 appointments" },
            { industry: "HVAC", avg: "$8,500", revenue: "$8.5k–$17k", roi: "576%–1,253%", note: "1-2 closes from 5 appointments" },
            { industry: "Landscaping", avg: "$4,500", revenue: "$4.5k–$9k", roi: "258%–616%", note: "1-2 closes from 5 appointments" },
            { industry: "Plumbing", avg: "$1,800", revenue: "$1.8k–$3.6k", roi: "43%–186%", note: "1-2 closes from 5 appointments" },
        ],
        faqs: [
            { q: "What does the Autonomous Revenue Engine include?", a: "Everything: custom website with copywriting and booking system, 8 monthly SEO/AEO blog posts, Google Business Profile optimization, citation network building, AI search (AEO) infrastructure, backend SEO, 60 days of free blog content at launch, priority support, and the 5-leads-in-60-days guarantee. Still not sure if you need this? Read our post on <a href='/blog/why-contractor-business-not-getting-online-leads'>why local businesses struggle to get leads</a>. <a href='/#calendar'>Book a call</a> to see if you qualify." },
            { q: "How does the pricing work for the complete package?", a: "You pay $1,256.50 upfront for the website build. The SEO/AEO service ($589.50/month) runs free until we deliver 5 booked leads within 60 days. After the guarantee is satisfied, you choose whether to continue at $589.50/month. No contracts, no hidden fees. Learn more about <a href='/blog/how-much-does-hvac-marketing-cost'>how much marketing should cost for service businesses</a>. Ready to grow? <a href='/#calendar'>Book your strategy call today</a>." },
            { q: "Why is this called the Autonomous Revenue Engine?", a: "Because once built, the system generates and converts leads automatically — without you needing to run ads, post on social media, or manually chase prospects. Your website ranks, gets cited by AI, books appointments, and captures after-hours leads while you sleep. Check out our deep dive on <a href='/blog/whats-the-best-way-to-get-more-appointments-booked'>how to get more appointments booked</a>. Want it for your business? <a href='/#calendar'>Book a call with us</a>." },
            { q: "What happens if we don't hit 5 leads in 60 days?", a: "The SEO/AEO service keeps running at no charge until we deliver 5 booked leads. The guarantee never expires. There is no scenario in which you pay and don't get results. We discuss this guarantee philosophy in our post about <a href='/blog/why-your-business-growth-has-stalled'>why business growth stalls</a>. Let's hit your goals together—<a href='/#calendar'>book a call here</a>." },
            { q: "How is a $8,900+ value delivered for $1,256.50?", a: "We can offer this because we're betting on our own system. The setup fee covers our build cost. The SEO/AEO portion runs free during the guarantee period. If we deliver (and we do), you become a long-term client at $589.50/month — which is where we build our business. You take zero risk. Wondering about the ROI? Read our post on <a href='/blog/what-is-aeo-for-home-service-businesses'>the value of AEO for service businesses</a>. Secure your launch price by <a href='/#calendar'>booking a call</a>." },
        ]
    },
    'custom-website': {
        baseSlug: 'custom-website',
        name: 'Custom High-Converting Website',
        setupFee: '$1,256.50',
        monthlyFee: '$0',
        marketValue: '$4,700+',
        descriptionTemplate: "Glorifli builds custom high-converting websites for {industry} businesses. $1,256.50 one-time setup.",
        seoTitleTemplate: "Custom {industry} Websites | Glorifli — $1,256.50 Setup",
        seoDescriptionTemplate: "Glorifli builds custom high-converting websites for {industry} businesses. $1,256.50 one-time setup. 5 leads in 60 days guaranteed.",
        ogDescriptionTemplate: "Stop losing leads to a brochure site. Glorifli builds {industry} client acquisition websites that rank, convert, and book while you sleep.",
        features: [
            { title: "Custom Design & Branding", desc: "A unique look built around your brand identity — not a template anyone else is using." },
            { title: "Mobile & Desktop Optimized", desc: "82% of service appointments are booked via mobile. Your site will be flawless on every device." },
            { title: "Conversion Copywriting Done-For-You", desc: "Professional copy written to convert visitors into leads — you don't write a single word." },
            { title: "Integrated Booking System", desc: "A frictionless booking flow that captures leads around the clock, even after hours." },
            { title: "Domain Transfer or Acquisition", desc: "We handle the technical setup so your site goes live without you needing to be tech-savvy." },
            { title: "Email & Phone Lead Capture", desc: "Multiple capture points ensure you never miss a lead regardless of how they prefer to contact you." },
            { title: "Up to 3 Revisions (First 60 Days)", desc: "Your site, your way. We refine it until it's exactly right within the first 60 days." },
            { title: "Mock Draft — Yours to Keep", desc: "Your free mock draft is created before you pay — no commitment, no risk." },
            { title: "60 Days of Free Blog Content", desc: "16 AEO/SEO-optimized blog posts at launch to kickstart your organic traffic immediately." },
        ],
        valueStack: [
            { item: "High-Converting Website Build", market: "$3,500", yours: "✓" },
            { item: "Full Site Copywriting", market: "$800", yours: "✓" },
            { item: "Booking System Integration", market: "$400", yours: "✓" },
            { item: "60 Days SEO/AEO Blog Content", market: "$2,500", yours: "FREE (included)" },
            { item: "Domain Setup / Transfer", market: "$0–$200", yours: "✓" },
        ],
        roiRows: [
            { industry: "Roofing", avg: "$11,500", revenue: "$34,500", roi: "2,646%", close: "3 jobs" },
            { industry: "HVAC", avg: "$8,500", revenue: "$25,500", roi: "1,929%", close: "3 jobs" },
            { industry: "Home Remodeling", avg: "$25,000", revenue: "$75,000", roi: "5,869%", close: "3 jobs" },
            { industry: "Landscaping", avg: "$4,500", revenue: "$13,500", roi: "974%", close: "3 jobs" },
            { industry: "Plumbing", avg: "$1,800", revenue: "$5,400", roi: "330%", close: "3 jobs" },
        ],
        faqs: [
            { q: "What is included in the custom website build?", a: "The $1,256.50 setup fee includes custom design and branding, mobile and desktop optimization, conversion copywriting, integrated booking system, domain setup or transfer, email and phone lead capture, up to 3 revisions in the first 60 days, a free mock draft, and 60 days of free AEO/SEO blog content (16 posts). Want to know why copywriting matters? Read <a href='/blog/what-makes-a-high-converting-landing-page'>what makes a high-converting landing page</a>. Let's build your site: <a href='/#calendar'>book a free call</a>." },
            { q: "How long does it take to build my website?", a: "Your first draft is delivered within 2 weeks. The site goes live within 30 days. You have up to 3 revision rounds during that first 60 days. See why waiting is killing your business in our post <a href='/blog/why-your-phone-isnt-ringing'>why your phone isn't ringing</a>. Start the clock today by <a href='/#calendar'>booking your strategy session</a>." },
            { q: "Do I need to write any copy or provide images?", a: "No — conversion copywriting is included. However, providing real testimonials, photos of your team, and authentic project images will significantly improve trust and conversion rates. We break down our writing process in <a href='/blog/how-to-write-sales-copy-that-sells-services'>how to write sales copy that sells services</a>. Ready to hand off the hard work? <a href='/#calendar'>Book a call with me</a>." },
            { q: "Why does the website cost $1,256.50?", a: "The market rate for a custom website with copywriting, booking integration, and one month of blog content is $4,700+. At $1,256.50, you're paying less than 27 cents on the dollar. The rest is covered by our confidence in the guarantee — we only win long-term when you do. Read more about <a href='/blog/seo-vs-paid-ads-for-hvac-roofing-companies'>investing in organic growth vs paid ads</a>. Claim this launch offer by <a href='/#calendar'>booking a consultation</a>." },
            { q: "What happens after my site is live?", a: "The 60-day clock starts the moment you pay. Your site goes live and the SEO/AEO service runs free until we deliver 5 booked leads. After that, you can continue the SEO/AEO service at $589.50/month or walk away — no contracts. This long-term mindset is explained in <a href='/blog/the-blue-link-era-is-dead'>the shift from Google blue links to AI</a>. Let's outline your post-launch strategy: <a href='/#calendar'>book a call</a>." },
        ]
    },

};

/**
 * Returns an array of paths for statically generating all service + industry permutations.
 * Example: [{ slug: 'autonomous-revenue-engine-for-hvac' }, { slug: 'custom-website-for-landscaping' }, ...]
 */
export function getAllServiceSlugs() {
    const paths: { slug: string }[] = [];
    Object.keys(SERVICES).forEach((base) => {
        INDUSTRIES.forEach((ind) => {
            paths.push({ slug: `${base}-for-${ind.slug}` });
        });
    });
    return paths;
}

/**
 * Parses the URL slug and returns the matching ServiceData and the Industry Name.
 * If not found, returns null.
 */
export function getServiceDataFromSlug(slug: string) {
    const baseKeys = Object.keys(SERVICES);
    const baseServiceKey = baseKeys.find(b => slug.startsWith(b));
    if (!baseServiceKey) return null;

    // extract industry slug: "autonomous-revenue-engine-for-hvac" -> "hvac"
    const suffix = slug.replace(`${baseServiceKey}-for-`, '');
    const industryObj = INDUSTRIES.find(i => i.slug === suffix);
    if (!industryObj) return null;

    const data = SERVICES[baseServiceKey];

    // Helper to replace {industry} template variables
    const processTemplate = (str: string) => str.replace(/{industry}/g, industryObj.name);

    return {
        baseServiceKey,
        industryName: industryObj.name,
        service: {
            ...data,
            descriptionTemplate: processTemplate(data.descriptionTemplate),
            seoTitleTemplate: processTemplate(data.seoTitleTemplate),
            seoDescriptionTemplate: processTemplate(data.seoDescriptionTemplate),
            ogDescriptionTemplate: processTemplate(data.ogDescriptionTemplate),
            // Update features specifically for SEO AEO where it says 'best {industry} company'
            features: data.features.map(f => ({
                ...f,
                desc: processTemplate(f.desc)
            }))
        }
    };
}
