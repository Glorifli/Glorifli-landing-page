import { NextResponse } from 'next/server';
import { notifyGoogleIndexing } from '@/lib/google-indexing';

export async function POST(request: Request) {
  try {
    // Basic authorization check (Optional: add a secret token to headers in production)
    const authHeader = request.headers.get('authorization');
    if (process.env.INDEXING_API_SECRET && authHeader !== `Bearer ${process.env.INDEXING_API_SECRET}`) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { url } = body;

    if (!url) {
      return NextResponse.json({ error: 'Missing "url" in request body' }, { status: 400 });
    }

    // Call the Google Indexing utility
    const result = await notifyGoogleIndexing(url);

    if (result.success) {
      return NextResponse.json({ success: true, message: `Pinged Google for ${url}` });
    } else {
      return NextResponse.json({ success: false, error: 'Failed to ping Google API' }, { status: 500 });
    }

  } catch (error) {
    console.error('Error in index-url API route:', error);
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 });
  }
}
