"use client";

import { Facebook, Instagram, Youtube, Music } from 'lucide-react';

export default function Mantenimiento() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <Music className="w-16 h-16 mx-auto text-yellow-400 mb-4" />
          <h1 className="text-3xl font-bold text-white mb-6">
            Sitio en mantenimiento
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Síguenos en redes sociales para estar al tanto
          </p>
        </div>
        
        <div className="flex justify-center space-x-6 mb-8">
          <a
            href="https://www.facebook.com/Rockalriofest"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500 transition-colors duration-200"
          >
            <Facebook className="w-8 h-8" />
          </a>
          <a
            href="https://www.instagram.com/rockalriofest/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-pink-500 transition-colors duration-200"
          >
            <Instagram className="w-8 h-8" />
          </a>
          <a
            href="https://www.youtube.com/@RockAlRioColombia"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-red-500 transition-colors duration-200"
          >
            <Youtube className="w-8 h-8" />
          </a>
        </div>
        
        <div className="text-gray-500 text-sm">
          <p>Festival Internacional Rock al Río</p>
          <p>Rionegro, Antioquia</p>
        </div>
      </div>
    </div>
  );
}