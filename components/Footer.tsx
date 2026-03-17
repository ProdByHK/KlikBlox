import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/10 pt-16 pb-8 mt-16 relative z-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center mb-4">
              <Image 
                src="/logo.png" 
                alt="Klikblox Logo" 
                width={200} 
                height={60} 
                className="h-10 w-auto object-contain"
                onError={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    const textLogo = document.createElement('span');
                    textLogo.className = "font-oswald text-4xl font-black tracking-tighter flex items-center text-white";
                    textLogo.innerHTML = 'klikbl<span class="inline-block w-6 h-6 bg-[#C8101A] mx-[2px] rounded-sm transform rotate-3"></span>x';
                    parent.appendChild(textLogo);
                  }
                }}
              />
            </Link>
            <p className="font-barlow text-gray-400 max-w-md mb-6 text-lg">
              Media berita independen Indonesia di universe Roblox. Thinker - Story Teller.
            </p>
            <div className="font-oswald font-bold tracking-widest text-brand-red text-lg">
              FREE VOICE · REAL NEWS · UNFILTERED
            </div>
          </div>
          
          <div>
            <h4 className="font-oswald font-bold uppercase tracking-wider mb-4 border-b border-white/10 pb-2 text-white">Kategori</h4>
            <ul className="space-y-2 font-barlow text-gray-400 text-lg">
              <li><Link href="/category/berita-utama" className="hover:text-brand-red transition-colors">Berita Utama</Link></li>
              <li><Link href="/category/politik-ekonomi" className="hover:text-brand-red transition-colors">Politik & Ekonomi</Link></li>
              <li><Link href="/series/bedah-buku-klikblox" className="hover:text-brand-red transition-colors">Bedah Buku</Link></li>
              <li><Link href="/category/infografis" className="hover:text-brand-red transition-colors">Infografis</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-oswald font-bold uppercase tracking-wider mb-4 border-b border-white/10 pb-2 text-white">Klikers</h4>
            <ul className="space-y-2 font-barlow text-gray-400 text-lg">
              <li><Link href="/about" className="hover:text-brand-red transition-colors">Tentang Kami</Link></li>
              <li><Link href="/category/roblox-studio" className="hover:text-brand-red transition-colors">Roblox Studio</Link></li>
              <li><Link href="/contact" className="hover:text-brand-red transition-colors">Kontak</Link></li>
              <li><a href="https://instagram.com/klikers.id" target="_blank" rel="noopener noreferrer" className="hover:text-brand-yellow transition-colors text-brand-yellow">Instagram @klikers.id</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 font-barlow text-sm text-gray-600">
          <p>&copy; 2026 Klikblox - Klikers Indonesia. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
