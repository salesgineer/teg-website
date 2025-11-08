import { createBrowserClient } from '@supabase/ssr';

import { Env } from '@/libs/Env';

/**
 * Supabase client for browser-side operations
 * Uses @supabase/ssr for optimal Next.js App Router integration
 *
 * @see https://supabase.com/docs/guides/auth/auth-helpers/nextjs
 */
export function createClient() {
  return createBrowserClient(
    Env.NEXT_PUBLIC_SUPABASE_URL,
    Env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  );
}
