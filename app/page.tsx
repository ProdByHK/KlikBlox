import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, PlayCircle, Share2, Clock } from 'lucide-react';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-16">
      {/* Hero Section */}
      <section className="relative grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Link href="/article/investigasi-klikblox-mengungkap-sisi-gelap-ekonomi-virtual-di-roblox" className="lg:col-span-2 relative group cursor-pointer overflow-hidden border border-white/10 bg-[#111] block">
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/50 to-transparent z-10"></div>
          <Image 
            src="https://picsum.photos/seed/roblox-city/1200/800" 
            alt="Hero Image" 
            width={1200} 
            height={800} 
            className="w-full h-[400px] md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105" 
            referrerPolicy="no-referrer"
          />
          <div className="absolute bottom-0 left-0 p-6 md:p-8 z-20 w-full">
            <span className="bg-brand-red text-white font-oswald font-bold px-3 py-1 text-sm tracking-widest mb-4 inline-block">EKSKLUSIF</span>
            <h1 className="font-oswald text-3xl md:text-5xl lg:text-6xl font-black leading-[1.1] mb-4 group-hover:text-brand-yellow transition-colors">
              INVESTIGASI KLIKBLOX: MENGUNGKAP SISI GELAP EKONOMI VIRTUAL DI ROBLOX
            </h1>
            <div className="flex items-center gap-4 font-barlow text-gray-300 text-sm md:text-base">
              <span className="flex items-center gap-1"><Clock size={16} /> 2 Jam yang lalu</span>
              <span>Oleh Tim Klikers</span>
            </div>
          </div>
          {/* Pixel corners */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-brand-red z-20"></div>
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-brand-red z-20"></div>
        </Link>

        <div className="flex flex-col gap-6">
          <div className="border-l-4 border-brand-red pl-4 mb-2">
            <h2 className="font-oswald text-2xl font-bold uppercase tracking-wide">Trending Topik</h2>
          </div>
          {[1, 2, 3].map((i) => (
            <Link href={`/article/trending-topik-${i}`} key={i} className="group cursor-pointer flex gap-4 items-start bg-[#111]/50 p-4 border border-white/5 hover:border-white/20 transition-colors">
              <div className="font-oswald text-4xl font-black text-white/10 group-hover:text-brand-red transition-colors">0{i}</div>
              <div>
                <span className="text-brand-yellow font-oswald text-xs font-bold tracking-wider uppercase mb-1 block">Politik</span>
                <h3 className="font-oswald text-lg font-bold leading-tight group-hover:text-brand-red transition-colors">
                  Debat Panas di Server Nusantara: Siapa Pemimpin Masa Depan?
                </h3>
                <div className="text-gray-500 font-barlow text-sm mt-2">4 Jam yang lalu</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Latest News Grid */}
      <section>
        <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-2 h-8 bg-brand-red"></div>
            <h2 className="font-oswald text-3xl font-bold uppercase tracking-wide">Berita Terbaru</h2>
          </div>
          <Link href="/category/berita-terbaru" className="font-oswald text-sm font-bold tracking-widest text-gray-400 hover:text-white flex items-center gap-2 uppercase transition-colors">
            Lihat Semua <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { cat: 'Dunia', color: 'bg-blue-600', title: 'Update Global: Perubahan Iklim Mempengaruhi Server Utama', slug: 'update-global-perubahan-iklim' },
            { cat: 'Ekonomi', color: 'bg-green-600', title: 'Harga Robux Naik, Bagaimana Nasib Kreator Lokal?', slug: 'harga-robux-naik' },
            { cat: 'Sosial', color: 'bg-orange-600', title: 'Komunitas Klikers Gelar Donasi Virtual Untuk Korban Bencana', slug: 'komunitas-klikers-gelar-donasi' },
            { cat: 'Breaking', color: 'bg-brand-red', title: 'Wawancara Eksklusif dengan Top Developer Indonesia', slug: 'wawancara-eksklusif-top-developer' },
            { cat: 'Politik', color: 'bg-brand-yellow text-black', title: 'Pemilihan Ketua Server: Drama dan Intrik di Balik Layar', slug: 'pemilihan-ketua-server' },
            { cat: 'Dunia', color: 'bg-blue-600', title: 'Ekspansi Klikblox ke Platform Lain: Apa Kata Founder?', slug: 'ekspansi-klikblox-ke-platform-lain' },
          ].map((news, i) => (
            <Link href={`/article/${news.slug}`} key={i} className="bg-[#1A1A1A] border border-white/5 hover:border-white/20 hover:scale-[1.02] transition-all duration-300 group cursor-pointer relative overflow-hidden flex flex-col">
              <div className="relative h-48 overflow-hidden">
                <Image 
                  src={`https://picsum.photos/seed/news${i}/600/400`} 
                  alt={news.title} 
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-110" 
                  referrerPolicy="no-referrer"
                />
                <div className={`absolute top-4 left-4 ${news.color} font-oswald font-bold px-2 py-0.5 text-xs tracking-widest uppercase z-10`}>
                  {news.cat}
                </div>
              </div>
              <div className="p-5 flex-grow flex flex-col">
                <h3 className="font-oswald text-xl font-bold leading-tight mb-3 group-hover:text-brand-red transition-colors line-clamp-2">
                  {news.title}
                </h3>
                <p className="font-barlow text-gray-400 text-base line-clamp-2 mb-4 flex-grow">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/10">
                  <span className="font-barlow text-sm text-gray-500 flex items-center gap-1"><Clock size={14} /> 12 Mar 2026</span>
                  <button className="text-gray-400 hover:text-white transition-colors"><Share2 size={18} /></button>
                </div>
              </div>
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-brand-red transition-colors pointer-events-none"></div>
            </Link>
          ))}
        </div>
      </section>

      {/* Bedah Buku Series */}
      <section className="bg-[#111] border border-white/10 p-6 md:p-10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/20 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="flex flex-col md:flex-row gap-8 items-center relative z-10">
          <div className="w-full md:w-1/3 space-y-4">
            <span className="text-brand-yellow font-oswald font-bold tracking-widest uppercase text-sm">Series Unggulan</span>
            <h2 className="font-oswald text-4xl md:text-5xl font-black uppercase leading-tight">Bedah Buku<br/>Klikblox</h2>
            <p className="font-barlow text-gray-400 text-lg">
              Membongkar pemikiran, merangkai cerita. Diskusi mendalam buku-buku berpengaruh bersama tim Klikers. No Script. No Control.
            </p>
            <Link href="/series/bedah-buku-klikblox" className="bg-brand-red hover:bg-red-700 text-white font-oswald font-bold py-3 px-6 uppercase tracking-widest transition-colors inline-flex items-center gap-2 mt-4 w-fit">
              <PlayCircle size={20} /> Tonton Series
            </Link>
          </div>
          <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { ep: '12', title: 'Madilog - Tan Malaka' },
              { ep: '11', title: 'Sapiens - Yuval Noah Harari' }
            ].map((book, i) => (
              <Link href={`/series/bedah-buku-klikblox/episode-${book.ep}`} key={i} className="group cursor-pointer relative block">
                <div className="relative h-56 overflow-hidden border border-white/20">
                  <Image 
                    src={`https://picsum.photos/seed/book${i}/600/400`} 
                    alt={book.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-500" 
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center group-hover:bg-black/30 transition-colors">
                    <PlayCircle size={56} className="text-white/80 group-hover:text-brand-red transition-colors" />
                  </div>
                  <div className="absolute top-3 left-3 bg-black/90 font-oswald font-bold px-3 py-1 text-xs tracking-widest text-brand-yellow">
                    EPISODE {book.ep}
                  </div>
                </div>
                <h4 className="font-oswald font-bold mt-4 text-xl group-hover:text-brand-red transition-colors">{book.title}</h4>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
