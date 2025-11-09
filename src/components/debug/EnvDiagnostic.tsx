'use client';

import { useEffect, useState } from 'react';

/**
 * Client-side environment variable diagnostic component
 * Use this to check what env vars are actually available in the browser
 */
export function EnvDiagnostic() {
  const [envVars, setEnvVars] = useState<Record<string, string>>({});
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      // Check what's actually available in the browser
      const vars: Record<string, string> = {};

      // These are the critical ones
      const criticalVars = [
        'NEXT_PUBLIC_SUPABASE_URL',
        'NEXT_PUBLIC_SUPABASE_ANON_KEY',
        'NEXT_PUBLIC_SITE_URL',
        'NEXT_PUBLIC_POSTHOG_KEY',
        'NEXT_PUBLIC_SENTRY_DSN',
      ];

      criticalVars.forEach((key) => {
        // Accessing NEXT_PUBLIC_* env vars which are available in client
        const value = process.env[key as keyof typeof process.env];
        vars[key] = value || 'NOT SET';
      });

      setEnvVars(vars);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Unknown error');
    }
  }, []);

  if (error) {
    return (
      <div className="rounded-lg bg-red-100 p-4 text-red-800 dark:bg-red-900 dark:text-red-200">
        <h3 className="font-bold">Error checking environment variables:</h3>
        <pre className="mt-2 text-sm whitespace-pre-wrap">{error}</pre>
      </div>
    );
  }

  return (
    <div className="rounded-lg border border-gray-300 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
      <h3 className="mb-4 font-bold">Client-Side Environment Variables:</h3>
      <div className="space-y-2">
        {Object.entries(envVars).map(([key, value]) => (
          <div key={key} className="flex items-start justify-between border-b pb-2">
            <span className="font-mono text-sm font-medium">
              {key}
              :
            </span>
            <span
              className={`ml-4 font-mono text-xs ${
                value === 'NOT SET'
                  ? 'text-red-600 dark:text-red-400'
                  : 'text-green-600 dark:text-green-400'
              }`}
            >
              {value === 'NOT SET' ? '❌ NOT SET' : value.length > 30 ? `${value.substring(0, 30)}...` : value}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-4 rounded bg-yellow-50 p-3 text-sm text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
        <p className="font-semibold">Note:</p>
        <p>
          Only
          {' '}
          <code className="rounded bg-yellow-100 px-1 dark:bg-yellow-800">NEXT_PUBLIC_*</code>
          {' '}
          variables
          are available in the browser. Server-side variables won't appear here.
        </p>
      </div>
    </div>
  );
}
