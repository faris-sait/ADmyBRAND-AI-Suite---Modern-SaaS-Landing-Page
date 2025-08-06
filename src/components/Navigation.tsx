'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Menu, X, Brain, ChevronDown } from 'lucide-react';
import Button from './ui/Button';

const Navigation = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [isScrolled, setIsScrolled] = useState(false);

  const navigationItems = [
    { name: 'Features', href: '#features', section: 'features' },
    { name: 'Pricing', href: '#pricing', section: 'pricing' },
    { name: 'Testimonials', href: '#testimonials', section: 'testimonials' },
    { name: 'FAQ', href: '#faq', section: 'faq' },
    { name: 'Blog', href: '#blog', section: 'blog' },
    { name: 'Contact', href: '#contact', section: 'contact' }
  ];

  const searchableContent = [
    { title: 'AI-Powered Insights', section: 'features', description: 'Advanced machine learning algorithms for marketing insights' },
    { title: 'Precision Targeting', section: 'features', description: 'Reach the right audience at the right time' },
    { title: 'Automated Campaigns', section: 'features', description: 'Intelligent automation workflows for marketing' },
    { title: 'Advanced Analytics', section: 'features', description: 'Comprehensive dashboards and reports' },
    { title: 'Customer Journey Mapping', section: 'features', description: 'Visualize and optimize customer touchpoints' },
    { title: 'Data Security', section: 'features', description: 'Enterprise-grade security and compliance' },
    { title: 'Starter Plan', section: 'pricing', description: '$29/month - Perfect for small teams' },
    { title: 'Professional Plan', section: 'pricing', description: '$79/month - Advanced features for growing businesses' },
    { title: 'Enterprise Plan', section: 'pricing', description: '$199/month - Full suite for large organizations' },
    { title: 'Customer Reviews', section: 'testimonials', description: 'What our customers are saying' },
    { title: 'Frequently Asked Questions', section: 'faq', description: 'Common questions about our platform' },
    { title: 'Blog & Resources', section: 'blog', description: 'Latest insights and marketing strategies' },
    { title: 'Contact Us', section: 'contact', description: 'Get in touch with our team' },
    { title: 'Free Trial', section: 'pricing', description: 'Start your 14-day free trial' },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle search
  useEffect(() => {
    if (searchQuery.trim()) {
      const filtered = searchableContent.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(filtered);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  const handleNavClick = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      // For sections that might not have exact IDs, scroll to approximate positions
      const sectionMap: { [key: string]: number } = {
        'features': 800,
        'demo': 1600,
        'pricing': 2400,
        'testimonials': 3200,
        'faq': 4000,
        'blog': 4800,
        'contact': 5600
      };
      window.scrollTo({ top: sectionMap[section] || 0, behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
    setIsSearchOpen(false);
    setSearchQuery('');
  };

  const handleSearchResultClick = (section: string) => {
    handleNavClick(section);
  };

  const handleStartTrial = () => {
    const event = new CustomEvent('openFreeTrialModal');
    window.dispatchEvent(event);
  };

  const handleScheduleDemo = () => {
    const event = new CustomEvent('openDemoModal');
    window.dispatchEvent(event);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`
        fixed top-0 left-0 right-0 z-40 transition-all duration-300
        ${isScrolled 
          ? 'bg-white/90 backdrop-blur-lg border-b border-white/20 shadow-lg' 
          : 'bg-transparent'
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">ADmyBRAND</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navigationItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.section)}
                className="text-gray-700 hover:text-indigo-600 font-medium transition-colors"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Search and Actions */}
          <div className="flex items-center gap-4">
            {/* Search Button */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <Search className="w-5 h-5 text-gray-600" />
            </button>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-3">
              <Button variant="ghost" onClick={handleScheduleDemo}>
                Schedule Demo
              </Button>
              <Button variant="primary" onClick={handleStartTrial}>
                Start Free Trial
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-gray-600" />
              ) : (
                <Menu className="w-5 h-5 text-gray-600" />
              )}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <AnimatePresence>
          {isSearchOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="border-t border-gray-200 py-4"
            >
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search features, pricing, FAQ..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 pl-10 rounded-xl border-2 border-gray-200 focus:border-indigo-500 focus:outline-none"
                  autoFocus
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              </div>

              {/* Search Results */}
              {searchResults.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 bg-white rounded-xl border border-gray-200 shadow-lg max-h-64 overflow-y-auto"
                >
                  {searchResults.map((result, index) => (
                    <button
                      key={index}
                      onClick={() => handleSearchResultClick(result.section)}
                      className="w-full text-left px-4 py-3 hover:bg-gray-50 border-b border-gray-100 last:border-b-0 transition-colors"
                    >
                      <div className="font-medium text-gray-900">{result.title}</div>
                      <div className="text-sm text-gray-600">{result.description}</div>
                    </button>
                  ))}
                </motion.div>
              )}

              {searchQuery && searchResults.length === 0 && (
                <div className="mt-4 text-center text-gray-500 py-4">
                  No results found for "{searchQuery}"
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-gray-200 py-4"
            >
              <div className="space-y-4">
                {navigationItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.section)}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    {item.name}
                  </button>
                ))}
                <div className="pt-4 border-t border-gray-200 space-y-3">
                  <Button variant="ghost" onClick={handleScheduleDemo} className="w-full">
                    Schedule Demo
                  </Button>
                  <Button variant="primary" onClick={handleStartTrial} className="w-full">
                    Start Free Trial
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation;
