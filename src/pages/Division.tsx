import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Wrench, Zap, Code, Users, Target, Lightbulb } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Division = () => {
  const divisions = [
    {
      name: 'Mechanical Division',
      icon: <Wrench className="h-8 w-8" />,
      color: 'bg-robot-orange',
      iconColor: 'text-robot-orange',
      description: 'Responsible for the physical design, manufacturing, and mechanical systems of our robots. From CAD modeling to precision machining, this division brings our robotic concepts to life.',
      responsibilities: [
        'Robot Chassis Design',
        'Mechanism Development',
        '3D Modeling & CAD',
        'Manufacturing & Assembly',
        'Materials Selection',
        'Structural Analysis'
      ],
      skills: [
        'SolidWorks',
        'CNC Machining',
        '3D Printing',
        'Welding',
        'Material Science'
      ],
      projects: [
        'Jumping Robot Mechanism',
        'Omnidirectional Drive System',
        'Dual BLDC Shooter Mechanism',
        'Lightweight Frame Design'
      ],
      memberCount: 10
    },
    {
      name: 'Electronics Division',
      icon: <Zap className="h-8 w-8" />,
      color: 'bg-tech-blue',
      iconColor: 'text-tech-blue',
      description: 'Develops and integrates all electronic systems, from power management to sensor interfaces. This division ensures our robots have the electrical intelligence to perform complex tasks.',
      responsibilities: [
        'PCB Design & Layout',
        'Circuit Development',
        'Sensor Integration',
        'Power System Design',
        'Motor Control',
        'Wiring & Assembly'
      ],
      skills: [
        'PCB Designer',
        'Circuit Analysis',
        'Embedded Systems',
        'Signal Processing',
        'Power Electronics'
      ],
      projects: [
        'Main Control Board',
        'Power Distribution Board',
        'Motor Driver Systems',
        'Wireless Communication'
      ],
      memberCount: 9
    },
    {
      name: 'Programming Division',
      icon: <Code className="h-8 w-8" />,
      color: 'bg-success-green',
      iconColor: 'text-success-green',
      description: 'Creates the intelligent software that controls our robots. From low-level firmware to high-level AI algorithms, this division gives our robots their decision-making capabilities.',
      responsibilities: [
        'Firmware Development',
        'Control Algorithms',
        'Computer Vision',
        'Path Planning',
        'AI Implementation',
        'System Integration'
      ],
      skills: [
        'C/C++',
        'Python',
        'STM32 Programming',
        'ROS',
        'OpenCV',
        'Machine Learning',
        'Real-time Systems',
        'Web Development'
      ],
      projects: [
        'Autonomous Navigation',
        'Object Recognition',
        'Motion Control',
        'Competition Strategy AI'
      ],
      memberCount: 11
    },
    {
      name: 'Management Division',
      icon: <Users className="h-8 w-8" />,
      color: 'bg-accent',
      iconColor: 'text-accent-foreground',
      description: 'Coordinates all team activities, manages resources, and ensures effective communication. This division keeps the entire team organized and focused on our competition goals.',
      responsibilities: [
        'Project Coordination',
        'Resource Management',
        'Documentation',
        'Timeline Planning',
        'External Relations',
        'Event Organization'
      ],
      skills: [
        'Project Management',
        'Communication',
        'Documentation',
        'Leadership',
        'Strategic Planning',
        'Event Management'
      ],
      projects: [
        'Competition Preparation',
        'Sponsor Relations',
        'Team Documentation',
        'Public Relations'
      ],
      memberCount: 6
    }
  ];

  const collaborationAreas = [
    {
      title: 'Cross-Division Projects',
      description: 'Regular collaboration between divisions on integrated systems',
      icon: <Target className="h-6 w-6 text-tech-blue" />
    },
    {
      title: 'Knowledge Sharing',
      description: 'Weekly technical presentations and skill-sharing sessions',
      icon: <Lightbulb className="h-6 w-6 text-robot-orange" />
    },
    {
      title: 'Joint Problem Solving',
      description: 'Collaborative approach to complex engineering challenges',
      icon: <Users className="h-6 w-6 text-success-green" />
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Divisions</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Specialized teams working in harmony to create world-class robotics systems
          </p>
        </div>
      </section>

      {/* Divisions Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Team Structure
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Each division brings specialized expertise to our collective mission of robotics excellence
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {divisions.map((division, index) => (
              <Card key={index} className="shadow-elevation-medium hover:shadow-elevation-high transition-all duration-300 hover:-translate-y-2">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`${division.color} p-3 rounded-lg`}>
                      <div className="text-white">{division.icon}</div>
                    </div>
                    <Badge variant="outline" className="font-semibold">
                      {division.memberCount} Members
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl font-bold text-foreground">
                    {division.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {division.description}
                  </p>

                  {/* Responsibilities */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Key Responsibilities</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {division.responsibilities.map((responsibility, respIndex) => (
                        <div key={respIndex} className="flex items-start space-x-2">
                          <div className={`w-2 h-2 ${division.color} rounded-full mt-2 flex-shrink-0`}></div>
                          <span className="text-sm text-muted-foreground">{responsibility}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Skills */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Technical Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {division.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Recent Projects */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Recent Projects</h4>
                    <ul className="space-y-1">
                      {division.projects.map((project, projectIndex) => (
                        <li key={projectIndex} className="text-sm text-muted-foreground flex items-center space-x-2">
                          <div className={`w-1.5 h-1.5 ${division.color} rounded-full`}></div>
                          <span>{project}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Collaborative Excellence
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our divisions work together seamlessly, combining their expertise to achieve breakthrough innovations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {collaborationAreas.map((area, index) => (
              <Card key={index} className="text-center p-6 shadow-elevation-medium hover:shadow-elevation-high transition-all duration-300">
                <CardContent className="p-0">
                  <div className="mb-4 flex justify-center">{area.icon}</div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{area.title}</h3>
                  <p className="text-muted-foreground">{area.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Statistics */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Team by Numbers
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-tech-blue mb-2">34</div>
              <p className="text-lg font-semibold text-foreground mb-1">Total Members</p>
              <p className="text-muted-foreground">Across all divisions</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-robot-orange mb-2">4</div>
              <p className="text-lg font-semibold text-foreground mb-1">Specialized Divisions</p>
              <p className="text-muted-foreground">Expert teams</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-success-green mb-2">50+</div>
              <p className="text-lg font-semibold text-foreground mb-1">Projects Completed</p>
              <p className="text-muted-foreground">Technical achievements</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">100%</div>
              <p className="text-lg font-semibold text-foreground mb-1">Collaboration</p>
              <p className="text-muted-foreground">Cross-division teamwork</p>
            </div>
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Join a Division
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Find your passion and contribute to the future of robotics. Each division offers unique 
            opportunities for growth and innovation.
          </p>
          <p className="text-white/80">
            Find us at <a href="https://www.instagram.com/bandhayudha.undip/" className="underline hover:text-white">
              bandhayudha.undip
            </a> to learn about current openings
          </p>
        </div>
      </section>
      </div>
      <Footer />
    </div>
  );
};

export default Division;