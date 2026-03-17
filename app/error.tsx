'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <h2 className="font-oswald text-4xl font-black text-brand-red mb-4">Terjadi Kesalahan</h2>
      <p className="font-barlow text-xl text-gray-300 mb-8">Maaf, ada masalah saat memuat halaman ini.</p>
      <button
        onClick={() => reset()}
        className="bg-brand-red hover:bg-red-700 text-white font-oswald font-bold py-3 px-8 uppercase tracking-widest transition-colors"
      >
        Coba Lagi
      </button>
    </div>
  );
}
