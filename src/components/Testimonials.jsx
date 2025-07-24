import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiUser, FiHeart, FiStar, FiChevronLeft, FiChevronRight } = FiIcons;

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Martinez, RN',
      role: 'Former Charge Nurse, Naval Medical Center Portsmouth',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b9e61e52?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      message: 'CDR Nguyen had this incredible ability to remain calm under pressure while making everyone around him feel valued and heard. During our busiest shifts, he would check on not just the patients, but the entire medical team. His leadership style made us all better caregivers.',
      type: 'colleague'
    },
    {
      id: 2,
      name: 'Michael Thompson',
      role: 'Former Patient, USS Mercy',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      message: 'I was terrified when I first got sick during deployment. Dr. Nguyen not only treated my condition with expertise, but he took the time to explain everything and made sure I understood my recovery plan. He treated me like family, not just another patient.',
      type: 'patient'
    },
    {
      id: 3,
      name: 'Dr. Jennifer Liu, MD',
      role: 'Former Resident, Internal Medicine',
      avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      message: 'As my attending physician, CDR Nguyen taught me that being a military physician means more than medical expertise—it means being a leader, mentor, and advocate. The lessons I learned from him shaped not just my medical career, but my character as a person.',
      type: 'mentee'
    },
    {
      id: 4,
      name: 'Captain Robert Hayes, MSC',
      role: 'Former Commanding Officer, Naval Medical Center San Diego',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      message: 'Bill Nguyen was the kind of department head every CO dreams of—competent, compassionate, and completely dedicated to both mission and people. His medical department consistently exceeded standards while maintaining the highest level of patient care.',
      type: 'commander'
    },
    {
      id: 5,
      name: 'Maria Santos',
      role: 'Grateful Family Member',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      message: 'When my husband was deployed and I was struggling with our newborn\'s health issues, Dr. Nguyen went above and beyond. He coordinated with specialists, followed up personally, and made sure we had the support we needed. He saved our family during our darkest time.',
      type: 'family'
    },
    {
      id: 6,
      name: 'HM1 David Rodriguez',
      role: 'Senior Hospital Corpsman',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      message: 'Working with CDR Nguyen taught me what true leadership looks like. He never asked us to do anything he wouldn\'t do himself, and he always had our backs. Even years later, I still use the lessons he taught me in my current role.',
      type: 'colleague'
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'patient': return FiHeart;
      case 'colleague': return FiUser;
      case 'mentee': return FiStar;
      case 'commander': return FiStar;
      case 'family': return FiHeart;
      default: return FiUser;
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'patient': return 'text-gold-oak';
      case 'colleague': return 'text-medical-blue';
      case 'mentee': return 'text-deep-navy';
      case 'commander': return 'text-gold-oak';
      case 'family': return 'text-medical-blue';
      default: return 'text-medical-blue';
    }
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-medical-blue/5 to-deep-navy/5 dark:from-medical-blue/10 dark:to-deep-navy/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-deep-navy dark:text-naval-white mb-4">
            Patient Stories & Testimonials
          </h2>
          <p className="text-lg text-charcoal-gray dark:text-naval-white/80 font-body max-w-2xl mx-auto">
            Words of gratitude from those whose lives were touched by compassionate care and dedicated service
          </p>
        </motion.div>

        {/* Main Testimonial Display */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-charcoal-gray rounded-2xl p-8 md:p-12 shadow-xl"
            >
              <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
                {/* Avatar */}
                <div className="flex-shrink-0">
                  <img
                    src={testimonials[currentTestimonial].avatar}
                    alt={testimonials[currentTestimonial].name}
                    className="w-20 h-20 rounded-full object-cover shadow-lg"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
                    <SafeIcon 
                      icon={getTypeIcon(testimonials[currentTestimonial].type)} 
                      className={`w-5 h-5 ${getTypeColor(testimonials[currentTestimonial].type)}`} 
                    />
                    <span className="text-sm font-body font-medium text-medical-blue uppercase tracking-wide">
                      {testimonials[currentTestimonial].type}
                    </span>
                  </div>
                  
                  <blockquote className="text-lg md:text-xl text-charcoal-gray dark:text-naval-white/90 font-body italic leading-relaxed mb-6">
                    "{testimonials[currentTestimonial].message}"
                  </blockquote>
                  
                  <div>
                    <h4 className="font-heading text-xl font-bold text-deep-navy dark:text-naval-white">
                      {testimonials[currentTestimonial].name}
                    </h4>
                    <p className="text-medical-blue font-body font-medium">
                      {testimonials[currentTestimonial].role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-center space-x-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevTestimonial}
              className="w-12 h-12 bg-medical-blue hover:bg-medical-blue/80 rounded-full flex items-center justify-center shadow-lg transition-colors duration-200"
            >
              <SafeIcon icon={FiChevronLeft} className="w-6 h-6 text-white" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextTestimonial}
              className="w-12 h-12 bg-medical-blue hover:bg-medical-blue/80 rounded-full flex items-center justify-center shadow-lg transition-colors duration-200"
            >
              <SafeIcon icon={FiChevronRight} className="w-6 h-6 text-white" />
            </motion.button>
          </div>

          {/* Testimonial Indicators */}
          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentTestimonial
                    ? 'bg-medical-blue scale-125'
                    : 'bg-medical-blue/30 hover:bg-medical-blue/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Testimonial Grid Preview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white dark:bg-charcoal-gray rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => setCurrentTestimonial(index)}
            >
              <div className="flex items-center space-x-3 mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-heading text-lg font-bold text-deep-navy dark:text-naval-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-medical-blue font-body">
                    {testimonial.role}
                  </p>
                </div>
              </div>
              <p className="text-charcoal-gray dark:text-naval-white/80 font-body text-sm leading-relaxed line-clamp-3">
                "{testimonial.message}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;