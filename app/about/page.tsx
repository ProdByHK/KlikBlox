import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-12">
      <Link href="/" className="inline-flex items-center gap-2 text-brand-red hover:text-red-400 font-oswald font-bold tracking-widest uppercase transition-colors">
        <ArrowLeft size={20} /> Kembali
      </Link>

      <div className="space-y-6">
        <h1 className="font-oswald text-5xl md:text-7xl font-black uppercase tracking-wide border-b border-white/10 pb-6">
          Tentang Kami
        </h1>
        
        <div className="prose prose-invert prose-lg max-w-none font-barlow text-gray-300 leading-relaxed">
          <p className="text-xl text-brand-yellow font-medium">
            Klikblox adalah media berita independen Indonesia pertama yang berfokus pada universe Roblox.
          </p>
          <p>
            Kami hadir dengan semangat &quot;Free Voice, Real News, Unfiltered&quot; untuk memberikan informasi yang akurat, mendalam, dan tanpa sensor mengenai segala hal yang terjadi di dalam ekosistem Roblox, khususnya bagi komunitas pemain dan kreator di Indonesia.
          </p>
          <h2 className="font-oswald text-3xl font-bold text-white mt-12 mb-6">Misi Kami</h2>
          <p>
            Menjadi jembatan informasi yang terpercaya, mengedukasi komunitas, dan mengungkap realita di balik layar ekonomi serta dinamika sosial virtual. Kami percaya bahwa dunia virtual memiliki dampak nyata, dan setiap cerita layak untuk disampaikan dengan integritas jurnalistik yang tinggi.
          </p>
        </div>
      </div>
    </div>
  );
}
