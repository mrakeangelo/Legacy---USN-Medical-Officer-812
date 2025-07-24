import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import MedicineStory from './components/MedicineStory';
import PhotoGallery from './components/PhotoGallery';
import Testimonials from './components/Testimonials';
import Qualifications from './components/Qualifications';
import Mentorship from './components/Mentorship';
import TimeCapsule from './components/TimeCapsule';
import Footer from './components/Footer';
import AdminDashboard from './components/AdminDashboard';
import ScrollProgress from './components/ScrollProgress';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <Router>
      <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
        <Routes>
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/" element={
            <div className="bg-naval-white dark:bg-deep-navy transition-colors duration-300">
              <ScrollProgress />
              <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
              <motion.main
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <Hero />
                <Timeline />
                <MedicineStory />
                <PhotoGallery />
                <Testimonials />
                <Qualifications />
                <Mentorship />
                <TimeCapsule />
              </motion.main>
              <Footer />
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;