import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

/**
 * API route to proxy Instagram oEmbed requests
 *
 * This keeps the access token server-side and prevents exposing it to the client.
 *
 * Usage:
 * POST /api/instagram/oembed
 * Body: { postUrl: string }
 *
 * Returns: Instagram post metadata including thumbnail_url, author_name, etc.
 */

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { postUrl } = body;

    if (!postUrl || typeof postUrl !== 'string') {
      return NextResponse.json(
        { error: 'postUrl is required' },
        { status: 400 },
      );
    }

    const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;

    if (!accessToken) {
      return NextResponse.json(
        { error: 'Instagram access token not configured' },
        { status: 500 },
      );
    }

    // Fetch metadata from Instagram oEmbed API
    const apiUrl = new URL('https://graph.facebook.com/v24.0/instagram_oembed');
    apiUrl.searchParams.set('url', postUrl);
    apiUrl.searchParams.set('fields', 'thumbnail_url,author_name,title,thumbnail_width,thumbnail_height');
    apiUrl.searchParams.set('access_token', accessToken);

    const response = await fetch(apiUrl.toString());

    if (!response.ok) {
      const error = await response.json().catch(() => ({ error: 'Unknown error' }));
      return NextResponse.json(
        { error: 'Failed to fetch Instagram post metadata', details: error },
        { status: response.status },
      );
    }

    const data = await response.json();

    return NextResponse.json({
      imageUrl: data.thumbnail_url || '',
      caption: data.title || undefined,
      authorName: data.author_name || undefined,
      postUrl,
      thumbnailWidth: data.thumbnail_width,
      thumbnailHeight: data.thumbnail_height,
    });
  } catch (error) {
    console.error('Error in Instagram oEmbed API route:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 },
    );
  }
}
