import React, { useRef, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const RobotShowcase = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const robots = [
    {
      id: 1,
      name: 'Slamet',
      category: 'Basketball Shooting Robot',
      series: 'BASKETBALL-SERIES',
      image: '/bandhayudha-photo/Robots/R1_25.JPG',
      description: 'Next generation competitive robot for ABU Robocon 2025',
      models: ['SL-25']
    },
    {
      id: 2,
      name: 'ULO',
      category: 'Silo Robot',
      series: 'HARVEST-SERIES',
      image: '/bandhayudha-photo/Robots/R2_24.png',
      description: 'Autonomous robot with advanced navigation for ABU Robocon 2024',
      models: ['ULO24']
    },
    {
      id: 3,
      name: 'NOGO',
      category: 'Paddy Rice Robot',
      series: 'HARVEST-SERIES',
      image: '/bandhayudha-photo/Robots/R1_24.png',
      description: 'Semi-autonomous precision robot for complex field challenges',
      models: ['NOGO24']
    },
  ];

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!scrollRef.current) return;
      
      const container = scrollRef.current;
      const maxScroll = container.scrollWidth - container.clientWidth;
      const currentScroll = container.scrollLeft;
      
      if (e.deltaY > 0 && currentScroll < maxScroll) {
        e.preventDefault();
        container.scrollLeft += e.deltaY;
      } else if (e.deltaY < 0 && currentScroll > 0) {
        e.preventDefault();
        container.scrollLeft += e.deltaY;
      }
    };

    const container = scrollRef.current;
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      if (container) {
        container.removeEventListener('wheel', handleWheel);
      }
    };
  }, []);

  const handleViewDetails = (robotId: number) => {
    navigate(`/robots#robot-${robotId}`);
  };

  return (
    <section className="relative min-h-screen bg-gray-900 overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/hero-video.webm" type="video/webm" />
      </video>
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      
      <div className="relative z-20 h-screen flex flex-col">
        {/* Header */}
        <div className="pt-24 pb-8 px-6 md:px-16">
          <p className="text-gray-400 text-sm uppercase tracking-wider mb-4">Robots</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Our Championship<br />
            Robot Lineup
          </h2>
        </div>

        {/* Cards Container - FIXED RESPONSIVE ISSUE */}
        <div className="flex-1 pb-16 overflow-hidden relative">
          <div 
            ref={scrollRef}
            className="flex gap-3 sm:gap-4 lg:gap-6 xl:gap-8 h-full items-center overflow-x-auto px-4 sm:px-6 lg:px-12 xl:px-16 pb-4"
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {robots.map((robot) => (
              <div
                key={robot.id}
                // FIXED: Changed from fixed w-[380px] h-[500px] to responsive sizing
                // Mobile: smaller cards that fit viewport, Desktop: larger cards
                className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[360px] lg:w-[380px] h-[400px] sm:h-[450px] md:h-[480px] lg:h-[500px]"
              >
                <Card className="h-full rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 bg-white/5 backdrop-blur-xl border-white/10 hover:bg-white hover:backdrop-blur-none group">
                  {/* Image Section */}
                  <div className="relative h-[55%] md:h-[60%] bg-black/5 group-hover:bg-gray-100 transition-colors duration-500 p-3 sm:p-4 lg:p-6">
                    <Button
                      onClick={() => handleViewDetails(robot.id)}
                      size="sm"
                      className="absolute top-2 left-2 md:top-3 md:left-3 lg:top-4 lg:left-4 z-10 bg-white/90 text-gray-900 hover:bg-white transition-all duration-500 text-xs sm:text-sm px-2 sm:px-3"
                    >
                      View Details
                    </Button>

                    <div className="w-full h-full rounded-lg lg:rounded-xl overflow-hidden">
                      <img
                        src={robot.image}
                        alt={robot.name}
                        className="h-full w-full object-contain"
                      />
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-3 sm:p-4 lg:p-6 h-[45%] md:h-[40%] flex flex-col">
                    <p className="text-xs sm:text-sm text-white/90 group-hover:text-gray-500 transition-colors duration-500 mb-1.5 sm:mb-2">
                      {robot.category}
                    </p>
                    
                    {/* FIXED: Responsive text sizing for better mobile display */}
                    <h3 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-bold text-white group-hover:text-gray-900 transition-colors duration-500 mb-2 sm:mb-3 lg:mb-4 leading-tight">
                      {robot.series}
                    </h3>
                    
                    {/* FIXED: Better text sizing and spacing for mobile */}
                    <p className="text-xs sm:text-sm lg:text-base text-white/80 group-hover:text-gray-600 transition-colors duration-500 mb-3 sm:mb-4 lg:mb-6 line-clamp-2 flex-1 leading-relaxed">
                      {robot.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 sm:gap-2 lg:gap-4">
                      {robot.models.map((model) => (
                        <button
                          key={model}
                          onClick={() => handleViewDetails(robot.id)}
                          className="text-xs sm:text-sm lg:text-base text-blue-300 group-hover:text-blue-600 transition-colors duration-500 font-medium"
                        >
                          {model}
                        </button>
                      ))}
                    </div>
                  </div>
                </Card>
              </div>
            ))}
            
            {/* View Full Lineup Button - FIXED RESPONSIVE */}
            <div className="flex-shrink-0 w-[200px] sm:w-[240px] md:w-[280px] lg:w-[300px] h-[400px] sm:h-[450px] md:h-[480px] lg:h-[500px] flex items-center justify-center">
              <div className="text-center">
                <button
                  onClick={() => navigate('/robots')}
                  className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-white/10 backdrop-blur-md border-2 border-white/20 rounded-full flex items-center justify-center mb-3 sm:mb-4 lg:mb-6 hover:bg-white hover:border-white transition-all duration-300 group"
                >
                  <svg 
                    className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-white group-hover:text-gray-900 transition-colors duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                <p className="text-white text-sm sm:text-base lg:text-lg font-medium">
                  View Full Lineup
                </p>
              </div>
            </div>
            
            {/* Extra padding for last card */}
            <div className="w-2 sm:w-4 lg:w-8 flex-shrink-0" />
          </div>
          
          {/* Mobile scroll hint */}
          <div className="md:hidden absolute bottom-16 sm:bottom-20 left-1/2 transform -translate-x-1/2 text-white/60 text-xs sm:text-sm flex items-center gap-2">
            <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Swipe to explore
            <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>

        {/* Hide scrollbar CSS */}
        <style jsx>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </div>
    </section>
  );
};

export default RobotShowcase;