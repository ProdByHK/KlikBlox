import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Clock, Share2 } from 'lucide-react';

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  // Format slug to title
  const title = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">
      <Link href="/" className="inline-flex items-center gap-2 text-brand-red hover:text-red-400 font-oswald font-bold tracking-widest uppercase transition-colors">
        <ArrowLeft size={20} /> Kembali
      </Link>

      <div className="flex items-center gap-4 border-b border-white/10 pb-6">
        <div className="w-3 h-12 bg-brand-red"></div>
        <h1 className="font-oswald text-5xl md:text-7xl font-black uppercase tracking-wide">
          {title}
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <Link href={`/article/${slug}-berita-${i}`} key={i} className="bg-[#1A1A1A] border border-white/5 hover:border-white/20 hover:scale-[1.02] transition-all duration-300 group cursor-pointer relative overflow-hidden flex flex-col">
            <div className="relative h-56 overflow-hidden">
              <Image 
                src={`https://picsum.photos/seed/${slug}${i}/600/400`} 
                alt={`Berita ${i}`} 
                fill 
                className="object-cover transition-transform duration-500 group-hover:scale-110" 
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-brand-red font-oswald font-bold px-2 py-0.5 text-xs tracking-widest uppercase z-10">
                {title.split(' ')[0]}
              </div>
            </div>
            <div className="p-6 flex-grow flex flex-col">
              <h3 className="font-oswald text-2xl font-bold leading-tight mb-3 group-hover:text-brand-red transition-colors line-clamp-2">
                Update Terkini: Perkembangan {title} di Dunia Virtual
              </h3>
              <p className="font-barlow text-gray-400 text-base line-clamp-2 mb-6 flex-grow">
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
    </div>
  );
}
