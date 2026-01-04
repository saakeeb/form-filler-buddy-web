import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { generateSEOMetadata } from './components/seo/SEO';
import {
  SoftwareApplicationSchema,
  WebSiteSchema,
  OrganizationSchema,
} from './components/seo/StructuredData';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = generateSEOMetadata({
  title: 'Home',
  description:
    'A smart Chrome extension that automatically fills web forms with your saved data or realistic test data. Save time, reduce errors, and streamline your form-filling workflow. Featured in Chrome Web Store with 5.0 rating.',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-white font-sans antialiased">
        <SoftwareApplicationSchema />
        <WebSiteSchema />
        <OrganizationSchema />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
