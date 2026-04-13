
import { getPosts, getPostData } from '@/lib/posts';
import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic'; // Ensure new posts are picked up without rebuild

export async function GET() {
    try {
        // 1. Read the overview (formerly public/llm.txt)
        const overviewPath = path.join(process.cwd(), 'lib/llm-overview.md');
        let overviewContent = '';

        if (fs.existsSync(overviewPath)) {
            overviewContent = fs.readFileSync(overviewPath, 'utf8');
        }

        // 2. Read core pages from content/pages
        const pagesDir = path.join(process.cwd(), 'content/pages');
        let corePagesContent = '';
        if (fs.existsSync(pagesDir)) {
            const pageFiles = fs.readdirSync(pagesDir).filter(f => f.endsWith('.md'));
            for (const file of pageFiles) {
                const content = fs.readFileSync(path.join(pagesDir, file), 'utf8');
                corePagesContent += `\n\n--- [Page: ${file.replace('.md', '').toUpperCase()}] ---\n\n${content}`;
            }
        }

        // 3. Get all blog posts
        const posts = await getPosts();

        // 4. Fetch full content for each post
        const postsContent = await Promise.all(
            posts.map(async (post) => {
                const fullPost = await getPostData(post.slug);
                const date = new Date(fullPost.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                });

                return `
## ${fullPost.title}
Date: ${date}
Link: https://glorifli.com/blog/${fullPost.slug}

${fullPost.content}

---
`;
            })
        );

        // 5. Combine everything
        const finalContent = `
${overviewContent}

# Core Pages Context
${corePagesContent}

# Blog Posts
${postsContent.join('\n')}
`.trim();

        return new NextResponse(finalContent, {
            status: 200,
            headers: {
                'Content-Type': 'text/plain; charset=utf-8',
                'Cache-Control': 'no-store, max-age=0', // Prevent caching so new posts show up
            },
        });

    } catch (error) {
        console.error('Error generating llm.txt:', error);
        return new NextResponse('Error generating content', { status: 500 });
    }
}
