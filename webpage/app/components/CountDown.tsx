"use client";
import { useState, useEffect } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

// Move festival date outside component to prevent re-creation
const FESTIVAL_DATE = new Date('2025-11-15T12:00:00-05:00');

export default function CountDown() {
  const countdownSection = useIntersectionObserver();
  
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = FESTIVAL_DATE.getTime() - new Date().getTime();
      
      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        };
      }
      
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      };
    };

    // Initial calculation
    setTimeLeft(calculateTimeLeft());

    // Update every second
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <div ref={countdownSection.ref} className="bg-gray-dark py-10">
      <div className="container mx-auto px-4">
        <h2 className={`text-2xl md:text-3xl font-bold mb-8 text-center text-white transition-all duration-1000 ${
          countdownSection.isIntersecting 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-10'
        }`}>Próxima edición</h2>
        
        <div className={`flex flex-wrap justify-center gap-4 md:gap-8 transition-all duration-1000 delay-300 ${
          countdownSection.isIntersecting 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-white rounded-lg shadow-lg p-4 w-[80px] md:w-[120px] text-center">
            <div className="text-3xl md:text-5xl font-bold text-primary">{timeLeft.days}</div>
            <div className="text-sm md:text-base text-gray-dark">Días</div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-4 w-[80px] md:w-[120px] text-center">
            <div className="text-3xl md:text-5xl font-bold text-primary">{timeLeft.hours}</div>
            <div className="text-sm md:text-base text-gray-dark">Horas</div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-4 w-[80px] md:w-[120px] text-center">
            <div className="text-3xl md:text-5xl font-bold text-primary">{timeLeft.minutes}</div>
            <div className="text-sm md:text-base text-gray-dark">Minutos</div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-4 w-[80px] md:w-[120px] text-center">
            <div className="text-3xl md:text-5xl font-bold text-primary">{timeLeft.seconds}</div>
            <div className="text-sm md:text-base text-gray-dark">Segundos</div>
          </div>
        </div>
        
        <div className={`text-center mt-8 transition-all duration-1000 delay-500 ${
          countdownSection.isIntersecting 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-10'
        }`}>
          <button className="px-6 py-3 bg-accent text-black font-bold rounded-md hover:bg-opacity-90 transition-all">
            ¡Reserva tus entradas ahora!
          </button>
        </div>
      </div>
    </div>
  );
}
