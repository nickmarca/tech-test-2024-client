import type { Metadata } from 'next';
import { Schibsted_Grotesk } from 'next/font/google';
import './globals.css';

const schibstedGrotesk = Schibsted_Grotesk({
  subsets: ['latin'],
  variable: '--font-schibsted-srotesk',
});

export const metadata: Metadata = {
  title: 'KatKin: Fresh Cat Food',
  description:
    'We design a personalised, fresh and perfectly portioned meal plan for every cat, using their age, weight, activity level and current body shape. We ensure every cat gets the right amount of nutrients and daily calories, just for them',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${schibstedGrotesk.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
