# Instructions for Client: Instagram API Access Token

**Purpose**: To automatically display Instagram posts on the TEG website with real images.

**Time Required**: 15-30 minutes

**What You Need**:
- Access to the @teg.auto Instagram account
- A Facebook account (can be personal)
- Email address for verification

---

## Quick Checklist

- [ ] Instagram account is Business or Creator type (not personal)
- [ ] Instagram account is linked to a Facebook Page
- [ ] Facebook Developer account created
- [ ] Facebook App created
- [ ] Instagram API product added to app
- [ ] Access token generated
- [ ] Token shared securely with developer

---

## Detailed Steps

### Part 1: Instagram Account Setup (5 minutes)

1. **Open Instagram** (mobile app or website)
2. Go to **Settings** → **Account**
3. If you see "Switch to Professional Account":
   - Tap it
   - Choose **Business** or **Creator**
   - Follow prompts to connect to Facebook Page
   - If you don't have a Facebook Page, create one during this process
4. If already Business/Creator: Skip to Part 2

**Why this is needed**: Personal Instagram accounts cannot use the API. Only Business/Creator accounts can.

---

### Part 2: Facebook Developer Setup (10 minutes)

1. **Go to**: https://developers.facebook.com/
2. Click **Get Started** (or **Log In** if you have an account)
3. Complete registration:
   - Enter your name and email
   - Verify your email
   - Verify your phone number (required for security)
4. Accept Facebook Developer Terms

---

### Part 3: Create Facebook App (5 minutes)

1. **Go to**: https://developers.facebook.com/apps/
2. Click **Create App** (green button)
3. Choose **Business** as the app type
4. Fill in the form:
   - **App Name**: "TEG Website Instagram Feed" (or any name)
   - **App Contact Email**: Your email address
   - **Business Account**: Select existing or create new
5. Click **Create App**
6. Complete any security checks (may require phone verification)

---

### Part 4: Add Instagram API (5 minutes)

1. In your app dashboard, look for **Products** in the left sidebar
2. Click **+ Add Product**
3. Find **Instagram** in the list
4. Click **Set Up** next to Instagram
5. Choose **Instagram API** (the first option)
6. You'll see a settings page - you can skip most fields for now
7. Scroll down and click **Save Changes**

---

### Part 5: Generate Access Token (5 minutes)

1. **Go to**: https://developers.facebook.com/tools/explorer/
2. At the top, select your app from the dropdown (it should say your app name)
3. Click **Generate Access Token** button
4. A popup will ask for permissions - check these boxes:
   - ✅ `instagram_basic`
   - ✅ `pages_read_engagement`
5. Click **Generate Access Token**
6. **IMPORTANT**: Copy the token immediately (it's a long string of letters and numbers)
   - It looks like: `EAABwzLix...` (very long)
   - Save it somewhere safe - you won't see it again!

---

### Part 6: Share Token Securely

**DO NOT** share the token publicly or in email if possible.

**Secure methods**:
1. **Password manager** (1Password, LastPass, etc.)
2. **Encrypted message** (Signal, WhatsApp)
3. **Secure file sharing** (password-protected ZIP file)
4. **Phone call** (read it over the phone)

**What to share**:
- The access token (the long string)
- Your Instagram username: `teg.auto`
- Confirmation that Instagram account is Business/Creator type

---

## Common Issues & Solutions

### "I can't switch to Business account"
- Make sure you have admin access to the Instagram account
- You may need to verify your identity with Instagram
- Contact Instagram support if issues persist

### "I don't have a Facebook Page"
- Create one during the Instagram Business setup process
- Or create one at: https://www.facebook.com/pages/create
- Then link it to your Instagram account

### "The token doesn't work"
- Tokens expire after 1-2 hours initially
- We'll need to generate a long-lived token (developer can help with this)
- Make sure you selected the correct permissions

### "I can't find Instagram in Products"
- Make sure you completed the app creation process
- Try refreshing the page
- Contact Facebook Developer Support if it's missing

---

## What Happens Next?

Once you share the token:
1. Developer will add it to the website securely
2. Website will automatically fetch Instagram post images
3. Images will display on the homepage and contact page
4. No manual updates needed - it updates automatically!

---

## Security Notes

- **Never share your token publicly** (social media, public forums, etc.)
- **The token can be revoked** if you suspect it's compromised
- **You can regenerate tokens** anytime from Facebook Developer dashboard
- **Tokens expire** - we'll set up automatic refresh if needed

---

## Need Help?

If you get stuck:
1. Check Facebook Developer documentation: https://developers.facebook.com/docs/instagram-platform
2. Contact Facebook Developer Support: https://developers.facebook.com/support/
3. Reach out to your developer with:
   - Screenshot of where you're stuck
   - Any error messages
   - What step you're on

---

## Quick Reference

**Important URLs**:
- Facebook Developers: https://developers.facebook.com/
- Graph API Explorer: https://developers.facebook.com/tools/explorer/
- Your App Dashboard: https://developers.facebook.com/apps/

**What You're Creating**:
- Facebook Developer Account (free)
- Facebook App (free)
- Instagram API Access Token (free)

**Cost**: Everything is **FREE** - no charges for API access.

