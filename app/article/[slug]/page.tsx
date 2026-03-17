import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Clock, Share2, User } from 'lucide-react';

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  // Format slug to title
  const title = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Link href="/" className="inline-flex items-center gap-2 text-brand-red hover:text-red-400 font-oswald font-bold tracking-widest uppercase mb-8 transition-colors">
        <ArrowLeft size={20} /> Kembali
      </Link>

      <article className="space-y-8">
        <header className="space-y-6">
          <div className="flex items-center gap-4">
            <span className="bg-brand-red text-white font-oswald font-bold px-3 py-1 text-sm tracking-widest uppercase">Eksklusif</span>
            <span className="font-barlow text-gray-400 text-sm flex items-center gap-1"><Clock size={16} /> 12 Mar 2026</span>
          </div>
          
          <h1 className="font-oswald text-4xl md:text-6xl font-black leading-tight text-white">
            {title}
          </h1>

          <div className="flex items-center justify-between py-6 border-y border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center border border-white/20">
                <User size={24} className="text-gray-400" />
              </div>
              <div>
                <p className="font-oswald font-bold text-lg">Tim Klikers</p>
                <p className="font-barlow text-gray-400 text-sm">Jurnalis Investigasi</p>
              </div>
            </div>
            <button className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors font-barlow">
              <Share2 size={20} /> Bagikan
            </button>
          </div>
        </header>

        <div className="relative h-[400px] md:h-[600px] w-full border border-white/10">
          <Image 
            src={`https://picsum.photos/seed/${slug}/1200/800`}
            alt={title}
            fill
            className="object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="prose prose-invert prose-lg max-w-none font-barlow text-gray-300 leading-relaxed">
          <p className="text-xl text-gray-200 font-medium leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
          </p>
          <h2 className="font-oswald text-3xl font-bold text-white mt-12 mb-6">Mengungkap Fakta Tersembunyi</h2>
          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
          </p>
          <blockquote className="border-l-4 border-brand-red pl-6 py-2 my-8 bg-white/5 italic">
            "Kejujuran adalah mata uang yang paling berharga di dunia virtual maupun nyata. Kita tidak bisa membangun komunitas yang sehat di atas kebohongan."
          </blockquote>
          <p>
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
          </p>
        </div>
      </article>
    </div>
  );
}
