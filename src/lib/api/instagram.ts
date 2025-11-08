/**
 * Instagram API utilities for fetching post metadata via oEmbed API
 *
 * Requires Instagram access token (can be obtained from Facebook Developer Console)
 * See: https://developers.facebook.com/docs/instagram-platform/oembed
 */

export type InstagramPostMetadata = {
  imageUrl: string;
  caption?: string;
  authorName?: string;
  postUrl: string;
  thumbnailWidth?: number;
  thumbnailHeight?: number;
};

/**
 * Fetches Instagram post metadata using the oEmbed API
 *
 * @param postUrl - Instagram post URL (e.g., https://www.instagram.com/p/ABC123/)
 * @param accessToken - Instagram/Facebook access token (optional, can be passed via env var)
 * @returns Post metadata including image URL, caption, author name
 */
export async function fetchInstagramPostMetadata(
  postUrl: string,
  accessToken?: string,
): Promise<InstagramPostMetadata | null> {
  const token = accessToken || process.env.NEXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN;

  if (!token) {
    console.warn('Instagram access token not provided. Cannot fetch post metadata.');
    return null;
  }

  try {
    const apiUrl = new URL('https://graph.facebook.com/v24.0/instagram_oembed');
    apiUrl.searchParams.set('url', postUrl);
    apiUrl.searchParams.set('fields', 'thumbnail_url,author_name,title,thumbnail_width,thumbnail_height');
    apiUrl.searchParams.set('access_token', token);

    const response = await fetch(apiUrl.toString());

    if (!response.ok) {
      const error = await response.json().catch(() => ({ error: 'Unknown error' }));
      console.error('Instagram oEmbed API error:', error);
      return null;
    }

    const data = await response.json();

    return {
      imageUrl: data.thumbnail_url || '',
      caption: data.title || undefined,
      authorName: data.author_name || undefined,
      postUrl,
      thumbnailWidth: data.thumbnail_width,
      thumbnailHeight: data.thumbnail_height,
    };
  } catch (error) {
    console.error('Error fetching Instagram post metadata:', error);
    return null;
  }
}

/**
 * Fetches metadata for multiple Instagram posts
 *
 * @param postUrls - Array of Instagram post URLs
 * @param accessToken - Instagram/Facebook access token (optional)
 * @returns Array of post metadata (null entries for failed fetches)
 */
export async function fetchMultipleInstagramPosts(
  postUrls: string[],
  accessToken?: string,
): Promise<(InstagramPostMetadata | null)[]> {
  const results = await Promise.all(
    postUrls.map(url => fetchInstagramPostMetadata(url, accessToken)),
  );

  return results;
}
