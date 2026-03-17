import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, PlayCircle, Clock, Share2 } from 'lucide-react';

export default async function EpisodePage({ params }: { params: Promise<{ slug: string, episode: string }> }) {
  const { slug, episode } = await params;
  
  // Format slug to title
  const seriesTitle = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  const epNumber = episode.split('-')[1] || '1';

  return (
    <div className="max-w-5xl mx-auto px-4 py-12 space-y-12">
      <Link href={`/series/${slug}`} className="inline-flex items-center gap-2 text-brand-red hover:text-red-400 font-oswald font-bold tracking-widest uppercase transition-colors">
        <ArrowLeft size={20} /> Kembali ke {seriesTitle}
      </Link>

      <div className="relative aspect-video w-full bg-black border border-white/20 flex items-center justify-center group cursor-pointer">
        <Image 
          src={`https://picsum.photos/seed/${slug}-${episode}/1280/720`} 
          alt={`Episode ${epNumber}`} 
          fill 
          className="object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500" 
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <PlayCircle size={96} className="text-brand-red opacity-90 group-hover:scale-110 transition-transform duration-300" />
        </div>
        <div className="absolute bottom-0 left-0 w-full h-2 bg-white/20">
          <div className="h-full bg-brand-red w-1/3"></div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <span className="bg-brand-red text-white font-oswald font-bold px-3 py-1 text-sm tracking-widest uppercase">Episode {epNumber}</span>
          <span className="font-barlow text-gray-400 text-sm flex items-center gap-1"><Clock size={16} /> 45 Menit</span>
        </div>
        
        <h1 className="font-oswald text-4xl md:text-5xl font-black leading-tight text-white">
          {epNumber === '12' ? 'Madilog - Tan Malaka' : epNumber === '11' ? 'Sapiens - Yuval Noah Harari' : `Buku Misteri Vol. ${epNumber}`}
        </h1>

        <div className="flex items-center justify-between py-6 border-y border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center border border-white/20 overflow-hidden relative">
              <Image src="https://picsum.photos/seed/host/100/100" alt="Host" fill className="object-cover" referrerPolicy="no-referrer" />
            </div>
            <div>
              <p className="font-oswald font-bold text-lg">Tim Klikers</p>
              <p className="font-barlow text-gray-400 text-sm">Host Bedah Buku</p>
            </div>
          </div>
          <button className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors font-barlow">
            <Share2 size={20} /> Bagikan
          </button>
        </div>

        <div className="prose prose-invert prose-lg max-w-none font-barlow text-gray-300 leading-relaxed">
          <p className="text-xl text-gray-200 font-medium leading-relaxed">
            Dalam episode kali ini, kita akan membedah pemikiran-pemikiran radikal yang mengubah cara pandang kita terhadap dunia dan sejarah manusia.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </div>
  );
}
