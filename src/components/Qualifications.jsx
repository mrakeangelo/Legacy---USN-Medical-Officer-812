import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiAward, FiBook, FiStar, FiShield, FiTarget } = FiIcons;

const Qualifications = () => {
  const [activeTab, setActiveTab] = useState('awards');

  const tabs = [
    { id: 'awards', name: 'Awards & Medals', icon: FiAward },
    { id: 'education', name: 'Education & Certifications', icon: FiBook },
    { id: 'qualifications', name: 'Military Qualifications', icon: FiShield },
    { id: 'achievements', name: 'Professional Achievements', icon: FiStar }
  ];

  const awards = [
    {
      name: 'Navy Achievement Medal',
      description: 'For professional achievement and meritorious service',
      ribbon: 'bg-gradient-to-r from-blue-600 to-yellow-400',
      year: '2018'
    },
    {
      name: 'Navy Commendation Medal',
      description: 'For sustained superior performance of duty',
      ribbon: 'bg-gradient-to-r from-green-600 to-white',
      year: '2015'
    },
    {
      name: 'Humanitarian Service Medal',
      description: 'For participation in humanitarian operations',
      ribbon: 'bg-gradient-to-r from-orange-500 to-blue-500',
      year: '2012'
    },
    {
      name: 'National Defense Service Medal',
      description: 'For honorable service during national emergency',
      ribbon: 'bg-gradient-to-r from-yellow-400 to-red-500',
      year: '2001'
    },
    {
      name: 'Global War on Terrorism Service Medal',
      description: 'For service in support of operations against terrorism',
      ribbon: 'bg-gradient-to-r from-blue-800 to-yellow-300',
      year: '2003'
    }
  ];

  const education = [
    {
      degree: 'Doctor of Medicine (MD)',
      institution: 'Uniformed Services University of the Health Sciences',
      year: '1999',
      details: 'Graduated Magna Cum Laude'
    },
    {
      degree: 'Bachelor of Science in Biology',
      institution: 'University of California, San Diego',
      year: '1995',
      details: 'Phi Beta Kappa Honor Society'
    },
    {
      degree: 'Board Certification - Internal Medicine',
      institution: 'American Board of Internal Medicine',
      year: '2003',
      details: 'Recertified 2013'
    },
    {
      degree: 'Advanced Cardiac Life Support (ACLS)',
      institution: 'American Heart Association',
      year: '2000',
      details: 'Instructor Level Certification'
    },
    {
      degree: 'Basic Life Support (BLS)',
      institution: 'American Heart Association',
      year: '2000',
      details: 'Healthcare Provider Level'
    }
  ];

  const qualifications = [
    {
      name: 'Surface Warfare Medical Officer',
      description: 'Qualified to serve as medical officer aboard surface vessels',
      badge: '⚓',
      year: '2004'
    },
    {
      name: 'Expeditionary Medical Officer',
      description: 'Qualified for forward deployed medical operations',
      badge: '🏥',
      year: '2008'
    },
    {
      name: 'Command at Sea',
      description: 'Qualified for command of naval medical facilities',
      badge: '⭐',
      year: '2014'
    },
    {
      name: 'Joint Professional Military Education',
      description: 'Advanced military education for joint operations',
      badge: '🎓',
      year: '2012'
    }
  ];

  const achievements = [
    {
      title: 'Department Head of the Year',
      organization: 'Naval Medical Center Portsmouth',
      year: '2020',
      description: 'Recognized for exceptional leadership and patient care outcomes'
    },
    {
      title: 'Medical Corps Excellence Award',
      organization: 'Bureau of Medicine and Surgery',
      year: '2018',
      description: 'Outstanding contribution to naval medicine and medical education'
    },
    {
      title: 'Physician of the Year',
      organization: 'Naval Hospital Camp Pendleton',
      year: '2008',
      description: 'Exceptional clinical performance and patient advocacy'
    },
    {
      title: 'Humanitarian Service Recognition',
      organization: 'Pacific Partnership Program',
      year: '2005',
      description: 'Outstanding service during humanitarian medical missions'
    }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'awards':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white dark:bg-charcoal-gray rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`w-16 h-4 rounded ${award.ribbon} shadow-md`} />
                  <span className="text-sm font-body font-medium text-medical-blue">
                    {award.year}
                  </span>
                </div>
                <h3 className="font-heading text-xl font-bold text-deep-navy dark:text-naval-white mb-2">
                  {award.name}
                </h3>
                <p className="text-charcoal-gray dark:text-naval-white/80 font-body">
                  {award.description}
                </p>
              </motion.div>
            ))}
          </div>
        );
      
      case 'education':
        return (
          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-charcoal-gray rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex-1">
                    <h3 className="font-heading text-xl font-bold text-deep-navy dark:text-naval-white mb-2">
                      {edu.degree}
                    </h3>
                    <p className="text-medical-blue font-body font-medium mb-1">
                      {edu.institution}
                    </p>
                    <p className="text-charcoal-gray dark:text-naval-white/80 font-body">
                      {edu.details}
                    </p>
                  </div>
                  <div className="mt-4 md:mt-0 md:ml-6">
                    <span className="inline-block bg-gold-oak text-deep-navy px-3 py-1 rounded-full font-body font-bold text-sm">
                      {edu.year}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        );
      
      case 'qualifications':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {qualifications.map((qual, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white dark:bg-charcoal-gray rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-medical-blue/10 rounded-full flex items-center justify-center">
                    <span className="text-2xl">{qual.badge}</span>
                  </div>
                  <span className="text-sm font-body font-medium text-medical-blue">
                    {qual.year}
                  </span>
                </div>
                <h3 className="font-heading text-xl font-bold text-deep-navy dark:text-naval-white mb-2">
                  {qual.name}
                </h3>
                <p className="text-charcoal-gray dark:text-naval-white/80 font-body">
                  {qual.description}
                </p>
              </motion.div>
            ))}
          </div>
        );
      
      case 'achievements':
        return (
          <div className="space-y-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-charcoal-gray rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gold-oak/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <SafeIcon icon={FiStar} className="w-6 h-6 text-gold-oak" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="font-heading text-xl font-bold text-deep-navy dark:text-naval-white">
                        {achievement.title}
                      </h3>
                      <span className="text-sm font-body font-medium text-medical-blue">
                        {achievement.year}
                      </span>
                    </div>
                    <p className="text-medical-blue font-body font-medium mb-2">
                      {achievement.organization}
                    </p>
                    <p className="text-charcoal-gray dark:text-naval-white/80 font-body">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <section id="qualifications" className="py-20 bg-naval-white dark:bg-deep-navy transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-deep-navy dark:text-naval-white mb-4">
            Qualifications & Honors
          </h2>
          <p className="text-lg text-charcoal-gray dark:text-naval-white/80 font-body max-w-2xl mx-auto">
            A comprehensive record of military awards, medical certifications, and professional achievements
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-body font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-medical-blue text-white shadow-lg'
                  : 'bg-white dark:bg-charcoal-gray text-charcoal-gray dark:text-naval-white hover:bg-medical-blue/10 dark:hover:bg-medical-blue/20'
              }`}
            >
              <SafeIcon icon={tab.icon} className="w-5 h-5" />
              <span className="hidden sm:block">{tab.name}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {renderContent()}
        </motion.div>
      </div>
    </section>
  );
};

export default Qualifications;