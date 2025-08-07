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
      name: 'ULO',
      category: 'Competition Robot',
      series: 'U-SERIES',
      image: '/bandhayudha-photo/dc5ff86c-6bdc-47ae-92e3-7e9a69fa79cd.png',
      description: 'Autonomous robot with advanced navigation for ABU Robocon 2024',
      models: ['ULO24']
    },
    {
      id: 2,
      name: 'NOGO',
      category: 'Precision Robot',
      series: 'N-SERIES',
      image: '/bandhayudha-photo/75965119-720c-44cf-b446-0099b94bdef4.png',
      description: 'Semi-autonomous precision robot for complex field challenges',
      models: ['NOGO24']
    },
    {
      id: 3,
      name: 'Future Robot',
      category: 'Next Generation',
      series: 'F-SERIES',
      image: '/bandhayudha-photo/Robot1_ABU25.JPG',
      description: 'Next generation competitive robot for ABU Robocon 2025',
      models: ['FR2025']
    },
    {
      id: 4,
      name: 'Future Robot',
      category: 'Next Generation',
      series: 'F-SERIES',
      image: '/bandhayudha-photo/Robot1_ABU25.JPG',
      description: 'Next generation competitive robot for ABU Robocon 2025',
      models: ['FR2025']
    },
    {
      id: 5,
      name: 'Future Robot',
      category: 'Next Generation',
      series: 'F-SERIES',
      image: '/bandhayudha-photo/Robot1_ABU25.JPG',
      description: 'Next generation competitive robot for ABU Robocon 2025',
      models: ['FR2025']
    },
    {
      id: 6,
      name: 'Future Robot',
      category: 'Next Generation',
      series: 'F-SERIES',
      image: '/bandhayudha-photo/Robot1_ABU25.JPG',
      description: 'Next generation competitive robot for ABU Robocon 2025',
      models: ['FR2025']
    }
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
            Our advanced<br />
            Robot Lineup
          </h2>
        </div>

        {/* Cards Container */}
        <div className="flex-1 px-6 md:px-16 pb-16 overflow-hidden">
          <div 
            ref={scrollRef}
            className="flex gap-8 h-full items-center overflow-x-auto"
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {robots.map((robot) => (
              <div
                key={robot.id}
                className="flex-shrink-0 w-[380px] h-[500px]"
              >
                <Card className="h-full rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 bg-white/5 backdrop-blur-xl border-white/10 hover:bg-white hover:backdrop-blur-none group">
                  {/* Image Section */}
                  <div className="relative h-[300px] bg-black/5 group-hover:bg-gray-100 transition-colors duration-500 p-6">
                    <Button
                      onClick={() => handleViewDetails(robot.id)}
                      size="sm"
                      className="absolute top-4 left-4 z-10 bg-white/90 text-gray-900 hover:bg-white transition-all duration-500"
                    >
                      View Details
                    </Button>

                    <div className="w-full h-full rounded-xl overflow-hidden">
                      <img
                        src={robot.image}
                        alt={robot.name}
                        className="h-full w-full object-contain"
                      />
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6 group">
                    <p className="text-sm text-white/90 group-hover:text-gray-500 transition-colors duration-500 mb-2">
                      {robot.category}
                    </p>
                    
                    <h3 className="text-2xl font-bold text-white group-hover:text-gray-900 transition-colors duration-500 mb-4">
                      {robot.series}
                    </h3>
                    
                    <p className="text-white/80 group-hover:text-gray-600 transition-colors duration-500 mb-6 line-clamp-2">
                      {robot.description}
                    </p>

                    <div className="flex flex-wrap gap-4">
                      {robot.models.map((model) => (
                        <button
                          key={model}
                          onClick={() => handleViewDetails(robot.id)}
                          className="text-blue-300 group-hover:text-blue-600 transition-colors duration-500 font-medium"
                        >
                          {model}
                        </button>
                      ))}
                    </div>
                  </div>
                </Card>
              </div>
            ))}
            
            {/* View Full Lineup Button */}
            <div className="flex-shrink-0 w-[300px] h-[500px] flex items-center justify-center">
              <div className="text-center">
                <button
                  onClick={() => navigate('/robots')}
                  className="w-20 h-20 bg-white/10 backdrop-blur-md border-2 border-white/20 rounded-full flex items-center justify-center mb-6 hover:bg-white hover:border-white transition-all duration-300 group"
                >
                  <svg 
                    className="w-8 h-8 text-white group-hover:text-gray-900 transition-colors duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                <p className="text-white text-lg font-medium">
                  View Full Lineup
                </p>
              </div>
            </div>
            
            {/* Extra padding */}
            <div className="w-16 flex-shrink-0" />
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