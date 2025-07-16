"use client";
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [displayedImages, setDisplayedImages] = useState<string[]>([]);

  // All available festival images
  const allFestivalImages = [
    '107900868_3085814654807843_6574709192092760958_n.jpg',
    '109056503_3085812311474744_1641677095587906692_n.jpg',
    '109537678_3085814848141157_2426832215297922531_n.jpg',
    '116794382_3144686088920699_7953017766725743496_n.jpg',
    '116901089_3150415865014388_4255720796836094125_n.jpg',
    '117035323_3150416081681033_1143429000731023295_n.jpg',
    '117107675_3150415968347711_7930042975081579033_n.jpg',
    '117122823_3147463645309610_7040593362550749150_n.jpg',
    '117233334_3144686025587372_8374690866358904846_n.jpg',
    '117339503_3150416221681019_1731643317207305147_n.jpg',
    '117591063_3175248559197785_6789115985263378135_n.jpg',
    '117826512_3175248609197780_1801974067251270837_n.jpg',
    '117892176_186773349509556_3276850000939777442_n.jpg',
    '117957131_3187945084594799_2162485008174530387_n.jpg',
    '117962288_3187944934594814_6458071868765007127_n.jpg',
    '117985426_3175248735864434_8538010772390532794_n.jpg',
    '118770896_3237785196277454_7629157164698894329_n.jpg',
    '118771528_3237785059610801_7096094275320647544_n.jpg',
    '118966729_3255915464464427_8470649416678609156_n.jpg',
    '119061866_3255915577797749_4588678676138070000_n.jpg',
    '47181414_1959923587396961_1282147561485893632_n.jpg',
    '47192641_1959570627432257_3228981006115536896_n.jpg',
    '47213058_1959664054089581_8508338150475563008_n.jpg',
    '47225228_1959627850759868_3707887675143880704_n.jpg',
    '47248412_1959530464102940_1331511931311226880_n.jpg',
    '47258268_1959750474080939_6092979260534816768_n.jpg',
    '47291978_1959641440758509_3457957596839804928_n.jpg',
    '47325091_1959457690776884_8187509410633875456_n.jpg',
    '47350862_1959405480782105_6867923259178876928_n.jpg',
    '47362160_1959613354094651_4117176837019271168_n.jpg',
    '78754969_2581151111940869_8320562545366663168_n.jpg',
    '79145353_2581031905286123_2884571310975877120_n.jpg',
    '87013988_2776289692427009_6021732019451461632_n.jpg',
    '91174211_2811338725588772_6225536244940537856_n.jpg',
    '92326746_2834378113284833_5465547030363373568_n.jpg',
    '94088615_2866358446753466_8754927457187921920_n.jpg',
  ];

  // Function to get random selection of images
  const getRandomImages = (count: number) => {
    const shuffled = [...allFestivalImages].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  // Initialize with random images
  useEffect(() => {
    setDisplayedImages(getRandomImages(10));
  }, []);

  const loadMorePhotos = () => {
    const newImages = getRandomImages(10);
    setDisplayedImages(newImages);
    setCurrentImageIndex(0);
  };

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (displayedImages.length === 0) return;
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % displayedImages.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [displayedImages.length]);

  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <iframe 
          className="absolute inset-0 w-full h-full object-cover"
          src="https://www.youtube.com/embed/Gf6Km1y45PE?autoplay=1&mute=1&loop=1&playlist=Gf6Km1y45PE&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1"
          title="Rock al Río - Background Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          style={{ 
            transform: `translateY(${scrollY * 0.3}px) scale(1.2)`,
            willChange: 'transform',
          }}
        ></iframe>
      </div>

      {/* Overlay for better content visibility */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* Content */}
      <div className="container mx-auto px-4 z-20 text-center">
        <h3 className="text-lg md:text-2xl font-bold text-white mb-10">
          Festival Internacional
        </h3>
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-10">
          Rock al Río
        </h1>
        <br/>
        {/* Interactive Photo Collage */}
        <div className="relative w-full mx-auto">
          <div className="grid grid-cols-5 sm:grid-cols-10 lg:grid-cols-10 gap-2 md:gap-3">
            {displayedImages.map((image, index) => (
              <div
                key={`${image}-${index}`}
                className={`relative aspect-square rounded-lg overflow-hidden cursor-pointer transform transition-all duration-500 ${
                  index === currentImageIndex 
                    ? 'scale-105 ring-4 ring-white/50 z-30' 
                    : 'hover:scale-105 hover:z-20'
                }`}
                onClick={() => setCurrentImageIndex(index)}
              >
                <Image
                  src={`/facebook/festival/${image}`}
                  alt={`Festival moment ${index + 1}`}
                  fill
                  className="object-cover"
                  loading={index < 4 ? 'eager' : 'lazy'}
                  sizes="(max-width: 768px) 25vw, (max-width: 1024px) 16vw, 12vw"
                />
                <div className="absolute inset-0 bg-black/20 hover:bg-black/0 transition-colors duration-300"></div>
              </div>
            ))}
          </div>
          
          {/* Featured Image Display */}
          <div className="mt-6 relative w-full max-w-4xl mx-auto aspect-video rounded-lg overflow-hidden shadow-2xl">
            {displayedImages.length > 0 && (
              <Image
                src={`/facebook/festival/${displayedImages[currentImageIndex]}`}
                alt={`Featured festival moment ${currentImageIndex + 1}`}
                fill
                className="object-cover"
                priority
              />
            )}
            <div className="absolute bottom-4 left-4 bg-black/50 px-3 py-1 rounded-full">
              <span className="text-white text-sm">
                {currentImageIndex + 1} / {displayedImages.length}
              </span>
            </div>
          </div>
          
          {/* Ver más fotos button */}
          <div className="mt-6">
            <button
              onClick={loadMorePhotos}
              className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full font-medium transition-all duration-300 backdrop-blur-sm border border-white/20 hover:border-white/40 cursor-pointer"
            >
              Ver más fotos
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 z-20 animate-bounce">
        <button
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          className="p-2 hover:bg-white/10 rounded-full transition-colors duration-300 cursor-pointer"
        >
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
        </button>
      </div>
    </section>
  );
}
