"use client";
import { useState } from 'react';
import Image from 'next/image';
import FlyerSlider from './FlyerSlider';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

type ImageItem = {
  src: string;
  alt: string;
  year: number;
};

export default function ImageGallery() {
  const [activeImage, setActiveImage] = useState<number | null>(null);
  const gallerySection = useIntersectionObserver();
  
  const flyerImages = [
    'flyer-2009.jpg',
    'flyer-2013.jpg',
    'flyer-2014.jpg',
    'flyer-2015.jpg',
    'flyer-2016.jpg',
    'flyer-2017.jpg',
    'flyer-2018.jpg',
    'flyer-2020.jpg',
    'flyer-2021.jpg',
    'flyer-2022.jpg',
    'flyer-2024.jpg',
  ];

  const galleryImages: ImageItem[] = flyerImages.map((flyer) => ({
    src: `/flyers/${flyer}`,
    alt: `Festival flyer ${flyer.replace('flyer-', '').replace('.jpg', '')}`,
    year: parseInt(flyer.replace('flyer-', '').replace('.jpg', ''))
  }));

  const openModal = (index: number) => {
    setActiveImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setActiveImage(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = () => {
    if (activeImage !== null) {
      setActiveImage((activeImage + 1) % galleryImages.length);
    }
  };

  const prevImage = () => {
    if (activeImage !== null) {
      setActiveImage((activeImage + galleryImages.length - 1) % galleryImages.length);
    }
  };

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (activeImage === null) return;
    
    if (e.key === 'ArrowRight') {
      nextImage();
    } else if (e.key === 'ArrowLeft') {
      prevImage();
    } else if (e.key === 'Escape') {
      closeModal();
    }
  };

  return (
    <div ref={gallerySection.ref}>
      <h3 className={`text-2xl md:text-3xl font-bold text-center transition-all duration-1000 ${
        gallerySection.isIntersecting 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-10'
      }`}>Momentos Memorables</h3>
      <br/>
      {/* Flyer Slider */}
      <div className={`transition-all duration-1000 delay-300 ${
        gallerySection.isIntersecting 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-10'
      }`}>
        <FlyerSlider onImageClick={openModal} />
      </div>

      {/* Fullscreen Modal */}
      {activeImage !== null && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
          onClick={closeModal}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <button 
            className="absolute top-4 right-4 text-white text-4xl"
            onClick={closeModal}
            aria-label="Cerrar"
          >
            &times;
          </button>
          
          <button 
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-4xl px-4 py-2"
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            aria-label="Imagen anterior"
          >
            &#10094;
          </button>
          
          <div className="relative w-full max-w-4xl h-[70vh]" onClick={(e) => e.stopPropagation()}>
            {activeImage !== null && (
              <Image
                src={galleryImages[activeImage].src}
                alt={galleryImages[activeImage].alt}
                fill
                sizes="100vw"
                style={{ objectFit: 'contain' }}
                priority
              />
            )}
            <div className="absolute bottom-4 left-0 right-0 text-center text-white">
              <p className="font-semibold text-lg">
                {activeImage !== null && `Rock al Río ${galleryImages[activeImage].year}`}
              </p>
            </div>
          </div>
          
          <button 
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-4xl px-4 py-2"
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            aria-label="Siguiente imagen"
          >
            &#10095;
          </button>
        </div>
      )}
    </div>
  );
}
