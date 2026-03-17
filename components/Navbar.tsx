import Link from 'next/link';
import Image from 'next/image';
import { Menu, Search } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-[#0D0D0D]/90 backdrop-blur-md border-b border-brand-red/30">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button className="md:hidden text-white hover:text-brand-red transition-colors">
            <Menu size={24} />
          </button>
          <Link href="/" className="flex items-center">
            <Image 
              src="/logo.png" 
              alt="Klikblox Logo" 
              width={150} 
              height={40} 
              className="h-8 w-auto object-contain"
              priority
              onError={(e) => {
                // Fallback to text if image fails to load
                const target = e.target as HTMLElement;
                target.style.display = 'none';
                const parent = target.parentElement;
                if (parent) {
                  const textLogo = document.createElement('span');
                  textLogo.className = "font-oswald text-3xl font-black tracking-tighter flex items-center text-white";
                  textLogo.innerHTML = 'klikbl<span class="inline-block w-5 h-5 bg-[#C8101A] mx-[2px] rounded-sm transform rotate-3"></span>x';
                  parent.appendChild(textLogo);
                }
              }}
            />
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center gap-8 font-oswald text-lg tracking-wide uppercase">
          <Link href="/category/berita" className="hover:text-brand-red transition-colors">Berita</Link>
          <Link href="/series/bedah-buku-klikblox" className="hover:text-brand-red transition-colors">Bedah Buku</Link>
          <Link href="/category/infografis" className="hover:text-brand-red transition-colors">Infografis</Link>
          <Link href="/category/roblox" className="hover:text-brand-red transition-colors">Roblox</Link>
        </nav>
        
        <div className="flex items-center gap-4">
          <button className="text-white hover:text-brand-red transition-colors">
            <Search size={20} />
          </button>
          <div className="bg-brand-red text-white font-oswald font-bold px-3 py-1 text-sm tracking-widest animate-pulse flex items-center gap-2">
            <span className="w-2 h-2 bg-white rounded-full"></span> LIVE
          </div>
        </div>
      </div>
    </header>
  );
}
