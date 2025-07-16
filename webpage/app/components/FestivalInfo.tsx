"use client";
import React from 'react';
import Image from 'next/image';
import ImageGallery from './ImageGallery';
import FestivalSlider from './FestivalSliders';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function FestivalInfo() {
  const titleSection = useIntersectionObserver();
  const aboutSection = useIntersectionObserver();
  const historySection = useIntersectionObserver();

  return (
    <section id="quienes-somos" className="py-16 bg-gray-light">
      <div className="container mx-auto px-4">
        <div 
          ref={titleSection.ref}
          className={`text-center mb-16 transition-all duration-1000 ${
            titleSection.isIntersecting 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-primary">Rock al Río</h2>
          <p className="text-xl md:text-2xl text-gray-dark max-w-3xl mx-auto">
            Un festival que reúne lo mejor del rock nacional e internacional
          </p>
        </div>

        <div 
          ref={aboutSection.ref}
          className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20 transition-all duration-1000 ${
            aboutSection.isIntersecting 
              ? 'opacity-100 translate-x-0' 
              : 'opacity-0 -translate-x-10'
          }`}
        >
          <div className="transition-all duration-1000 delay-200">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">¿Quiénes Somos?</h3>
            <p className="mb-4">
              El Festival Internacional Rock al Río es el evento musical más importante del oriente antioqueño, 
              con <strong>20 años de historia cultural ininterrumpida</strong> en Rionegro, Antioquia. 
              Nos consolidamos como un catalizador excepcional de desarrollo socioeconómico y cultural, 
              reconocido como <strong>"El festival de Rock más grande del oriente antioqueño"</strong>.
            </p>
            <p>
              Con <strong>más de 300 bandas participantes</strong> a lo largo de nuestra historia y un modelo 
              innovador de entrada solidaria, promovemos la diversidad cultural, la cohesión social y el 
              desarrollo del talento local, creando un espacio donde la música trasciende para convertirse 
              en instrumento de transformación social.
            </p>
          </div>
          <div className={`relative h-80 rounded-lg overflow-hidden shadow-xl transition-all duration-1000 delay-400 ${
            aboutSection.isIntersecting 
              ? 'opacity-100 translate-x-0 scale-100' 
              : 'opacity-0 translate-x-10 scale-95'
          }`}>
            <FestivalSlider type="crowd" className="h-full" />
          </div>
        </div>

        <div 
          id="historia" 
          ref={historySection.ref}
          className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16 transition-all duration-1000 ${
            historySection.isIntersecting 
              ? 'opacity-100 translate-x-0' 
              : 'opacity-0 translate-x-10'
          }`}
        >
          <div className={`order-2 md:order-1 relative h-80 rounded-lg overflow-hidden shadow-xl transition-all duration-1000 delay-400 ${
            historySection.isIntersecting 
              ? 'opacity-100 translate-x-0 scale-100' 
              : 'opacity-0 -translate-x-10 scale-95'
          }`}>
            <FestivalSlider type="stage" className="h-full" />
          </div>
          <div className="order-1 md:order-2 transition-all duration-1000 delay-200">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Historia</h3>
            <p className="mb-4">
              Fundado en <strong>2009</strong>, Rock al Río ha realizado <strong>13 ediciones exitosas </strong> 
              hasta 2024, consolidándose como un referente cultural en el oriente antioqueño. Durante estos 
              20 años, hemos presentado una programación multicultural que incluye bandas locales como 
              Los Suziox, Masacre y Carrera 52, artistas nacionales como Aterciopelados, Doctor Krapula y 
              La Pestilencia, y actos internacionales como Onslaught (Reino Unido) y Reincidentes (España).
            </p>
            <p>
              Nuestro festival ha demostrado <strong>adaptabilidad excepcional</strong>, incluso realizando 
              una edición virtual en 2020 durante la pandemia COVID-19. Con temáticas como "Diversidad y 
              Tolerancia" (2009, 2013) y "XX Años - Toda Una Historia" (2024), hemos promovido el diálogo 
              intercultural y la cohesión social en nuestra región.
            </p>
          </div>
        </div>

        <ImageGallery />
      </div>
    </section>
  );
}
