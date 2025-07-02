"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-[#de0000]/80 backdrop-blur-sm z-50">
      <div className="container mx-auto flex justify-between items-center py-4">
        <Link href="/" className="flex items-center">
          <div className="relative h-12 w-48">
            <Image 
              src="https://placehold.co/192x48/1a1a1a/ffffff?text=Rock+al+Rio" 
              alt="Rock al Río" 
              fill 
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>
        </Link>

        {/* Menú de navegación para escritorio */}
        <nav className="hidden md:flex space-x-8">
          <Link href="#quienes-somos" className="text-white hover:text-blue-400 transition-colors">
            ¿Quiénes somos?
          </Link>
          <Link href="#historia" className="text-white hover:text-blue-400 transition-colors">
            Historia
          </Link>
          <Link href="#contacto" className="text-white hover:text-blue-400 transition-colors">
            Contacto
          </Link>
        </nav>

        {/* Botón de hamburguesa para móviles */}
        <button 
          className="block md:hidden w-10 h-10"
          onClick={toggleMenu}
          aria-label="Menú"
        >
          <div className="flex flex-col justify-center items-center h-full">
            <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white my-1.5 transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* Menú móvil */}
      <div className={`md:hidden bg-black/95 backdrop-blur-md transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-64' : 'max-h-0'}`}>
        <nav className="container mx-auto py-4 flex flex-col space-y-4">
          <Link 
            href="#quienes-somos" 
            className="px-4 py-2 text-white hover:text-blue-400 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            ¿Quiénes somos?
          </Link>
          <Link 
            href="#historia" 
            className="px-4 py-2 text-white hover:text-blue-400 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Historia
          </Link>
          <Link 
            href="#contacto" 
            className="px-4 py-2 text-white hover:text-blue-400 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Contacto
          </Link>
        </nav>
      </div>
    </header>
  );
}
