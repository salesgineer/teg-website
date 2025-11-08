# Instagram API Access Token Setup Guide

This guide explains how to obtain an Instagram API access token for fetching post images automatically.

## Prerequisites

Before starting, ensure you have:
1. **Facebook account** (personal or business)
2. **Instagram Business or Creator account** (not a personal account)
   - The Instagram account must be linked to a Facebook Page
3. **Facebook Developer account** (free to create)

## Step-by-Step Instructions

### Step 1: Convert Instagram Account to Business/Creator Account

If the Instagram account is currently personal:

1. Open Instagram mobile app or web
2. Go to **Settings** → **Account**
3. Tap **Switch to Professional Account**
4. Choose **Business** or **Creator**
5. Follow the prompts to connect to a Facebook Page
   - If no Facebook Page exists, create one during this process

### Step 2: Create Facebook Developer Account

1. Go to [Facebook Developers](https://developers.facebook.com/)
2. Click **Get Started** or **Log In**
3. Complete the developer account setup (requires phone verification)

### Step 3: Create a Facebook App

1. Go to [Facebook Developers Dashboard](https://developers.facebook.com/apps/)
2. Click **Create App**
3. Choose **Business** as the app type
4. Fill in:
   - **App Name**: e.g., "TEG Website Instagram Feed"
   - **App Contact Email**: Your email
   - **Business Account**: Select or create one
5. Click **Create App**

### Step 4: Add Instagram Product to App

1. In your app dashboard, find **Products** in the left sidebar
2. Click **+ Add Product**
3. Find **Instagram** and click **Set Up**
4. Choose **Instagram API** (not Basic Display API - it's deprecated)

### Step 5: Configure Instagram API Settings

1. In the Instagram API settings, you'll need:
   - **Valid OAuth Redirect URIs**: Add your website URL
     - Example: `https://teg.lv/api/auth/callback/instagram`
     - For development: `http://localhost:3000/api/auth/callback/instagram`
   - **Deauthorize Callback URL**: Same as above
   - **Data Deletion Request URL**: Same as above

### Step 6: Get Access Token

There are two methods:

#### Method A: Using Graph API Explorer (Easiest for Testing)

1. Go to [Graph API Explorer](https://developers.facebook.com/tools/explorer/)
2. Select your app from the dropdown
3. Click **Generate Access Token**
4. Select permissions:
   - `instagram_basic`
   - `instagram_content_publish` (if you need to post)
   - `pages_read_engagement` (if using Facebook Page)
5. Click **Generate Access Token**
6. Copy the token (it's a long string)

**Note**: This token expires in 1-2 hours. For a permanent token, see Method B.

#### Method B: Long-Lived Access Token (Recommended for Production)

1. First, get a short-lived token using Method A
2. Go to [Access Token Debugger](https://developers.facebook.com/tools/debug/accesstoken/)
3. Paste your short-lived token
4. Click **Extend Access Token**
5. Copy the extended token (valid for 60 days)

**For permanent token (never expires):**
- You need to set up a server-side refresh mechanism
- Or use Facebook Login flow to get user tokens that refresh automatically

### Step 7: Get Instagram User ID

You'll need the Instagram Business Account ID:

1. Go to [Facebook Graph API Explorer](https://developers.facebook.com/tools/explorer/)
2. Select your app
3. In the search box, enter: `me/accounts`
4. Click **Submit**
5. Find your Facebook Page in the results
6. Copy the Page ID
7. Then query: `{page-id}?fields=instagram_business_account`
8. Copy the `id` value - this is your Instagram User ID

### Step 8: Test the Token

Test if your token works:

```bash
curl "https://graph.facebook.com/v24.0/instagram_oembed?url=https://www.instagram.com/teg.auto/p/DO6TgerCB28/&access_token=YOUR_TOKEN"
```

If successful, you'll get JSON with `thumbnail_url` field.

## Required Permissions/Scopes

For fetching post images via oEmbed API, you need:
- `instagram_basic` - Basic Instagram data access
- `pages_read_engagement` - If using Facebook Page connection

## Security Best Practices

1. **Never commit tokens to Git** - Use environment variables
2. **Use server-side API routes** - Don't expose tokens to client
3. **Rotate tokens regularly** - Set reminders to refresh
4. **Use least privilege** - Only request permissions you need

## Environment Variable Setup

Once you have the token, add it to your `.env.local`:

```env
INSTAGRAM_ACCESS_TOKEN=your_token_here
```

Then update your code to use it (already implemented in `src/lib/api/instagram.ts`).

## Troubleshooting

### "Invalid OAuth Access Token"
- Token may have expired
- Token doesn't have required permissions
- Token is for wrong app/account

### "User not found"
- Instagram account must be Business/Creator type
- Account must be linked to Facebook Page
- Check Instagram User ID is correct

### "Rate limit exceeded"
- Instagram API has rate limits
- Implement caching to reduce API calls
- Consider using manual image URLs for static content

## Alternative: Manual Image URLs

If API setup is too complex, you can manually extract image URLs:
1. Open Instagram post in browser
2. Right-click image → "Copy image address"
3. Use those URLs directly in the code (no API needed)

## Support Resources

- [Instagram Platform Documentation](https://developers.facebook.com/docs/instagram-platform)
- [Facebook Developers Support](https://developers.facebook.com/support/)
- [Graph API Explorer](https://developers.facebook.com/tools/explorer/)

