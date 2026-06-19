'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function CopaLoading() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center space-y-6 bg-gray-950 p-8 w-full h-screen">
      <div className="relative w-24 h-24 animate-pulse">
        <Image src="/taca-2026.png" alt="Taça" fill sizes="96px" className="object-contain" />
      </div>
      <div className="w-full max-w-lg bg-gray-700 h-6 border-2 border-yellow-400 p-0.5 relative overflow-hidden">
        <div className="h-full bg-gradient-to-r from-yellow-400 via-green-600 to-yellow-500 transition-all duration-100 ease-linear" style={{ width: `${progress}%` }} />
      </div>
      <div className="text-center font-mono text-white tracking-tighter">
        <p className="text-lg font-bold uppercase">Carregando...</p>
        <p className="text-2xl font-black text-yellow-400">{progress}%</p>
      </div>
    </div>
  );
}