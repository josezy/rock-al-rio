"use client";
import { useState } from 'react';
import Image from 'next/image';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

type ImageItem = {
  src: string;
  alt: string;
  year: number;
};

export default function ImageGallery() {
  const [activeImage, setActiveImage] = useState<number | null>(null);
  const gallerySection = useIntersectionObserver();
  
  const galleryImages: ImageItem[] = [
    { 
      src: 'https://placehold.co/400x256/2563eb/ffffff?text=Rock+al+Rio+2021', 
      alt: 'Momento memorable Rock al Río 2021',
      year: 2021 
    },
    { 
      src: 'https://placehold.co/400x256/2563eb/ffffff?text=Rock+al+Rio+2022', 
      alt: 'Momento memorable Rock al Río 2022',
      year: 2022
    },
    { 
      src: 'https://placehold.co/400x256/2563eb/ffffff?text=Rock+al+Rio+2023', 
      alt: 'Momento memorable Rock al Río 2023',
      year: 2023 
    },
  ];

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
    <div ref={gallerySection.ref} className="mt-16">
      <h3 className={`text-2xl md:text-3xl font-bold mb-10 text-center transition-all duration-1000 ${
        gallerySection.isIntersecting 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-10'
      }`}>Momentos Memorables</h3>
      
      {/* Gallery Grid */}
      <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-1000 delay-300 ${
        gallerySection.isIntersecting 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-10'
      }`}>
        {galleryImages.map((image, index) => (
          <div 
            key={index} 
            className={`relative h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all cursor-pointer delay-${index * 100 + 500} ${
              gallerySection.isIntersecting 
                ? 'opacity-100 translate-y-0 scale-100' 
                : 'opacity-0 translate-y-5 scale-95'
            }`}
            onClick={() => openModal(index)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              style={{ objectFit: 'cover' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
              <p className="text-white font-semibold">Rock al Río {image.year}</p>
            </div>
          </div>
        ))}
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
