'use client';

import { StackProvider, StackTheme, StackClientApp } from '@stackframe/stack';
import { useMemo } from 'react';

export default function Providers({ children }: { children: React.ReactNode }) {
  const app = useMemo(() => {
    const projectId = process.env.NEXT_PUBLIC_STACK_PROJECT_ID;
    const publishableClientKey = process.env.NEXT_PUBLIC_STACK_PUBLISHABLE_CLIENT_KEY;
    if (!projectId || !publishableClientKey) return null;
    return new StackClientApp({ tokenStore: 'cookie' });
  }, []);

  if (!app) return <>{children}</>;

  return (
    <StackProvider app={app}>
      <StackTheme>
        {children}
      </StackTheme>
    </StackProvider>
  );
}
