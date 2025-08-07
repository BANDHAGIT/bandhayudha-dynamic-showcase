import React from 'react';
import { Button } from '@/components/ui/button';
import { Play, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/hero-video.webm" type="video/webm" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 px-6 md:px-16 max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight text-left">
          From Campus Lab <br />
          to Podium.
        </h1>
        <h2 className="text-2xl md:text-4xl text-white font-medium mb-4 text-left">
          Bandhayudha ABURobocon
        </h2>
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl text-left">
          Crafting every gear, circuit, and algorithms toward <br />
          a single championship ambition.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            size="lg"
            className="bg-tech-blue hover:bg-tech-blue-dark text-white px-8 py-4 text-lg font-semibold transition-all duration-300 shadow-elevation-medium hover:shadow-elevation-high"
          >
            Explore Our Robots
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>

          <Button
            variant="outline"
            size="lg"
            asChild
            className="border-white text-white hover:bg-white hover:text-primary bg-transparent px-8 py-4 text-lg font-semibold transition-all duration-300"
          >
            <a
              href="https://www.youtube.com/@bandhayudhaundip"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center"
            >
              <Play className="mr-2 h-5 w-5" />
              Robot In Action
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
