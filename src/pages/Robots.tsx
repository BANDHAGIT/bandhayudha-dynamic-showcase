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
  const location = useLocation();

  const robots = [
    {
      id: 1,
      name: 'SLAMET',
      category: 'ABURobocon 2025',
      image: '/bandhayudha-photo/Robots/R1_25.JPG',
      scale: 'scale-100',
      y_position: '6',
      description: 'SLAMET is a shooter robot designed for the ABU Robocon 2025 competition. It features a jetson orin nano for advanced communication protocol, Triple communication fallback mechanism, with unique dribbling mechanism.',
      specs: [
        'NVIDIA Jetson Orin Nano',
        'STM32H7 for Control',
        'Dual Band WiFi Communication',
        'Bluetooth Communication',
      ],
      achievements: [
        'Regional 3rd Place',
      ]
    },
    {
      id: 2,
      name: 'ULO',
      category: 'ABURobocon 2024',
      image: '/bandhayudha-photo/Robots/R2_24.png',
      scale: 'scale-110',
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
      scale: 'scale-110',
      y_position: '6',
      description: 'NOGO is an advanced semi-autonomous robot designed for the ABU Robocon 2024 competition. It features intelligent navigation and precision manipulation capabilities for complex field challenges.',
      specs: [
        'STM32H7 for Control',
        'Advance Navigation System',
        'Omnidirectional Movement',
        'Precision Gripper System'
      ],
      achievements: [
        'Regional 3rd Place',
      ]
    }
  ];

  // Innovation Highlights Data
  const innovationHighlights = [
    {
      id: 1,
      icon: Gauge,
      title: 'Swerve Drive',
      description: 'Enhanced maneuverability with 360-degree movement',
      bgColor: 'bg-tech-blue/10',
      iconColor: 'text-tech-blue'
    },
    {
      id: 2,
      icon: Network,
      title: 'Robust Communication',
      description: 'Reliable data exchange with low latency',
      bgColor: 'bg-robot-orange/10',
      iconColor: 'text-robot-orange'
    },
    {
      id: 3,
      icon: Cpu,
      title: 'Real-time Operation System',
      description: 'Advanced real-time processing for complex tasks',
      bgColor: 'bg-success-green/10',
      iconColor: 'text-success-green'
    }
  ];

  // Scroll to specific robot if hash is present
  useEffect(() => {
    if (location.hash) {
      const robotId = location.hash.replace('#robot-', '');
      const element = document.getElementById(`robot-${robotId}`);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Robots</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              Meet our championship-winning autonomous robots, engineered for excellence in competitive robotics
            </p>
          </div>
        </section>

        {/* Main Robots Section - exactly like the old RobotSection */}
        <section id="robot" className="py-20 bg-background">
          <div className="container mx-auto px-4">
            {/* <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
                Our Robots
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Meet our championship-winning autonomous robots, engineered for excellence in competitive robotics
              </p>
            </div> */}

            <div className="space-y-20">
              {robots.map((robot, index) => (
                <div 
                  key={robot.id} 
                  id={`robot-${robot.id}`}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
                >
                  {/* Robot Image */}
                  <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="relative group overflow-hidden rounded-2xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer"
                         onClick={() => setZoomedRobot(robot)}>
                      <img
                        src={robot.image}
                        alt={robot.name}
                        className={`object-cover h-full w-full transform ${robot.scale} translate-y-${robot.y_position} transition-transform duration-300 group-hover:scale-105`}
                      />
                      {/* Badge positioned absolute */}
                      <Badge className="absolute top-4 left-4 bg-tech-blue text-white z-10">
                        {robot.category}
                      </Badge>
                      {/* Zoom indicator */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Robot Info */}
                  <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                          {robot.name}
                        </h3>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                          {robot.description}
                        </p>
                      </div>

                      {/* Technical Specifications */}
                      <div>
                        <h4 className="text-xl font-bold text-foreground mb-4 flex items-center">
                          <Cpu className="h-5 w-5 text-tech-blue mr-2" />
                          Technical Specifications
                        </h4>
                        <div className="grid grid-cols-2 gap-3">
                          {robot.specs.map((spec, specIndex) => (
                            <div key={specIndex} className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-tech-blue rounded-full"></div>
                              <span className="text-muted-foreground">{spec}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Achievements */}
                      <div>
                        <h4 className="text-xl font-bold text-foreground mb-4 flex items-center">
                          <Target className="h-5 w-5 text-robot-orange mr-2" />
                          Achievements
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {robot.achievements.map((achievement, achievementIndex) => (
                            <Badge key={achievementIndex} variant="outline" className="border-robot-orange text-robot-orange">
                              {achievement}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="pt-4">
                        <Button className="bg-tech-blue hover:bg-tech-blue-dark text-white group">
                          Learn More About This Robot
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Zoom Modal */}
            {zoomedRobot && (
              <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-8"
                   onClick={() => setZoomedRobot(null)}>
                <div className="relative max-w-3xl max-h-[70vh] w-auto">
                  {/* Close button */}
                  <button
                    onClick={() => setZoomedRobot(null)}
                    className="absolute -top-10 -right-2 text-white hover:text-gray-300 transition-colors z-10 bg-black/50 rounded-full p-2"
                  >
                    <X className="w-6 h-6" />
                  </button>
                  
                  {/* Zoomed image */}
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white">
                    <img
                      src={zoomedRobot.image}
                      alt={zoomedRobot.name}
                      className="w-auto h-auto max-w-full max-h-[70vh] object-contain"
                      onClick={(e) => e.stopPropagation()}
                    />
                    
                    {/* Robot info overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4">
                      <Badge className="bg-tech-blue text-white mb-2 text-sm">
                        {zoomedRobot.category}
                      </Badge>
                      <h3 className="text-xl font-bold text-white mb-1">
                        {zoomedRobot.name}
                      </h3>
                      <p className="text-white/90 text-sm">
                        Click to view details
                      </p>
                    </div>
                  </div>
                </div>
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