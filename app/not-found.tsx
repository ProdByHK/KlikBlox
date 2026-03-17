import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <h2 className="font-oswald text-6xl font-black text-brand-red mb-4">404</h2>
      <p className="font-barlow text-2xl text-gray-300 mb-8">Halaman Tidak Ditemukan</p>
      <Link 
        href="/" 
        className="bg-brand-red hover:bg-red-700 text-white font-oswald font-bold py-3 px-8 uppercase tracking-widest transition-colors"
      >
        Kembali ke Beranda
      </Link>
    </div>
  );
}
