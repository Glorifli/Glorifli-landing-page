import Link from "next/link";
import { Post } from "@/lib/posts";

type RelatedPostsProps = {
    currentSlug: string;
    tags: string[];
    allPosts: Post[];
};

export default function RelatedPosts({ currentSlug, tags, allPosts }: RelatedPostsProps) {
    // Simple logic to find related posts: matches at least one tag
    const relatedPosts = allPosts
        .filter((post) => post.slug !== currentSlug) // Exclude current post
        .filter((post) => post.tags.some((tag) => tags.includes(tag))) // Match tags
        .slice(0, 3); // Limit to 3

    if (relatedPosts.length === 0) {
        return null; // Don't render if no related posts
    }

    return (
        <div className="mt-16 pt-10 border-t border-zinc-200 dark:border-zinc-800">
            <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {relatedPosts.map((post) => (
                    <Link
                        key={post.slug}
                        href={`/blog/${post.slug}`}
                        className="group block p-6 bg-zinc-50 dark:bg-zinc-900 rounded-2xl hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                    >
                        <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {post.title}
                        </h3>
                        <p className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2">
                            {post.excerpt}
                        </p>
                    </Link>
                ))}
            </div>
        </div>
    );
}
