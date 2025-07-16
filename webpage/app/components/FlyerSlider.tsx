"use client";
import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface FlyerSliderProps {
  className?: string;
  onImageClick?: (index: number) => void;
}

const FlyerSlider = ({ className = '', onImageClick }: FlyerSliderProps) => {
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

  const sliderSettings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className={`flyer-slider-container ${className}`}>
      <Slider {...sliderSettings}>
        {flyerImages.map((flyer, index) => (
          <div key={index} className="px-2">
            <div 
              className="relative aspect-[4/5] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all cursor-pointer"
              onClick={() => onImageClick?.(index)}
            >
              <Image
                src={`/flyers/${flyer}`}
                alt={`Festival flyer ${flyer.replace('flyer-', '').replace('.jpg', '')}`}
                fill
                className="object-cover"
                sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1200px) 25vw, 20vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                <p className="text-white font-semibold">
                  Rock al Río {flyer.replace('flyer-', '').replace('.jpg', '')}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FlyerSlider;