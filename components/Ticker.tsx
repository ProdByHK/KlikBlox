"use client";
import { motion } from 'motion/react';
import Link from 'next/link';

export default function Ticker() {
  return (
    <div className="bg-brand-red text-white overflow-hidden py-1.5 border-y border-white/10 flex items-center">
      <div className="font-oswald font-bold px-4 bg-brand-red z-10 relative text-sm tracking-wider whitespace-nowrap shadow-[10px_0_15px_-3px_rgba(200,16,26,1)]">
        BREAKING NEWS
      </div>
      <div className="flex-1 overflow-hidden relative flex items-center">
        <motion.div
          className="flex whitespace-nowrap gap-8 font-barlow font-semibold text-sm tracking-wide"
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          <Link href="/article/klikblox-studio-roblox-resmi-dibuka-untuk-publik" className="hover:text-black transition-colors">🔥 KLIKBLOX STUDIO ROBLOX RESMI DIBUKA UNTUK PUBLIK</Link>
          <span>•</span>
          <Link href="/article/ekonomi-indonesia-diprediksi-tumbuh-5-2-persen-tahun-ini" className="hover:text-black transition-colors">📈 EKONOMI INDONESIA DIPREDIKSI TUMBUH 5.2% TAHUN INI</Link>
          <span>•</span>
          <Link href="/series/bedah-buku-klikblox/episode-12" className="hover:text-black transition-colors">📚 BEDAH BUKU EPISODE 12: &quot;MADILOG&quot; OLEH TAN MALAKA</Link>
          <span>•</span>
          <Link href="/article/klikblox-studio-roblox-resmi-dibuka-untuk-publik" className="hover:text-black transition-colors">🔥 KLIKBLOX STUDIO ROBLOX RESMI DIBUKA UNTUK PUBLIK</Link>
          <span>•</span>
          <Link href="/article/ekonomi-indonesia-diprediksi-tumbuh-5-2-persen-tahun-ini" className="hover:text-black transition-colors">📈 EKONOMI INDONESIA DIPREDIKSI TUMBUH 5.2% TAHUN INI</Link>
          <span>•</span>
          <Link href="/series/bedah-buku-klikblox/episode-12" className="hover:text-black transition-colors">📚 BEDAH BUKU EPISODE 12: &quot;MADILOG&quot; OLEH TAN MALAKA</Link>
        </motion.div>
      </div>
    </div>
  );
}
