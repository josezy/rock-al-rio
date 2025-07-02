"use client";
import React, { useEffect, useState } from 'react';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      {/* Parallax Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ 
          backgroundImage: 'url("https://placehold.co/1920x1080/1a1a1a/ffffff?text=Rock+Festival+Background")',
          transform: `translateY(${scrollY * 0.5}px) scale(1.1)`,
          willChange: 'transform',
        }}
      />

      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-hero-overlay z-10"></div>

      {/* Content */}
      <div className="container mx-auto px-4 z-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Rock al Río</h1>
        <p className="text-xl md:text-2xl text-white mb-10 max-w-3xl mx-auto">
          El festival de rock más importante de Latinoamérica
        </p>
        
        {/* YouTube Video embed with autoplay and mute */}
        <div className="relative w-full max-w-4xl mx-auto aspect-video rounded-lg overflow-hidden shadow-2xl">
          <iframe 
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/Gf6Km1y45PE?autoplay=1&mute=1&loop=1&playlist=Gf6Km1y45PE&controls=0"
            title="Rock al Río - Festival de Rock"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="32" 
          height="32" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="white" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M12 5v14M5 12l7 7 7-7"/>
        </svg>
      </div>
    </section>
  );
}
