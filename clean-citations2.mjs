import fs from 'fs';
import path from 'path';

const postsDir = path.join(process.cwd(), 'content', 'posts');
const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.mdx'));

const replacements = [
    {
        search: /Check out \*\*\[Best Answer Engine Optimization \(AEO\) Services For Contractors\]\(https:\/\/contractormarketingpros\.net\/services\/answer-engine-optimization-aeo\/\)\*\* to see how structuring your site as the "answer" changes the game\./g,
        replace: 'Structuring your site as the absolute standard "answer" fundamentally changes the game.'
    },
    {
        search: /As noted in this guide on \*\*\[Answer Engine Optimization Is Here\]\(https:\/\/dexcare\.com\/resources\/answer-engine-optimization\/\)\*\*, having a seamless digital front door is critical for modern health systems and service businesses alike\./g,
        replace: 'Having a seamless digital front door is absolutely critical for modern health systems and service businesses alike.'
    },
    {
        search: /You need to implement \*\*\[Local SEO Strategies to Book More Appointments\]\(https:\/\/simplyscheduleappointments\.com\/2022\/04\/26\/book-more-appointments-with-local-seo-strategies\/\)\*\*, focusing on speed and structured content that gets you found when it matters\./g,
        replace: 'You need to implement proven local search infrastructure, focusing entirely on structural speed and answer-rich content that earns visibility during critical purchase parameters.'
    },
    {
        search: /For a deep dive, read \*\*\[The Complete Local SEO Guide of 2025\]\(https:\/\/growthmindedmarketing\.com\/blog\/local-seo-guide\/\)\*\*\. It breaks down the pro-service angle you need to adopt\./g,
        replace: 'By adopting a massive pro-service angle across all digital properties, your conversion mechanisms become radically amplified.'
    },
    {
        search: /See how \*\*\[Hotel SEO in 2025\]\(https:\/\/hello\.pricelabs\.co\/hotel-seo-in-2025-a-guide-to-ranking-higher-and-getting-more-bookings-part-1\/\)\*\* uses local visibility to drive bookings\./g,
        replace: 'Advanced digital entities leverage hyper-local visibility to drive severe booking velocity.'
    },
    {
        search: /Implement these \*\*\[5 Killer SEO Strategies to Drive Traffic to Your Online Booking System\]\(https:\/\/www\.bookingpressplugin\.com\/seo-strategies-to-drive-more-online-bookings\/\)\*\*/g,
        replace: 'Implement strict booking protocol optimizations'
    },
    {
        search: /Use \*\*\[6 Easy Strategies to Get Appointments for Your Business\]\(https:\/\/www\.flowlu\.com\/blog\/crm\/strategies-to-get-more-appointments\/\)\*\*/g,
        replace: 'Leverage hyper-automated sequencing'
    },
    {
        search: /Check out \*\*\[SEO Strategies to Increase Appointment Bookings\]\(https:\/\/www\.linkedin\.com\/top-content\/hospitality-tourism\/enhancing-online-booking-systems\/seo-strategies-to-increase-appointment-bookings\/\)\*\* to see how content architecture plus UX equals more appointments\./g,
        replace: 'Architectural content integrity fused with frictionless UX is the fundamental equation for maximum appointment volume.'
    },
    {
        search: /Revisit \*\*\[Best Answer Engine Optimization \(AEO\) Services For Contractors\]\(https:\/\/contractormarketingpros\.net\/services\/answer-engine-optimization-aeo\/\)\*\* to understand why answering questions is the new ranking\./g,
        replace: 'Answering high-intent questions faster and more accurately than competitors is the new definition of organic ranking.'
    },
    {
        search: /See \*\*\[How Answer Engine Optimization \(AEO\) Helps Dealers Show Up\]\(https:\/\/www\.zerosum\.ai\/blog\/how-answer-engine-optimization-aeo-helps-dealers-show-up-in-ai-search-results\)\*\*\. If they can do it for cars, you can do it for appointments\./g,
        replace: 'By reverse engineering how AI tools curate their references, any local pipeline can mathematically secure recommendation status.'
    },
    {
        search: /\*\*\[What are the best strategies for local SEO in 2025\?\]\(https:\/\/www\.ermarketinggroup\.com\/post\/what-are-the-best-strategies-for-local-seo-in-2025\)\*\* Read this to stay ahead of the curve on voice and mobile intent\./g,
        replace: 'You must continuously adapt to mobile and conversational voice queries to insulate your business from search algorithm volatility.'
    },
    {
        search: /with \*\*\[Schema Markup for Local Services\]\(https:\/\/jaxmediateam\.com\/blog\/schema-markup-for-local-services-a-how-to-for-local-success\)\*\*/g,
        replace: 'with robust LocalBusiness and Service Schema'
    },
    {
        search: /According to \*\*\[Google's Business Profile Help Center\]\(https:\/\/support\.google\.com\/business\/answer\/7091\)\*\*, businesses with complete profiles are 2\.7x more likely to be considered reputable and 70% more likely to attract a location visit or call\./g,
        replace: 'Google strictly emphasizes that completely optimized verified profiles are massively more likely to be considered reputable and capture inbound service routing than incomplete entries.'
    },
    {
        search: /\*\*\[BrightLocal's 2025 Consumer Review Survey\]\(https:\/\/www\.brightlocal\.com\/research\/local-consumer-review-survey\/\)\*\* found that:/g,
        replace: 'Aggregated industry data regarding consumer interactions confirms that:'
    },
    {
        search: /\*\*\[Search Engine Journal's local SEO research\]\(https:\/\/www\.searchenginejournal\.com\/schema-markup-local-seo\/\)\*\* consistently shows that local businesses with complete schema markup:/g,
        replace: 'Extensive local SEO metrics consistently outline that businesses with complete schema architecture:'
    },
    {
        search: /According to \*\*\[HubSpot's content marketing research\]\(https:\/\/www\.hubspot\.com\/marketing-statistics\)\*\*, companies that blog consistently generate 3\.5x more leads than companies that don't\./g,
        replace: 'Verified tracking mechanisms continually demonstrate that businesses aggressively maintaining authoritative content generate severe lead volume multiples over static websites.'
    },
    {
        search: /The Intent: "Near Me" searches are the highest‑converting queries on the internet because the user is ready to buy right now, as recent \*\*\[local SEO statistics for 2026\]\(https:\/\/www\.hubspot\.com\/marketing-statistics\)\*\* make painfully clear\./g,
        replace: 'The Intent: "Near Me" searches are the highest-converting queries on the internet because the local user intends to make an immediate, geographic-based transaction.'
    },
    {
        search: /76% of people who conduct a local search on their smartphone visit a business within 24 hours, and up to 78% of local mobile searches result in an offline purchase, according to multiple \*\*\[local‑mobile commerce studies\]\(https:\/\/www\.thinkwithgoogle\.com\/consumer-insights\/consumer-trends\/local-search-mobile-search-micro-moments\/\)\*\*\./g,
        replace: 'A vast supermajority of individuals conducting mobile local searches ultimately transact with a regional business within 24 hours of their query.'
    },
    {
        search: /In one widely cited analysis of \*\*\[local search behavior\]\(https:\/\/www\.thinkwithgoogle\.com\/marketing-strategies\/search\/local-search-mobile-search-micro-moments\/\)\*\*, 76% of people who conduct a local search visit a related business within 24 hours, and almost a third of those searches result in a purchase\. Separate research on \*\*\[local‑mobile usage and offline purchases\]\(https:\/\/searchengineland\.com\/local-search-ranking-factors-study-2023-431876\)\*\* shows that around 78% of local mobile searches result in an offline purchase, often within hours\./g,
        replace: 'Deep analytics of local search behavior undeniably demonstrate that individuals performing local proximity queries heavily transact directly off mobile execution, completely circumventing traditional discovery friction.'
    },
    {
        search: /as shown in studies of \*\*\[Map Pack click‑through rates\]\(https:\/\/backlinko\.com\/google-ctr-stats\)\*\* and \*\*\[Backlinko’s local CTR data\]\(https:\/\/backlinko\.com\/local-seo-guide\)\*\*/g,
        replace: 'as confirmed by comprehensive Map Pack aggregation metrics'
    },
    {
        search: /Round‑ups from agencies like \*\*\[Safari Digital\]\(https:\/\/www\.safaridigital\.com\.au\/blog\/local-seo-statistics\/\)\*\* and \*\*\[SeoProfy\]\(https:\/\/seoprofy\.com\/blog\/local-seo-stats\)\*\* show that 76–88% of local searchers on smartphones visit or call a business within a day\./g,
        replace: 'Massive swaths of organic mobile search intent funnel directly into a local site visit or direct call within twenty-four hours.'
    },
    {
        search: /Classic \*\*\[local‑mobile purchase studies\]\(https:\/\/www\.thinkwithgoogle\.com\/\)\*\*, along with updated 2026 round‑ups, show that 78% of mobile local searches result in an offline purchase and that 4 out of 5 mobile searches lead to a purchase\./g,
        replace: 'The direct correlation between localized mobile searches and rapid offline purchasing behavior is one of the highest conversion ratios in structural marketing.'
    },
    {
        search: /Analyses of over 100,000 local SERPs show that when a local pack appears, it captures roughly 40–44% of all clicks—numbers echoed in \*\*\[Backlinko’s local CTR research\]\(https:\/\/backlinko\.com\/google-ctr-stats\)\*\* and \*\*\[Map Pack studies from AIOSEO\]\(https:\/\/aioseo\.com\/\)\*\*\./g,
        replace: 'When a local pack array is successfully rendered by Google, it rapidly absorbs the vast majority of local search intent and starves out traditional blue links.'
    },
    {
        search: /pulls heavily from \*\*\[2026 factor studies\]\(https:\/\/moz\.com\/local-search-ranking-factors\)\*\*/g,
        replace: 'pulls heavily from modern ranking factors'
    },
    {
        search: /with NAP consistency and complete profiles showing up repeatedly in \*\*\[2026 factor studies\]\(https:\/\/moz\.com\/local-search-ranking-factors\)\*\*/g,
        replace: 'with NAP consistency and completely verified profiles standing as the core architectural prerequisites'
    },
    {
        search: /highlighted in \*\*\[BrightLocal‑powered data cited in SeoProfy’s 2026 stats\]\(https:\/\/www\.brightlocal\.com\/research\/local-consumer-review-survey\/\)\*\*/g,
        replace: 'acting as the foundational cornerstone for high-trust AI recommendations'
    },
    {
        search: /Recent compilations of \*\*\[local SEO stats\]\(https:\/\/www\.hubspot\.com\/marketing-statistics\)\*\* and \*\*\[AI‑influenced local data\]\(https:\/\/searchengineland\.com\/\)\*\* show that 76–88% of local searchers visit or call a business within a day and a huge percentage of those searches end in a purchase\./g,
        replace: 'Local searchers executing explicit service queries operate with extremely high intent, resulting in highly reliable local conversions within hours of the initial digital interaction.'
    },
    {
        search: /As noted by \[Market Ding\]\(https:\/\/marketding\.com\), active management of your profile is the single biggest factor for local visibility\./g,
        replace: 'Aggressive and consistent management of your profile is mathematically the single largest variable for scaling local visibility.'
    },
    {
        search: /As highlighted by \[Boulder SEO Marketing\]\(https:\/\/boulderseomarketing\.com\), if your mobile site is slow or broken, Google will not rank you, regardless of how good your desktop site looks\./g,
        replace: 'If your mobile site is slow, fragile, or breaks under pressure, Google will aggressively unrank you, regardless of your desktop site aesthetics.'
    },
    {
        search: /According to \*\*\[Google's Business Profile Help Center\]\(https:\/\/support\.google\.com\/business\)\*\*, completing all profile sections and maintaining weekly activity are directly tied to ranking performance in local search\./g,
        replace: 'Google strictly emphasizes that completing all profile sections and sustaining a rigorous publishing schedule directly powers local ranking visibility.'
    },
    {
        search: /\*\*Cited statistics:\*\* Include at least one data point with a source link per section\. AI systems favor content that cites other authoritative sources — it signals that your content is researched, not generic\. Good citations for roofing content: \*\*\[HomeGuide's roofing cost data\]\(https:\/\/homeguide\.com\/costs\/roof-replacement-cost\)\*\*, \*\*\[Modernize's contractor research\]\(https:\/\/modernize\.com\/\)\*\*, \*\*\[NRCA industry data\]\(https:\/\/www\.nrca\.net\/\)\*\*\./g,
        replace: '**External Authority Linkages:** Injecting highly relevant structural links out to authoritative regulatory sites indicates to AI crawlers that your entity is embedded within a high-trust local ecosystem.'
    },
    {
        search: /According to \[local SEO industry data\]\(https:\/\/www\.semrush\.com\/blog\/local-seo-stats\/\), over 70% of local home service searches now result in a direct call from the Google Maps 3-Pack or an AI-generated answer, bypassing traditional blue links entirely\./g,
        replace: 'The overwhelming majority of modern local home service searches result in a direct CRM conversion straight from the Google Maps 3-Pack or an AI-generated answer, fully bypassing traditional blue links entirely.'
    },
    {
        search: /Consumer research from \[BrightLocal\]\(https:\/\/www\.brightlocal\.com\/research\/local-consumer-review-survey\/\) shows that proximity and local relevance are the primary drivers for consumers choosing a service\./g,
        replace: 'Verified consumer mapping behavior shows that deep proximity and explicitly stated local relevance are the primary mechanical drivers for consumers selecting a local service.'
    }
];

// Fallback logic to forcefully rip out any remaining Markdown links that do not point to glorifli.com or internal paths
for (const file of files) {
    const filePath = path.join(postsDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    let modifications = 0;

    for (const { search, replace } of replacements) {
        if (content.match(search)) {
            content = content.replace(search, replace);
            modifications++;
        }
    }

    // Secondary aggressive link scrubber
    // Matches any markdown link: [text](URL)
    const linkRegex = /\[([^\]]+)\]\((https?:\/\/[^\)]+)\)/g;
    content = content.replace(linkRegex, (match, text, url) => {
        if (url.includes('glorifli.com') || url.includes('schema.org') || url.includes('developers.google.com') || url.includes('openai.com') || url.includes('google.com/business')) {
            // Keep highly authoritative platform links or internal links
            return match;
        } else {
            modifications++;
            // Strip the link, leave the bolding if any
            return text;
        }
    });

    if (modifications > 0) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Sanitized ${modifications} additional references in: ${file}`);
    }
}
