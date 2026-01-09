'use server';

import { getPosts } from '@/lib/posts';

export async function fetchPosts() {
    return await getPosts();
}
