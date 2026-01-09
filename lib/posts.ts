import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content/posts');

export interface PostData {
    slug: string;
    title: string;
    date: string;
    author: string;
    excerpt: string;
    tags?: string[];
    entities?: string[];
    content: string;
    image?: string;
}

export function getAllPostSlugs() {
    const fileNames = fs.readdirSync(postsDirectory);
    return fileNames.map((fileName) => {
        return {
            params: {
                slug: fileName.replace(/\.mdx$/, ''),
            },
        };
    });
}

export async function getPostData(slug: string): Promise<PostData> {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    return {
        slug,
        title: matterResult.data.title,
        date: matterResult.data.date,
        author: matterResult.data.author || 'Glorifli Team',
        excerpt: matterResult.data.excerpt || '',
        tags: matterResult.data.tags || [],
        entities: matterResult.data.entities || [],
        content: matterResult.content,
        image: matterResult.data.image || '/images/blog-placeholder.jpg',
    };
}

export async function getPosts(): Promise<Omit<PostData, 'content'>[]> {
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map((fileName) => {
        const slug = fileName.replace(/\.mdx$/, '');
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const matterResult = matter(fileContents);

        return {
            slug,
            title: matterResult.data.title,
            date: matterResult.data.date,
            author: matterResult.data.author || 'Glorifli Team',
            excerpt: matterResult.data.excerpt || '',
            tags: matterResult.data.tags || [],
            entities: matterResult.data.entities || [],
            image: matterResult.data.image || '/images/blog-placeholder.jpg',
        };
    });

    return allPostsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
}
