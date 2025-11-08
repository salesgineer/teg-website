import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

/**
 * API route to fetch Instagram post image URLs
 * Attempts to use Instagram's oEmbed API (may require access token)
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { postUrls } = body;

    if (!postUrls || !Array.isArray(postUrls)) {
      return NextResponse.json(
        { error: 'postUrls array is required' },
        { status: 400 },
      );
    }

    const results: Array<{ postUrl: string; imageUrl: string | null; error?: string }> = [];

    for (const postUrl of postUrls) {
      try {
        // Try Instagram oEmbed API (may require access token)
        const oembedUrl = `https://graph.facebook.com/v24.0/instagram_oembed?url=${encodeURIComponent(postUrl)}&fields=thumbnail_url,author_name,title`;

        const response = await fetch(oembedUrl, {
          headers: {
            Accept: 'application/json',
          },
        });

        if (response.ok) {
          const data = await response.json();
          results.push({
            postUrl,
            imageUrl: data.thumbnail_url || null,
          });
        } else {
          const errorData = await response.json().catch(() => ({}));
          results.push({
            postUrl,
            imageUrl: null,
            error: errorData.error?.message || 'Failed to fetch',
          });
        }
      } catch (error) {
        results.push({
          postUrl,
          imageUrl: null,
          error: error instanceof Error ? error.message : 'Unknown error',
        });
      }
    }

    return NextResponse.json({ results });
  } catch (error) {
    console.error('Error in Instagram fetch-images route:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 },
    );
  }
}
