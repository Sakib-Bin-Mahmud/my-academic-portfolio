import type { Metadata } from 'next';
import { Space_Grotesk, Source_Serif_4, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const display = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-display',
  display: 'swap',
});

const body = Source_Serif_4({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Sakib Mahmud Sovon \u2014 Computer Vision & Multimodal AI',
  description:
    'Portfolio of Sakib Mahmud Sovon: computer vision, multimodal AI, and accessibility technology research, including real-time Bengali Sign Language translation and multilingual LLM reasoning.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
