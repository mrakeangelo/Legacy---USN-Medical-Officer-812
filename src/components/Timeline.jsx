import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMapPin, FiAward, FiBook, FiHeart } = FiIcons;

const Timeline = () => {
  const timelineEvents = [
    {
      year: '1995',
      title: 'Bachelor of Science - Biology',
      description: 'University of California, San Diego',
      icon: FiBook,
      type: 'education'
    },
    {
      year: '1999',
      title: 'Doctor of Medicine',
      description: 'Uniformed Services University of the Health Sciences',
      icon: FiBook,
      type: 'education'
    },
    {
      year: '2000',
      title: 'Commissioned as Naval Officer',
      description: 'Ensign, Medical Corps - Naval Medical Center San Diego',
      icon: FiAward,
      type: 'military'
    },
    {
      year: '2000-2003',
      title: 'Internal Medicine Residency',
      description: 'Naval Medical Center Portsmouth',
      icon: FiHeart,
      type: 'medical'
    },
    {
      year: '2003-2006',
      title: 'Staff Physician',
      description: 'USS Mercy (T-AH-19) - Humanitarian Deployments',
      icon: FiMapPin,
      type: 'deployment'
    },
    {
      year: '2006-2009',
      title: 'Department Head',
      description: 'Naval Hospital Camp Pendleton - Internal Medicine',
      icon: FiAward,
      type: 'leadership'
    },
    {
      year: '2009-2012',
      title: 'Combat Deployment',
      description: 'Afghanistan - Forward Operating Base Medical Officer',
      icon: FiMapPin,
      type: 'deployment'
    },
    {
      year: '2012-2015',
      title: 'Residency Training Officer',
      description: 'Naval Medical Center San Diego',
      icon: FiBook,
      type: 'education'
    },
    {
      year: '2015-2018',
      title: 'Commanding Officer',
      description: 'Naval Branch Health Clinic Twentynine Palms',
      icon: FiAward,
      type: 'command'
    },
    {
      year: '2018-2021',
      title: 'Chief of Internal Medicine',
      description: 'Naval Medical Center Portsmouth',
      icon: FiHeart,
      type: 'medical'
    }
  ];

  const getTypeColor = (type) => {
    switch (type) {
      case 'education': return 'bg-medical-blue';
      case 'military': return 'bg-deep-navy';
      case 'medical': return 'bg-gold-oak';
      case 'deployment': return 'bg-charcoal-gray';
      case 'leadership': return 'bg-gold-oak';
      case 'command': return 'bg-deep-navy';
      default: return 'bg-medical-blue';
    }
  };

  return (
    <section id="timeline" className="py-20 bg-naval-white dark:bg-deep-navy transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-deep-navy dark:text-naval-white mb-4">
            Career & Service Timeline
          </h2>
          <p className="text-lg text-charcoal-gray dark:text-naval-white/80 font-body max-w-2xl mx-auto">
            A journey of dedication, service, and healing spanning over two decades in the U.S. Navy Medical Corps
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-medical-blue/30 transform md:-translate-x-1/2" />

          {/* Timeline Events */}
          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-row`}
              >
                {/* Timeline Point */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                  <div className={`w-12 h-12 rounded-full ${getTypeColor(event.type)} flex items-center justify-center shadow-lg`}>
                    <SafeIcon icon={event.icon} className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className={`w-full md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'
                } pl-20 md:pl-0`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-white dark:bg-charcoal-gray rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-center space-x-3 mb-3">
                      <span className="text-2xl font-heading font-bold text-medical-blue">
                        {event.year}
                      </span>
                      <div className={`w-2 h-2 rounded-full ${getTypeColor(event.type)}`} />
                    </div>
                    <h3 className="text-xl font-heading font-bold text-deep-navy dark:text-naval-white mb-2">
                      {event.title}
                    </h3>
                    <p className="text-charcoal-gray dark:text-naval-white/80 font-body">
                      {event.description}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;