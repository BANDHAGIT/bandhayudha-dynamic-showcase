import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Target, Lightbulb, Trophy, Award, Handshake, Globe } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const History = () => {
  const timeline = [
    {
      year: '2025',
      title: 'Global Support',
      description:
        'Bandhayudha secured its first international sponsor, marking a milestone in our journey toward global collaboration and innovation.',
      icon: <Globe className="h-6 w-6" />,
      media: {
        type: 'image',
        src: '/bandhayudha-photo/Team/Team_2025.JPG',
        alt: 'International sponsorship announcement',
        scale: 1.0 // Scale 100% (ukuran normal)
      }
    },
    {
      year: '2024',
      title: 'Full Autonomy & Sponsorship',
      description:
        'We successfully developed our first fully autonomous robot system, capable of navigating and executing tasks without manual intervention. This year also marked our first official sponsorship — a turning point in our journey toward becoming a competitive and sustainable robotics team.',
      icon: <Lightbulb className="h-6 w-6" />,
      media: {
        type: 'image',
        src: '/bandhayudha-photo/2024-Juara3R.jpeg',
        alt: '2024 ABU Robocon Indonesia Regional 3rd Place',
        scale: 0.9 // Scale 90% dari ukuran normal
      }
    },
    {
      year: '2023',
      title: 'First Victory',
      description:
        'We achieved our first national success — securing 3rd Place and the Best Design Award at the ABU Robocon Indonesia competition.',
      icon: <Award className="h-6 w-6" />,
      media: {
        type: 'image',
        src: '/bandhayudha-photo/Team/Team_2023.png',
        alt: 'Victory celebration and award ceremony',
        scale: 1.0 // Scale 100% (ukuran normal)
      }
    },
    {
      year: '2021',
      title: 'University Recognition',
      description:
        'We developed our first arrow shooting robot, showcasing our commitment to technical innovation and competitive spirit.',
      icon: <Lightbulb className="h-6 w-6" />,
      media: null // Tidak ada foto/video untuk tahun 2021
      // media: {
      //   type: 'video',
      //   src: '/videos/ABURobcon2021_Robot.webm',
      //   alt: 'Arrow shooting robot development',
      //   scale: 0.8 // Scale 50% dari ukuran normal
      // }
    },
    {
      year: '2009',
      title: 'Team Formation',
      description:
        'Bandhayudha was established as the official ABU Robocon team of Diponegoro University. Our journey began with a vision to reach the national stage of robotics excellence.',
      icon: <Users className="h-6 w-6" />,
      media: null // Tidak ada foto/video untuk tahun 2009
    }
  ];


  // Fungsi untuk menentukan ukuran media berdasarkan scale
  const getMediaStyle = (scale = 1.0) => {
    const baseHeight = 192; // h-48 = 192px
    const scaledHeight = baseHeight * scale;
    return {
      height: `${scaledHeight}px`,
      width: scale < 1.0 ? `${scale * 100}%` : '100%',
      margin: scale < 1.0 ? '0 auto' : '0'
    };
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our History</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            From humble beginnings to national recognition <br /> 
            - the Bandhayudha journey -
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              ABU Robocon Champions
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Bandhayudha is the premier ABU Robocon team representing Diponegoro University (UNDIP) in Indonesia. 
              We are a dedicated group of engineering students and researchers committed to advancing the field of 
              competitive robotics through innovation, teamwork, and technical excellence.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              As a robotics team from one of Indonesia's top universities, we strive to elevate Indonesian engineering 
              through our journey in ABU Robocon competitions. Though we have not yet reached the international stage, 
              every step we take brings us closer—while inspiring progress in robotics education and innovation nationwide.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Key milestones in our evolution from a university team to international competitors
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border transform md:-translate-x-0.5"></div>

              {timeline.map((item, index) => (
                <div key={index} className="relative mb-12 last:mb-0">
                  <div className={`flex items-start ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    {/* Timeline Dot */}
                    <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-tech-blue rounded-full transform -translate-x-1/2 z-10 mt-6"></div>
                    
                    {/* Content */}
                    <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                      <Card className="shadow-elevation-medium hover:shadow-elevation-high transition-all duration-300">
                        <CardContent className="p-6">
                          <div className="flex items-center mb-3">
                            <div className="text-tech-blue mr-3">{item.icon}</div>
                            <div className="text-2xl font-bold text-tech-blue">{item.year}</div>
                          </div>
                          <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                          <p className="text-muted-foreground leading-relaxed mb-4">{item.description}</p>
                          
                          {/* Media Section - foto atau video dengan scale */}
                          {item.media && (
                            <div className="mt-4">
                              {item.media.type === 'image' ? (
                                <img 
                                  src={item.media.src} 
                                  alt={item.media.alt}
                                  className="object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                                  style={getMediaStyle(item.media.scale)}
                                  onError={(e) => {
                                    // Jika foto gagal dimuat, sembunyikan elemen
                                    e.target.style.display = 'none';
                                  }}
                                />
                              ) : item.media.type === 'video' ? (
                                <video 
                                  className="object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                                  style={getMediaStyle(item.media.scale)}
                                  controls
                                  preload="metadata"
                                  onError={(e) => {
                                    // Jika video gagal dimuat, sembunyikan elemen
                                    e.target.style.display = 'none';
                                  }}
                                >
                                  <source src={item.media.src} type="video/webm" />
                                  <p className="text-sm text-muted-foreground p-4">
                                    Your browser does not support WebM video format.
                                  </p>
                                </video>
                              ) : null}
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Looking Forward
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              As we continue our journey, Bandhayudha remains committed to excellence in robotics competition, 
              innovation in autonomous systems, and the development of the next generation of Indonesian engineers. 
              Our history is just the beginning of what we aim to achieve in the field of competitive robotics.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We invite you to be part of our continuing story as we work towards new achievements, 
              technological breakthroughs, and international recognition in the world of robotics.
            </p>
          </div>
        </div>
      </section>
      </div>
      <Footer />
    </div>
  );
};

export default History;