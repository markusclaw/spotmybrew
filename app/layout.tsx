import type { Metadata } from 'next';
import './globals.css';

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
      <body>{children}</body>
    </html>
  );
}
