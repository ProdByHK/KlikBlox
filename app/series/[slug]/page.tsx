import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, PlayCircle, Clock } from 'lucide-react';

export default async function SeriesPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  // Format slug to title
  const title = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-16">
      <Link href="/" className="inline-flex items-center gap-2 text-brand-red hover:text-red-400 font-oswald font-bold tracking-widest uppercase transition-colors">
        <ArrowLeft size={20} /> Kembali
      </Link>

      <section className="bg-[#111] border border-white/10 p-8 md:p-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red/20 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="flex flex-col md:flex-row gap-12 items-center relative z-10">
          <div className="w-full md:w-1/2 space-y-6">
            <span className="text-brand-yellow font-oswald font-bold tracking-widest uppercase text-sm">Series Eksklusif</span>
            <h1 className="font-oswald text-5xl md:text-7xl font-black uppercase leading-tight">{title}</h1>
            <p className="font-barlow text-gray-300 text-xl leading-relaxed">
              Membongkar pemikiran, merangkai cerita. Diskusi mendalam buku-buku berpengaruh bersama tim Klikers. No Script. No Control.
            </p>
            <div className="flex items-center gap-6 pt-4">
              <button className="bg-brand-red hover:bg-red-700 text-white font-oswald font-bold py-4 px-8 uppercase tracking-widest transition-colors flex items-center gap-3 text-lg">
                <PlayCircle size={24} /> Mulai Tonton
              </button>
              <span className="font-barlow text-gray-400">12 Episode Tersedia</span>
            </div>
          </div>
          <div className="w-full md:w-1/2 relative h-[400px] md:h-[500px] border border-white/20">
            <Image 
              src={`https://picsum.photos/seed/${slug}/800/800`} 
              alt={title} 
              fill 
              className="object-cover" 
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <div className="flex items-center gap-4 border-b border-white/10 pb-4">
          <div className="w-2 h-8 bg-brand-red"></div>
          <h2 className="font-oswald text-3xl font-bold uppercase tracking-wide">Daftar Episode</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[12, 11, 10, 9, 8, 7].map((ep) => (
            <Link href={`/series/${slug}/episode-${ep}`} key={ep} className="group cursor-pointer relative bg-[#1A1A1A] border border-white/5 hover:border-white/20 transition-all duration-300">
              <div className="relative h-64 overflow-hidden border-b border-white/10">
                <Image 
                  src={`https://picsum.photos/seed/ep${ep}/600/400`} 
                  alt={`Episode ${ep}`} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-500" 
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center group-hover:bg-black/30 transition-colors">
                  <PlayCircle size={64} className="text-white/80 group-hover:text-brand-red transition-colors" />
                </div>
                <div className="absolute top-4 left-4 bg-black/90 font-oswald font-bold px-3 py-1 text-xs tracking-widest text-brand-yellow">
                  EPISODE {ep}
                </div>
                <div className="absolute bottom-4 right-4 bg-black/80 font-barlow text-xs px-2 py-1 flex items-center gap-1">
                  <Clock size={12} /> 45:20
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-oswald font-bold text-2xl group-hover:text-brand-red transition-colors mb-3">
                  {ep === 12 ? 'Madilog - Tan Malaka' : ep === 11 ? 'Sapiens - Yuval Noah Harari' : `Buku Misteri Vol. ${ep}`}
                </h4>
                <p className="font-barlow text-gray-400 line-clamp-2">
                  Diskusi mendalam mengenai pemikiran-pemikiran radikal yang mengubah cara pandang kita terhadap dunia dan sejarah manusia.
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
