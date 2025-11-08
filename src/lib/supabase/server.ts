import type { CookieOptions } from '@supabase/ssr';
import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';

import { Env } from '@/libs/Env';

/**
 * Supabase client for server-side operations (Server Components, Server Actions, Route Handlers)
 * Uses @supabase/ssr with Next.js cookies for session management
 *
 * @see https://supabase.com/docs/guides/auth/auth-helpers/nextjs
 */
export async function createClient() {
  const cookieStore = await cookies();

  return createServerClient(
    Env.NEXT_PUBLIC_SUPABASE_URL,
    Env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet: Array<{ name: string; value: string; options?: CookieOptions }>) {
          try {
            for (const { name, value, options } of cookiesToSet) {
              cookieStore.set(name, value, options);
            }
          } catch {
            // Ignore errors from Server Component context
            // Cookies can only be set in Server Actions or Route Handlers
          }
        },
      },
    },
  );
}

/**
 * Supabase admin client for privileged server-side operations
 * Uses service role key - DO NOT expose to client
 *
 * Use for: Admin operations, bypassing RLS, background jobs
 */
export function createAdminClient() {
  if (!Env.SUPABASE_SERVICE_ROLE_KEY) {
    throw new Error(
      'SUPABASE_SERVICE_ROLE_KEY is required for admin operations',
    );
  }

  return createServerClient(
    Env.NEXT_PUBLIC_SUPABASE_URL,
    Env.SUPABASE_SERVICE_ROLE_KEY,
    {
      cookies: {
        getAll: () => [],
        setAll: () => {},
      },
    },
  );
}
