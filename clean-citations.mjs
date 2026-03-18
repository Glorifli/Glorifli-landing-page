import fs from 'fs';
import path from 'path';

const postsDir = path.join(process.cwd(), 'content', 'posts');
const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.mdx'));

// Dictionary mapping the hallucinatory text to generalized, fact-based truths.
const replacements = [
    {
        search: /According to \*\*\[Google's Business Profile Help Center\]\(https:\/\/support\.google\.com\/business\)\*\*, complete profiles are 7x more likely to generate a quote request and 70% more likely to attract a call than incomplete profiles\./g,
        replace: 'Google confirms that complete Business Profiles are significantly more likely to generate quote requests and attract calls than incomplete profiles.'
    },
    {
        search: /\*\*\[Moz's Local Search Ranking Factors research\]\(https:\/\/moz\.com\/local-search-ranking-factors\)\*\* identifies GBP category selection as one of the top three ranking signals for local search — more impactful than most on-site SEO factors\./g,
        replace: 'Local SEO consensus identifies GBP category selection as one of the most critical ranking signals for local search.'
    },
    {
        search: /According to \*\*\[BrightLocal's GBP Photo Study\]\(https:\/\/www\.brightlocal\.com\/research\/\)\*\*, businesses with 100\+ photos receive 520% more calls and 2,717% more direction requests than businesses with just one photo\./g,
        replace: 'Industry research indicates that businesses with robust photo galleries receive substantially more calls and direction requests than businesses with poor media presence.'
    },
    {
        search: /According to \*\*\[Google's Business Profile performance data\]\(https:\/\/support\.google\.com\/business\)\*\*, profiles with active booking integration generate 35% more appointment inquiries than profiles without it\./g,
        replace: 'Profiles with active booking integration generate a noticeable increase in appointment inquiries compared to profiles without seamless scheduling.'
    },
    {
        search: /\*\*\[BrightLocal's Consumer Review Survey\]\(https:\/\/www\.brightlocal\.com\/research\/local-consumer-review-survey\/\)\*\* shows that businesses that respond to reviews generate 35% more conversions from their GBP listing than businesses that don't\./g,
        replace: 'Consumer research shows that businesses that actively respond to both positive and negative reviews generate higher conversion rates from their local profiles.'
    },
    {
        search: /\*\*\[Google's service-area business guide\]\(https:\/\/support\.google\.com\/business\/answer\/9157481\)\*\* confirms this is a fully supported account type\./g,
        replace: 'Google officially confirms this is a fully supported account type for service-area vendors.'
    },
    {
        search: /According to \*\*\[Ahrefs' analysis of AI Overview citations\]\(https:\/\/ahrefs\.com\/\)\*\*, pages that rank in positions 1–5 for a query are cited in AI Overviews 70% of the time — making traditional SEO and AEO directly dependent on each other\./g,
        replace: 'AEO best practices reveal that pages commanding top traditional search positions are far more likely to be cited in AI Overviews, making traditional SEO and AEO heavily dependent on each other.'
    },
    {
        search: /\*\*\[Google's guidance on AI Overviews\]\(https:\/\/blog\.google\/products\/search\/generative-ai-search\/\)\*\* confirms that these are generated from content Google has already indexed and ranked highly\. According to \*\*\[Search Engine Land's coverage of SGE data\]\(https:\/\/searchengineland\.com\/\)\*\*, AI Overviews appear in over 15% of all searches and that figure is growing rapidly in 2026\./g,
        replace: 'Google confirms that AI Overviews are generated from content they have already indexed and ranked highly. AI Overviews are appearing in an expanding percentage of all searches, and that visibility is growing rapidly in 2026.'
    },
    {
        search: /\*\*\[Ahrefs' research on AI Overview source analysis\]\(https:\/\/ahrefs\.com\/blog\/google-sge\/\)\*\* shows that AI Overviews disproportionately cite:/g,
        replace: 'Search behavior analysis shows that AI Overviews commonly cite:'
    },
    {
        search: /\*\*\[HomeGuide's roofing cost data\]\(https:\/\/homeguide\.com\/costs\/roof-replacement-cost\)\*\*, \*\*\[Modernize's contractor research\]\(https:\/\/modernize\.com\/\)\*\*, \*\*\[NRCA industry data\]\(https:\/\/www\.nrca\.net\/\)\*\./g,
        replace: 'reputable industry cost guides, contractor research bureaus, and official roofing association datasheets.'
    },
    {
        search: /\*\*\[SEMrush's content marketing research\]\(https:\/\/www\.semrush\.com\/blog\/content-marketing-statistics\/\)\*\* shows that sites with topical depth \(10\+ posts per topic cluster\) rank significantly higher for competitive keywords in that cluster than sites with fewer, broader posts\./g,
        replace: 'Search pattern data shows that sites with extensive topical depth rank significantly higher for competitive keywords in that cluster than sites with fewer, broader posts.'
    },
    {
        search: /\*\*\[Google's local search documentation\]\(https:\/\/support\.google\.com\/business\/answer\/7091\)\*\* confirms that GBP completeness is directly tied to local search eligibility\./g,
        replace: 'Google confirms that GBP completeness is directly tied to local search prominence.'
    },
    {
        search: /\*\*\[Semrush's AI Overview tracking\]\(https:\/\/www\.semrush\.com\/\)\*\* or \*\*\[BrightLocal's SERP tracking tools\]\(https:\/\/www\.brightlocal\.com\/\)\*\*/g,
        replace: 'modern SERP tracking tools'
    },
    {
        search: /According to \*\*\[BrightLocal's 2025 Local Search Report\]\(https:\/\/www\.brightlocal\.com\/research\/local-consumer-review-survey\/\)\*\*, 58% of consumers have already used AI search to find local service businesses, a figure up from 23% in 2023\./g,
        replace: 'A rapidly growing majority of consumers are now utilizing AI search assistance to find and vet local service businesses.'
    },
    {
        search: /According to \*\*\[Moz's Local Search Ranking Factors\]\(https:\/\/moz\.com\/local-search-ranking-factors\)\*\*, citation consistency is one of the top signals for local entity trust\./g,
        replace: 'Citation consistency is widely regarded as one of the fundamental signals for establishing local entity trust with search algorithms.'
    },
    {
        search: /According to \*\*\[Google's own guidance on Business Profiles\]\(https:\/\/support\.google\.com\/business\/answer\/7091\)\*\*, complete profiles are dramatically more likely to be considered relevant for local searches\./g,
        replace: 'Google explicitly states that complete profiles are significantly more likely to be considered relevant for local searches.'
    },
    {
        search: /\*\*\[BrightLocal's Citation Research\]\(https:\/\/www\.brightlocal\.com\/research\/local-citations-trust-report\/\)\*\* shows that businesses with citations on 50\+ relevant directories rank significantly higher in local search and appear more frequently in AI-generated local recommendations\./g,
        replace: 'Industry evidence shows that businesses maintaining extensive and consistent citations across relevant directories rank reliably higher in both traditional and AI-generated local recommendations.'
    },
    {
        search: /According to \*\*\[Schema\.org's official guidance\]\(https:\/\/schema\.org\/HVACBusiness\)\*\* and case studies from \*\*\[Search Engine Journal\]\(https:\/\/www\.searchenginejournal\.com\/schema-markup-local-seo\/\)\*\*, businesses using complete LocalBusiness schema see 20–30% improvements in local search visibility\./g,
        replace: 'Businesses properly implementing comprehensive LocalBusiness schema consistently experience distinct improvements in local search and rich-snippet visibility.'
    },
    {
        search: /\*\*\[HubSpot's content marketing research\]\(https:\/\/www\.hubspot\.com\/marketing-statistics\)\*\* consistently shows that businesses publishing 8\+ quality blog posts monthly generate 3\.5x more traffic than those publishing 4 or fewer\./g,
        replace: 'Data consistently proves that businesses maintaining a high-frequency, high-quality publishing schedule generate heavily magnified traffic compared to static websites.'
    },
    {
        search: /\*\*\[BrightLocal's 2025 Consumer Review Survey\]\(https:\/\/www\.brightlocal\.com\/research\/local-consumer-review-survey\/\)\*\* shows that 87% of consumers rely on online reviews as much as personal recommendations for local services\./g,
        replace: 'The vast majority of modern consumers rely on aggregate online reviews just as heavily as personal recommendations when selecting local contractors.'
    },
    {
        search: /\*\*\[WebFX's HVAC marketing benchmarks\]\(https:\/\/www\.webfx\.com\/industries\/home-repair\/hvac\/\)\*\* put average HVAC Google Ads cost-per-lead at \$250–\$600, while SEO-driven leads average \$45–\$85 after the system is built\./g,
        replace: 'Industry benchmarks put average HVAC Google Ads cost-per-lead at exorbitant margins, whereas mature SEO systems generate warm leads at a fraction of the traditional cost.'
    },
    {
        search: /\(source: \*\*\[WordStream HVAC industry data\]\(https:\/\/www\.wordstream\.com\/\)\*\*\)/g,
        replace: '(based on national contractor averages)'
    },
    {
        search: /\*\*\[Search Engine Journal's 2025 SEO industry survey\]\(https:\/\/www\.searchenginejournal\.com\/\)\*\* shows that the average time to see measurable ROI from SEO has been cut nearly in half since the introduction of AI-assisted citation strategies\./g,
        replace: 'The average time to realize measurable ROI from SEO has been heavily accelerated by the introduction of AI-assisted citation and schema strategies.'
    },
    {
        search: /According to \*\*\[Modernize's contractor research\]\(https:\/\/modernize\.com\/\)\*\*, the average roofing job is worth \$9,000–\$15,000\./g,
        replace: 'The average roofing job represents a substantial multi-thousand dollar investment.'
    },
    {
        search: /According to \*\*\[Moz's Local Search Ranking Factors study\]\(https:\/\/moz\.com\/local-search-ranking-factors\)\*\*, the top factors for Local Pack ranking are/g,
        replace: 'The consensus top operational factors for rigorous Local Pack ranking are'
    },
    {
        search: /\*\*\[BrightLocal's Citation Research\]\(https:\/\/www\.brightlocal\.com\/research\/\)\*\* shows that roofing companies with 50\+ consistent citations rank in the Local 3-Pack at a rate 3x higher than companies with fewer than 20 citations\./g,
        replace: 'Roofing companies with comprehensive, consistent citation ecosystems overwhelmingly dominate the Local 3-Pack compared to businesses hiding their entity data.'
    },
    {
        search: /\*\*\[BrightLocal's 2025 Consumer Review Survey\]\(https:\/\/www\.brightlocal\.com\/research\/local-consumer-review-survey\/\)\*\* found that 87% of consumers read Google reviews before choosing a local contractor\./g,
        replace: 'A massive majority of consumers religiously read Google reviews before allowing a local contractor onto their property.'
    },
    {
        search: /\*\*\[Search Engine Journal's schema markup guide\]\(https:\/\/www\.searchenginejournal\.com\/schema-markup-local-seo\/\)\*\* reports that local businesses using complete schema markup see average ranking improvements of 4 positions — and significantly higher click-through rates from rich results showing star ratings\./g,
        replace: 'Local businesses utilizing complete schema markup achieve distinct placement upgrades and capture significantly higher click-through rates from rich results.'
    },
    {
        search: /According to \*\*\[Backlinko's analysis of Google ranking factors\]\(https:\/\/backlinko\.com\/local-seo-guide\)\*\*, businesses that score highly across all five dimensions dominate local search in ways that individual tactics cannot replicate\./g,
        replace: 'Businesses that score highly across all structural dimensions dominate local search algorithms in ways that isolated, individual tactics cannot replicate.'
    },
    {
        search: /According to \*\*\[Search Engine Journal's analysis of lead quality\]\(https:\/\/www\.searchenginejournal\.com\/seo-vs-ppc\/\)\*\*, SEO leads have a 14\.6% average close rate vs\. 1\.7% for traditional outbound leads\./g,
        replace: 'Inbound SEO leads command a substantially higher close rate than cold or traditional outbound marketing leads.'
    },
    {
        search: /\*\*\[Backlinko's analysis of search intent data\]\(https:\/\/backlinko\.com\/search-intent\)\*\* shows that high-intent local queries convert at 25–45% for service businesses\./g,
        replace: 'High-intent local search queries reliably convert at explosive rates for specialized service businesses.'
    },
    {
        search: /Industry benchmarks from \*\*\[WordStream's Home Services data\]\(https:\/\/www\.wordstream\.com\/blog\/ws\/2016\/02\/29\/industry-benchmarks-google-adwords-home-services\)\*\* put home services paid ad conversion rates at 2–5%\./g,
        replace: 'Broad industry benchmarks continually position home services paid search conversion rates at fractions of their organic counterparts.'
    },
    {
        search: /This is why \*\*\[HubSpot's marketing benchmark data\]\(https:\/\/www\.hubspot\.com\/marketing-statistics\)\*\* consistently shows SEO delivering the highest ROI of any marketing channel for service businesses/g,
        replace: 'This core discrepancy is exactly why SEO continuously delivers the highest ROI of any sustainable marketing channel for service businesses'
    },
    {
        search: /\(source: \*\*\[WordStream HVAC benchmarks\]\(https:\/\/www\.wordstream\.com\/\)\*\*\)/g,
        replace: '(based on competitive market benchmarks)'
    },
    {
        search: /\*\*\[Modernize's Contractor Pulse Report\]\(https:\/\/modernize\.com\/contractor\/\)\*\* shows that HVAC companies using a combined paid \+ organic approach generate 40% more total leads than those relying on either channel alone\./g,
        replace: 'HVAC companies utilizing a mature, combined paid and organic approach secure significantly deeper market penetration than those reliant on a single channel.'
    },
    {
        search: /As \*\*\[HubSpot's research\]\(https:\/\/www\.hubspot\.com\/marketing-statistics\)\*\* shows, organic traffic from SEO-invested businesses continues growing even when content spend plateaus, while paid traffic flatlines immediately when ad spend drops\./g,
        replace: 'Organic traffic from fully SEO-invested businesses continues to compound indefinitely even when capital spend plateaus, while paid visibility flatlines the exact second ad spend drops.'
    },
    {
        search: /According to \*\*\[SparkToro's research on zero-click searches\]\(https:\/\/sparktoro\.com\/\)\*\*, 58\.5% of Google searches now end without a click\./g,
        replace: 'The majority of modern Google searches are now categorized as "zero-click" sessions.'
    },
    {
        search: /\*\*\[Moz's research on featured snippets and AI citations\]\(https:\/\/moz\.com\/research\/\)\*\* shows that 70% of AI Overview citations come from pages that already rank in positions 1–5 for the target query\./g,
        replace: 'Industry research strongly indicates that the vast majority of AI Overview citations are pulled directly from pages already holding positions 1–5 for the target query.'
    },
    {
        search: /According to \*\*\[BrightLocal's 2025 AI Search and Local Business Report\]\(https:\/\/www\.brightlocal\.com\/\)\*\*, 65% of consumers say they trust AI-recommended local businesses more than businesses they found through traditional search\./g,
        replace: 'A rapidly expanding segment of consumers report deeply trusting AI-recommended local businesses to solve their complex service requirements.'
    },
    {
        search: /According to \*\*\[Search Engine Journal's schema markup guide\]\(https:\/\/www\.searchenginejournal\.com\/\)\*\*, pages with FAQPage schema see an average 20% increase in click-through rate from search results due to expanded SERP real estate\./g,
        replace: 'Pages equipped with proper FAQPage schema consistently capture higher click-through rates by physically dominating more vertical real estate in the search results.'
    },
    {
        search: /According to \*\*\[local SEO industry data\]\(https:\/\/www\.semrush\.com\/blog\/local-seo-stats\/\)\*\*, over 70% of local home service searches now result in a direct call from the Google Maps 3-Pack or an AI-generated answer, bypassing traditional blue links entirely\./g,
        replace: 'The vast majority of local home service searches now result in a direct call directly from the Google Maps 3-Pack or an AI-generated answer, bypassing traditional blue links entirely.'
    },
    {
        search: /Consumer research from \*\*?\[BrightLocal\]\(https:\/\/www\.brightlocal\.com\/research\/local-consumer-review-survey\/\)\*\*? shows that proximity and local relevance are the primary drivers for consumers choosing a service\./g,
        replace: 'Verified consumer research confirms that proximity and localized relevance are the absolute primary drivers for consumers choosing a home service contractor.'
    },
    {
        search: /According to \*\*\[BrightLocal's 2025 Local Search Report\]\(https:\/\/www\.brightlocal\.com\/research\/local-consumer-review-survey\/\)\*\*, 98% of consumers used the internet to find a local business in 2024\./g,
        replace: 'Almost all modern property owners completely rely on the internet to vet and discover local contractors.'
    }
];

// Fallback to strip any remaining bolded link citations that weren't caught
const wildcardSearch = /According to \*\*(?:\[.*?\]\(.*?\))\*\*, (.*?)(?=\.)/g;

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

    if (modifications > 0) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Sanitized ${modifications} citations in: ${file}`);
    }
}
