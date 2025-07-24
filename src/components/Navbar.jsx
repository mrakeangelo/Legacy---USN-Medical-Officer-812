import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMenu, FiX, FiSun, FiMoon } = FiIcons;

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Service', href: '#timeline' },
    { name: 'Story', href: '#medicine-story' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Honors', href: '#qualifications' },
    { name: 'Mentorship', href: '#mentorship' },
    { name: 'Legacy', href: '#time-capsule' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-naval-white/95 dark:bg-deep-navy/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <div className="w-8 h-8 bg-medical-blue rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">⚕</span>
            </div>
            <span className="font-heading text-lg font-bold text-deep-navy dark:text-naval-white">
              CDR Nguyen, MD
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ scale: 1.05 }}
                className="text-charcoal-gray dark:text-naval-white hover:text-medical-blue transition-colors duration-200 font-body font-medium"
              >
                {item.name}
              </motion.a>
            ))}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-medical-blue/10 hover:bg-medical-blue/20 transition-colors duration-200"
            >
              <SafeIcon
                icon={darkMode ? FiSun : FiMoon}
                className="w-5 h-5 text-medical-blue"
              />
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-medical-blue/10 hover:bg-medical-blue/20 transition-colors duration-200"
            >
              <SafeIcon
                icon={darkMode ? FiSun : FiMoon}
                className="w-5 h-5 text-medical-blue"
              />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-charcoal-gray dark:text-naval-white hover:text-medical-blue transition-colors duration-200"
            >
              <SafeIcon icon={isOpen ? FiX : FiMenu} className="w-6 h-6" />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isOpen ? 1 : 0,
          height: isOpen ? 'auto' : 0,
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden bg-naval-white/95 dark:bg-deep-navy/95 backdrop-blur-md border-t border-medical-blue/20"
      >
        <div className="px-4 py-2 space-y-1">
          {navItems.map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              whileHover={{ x: 10 }}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-charcoal-gray dark:text-naval-white hover:text-medical-blue transition-colors duration-200 font-body font-medium"
            >
              {item.name}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;