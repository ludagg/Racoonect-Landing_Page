import type {Metadata} from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'RACOONS - AgriTech for Sustainable Soils',
  description: 'Transformez vos déchets en or vert. RACOONS valorise la biomasse pour une agriculture durable.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="fr" className={`${inter.variable}`}>
      <body className="font-sans antialiased bg-background-light text-text-main selection:bg-primary selection:text-background-dark" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
