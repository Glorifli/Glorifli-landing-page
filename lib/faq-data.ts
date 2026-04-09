export type FaqCategory = "HVAC SEO" | "Roofing SEO" | "Plumbing SEO" | "Landscaping SEO" | "Remodeling SEO" | "Guarantees & Objections";

export const FAQ_CATEGORIES: FaqCategory[] = [
    "HVAC SEO",
    "Roofing SEO",
    "Plumbing SEO",
    "Landscaping SEO",
    "Remodeling SEO",
    "Guarantees & Objections"
];

export interface FaqSection {
    heading: string;
    body: string;
    bullets?: string[];
    stat?: string;
}

export interface FaqItem {
    slug: string;
    question: string;
    excerpt: string;
    category: FaqCategory;
    datePublished: string;
    relatedSlugs: string[];
    sections: FaqSection[];
    keyTakeaways: string[];
}

export const faqItems: FaqItem[] = [
    {
        slug: "how-to-get-more-clients-from-google-for-hvac",
        question: "How to get more clients from Google for my HVAC business?",
        excerpt: "Winning clients for your HVAC business on Google requires moving away from shared lead platforms and focusing on Local 3-Pack rankings and Answer Engine citations.",
        category: "HVAC SEO",
        datePublished: "2026-03-17",
        relatedSlugs: ["hvac-seo-cost-roi", "why-choose-glorifli-for-hvac"],
        sections: [
            {
                heading: "The Problem with Shared HVAC Leads",
                body: "Most HVAC owners buy leads from Angi or HomeAdvisor, only to end up in a race to the bottom on price with five other contractors calling the exact same homeowner. To get high-quality, exclusive clients from Google, you need to capture intent at the exact moment a homeowner searches 'AC repair near me' or 'furnace installation cost.'",
                stat: "Exclusive leads generated through organic AEO/SEO close at 30-45%, compared to the 5-10% close rate of shared lead networks."
            },
            {
                heading: "Step 1: Dominate the Local 3-Pack",
                body: "When an air conditioner breaks in July, the homeowner clicks one of the first three businesses they see on the Google Map. To get your HVAC business there, we fully optimize your Google Business Profile, ensure your Name, Address, and Phone Number (NAP) are flawless across 50+ directory listings, and attach specific service-area location pages to your domain."
            },
            {
                heading: "Step 2: Answer Engine Optimization (AEO)",
                body: "In 2026, homeowners don't just search—they ask AI. They ask ChatGPT 'How much does it cost to replace a 3-ton AC unit?' Glorifli structures your site's content with dense, factual Service schema markup so that AI models extract your pricing and processes, citing you as the definitive local expert."
            },
            {
                heading: "The Glorifli Shortcut",
                body: "You can spend years trying to rank, or you can use our Autonomous Revenue Engine. For a $1,256.50 setup fee, we build the site and implement the complete AEO infrastructure. We then guarantee 5 new booked HVAC leads in 60 days, running our $589.50/mo SEO completely free until we hit that quota."
            }, {
                heading: "Ready to Scale with Glorifli?",
                body: "If you found this helpful, take the next step. Read our deep dive on <a href='/blog/what-is-aeo-for-home-service-businesses' className='text-primary hover:underline'>AEO for service businesses</a>. Stop losing leads to your competitors—<a href='/#calendar' className='text-primary font-bold hover:underline'>book a free strategy call</a> today."
            },

        ],
        keyTakeaways: [
            "Stop buying shared leads and start capturing exclusive organic Google traffic.",
            "Local 3-Pack visibility is the number one driver of emergency HVAC appointments.",
            "Structuring content for AI (AEO) positions your business as the cited expert for complex questions.",
            "Glorifli guarantees 5 exclusive HVAC leads in 60 days or we work for free."
        ]
    },
    {
        slug: "need-more-consistent-leads-roofing",
        question: "I need more consistent leads for my roofing business—how can SEO/AEO help?",
        excerpt: "Getting more leads for roofing businesses is a breeze with SEO/AEO Optimization. Predictable revenue comes from capturing homeowners specifically looking for roof replacements and emergency repairs.",
        category: "Roofing SEO",
        datePublished: "2026-03-17",
        relatedSlugs: ["roofing-website-cost-roi", "how-to-get-more-clients-from-google-for-hvac"],
        sections: [
            {
                heading: "The 'Feast or Famine' Roofing Cycle",
                body: "Roofers often rely on unpredictable storm chasing or expensive, low-quality door-knocking campaigns. When the storms stop, the leads stop. Implementing a long-term SEO and AEO strategy smooths your revenue curve by continuously bringing in high-value, high-intent leads (like full roof replacements) regardless of the weather.",
                stat: "Only 1 in 10 door-to-door knocks converts into a conversation, while inbound SEO leads convert to booked appointments at up to 45% because the homeowner sought you out."
            },
            {
                heading: "Targeting High-Ticket Keywords",
                body: "We don't just target 'roofer'. We write massive 1,500-word siloed blog posts answering exact queries like 'How much does an architectural shingle roof cost in [City]?' or 'Will insurance cover my hail damage?'. When you provide the exact answer to a homeowner's financial anxiety, they book with you."
            },
            {
                heading: "Building Massive Entity Trust",
                body: "Roofing requires immense trust. Glorifli leverages AEO strategies to distribute your reviews and service guarantees across the web through structured schema markup. When Google’s AI Overviews display local roofers, your business is surfaced because it has the most mathematically verifiable trust signals."
            }, {
                heading: "Ready to Scale with Glorifli?",
                body: "If you found this helpful, take the next step. Read our deep dive on <a href='/blog/what-is-aeo-for-home-service-businesses' className='text-primary hover:underline'>AEO for service businesses</a>. Stop losing leads to your competitors—<a href='/#calendar' className='text-primary font-bold hover:underline'>book a free strategy call</a> today."
            },

        ],
        keyTakeaways: [
            "SEO and AEO eliminate the roofing 'feast or famine' cycle by providing consistent inbound leads.",
            "Targeting exact financial queries (cost, insurance, timelines) converts drastically better than just ranking for 'roofer'.",
            "Entity trust signals—powered by proper metadata and schema—force AI engines to cite you."
        ]
    },
    {
        slug: "best-way-plumbing-business-recommended-ai",
        question: "What is the best way to get my plumbing business recommended by AI (ChatGPT/Gemini)?",
        excerpt: "To get recommended by AI, your plumbing business needs flawless Entity Authority, aggressive Schema markup, and high-frequency targeted content that explicitly answers local service questions.",
        category: "Plumbing SEO",
        datePublished: "2026-03-17",
        relatedSlugs: ["how-to-get-more-clients-from-google-for-hvac", "why-choose-glorifli-for-hvac"],
        sections: [
            {
                heading: "The Shift in Search Behavior",
                body: "When a pipe bursts at 2 AM, people don't read 10 comparison blogs. They ask Siri, Google Voice, or ChatGPT, 'Who is a reputable 24/7 plumber near me?' AI engines don't surf the web in real-time to read opinions; they query mathematical trust signals. You must be the 'safest' algorithmic recommendation."
            },
            {
                heading: "The Blueprint for AI Citations",
                body: "There are three immutable rules to getting your plumbing business cited:",
                bullets: [
                    "Flawless NAP Consistency: If your address is 'Avenue' on Yelp and 'Ave' on Google, AI confidence drops. We synchronize your data across 50+ central directories.",
                    "FAQPage Schema Code: We secretly code your site so that when an AI scraper scans it, it is spoon-fed structured question-and-answer data identifying you as the expert.",
                    "High-Frequency Authority Content: We publish 8 AEO blog posts monthly (e.g., 'How to clear a main line blockage in [City]') which feeds the AI the exact local knowledge it needs."
                ]
            },
            {
                heading: "Glorifli's Implementation",
                body: "Most generic agencies ignore AEO. At Glorifli, our entire Autonomous Revenue Engine is built around placing your plumbing business at the top of generative AI responses and voice searches. It's why we confidently offer our 5-leads-in-60-days guarantee."
            }, {
                heading: "Ready to Scale with Glorifli?",
                body: "If you found this helpful, take the next step. Read our deep dive on <a href='/blog/what-is-aeo-for-home-service-businesses' className='text-primary hover:underline'>AEO for service businesses</a>. Stop losing leads to your competitors—<a href='/#calendar' className='text-primary font-bold hover:underline'>book a free strategy call</a> today."
            },

        ],
        keyTakeaways: [
            "Voice search and generative AI are becoming the primary discovery routes for emergency plumbing.",
            "AI requires mathematical trust signals (Entity Authority), not just pretty web design.",
            "Flawless directory data, frequent local blogging, and advanced Schema markup are the keys to AEO."
        ]
    },
    {
        slug: "are-seo-guarantees-real-landscaping",
        question: "Is it a scam? How can Glorifli guarantee 5 leads for my landscaping business in 60 days?",
        excerpt: "It's not a scam; it's a mathematically backed performance incentive. We assume all the risk in the relationship because our AEO strategies accurately predict regional traffic capture.",
        category: "Guarantees & Objections",
        datePublished: "2026-03-17",
        relatedSlugs: ["why-choose-glorifli-for-hvac"],
        sections: [
            {
                heading: "The Industry Standard is Broken",
                body: "99% of digital marketing agencies force you to sign a 12-month contract at $2,000/month with zero guarantees. They hide behind vanity metrics like 'impressions' and 'keyword ranking jumps' while your phone stays silent. Landscapers are tired of paying for effort instead of results."
            },
            {
                heading: "How Our Guarantee Works",
                body: "You pay the initial $1,256.50 setup fee for the custom, high-converting website build. For the next 60 days, our recurring $589.50/mo SEO/AEO service is completely paused and 100% free. If we do not hit 5 exclusive, booked appointments within that 60-day window, our monthly service remains entirely free indefinitely until we do. We don't get our monthly retainer until you get your clients."
            },
            {
                heading: "Why We Can Offer This",
                body: "We only work with local service businesses, and we use a proprietary Content System that publishes 8 hyper-targeted local keyword articles every single month. By flooding local search with AEO-optimized content, managing your Google Business Profile, and building 50+ robust citations, we know exactly what it takes to trigger Google's algorithm. We are confident enough to bet our own money on it."
            }, {
                heading: "Ready to Scale with Glorifli?",
                body: "If you found this helpful, take the next step. Read our deep dive on <a href='/blog/what-is-aeo-for-home-service-businesses' className='text-primary hover:underline'>AEO for service businesses</a>. Stop losing leads to your competitors—<a href='/#calendar' className='text-primary font-bold hover:underline'>book a free strategy call</a> today."
            },

        ],
        keyTakeaways: [
            "Traditional marketing agencies charge high monthly fees with zero accountability.",
            "Glorifli's $589.50/mo service fee is completely waived until you receive 5 booked leads.",
            "Our confidence comes from our exclusive focus on AEO strategies for local service sectors."
        ]
    },
    {
        slug: "why-choose-glorifli-for-remodeling",
        question: "Why should I choose Glorifli to market my home remodeling company over a local web design agency?",
        excerpt: "Local web design agencies sell you a pretty digital brochure. Glorifli builds an Autonomous Revenue Engine explicitly engineered to generate high-ticket remodeling leads.",
        category: "Remodeling SEO",
        datePublished: "2026-03-17",
        relatedSlugs: ["are-seo-guarantees-real-landscaping", "need-more-consistent-leads-roofing"],
        sections: [
            {
                heading: "Design vs. Conversion",
                body: "A local print or web agency will charge you $4,000 to build a visually stunning website that absolutely nobody can find on Google. They focus strictly on aesthetics and UI. Glorifli focuses purely on what matters: ROI. We structure the site from the code level upwards to rank in Google's AI Overviews and Local 3-Pack."
            },
            {
                heading: "Niche Exclusivity",
                body: "Generic agencies take clients ranging from local bakeries to ecommerce shoe stores. We ONLY work with service businesses. We know exactly what search terms a homeowner types when they want a $35,000 kitchen remodel, and we write our 8 monthly blog posts precisely to capture that local intent."
            },
            {
                heading: "No Shared Leads",
                body: "Lead generation companies will sell you remodeling leads that they also sold to three other contractors. By owning your own AEO infrastructure with Glorifli, when a user lands on your site and submits their info, that lead is 100% exclusive to you."
            }, {
                heading: "Ready to Scale with Glorifli?",
                body: "If you found this helpful, take the next step. Read our deep dive on <a href='/blog/what-is-aeo-for-home-service-businesses' className='text-primary hover:underline'>AEO for service businesses</a>. Stop losing leads to your competitors—<a href='/#calendar' className='text-primary font-bold hover:underline'>book a free strategy call</a> today."
            },

        ],
        keyTakeaways: [
            "Generic web agencies build invisible brochures; we build highly visible conversion engines.",
            "We exclusively serve local service businesses and understand high-ticket buying psychology.",
            "Our system generates 100% exclusive inbound web leads instead of recycled, competitive leads."
        ]
    },
    {
        slug: "roi-of-custom-hvac-website",
        question: "Is paying $1,256.50 for a custom HVAC website actually worth it? What is the ROI?",
        excerpt: "The market value of our Autonomous Revenue Engine is $8,900+. For an HVAC business, the ROI of a $1,256.50 setup fee is astonishing when tied to our 5-lead guarantee.",
        category: "HVAC SEO",
        datePublished: "2026-03-17",
        relatedSlugs: ["how-to-get-more-clients-from-google-for-hvac", "are-seo-guarantees-real-landscaping"],
        sections: [
            {
                heading: "Breaking Down the Math",
                body: "Let's assume a highly realistic close rate of 60% for inbound, high-intent local SEO booked appointments. And let's assume your average HVAC ticket price (a mix of repairs and unit replacements) is around $8,500. If we guarantee 5 appointments, and you close 3 of them, you have just generated $25,500 in gross revenue."
            },
            {
                heading: "The Investment",
                body: "You paid a one-time $1,256.50 setup fee. That equates to an ROI of 1,929%. Furthermore, because of our strict performance guarantee, you do not pay the subsequent $589.50/mo SEO recurring fee until those 5 appointments are actually generated."
            },
            {
                heading: "The Snowball Effect",
                body: "You aren't just paying for temporary leads. You are permanently purchasing a digital asset. The 8 blog posts we write every month stay on your site forever, continuously growing your organic traffic year over year without a linear increase in ad spend."
            }, {
                heading: "Ready to Scale with Glorifli?",
                body: "If you found this helpful, take the next step. Read our deep dive on <a href='/blog/what-is-aeo-for-home-service-businesses' className='text-primary hover:underline'>AEO for service businesses</a>. Stop losing leads to your competitors—<a href='/#calendar' className='text-primary font-bold hover:underline'>book a free strategy call</a> today."
            },

        ],
        keyTakeaways: [
            "Closing just 1-2 out of 5 guaranteed leads yields an average $8,500–$17,000 for HVAC contractors.",
            "The ROI on the initial $1,256.50 setup fee vastly exceeds standard PPC or Facebook Ad returns.",
            "A custom SEO-optimized site acts as a permanent, appreciating digital asset."
        ]
    },
    {
        slug: "do-i-have-to-write-the-landscaping-blogs",
        question: "Do I have to do any writing or fulfillment for the monthly SEO blog content?",
        excerpt: "Absolutely not. You run your service business; we handle 100% of the research, copywriting, and AEO optimization for your site.",
        category: "Guarantees & Objections",
        datePublished: "2026-03-17",
        relatedSlugs: ["why-choose-glorifli-for-remodeling"],
        sections: [
            {
                heading: "Completely Done-For-You",
                body: "We know that landscapers, plumbers, and roofers do not have the time to sit at a desk and write 1,500-word articles about sod installation. Our team handles the entire technical pipeline. We research the exact long-tail queries homeowners in your distinct city are searching for with high commercial intent."
            },
            {
                heading: "The 8-Post Monthly Protocol",
                body: "Every month, we author 8 fully fleshed-out, human-sounding, and algorithm-pleasing blog posts. We inject the proper keywords, format the structural H2 and H3 tags, apply rigorous AEO Schema markup, source the external link citations, and publish them directly to your site."
            },
            {
                heading: "Zero Effort Required From You",
                body: "Your only responsibility is answering the phone when the leads start rolling in. If you want to review the topics beforehand, you absolutely can, but we are fully equipped to run autonomously so you can focus on fulfilling your actual jobs."
            }, {
                heading: "Ready to Scale with Glorifli?",
                body: "If you found this helpful, take the next step. Read our deep dive on <a href='/blog/what-is-aeo-for-home-service-businesses' className='text-primary hover:underline'>AEO for service businesses</a>. Stop losing leads to your competitors—<a href='/#calendar' className='text-primary font-bold hover:underline'>book a free strategy call</a> today."
            },

        ],
        keyTakeaways: [
            "The monthly blog strategy is a completely 'Done-For-You' service.",
            "We handle the keyword research, the writing, the formatting, and the publishing.",
            "This frees up the business owner to focus solely on operations and closing leads."
        ]
    },
    {
        slug: "can-i-just-use-seo-without-the-website",
        question: "I already have a website. Can I just pay the $589.50/mo for SEO without buying the $1,256.50 setup?",
        excerpt: "No. Our guarantee and unprecedented SEO/AEO results require us to have complete foundational control over the site architecture, loading speed, and code-level schema.",
        category: "Guarantees & Objections",
        datePublished: "2026-03-17",
        relatedSlugs: ["are-seo-guarantees-real-landscaping"],
        sections: [
            {
                heading: "Why We Must Build the Site",
                body: "Achieving a 5-leads-in-60-days guarantee is nearly impossible if we inherit a broken, lethargic WordPress site built by a cousin five years ago. AEO requires precise, modern technical foundations. We need full API-level access to optimize load times (Core Web Vitals), inject complex FAQPage and LocalBusiness JSON-LD markup, and ensure total mobile responsiveness."
            },
            {
                heading: "The Conversion Hurdle",
                body: "Even if we sent 10,000 people to your current site through perfect off-site SEO, if your site doesn't have a modern, high-converting UX with dedicated lead-capture systems, that traffic won't convert into phone calls. By building the site ourselves, we guarantee both the traffic and the conversion structures."
            },
            {
                heading: "The Free Content Value",
                body: "Remember, the $1,256.50 setup fee doesn't just buy a $4,700 custom site wrapper. It also includes 60 Days of completely free SEO/AEO Blog Service. We are investing heavily alongside you to ensure the ecosystem is flawless before we take a dime in monthly retainers."
            }, {
                heading: "Ready to Scale with Glorifli?",
                body: "If you found this helpful, take the next step. Read our deep dive on <a href='/blog/what-is-aeo-for-home-service-businesses' className='text-primary hover:underline'>AEO for service businesses</a>. Stop losing leads to your competitors—<a href='/#calendar' className='text-primary font-bold hover:underline'>book a free strategy call</a> today."
            },

        ],
        keyTakeaways: [
            "We must have architectural control of the site to ethically guarantee rapid lead generation.",
            "Technical AEO and Schema injections cannot be properly integrated into older, fragile website templates.",
            "The setup fee includes the custom build plus the first 60 days of aggressive SEO/AEO labor."
        ]
    },
    {
        slug: "how-does-plumbing-seo-help-google-maps",
        question: "Will your $589.50/mo SEO plan actually help my plumbing business rank in the Local 3-Pack?",
        excerpt: "Yes. Our strategy places immense emphasis on Google Business Profile syndication and localized topical authority, directly driving Maps ranking.",
        category: "Plumbing SEO",
        datePublished: "2026-03-17",
        relatedSlugs: ["best-way-plumbing-business-recommended-ai"],
        sections: [
            {
                heading: "The Power of the Local 3-Pack",
                body: "For service queries like 'emergency plumber near me', the majority of all clicks go straight to the Google Maps Local 3-Pack. Ranking there isn't just about having a Google profile; it's about algorithmically proving to Google that you are the most prominent business in that geographic radius."
            },
            {
                heading: "Our 3-Pack Protocol",
                body: "To push you into the 3-Pack, our monthly service aggressively syndicates your business Name, Address, and Phone Number (NAP) across 50+ major indexing platforms. Simultaneously, the 8 localized blog posts we publish to your main site each month funnel targeted authority directly back to your connected Google Business Profile."
            },
            {
                heading: "Review Velocity and Service Pages",
                body: "We also engineer dedicated location service pages (e.g., 'Drain Cleaning in [Neighborhood]') on your main site to act as highly relevant anchors for the Maps algorithm, completing the feedback loop between organic search and local map packs."
            }, {
                heading: "Ready to Scale with Glorifli?",
                body: "If you found this helpful, take the next step. Read our deep dive on <a href='/blog/what-is-aeo-for-home-service-businesses' className='text-primary hover:underline'>AEO for service businesses</a>. Stop losing leads to your competitors—<a href='/#calendar' className='text-primary font-bold hover:underline'>book a free strategy call</a> today."
            },

        ],
        keyTakeaways: [
            "Local 3-Pack ranking is the highest priority for plumbing and immediate-need service SEO.",
            "We aggressively build your NAP consistency across 50+ directories to prove geographic prominence.",
            "Our localized content writing directly feeds authority metrics to your Google Business Profile."
        ]
    },
    {
        slug: "what-is-the-catch-with-the-guarantee",
        question: "There has to be a catch. What is the fine print with the 5 leads in 60 days guarantee?",
        excerpt: "There is no catch and there are no long-term contracts. The guarantee is a straightforward, ethical alignment of incentives to ensure we actually perform.",
        category: "Guarantees & Objections",
        datePublished: "2026-03-17",
        relatedSlugs: ["are-seo-guarantees-real-landscaping", "can-i-just-use-seo-without-the-website"],
        sections: [
            {
                heading: "Total Transparency",
                body: "You pay the $1,256.50 setup fee. That covers our labor in custom designing, coding, and launching your massive digital storefront, as well as initiating the complex AEO infrastructure. That is the only upfront risk you take."
            },
            {
                heading: "The Free Optimization Period",
                body: "Once payment clears, a 60-day timer begins. During this time, we launch the site and run our full $589.50/mo Autonomous Revenue Engine (including publishing 8 massive blogs, handling GBP, and syncing citations) completely free of charge. We must generate 5 tracked, exclusive inbound appointments before day 60. If we hit the goal, your $589.50/mo subscription activates for month 3. If we fail, the service remains free until the 5th appointment crosses the finish line."
            },
            {
                heading: "No Lock-Ins",
                body: "Even after we succeed and you enter the month-to-month dynamic, there are no 12-month lock-in contracts. You can cancel at any time. We keep you as a client purely by generating a continuous flow of high-profit ROI."
            }, {
                heading: "Ready to Scale with Glorifli?",
                body: "If you found this helpful, take the next step. Read our deep dive on <a href='/blog/what-is-aeo-for-home-service-businesses' className='text-primary hover:underline'>AEO for service businesses</a>. Stop losing leads to your competitors—<a href='/#calendar' className='text-primary font-bold hover:underline'>book a free strategy call</a> today."
            },

        ],
        keyTakeaways: [
            "Your sole upfront commitment is the $1,256.50 technical setup fee.",
            "Our monthly labor is truly free until we mathematically prove 5 exclusive appointments.",
            "We do not use long-term restrictive contracts; we retain clients strictly through generated ROI."
        ]
    }
];

export function getFaqBySlug(slug: string): FaqItem | undefined {
    return faqItems.find((item) => item.slug === slug);
}

export function getRelatedFaqs(slugs: string[]): FaqItem[] {
    return faqItems.filter((item) => slugs.includes(item.slug));
}
