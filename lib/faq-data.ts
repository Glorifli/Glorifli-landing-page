export type FaqCategory = "AEO & GEO" | "SEO Basics" | "Local SEO" | "Content Strategy";

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
        slug: "what-is-aeo",
        question: "What Is AEO (Answer Engine Optimization) and Why Does It Matter for Service Businesses?",
        excerpt: "AEO is the practice of structuring your content so that AI systems like ChatGPT, Google AI Overviews, and Perplexity cite your business as the direct answer to high-intent questions.",
        category: "AEO & GEO",
        datePublished: "2026-03-08",
        relatedSlugs: ["what-is-geo", "is-seo-dead", "how-to-get-cited-by-chatgpt"],
        sections: [
            {
                heading: "What Is AEO?",
                body: "Answer Engine Optimization (AEO) is the practice of structuring your website content so that AI-powered answer engines — Google AI Overviews, ChatGPT, Perplexity, Gemini — can extract, understand, and cite your business as the authoritative answer to user queries. Unlike traditional SEO, which aims for a ranked blue link, AEO aims for the cited answer that appears before any links.",
                stat: "58% of Google searches now end without a click — AI tools answer the question directly, bypassing traditional search results entirely.",
            },
            {
                heading: "Why Does AEO Matter More Than Ever in 2025?",
                body: "The modern consumer no longer scrolls through ten blue links. They ask a question — by voice, by typing, or by prompting an AI — and expect a direct answer. If your business isn't the answer, you're invisible. For local service businesses especially, AEO determines whether ChatGPT says 'call this roofer' or recommends your competitor.",
                bullets: [
                    "ChatGPT and Perplexity now field millions of local service queries daily",
                    "Google's AI Overviews appear above all organic results for many search terms",
                    "Voice search queries are 3x more likely to be local and have strong purchase intent",
                    "Answer-cited businesses see 4–8 week lead results vs. 6–12 months for traditional SEO",
                ],
            },
            {
                heading: "How Is AEO Different from Traditional SEO?",
                body: "Traditional SEO optimizes for ranked links — getting your page in position 1 so users click to your site. AEO optimizes for cited answers — making sure your business is mentioned directly inside the AI response or featured snippet, often before users ever see a link. The two complement each other: strong SEO signals contribute to AEO performance, but AEO requires additional elements like structured FAQ content, schema markup, and direct-answer paragraphs.",
            },
            {
                heading: "How Do You Implement AEO for a Service Business?",
                body: "AEO implementation for service businesses centers on five key actions:",
                bullets: [
                    "Write content that directly answers the questions your ideal clients are asking (question-based H2s)",
                    "Add schema markup (FAQPage, LocalBusiness, Service types) to help AI parse your content",
                    "Build citation authority through Google Business Profile, directories, and consistent NAP data",
                    "Publish 8+ AEO-optimized blog posts monthly targeting long-tail, high-intent questions",
                    "Ensure your site is fast, mobile-optimized, and crawlable by both Google and AI scrapers",
                ],
            },
        ],
        keyTakeaways: [
            "AEO targets AI-cited answers; SEO targets ranked links — both matter, AEO is the faster path",
            "58% of searches end without a click, making AEO visibility critical for local businesses",
            "Schema markup + question-based content + GBP optimization = the AEO foundation",
            "Results from AEO strategy can appear in 4–8 weeks vs. 6–12 months for traditional SEO",
        ],
    },
    {
        slug: "what-is-geo",
        question: "What Is GEO (Generative Engine Optimization) and How Does It Differ from SEO and AEO?",
        excerpt: "GEO is the practice of optimizing your content to be cited, referenced, and summarized by generative AI platforms. Think of it as SEO for ChatGPT, Gemini, and Perplexity.",
        category: "AEO & GEO",
        datePublished: "2026-03-08",
        relatedSlugs: ["what-is-aeo", "is-seo-dead", "how-to-get-cited-by-chatgpt"],
        sections: [
            {
                heading: "What Is GEO?",
                body: "Generative Engine Optimization (GEO) is the practice of creating and structuring content specifically so that generative AI platforms — ChatGPT, Google Gemini, Perplexity, Claude — retrieve, cite, and surface your brand in their AI-generated responses. Where traditional SEO is about ranking on Google's search results page, GEO is about being in the AI's answer itself.",
                stat: "By 2026, an estimated 40% of all web searches will involve a generative AI component — making GEO the fastest-growing category of digital marketing.",
            },
            {
                heading: "Is GEO the Same as AEO?",
                body: "GEO and AEO are closely related — many practitioners use the terms interchangeably. The nuance: AEO focuses on being the 'direct answer' (traditionally in featured snippets and now in AI Overviews), while GEO is specifically about generative AI platforms that compose longer, synthesized responses. In practice, the optimization strategies are nearly identical: structured content, schema markup, authoritative citations, and clear entity definitions.",
            },
            {
                heading: "How Do Generative AI Engines Decide What to Cite?",
                body: "AI systems like ChatGPT and Perplexity select content based on several factors:",
                bullets: [
                    "Authority signals: Does Google trust your site? High domain authority correlates with AI citation frequency.",
                    "Structure clarity: Question-based headings, direct-answer paragraphs, and schema markup make content easy for AI to parse.",
                    "Freshness: AI models favor current, regularly-updated content over stale pages.",
                    "Factual density: Specific statistics, named entities, and cited sources increase citation probability.",
                    "Cross-platform consistency: Your business described identically across your site, GBP, LinkedIn, and directories builds entity trust.",
                ],
            },
            {
                heading: "Why Does GEO Matter Specifically for Local Service Businesses?",
                body: "Local service businesses benefit disproportionately from GEO because local queries with high purchase intent ('best HVAC company in Calgary') are being increasingly answered by generative AI. When ChatGPT recommends a plumber, the person asking is almost certainly ready to book. A single GEO citation for a high-intent query can generate more revenue than hundreds of traditional clicks.",
            },
        ],
        keyTakeaways: [
            "GEO = optimizing to be cited inside AI responses (ChatGPT, Gemini, Perplexity)",
            "GEO and AEO use nearly identical strategies — structured content, schema, authority signals",
            "AI systems prioritize authoritative, well-structured, factually-dense, fresh content",
            "Local service businesses benefit most from GEO because local intent queries have high purchase readiness",
        ],
    },
    {
        slug: "is-seo-dead",
        question: "Is SEO Dead in 2025 With AI Overviews and Generative AI Taking Over Search?",
        excerpt: "SEO is not dead — but the strategies that worked in 2020 are no longer sufficient. The businesses winning in 2025 combine traditional SEO with AEO and GEO to capture both ranked positions and AI citations.",
        category: "SEO Basics",
        datePublished: "2026-03-08",
        relatedSlugs: ["what-is-aeo", "zero-click-searches", "what-is-geo"],
        sections: [
            {
                heading: "Is SEO Dead?",
                body: "No — SEO is not dead, but it has fundamentally evolved. Traditional blue-link SEO is declining as AI tools answer more queries directly. However, the underlying principles of SEO (building authority, creating high-quality content, earning trust signals) are the exact same signals that AI systems use to decide whom to cite. SEO and AEO are not competitors — they are the same race, on adjacent tracks.",
                stat: "Google processes 8.5 billion searches per day. Even as AI Overviews appear in 15–20% of results, billions of traditional searches still happen daily — organic SEO traffic remains vital.",
            },
            {
                heading: "What Has Actually Changed About SEO in 2025?",
                body: "What's changed is where the results appear, not whether they exist. Three major shifts:",
                bullets: [
                    "Click-through rates are declining: AI Overviews reduce clicks to the #1 organic result by 20–30% for informational queries",
                    "Content quality threshold has risen: AI-generated content flooded the web; Google now heavily rewards E-E-A-T and original insights",
                    "Query types are shifting: More conversational, question-based, and voice-format queries — meaning your content must answer directly, not just rank",
                ],
            },
            {
                heading: "What Should Service Businesses Focus On Instead?",
                body: "The smart strategy for 2025 is a combined SEO + AEO approach:",
                bullets: [
                    "Target high-intent, low-competition long-tail questions that AI tools are citing",
                    "Build topical authority in your service niche with 8+ quality posts monthly",
                    "Optimize your Google Business Profile aggressively — it feeds both local SEO and AI local answers",
                    "Add FAQPage, LocalBusiness, and Service schema markup to your site",
                    "Earn local backlinks from directories, news coverage, and community sites",
                ],
            },
            {
                heading: "Does Glorifli's SEO/AEO Strategy Address This?",
                body: "Yes — Glorifli builds the combined infrastructure. Every website we create uses Server-Side Rendering, nested schema markup, and an AEO content architecture from day one. Our 8 monthly blog posts target both traditional search rankings and AI citation opportunities simultaneously.",
            },
        ],
        keyTakeaways: [
            "SEO is not dead — it's evolved; the same trust signals drive both rankings and AI citations",
            "Zero-click AI answers reduce CTR on informational queries but not high-intent local queries",
            "2025 strategy = SEO + AEO combined: schema, question-based content, GBP, topical authority",
            "Local service businesses with strong GBP + schema remain highly competitive in AI-driven search",
        ],
    },
    {
        slug: "how-to-get-cited-by-chatgpt",
        question: "How Do I Get My Business Cited by ChatGPT, Perplexity, and Google AI Overviews?",
        excerpt: "Getting cited by AI tools requires building authority signals that AI systems trust: structured content, schema markup, consistent entity data, and strong third-party mentions across the web.",
        category: "AEO & GEO",
        datePublished: "2026-03-08",
        relatedSlugs: ["what-is-aeo", "what-is-schema-markup", "what-is-eeeat"],
        sections: [
            {
                heading: "How AI Tools Decide What to Cite",
                body: "AI language models like ChatGPT and Perplexity were trained on web data and continue to update via web browsing. They cite content that scores highly on trust, clarity, and relevance. Specifically, they favor content that is: well-structured, factually grounded, consistently presented across multiple sources, and associated with a known, trustworthy entity (your business).",
                stat: "Businesses with consistent entity data across 50+ web directories are 3x more likely to appear in AI-generated local recommendations.",
            },
            {
                heading: "Step 1 — Build Your Entity Footprint",
                body: "AI tools verify a business by cross-referencing its name, location, services, and contact info across multiple platforms. Consistency is everything:",
                bullets: [
                    "Ensure your business name, address, and phone number (NAP) are identical on your website, Google Business Profile, Yelp, Facebook, and 50+ directories",
                    "Have a complete LinkedIn company page",
                    "Claim and optimize your Google Business Profile with photos, services, and weekly posts",
                    "Get listed on industry-specific directories (HomeStars, Angi, Houzz for contractors; HealthGrades for healthcare, etc.)",
                ],
            },
            {
                heading: "Step 2 — Structure Your Content for AI Extraction",
                body: "AI tools extract content that is easy to parse. This means:",
                bullets: [
                    "Use question-based H2 and H3 headings that match how people actually ask questions",
                    "Open each section with a direct, concise answer (the 'definition paragraph')",
                    "Add FAQPage, LocalBusiness, and Service schema markup to your site",
                    "Use numbered or bulleted lists for step-by-step or comparison content",
                    "Include specific statistics with citations — AI favors factual density",
                ],
            },
            {
                heading: "Step 3 — Earn Third-Party Mentions",
                body: "ChatGPT and Perplexity use web-browsing to verify claims. The more credible third-party sites mention your business, the more confident the AI is in recommending you. Strategies include: getting featured in local news, earning client testimonials on external review platforms, getting quoted in industry publications, and participating in local Chamber of Commerce or BBB listings.",
            },
            {
                heading: "Step 4 — Publish High-Frequency, High-Quality Content",
                body: "Frequency signals authority. Publishing 8 AEO-optimized blog posts monthly — each answering a specific high-intent question in your niche — builds the topical authority that makes AI systems recognize you as the expert in your field. Each post should be 800–1,500 words, answer one specific question completely, and link to related posts on your site.",
            },
        ],
        keyTakeaways: [
            "AI citations are earned through entity consistency, structured content, and external authority",
            "FAQPage + LocalBusiness schema is non-negotiable for AI citation eligibility",
            "50+ consistent directory listings dramatically increase local AI recommendation frequency",
            "Publishing 8+ monthly blogs targeting high-intent questions builds the topical authority AI requires",
        ],
    },
    {
        slug: "how-to-rank-local-3-pack",
        question: "How Do I Rank in Google's Local 3-Pack for My Service Business?",
        excerpt: "The Google Local 3-Pack is one of the highest-converting placements in local search. Ranking in it requires a combination of Google Business Profile optimization, reviews, citations, and on-site local SEO.",
        category: "Local SEO",
        datePublished: "2026-03-08",
        relatedSlugs: ["google-business-profile-seo", "do-reviews-affect-seo", "what-is-nap-consistency"],
        sections: [
            {
                heading: "What Is the Google Local 3-Pack?",
                body: "The Google Local 3-Pack (also called the Local Pack or Map Pack) is the block of three business listings that appears at the top of Google search results for local queries — for example, 'plumber near me' or 'HVAC company in Calgary.' It shows the business name, star rating, address, phone number, and hours. These three spots generate up to 50% of clicks for local service queries.",
                stat: "Businesses in the Local 3-Pack receive 700% more clicks than businesses outside it for the same search term.",
            },
            {
                heading: "What Factors Determine Local 3-Pack Rankings?",
                body: "Google uses three primary factors to rank businesses in the Local Pack:",
                bullets: [
                    "Relevance: Does your GBP accurately describe what you do and match what the user is searching for?",
                    "Distance: How close is your business to the searcher's location at time of query?",
                    "Prominence: How well-known and trusted is your business? (Reviews, backlinks, citations, website authority)",
                ],
            },
            {
                heading: "How to Optimize for the Local 3-Pack — Step by Step",
                body: "Here's the priority action list for Local 3-Pack ranking:",
                bullets: [
                    "Claim and fully complete your Google Business Profile — all fields, all categories, all services listed",
                    "Collect and respond to reviews consistently — aim for 20+ reviews with an average above 4.2 stars",
                    "Ensure your Name, Address, and Phone (NAP) is identical across your website and every directory",
                    "Add your service areas within GBP (especially if you don't have a storefront)",
                    "Post to GBP weekly — photos, offers, and updates signal active engagement to Google",
                    "Build citations on 50+ trusted directories (Yelp, HomeStars, Angi, BBB, YellowPages)",
                    "Embed a Google Map on your contact page",
                    "Create service-area pages on your website targeting specific cities you serve",
                ],
            },
            {
                heading: "How Long Does It Take to Rank in the Local 3-Pack?",
                body: "For new or unclaimed GBP listings, you can see initial movement in 4–8 weeks with aggressive optimization. For competitive markets (e.g., 'plumber in Toronto'), reaching a top-3 position typically takes 3–6 months of consistent effort. AEO/SEO-optimized content combined with strong citation building dramatically accelerates the timeline.",
            },
        ],
        keyTakeaways: [
            "3-Pack positions generate up to 700% more clicks than non-3-Pack results for local queries",
            "The three ranking factors are Relevance, Distance, and Prominence — each is controllable",
            "Fully completed GBP + 20+ reviews + 50+ citations is the baseline for competitive markets",
            "Service-area pages on your website boost 3-Pack relevance for cities you serve",
        ],
    },
    {
        slug: "google-business-profile-seo",
        question: "How Important Is Google Business Profile for Local SEO and Should I Prioritize It?",
        excerpt: "Google Business Profile (GBP) is the single most important local SEO asset for service businesses. It directly feeds the Local 3-Pack, Google AI local answers, and Maps results — all high-intent discovery channels.",
        category: "Local SEO",
        datePublished: "2026-03-08",
        relatedSlugs: ["how-to-rank-local-3-pack", "do-reviews-affect-seo", "what-is-nap-consistency"],
        sections: [
            {
                heading: "Why Is Google Business Profile the Most Important Local SEO Asset?",
                body: "Your Google Business Profile is Google's primary data source for local search. It powers the Local 3-Pack, Maps results, Knowledge Panel, and now Google's AI Overviews for local queries. Without a fully optimized GBP, your business is essentially invisible to the 46% of Google searches that have local intent.",
                stat: "Businesses with complete Google Business Profiles are 70% more likely to attract location visits and 50% more likely to lead to a purchase than those with incomplete profiles.",
            },
            {
                heading: "What Does a Fully Optimized GBP Include?",
                body: "Most businesses claim their GBP but leave 60–80% of it incomplete. A fully optimized GBP includes:",
                bullets: [
                    "Complete primary and secondary categories (be specific — 'Roofing Contractor' not just 'Contractor')",
                    "All services listed with descriptions and prices where applicable",
                    "Business description with relevant keywords naturally included",
                    "10+ high-quality photos (interior, exterior, team, work samples)",
                    "Complete Q&A section with pre-answered questions you seed yourself",
                    "Weekly posts (offers, events, updates) to signal active engagement",
                    "Accurate service area listing (especially for mobile service businesses)",
                    "Book appointment button linked directly to your booking system",
                ],
            },
            {
                heading: "How Does GBP Affect AI Search Results?",
                body: "Google's AI Overviews and generative answers for local queries pull directly from GBP data. When someone asks ChatGPT 'best HVAC company near me,' ChatGPT's web browsing agent reads Google's local listings. A complete, active, highly-reviewed GBP dramatically increases the probability that your business appears in AI-generated local recommendations.",
            },
            {
                heading: "How Often Should I Update My GBP?",
                body: "Weekly. Post at minimum once per week — share a recent project photo, a seasonal offer, or answer a common customer question. Respond to every review within 24–48 hours (positive and negative). Add new photos monthly. Update your hours immediately for holidays or closures. GBP activity is a direct ranking signal.",
            },
        ],
        keyTakeaways: [
            "GBP is the #1 local SEO priority — it powers 3-Pack, Maps, and AI local answer results",
            "Complete profiles are 70% more likely to drive purchase actions than incomplete ones",
            "The Q&A section, service listings, and weekly posts are the most commonly neglected but highest-impact elements",
            "GBP feeds directly into AI tools like ChatGPT when they answer local service queries",
        ],
    },
    {
        slug: "zero-click-searches",
        question: "Why Are 58% of Google Searches Ending Without a Click, and What Does This Mean for My Business?",
        excerpt: "The zero-click phenomenon is driven by Google's AI Overviews and featured snippets answering questions directly. For service businesses, the solution is AEO — becoming the answer, not just the link.",
        category: "AEO & GEO",
        datePublished: "2026-03-08",
        relatedSlugs: ["is-seo-dead", "what-is-aeo", "how-to-get-cited-by-chatgpt"],
        sections: [
            {
                heading: "What Are Zero-Click Searches?",
                body: "A zero-click search is a Google query that ends without the user clicking any result — because Google displayed the answer directly on the search results page via an AI Overview, Featured Snippet, Knowledge Panel, or Local Pack. The user got their answer without visiting anyone's website.",
                stat: "As of 2025, 58.5% of Google searches in the US end without a single click to any website, up from 50.3% in 2019.",
            },
            {
                heading: "Which Types of Searches Are Most Affected?",
                body: "Zero-click searches affect different query types differently:",
                bullets: [
                    "Informational queries (60–75% zero-click): 'How to unclog a drain' — Google shows the answer",
                    "Navigational queries (high zero-click): 'Glorifli login' — user goes directly to the site",
                    "Local queries (lower zero-click): 'Plumber near me' — users still click to call or visit",
                    "Transactional queries (lowest zero-click): 'Book HVAC service in Calgary' — strong purchase intent drives clicks",
                ],
            },
            {
                heading: "Does Zero-Click Search Make SEO Pointless for Service Businesses?",
                body: "No — for service businesses, the queries that matter most (local, transactional, high-intent) still generate strong click-through rates. 'HVAC repair Calgary,' 'emergency plumber near me,' and 'roofing contractor estimate' are all queries where users need a phone number or booking link — and they click. The zero-click problem primarily affects broad informational content, not local service discovery.",
            },
            {
                heading: "How Should Service Businesses Adapt to Zero-Click Search?",
                body: "The adaptation strategy is to become the zero-click answer, not to avoid zero-click searches:",
                bullets: [
                    "Optimize to be the featured snippet or AI Overview citation — even without a click, brand exposure drives later searches",
                    "Add FAQPage schema so your answers appear in People Also Ask and AI Overviews",
                    "Focus your main traffic strategy on high-intent local/transactional queries that still generate clicks",
                    "Use your GBP as the 'answer' for local queries — your name, rating, and phone number visible without a click is still a win",
                    "Build brand recognition through AI citations — users who see your name in an AI answer are more likely to search your brand directly later",
                ],
            },
        ],
        keyTakeaways: [
            "58.5% of Google searches end without a click — primarily informational queries, not local/transactional",
            "High-intent local queries ('plumber near me') still generate strong clicks — service businesses are less exposed",
            "The goal is to become the zero-click answer: featured snippet + AI citation = brand exposure",
            "FAQPage schema + GBP optimization is the dual strategy for zero-click visibility",
        ],
    },
    {
        slug: "how-often-blog-for-seo",
        question: "How Often Should I Post Blog Content to See SEO Results for My Service Business?",
        excerpt: "For a local service business, publishing 8 high-quality, AEO-optimized blog posts per month is the threshold that builds topical authority and generates consistent AI citations within 60–90 days.",
        category: "Content Strategy",
        datePublished: "2026-03-08",
        relatedSlugs: ["what-is-aeo", "is-seo-dead", "how-to-get-cited-by-chatgpt"],
        sections: [
            {
                heading: "How Often Should a Service Business Blog for SEO?",
                body: "For a local service business targeting AEO citations and local SEO rankings, the sweet spot is 8 posts per month. This frequency is high enough to signal topical authority to Google and AI systems, while maintaining the quality standard necessary for actual citation and ranking. Posting fewer than 4 times per month typically produces negligible SEO results within a competitive local market.",
                stat: "Companies that publish 16+ blog posts per month get 3.5x more traffic and 4.5x more leads than companies that post 0–4 times per month.",
            },
            {
                heading: "Quality vs. Quantity — Which Matters More?",
                body: "Both matter, but quality has a higher floor. A single well-researched 1,200-word post that directly answers a specific high-intent question will outperform ten 200-word posts covering broad topics. The ideal content formula for service business SEO:",
                bullets: [
                    "800–1,500 words per post (long enough for depth, short enough for readability)",
                    "One clear question answered per post (AEO direct-answer format)",
                    "Question-based H2 and H3 subheadings",
                    "At least one relevant statistic with a source citation",
                    "Internal links to service pages and related posts",
                    "FAQPage schema markup on every post",
                ],
            },
            {
                heading: "What Topics Should Service Businesses Blog About?",
                body: "The highest-performing content types for local service SEO:",
                bullets: [
                    "How-to guides: 'How to Know If Your Roof Needs Replacing'",
                    "Cost comparison posts: 'What Does HVAC Replacement Cost in [City]?'",
                    "Local guides: 'Best Plumbers in [City] — What to Look For'",
                    "FAQ-style posts answering one specific question per post",
                    "Seasonal content: 'How to Prepare Your Home's Plumbing for Winter'",
                    "Comparison content: 'HVAC Repair vs. Replacement — Which Is Right for You?'",
                ],
            },
            {
                heading: "How Long Before Blog Content Generates Leads?",
                body: "AEO-optimized blog posts targeting specific long-tail questions can generate AI citations and organic visits within 4–8 weeks. Traditional SEO ranking for competitive keywords takes 3–6 months. The fastest path is publishing high-frequency, question-specific content while simultaneously optimizing your GBP — the two compound each other.",
            },
        ],
        keyTakeaways: [
            "8 posts/month is the AEO threshold for local service businesses in competitive markets",
            "Quality floor: 800–1,500 words, one question per post, question-based headings, FAQPage schema",
            "Businesses posting 16+/month get 3.5x more traffic than those posting 4 or fewer",
            "AEO blog citations can appear in 4–8 weeks — faster than traditional SEO's 3–6 month timeline",
        ],
    },
    {
        slug: "what-is-nap-consistency",
        question: "What Is NAP Consistency and Why Does It Affect My Local Search Rankings?",
        excerpt: "NAP (Name, Address, Phone Number) consistency means your business contact information is identical across every platform online. Inconsistencies confuse Google and AI tools, directly suppressing your local search visibility.",
        category: "Local SEO",
        datePublished: "2026-03-08",
        relatedSlugs: ["google-business-profile-seo", "how-to-rank-local-3-pack", "how-to-get-cited-by-chatgpt"],
        sections: [
            {
                heading: "What Is NAP Consistency?",
                body: "NAP stands for Name, Address, and Phone Number. NAP consistency means your business's contact information appears in exactly the same format across every online platform: your website, Google Business Profile, Yelp, Facebook, HomeStars, YellowPages, and every other directory. Even minor variations — 'St.' vs 'Street,' '(555) 555-5555' vs '555-555-5555' — can confuse Google's entity recognition algorithms.",
            },
            {
                heading: "Why Does NAP Consistency Affect SEO?",
                body: "Google uses NAP data to verify your business entity and determine how trustworthy and prominent your business is. When Google finds 50 consistent NAP mentions across the web, it has high confidence your business is real, established, and trustworthy — all signals that boost your Local Pack ranking and AI citation eligibility. When Google finds inconsistent or conflicting information, it loses confidence and suppresses your visibility.",
                stat: "Businesses with consistent NAP data across 50+ citation sources rank 20–25% higher in local search results than businesses with inconsistent citation data.",
                bullets: [
                    "Inconsistent NAP signals reduce Google's confidence score in your entity",
                    "AI tools use NAP data to verify business identity when generating local recommendations",
                    "Citation inconsistencies can cause your business to appear to be two separate entities, splitting authority",
                ],
            },
            {
                heading: "How to Fix and Maintain NAP Consistency",
                body: "Step-by-step NAP consistency audit and fix:",
                bullets: [
                    "Define your exact canonical NAP format — every character, including how you abbreviate 'Suite,' 'Street,' etc.",
                    "Search Google for your business name + city and audit every listing that appears",
                    "Claim and update your profile on the top 10 directories: Google, Yelp, Facebook, Bing, Apple Maps, YellowPages, BBB, HomeStars (Canada), Angi, Houzz",
                    "Use a tool like BrightLocal or Moz Local to find and fix remaining citation inconsistencies",
                    "Update your website footer, contact page, and structured data with the exact canonical NAP format",
                    "Build 50+ consistent citations across industry-specific and geographic directories",
                ],
            },
            {
                heading: "Does NAP Consistency Affect AI Citations?",
                body: "Yes — this is increasingly important. When ChatGPT or Perplexity verifies a local business recommendation, they cross-reference information from multiple sources. If your business name is spelled three different ways across directories, AI models either don't cite you (uncertainty) or cite you less confidently. Consistent entity data across the web is the foundation of AI recommendation eligibility.",
            },
        ],
        keyTakeaways: [
            "NAP = Name, Address, Phone — every character must match across every platform",
            "Consistent citations across 50+ sources boost local rankings by 20–25%",
            "Even small variations ('St.' vs 'Street') can split your entity authority in Google's eyes",
            "AI tools use cross-referenced NAP data to verify businesses before citing them",
        ],
    },
    {
        slug: "voice-search-optimization",
        question: "How Do I Optimize My Service Business for Voice Search in 2025?",
        excerpt: "Voice search optimization means structuring your content to answer the conversational, question-based queries that people speak — not type — into their phones and smart speakers. It's nearly identical to AEO.",
        category: "AEO & GEO",
        datePublished: "2026-03-08",
        relatedSlugs: ["what-is-aeo", "how-to-rank-local-3-pack", "google-business-profile-seo"],
        sections: [
            {
                heading: "How Big Is Voice Search for Local Service Businesses?",
                body: "Voice search has become a primary discovery channel for local services. When someone's toilet is overflowing at 11pm, they don't type — they say 'OK Google, find me an emergency plumber near me.' Siri, Google Assistant, and Alexa pull answers from local search results, GBP data, and featured snippets. The businesses optimized for these voice results are the ones that get called.",
                stat: "40% of adults use voice search daily, and 58% of consumers have used voice search to find local business information in the past year.",
            },
            {
                heading: "How Is Voice Search Different from Typed Search?",
                body: "Voice queries are longer, more conversational, and more often local. Key differences:",
                bullets: [
                    "Typed: 'plumber Calgary' → Spoken: 'Who is the best plumber in Calgary for emergency repairs?'",
                    "Voice queries are 3–5x longer on average than typed queries",
                    "Voice results are almost always 'position zero' — the single answer read aloud",
                    "85% of voice search results for local queries come from the Google 3-Pack",
                    "Voice queries have higher purchase intent — users asking 'who can fix my HVAC today' are ready to book",
                ],
            },
            {
                heading: "How to Optimize for Voice Search — Practical Steps",
                body: "Voice search optimization and AEO optimization are nearly identical strategies:",
                bullets: [
                    "Write content in conversational language using the words your customers actually say",
                    "Use question-based H2 headings that mirror natural speech patterns",
                    "Add an FAQ section to your service pages and blog posts (voice often reads FAQ answers)",
                    "Optimize for featured snippets: 40–50 word direct-answer paragraphs after question headings",
                    "Ensure your Google Business Profile is complete, especially hours, phone number, and service area",
                    "Make your site load in under 3 seconds on mobile (voice search is almost exclusively mobile)",
                    "Add SpeakableSpecification schema markup so Google knows which content is suitable for voice reading",
                ],
            },
            {
                heading: "What's the Fastest Win for Voice Search?",
                body: "The fastest voice search win is GBP optimization + FAQPage schema. Voice results for local queries ('plumber near me') come directly from the 3-Pack — and GBP feeds the 3-Pack. Add FAQPage schema to your key service pages, and you cover both informational and local voice queries.",
            },
        ],
        keyTakeaways: [
            "58% of consumers have used voice search to find local business information — it's a primary discovery channel",
            "Voice queries are 3–5x longer and more conversational than typed queries",
            "85% of voice results for local queries come from the Google 3-Pack — GBP is your voice SEO foundation",
            "FAQPage schema + SpeakableSpecification + GBP = the three-piece voice search optimization stack",
        ],
    },
    {
        slug: "do-reviews-affect-seo",
        question: "Do Customer Reviews Affect My Local SEO Rankings and AI Search Visibility?",
        excerpt: "Yes — reviews are one of the top three local ranking factors for Google, and they directly influence whether AI tools recommend your business as a 'safe' choice for local queries.",
        category: "Local SEO",
        datePublished: "2026-03-08",
        relatedSlugs: ["google-business-profile-seo", "how-to-rank-local-3-pack", "what-is-eeeat"],
        sections: [
            {
                heading: "Do Reviews Actually Affect Search Rankings?",
                body: "Yes — Google has confirmed that review signals are a key factor in local search rankings. For the Local 3-Pack specifically, the quantity, quality, recency, and response rate of your reviews all contribute to your 'Prominence' score — one of Google's three core local ranking factors. More reviews = more authority = higher rankings.",
                stat: "Businesses with 50+ Google reviews rank in the Local 3-Pack 3x more often than businesses with fewer than 10 reviews for the same service types.",
            },
            {
                heading: "What Review Signals Matter Most to Google?",
                body: "Google evaluates reviews on several dimensions:",
                bullets: [
                    "Quantity: More reviews = more prominence. Aim for 20+ minimum to be competitive",
                    "Rating: A 4.2+ star average is the threshold for strong local ranking performance",
                    "Recency: Fresh reviews (last 90 days) carry more weight than older ones — you need a steady stream",
                    "Velocity: Getting 5 reviews in one week then none for 6 months looks unnatural; steady monthly accumulation is best",
                    "Diversity: Reviews across Google, Yelp, Facebook, and GBP carry more combined weight than all on one platform",
                    "Responses: Responding to reviews signals engagement and is a positive GBP activity signal",
                ],
            },
            {
                heading: "How Do Reviews Affect AI Search Recommendations?",
                body: "AI tools like ChatGPT and Perplexity use review data as a trust signal when recommending local businesses. A business with 4.8 stars and 200+ reviews is far more likely to be cited as 'the best plumber in [city]' than a business with 3 reviews and a 3.7 rating — even if the lower-rated business has better SEO. Reviews are the social proof that AI systems use as a safety check before making a recommendation.",
            },
            {
                heading: "How to Generate More Reviews Consistently",
                body: "The most effective review generation strategies for service businesses:",
                bullets: [
                    "Ask immediately after job completion — satisfaction is highest while the experience is fresh",
                    "Send a direct link to your Google review page via SMS within 30 minutes of service completion",
                    "Train every technician/employee to verbally ask for a review before leaving the job",
                    "Add a review request to your invoice or follow-up email",
                    "Never incentivize reviews (against Google Terms of Service) but do make it effortless",
                    "Respond to every review — positive and negative — within 48 hours",
                ],
            },
        ],
        keyTakeaways: [
            "Reviews are a confirmed Google local ranking factor — quantity, quality, recency, and response rate all count",
            "50+ reviews puts you in a 3x higher likelihood of ranking in the Local 3-Pack",
            "AI tools use review ratings as a safety check before recommending a business",
            "The fastest review strategy: direct SMS link immediately after service completion",
        ],
    },
    {
        slug: "how-long-does-seo-take",
        question: "How Long Does SEO Take to Show Results for a Local Service Business?",
        excerpt: "Traditional SEO takes 3–6 months for meaningful results. AEO-focused content targeting specific long-tail questions can generate AI citations and organic visits in 4–8 weeks — significantly faster.",
        category: "SEO Basics",
        datePublished: "2026-03-08",
        relatedSlugs: ["what-is-aeo", "how-often-blog-for-seo", "is-seo-dead"],
        sections: [
            {
                heading: "How Long Does SEO Typically Take?",
                body: "The honest answer: traditional broad-keyword SEO typically takes 3–6 months before generating meaningful organic traffic, and 6–12 months to see significant ROI. This is because Google needs time to crawl, index, and evaluate your content relative to years of existing competition. However, this timeline is dramatically shorter for AEO-focused strategies targeting specific, lower-competition long-tail questions.",
                stat: "AEO-optimized content targeting specific long-tail questions with clear schema markup can generate AI citations and first-page rankings in 4–8 weeks — 4x faster than traditional broad SEO.",
            },
            {
                heading: "Why Does AEO Produce Faster Results Than Traditional SEO?",
                body: "AEO produces faster results for three reasons:",
                bullets: [
                    "Long-tail questions have far less competition — ranking for 'emergency plumber Calgary 24 hour' is easier than ranking for 'plumber'",
                    "AI systems continuously crawl the web and can cite new content within days of indexing",
                    "FAQPage schema markup provides immediate eligibility for featured snippets and People Also Ask boxes",
                ],
            },
            {
                heading: "What Is the SEO Timeline for a New Service Business Website?",
                body: "Here's a realistic AEO/SEO timeline for a new website:",
                bullets: [
                    "Weeks 1–2: Site goes live, Google crawls and indexes the site",
                    "Weeks 2–4: GBP optimization, citation building begins, first AI citations may appear",
                    "Weeks 4–8: AEO blog content begins appearing in People Also Ask and long-tail rankings",
                    "Months 2–3: 10+ leads from organic search and AI citations (Glorifli's guaranteed threshold)",
                    "Months 3–6: Compound growth — each new post builds on previous authority",
                    "Months 6–12: Strong topical authority in your niche, competitive for primary keywords",
                ],
            },
            {
                heading: "What Happens After the 60-Day Guarantee Period?",
                body: "Glorifli's 10-leads-in-60-days guarantee covers the immediate result. But the long-term value of the SEO/AEO system compounds over time. Every blog post published month 2 ranks faster than a post published month 1 — because the domain has more authority. By month 6, our clients typically see organic lead flow that exceeds the initial guarantee many times over, with zero additional ad spend.",
            },
        ],
        keyTakeaways: [
            "Traditional broad-keyword SEO: 3–6 months. AEO long-tail targeting: 4–8 weeks",
            "Long-tail questions have less competition and faster ranking timelines",
            "FAQPage schema enables featured snippet eligibility from day one of indexing",
            "Glorifli guarantees 10 leads in 60 days — the organic system keeps compounding after that",
        ],
    },
    {
        slug: "what-is-schema-markup",
        question: "What Is Schema Markup and Does My Service Business Website Need It?",
        excerpt: "Schema markup is structured data code added to your website that tells search engines and AI tools exactly what your business is, what it does, and what your content means. It's essential for both local SEO and AI citation eligibility.",
        category: "SEO Basics",
        datePublished: "2026-03-08",
        relatedSlugs: ["what-is-aeo", "how-to-get-cited-by-chatgpt", "what-is-eeeat"],
        sections: [
            {
                heading: "What Is Schema Markup?",
                body: "Schema markup (also called structured data) is code — written in JSON-LD format — that you add to your website's HTML to tell search engines and AI tools exactly what your content represents. Instead of leaving Google to guess that 'Glorifli' is a 'local digital marketing agency that offers SEO services,' schema markup explicitly states it in machine-readable format that both Google and AI scrapers can process instantly.",
                stat: "Pages with schema markup rank an average of 4 positions higher in search results than pages without it — and are 40% more likely to appear as AI-generated citations.",
            },
            {
                heading: "What Types of Schema Markup Matter for Service Businesses?",
                body: "The most impactful schema types for local service businesses:",
                bullets: [
                    "LocalBusiness (or specific subtypes: Plumber, HVAC, Roofer, etc.) — your core entity definition",
                    "Service — describes each specific service you offer with pricing and area served",
                    "FAQPage — makes your FAQ content eligible for People Also Ask, AI Overviews, and voice search",
                    "BreadcrumbList — tells Google your site's navigation hierarchy",
                    "Review / AggregateRating — surfaces your star rating in SERPs",
                    "Organization — establishes your business entity with sameAs links to your social profiles",
                    "WebPage / AboutPage — describes specific page content",
                ],
            },
            {
                heading: "How Do You Add Schema Markup to a Website?",
                body: "Schema markup is added as a JSON-LD script block in your page's HTML head section. Here's a simple LocalBusiness example structure (not shown as code to prevent rendering issues): type LocalBusiness, name your business, address with streetAddress, city, postalCode, country, phone number, URL, and geo coordinates. Most modern website builders have schema plugins; custom Next.js sites like Glorifli builds add schema programmatically to every page.",
            },
            {
                heading: "Is Schema Markup a Direct Ranking Factor?",
                body: "Google has stated that schema markup is not a direct ranking factor — but this is misleading. Schema markup enables rich results (star ratings, FAQs in SERPs, price ranges), which dramatically improve click-through rates — which IS a ranking signal. More importantly, schema is the primary way AI tools verify and categorize your content for citation. For AEO and GEO purposes, schema markup is non-negotiable.",
            },
        ],
        keyTakeaways: [
            "Schema markup tells Google and AI exactly what your business is — in machine-readable format",
            "Pages with schema rank 4 positions higher on average and are 40% more likely to be AI-cited",
            "Must-have types: LocalBusiness, Service, FAQPage, Organization, BreadcrumbList",
            "Schema is the primary mechanism AI tools use to verify and categorize business content",
        ],
    },
    {
        slug: "near-me-vs-city-keywords",
        question: "Should I Target 'Near Me' or 'Service + City' Keywords for Local SEO?",
        excerpt: "Target both — but optimize your site primarily for 'service + city' keywords. Google automatically understands 'near me' intent based on location; city-specific pages give you a permanent, location-based SEO asset.",
        category: "Local SEO",
        datePublished: "2026-03-08",
        relatedSlugs: ["how-to-rank-local-3-pack", "google-business-profile-seo", "how-long-does-seo-take"],
        sections: [
            {
                heading: "Are 'Near Me' Keywords Worth Targeting?",
                body: "'Near me' searches are extremely high-intent — someone searching 'emergency plumber near me' is moments from booking. However, you cannot rank for 'near me' through on-page optimization alone, because Google dynamically determines 'near me' based on the searcher's real-time location. Your GBP listing and Local 3-Pack ranking are what determine your visibility for these queries — not a page titled 'Plumber Near Me.'",
                stat: "'Near me' searches grew by 900% between 2015 and 2020 and continue to rise. 72% of local 'near me' searches result in a store visit or call within 24 hours.",
            },
            {
                heading: "Why Are 'Service + City' Keywords Superior for On-Page SEO?",
                body: "'Service + city' keywords ('plumber in Calgary,' 'HVAC repair Toronto,' 'roofer near Edmonton') offer something 'near me' keywords don't: a rankable, permanent URL. You can create a page titled 'HVAC Repair in Calgary' and rank it for that exact query year-round — regardless of where the searcher is located. Creating service-area pages for every city you serve is one of the highest-ROI local SEO tactics available.",
            },
            {
                heading: "How to Build Service-Area Pages That Rank",
                body: "Effective service-area pages are not just the same page with the city name swapped. They need genuine local specificity:",
                bullets: [
                    "Include the city name in the H1, URL slug, title tag, and meta description",
                    "Mention specific neighborhoods, landmarks, or local references",
                    "Include a Google Map embed showing your coverage area",
                    "Add testimonials from clients in that city if possible",
                    "Include local stats or context (e.g., 'Calgary's extreme winters create unique HVAC demands')",
                    "Add LocalBusiness schema with areaServed pointing to the specific city",
                    "Internal link service-area pages to each other and to your main service pages",
                ],
            },
            {
                heading: "What's the Right Keyword Strategy for a New Service Business?",
                body: "For a new site or new market: Start with 5–10 city-specific service pages targeting your highest-priority service + city combinations. Simultaneously optimize your GBP service area to capture 'near me' traffic. Add 8+ monthly blog posts targeting long-tail questions ('How much does HVAC replacement cost in Calgary?') to build topical authority. Within 90 days, both the service pages and blog content compound to dominate the local market.",
            },
        ],
        keyTakeaways: [
            "'Near me' ranking comes from GBP + 3-Pack position, not on-page text — optimize GBP for near-me queries",
            "Service + city pages are rankable, permanent SEO assets — build one for each city you serve",
            "'Near me' searches are 72% likely to result in a call or visit within 24 hours — high purchase intent",
            "The winning local strategy: GBP for near-me + city service pages for service+city + blog posts for long-tail",
        ],
    },
    {
        slug: "what-is-eeeat",
        question: "What Is E-E-A-T and How Do I Demonstrate It to Google and AI Search Engines?",
        excerpt: "E-E-A-T stands for Experience, Expertise, Authoritativeness, and Trustworthiness. It's Google's framework for evaluating content quality — and it's the same framework AI tools use to decide whose content to cite.",
        category: "SEO Basics",
        datePublished: "2026-03-08",
        relatedSlugs: ["what-is-aeo", "do-reviews-affect-seo", "how-to-get-cited-by-chatgpt"],
        sections: [
            {
                heading: "What Is E-E-A-T?",
                body: "E-E-A-T stands for Experience, Expertise, Authoritativeness, and Trustworthiness. It's the quality framework Google's Search Quality Raters use to evaluate whether a piece of content (and its author/creator) meets the standards for high-quality information. While E-E-A-T is not a direct ranking algorithm, it heavily influences how Google's algorithms score and rank content — and it's the same framework AI tools implicitly apply when selecting content to cite.",
            },
            {
                heading: "What Does Each Component Mean for a Service Business?",
                body: "Breaking down each element:",
                bullets: [
                    "Experience: Demonstrate real first-hand experience. Show photos of actual jobs, share real client stories, use the specific language of someone who has done the work — not generic industry copy.",
                    "Expertise: Showcase qualifications, certifications, licenses, specific service knowledge. If you're a licensed electrician, your site should say so clearly — with your license number.",
                    "Authoritativeness: Be recognized as an authority by others. This means reviews on external platforms, media coverage, backlinks from industry sites, GBP prominence, and consistent mentions across directories.",
                    "Trustworthiness: Be transparent. Show a real physical address, list real team members, secure your site with HTTPS, have clear pricing and guarantee information, and respond to reviews honestly.",
                ],
            },
            {
                heading: "How Do You Demonstrate E-E-A-T on Your Website?",
                body: "Practical E-E-A-T implementation for service business websites:",
                bullets: [
                    "Add an About page with the founder's name, photo, credentials, and professional background",
                    "Display certifications, licenses, and awards prominently on your homepage and About page",
                    "Include real project photos (before/after) — not stock photography",
                    "Show testimonials with full names and locations, not just initials",
                    "Link your website to your LinkedIn, Google Business Profile, and industry association profiles",
                    "Add author bios to blog posts identifying who wrote them and their qualifications",
                    "List a physical address, even if you're a mobile service business",
                ],
            },
            {
                heading: "Why Does E-E-A-T Matter for AI Citations Specifically?",
                body: "AI tools like ChatGPT are trained to avoid recommending businesses or content that could be inaccurate, risky, or untrustworthy. They favor entities that have strong cross-platform validation (GBP, LinkedIn, directory listings), verifiable credentials, and consistent positive reputation signals (reviews). A business with a real founder profile, verified credentials, and 100+ positive reviews across multiple platforms will be cited far more readily than an anonymous website with the same service.",
            },
        ],
        keyTakeaways: [
            "E-E-A-T = Experience, Expertise, Authoritativeness, Trustworthiness — Google's content quality framework",
            "It's not a direct ranking algorithm but heavily influences how Google and AI evaluate content confidence",
            "For service businesses: founder bio + photos of real work + certifications listed + external reviews = strong E-E-A-T",
            "AI tools use E-E-A-T signals to determine how 'safe' a recommendation is — high E-E-A-T = more AI citations",
        ],
    },
];

export function getFaqBySlug(slug: string): FaqItem | undefined {
    return faqItems.find((item) => item.slug === slug);
}

export function getRelatedFaqs(slugs: string[]): FaqItem[] {
    return slugs.map((s) => getFaqBySlug(s)).filter(Boolean) as FaqItem[];
}

export const FAQ_CATEGORIES: FaqCategory[] = ["AEO & GEO", "SEO Basics", "Local SEO", "Content Strategy"];
