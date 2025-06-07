import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'What We Do', id: 'what-we-do' },
    { name: 'Gallery', id: 'gallery', isLink: true },
    { name: 'FAQ', id: 'faq' },
    { name: 'Blog', id: 'blog' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'bg-cream/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between h-16">
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            {/* <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" />
            </div> */}
            <img 
              src="/logo.png" 
              alt="Logo" 
              className="h-64 w-auto object-contain drop-shadow-md py-2" 
            />
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              item.isLink ? (
                <Link
                  key={item.name}
                  to="/gallery"
                  className="text-secondary hover:text-secondary transition-colors duration-300 font-medium"
                >
                  {item.name}
                </Link>
              ) : (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className="text-secondary hover:text-secondary transition-colors duration-300 font-medium"
                >
                  {item.name}
                </button>
              )
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-secondary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.nav
          className={`md:hidden mt-4 ${isMenuOpen ? 'block' : 'hidden'}`}
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: isMenuOpen ? 1 : 0,
            height: isMenuOpen ? 'auto' : 0
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="bg-white rounded-lg shadow-lg p-4 space-y-3">
            {navItems.map((item) => (
              item.isLink ? (
                <Link
                  key={item.name}
                  to="/gallery"
                  className="block text-primary hover:text-secondary transition-colors duration-300 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ) : (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className="block text-primary hover:text-secondary transition-colors duration-300 font-medium py-2"
                >
                  {item.name}
                </button>
              )
            ))}
          </div>
        </motion.nav>
      </div>
    </motion.header>
  );
};

export default Header;