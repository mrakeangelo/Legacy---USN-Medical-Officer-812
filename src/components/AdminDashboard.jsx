import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiHome, FiUser, FiImage, FiClock, FiSettings, FiLogOut, FiUpload, FiEdit, FiTrash2 } = FiIcons;

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginForm, setLoginForm] = useState({ email: '', password: '' });

  const handleLogin = (e) => {
    e.preventDefault();
    // In a real app, you would authenticate with Supabase here
    if (loginForm.email === 'admin@navy.mil' && loginForm.password === 'admin123') {
      setIsAuthenticated(true);
    } else {
      alert('Invalid credentials');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setLoginForm({ email: '', password: '' });
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-deep-navy flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-xl p-8 shadow-2xl max-w-md w-full mx-4"
        >
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-medical-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⚕</span>
            </div>
            <h2 className="font-heading text-2xl font-bold text-deep-navy">
              Admin Dashboard
            </h2>
            <p className="text-charcoal-gray font-body mt-2">
              Sign in to manage the tribute website
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-charcoal-gray mb-2">
                Email
              </label>
              <input
                type="email"
                value={loginForm.email}
                onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
                className="w-full px-4 py-3 border border-charcoal-gray/20 rounded-lg focus:ring-2 focus:ring-medical-blue focus:border-transparent"
                placeholder="admin@navy.mil"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-charcoal-gray mb-2">
                Password
              </label>
              <input
                type="password"
                value={loginForm.password}
                onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                className="w-full px-4 py-3 border border-charcoal-gray/20 rounded-lg focus:ring-2 focus:ring-medical-blue focus:border-transparent"
                placeholder="••••••••"
                required
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-medical-blue hover:bg-medical-blue/90 text-white py-3 rounded-lg font-medium transition-colors duration-200"
            >
              Sign In
            </motion.button>
          </form>

          <div className="mt-6 text-center">
            <Link
              to="/"
              className="text-medical-blue hover:text-medical-blue/80 font-body text-sm transition-colors duration-200"
            >
              ← Back to Tribute Site
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  const tabs = [
    { id: 'overview', name: 'Overview', icon: FiHome },
    { id: 'timeline', name: 'Timeline', icon: FiClock },
    { id: 'gallery', name: 'Gallery', icon: FiImage },
    { id: 'testimonials', name: 'Testimonials', icon: FiUser },
    { id: 'capsule', name: 'Time Capsule', icon: FiClock },
    { id: 'settings', name: 'Settings', icon: FiSettings }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-6">
            <h2 className="font-heading text-2xl font-bold text-deep-navy">Dashboard Overview</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-body text-sm font-medium text-charcoal-gray">Total Visits</h3>
                    <p className="font-heading text-2xl font-bold text-deep-navy">1,247</p>
                  </div>
                  <div className="w-12 h-12 bg-medical-blue/10 rounded-full flex items-center justify-center">
                    <SafeIcon icon={FiUser} className="w-6 h-6 text-medical-blue" />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-body text-sm font-medium text-charcoal-gray">Photos</h3>
                    <p className="font-heading text-2xl font-bold text-deep-navy">48</p>
                  </div>
                  <div className="w-12 h-12 bg-gold-oak/10 rounded-full flex items-center justify-center">
                    <SafeIcon icon={FiImage} className="w-6 h-6 text-gold-oak" />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-body text-sm font-medium text-charcoal-gray">Testimonials</h3>
                    <p className="font-heading text-2xl font-bold text-deep-navy">23</p>
                  </div>
                  <div className="w-12 h-12 bg-medical-blue/10 rounded-full flex items-center justify-center">
                    <SafeIcon icon={FiUser} className="w-6 h-6 text-medical-blue" />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-body text-sm font-medium text-charcoal-gray">Time Capsule</h3>
                    <p className="font-heading text-2xl font-bold text-deep-navy">4</p>
                  </div>
                  <div className="w-12 h-12 bg-gold-oak/10 rounded-full flex items-center justify-center">
                    <SafeIcon icon={FiClock} className="w-6 h-6 text-gold-oak" />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="font-heading text-lg font-bold text-deep-navy mb-4">Recent Activity</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-sm">
                  <div className="w-2 h-2 bg-medical-blue rounded-full"></div>
                  <span className="text-charcoal-gray">New testimonial submitted by Dr. Sarah Williams</span>
                  <span className="text-charcoal-gray/60">2 hours ago</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <div className="w-2 h-2 bg-gold-oak rounded-full"></div>
                  <span className="text-charcoal-gray">Photo uploaded to Humanitarian Ops gallery</span>
                  <span className="text-charcoal-gray/60">1 day ago</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <div className="w-2 h-2 bg-medical-blue rounded-full"></div>
                  <span className="text-charcoal-gray">Timeline event updated</span>
                  <span className="text-charcoal-gray/60">3 days ago</span>
                </div>
              </div>
            </div>
          </div>
        );

      case 'timeline':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="font-heading text-2xl font-bold text-deep-navy">Timeline Management</h2>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-medical-blue hover:bg-medical-blue/90 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2"
              >
                <SafeIcon icon={FiUpload} className="w-4 h-4" />
                <span>Add Event</span>
              </motion.button>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="font-heading text-lg font-bold text-deep-navy mb-4">Timeline Events</h3>
                <div className="space-y-4">
                  {[
                    { year: '1995', title: 'Bachelor of Science - Biology', status: 'Published' },
                    { year: '1999', title: 'Doctor of Medicine', status: 'Published' },
                    { year: '2000', title: 'Commissioned as Naval Officer', status: 'Published' },
                    { year: '2003', title: 'Staff Physician', status: 'Draft' }
                  ].map((event, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border border-charcoal-gray/20 rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-medical-blue/10 rounded-full flex items-center justify-center">
                          <span className="font-bold text-medical-blue">{event.year}</span>
                        </div>
                        <div>
                          <h4 className="font-medium text-deep-navy">{event.title}</h4>
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            event.status === 'Published' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {event.status}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button className="p-2 hover:bg-charcoal-gray/10 rounded-lg transition-colors duration-200">
                          <SafeIcon icon={FiEdit} className="w-4 h-4 text-charcoal-gray" />
                        </button>
                        <button className="p-2 hover:bg-red-50 rounded-lg transition-colors duration-200">
                          <SafeIcon icon={FiTrash2} className="w-4 h-4 text-red-500" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="text-center py-12">
            <h2 className="font-heading text-2xl font-bold text-deep-navy mb-4">
              {tabs.find(tab => tab.id === activeTab)?.name} Management
            </h2>
            <p className="text-charcoal-gray font-body">
              This section is under development. More features coming soon.
            </p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-naval-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-charcoal-gray/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-medical-blue rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">⚕</span>
              </div>
              <h1 className="font-heading text-xl font-bold text-deep-navy">
                Admin Dashboard
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                to="/"
                className="text-charcoal-gray hover:text-medical-blue transition-colors duration-200 font-body"
              >
                View Site
              </Link>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleLogout}
                className="flex items-center space-x-2 text-charcoal-gray hover:text-red-500 transition-colors duration-200"
              >
                <SafeIcon icon={FiLogOut} className="w-4 h-4" />
                <span className="font-body">Logout</span>
              </motion.button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Sidebar */}
          <div className="w-64 flex-shrink-0">
            <nav className="bg-white rounded-lg shadow-lg p-4">
              <div className="space-y-2">
                {tabs.map((tab) => (
                  <motion.button
                    key={tab.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg font-body font-medium transition-all duration-200 ${
                      activeTab === tab.id
                        ? 'bg-medical-blue text-white shadow-lg'
                        : 'text-charcoal-gray hover:bg-medical-blue/10'
                    }`}
                  >
                    <SafeIcon icon={tab.icon} className="w-5 h-5" />
                    <span>{tab.name}</span>
                  </motion.button>
                ))}
              </div>
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;