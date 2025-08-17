import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Cpu, Zap, Target, X, Gauge, Network } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useLocation } from 'react-router-dom';

const Robots = () => {
  const [zoomedRobot, setZoomedRobot] = useState(null);
  const [scrollY, setScrollY] = useState(0);
  const location = useLocation();

  const robots = [
    {
      id: 1,
      name: 'SLAMET',
      category: 'ABURobocon 2025',
      image: '/bandhayudha-photo/Robots/R1_25.JPG',
      scale: 'scale-105',
      y_position: '6',
      description: 'SLAMET is a shooter robot designed for the ABU Robocon 2025 competition. It features a jetson orin nano for advanced communication protocol, Triple communication fallback mechanism, with unique dribbling mechanism.',
      specs: [
        'NVIDIA Jetson Orin Nano',
        'STM32H7 for Control',
        'Dual Band WiFi Communication',
        'Bluetooth Communication',
      ],
      achievements: [
        // 'Regional 3rd Place',
      ]
    },
    {
      id: 2,
      name: 'ULO',
      category: 'ABURobocon 2024',
      image: '/bandhayudha-photo/Robots/R2_24.png',
      scale: 'scale-105',
      y_position: '6',
      description: 'ULO is a versatile autonomous robot designed for the ABU Robocon 2024 competition. It features a jetson orin nano for advanced Computer Vision, swerve drive train for enhanced maneuverability, and a robust navigation system that allows it to adapt to dynamic environments.',
      specs: [
        'NVIDIA Jetson Orin Nano',
        'STM32H7 for Control',
        'Swerve Drive Train',
        'Advanced Computer Vision',
      ],
      achievements: [
        'Regional 3rd Place',
      ]
    },
    {
      id: 3,
      name: 'NOGO',
      category: 'ABURobocon 2024',
      image: '/bandhayudha-photo/Robots/R1_24.png',
      scale: 'scale-105',
      y_position: '6',
      description: 'NOGO is an advanced semi-autonomous robot designed for the ABU Robocon 2024 competition. It features intelligent navigation and precision manipulation capabilities for complex field challenges.',
      specs: [
        'Dual BLDC Shooting Mechanism',
        'STM32H7 for Control',
        'Omnidirectional Movement',
        'Precision Manipulation',
      ],
      achievements: [
        'Regional 3rd Place',
      ]
    },
  ];

  // Auto scroll to specific robot if hash is present
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location.hash]);

  // Track scroll position for scroll-based animations
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate animation values based on scroll position - UPDATED LOGIC
  const getAnimationStyle = (robotId) => {
    if (typeof window === 'undefined') return {};
    
    const element = document.getElementById(`robot-${robotId}`);
    if (!element) return {};
    
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const elementTop = rect.top;
    const elementHeight = rect.height;
    
    // Animation starts when element enters viewport (bottom edge touches bottom of screen)
    // Animation completes when element is centered in viewport
    const triggerPoint = windowHeight; // Element starts entering viewport
    const completionPoint = windowHeight * 0.5; // Element is roughly centered
    
    // Calculate progress based on element position relative to trigger and completion points
    const progress = Math.max(0, Math.min(1, (triggerPoint - elementTop) / (triggerPoint - completionPoint)));
    
    // Only apply slide animation on desktop (lg and above), disable on mobile to prevent horizontal scroll
    const isMobile = window.innerWidth < 1024; // lg breakpoint is 1024px
    const slideDistance = 100; // pixels
    const translateX = isMobile ? 0 : (robotId % 2 === 1 
      ? slideDistance * (1 - progress)  // Odd IDs: slide from right to left
      : -slideDistance * (1 - progress)); // Even IDs: slide from left to right
    
    const opacity = progress;
    
    return {
      transform: `translateX(${translateX}px)`,
      opacity: opacity
    };
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />
      <div className="pt-16">
        {/* Hero Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-gradient-hero text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">Our Robots</h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed">
              Meet our championship-winning autonomous robots, engineered for excellence in competitive robotics
            </p>
          </div>
        </section>

        {/* Robots Showcase */}
        <section className="py-12 sm:py-16 md:py-20">
          <div className="container mx-auto px-4">
            {robots.map((robot, index) => (
              <div
                key={robot.id}
                id={`robot-${robot.id}`}
                className="mb-16 sm:mb-20 md:mb-24 lg:mb-32 last:mb-12 sm:last:mb-16 md:last:mb-20"
                style={getAnimationStyle(robot.id)}
              >
                <Card className="overflow-hidden shadow-xl md:shadow-2xl border-0 bg-gradient-to-br from-gray-50 to-white">
                  <CardContent className="p-0">
                    <div className={`grid lg:grid-cols-2 gap-0 min-h-[400px] sm:min-h-[500px] md:min-h-[600px] ${
                      index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                    }`}>
                      {/* Robot Image */}
                      <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                        <div className="relative group overflow-hidden h-[300px] sm:h-[350px] md:h-[400px] lg:h-[600px] transition-all duration-300 hover:shadow-xl lg:hover:shadow-2xl hover:-translate-y-1 lg:hover:-translate-y-2 cursor-pointer"
                             onClick={() => setZoomedRobot(robot)}>
                          <img
                            src={robot.image}
                            alt={robot.name}
                            className={`object-cover h-full w-full transform ${robot.scale} translate-y-${robot.y_position} transition-transform duration-300 group-hover:scale-105`}
                          />
                          {/* Badge positioned absolute */}
                          <Badge className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-tech-blue text-white z-10 text-xs sm:text-sm">
                            {robot.category}
                          </Badge>
                          {/* Zoom indicator */}
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <div className="bg-white/20 backdrop-blur-sm rounded-full p-2 sm:p-3">
                              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Robot Info */}
                      <div className={`${index % 2 === 1 ? 
                        'lg:col-start-1 lg:row-start-1' : ''
                      } p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-center`}>
                        <div className="space-y-4 sm:space-y-5 md:space-y-6">
                          <div>
                            <h3 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4">
                              {robot.name}
                            </h3>
                            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">
                              {robot.description}
                            </p>
                          </div>

                          {/* Technical Specifications */}
                          <div>
                            <h4 className="text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4 flex items-center">
                              <Cpu className="h-4 w-4 sm:h-5 sm:w-5 text-tech-blue mr-2 flex-shrink-0" />
                              <span>Technical Specifications</span>
                            </h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                              {robot.specs.map((spec, specIndex) => (
                                <div key={specIndex} className="flex items-center space-x-2">
                                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-tech-blue rounded-full flex-shrink-0"></div>
                                  <span className="text-xs sm:text-sm lg:text-base text-muted-foreground">{spec}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Achievements */}
                          <div>
                            <h4 className="text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4 flex items-center">
                              <Target className="h-4 w-4 sm:h-5 sm:w-5 text-orange-500 mr-2 flex-shrink-0" />
                              <span>Achievements</span>
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {robot.achievements.map((achievement, achIndex) => (
                                <Badge key={achIndex} className="bg-orange-100 text-orange-800 hover:bg-orange-200 text-xs sm:text-sm">
                                  {achievement}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          {/* Action Button */}
                          <div>
                            <Button 
                              className="w-fit bg-tech-blue hover:bg-tech-blue/90 text-white group text-sm sm:text-base mt-2 sm:mt-4"
                              onClick={() => setZoomedRobot(robot)}
                            >
                              <span className="hidden sm:inline">Learn More About This Robot</span>
                              <span className="sm:hidden">Learn More</span>
                              <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}

            {/* Zoom Modal */}
            {zoomedRobot && (
              <div 
                className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
                onClick={() => setZoomedRobot(null)}
              >
                <button
                  onClick={() => setZoomedRobot(null)}
                  className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70 transition-all duration-200 z-10"
                >
                  <X className="h-6 w-6" />
                </button>
                <img
                  src={zoomedRobot.image}
                  alt={zoomedRobot.name}
                  className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg"
                  onClick={(e) => e.stopPropagation()}
                />
              </div>
            )}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Robots;