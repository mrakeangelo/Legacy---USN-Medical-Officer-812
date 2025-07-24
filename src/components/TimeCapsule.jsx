import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiLock, FiUnlock, FiClock, FiHeart, FiUsers, FiStar, FiCalendar, FiX } = FiIcons;

const TimeCapsule = () => {
  const [unlockedLetters, setUnlockedLetters] = useState(new Set(['letter1']));
  const [selectedLetter, setSelectedLetter] = useState(null);

  const timeCapsuleLetters = [
    {
      id: 'letter1',
      title: 'To Future Navy Doctors',
      recipient: 'The Next Generation of Naval Physicians',
      unlockDate: '2024-01-01',
      isUnlocked: true,
      icon: FiStar,
      preview: 'A message of guidance and inspiration for those who will follow in the footsteps of naval medicine...',
      content: `My Dear Colleagues,

As I write this letter, I am filled with both pride and hope—pride in the legacy of naval medicine that we have inherited, and hope for the future that you will create.

The path you have chosen is not an easy one. You will face challenges that test not only your medical knowledge but your character, your resilience, and your commitment to service. There will be moments when you question your decisions, when the weight of responsibility feels overwhelming, and when the demands of military life seem incompatible with your calling as a healer.

In those moments, remember this: you are part of something greater than yourself. Every patient you treat, every sailor you care for, every life you touch is a thread in the tapestry of service that connects us all. Your white coat bears not just the stethoscope of healing, but the gold stripes of leadership and the anchor of unwavering commitment.

The Navy will ask much of you—deployments that take you from family, assignments that challenge your comfort zone, and responsibilities that extend far beyond the clinic. But it will also give you opportunities that civilian medicine cannot: the chance to serve your country, to lead in times of crisis, to be part of a brotherhood and sisterhood that spans generations.

My advice to you is simple: Never lose sight of why you became a physician. In the midst of military protocols and operational demands, remember that your primary mission is to heal. Be the steady hand in the storm, the calm voice in chaos, the beacon of hope when others lose their way.

Mentor those who come after you. Invest in the corpsmen who work beside you. Lead with compassion, serve with honor, and always remember that your greatest achievement will not be measured in promotions or awards, but in the lives you save and the healers you inspire.

The future of naval medicine rests in your capable hands. Carry it forward with pride.

With deepest respect and unwavering faith in your success,
CDR William A. Nguyen, MD`
    },
    {
      id: 'letter2',
      title: 'To My Family',
      recipient: 'Sarah, Michael, and Emily',
      unlockDate: '2025-06-15',
      isUnlocked: false,
      icon: FiHeart,
      preview: 'A personal message to the family who supported every step of the journey...',
      content: 'This letter will be unlocked on June 15, 2025...'
    },
    {
      id: 'letter3',
      title: 'To the Patients I Could Never Forget',
      recipient: 'Those Who Taught Me to Heal',
      unlockDate: '2025-12-25',
      isUnlocked: false,
      icon: FiUsers,
      preview: 'Remembering the patients who changed everything and shaped a career in medicine...',
      content: 'This letter will be unlocked on December 25, 2025...'
    },
    {
      id: 'letter4',
      title: 'Reflections on a Life of Service',
      recipient: 'Future Generations',
      unlockDate: '2026-05-30',
      isUnlocked: false,
      icon: FiClock,
      preview: 'Looking back on 23 years of service and the lessons learned along the way...',
      content: 'This letter will be unlocked on May 30, 2026...'
    }
  ];

  const openLetter = (letter) => {
    if (letter.isUnlocked || unlockedLetters.has(letter.id)) {
      setSelectedLetter(letter);
    }
  };

  const closeLetter = () => {
    setSelectedLetter(null);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section id="time-capsule" className="py-20 bg-naval-white dark:bg-deep-navy transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-deep-navy dark:text-naval-white mb-4">
            Time Capsule Letters
          </h2>
          <p className="text-lg text-charcoal-gray dark:text-naval-white/80 font-body max-w-2xl mx-auto">
            Personal messages sealed in time, to be opened on special dates—letters to family, future physicians, and unforgotten patients
          </p>
        </motion.div>

        {/* Time Capsule Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {timeCapsuleLetters.map((letter, index) => (
            <motion.div
              key={letter.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: letter.isUnlocked || unlockedLetters.has(letter.id) ? 1.02 : 1 }}
              className={`relative bg-white dark:bg-charcoal-gray rounded-xl p-6 shadow-lg transition-all duration-300 ${
                letter.isUnlocked || unlockedLetters.has(letter.id)
                  ? 'hover:shadow-xl cursor-pointer'
                  : 'opacity-75'
              }`}
              onClick={() => openLetter(letter)}
            >
              {/* Lock/Unlock Status */}
              <div className="absolute top-4 right-4">
                {letter.isUnlocked || unlockedLetters.has(letter.id) ? (
                  <div className="w-8 h-8 bg-gold-oak/20 rounded-full flex items-center justify-center">
                    <SafeIcon icon={FiUnlock} className="w-5 h-5 text-gold-oak" />
                  </div>
                ) : (
                  <div className="w-8 h-8 bg-charcoal-gray/20 rounded-full flex items-center justify-center">
                    <SafeIcon icon={FiLock} className="w-5 h-5 text-charcoal-gray" />
                  </div>
                )}
              </div>

              {/* Letter Icon */}
              <div className="w-16 h-16 bg-medical-blue/10 rounded-full flex items-center justify-center mb-4">
                <SafeIcon icon={letter.icon} className="w-8 h-8 text-medical-blue" />
              </div>

              {/* Letter Details */}
              <h3 className="font-heading text-xl font-bold text-deep-navy dark:text-naval-white mb-2">
                {letter.title}
              </h3>
              
              <p className="text-medical-blue font-body font-medium mb-3">
                {letter.recipient}
              </p>

              <div className="flex items-center space-x-2 mb-4">
                <SafeIcon icon={FiCalendar} className="w-4 h-4 text-charcoal-gray dark:text-naval-white/60" />
                <span className="text-sm text-charcoal-gray dark:text-naval-white/60 font-body">
                  {letter.isUnlocked || unlockedLetters.has(letter.id) 
                    ? 'Available Now' 
                    : `Unlocks ${formatDate(letter.unlockDate)}`
                  }
                </span>
              </div>

              <p className="text-charcoal-gray dark:text-naval-white/80 font-body text-sm leading-relaxed">
                {letter.preview}
              </p>

              {/* Read Button */}
              {(letter.isUnlocked || unlockedLetters.has(letter.id)) && (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-4 w-full bg-medical-blue hover:bg-medical-blue/90 text-white px-4 py-2 rounded-lg font-body font-medium transition-colors duration-200"
                >
                  Read Letter
                </motion.button>
              )}
            </motion.div>
          ))}
        </div>

        {/* Letter Modal */}
        <AnimatePresence>
          {selectedLetter && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
              onClick={closeLetter}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-white dark:bg-charcoal-gray rounded-xl max-w-4xl max-h-[90vh] overflow-y-auto p-8 shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-medical-blue/10 rounded-full flex items-center justify-center">
                      <SafeIcon icon={selectedLetter.icon} className="w-6 h-6 text-medical-blue" />
                    </div>
                    <div>
                      <h3 className="font-heading text-2xl font-bold text-deep-navy dark:text-naval-white">
                        {selectedLetter.title}
                      </h3>
                      <p className="text-medical-blue font-body font-medium">
                        {selectedLetter.recipient}
                      </p>
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={closeLetter}
                    className="w-8 h-8 bg-charcoal-gray/20 hover:bg-charcoal-gray/30 rounded-full flex items-center justify-center transition-colors duration-200"
                  >
                    <SafeIcon icon={FiX} className="w-5 h-5 text-charcoal-gray dark:text-naval-white" />
                  </motion.button>
                </div>

                {/* Letter Content */}
                <div className="prose prose-lg max-w-none">
                  <div className="bg-gradient-to-br from-medical-blue/5 to-deep-navy/5 dark:from-medical-blue/10 dark:to-deep-navy/10 rounded-lg p-6">
                    <pre className="font-body text-charcoal-gray dark:text-naval-white/90 leading-relaxed whitespace-pre-wrap">
                      {selectedLetter.content}
                    </pre>
                  </div>
                </div>

                {/* Footer */}
                <div className="mt-8 pt-6 border-t border-charcoal-gray/20 dark:border-naval-white/20">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <SafeIcon icon={FiUnlock} className="w-5 h-5 text-gold-oak" />
                      <span className="text-sm text-charcoal-gray dark:text-naval-white/60 font-body">
                        Letter opened and preserved for posterity
                      </span>
                    </div>
                    <div className="text-sm text-medical-blue font-body font-medium">
                      CDR William A. Nguyen, MD
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Time Capsule Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-br from-medical-blue/5 to-deep-navy/5 dark:from-medical-blue/10 dark:to-deep-navy/10 rounded-2xl p-8 md:p-12">
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-deep-navy dark:text-naval-white mb-4">
              Messages Across Time
            </h3>
            <p className="text-lg text-charcoal-gray dark:text-naval-white/80 font-body max-w-3xl mx-auto leading-relaxed">
              These letters represent the thoughts, wisdom, and love that transcend time. Some are available now, others will unlock on meaningful dates, creating a bridge between past service and future hope. Each message carries the essence of a life dedicated to healing and service.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TimeCapsule;