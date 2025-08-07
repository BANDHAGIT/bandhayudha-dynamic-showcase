import React from 'react';

const SponsorsSection = () => {
  const sponsors = [
    {
      name: 'JLCPcb',
      logo: '/bandhayudha-photo/JLCPcb_Logo.png',
      description: 'PCB Manufacturing',
      website: 'https://jlcpcb.com'
    },
    {
      name: 'SolidWorks',
      logo: 'https://cdn.worldvectorlogo.com/logos/solidworks-logo-1.svg',
      description: '3D CAD Software',
      website: 'https://www.solidworks.com'
    },
    {
      name: 'Altium',
      logo: '/bandhayudha-photo/Altium_Logo_BLK.png',
      description: 'PCB Design Software',
      website: 'https://www.altium.com'
    },
    {
      name: 'Seeed Studio',
      logo: '/bandhayudha-photo/Seeed_studio_Logo.png',
      description: 'Electronics Platform',
      website: 'https://www.seeedstudio.com'
    },
    {
      name: 'EasyEda',
      logo: '/bandhayudha-photo/EasyEDA_logo.png',
      description: 'Circuit Design',
      website: 'https://easyeda.com'
    },
    {
      name: 'Sick Sensor Intelligence',
      logo: '/bandhayudha-photo/SICK_Logo.png',
      description: 'Sensor Technology',
      website: 'https://www.sick.com'
    },
    {
      name: 'Polymaker',
      logo: '/bandhayudha-photo/Polymaker_Logo.png',
      description: '3D Printing Materials',
      website: 'https://polymaker.com'
    }
  ];

  const handleSponsorClick = (website: string) => {
    window.open(website, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Partners & Sponsors
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Supported by industry-leading companies in robotics, manufacturing, and technology
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-8 items-center">
          {sponsors.map((sponsor, index) => (
            <div
              key={index}
              className="group flex flex-col items-center p-6 bg-card rounded-lg shadow-elevation-low hover:shadow-elevation-medium transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              onClick={() => handleSponsorClick(sponsor.website)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleSponsorClick(sponsor.website);
                }
              }}
              aria-label={`Visit ${sponsor.name} website`}
            >
              <div className="h-12 flex items-center justify-center mb-3 w-full">
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="max-h-full max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  onError={(e) => {
                    // Fallback if logo doesn't load
                    const target = e.currentTarget as HTMLImageElement;
                    const nextElement = target.nextElementSibling as HTMLElement;
                    target.style.display = 'none';
                    if (nextElement) nextElement.style.display = 'block';
                  }}
                />
                <div className="hidden bg-gradient-hero text-white px-3 py-1 rounded text-sm font-semibold">
                  {sponsor.name}
                </div>
              </div>
              <p className="text-xs text-muted-foreground text-center font-medium">
                {sponsor.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;