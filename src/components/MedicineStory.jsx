import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiHeart, FiCompass, FiUsers, FiStar } = FiIcons;

const MedicineStory = () => {
  const storyPoints = [
    {
      icon: FiHeart,
      title: "Healing in Uniform",
      content: "Every patient encounter was a reminder that medicine transcends rank and circumstance. Whether treating a young sailor's first deployment anxiety or managing a veteran's chronic condition, the white coat carried the same oath of healing."
    },
    {
      icon: FiCompass,
      title: "Leadership Through Service",
      content: "Command in the medical corps meant more than administrative duties—it meant being the steady hand that guides both medical decisions and human compassion, especially when lives hung in the balance."
    },
    {
      icon: FiUsers,
      title: "Mentorship Legacy",
      content: "The greatest privilege was watching young corpsmen grow into confident medical professionals, knowing that each lesson shared would ripple through countless future patient interactions."
    },
    {
      icon: FiStar,
      title: "Beyond the Clinic",
      content: "Medicine in the military taught me that healing extends beyond physical ailments—it's about restoring hope, building resilience, and creating environments where both patients and providers can thrive."
    }
  ];

  return (
    <section id="medicine-story" className="py-20 bg-gradient-to-br from-medical-blue/5 to-deep-navy/5 dark:from-medical-blue/10 dark:to-deep-navy/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-deep-navy dark:text-naval-white mb-4">
            Medicine in the Navy
          </h2>
          <p className="text-lg text-charcoal-gray dark:text-naval-white/80 font-body max-w-3xl mx-auto">
            Reflections on balancing medicine, military service, and humanity—a letter to the next generation of naval physicians
          </p>
        </motion.div>

        {/* Main Story Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white dark:bg-charcoal-gray rounded-xl p-8 md:p-12 shadow-xl mb-16"
        >
          <div className="prose prose-lg max-w-none">
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-16 h-16 bg-medical-blue/10 rounded-full flex items-center justify-center">
                <span className="text-2xl">⚕</span>
              </div>
              <div>
                <h3 className="font-heading text-2xl font-bold text-deep-navy dark:text-naval-white mb-2">
                  A Letter to Future Naval Physicians
                </h3>
                <p className="text-medical-blue font-body font-medium">
                  CDR William A. Nguyen, MD
                </p>
              </div>
            </div>

            <div className="space-y-6 text-charcoal-gray dark:text-naval-white/90 font-body leading-relaxed">
              <p className="text-lg">
                <span className="font-semibold text-medical-blue">Dear Colleagues,</span>
              </p>
              
              <p>
                When I first put on the white coat with gold stripes, I thought I understood what it meant to be a Navy physician. I believed it was about bringing medical expertise to military settings, treating service members, and maintaining readiness. I was only partially right.
              </p>

              <p>
                The truth I discovered over twenty-three years of service is that being a naval physician means embodying a unique intersection of healing, leadership, and service that exists nowhere else in medicine. We are not just doctors who happen to serve in the military—we are healers who understand that our mission extends far beyond the clinical encounter.
              </p>

              <p>
                In the field hospitals of Afghanistan, aboard hospital ships in the Pacific, and in the quiet moments of a base clinic, I learned that our patients look to us not just for medical care, but for the steady confidence that comes from knowing their physician has chosen to serve alongside them. This shared commitment creates a bond that transforms the practice of medicine.
              </p>

              <p>
                To those who will follow: Remember that every uniform you wear into the examination room carries the weight of those who served before you. Every decision you make reflects not just your medical training, but your commitment to something greater than yourself. And every life you touch—whether patient, colleague, or mentee—becomes part of a legacy that extends far beyond your years of service.
              </p>

              <p className="font-semibold text-medical-blue">
                Serve with honor, heal with compassion, and lead with integrity.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Story Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {storyPoints.map((point, index) => (
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
                <div className="w-12 h-12 bg-medical-blue/10 rounded-full flex items-center justify-center">
                  <SafeIcon icon={point.icon} className="w-6 h-6 text-medical-blue" />
                </div>
                <h3 className="font-heading text-xl font-bold text-deep-navy dark:text-naval-white">
                  {point.title}
                </h3>
              </div>
              <p className="text-charcoal-gray dark:text-naval-white/80 font-body leading-relaxed">
                {point.content}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MedicineStory;