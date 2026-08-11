import type { Metadata } from 'next';
import { ClerkProvider } from '@clerk/nextjs';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'Moxie',
  description: 'Moxie website monorepo starter',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en" className="h-full antialiased">
        <body className="min-h-full flex flex-col">{children}</body>
      </html>
    </ClerkProvider>
  );
}
