import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import SponsorsSection from '@/components/SponsorsSection';
import RobotShowcase from '@/components/RobotShowcase';
import NewsHighlights from '@/components/NewsHighlights';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <SponsorsSection />
      <RobotShowcase />
      <NewsHighlights />
      <Footer />
    </div>
  );
};

export default Index;