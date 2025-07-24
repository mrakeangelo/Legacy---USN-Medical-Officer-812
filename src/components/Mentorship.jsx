import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiUsers, FiTrendingUp, FiHeart, FiStar } = FiIcons;

const Mentorship = () => {
  const mentorshipStats = [
    {
      number: '150+',
      label: 'Medical Professionals Mentored',
      icon: FiUsers,
      description: 'Residents, corpsmen, and nurses guided through their careers'
    },
    {
      number: '23',
      label: 'Future Navy Physicians',
      icon: FiStar,
      description: 'Mentees who became commissioned medical officers'
    },
    {
      number: '8',
      label: 'Department Heads',
      icon: FiTrendingUp,
      description: 'Former mentees now in leadership positions'
    },
    {
      number: '∞',
      label: 'Lives Impacted',
      icon: FiHeart,
      description: 'Through the ripple effect of quality mentorship'
    }
  ];

  const mentorshipStories = [
    {
      name: 'Dr. Amanda Chen, MD',
      role: 'Lieutenant Commander, Navy Medical Corps',
      story: 'CDR Nguyen saw potential in me when I was just a struggling resident. His patient guidance and unwavering support helped me find my confidence as a physician. Today, I serve as Department Head of Emergency Medicine at Naval Medical Center San Diego, and I try to mentor others the way he mentored me.',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
    },
    {
      name: 'HM1 Marcus Johnson',
      role: 'Senior Hospital Corpsman, now RN',
      story: 'I was a young corpsman when I first worked with Dr. Nguyen. He treated me like a colleague, not just an enlisted sailor. He encouraged me to pursue my nursing degree and wrote letters of recommendation. His belief in me changed my entire career trajectory.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
    },
    {
      name: 'Dr. Sarah Williams, MD',
      role: 'Civilian Emergency Physician',
      story: 'During my internal medicine residency, CDR Nguyen taught me that being a physician is about more than medical knowledge—it\'s about leadership, compassion, and service. Even though I left the military, the lessons he taught me guide my practice every day.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b9e61e52?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
    }
  ];

  const mentorshipPrinciples = [
    {
      title: 'Lead by Example',
      description: 'Demonstrate the values and behaviors you want to see in others',
      icon: FiStar
    },
    {
      title: 'Invest in People',
      description: 'Take time to understand individual strengths and growth opportunities',
      icon: FiUsers
    },
    {
      title: 'Create Opportunities',
      description: 'Open doors and advocate for those you mentor',
      icon: FiTrendingUp
    },
    {
      title: 'Show Genuine Care',
      description: 'Mentorship is about the person, not just their professional development',
      icon: FiHeart
    }
  ];

  return (
    <section id="mentorship" className="py-20 bg-gradient-to-br from-medical-blue/5 to-deep-navy/5 dark:from-medical-blue/10 dark:to-deep-navy/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-deep-navy dark:text-naval-white mb-4">
            Mentorship Impact
          </h2>
          <p className="text-lg text-charcoal-gray dark:text-naval-white/80 font-body max-w-2xl mx-auto">
            Building the next generation of naval medical professionals through guidance, support, and inspiration
          </p>
        </motion.div>

        {/* Mentorship Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {mentorshipStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-charcoal-gray rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
            >
              <div className="w-16 h-16 bg-medical-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <SafeIcon icon={stat.icon} className="w-8 h-8 text-medical-blue" />
              </div>
              <h3 className="font-heading text-3xl font-bold text-deep-navy dark:text-naval-white mb-2">
                {stat.number}
              </h3>
              <h4 className="font-body text-lg font-semibold text-medical-blue mb-2">
                {stat.label}
              </h4>
              <p className="text-charcoal-gray dark:text-naval-white/80 font-body text-sm">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Mentorship Stories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h3 className="font-heading text-2xl md:text-3xl font-bold text-deep-navy dark:text-naval-white text-center mb-12">
            Stories from Those He Mentored
          </h3>
          
          <div className="space-y-8">
            {mentorshipStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } items-center gap-8`}
              >
                <div className="flex-shrink-0">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-32 h-32 rounded-full object-cover shadow-lg"
                  />
                </div>
                
                <div className="flex-1">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-white dark:bg-charcoal-gray rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="mb-4">
                      <h4 className="font-heading text-xl font-bold text-deep-navy dark:text-naval-white">
                        {story.name}
                      </h4>
                      <p className="text-medical-blue font-body font-medium">
                        {story.role}
                      </p>
                    </div>
                    <blockquote className="text-charcoal-gray dark:text-naval-white/90 font-body italic leading-relaxed">
                      "{story.story}"
                    </blockquote>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mentorship Principles */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="font-heading text-2xl md:text-3xl font-bold text-deep-navy dark:text-naval-white text-center mb-12">
            His Mentorship Philosophy
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mentorshipPrinciples.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white dark:bg-charcoal-gray rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gold-oak/20 rounded-full flex items-center justify-center">
                    <SafeIcon icon={principle.icon} className="w-6 h-6 text-gold-oak" />
                  </div>
                  <h4 className="font-heading text-xl font-bold text-deep-navy dark:text-naval-white">
                    {principle.title}
                  </h4>
                </div>
                <p className="text-charcoal-gray dark:text-naval-white/80 font-body leading-relaxed">
                  {principle.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-medical-blue/10 dark:bg-medical-blue/20 rounded-2xl p-8 md:p-12">
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-deep-navy dark:text-naval-white mb-4">
              "The greatest legacy a physician can leave is not in the patients they treat, but in the healers they inspire."
            </h3>
            <p className="text-lg text-charcoal-gray dark:text-naval-white/80 font-body italic">
              — CDR William A. Nguyen, MD
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Mentorship;