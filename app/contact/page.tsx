import Link from 'next/link';
import { ArrowLeft, Mail, MapPin, Phone } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-12">
      <Link href="/" className="inline-flex items-center gap-2 text-brand-red hover:text-red-400 font-oswald font-bold tracking-widest uppercase transition-colors">
        <ArrowLeft size={20} /> Kembali
      </Link>

      <div className="space-y-6">
        <h1 className="font-oswald text-5xl md:text-7xl font-black uppercase tracking-wide border-b border-white/10 pb-6">
          Kontak Kami
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8">
          <div className="space-y-8 font-barlow text-gray-300 text-lg">
            <p className="text-xl text-brand-yellow font-medium mb-8">
              Punya berita menarik, ingin berkolaborasi, atau sekadar menyapa? Hubungi kami melalui saluran di bawah ini.
            </p>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/5 flex items-center justify-center border border-white/10">
                <Mail className="text-brand-red" size={24} />
              </div>
              <div>
                <h3 className="font-oswald font-bold text-white uppercase tracking-wider">Email</h3>
                <p>redaksi@klikblox.id</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/5 flex items-center justify-center border border-white/10">
                <Phone className="text-brand-red" size={24} />
              </div>
              <div>
                <h3 className="font-oswald font-bold text-white uppercase tracking-wider">Telepon / WhatsApp</h3>
                <p>+62 812-3456-7890</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/5 flex items-center justify-center border border-white/10">
                <MapPin className="text-brand-red" size={24} />
              </div>
              <div>
                <h3 className="font-oswald font-bold text-white uppercase tracking-wider">Kantor Redaksi</h3>
                <p>Gedung Cyber 2, Lt. 12<br/>Jl. H.R. Rasuna Said Blok X-5<br/>Jakarta Selatan 12950</p>
              </div>
            </div>
          </div>
          
          <div className="bg-[#111] border border-white/10 p-8">
            <h3 className="font-oswald text-2xl font-bold text-white uppercase tracking-wide mb-6">Kirim Pesan</h3>
            <form className="space-y-4 font-barlow">
              <div>
                <label className="block text-sm text-gray-400 mb-1">Nama Lengkap</label>
                <input type="text" className="w-full bg-[#1A1A1A] border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-brand-red transition-colors" placeholder="Masukkan nama Anda" />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-1">Email</label>
                <input type="email" className="w-full bg-[#1A1A1A] border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-brand-red transition-colors" placeholder="Masukkan email Anda" />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-1">Pesan</label>
                <textarea rows={5} className="w-full bg-[#1A1A1A] border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-brand-red transition-colors resize-none" placeholder="Tulis pesan Anda di sini..."></textarea>
              </div>
              <button type="button" className="w-full bg-brand-red hover:bg-red-700 text-white font-oswald font-bold py-4 uppercase tracking-widest transition-colors mt-4">
                Kirim Pesan
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
