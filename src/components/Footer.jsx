import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiHeart, FiAnchor, FiStar } = FiIcons;

const Footer = () => {
  const [currentQuote, setCurrentQuote] = useState(0);

  const quotes = [
    "Medicine with purpose. Leadership with heart.",
    "He wore the white coat with gold stripes — and never forgot the oath.",
    "Service above self. Healing above all.",
    "A physician's greatest legacy lives in the lives they touch.",
    "Honor, courage, commitment — the foundation of naval medicine."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [quotes.length]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-deep-navy text-naval-white">
      {/* Quote Carousel */}
      <div className="border-b border-naval-white/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <motion.div
            key={currentQuote}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <blockquote className="text-lg md:text-xl font-body italic text-naval-white/90 mb-4">
              "{quotes[currentQuote]}"
            </blockquote>
            <div className="flex justify-center space-x-2">
              {quotes.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentQuote(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentQuote ? 'bg-gold-oak' : 'bg-naval-white/30'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Memorial Section */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
              <div className="w-10 h-10 bg-gold-oak/20 rounded-full flex items-center justify-center">
                <span className="text-gold-oak text-lg">⚕</span>
              </div>
              <h3 className="font-heading text-xl font-bold">
                CDR William A. Nguyen, MD
              </h3>
            </div>
            <p className="text-naval-white/80 font-body leading-relaxed">
              A life dedicated to healing, service, and the betterment of naval medicine. 
              His legacy lives on in every life he touched and every physician he mentored.
            </p>
          </div>

          {/* Service Stats */}
          <div className="text-center">
            <h4 className="font-heading text-lg font-bold mb-4">Years of Service</h4>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-2xl font-bold text-gold-oak">23</div>
                <div className="text-sm text-naval-white/80">Years in Navy</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gold-oak">150+</div>
                <div className="text-sm text-naval-white/80">Lives Mentored</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gold-oak">5</div>
                <div className="text-sm text-naval-white/80">Deployments</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gold-oak">∞</div>
                <div className="text-sm text-naval-white/80">Lives Touched</div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="text-center md:text-right">
            <h4 className="font-heading text-lg font-bold mb-4">Explore His Legacy</h4>
            <div className="space-y-2">
              <a href="#timeline" className="block text-naval-white/80 hover:text-gold-oak transition-colors duration-200 font-body">
                Service Timeline
              </a>
              <a href="#medicine-story" className="block text-naval-white/80 hover:text-gold-oak transition-colors duration-200 font-body">
                His Story
              </a>
              <a href="#testimonials" className="block text-naval-white/80 hover:text-gold-oak transition-colors duration-200 font-body">
                Testimonials
              </a>
              <a href="#mentorship" className="block text-naval-white/80 hover:text-gold-oak transition-colors duration-200 font-body">
                Mentorship Impact
              </a>
              <a href="#time-capsule" className="block text-naval-white/80 hover:text-gold-oak transition-colors duration-200 font-body">
                Time Capsule
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-naval-white/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Oak Leaf Watermark */}
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gold-oak/20 rounded-full flex items-center justify-center">
                <SafeIcon icon={FiStar} className="w-4 h-4 text-gold-oak" />
              </div>
              <span className="text-naval-white/60 font-body text-sm">
                Medical Corps • U.S. Navy
              </span>
            </div>

            {/* Memorial Message */}
            <div className="text-center md:text-right">
              <p className="text-naval-white/80 font-body text-sm mb-2">
                "A digital white coat folded into honor"
              </p>
              <div className="flex items-center justify-center md:justify-end space-x-2">
                <SafeIcon icon={FiHeart} className="w-4 h-4 text-gold-oak" />
                <span className="text-naval-white/60 font-body text-sm">
                  Created with love and remembrance
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-medical-blue hover:bg-medical-blue/90 rounded-full flex items-center justify-center shadow-lg transition-colors duration-200 z-40"
      >
        <SafeIcon icon={FiAnchor} className="w-6 h-6 text-white" />
      </motion.button>
    </footer>
  );
};

export default Footer;