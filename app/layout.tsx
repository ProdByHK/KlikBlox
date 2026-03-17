import type {Metadata} from 'next';
import { Oswald, Barlow_Condensed } from 'next/font/google';
import './globals.css'; // Global styles
import Navbar from '@/components/Navbar';
import Ticker from '@/components/Ticker';
import Footer from '@/components/Footer';

const oswald = Oswald({ 
  subsets: ['latin'], 
  variable: '--font-oswald' 
});

const barlow = Barlow_Condensed({ 
  weight: ['300', '400', '600', '700'], 
  subsets: ['latin'], 
  variable: '--font-barlow' 
});

export const metadata: Metadata = {
  title: 'Klikblox | Thinker - Story Teller',
  description: 'Media berita independen Indonesia di universe Roblox. Free Voice · Real News · Unfiltered.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="id" className={`${oswald.variable} ${barlow.variable} dark`}>
      <body className="font-barlow bg-brand-black text-white antialiased min-h-screen flex flex-col relative" suppressHydrationWarning>
        <div className="fixed inset-0 pixel-grid pointer-events-none z-0 opacity-30"></div>
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          <Ticker />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
