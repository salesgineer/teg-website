import { EnvDiagnostic } from '@/components/debug/EnvDiagnostic';
import { Env } from '@/libs/Env';

/**
 * Debug page to check environment variables
 * Access at: /lv/debug-env, /en/debug-env, /ru/debug-env
 *
 * This page helps diagnose environment variable issues in Vercel preview
 */
export default function DebugEnvPage() {
  // Try to access env vars - if this fails, we'll see the error
  let envStatus: Record<string, string | boolean> = {};
  let error: string | null = null;

  try {
    envStatus = {
      NEXT_PUBLIC_SUPABASE_URL: Env.NEXT_PUBLIC_SUPABASE_URL ? 'SET' : 'MISSING',
      NEXT_PUBLIC_SUPABASE_ANON_KEY: Env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? 'SET' : 'MISSING',
      NEXT_PUBLIC_SITE_URL: Env.NEXT_PUBLIC_SITE_URL || 'MISSING',
      NEXT_PUBLIC_POSTHOG_KEY: Env.NEXT_PUBLIC_POSTHOG_KEY ? 'SET' : 'MISSING',
      NEXT_PUBLIC_SENTRY_DSN: Env.NEXT_PUBLIC_SENTRY_DSN ? 'SET' : 'MISSING',
    };
  } catch (e) {
    error = e instanceof Error ? e.message : 'Unknown error';
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="mb-8 text-3xl font-bold">Environment Variables Debug</h1>

      {error
        ? (
            <div className="rounded-lg bg-red-100 p-4 text-red-800 dark:bg-red-900 dark:text-red-200">
              <h2 className="mb-2 font-bold">Error:</h2>
              <pre className="whitespace-pre-wrap">{error}</pre>
            </div>
          )
        : (
            <div className="space-y-4">
              <div className="rounded-lg bg-green-100 p-4 text-green-800 dark:bg-green-900 dark:text-green-200">
                <h2 className="mb-2 font-bold">✅ Environment validation passed</h2>
                <p>All required environment variables are accessible.</p>
              </div>

              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h2 className="mb-4 font-bold">Environment Variable Status:</h2>
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="p-2 text-left">Variable</th>
                      <th className="p-2 text-left">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.entries(envStatus).map(([key, value]) => (
                      <tr key={key} className="border-b">
                        <td className="p-2 font-mono text-sm">{key}</td>
                        <td className="p-2">
                          {value === 'SET' || value === 'MISSING'
                            ? (
                                <span className={value === 'SET' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}>
                                  {value}
                                </span>
                              )
                            : (
                                <span className="font-mono text-xs">
                                  {String(value).substring(0, 50)}
                                  ...
                                </span>
                              )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

      <div className="mt-8">
        <h2 className="mb-4 text-2xl font-bold">Client-Side Check:</h2>
        <EnvDiagnostic />
      </div>

      <div className="mt-8 rounded-lg bg-blue-100 p-4 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
        <h2 className="mb-2 font-bold">Next Steps:</h2>
        <ul className="list-inside list-disc space-y-1">
          <li>If variables show MISSING, add them to Vercel Dashboard → Settings → Environment Variables</li>
          <li>Ensure "Preview" checkbox is checked for each variable</li>
          <li>
            <strong>IMPORTANT:</strong>
            {' '}
            Redeploy after adding variables (don't just save - trigger a new deployment)
          </li>
          <li>Check browser console (F12) for any client-side errors</li>
          <li>Check Vercel build logs for validation errors</li>
        </ul>
      </div>
    </div>
  );
}
