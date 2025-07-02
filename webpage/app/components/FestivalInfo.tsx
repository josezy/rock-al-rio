"use client";
import React from 'react';
import Image from 'next/image';
import ImageGallery from './ImageGallery';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function FestivalInfo() {
  const titleSection = useIntersectionObserver();
  const aboutSection = useIntersectionObserver();
  const historySection = useIntersectionObserver();

  return (
    <section id="quienes-somos" className="py-20 bg-gray-light">
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
              Rock al Río es el festival de música rock más importante de Latinoamérica. Desde su primera edición, 
              nos hemos dedicado a traer los mejores artistas nacionales e internacionales para crear una experiencia 
              única para todos los amantes del rock.
            </p>
            <p>
              Nuestro objetivo es promover la cultura musical y ofrecer un espacio donde distintas generaciones 
              puedan disfrutar juntas de los sonidos que han marcado la historia del rock, así como de las nuevas 
              tendencias que definirán el futuro del género.
            </p>
          </div>
          <div className={`relative h-80 rounded-lg overflow-hidden shadow-xl transition-all duration-1000 delay-400 ${
            aboutSection.isIntersecting 
              ? 'opacity-100 translate-x-0 scale-100' 
              : 'opacity-0 translate-x-10 scale-95'
          }`}>
            <Image
              src="https://placehold.co/600x320/dc2626/ffffff?text=Festival+Crowd"
              alt="Multitud en Rock al Río"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>

        <div 
          id="historia" 
          ref={historySection.ref}
          className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20 transition-all duration-1000 ${
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
            <Image
              src="https://placehold.co/600x320/dc2626/ffffff?text=Festival+Stage"
              alt="Escenario de Rock al Río"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className="order-1 md:order-2 transition-all duration-1000 delay-200">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Historia</h3>
            <p className="mb-4">
              Fundado en 2010, Rock al Río ha crecido para convertirse en un referente cultural en Latinoamérica. 
              Lo que comenzó como un pequeño festival local ahora atrae a más de 100,000 asistentes de todo el mundo 
              cada año.
            </p>
            <p>
              A lo largo de nuestra historia, hemos tenido el honor de presentar a legendarias bandas de rock como 
              Metallica, Foo Fighters, The Killers, Queens of the Stone Age, Arctic Monkeys, así como talento 
              latinoamericano como Soda Stereo, Café Tacvba, Los Fabulosos Cadillacs y muchos más.
            </p>
          </div>
        </div>

        <ImageGallery />
      </div>
    </section>
  );
}
