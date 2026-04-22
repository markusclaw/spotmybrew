import type { Metadata } from 'next';
import Providers from '@/components/Providers';
import './globals.css';

export const runtime = 'edge';
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Spot My Brew - Beer Discovery',
  description: 'Discover craft beers from Mexico and beyond. Rate, review, and find your next favorite brew.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
