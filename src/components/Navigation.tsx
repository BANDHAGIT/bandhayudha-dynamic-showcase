import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, FlaskConical, Book, Users, UserCheck, ChevronDown } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isTeamDropdownOpen, setIsTeamDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const teamDropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
      if (teamDropdownRef.current && !teamDropdownRef.current.contains(event.target as Node)) {
        setIsTeamDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { name: 'About', href: '/about' },
    { name: 'Robots', href: '/robots' },
    { name: 'Division', href: '/division' },
    { name: 'History', href: '/history' },
    { name: 'Members', href: '/members' },
  ];

  const rightLinks = [
    { name: 'Support', href: '/support' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'Login', href: '/login' },
  ];

  const dropdownItems = [
    {
      name: 'Bandhalab',
      icon: FlaskConical,
      href: '#', // Replace with actual Bandhalab URL
      description: 'Laboratory Resources'
    },
    {
      name: 'Bandhadrive',
      icon: Book,
      href: '#', // Replace with actual Bandhadrive URL
      description: 'Document Repository'
    }
  ];

  // Team dropdown items
  const teamDropdownItems = [
    {
      name: 'Division',
      icon: Users,
      href: '/division',
      description: 'Our specialized divisions',
      image: '/bandhayudha-photo/team-divisions.jpg'
    },
    {
      name: 'Members',
      icon: UserCheck,
      href: '/members',
      description: 'Meet our team members',
      image: '/bandhayudha-photo/team-members.jpg'
    }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-elevation-medium'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between relative">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img
            src="/bandhayudha-photo/logo bandha.png"
            alt="Bandhayudha"
            className={`h-8 w-auto transition-all duration-300 ${
              location.pathname !== '/' || isScrolled ? 'invert' : ''
            }`}
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <div key={link.name} className="relative">
              {(link.name === 'Division' || link.name === 'Members') ? (
                // Team dropdown - hanya tampil untuk Division, skip untuk Members
                link.name === 'Division' ? (
                  <div 
                    ref={teamDropdownRef}
                    className="relative"
                    onMouseEnter={() => setIsTeamDropdownOpen(true)}
                    onMouseLeave={() => setIsTeamDropdownOpen(false)}
                  >
                    <button
                      className="text-foreground hover:text-tech-blue transition-colors duration-200 font-medium flex items-center space-x-1"
                    >
                      <span>Team</span>
                      <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${
                        isTeamDropdownOpen ? 'rotate-180' : ''
                      }`} />
                    </button>

                    {/* Team Dropdown Menu */}
                    {isTeamDropdownOpen && (
                      <>
                        {/* Specific bridge area only around Team dropdown */}
                        <div 
                          className="fixed top-15 left-1/2 transform -translate-x-1/2 w-[650px] h-80 z-30"
                          onMouseEnter={() => setIsTeamDropdownOpen(true)}
                          onMouseLeave={() => setIsTeamDropdownOpen(false)}
                        ></div>
                        
                        <div 
                          className="fixed top-16 left-1/2 transform -translate-x-1/2 w-[600px] bg-background/95 backdrop-blur-md shadow-lg border border-border z-40"
                          onMouseEnter={() => setIsTeamDropdownOpen(true)}
                          onMouseLeave={() => setIsTeamDropdownOpen(false)}
                        >
                        
                        <div className="flex">
                          {/* Left Column - Menu Items */}
                          <div className="w-[360px] p-6 space-y-4">
                            {teamDropdownItems.map((item) => (
                              <Link
                                key={item.name}
                                to={item.href}
                                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors duration-200 group"
                                onClick={() => setIsTeamDropdownOpen(false)}
                              >
                                <div className="flex-shrink-0 w-10 h-10 bg-tech-blue/10 flex items-center justify-center group-hover:bg-tech-blue/20 transition-colors duration-200">
                                  <item.icon className="h-5 w-5 text-tech-blue group-hover:text-accent-foreground transition-colors duration-200" />
                                </div>
                                <div className="flex flex-col">
                                  <span className="font-semibold text-foreground group-hover:text-accent-foreground transition-colors duration-200">{item.name}</span>
                                  <span className="text-sm text-muted-foreground group-hover:text-accent-foreground/70 transition-colors duration-200">{item.description}</span>
                                </div>
                              </Link>
                            ))}
                          </div>
                          
                          {/* Right Column - Large Image */}
                          <div className="w-[240px] relative overflow-hidden">
                            <img
                              src="/bandhayudha-photo/SAMWA.png"
                              alt="Bandhayudha Team"
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='240' height='200' viewBox='0 0 240 200'%3E%3Crect width='240' height='200' fill='%23f3f4f6'/%3E%3Ctext x='120' y='100' text-anchor='middle' dy='0.35em' font-family='system-ui' font-size='16' fill='%236b7280'%3ETeam Photo%3C/text%3E%3C/svg%3E`;
                              }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                          </div>
                        </div>
                      </div>
                      </>
                    )}
                  </div>
                ) : null // Members akan di-skip
              ) : (
                // Link biasa untuk menu lainnya (About, Robots, History)
                <Link
                  to={link.href}
                  className="text-foreground hover:text-tech-blue transition-colors duration-200 font-medium"
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Right Side - Desktop and Mobile */}
        <div className="flex items-center space-x-4">
          {/* Desktop Right Side Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            {rightLinks.map((link) => (
              <Button
                key={link.name}
                asChild
                variant={link.name === 'Contact Us' ? 'default' : 'outline'}
                className="font-medium"
              >
                <Link to={link.href}>{link.name}</Link>
              </Button>
            ))}
          </div>
          
          {/* Desktop Dropdown Menu - Always show hamburger button */}
          <div className="hidden lg:block relative" ref={dropdownRef}>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="hover:bg-accent"
            >
              <Menu className="h-5 w-5" />
            </Button>

            {/* Dropdown Content - FIXED */}
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-background/95 backdrop-blur-md rounded-lg shadow-lg border border-border animate-in slide-in-from-top-2 duration-200 z-50">
                <div className="py-2">
                  {dropdownItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsDropdownOpen(false)}
                      className="group flex items-center px-4 py-3 text-sm text-foreground hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
                    >
                      <item.icon className="h-5 w-5 mr-3 text-tech-blue group-hover:text-accent-foreground transition-colors duration-200" />
                      <div className="flex flex-col">
                        <span className="font-medium">{item.name}</span>
                        <span className="text-xs text-muted-foreground group-hover:text-accent-foreground/70">{item.description}</span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-background/95 backdrop-blur-md border-t border-border">
          <div className="container mx-auto px-4 py-4 space-y-4">
            {navLinks.map((link) => (
              <div key={link.name}>
                {(link.name === 'Division' || link.name === 'Members') ? (
                  // Team section di mobile - hanya tampil untuk Division
                  link.name === 'Division' ? (
                    <div className="space-y-2">
                      <div className="text-foreground font-medium py-2 border-b border-border">
                        Team
                      </div>
                      {teamDropdownItems.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="group flex items-center w-full p-3 text-sm text-foreground hover:bg-accent hover:text-accent-foreground transition-colors duration-200 rounded-md border border-border ml-4"
                        >
                        <item.icon className="h-5 w-5 mr-3 text-tech-blue group-hover:text-accent-foreground transition-colors duration-200" />
                          <div className="flex flex-col items-start">
                            <span className="font-medium">{item.name}</span>
                            <span className="text-xs text-muted-foreground group-hover:text-accent-foreground/70">{item.description}</span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  ) : null // Members di-skip
                ) : (
                  // Link biasa untuk menu lainnya
                  <Link
                    to={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-foreground hover:text-tech-blue transition-colors duration-200 font-medium py-2"
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-4 border-t border-border space-y-2">
              {/* Support and Contact Us buttons */}
              {rightLinks.slice(0, -1).map((link) => (
                <Button
                  key={link.name}
                  asChild
                  variant={link.name === 'Contact Us' ? 'default' : 'outline'}
                  className="w-full font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Link to={link.href}>{link.name}</Link>
                </Button>
              ))}
              
              {/* Login Button */}
              <Button
                asChild
                variant="outline"
                className="w-full font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Link to="/login">Login</Link>
              </Button>

              {/* Bandhalab and Bandhadrive - FIXED */}
              <div className="pt-2 space-y-2">
                {dropdownItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="group flex items-center w-full p-3 text-sm text-foreground hover:bg-accent hover:text-accent-foreground transition-colors duration-200 rounded-md border border-border"
                  >
                    <item.icon className="h-5 w-5 mr-3 text-tech-blue group-hover:text-accent-foreground transition-colors duration-200" />
                    <div className="flex flex-col items-start">
                      <span className="font-medium">{item.name}</span>
                      <span className="text-xs text-muted-foreground group-hover:text-accent-foreground/70">{item.description}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;