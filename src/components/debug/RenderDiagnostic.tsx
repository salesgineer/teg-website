'use client';

import { useEffect, useState } from 'react';

/**
 * Diagnostic component to check if content is rendering
 * Add this temporarily to see what's actually in the DOM
 */
export function RenderDiagnostic({
  label,
  data,
}: {
  label: string;
  data: unknown;
}) {
  const [mounted, setMounted] = useState(false);
  const [domContent, setDomContent] = useState<string>('');

  useEffect(() => {
    setMounted(true);
    // Check what's actually in the DOM after render
    setTimeout(() => {
      const element = document.querySelector(`[data-diagnostic="${label}"]`);
      if (element) {
        setDomContent(element.textContent || 'EMPTY');
      }
    }, 100);
  }, [label]);

  if (!mounted) {
    return <div data-diagnostic={label}>Loading...</div>;
  }

  return (
    <div
      data-diagnostic={label}
      className="fixed right-4 bottom-4 z-[9999] max-w-xs rounded-lg border-2 border-red-500 bg-red-50 p-4 text-xs dark:bg-red-900"
    >
      <div className="font-bold text-red-800 dark:text-red-200">
        {label}
        :
      </div>
      <div className="mt-1 text-red-700 dark:text-red-300">
        <div>
          Data length:
          {Array.isArray(data) ? data.length : 'N/A'}
        </div>
        <div>
          DOM content:
          {domContent.substring(0, 50)}
          ...
        </div>
        <div>
          Has data:
          {data ? 'YES' : 'NO'}
        </div>
      </div>
    </div>
  );
}
