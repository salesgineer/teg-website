/**
 * Utility functions for fetching Instagram post metadata
 * Attempts to get image URLs from Instagram post URLs
 */

export type InstagramPostData = {
  imageUrl: string;
  caption?: string;
  postUrl: string;
  authorName?: string;
};

/**
 * Attempts to fetch Instagram post image URL using oEmbed API
 * This may work for public posts without authentication
 */
export async function fetchInstagramImageUrl(
  postUrl: string,
): Promise<string | null> {
  try {
    // Try Instagram's oEmbed endpoint (may require auth token)
    const oembedUrl = `https://graph.facebook.com/v24.0/instagram_oembed?url=${encodeURIComponent(postUrl)}&fields=thumbnail_url`;

    const response = await fetch(oembedUrl, {
      headers: {
        Accept: 'application/json',
      },
    });

    if (response.ok) {
      const data = await response.json();
      if (data.thumbnail_url) {
        return data.thumbnail_url;
      }
    }
  } catch (error) {
    console.warn(`Failed to fetch Instagram image for ${postUrl}:`, error);
  }

  return null;
}

/**
 * Fetches image URLs for multiple Instagram posts
 */
export async function fetchInstagramImageUrls(
  postUrls: string[],
): Promise<Map<string, string | null>> {
  const results = new Map<string, string | null>();

  await Promise.all(
    postUrls.map(async (url) => {
      const imageUrl = await fetchInstagramImageUrl(url);
      results.set(url, imageUrl);
    }),
  );

  return results;
}
