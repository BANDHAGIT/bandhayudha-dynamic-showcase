import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, FlaskConical, Book } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
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
            <Link
              key={link.name}
              to={link.href}
              className="text-foreground hover:text-tech-blue transition-colors duration-200 font-medium"
            >
              {link.name}
            </Link>
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

            {/* Dropdown Content */}
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
                      className="flex items-center px-4 py-3 text-sm text-foreground hover:bg-accent transition-colors duration-200"
                    >
                      <item.icon className="h-5 w-5 mr-3 text-tech-blue" />
                      <div className="flex flex-col">
                        <span className="font-medium">{item.name}</span>
                        <span className="text-xs text-muted-foreground">{item.description}</span>
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
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-foreground hover:text-tech-blue transition-colors duration-200 font-medium py-2"
              >
                {link.name}
              </Link>
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

              {/* Bandhalab and Bandhadrive */}
              <div className="pt-2 space-y-2">
                {dropdownItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center w-full p-3 text-sm text-foreground hover:bg-accent transition-colors duration-200 rounded-md border border-border"
                  >
                    <item.icon className="h-5 w-5 mr-3 text-tech-blue" />
                    <div className="flex flex-col items-start">
                      <span className="font-medium">{item.name}</span>
                      <span className="text-xs text-muted-foreground">{item.description}</span>
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