import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, Github, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    'Quick Links': [
      { name: 'About', href: '/about' },
      { name: 'Our Robots', href: '/#robot' },
      { name: 'History', href: '/history' },
      { name: 'Team Members', href: '/members' }
    ],
    'Resources': [
      { name: 'Support', href: '/support' },
      { name: 'Divisions', href: '/division' },
      { name: 'Contact Us', href: '/contact' },
      { name: 'Documentation', href: '#' }
    ]
  };

  const contactInfo = [
    {
      name: 'Aufa Abdillah',
      role: 'Project Manager',
      phone: '085942167648'
    },
    {
      name: 'Mega Adinda',
      role: 'Managerial',
      phone: '0895811430123'
    },
    {
      name: 'Helmi Yusuf',
      role: 'Team Leader',
      phone: '082324104226'
    }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <img
                src="/bandhayudha-photo/logo bandha.png"
                alt="Bandhayudha"
                className="h-8 w-auto"
              />
            </div>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              ABU Robocon team from Diponegoro University, pushing the boundaries of robotics innovation through cutting-edge autonomous systems.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/BANDHAGIT" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/company/undip-robotics-development-center/?originalSubdomain=id" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/bandhayudha.undip/" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-lg font-bold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <div className="space-y-4">
              {/* Location */}
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary-foreground/60 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-primary-foreground/80">
                  <p className="font-semibold mb-1">Location</p>
                  <p>Student Center of Diponegoro University</p>
                  <p>Jl. Prof. Eko Budihardjo, Tembalang</p>
                  <p>Kec. Tembalang, Kota Semarang</p>
                  <p>Jawa Tengah 50275</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-primary-foreground/60 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-primary-foreground/80">
                  <p className="font-semibold mb-1">Email</p>
                  <a 
                    href="mailto:bandhayudha.undip@gmail.com"
                    className="hover:text-primary-foreground transition-colors"
                  >
                    bandhayudha.undip@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone Numbers */}
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-primary-foreground/60 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-primary-foreground/80">
                  <p className="font-semibold mb-2">Contact Numbers</p>
                  <div className="space-y-1">
                    {contactInfo.map((contact, index) => (
                      <div key={index}>
                        <a 
                          href={`tel:${contact.phone}`}
                          className="hover:text-primary-foreground transition-colors block"
                        >
                          {contact.phone}
                        </a>
                        <p className="text-xs text-primary-foreground/60">
                          {contact.role}, {contact.name}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-primary-foreground/60">
              © 2025 Bandhayudha Robotics Team, Diponegoro University. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;